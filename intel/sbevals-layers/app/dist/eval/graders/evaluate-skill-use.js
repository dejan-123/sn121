"use strict";
// LLM judge — scores whether a skill genuinely TAUGHT the agent
// something vs. being a gaming wrapper (rubric-as-instructions,
// template fill-in, etc.). Average of four 0/0.5/1.0 criteria:
// novel_knowledge, knowledge_applied, situational_judgment,
// output_naturalness. Replaces the old procedure-compliance approach
// which was counterproductive (gaming skills scored 1.0 because they
// are perfectly followed; reference skills scored ~0.75).
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEvaluateSkillUse = makeEvaluateSkillUse;
const factory_1 = require("../agent/providers/factory");
const tool_judge_1 = require("./tool-judge");
const judge_input_1 = require("./judge-input");
const judge_feedback_1 = require("./judge-feedback");
const SKILL_USE_PROMPT_TMPL = `You are evaluating whether an agent's output demonstrates genuine learning from a user-submitted skill — not just mechanical compliance with instructions. You will see:
1. The skill's content (what it teaches the agent to do)
2. The scenario prompt (what the agent was asked to respond to)
3. The agent's final email output
4. Whether and what the agent loaded from the skill at runtime

IMPORTANT DISTINCTION: A good skill teaches domain knowledge, reasoning frameworks, or situational judgment that the agent would NOT know on its own. A gaming skill merely restates evaluation criteria as instructions, producing outputs that look "correct" but add no genuine expertise. Your job is to detect whether the skill genuinely TAUGHT the agent something, not whether the agent COMPLIED with instructions.

--- SKILL CONTENT ---
Name: {skill_name}
Description: {skill_description}

Body:
{skill_body}

--- SCENARIO PROMPT ---
{scenario_prompt}

--- AGENT'S FINAL EMAIL ---
{agent_email}

--- DID AGENT CALL load_skill? ---
{load_skill_called}

--- WHAT AGENT RECEIVED FROM load_skill (if called) ---
{load_skill_returns}

--- SCORING CRITERIA (each 0.0, 0.25, 0.5, 0.75, or 1.0) ---
1. novel_knowledge: Does the skill teach domain-specific knowledge, reasoning, or judgment that a general-purpose agent would NOT already know? (1.0 = teaches unique expertise like "always CC legal on GDPR complaints" or a prioritization framework; 0.5 = some novel elements mixed with generic advice; 0.0 = only restates things any competent agent would do: "be empathetic", "acknowledge the issue", "offer a resolution")
2. knowledge_applied: Does the output reflect that novel knowledge being applied to THIS scenario? Look for domain-specific details, non-obvious decisions, or reasoning that traces back to unique skill content — not just a well-structured response. (1.0 = output contains specific elements only THIS skill would produce; 0.5 = partially; 0.0 = output is generic/could have been written without the skill). CAP RULE: if the output applies the skill but contains material execution errors (wrong arithmetic, figures contradicting the scenario data, internally inconsistent numbers), knowledge_applied is capped at 0.5 — demonstrated-but-erroneous application must not read as near-perfect.
3. situational_judgment: Does the output show the agent making context-dependent decisions guided by the skill (e.g. choosing different approaches for different customer tiers, escalation paths, tone adjustments)? (1.0 = clear evidence of if/then reasoning from the skill applied to scenario specifics; 0.5 = some adaptation; 0.0 = same template regardless of context)
4. output_naturalness: Does the output read as a naturally composed response that integrates the skill's teachings, or as a mechanical checklist execution? (1.0 = reads naturally, skill teachings are woven in; 0.5 = somewhat formulaic but has genuine content; 0.0 = reads like a checklist or template fill-in where each paragraph maps to an instruction)

Respond with JSON only:
{
    "novel_knowledge": 0.0 | 0.25 | 0.5 | 0.75 | 1.0,
    "knowledge_applied": 0.0 | 0.25 | 0.5 | 0.75 | 1.0,
    "situational_judgment": 0.0 | 0.25 | 0.5 | 0.75 | 1.0,
    "output_naturalness": 0.0 | 0.25 | 0.5 | 0.75 | 1.0,
    "rationale": "2-3 sentences pointing to specific evidence from the email."
}`;
// Factory: this grader needs a provider+logger context, so it can't be a
// plain `Grader` constant like the inline ones. The registry calls
// `makeEvaluateSkillUse(deps)` once at startup and registers the result.
function makeEvaluateSkillUse(deps) {
    return async (ctx) => {
        let data;
        try {
            data = JSON.parse(ctx.submission);
        }
        catch {
            return { score: 0.0, rationale: "Could not parse submission" };
        }
        const skill = data?.skill ?? {};
        const skillBody = skill.body || skill.raw || "";
        if (!skillBody)
            return { score: 0.0, rationale: "No SKILL.md content submitted" };
        const finalEmail = data?.final_email ?? "";
        if (!finalEmail)
            return { score: 0.0, rationale: "Agent produced no email output" };
        const scenarioPrompt = typeof ctx.sample.input === "string" ? ctx.sample.input : ctx.sample.input.join("\n");
        const prompt = SKILL_USE_PROMPT_TMPL.replace("{skill_name}", skill.name ?? "(no name)")
            .replace("{skill_description}", skill.description ?? "(no description)")
            .replace("{skill_body}", skillBody.slice(0, 4000))
            .replace("{scenario_prompt}", scenarioPrompt.slice(0, 3000))
            .replace("{agent_email}", (0, judge_input_1.windowForJudge)(finalEmail, judge_input_1.QUALITY_JUDGE_OUTPUT_MAX_CHARS))
            .replace("{load_skill_called}", data?.load_skill_called ? "Yes" : "No")
            .replace("{load_skill_returns}", (data?.load_skill_returns ?? []).join("\n\n---\n\n").slice(0, 2000) || "(not called)");
        // Judge model precedence (resolveToolJudge): suite-baked `model` on this
        // grader (DISCLOSED, like the rubric grader) → SKILL_USE_JUDGE_* env
        // (shared server-side judge) → default openai/gpt-5.1. This is a WEIGHTED
        // quality grader, so a challenge can pin a cheaper per-sample judge here
        // in the suite without exposing the hidden anti-gaming pre-gate judge.
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
            // Fallback heuristic — same shape as Python. Keeps the grader
            // returning a sensible score when the judge provider key is missing.
            let score = 0.5;
            if (data?.load_skill_called)
                score += 0.2;
            if (finalEmail.length > 100)
                score += 0.1;
            return {
                score: Math.min(score, 1.0),
                rationale: `Fallback heuristic (judge unavailable): ${err.message}`,
            };
        }
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
        if (!parsed) {
            return {
                score: 0.5,
                rationale: `Could not parse judge output: ${raw.slice(0, 200)}`,
                usage: judgeUsage,
            };
        }
        const num = (k) => {
            const v = parsed[k];
            const n = typeof v === "number" ? v : Number(v);
            return Number.isFinite(n) ? Math.max(0, Math.min(1, n)) : 0.5;
        };
        const scores = [
            num("novel_knowledge"),
            num("knowledge_applied"),
            num("situational_judgment"),
            num("output_naturalness"),
        ];
        const avg = scores.reduce((a, b) => a + b, 0) / 4;
        const rationale = typeof parsed.rationale === "string" ? parsed.rationale.slice(0, 500) : "No rationale";
        // Miner-facing note: the four dimension labels are literals here, so the
        // note can carry nothing from the scenario (judge-feedback.ts).
        const feedback = (0, judge_feedback_1.dimensionFeedback)([
            { label: "Novel knowledge", score: scores[0] },
            { label: "Knowledge applied", score: scores[1] },
            { label: "Situational judgment", score: scores[2] },
            { label: "Output naturalness", score: scores[3] },
        ]);
        return {
            score: Math.round(avg * 100000) / 100000,
            rationale,
            ...(feedback ? { feedback } : {}),
            usage: judgeUsage,
        };
    };
}
//# sourceMappingURL=evaluate-skill-use.js.map