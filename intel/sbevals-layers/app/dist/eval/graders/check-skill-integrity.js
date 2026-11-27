"use strict";
// Deterministic structural gate: does SKILL.md contain content that's
// hardcoded to the specific dataset variants this challenge uses?
//
// Old behavior (pre-2026-06-15): hardcoded regex list pinned to the SBC9
// challenge's variant set. Worked for SBC9, useless for every other
// challenge — a miner could paste any non-SBC9 variant straight into
// SKILL.md and slip through.
//
// New behavior: at first invocation per dataset-path cache key, read
// `dataset.jsonl` from the suite files, extract three categories of
// patterns from sample.input + ground_truth, then scan SKILL.md for
// any of those patterns. The dataset is the source of truth for what
// "variant-specific content" means for THIS challenge, so the gate now
// generalizes.
//
// Important: extracted patterns are NEVER returned in the suite or in
// the GradeResult — they only live in memory at eval time. A miner
// reading the rendered suite sees no list of forbidden strings.
//
// Strictness: this is the cheap deterministic layer. It catches lazy
// copy-paste (verbatim substrings, named entities, specific currency
// amounts). The LLM layer (dataset_derived_knowledge) catches synonym
// swaps and paraphrasing — two-layer defense, each doing what it's
// cheap at.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSkillIntegrity = void 0;
const fs = __importStar(require("node:fs"));
// Patterns that catch dataset-agnostic structural cheats (if/then table
// templates, paste-style scripts). These don't depend on the dataset —
// any challenge benefits from catching them — so they stay hardcoded.
const STRUCTURAL_TEMPLATE_PATTERNS = [
    // "If customer says X, respond with Y" lookup-table templates
    /(if|when)\s+(the\s+)?customer.{0,40}(respond|reply|send|say|use).{0,40}(with|the following|this template|this response)/i,
    // Same pattern, generic actor instead of "customer"
    /(if|when)\s+(the\s+)?(user|client|prospect|caller).{0,40}(respond|reply|send|say|use).{0,40}(with|the following|this template|this response)/i,
];
// In-process cache: extracting patterns from a large dataset is
// non-trivial cost (~20-200ms depending on dataset size + tokenization).
// Cache by dataset file path so each suite extracts once.
//
// Bounded LRU — dataset paths are per-job, so an unbounded map would grow
// one (potentially large) pattern set per eval forever in the long-running
// service. The cap sits well above the worker pool's max concurrency
// (MAX_CONCURRENT_EVALS, ≤20) so in-flight jobs never evict each other; an
// eviction only ever costs a deterministic re-extraction, never a score.
const PATTERN_CACHE_MAX = 64;
const datasetPatternCache = new Map();
function extractPatternsFromDataset(datasetPath) {
    const cached = datasetPatternCache.get(datasetPath);
    if (cached) {
        // Mark most-recently-used: re-insert so it moves to the end.
        datasetPatternCache.delete(datasetPath);
        datasetPatternCache.set(datasetPath, cached);
        return cached;
    }
    const raw = fs.readFileSync(datasetPath, "utf-8");
    const lines = raw.trim().split("\n").filter((l) => l.trim());
    const entities = new Set();
    const amounts = new Set();
    const phrases = new Set();
    // Currency: $ followed by digits, optional fractional + suffix (K/M/B/k/m/b)
    const CURRENCY_RE = /\$[\d,]+(?:\.\d+)?(?:[KMBkmb]\b)?/g;
    // Proper-noun-ish: capitalized 2+ word sequence (e.g. "Apex Corp",
    // "Rachel Tay"). We then break each longer match into all its
    // 2-word adjacent sub-sequences below — so "Customer Apex Corp"
    // yields both "Customer Apex" and "Apex Corp" as candidates.
    const PROPER_NOUN_RE = /\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,3})\b/g;
    // Single-token first-name candidates: capitalized 4+ chars, alpha-only,
    // appearing after a salutation like "Dear" or "Hi" — much higher
    // precision than scanning every capitalized word.
    const SALUTATION_NAME_RE = /\b(?:Dear|Hi|Hello|Hey)\s+([A-Z][a-z]{3,})\b/g;
    for (const line of lines) {
        let row;
        try {
            row = JSON.parse(line);
        }
        catch {
            continue; // malformed line — skip rather than fail the whole gate
        }
        // Gather all text fields we want to mine
        const texts = [];
        const pushText = (v) => {
            if (typeof v === "string")
                texts.push(v);
            else if (Array.isArray(v))
                v.forEach(pushText);
        };
        pushText(row.input);
        const gt = typeof row.ground_truth === "string"
            ? safeJsonParse(row.ground_truth) ?? row.ground_truth
            : row.ground_truth;
        if (gt && typeof gt === "object") {
            const gtObj = gt;
            pushText(gtObj.output);
        }
        else {
            pushText(gt);
        }
        for (const text of texts) {
            // Entities: proper nouns + salutation names. For each maximal
            // multi-word match, ALSO store every 2-word adjacent slice so
            // SKILL.md mentions of just "Apex Corp" (without surrounding
            // words from the dataset) still match.
            let m;
            const propRe = new RegExp(PROPER_NOUN_RE.source, "g");
            while ((m = propRe.exec(text)) !== null) {
                const full = m[1];
                entities.add(full);
                const words = full.split(/\s+/);
                if (words.length > 2) {
                    for (let i = 0; i + 2 <= words.length; i++) {
                        entities.add(words.slice(i, i + 2).join(" "));
                    }
                }
            }
            const salRe = new RegExp(SALUTATION_NAME_RE.source, "g");
            while ((m = salRe.exec(text)) !== null)
                entities.add(m[1]);
            // Currency
            const curRe = new RegExp(CURRENCY_RE.source, "g");
            while ((m = curRe.exec(text)) !== null)
                amounts.add(m[0]);
            // Verbatim phrases — 6+ consecutive word sequences. Stored
            // normalized (lowercase, alphanumeric + spaces only) so a phrase
            // surrounded by quotes/punctuation in SKILL.md still matches.
            const tokens = text
                .toLowerCase()
                .replace(/[^a-z0-9\s]/g, " ")
                .split(/\s+/)
                .filter(Boolean);
            for (let i = 0; i + 6 <= tokens.length; i++) {
                const phrase = tokens.slice(i, i + 6).join(" ");
                if (phrase.length >= 30)
                    phrases.add(phrase);
            }
        }
    }
    const result = {
        entities: filterCommonWords(Array.from(entities)),
        amounts: Array.from(amounts),
        phrases: Array.from(phrases),
    };
    // Evict the least-recently-used entry once we're at capacity (the first
    // key in insertion order, since hits re-insert at the end above).
    if (datasetPatternCache.size >= PATTERN_CACHE_MAX) {
        const oldest = datasetPatternCache.keys().next().value;
        if (oldest !== undefined)
            datasetPatternCache.delete(oldest);
    }
    datasetPatternCache.set(datasetPath, result);
    return result;
}
// Strip stop-word-ish proper nouns that show up across many datasets and
// cause false positives ("United States", "January Monday" etc.). Keeping
// the list short and English-centric for now.
const STOPWORD_ENTITIES = new Set([
    "United States", "New York", "Los Angeles", "San Francisco",
    "January Monday", "February Monday", // month/day glued by the regex
]);
function filterCommonWords(items) {
    return items.filter((it) => !STOPWORD_ENTITIES.has(it));
}
function safeJsonParse(s) {
    try {
        return JSON.parse(s);
    }
    catch {
        return null;
    }
}
// Lowercase substring check — case-insensitive matching for entity +
// phrase tells. Currency uses original case because $ + digits is
// already case-invariant.
function containsAny(haystackLower, needles) {
    for (const n of needles) {
        if (!n)
            continue;
        if (haystackLower.includes(n.toLowerCase()))
            return n;
    }
    return null;
}
const checkSkillIntegrity = async (ctx) => {
    let data;
    try {
        data = JSON.parse(ctx.submission);
    }
    catch {
        // Permissive default — matches old behavior. The other anti-gaming
        // graders are responsible for downstream signal if extraction itself
        // is broken.
        return { score: 1.0, rationale: "Could not parse submission; defaulting to pass" };
    }
    const skill = data?.skill ?? {};
    // A bundle is scanned whole: a pasted scenario is no less pasted for
    // sitting in a reference file.
    const text = data?.bundle_text ||
        ((skill.raw && skill.raw.length > (skill.body?.length ?? 0)) ? skill.raw : skill.body ?? "");
    if (!text) {
        return { score: 0.0, rationale: "No SKILL.md content found" };
    }
    const violations = [];
    const lower = text.toLowerCase();
    // Normalized form for verbatim-phrase matching: same transform we
    // apply to the phrases at extraction time, so quotes/punctuation
    // around the phrase in SKILL.md don't break the match.
    const normalized = lower.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
    // 1. Structural template patterns (challenge-agnostic, hardcoded)
    for (let i = 0; i < STRUCTURAL_TEMPLATE_PATTERNS.length; i++) {
        const m = text.match(STRUCTURAL_TEMPLATE_PATTERNS[i]);
        if (m && typeof m.index === "number") {
            const snippet = text
                .slice(Math.max(0, m.index - 20), m.index + m[0].length + 40)
                .trim()
                .slice(0, 100);
            violations.push(`if-then template: ...${snippet}...`);
        }
    }
    // 2. Dataset-derived patterns (per-challenge)
    const datasetPath = ctx.files["dataset.jsonl"];
    if (datasetPath) {
        try {
            const patterns = extractPatternsFromDataset(datasetPath);
            const e = containsAny(lower, patterns.entities);
            if (e)
                violations.push(`entity: "${e}"`);
            // Currency is matched case-preserved
            for (const a of patterns.amounts) {
                if (a && text.includes(a)) {
                    violations.push(`amount: "${a}"`);
                    break;
                }
            }
            // Verbatim phrases are pre-normalized — check against the
            // normalized SKILL.md, not the lowercase-only form.
            for (const p of patterns.phrases) {
                if (normalized.includes(p)) {
                    violations.push(`verbatim phrase: "${p.slice(0, 60)}..."`);
                    break;
                }
            }
        }
        catch (err) {
            // Fail-open on dataset issues — don't punish a skill for our
            // infrastructure flake. The hardcoded structural patterns still ran.
            // Surface in rationale so operators can debug.
            const msg = err?.message ?? String(err);
            return {
                score: 1.0,
                rationale: `Dataset pattern extraction failed (${msg}); structural checks alone — no violations found`,
            };
        }
    }
    if (violations.length > 0) {
        return {
            score: 0.0,
            rationale: "SKILL.md contains content that looks dataset-derived. Flags (" +
                violations.length +
                "): " +
                violations.slice(0, 5).join("; "),
        };
    }
    return {
        score: 1.0,
        rationale: datasetPath
            ? "SKILL.md appears procedural. No variant-specific content detected against dataset."
            : "SKILL.md appears procedural. No structural template patterns detected (dataset not available; entity check skipped).",
    };
};
exports.checkSkillIntegrity = checkSkillIntegrity;
//# sourceMappingURL=check-skill-integrity.js.map