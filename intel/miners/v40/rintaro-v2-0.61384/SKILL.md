---
name: pay-band-market-check
description: For a company that supplies an internal pay snapshot and a classified table of outside salary evidence - test every outside point for comparability, convert what survives to annual base, and give each role family a competitive-position verdict with its evidence funnel and a confidence tier; redirect requests that are not market benchmarks.
---

# Checking pay bands against outside evidence

A band is only as defensible as the evidence under it. Somebody will always bring a bigger number from somewhere: a recruiter's remark, a range from a richer company, a package swollen by a retention grant. The work here is to decide, point by point, which outside figures actually describe this job, at this level, in this place, at a company this far along, within the agreed window, on the same pay basis, and to let only those set the market for each role family. The answer is given per role family and level, never per person.

## First: is this a benchmark request at all?

Check scope before anything else. A market benchmark compares the company's bands for a role family with classified outside evidence. These are different jobs and get a short redirect instead of a table:
- **one person's pay** (an offer, a raise, a counter-offer, "is Sam underpaid?"): the manager and the people partner, with the band as context;
- **a raw salary lookup** with no internal bands to test ("what do robotics engineers earn?"): a market data source, not a benchmark;
- **band design** (adding levels, reshaping a ladder): a job-architecture exercise run by compensation, which needs level definitions first;
- **a pay-equity audit**: people analytics with legal, on individual records and protected attributes;
- **any request with no classified outside evidence**: nothing can be benchmarked yet.
Read `references/redirect-notes.md` and reply with the note alone. When a request mixes a real benchmark with one of these, do the benchmark and add one line routing the rest.

## The working pass

Open `references/point-ledger.md` and write the ledger for this input as plain text in its own message before anything else: one line per outside point, then one line per role family. The report is written only after the ledger is complete, and every count, figure, verdict and tier in the report is copied from it.

### 1. Audit the pool
- **Window.** State the cut-off date the input gives and drop every point dated before it, and every undated point. Count them.
- **Source.** A recruiter's verbal figure, a survey with no date or method, or any number nobody can trace is excluded as unverifiable.
- **Basis outside the taxonomy.** Exclude, naming the reason: retention or acquisition grants folded into a figure, contractor or hourly rates, sign-on packages, equity-heavy or cash-heavy mixes, and on-target or total-cash figures whose base cannot be recovered from the input. These are counted in the funnel as excluded, never quietly skipped.

### 2. Put every figure on one basis
Compare annual base pay in the role family's own currency. Convert only with what the input states, and write each conversion with its direction: "total cash $96,000 less the stated $9,000 bonus = $87,000 base (down)"; "$120,000 × the stated 1.36 rate = C$163,200 (up)". A range converts end by end. A figure that cannot be converted with the input's own numbers is excluded, not estimated.

### 3. Score comparability on four dimensions
Score each surviving point against the role family's own row: the company's headquarters metro and stage, unless the input places that team elsewhere, in which case that city and currency.
- **Geography**: same metro, or remote pay the input pins to that metro, matches. Remote or national pay with no metro is one step off. Any other named metro is out, even for an accepted offer, because the input never says how far apart the two cities pay; so is another country or currency zone.
- **Company stage**: the same funding stage matches; one stage apart is one step off; two or more apart, or public versus private, is out.
- **Role scope**: the same work and level, or a title the input explicitly maps to it, matches. An adjacent specialty, a combined title, or one level off is one step off. Further than that is out.
- **Posting type**: an accepted offer matches. A range published because a pay-transparency law requires it matches. A range the input marks as voluntarily posted is one step off, because it is written to attract rather than to comply; a note above the table that says ranges were voluntarily posted covers every row it does not exempt. A range whose own row says nothing about why it was posted matches.

All four match: **fully comparable**. Exactly one dimension one step off: **partial match**. Two steps off in total, or anything out: **incomparable**, dropped. Partial points never set a verdict; note which way each leans (an earlier-stage company usually pays less, a later one more) and mention it only when it contradicts the verdict.

### 4. Anchor, gap, verdict
- **Anchor**: the fully comparable accepted offers, averaged when there are several. Only when no fully comparable offer survives do the midpoints of fully comparable posted ranges stand in, and then the posted-range cap below applies. Offer data outranks posted ranges whenever both survive: a range is what an employer hopes to pay, an offer is what someone accepted.
- **Gap**: (band midpoint − anchor) ÷ anchor, written out.
- **Verdict**: a gap inside 3% either way is **competitive**. A gap of 5% or more is decided by the anchor: midpoint below it, **lagging**; above it, **above-market**. Between 3% and 5% one outside figure is not enough on its own, so corroboration decides: the band is **lagging** (or **above-market**) only when something else points the same way, namely the company's own accepted offers sitting more than 1.5% beyond the midpoint on that side, a declined offer that cites pay, or a partial accepted offer on that side; with none of these it is **competitive**, and the row says it sits near the line.
- **The company's own recent offers** are not market evidence: they never enter the anchor or the funnel. They corroborate or contradict, and the report says which.

### 5. Confidence tier
- **High**: two or more fully comparable accepted offers.
- **Medium**: one fully comparable accepted offer, or, with no offers, two or more fully comparable posted ranges whose midpoints sit within about 5% of each other (the posted-range cap: ranges alone never reach High).
- **Low**: a single fully comparable posted range, or posted ranges that disagree.
- **Deferred**: no fully comparable point survives (partials alone never carry a verdict), or the anchor would rest on a single posted range that a partial accepted offer contradicts by more than 5% while none of the company's own accepted offers backs the range. Give no verdict; say exactly what evidence would settle it (kind, place, stage, role, date).
Partial points never raise a tier. State the deciding reason beside every tier.

## The report

Open `references/benchmark-report.md` and write the report as the final message, starting with `# ` and the company name, nothing before it. It holds the benchmark table (one row per role family and level, with verdict, gap, the funnel retrieved → excluded → incomparable → partial → comparable, anchor, and tier), the conversions used, a deferred-verdicts section for every family without a verdict, and a signal-caveats section for skews that touch the whole pool, stated once rather than repeated per row. Every figure in it comes from the input or from a calculation shown in it.
