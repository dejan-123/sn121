---
name: role-family-pay-benchmark
description: Decide whether each role family's salary band is competitive, lagging or above market by screening a classified external evidence pool against an internal band snapshot, then report the verdict, the evidence funnel behind it and a confidence tier per family.
---

# Role-family pay benchmark

You compare an internal band (per role family and level) with external pay evidence that was already collected and labelled. Every verdict must trace to the points that survived your screen. Work the steps in order and write the screen down before any verdict: decisions made in your head are where errors happen.

## Step 0: scope gate (before anything else)

A benchmark needs both: (a) internal bands per role family and level, (b) a classified external pool (each point with source, type, date, location, company stage, figure). Redirect instead of benchmarking when the ask is any of:
- what to pay, raise or offer one named person;
- "what does the market pay for X" with no pool supplied (never quote market figures from memory);
- designing, re-levelling or adding levels to a band;
- comparing employees with each other (pay equity, fairness review);
- or either input is missing.

A redirect is short and has no table: what you cannot do here and why (one line per ask), what to send so a benchmark can run, and which part you can do now. Never restate an individual's name or salary. Read `references/reply-shapes.md` (section "Redirect") for the form.

## Step 1: fix the frame

- **Stage ladder** (position): Seed 0 · Series A 1 · B 2 · C 3 · D 4 · any later private round 5 · public 6. Rungs apart = difference of positions: Seed vs A = 1; Seed vs B = 2; A vs public = 5.
- **Anchor geography per family**: the HQ metro; or the cost tier the input pegs remote roles to; or the team's own location when the input places a team elsewhere (that family's currency follows its band).
- **Window**: find the first allowed month. If the input names a month ("anything before March 2029 is excluded"), that named month is the first allowed month (2029-03): do not count back from it again. Only when the input gives just a length ("the last 9 months") count back from the retrieval month. A point is in only if its year-month is the first allowed month or later: 2029-02 is out, 2029-03 is in. Undated points are out. Never use a default window.
- **Per family**: band min / mid / max (no midpoint → (min+max)/2, say so); internal accepted and declined offers. A family with no band, or a band on another basis than the evidence, gets no verdict: name the gap.

## Step 2: hard gates (fail one = dropped, reason named, counted)

1. **Window**: before the first allowed month, or undated.
2. **Source**: verbal or second-hand reports, surveys with no named publisher or method, anonymous self-reports.
3. **Basis**: compare on annual base salary in the band's currency, reached only with arithmetic from figures in the input:
   - range → midpoint (min+max)/2, never the min or max;
   - total pay with the bonus or variable amount stated → subtract it; write `total 137,400 − stated bonus 14,600 = base 122,800 (down to base)`;
   - monthly, weekly or hourly *employee* pay → annualise only with a period or hours figure the input gives;
   - on-target earnings or total pay with no stated split → dropped (base unknown);
   - a figure that folds in a retention, acquisition, sign-on or equity grant without a base breakdown → dropped (deal-specific money, not a salary level);
   - contractor, freelance, agency or day rates → dropped, never annualised (no benefits load, different employment structure);
   - packages the notes call equity-heavy or cash-heavy → dropped (the mix distorts base);
   - another currency with no rate in the input → dropped ("no rate supplied"). Never supply a rate.

## Step 3: score four dimensions, then write the evidence screen

| Dimension | ✓ match | ~ partial | ✗ mismatch |
|---|---|---|---|
| Geography | the family's anchor | national or unanchored-remote range | any other named metro or country |
| Stage | 0 rungs | 1 rung | 2 or more rungs; unknown |
| Scope | same function and level; a stated level equivalence; a multi-title posting that names your title | adjacent specialism, same level | different level or function |
| Type | accepted offer; posted range | n/a | declined offer, claimed competing offer (signals only) |

Class, first match wins: (1) any gate failure → **Dropped**; (2) any ✗ → **Dropped**; (3) two or more ~ → **Dropped**; (4) exactly one ~ → **Partial**; (5) otherwise **Full**. No geographic differential is ever assumed.

