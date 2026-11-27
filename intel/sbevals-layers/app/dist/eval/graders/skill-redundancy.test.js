"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const skill_redundancy_1 = require("./skill-redundancy");
// Calibration context (2026-08-30, real submissions): genuine winners from
// SBC18/19/20 measure 0 duplicated sentences and repetition ratio ≤0.0025;
// the SBC21 winner ships 2 verbatim-duplicated sentences (ratio 0.0111) and
// the SBC20 gamed submission 3. Thresholds in the grader come from that gap.
const FILLER = "Coverage is judged against the remaining quota for the period in question. " +
    "Every claim is tested against the record before any verdict is written. " +
    "The reader is owed the arithmetic behind every ratio on the page. ";
// Unique prose per call so the filler itself never trips the duplicate check.
let fillerSeq = 0;
function uniqueFiller() {
    fillerSeq += 1;
    return (`Paragraph number ${fillerSeq} discusses an entirely distinct topic about evaluations. ` +
        `Nothing in section ${fillerSeq} repeats material from any other numbered section here. `);
}
function ctxFor(body) {
    return {
        submission: JSON.stringify({ skill: { body } }),
        sample: {},
        trajectory: {},
        spec: { kind: "tool" },
        files: {},
    };
}
// Prose with no repeated 10-gram at all: every sentence is built from its own
// index, so two paragraphs in one short file never share a word sequence.
const WORDS = ("ledger quota variance owner evidence forecast margin cadence audit remit " +
    "signal baseline rollout pilot charter backlog hazard surplus deficit tenure").split(" ");
