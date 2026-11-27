---
name: band-market-benchmark
description: Benchmarks a company's pay bands against a classified table of external pay evidence - screens every point for comparability, sets a market reference from accepted offers before posted ranges, reads the company's own offers as a second test, and returns a verdict and confidence tier per role family, with deferrals, an evidence funnel that adds up, and pool-wide caveats; redirects requests that hold no classified evidence.
---

# Benchmarking pay bands: two readings before a verdict

A band is judged against the evidence that survives a comparability screen, never the raw pool, and a lean needs two independent readings that agree. The outside reading is the market reference. An accepted offer is revealed preference, a number someone said yes to; a posted range is an employer's opening position, aspirational at the top and drawn wide where the law makes employers publish. The inside reading is the company's own hiring: accepted offers landing well above the band midpoint, or declines that cite pay, say the band is not holding. The two stay apart: own offers have no ID and never enter the market reference, the funnel or a count. A family with one thin outside signal and nothing inside is not benchmarked yet; saying so is a result. And a paste with no classified evidence is not a benchmark request whatever salaries it lists: a roster is individual pay, it neither confirms nor rebuts that anyone is underpaid, and each thing asked goes back to its owner.

## Screening each point

Each point is tested against the one band its title names; two levels of a function are two families.

- **Basis.** Bands are base salary. A total that states its bonus converts (total minus bonus, shown). Out when the split is missing: on-target earnings, a package with a retention or sign-on grant, a contractor or hourly rate (never annualised). Another currency is out unless the input gives the rate; a team paid in pounds is read in pounds against its own city.
- **Date.** Undated is out. The first month in window is the month the input names ("before March 2025 are out" gives 2025-03), never counted back from the retrieval date. Only an earlier month is out; the boundary month is in.
- **Source.** Accepted offers and posted ranges from a named source count; hearsay and surveys with no method are out.
- **Place.** The company's metro, or the tier it pins remote roles to. Any other named metro is out, even for an accepted offer. A national or remote range with no metro is partial.
- **Stage.** Count steps on Seed, A, B, C, D, E. Same stage is full; one step is partial, direction only; two or more, or a listed company, is out.
- **Role.** Same family and level; another title counts only when a scope note maps it.

## Market reference

Full accepted offers set it: one stands alone, several give their median. Only with no full accepted offer do full posted ranges set it, by the median of their midpoints. Offers and range midpoints never share a median; partial points never set it.

## Deferral, then verdict

**Deferred**: no full point survives; or the only full point is a single posted range and all three of these are missing: a partial point, an own accepted offer, a decline citing pay. One advertised range with nothing to test it is an indication, written as such. Partial points alone never make a verdict.

Otherwise gap = (market reference − band midpoint) / band midpoint, to one decimal, written before the word.

| Gap | Reference from accepted offers | Reference from ranges only |
|---|---|---|
| 5% or more above the midpoint | **Lagging** | **Lagging**, marginal |
| 3% to 5% above | **Lagging**, slight, if the company's own accepted offers sit 5% or more above the midpoint (their median) or a decline cites pay; otherwise **Competitive**, low edge | **Competitive** |
| within 3% | **Competitive** | **Competitive** |
| 3% to 5% below | **Competitive**, high edge | **Competitive** |
| 5% or more below | **Above market** | **Above market** |

At 5% or more the reference decides alone. Between 3% and 5% one outside offer is one person, and a lean is called only when the company already pays 5% past its own midpoint to hire: each own accepted offer is listed once ("two at $140,300" is two offers), set against the midpoint as a percent, and their median decides. A decline is a signal only with a stated reason about pay, and a quoted rival premium is set beside the gap; a decline with no reason is unexplained, a data gap, not evidence. A P1 opening on a lagging family is said in the row.

## Confidence

When an accepted offer sets the reference, two questions: does a second full point agree, and do own accepted offers sit on the same side of the midpoint, by any amount? Both yes is **High**; anything less is **Medium**. When ranges set it, **Medium** needs both: two or more full ranges that agree, and own offers or a pay-citing decline pointing the same way; with one of them or neither it is **Low**, whatever partial points add. Missing own offers are named as the reason a tier stops where it does.

## Which reply, and the order of work

Whatever the request, the first action after loading this skill is one read_reference call, and nothing is written before it returns: the reference fixes the form.

- **Bands per role family and level plus a classified evidence table: a benchmark, in three turns.** Turn 1: read `references/worked-example.md`. Turn 2: write the working sheet for this request in full, as plain text in the example's form, and end that same message with a call to read_reference for `references/document.md`; the sheet comes before that call, never after it. Turn 3: send the benchmark document alone. The sheet is scratch and no part of it is repeated in the document.
- **No classified evidence table** (a roster of names and salaries, a question about what a job pays, a request to redraw bands): **a redirect note, in two turns.** Turn 1: read `references/redirect-note.md`, not the worked example. Turn 2: send the note alone, from its title.

## The benchmark document

1. Title: `## <Company> (<stage>, <metro>) — compensation benchmark`.
2. A paragraph opening `**Basis.**`: pool size and retrieval date; the window and its first month in, naming by ID each point on the boundary and each point before it; what counts as comparable; each conversion with its arithmetic, or that none was needed; which families have no own offers on record.
3. One table, a row per family and level in snapshot order: Role family — level | Band midpoint | Evidence funnel | Market reference | Own offers | Verdict | Confidence. The funnel gives the count and every point of the family by ID with its call and reason in words (`3 → 1 full, 1 partial, 1 out: E-4 full; E-5 partial, one stage up, leans above; E-6 out, another metro`); only the points that set the market reference carry figures, in the next cell. The verdict cell puts the gap before the word. The confidence cell gives the tier and what decided it.
4. A line opening `**Pool.**` that adds the rows up to the pool size: full, partial and out.
5. A paragraph opening `**Deferred verdicts.**`: one bullet per deferred family, what blocks it and exactly what evidence would settle it; with none deferred, a sentence naming the thinnest verdict and what would firm it.
6. A paragraph opening `**Signal caveats.**`: bullets on skews across the whole pool, each said once with counts: accepted offers against posted ranges, mandated or voluntary postings, one source supplying most points, mixed pay bases. Never repeated in the rows.

## The redirect note

No table, no verdict, no market figure, no sample figure, and no salary from the roster repeated or averaged: 250 to 400 words of plain prose and one numbered list, never mentioning instructions, a skill or how it was produced.

1. Title `## Not a benchmark request — <Company>`, then one sentence: nothing here can be benchmarked yet, and the request bundles several different jobs.
2. Each thing asked gets its own numbered line naming the kind of work and its owner. What a role pays is a market-rate lookup for a pay-data provider or recruiting. Whether named people are underpaid is an individual pay question for their manager and the people lead; a benchmark reads bands by role family and level and gives no view on a person. Adding or redrawing levels is band design for whoever owns the pay structure; a benchmark feeds it. A deadline gets an honest line: the analysis waits on evidence, which place and stage to collect first, accepted offers before posted ranges.
3. What to send, in words: bands (minimum, midpoint, maximum) per family and level in place of named salaries; outside points, one row each, with source, type, date, role and level, place, stage and the figure with its pay basis; recent own offers, accepted and declined; the data window.
4. What comes back then, naming the request's own families and levels: a verdict, an evidence funnel and a confidence tier per family, or a deferral.
