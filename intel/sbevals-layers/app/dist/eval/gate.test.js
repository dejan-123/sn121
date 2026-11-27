"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const gate_1 = require("./gate");
// Helper: build a SampleResult with the given grader scores.
function sample(scores) {
    return {
        id: "s1",
        sample_id: "s1",
        result: {
            weighted_score: 0,
            grade: { score: 0, rationale: "" },
            grades_by_key: Object.fromEntries(Object.entries(scores).map(([k, v]) => [k, { score: v, rationale: "" }])),
            performance: { total_tokens: 0 },
            gate_passed: false,
        },
    };
}
(0, vitest_1.describe)("evaluateGate", () => {
    (0, vitest_1.it)("returns true for undefined gate", () => {
        (0, vitest_1.expect)((0, gate_1.evaluateGate)(undefined, [])).toBe(true);
    });
    (0, vitest_1.it)("simple gate gte passes when avg meets threshold", () => {
        const gate = { metric_key: "x", value: 0.5, op: "gte" };
        (0, vitest_1.expect)((0, gate_1.evaluateGate)(gate, [sample({ x: 0.5 })])).toBe(true);
        (0, vitest_1.expect)((0, gate_1.evaluateGate)(gate, [sample({ x: 0.49 })])).toBe(false);
    });
    (0, vitest_1.it)("logical AND passes only when all conditions pass", () => {
        const gate = {
            kind: "logical",
            operator: "and",
            conditions: [
                { metric_key: "a", value: 0.5, op: "gte" },
                { metric_key: "b", value: 0.5, op: "gte" },
            ],
        };
        (0, vitest_1.expect)((0, gate_1.evaluateGate)(gate, [sample({ a: 0.6, b: 0.6 })])).toBe(true);
        (0, vitest_1.expect)((0, gate_1.evaluateGate)(gate, [sample({ a: 0.6, b: 0.3 })])).toBe(false);
    });
});
(0, vitest_1.describe)("evaluateGatePartial", () => {
    (0, vitest_1.it)("returns true for undefined gate regardless of known keys", () => {
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(undefined, [], new Set())).toBe(true);
    });
    (0, vitest_1.it)("simple gate: indeterminate when metric_key is not in known set", () => {
        const gate = { metric_key: "x", value: 0.5, op: "gte" };
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(gate, [sample({ x: 0.8 })], new Set())).toBe("indeterminate");
    });
    (0, vitest_1.it)("simple gate: true/false when metric_key is known", () => {
        const gate = { metric_key: "x", value: 0.5, op: "gte" };
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(gate, [sample({ x: 0.8 })], new Set(["x"]))).toBe(true);
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(gate, [sample({ x: 0.2 })], new Set(["x"]))).toBe(false);
    });
    (0, vitest_1.it)("AND: one definite false → false even with indeterminates", () => {
        const gate = {
            kind: "logical",
            operator: "and",
            conditions: [
                { metric_key: "pre", value: 0.5, op: "gte" },
                { metric_key: "dyn", value: 0.5, op: "gte" },
            ],
        };
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(gate, [sample({ pre: 0.2, dyn: 0 })], new Set(["pre"]))).toBe(false);
    });
    (0, vitest_1.it)("AND: all known and true → true", () => {
        const gate = {
            kind: "logical",
            operator: "and",
            conditions: [
                { metric_key: "a", value: 0.5, op: "gte" },
                { metric_key: "b", value: 0.5, op: "gte" },
            ],
        };
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(gate, [sample({ a: 0.8, b: 0.8 })], new Set(["a", "b"]))).toBe(true);
    });
    (0, vitest_1.it)("AND: known passes, unknown remains → indeterminate", () => {
        const gate = {
            kind: "logical",
            operator: "and",
            conditions: [
                { metric_key: "pre", value: 0.5, op: "gte" },
                { metric_key: "dyn", value: 0.5, op: "gte" },
            ],
        };
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(gate, [sample({ pre: 0.8, dyn: 0 })], new Set(["pre"]))).toBe("indeterminate");
    });
    (0, vitest_1.it)("OR: one definite true → true even with indeterminates", () => {
        const gate = {
            kind: "logical",
            operator: "or",
            conditions: [
                { metric_key: "pre", value: 0.5, op: "gte" },
                { metric_key: "dyn", value: 0.5, op: "gte" },
            ],
        };
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(gate, [sample({ pre: 0.8, dyn: 0 })], new Set(["pre"]))).toBe(true);
    });
    (0, vitest_1.it)("OR: all known and false → false", () => {
        const gate = {
            kind: "logical",
            operator: "or",
            conditions: [
                { metric_key: "a", value: 0.5, op: "gte" },
                { metric_key: "b", value: 0.5, op: "gte" },
            ],
        };
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(gate, [sample({ a: 0.2, b: 0.1 })], new Set(["a", "b"]))).toBe(false);
    });
    (0, vitest_1.it)("OR: one false, one unknown → indeterminate (the unknown might still pass)", () => {
        const gate = {
            kind: "logical",
            operator: "or",
            conditions: [
                { metric_key: "pre", value: 0.5, op: "gte" },
                { metric_key: "dyn", value: 0.5, op: "gte" },
            ],
        };
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(gate, [sample({ pre: 0.2, dyn: 0 })], new Set(["pre"]))).toBe("indeterminate");
    });
    (0, vitest_1.it)("nested AND-of-ORs: one OR provably false → AND is false", () => {
        const gate = {
            kind: "logical",
            operator: "and",
            conditions: [
                {
                    kind: "logical",
                    operator: "or",
                    conditions: [
                        { metric_key: "a", value: 0.5, op: "gte" },
                        { metric_key: "b", value: 0.5, op: "gte" },
                    ],
                },
                { metric_key: "dyn", value: 0.5, op: "gte" },
            ],
        };
        // Both branches of inner OR known and false → OR is false → AND is false.
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(gate, [sample({ a: 0.1, b: 0.1, dyn: 0 })], new Set(["a", "b"]))).toBe(false);
    });
    (0, vitest_1.it)("nested AND-of-ORs: inner OR has unknown → AND indeterminate", () => {
        const gate = {
            kind: "logical",
            operator: "and",
            conditions: [
                {
                    kind: "logical",
                    operator: "or",
                    conditions: [
                        { metric_key: "pre", value: 0.5, op: "gte" },
                        { metric_key: "dyn", value: 0.5, op: "gte" },
                    ],
                },
                { metric_key: "pre2", value: 0.5, op: "gte" },
            ],
        };
        // Inner OR has one false + one unknown → indeterminate. Outer AND
        // has indeterminate + true → indeterminate.
        (0, vitest_1.expect)((0, gate_1.evaluateGatePartial)(gate, [sample({ pre: 0.1, dyn: 0, pre2: 0.8 })], new Set(["pre", "pre2"]))).toBe("indeterminate");
    });
});
//# sourceMappingURL=gate.test.js.map