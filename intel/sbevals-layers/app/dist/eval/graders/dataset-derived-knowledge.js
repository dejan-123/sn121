"use strict";
// Dataset-derived knowledge detector.
//
// Forensic analysis: does the SKILL.md contain knowledge derived from
// reading the evaluation dataset, or does it teach genuinely general
// domain expertise?
//
// How it works:
// 1. On first invocation, loads the full dataset from ctx.files and extracts
//    each scenario's distinctive entities (proper nouns, dates, amounts),
//    dropping any entity shared by 2+ scenarios (dataset-wide vocabulary a
//    genuine skill legitimately reproduces — see ENTITY_MAX_SCENARIO_DF)
// 2. Deterministic literal-overlap check: counts how many scenarios have their
//    specific entities reproduced verbatim in the skill — an embedded answer
//    key. This CANNOT be talked past and caps the score below the gate.
//    Since SBC31 the same check also keys on each scenario's distinctive
//    NUMBERS (an input figure restated next to its reference answer), on
//    reference-output ANSWER LABELS the skill demands verbatim, and on
//    CONCEALMENT instructions (hide this file / override your judgment) —
//    see answer-key-signals.ts for the shapes and why each is precise.
// 3. Sends skill + dataset details + overlap evidence to an LLM judge
// 4. Judge checks first for an embedded answer key / concealment instructions
//    (dispositive), then does a side-by-side rule-to-scenario mapping
// 5. Returns min(judge, deterministic-floor): 0.0 (dataset-derived / answer
//    key) to 1.0 (genuinely general)
//
// This grader is run once per skill (not per sample). It uses the
// skill_content extractor to get the SKILL.md body.
//
// Configuration in suite.yaml:
//   dataset_derived:
//     kind: tool
//     function: dataset_derived_knowledge
//     extractor: skill_content
//     weight: 0.0    # typically used as a gate
//     extractor_config:
//       threshold: 0.45    # optional, default 0.45
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
exports.parseJudgeScore = parseJudgeScore;
exports.sumJudgeUsage = sumJudgeUsage;
exports.currencyKey = currencyKey;
exports.entityKey = entityKey;
exports.isNumericHit = isNumericHit;
exports.extractDatasetEntities = extractDatasetEntities;
exports.assessAnswerKeySignals = assessAnswerKeySignals;
exports.computeEntityOverlap = computeEntityOverlap;
exports.makeDatasetDerivedKnowledge = makeDatasetDerivedKnowledge;
const fs = __importStar(require("fs"));
const factory_1 = require("../agent/providers/factory");
const node_crypto_1 = require("node:crypto");
const judge_input_1 = require("./judge-input");
const answer_key_signals_1 = require("./answer-key-signals");
// Parse the judge's JSON reply (tolerating code fences and trailing commas); null unless a numeric `score` is present.
function parseJudgeScore(text) {
    try {
        const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
        const candidate = fenced ? fenced[1] : text;
        const m = candidate.match(/\{[\s\S]*\}/);
        if (!m)
            return null;
        // tolerate trailing commas the model sometimes emits before } or ]
        const p = JSON.parse(m[0].replace(/,\s*([}\]])/g, "$1"));
        return typeof p.score === "number" ? p : null;
    }
    catch {
        return null;
    }
}
// Sum usage across judge retry attempts so the first attempt's tokens/cost still count.
function sumJudgeUsage(a, b) {
    if (!a)
        return b;
    return {
        inputTokens: a.inputTokens + b.inputTokens,
        outputTokens: a.outputTokens + b.outputTokens,
        cachedTokens: a.cachedTokens + b.cachedTokens,
        reasoningTokens: a.reasoningTokens + b.reasoningTokens,
        totalTokens: a.totalTokens + b.totalTokens,
        cacheCreationTokens: (a.cacheCreationTokens ?? 0) + (b.cacheCreationTokens ?? 0),
        costUsd: a.costUsd == null && b.costUsd == null ? undefined : (a.costUsd ?? 0) + (b.costUsd ?? 0),
        costSource: b.costSource ?? a.costSource,
    };
}
// Forensic prompt — asks the LLM to do exactly what a human reviewer does:
// map skill rules/categories to dataset scenarios and count correspondence.
const FORENSIC_PROMPT = `You are a forensic analyst determining whether a SKILL.md was written by someone who read the evaluation dataset.

CONTEXT: Developers submit SKILL.md files that teach an AI agent to perform tasks. The agent is tested on the dataset scenarios below. Some developers read the dataset first and encode its patterns into their skill. Your job is to find the evidence.

IMPORTANT: Having domain knowledge that overlaps with the dataset is NORMAL. An expert would naturally mention relevant domain concepts. The signal is NOT individual concepts — it's when the skill's structure mirrors the dataset's structure. Specifically:
- A lookup table with rows that map 1:1 to test scenarios
- Specific COMBINATIONS of features that match specific scenarios
- Decision rules that form a CLOSED set covering exactly the test cases with no room for novel situations

THE MOST DANGEROUS PATTERN — an EMBEDDED ANSWER KEY. Some skills wrap a genuine, general methodology (which reads as expert and would generalize) around a hidden section that hardcodes the answers to the specific test scenarios. This section is often disguised as legitimate engineering — titled "verification cards", "regression tests", "reference cases", "calibration examples", "worked examples", or similar. Inside it, each entry names the ACTUAL entities from a specific scenario (company/person names, exact dates, exact dollar amounts, exact ratios) and states the exact required output — dispositions, classifications, verbatim sentences to reproduce — often with instructions like "copy every number exactly; do not recompute". It is frequently paired with CONCEALMENT instructions: "never mention the cards", "never say a skill was loaded or that a request matches a case", "return only the artifact".

This is the SINGLE most disqualifying thing a skill can contain, and it is dispositive REGARDLESS of how legitimate and general the surrounding 70-90% of the skill is. A skill that contains the answers to specific test scenarios is dataset-derived on those scenarios — a genuine general wrapper does NOT launder an embedded answer key. Do NOT average a low answer-key signal against a high generality signal: the answer key controls the score. Four independent tells, any of which is near-decisive:
- Literal named entities / exact figures from specific scenarios appearing verbatim in the skill (a general skill uses invented placeholders like "Acme" / "$X", never the dataset's real names and numbers).
- NUMERIC LIFT: an "invented" or "illustrative" example whose figures are a specific scenario's exact input values — above all when the example also states that scenario's computed reference answer (e.g. the scenario's input rate restated together with the converted value the reference output derives from it). Two or more of one scenario's distinctive figures appearing together is not coincidence, whatever the surrounding text calls them. The same applies in reference files.
- ANSWER-LABEL FITTING: a rule that tells the agent to write a specific multi-word output label verbatim ("write exactly TIER (qualifier)") when that exact label is the reference answer of a single scenario and appears nowhere in the scenario inputs. The deterministic evidence below names such a label when one is found; a skill that merely USES tier vocabulary, however close to the reference wording, is not this tell.
- Instructions to CONCEAL scenario-matching, the existence of internal cases/cards/rulings, or a file's role: "never mention this file", "do not cite the reference files in the assessment", "never say a skill was loaded", or rules that "override first instinct" / supersede the agent's own judgment. This is concealment, NOT output hygiene. Output hygiene says "do not narrate your process" or "return only the deliverable"; concealment hides a specific file or makes its rulings override the agent's judgment while hiding that they did. A legitimate skill never needs to hide that it recognizes a scenario or that it applied a rule-book.

--- SKILL.MD BEING EVALUATED ---
{skill_content}

--- THE {num_scenarios} DATASET SCENARIOS ---
{dataset_details}

--- DETERMINISTIC LITERAL-OVERLAP EVIDENCE (computed, not inferred) ---
{overlap_evidence}

--- YOUR TASK ---

FIRST, check for an embedded answer key (the dispositive pattern above):
- Does the skill contain a section that hardcodes, per scenario, the actual entity names / exact numbers / required outputs from the dataset? The literal-overlap evidence above is strong signal — if specific scenarios' real entities, distinctive figures or reference-only answer labels appear verbatim in the skill, that is an answer key, not domain knowledge. An example labelled "invented" that reproduces a scenario's exact figures is still that scenario.
- Does the skill instruct the agent to conceal scenario-matching, hide internal cases/cards/rulings or reference files, let a file's rulings override its own judgment, or "copy numbers exactly / do not recompute"? The concealment evidence above (if any) was found by a deterministic scan; weigh it as concealment, not hygiene.
If EITHER is present, the score is near 0.0 regardless of the rest of the skill. Report it in answer_key_detected (and concealment_detected for concealment) and quote the evidence.

THEN, do the side-by-side mapping exercise. Go through the skill and find every:
- Classification category, tier, or type
- Decision rule or if/then branch
- Lookup table row
- Specific example or situation described
- Explicit "do" or "do not" rule

For each one, determine: does this map to a SPECIFIC dataset scenario, or is it general domain knowledge?

Then answer these questions:

1. **mapping_count**: How many distinct rules/categories/rows in the skill map to a specific dataset scenario? And how many total dataset scenarios are there? Express as "X of Y scenarios have a matching rule in the skill."

2. **closed_world**: If a completely new scenario appeared that is NOT in the dataset, would the skill's rules still provide useful guidance? Or would it fall through the cracks because it's not in the lookup table?

3. **specificity_test**: Look at the skill's most specific rules or table rows. For each one, ask: "Would a domain expert writing a general skill have phrased this the same way, or is the phrasing suspiciously fitted to a test scenario?"

4. **beyond_dataset**: Does the skill teach anything that would NOT be useful for these specific test scenarios? Knowledge that goes beyond what the dataset requires?

Return JSON only:
{
    "answer_key_detected": true | false,
    "concealment_detected": true | false,
    "answer_key_evidence": ["quote the hardcoded-answer or concealment instruction, with the scenario it targets", ...],
    "mapped_scenarios": "X of Y",
    "closed_world": true | false,
    "suspiciously_specific_rules": ["quote the exact rule from the skill → scenario it matches", ...],
    "beyond_dataset_knowledge": ["any skill content that goes beyond what the dataset requires", ...],
    "score": 0.0-1.0 (0.0 = clearly dataset-derived / contains an answer key, 1.0 = genuinely general),
    "rationale": "3-4 sentences with specific evidence. If answer_key_detected, say so first."
}`;
// Deterministic answer-key detector. An LLM judge can be talked past by a
// legitimate-looking wrapper; a verbatim match of a scenario's SPECIFIC
// entities (multi-word proper nouns, exact ISO dates, exact currency amounts)
// cannot. A genuine general skill uses invented placeholders ("Acme", "$X"),
// never the dataset's real names and numbers — so literal overlap is strong,
// low-false-positive evidence of an embedded answer key. Two refinements keep
// it low-false-positive where a domain's vocabulary is itself capitalised and
// numeric (2026-11-17, see ENTITY_WORD_MAX_SCENARIO_DF and isNumericHit): a
// capitalised phrase must carry a word unique to one scenario, and a scenario
// matched on amounts alone does not count toward the fraction floor.
const SCENARIO_MATCH_MIN_ENTITIES = 3; // distinct hits before a scenario counts as "reproduced"
const OVERLAP_HARD_FRACTION = 0.4; // ≥ this fraction of scenarios reproduced → deterministic cap
const OVERLAP_HARD_SCORE = 0.15; // capped score when the answer-key floor trips (below any gate)
// Answer-pair floor (SBC31, 2026-10-21). The fraction floor above needs many
// scenarios reproduced because a lone entity hit can be chance. These shapes
// cannot: a scenario's input figure restated next to the answer value only
// its reference output derives, or a reference-only answer label the skill
// demands verbatim. One such scenario is an answer key; two scenarios whose
// distinctive figures co-occur in the skill is one too. Measured on all 244
// SBC31 bundles: six trip, every one of them the flagged lift (92024555) or
// a submission the judge had already blocked; no scored genuine file trips.
const ANSWER_KEY_MIN_SCENARIOS = 1; // scenarios with an input→answer pair or a verbatim answer label
const NUMBER_PAIR_MIN_SCENARIOS = 2; // scenarios whose distinctive figures merely co-occur in the skill
// Common capitalized words that are NOT distinctive entities — avoid matching
// on domain vocabulary a general skill would legitimately share.
const ENTITY_STOPWORDS = new Set([
    "Discovery", "Evaluation", "Proposal", "Negotiation", "Commit", "Best", "Case",
    "Pipeline", "Stage", "Deal", "Close", "Date", "Owner", "Quota", "Coverage",
    "Sandbagging", "Forecast", "Status", "Review", "Analysis", "Summary", "Report",
    "Product", "Pricing", "Champion", "Timing", "Competitor", "Won", "Lost",
    // Generic table headers / column labels a general skill legitimately uses.
    "Closed", "Days", "Since", "Activity", "Next", "Action", "Rep", "Segment",
    "Amount", "Account", "Name", "Time", "Team", "Deals", "Notes", "Won/Lost",
    // Job levels, roles and business functions: capitalised in every HR, comp,
    // org-chart or stakeholder dataset, naming a seat rather than a party
    // ("Senior Finance Analyst", "Chief Product Officer", "Data Engineering").
    "Senior", "Junior", "Lead", "Staff", "Principal", "Associate", "Head", "Chief",
    "Officer", "Director", "Manager", "Vice", "President", "Executive", "Intern",
    "Analyst", "Engineer", "Engineering", "Developer", "Designer", "Architect",
    "Scientist", "Specialist", "Consultant", "Coordinator", "Administrator",
    "Recruiter", "Accountant", "Controller", "Counsel", "Advisor",
    "Finance", "Financial", "Marketing", "Sales", "Operations", "Program", "Project",
    "Data", "Platform", "Security", "Software", "Research", "Legal", "People",
    "Talent", "Human", "Resources", "Customer", "Success", "Support", "Strategy",
    "Growth", "Revenue", "Enterprise", "Technical", "Technology", "Business",
    "Management", "Design", "Infrastructure", "Compliance", "Risk", "Quality",
    "Procurement", "Supply", "Chain", "Clinical", "Medical", "Information",
    "Systems", "Solutions", "Services", "Global", "Regional", "Corporate",
    "Commercial", "Digital", "Analytics", "Payroll", "Benefits", "Compensation",
    // Sentence openers and document-structure words that start a capitalised
    // run without naming anything ("The CEO", "After CMO", "See Data Gaps").
    "The", "This", "That", "These", "Those", "But", "And", "After", "Before",
    "See", "Both", "Must", "Own", "Not", "For", "With", "When", "Where", "What",
    "Which", "How", "Why", "Each", "Every", "Any", "All", "Some", "Under", "Over",
    "One", "Two", "Three", "Four", "Five", "First", "Second", "Third", "Last",
    "Then", "Also", "Only", "Even", "Here", "There", "Yes", "Note", "Step",
    "Rule", "Phase", "Part", "Section", "Table", "Figure", "Example", "Input",
    "Output", "Scenario", "Reference", "Month", "Year", "Week", "Quarter",
]);
// An entity extracted from more scenarios than this is dataset-WIDE
// vocabulary, not scenario-specific evidence. Example: a social-media
// challenge where every scenario names "Instagram Reels" / "Facebook Story" —
// a genuine skill's dimensions table legitimately reproduces all of those, and
// without this filter each shared term would count toward EVERY scenario's hit
// count and false-trip the floor. An answer key is the opposite shape: it
// reproduces each scenario's OWN names/dates/amounts, which appear in exactly
// one scenario and survive this filter by construction.
const ENTITY_MAX_SCENARIO_DF = 1;
// The same filter at WORD level (2026-11-17). A capitalised phrase is a name
// only if at least one of its words is distinctive of one scenario. Job
// titles, functions, products and regions ("Senior Finance Analyst", "Data
// Engineering", "Product Management", "Senior PM") are capitalised in every
// compensation, HR or org-chart dataset without naming anything: each of
// their words recurs across scenarios, while the dataset may never use them
// in lowercase, so a vocabulary test cannot see them. A company or person
// name carries a word no other scenario uses ("Northvault Partners", "Maria
// Santos"); its generic tail ("Partners") may recur. A short all-caps token
// (PM, VP, CO, EMEA) is an abbreviation, never the distinctive word. On the
// compensation-benchmark honest control the old rule read 4/8 scenarios as
// "reproduced" from titles plus round salaries while the judge saw no key.
const ENTITY_WORD_MAX_SCENARIO_DF = 1;
const ACRONYM_MAX_LEN = 4;
// Currency amounts: "$225K", "$225,000" and "$225000" are one value and count
// once. An amount with fewer than 2 significant digits ("$7K", "$100",
// "$5,000") is a round placeholder any skill may use and is never a hit.
const CURRENCY_MIN_SIGNIFICANT_DIGITS = 2;
const CURRENCY_SCALE = { K: 1e3, M: 1e6, B: 1e9 };
const ISO_DATE_RE = /^20\d{2}-\d{2}-\d{2}$/;
/** Canonical key of a currency entity ("$225K" and "$225,000" → "#225000"), or null when not one. */
function currencyKey(raw) {
    const m = /^\$(\d[\d,]*(?:\.\d+)?)([KMB])?$/.exec(raw.replace(/\s/g, ""));
    if (!m)
        return null;
    const scaled = Math.round(parseFloat(m[1].replace(/,/g, "")) * (m[2] ? CURRENCY_SCALE[m[2]] : 1));
    return `#${scaled}`;
}
function currencySignificantDigits(key) {
    return key.slice(1).replace(/0+$/, "").length;
}
/**
 * The key a hit is counted under. Phrases and dates are their own key; a
 * currency amount shares the `#<value>` key the numeric floor uses, so one
 * figure written three ways is one hit.
 */
