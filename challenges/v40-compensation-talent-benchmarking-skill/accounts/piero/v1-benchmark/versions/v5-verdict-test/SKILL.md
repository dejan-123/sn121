---
name: role-pay-evidence-ledger
description: Turns a band snapshot and classified salary source rows into role-family market calls through explicit P/S/I/X ledgers, offer and range signals, confidence tiers, deferrals and pooled caveats; redirects non-benchmark asks.
---

# Role-family pay evidence ledger

Every external row gets assigned to a role family, classified once, and shown in the evidence columns before I choose any verdict. Only surviving evidence can move the call.

## 1. Read the snapshot first

I capture the company stage, evidence window, each family's metro anchor, band midpoint, internal offers and priority notes. A role omitted from offer history has `I=0`; I name the gap only where it matters.

## 2. Classify every assigned row

Each external row goes to its closest role-family seat, then through these checks in order:

- **Role/level** - the seat must match. Abbreviations or restylings that preserve the seat's function and level count; other variants need a scope note mapping the same seat and level. A different level or function is `X role`.
- **Geography** - a metro-anchored seat takes that metro only. Remote-US, national and other metros are `X metro`, never `S`. An explicitly remote seat takes remote/national; a foreign team is its own pool and currency. A family is remote only when the snapshot names it remote; otherwise it keeps the company metro, even when the snapshot mentions unnamed remote roles.
- **Stage** - stages map seed=0, A=1, B=2, C=3, D=4, E=5; distance is the difference of those numbers (A vs B is 1). Same stage is `P`, distance 1 is `S`, distance 2+ is `X stage`; public/post-IPO is `X stage`.
- **Recency** - the stated boundary is honoured exactly. Boundary-month points are in when the text says they are in; undated points are `X recency`.
- **Basis** - FTE base salary only. Contractor/hourly, equity, grants, OTE and total comp are `X basis` unless the input supplies a base breakdown. I never annualise, split or convert currency without supplied arithmetic.

Results:

- `P` = passes every check
- `S` = passes role, geography, recency and basis, and is one stage away. Geography is a hard gate: one stage away plus wrong metro is `X metro`, never `S`
- `X` = one excluded point; every failed reason is listed, but the point counts once
- `I` = every internal offer for that family, accepted or declined

## 3. Weight the evidence

- Accepted offers are revealed preference and lead.
- Declined offers are directional only, never accepted and never a band top.
- Internal accepted offers count like external primary offers; internal declines corroborate.
- Posted ranges skew aspirational when voluntarily posted; a mandated range is required disclosure and skews less. I say which where it matters.
- Weak sources stay in `P`/`S` if they pass the checks; source quality lowers confidence, not inclusion.
- Secondary evidence corroborates only and cannot lead a strong call.

## 4. Count the two signals

For each family I walk every surviving ID before writing the table:

- each accepted `P` offer and each accepted internal offer lands on `offers above` or `offers below` against the band midpoint
- each `P` posted range gets its midpoint measured: `(range mid - band mid) / band mid`; at least +4% lands on `ranges above`, at least -4% on `ranges below`, nearer counts neither way
- a `P` point that is neither an accepted offer nor a posted range (hearsay, survey median) counts in `P` but yields no signal
- `S`, `X` and declined offers produce no signal of either kind
- every qualifying range enters the Signal cell, including when offers already satisfy a verdict; the cell reports all signals, not just the ones that carried the call

The midpoint does the work, never the range top.

## 5. Choose the verdict

- `P=0` with `I=0` (empty or secondary-only pool) → **Deferred**; a surviving `P` point is never Deferred, even when it yields no signal - it reads At market
- `offers above >=2` and `offers below=0` → **Band trails market**
- `ranges above >=2`, `ranges below=0` and `offers below=0` → **Band trails market**
- `offers above=1`, `ranges above=1`, and no below signal → **Band trails market**
- The same tests mirrored below midpoint → **Band ahead of market**
- A lone signal never carries a verdict: a net of `1/0` in either column alone still reads At market; every non-deferred directional verdict needs at least two same-side signals
- Everything else surviving → **At market**

Confidence:

