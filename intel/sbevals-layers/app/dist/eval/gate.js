"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateGate = evaluateGate;
exports.evaluatePerSampleGate = evaluatePerSampleGate;
exports.evaluateGatePartial = evaluateGatePartial;
// Gates can be applied per-sample (using only that sample's grades) or in
// aggregate across the dataset. The current letta-evals system uses gates
// for both: a sample-level gate flags individual samples that fail
// pre-conditions (e.g. blacklist), and the suite-level gate decides overall
// pass/fail. We expose both via the same shape.
function evaluateGate(gate, results) {
    if (!gate)
        return true;
    return walk(gate, results);
}
function evaluatePerSampleGate(gate, sample) {
    if (!gate)
        return true;
    return walk(gate, [sample]);
}
function evaluateGatePartial(gate, results, knownMetricKeys) {
    if (!gate)
        return true;
    return walkPartial(gate, results, knownMetricKeys);
}
function walkPartial(gate, samples, known) {
    if (gate.kind === "logical") {
        const sub = gate.conditions.map((c) => walkPartial(c, samples, known));
        if (gate.operator === "and") {
            if (sub.some((v) => v === false))
                return false;
            if (sub.every((v) => v === true))
                return true;
            return "indeterminate";
        }
        // or
        if (sub.some((v) => v === true))
            return true;
        if (sub.every((v) => v === false))
            return false;
        return "indeterminate";
    }
    // SimpleGate
    if (!known.has(gate.metric_key))
        return "indeterminate";
    return checkSimple(gate, samples);
}
function walk(gate, samples) {
    // SimpleGate's `kind` is now optional (production suites omit it on
    // inner conditions of logical gates). Discriminate by the discriminator
    // we know IS required on LogicalGate: `kind === "logical"`.
    if (gate.kind === "logical") {
        if (gate.operator === "and")
            return gate.conditions.every((c) => walk(c, samples));
        return gate.conditions.some((c) => walk(c, samples));
    }
    return checkSimple(gate, samples);
}
function checkSimple(g, samples) {
    const scores = samples
        .map((s) => s.result.grades_by_key[g.metric_key]?.score)
        .filter((v) => typeof v === "number" && Number.isFinite(v));
    if (scores.length === 0)
        return false;
    const aggregation = g.aggregation ?? "avg_score";
    const op = g.op ?? "gte";
    const agg = aggregation === "min"
        ? Math.min(...scores)
        : aggregation === "max"
            ? Math.max(...scores)
            : aggregation === "sum"
                ? scores.reduce((a, b) => a + b, 0)
                : scores.reduce((a, b) => a + b, 0) / scores.length;
    switch (op) {
        case "gte":
            return agg >= g.value;
        case "gt":
            return agg > g.value;
        case "lte":
            return agg <= g.value;
        case "lt":
            return agg < g.value;
        case "eq":
            return agg === g.value;
    }
}
//# sourceMappingURL=gate.js.map