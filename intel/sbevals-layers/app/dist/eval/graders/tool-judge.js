"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveToolJudge = resolveToolJudge;
/**
 * Resolve the LLM judge for a WEIGHTED quality tool grader (`skill_use`,
 * `scenario_quality`). Precedence, highest first:
 *
 *   1. Suite-baked `model`/`provider` on the grader spec — DISCLOSED to miners,
 *      exactly like the `rubric` (model_judge) grader's model. This is how an
 *      operator picks a cheaper per-sample quality judge per challenge without
 *      touching Railway env, and it travels with the challenge bundle.
 *   2. `SKILL_USE_JUDGE_PROVIDER` / `SKILL_USE_JUDGE_MODEL` env — the shared
 *      server-side judge (also used by the hidden anti-gaming pre-gates).
 *   3. Built-in default (`openai` / `gpt-5.1`).
 *
 * Backward compatible: a suite whose tool graders omit `model` behaves exactly
 * as before (env → default). The anti-gaming pre-gates (`dataset_derived`,
 * `skill_alignment`) do NOT call this — they read the env directly so their
 * judge model is never disclosed in the suite.
 */
function resolveToolJudge(spec) {
    const specModel = spec.kind === "tool" ? spec.model : undefined;
    const specProvider = spec.kind === "tool" ? spec.provider : undefined;
    if (specModel) {
        return {
            provider: (specProvider || process.env.SKILL_USE_JUDGE_PROVIDER || "openai"),
            model: specModel,
            source: "suite",
        };
    }
    if (process.env.SKILL_USE_JUDGE_MODEL) {
        return {
            provider: (process.env.SKILL_USE_JUDGE_PROVIDER || "openai"),
            model: process.env.SKILL_USE_JUDGE_MODEL,
            source: "env",
        };
    }
    return {
        provider: (process.env.SKILL_USE_JUDGE_PROVIDER || "openai"),
        model: "gpt-5.1",
        source: "default",
    };
}
//# sourceMappingURL=tool-judge.js.map