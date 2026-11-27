---
name: band-market-position
description: Use when a people or compensation team sends a classified external pay evidence table and an internal band snapshot and asks whether each role family's band is competitive, lagging or above market.
---

# Band market position, one role family at a time

A band is judged against the evidence that survives scrutiny, never against everything that was retrieved. Benchmarks go wrong in a predictable way: a range from another city, a retention grant or a contractor's hourly rate slips into the pool and moves the verdict, and nobody can see it happened. So the work is a funnel, done in the open: check the request is in scope, screen every point, put the survivors on one basis, then give each role family one verdict drawn only from what is left, with a confidence tier and the fact that decided it.

## What this work needs

Two inputs: a classified external evidence table (each point with an ID, type, date, role, geography, company stage and figure) and an internal snapshot of bands by role family and level. When either is missing, or the message asks for other work (one person's pay or offer, a "what do these jobs earn" lookup with no evidence, designing or restructuring bands, a pay-equity audit), the reply is a scope note (see "The reply") and nothing else, decided before any figure is read. A roster of named people is not a band snapshot: a benchmark speaks for a role family, and a figure for one person is a pay decision.

## The frame

Note the company's stage, headquarters metro and how its remote roles are anchored; the data window as worded; the retrieval date; each band's currency; any conversion rate supplied. Apply the window literally: "older than 12 months (before June 2025)" means June 2025 is the first month in. A date is in when its year is later, or the same year and its month is that month or later.

## Screening every point, in this order

1. **Window.** Undated, or dated outside the window: dropped. Pay moves every year; an old figure describes a market that no longer exists.
2. **Not base pay for the job.** Excluded even when the table lists it as evidence, with the reason named: a retention or acquisition grant is paid once to keep someone through a deal; a contractor's hourly rate carries no benefits, payroll tax or paid leave, so it is never annualised into a salary; sign-on and relocation money, and equity-heavy or cash-heavy mixes reported as one number, are not the going base rate either.
3. **Comparability on four dimensions**, each marked match, partial or mismatch:
   - *Geography*: same metro, or a remote role anchored to that metro's tier, is a match. A national or unanchored range is partial when the company itself hires unanchored remote roles, otherwise a mismatch. Another metro or country, however close in cost, is a mismatch, never a partial, even when the company hires unanchored remote roles: metro differentials routinely exceed the 5% line itself.
   - *Company stage*: count steps on the ladder Seed, Series A, B, C, D, E and later, public. Zero steps is a match, one step is partial, two or more (Series B against Series D) is a mismatch, because cash and equity trade places as companies grow.
   - *Role scope*: same family and level, or another title the input itself maps to the same level, is a match. A slash title joining two jobs ("HR Generalist / Office Manager") is partial even when one name is the role's own; so is a neighbouring specialism. Another level is a mismatch.
   - *Posting type*: an accepted offer or a posted range on base is a match. A verbal recruiter figure (negotiating talk) or a survey with no named source or method is a mismatch. A figure on another basis is converted first.
   All four match: **comparable**. Exactly one partial: **partial**, named by that dimension ("partial (stage)"). Two partials, or any mismatch: **incomparable**, dropped with the failing dimensions named.

## One basis: annual base

Write each conversion on its own line, with its direction, using only components and rates given in the input: "E-x: total cash $T minus stated bonus $B = base $S (total to base)". On-target earnings with no stated split cannot be brought to base, because the variable share of sales pay varies too widely to guess: drop the point as basis. A figure in another currency is never converted without a supplied rate; it is read only against bands in its own currency.

## The funnel, per role family

Retrieved n (every screen row for the family), dropped n (by reason, with IDs), surviving n (by ID, partials marked). Retrieved always equals dropped plus surviving, because the counts are the screen table's rows. Only survivors reach the verdict.

## Anchor, gap, verdict

- **Anchor**, first that applies: the comparable accepted offers in the evidence table (one on its own; several give their median, the median of two being their average); else the midpoints of the comparable posted ranges, never their tops. An offer is a clearing price, what it took to hire; a posted range is an intention, often widened to satisfy transparency laws, so its midpoint is the most it can say. Offers and posted midpoints never share a median: the anchor is named apart from its checks. Partial points never anchor.
- The company's own recent offers stay out of the anchor and the funnel: they are real hires but also our own pay policy, so they can confirm the market, never define it, or the band would be benchmarked against itself.
- Comparable points that are not the anchor corroborate or contradict it, and the paragraph names any contradiction; a partial point never overturns a comparable one, and never confirms one either, so it cannot lift a tier.
- **Gap**: (band midpoint minus anchor) divided by anchor, one line of arithmetic, with figures taken from the screen table's base-figure column; with no offer, the posted midpoint is the anchor.
- **Verdict**: within 5% either way, competitive; more than 5% below, lagging; more than 5% above, above-market. A few data points cannot resolve finer differences. Near the line, say so ("competitive, at the lower edge"). Offers landing near the band maximum, or declined offers citing pay, show pressure: every hire is using the whole range.
- **Defer** rather than extrapolate when no comparable point survives, partial offers included. Two partial ranges that sit one above the band and one below are the classic case: averaging them would invent a market, and a verdict from partial data reaches leadership as fact.

## Confidence tier and its deciding reason

Confidence tells a reader how far to lean on the verdict:
- an offer confirmed within 5% by a second source (another comparable offer, a comparable posted midpoint, or one of our own accepted offers): **High**, enough to move a budget;
- a lone offer, or posted ranges only: **Medium**; without an offer a verdict never rises above Medium, because intentions are not prices;
- a lone posted range that a partial point contradicts: **Low**;
- no comparable point: **Deferred**.
The tier always comes with the fact that set it: "High: the offer is confirmed by the E-x midpoint", "Medium: posted ranges only".

## The reply

One document, in this order. The title `# Compensation benchmark: <company>`, then an opening paragraph in plain sentences: the basis, the window in the input's own cut-off words with its first month in, the retrieval date, the comparator profile and our own recent offers by family, then the conventions that decide this pool and which way each would push the reading. `## Evidence screen`, one row per point (ID, family, date in or out, geography, stage with its step count, scope and type each as match, partial or mismatch with a short reason, base figure or a dash, result). `## Conversions`, one line each or "None needed.". `## Where each band stands`, one short paragraph per role family in the input's band order, opening on its name in bold, then reasoning through that family's own points: what dropped and why, what anchors it, the gap as one line of arithmetic and the verdict that number gives, what confirms or contradicts it, then the tier and the fact that sets it; a deferred family says why, and what evidence would settle it. Each paragraph ends on its funnel (`Funnel: 3 retrieved, 1 dropped (E-x basis), 2 survive (E-y; E-z partial).`). `## What to do with this`, a few plain sentences built on those verdicts: which priority open roles are at risk and the evidence that makes it urgent, which bands can hold, what waits for evidence; then, once, the skews across the whole pool (one source, posted ranges outnumbering offers, mandated or voluntary postings, a stage or geography tilt, mixed currencies). The screen carries every point and each paragraph its own, so a reader can check every verdict against the points that made it.

**The scope note**, when an input is missing or the ask is other work, is the whole reply. Its first line is `# Compensation benchmark: <company>, scope note`, and the reasons sit inside it, never before it: at most 170 words, three short paragraphs: the request and what came with it; why no benchmark table is drawn; what to send (the two inputs, with their columns) and what will then be produced, by role family and never by person, plus where the other asks belong.

Open `references/worked-benchmarks.md` once, then send the document. The first character you write after that read is the `#` of the title, for the scope note exactly as for a full benchmark. Following this skill shows in the tables and is never announced: nothing in the reply talks about the skill, the procedure or your next move ("Now I will…", "Based on…"), and no horizontal rule appears.
