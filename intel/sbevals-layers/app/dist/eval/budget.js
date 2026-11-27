"use strict";
// Token-budget enforcement. Mirrors the semantics the current validator
// applies after letta-evals returns, ported into our in-process runner.
//
// Budget calculation (current validator: task-processor.ts:2257-2310):
//   - Override mode: maxTokensPerEval = MAX_TOKENS_PER_EVAL env var
//   - Calculated mode: maxTokensPerEval = TOKENS_PER_TEST_CASE * totalSamples
//                                          (default TOKENS_PER_TEST_CASE = 30000)
//   - Both modes are capped by ABSOLUTE_MAX_TOKENS = 10,000,000.
//
// Per-sample policy (task-processor.ts:2580-2650):
//   - Sample whose cumulative tokens stay within budget: kept as-is.
//   - Sample that pushes the cumulative over budget for the first time:
//     prorate the model_judge / weighted scores by
//         prorationFactor = roomLeft / sampleTokens
//     while keeping pass/fail tool-grader scores unchanged. Append a
//     rationale note explaining the proration.
//   - Sample after budget already exceeded: zero out with the rationale
//     "Evaluation cancelled due to token limit exceeded".
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABSOLUTE_MAX_TOKENS = void 0;
exports.computeBudget = computeBudget;
exports.applyBudgetToSample = applyBudgetToSample;
exports.ABSOLUTE_MAX_TOKENS = 10_000_000;
function computeBudget(cfg, totalSamples) {
    if (cfg.maxTokensPerEval !== undefined) {
        const cappedByAbsoluteMax = cfg.maxTokensPerEval > exports.ABSOLUTE_MAX_TOKENS;
        return {
            maxTokensPerEval: Math.min(cfg.maxTokensPerEval, exports.ABSOLUTE_MAX_TOKENS),
            tokensPerTestCase: cfg.tokensPerTestCase,
            mode: "override",
            cappedByAbsoluteMax,
        };
    }
    const calculated = cfg.tokensPerTestCase * Math.max(totalSamples, 1);
    return {
        maxTokensPerEval: Math.min(calculated, exports.ABSOLUTE_MAX_TOKENS),
        tokensPerTestCase: cfg.tokensPerTestCase,
        mode: "calculated",
        cappedByAbsoluteMax: calculated > exports.ABSOLUTE_MAX_TOKENS,
    };
}
function applyBudgetToSample(input) {
    const { result, cumulativeBefore, budget, graderSpecs } = input;
    const sampleTokens = result.result.performance.total_tokens;
    const max = budget.maxTokensPerEval;
    if (cumulativeBefore + sampleTokens <= max) {
        return { result, tokensCharged: sampleTokens, status: "kept" };
    }
    if (cumulativeBefore < max) {
        const tokensAllowed = max - cumulativeBefore;
        const factor = sampleTokens > 0 ? tokensAllowed / sampleTokens : 0;
        return {
            result: prorateResult(result, factor, tokensAllowed, sampleTokens, graderSpecs),
            tokensCharged: tokensAllowed,
            status: "prorated",
        };
    }
    return {
        result: zeroResult(result),
        tokensCharged: 0,
        status: "zeroed",
    };
}
function prorateResult(r, factor, tokensAllowed, sampleTokens, graderSpecs) {
    const note = ` [Score pro-rated to ${(factor * 100).toFixed(1)}% due to token limit: ${tokensAllowed}/${sampleTokens} tokens allowed]`;
    const noteGate = ` [Evaluation partially completed due to token limit: ${tokensAllowed}/${sampleTokens} tokens allowed]`;
    const newGradesByKey = {};
    for (const [key, grade] of Object.entries(r.result.grades_by_key)) {
        const spec = graderSpecs[key];
        // Only prorate model_judge graders; tool graders are pass/fail and
        // shouldn't be scaled.
        if (spec?.kind === "model_judge") {
            newGradesByKey[key] = {
                score: round3(grade.score * factor),
                rationale: (grade.rationale ?? "") + note,
            };
        }
        else {
            newGradesByKey[key] = {
                score: grade.score,
                rationale: (grade.rationale ?? "") + noteGate,
            };
        }
    }
    return {
        ...r,
        result: {
            ...r.result,
            weighted_score: round3(r.result.weighted_score * factor),
            grade: {
                score: round3(r.result.grade.score * factor),
                rationale: (r.result.grade.rationale ?? "") + note,
            },
            grades_by_key: newGradesByKey,
        },
    };
}
function zeroResult(r) {
    const reason = "Evaluation cancelled due to token limit exceeded";
    const newGradesByKey = {};
    for (const key of Object.keys(r.result.grades_by_key)) {
        newGradesByKey[key] = { score: 0, rationale: reason };
    }
    return {
        ...r,
        result: {
            ...r.result,
            weighted_score: 0,
            grade: { score: 0, rationale: reason },
            grades_by_key: newGradesByKey,
            gate_passed: false,
        },
    };
}
function round3(n) {
    return Math.round(n * 1000) / 1000;
}
//# sourceMappingURL=budget.js.map