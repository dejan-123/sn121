"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const runner_1 = require("./runner");
// Minimal suite with a mix of grader kinds. agent_file_noop is reached both
// directly and via the PYTHON_TO_TS_GRADER_ALIASES map (agent_design.py:*).
function suite() {
    return {
        dataset: "dataset.jsonl",
        graders: {
            blacklist: { kind: "tool", function: "agent_design.py:check_blacklist", weight: 1 },
            agent_design: { kind: "tool", function: "agent_design.py:evaluate_agent_design", weight: 1 },
            rubric: { kind: "model_judge", prompt_path: "rubric.txt", model: "x", provider: "openai", temperature: 0, max_retries: 3, timeout: 120, rubric_vars: [], weight: 1 },
            skill_use: { kind: "tool", function: "evaluate_skill_use", weight: 1 },
        },
    };
}
function sample(keys) {
    return {
        id: "s1",
        sample_id: "s1",
        result: {
            weighted_score: 0,
            grade: { score: 0, rationale: "" },
            grades_by_key: Object.fromEntries(keys.map((k) => [k, { score: 1, rationale: "" }])),
            performance: { total_tokens: 0 },
            gate_passed: false,
        },
    };
}
(0, vitest_1.describe)("computeDisplayHiddenGrades", () => {
    (0, vitest_1.it)("flags agent-file no-op graders (direct and aliased), not real ones", () => {
        const hidden = (0, runner_1.computeDisplayHiddenGrades)(suite());
        (0, vitest_1.expect)([...hidden].sort()).toEqual(["agent_design", "blacklist"]);
    });
    (0, vitest_1.it)("returns empty when no no-op graders are present", () => {
        const s = { dataset: "d", graders: { skill_use: { kind: "tool", function: "evaluate_skill_use", weight: 1 } } };
        (0, vitest_1.expect)((0, runner_1.computeDisplayHiddenGrades)(s).size).toBe(0);
    });
});
(0, vitest_1.describe)("stripDisplayHiddenGrades", () => {
    (0, vitest_1.it)("removes hidden keys from each sample's grades_by_key, keeps the rest", () => {
        const results = [sample(["blacklist", "agent_design", "rubric", "skill_use"])];
        (0, runner_1.stripDisplayHiddenGrades)(results, (0, runner_1.computeDisplayHiddenGrades)(suite()));
        (0, vitest_1.expect)(Object.keys(results[0].result.grades_by_key).sort()).toEqual(["rubric", "skill_use"]);
    });
    (0, vitest_1.it)("is a no-op when the hidden set is empty", () => {
        const results = [sample(["rubric", "skill_use"])];
        (0, runner_1.stripDisplayHiddenGrades)(results, new Set());
        (0, vitest_1.expect)(Object.keys(results[0].result.grades_by_key).sort()).toEqual(["rubric", "skill_use"]);
    });
    (0, vitest_1.it)("tolerates samples missing a hidden key", () => {
        const results = [sample(["rubric"])];
        (0, runner_1.stripDisplayHiddenGrades)(results, new Set(["blacklist"]));
        (0, vitest_1.expect)(Object.keys(results[0].result.grades_by_key)).toEqual(["rubric"]);
    });
});
//# sourceMappingURL=runner.test.js.map