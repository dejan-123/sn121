---
name: band-check-from-the-survivors
description: Tells a comp team whether each role family's pay band is competitive, lagging or above market, using only the outside salary evidence that survives a strict comparability funnel, and says how sure it is.
---
# Band check from the survivors

Our VP of engineering once forwarded me a spreadsheet titled "proof we underpay". Forty data points, every one real: posted ranges from companies two rounds ahead of us, Miami figures when we hire in Columbus, contractor day rates multiplied by 260. Nine points survived, and they said one band of four was short. That one we fixed. This skill works the same way: it scores every point before it counts, shows what was dropped and why, and only then says competitive, lagging, above-market, or not yet.

## First: is this a benchmarking request at all?

Check what was asked and what arrived. Benchmarking needs an external evidence table and an internal band snapshot by role family. A request to look up what a role pays, to judge or set one named person's salary, to design or redesign bands or levels, or to audit pay equity is a different job. So is any request that arrives without external evidence. Do not read any reference for this. The redirect is the whole reply, under 150 words. Its very first characters are `# `: no greeting, thanks or sentence comes before the title line `# <company>: request outside benchmarking scope`, then three short plain paragraphs: what was asked, named as the jobs it is, none a benchmark; where each belongs; and exactly what to send for a benchmark. Repeat no figure from the input and name no person, not even to decline. No heading besides that line, no list, table, bold text or market figure. For an invented firm:

> # Halden Freight Software: request outside benchmarking scope
>
> You asked for a market rate lookup, a view on one person's pay, and a four-level ladder. None of these is a benchmark, which checks role-family bands against classified outside evidence.
>
> The ladder belongs with whoever owns comp design; one person's pay belongs with their manager and HR review.
>
> For a benchmark, send a dated external evidence table of accepted offers and posted ranges (source, location, stage, level, annual base), your band midpoints by role family, and the data window.

## Score every point on four dimensions

Each external point is scored on geography, company stage, role scope and posting type before it can count. First assign each point to a role family by its title and level, so no point is counted under two families. Geography matches only when the point sits in the company's own metro or the cost tier its roles are anchored to. A national or remote range is never a full match: it is partial when the company itself hires that role remotely without anchoring, and a mismatch otherwise. Another metro is a mismatch even when the company has remote staff, and so is another country or currency. Stage is counted in letters (Seed, A, B, C, D, E): the same letter matches, one letter apart is partial (C against B or D), two or more letters apart is a mismatch (C against A or E), and so is any private company against a public one. Scope matches at the same function and level, including a different title that the input explicitly maps to the same level; an adjacent title is partial; a different level (manager against senior manager) is a mismatch. Posting type must be a dated accepted offer or a dated posted range on annual base pay; recruiter hearsay, an unnamed or undated survey, and anything outside the stated data window are dropped. Test the window mechanically: write the cutoff month the input states as a six-digit number ("before March 2025 is out" means 202503), write each point's date the same way, and keep the point only if its number is equal or larger: 202502 is out, 202503 and 202607 are in. A point with every dimension matching is fully comparable; exactly one partial dimension makes it a partial match; any mismatch, or two partials, makes it incomparable and it is dropped.

## One basis: annual base salary

Every figure is compared as annual base in the band's own currency. When a point states its components (total compensation including a named bonus), subtract the stated amount and write the conversion and its direction, for example "$147K total minus $13K stated bonus = $134K base". When it does not, the figure cannot be put on a base basis and is excluded with its reason named: an on-target-earnings range with no split, a total that bundles a retention grant or acquisition package, an hourly or contractor rate, an equity-heavy or cash-heavy package. Never supply a conversion rate, an hours-per-year figure or an exchange rate the input does not give; a point that would need one is excluded, and a band in another currency is benchmarked only against points in that currency.

## From survivors to a verdict

