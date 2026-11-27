---
name: comp-band-position-check
description: Places each role family's salary band as competitive, lagging or above-market by sorting a classified pool of outside pay evidence against the company's own bands; drops what is not base salary, stale or not comparable, converts what survives to annual base, prices on accepted offers before posted ranges, grades confidence, defers where comparables are missing or clash, and redirects one-person pay calls, bare salary lookups, band redesign and pay-equity reviews.
---

# Is this band still priced to hire? Reading outside evidence role family by role family

An accepted offer is the strongest evidence there is: an employer named a number and a candidate took it. A posted range is a statement of intent, usually wide. Where a pay-transparency law (California, New York, Washington, Colorado) forces publication, the range often stretches across levels to stay compliant; where an employer volunteers one, it is often an employer keen to look generous. So one surviving offer outranks any stack of ranges, and the two are never blended into one average.

Points that only half fit still carry a signal. A company one funding round younger tends to pay less for the same job and one round older tends to pay more; a half-fitting point that lands where that tendency predicts adds little, and one that lands against it (a younger company paying above the anchor) earns a sentence of warning. The company's own hiring tests a verdict without ever setting it: if it already pays above its midpoint to close candidates, or loses them over pay, that is corroboration, and a candidate's report of a rival's number is hearsay. When nothing comparable is left, the useful answer is a deferral that says exactly what is missing; a verdict borrowed from another city, round or job would mislead.

## A. First: is this a benchmark?
A benchmark needs two things: classified outside pay points, and internal bands by role family. A decision about one named person's pay, a lookup of salaries with no evidence pool, redesigning a band (new levels, new min/mid/max) and a pay-equity review are other jobs, and each gets a redirect; with no outside evidence there is no table to build, not even one full of Deferred rows. For a redirect, write one line naming the out-of-scope ask and, in the same message, call read_reference for `references/not-a-benchmark.md`; the message after it is the note alone, opening with the company's name.

## B. Reading the snapshot and the window
- Each family x level row needs a band midpoint and its currency. Outside evidence with no matching band, or a band with no evidence, is a gap to name, never to fill.
- Age limit: count each point's age in whole months back from the retrieval month, (retrieval year - point year) x 12 + (retrieval month - point month). An age up to the limit stays in; one month past it is out (13 months under a 12-month limit is out). With retrieval in 2024-05 and a 12-month limit, 2023-05 (age 12) stays and 2023-04 (age 13) goes. If the input also names the first excluded month ("before May 2023"), the named month itself is in. A point with no date is out.
- Note the home metro and whether remote roles are pinned to it. The company's own offer outcomes (accepted above midpoint, declined over pay) are corroboration only and never enter the funnel.

## C. Sorting each point
Take the evidence in ID order and give every point one class.

Out, if any one of these holds:
- Figure basis: a retention or acquisition grant, a package total, OTE or total comp with no base split, an equity-heavy or cash-heavy mix, a contractor or agency rate (never annualised).
- Source: hearsay, or a survey with no method or date.
- Date: undated, or past the age limit.
- Place: any other named metro or country, which is never half-fitting; another currency with no rate supplied.
- Round: two or more steps apart on seed < A < B < C < D < E and later < public (Series B to Series D is two steps); public against private; unknown. Whenever the round differs, write both letters ("range/D vs B") and count the steps.
- Job: a different level or a different family.

Half-fitting (partial): it stays in view but never sets the anchor. Only three things make a point partial:
- exactly one round apart (for a Series C company only B or D);
- a national or remote range with no metro named;
- a neighbouring specialty, or a title that joins two job names with a slash, even when one of the names is the family's own.
Two partial reasons make it out. Every other reason makes it out, so "other metro, partial" or "two rounds apart, partial" is always wrong. Check place even when the round already differs.

Comparable (full): none of the above. Same metro (or the metro remote roles are pinned to), same round, same family and level (synonym titles and level mappings the input confirms count), inside the window.

