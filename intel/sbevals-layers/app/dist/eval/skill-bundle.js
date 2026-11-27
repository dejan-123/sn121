"use strict";
// Skill bundles: SKILL.md plus optional reference files read on demand.
//
// A submission is no longer necessarily one file. The always-loaded
// instruction layer stays in SKILL.md; tables, templates and worked examples
// can live under references/ and are pulled by the agent only when the task
// needs them (`read_reference`). This mirrors how the product runs skills
// (Mastra `createSkill({ references })` + `skill_read`), so the Lab tests the
// same shape Scout ships.
//
// A task with no references behaves exactly as before this module existed:
// same tools, same load_skill output, same judge prompts.
//
// The caps equal Scout's attach-path caps (apps/scout-agent/src/skills/
// marketplace.ts in the platform repo). Scout SKIPS a reference over its caps
// rather than truncating it, so a bundle that passed the Lab with a larger
// reference would lose that file in production. Keep the two in step.
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFERENCES_FILE = exports.MAX_REFERENCES_TOTAL_CHARS = exports.MAX_REFERENCE_FILE_CHARS = exports.MAX_REFERENCE_FILES = void 0;
exports.normalizeReferencePath = normalizeReferencePath;
exports.validateReferences = validateReferences;
exports.sortReferences = sortReferences;
exports.loadReferences = loadReferences;
exports.formatSkillActivation = formatSkillActivation;
exports.bundleText = bundleText;
const node_fs_1 = require("node:fs");
exports.MAX_REFERENCE_FILES = 30;
exports.MAX_REFERENCE_FILE_CHARS = 32_000;
exports.MAX_REFERENCES_TOTAL_CHARS = 128_000;
// Name of the persisted path → content map in the run's files (see
// runner.ts:downloadTaskFiles). Absent when the task has no references.
exports.REFERENCES_FILE = "skill-references.json";
// The API validates paths at submit; this is the defence-in-depth copy. A
// path is a key the agent passes back to read_reference and a label shown to
// judges, so it must not carry anything but a plain relative name.
const SAFE_PATH_RE = /^[a-z0-9][a-z0-9._-]*(\/[a-z0-9][a-z0-9._-]*)*$/;
function normalizeReferencePath(raw) {
    return raw.trim().replace(/^\.\//, "").replace(/^references\//, "");
}
// Throws on any contract violation. The coordinator API rejects these at
// submit, so reaching here means a producer bug or a tampered payload; a loud
// job failure beats silently evaluating a different bundle than was submitted.
function validateReferences(refs) {
    if (refs.length > exports.MAX_REFERENCE_FILES) {
        throw new Error(`skill bundle has ${refs.length} reference files (max ${exports.MAX_REFERENCE_FILES})`);
    }
    const seen = new Set();
    let total = 0;
    for (const r of refs) {
        if (!SAFE_PATH_RE.test(r.path) || r.path.includes("..")) {
            throw new Error(`skill bundle reference has an invalid path: ${JSON.stringify(r.path.slice(0, 80))}`);
        }
        if (seen.has(r.path))
            throw new Error(`skill bundle reference path is duplicated: ${r.path}`);
        seen.add(r.path);
        if (r.content.length > exports.MAX_REFERENCE_FILE_CHARS) {
            throw new Error(`skill bundle reference ${r.path} is ${r.content.length} chars (max ${exports.MAX_REFERENCE_FILE_CHARS})`);
        }
        total += r.content.length;
    }
    if (total > exports.MAX_REFERENCES_TOTAL_CHARS) {
        throw new Error(`skill bundle references total ${total} chars (max ${exports.MAX_REFERENCES_TOTAL_CHARS})`);
    }
}
function sortReferences(refs) {
    return [...refs].sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
}
// Read the run's references back from disk, sorted by path. Empty when the
// task carried none.
function loadReferences(files) {
    const p = files[exports.REFERENCES_FILE];
    if (!p)
        return [];
    const map = JSON.parse((0, node_fs_1.readFileSync)(p, "utf8"));
    return sortReferences(Object.entries(map).map(([path, content]) => ({ path, content })));
}
// What load_skill returns. Same shape as Mastra's formatSkillActivation: the
// instructions, then a "## References" list of `references/<path>` lines.
// With no references this is the body unchanged.
function formatSkillActivation(body, refs) {
    if (refs.length === 0)
        return body;
    return `${body}\n\n## References\n${refs.map((r) => `- references/${r.path}`).join("\n")}`;
}
// One canonical text for the deterministic gates (literal overlap,
// redundancy, integrity patterns): SKILL.md, then each reference under a
// path header, sorted by path. Moving content from SKILL.md into a reference
// must not move it out of a gate's sight.
function bundleText(skillText, refs) {
    if (refs.length === 0)
        return skillText;
    return [skillText, ...refs.map((r) => `--- references/${r.path} ---\n${r.content}`)].join("\n\n");
}
//# sourceMappingURL=skill-bundle.js.map