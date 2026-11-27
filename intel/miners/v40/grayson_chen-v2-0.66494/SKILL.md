---
name: role-family-pay-benchmark
description: Judges whether each role family's salary band is competitive, lagging or above-market by filtering a classified external evidence pool against the internal band snapshot - drops non-salary, stale and non-comparable figures, scores the rest on geography, company stage and role scope, converts survivors to annual base, anchors on offers over posted ranges, tiers confidence and defers where comparables are missing or conflict. Redirects individual pay, salary lookups, band design and pay-equity asks.
---

# Role-family pay benchmarking from a classified evidence pool

Offers are revealed preference: what a comparable employer actually paid. Posted ranges are aspirational and wide. A range posted under a pay-transparency mandate (New York, California, Washington, Colorado and similar laws) exists because the law requires it and often spans levels; a voluntarily posted range is a self-selected sample, usually from employers who want to be seen paying well. Either way a range describes intent, not a hire. Filter first, account for every point, then compare.

## 1. Scope check first
A benchmark needs classified external points and internal bands by role family. An individual pay decision (a named person's raise or offer), a raw salary lookup with no evidence pool, band design (adding levels, setting min/mid/max) and a pay-equity audit are different decisions, so they get a redirect; with no external evidence pool there is nothing to tabulate, not even rows marked Deferred. A redirect is two or three short paragraphs of prose, about 150 words, that start straight with the company's name, with no title, table or list: what the input holds and why it cannot carry a verdict yet (a roster of individual salaries is neither a band snapshot nor market evidence, so the verdict is Deferred: no external comparables), who owns each out-of-scope part (band design follows a benchmark; individual pay sits with the manager and HR), and what to send: classified points per role family with date, metro, stage, level and type, plus band min/mid/max per family and level. For a redirect, write one line saying which out-of-scope ask this is and, in that same message, call read_reference for `references/redirect-note.md`; your next message is the note alone.

## 2. Audit the inputs
- One row per role family x level, with band midpoint and currency. Evidence with no internal band, or a band with no evidence, is a named gap. Never fill it.
- Window: the input sets an age limit (points older than N months are out). A point's age is counted in whole months from the retrieval month: (retrieval year - point year) x 12 + (retrieval month - point month). Age N or less stays; more than N drops, even by one month (13 months against a 12-month limit is out). Retrieved 2024-05 with a 12-month limit: 2023-05 is 12 months old and stays, 2023-04 is 13 and drops. When the input also names the cutoff ("before May 2023"), that month itself is inside. Undated points drop.
- Note the metro and whether remote roles are anchored to it. Internal offer outcomes (accepted above the band midpoint, declined over pay) corroborate only; they stay out of the funnel.

## 3. Classify every point
Go through the evidence in ID order. For each point read its date, metro, stage, title and figure basis before deciding.

Dropped. Any one of these is enough:
- Basis: retention or acquisition grant, package total, OTE or total comp with no base split, equity-heavy or cash-heavy mix, contractor or agency rate (never annualised).
- Source: hearsay, or a survey with no stated method or date.
- Date: undated, or older than the window allows.
- Geography: another named metro or country; another currency with no supplied rate.
- Stage: two or more steps away on seed < A < B < C < D < E and later < public (Series B to Series D is two steps); public vs private; unknown. When a point's stage differs from the company's, write both letters ("range/D vs B") and count the steps between them.
- Scope: another level or another family.

Partial. It survives but never sets the anchor. There are exactly three partial reasons:
- one stage step away (for a Series B company only Series A or C; for Series C only B or D);
- a national or remote range that names no metro;
- an adjacent specialty, or a title merging two jobs.
A point with two partial reasons is dropped. Any other reason means dropped, so "other metro, partial" or "two stage steps, partial" is always a mistake. Check geography even when the stage already differs.

Full: none of the above. Same metro or the metro remote roles anchor to, same stage, same family and level (synonym titles and a level mapping the input confirms count), inside the window.

Convert only with what the input gives: total comp minus the stated bonus = base, and the point stays an offer; monthly x12; hourly only with stated hours; currency only with a supplied rate. A range becomes its midpoint, (min + max) / 2. A lower-stage partial normally sits below market and a higher-stage one above; that direction is expected, not a conflict.

## 4. Anchor, tier, gap, verdict
- Anchor = median of full accepted offers; ranges corroborate and are never averaged with an offer, and an offer beats a disagreeing range. No full offer: anchor = median midpoint of full ranges (two ranges: their average).
- Tier, counted from fully comparable survivors only:
  - High: two or more full points and at least one is an offer. An offer plus an agreeing range is High.
  - Medium: one offer and no other full point; an offer that a full range contradicts; or two or more ranges and no offer (posted-range cap).
  - Low: exactly one range and no offer (posted-range cap).
  - Deferred: no full point.
- Gap = (band midpoint - anchor) / anchor, once per row; negative means the band pays below market, so a band midpoint under the anchor can never be above-market. -5.0% or lower: lagging; between -5.0% and +5.0%: competitive; +5.0% or higher: above-market. Within one point of a threshold add "at the edge" without changing the call (-5.4% is lagging at the edge, -4.6% competitive at the edge).
- Deferred only when no fully comparable point survives (partials alone never carry a verdict), when the internal band is missing, or when two full offers land on opposite sides of the band. One full range is enough for a Low call.
Partials and internal outcomes are cited as corroboration; they never change the tier. A dropped point never moves a verdict; the raw pool is never the comparison.

## 5. Work on a sheet, then write the memo
A benchmark takes two messages. The point-by-point checking belongs on a working sheet; the reply the HR lead reads is a memo that argues in prose. A redirect's first words are the company's name; a memo's first characters are `# ` and the company's name; nothing comes before either.
1. Call read_reference for `references/working-sheet.md`, then write the sheet for this input as plain text. One line per point in ID order: ID, year-month and age in months, metro, stage against the company's, title and level, type and figure basis, then its class and reason from section 3. Then one line per family x level: retrieved, full, partial and dropped IDs, anchor with its sum, gap with its sum, verdict, tier and what decides it, and any own offers or declines. End with "Sheet done." and only then, at the end of that same message, call read_reference for `references/memo-example.md`; do not open it earlier, and write no memo in the sheet message.
2. Your next message is the memo alone, every class, anchor, gap, verdict and tier copied from the sheet:
- Title: `# <Company>: ` and the verdict picture in a few words.
- An opening paragraph of two or three plain sentences: the stage and pay-anchor metro the bands are held to, annual base in which currency, the window as an age limit from the retrieval month with any point it shuts out, and each conversion with its sum and direction, or that none was needed.
- Two or three paragraphs of argument, firmest call first. Families decided by the same kind of evidence share a paragraph, and each opens on what decides it: the anchor point named by what it is and its ID (an accepted offer at a same-stage company in the home metro, revealed preference; or an aspirational posted range), how far the gap sits from the line, whether the company's own offers or declines agree with it, where a partial leans and why it stays out, and which priority open role hangs on the call.
- One table, one row per family x level: Role family | Verdict | Gap | Anchor | Funnel | Confidence. Gap shows its sum. The funnel gives the count, then the IDs by class with a few words of reason for each partial or drop ("4 retrieved: Q1, Q2 full; Q3 partial, one stage step; Q4 dropped, other metro"). Confidence gives the tier and its deciding evidence.
- `## Deferred verdicts at <Company>`: for each deferred row, what came closest by ID and why it cannot carry a verdict, then the evidence that would settle it (type, metro, stage, level, inside the window); or one sentence on why nothing was deferred.
- `## Signal caveats in <Company>'s pool`: the two or three skews that matter most across the whole pool, stated once, naming the IDs behind each; they describe the evidence, not your process (one source behind most points, range-heavy pool, mandated vs voluntary postings, national remote ranges, mixed currencies, which way partials lean, thin counts).
The memo runs about 400 to 600 words; no bold labels or lists in the prose. Role-family grain only, never per person.
