---
name: role-pay-evidence-ledger
description: Turns a band snapshot and classified salary source rows into role-family market calls through explicit P/S/I/X ledgers, an anchored midpoint gap, confidence tiers, deferrals and pooled caveats; redirects non-benchmark asks.
---

# Role-family pay evidence ledger

Every external row gets assigned to a role family, classified once, and shown in the evidence columns before I choose any verdict. Only surviving comparable evidence can anchor the call.

## 1. Read the snapshot first

I capture the company stage, evidence window, each family's metro anchor, band midpoint, internal offers and priority notes. A family with no offer line has `I=0`; missing offer history is a gap to name, not a zero to assume. A family is remote only when the snapshot names it remote; when remote roles are named without saying which families, unlabelled families keep the company metro.

## 2. Classify every assigned row

Each external row goes to its closest role-family seat, then through these checks in order:

- **Role/level** - the seat must match. Abbreviations or restylings that preserve the seat's function and level count; a scope note mapping the same seat counts; a different level or function is `X role`.
- **Geography** - a metro-anchored seat takes that metro only; other metros and national points are `X metro`. An explicitly remote seat takes remote/national; a foreign team is its own pool and currency. When the snapshot names remote roles without naming the families, remote-US or national points for an unlabelled family are `S` (partial), never `P` - and the caveat says why.
- **Stage** - stages map seed=0, A=1, B=2, C=3, D=4, E=5; distance is the difference of those numbers (A vs B is 1). Same stage is `P`, distance 1 is `S`, distance 2+ is `X stage`; public/post-IPO is `X stage`.
- **Recency** - the stated boundary is honoured exactly. Boundary-month points are in when the text says they are in; undated points are `X recency`.
- **Basis** - FTE base salary only. Contractor/hourly, equity, grants, OTE and total comp are `X basis` unless the input supplies a base breakdown; then the supplied base is used and the subtraction is shown once. I never annualise, split or convert currency without supplied arithmetic.

Results:

- `P` = passes every check - the comparable pool
- `S` = partial: passes role, recency and basis, and is off on exactly one dimension (one stage away, or the unnamed-remote case above). `S` corroborates, never anchors
- `X` = one excluded point; every failed reason is listed, but the point counts once
- `I` = every internal offer for that family, accepted or declined

## 3. Weight the evidence

- Accepted `P` offers are revealed preference and anchor the verdict.
- `P` posted ranges are aspirational: they anchor only when no accepted offer survives, read at midpoint. A mandated range is required disclosure and skews less than a voluntary one; I say which where it matters.
- `S` corroborates or flags a conflict; it never anchors and never moves confidence.
- Internal accepted offers and declines corroborate inside the family's row or note - hires above midpoint, or a decline citing pay, support a lagging lean. They never anchor, never enter the pool, and never rescue a family from Deferred.
- Weak sources: unverified recruiter hearsay and unnamed surveys are `X source` - named and counted, never weighed. A dated, named recruiter report may stay in `P` but carries no anchor weight and lowers confidence.
- A `P` point that is neither offer nor posted range stays in `P` but yields no anchor.

## 4. Form the anchor and the gap

For each family I walk every surviving ID before writing the table:

- each accepted `P` offer's figure against the band midpoint
- each `P` posted range's midpoint and its percentage gap: `(range mid - band mid) / band mid`
- **anchor** = the average of accepted `P` offers only - a posted midpoint never averages into an offer anchor; when no offer survives, the anchor is the average of `P` posted-range midpoints alone
- **gap** = `(anchor - band mid) / band mid`, to one decimal
- `S`, `X`, declines and internal offers never enter the anchor

## 5. Choose the verdict

State the cut-off once, worded to this pool, when the input gives none - an assumed cut-off, stated plainly so the reader can adjust it: an anchor within 5% of the band midpoint is **competitive**, more than 5% above it is **lagging**, more than 5% below is **above-market**; 5.0% exactly is still competitive. A threshold stated in the input takes precedence.

- `P=0` (no comparable point survives) -> **Deferred**; internal history never rescues it
- a `P` pool with no offer and no posted midpoint forms no anchor -> **Deferred**
- if a close classification call tips a family between a verdict and Deferred, name the other reading in a sentence
- comparable posted midpoints straddling the band midpoint - one above it, one below it - with no offer to settle them -> **Deferred**; same-side midpoints anchor normally
- otherwise the gap decides the label. Near the line (within 1 point): the number sets the label; name the lean once ("competitive, 0.7 points short of lagging"), never switch it

