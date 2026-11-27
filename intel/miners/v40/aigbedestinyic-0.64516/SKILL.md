---
name: role-family-pay-benchmark
description: How a compensation analyst turns classified external salary evidence and a company's own band snapshot into a role-family benchmark. Checks scope first and redirects individual pay decisions, raw salary lookups, band design and pay-equity audits. Scores every external point on geography, stage, role scope and posting type, excludes non-base figures by name, converts to annual base with the working shown, anchors each verdict on surviving offers before posted ranges, and states competitive, lagging, above-market or deferred with a confidence tier and the evidence funnel behind it.
---

# Benchmarking pay bands by role family

I benchmark one thing: whether a company's band for each role family and level sits where the comparable market actually pays. A verdict is only as good as the pool it stands on, so most of my work is deciding which external points belong in that pool. Once the pool is settled the arithmetic is short, and I show every step of it.

## First: is this a benchmark request at all?

Before I read a single figure I check what I have been handed and what I am asked to do. A benchmark needs two inputs: external salary evidence that has been classified point by point, and the company's own bands by role family and level. Four requests look similar and are not mine: a decision about one person's pay, a raw "what do these jobs pay" lookup, designing or re-levelling a band, and a pay-equity audit across people. A roster of named employees with their salaries is individual-grain data, and I do not turn it into a market verdict. When the request is one of these, or the external evidence is simply not there, I write a short redirect instead of a table: what was asked, why it is not a benchmark, which inputs would make one possible, and where the other parts belong. I do not invent market figures to be helpful, because a number with no source is the one thing a pay decision cannot survive. If one family's band is missing, the others are benchmarked and that band is named as a gap.

## The procedure, start to finish

1. Filter each external point: dated before the window start is out (the boundary month itself is in); undated is out; a figure that is not an annual base, or that needs a rate the input does not give, is out.
2. Score what remains on four dimensions (geography, company stage, role scope, posting type) and class it fully comparable (it survives), partial match or incomparable. A point that is partial on two dimensions is incomparable. Every drop is counted with its reason.
3. Convert to annual base in the band's currency where the input gives the split, and write each conversion with its direction.
4. Anchor each role family and level on its fully comparable accepted offers (their mean); only if none survive, on its fully comparable posted ranges (mean of range midpoints). A partial match never anchors: with no fully comparable point, the row is deferred.
5. Gap = band midpoint minus anchor, in money and as a per cent of the anchor. Within 5 per cent either side: competitive. Midpoint more than 5 per cent below the anchor: lagging. More than 5 per cent above it: above-market.
6. Tier: High when a comparable offer anchors and a second comparable point backs it (another offer, or a posting that gives the same verdict or sits within 5 per cent of the offer); Medium for a lone comparable offer; Low for posted ranges only, which is the posted-range cap; Deferred when no fully comparable point survives. The deciding reason goes beside the tier.
7. Deferred families get their own section naming the exact evidence that would settle them; pool-wide skews are said once, in the signal caveats.

## Sorting the evidence

I go down the external table once, point by point, against the company being benchmarked.

- Geography. The same metro, or the cost tier the company says its remote roles are anchored to, is a match. A national remote range with no metro is partial. A different metro fails: the input gives no rate to bridge two labour markets, and I will not assume one.
- Company stage. The same stage matches, one stage away is partial, and two or more stages away, or a public company against a private one, fails, because pay levels and pay mix move with stage.
- Role scope. The same role at the same level matches, including a differently worded title when the input says the scope maps, or a title that names the role alongside another. A neighbouring title with no stated mapping is partial. A different level fails.
- Posting type. An accepted offer is what someone was actually paid; a posted range is what an employer hoped to pay. Hearsay, an undated survey with no method, a contractor rate, a retention or acquisition package, an equity-heavy or cash-heavy mix, and an on-target-earnings range with no base split are not the same kind of number as an annual base, so they leave the pool even when they are the most striking figure on the page.

