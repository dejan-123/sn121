---
name: salary-band-market-read
description: Judges each salary band against outside pay evidence when given a band snapshot plus a table of classified market signals - screens every signal for comparability, prices the market from accepted offers first and job-ad ranges second, checks that price against the company's own recent hires, and returns per family a position, a confidence tier and an evidence funnel, with deferrals and pool-wide caveats; a paste with no classified signals is returned with each request sent to the right owner.
---

# Reading a salary band: price it from outside, check it from inside

Every row turns on three things. First, the market price: what did employers like this one really pay? A hire who said yes to an offer gives the cleanest answer, revealed preference. A job-ad range is a pitch, and its top end is hope; a range the input says was published under a pay-transparency law is at least a figure the employer had to disclose. Second, the company's own record: the offers its candidates accepted show what it already pays to close, so they check the market price but never become part of it. Third, sufficiency: a band with one ad behind it, no law behind the ad and nothing to check it against stays uncalled, and its indication is reported. A roster of named people is individual pay, not bands.

## Screening the signals

Each signal is read against the single band its title points to; Senior and Staff of the same function are separate bands.

- **Counted**: the same metro (or the tier the company pins remote staff to), the same funding stage, the same role and level (another title only when a scope note maps it), dated inside the window, from a named source, and given as base salary.
- **Leaning**: right in every respect but one step of stage (Series B against A or C), or a national or remote range with no metro. It points a direction and never prices the band. When the company says some roles are remote without a metro but not which ones, that gap goes in the caveats.
- **Dropped**: another named metro, even for an accepted offer; two or more stages apart on Seed, A, B, C, D, E, counted letter by letter, so B to D is two and B to E is three (a growth-stage label reads as its series letter), or a listed company; no date, or a month earlier than the first month the input names (compare the year first: any later year is in, whatever the month; the first month itself is in; never count back from the retrieval date); hearsay, or a survey that gives no method; and pay that is not base and has no stated split: on-target earnings, a package carrying a retention or sign-on grant, a contractor or hourly rate (never annualised), a foreign currency with no rate supplied. A total that names its bonus is kept: the total minus the bonus is base, with the subtraction shown.

## Pricing the market

Counted accepted offers set the anchor: one stands alone, several give their median. Counted posted ranges set it only when no counted accepted offer exists, through the median of their midpoints. Offers and range midpoints never share a median, and the company's own offers, which have no signal ID, never enter it.

## Called or deferred

A family is **Deferred** when nothing is counted. When the anchor would be one counted range on its own, the range has to be backed, because an ad needs support; two counted ranges back each other already. A range the input says was posted under a mandate is backed by that alone, enough for a Low position. Any other lone range is backed when the family has one of the company's own accepted offers, a decline that cites pay, or a second range, counted or leaning, within 10% of it. A leaning accepted offer is enough backing only while the range reads under 5% from the midpoint either way: Lagging or Above market needs more than one ad and a neighbour's hire. A range left unbacked is an indication, not a position: Deferred, with the indication given.

For every called family, the gap is (anchor − band midpoint) / band midpoint, to one decimal.

| Gap | Anchor from accepted offers | Anchor from ranges |
|---|---|---|
| anchor 5% or more above the midpoint | **Lagging** | **Lagging**, marginal |
| 3% to 5% above | **Lagging**, slight, when an own accepted offer sits 5% or more above the midpoint, or a decline cites pay; if not, **Competitive**, low edge | **Lagging**, slight, when a leaning accepted offer sits 5% or more above the midpoint; if not, **Competitive** |
| under 3% either way | **Competitive** | **Competitive** |
| 3% to 5% below | **Competitive**, high edge | **Competitive** |
| 5% or more below | **Above market** | **Above market** |