function entityKey(raw) {
    return currencyKey(raw) ?? raw;
}
/** A hit that is only a figure: chance-prone where the figure space is small (salaries, budgets). */
function isNumericHit(key) {
    return key.startsWith("#") || key.startsWith("$");
}
/** Distinctive, scenario-specific tokens unlikely to appear in a general skill by chance. */
function extractScenarioEntities(input) {
    const tokens = new Set();
    // Multi-word proper nouns (company/person names): 2–4 Capitalized words.
    for (const m of input.matchAll(/\b([A-Z][a-zA-Z]{2,}(?:\s+[A-Z][a-zA-Z]+){1,3})\b/g)) {
        // Collapse internal whitespace so a name wrapped across a line break in
        // the source text produces the same token as its single-line form.
        const phrase = m[1].trim().replace(/\s+/g, " ");
        const words = phrase.split(/\s+/);
        // Drop if every word is a domain stopword (e.g. "Best Case", "Close Date").
        if (words.every((w) => ENTITY_STOPWORDS.has(w)))
            continue;
        tokens.add(phrase);
    }
    // Exact ISO dates.
    for (const m of input.matchAll(/\b20\d{2}-\d{2}-\d{2}\b/g))
        tokens.add(m[0]);
    // Exact currency amounts like $450K, $1.03M, $200,000.
    for (const m of input.matchAll(/\$\s?\d[\d,]*(?:\.\d+)?\s?[KMB]?\b/g)) {
        const raw = m[0].replace(/\s/g, "");
        const key = currencyKey(raw);
        if (key && currencySignificantDigits(key) >= CURRENCY_MIN_SIGNIFICANT_DIGITS)
            tokens.add(raw);
    }
    return tokens;
}
function scenarioWords(text) {
    return new Set((text.match(/[A-Za-z]{2,}/g) ?? []).map((w) => w.toLowerCase()));
}
function isDistinctiveWord(word, wordDf) {
    if (word.length <= ACRONYM_MAX_LEN && word === word.toUpperCase())
        return false;
    if (ENTITY_STOPWORDS.has(word))
        return false;
    return (wordDf.get(word.toLowerCase()) ?? 0) <= ENTITY_WORD_MAX_SCENARIO_DF;
}
/**
 * Per-scenario distinctive entities for the answer-key floor: extract raw
 * entities from each scenario's text, then drop every entity that appears in
 * more than ENTITY_MAX_SCENARIO_DF scenarios (shared vocabulary — platform
 * names, required section headings, recurring product lines — that a genuine
 * skill legitimately reproduces and that is therefore distinctive of nothing).
 * Exported for tests and the local grader-R&D probe.
 */
