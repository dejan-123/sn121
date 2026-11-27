---
name: role-pay-evidence-ledger
description: Band snapshot + classified salary rows -> role-family market calls via a P/S/I/X working sheet, anchored gap, a 3-zone verdict settled by own-offer band position, confidence tiers, deferrals, caveats; four reads per family - positional premium, printed-bound falsifier, partial spread, decoy; internals corroborate, never arithmetize; redirects non-benchmark asks.
---

# Role-family pay evidence ledger

Every external row is classified once on a working sheet before any verdict is chosen. Only surviving comparable evidence anchors a call. The sheet is the first message, the memo the last.

## 1. Read the snapshot

Capture the stage, the window, each family's metro anchor, band midpoint, internal offers and priority notes, plus any line printed over the table - quoted, it can classify a whole column. A family with no offer line has `I=0`: a named gap, not a zero. Internal offers sit under the same basis rule - a bonus or total inside is not base. What the input leaves open is named on the sheet's `Gap in the snapshot:` line first. A family counts as remote only when the snapshot names it; unnamed remote roles keep every family on the company metro.

## 2. Classify every row on the sheet

Dates and kinds are settled pool-wide first - what fails there fails for everyone. Then each row sits once under the family its title or scope note names:

- **Window** - the stated boundary is honoured: "before March" keeps that March and drops February. Undated or earlier is out.
- **Kind** - accepted offers and posted ranges can count; contractor or hourly rates, unsplit total/OTE, grants, equity, undated or unnamed surveys, and unwritten hearsay are out, each reason named.
- **Basis** - annual base in the band's own currency. A supplied component converts once, the sum shown (`105K total - 10K stated bonus = 95K base, down`). A foreign figure with no supplied rate is out; nothing is annualised, split or converted on invented arithmetic.
- **Role/level** - the seat must match; restylings and scope-note mappings preserving function and level count. A slash title counts when it names the seat, a near miss when it pairs the seat's work with another function; a different level or function is out.
- **Place** - the family's own metro. A different named metro is a near miss: its pay runs its own scale, the input never says how far apart. Remote with no metro is out for an anchored family - unless the input says roles are unanchored without saying which, then a near miss, the unstated split a named gap. An explicitly remote family flips this: remote and national count, single metros go near.
- **Stage** - count the rungs: seed, A, B, C, D, E. Same is clean, one apart is a near miss, two or more - or a public company - is out.
- **Posting** - an offer always holds. A range a law made public - or one silent on why it ran - counts; silence is not voluntary. A range marked voluntary - on its row or by the line over the table - is a near miss: written to attract, binding nobody.

No miss: `P`, the comparable pool. One near miss: `S`, partial - it corroborates by its lean and never anchors; a far-side lean earns a clause, a predicted one little. A partial that exists only because the input leaves a split unstated also says whether counting it would move the call. Two near misses, or any out: `X`, every reason named. `I` is every internal offer; a rival-pay claim or a decline's reason is hearsay, named as such, never set beside a gap.

## 3. Anchor, gap, verdict

The anchor is chosen in order, never blended: accepted `P` offers, averaged when several - a posted midpoint never joins an offer anchor; else `P` posted midpoints all on one side of the band midpoint, averaged; straddled midpoints or nothing anchorable mean no anchor - the family defers.

`S`, `X`, declines and internals never enter the anchor. `gap` = `(band mid - anchor) / anchor`, to one decimal; that sets the label. A stated threshold takes precedence; absent one, the assumed lines: within 3% either way is **competitive**; beyond 5% the anchor decides - further above the midpoint is **lagging**, further below **above-market**; between 3% and 5% on the lagging side the company's own evidence decides - own offers within ~5% of the band's top or past it (the band, not the anchor, is the test), or a decline citing pay, tip it to lagging; own offers lower in the band leave it competitive; none, or the above-market side, leaves the anchor's reading. The deciding signal is named; a 2-4% or zone-settled gap is called *close*. `P=0` defers; internals, priority flags and borrowed metros never rescue it - a finished call even on a P1 seat. Opposing partials are a reason to wait, not an average.

Internals test the calls - agree or trouble - and settle the stated zone; in the memo they surface as corroboration and the named signal only - never in verdict arithmetic or a % beside a gap.