- **High** - at least two accepted offers on one side of midpoint, none on the other, plus three or more surviving evidence points (`P+S+I >= 3`); ranges alone can carry a verdict but never reach High
- **Medium** - two or more surviving evidence points (`P+S+I >= 2`) without High's offer strength; two survivors never drop to Low
- **Low** - exactly one surviving evidence point (`P+S+I = 1`), or a pool resting only on hearsay, surveys or recruiter reports; a verdict carried by posted ranges (two or more on one side, or one range paired with one offer) is Medium whenever survivors reach two, not weak-source Low
- **Deferred** - `P=0` and `I=0`; not a confidence tier

## 6. Write the deliverable

I read `references/worked-benchmarks.md` first, once. Then only these sections:

1. `# Compensation Benchmark - <Company>` plus a short framing paragraph: company, stage/size, window, anchoring and currency/basis.
2. `## Signal counts` - one short line per family in this shape: `Family: P=ids; S=ids(each with its passing metro in brackets); X=ids+reasons; I=n → then each accepted offer's side of the band midpoint and each primary range mid's percentage gap → Net: offers a/b; ranges a/b → verdict test named (two-signal test passed, or 'one/no signal → At market') → Survivors: n (<3 → at most Medium; >=3 allows High if its offer test passes) → confidence tier`. Every `S=` entry must name the metro it passed, e.g. `S=E-04(SF)`; if that metro is not the family's anchor, the ID belongs in `X` instead. Declines and `S` points are named as contributing nothing. This section is the working: it is written first, states final numbers only, and never narrates corrections, recounts or what a cell "should" read. If a draft number or bucket changes mid-line, rewrite the line cleanly - never show the change. Exactly one line per family appears in the deliverable; a family is never worked twice, and rework happens invisibly before the line is written.
3. `## Benchmark table` with exactly these columns:

   `Role | N | P IDs | S IDs | I | X IDs + reasons | Signal | Verdict | Confidence`

   - `Role` names the seat and its band midpoint - one row per role family the snapshot lists, never an invented one.
   - `N` is the number of external IDs assigned to that family, written after the IDs are listed.
   - `P IDs`, `S IDs` and `X IDs + reasons` list IDs, not counts.
   - `I` is numeric and includes accepted plus declined snapshot offers.
   - `Signal` is `offers <above>/<below>; ranges <above>/<below>` copied from the family's Signal counts net.
   - `—` marks an empty evidence cell.
   - Every table cell stays tight; no second table or correction row.

4. `## Deferred verdicts` - the heading stands even when empty, with `None.`; otherwise only families carrying a Deferred verdict (`P=0` and `I=0`), plus what evidence would resolve each.
5. `## Signal caveats` - at most three sentences of pool-wide caveats: mandate vs voluntary posting skew, hearsay, thin or missing offer history. A posted range's top above the band max is routine and earns no row note.
6. `**Why it reads this way.**` - at most three sentences naming the consequential filtered points; no recommendations or band changes.

## 7. Preflight silently

Before answering I check each row:

- every assigned external ID appears exactly once in `P`, `S` or `X`
- `N = P count + S count + X count`
- `I` equals the number of snapshot offers for that family
- one point with two failed checks is still `X=1`
- no wrong-metro or far-stage point is in `S`; each `S=` entry's bracketed metro is compared against the family anchor before the line is final - a mismatch moves that ID to `X`
- every ID named secondary or excluded in Signal counts sits in the matching `S` or `X` cell; every ID credited with a signal sits in `P`
- a reason word (metro, stage, recency, basis, role) appears only beside an ID inside the `X` cell
- `N` equals the count of IDs in that line's `P=` `S=` `X=` lists, and Survivors equals `P+S+I` driving the confidence tier; Survivors of two or more never reads Low, and High requires accepted offers on one side only
- each family has exactly one Signal counts line; no redo, revised or final-version wording survives
- figures, currencies, statuses and supplied conversions match the input
- the Signal counts lines enumerate every accepted offer, every `P` range percentage, and each Signal cell's totals are copied from them exactly
- signal counts and verdict satisfy the ordered test
- no duplicate row, correction note, extra section or recommendation remains

A full benchmark should normally land around 400-600 words.

## Requests this skill does not answer

If there is no classified external evidence, or the request asks for band redesign, levelling, hiring plans or forecasts, I do not produce a benchmark. The reply gives only: what the internal record shows in aggregate, why no market verdict is possible, what evidence would resolve it, and which parts belong to a different deliverable - and the declined artefact is never produced, not as a draft, a sketch or suggested numbers. I never invent market numbers, and I never echo named salaries from an internal roster.