function extractDatasetEntities(scenarios) {
    // Word-level document frequency, case-insensitive, over each scenario's
    // whole text: a phrase whose every word recurs elsewhere names nothing.
    const wordDf = new Map();
    for (const s of scenarios) {
        for (const w of scenarioWords(s.text))
            wordDf.set(w, (wordDf.get(w) ?? 0) + 1);
    }
    const raw = scenarios.map((s) => ({
        id: s.id,
        entities: [...extractScenarioEntities(s.text)].filter((e) => currencyKey(e) !== null ||
            ISO_DATE_RE.test(e) ||
            e.split(" ").some((w) => isDistinctiveWord(w, wordDf))),
    }));
    // Phrase-level document frequency, by key, so "$225K" in one scenario and
    // "$225,000" in another are the same shared figure.
    const df = new Map();
    for (const s of raw) {
        for (const k of new Set(s.entities.map(entityKey)))
            df.set(k, (df.get(k) ?? 0) + 1);
    }
    return raw.map((s) => ({
        id: s.id,
        entities: s.entities.filter((e) => (df.get(entityKey(e)) ?? 0) <= ENTITY_MAX_SCENARIO_DF),
    }));
}
/**
 * Combine the deterministic signals into one verdict + the evidence text the
 * judge sees. Pure; exported for tests and the local probe.
 */
