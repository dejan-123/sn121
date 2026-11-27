"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const evaluate_scenario_quality_1 = require("./evaluate-scenario-quality");
const judgeMock = vitest_1.vi.hoisted(() => vitest_1.vi.fn(async (_req) => ({
    raw: `{"scores": {"c1": 1.0, "c2": 0.0}, "rationale": "c2 section missing"}`,
    usage: {
        inputTokens: 10,
        outputTokens: 5,
        cachedTokens: 0,
        reasoningTokens: 0,
        totalTokens: 15,
    },
})));
vitest_1.vi.mock("../agent/providers/factory", () => ({
    makeProvider: () => ({ judge: judgeMock }),
}));
(0, vitest_1.describe)("computeWeightedScores", () => {
    const weights = { c1: 2, c2: 1, c3: 1 };
    (0, vitest_1.it)("baseScore matches the legacy weighted sum", () => {
        const r = (0, evaluate_scenario_quality_1.computeWeightedScores)(weights, { c1: 1.0, c2: 0.5, c3: 0.0 });
        (0, vitest_1.expect)(r.baseScore).toBeCloseTo((1.0 * 2 + 0.5 * 1 + 0.0 * 1) / 4, 10);
        (0, vitest_1.expect)(r.contentScore).toBeNull();
        (0, vitest_1.expect)(r.affected).toEqual([]);
    });
    (0, vitest_1.it)("defaults missing criteria to 0.5 and clamps out-of-range scores", () => {
        const r = (0, evaluate_scenario_quality_1.computeWeightedScores)(weights, { c1: 5, c3: -1 });
        // c1 clamps to 1, c2 missing → 0.5, c3 clamps to 0
        (0, vitest_1.expect)(r.baseScore).toBeCloseTo((1 * 2 + 0.5 * 1 + 0 * 1) / 4, 10);
    });
    (0, vitest_1.it)("returns 0.5 base when no valid weights exist", () => {
        (0, vitest_1.expect)((0, evaluate_scenario_quality_1.computeWeightedScores)({}, { c1: 1 }).baseScore).toBe(0.5);
        (0, vitest_1.expect)((0, evaluate_scenario_quality_1.computeWeightedScores)({ c1: Number.NaN }, { c1: 1 }).baseScore).toBe(0.5);
    });
    (0, vitest_1.it)("computes contentScore over unaffected criteria only, base unchanged", () => {
        const scores = { c1: 1.0, c2: 0.0, c3: 0.5 };
        const withSplit = (0, evaluate_scenario_quality_1.computeWeightedScores)(weights, scores, ["c2"]);
        const without = (0, evaluate_scenario_quality_1.computeWeightedScores)(weights, scores);
        // The authoritative number must be identical with or without attribution.
        (0, vitest_1.expect)(withSplit.baseScore).toBeCloseTo(without.baseScore, 10);
        // Advisory drops c2: (1.0*2 + 0.5*1) / 3
        (0, vitest_1.expect)(withSplit.contentScore).toBeCloseTo(2.5 / 3, 10);
        (0, vitest_1.expect)(withSplit.affected).toEqual(["c2"]);
    });
    (0, vitest_1.it)("drops judge-invented criterion ids from the affected list", () => {
        const r = (0, evaluate_scenario_quality_1.computeWeightedScores)(weights, { c1: 1, c2: 0, c3: 1 }, ["c2", "made_up"]);
        (0, vitest_1.expect)(r.affected).toEqual(["c2"]);
    });
    (0, vitest_1.it)("returns null contentScore when every weighted criterion is affected", () => {
        const r = (0, evaluate_scenario_quality_1.computeWeightedScores)(weights, { c1: 0, c2: 0, c3: 0 }, ["c1", "c2", "c3"]);
        (0, vitest_1.expect)(r.contentScore).toBeNull();
        (0, vitest_1.expect)(r.baseScore).toBe(0);
    });
    (0, vitest_1.it)("returns null contentScore when nothing is affected (no signal to add)", () => {
        const r = (0, evaluate_scenario_quality_1.computeWeightedScores)(weights, { c1: 1, c2: 1, c3: 1 }, []);
        (0, vitest_1.expect)(r.contentScore).toBeNull();
    });
});
// --- full grader path -------------------------------------------------------
const cfg = {};
const logger = { info: vitest_1.vi.fn(), warn: vitest_1.vi.fn(), error: vitest_1.vi.fn(), debug: vitest_1.vi.fn() };
function makeCtx(finishReason) {
    return {
        sample: {
            id: "s1",
            input: "Write the report.",
            ground_truth: {
                output: "reference output",
                metadata: {
                    scenario_type: "generic",
                    rubric_weights: { c1: 2, c2: 1 },
                    rubric_descriptions: { c1: "covers the analysis", c2: "includes the appendix" },
                },
            },
        },
        trajectory: {
            messages: [],
            step_count: 1,
            total_tokens: 100,
            finish_reason: finishReason,
        },
        submission: JSON.stringify({ final_email: "the agent output" }),
        spec: { kind: "tool", function: "evaluate_scenario_quality", weight: 1 },
        files: {},
    };
}
(0, vitest_1.describe)("makeEvaluateScenarioQuality truncation split", () => {
    (0, vitest_1.beforeEach)(() => {
        judgeMock.mockClear();
    });
    (0, vitest_1.it)("does not mention truncation to the judge and attaches no detail on complete runs", async () => {
        const grader = (0, evaluate_scenario_quality_1.makeEvaluateScenarioQuality)({ cfg, logger });
        const result = await grader(makeCtx("end_turn"));
        const prompt = judgeMock.mock.calls[0][0].prompt;
        (0, vitest_1.expect)(prompt).not.toContain("truncation_affected");
        (0, vitest_1.expect)(result.detail).toBeUndefined();
        (0, vitest_1.expect)(result.rationale).not.toContain("truncated");
        (0, vitest_1.expect)(result.score).toBeCloseTo((1.0 * 2 + 0.0 * 1) / 3, 5);
    });
    (0, vitest_1.it)("asks for attribution, keeps the score identical, and attaches advisory detail on truncated runs", async () => {
        judgeMock.mockResolvedValueOnce({
            raw: `{"scores": {"c1": 1.0, "c2": 0.0}, "rationale": "appendix cut off", "truncation_affected": ["c2"]}`,
            usage: {
                inputTokens: 10,
                outputTokens: 5,
                cachedTokens: 0,
                reasoningTokens: 0,
                totalTokens: 15,
            },
        });
        const grader = (0, evaluate_scenario_quality_1.makeEvaluateScenarioQuality)({ cfg, logger });
        const result = await grader(makeCtx("max_tokens"));
        const prompt = judgeMock.mock.calls[0][0].prompt;
        (0, vitest_1.expect)(prompt).toContain("truncation_affected");
        // Authoritative score: unchanged by attribution — truncation still counts.
        (0, vitest_1.expect)(result.score).toBeCloseTo((1.0 * 2 + 0.0 * 1) / 3, 5);
        (0, vitest_1.expect)(result.detail).toEqual({
            truncated: true,
            content_score: 1.0,
            truncation_affected: ["c2"],
        });
        (0, vitest_1.expect)(result.rationale).toContain("content-only advisory=1.000");
    });
    (0, vitest_1.it)("tolerates a truncated run where the judge reports no affected criteria", async () => {
        judgeMock.mockResolvedValueOnce({
            raw: `{"scores": {"c1": 0.75, "c2": 0.5}, "rationale": "weak but complete", "truncation_affected": []}`,
            usage: {
                inputTokens: 10,
                outputTokens: 5,
                cachedTokens: 0,
                reasoningTokens: 0,
                totalTokens: 15,
            },
        });
        const grader = (0, evaluate_scenario_quality_1.makeEvaluateScenarioQuality)({ cfg, logger });
        const result = await grader(makeCtx("max_tokens"));
        (0, vitest_1.expect)(result.detail).toEqual({ truncated: true, truncation_affected: [] });
        (0, vitest_1.expect)(result.score).toBeCloseTo((0.75 * 2 + 0.5 * 1) / 3, 5);
    });
});
// Judge output window: a complete long output (past the old 2,500-char
// slice) must reach the judge in full, so the judge does not read a
// complete report as cut off mid-document.
(0, vitest_1.describe)("judge sees long outputs (windowed)", () => {
    (0, vitest_1.beforeEach)(() => {
        judgeMock.mockClear();
    });
    (0, vitest_1.it)("agent output content past char 2,500 reaches the judge prompt", async () => {
        const grader = (0, evaluate_scenario_quality_1.makeEvaluateScenarioQuality)({ cfg, logger });
        const ctx = makeCtx("end_turn");
        const longOutput = "section. ".repeat(400) + "FINAL-SECTION-MARKER end of report.";
        ctx.submission = JSON.stringify({ final_email: longOutput });
        await grader(ctx);
        const prompt = judgeMock.mock.calls[0][0].prompt;
        (0, vitest_1.expect)(prompt).toContain("FINAL-SECTION-MARKER");
    });
});
//# sourceMappingURL=evaluate-scenario-quality.test.js.map