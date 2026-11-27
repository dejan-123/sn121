"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const runner_1 = require("./runner");
function makeSample(id, agentTokens, grades) {
    return {
        id,
        result: {
            weighted_score: 0,
            grade: { score: 0, rationale: "" },
            grades_by_key: Object.fromEntries(Object.entries(grades).map(([k, v]) => [
                k,
                v.usage
                    ? {
                        score: v.score,
                        rationale: "",
                        usage: {
                            inputTokens: v.usage.i,
                            outputTokens: v.usage.o,
                            cachedTokens: v.usage.c ?? 0,
                            reasoningTokens: v.usage.r ?? 0,
                            totalTokens: v.usage.i + v.usage.o,
                        },
                    }
                    : { score: v.score, rationale: "" },
            ])),
            performance: { total_tokens: agentTokens },
            gate_passed: true,
        },
    };
}
(0, vitest_1.describe)("aggregateTokenUsage", () => {
    (0, vitest_1.it)("returns empty maps when no samples", () => {
        const { tokens_by_grader, tokens_by_kind } = (0, runner_1.aggregateTokenUsage)([]);
        (0, vitest_1.expect)(tokens_by_grader).toEqual({});
        (0, vitest_1.expect)(tokens_by_kind.agent.totalTokens).toBe(0);
        (0, vitest_1.expect)(tokens_by_kind.judges.totalTokens).toBe(0);
    });
    (0, vitest_1.it)("sums per-grader usage across samples", () => {
        const samples = [
            makeSample("s1", 100, {
                skill_use: { score: 0.8, usage: { i: 500, o: 200 } },
                rubric: { score: 0.9, usage: { i: 800, o: 100 } },
            }),
            makeSample("s2", 150, {
                skill_use: { score: 0.7, usage: { i: 600, o: 250 } },
                rubric: { score: 0.85, usage: { i: 700, o: 120 } },
            }),
        ];
        const { tokens_by_grader } = (0, runner_1.aggregateTokenUsage)(samples);
        (0, vitest_1.expect)(tokens_by_grader.skill_use).toEqual({
            inputTokens: 1100,
            outputTokens: 450,
            cachedTokens: 0,
            reasoningTokens: 0,
            totalTokens: 1550,
        });
        (0, vitest_1.expect)(tokens_by_grader.rubric).toEqual({
            inputTokens: 1500,
            outputTokens: 220,
            cachedTokens: 0,
            reasoningTokens: 0,
            totalTokens: 1720,
        });
    });
    (0, vitest_1.it)("excludes graders that returned no usage (deterministic graders)", () => {
        const samples = [
            makeSample("s1", 0, {
                skill_use: { score: 0.8, usage: { i: 500, o: 200 } },
                blacklist: { score: 1.0 }, // deterministic — no usage
                novelty_check: { score: 0.95 }, // deterministic — no usage
            }),
        ];
        const { tokens_by_grader } = (0, runner_1.aggregateTokenUsage)(samples);
        (0, vitest_1.expect)(Object.keys(tokens_by_grader)).toEqual(["skill_use"]);
        (0, vitest_1.expect)(tokens_by_grader.blacklist).toBeUndefined();
        (0, vitest_1.expect)(tokens_by_grader.novelty_check).toBeUndefined();
    });
    (0, vitest_1.it)("rolls agent harness tokens into tokens_by_kind.agent", () => {
        const samples = [
            makeSample("s1", 18749, { skill_use: { score: 0.7, usage: { i: 500, o: 100 } } }),
            makeSample("s2", 21500, { skill_use: { score: 0.6, usage: { i: 600, o: 120 } } }),
        ];
        const { tokens_by_kind } = (0, runner_1.aggregateTokenUsage)(samples);
        (0, vitest_1.expect)(tokens_by_kind.agent.totalTokens).toBe(18749 + 21500);
        (0, vitest_1.expect)(tokens_by_kind.judges.totalTokens).toBe(500 + 100 + 600 + 120);
    });
    (0, vitest_1.it)("aggregates cached and reasoning tokens when present", () => {
        const samples = [
            makeSample("s1", 0, {
                skill_use: { score: 0.7, usage: { i: 1000, o: 200, c: 300, r: 50 } },
            }),
        ];
        const { tokens_by_grader, tokens_by_kind } = (0, runner_1.aggregateTokenUsage)(samples);
        (0, vitest_1.expect)(tokens_by_grader.skill_use.cachedTokens).toBe(300);
        (0, vitest_1.expect)(tokens_by_grader.skill_use.reasoningTokens).toBe(50);
        (0, vitest_1.expect)(tokens_by_kind.judges.cachedTokens).toBe(300);
        (0, vitest_1.expect)(tokens_by_kind.judges.reasoningTokens).toBe(50);
    });
    (0, vitest_1.it)("counts a cached grader's usage once even when shared across samples", () => {
        // dataset_derived_knowledge / skill_rubric_alignment compute once and
        // return the SAME GradeResult (same usage object) for every sample. The
        // judge was called once, so it must be counted once — not per sample.
        const shared = {
            score: 0.3,
            rationale: "cached",
            usage: {
                inputTokens: 9000,
                outputTokens: 700,
                cachedTokens: 0,
                reasoningTokens: 0,
                totalTokens: 9700,
            },
        };
        const perSampleResult = (id, perSampleUsage) => ({
            id,
            result: {
                weighted_score: 0,
                grade: { score: 0, rationale: "" },
                grades_by_key: {
                    // Same object reference in every sample — the cached grader.
                    skill_alignment: shared,
                    // Fresh object per sample — a genuine per-sample judge call.
                    skill_use: {
                        score: 0.7,
                        rationale: "",
                        usage: {
                            inputTokens: perSampleUsage.i,
                            outputTokens: perSampleUsage.o,
                            cachedTokens: 0,
                            reasoningTokens: 0,
                            totalTokens: perSampleUsage.i + perSampleUsage.o,
                        },
                    },
                },
                performance: { total_tokens: 0 },
                gate_passed: true,
            },
        });
        const samples = [
            perSampleResult("s1", { i: 500, o: 100 }),
            perSampleResult("s2", { i: 600, o: 120 }),
            perSampleResult("s3", { i: 550, o: 110 }),
        ];
        const { tokens_by_grader, tokens_by_kind } = (0, runner_1.aggregateTokenUsage)(samples);
        // Cached grader counted once, not 3x.
        (0, vitest_1.expect)(tokens_by_grader.skill_alignment.totalTokens).toBe(9700);
        (0, vitest_1.expect)(tokens_by_grader.skill_alignment.inputTokens).toBe(9000);
        // Per-sample grader still accumulates across all 3 samples.
        (0, vitest_1.expect)(tokens_by_grader.skill_use.totalTokens).toBe(500 + 100 + 600 + 120 + 550 + 110);
        // judges rollup = cached-once + per-sample-summed.
        (0, vitest_1.expect)(tokens_by_kind.judges.totalTokens).toBe(9700 + 1980);
    });
});
//# sourceMappingURL=token-aggregation.test.js.map