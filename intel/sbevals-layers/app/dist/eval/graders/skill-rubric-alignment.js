"use strict";
// Skill-rubric alignment detector.
//
// Catches the SBC winner's strategy: encoding rubric criteria as
// procedural instructions in the SKILL.md. A genuine skill teaches
// domain knowledge; a gaming skill mirrors the rubric.
//
// How it works:
// 1. Extracts rubric criterion keywords from ground_truth.metadata.rubric_weights
//    (or from the rubric.txt file if available)
// 2. Extracts procedural instructions from the SKILL.md
// 3. Checks how many skill instructions map 1:1 to rubric criteria
// 4. If >60% of skill instructions directly mirror rubric criteria,
//    the skill is likely gaming — score is reduced
//
// Uses the skill_content extractor (same as evaluate_skill_use).
//
// Configuration in suite.yaml:
//   skill_alignment:
//     kind: tool
//     function: skill_rubric_alignment
//     extractor: skill_content
//     weight: 0.0    # typically used as a gate, or low weight
//     extractor_config:
//       alignment_threshold: 0.60   # optional, default 0.60
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSkillRubricAlignment = makeSkillRubricAlignment;
const factory_1 = require("../agent/providers/factory");
const dataset_1 = require("../dataset");
const node_crypto_1 = require("node:crypto");
const judge_input_1 = require("./judge-input");
const ALIGNMENT_PROMPT = `You are a gaming detector for an AI skills competition. Your job is to determine whether a SKILL.md file was written to genuinely teach a procedure, or whether it was reverse-engineered from the evaluation rubric.

Signs of rubric-reverse-engineering:
- Numbered steps that map 1:1 to rubric criteria
- Checklists that mirror scoring dimensions
- Self-check sections that restate rubric criteria as yes/no questions
- Phrase banks or lookup tables keyed to scenario types
- Instructions like "always include X" where X is a known rubric criterion

Signs of genuine procedural skill:
- Domain-specific knowledge not found in the rubric
- Decision logic (if/then reasoning about the situation)
- Prioritization guidance (what matters more in different contexts)
- Warning about common mistakes that aren't in the rubric
- Teaching the WHY behind steps, not just the WHAT

--- SKILL.MD ---
{skill_content}

--- RUBRIC CRITERIA (what the evaluation scores on) ---
{rubric_criteria}

Rate the alignment on a scale:
- 0.0 = Skill is clearly a rubric mirror (most steps directly encode rubric criteria)
- 0.5 = Mixed — some genuine teaching, some rubric-shaped instructions
- 1.0 = Skill is genuinely procedural (teaches domain knowledge, doesn't mirror rubric)

Return JSON only: {"alignment_score": 0.0-1.0, "evidence": "2-3 sentences explaining your assessment"}`;
function makeSkillRubricAlignment(deps) {
    // Cache: one judge result per skill body.
    //
    // CACHE INVARIANT — DO NOT REMOVE WITHOUT REPLACING:
    // The runner invokes this grader TWICE per eval — once in the pre-flight
    // gate (runner.ts pre-phase block) and once per sample inside the main
    // loop. Both passes MUST hit the same cache key, otherwise we pay an
    // extra LLM judge call per eval silently.
    //
    // This cache assumes rubric_weights / rubric_descriptions are constant
    // across samples in the dataset (which they are today — they describe
    // the rubric structure, not anything sample-specific). If a future suite
    // ever introduces sample-specific rubric_weights, the cache key must be
    // extended to include them, and the "pre" phase tag should be removed
    // from this grader in registry.ts since the result would no longer be
    // sample-invariant.
    const resultCache = new Map();
    return async (ctx) => {
        // Parse the skill content. A bundle adds `references` and `bundle_text`;
        // both are absent for a single file.
        let skillBody = "";
        let references = [];
        let bundleFullText = "";
        try {
            const data = JSON.parse(ctx.submission);
            skillBody = data?.skill?.body ?? data?.skill?.raw ?? "";
            if (Array.isArray(data?.references))
                references = data.references;
            if (typeof data?.bundle_text === "string")
                bundleFullText = data.bundle_text;
        }
        catch {
            // Submission might be raw text
            skillBody = ctx.submission;
        }
        if (!skillBody || skillBody.trim().length < 50) {
            return { score: 1.0, rationale: "Skill too short to assess alignment" };
        }
        // Cache hit fast-path. Two invocations (pre-flight + per-sample) on the
        // same skill body produce the same result by design — see the cache
        // invariant block above.
        // Two bundles can share a SKILL.md and differ only in a reference, so a
        // bundle's key also carries a digest of its full text.
        const cacheKey = references.length > 0
            ? `${skillBody.slice(0, 200)}|${(0, node_crypto_1.createHash)("sha256").update(bundleFullText).digest("hex")}`
            : skillBody.slice(0, 200);
        const cached = resultCache.get(cacheKey);
        if (cached)
            return cached;
        // Store helper — caches and returns. Used on all post-lookup return
        // paths EXCEPT the catch-block fallback (don't poison the cache on
        // transient judge errors that might succeed on a later retry).
        const store = (r) => {
            resultCache.set(cacheKey, r);
            return r;
        };
        // A submission that talks to its evaluator fails here, before any judge
        // can be talked to. See judge-input.ts:detectJudgeDirectedText.
        const judgeDirected = (0, judge_input_1.detectJudgeDirectedText)(bundleFullText || skillBody);
        if (judgeDirected.length > 0) {
            return store({ score: 0, rationale: (0, judge_input_1.judgeDirectedRationale)(judgeDirected) });
        }
        // Extract rubric criteria from ground_truth metadata
        const gt = (0, dataset_1.parseGroundTruth)(ctx.sample.ground_truth);
        const meta = gt && typeof gt === "object" && !Array.isArray(gt)
            ? gt.metadata ?? {}
            : {};
        const rubricWeights = meta.rubric_weights && typeof meta.rubric_weights === "object"
            ? meta.rubric_weights
            : {};
        const rubricDescriptions = meta.rubric_descriptions && typeof meta.rubric_descriptions === "object"
            ? meta.rubric_descriptions
            : {};
        // Build rubric criteria text for the prompt
        const criteriaLines = Object.entries(rubricWeights).map(([cid, weight]) => {
            const desc = rubricDescriptions[cid] ?? cid.replace(/_/g, " ");
            return `- ${cid} (weight ${weight}): ${desc}`;
        });
        if (criteriaLines.length === 0) {
            return store({ score: 1.0, rationale: "No rubric criteria in metadata — cannot check alignment" });
        }
        const threshold = typeof ctx.spec.extractor_config?.alignment_threshold === "number"
            ? ctx.spec.extractor_config.alignment_threshold
            : 0.6;
        // Call LLM judge to assess alignment
        const judgeProvider = (process.env.SKILL_USE_JUDGE_PROVIDER || "openai");
        const judgeModel = process.env.SKILL_USE_JUDGE_MODEL || "gpt-5.1";
        try {
            const judge = (0, factory_1.makeProvider)(judgeProvider, deps.cfg);
            // One judge call per window. A single file is one window (the prompt
            // it always had); a bundle is packed into windows of whole files so a
            // rubric mirror cannot sit in a reference the judge never reads. The
            // WORST window controls the score — see packBundleForJudge.
            const windows = (0, judge_input_1.packBundleForJudge)(skillBody, references);
            const judgeWindow = async (windowText) => {
                const prompt = ALIGNMENT_PROMPT
                    .replace("{skill_content}", windowText)
                    .replace("{rubric_criteria}", criteriaLines.join("\n")) + (references.length > 0 ? judge_input_1.BUNDLE_REPLY_RULES : "");
                const { raw, usage } = await judge.judge({
                    prompt,
                    model: judgeModel,
                    temperature: 0,
                    timeoutMs: 60_000,
                });
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
                return { raw, usage, parsed };
            };
            let raw = "";
            let parsed = null;
            let judgeUsage;
            let worstScore = Infinity;
            let worstWindow = 0;
            for (let i = 0; i < windows.length; i++) {
                const v = await judgeWindow(windows[i]);
                judgeUsage = windows.length === 1 ? v.usage : addUsage(judgeUsage, v.usage);
                // Same fallbacks a single file gets: a score parsed from prose, else 0.5.
                const prose = v.raw.match(/alignment_score["\s:]+(\d+\.?\d*)/);
                const score = v.parsed && typeof v.parsed.alignment_score === "number"
                    ? v.parsed.alignment_score
                    : prose
                        ? parseFloat(prose[1])
                        : 0.5;
                if (score < worstScore) {
                    worstScore = score;
                    worstWindow = i;
                    raw = v.raw;
                    parsed = v.parsed;
                }
            }
            const windowNote = windows.length > 1
                ? ` [bundle judged in ${windows.length} windows; worst is window ${worstWindow + 1}]`
                : "";
            if (!parsed || typeof parsed.alignment_score !== "number") {
                // Try to extract score from prose
                const scoreMatch = raw.match(/alignment_score["\s:]+(\d+\.?\d*)/);
                if (scoreMatch) {
                    const score = Math.max(0, Math.min(1, parseFloat(scoreMatch[1])));
                    return store({
                        score,
                        rationale: `Alignment score ${score.toFixed(3)} (parsed from prose)${windowNote}`,
                        usage: judgeUsage,
                    });
                }
                return store({
                    score: 0.5,
                    rationale: `Could not parse alignment judge response${windowNote}`,
                    usage: judgeUsage,
                });
            }
            const alignmentScore = Math.max(0, Math.min(1, parsed.alignment_score));
            const evidence = typeof parsed.evidence === "string" ? parsed.evidence : "";
            // If alignment is below threshold, the skill mirrors the rubric
            const isGaming = alignmentScore < threshold;
            return store({
                score: Math.round(alignmentScore * 100000) / 100000,
                usage: judgeUsage,
                rationale: isGaming
                    ? `Likely rubric-mirroring (alignment=${alignmentScore.toFixed(3)} < ${threshold}). ${evidence}${windowNote}`
                    : `Appears genuine (alignment=${alignmentScore.toFixed(3)} >= ${threshold}). ${evidence}${windowNote}`,
            });
        }
        catch (err) {
            deps.logger.error({ err }, "skill-rubric-alignment judge failed");
            return {
                score: 0.5,
                rationale: `Fallback score (judge unavailable): ${err.message}`,
            };
        }
    };
}
// Sum judge usage across a bundle's windows (cost rides with usage).
function addUsage(a, b) {
    if (!a)
        return b;
    return {
        inputTokens: a.inputTokens + b.inputTokens,
        outputTokens: a.outputTokens + b.outputTokens,
        cachedTokens: a.cachedTokens + b.cachedTokens,
        reasoningTokens: a.reasoningTokens + b.reasoningTokens,
        totalTokens: a.totalTokens + b.totalTokens,
        cacheCreationTokens: (a.cacheCreationTokens ?? 0) + (b.cacheCreationTokens ?? 0),
        costUsd: a.costUsd == null && b.costUsd == null ? undefined : (a.costUsd ?? 0) + (b.costUsd ?? 0),
        costSource: b.costSource ?? a.costSource,
    };
}
//# sourceMappingURL=skill-rubric-alignment.js.map