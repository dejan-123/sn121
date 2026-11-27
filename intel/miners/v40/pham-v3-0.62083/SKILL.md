---
name: role-family-market-position
description: For each role family and level, decide whether the salary band is lagging, competitive or above market using only the outside pay points that survive a comparability screen, and report the funnel, the confidence tier and what evidence is still missing.
---

# Role-family market position

Outside evidence prices the band; the company's own hires only tell you how hard hiring feels. Keep those two apart and every call stays traceable to points a sceptical reader would accept. Write the screen before deciding anything.

## A. Scope first

Proceed only with both: bands by role family and level, and an outside pool whose points are already classified (source, type, date, location, funding stage, figure). Otherwise, or when the request is one of these, reply with a short redirect and no table:
- an offer, raise or counter-offer for one person;
- market rates with no pool supplied (never quote pay from memory);
- designing grades, ranges or new levels;
- executive or board pay, equity grant sizing, or comparing colleagues for fairness.

Redirect: one line per ask saying what work it belongs to, what to send for a benchmark, and what can be done now; no figures, no person's name or salary. Form: `references/reply-shapes.md`, "Redirect". It needs no working and no checks.

## B. Frame

- **Round positions**: Seed 0 · A 1 · B 2 · C 3 · D 4 · later private 5 · public 6. Rungs apart = difference.
- **Home location per family**: headquarters metro, or the cost tier remote roles are pinned to, or the team's own city when the input places it elsewhere (its band currency then applies).
- **Window**: the first allowed month. A named month ("nothing before May 2031") is itself the first allowed month: do not count back from it. Count back from the retrieval month only when the input gives a length alone. Undated points are out.
- **Each family**: band min, mid, max (mid missing → (min+max)/2, say so); the company's own accepted and declined offers; its open-role priority. No band, or a band on another pay basis, means no call: say which input is missing.

## C. Screen

A point is **dropped**, reason quoted, when it is outside the window or undated; cannot be checked (verbal or second-hand, unnamed survey or method, anonymous); or cannot reach annual base pay in the band currency using the input's own numbers. Ranges become midpoints. A stated bonus or variable amount is subtracted (down to base). Monthly, weekly or hourly employee pay is annualised only with a stated period or hours. Dropped on basis: on-target or total pay with no split; retention, acquisition, sign-on or equity money folded in; contractor, agency, freelance or day rates; packages noted as equity-heavy or cash-heavy; another currency with no rate. Never supply a rate, split or period.

Then score:

| Dimension | match | partial | mismatch |
|---|---|---|---|
| Location | home location | national or unanchored remote | another named city or country |
| Round | same | one rung | two or more; unknown |
| Role | same function and level; any note in the input mapping the role to yours (title wording then never matters); multi-title posting naming the role | adjacent specialism, same level, no such note | other level or function |
| Type | accepted offer; posted range | - | declined or claimed rival offer (signal only) |

First fit: drop reason or any mismatch → **Dropped**; two partials → **Dropped**; one partial → **Partial**; none → **Full**. No location or round adjustment is ever assumed.

## D. Anchor, gap, verdict

Anchor, first fit:
1. Full accepted offers → their median; full ranges only cross-check.
2. Full ranges only → median of their midpoints.
3. No full point → **Deferred**. Also Deferred: a family whose only evidence of any kind is one voluntary or unlabelled range, with no partial point, no own accepted offer and no stated pay-transparency law behind it; nothing corroborates or contradicts it.

Partials never enter a median. Own offers and declines never enter the pool: they were priced off the band itself.

gap = (band midpoint − anchor) ÷ anchor, two decimals, operands shown: `(80,700 − 84,500) ÷ 84,500 = −4.50%`. Minus: the band pays below the market.
- −5.00% to +5.00% inclusive → **Competitive**; below → **Lagging**; above → **Above-market**.
- 4.00% to 5.00% either way → "Competitive (lower edge)" or "(upper edge)". Name any pressure the input shows (own accepts above midpoint, a priority open role, a decline citing pay) as risk; it never changes the verdict, which follows the outside pool alone.

## E. Confidence

- **High**: a full accepted offer plus a second full point that agrees (another offer, or a full range containing the anchor).
- **Medium**: one full offer alone or beside a range not containing it; or two or more agreeing full ranges that the company's own accepted offers or a pay-citing decline also support.
- **Low**: ranges without that support, a single range, or full points disagreeing on direction. Name the posted-range cap and what is missing.
- **Deferred**: as in D.

## F. Working, checks, document

1. Read `references/reply-shapes.md`.
2. Next message: the working as plain lines, one per point (`ID · family · month vs first allowed · location · round, rungs · role · type/basis · class · reason in the input's words`), one per family (`full offers [...] → anchor | full range mids [...]: cross-check | gap = (mid − anchor) ÷ anchor = ±x.xx%`, or `ranges only → anchor`, or `Deferred: why`), then each midpoint and conversion with direction. In that same message call read_reference on `references/final-checks.md`. Nobody reads the working.
3. After the checks return, reply with the document alone, copying calls, figures and IDs from the working.

Document:
1. `## <Company>: role-family pay benchmark`
2. **Basis.** One paragraph: round, home location, base pay and currency; the window in the input's words, the first allowed month and any point on or over the boundary by ID; each conversion with arithmetic and direction, or none needed; the verdict rule; why offers lead (an accepted offer is revealed preference, a price someone took; a posted range is aspirational, what an employer says it may pay).
3. Table, one row per family and level: `| Role family · level | Band mid | Verdict | Evidence funnel | Anchor and gap | Confidence: reason |`. Funnel: `N retrieved: F full (IDs); P partial (ID: what differs); D dropped (ID: reason)`, zeros shown. Anchor and gap: the anchor's ID and type, the gap with operands, the cross-checking range. Points outside the anchor are named with their direction (above or below the midpoint), not re-priced. A Deferred row says "gap n/a". Each row's wording fits that row only. Then **Pool.** summing all rows.
4. **Bottom line.** Three to five plain sentences: who lags or leads and by how much, edge calls and their pressure, what blocks each deferral, the exclusion that changed a call, the most exposed open roles.
5. `### Internal corroboration`: one clause per family with own offers or declines.
6. `### Deferred verdicts`: always present. Per family: blocking IDs and the evidence that would settle it (type, location, round, level, date). None: "None." plus families resting on one full point.
7. `### Signal caveats`: up to three one-sentence bullets naming IDs (offer vs range share, mandated vs voluntary postings, single source, thin counts).
8. `### Data gaps`: two to four bullets on internal facts the input lacks and what each would change: families with no own offers, remote roles not tied to a family, missing band figures, no stated target percentile.

Family-and-level grain only; every figure from the input or shown arithmetic; 4,500-7,500 characters.