let proseSeq = 0;
function distinctProse(sentences = 3) {
    const out = [];
    for (let k = 0; k < sentences; k++) {
        proseSeq += 1;
        const w = (i) => WORDS[(proseSeq * 7 + i * 3) % WORDS.length];
        out.push(`Item ${proseSeq} notes that the ${w(0)} of each ${w(1)} is reviewed before the ${w(2)} ` +
            `changes, since a ${w(3)} without its ${w(4)} misleads the ${w(5)} and the ${w(6)} alike.`);
    }
    return out.join(" ") + " ";
}
// A bundle as the skill_content extractor emits it: SKILL.md raw plus every
// reference, and bundle_text as the concatenation under path headers.
function bundleCtxFor(body, references) {
    const bundle_text = [
        body,
        ...references.map((r) => `--- references/${r.path} ---\n${r.content}`),
    ].join("\n\n");
    return {
        submission: JSON.stringify({ skill: { body, raw: body }, references, bundle_text }),
        sample: {},
        trajectory: {},
        spec: { kind: "tool" },
        files: {},
    };
}
(0, vitest_1.describe)("extractProse", () => {
    (0, vitest_1.it)("strips fenced code blocks and markdown structure lines", () => {
        const text = [
            "Real prose sentence that should remain in the analysis window.",
            "```",
            "| repeated | table | header |",
            "```",
            "| repeated | table | header |",
            "# A heading line",
            "- a list item",
            "> a quote",
            "More prose.",
        ].join("\n");
        const prose = (0, skill_redundancy_1.extractProse)(text);
        (0, vitest_1.expect)(prose).toContain("Real prose sentence");
        (0, vitest_1.expect)(prose).toContain("More prose.");
        (0, vitest_1.expect)(prose).not.toContain("table");
        (0, vitest_1.expect)(prose).not.toContain("heading");
        (0, vitest_1.expect)(prose).not.toContain("list item");
    });
});
(0, vitest_1.describe)("measureRedundancy", () => {
    (0, vitest_1.it)("finds no redundancy in varied prose", () => {
        const m = (0, skill_redundancy_1.measureRedundancy)(FILLER);
        (0, vitest_1.expect)(m.duplicateExtraCount).toBe(0);
        (0, vitest_1.expect)(m.duplicatedSentences).toHaveLength(0);
    });
    (0, vitest_1.it)("counts verbatim duplicated sentences despite punctuation/case drift", () => {
        const dup = "A tier reported without the basis it was read against has not told the reader what it means.";
        const m = (0, skill_redundancy_1.measureRedundancy)(`${uniqueFiller()}${dup} ${uniqueFiller()}${dup.toUpperCase()} `);
        (0, vitest_1.expect)(m.duplicatedSentences).toHaveLength(1);
        (0, vitest_1.expect)(m.duplicateExtraCount).toBe(1);
    });
    (0, vitest_1.it)("does not count repeated table headers as duplication", () => {
        const table = "| Deal | Owner | Amount | Category | Signal | Exposure |";
        const m = (0, skill_redundancy_1.measureRedundancy)(`${uniqueFiller()}\n${table}\n${uniqueFiller()}\n${table}\n`);
        (0, vitest_1.expect)(m.duplicateExtraCount).toBe(0);
    });
    (0, vitest_1.it)("ignores short repeated sentences below the length floor", () => {
        const m = (0, skill_redundancy_1.measureRedundancy)(`${uniqueFiller()}Say so plainly. ${uniqueFiller()}Say so plainly.`);
        (0, vitest_1.expect)(m.duplicateExtraCount).toBe(0);
    });
});
(0, vitest_1.describe)("scoreRedundancy", () => {
    (0, vitest_1.it)("tolerates a single repeated refrain", () => {
        (0, vitest_1.expect)((0, skill_redundancy_1.scoreRedundancy)({
            duplicatedSentences: ["x"],
            duplicateExtraCount: 1,
            repetitionRatio: 0.002,
        })).toBe(1.0);
    });
    (0, vitest_1.it)("penalizes from the second extra occurrence on", () => {
        (0, vitest_1.expect)((0, skill_redundancy_1.scoreRedundancy)({
            duplicatedSentences: ["x", "y"],
            duplicateExtraCount: 2,
            repetitionRatio: 0,
        })).toBe(0.7);
        (0, vitest_1.expect)((0, skill_redundancy_1.scoreRedundancy)({
            duplicatedSentences: ["x", "y", "z"],
            duplicateExtraCount: 3,
            repetitionRatio: 0,
        })).toBe(0.4);
    });
    (0, vitest_1.it)("adds a capped penalty for elevated n-gram repetition", () => {
        // SBC21-winner-shaped metrics: 2 dup sentences + ratio 0.0111
        const score = (0, skill_redundancy_1.scoreRedundancy)({
            duplicatedSentences: ["x", "y"],
            duplicateExtraCount: 2,
            repetitionRatio: 0.0111,
        });
        (0, vitest_1.expect)(score).toBeCloseTo(0.3, 5);
    });
});
(0, vitest_1.describe)("skillRedundancy grader", () => {
    (0, vitest_1.it)("passes clean prose at 1.0", async () => {
        const result = await (0, skill_redundancy_1.skillRedundancy)(ctxFor(FILLER + "A closing thought."));
        (0, vitest_1.expect)(result.score).toBe(1.0);
    });
    (0, vitest_1.it)("fails a body with multiple duplicated sentences and names them", async () => {
        const dupA = "Where the desk has measured its own commit conversion, read the tier against that number.";
        const dupB = "A tier reported without the basis it was read against has not told the reader what it means.";
        const body = `${FILLER}${dupA} ${dupB} ${FILLER}${dupA} ${dupB}`;
        const result = await (0, skill_redundancy_1.skillRedundancy)(ctxFor(body));
        (0, vitest_1.expect)(result.score).toBeLessThan(1.0);
        (0, vitest_1.expect)(result.rationale).toContain("duplicated verbatim");
    });
    (0, vitest_1.it)("defaults to pass on unparseable submissions", async () => {
        const result = await (0, skill_redundancy_1.skillRedundancy)({
            ...ctxFor(""),
            submission: "not json",
        });
        (0, vitest_1.expect)(result.score).toBe(1.0);
    });
    (0, vitest_1.it)("fails an empty skill body", async () => {
        const result = await (0, skill_redundancy_1.skillRedundancy)(ctxFor(""));
        (0, vitest_1.expect)(result.score).toBe(0.0);
    });
});
(0, vitest_1.describe)("skillRedundancy grader on a bundle", () => {
    const OPENING = "Return to the package and write the briefing; its first characters are the title line exactly as shown.";
    (0, vitest_1.it)("does not count a sentence that appears once in SKILL.md and once per reference", async () => {
        const body = `# Skill\n\n${distinctProse()}${OPENING} ${distinctProse()}`;
        const references = [
            { path: "worked-briefing.md", content: `# Worked briefing\n\n${distinctProse()}${OPENING} ${distinctProse()}` },
            { path: "section-guide.md", content: `# Sections\n\n${distinctProse()}${OPENING} ${distinctProse()}` },
        ];
        // Measured as one text this is the SBC30 false positive: three copies of the
        // same sentence, two extra occurrences, a 0.3 penalty.
        const concatenated = (0, skill_redundancy_1.measureRedundancy)([body, ...references.map((r) => r.content)].join("\n\n"));
        (0, vitest_1.expect)(concatenated.duplicateExtraCount).toBe(2);
        const result = await (0, skill_redundancy_1.skillRedundancy)(bundleCtxFor(body, references));
        (0, vitest_1.expect)(result.score).toBe(1.0);
    });
    (0, vitest_1.it)("still fails a reference that repeats itself, and names the file", async () => {
        const body = `# Skill\n\n${distinctProse()}${distinctProse()}`;
        const padded = `# Examples\n\n${distinctProse()}${OPENING} ${distinctProse()}${OPENING} ` +
            `${distinctProse()}${OPENING} ${distinctProse()}`;
        const result = await (0, skill_redundancy_1.skillRedundancy)(bundleCtxFor(body, [
            { path: "clean.md", content: `# Clean\n\n${distinctProse()}` },
            { path: "padded.md", content: padded },
        ]));
        (0, vitest_1.expect)(result.score).toBeLessThan(1.0);
        (0, vitest_1.expect)(result.rationale).toContain("in references/padded.md");
        (0, vitest_1.expect)(result.rationale).toContain("duplicated verbatim");
    });
    (0, vitest_1.it)("still fails a padded SKILL.md inside an otherwise clean bundle", async () => {
        const body = `# Skill\n\n${distinctProse()}${OPENING} ${distinctProse()}${OPENING} ` +
            `${distinctProse()}${OPENING} ${distinctProse()}`;
        const result = await (0, skill_redundancy_1.skillRedundancy)(bundleCtxFor(body, [{ path: "notes.md", content: `# Notes\n\n${distinctProse()}` }]));
        (0, vitest_1.expect)(result.score).toBeLessThan(1.0);
        (0, vitest_1.expect)(result.rationale).toContain("in SKILL.md");
    });
});
//# sourceMappingURL=skill-redundancy.test.js.map