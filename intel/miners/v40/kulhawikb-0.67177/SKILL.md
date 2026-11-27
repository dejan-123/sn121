---
name: pay-band-benchmark
description: Benchmarks a company's pay bands against a classified table of outside salary evidence, one role family at a time, and writes the verdict table with its evidence funnel, confidence tiers, deferred verdicts and pool-wide caveats.
---

# Benchmarking pay bands against outside evidence

Each role family poses one question: where does its band midpoint sit against what comparable employers pay for the same work, in the same market, now? The competitive-position verdict comes only from the comparable pool that survives an audit, and the page shows the figure behind every call. Nothing comes from general knowledge: no market figure, exchange rate, location differential, bonus share or hours-per-year factor the input does not state.

## Sorting the rows

Read the company's basis first: the market its bands are anchored to, its stage, each family's level, the bands' pay element and currency, and the input's window. Each row lands in one of three places.

- Fully comparable: same market basis and stage, the family's level (or a scope its notes declare equivalent), the bands' pay element and currency, dated inside the window, a salaried offer or posting from a named source.
- Partial: one funding stage earlier or later, nothing else wrong (stages run Seed, A, B, C, D, E and on, so count the steps). It is listed with its figure; it never sets the reference or carries a verdict.
- Excluded with its reason, and counted: another city, or a remote or national figure against city-anchored bands (no differential is supplied); two or more stages away, or a listed employer against a private one; another level; dated before the stated cutoff (the cutoff month itself is inside); undated; hearsay, or a survey with no name or method; a contractor or hourly rate (not a salary; annualising it needs hours the input lacks); a figure bundling a retention grant, equity or variable pay with no split; another currency with no rate supplied.

Scope, not title, decides: a row whose notes map it to the family's level stays in; a level above or below goes out. When the input says some roles are remote without a city anchor but not which, the bands are read on the headquarters basis and that gap is named once, in the caveats.

## One basis before any comparison

A figure moves onto the bands' basis only with a factor the input supplies, in the direction that factor runs, arithmetic shown. A total the row itself splits becomes its stated base by subtracting the stated bonus or commission; a total, on-target or package figure with no split stays out, and borrowing another row's split is a fabricated rate. A family banded in another currency is compared in that currency; a row in any other currency without a supplied rate is excluded, never converted.

## Offers decide, postings bracket

An accepted offer is revealed preference: a price a candidate took. A posted range is aspirational: an asking price, often wide, whatever led the employer to publish it. So the market reference is the median of the fully comparable accepted offers; posted-range midpoints set it only when no comparable offer survives. The company's own accepted offers are revealed preference of another kind: what its own band had to pay. They are never market rows and stay out of the reference and the pool counts, but every verdict is checked against them. A declined offer signals that a figure did not land, and a candidate's claim about a rival offer is reported as a claim; no figure is built from either.

## Verdict and confidence tier

