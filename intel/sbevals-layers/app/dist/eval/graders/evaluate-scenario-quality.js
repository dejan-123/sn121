"use strict";
// LLM judge for scenario-specific quality scoring.
//
// Supports two modes:
//
// 1. GENERIC (domain-agnostic): criterion descriptions are provided in
//    ground_truth.metadata.rubric_descriptions — a dict mapping criterion_id
//    to a human-readable description. Works for any domain. The construction
//    pipeline (sn121-suite-builder) uses this mode.
//
// 2. LEGACY (SBC9 back-compat): when rubric_descriptions is absent, falls
//    back to hardcoded A/B/C/D customer-email criteria from SBC9. This
//    keeps existing SBC9 datasets working without changes.
//
// Inputs the grader needs from the sample's ground_truth.metadata:
//   - scenario_type:          string (category label, e.g. "A" or "standard_apology")
//   - rubric_weights:         { criterion_id: weight, ... }
//   - rubric_descriptions:    { criterion_id: description, ... } (optional — generic mode)
//   - prohibited_moves:       string[] (optional — deterministic penalty check)
// And from ground_truth.output:
//   - reference output: anchoring example for the LLM judge
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeWeightedScores = computeWeightedScores;
exports.makeEvaluateScenarioQuality = makeEvaluateScenarioQuality;
const factory_1 = require("../agent/providers/factory");
const tool_judge_1 = require("./tool-judge");
const judge_input_1 = require("./judge-input");
const dataset_1 = require("../dataset");
const judge_feedback_1 = require("./judge-feedback");
// Legacy SBC9 criterion descriptions (customer email domain only).
// Used as fallback when ground_truth.metadata.rubric_descriptions is absent.
// Mirrors skill_evaluation.py:_RUBRIC_DESCRIPTIONS from the original validator.
const LEGACY_SBC9_DESCRIPTIONS = {
    A: {
        A1_specific_impact: "Mentions the specific quantified harm from the customer's message. Generic 'we understand this was difficult' = 0. One specific = 0.5. Both impact AND stakes = 1.0.",
        A2_accountability: "Takes direct responsibility. Blames engineering/vendors = 0. Neutral = 0.5. Direct first-person = 1.0.",
        A3_concrete_action: "Names specific actions (credit, post-mortem, CSM). 'We're working on it' = 0.3 max.",
        A4_retention_gesture: "Offers credit/exec time/review within believable policy. Over-promise caps at 0.5. No gesture = 0.",
        A5_next_steps: "Specific timeline + named owner. Vague = 0.3 max.",
        A6_tone: "Empathetic + accountable, not defensive. 'Sorry you feel that way' = 0. Over-apology = 0.5.",
        A7_voice_and_length: "Named signer, 150-400 words, not corporate boilerplate.",
    },
    B: {
        B1_clear_confirmation: "States explicitly what action is being taken. Vague = 0. Specific confirmation = 1.0.",
        B2_warm_not_grovelling: "Acknowledges request without grovelling. Over-apologizing for routine request = 0.",
        B3_timing_and_mechanism: "Explains WHEN and HOW the change takes effect. Missing both = 0.",
        B4_next_interaction_clear: "Makes clear whether follow-up is needed and who to contact.",
        B5_no_upsell: "Stays focused on the ask. Upsell/survey attempt = 0.",
        B6_personalization: "References customer's stated reason specifically. Generic = 0.3.",
        B7_voice_and_length: "Named signer, 120-300 words.",
    },
    C: {
        C1_clear_early_no: "Decline is clear and early. Buried or weaselled = 0. Clear firm no = 1.0.",
        C2_rationale_no_jargon: "Explains WHY in plain terms. Jargon or no explanation = 0.",
        C3_alternatives_in_power: "Offers ≥1 alternative/workaround within policy. Zero = 0. Real alternative + how = 1.0.",
        C4_empathetic_not_dismissive: "Acknowledges customer's goal. Dismissive/patronising = 0.",
        C5_no_over_apologizing: "Doesn't grovel for holding policy.",
        C6_door_open_appropriately: "Invites future contact without promising reversal. Door-slam = 0.",
        C7_voice_and_length: "Named signer, 150-350 words.",
    },
    D: {
        D1_explicit_correction: "States clearly what the actual situation is. Avoids correction = 0. Fuzzy = 0.3. Clear = 1.0.",
        D2_customer_frame: "Uses customer's language. Internal jargon = 0.",
        D3_no_condescension: "Any subtle condescension scores 0.5 or below. Strict grading.",
        D4_evidence_or_verify_path: "Offers a way to verify. None = 0.3 max.",
        D5_confirms_shared_understanding: "Invites confirmation or follow-up. Pure info-dump = 0.",
        D6_constructive_next_step: "Names a specific constructive next step.",
        D7_voice_and_length: "Named signer, 150-350 words.",
    },
};
const SCENARIO_QUALITY_PROMPT_TMPL = `You are evaluating whether an agent's output meets the quality bar for a specific scenario. You will see:
1. The scenario prompt (what the agent was asked to do)
2. A reference "good" output (for anchoring — not a required shape)
3. The agent's actual output
4. The rubric criteria (weighted) for this scenario type
5. Notes: prohibited moves trigger deterministic penalties separately — do not apply them in your scoring here

Score each criterion 0.0, 0.25, 0.5, 0.75, or 1.0 based only on the quality of the agent's output against that criterion. The reference output is NOT a required format — only an example of how this bar can be met. Agent output can meet the bar in a different shape.

--- SCENARIO PROMPT ---
{scenario_prompt}

--- REFERENCE "GOOD" OUTPUT (anchoring example) ---
{reference_email}

--- AGENT'S ACTUAL OUTPUT ---
{agent_email}

--- RUBRIC CRITERIA ({scenario_type}) ---
{criteria_text}

Respond with JSON only. The top-level key must be "scores", containing a dict from criterion_id to score (0.0, 0.25, 0.5, 0.75, or 1.0; use intermediate values when quality genuinely sits between anchors). Also include "rationale" with 2-3 sentences of overall justification.
{truncation_instruction}
Example:
{
    "scores": {"criterion_1": 1.0, "criterion_2": 0.5},
    "rationale": "..."
}

Return your scores now:`;
// Extra judge instruction, inserted ONLY when the agent generation was cut
// at the token cap. Scoring stays identical — the judge still scores every
// criterion normally — but it additionally attributes which criteria it
// marked down because content is missing/cut off rather than weak.
const TRUNCATION_INSTRUCTION = `
The agent's output was cut off at a hard token limit before it finished (this is visible as an abrupt ending). Score every criterion normally — an incomplete output does not earn leniency. But ALSO include a key "truncation_affected": a list of the criterion_ids (possibly empty) whose score you lowered specifically because the relevant content is missing or cut off mid-generation, as opposed to present but weak.
`;
// Deterministic penalty patterns. -0.1 each, applied AFTER the LLM
// scoring. Matches the Python _PAT_CHECKS list in semantics, with TS
// regex syntax. Only run when prohibited_moves metadata is non-empty
// (i.e. the suite author opted-in to this side of the grader).
const PENALTY_PATTERNS = [
    { pat: /we'?re sorry you feel that way/i, label: "'sorry you feel that way'" },
    {
        pat: /will never happen again|this won'?t happen again/i,
        label: "absolute 'never again' promise",
    },
    { pat: /\bunfortunately\b.*\bunfortunately\b/i, label: "'unfortunately' appears >1x" },
    {
        pat: /as\s+(i|we)\s+(?:have\s+)?explained|as\s+(?:already|previously)\s+stated|per\s+our\s+earlier/i,
        label: "dismissive 'as I explained / as previously stated'",
    },
    // Loose heuristic: 'actually' + capitalized next word, excluding 'a'/'the'.
    {
        pat: /\bactually\b(?!\s+a\b|\s+the\b)(?=\s+[A-Z])/,
        label: "dismissive 'actually'",
    },
    { pat: /please\s+(?:do\s+not|don'?t)\s+contact\s+us/i, label: "hard door-slam" },
];
// Pure scoring split, extracted for testability. Missing criteria default
// to 0.5 and non-finite weights are skipped — exactly the legacy behavior
// for baseScore.
function computeWeightedScores(rubricWeights, scores, truncationAffected = []) {
    const affectedSet = new Set(truncationAffected.filter((cid) => Object.prototype.hasOwnProperty.call(rubricWeights, cid)));
    let weighted = 0.0;
    let totalWeight = 0.0;
    let contentWeighted = 0.0;
    let contentWeight = 0.0;
    for (const [cid, weightVal] of Object.entries(rubricWeights)) {
        const rawScore = scores[cid];
        const s = typeof rawScore === "number" ? rawScore : Number(rawScore);
        const score = Number.isFinite(s) ? Math.max(0, Math.min(1, s)) : 0.5;
        const weight = Number(weightVal);
        if (!Number.isFinite(weight))
            continue;
        weighted += score * weight;
        totalWeight += weight;
        if (!affectedSet.has(cid)) {
            contentWeighted += score * weight;
            contentWeight += weight;
        }
    }
    const baseScore = totalWeight > 0 ? weighted / totalWeight : 0.5;
    const contentScore = affectedSet.size > 0 && contentWeight > 0 ? contentWeighted / contentWeight : null;
    return { baseScore, contentScore, affected: [...affectedSet] };
}
function makeEvaluateScenarioQuality(deps) {
    return async (ctx) => {
        let data;
        try {
            data = JSON.parse(ctx.submission);
        }
        catch {
            return { score: 0.0, rationale: "Could not parse submission" };
        }
        const agentOutput = data?.final_email ?? "";
        if (!agentOutput)
            return { score: 0.0, rationale: "Agent produced no output" };
        // Pull metadata + reference from ground_truth (string-encoded JSON or
        // already-parsed object — same code path as the Python helper).
        const gt = (0, dataset_1.parseGroundTruth)(ctx.sample.ground_truth);
        const meta = gt && typeof gt === "object" && !Array.isArray(gt)
            ? gt.metadata ?? {}
            : {};
        const referenceEmail = gt && typeof gt === "object" && !Array.isArray(gt) && typeof gt.output === "string"
            ? gt.output
            : "";
        const scenarioType = typeof meta.scenario_type === "string" ? meta.scenario_type : "A";
        const rubricWeights = (meta.rubric_weights && typeof meta.rubric_weights === "object"
            ? meta.rubric_weights
            : {});
        const prohibitedMoves = (Array.isArray(meta.prohibited_moves) ? meta.prohibited_moves : []);
        // Resolve criterion descriptions. Priority:
        // 1. ground_truth.metadata.rubric_descriptions (generic, any domain)
        // 2. Legacy hardcoded A/B/C/D descriptions (SBC9 back-compat)
        // 3. "(no description)" fallback
        const customDescriptions = meta.rubric_descriptions && typeof meta.rubric_descriptions === "object"
            ? meta.rubric_descriptions
            : null;
        const legacyDescriptions = LEGACY_SBC9_DESCRIPTIONS[scenarioType] ?? {};
        const descriptions = customDescriptions ?? legacyDescriptions;
        const criteriaLines = Object.entries(rubricWeights).map(([cid, weight]) => `- ${cid} (weight ${weight}): ${descriptions[cid] ?? "(no description)"}`);
        const criteriaText = criteriaLines.join("\n");
        const scenarioPrompt = typeof ctx.sample.input === "string" ? ctx.sample.input : ctx.sample.input.join("\n");
        const truncated = ctx.trajectory?.finish_reason === "max_tokens";
        const prompt = SCENARIO_QUALITY_PROMPT_TMPL.replace("{scenario_prompt}", scenarioPrompt.slice(0, 3000))
            .replace("{reference_email}", (0, judge_input_1.windowForJudge)(referenceEmail, judge_input_1.QUALITY_JUDGE_OUTPUT_MAX_CHARS))
            .replace("{agent_email}", (0, judge_input_1.windowForJudge)(agentOutput, judge_input_1.QUALITY_JUDGE_OUTPUT_MAX_CHARS))
            .replace(/\{scenario_type\}/g, scenarioType)
            .replace("{criteria_text}", criteriaText)
            .replace("{truncation_instruction}", truncated ? TRUNCATION_INSTRUCTION : "");
        // Judge model precedence (resolveToolJudge): suite-baked `model` on this
        // grader (DISCLOSED, like the rubric grader) → SKILL_USE_JUDGE_* env →
        // default openai/gpt-5.1. Symmetric with evaluate_skill_use — both are
        // weighted quality graders that a challenge may pin to a cheaper per-sample
        // judge in the suite, distinct from the hidden anti-gaming pre-gate judge.
        const { provider: judgeProvider, model: judgeModel } = (0, tool_judge_1.resolveToolJudge)(ctx.spec);
        let raw;
        let judgeUsage;
        try {
            const judge = (0, factory_1.makeProvider)(judgeProvider, deps.cfg);
            const result = await judge.judge({
                prompt,
                model: judgeModel,
                temperature: 0,
                timeoutMs: 60_000,
            });
            raw = result.raw;
            judgeUsage = result.usage;
        }
        catch (err) {
            // Fallback: 0.5. Matches Python "Fallback score (LLM unavailable)".
            // We deliberately don't try to compute a heuristic score here —
            // unlike evaluate_skill_use the per-criterion structure has no
            // reasonable approximation without a model.
            return {
                score: 0.5,
                rationale: `Fallback score (LLM unavailable): ${err.message}`,
            };
        }
        // Parse the JSON response. Tolerate code-fence wrapping.
        let parsed = null;
        try {
            const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
            const candidate = fenced ? fenced[1] : raw;
            const m = candidate.match(/\{[\s\S]*\}/);
            if (m)
                parsed = JSON.parse(m[0]);
        }
        catch {
            // fall through
        }
        const scores = parsed?.scores;
        if (!scores || typeof scores !== "object") {
            return { score: 0.5, rationale: "Judge returned non-dict scores", usage: judgeUsage };
        }
        // Weighted sum across the suite-author-supplied weights. Missing
        // criteria default to 0.5 (matches Python). Unknown weights default
        // to 0 (i.e. ignored — only weights the suite explicitly sets count).
        // On truncated runs the judge also attributes which criteria the cutoff
        // hit; the split's contentScore is ADVISORY ONLY (see GradeDetail).
        const truncationAffected = truncated && Array.isArray(parsed?.truncation_affected)
            ? parsed.truncation_affected.filter((v) => typeof v === "string")
            : [];
        const split = computeWeightedScores(rubricWeights, scores, truncationAffected);
        const baseScore = split.baseScore;
        // Deterministic prohibited-move penalties. Only runs when the suite
        // author populated metadata.prohibited_moves (the Python check is
        // `if any(p in prohibited_moves for p in prohibited_moves)` —
        // equivalent to `if prohibited_moves` for non-empty arrays).
        let penalties = 0.0;
        const triggered = [];
        if (prohibitedMoves.length > 0) {
            const outputLower = agentOutput.toLowerCase();
            for (const { pat, label } of PENALTY_PATTERNS) {
                if (pat.test(outputLower)) {
                    penalties += 0.1;
                    triggered.push(label);
                }
            }
        }
        const finalScore = Math.max(0.0, Math.min(1.0, baseScore - penalties));
        const rationaleParts = [];
        // Deterministic visibility note, never a score change: leniency for
        // truncation would let a miner blow the token cap on purpose to shield
        // weak trailing sections. Analyses use this to separate "cut off" from
        // "analytically weak" when reading low criterion scores. The advisory
        // content_score (criteria the cutoff did NOT hit) rides along in
        // `detail` for machine consumers and here for human readers.
        if (truncated) {
            const advisory = split.contentScore !== null
                ? ` — content-only advisory=${split.contentScore.toFixed(3)} over unaffected criteria (${split.affected.join(", ")} attributed to the cap)`
                : "";
            rationaleParts.push(`[output truncated at the token cap — missing-section scores may reflect the cap, not the skill${advisory}]`);
        }
        const judgeRationale = typeof parsed?.rationale === "string" ? parsed.rationale : "";
        if (judgeRationale)
            rationaleParts.push(judgeRationale.slice(0, 300));
        if (triggered.length > 0) {
            rationaleParts.push(`Prohibited-move penalties: ${triggered.join(", ")} (−${penalties.toFixed(2)})`);
        }
        rationaleParts.push(`Base=${baseScore.toFixed(3)}, penalties=${penalties.toFixed(2)}, final=${finalScore.toFixed(3)}`);
        // Miner-facing note: counts over the weighted criteria only. The
        // criterion ids and descriptions come from the sealed dataset, so they
        // are never named (judge-feedback.ts).
        const criterionScores = Object.entries(rubricWeights)
            .filter(([, w]) => Number(w) > 0)
            .map(([cid]) => {
            const v = scores[cid];
            const n = typeof v === "number" ? v : Number(v);
            return Number.isFinite(n) ? n : 0.5;
        });
        const feedback = (0, judge_feedback_1.countFeedback)(criterionScores, "scenario criteria");
        return {
            score: Math.round(finalScore * 100000) / 100000,
            rationale: rationaleParts.join(" | ").slice(0, 600),
            ...(feedback ? { feedback } : {}),
            usage: judgeUsage,
            ...(truncated
                ? {
                    detail: {
                        truncated: true,
                        ...(split.contentScore !== null
                            ? { content_score: Math.round(split.contentScore * 100000) / 100000 }
                            : {}),
                        truncation_affected: split.affected,
                    },
                }
                : {}),
        };
    };
}
//# sourceMappingURL=evaluate-scenario-quality.js.map