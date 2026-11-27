---
name: role-pay-evidence-ledger
description: Turns a band snapshot and classified salary source rows into role-family market calls through explicit P/S/I/X ledgers, an anchored midpoint gap, confidence tiers, deferrals and pooled caveats; redirects non-benchmark asks.
---

# Role-family pay evidence ledger

Every external row is assigned to a role family, classified once, and shown before I choose any verdict. Only surviving comparable evidence anchors the call.

## 1. Read the snapshot first

I capture the company stage, evidence window, each family's metro anchor, band midpoint, internal offers and priority notes. A family with no offer line has `I=0`; missing offer history is a named gap, not a zero. A family is remote only when the snapshot names it remote; remote roles named without saying which families leave unlabelled families on the company metro, and the caveat says so.

## 2. Classify every assigned row

Each external row goes to its closest role-family seat, then through these checks in order:

- **Role/level** - the seat must match. Restylings that preserve function and level count; a scope note mapping the same seat counts; a different level or function is `X role`.
- **Geography** - a metro-anchored seat takes that metro only; other metros and national points are `X metro`. An explicitly remote seat takes remote/national; a foreign team is its own pool and currency. When remote roles are named without naming the families, remote/national points for an unlabelled family are `S`, never `P`.
- **Stage** - seed=0, A=1, B=2, C=3, D=4, E=5; distance is the difference (A vs B is 1). Same stage is `P`, distance 1 is `S`, distance 2+ or public/post-IPO is `X stage`.
- **Recency** - the stated boundary is honoured exactly; boundary-month points are in when the text says so; undated points are `X recency`.
- **Basis** - FTE base salary only. Contractor/hourly, equity, grants, OTE and total comp are `X basis` unless the input supplies a base breakdown; then the supplied base is used, subtraction shown once. Never annualise, split or convert currency without supplied arithmetic.

Results:

- `P` = passes every check - the comparable pool
- `S` = partial: off on exactly one dimension (one stage away, or the unnamed-remote case above). Corroborates, never anchors
- `X` = excluded; every failed reason is listed, the point counts once
- `I` = every internal offer for that family, accepted or declined

## 3. Weight the evidence

- Accepted `P` offers are revealed preference and anchor the verdict.
- `P` posted ranges anchor only when no accepted offer survives, read at midpoint. A mandated range is required disclosure and skews less than a voluntary one; I say which where it matters.
- Internal offers and declines corroborate inside the family's row or note - hires above midpoint, or a decline citing pay, support a lagging lean. They never anchor, enter the pool, or rescue a family from Deferred.
- Weak sources: unverified recruiter hearsay and unnamed surveys are `X source` - named and counted, never weighed. A dated, named recruiter report may stay in `P` but carries no anchor weight and lowers confidence.
- A `P` point that is neither offer nor posted range stays in `P` but yields no anchor.

## 4. Form the anchor and the gap

For each family the anchor is chosen by this decision tree, in order - never by blending:

1. **Any accepted `P` offer?** Anchor = the mean of accepted `P` offer figures only. A posted midpoint never averages into an offer anchor - not one offer plus one range, ever.
2. **No offer, `P` posted midpoints all on the same side of the band midpoint?** Anchor = the mean of those midpoints.
3. **No offer, and `P` posted midpoints straddle the band midpoint?** No anchor - the family defers.
4. **No `P` point that can anchor?** No anchor - the family defers.

`S`, `X`, declines and internal offers never enter the anchor at any step. **gap** = `(anchor - band mid) / band mid`, to one decimal; the label is judged on that rounded gap.

## 5. Choose the verdict

When the input gives no cut-off, state an assumed one once, plainly: an anchor within 5% of the band midpoint is **competitive**, more than 5% above is **lagging**, more than 5% below is **above-market**; 5.0% exactly is still competitive. A stated threshold takes precedence.

- `P=0`, or a `P` pool with no offer and no posted midpoint, or straddling midpoints -> **Deferred** per the anchor tree; internal history never rescues it
- if a close classification call tips a family between a verdict and Deferred, name the other reading in a sentence
- otherwise the rounded gap sets the label. Within one point of the cut-off (4.0-6.0% when it is 5%): the number still sets the label; name the lean once ("competitive, 0.7 points short of lagging"), never switch it

Confidence:

