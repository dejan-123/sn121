---
name: band-market-benchmark
description: Benchmarks a company's pay bands against a classified table of external pay evidence - screens every point for comparability, sets a market reference from accepted offers before posted ranges, reads the company's own offers as a second test, and returns a verdict and confidence tier per role family with deferrals, an evidence funnel that adds up and pool-wide caveats; redirects requests that hold no classified evidence.
---

# Benchmarking pay bands: two readings before a verdict

A band is judged against the evidence that survives a comparability screen, never the raw pool, and a lean needs two independent readings that agree. The outside reading is the market reference. An accepted offer is revealed preference, a number someone said yes to; a posted range is an employer's opening position, aspirational at the top, and worth more where the input says a law made the employer publish it. The inside reading is the company's own hiring: accepted offers landing well above the band midpoint, or declines that cite pay, say the band is not holding. The two stay apart: own offers have no ID and never enter the market reference, the funnel or a count. A family with one unbacked advert behind it is not benchmarked yet; saying so is a result. A paste with no classified evidence is not a benchmark request, whatever salaries it lists: named people are individual pay, not bands.

## Screening each point

Each point is tested against the one band its title names; two levels of a function are two families.

- **Basis.** Bands are base salary. A total that states its bonus converts (total minus bonus, shown). Out without a split: on-target earnings, a package with a retention or sign-on grant, a contractor or hourly rate (never annualised). Another currency is out unless the input gives the rate; a team paid in pounds is read in pounds.
- **Date.** Undated is out. The first month in window is the month the input names ("before March 2025 are out" gives 2025-03), never counted back from the retrieval date. Any later year is in, whatever its month; only within the first month's own year can a month be earlier and out. The boundary month is in.
- **Source.** Accepted offers and posted ranges from a named source count; hearsay and surveys with no method are out.
- **Place.** The company's metro, or the tier it pins remote roles to. Any other named metro is out, even for an accepted offer. A national or remote range with no metro is partial; remote roles the company leaves unnamed are a snapshot gap.
- **Stage.** Count letters on Seed, A, B, C, D, E (a growth-stage label counts as its series letter). Same stage is full; one letter away is partial, direction only; two or more, or a listed company, is out.
- **Role.** Same family and level; another title counts only when a scope note maps it.

## Market reference

Full accepted offers set it: one stands alone, several give their median. Only with no full accepted offer do full posted ranges set it, by the median of their midpoints. Offers and range midpoints never share a median; partial points never set it.

## Deferral, then verdict

**Deferred**: no full point survives, or the only full point is a single posted range that nothing backs. A range the input notes as posted under a mandate is backed by that alone, enough for a Low verdict. Any other lone range is backed by an own accepted offer, a decline citing pay, or a partial point; a partial accepted offer alone backs it only while the range reads under 5% from the midpoint, since one advert and a neighbour's hire cannot carry Lagging or Above market. Two full ranges back each other. An unbacked range is an indication, written as such; partial points alone never make a verdict.

Otherwise gap = (market reference − band midpoint) / band midpoint, to one decimal, written before the word.

| Gap | Reference from accepted offers | Reference from ranges only |
|---|---|---|
| 5% or more above the midpoint | **Lagging** | **Lagging**, marginal |
| 3% to 5% above | **Lagging**, slight, if any own accepted offer sits 5% or more above the midpoint or a decline cites pay; otherwise **Competitive**, low edge | **Lagging**, slight, if a partial accepted offer sits 5% or more above the midpoint; otherwise **Competitive** |
| within 3% | **Competitive** | **Competitive** |
| 3% to 5% below | **Competitive**, high edge | **Competitive** |
| 5% or more below | **Above market** | **Above market** |

