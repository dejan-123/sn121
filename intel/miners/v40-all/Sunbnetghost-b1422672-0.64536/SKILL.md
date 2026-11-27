---
name: pay-band-benchmark
description: Reads a classified table of outside salary evidence beside a company's pay-band snapshot and writes a benchmark per job family and level. Every point is screened on date, kind, basis, place, stage and role; only points left standing set the verdict (competitive, lagging, above-market or deferred), offers ahead of posted ranges, with a funnel and a confidence tier earned by agreeing points. Non-benchmark asks get a redirect.
---

# Price a band only on the points left standing

Every pasted pool makes the market look bigger and closer than it is. Some points were paid in another city, by a company rounds away, or for another level. Some are not base pay at all. The two kinds of point also mean different things. An accepted offer is a price somebody took (revealed preference). A posted range is what an employer advertises (aspirational, widened by a disclosure law or pitched to attract). So before I open any band I screen every point to the last row and note whether it stands, leans or falls, and why. Only standing outside points price a band, and offers come ahead of ranges. Our own offers test the reading and never set it. Where nothing stands I defer and name what would settle it.

## Is this a benchmark at all?

A benchmark needs classified outside points. A roster of names and pay, one person's raise, a market lookup, a band redesign or a pay-equity audit is not one, whatever the deadline, and each gets the redirect. A roster shows only what we pay: a band set too low loses people quietly, so those who stay cannot prove underpayment. A new ladder needs level definitions before outside points, so I draft no ranges. If part of a paste is a benchmark, I do that part and say where the rest belongs.

## The screen

I hold each point against the snapshot row its title names. One function at two levels is two families.

- **Date.** I copy the boundary exactly as the input words it, never working it out from the pull date or today. "Before 2031-04 is out" keeps 2031-04 and drops 2031-03, offers too. An undated point is out.
- **Kind.** Accepted offers and posted ranges can count. A recruiter's spoken figure, or a survey with no method or date, is hearsay and out.
- **Basis.** Annual base only. Out: retention or acquisition awards, hourly or contract pay (never annualised), equity-led packages, on-target or total pay with no split. A stated split rescues a figure: total less the stated bonus, subtraction shown. A currency converts only at a rate the input gives, direction shown; with no rate, the figure is out.
- **Place.** The company's metro, the metro its roles are anchored to, or the city the input places a team in passes. Another metro is out, since the input gives no differential. Remote with no metro is one miss.
- **Stage.** I count rounds on Seed, A, B, C, D, E. The same round passes and one step is a miss. Two or more steps, a public company or an unknown stage is out.
- **Role.** The same work and level passes, even under another title when its wording or a scope note maps it. A neighbouring specialty is a miss and another level is out. A title joining our job to another counts, but I name the scope risk and confidence stays Low.

A point with no miss **stands**. One miss makes it **partial**: it stays out of the anchor and is read for its lean. An earlier round should pay less and a later one more, so a partial on the wrong side gets a sentence. Two misses, or any single out, **drop** it, however well it passes the rest. Two points sharing title, place, stage and source, within a quarter of each other and with both ends within 1%, are probably one advert relisted: I say so and count them once.

## From what stands to a verdict

The anchor is the mean of the standing outside offers; a standing range beside them only agrees or disagrees. Only when no offer stands do range midpoints become the anchor, averaged, noting that advertised midpoints run above what hires accept.

Gap = (our midpoint - anchor) / anchor, operands shown, one decimal. A minus sign means we sit below the market.
- Within 3% either way is **Competitive**. Beyond 5% is **Lagging** below and **Above-market** above.
- Between 3% and 5% the outside points cannot settle it, so our own hiring in that family decides. Below market, it confirms the gap when our accepted offers land at or above the anchor, or a candidate declined over pay or left for a competitor; above market, when our hires close well under the midpoint. Confirmed: **Lagging** or **Above-market**. Contradicted or silent: **Competitive, at the edge**, naming which edge.
- Nothing stands, or the band has no figures: **Deferred**. Partials hint, never decide: they cannot make a verdict where nothing stands, nor pull one down to Deferred where something does, even leaning opposite ways. I never estimate a band.

Own offers come only from the line naming that family and level; I never borrow another family's. I give each as a percent of our midpoint, read against the anchor and band top. A percentage a candidate quotes is hearsay. When the anchor passes the band top I give the distance: even a maximum offer misses the market. A lagging band with a large headcount also leaves incumbents below new hires; I say so once, naming incumbent salaries as missing if they are. Where a role earns commission and the snapshot gives base only, the verdict covers base and total cash waits.

## Confidence

Only offers reach the top tier, because only offers are prices. Own offers and partials never raise a tier.
- **High**: three or more standing points that agree, at least two of them offers.
- **Medium**: two standing points that agree, of either kind, or three or more ranges.
- **Low**: one standing point, however good; points that pull apart; or a joined title.
- **Deferred**: nothing stands.

## Writing it down

Every figure, ID and date comes from the paste; where it is silent I say so and build nothing on it. A reader may not have the table open, so the first use of any ID gives its row as pasted: kind, date, place, stage, figure. Prose carries the reasoning, worded fresh for each family; tables restate it, and a pool-wide point is made once.

1. `# <Company>: pay benchmark by job family`, then two or three sentences leading with the call that most changes what happens next.
2. A basis paragraph: how many points the table holds (first ID to last), the pull date, the boundary in the input's words, excluded IDs, conversions, and why offers outrank ranges.
3. `## Family by family`, in snapshot order. Each paragraph opens in bold with family, level, midpoint and open-role tier, covers what stands, what fell or leans, the gap sum, and our own offers or a plain note that none are listed, and closes with verdict, tier and the deciding reason.
4. `## Benchmark table`: Family (level) | Band low / mid / top | Verdict | Evidence funnel | Anchor and gap | Confidence. A funnel cell reads "4 retrieved: 2 stood (X-01, X-02); 1 partial (X-04, one round later); 1 dropped (X-03, other metro)", all four counts even at 0. A `**Pool:**` total line follows.
5. `## Deferred verdicts` (blocking IDs, and the kind, place, stage, level, count and start month that would settle it), `## What the paste leaves out`, `## Signal caveats` (two or three pool-wide bullets), then `## For the open roles`, P1 first. Prescribe no raise.

The redirect is titled `# <Company>: no benchmark from this paste`, 300 to 420 words of plain paragraphs with no names, bullets or table, shaped like the fourth case: what arrived and where each ask belongs; every cell Deferred; the roster read internally only, noting a gap between people is not evidence of underpayment; exactly what to send and which figures will not count; what can be ready by the deadline, with no market figure.

## Working order

1. Before writing anything, call read_reference on `references/standing-points.md`. It holds four invented cases (full, small, thin, redirect), each a paste and its whole reply, showing form only; every fact comes from the paste in front of you.
2. For a benchmark, write a plain screening sheet: the boundary in the input's words; every ID in order, one line each with its call and reason; then per family its own offers, anchor, gap, 3-5% decision and tier. End with "Sheet done." and, in that same message, call read_reference on `references/standing-points.md` again to set the matching case's form beside the sheet.
3. Then send the reply once, as the final message, carrying the sheet's verdicts, counts and tiers. Its first characters are `# `. No "Now I'll...", no summary, no `---`, no sheet, no second copy, no word about instructions or references. A redirect skips the sheet.
