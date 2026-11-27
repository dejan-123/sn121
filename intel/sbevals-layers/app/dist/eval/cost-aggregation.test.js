"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const runner_1 = require("./runner");
const registry_1 = require("./graders/registry");
function grade(score, usage) {
    if (!usage)
        return { score, rationale: "" };
    return {
        score,
        rationale: "",
        usage: {
            inputTokens: usage.i,
            outputTokens: usage.o,
            cachedTokens: usage.c ?? 0,
            reasoningTokens: 0,
            cacheCreationTokens: usage.cw ?? 0,
            totalTokens: usage.i + usage.o,
            costUsd: usage.cost,
            costSource: usage.src,
        },
    };
}
function sample(id, agent, grades) {
    const trajectory = agent
        ? {
            messages: [],
            step_count: 1,
            total_tokens: agent.tokens,
            finish_reason: "end_turn",
            total_cost_usd: agent.cost,
            cost_source: agent.src,
        }
        : undefined;
    return {
        id,
        result: {
            weighted_score: 0,
            grade: { score: 0, rationale: "" },
            grades_by_key: grades,
            performance: { total_tokens: agent?.tokens ?? 0 },
            gate_passed: true,
        },
        trajectory,
    };
}
// All-scoring suite (model_judge graders → "scoring" phase) + empty registry.
const scoringSuite = {
    graders: {
        skill_use: { kind: "model_judge", weight: 1 },
        rubric: { kind: "model_judge", weight: 1 },
    },
};
const emptyRegistry = new registry_1.ToolGraderRegistry();
(0, vitest_1.describe)("aggregateCost", () => {
    (0, vitest_1.it)("returns zeros for no samples", () => {
        const c = (0, runner_1.aggregateCost)([], scoringSuite, emptyRegistry);
        (0, vitest_1.expect)(c.cost_total_usd).toBe(0);
        (0, vitest_1.expect)(c.cost_by_kind.agent.costUsd).toBe(0);
        (0, vitest_1.expect)(c.cost_by_kind.judges.costUsd).toBe(0);
        (0, vitest_1.expect)(c.cost_source).toBe("computed");
    });
    (0, vitest_1.it)("sums judge cost per grader and rolls up the total", () => {
        const results = [
            sample("s1", { tokens: 100, cost: 0.01, src: "computed" }, {
                skill_use: grade(0.8, { i: 500, o: 200, cost: 0.002, src: "computed" }),
                rubric: grade(0.9, { i: 800, o: 100, cost: 0.003, src: "computed" }),
            }),
            sample("s2", { tokens: 150, cost: 0.015, src: "computed" }, {
                skill_use: grade(0.7, { i: 600, o: 250, cost: 0.0025, src: "computed" }),
                rubric: grade(0.85, { i: 700, o: 120, cost: 0.0028, src: "computed" }),
            }),
        ];
        const c = (0, runner_1.aggregateCost)(results, scoringSuite, emptyRegistry);
        (0, vitest_1.expect)(c.cost_by_grader.skill_use.costUsd).toBeCloseTo(0.0045, 10);
        (0, vitest_1.expect)(c.cost_by_grader.rubric.costUsd).toBeCloseTo(0.0058, 10);
        (0, vitest_1.expect)(c.cost_by_kind.agent.costUsd).toBeCloseTo(0.025, 10);
        (0, vitest_1.expect)(c.cost_by_kind.judges.costUsd).toBeCloseTo(0.0103, 10);
        (0, vitest_1.expect)(c.cost_total_usd).toBeCloseTo(0.025 + 0.0103, 10);
    });
    (0, vitest_1.it)("counts a cached judge's cost once even when shared across samples", () => {
        const shared = grade(0.3, { i: 9000, o: 700, cost: 0.05, src: "computed" });
        const results = [
            sample("s1", { tokens: 0 }, {
                skill_alignment: shared,
                skill_use: grade(0.7, { i: 500, o: 100, cost: 0.001, src: "computed" }),
            }),
            sample("s2", { tokens: 0 }, {
                skill_alignment: shared, // same object reference — counted once
                skill_use: grade(0.6, { i: 600, o: 120, cost: 0.0012, src: "computed" }),
            }),
        ];
        const c = (0, runner_1.aggregateCost)(results, scoringSuite, emptyRegistry);
        (0, vitest_1.expect)(c.cost_by_grader.skill_alignment.costUsd).toBeCloseTo(0.05, 10);
        (0, vitest_1.expect)(c.cost_by_grader.skill_use.costUsd).toBeCloseTo(0.0022, 10);
        (0, vitest_1.expect)(c.cost_by_kind.judges.costUsd).toBeCloseTo(0.05 + 0.0022, 10);
    });
    (0, vitest_1.it)("flags cost_source mixed when measured and computed both appear", () => {
        const results = [
            sample("s1", { tokens: 100, cost: 0.02, src: "measured" }, {
                skill_use: grade(0.8, { i: 500, o: 200, cost: 0.001, src: "computed" }),
            }),
        ];
        const c = (0, runner_1.aggregateCost)(results, scoringSuite, emptyRegistry);
        (0, vitest_1.expect)(c.cost_source).toBe("mixed");
        (0, vitest_1.expect)(c.cost_by_kind.agent.costSource).toBe("measured");
    });
    (0, vitest_1.it)("splits cost by phase: pre_gate vs agent vs scoring", () => {
        // Register a pre-phase tool grader so phaseOf classifies it as pre_gate.
        const reg = new registry_1.ToolGraderRegistry();
        const noop = async () => ({ score: 0, rationale: "" });
        reg.register("my_pre_gate", noop, "pre");
        const suite = {
            graders: {
                gate_check: { kind: "tool", function: "my_pre_gate", weight: 0 },
                rubric: { kind: "model_judge", weight: 1 },
            },
        };
        const results = [
            sample("s1", { tokens: 100, cost: 0.03, src: "computed" }, {
                gate_check: grade(1.0, { i: 400, o: 50, cost: 0.004, src: "computed" }),
                rubric: grade(0.9, { i: 800, o: 100, cost: 0.006, src: "computed" }),
            }),
        ];
        const c = (0, runner_1.aggregateCost)(results, suite, reg);
        (0, vitest_1.expect)(c.cost_by_phase.pre_gate).toBeCloseTo(0.004, 10);
        (0, vitest_1.expect)(c.cost_by_phase.scoring).toBeCloseTo(0.006, 10);
        (0, vitest_1.expect)(c.cost_by_phase.agent).toBeCloseTo(0.03, 10);
    });
    (0, vitest_1.it)("pre-gate-blocked run: cost only in pre_gate, agent and scoring zero", () => {
        // Mirrors the runner bail path — only the pre-phase gate judge ran; no
        // agent trajectory, no scoring judge.
        const reg = new registry_1.ToolGraderRegistry();
        const noop = async () => ({ score: 0, rationale: "" });
        reg.register("my_pre_gate", noop, "pre");
        const suite = {
            graders: { gate_check: { kind: "tool", function: "my_pre_gate", weight: 0 } },
        };
        const results = [
            sample("s1", null, {
                gate_check: grade(0.0, { i: 400, o: 50, cost: 0.004, src: "computed" }),
            }),
        ];
        const c = (0, runner_1.aggregateCost)(results, suite, reg);
        (0, vitest_1.expect)(c.cost_by_phase.pre_gate).toBeCloseTo(0.004, 10);
        (0, vitest_1.expect)(c.cost_by_phase.agent).toBe(0);
        (0, vitest_1.expect)(c.cost_by_phase.scoring).toBe(0);
        (0, vitest_1.expect)(c.cost_total_usd).toBeCloseTo(0.004, 10);
    });
});
//# sourceMappingURL=cost-aggregation.test.js.map