Confidence follows what counted: two or more `P` offers, **High**; one offer, **Medium**; ranges only - two or more agreeing cap at **Medium**, one range at **Low**. **Deferred** is a verdict state, not a tier - name what would settle it.

## 3a. What the sheet reads beyond the label

Four reads, each a sheet line woven into the memo; none emits a figure the input does not print or the sheet does not produce.

- **Premium** - where the family's own accepted offers sit: inside the band or past its top, above or below the external anchor; divergence is named. Declines tally separately as pay-pressure signals, reasons hearsay.
- **Falsifier** - the evidence that would flip or settle each verdict, named as an ask - kind, metro, stage, level, in-window; deferred included; bounds are printed figures only.
- **Spread** - where an offer and a range both count, posted centre minus offer anchor, once - what advertising runs over clearing prices.
- **Decoy** - the pool's loudest figure that fails a check, named with its reason.

## 4. Working order

1. Call read_reference on `references/ledger-sheet.md`, then write the sheet for the input as plain text: floor line; every row's date against it; the over-table line quoted or "nothing printed"; `Gap in the snapshot:`; every row's notes and every range's posting status; own offers family by family; rows by family with the count check; then per family each point's miss verdict, counted set, funnel, anchor arithmetic, gap, zone-tested call, tier, the reads, and a one-line "Say:". Close with pool totals, the verdicts line, the loudest figure not counted, the trap.
2. When any family ends under two `P` points, also read `references/thin-pools.md` first. End the sheet message with "Settled; the memo follows." and read `references/benchmark-memo.md`.
3. Send the memo last: `# <Company>: ` plus a title read off the verdicts line, any divergence named. Then: an opening paragraph - city, stage, first month in, basis check, what it shuts out by ID, which rows are not prices or "none in this pool"; family paragraphs firmest to weakest, each point ID'd at first mention, every conversion a shown sum; `## <Company>'s benchmark` - table `Family and level | Verdict | Gap, worked | Evidence funnel | Confidence`, gap as its sum with anchor IDs, funnel's four counts with IDs and reasons; a `Pool:` line; `## Deferred verdicts`, always present - what came close, what would settle each; `## Signal caveats` - mandate-versus-voluntary skew, an unnamed remote split, source concentration, the evidence most likely to move the weakest call; last line answers the loudest figure not counted.

Verdicts, counts, anchors and tiers are copied from the sheet unchanged. Deferred families keep their table rows and appear again in Deferred: a state, not a double listing.

## 5. Not a benchmark

With no classified external evidence, or an ask for band design, levelling, hiring plans or forecasts, produce no benchmark. Call read_reference on `references/not-a-benchmark.md`, then reply with the note only: `# <Company>: nothing to benchmark yet`, three short paragraphs - what was asked and supplied; why the verdict is deferred; what would resolve it and where the other asks belong. No table, invented figures, named salaries or artefact sketch. A part-benchmark ask gets its benchmark part plus one line on the rest.

## 6. Preflight on the sheet

- every external ID assigned once; totals reconcile - retrieved = survived + partial + dropped = the date line; no `S`, `X`, internal or decline figure enters an anchor;
- a voluntary range, different metro or one-stage-off row never sits in `P`; a slash title only when it names the seat; two near misses are `X`;
- each gap is recomputed midpoint-minus-anchor over anchor; the label matches the rounded gap and the stated cut-off; zone-settled and 2-4% gaps are named close with the deciding signal;
- conversions show operands and direction; figures, currencies, boundary months match the input;
- internals appear as corroboration and the named zone signal only - none in a verdict's arithmetic, no derived % beside a gap, no rescue for `P=0`; and no figure appears that the input does not print and the sheet's arithmetic does not produce - no invented flip-price, no reconstructed rival offer, no margin resized by own offers;
- `Gap in the snapshot:` items are named before classification;
- every family carries its falsifier; every `I>0` family its premium; the loudest drop and the trap are named;
- a gap within ~1.5 points of the line gets a clause that a wider convention relabels it - the direction never in doubt; a laggard P1/P2 seat gets one attrition clause - no advice, no amounts;
- the sheet's calls already carry the zone test; the memo agrees row for row and relitigates nothing; and the memo carries none of: 'actually' before a capital, 'unfortunately' twice, 'as previously stated' or kin, an absolute 'never again' promise, a door-slam line.
