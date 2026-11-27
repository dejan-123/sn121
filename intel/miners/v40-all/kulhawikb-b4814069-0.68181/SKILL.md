---
name: pay-band-benchmark
description: Benchmarks a company's pay bands against a classified table of outside salary evidence, one role family at a time, and writes the verdict table with its evidence funnel, confidence tiers, deferred verdicts and pool-wide caveats.
---

# Benchmarking pay bands against outside evidence

Each role family poses one question: where does its band midpoint sit against what comparable employers pay for the same work, in the same market, now? The competitive-position verdict comes only from the comparable pool that survives an audit, and the page shows the figure behind every call. Nothing comes from general knowledge: no market figure, exchange rate, location differential, bonus share or hours-per-year factor the input does not state.

## Sorting the rows

Read the company's basis first: the market its bands are anchored to, its stage, each family's level, the bands' pay element and currency, and the input's window. Each row lands in one of three places.

- Fully comparable: same market basis and stage, the family's level (or a scope its notes declare equivalent), the bands' pay element and currency, dated inside the window, a salaried offer or posting from a named source.
- Partial: one funding stage earlier or later, nothing else wrong (stages run Seed, A, B, C, D, E and on, so count the steps). It is listed with its figure and never sets the reference.
- Excluded with its reason: another city, or a remote or national figure against city-anchored bands; two or more stages away, or a listed employer against a private one; another level; dated before the stated cutoff (the cutoff month itself is inside); undated; hearsay, or a survey with no name or method; a contractor or hourly rate (not a salary); a figure bundling a retention grant, equity or variable pay with no split; another currency with no rate supplied.

Scope, not title, decides: a row whose notes map it to the family's level stays in; a level above or below goes out. When the input says some roles are remote without a city anchor but not which, every band is read on its stated city basis, a remote or national row stays out (no band can be matched to it), and that gap is named in the caveats.

## One basis before any comparison

A figure moves onto the bands' basis only with a factor the input supplies, in the direction that factor runs, arithmetic shown. A total the row itself splits becomes its stated base by subtracting the stated bonus or commission; a total, on-target or package figure with no split stays out, and borrowing another row's split is a fabricated rate. A family banded in another currency is compared in that currency; a row in any other currency without a supplied rate is excluded.

## Offers decide, postings bracket

An accepted offer is revealed preference: a price a candidate took. A posted range is aspirational: an asking price, whatever led the employer to publish it. So the market reference is the median of the fully comparable accepted offers; posted-range midpoints set it only when no comparable offer survives. The company's own accepted offers are revealed preference of another kind: what its own band had to pay. They are never market rows and stay out of the reference and the pool counts, but every verdict is checked against them. A declined offer signals that a figure did not land, and what a candidate said about pay elsewhere is reported as that candidate's account; no figure is built from either.

## Verdict and confidence tier

