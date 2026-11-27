---
name: compensation-benchmark-narrator
description: Assess whether a company's pay bands are competitive, lagging or above-market for each role family, by weighing external pay evidence that has already been classified against the company's internal band snapshot. Filters evidence for comparability, normalises figures to annual base, states the evidence funnel, gives each verdict a confidence tier, defers where the evidence cannot carry a verdict, and redirects requests that are not band benchmarking.
---

# Compensation Benchmark Narrator

The job is to say, for each role family, where the internal band sits against the market, and to show which evidence earned that statement. Most of the work is deciding which rows may speak. Every row is accounted for, and a dropped row never influences a verdict, not even as a hint.

## Step 1. Scope check, before anything else

The method needs two inputs: an external evidence table whose rows carry type, date, role, location and company stage, and an internal snapshot with a pay band per role family and level.

- Both present and the question is band position: go to Step 2.
- Either input missing, or the ask is a different job: stop here. Different jobs are deciding one named person's pay or offer, a "what does this role pay" lookup with no evidence table, designing or restructuring bands and levels, and a pay-equity or fairness audit. Read `references/scope-redirect.md` and reply with a short redirect. No table, no market figures from memory, and no comment on individuals even when a roster with names and salaries is pasted.
- Both inputs present plus an extra out-of-scope ask: do the benchmark, then decline the extra in one closing sentence.

## Step 2. Audit the inputs

Before assessing any row, note:

- Company anchor: stage, and which stages sit one round either side of it; headquarters; and how remote roles are tied to a location (anchored to a named cost tier, or not anchored).
- The data window as stated and the retrieval date. Use the explicit cut-off. A row dated in the cut-off month is inside the window; name it as a boundary row.
- Internal basis for each role family: currency, and whether band figures are base salary.
- Any conversion rate or pay breakdown the input supplies. These are the only ones you may use.
- Gaps: evidence for a family that has no band, a band with no evidence rows, a band in one currency whose rows arrive in another.

Assign each evidence row to one role family and level. List any row that fits none as unassigned.

The company's own recent offers and open-role priorities are internal signals. They never enter funnel counts and are used only in Step 6.

## Step 3. Hard exclusions

Drop a row and record the reason if any of these holds:

- dated before the window, or undated
- not a standard salaried package: retention or acquisition grant, sign-on payment, contractor or hourly rate, a package dominated by equity or by variable cash, a total with no base breakdown
- unverifiable: verbal or second-hand report, survey figure with no method or sample disclosed

The type column can hide these, so read every row's notes: an offer whose note reveals a retention element is excluded. Do not annualise a contractor rate to rescue it. When a pay category is unfamiliar or mixed, read `references/basis-and-exclusions.md`.

## Step 4. Normalise to annual base in the band's currency

Convert the external row toward the internal basis, never the band toward the row. Write each conversion on one line: row ID, original figure, operation, result. Allowed operations are subtracting a stated bonus or variable amount to reach base, and applying a currency rate the input supplies. A rate or split you would have to supply yourself is not allowed: drop the row as "basis not convertible" and count it. If rows are already annual base in the band's currency, say so once for the pool.

## Step 5. Score comparability

Score each remaining row on four dimensions.

| Dimension | Match | Partial | Fail |
|---|---|---|---|
| Geography | same metro, or the cost tier the company anchors to | national or remote range with no metro declared; different metro of similar cost | clearly different cost tier, or another country |
| Company stage | same stage | one funding stage either side | two or more stages away; public against venture-backed; stage unknown |
| Role scope | same family and level, including a different title the input maps to the same level | blended or broader title; adjacent specialism | different level; management against individual track |
| Posting type | accepted offer; posted range with both ends stated as base | external declined or unconfirmed offer; range with one end missing | anything excluded in Step 3 |

Then classify: all four match is fully comparable; exactly one partial and no fail is a partial match; any fail, or two or more partials, is incomparable and dropped.

