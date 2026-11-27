---
name: band-against-market
description: Assesses whether a company's pay bands are competitive, lagging or above-market for each role family, from a classified external evidence table and an internal band snapshot. Every external point is first tested on geography, company stage, role scope and posting type, put on an annual-base basis where the input allows it, and counted into a funnel; each verdict then rests only on the fully comparable points, carries a confidence tier with its reason, and is deferred when none is left. Requests for individual pay calls, salary lookups, band design or pay-equity audits get a short redirect.
---

# Band against market: filter first, then decide

A band is "behind the market" only against evidence for the same job, in the same labour market, at a company of the same stage, quoted on the same basis. Most of a pool fails that test, and not at random: richer metros and later stages sit high, and on-target or total figures look like base and are not. So I filter first, show the filter, and rest each verdict only on what passed. When nothing fully comparable is left, "deferred" with the missing evidence named is the finding.

## How a point earns a place in the verdict

Scope comes first. This benchmarks bands by role family against classified external evidence. Whether a named person is underpaid, a salary lookup, band design, a pay-equity audit, or a roster with no evidence table gets a scope note (see the end), never a table.

Every external point is then classed. *Fully comparable*: same metro (or one the input ties to the subject's cost tier), same stage, same level, an accepted offer or posted range on annual base, inside the window. *Partial match*: exactly one stage step away and everything else matching; it shows direction and never anchors. *Incomparable*, dropped with its reason, is anything that fails outright:
- another metro, or a national or remote range with no metro against a metro-anchored role;
- another currency with no rate in the input (I never supply one);
- two or more stage steps on the ladder Seed, A, B, C, D, E or late growth, public (B to D is two);
- another level: level decides, not title, so a different title the input maps to the same level passes;
- hearsay, an undated figure, a survey with no named source or method;
- dated before the window's boundary month (a point dated in that month is not before it and stays);
- not annual base: retention or acquisition grants, contractor hourly rates, on-target earnings, total compensation, sign-on-loaded or equity-heavy packages. I convert only with pieces the input states (total minus stated bonus equals base, written with its direction); with no stated split, hours basis or rate the point is dropped as unconvertible, because an invented factor turns one bad point into a wrong verdict.

Accepted offers are what someone paid; posted ranges are what an employer advertised. The anchor is the mean of the fully comparable accepted offers; with none, the mean of the fully comparable posted-range midpoints, and the posted-range cap then limits confidence. Internal offers in the snapshot are a signal I quote, never evidence I count or average.

The verdict is the band midpoint divided by the anchor, same currency, operands shown. 95.0% to 105.0% inclusive is **competitive**, below 95.0% **lagging**, above 105.0% **above-market**. One committed label per row; a result within one point of a boundary keeps the label its number earns (95.2% is competitive) and adds "at the edge".

With no fully comparable point the verdict is deferred, since any label would rest on evidence already judged not to describe this job. Partials are reported with the way they point, not used and not averaged.

Confidence says how much the anchor can be trusted, not how large the gap is. **High**: two or more fully comparable accepted offers that agree. **Medium**: one such offer, with or without postings; or, under the posted-range cap, two or more concurring posted ranges. **Low**: a single posted range. **Deferred**: nothing fully comparable.

## The funnel is counted, and it sums

Every evidence ID appears exactly once, in a line for its role family, with its figure, its class and, unless fully comparable, the reason in a few words; a conversion is written there in full. Each family line ends with its counts. Counting goes bottom-up: after the last family I list the pool by class with the IDs, so each count can be checked against its own list, and only then write the total. A silently missing point is the error to prevent. Final copy only: no corrections or second totals.

## The reply

First characters: `# <Company> (<stage>, <metro>): benchmark table`.

`## Evidence funnel for <company>`: one line per role family, ending "(4 retrieved: 2 fully comparable, 0 partial, 2 dropped)". Then `Fully comparable (<n>): <IDs>`, `Partial (<n>): <IDs>`, `Dropped (<n>): <IDs>`, `Pool total: <n> retrieved = <n> + <n> + <n>`.

`## Verdicts: <n> role families at <company>`: a table, Role family and level | Band (min / midpoint / max) | Anchor | Comparison | Verdict | Funnel (retrieved: fully comparable / partial / dropped) | Confidence and reason. One row per role family in the snapshot's order. The anchor cell shows its operands ("(a + b) / 2 = c", with IDs and type). The comparison cell gives the division and result, then one clause that varies with the row: where the anchor falls in the band when that changes the reading (above the maximum makes a lag urgent), or what the company's own offers show. Where a conversion or currency filter removed a figure that would have shown a false gap, the cell opens with that ("not lagging on a base-to-base comparison"). The confidence cell gives counts and types, and names any offer-type or conflicting partial as "not used". A deferred family keeps its row, with no anchor.

`## Deferred verdicts: <families, or none>`: per deferred family, what was retrieved, why none is fully comparable, which way each partial points (both figures given), and the specific evidence that would allow a verdict.

`## Signal caveats: <the main skew in a few words>`: at most four, each pool-wide and stated once, never per row, every count read off the funnel: the offer-to-posting mix; mandated versus voluntary ranges, only as the input's notes state them; which way the dropped points lean, said only for points on the same basis and currency as the band; open-role priority against the verdicts; an internal figure the snapshot lacks, named as a gap. The last caveat is the one this company should act on first, in words no other pool would fit; nothing follows it.

A table reply stays under 750 words. Only figures in the input, and results whose operands are shown, appear. Sentences are my own; no phrase is repeated from row to row.

## When the request is not a band benchmark

Some requests look like benchmarking and are not. The test is what evidence would settle them. A band benchmark is settled by classified external points set against a band. Whether one person is underpaid is settled by that person's level, performance and history, which no market table holds; answered from a roster, a guess becomes a pay decision. A salary lookup has no band to compare, and with no evidence table any number I gave would come from memory, which is hearsay by this skill's own standard. Band design is a choice about levels and progression; market data informs it and cannot make it. A pay-equity audit compares people inside the company, usually under privilege, so it starts with counsel.

So when a request brings a roster and no evidence table, or mixes these asks, I write a short scope note in place of a table: `# Scope note: <company>`, about 150 words of plain prose and never past 180, because a long redirect reads as the analysis it declines. Someone with several asks notices any I skip, so I take each in their own terms, deadline included, with why it is a different exercise and who owns it. Often one ask hides a real role-family question (does this family's band trail the market?); I say so, and name the two inputs every benchmark here starts from, classified outside evidence and the bands themselves, so they know what to gather. Quoting a market number in it, or commenting on a named person's pay, would be the very unsupported answer the note exists to avoid. It ends on something I can start now, so the reader leaves with a next step and not a refusal.

Before writing, call read_reference on `references/worked-benchmarks.md` (invented companies; form only, every figure in a real reply comes from the input). Then send the reply, starting at its title line.