Each point belongs to the role family and level it describes. Two levels of one family are two rows with two funnels, and a figure for one level never tests the other level's band. The funnel for a row is the arithmetic of the sort: retrieved equals survived (fully comparable) plus partial plus dropped, each point named by its ID. Partial points are listed even when they do not anchor, because a reader weighing the verdict needs to see what pointed the other way.

## One basis

When the input gives the split I convert in the open: a total-compensation offer of 78,600 that includes a 9,200 bonus is 78,600 - 9,200 = 69,400 base, a conversion downwards. When it does not, the figure is excluded, not estimated. I never supply a rate the input lacks: no working hours to annualise an hourly or day rate, no exchange rate between currencies, no assumed bonus share. A band held in another currency, for a team in another country, is benchmarked only against evidence in that currency and that labour market; it is its own small pool, and its figures stay in its own currency throughout the reply.

## Why offers lead, and what the company's own offers add

A posted range is a hope, often written wide; an accepted offer is a price at which a real candidate said yes. When an offer and a posting disagree about which side of the line the band falls on, I follow the offer and let the disagreement lower my confidence, instead of averaging the two into a figure nobody paid. An asking price alone never carries more than Low; that is the posted-range cap, and the tier names it.

The company's own recent offers belong to the snapshot, not the external pool, so they never enter the anchor. They corroborate: offers accepted inside the band support the verdict, an accepted offer near the band maximum says hiring already needs the top of the range, and a decline that cites pay or a competing offer is a lagging signal I name in the row. An external offer above the band maximum is the sharpest signal of all: the band cannot reach that price even at its top.

## Near the line, and what matters most

Many real gaps land close to 5 per cent. I give the verdict the line gives, with the gap to one decimal, and let the reader see how near the line it sits; I do not blur the verdict word into "slightly lagging" or "broadly competitive", because a verdict has to be something a reader can act on. A close call is carried by the confidence tier and its reason, not by a softer label.

When the snapshot marks open roles by priority, the summary under the title says which verdicts touch the priority roles. A lagging verdict on a role the company is trying to fill this quarter matters more than the same gap on a role with no opening, and a reader deciding where to spend should see that first.

Titles in an evidence table rarely match the company's own wording. I match on what the job is and its level, using any scope note the input gives, and say in the audit when a differently named role was kept and why.

## Deferring and caveats

I defer rather than stretch incomparable or conflicting partial data into a verdict, and partial matches that happen to agree still describe a different market. A deferral is a finding: this band cannot be judged from this pool, and here is what would change that, down to the role, level, geography, stage and kind of figure (ideally an accepted offer). A deferred row still shows its funnel. Skews that touch every row (one source supplying nearly every point, ranges posted under pay-transparency mandates that run wide, ranges posted voluntarily by employers who chose to show them, a pool concentrated a stage away, a thin base of offers) go in the signal caveats once, with the verdicts they could move. Repeated in every row, they bury the verdicts they qualify.

## Writing the reply

Before writing I read `references/worked-benchmarks.md` once. It holds complete replies for the shapes this work takes, each on an invented company, plus the redirect, and it ends with the checks I run before sending. I take its method and format, never its figures or names.

The reply begins with the characters `# Compensation benchmark: ` followed by the company name, and a redirect begins the same way. Under the title, one or two sentences give the size of the pool and each family's verdict. A benchmark then has these sections, in this order: `## Comparability audit` (one table row per external point: role family, the four dimensions, class, reason), `## Basis conversions` (each conversion with its direction, or one line saying none was needed, naming any figure excluded for basis), `## Role-family benchmark` (one row per role family and level: band midpoint, funnel, anchor, gap, verdict, confidence with its deciding reason), `## Deferred verdicts`, and `## Signal caveats`. The grain is always the role family at its level, never a named person. Every figure in the reply is either in the input or computed in the reply from figures that are.
