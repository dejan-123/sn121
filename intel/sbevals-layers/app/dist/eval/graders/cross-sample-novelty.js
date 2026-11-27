"use strict";
// Cross-sample novelty grader.
//
// Detects template-based skills that produce structurally identical
// responses across different scenarios. Uses a factory pattern so the
// grader accumulates responses across samples within a single eval run.
//
// For each sample, computes structural similarity against all previously
// seen responses in the same novelty_group (from ground_truth.metadata).
// If the response is too similar to prior responses, the score is reduced.
//
// Inputs from ground_truth.metadata:
//   - novelty_group: string (e.g. "A", "B") — responses in the same group
//     should be structurally DIFFERENT. Optional; defaults to "default".
//
// Configuration in suite.yaml:
//   novelty_check:
//     kind: tool
//     function: cross_sample_novelty
//     extractor: last_assistant
//     weight: 0.15
//     extractor_config:
//       similarity_threshold: 0.80   # optional, default 0.80
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCrossSampleNovelty = makeCrossSampleNovelty;
const dataset_1 = require("../dataset");
/**
 * Extract a structural fingerprint from a response:
 * - paragraph count
 * - line count
 * - average sentence length
 * - opening words (first 5 words)
 * - closing words (last 5 words)
 * - section headers (lines starting with # or **)
 * - bullet/number list count
 */
function extractFingerprint(text) {
    const lines = text.split("\n");
    const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0);
    const words = text.split(/\s+/).filter((w) => w.length > 0);
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    const headers = lines
        .filter((l) => /^#{1,4}\s/.test(l.trim()) || /^\*\*[^*]+\*\*\s*$/.test(l.trim()))
        .map((l) => l.trim().toLowerCase().replace(/[#*]/g, "").trim());
    const listItems = lines.filter((l) => /^\s*[-*•]\s|^\s*\d+[.)]\s/.test(l));
    return {
        paragraphCount: paragraphs.length,
        lineCount: lines.length,
        avgWordCount: sentences.length > 0 ? Math.round(words.length / sentences.length) : 0,
        openingWords: words.slice(0, 5).join(" ").toLowerCase(),
        closingWords: words.slice(-5).join(" ").toLowerCase(),
        headers,
        listItemCount: listItems.length,
        wordCount: words.length,
    };
}
/**
 * Compute structural similarity between two fingerprints (0.0–1.0).
 * Higher = more similar = more likely a template.
 */
function computeSimilarity(a, b) {
    let score = 0;
    let checks = 0;
    // Paragraph count similarity
    checks++;
    if (a.paragraphCount === b.paragraphCount)
        score += 1;
    else if (Math.abs(a.paragraphCount - b.paragraphCount) <= 1)
        score += 0.5;
    // Line count similarity (within 10%)
    checks++;
    const lineDiff = Math.abs(a.lineCount - b.lineCount);
    const maxLines = Math.max(a.lineCount, b.lineCount, 1);
    if (lineDiff / maxLines < 0.1)
        score += 1;
    else if (lineDiff / maxLines < 0.2)
        score += 0.5;
    // Word count similarity (within 15%)
    checks++;
    const wordDiff = Math.abs(a.wordCount - b.wordCount);
    const maxWords = Math.max(a.wordCount, b.wordCount, 1);
    if (wordDiff / maxWords < 0.15)
        score += 1;
    else if (wordDiff / maxWords < 0.3)
        score += 0.5;
    // Opening words match
    checks++;
    if (a.openingWords === b.openingWords)
        score += 1;
    else {
        const aWords = a.openingWords.split(" ");
        const bWords = b.openingWords.split(" ");
        const overlap = aWords.filter((w) => bWords.includes(w)).length;
        score += overlap / Math.max(aWords.length, bWords.length, 1);
    }
    // Closing words match
    checks++;
    if (a.closingWords === b.closingWords)
        score += 1;
    else {
        const aWords = a.closingWords.split(" ");
        const bWords = b.closingWords.split(" ");
        const overlap = aWords.filter((w) => bWords.includes(w)).length;
        score += overlap / Math.max(aWords.length, bWords.length, 1);
    }
    // Header structure match
    checks++;
    if (a.headers.length === 0 && b.headers.length === 0) {
        score += 0.5; // neutral — no headers in either
    }
    else if (a.headers.length === b.headers.length) {
        const matching = a.headers.filter((h, i) => b.headers[i] === h).length;
        score += matching / Math.max(a.headers.length, 1);
    }
    // List item count similarity
    checks++;
    if (a.listItemCount === b.listItemCount)
        score += 1;
    else if (Math.abs(a.listItemCount - b.listItemCount) <= 1)
        score += 0.5;
    return checks > 0 ? score / checks : 0;
}
function makeCrossSampleNovelty(_deps) {
    // State that persists across samples within a single eval run.
    // Maps novelty_group → list of (sample_id, fingerprint, raw_text).
    const seenByGroup = new Map();
    return async (ctx) => {
        const submission = ctx.submission;
        if (!submission || submission.trim().length === 0) {
            return { score: 0.0, rationale: "No submission to evaluate for novelty" };
        }
        // Get novelty group from metadata
        const gt = (0, dataset_1.parseGroundTruth)(ctx.sample.ground_truth);
        const meta = gt && typeof gt === "object" && !Array.isArray(gt)
            ? gt.metadata ?? {}
            : {};
        const noveltyGroup = typeof meta.novelty_group === "string" ? meta.novelty_group : "default";
        // Get similarity threshold from config
        const threshold = typeof ctx.spec.extractor_config?.similarity_threshold === "number"
            ? ctx.spec.extractor_config.similarity_threshold
            : 0.8;
        const fingerprint = extractFingerprint(submission);
        const group = seenByGroup.get(noveltyGroup) ?? [];
        // Compare against all previously seen responses in this group
        let maxSimilarity = 0;
        let mostSimilarId = "";
        for (const prev of group) {
            const sim = computeSimilarity(fingerprint, prev.fingerprint);
            if (sim > maxSimilarity) {
                maxSimilarity = sim;
                mostSimilarId = prev.sampleId;
            }
        }
        // Store this response for future comparisons
        group.push({ sampleId: ctx.sample.id, fingerprint, text: submission });
        seenByGroup.set(noveltyGroup, group);
        // Score: 1.0 if novel, reduced proportionally if too similar
        if (group.length <= 1) {
            // First sample in group — no comparison possible, full score
            return { score: 1.0, rationale: "First sample in novelty group — no comparison" };
        }
        if (maxSimilarity >= threshold) {
            const penalty = Math.min(1.0, (maxSimilarity - threshold) / (1.0 - threshold));
            const score = Math.max(0.0, 1.0 - penalty);
            return {
                score: Math.round(score * 100000) / 100000,
                rationale: `Structural similarity ${maxSimilarity.toFixed(3)} with ${mostSimilarId} ` +
                    `exceeds threshold ${threshold} (group=${noveltyGroup}). ` +
                    `Fingerprint: ${fingerprint.paragraphCount} paragraphs, ` +
                    `${fingerprint.listItemCount} list items, ${fingerprint.wordCount} words.`,
            };
        }
        return {
            score: 1.0,
            rationale: `Novel response (max similarity ${maxSimilarity.toFixed(3)} < ${threshold}, ` +
                `group=${noveltyGroup}, compared against ${group.length - 1} prior)`,
        };
    };
}
//# sourceMappingURL=cross-sample-novelty.js.map