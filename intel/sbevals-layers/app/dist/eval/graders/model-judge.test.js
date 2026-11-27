"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const model_judge_1 = require("./model-judge");
(0, vitest_1.describe)("escapeUnescapedControls", () => {
    (0, vitest_1.it)("leaves already-valid JSON unchanged", () => {
        const input = `{"score": 0.8, "rationale": "Brief one-line rationale."}`;
        (0, vitest_1.expect)((0, model_judge_1.escapeUnescapedControls)(input)).toBe(input);
    });
    (0, vitest_1.it)("preserves existing \\n escape sequences", () => {
        const input = `{"score": 0.8, "rationale": "line one\\nline two"}`;
        (0, vitest_1.expect)((0, model_judge_1.escapeUnescapedControls)(input)).toBe(input);
    });
    (0, vitest_1.it)("escapes a bare newline inside a string", () => {
        const input = `{"score": 0.8, "rationale": "line one\nline two"}`;
        const out = (0, model_judge_1.escapeUnescapedControls)(input);
        (0, vitest_1.expect)(out).toBe(`{"score": 0.8, "rationale": "line one\\nline two"}`);
        (0, vitest_1.expect)(JSON.parse(out)).toEqual({ score: 0.8, rationale: "line one\nline two" });
    });
    (0, vitest_1.it)("escapes bare CR and tab inside a string", () => {
        const input = `{"a": "x\ry\tz"}`;
        (0, vitest_1.expect)((0, model_judge_1.escapeUnescapedControls)(input)).toBe(`{"a": "x\\ry\\tz"}`);
    });
    (0, vitest_1.it)("does not escape whitespace outside strings", () => {
        const input = `{\n  "score": 0.5,\n  "rationale": "x"\n}`;
        // newlines between tokens should pass through; only newlines INSIDE the
        // string literal are escaped (there are none here).
        (0, vitest_1.expect)((0, model_judge_1.escapeUnescapedControls)(input)).toBe(input);
    });
    (0, vitest_1.it)("respects escaped quote (\\\") and does not flip inString state", () => {
        const input = `{"rationale": "she said \\"hi\\" then\nleft"}`;
        const out = (0, model_judge_1.escapeUnescapedControls)(input);
        (0, vitest_1.expect)(JSON.parse(out)).toEqual({ rationale: 'she said "hi" then\nleft' });
    });
});
(0, vitest_1.describe)("parseJudgeOutput", () => {
    (0, vitest_1.it)("parses valid single-line JSON", () => {
        const raw = `{"score": 0.85, "rationale": "good"}`;
        (0, vitest_1.expect)((0, model_judge_1.parseJudgeOutput)(raw)).toEqual({ score: 0.85, rationale: "good" });
    });
    (0, vitest_1.it)("strips ```json fences", () => {
        const raw = "```json\n{\"score\": 0.7, \"rationale\": \"ok\"}\n```";
        (0, vitest_1.expect)((0, model_judge_1.parseJudgeOutput)(raw)).toEqual({ score: 0.7, rationale: "ok" });
    });
    (0, vitest_1.it)("parses a fenced multi-line rationale with literal newlines (S-004 shape)", () => {
        // Captured from to-test/runs/2026-06-02T11-43-22-694Z__template_optimizer
        // — judge returned ```json wrapper with literal \n inside the rationale.
        const raw = "```json\n" +
            "{\n" +
            '  "score": 0.78,\n' +
            '  "rationale": "The agent\'s response demonstrates strong domain knowledge and appropriate tier classification, with a well-structured formal warning that covers the essential elements.\n' +
            "\n" +
            "STRENGTHS:\n" +
            "- Correctly identifies as Corrective Action\n" +
            "- Names specific incidents\n" +
            "\n" +
            'WEAKNESSES include the absence of explicit FMLA tolling language."\n' +
            "}\n" +
            "```";
        const result = (0, model_judge_1.parseJudgeOutput)(raw);
        (0, vitest_1.expect)(result.score).toBe(0.78);
        (0, vitest_1.expect)(result.rationale).toContain("STRENGTHS:");
        (0, vitest_1.expect)(result.rationale).toContain("FMLA tolling");
    });
    (0, vitest_1.it)("parses a multi-line rationale without code fences (bad-control-char shape)", () => {
        const raw = "{\n" +
            '  "score": 0.62,\n' +
            '  "rationale": "Overall solid.\n\nDetails:\n- point one\n- point two"\n' +
            "}";
        const result = (0, model_judge_1.parseJudgeOutput)(raw);
        (0, vitest_1.expect)(result.score).toBe(0.62);
        (0, vitest_1.expect)(result.rationale).toContain("point one");
    });
    (0, vitest_1.it)("clamps score to [0, 1]", () => {
        (0, vitest_1.expect)((0, model_judge_1.parseJudgeOutput)('{"score": 1.5, "rationale": "x"}').score).toBe(1);
        (0, vitest_1.expect)((0, model_judge_1.parseJudgeOutput)('{"score": -0.3, "rationale": "x"}').score).toBe(0);
    });
    (0, vitest_1.it)("coerces string score to number", () => {
        (0, vitest_1.expect)((0, model_judge_1.parseJudgeOutput)('{"score": "0.42", "rationale": "x"}').score).toBe(0.42);
    });
    (0, vitest_1.it)("throws when no JSON object is present", () => {
        (0, vitest_1.expect)(() => (0, model_judge_1.parseJudgeOutput)("the judge wrote prose only")).toThrow(/no JSON object/);
    });
    (0, vitest_1.it)("throws when score is not numeric", () => {
        (0, vitest_1.expect)(() => (0, model_judge_1.parseJudgeOutput)('{"score": "not a number", "rationale": "x"}')).toThrow(/score is not numeric/);
    });
    // Truncation recovery: the judge hit max_tokens mid-rationale, so the JSON
    // is cut off. The score appears first in the object, so it survives — we
    // recover it rather than dropping the sample to 0.
    (0, vitest_1.it)("recovers score when the response is truncated with no closing brace", () => {
        const raw = '{"score": 0.72, "rationale": "Strong on the recognition tier but missed the dual-channel';
        const result = (0, model_judge_1.parseJudgeOutput)(raw);
        (0, vitest_1.expect)(result.score).toBe(0.72);
        (0, vitest_1.expect)(result.rationale).toMatch(/truncated/i);
    });
    (0, vitest_1.it)("recovers score when JSON is matched but unparseable (truncated mid-string)", () => {
        // A stray '}' inside the cut-off rationale makes objMatch succeed but
        // JSON.parse fail — the second recovery path should still salvage the score.
        const raw = '{"score": 0.5, "rationale": "see step 3 } then the response was cut';
        const result = (0, model_judge_1.parseJudgeOutput)(raw);
        (0, vitest_1.expect)(result.score).toBe(0.5);
        (0, vitest_1.expect)(result.rationale).toMatch(/truncated/i);
    });
    (0, vitest_1.it)("clamps a recovered score to [0, 1]", () => {
        (0, vitest_1.expect)((0, model_judge_1.parseJudgeOutput)('{"score": 1.4, "rationale": "cut off here').score).toBe(1);
    });
    (0, vitest_1.it)("recovers an integer score from truncated output", () => {
        (0, vitest_1.expect)((0, model_judge_1.parseJudgeOutput)('{"score": 1, "rationale": "great but truncated').score).toBe(1);
    });
    (0, vitest_1.it)("still throws on truncation when no score is present", () => {
        (0, vitest_1.expect)(() => (0, model_judge_1.parseJudgeOutput)('{"rationale": "the judge never emitted a score before')).toThrow(/no JSON object/);
    });
});
(0, vitest_1.describe)("parseJudgeOutput ignores any model-written feedback", () => {
    (0, vitest_1.it)("drops a feedback field the judge emits; the note is rendered from the score instead", () => {
        (0, vitest_1.expect)((0, model_judge_1.parseJudgeOutput)(`{"score": 0.6, "rationale": "Cites the reference verdict.", "feedback": "the arithmetic trap in the budget"}`)).toEqual({ score: 0.6, rationale: "Cites the reference verdict." });
        (0, vitest_1.expect)((0, model_judge_1.parseJudgeOutput)(`{"score": 0.6, "rationale": "r"}`)).toEqual({ score: 0.6, rationale: "r" });
    });
});
(0, vitest_1.describe)("buildJudgePrompt placeholder substitution", () => {
    const sample = {
        id: "S-001",
        input: "Prepare the brief.",
        ground_truth: {
            output: "The reference brief.",
            metadata: {
                judge_notes: "Planted: the 'promotion' ask is unsupported by the signals.",
                rubric_weights: { input_audit: 0.4, coaching_threshold: 0.6 },
                is_trap: true,
            },
        },
    };
    const warnings = [];
    const logger = { warn: (...args) => warnings.push(args) };
    const base = { spec: {}, cfg: {}, logger, submission: "<submission>", rubricPath: "" };
    (0, vitest_1.it)("renders dotted metadata placeholders the suite-builder writes", () => {
        warnings.length = 0;
        const template = "Read `{metadata.judge_notes}` before scoring. Weights: {metadata.rubric_weights}. Trap: {metadata.is_trap}.\n{submission}";
        const prompt = (0, model_judge_1.buildJudgePrompt)(template, { ...base, sample });
        (0, vitest_1.expect)(prompt).toContain("Read `Planted: the 'promotion' ask is unsupported by the signals.` before scoring.");
        (0, vitest_1.expect)(prompt).toContain('Weights: {"input_audit":0.4,"coaching_threshold":0.6}.');
        (0, vitest_1.expect)(prompt).toContain("Trap: true.");
        (0, vitest_1.expect)(prompt).not.toContain("{metadata.");
        (0, vitest_1.expect)(warnings).toEqual([]);
    });
    (0, vitest_1.it)("still renders flat metadata names and the metadata JSON blob", () => {
        const prompt = (0, model_judge_1.buildJudgePrompt)("{judge_notes} | {is_trap} | {metadata}\n{submission}", {
            ...base,
            sample,
        });
        (0, vitest_1.expect)(prompt).toContain("Planted: the 'promotion' ask is unsupported by the signals. | true | ");
        (0, vitest_1.expect)(prompt).toContain('"is_trap": true');
    });
    (0, vitest_1.it)("renders dotted placeholders from a JSON-encoded ground_truth string too", () => {
        const encoded = { ...sample, ground_truth: JSON.stringify(sample.ground_truth) };
        const prompt = (0, model_judge_1.buildJudgePrompt)("{metadata.judge_notes}\n{submission}", {
            ...base,
            sample: encoded,
        });
        (0, vitest_1.expect)(prompt.startsWith("Planted: the 'promotion' ask")).toBe(true);
    });
    (0, vitest_1.it)("leaves an unknown placeholder in place and warns once per prompt", () => {
        warnings.length = 0;
        const prompt = (0, model_judge_1.buildJudgePrompt)("{metadata.missing} {nope} {metadata.missing}\n{submission}", {
            ...base,
            sample,
        });
        (0, vitest_1.expect)(prompt.startsWith("{metadata.missing} {nope} {metadata.missing}")).toBe(true);
        (0, vitest_1.expect)(warnings).toHaveLength(1);
        (0, vitest_1.expect)(warnings[0][0].placeholders).toEqual(["metadata.missing", "nope"]);
    });
});
//# sourceMappingURL=model-judge.test.js.map