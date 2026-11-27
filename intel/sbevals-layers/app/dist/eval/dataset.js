"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDataset = loadDataset;
exports.parseGroundTruth = parseGroundTruth;
// Loads dataset rows from a JSONL or CSV string. We keep parity with
// letta-evals' loader semantics: ground_truth may be a string, a JSON object,
// or a JSON-encoded string that itself contains output+metadata.
function loadDataset(text, format = "jsonl") {
    if (format === "csv")
        return loadCsv(text);
    return loadJsonl(text);
}
function loadJsonl(text) {
    const samples = [];
    const lines = text.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line)
            continue;
        let row;
        try {
            row = JSON.parse(line);
        }
        catch (err) {
            throw new Error(`Dataset JSONL line ${i + 1} is not valid JSON: ${err.message}`);
        }
        samples.push(toSample(row, i));
    }
    return samples;
}
function loadCsv(text) {
    const rows = parseCsv(text);
    if (rows.length === 0)
        return [];
    const header = rows[0];
    return rows.slice(1).map((cells, idx) => {
        const row = {};
        header.forEach((h, i) => (row[h] = cells[i] ?? ""));
        return toSample(row, idx);
    });
}
function toSample(row, idx) {
    const id = String(row.id ?? `sample-${idx}`);
    const input = row.input;
    if (typeof input !== "string" && !Array.isArray(input)) {
        throw new Error(`Dataset row ${id} has invalid 'input' (must be string or string[])`);
    }
    return {
        id,
        input: input,
        ground_truth: row.ground_truth,
        agent_args: row.agent_args ?? null,
        rubric_vars: row.rubric_vars ?? null,
        extra_vars: row.extra_vars ?? null,
    };
}
// Minimal CSV parser supporting double-quoted fields with embedded commas
// and quotes. We keep this in-house to avoid pulling in a CSV dep.
function parseCsv(text) {
    const rows = [];
    let row = [];
    let cell = "";
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (inQuotes) {
            if (ch === '"') {
                if (text[i + 1] === '"') {
                    cell += '"';
                    i++;
                }
                else {
                    inQuotes = false;
                }
            }
            else {
                cell += ch;
            }
            continue;
        }
        if (ch === '"') {
            inQuotes = true;
        }
        else if (ch === ",") {
            row.push(cell);
            cell = "";
        }
        else if (ch === "\n" || ch === "\r") {
            if (ch === "\r" && text[i + 1] === "\n")
                i++;
            row.push(cell);
            rows.push(row);
            row = [];
            cell = "";
        }
        else {
            cell += ch;
        }
    }
    if (cell.length > 0 || row.length > 0) {
        row.push(cell);
        rows.push(row);
    }
    return rows.filter((r) => r.length > 1 || (r.length === 1 && r[0] !== ""));
}
// Helper used by graders and extractors to coerce ground_truth into a
// structured object when it's a JSON-encoded string.
function parseGroundTruth(gt) {
    if (typeof gt !== "string")
        return gt;
    const trimmed = gt.trim();
    if (!trimmed.startsWith("{") && !trimmed.startsWith("["))
        return gt;
    try {
        return JSON.parse(trimmed);
    }
    catch {
        return gt;
    }
}
//# sourceMappingURL=dataset.js.map