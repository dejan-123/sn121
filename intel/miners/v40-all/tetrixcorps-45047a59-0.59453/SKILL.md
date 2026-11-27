---
name: role-family-comp-benchmark
description: Turns a classified external pay-evidence table plus an internal band snapshot into a compact per-role-family competitive-position benchmark with a per-point evidence audit, funnels, basis conversions, confidence tiers, deferrals and pool-wide caveats. Redirects requests outside benchmarking.
---

# Role-family compensation benchmark

## A. Scope check (first)
A benchmark needs BOTH an external evidence table of typed, dated points AND an internal snapshot with bands per role family.
- If the ask is mainly an individual pay decision, a raw salary lookup, band or level design, or a pay-equity audit, or if either input is missing, build no table. Reply in plain prose of at most five sentences: name the category of each ask; say benchmarking is a different job; say which input is missing and what a benchmark needs (dated offers or posted ranges, each with role, level, place and company stage, plus the internal bands); name the kind of process each ask belongs to. No bold, no list, no closing question or offer, no market numbers, nothing about named people, no band design.
- If both inputs are present and a side ask is out of scope, benchmark and decline the side ask in one line at the end.

## B. Output contract (read before working)
Answers are cut off at about 1,000 tokens, and a cut removes the verdicts. Keep the whole answer under 2,800 characters. Write five blocks in this order. No numbering, no code fences, no bold, no headings, no padding, no narration, no restated rules.
- Window line: `Window from <YYYY-MM cutoff> (stated|12 months before retrieval); anchors <family: metro>; basis <currency, base>.` Use the window the input states; the 12-month default only when none is stated.
- Point lines, every point, in ID order: `ID row type figure+basis place gap date,cutoff -> class reason`. Row: the table row (family and level) its title names; another level is another row. Type: offer, range, hearsay, survey. Figure+basis: annual amount in the band currency, labelled base, OTE, total, hourly or retention (range midpoint for a range; a conversion written `total-bonus=base, down`). Place: the metro as printed. Gap: the point's company stage minus ours in rungs (0, +1, -1, +2, pub). Date as printed followed by ok or before (before = earlier than the cutoff month). Reason: only the failed or partial checks, never the posting notes.
- Class from the facts on the line, in this order. Drop if ANY of: place is a different metro (even when the gap is 0 or 1); gap of 2 or more or pub; date before; type hearsay, survey or undated; basis other than base. Else Partial if ANY of: place national or no-metro; gap of +1 or -1; scope ambiguous. Else Full. Write `Full k` for a Full accepted offer, `Full m` for a Full posted range, `Partial p`, or `Drop <reason>`. Shapes: `E-00 FamA Senior offer 131k base Metro1 0 2026-03 ok -> Full k`; `E-00 FamA Senior range mid 120k base Metro1 -1 2026-04 ok -> Partial p stage`; `E-00 FamB Senior range mid 120k OTE Metro2 +2 2025-01 before -> Drop geo, stage, date, basis`.
- Table, one row per family and level, copied from that row's own point lines: row | ours | funnel with numbers, e.g. `4>1(E-00 geo)>3` | k:IDs m:IDs p:IDs | reference value (IDs) | ours vs ref = delta | verdict | confidence tier with counts, e.g. `Low k0 m1` | internal offers (labelled internal, or none). Never list another row's ID. Dropped counts Drop lines only; Partial lines survive and go only in p, never in k or m.
- Confidence tier from the counts, no other input: k2 or more High (if the offers agree); k1 with m1 or more Medium; k1 with m0 Low; k0 with m2 or more Medium; k0 with m1 Low; k0 with m0 Deferred, whatever p is.
- `Deferred:` one line per deferred family with the evidence gap and what would settle it (type, stage, place, window, count); `none` only if every family has a verdict.
- `Caveats:` at most two short pool-wide lines.
If space runs short, shorten reasons first; never drop the table.

## C. Method (do it, do not narrate it)
Read the inputs: retrieval date; the data window (if none is stated, 12 months before retrieval); band currency and basis; each family's anchor (headquarters, the metro its remote roles are anchored to, or the team's stated location). Work at family-plus-level grain, never individuals. Use only figures and rates in the input; never invent a rate.

**Class each point from the facts on its line.** Any fail makes it Drop; no fail but any partial makes it Partial; otherwise Full.
- Place: the family's anchor metro passes; national or no-metro is partial; any other metro fails, even for mandate-driven postings.
- Stage rungs run Seed, A, B, C, D, E or later, public. Gap 0 passes; 1 rung either way is partial; 2 or more, or public against private, fails.
- Scope: same function and level, or a title the input maps to that level, passes; ambiguous seniority partial; different level or function fails.
- Type: accepted offer, or a posted range with a stated date and named source, passes; hearsay, undated points, unnamed surveys fail.
- Date: compare with the cutoff month. The cutoff month itself is inside and later months are inside; only an earlier month fails (with a cutoff of 2024-03, a point from 2024-03 passes and one from 2024-02 fails).
- Basis: base salary, or a total whose stated bonus or split lets base be derived, passes. Total, OTE or variable pay with no split, retention, sign-on or acquisition packages, contractor or hourly rates, equity-heavy or cash-heavy mixes, declined or withdrawn offers shown as market data, and another currency with no rate printed in the input all fail.
A point counts only for the family and level its title names.

**Normalise** to annual base cash in the band's currency: remove a stated bonus from a total, or apply a rate printed in the input; write original, result and direction.

**Funnel and counts**: retrieved = every point naming the family and level; dropped = its Drop lines, with IDs and reasons; survived = the rest. k = Full accepted offers only, m = Full posted ranges only (a range is never an offer), p = Partial points. k+m+p equals survived and the counts must equal the point lines.

**Internal offers are not evidence.** The snapshot's own accepted or declined offers never enter the funnel, the reference, or the counts; they appear only in the last column, labelled internal.

**Reference** uses Full lines of that family only. If k is at least 1 the reference is the median of the Full offers alone; ranges are not averaged into it (the median of two is their average). Only if k is 0 is it the median of the Full range midpoints. Never use a Partial or Drop line.
**Delta = (ours - reference) / reference**, ours being the band midpoint; write ours first. Ours below the reference gives a minus sign. Read the verdict off the number: -5.0% to +5.0% inclusive Competitive; below -5.0% Lagging (-8.4% is Lagging); above +5.0% Above-market (+7.1% is Above-market). Above the reference is never Lagging; below is never Above-market. Within 1.5 points of a threshold, say borderline.

**Confidence**: use the tier lookup in section B; Partial points never carry a verdict. Two refinements: offers that disagree on the verdict give Deferred, naming the conflict; k1 whose range points to another verdict gives Low. Give the deciding reason naming k and m.

**Defer, do not stretch**: also defer when the band is missing or its basis cannot be aligned. Never borrow from another family, level, stage or city, and never fill a gap with a Partial or Drop point.

If a point's handling is unclear (remote roles, hourly or total-comp figures, level mapping, windows), open references/edge-cases.md. Then answer with the five blocks only.