Two gaps, each to one decimal. Market gap = (band midpoint - market reference) / market reference. Hiring gap = (band midpoint - median of the company's own accepted offers for that family) / that median, when the snapshot lists any. One line, 5.0%, serves both.

- Lagging: either gap is -5.0% or beyond. A midpoint can sit inside 5% of the outside reference and still lag: when the company's own hires closed 5% or more above it, the band is already failing in use.
- Above-market: the market gap is +5.0% or beyond and the hiring gap, where there is one, is +2.5% or beyond. Own hires that closed at the midpoint show the band doing its work there, and one outside offer does not outvote them.
- Competitive: everything else. Two gaps of three or four percent the same way are a lean, not a verdict.

The tier counts the fully comparable rows behind the reference, by kind; partial rows and the company's own offers are never counted:

- High: at least one accepted offer, and two or more fully comparable rows in all.
- Medium: one accepted offer and no other fully comparable row; or no offer and two or more posted ranges.
- Low: one posted range and no other fully comparable row: a single asking price.
- Deferred: nothing fully comparable survives, or the family has no internal band. No verdict word is given.

Partial rows are listed with their figures and never change a reference, a verdict or a tier; the company's own offers never change a reference or a tier. Deferral is a finding: an urgent open role earns no verdict the evidence cannot carry, and a missing internal figure is named as a gap, never estimated.

## The page

Settle first which reply this is. The benchmark is built from two inputs: a classified table of outside evidence and an internal snapshot of bands. When either is missing, or the request is for other work (designing bands or levels, pricing one person's offer, judging named people's pay), the reply is a short note and no table is started.

The benchmark runs in this order:

- Title `# <Company>: base-pay benchmark by role family`, then one line: market basis, stage, currency, retrieval date, the window restated as its first inside month in year-month form, read from the input's own window sentence, and the verdict line (what sets the reference, and the two gaps read against the 5.0% line).
- `## Evidence audit`: the number of rows in the evidence table; `Excluded:` with each excluded row once, under the first test it fails; `Out of window:` and `Undated:` with their counts, "none" included; `Conversions:` each with its arithmetic, or "none"; `Partial:` with each row's stage and figure.
- `## Reading the evidence`: two to four short paragraphs, 150 to 200 words in all: families decided by accepted offers first, those resting on posted ranges next, deferred ones last. Each family gets one or two sentences on what decides its call: the reference and its gap, the company's own hires and the hiring gap, the verdict and its tier, an open role's priority; a partial row is named with its figure as not counted.
- `## Benchmark table`: `| Role family, level | Band min / mid / max | Evidence | Market reference and gap | Own offers and hiring gap | Verdict | Confidence |`, one row per family and level in the snapshot's order, deferred ones included; the first cell adds the open-role priority where the snapshot gives one. Evidence counts that family's rows by class and kind, each once and none of another family ("2 full (1 accepted offer, 1 posted range); 1 out (another city)"). Market reference and gap names the reference by kind and figure, then shows the subtraction and the percent. Own offers and hiring gap copies the snapshot's whole line for that family (declined offers and candidates' reasons included, or "no recent offers"), then the hiring gap with its subtraction; a family the offer list does not name gets "not in the offer list", never another family's line. Verdict gives the test it passed or failed and then the word ("hiring gap beyond -5.0%: Lagging"). Confidence counts the fully comparable rows by kind, then gives the tier ("one posted range, no accepted offer: Low").
- `## Deferred verdicts`: per deferred family, what survived and why it cannot carry a verdict, the open role's priority if it has one, and the evidence that would settle it (type, level, market, stage, date). When nothing is deferred, one sentence says so.
- `## Signal caveats`: two to four bullets, each a fact about the whole pool: the evidence mix (which families' references rest on accepted offers, and which on posted ranges alone: asking prices, so those gaps may be overstated); the source, when every fully comparable row comes from one (nothing cross-checks it); pay elements or currencies, only when the pool mixed them; a gap, only where the input itself leaves something open. How a range came to be posted, under a legal mandate or voluntarily, changes nothing and earns no caveat: the page never claims that either kind runs wide, high or low.

Readers of the page do not have the evidence table's numbering, so no row is named by its ID: a row is called what it is, by kind, role, the fact that matters and figure ("a Series A posting for the Lead role at 500,000 to 580,000"). The page ends after the caveats: no summary, recommendations, next steps or offer of more help. Copy every title, date and figure as the input writes it, and use no bracket placeholders.

With both inputs present: first call read_reference for `references/benchmark-cases.md`, and write only once you have read it: its invented companies use exactly this layout, and its last section gives the next step (a private draft, one more file, then the page alone). The page is pasted as it stands into the requester's document, so it starts at the `# ` title line with no text above or below it, and it speaks about the company only, never about a skill, the cases, a draft or these steps.

With either input missing, or other work requested: first call read_reference for `references/note-case.md` and do what it says before writing. The reply is then a note in a fixed layout: a `# <Company>: no benchmark yet` title naming what is missing, each thing asked with any deadline as given, what arrived counted by role and level without anyone's name, why no verdict is possible, other work named as separate, and the list of what to send.
