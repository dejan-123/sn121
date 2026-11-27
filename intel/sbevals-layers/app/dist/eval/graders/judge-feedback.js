"use strict";
// Miner-facing judge feedback, rendered from scores alone.
//
// The quality judges (rubric / model_judge, scenario_quality, skill_use) write
// a `rationale` that narrates the reference answer and the trap. The
// coordinator withholds those from public reads while a challenge's reference
// set is sealed and publishes them at close. Miners still need to know WHY a
// score is what it is, so each judge also returns a short `feedback` note.
//
// 1.0.39 asked the judge to write that note as free text under a "no
// specifics" rule and dropped notes that repeated six consecutive words of the
// reference. The first sealed challenge (SBC35, 2026-11-05) showed that is
// not enough: the notes paraphrased the planted traps scenario by scenario
// ("both basis traps (44% vs. 61% growth, 26 vs. 19 months payback)"). The
// judge that writes the note is the judge that holds the answer, so no prompt
// rule can make free text safe.
//
// Since 1.0.40 the note is never written by the model. It is rendered here
// from the per-criterion scores the judge already returns, using only
// vocabulary this file owns: a fixed status word per score band, criterion
// labels that are hard-coded in sb_evals (skill_use), and counts (rubric,
// scenario_quality, whose criterion ids come from the sealed dataset and are
// therefore never named). There is no path from scenario or reference content
// to the note.
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusOf = statusOf;
exports.dimensionFeedback = dimensionFeedback;
exports.countFeedback = countFeedback;
exports.bandFeedback = bandFeedback;
/** The status word for a criterion score on the judges' 0 / 0.25 / 0.5 / 0.75 / 1 scale. */
function statusOf(score) {
    if (!Number.isFinite(score))
        return "partly met";
    if (score >= 0.75)
        return "met";
    if (score >= 0.25)
        return "partly met";
    return "missed";
}
const STATUS_ORDER = ["met", "partly met", "missed"];
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
/**
 * Feedback for a judge with a fixed, public set of named dimensions
 * (skill_use). `dimensions` labels must be literals from the calling grader,
 * never strings from the sample.
 */
function dimensionFeedback(dimensions) {
    if (dimensions.length === 0)
        return undefined;
    const groups = new Map();
    for (const d of dimensions) {
        const s = statusOf(d.score);
        const list = groups.get(s) ?? [];
        list.push(d.label);
        groups.set(s, list);
    }
    const parts = [];
    for (const status of STATUS_ORDER) {
        const labels = groups.get(status);
        if (labels && labels.length > 0)
            parts.push(`${capitalize(status)}: ${labels.join(", ")}.`);
    }
    return parts.join(" ");
}
/**
 * Feedback for a judge whose criteria are defined by the (sealed) sample:
 * counts only, so no criterion id or description can leak.
 */
function countFeedback(scores, noun = "criteria") {
    if (scores.length === 0)
        return undefined;
    const total = scores.length;
    let met = 0;
    let partly = 0;
    let missed = 0;
    for (const s of scores) {
        const st = statusOf(s);
        if (st === "met")
            met++;
        else if (st === "partly met")
            partly++;
        else
            missed++;
    }
    const tail = [];
    if (partly > 0)
        tail.push(`${partly} partly met`);
    if (missed > 0)
        tail.push(`${missed} missed`);
    return `${met} of ${total} ${noun} met${tail.length > 0 ? ", " + tail.join(", ") : ""}.`;
}
/**
 * Feedback for a judge that returns one overall score and no criterion
 * breakdown (rubric / model_judge on a single-score rubric). The score is
 * public already; the note puts it in words.
 */
function bandFeedback(score, noun = "the rubric") {
    if (!Number.isFinite(score))
        return undefined;
    if (score >= 0.9)
        return `Meets ${noun}.`;
    if (score >= 0.75)
        return `Meets most of ${noun}, with minor shortfalls.`;
    if (score >= 0.5)
        return `Meets about half of ${noun}.`;
    if (score >= 0.25)
        return `Falls short on most of ${noun}.`;
    return `Falls short on ${noun} almost entirely.`;
}
//# sourceMappingURL=judge-feedback.js.map