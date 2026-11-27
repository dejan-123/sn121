---
name: pay-band-position-check
description: Reads where each pay band sits against its market from an internal band snapshot and a classified table of outside salary signals - decides which signals count, anchors each role family on what people accepted before what employers advertised, tests the anchor against the company's own hires, and reports a position and a confidence tier per family with an evidence funnel, the families that cannot be called yet, and the caveats that run through the whole pool; a request with no classified signals is sent back with each ask routed to its owner.
---

# Where a pay band sits: anchor it outside, test it inside

Three questions decide every row, in this order. What did comparable employers actually pay? An offer someone accepted answers that; it is revealed preference. A range in a job ad does not: it is advertising, aspirational at its top, and where a pay-transparency law forces it into the ad it is at least a disclosure the employer must stand behind, while a voluntary posting is recruiting copy. Second, does the company's own hiring agree? Its accepted offers show what it already pays to close candidates, so they test the outside anchor without ever being part of it. Third, is there enough to say anything? A band with nothing but voluntary advertising beside it, and nothing that tests the advertising, is not positioned; it is deferred with the indication stated. The same honesty applies to the request itself: names and salaries pasted without classified outside signals are individual pay, not bands, and they can neither confirm nor rebut that anyone is underpaid.

## Which signals count

A signal is weighed against the one band its title names; Senior and Staff of one function are two bands.

- **Counted**: same metro (or the tier the company pins remote staff to), same funding stage, same role and level (a different title only when a scope note maps it), dated in the window, from a named source, and stated as base salary.
- **Leaning**: everything right except one step of stage (Series B against A or C), or a national or remote range with no metro. It shows direction and never sets an anchor.
- **Dropped**: another named metro, even for an accepted offer; two or more stages away, or a listed company; no date, or a month before the first month the input names (that first month itself is in; it is never worked out from the retrieval date); hearsay, a recruiter's word, a survey with no method; and pay that is not base with no stated split: on-target earnings, a package with a retention or sign-on grant, a contractor or hourly rate (never annualised), another currency with no rate in the input. A total that states its bonus is rescued: total less bonus is base, shown.

## The anchor

Counted accepted offers make it: a single one alone, several by their median. Counted posted ranges make it only when no counted accepted offer exists, by the median of their midpoints. Offers and range midpoints are never mixed, and the company's own offers, which carry no signal ID, are never in it.

## Deferred or positioned

A family is **Deferred** when no signal is counted. A family whose anchor would rest on ranges must also pass a test, because advertising needs something behind it. A range the input marks as published under a mandate passes by itself: it is a disclosure the employer must stand behind, good for a Low position. A voluntarily posted range (a blank note counts as voluntary) passes only when an accepted offer exists somewhere in the family, a leaning one or one of the company's own, or a declined offer cites pay. Voluntary ranges with nothing of the kind give an indication, not a position: Deferred, with the indication stated.

Otherwise the gap is (anchor − band midpoint) / band midpoint, to one decimal.

| Gap | Anchor from accepted offers | Anchor from ranges |
|---|---|---|
| anchor 5% or more above the midpoint | **Lagging** | **Lagging**, marginal |
| 3% to 5% above | **Lagging**, slight, when the median of the company's own accepted offers is 5% or more above the midpoint, or a decline cites pay; if not, **Competitive**, low edge | **Competitive** |
| under 3% either way | **Competitive** | **Competitive** |
| 3% to 5% below | **Competitive**, high edge | **Competitive** |
| 5% or more below | **Above market** | **Above market** |

From 5% the anchor is enough. Between 3% and 5% a single outside offer is one person's negotiation, so the company's own closes settle it: each own accepted offer is taken once ("two at $140,600" is two), measured against the midpoint as a percent, and their median is compared with 5%. A decline counts only with a stated reason about pay, and a quoted rival premium is set beside the gap; an unexplained decline is a gap in the record, not evidence. A P1 opening on a lagging band is said in its row.

## Confidence

Offer-anchored: **High** needs a second counted signal that agrees and own accepted offers on the same side of the midpoint, by any amount; with only one of the two, or neither, **Medium**. Range-anchored: **Medium** needs two or more counted ranges that agree and own offers or a pay-citing decline pointing the same way; otherwise **Low**, and a leaning signal never lifts a tier. Where own offers are missing, that is named as the reason the tier stops.

## How the reply gets made

The first action after loading this skill is a single read_reference call; nothing is written before it returns.

- **Bands plus a classified signal table: a position review in three turns.** Turn 1: read `references/casebook.md`. Turn 2: write the ledger for this request in full, as plain text in the casebook's form, and end that same message with a call to read_reference for `references/review.md`; the ledger comes before that call, never after it. Turn 3: send the review alone. The ledger is scratch; none of it is repeated.
- **No classified signals** (a roster, a question about what a job pays, a request to redraw bands): **a return note in two turns.** Turn 1: read `references/return-note.md`, not the casebook. Turn 2: send the note alone, from its title.

## The review

1. Title: `# <Company>: pay band benchmark, <stage>, <metro>`.
2. A paragraph opening `**How the pool was read.**`: how many signals and when retrieved; the first month in the window, naming by ID each signal dated that month and each dated before it; the metro, stage and pay basis that count; every conversion with its arithmetic, or that none was needed; the families with no own offers on record.
3. A table, one row per family and level in the snapshot's order: Family, level | Band midpoint | Evidence funnel | Market anchor | Own hires | Position | Confidence. The funnel gives the count and each signal by ID with its call and the reason in words (`3 → 1 counted, 1 leaning, 1 dropped: K-4 counted; K-5 leaning, one stage up, sits above; K-6 dropped, another metro`); figures appear only for the signals that make the anchor, in the anchor cell. The position cell gives the gap, then the word. The confidence cell gives the tier and what decided it.
4. A line opening `**Count.**` adding the rows up to the pool: counted, leaning, dropped.
5. A paragraph opening `**Deferred.**`: a bullet per deferred family with what blocks it, the indication if there is one, and the exact evidence that would settle it; with none deferred, one sentence on the thinnest position and what would firm it.
6. A paragraph opening `**Caveats on the whole pool.**`: bullets, each said once with counts and never repeated in a row: accepted offers against posted ranges, which ranges were mandated and which voluntary, how much one source supplies, mixed pay bases or currencies.

## The return note

No table, no position, no market figure, no example figure, no salary from the paste repeated or averaged; 250 to 400 words, one numbered list, nothing about instructions or how the note was produced.

1. Title `## Not a benchmark request: <Company>` as the very first characters, then a sentence saying nothing can be benchmarked yet and that the request holds several different jobs.
2. One numbered line per thing asked, each naming the kind of work and who owns it: what a job pays is a market-rate lookup for a pay-data provider or recruiting; whether named people are underpaid is an individual pay question for their manager and the people lead, and a review reads bands by family and level, never a person; redrawing or adding levels is band design for the owner of the pay structure, which a finished review feeds; a deadline gets a straight answer about waiting on evidence, which metro and stage to collect first, accepted offers before ads.
3. What to send, in words: bands (minimum, midpoint, maximum) by family and level instead of named salaries; outside signals one per row with source, type, date, role and level, place, stage, figure and pay basis; the company's recent offers, accepted and declined; the window.
4. What comes back, naming the request's own families and levels: a position, an evidence funnel and a confidence tier for each, or a deferral.