Settle the gap's row before reading own offers. At 5% or more the reference decides alone, and own offers on the same side are written as agreeing; the one exception is a reference that is a single outside offer, the family's only full point, while two or more own accepted offers all sit within 3% of the midpoint on either side (−2.9% is within, +3.4% is not): the company's own closes outweigh one person's deal, **Competitive**, the outside offer written as the dissent. Between 3% and 5% one outside offer is one person, so the company's own closes decide: one own accepted offer at 5% or more over the midpoint is enough, and with none on record nothing leans. A decline is a signal only with a stated reason about pay, in the input's words; another stated reason, such as joining a competitor, is quoted and set aside, never called unexplained; a quoted rival premium stays a percent beside the gap, never a dollar figure; a decline with no reason is a data gap, not evidence. A P1 or P2 opening on a lagging family is said in the row.

## Confidence

When an accepted offer sets the reference, two questions: does a second full point (never a partial) agree, and do own accepted offers sit on the same side of the midpoint, by any amount? Both yes is **High**; anything less is **Medium**. When ranges set it, **Medium** needs both two agreeing full ranges and own offers or a pay-citing decline the same way; one of the two, or neither, is **Low** (one range plus an own hire is Low; two ranges with no own offers is Low), and never **High**. Missing own offers are named as the reason a tier stops where it does.

## Which reply, and the order of work

Whatever the request, the first action after loading this skill is one read_reference call; nothing is written before it returns.

- **Bands per role family and level plus a classified evidence table: a benchmark, in three turns.** Turn 1: read `references/worked-example.md`. Turn 2: write the working sheet for this request in full, as plain text in the example's form, ending that same message with a call to read_reference for `references/document.md`. Turn 3: send the benchmark document alone; the sheet is scratch.
- **No classified evidence table** (a roster, a pay question, a band redesign): **a redirect note, in two turns.** Turn 1: read `references/redirect-note.md`, not the worked example. Turn 2: send the note alone, from its title.

## The benchmark document

1. Title: `## <Company> (<stage>, <metro>) — compensation benchmark`.
2. A paragraph opening `**Basis.**`: pool size and retrieval date; the window as three slots (points dated exactly the first month; out for date, each with its date; undated), each with IDs or none; what counts as comparable; that gaps are (reference − band midpoint) / band midpoint; each conversion with its arithmetic, or none; the families with no own offers on record.
3. One table, a row per family and level in snapshot order: Role family — level | Band midpoint | Evidence funnel | Market reference | Own offers | Verdict | Confidence. The funnel gives the count and every point of the family by ID with its call and reason in words; a partial point carries its figure or range midpoint. The verdict cell shows the gap as its arithmetic, then the word. The confidence cell gives the tier and what decided it.
4. A line opening `**Pool.**` that adds the rows up to the pool size: full, partial and out.
5. A paragraph opening `**Deferred verdicts.**`: one bullet per deferred family, what blocks it, its indication if it has one, and what would settle it (an accepted offer, or a range only where the input notes a mandate, at the family's place and stage); with none deferred, one sentence on the thinnest verdict and the evidence that would add to it. No tier is ever promised.
6. A paragraph opening `**Signal caveats.**`: bullets, each said once and never repeated in the rows: two lists copied from the sheet, the families whose verdict rests on accepted offers and those on posted ranges, by name, then the posting note of each range behind a verdict in the input's own words and any posting rule the input states for the whole pool, quoted once; that most points come from one named source; mixed pay bases; any snapshot gap.

Whole-pool statements are where reviews slip, so none are made: no tally of points by type, no "all", "none" or "every" about notes, and no posting claim read into a blank note. Figures are the input's own plus midpoints, medians, gaps, own-offer percents and conversions.

## The redirect note

No table, verdict or figure of any kind, and no roster salary repeated or averaged: 250 to 400 words, plain prose and one numbered list, never mentioning instructions. It opens on the title `## Not a benchmark request — <Company>`. Each thing asked gets its own numbered line naming the kind of work and its owner; then what to send, in words (bands by family and level in place of named salaries, classified outside points, recent own offers, the window); then what comes back for each family and level cell of the roster: a verdict, a funnel and a tier, or a deferral.