The anchor for a role family is the median of its fully comparable accepted offers. Offers are revealed preference; posted ranges are aspirations. If no offer survives, the anchor is the midpoint of the fully comparable posted ranges (each midpoint written out as low plus high, divided by two; with two ranges, the anchor is the average of the two midpoints), and the verdict carries the posted-range cap. Partial matches corroborate but never anchor: when only partial matches survive, no gap is computed, two partial ranges are never averaged into an anchor, and the family is Deferred.

The gap is (band midpoint minus anchor) divided by anchor, read from the company's side. A negative gap means the company's band pays less than the market; a positive gap means it pays more. Within 3% either way the band is competitive; more than 3% below is lagging; more than 3% above is above-market. The company's own recent accepted offers and declines are named in the reasoning as corroboration (offers landing above the midpoint, a decline that cited pay), but they never move the threshold and never replace the anchor. Check the sign against the plain sentence "the band midpoint is below / above what comparable employers pay" before writing the verdict.

Some calls are close, and a reviewer trusts a close call only when it is shown as close. A verdict is borderline when the gap lies between 2% and 5% either way, or when the anchor is a single posted range, unless the company's own accepted offers already settle it (offers landing above the band midpoint confirm lagging; then say so and drop the qualifier). Mark a borderline call in the table ("Lagging, borderline") and, in its paragraph, say that both readings are defensible, apply the stated threshold to pick one, and name the one piece of evidence that would flip it; when one posted range is all that survives, the competing reading is a deferral.

Decide confidence from this table, first matching row wins, and write the row in the notes ("full offer + 2 others: High"). "Other" means any surviving point, full or partial, offer or posted range.

| What survives for the family | Confidence |
|---|---|
| Nothing; only partial matches; or full points on opposite sides of the band midpoint with no offer to settle them | Deferred |
| A full offer plus at least one other (a full offer beside any posted range, full or partial, is High) | High |
| A full offer alone | Medium |
| A full posted range plus at least one other (the posted-range cap) | Medium |
| A single full posted range and nothing else | Low |

Without a full offer a family is never High. A partial that disagrees with a full anchor is not a conflict: the full point governs, the row stands, and the partial is named as a caveat. A deferral names the missing evidence: which type of point, at which geography, stage and level, would settle it.

## The deliverable

One markdown document of roughly 3,500 to 7,000 characters, at role-family grain, never naming employees.

It opens with `# Compensation Benchmark: <company>`, one line stating the basis (annual base, currency), the window's cutoff month and the 3% threshold, and two or three sentences giving the headline: which families lag, which hold, which are deferred, and what that means for the open roles the company ranked first.

`## Benchmark Table` follows, with columns `Role family | Band midpoint | Anchor (type) | Gap | Verdict | Funnel | Confidence`. The funnel cell counts retrieved, survived (full and partial) and dropped, with IDs.

`## How Each Verdict Was Reached` then gives each family a short paragraph in plain sentences: the points that counted and how each scored, the points dropped and why, any basis conversion written out with its direction, the gap and why it lands where it does (for a borderline call, the competing reading and what would flip it), and the reason for the confidence tier, named by the points that earn it. Each figure cited is quoted as the input gives it.

`## Deferred Verdicts` explains each deferral and the exact evidence that would settle it (or says none were needed), and `## Signal Caveats` states pool-wide skews once: a single source dominating, posted ranges outnumbering offers, voluntary versus mandated postings, thin stage coverage.

## Working order

First write short notes: the scope check; then, point by point, one line with its ID, its date set against the cutoff month in the form "202607 vs 202510: in", and the four scores (geography, stage, scope, posting type) with the count of partial dimensions, leading to full (0), partial (1) or dropped (2+ or any mismatch); any conversion or exclusion; then each family's anchor, gap with its sign, verdict, whether it is borderline, and the confidence count, checked against the rules above. Only then, as the last call of that message, call read_reference for `worked-benchmark.md`; it is the final thing you read. When it arrives, reply with the benchmark alone, from its title on, with nothing after its last section.
