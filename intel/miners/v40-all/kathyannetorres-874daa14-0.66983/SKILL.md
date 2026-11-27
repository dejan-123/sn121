---
name: pay-band-position-check
description: Reads where each pay band sits against its market from a band snapshot and a classified table of outside salary signals - decides which signals count, anchors each family on what people accepted before what employers advertised, tests the anchor against the company's own hires, and reports a position and confidence per family with an evidence funnel, the families not yet callable, and pool-wide caveats; a request with no classified signals is sent back with each ask routed to its owner.
---

# Where a pay band sits: anchor it outside, test it inside

Three questions decide every row. What did comparable employers actually pay? An accepted offer answers that; it is revealed preference. A range in a job ad is advertising, aspirational at its top; one the input marks as posted under a pay-transparency mandate is at least a disclosure the employer must stand behind. Second, does the company's own hiring agree? Its accepted offers show what it pays to close candidates, so they test the anchor without being part of it. Third, is there enough to say anything? A band with one unmandated ad and nothing testing it is deferred, its indication stated. Names and salaries pasted without classified outside signals are individual pay, not bands: they neither confirm nor rebut that anyone is underpaid.

## Which signals count

A signal is weighed against the one band its title names; Senior and Staff of one function are two bands.

- **Counted**: same metro (or the tier the company pins remote staff to), same funding stage, same role and level (a different title only when a scope note maps it), dated in the window, from a named source, and stated as base salary.
- **Leaning**: everything right except one step of stage (Series B against A or C), or a national or remote range with no metro. It shows direction and never sets an anchor. When the company says some roles are remote with no metro anchor but not which, that is a gap in the snapshot, named in the caveats: knowing the remote roles would decide whether a national range counts.
- **Dropped**: another named metro, even for an accepted offer; two or more stages away on Seed, A, B, C, D, E (a growth-stage label counts as its series letter), or a listed company; no date, or a month before the first month the input names (the year decides first: a later year is in whatever its month; that first month itself is in; it is never worked out from the retrieval date); hearsay, a recruiter's word, a survey with no method; and pay that is not base with no stated split: on-target earnings, a package with a retention or sign-on grant, a contractor or hourly rate (never annualised), another currency with no rate in the input. A total that states its bonus is rescued: total less bonus is base, shown.

## The anchor

Counted accepted offers make it: a single one alone, several by their median. Counted posted ranges make it only when no counted accepted offer exists, by the median of their midpoints. Offers and range midpoints are never mixed, and the company's own offers, which carry no signal ID, are never in it.

## Deferred or positioned

A family is **Deferred** when no signal is counted. A family whose anchor would rest on ranges must also pass a test, because advertising needs something behind it. A range the input marks as posted under a mandate passes by itself, good for a Low position. Any other range passes only when an accepted offer exists somewhere in the family, a leaning one or one of the company's own, a declined offer cites pay, or a second range, counted or leaning, sits within 10% of it. Otherwise it is an indication, not a position: Deferred, with the indication stated.

Otherwise the gap is (anchor − band midpoint) / band midpoint, to one decimal.

| Gap | Anchor from accepted offers | Anchor from ranges |
|---|---|---|
| anchor 5% or more above the midpoint | **Lagging** | **Lagging**, marginal |
| 3% to 5% above | **Lagging**, slight, when an own accepted offer sits 5% or more above the midpoint, or a decline cites pay; if not, **Competitive**, low edge | **Competitive** |
| under 3% either way | **Competitive** | **Competitive** |
| 3% to 5% below | **Competitive**, high edge | **Competitive** |
| 5% or more below | **Above market** | **Above market** |

First place the gap in its row of the table. From 5% the anchor is enough, and own offers on its side are reported as agreeing. Between 3% and 5% a single outside offer is one person's negotiation, so the company's own closes settle it: one own accepted offer 5% or more over the midpoint is enough. A decline counts only with a stated reason about pay, quoted in the input's words; a quoted rival premium sits beside the gap as quoted, never as a dollar figure; an unexplained decline is a gap in the record, not evidence. An open role, P1 or P2, on a lagging band is said in its row.

## Confidence