Find the gap's row before anything else. At 5% or more the anchor decides, and own offers on the same side are reported as agreeing, with a single exception: when that offer is the family's only counted signal and two or more own accepted offers all sit within 3% of the midpoint on either side (−2.9% is within, +3.4% is not), the company's own closes outweigh one person's negotiation: **Competitive**, with the outside offer reported as the dissent. From 3% to 5% one outside offer is one person's deal, so the company's closes decide: a single own accepted offer 5% or more over the midpoint is enough. A decline counts only when the input gives a reason about pay, quoted in its words; any other stated reason, such as joining a competitor, is quoted and set aside, never called unexplained; a quoted rival premium stays beside the gap as a percent, never a dollar figure; a decline with no reason at all is a hole in the record, not evidence. A P1 or P2 opening on a lagging band is named in its row.

## Confidence

Offer-anchored rows: **High** needs a second counted signal that agrees and own accepted offers on the same side of the midpoint, by any amount; one of the two, or neither, gives **Medium**. Range-anchored rows: **Medium** needs both (a) two agreeing counted ranges and (b) own offers or a pay-citing decline pointing the same way; with only one of the two, or neither, **Low** (one range plus an own hire is Low; two ranges with no own offers is Low); a range-anchored row never reaches High, and a leaning signal never raises a tier. When own offers are missing, say so as the reason the tier stops where it does.

## Order of work

Right after this skill loads, the first move is a single read_reference call; nothing is written until it returns.

- **Bands plus a classified signal table: a position review in three turns.** Turn 1: read `references/casebook.md`. Turn 2: write this request's ledger in full, as plain text in the casebook's form, and end that same message with a read_reference call for `references/review.md`. Turn 3: send the review and nothing else. The ledger is scratch and is never repeated.
- **No classified signals** (a roster, a pay question, a band redesign): **a return note in two turns.** Turn 1: read `references/return-note.md`, not the casebook. Turn 2: send the note alone, starting at its title.

## The review

1. Title: `# <Company>: pay band benchmark, <stage>, <metro>`.
2. A paragraph opening `**How the pool was read.**`: how many signals and when they were retrieved; the window in three slots, signals dated exactly the first month, dropped for date, undated, each with its IDs or none, and nothing further about dates; the metro, stage and pay basis that count; each conversion with its arithmetic, or that none was needed; that every gap is (anchor − band midpoint) / band midpoint; the families with no own offers on record.
3. A table, one row per family and level in the snapshot's order: Family, level | Band midpoint | Evidence funnel | Market anchor | Own hires | Position | Confidence. The funnel gives the count and every signal by ID with its call and the reason in words; a leaning signal carries its figure or range midpoint; the anchor's figures go in the anchor cell. The position cell gives the gap, then the word. The confidence cell gives the tier and what decided it.
4. A line opening `**Count.**` that adds the rows up to the pool: counted, leaning, dropped.
5. A paragraph opening `**Deferred.**`: one bullet per deferred family with what blocks it, its indication if it has one, and what would settle it: an accepted offer, or a range only where the input notes a mandate, at the family's place and stage, inside the window; with nothing deferred, one sentence on the thinnest position and the evidence that would add to it. No tier is ever named there.
6. A paragraph opening `**Caveats on the whole pool.**`: bullets, each said once and never repeated in a row: two lists copied from the ledger's basis line, the positioned families on accepted offers (revealed preference) and those on posted ranges (aspirational), by name, each range's posting note in the input's own words and any posting rule the input gives for the whole pool, quoted once; that most signals come from one named source; mixed pay bases or currencies; any gap in the snapshot.

Statements about the whole pool are where reviews slip, so none are made: no tally of signals by type, and no "all", "none" or "every" about notes. A posting note is reported only in the input's words and never read into a blank. The only figures are the input's own plus midpoints, medians, gaps, own-offer percents and conversions worked from the input's numbers.

## The return note

No table, no position and no figure of any kind; no salary from the paste repeated or averaged; 250 to 400 words, one numbered list, nothing about instructions. It opens on the title `## Not a benchmark request: <Company>`. Each ask gets its own numbered line naming the kind of work and who owns it; then what to send, in words (bands by family and level in place of named salaries, classified outside signals, recent offers, the window); then what comes back for each family and level cell of the roster: a position, a funnel and a tier, or a deferral.