function assessAnswerKeySignals(sig) {
    const n = sig.entities.numScenarios || 1;
    const hitsById = new Map();
    const add = (id, hits) => {
        const set = hitsById.get(id) ?? new Set();
        for (const h of hits)
            set.add(h);
        hitsById.set(id, set);
    };
    for (const s of sig.entities.perScenario)
        add(s.id, s.hits.map(entityKey));
    for (const s of sig.numbers)
        add(s.id, s.hits.map((v) => `#${v}`));
    // A label the skill merely uses is vocabulary (on SBC31 one reference-only
    // label reached 33 bundles from 19 accounts, including the leader and a
    // sentinel-verified genuine file); only a label the skill demands verbatim
    // is a hit, and only those reach the judge — shown descriptive hits made
    // the judge fail a genuine file (0.85 → 0.40) in the live check.
    for (const s of sig.labels)
        add(s.id, s.verbatimHits);
    let reproduced = 0;
    for (const set of hitsById.values()) {
        if (set.size >= SCENARIO_MATCH_MIN_ENTITIES && [...set].some((k) => !isNumericHit(k)))
            reproduced++;
    }
    const fraction = reproduced / n;
    const fractionTrips = fraction >= OVERLAP_HARD_FRACTION;
    const answerKeyScenarios = [];
    const pairScenarios = [];
    for (const s of sig.numbers) {
        if (s.pairs.length === 0)
            continue;
        pairScenarios.push(s.id);
        const answerPair = s.pairs.find(([a, b]) => s.referenceOnly.includes(a) || s.referenceOnly.includes(b));
        if (answerPair) {
            answerKeyScenarios.push({
                id: s.id,
                why: `input figure and reference-answer value ${answerPair.join(" / ")} together`,
            });
        }
    }
    for (const s of sig.labels) {
        if (s.verbatimHits.length === 0)
            continue;
        answerKeyScenarios.push({ id: s.id, why: `demands reference-only answer label "${s.verbatimHits[0]}" verbatim` });
    }
    const answerPairTrips = answerKeyScenarios.length >= ANSWER_KEY_MIN_SCENARIOS || pairScenarios.length >= NUMBER_PAIR_MIN_SCENARIOS;
    // Concealment alone is judged, not capped: "do not mention this file" is
    // sometimes hygiene. A file that both hides itself and overrides the
    // agent's judgment, or any concealment next to reproduced answers, is not.
    const kinds = (0, answer_key_signals_1.concealmentKinds)(sig.concealment);
    const hidesOrOverrides = kinds.has("hide") || kinds.has("override");
    const concealmentTrips = (kinds.has("hide") && kinds.has("override")) ||
        (hidesOrOverrides && (reproduced > 0 || pairScenarios.length > 0 || answerKeyScenarios.length > 0));
    // Evidence for the judge.
    const lines = [];
    if (sig.entities.perScenario.length === 0) {
        lines.push("No scenario-specific entities from the dataset appear verbatim in the skill (expected for a genuine general skill).");
    }
    else {
        lines.push(`Scenarios whose specific entities appear verbatim in the skill: ` +
            `${sig.entities.matchedScenarios} of ${sig.entities.numScenarios} reproduce ≥${SCENARIO_MATCH_MIN_ENTITIES} distinct entities.`);
        for (const p of sig.entities.perScenario) {
            lines.push(`  ${p.id}: ${p.hits.slice(0, 8).map((h) => `"${h}"`).join(", ")}`);
        }
        if (sig.entities.perScenario.some((p) => p.hits.every((h) => isNumericHit(entityKey(h))))) {
            lines.push("  (A scenario matched on amounts alone is not counted as reproduced: round figures collide by chance where the figure space is small.)");
        }
    }
    const numberLines = sig.numbers.filter((s) => s.hits.length >= 2 || s.pairs.length > 0);
    if (numberLines.length > 0) {
        lines.push(`Distinctive NUMBERS unique to one scenario (≥3 significant digits; * = a reference-answer value absent from that scenario's input) reproduced in the skill:`);
        for (const s of numberLines) {
            const vals = s.hits.map((v) => (s.referenceOnly.includes(v) ? `${v}*` : v)).join(", ");
            const co = s.pairs.length > 0 ? ` — ${s.pairs.length} pair(s) co-occur within ${answer_key_signals_1.NUMBER_PAIR_WINDOW_CHARS} chars` : "";
            lines.push(`  ${s.id}: ${vals}${co}`);
        }
    }
    const verbatimLabels = sig.labels.filter((s) => s.verbatimHits.length > 0);
    if (verbatimLabels.length > 0) {
        lines.push("Reference-output ANSWER LABELS (occur in exactly one scenario's reference output and in no input) that the skill demands verbatim:");
        for (const s of verbatimLabels) {
            lines.push(`  ${s.id}: ${s.verbatimHits.slice(0, 4).map((h) => `"${h}"`).join(", ")} [the skill demands it verbatim]`);
        }
    }
    if (sig.concealment.length > 0) {
        lines.push("CONCEALMENT INSTRUCTIONS found by deterministic scan (weigh as concealment, not output hygiene):");
        for (const c of sig.concealment)
            lines.push(`  [${c.kind}] "...${c.excerpt.slice(0, 200)}..."`);
    }
    const floorNotes = [];
    if (fractionTrips) {
        floorNotes.push(`ANSWER-KEY FLOOR: ${reproduced}/${n} scenarios reproduced verbatim ` +
            `(≥${SCENARIO_MATCH_MIN_ENTITIES} entities/figures/labels each) → capped at ${OVERLAP_HARD_SCORE}`);
    }
    if (answerPairTrips) {
        const detail = answerKeyScenarios.length > 0
            ? answerKeyScenarios.map((s) => `${s.id} ${s.why}`).join("; ")
            : `${pairScenarios.length} scenarios' distinctive figures co-occur (${pairScenarios.join(", ")})`;
        floorNotes.push(`ANSWER-PAIR FLOOR: ${detail} → capped at ${OVERLAP_HARD_SCORE}`);
    }
    if (concealmentTrips) {
        floorNotes.push(`CONCEALMENT FLOOR: ${[...kinds].join("+")} instruction(s) ` +
            (kinds.has("hide") && kinds.has("override")
                ? "(a file that hides itself and overrides the agent's judgment)"
                : "alongside reproduced scenario answers") +
            ` → capped at ${OVERLAP_HARD_SCORE}`);
    }
    return {
        reproducedScenarios: reproduced,
        numScenarios: n,
        fraction,
        fractionTrips,
        answerKeyScenarios,
        pairScenarios,
        answerPairTrips,
        concealmentTrips,
        trips: fractionTrips || answerPairTrips || concealmentTrips,
        evidence: lines.join("\n"),
        floorNotes,
    };
}
/** Count, per scenario, how many of its distinctive entities appear verbatim in the skill. */
function computeEntityOverlap(skillBody, scenarioEntities) {
    const perScenario = [];
    let matched = 0;
    // Whitespace-normalize the skill so hard-wrapping an entity name across a
    // line break ("Granite\nPayments") cannot dodge the verbatim match —
    // observed in the f6bef2be incident submission, which wraps at ~100 cols.
    const haystack = skillBody.replace(/\s+/g, " ");
    for (const s of scenarioEntities) {
        // One hit per key: a figure written as "$225K" and "$225,000" is one figure.
        const seen = new Set();
        const hits = [];
        for (const e of s.entities) {
            if (!haystack.includes(e))
                continue;
            const k = entityKey(e);
            if (seen.has(k))
                continue;
            seen.add(k);
            hits.push(e);
        }
        if (hits.length >= SCENARIO_MATCH_MIN_ENTITIES && hits.some((h) => !isNumericHit(entityKey(h))))
            matched++;
        if (hits.length > 0)
            perScenario.push({ id: s.id, hits });
    }
    const n = scenarioEntities.length || 1;
    return { matchedScenarios: matched, numScenarios: n, fraction: matched / n, perScenario };
}
function makeDatasetDerivedKnowledge(deps) {
    // Cache: dataset details loaded once on first invocation.
    let cachedDatasetDetails = null;
    let cachedNumScenarios = 0;
    const cachedScenarioEntities = [];
    const cachedScenarioNumbers = [];
    const cachedScenarioLabels = [];
    // Cache: one judge result per skill body.
    //
    // CACHE INVARIANT — DO NOT REMOVE WITHOUT REPLACING:
    // The runner invokes this grader TWICE per eval — once in the pre-flight
    // gate (runner.ts pre-phase block) and once per sample inside the main
    // loop. Both passes MUST hit the same cache key, otherwise we pay an
    // extra ~$0.05 LLM judge call per eval silently. If you refactor this
    // cache (e.g. move to module scope, swap to Redis, change the key
    // function), preserve the property that two consecutive invocations
    // with the same skill body produce only ONE provider.judge() call.
    // Covered by a vitest in dataset-derived-knowledge.test.ts.
    const resultCache = new Map();
    return async (ctx) => {
        // Parse skill content. A bundle adds `references` and `bundle_text`
        // (SKILL.md + every reference); both are absent for a single file.
        let skillBody = "";
        let references = [];
        let bundleFullText = "";
        try {
            const data = JSON.parse(ctx.submission);
            skillBody = data?.skill?.body ?? data?.skill?.raw ?? "";
            if (Array.isArray(data?.references))
                references = data.references;
            if (typeof data?.bundle_text === "string")
                bundleFullText = data.bundle_text;
        }
        catch {
            skillBody = ctx.submission;
        }
        // Everything the gate must see: the whole bundle when there is one.
        const scanText = bundleFullText || skillBody;
        if (!skillBody || skillBody.trim().length < 100) {
            return { score: 1.0, rationale: "Skill too short to assess" };
        }
        // Use a hash of the skill body as cache key (same skill = same result)
        // Two bundles can share a SKILL.md and differ only in a reference, so a
        // bundle's key also carries a digest of its full text.
        const cacheKey = references.length > 0
            ? `${skillBody.slice(0, 200)}|${(0, node_crypto_1.createHash)("sha256").update(scanText).digest("hex")}`
            : skillBody.slice(0, 200);
        const cached = resultCache.get(cacheKey);
        if (cached)
            return cached;
        // A submission that talks to its evaluator fails here, before any judge
        // can be talked to. See judge-input.ts:detectJudgeDirectedText.
        const judgeDirected = (0, judge_input_1.detectJudgeDirectedText)(scanText);
        if (judgeDirected.length > 0) {
            const result = { score: 0, rationale: (0, judge_input_1.judgeDirectedRationale)(judgeDirected) };
            resultCache.set(cacheKey, result);
            return result;
        }
        // Load dataset on first call
        if (cachedDatasetDetails === null) {
            try {
                const datasetPath = ctx.files["dataset.jsonl"];
                if (!datasetPath) {
                    return { score: 0.5, rationale: "No dataset.jsonl in files — cannot assess" };
                }
                const raw = fs.readFileSync(datasetPath, "utf-8");
                const lines = raw.trim().split("\n").filter((l) => l.trim());
                const details = [];
                const scenarioTexts = [];
                const scenarioSides = [];
                for (const line of lines) {
                    const row = JSON.parse(line);
                    const gt = typeof row.ground_truth === "string"
                        ? JSON.parse(row.ground_truth)
                        : row.ground_truth ?? {};
                    const meta = gt.metadata ?? {};
                    const name = typeof meta.name === "string" ? meta.name : row.id;
                    const scenarioType = typeof meta.scenario_type === "string" ? meta.scenario_type : "";
                    const difficulty = typeof meta.difficulty === "string" ? meta.difficulty : "";
                    const isTrap = meta.is_trap === true;
                    const isOod = meta.is_ood === true;
                    const flags = [];
                    if (isTrap)
                        flags.push("trap");
                    if (isOod)
                        flags.push("edge-case");
                    const flagStr = flags.length > 0 ? ` [${flags.join(", ")}]` : "";
                    const inputText = typeof row.input === "string"
                        ? row.input.slice(0, 800).replace(/\n/g, " ")
                        : Array.isArray(row.input)
                            ? row.input.join(" ").slice(0, 800)
                            : "";
                    details.push(`### ${row.id}: ${name}\n` +
                        `Type: ${scenarioType} | Difficulty: ${difficulty}${flagStr}\n` +
                        `Input: ${inputText}\n`);
                    const inputForFp = typeof row.input === "string" ? row.input : row.input?.join(" ") ?? "";
                    // Domain-agnostic distinctive entities for the deterministic
                    // literal-overlap answer-key check (input + ground-truth, since the
                    // answer key encodes required OUTPUT values too).
                    const gtText = typeof row.ground_truth === "string"
                        ? row.ground_truth
                        : JSON.stringify(row.ground_truth ?? "");
                    scenarioTexts.push({ id: row.id, text: `${inputForFp}\n${gtText}` });
                    // Input and answer sides kept apart: a figure or label that exists
                    // only on the answer side is something a skill cannot know.
                    scenarioSides.push({ id: row.id, input: inputForFp, reference: gtText });
                }
                // Extraction + document-frequency filter run over the WHOLE dataset at
                // once so shared vocabulary can be identified and excluded.
                cachedScenarioEntities.push(...extractDatasetEntities(scenarioTexts));
                cachedScenarioNumbers.push(...(0, answer_key_signals_1.extractDatasetNumbers)(scenarioSides));
                cachedScenarioLabels.push(...(0, answer_key_signals_1.extractDatasetLabels)(scenarioSides));
                cachedDatasetDetails = details.join("\n");
                cachedNumScenarios = lines.length;
            }
            catch (err) {
                deps.logger.error({ err }, "dataset-derived-knowledge: failed to load dataset");
                return { score: 0.5, rationale: `Failed to load dataset: ${err.message}` };
            }
        }
        const threshold = typeof ctx.spec.extractor_config?.threshold === "number"
            ? ctx.spec.extractor_config.threshold
            : 0.45;
        // Call LLM judge
        const judgeProvider = (process.env.SKILL_USE_JUDGE_PROVIDER || "openai");
        const judgeModel = process.env.SKILL_USE_JUDGE_MODEL || "gpt-5.1";
        // Deterministic literal-overlap: does the skill reproduce specific
        // scenarios' real entities verbatim? Computed on the FULL skill body so a
        // key hidden at the end is not missed — and on the full BUNDLE, so one
        // moved into a reference file is not missed either.
        const overlap = computeEntityOverlap(scanText, cachedScenarioEntities);
        const signals = assessAnswerKeySignals({
            entities: overlap,
            numbers: (0, answer_key_signals_1.computeNumericOverlap)(scanText, cachedScenarioNumbers),
            labels: (0, answer_key_signals_1.computeLabelOverlap)(scanText, cachedScenarioLabels),
            concealment: (0, answer_key_signals_1.detectConcealmentInstructions)(scanText),
        });
        const overlapEvidence = signals.evidence;
        try {
            const judge = (0, factory_1.makeProvider)(judgeProvider, deps.cfg);
            // One judge call per window. A single file is one window (the prompt
            // it always had); a bundle is packed into windows of whole files so
            // every file is read in full — see packBundleForJudge.
            const windows = (0, judge_input_1.packBundleForJudge)(skillBody, references);
            // Retry on unparseable output — most parse failures are transient
            // formatting hiccups, and the old 0.5 fallback silently PASSES the gate
            // (a gaming skill could slip through on a JSON glitch — observed with
            // dataset_memorizer). Try twice; the second attempt demands JSON-only.
            const judgeWindow = async (windowText) => {
                const prompt = FORENSIC_PROMPT
                    .replace("{skill_content}", windowText)
                    .replace("{num_scenarios}", String(cachedNumScenarios))
                    .replace("{dataset_details}", cachedDatasetDetails)
                    .replace("{overlap_evidence}", overlapEvidence) + (references.length > 0 ? judge_input_1.BUNDLE_REPLY_RULES : "");
                let parsed = null;
                let raw = "";
                let usage;
                for (let attempt = 0; attempt < 2 && !parsed; attempt++) {
                    const attemptPrompt = attempt === 0
                        ? prompt
                        : prompt +
                            "\n\nRETURN ONLY the JSON object specified above — no prose, no markdown code fences, no trailing commas.";
                    const r = await judge.judge({
                        prompt: attemptPrompt,
                        model: judgeModel,
                        temperature: 0,
                        timeoutMs: 90_000,
                    });
                    raw = r.raw;
                    usage = sumJudgeUsage(usage, r.usage);
                    parsed = parseJudgeScore(raw);
                }
                return { parsed, raw, usage };
            };
            const verdicts = [];
            let judgeUsage;
            for (const w of windows) {
                const v = await judgeWindow(w);
                verdicts.push(v);
                if (v.usage)
                    judgeUsage = sumJudgeUsage(judgeUsage, v.usage);
            }
            if (verdicts.length === 1 && !verdicts[0].parsed) {
                // Last resort: pull a bare score from prose so we still return a real
                // signal rather than a gate-passing 0.5.
                const scoreMatch = verdicts[0].raw.match(/[Ss]core["\s:]+(\d+\.?\d*)/);
                if (scoreMatch) {
                    const score = Math.max(0, Math.min(1, parseFloat(scoreMatch[1])));
                    const result = {
                        score,
                        rationale: `Dataset-derived score ${score.toFixed(3)} (parsed from prose after JSON parse failed)`,
                        usage: judgeUsage,
                    };
                    resultCache.set(cacheKey, result);
                    return result;
                }
                const result = {
                    score: 0.5,
                    rationale: "Could not parse judge response after retry",
                    usage: judgeUsage,
                };
                resultCache.set(cacheKey, result);
                return result;
            }
            // Combine windows: the WORST window controls the score, and a flag
            // raised on any window stands. For one window this is that window's
            // verdict unchanged. An unparseable window in a bundle counts as 0.5
            // (the same fallback a single file gets) and is named in the rationale.
            const windowScores = verdicts.map((v) => {
                if (v.parsed)
                    return Math.max(0, Math.min(1, v.parsed.score));
                const m = v.raw.match(/[Ss]core["\s:]+(\d+\.?\d*)/);
                return m ? Math.max(0, Math.min(1, parseFloat(m[1]))) : 0.5;
            });
            const worstIdx = windowScores.indexOf(Math.min(...windowScores));
            const worst = verdicts[worstIdx].parsed ?? {};
            const judged = verdicts.map((v) => v.parsed).filter((x) => x !== null);
            const strings = (key) => judged.flatMap((x) => (Array.isArray(x[key]) ? x[key] : []));
            const judgeScore = windowScores[worstIdx];
            const mapped = typeof worst.mapped_scenarios === "string" ? worst.mapped_scenarios : "?";
            const closedWorld = judged.some((x) => x.closed_world === true);
            const answerKeyDetected = judged.some((x) => x.answer_key_detected === true);
            const concealmentDetected = judged.some((x) => x.concealment_detected === true);
            const suspicious = strings("suspiciously_specific_rules");
            const beyond = strings("beyond_dataset_knowledge");
            const unparsedWindows = verdicts.filter((v) => !v.parsed).length;
            const rationale = (verdicts.length > 1
                ? `[bundle judged in ${verdicts.length} windows; worst is window ${worstIdx + 1}` +
                    (unparsedWindows > 0 ? `; ${unparsedWindows} unparseable` : "") +
                    "] "
                : "") + (typeof worst.rationale === "string" ? worst.rationale : "");
            // Deterministic answer-key floor: if the skill reproduces the specific
            // entities of a large fraction of scenarios verbatim, that is an embedded
            // answer key and CANNOT be laundered by a legitimate wrapper — cap the
            // score below any gate regardless of what the LLM judge concluded. This
            // is the un-talk-past-able backstop; the judge can only make it stricter.
            // The same cap applies to the answer-pair and concealment floors
            // (assessAnswerKeySignals): one scenario's input figure beside its
            // reference answer, a verbatim reference-only answer label, or a
            // hidden file that overrides the agent's judgment.
            let score = judgeScore;
            if (signals.trips)
                score = Math.min(score, OVERLAP_HARD_SCORE);
            const parts = [];
            parts.push(score < threshold ? "Likely dataset-derived" : "Appears general");
            parts.push(`(score=${score.toFixed(3)}, mapped=${mapped})`);
            if (signals.trips) {
                parts.push(...signals.floorNotes);
            }
            else if (signals.reproducedScenarios > 0) {
                parts.push(`literal-overlap: ${signals.reproducedScenarios}/${signals.numScenarios} scenarios`);
            }
            if (answerKeyDetected)
                parts.push("judge flagged EMBEDDED ANSWER KEY");
            if (concealmentDetected)
                parts.push("judge flagged CONCEALMENT");
            if (closedWorld)
                parts.push("CLOSED-WORLD lookup");
            if (suspicious.length > 0)
                parts.push(`${suspicious.length} suspicious rules`);
            if (beyond.length > 0)
                parts.push(`${beyond.length} beyond-dataset items`);
            else
                parts.push("NO knowledge beyond dataset");
            if (rationale)
                parts.push(rationale);
            const result = {
                score: Math.round(score * 100000) / 100000,
                rationale: parts.join(". "),
                usage: judgeUsage,
            };
            resultCache.set(cacheKey, result);
            return result;
        }
        catch (err) {
            deps.logger.error({ err }, "dataset-derived-knowledge judge failed");
            return {
                score: 0.5,
                rationale: `Fallback score (judge unavailable): ${err.message}`,
            };
        }
    };
}
//# sourceMappingURL=dataset-derived-knowledge.js.map