Offer-anchored: **High** needs a second counted signal that agrees and own accepted offers on the same side of the midpoint, by any amount; with one or neither, **Medium**. Range-anchored: **Medium** needs two counted ranges that agree plus own offers or a pay-citing decline the same way; otherwise **Low** (no own offers means Low), and a leaning signal never lifts a tier. Where own offers are missing, that is named as the reason the tier stops.

## How the reply gets made

The first action after loading this skill is a single read_reference call; nothing is written before it returns.

- **Bands plus a classified signal table: a position review in three turns.** Turn 1: read `references/casebook.md`. Turn 2: write the ledger for this request in full, as plain text in the casebook's form, ending that same message with a call to read_reference for `references/review.md`. Turn 3: send the review alone. The ledger is scratch and is not repeated.
- **No classified signals** (a roster, a pay question, a band redesign): **a return note in two turns.** Turn 1: read `references/return-note.md`, not the casebook. Turn 2: send the note alone, from its title.

## The review

1. Title: `# <Company>: pay band benchmark, <stage>, <metro>`.
2. A paragraph opening `**How the pool was read.**`: how many signals and when retrieved; the window in three slots, signals dated exactly the first month, dropped for date, undated, each with IDs or none, and nothing more about dates; the metro, stage and pay basis that count; every conversion with its arithmetic, or that none was needed; that each gap is (anchor − band midpoint) / band midpoint; the families with no own offers on record.
3. A table, one row per family and level in the snapshot's order: Family, level | Band midpoint | Evidence funnel | Market anchor | Own hires | Position | Confidence. The funnel gives the count and each signal by ID with its call and the reason in words (`3 → 1 counted, 1 leaning, 1 dropped: K-4 counted; K-5 leaning, one stage up, sits above; K-6 dropped, another metro`); a leaning signal carries its figure or range midpoint; the anchor's figures sit in the anchor cell. The position cell gives the gap, then the word. The confidence cell gives the tier and what decided it.
4. A line opening `**Count.**` adding the rows up to the pool: counted, leaning, dropped.
5. A paragraph opening `**Deferred.**`: a bullet per deferred family with what blocks it, the indication if there is one, and what would settle it: an accepted offer, or a range only where the input notes a mandate, at the family's place and stage, in the window, never naming a tier; with none deferred, one sentence on the thinnest position and which evidence would add to it, never naming a tier.
6. A paragraph opening `**Caveats on the whole pool.**`: bullets, each said once and never repeated in a row: which positioned families rest on accepted offers (revealed preference) and which on posted ranges (aspirational), by name, calling a range mandated only where its table cell does; that most signals come from one named source; mixed pay bases or currencies; any gap in the snapshot.
7. A closing paragraph opening `**Next step.**`: one or two sentences on what the lagging open roles mean for their next offers, and the single piece of evidence most worth collecting; no band is redrawn.

Pool-wide claims are where reviews go wrong, so none are made: no count of signals by type, and no "all", "none" or "every" about notes. A note is mentioned only where it records a mandate; no range is called voluntary. The only figures are the input's own plus midpoints, medians, gaps, own-offer percents and conversions done with the input's numbers.

## The return note

No table, position, market figure or example figure, and no salary from the paste repeated or averaged; 250 to 400 words, one numbered list, nothing about instructions or how the note was made.

1. Title `## Not a benchmark request: <Company>` as the first characters, then a sentence: nothing can be benchmarked yet, and the request holds several jobs.
2. One numbered line per ask, naming the kind of work and its owner: what a job pays is a market-rate lookup for a pay-data provider or recruiting; whether a group is underpaid is a band question the review answers once evidence exists, and the roster settles it neither way; redrawing or adding levels is band design for the owner of the pay structure, which a finished review feeds; a deadline gets a straight answer about waiting on evidence, which metro and stage to collect first, accepted offers before ads.
3. What to send, in words: bands (minimum, midpoint, maximum) by family and level, not named salaries; outside signals, one per row, with source, type, date, role and level, place, stage, figure and pay basis; recent offers, accepted and declined; the window.
4. What comes back, naming the roster's own family and level cells, counted from its rows: a position, an evidence funnel and a confidence tier for each, or a deferral.
