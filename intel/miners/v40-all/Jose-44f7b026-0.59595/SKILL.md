---
name: pay-band-verdicts-from-comparable-evidence
description: For a comp lead who has a classified outside-evidence table and an internal band snapshot, decides per role family whether the band is competitive, lagging, above market or deferred, counting only the points that pass a comparability funnel and stating how firm each call is.
---
# Pay band verdicts from comparable evidence

A pasted evidence pool always looks bigger than it is. The usual failure is counting the wrong points: a range from three rounds ahead, another city's figure, an hourly rate stretched to a year. The fix is a funnel. Every point is tested before the band is looked at, the ones that fail are named with their reason, and only the survivors earn a verdict. When too little survives, the honest answer is "not yet", with the evidence that would settle it.

## Step 1. Decide which job this is

A benchmark needs two things in the paste: an external evidence table of classified points and an internal band snapshot by role family. Anything else is a different job: looking up what a role pays, judging or setting one named person's salary, designing or redrawing bands or levels, auditing pay equity, or any request with no outside evidence attached (a salary roster is not evidence).

For those, the reply is a redirect of about 150 to 220 words. Call read_reference for `worked-benchmark.md` first; its last section shows such a reply in full. Its very first characters are `# ` and the title `# <company>: not a benchmark request`; no greeting, no "I've loaded", no sentence of any kind comes before it. Then:

1. One sentence: nothing asked can be answered as a role-family benchmark.
2. A numbered list, one line per ask the request actually makes (never one it did not make), each named as the job it is and where it goes.
3. One sentence on why the paste cannot carry a benchmark: a roster records the company's own pay and says nothing about the market, so a claim of underpaying can be neither confirmed nor rebutted from it.
4. What to send: accepted offers kept apart from posted ranges, each with its ID, date, role and level, metro, stage and annual base; band min, midpoint and max by family and level; recent offers; the data window; and what comes back (a verdict, funnel and confidence per family, or a deferral).
5. One closing line on which evidence to collect first if there is a deadline.

Repeat no input salary, name no person, use no table or market figure.

## Step 2. Four tests for every point

Each external point is scored on geography, company stage, role scope and posting type before it can count. First assign each point to a role family by its title and level, so no point is counted under two families. Geography matches only when the point sits in the company's own metro or the cost tier its roles are anchored to. A national or remote range is never a full match: it is partial when the company itself hires that role remotely without anchoring, and a mismatch otherwise. Another metro is a mismatch even when the company has remote staff, and so is another country or currency. Stage is counted in letters (Seed, A, B, C, D, E): the same letter matches, one letter apart is partial (C against B or D), two or more letters apart is a mismatch (C against A or E), and so is any private company against a public one. Scope matches at the same function and level, including a different title that the input explicitly maps to the same level; an adjacent title is partial; a different level (manager against senior manager) is a mismatch. Posting type must be a dated accepted offer or a dated posted range on annual base pay; recruiter hearsay, an unnamed or undated survey, and anything outside the stated data window are dropped. Test the window mechanically: write the cutoff month the input states as a six-digit number ("before March 2025 is out" means 202503), write each point's date the same way, and keep the point only if its number is equal or larger: 202502 is out, 202503 and 202607 are in. A point with every dimension matching is fully comparable; exactly one partial dimension makes it a partial match; any mismatch, or two partials, makes it incomparable and it is dropped.

## Step 3. One basis

Every figure is compared as annual base in the band's own currency. When a point states its components (total compensation including a named bonus), subtract the stated amount and write the conversion and its direction, for example "$147K total minus $13K stated bonus = $134K base". When it does not, the figure cannot be put on a base basis and is excluded with its reason named: an on-target-earnings range with no split, a total that bundles a retention grant or acquisition package, an hourly or contractor rate, an equity-heavy or cash-heavy package. Never supply a conversion rate, an hours-per-year figure or an exchange rate the input does not give; a point that would need one is excluded, and a band in another currency is benchmarked only against points in that currency.

