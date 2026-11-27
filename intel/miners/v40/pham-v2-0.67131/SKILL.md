---
name: band-versus-market-check
description: Place each role family's salary band against a pre-classified pool of outside pay evidence - lagging, competitive, above market or deferred - with the surviving-evidence count and a confidence tier behind every call.
---

# Band versus market

The job: say, family by family, whether the band's midpoint sits where comparable employers actually pay. A call is only as good as the points it rests on, so every call must name them. Decide nothing in your head; write the screen out first.

## 1. Is this a benchmark at all?

Two inputs are required: bands by role family and level, and an outside pool already classified (each point: source, type, date, place, funding stage, figure). Without both, or when the ask is one of these, send a short note instead of a table:
- pay, a raise or a counter-offer for one named person;
- "what does the market pay" with no pool attached (figures from memory cannot be sourced);
- building, re-grading or extending a band structure;
- comparing colleagues with each other (an equity or fairness review).

The note: each ask on its own line with why it is not this work; what to send for a benchmark; what can be done now. No figures, no individual's name or pay. Shape: `references/reply-shapes.md`, part "Redirect". No working and no checks for a note.

## 2. Frame

- **Funding ladder**: Seed 0, A 1, B 2, C 3, D 4, later private rounds 5, listed 6. Distance = difference of positions (A vs C = 2; listed vs D = 2).
- **Home market per family**: the headquarters metro, or the cost tier remote roles are pegged to, or the team's own city when the input puts a team elsewhere; that family is priced in its band's currency.
- **Window**: name the first allowed month. A cut-off stated as a month ("nothing before June 2031") makes that month the first allowed one; never subtract again. Only a bare length ("the past 9 months") is counted back from the retrieval month. Undated points are out.
- **Per family**: min, mid, max (no mid given: (min+max)/2, say so), and the company's own accepted and declined offers. No band, or a band on another pay basis, means no call: say what is missing.

## 3. Screen every point

Drop a point, with its reason, when:
- it falls before the first allowed month or has no date;
- nobody could check it: spoken or second-hand reports, surveys with no named publisher or method, anonymous self-reports;
- it cannot be brought to annual base salary in the band's currency using only the input's own numbers. A range becomes its midpoint. Subtract a stated bonus or variable amount (direction: down to base). Annualise monthly, weekly or hourly employee pay only with a stated period or hours. Drop: on-target or total pay with no split; figures with a retention, acquisition, sign-on or equity grant folded in; contractor, agency, freelance or day rates (no benefits, no guaranteed hours); packages flagged equity-heavy or cash-heavy; another currency with no rate given. Never invent a rate, split or period.

Then mark four dimensions:

| | match | near miss | miss |
|---|---|---|---|
| Place | the home market | national or unanchored remote | any other named city or country |
| Stage | same rung | one rung away | two or more; unknown |
| Work | same function and level; a stated level map; a multi-title posting naming the role | neighbouring specialism, same level | other level or function |
| Type | accepted offer; posted range | - | declined or claimed rival offer (signal only) |

First rule that fits: a drop reason or any miss → **Dropped**; two near misses → **Dropped**; one near miss → **Partial**; none → **Full**. Never assume a pay differential between places or stages.

## 4. Anchor and call

Anchor, first rule that fits:
1. Full accepted offers exist → their median. Full ranges only cross-check.
2. No full offer, but two or more full ranges, or one full range that has been tested → median of the range midpoints. One range is tested when it was published under a stated pay-transparency law (a legally required good-faith figure), when the company itself has an accepted offer in that family, or when partial points sit both above and below it.
3. Anything else → **Deferred**. A voluntary or unlabelled posting is a wish nobody has paid; alone it cannot place a band. Report its gap as indicative only.

Partials never join a median and never test a range. The company's own offers and declines corroborate; they are never pool points.

gap = (anchor − band midpoint) ÷ band midpoint, two decimals, operands shown: `(146,900 − 140,500) ÷ 140,500 = +4.56%`. Plus means the market pays more than the band.
- +5.00% or more → **Lagging**; −5.00% or less → **Above-market**; otherwise **Competitive**.
- **Near the line** (4.00% to 4.99% either way): look at the company's own accepted offers in that family. If their median lies beyond the band midpoint on the same side as the anchor, the company is already paying past its midpoint to hire, so the call crosses: Lagging (or Above-market), "near the line". If not, or there are none, Competitive, "near the line". Quote the figures that decided it.

## 5. Confidence

- **High**: a full accepted offer plus a second full point that agrees: another offer, or a full range containing the anchor.
- **Medium**: one full offer on its own or beside a range that does not contain it; or two or more full ranges that agree, no offer.
- **Low**: one tested full range; or full points on opposite sides of the band midpoint. Partials move no tier.
- Ranges only → say the posted-range cap applies. **Deferred**: no full point, one untested range, or no usable band.

## 6. Work, check, write

1. Read `references/reply-shapes.md`.
2. Next message: your working in plain lines. One line per point (`ID · family · month vs first allowed · place · stage and rungs · work · type and basis · class · reason in the input's words`). One line per family (`full offers [...] → anchor | full range mids [...]: cross-check | gap = (anchor − mid) ÷ mid = ±x.xx%`, or `ranges only → anchor (capped; tested by ...)`, or `Deferred: no full row / untested range`). Then each midpoint and conversion with its direction. In the same message call read_reference on `references/final-checks.md`. Nobody reads the working.
3. After the checks return, reply with the document only, copying every call, figure and ID from the working.

Document order:
1. `## <Company>: role-family pay benchmark`
2. **Basis.** One paragraph: stage, home market, base pay and currency; the window in the input's words, the first allowed month, and any point on or past the boundary by ID; each conversion with arithmetic and direction, or that none was needed; missing internal facts that touch a row (no offers for a family, remote roles not tied to a family, a band figure absent); the call rule; and why offers lead: an accepted offer is revealed preference, a price someone took, while a posted range is aspirational, what an employer says it might pay.
3. Table: `| Role family · level | Band mid | Verdict | Evidence funnel | Anchor and gap | Confidence: reason |`, one row per family and level. Funnel: `N retrieved: F full (IDs); P partial (ID: the near miss); D dropped (ID: reason)`, zeros shown. Anchor and gap: anchor by ID and type, gap with operands, the cross-checking range, each partial's midpoint and lean. No row's wording would fit another row. Then a **Pool.** line adding the rows up.
4. **Bottom line.** Three to five sentences a pay lead could act on: who lags or leads and by how much, what blocks each deferral, the exclusion that changed a call, the most exposed open roles.
5. `### Internal corroboration`: one clause per family with own offers or declines.
6. `### Deferred verdicts`: always written. Per deferred family: blocking IDs, any indicative gap, and the evidence that would settle it (type, place, stage, level, date). None deferred: "None." plus the families resting on one full point.
7. `### Signal caveats`: up to three one-sentence bullets naming IDs: offer versus range share, mandated versus voluntary postings, one source, concentration, thin counts.

Family-and-level grain only; every figure from the input or shown arithmetic; 4,500-7,500 characters.