Write the screen as the first table of the reply, one row per point:
`| ID | Family | Window | Geo | Stage | Scope | Type / basis | Class | Reason |`. The Window cell shows the comparison, e.g. `2029-02 ✗ (< 2029-03)`; the Stage cell shows the rung count, e.g. `D, 2 ✗`. Other dimension cells hold ✓ ~ ✗. Reason names every failure, in the input's own words, basis or rate problems first.

## Step 4: anchor and verdict

Anchor, first match wins:
1. The family has one or more **Full** accepted offers → anchor = median of those offers only. Full ranges stay out of the median; they only cross-check.
2. No Full offer, one or more **Full** ranges → anchor = median of their midpoints.
3. No Full row at all → **Deferred**: no anchor, no gap, no verdict, even when partials agree. Move it to the Deferred section and show its partials there as direction only.

- A partial offer never outranks a full range, and partials never enter any median.
- Internal offers and declines are corroboration, never pool members, never the anchor.
- gap = (band midpoint − anchor) ÷ anchor, one decimal, sign shown, always written out with the numbers: `(108,500 − 114,200) ÷ 114,200 = −5.0%`. Classify on the unrounded value; if it rounds onto ±5.0%, show two decimals.
- Direction check on every row: band midpoint below the anchor → negative gap → the band pays less than the market → Competitive or Lagging only. Band midpoint above the anchor → positive gap → Competitive or Above-market only.
  - −5.0% to +5.0% → **Competitive**; below −5.0% → **Lagging**; above +5.0% → **Above-market**.
- |gap| between 4.0% and 5.0%: write "Competitive (lower edge)" or "(upper edge)" and name the input's pressure signal pointing across the line (internal accepts clearing well above midpoint, a decline citing pay, an urgent open role), or say there is none.

## Step 5: confidence tier (deciding reason in one clause)

- **High**: two or more full points including at least one accepted offer, all giving the same verdict.
- **Medium**: one full accepted offer alone; or two or more full posted ranges that agree, no offer (ranges alone never exceed Medium).
- **Low**: a single full posted range; or full points that disagree on direction. Partials never raise a tier: one full range plus a partial offer is still Low.
- With no full offer, the reason says "posted ranges only: capped". When a partial points the other way, the reason says so.
- **Deferred**: no full point survives (partials alone never carry a verdict, even if they agree); or no usable band.

## Step 6: write the reply

Read `references/reply-shapes.md` now, then write, in this order:
1. `##` title with the company, then one frame line: stage, anchor geography, basis, first allowed month, verdict rule, and why offers lead (an accepted offer is a price both sides agreed to; a posted range is what an employer hopes to pay).
2. Evidence screen (Step 3).
3. Anchor workings, one line per family, keeping offers and ranges apart:
   `Family: full offers [id value; ...] → anchor = median | full range mids [id value; ...]: cross-check only | gap = (mid − anchor) ÷ anchor = (…) = ±x.x%`
   or, with no full offer, `Family: no full offer → full range mids [id value; ...] → anchor = median (capped)`
   or `Family: no full row → Deferred`. Then list every midpoint and every pay-element or period conversion, with direction.
4. Benchmark table, one row per role family and level: band mid | anchor (ids) | gap | verdict | funnel | confidence: deciding reason. Copy the anchor from the workings. Funnel = `retrieved N → full F / partial P / dropped D`; counts must match the screen.
   Under it, **Bottom line**: three to five plain sentences a pay lead could act on: which families lag or sit above market and by how much, which are deferred and the one fact that blocks them, the exclusions that changed a call, and which open roles are most exposed. Only facts already in the table.
5. Internal corroboration: one clause per family that has internal offers or declines; skip families without them.
6. Deferred verdicts: per family, the exact gap and the evidence that would settle it (type, location, stage, level).
7. Signal caveats: at most three one-sentence bullets on skews that could move several verdicts at once (posted-range share, mandated vs voluntary postings, single source, stage or location concentration, thin counts). A caveat that changes no verdict is padding: leave it out.

The screen and the anchor workings are your working: write no step headings, notes or plan before the title, and never restart or append a second version; if you spot an error, fix that cell and continue. Role-family grain only; every figure comes from the input or shown arithmetic; no preamble before the title; aim for 4,500–7,500 characters.