Two gaps, each to one decimal. Market gap = (band midpoint - market reference) / market reference. Hiring gap = (band midpoint - median of the company's own accepted offers for that family) / that median, when the snapshot lists any.

- Lagging: the market gap is -4.5% or beyond against an accepted-offer reference, or -5.0% or beyond against a posted midpoint; or the hiring gap is -5.0% or beyond. A midpoint inside its market line still lags when the company's own hires closed that far above it.
- Above-market: the market gap is +5.0% or beyond against an accepted-offer reference and the hiring gap, where there is one, is +2.5% or beyond. Own hires that closed at the midpoint show the band working; one outside offer does not outvote them, and against a posted midpoint alone a band is never above-market.
- Competitive: everything else. Two gaps of three or four percent the same way are a lean, not a verdict.

The tier counts the fully comparable rows behind the reference, by kind; partial rows and the company's own offers are never counted:

- High: at least one accepted offer, and two or more fully comparable rows in all.
- Medium: one accepted offer and no other fully comparable row; or no offer and two or more posted ranges.
- Low: one posted range and no other fully comparable row.
- Deferred: nothing fully comparable survives; or the family has no internal band; or its only fully comparable rows are posted ranges and the pool's one accepted price for it speaks against them: an offer dated before the window is stale and backs nothing, and a partial offer more than 5.0% from their midpoint contradicts the asking price unless the company has an accepted offer of its own (within 5.0%, or with an own hire, the range stands). No verdict word is given.

## The page

Settle first which reply this is. The benchmark is built from two inputs: a classified table of outside evidence and an internal snapshot of bands. When either is missing, or the request is for other work (designing bands or levels, pricing one person's offer, judging named people's pay), the reply is a short note and no table is started.

The benchmark runs in this order:

- Title `# <Company>: base-pay benchmark by role family`, then one line: market basis, stage, currency, retrieval date, the window as its first inside month (year-month), read from the input's own window sentence, and what sets the reference (accepted offers, revealed preference, first; posted ranges, aspirational, only where no comparable offer survives).
- `## Evidence audit`: the rows retrieved, first ID to last, counted by class; `Excluded:` with each excluded row once, by ID, what it is and the first test it fails; `Out of window:` and `Undated:` with counts and IDs, "none" included; `Conversions:` each with its ID and arithmetic, or "none"; `Partial:` with each row's ID, stage and figure.
- `## Reading the evidence`: two to four short paragraphs, 150 to 240 words in all: families decided by accepted offers first, those resting on posted ranges next, deferred ones last. Each family gets one or two sentences on what decides its call: the reference and its gap, the company's own hires and the hiring gap, the verdict and its tier, an open role's priority; a reason a candidate gave for declining is told as that candidate's account.
- `## Benchmark table`: `| Role family, level | Band min / mid / max | Evidence funnel | Market reference and gap | Own offers and hiring gap | Verdict | Confidence |`, one row per family and level in the snapshot's order, deferred ones included; the first cell adds the open-role priority where the snapshot gives one. Evidence funnel names that family's rows by ID in three classes, each once and none of another family ("4 retrieved: 2 full (R1 accepted offer, R2 posted range); 0 partial; 2 out (R3 remote with no city; R4 another city)"). Market reference and gap names the reference by kind, ID and figure, then shows the subtraction and the percent. Own offers and hiring gap copies the snapshot's whole line for that family, declined offers and candidates' reasons included, then the hiring gap with its subtraction; a family with no offer of its own reads "no own offers on record; no hiring gap". Verdict gives the test it passed or failed and then the word ("hiring gap beyond -5.0%: Lagging"). Confidence counts the fully comparable rows by kind, then gives the tier. Under the table, `Pool:` adds the funnels up: retrieved, fully comparable, partial, excluded.
- `## Deferred verdicts`: per deferred family, what survived, by ID, and why it cannot carry a verdict, the open role's priority if it has one, and the evidence that would settle it. When nothing is deferred, one sentence says so.
- `## Signal caveats`: two to four bullets, each a fact about the whole pool: the evidence mix (which references rest on accepted offers and which on posted ranges alone, whose gaps may be overstated); the source, when every fully comparable row comes from one; pay elements or currencies, only when the pool mixed them; a gap, only where the input itself leaves something open; the posting basis, only when a sentence above the evidence table says how its ranges were posted: that sentence restated, nothing more.

Every row the page mentions is named by the ID its evidence table gives it, with what it is beside it the first time ("R12, a Series A posting"). The page ends after the caveats: no summary, recommendations, next steps or offer of more help. Copy every title, date and figure as the input writes it, and use no bracket placeholders.

With both inputs present: first call read_reference for `references/benchmark-cases.md`, and write only once you have read it: its last section gives the next step (a private draft, one more file, then the page alone). The page is pasted as it stands into the requester's document, so it starts at the `# ` title line with no text above or below it, and it speaks about the company only, never about a skill, the cases, a draft or these steps.

With either input missing, or other work requested: first call read_reference for `references/note-case.md` and do what it says before writing. The reply is then a note in a fixed layout: a `# <Company>: no benchmark yet` title naming what is missing, each thing asked with any deadline as given, what arrived counted by role and level without anyone's name, why no verdict is possible, other work named as separate, and the list of what to send.
