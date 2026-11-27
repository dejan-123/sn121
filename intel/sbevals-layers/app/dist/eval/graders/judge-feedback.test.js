"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const judge_feedback_1 = require("./judge-feedback");
(0, vitest_1.describe)("statusOf", () => {
    (0, vitest_1.it)("maps the judges' five-point scale to three status words", () => {
        (0, vitest_1.expect)((0, judge_feedback_1.statusOf)(1)).toBe("met");
        (0, vitest_1.expect)((0, judge_feedback_1.statusOf)(0.75)).toBe("met");
        (0, vitest_1.expect)((0, judge_feedback_1.statusOf)(0.5)).toBe("partly met");
        (0, vitest_1.expect)((0, judge_feedback_1.statusOf)(0.25)).toBe("partly met");
        (0, vitest_1.expect)((0, judge_feedback_1.statusOf)(0)).toBe("missed");
        (0, vitest_1.expect)((0, judge_feedback_1.statusOf)(Number.NaN)).toBe("partly met");
    });
});
(0, vitest_1.describe)("dimensionFeedback", () => {
    (0, vitest_1.it)("groups the caller's labels by status, in met / partly / missed order", () => {
        (0, vitest_1.expect)((0, judge_feedback_1.dimensionFeedback)([
            { label: "Novel knowledge", score: 1 },
            { label: "Knowledge applied", score: 0.5 },
            { label: "Situational judgment", score: 0.75 },
            { label: "Output naturalness", score: 0 },
        ])).toBe("Met: Novel knowledge, Situational judgment. Partly met: Knowledge applied. Missed: Output naturalness.");
    });
    (0, vitest_1.it)("omits empty groups and returns nothing for no dimensions", () => {
        (0, vitest_1.expect)((0, judge_feedback_1.dimensionFeedback)([{ label: "A", score: 1 }])).toBe("Met: A.");
        (0, vitest_1.expect)((0, judge_feedback_1.dimensionFeedback)([])).toBeUndefined();
    });
});
(0, vitest_1.describe)("countFeedback", () => {
    (0, vitest_1.it)("reports counts only, never the criterion ids", () => {
        (0, vitest_1.expect)((0, judge_feedback_1.countFeedback)([1, 0.75, 0.5, 0, 0.25, 1], "scenario criteria")).toBe("3 of 6 scenario criteria met, 2 partly met, 1 missed.");
        (0, vitest_1.expect)((0, judge_feedback_1.countFeedback)([1, 1])).toBe("2 of 2 criteria met.");
        (0, vitest_1.expect)((0, judge_feedback_1.countFeedback)([0.5])).toBe("0 of 1 criteria met, 1 partly met.");
        (0, vitest_1.expect)((0, judge_feedback_1.countFeedback)([])).toBeUndefined();
    });
});
(0, vitest_1.describe)("bandFeedback", () => {
    (0, vitest_1.it)("puts a single overall score into fixed words", () => {
        (0, vitest_1.expect)((0, judge_feedback_1.bandFeedback)(0.95)).toBe("Meets the rubric.");
        (0, vitest_1.expect)((0, judge_feedback_1.bandFeedback)(0.8)).toBe("Meets most of the rubric, with minor shortfalls.");
        (0, vitest_1.expect)((0, judge_feedback_1.bandFeedback)(0.6)).toBe("Meets about half of the rubric.");
        (0, vitest_1.expect)((0, judge_feedback_1.bandFeedback)(0.3)).toBe("Falls short on most of the rubric.");
        (0, vitest_1.expect)((0, judge_feedback_1.bandFeedback)(0.1)).toBe("Falls short on the rubric almost entirely.");
        (0, vitest_1.expect)((0, judge_feedback_1.bandFeedback)(Number.NaN)).toBeUndefined();
    });
});
(0, vitest_1.describe)("the note never carries sample content", () => {
    (0, vitest_1.it)("is built from numbers and literals only: a trap phrase cannot appear", () => {
        const trap = "both basis traps (44% vs. 61% growth, 26 vs. 19 months payback)";
        const notes = [
            (0, judge_feedback_1.dimensionFeedback)([{ label: "Knowledge applied", score: 0.5 }]),
            (0, judge_feedback_1.countFeedback)([0.25, 1, 0]),
            (0, judge_feedback_1.bandFeedback)(0.42),
        ].join(" ");
        (0, vitest_1.expect)(notes).not.toContain("44%");
        (0, vitest_1.expect)(notes).not.toContain(trap);
        (0, vitest_1.expect)(notes).toMatch(/^[A-Za-z0-9 ,.:%]+$/);
    });
});
//# sourceMappingURL=judge-feedback.test.js.map