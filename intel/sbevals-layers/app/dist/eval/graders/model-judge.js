"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runModelJudge = runModelJudge;
exports.buildJudgePrompt = buildJudgePrompt;
exports.escapeUnescapedControls = escapeUnescapedControls;
exports.parseJudgeOutput = parseJudgeOutput;
const node_fs_1 = require("node:fs");
const factory_1 = require("../agent/providers/factory");
const dataset_1 = require("../dataset");
const judge_feedback_1 = require("./judge-feedback");
async function runModelJudge(input) {
    const rubricTemplate = await node_fs_1.promises.readFile(input.rubricPath, "utf8");
    const prompt = buildJudgePrompt(rubricTemplate, input);
    const judge = (0, factory_1.makeProvider)(input.spec.provider, input.cfg);
    let lastErr;
    for (let attempt = 0; attempt < input.spec.max_retries; attempt++) {
        try {
            const { raw, usage } = await judge.judge({
                prompt,
                model: input.spec.model,
                temperature: input.spec.temperature,
                timeoutMs: Math.floor(input.spec.timeout * 1000),
                maxTokens: input.cfg.judgeMaxTokens,
            });
            const parsed = parseJudgeOutput(raw);
            // The miner-facing note is rendered from the score, never written by
            // the judge (judge-feedback.ts).
            const feedback = (0, judge_feedback_1.bandFeedback)(parsed.score);
            // Carry the per-call token usage into the GradeResult so the runner
            // can aggregate into summary.metrics.tokens_by_grader.
            return { ...parsed, ...(feedback ? { feedback } : {}), usage };
        }
        catch (err) {
            lastErr = err;
            input.logger.warn({ err, attempt, sampleId: input.sample.id }, "model_judge call failed, retrying");
        }
    }
    throw new Error(`model_judge failed after ${input.spec.max_retries} attempts: ${lastErr?.message}`);
}
function buildJudgePrompt(template, input) {
    const vars = {
        submission: input.submission,
        input: typeof input.sample.input === "string" ? input.sample.input : input.sample.input.join("\n"),
    };
    // Structured values reachable by dotted path ({metadata.judge_notes}).
    const tree = {};
    const gt = (0, dataset_1.parseGroundTruth)(input.sample.ground_truth);
    if (gt && typeof gt === "object" && !Array.isArray(gt)) {
        const obj = gt;
        if (typeof obj.output === "string")
            vars.reference_answer = obj.output;
        if (obj.metadata && typeof obj.metadata === "object") {
            vars.metadata = JSON.stringify(obj.metadata, null, 2);
            tree.metadata = obj.metadata;
            for (const [k, v] of Object.entries(obj.metadata)) {
                vars[k] = typeof v === "string" ? v : JSON.stringify(v);
            }
        }
    }
    else if (typeof gt === "string") {
        vars.reference_answer = gt;
    }
    // rubric_vars override (suite-declared explicit pass-through).
    if (input.sample.rubric_vars) {
        for (const [k, v] of Object.entries(input.sample.rubric_vars)) {
            vars[k] = typeof v === "string" ? v : JSON.stringify(v);
        }
    }
    // {var} substitution. A flat name reads the vars above; a dotted name
    // walks the structured tree ({metadata.judge_notes} → metadata.judge_notes).
    // The suite-builder has written its rubrics in the dotted form since the
    // first challenge, and until 1.0.42 the pattern here matched \w only, so
    // the judge read the literal placeholder and never saw the per-sample
    // notes, weights or trap flag (reported by a miner, 2026-11-17).
    const resolve = (key) => {
        if (key in vars)
            return vars[key];
        if (!key.includes("."))
            return undefined;
        let node = tree;
        for (const part of key.split(".")) {
            if (!node || typeof node !== "object" || !(part in node))
                return undefined;
            node = node[part];
        }
        if (node === undefined)
            return undefined;
        return typeof node === "string" ? node : JSON.stringify(node);
    };
    const unresolved = [];
    let prompt = template.replace(/\{([\w.]+)\}/g, (m, k) => {
        const v = resolve(k);
        if (v === undefined)
            unresolved.push(k);
        return v ?? m;
    });
    // Unknown vars are left as-is so the rubric author can spot missing
    // context in the rendered prompt, and logged so it is noticed in production.
    if (unresolved.length > 0) {
        input.logger.warn({ sampleId: input.sample.id, placeholders: [...new Set(unresolved)] }, "rubric placeholders left unrendered (not in sample metadata or rubric_vars)");
    }
    // Production rubrics (e.g. SBC9 customer-email) often have NO
    // placeholders at all — they're criteria-only and rely on the framework
    // to append the submission. Match letta-evals' behavior: if the rubric
    // didn't reference {submission} or {input}, append the relevant
    // material so the judge can actually score it.
    const referenced = new Set();
    for (const m of template.matchAll(/\{(\w+)\}/g))
        referenced.add(m[1]);
    if (!referenced.has("submission")) {
        const inputText = vars.input ?? "";
        prompt +=
            "\n\n--- AGENT'S SUBMISSION TO GRADE ---\n" +
                input.submission +
                "\n\n--- ORIGINAL TASK INPUT ---\n" +
                inputText;
        if (vars.reference_answer) {
            prompt += "\n\n--- REFERENCE ANSWER (for anchoring) ---\n" + vars.reference_answer;
        }
    }
    // Many production rubrics are criteria-only and don't tell the judge
    // how to format its reply. letta-evals supplies that via a system
    // message ("respond with valid JSON only"). Our JudgeInput is a single
    // prompt, so we append the JSON spec here when the rubric didn't
    // already include the words "JSON" or "score" in an instruction. Loose
    // detection on purpose — false positives just produce a duplicate
    // hint, which the judge ignores.
    if (!/\b(?:respond|return|reply|output)[\s\S]{0,80}json/i.test(template)) {
        prompt +=
            '\n\n--- OUTPUT FORMAT ---\n' +
                'Respond with ONLY a JSON object on a single line, no prose around it:\n' +
                '{"score": <number 0.0-1.0>, "rationale": "<2-3 sentences citing evidence from the submission>"}';
    }
    return prompt;
}
// Walks `s` and replaces bare control chars (\n, \r, \t) with their escaped
// forms — but only when they appear inside a JSON string literal. Outside
// strings (whitespace between tokens) they're left alone. Needed because
// LLM judges often pretty-print multi-paragraph rationales with literal
// newlines inside the "rationale" value, which strict JSON.parse rejects.
// See docs/model-judge-json-parse-fragility.md for the empirical case.
function escapeUnescapedControls(s) {
    let out = "";
    let inString = false;
    let escaped = false;
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (inString) {
            if (escaped) {
                out += ch;
                escaped = false;
                continue;
            }
            if (ch === "\\") {
                out += ch;
                escaped = true;
                continue;
            }
            if (ch === '"') {
                out += ch;
                inString = false;
                continue;
            }
            if (ch === "\n") {
                out += "\\n";
                continue;
            }
            if (ch === "\r") {
                out += "\\r";
                continue;
            }
            if (ch === "\t") {
                out += "\\t";
                continue;
            }
            out += ch;
        }
        else {
            out += ch;
            if (ch === '"')
                inString = true;
        }
    }
    return out;
}
function parseJudgeOutput(raw) {
    // Try to find a JSON object containing score+rationale. Be lenient — the
    // judge may wrap it in prose or code fences.
    const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
    const candidate = fenced ? fenced[1] : raw;
    const objMatch = candidate.match(/\{[\s\S]*\}/);
    // Truncation recovery: if we can't find a complete JSON object (no closing
    // brace — typically because the response hit max_tokens mid-rationale), try
    // to extract just the score from the raw text. The score appears early in
    // the JSON ("score": 0.72) so it's almost always present even when the
    // rationale is cut off.
    if (!objMatch) {
        const scoreRescue = raw.match(/"score"\s*:\s*(\d+(?:\.\d+)?)/);
        if (scoreRescue) {
            const score = Math.max(0, Math.min(1, parseFloat(scoreRescue[1])));
            return {
                score,
                rationale: "(truncated response — score recovered, rationale lost)",
            };
        }
        throw new Error(`model_judge returned no JSON object: ${raw.slice(0, 300)}`);
    }
    const cleaned = escapeUnescapedControls(objMatch[0]);
    let parsed;
    try {
        parsed = JSON.parse(cleaned);
    }
    catch (err) {
        // Second truncation recovery path: JSON started but parse failed
        // (e.g., rationale cut off mid-sentence, no closing brace after
        // escaping). Try to extract the score from the matched region.
        const scoreRescue = cleaned.match(/"score"\s*:\s*(\d+(?:\.\d+)?)/);
        if (scoreRescue) {
            const score = Math.max(0, Math.min(1, parseFloat(scoreRescue[1])));
            return {
                score,
                rationale: "(truncated JSON — score recovered, rationale lost)",
            };
        }
        throw new Error(`model_judge JSON parse failed: ${err.message}: ${objMatch[0].slice(0, 300)}`);
    }
    const obj = parsed;
    const score = typeof obj.score === "number" ? obj.score : Number(obj.score);
    if (!Number.isFinite(score))
        throw new Error(`model_judge score is not numeric: ${JSON.stringify(obj.score)}`);
    return {
        score: Math.max(0, Math.min(1, score)),
        rationale: typeof obj.rationale === "string" ? obj.rationale : "",
    };
}
//# sourceMappingURL=model-judge.js.map