"use strict";
// Deterministic redundancy gate: does SKILL.md pad itself with verbatim
// repetition?
//
// Why this exists: leader-review analyses across SBC18-22 found the
// leaderboard saturating with ever-longer essays that restate the same
// content — including winners shipping literally duplicated sentences
// (patch-on-patch iteration) — while the rubric grader scores them in the
// production zone. Verbatim repetition is never what a shippable skill
// looks like, and it is challenge-agnostic: no genuine reference we
// calibrated against contains any (see the spec for the calibration
// numbers), while the known bloated/gamed winners contain 2-3 duplicated
// sentences and elevated n-gram repetition.
//
// Two deterministic signals, measured on prose only (fenced code blocks and
// markdown structure lines — tables, headings, list items, quotes — are
// stripped first, because repeated table headers across worked examples are
// legitimate):
//
//  1. Duplicated sentences: normalized sentences ≥40 chars appearing more
//     than once. One extra occurrence is tolerated (an intentional refrain);
//     from the second on, each costs 0.3.
//  2. 10-gram repetition ratio: repeated 10-word sequences / total 10-grams.
//     Calibrated genuine skills sit ≤0.0025; padding pushes past 0.006.
//
// This is the cheap layer for VERBATIM redundancy only. Semantic bloat
// (restating an idea in different words) is deliberately out of scope here
// and belongs to an LLM-judged dimension.
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillRedundancy = void 0;
exports.extractProse = extractProse;
exports.measureRedundancy = measureRedundancy;
exports.scoreRedundancy = scoreRedundancy;
const MIN_SENTENCE_CHARS = 40;
const NGRAM_SIZE = 10;
// One repeated sentence is tolerated; each extra occurrence beyond that costs this.
const DUP_SENTENCE_PENALTY = 0.3;
// Repetition ratio below this is within the calibrated genuine band.
const REP_RATIO_FLOOR = 0.006;
// Ratio overage → penalty, capped so the sentence signal stays primary.
const REP_RATIO_SCALE = 80;
const REP_RATIO_MAX_PENALTY = 0.4;
// Strip fenced code blocks and markdown structure lines so only prose is
// measured — repeated table headers or headings across worked examples are
// legitimate formatting, not padding.
function extractProse(text) {
    const withoutFences = text.replace(/```[\s\S]*?```/g, " ");
    return withoutFences
        .split("\n")
        .filter((line) => {
        const t = line.trim();
        return !(t.startsWith("|") ||
            t.startsWith("#") ||
            t.startsWith("-") ||
            t.startsWith(">"));
    })
        .join("\n");
}
function normalizeSentence(s) {
    return s
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}
function measureRedundancy(text) {
    const prose = extractProse(text);
    const sentences = prose
        .split(/(?<=[.!?])\s+|\n+/)
        .map(normalizeSentence)
        .filter((s) => s.length >= MIN_SENTENCE_CHARS);
    const counts = new Map();
    for (const s of sentences)
        counts.set(s, (counts.get(s) ?? 0) + 1);
    const duplicated = [...counts.entries()].filter(([, c]) => c > 1);
    const duplicateExtraCount = duplicated.reduce((sum, [, c]) => sum + c - 1, 0);
    const words = prose
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(Boolean);
    const grams = new Map();
    for (let i = 0; i + NGRAM_SIZE <= words.length; i++) {
        const g = words.slice(i, i + NGRAM_SIZE).join(" ");
        grams.set(g, (grams.get(g) ?? 0) + 1);
    }
    let repeated = 0;
    for (const c of grams.values())
        if (c > 1)
            repeated += c - 1;
    const repetitionRatio = grams.size > 0 ? repeated / grams.size : 0;
    return {
        duplicatedSentences: duplicated.map(([s]) => s),
        duplicateExtraCount,
        repetitionRatio,
    };
}
function scoreRedundancy(metrics) {
    let score = 1.0;
    if (metrics.duplicateExtraCount >= 2) {
        score -= DUP_SENTENCE_PENALTY * (metrics.duplicateExtraCount - 1);
    }
    if (metrics.repetitionRatio >= REP_RATIO_FLOOR) {
        score -= Math.min(REP_RATIO_MAX_PENALTY, (metrics.repetitionRatio - REP_RATIO_FLOOR) * REP_RATIO_SCALE);
    }
    return Math.max(0, Math.round(score * 1000) / 1000);
}
const skillRedundancy = async (ctx) => {
    let data;
    try {
        data = JSON.parse(ctx.submission);
    }
    catch {
        // Permissive default, matching check_skill_integrity: extraction
        // problems are not this gate's signal.
        return { score: 1.0, rationale: "Could not parse submission; defaulting to pass" };
    }
    const skill = data?.skill ?? {};
    const skillText = skill.raw && skill.raw.length > (skill.body?.length ?? 0)
        ? skill.raw
        : (skill.body ?? "");
    if (!skillText) {
        return { score: 0.0, rationale: "No SKILL.md content found" };
    }
    // A bundle is measured file by file, and the worst file sets the score.
    // Padding inside any one file still counts. A sentence that appears once
    // in SKILL.md and once in a reference does not: a worked example that
    // restates the body's required opening line is a pointer, not padding,
    // and measuring the concatenation zeroed exactly that shape on the first
    // bundle challenge (SBC30, 15 Oct 2026) while every single file passed.
    const files = [
        { name: "SKILL.md", text: skillText },
        ...(data?.references ?? []).map((r) => ({
            name: `references/${r.path}`,
            text: r.content ?? "",
        })),
    ];
    let worst = null;
    for (const file of files) {
        const metrics = measureRedundancy(file.text);
        const score = scoreRedundancy(metrics);
        if (!worst || score < worst.score)
            worst = { name: file.name, metrics, score };
    }
    const { metrics, score } = worst;
    if (score >= 1.0) {
        return { score: 1.0, rationale: "No verbatim redundancy detected" };
    }
    const where = files.length > 1 ? ` in ${worst.name}` : "";
    const parts = [];
    if (metrics.duplicateExtraCount > 0) {
        const examples = metrics.duplicatedSentences
            .slice(0, 3)
            .map((s) => `"${s.slice(0, 80)}${s.length > 80 ? "…" : ""}"`)
            .join("; ");
        parts.push(`${metrics.duplicatedSentences.length} sentence(s) duplicated verbatim ` +
            `(${metrics.duplicateExtraCount} extra occurrence(s)): ${examples}`);
    }
    if (metrics.repetitionRatio >= REP_RATIO_FLOOR) {
        parts.push(`10-gram repetition ratio ${metrics.repetitionRatio.toFixed(4)} ` +
            `(calibrated genuine band ≤0.0025)`);
    }
    return { score, rationale: `Verbatim redundancy${where}: ${parts.join("; ")}` };
};
exports.skillRedundancy = skillRedundancy;
//# sourceMappingURL=skill-redundancy.js.map