- **High** - an accepted offer plus one more same-side `P` point (offer or posted midpoint, mandated ranges count) with the gap more than one point off the line
- **Medium** - an accepted offer anchors it but no other `P` point sits on that side, `P` points land on both sides of the midpoint, or an offer-anchored verdict sits within one point of the line
- **Low** - no accepted offer survives; posted ranges cap at Low however many qualify - near the line or not
- **Deferred** - a verdict state, not a tier; say what evidence would settle it

## 6. Write the deliverable

I read `references/worked-benchmarks.md` first, once. Then only these sections:

1. `# Compensation Benchmark - <Company>` plus a short framing paragraph: company, stage/size, window, anchoring and currency/basis, the assumed cut-off, and that offers outweigh posted ranges.
2. `## Evidence audit` - one row per external evidence ID, none skipped, before any verdict appears:

   `| ID | Family | Bucket | Detail |`

   - `Detail` is one tight phrase: `X` gets the failed check(s); `S` gets the missed dimension plus the metro it passed; `P` gets its kind and figure or midpoint. Conversions are written out here once, e.g. `105K total - 10K bonus = 95K base`.
3. `## Signal counts` - one line per family: `Family: P=ids; S=ids(each with its passing metro in brackets); X=ids+reasons; I=n -> each P offer and P range mid's percentage gap -> Anchor: value (avg offers, or avg range mids) -> Gap: +-x.x% -> verdict test named -> confidence tier`. Every `S=` entry names the metro it passed; if it is not the family's anchor, the ID belongs in `X` instead. The section states final numbers only - it never narrates corrections, recounts or what a cell "should" read; a changed draft number means the line is rewritten cleanly. Exactly one line per family appears.
4. `## Benchmark table` with exactly these columns:

   `Role | N | P IDs | S IDs | I | X IDs + reasons | Anchor (gap) | Verdict | Confidence`

   - `Role` names the seat and its band midpoint - one row per role family the snapshot lists, never an invented one.
   - `N` is the number of external IDs assigned to that family, written after the IDs are listed.
   - `P IDs`, `S IDs` and `X IDs + reasons` list IDs, not counts.
   - `I` is numeric and includes accepted plus declined snapshot offers.
   - `Anchor (gap)` shows the anchor figure and the signed gap, e.g. `178K (+4.7%)`, or `-` when nothing survives.
   - `-` marks an empty evidence cell.
   - Every table cell stays tight; no second table or correction row.

5. `## Deferred verdicts` - the heading stands even when empty (`None.`); otherwise families carrying Deferred, plus what would settle each.
6. `## Signal caveats` - at most three sentences of pool-wide caveats: mandate vs voluntary skew, missing offer history, ambiguous remote labelling. When the snapshot names remote roles without naming families, one sentence must say so plainly ("remote assignment is left open; unlabelled families keep the metro and remote/national points read as partials"). The last sentence names the single piece of evidence that would most move the weakest verdict.
7. `**Why it reads this way.**` - name the consequential filtered points and what carried each verdict; no recommendations or band changes.

## 7. Preflight silently

Before answering I check:

- every external ID appears exactly once in the Evidence audit and exactly once in `P`, `S` or `X`, and the bucket agrees across the audit, Signal counts and the benchmark table
- `N = P count + S count + X count`
- `I` equals the number of snapshot offers for that family
- no wrong-metro or far-stage point is in `S`; each `S=` entry's bracketed metro is checked against the family anchor - a mismatch moves that ID to `X`
- every ID credited in the anchor sits in `P`
- a reason word (metro, stage, recency, basis, role, source) appears only beside an ID inside the `X` cell
- the anchor followed the decision tree: offers-only mean, or same-side range-midpoint mean when no offer survives, never a blend; no internal, `S` or `X` figure enters it
- each gap is recomputed from the anchor and band midpoint, and the label matches the rounded gap and the stated cut-off
- a family with no accepted offer never reads above Low
- each family has exactly one Signal counts line; exactly one of each required heading appears, and no "wait", "correcting", "revised" or second "final" version survives anywhere
- figures, currencies and conversions match the input; no duplicate row, correction note, extra section or recommendation remains

A full benchmark lands around 450-650 words.

## Requests this skill does not answer

If there is no classified external evidence, or the request asks for band redesign, levelling, hiring plans or forecasts, I do not produce a benchmark. The reply gives only: what the internal record shows in aggregate, why no market verdict is possible, what evidence would resolve it, and which parts belong to a different deliverable - the declined artefact is never produced, not as a draft or suggested numbers. I never invent market numbers or echo named salaries from an internal roster.