## Step 4. Anchor, gaps, verdict

The anchor for a role family is the median of its fully comparable accepted offers. Offers are revealed preference; posted ranges are aspirations. If no offer survives, the anchor is the midpoint of the fully comparable posted ranges (each midpoint written out as low plus high, divided by two; with two ranges, the anchor is the average of the two midpoints), and the verdict carries the posted-range cap. Partial matches corroborate but never anchor: when only partial matches survive, no gap is computed, two partial ranges are never averaged into an anchor, and the family is Deferred.

The gap is (band midpoint minus anchor) divided by anchor, read from the company's side: negative means the band pays less than the market, positive more. Check the sign against the plain sentence "the band midpoint is below / above what comparable employers pay".

The company's own accepted offers for the family are the second test, never part of the anchor or the funnel: compute an own gap the same way against their mean. Where own offers exist, the band is lagging only when both gaps are more than 2.5% below, above-market only when both are more than 2.5% above, and competitive otherwise, because hires accepting near the midpoint show the band is landing. Where the family has no own accepted offer, the outside gap decides alone and must pass 5% either way, since posted midpoints run high and one offer is one person; inside 5% it is competitive. A decline that cited pay is named in the reasoning but is not a point. When a gap lands within a point of its threshold, say so in the paragraph and name the one piece of evidence that would flip it; the table cell carries the verdict word alone.

Confidence comes from this table; the first matching row wins, and the notes name the row ("full offer + 2 others: High"). "Other" is any surviving point, full or partial, offer or posted range.

| What survives for the family | Confidence |
|---|---|
| Nothing; only partial matches; or full points on opposite sides of the band midpoint with no offer to settle them | Deferred |
| A full offer plus at least one other (a full offer beside any posted range, full or partial, is High) | High |
| A full offer alone | Medium |
| A full posted range plus at least one other (the posted-range cap) | Medium |
| A single full posted range and nothing else | Low |

Without a full offer a family is never High. A partial that disagrees with a full anchor is not a conflict: the full point governs, the row stands, and the partial is named as a caveat. A deferral names the missing evidence: which type of point, at which geography, stage and level, would settle it.

## Step 5. The document

One markdown document of roughly 3,500 to 7,000 characters, at role-family grain, never naming employees.

It opens with `# Compensation Benchmark: <company>`, one line stating the basis (annual base, currency), the window's cutoff month and both thresholds, and two or three sentences giving the headline: which families lag, which hold, which are deferred, and what that means for the open roles the company ranked first.

`## Benchmark Table` follows, one row per snapshot row in the snapshot's order, with columns `Role family | Band min / mid / max | Anchor (type) | Gap (outside; own offers) | Verdict | Funnel | Confidence`. The funnel cell counts retrieved, survived (full and partial) and dropped, with IDs.

`## How Each Verdict Was Reached` then gives each family a short paragraph in plain sentences: the points that counted and how each scored, the points dropped and why, any basis conversion written out with its direction, the gap and why it lands where it does (for a close call, what would flip it), and the reason for the confidence tier, named by the points that earn it. Each figure cited is quoted as the input gives it.

`## Deferred Verdicts` explains each deferral and the exact evidence that would settle it (or says none were needed), and `## Signal Caveats` states pool-wide skews once: a single source dominating, posted ranges outnumbering offers, voluntary versus mandated postings, thin stage coverage.

## Before writing

First write short notes: the scope check; then, point by point, one line with its ID, its date set against the cutoff month in the form "202607 vs 202510: in", and the four scores (geography, stage, scope, posting type) with the count of partial dimensions, leading to full (0), partial (1) or dropped (2+ or any mismatch); any conversion or exclusion; then each family's anchor, outside gap with its sign, own-offer gap or none, each set against its threshold as a number, verdict, and the confidence row, checked against the rules above. Only then, as the last call of that message, call read_reference for `worked-benchmark.md`; it is the final thing you read. When it arrives, the reply's first characters are `# ` and its title: no "Now I'll" line, no thanks, nothing after its last section.