Conversions use only what the input supplies: total comp less the stated bonus gives base and the point stays an offer; monthly x 12; hourly only with stated hours; another currency only with a supplied rate. A range is read at its midpoint, (min + max) / 2. A younger-company partial normally sits below the market and an older-company one above it; that is expected, not a conflict.

## D. From survivors to a verdict
- Anchor: the median of comparable accepted offers. Ranges support it, never join its average, and lose to an offer they disagree with. With no comparable offer, the anchor is the median midpoint of comparable ranges (two ranges: their average).
- Confidence: count comparable offers (O) and comparable ranges (R) separately; partials and own offers never count.
  - High: O at least 1 and O+R at least 2 (an offer with an agreeing range is High).
  - Medium: O 1 and R 0; an offer a comparable range contradicts; or O 0 and R 2 or more (the cap on ranges alone).
  - Low: O 0 and R 1 (the same cap).
  - Deferred: O 0 and R 0.
- Gap = (band midpoint - anchor) / anchor, worked once per row; below zero means the band pays under the market, so a midpoint under the anchor is never above-market. -5.0% or lower: lagging; between -5.0% and +5.0%: competitive; +5.0% or higher: above-market. Within a point of either line, add "at the edge" (-5.4% is lagging at the edge).
- Deferred only when no comparable point survives (partials never carry a verdict alone), when the band is missing, or when two comparable offers fall on opposite sides of the band.
Partials and the company's own outcomes are cited as support and never change the confidence. A dropped point never moves a verdict, and the raw pool is never the comparison.

## E. Two messages: sheet, then memo
The checking happens on a working sheet; what the HR lead reads is a memo that argues. A memo begins with `# ` and the company's name, a redirect with the company's name, and nothing goes before either.
1. Call read_reference for `references/sheet-walkthrough.md`, then write the sheet for this input as plain text. One line per point in ID order: ID, year-month and age, metro, round against the company's, title and level, type and figure basis, its Notes cell (mandate, voluntary or blank), then its class and reason from part C. Then one line per family x level: retrieved, comparable, partial and dropped IDs, O and R, anchor with its sum, gap with its sum, verdict, confidence from O and R, and any own offers or declines. Finish with "Sheet done." and only then, at the end of the same message, call read_reference for `references/finished-memo.md`; do not open it sooner, and put no memo text in the sheet message.
2. The next message is the memo alone, copying each class, anchor, gap, verdict and confidence from the sheet:
- Title: `# <Company>: ` and the overall picture in a few words.
- An opening paragraph of two or three plain sentences: the round and pay metro the bands are held to, annual base in which currency, the age limit counted from the retrieval month and anything it excludes, and each conversion with its sum and direction (or that none was needed).
- Two or three paragraphs of argument, firmest call first, grouping families decided by the same kind of evidence. Each opens on what decides it: the anchor named by what it is and its ID (an accepted offer at a same-round employer in the home metro, revealed preference; or an aspirational posted range), how far the gap sits from the line, whether the company's own offers or declines agree, which way any partial leans and why it stays out, and which priority open role depends on the call.
- One table, a row per family x level: Role family | Verdict | Gap | Anchor | Funnel | Confidence. The gap shows its sum. The funnel gives the count and then IDs by class, with a few words of reason for each partial or drop ("4 retrieved: Q1, Q2 full; Q3 partial, one round apart; Q4 dropped, other metro"). Confidence gives the level and what decides it.
- `## Deferred verdicts at <Company>`: for each deferred row, the closest point by ID and why it cannot carry a verdict, then the evidence that would settle it (type, metro, round, level, inside the window); or one sentence on why nothing was deferred.
- `## Signal caveats in <Company>'s pool`: the two or three skews that matter across the whole pool, stated once with the IDs behind them, about the evidence rather than your method (one source behind most points, a range-heavy pool, mandated against voluntary postings, national remote ranges, mixed currencies, which way partials lean, thin counts).
About 400 to 600 words, no bold labels or lists in the prose, role-family grain only, never one person.
