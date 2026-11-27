"use strict";
// Score 0.0 if the submission contains any term in
// `extractor_config.terms` (case-insensitive); 1.0 otherwise. Useful for
// explicit forbid-words rules ("never again", "sorry you feel that way").
Object.defineProperty(exports, "__esModule", { value: true });
exports.blacklistSubstrings = void 0;
const blacklistSubstrings = async (ctx) => {
    const spec = ctx.spec;
    const cfg = (spec.extractor_config ?? {});
    const terms = (cfg.terms ?? []).map((t) => t.toLowerCase());
    const hay = ctx.submission.toLowerCase();
    const hits = terms.filter((t) => hay.includes(t));
    return hits.length === 0
        ? { score: 1.0, rationale: "No blacklisted terms detected" }
        : { score: 0.0, rationale: `Contains blacklisted terms: ${hits.join(", ")}` };
};
exports.blacklistSubstrings = blacklistSubstrings;
//# sourceMappingURL=blacklist-substrings.js.map