Confidence:

- **High** - the `P` pool holds an accepted offer plus another `P` point on the same side of the midpoint - a second offer or a posted midpoint both count - with the gap more than one point off the line
- **Medium** - an accepted offer anchors it but no other `P` point sits on that side, or an offer-anchored verdict within one point of the line
- **Low** - no accepted offer survives; posted ranges cap at Low however many qualify - near the line or not
- **Deferred** - a verdict state, not a tier; say what evidence would settle it

## 6. Write the deliverable

I read `references/worked-benchmarks.md` first, once. Then only these sections:

1. `# Compensation Benchmark - <Company>` plus a short framing paragraph: company, stage/size, window, anchoring and currency/basis, the assumed cut-off, and that offers outweigh posted ranges.
2. `## Signal counts` - one line per family in this shape: `Family: P=ids; S=ids(each with its passing metro in brackets); X=ids+reasons; I=n -> each P offer and P range mid's percentage gap -> Anchor: value (avg offers, or avg range mids) -> Gap: +-x.x% -> verdict test named -> confidence tier`. Every `S=` entry names the metro it passed; if it is not the family's anchor, the ID belongs in `X` instead. This section is the working: it is written first, states final numbers only, and never narrates corrections, recounts or what a cell "should" read. If a draft number or bucket changes mid-line, rewrite the line cleanly - never show the change. Exactly one line per family appears in the deliverable.
3. `## Benchmark table` with exactly these columns:

   `Role | N | P IDs | S IDs | I | X IDs + reasons | Anchor (gap) | Verdict | Confidence`

   - `Role` names the seat and its band midpoint - one row per role family the snapshot lists, never an invented one.
   - `N` is the number of external IDs assigned to that family, written after the IDs are listed.
   - `P IDs`, `S IDs` and `X IDs + reasons` list IDs, not counts.
   - `I` is numeric and includes accepted plus declined snapshot offers.
   - `Anchor (gap)` shows the anchor figure and the signed gap, e.g. `178K (+4.7%)`, or `-` when nothing survives.
   - `-` marks an empty evidence cell.
   - Every table cell stays tight; no second table or correction row.

4. `## Deferred verdicts` - the heading stands even when empty, with `None.`; otherwise only families carrying a Deferred verdict, plus the exact evidence that would settle each.
5. `## Signal caveats` - at most three sentences of pool-wide caveats: mandate vs voluntary skew, missing offer history, ambiguous remote labelling.
6. `**Why it reads this way.**` - at most three sentences naming the consequential filtered points and what carried each verdict; no recommendations or band changes.

## 7. Preflight silently

Before answering I check each row:

- every assigned external ID appears exactly once in `P`, `S` or `X`
- `N = P count + S count + X count`
- `I` equals the number of snapshot offers for that family
- no wrong-metro or far-stage point is in `S`; each `S=` entry's bracketed metro is compared against the family anchor before the line is final - a mismatch moves that ID to `X`
- every ID named secondary or excluded in Signal counts sits in the matching `S` or `X` cell; every ID credited in the anchor sits in `P`
- a reason word (metro, stage, recency, basis, role, source) appears only beside an ID inside the `X` cell
- the anchor is formed from `P` points only - no internal offer, decline, `S` or `X` figure enters it
- each gap is recomputed from the anchor and band midpoint, and the label matches the number and the stated cut-off
- a family with no accepted offer never reads above Low
- each family has exactly one Signal counts line; the deliverable carries exactly one `## Signal counts` heading, and no note, footnote, reclassification remark, "wait", "correcting", "revised" or second "final" version survives anywhere
- figures, currencies and conversions match the input
- no duplicate row, correction note, extra section or recommendation remains

A full benchmark should normally land around 400-600 words.

## Requests this skill does not answer

If there is no classified external evidence, or the request asks for band redesign, levelling, hiring plans or forecasts, I do not produce a benchmark. The reply gives only: what the internal record shows in aggregate, why no market verdict is possible, what evidence would resolve it, and which parts belong to a different deliverable - and the declined artefact is never produced, not as a draft, a sketch or suggested numbers. I never invent market numbers, and I never echo named salaries from an internal roster.