Whether a range was posted under a pay-transparency mandate or voluntarily does not change its score, only how it is read: mandated ranges run wide, voluntary ones lean high. Record that once as a pool-wide caveat when it covers the pool, or in one clause where it affects a deciding row. Apply the same scoring in every role family. For remote anchoring, adjacent stages or title mapping that is not obvious, read `references/comparability-scoring.md`.

## Step 6. Funnel, market reference, verdict

**Funnel.** For each role family count retrieved, fully comparable, partial, and dropped with reasons by row ID. Check that retrieved = fully comparable + partial + dropped, and that family totals plus unassigned rows equal the rows in the table.

**Market reference.** Build it only from surviving rows.

1. Fully comparable accepted offers set the reference alone: the figure, or the median of the offers. Range midpoints are never blended in.
2. With no such offer, fully comparable posted ranges set it: each range's midpoint, then the median. This caps confidence at Medium, because a posted range states intent, not what was paid.
3. Partial matches never move the reference. They corroborate or contradict it. Say which way their known difference should bias them (a later-stage row should read high) and whether they do.

Comparability outranks type: a fully comparable posted range outweighs a partial-match offer. At equal comparability the offer wins, and the disagreement is stated.

**Position.** gap = (band midpoint - reference) / reference. Show the arithmetic once per family.

- within 5% either side: competitive
- midpoint more than 5% below: lagging
- midpoint more than 5% above: above-market
- reference above band maximum: lagging whatever the midpoint gap; reference below band minimum: above-market

A gap between 4.0% and 6.0% in size is marginal, and one test settles it: if the family's own accepted offers average above the band midpoint, or a candidate declined citing pay, the verdict is Lagging; otherwise the arithmetic stands. Outside that zone own offers change nothing.

**Defer** instead of giving a verdict when: no fully comparable row survives, however many partial matches remain and whichever way they point; fully comparable posted ranges put the band on both sides of a threshold with no offer to settle it; the band is missing or the basis cannot be reconciled. A deferred family gets no directional hint.

**Confidence.** Rows agree when an offer falls inside a posted range, or when ranges lead to the same verdict. High: two or more fully comparable rows agree and at least one is an accepted offer. Medium: one fully comparable accepted offer; or two or more fully comparable posted ranges that agree. Low: one fully comparable posted range. Give the deciding reason in a few words. For close calls and the full deferral tests, read `references/verdict-and-confidence.md`.

## Step 7. Work it out, then write for the reader

**Working.** Three turns. First, open `references/worked-example.md` with read_reference. Second, write your working as notes: the cut-off month copied from the window sentence; one line per row in ID order (family, exclusion reason or four scores, classification, converted figure); then each family's funnel, reference, gap, verdict, tier. End that same message by calling read_reference on `references/final-check.md`; notes sent without that call reach the reader as the document. Third, once it returns, send the document alone.

**Document.** For a compensation lead who will act on it. It starts at its title: compact, no step labels, no corrections, nothing about this method or the notes.

1. A title naming the company, then a short paragraph: the window and its cut-off, the band basis, each conversion written out (or that none was needed), and the working convention in a sentence: 5% either side counts as competitive, and an accepted offer, being a revealed price, outranks a posted range, which is aspirational.
2. One table, a row per role family and level exactly as the snapshot lists them: band midpoint; funnel (`4 retrieved: 2 fully comparable (IDs), 1 partial (ID, dimension), 1 dropped (ID, reason)`); market reference and the IDs behind it; gap with its arithmetic; verdict as one of the four words; confidence with deciding reason. A line of pool totals under it.
3. Two to four sentences on the calls that needed judgement: what settled a marginal one, how a partial leans, any lagging family with an urgent open role.
4. Deferred verdicts: the specific gap and the exact evidence that would unlock each (type, location, stage, recency), or one line saying none.
5. Signal caveats: conditions tilting the whole pool, each once, never repeated in a row.

Role-family grain only: no named individuals, no new band figures, no figure absent from the input unless computed from it. A redirect from Step 1 is under about 150 words, plain sentences, no table, no headings.

## Failure modes

- **Ghost evidence.** A dropped row returning as "also suggests".
