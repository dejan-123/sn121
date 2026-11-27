---
name: pay-band-benchmark
description: Benchmarks each role family's pay band against a classified pool of external pay evidence. Screens every point for window, place, stage, role and pay basis, anchors on accepted offers ahead of posted ranges, and gives each family a verdict (competitive, lagging, above market), its evidence funnel and a confidence tier, then deferred verdicts and pool-wide caveats. Requests that are not benchmarks get a short redirect note.
---

# Benchmarking pay bands from a classified evidence pool

A band verdict is only as trustworthy as the points allowed to set it. Benchmarks rarely fail on arithmetic; they fail on admission: a coastal range pricing an inland job, a recruiter's recollection treated as data, a bonus-loaded package read as base, a later-stage offer standing in for an earlier-stage company. So the work is a screen first and a verdict second, and every figure in the reply traces to a row of the input or to a sum shown in view.

## What each kind of evidence can carry

- **Accepted offer**: revealed preference, a price an employer named and a candidate took. The strongest single point, yet one offer is one negotiation; two that agree describe a market.
- **Posted range**: aspirational, what an employer is willing to advertise. A range posted because a pay-transparency law demands it is often drawn wide to stay compliant, so its midpoint is a soft centre; a range posted voluntarily comes from an employer choosing to advertise, which tilts the sample toward confident payers. Read the midpoint, never the top, and never blend a range into an offer average.
- **The company's own recent offers**: the most local revealed preference there is, but not market evidence. They test a verdict and never set it, and they never get an evidence ID, a funnel count or a place in the anchor. Hires closing above the band midpoint mean hiring already costs more than the band assumes. An own offer that was declined is real internal evidence that the band failed to land at that figure; only what the candidate claims about a rival's number is hearsay, giving a direction but not a size.
- **Not a salary observation**: a recruiter's verbal number, a survey snippet with no date or method, a contractor's hourly or day rate (it prices risk, overhead and missing benefits, so annualizing it invents a salary), a total that folds in a retention, acquisition or sign-on grant, on-target earnings or total compensation with no stated split, an equity-heavy package. Name it, count it as excluded, never repair it by assumption.

## The admission tests

Screen every external point against the snapshot row it would price. Read any note printed above or below a table first, since it can apply to every row (a window, a currency, why ranges were posted). Apply the tests in this order and stop at the first failure; the call names that test, so a point dated inside the window but posted in another city is out for place, not for window.

1. **Kind.** An accepted offer or a posted range goes on to the next test. Anything in the list above is OUT: not a salary.
2. **Window.** Before screening, write down the first month in, taken from the input's own sentence: "points before October 2025 are out" makes October 2025 the first month in, and "older than 18 months (before April 2025)" makes it April 2025. Then compare each point's month with it: the same month or later passes, so a point dated in the first month itself counts; an earlier month or no date is OUT. Use the window the input states, never a habitual twelve months.
3. **Place.** The company's metro, or remote pay the input explicitly anchors to it, passes. Another metro fails, and so does remote or national pay with no metro declared: city differentials are real and the input gives no factor to bridge them. A team the input seats in another city is held to that city.
4. **Stage.** Place every stage on one ladder: Seed, Series A, Series B, Series C, Series D, Series E and later, Public. Count the steps between the point's stage and the company's own. Zero steps passes. One step earlier or later is OUT of the anchor, but read its lean: earlier rounds usually pay less cash and later rounds more, so a point landing where its lean predicts adds nothing and one landing on the far side earns a sentence. Two or more steps, or a public company, is OUT.
5. **Role and level.** The same work at the same level passes, as does a title the input maps to it in a scope or levelling note, or a dual title containing the family's own title (note its broader scope). Another level or a neighbouring function is OUT.
6. **Basis.** Read every figure as annual base in the band's currency. Convert only with numbers the input supplies, shown as a sum with its direction: "$X total less the stated $Y bonus = $Z base, down". A figure in another currency with no supplied rate is OUT, and a foreign team is benchmarked in its own currency.

## From survivors to a verdict

- **Anchor.** If any accepted offer survives, the anchor is the surviving offers' average, and a surviving range is quoted beside it, never averaged into it. Only if no offer survives is the anchor the average midpoint of the surviving ranges. If nothing survives, the family is Deferred. Every figure in the anchor carries its evidence ID; the company's own offers have no ID and so can never enter it.
- **Gap** = (band midpoint − anchor) ÷ anchor, written out as a sum. A band midpoint below the anchor gives a negative gap.
- **Verdict.** Gap of −3.0% or lower: **Lagging**. Between −3.0% and +3.0%: **Competitive**. +3.0% or higher: **Above market**. Add "narrowly" when the gap is within 5.0% either way of zero but past the 3.0% line. The sign decides the word: a negative gap past −3.0% can never be competitive or above market.
- **Test the call** against surviving ranges and the company's own offers. Agreement supports it; disagreement is reported and lowers confidence, but does not overturn an offer-anchored verdict.
- **Deferral** happens only when no point survives. Never borrow an excluded point, never average a stage below with a stage above, never let own offers stand in for the market. A deferral names the evidence that would settle it: kind, metro, stage, level, date.

## Confidence tiers, always with the deciding reason

- **High**: two or more surviving offers; or one surviving offer plus a surviving range plus own accepted offers on the same side of the midpoint as the anchor.
- **Medium**: one surviving offer otherwise; or two or more surviving ranges.
- **Low**: exactly one surviving range and no offer.
- **Deferred**: no survivor. A family with even one survivor gets a verdict.

A priority role resting on Low evidence gets one line on what would firm it up.

## Gaps and caveats

Missing internal data is named, never filled: a family absent from the own-offer list, an own-offer window shorter than the evidence window, a remote policy the snapshot leaves unstated. Caveats describe the whole pool and are said once: offers against advertised ranges, why the surviving ranges were posted, one feed supplying nearly every point.

## Recognise the request first

A benchmark needs classified external evidence plus an internal snapshot by role family and level. A roster of named people and salaries is not market evidence (it shows who stayed, not what the market pays), a deadline does not lower the evidence bar, and redesigning levels, setting one person's pay or auditing pay equity are separate work. When only part of a request is a benchmark, benchmark that part and say in one line where the rest belongs.

## Working order

Your first step after loading this skill is a read_reference call, and nothing is drafted before it returns. The memo's layout lives in its reference, not on this page, so a memo written without opening it will be laid out wrong. With a classified external evidence table in the input, open `references/benchmark-example.md`: a finished memo for an invented pool, built in the order the work must happen. Without one, open `references/redirect-note.md` and write the note it describes. Open only the one you need.

The example's order is the order of thought: the screen is filled point by point before any family gets a verdict, and the title and opening paragraph state only facts the input already gives, so nothing is claimed before the part that establishes it.

Every company, person and figure in the references is invented. Take the reasoning from them, never a fact.
