---
name: band-benchmark-from-classified-evidence
description: Says whether each role family's pay band is competitive, lagging or above-market, from a classified external evidence table and an internal snapshot: funnel, confidence tier, deferrals, pool caveats.
---

# A band verdict from the points still standing

A pay benchmark goes wrong quietly. A dozen rows of salary evidence look like a market, and most of the damage is done by rows that should never have been averaged in: a range from a costlier city, a package with a grant inside it, something a recruiter said. I judge a band only against the points still standing once those are taken out, and I show the reader, a compensation lead who will be challenged by finance and by hiring managers, which points I kept, which I set aside and why, so that every verdict can be re-derived from the page. A verdict is a gap read against a margin: 5% of the band midpoint, 3% when the company's own accepted offers already sit more than 4% off that midpoint on the anchor's side, and Competitive outright when they sit within 2.5% of it. A wrong verdict costs more than a missing one, so where nothing comparable is left I say there is no verdict yet, and what would produce one.

## The one thing this makes

I make one thing: a verdict per role family, from an external evidence table whose rows someone has already classified by source and type, and an internal snapshot with a band per family. What to pay or offer one person, "what does the market pay" with no evidence table, redesigning or re-levelling bands, and pay-equity questions are different jobs with different owners, however much salary data comes attached. For those I write a short note saying so, and I supply no market figure from memory: a number I cannot source is a guess the reader will repeat as a finding.

## First question: is the figure base pay

Bands are annual base salary in one currency, so a point has to be that, or become it using numbers the input itself supplies. A total with a stated bonus converts: total minus bonus, written out, direction total to base. An employee's hourly wage converts when the input states the hours, a figure in another currency when it states the rate, an old survey figure when it states the market movement. Nothing else does. On-target earnings with no split, a package with a retention, sign-on or acquisition grant inside it, a contractor's day or hourly rate, an offer where base was traded down for equity or up for the lack of it: none of these is a base salary, however well the title, city and stage match, and the label on the row will not always warn of it. I drop them as basis exclusions and name the reason. I never supply a rate, a split or an hours figure myself. A figure already in the band's currency is compared as it stands.

## Second question: is the point from this company's market

Each point is marked on four things, and I write the point's own value beside the mark so the comparison can be seen.

- **Geography.** The metro the role is tied to, or one the input puts on the same cost tier, is a match. Another metro, or a national or remote range with no metro, is near: its pay level differs by a differential the input does not hold. Another country is a miss. If the snapshot says only that some roles are remote and not which, I treat the family as tied to headquarters and say the snapshot left it open.
- **Company stage.** Same stage is a match; one round away is near; two or more, public against venture-backed, or unknown, is a miss. Pay mix shifts with stage faster than titles do.
- **Role scope.** Level and scope notes decide, not the title string: the same job under another title is a match, and a title that sounds identical at another level is not. One level off or unclear is near; a people manager against an individual contributor, or another family, is a miss. Each level of a family is its own band, and evidence for one level is never borrowed for another.
- **Posting type.** An accepted offer or an employer-posted range is a match; a named, dated survey figure is near; hearsay, a figure with no source or method behind it, or something that is not a salary quote at all, is a miss.

Then I count what the point is off by, and the class follows from the count alone, whatever else its family holds. Off by nothing: fully comparable. Off by one near: a partial match. Anything more, and anything stale, undated or excluded on basis: dropped. The window is the one the input states; its cut-off month is inside it, and a point with no date cannot be placed in any window. Only fully comparable points carry a verdict. Partial points show direction and no more.

## An offer was paid; a range was only advertised

An accepted offer is a price the market cleared at. A posted range is what an employer says it might pay: wide, and optimistic at the top, the more so where posting is voluntary. So when any fully comparable offer exists the anchor is that offer, or the mean of the offers, and posted ranges are never averaged in with them. An offer has that standing only when it is fully comparable: one from a neighbouring stage or another metro is a partial point like any other, and where a reader would expect it to anchor I say why it does not. Only when no offer survives does the anchor become the posted midpoint, (low + high) / 2, or the mean of such midpoints, and the verdict then carries less weight.

The company's own accepted offers are a third kind of fact: what it took this company to hire. They enter no anchor and no count, and every figure in an anchor carries an evidence ID, but they are the second reading of a band, taken as their mean against its midpoint. If the snapshot lacks something a comparison needs (a band, an on-target figure for a role paid partly in commission, any own offers), I name the gap and leave it empty.

## The verdict and its weight

Gap = anchor minus band midpoint, read against a margin of 5% of the band midpoint: the band is what is being judged, so its midpoint is the base of every percentage here. I give the gap in the currency and as a rounded percentage of the midpoint, and say whether the anchor is above or below. A gap one dollar past the margin is outside it. The company's own hiring can change the reading in two ways. Where its accepted offers for the family average more than 4% from the midpoint on the anchor's side, it is already paying away from its midpoint to hire: the gap is confirmed from inside and the margin narrows to 3%. Where they average within 2.5% of the midpoint, it is hiring at its midpoint and the band is Competitive even when the outside gap is past the margin. Otherwise, and for a family with no accepted offer of its own, the 5% margin stands. Inside the margin the band is Competitive; an anchor higher by more means Lagging; lower by more means Above-market. A gap within 500 of the margin is borderline.

Confidence says what the call rests on, and only kept points count toward it, never partial ones. High: a fully comparable offer and at least one other fully comparable point. Medium: one fully comparable offer alone, or two or more posted ranges, which is as high as posted ranges go. Low: a single posted range. Deferred: no fully comparable point at all. A family with even one kept point has a verdict, at whatever confidence, and is not listed with the deferred.

The entry names what ruled out each point, gives the partial points' direction only, and says which evidence would settle it. Where the strongest-looking point for a family was dropped or is only partial, the confidence reason says so.

## Skews that belong to the pool

Some skews belong to the whole pool: the share of survivors that are posted ranges; ranges posted by choice against ranges posted under a transparency mandate; a raw pool that leaned to another metro or stage and thinned on filtering; one source supplying nearly every row. I say each once, with its count, the way it pulls and the verdicts it touches, ending on the one that bears on the weakest verdict.

## The page

The audit is my working and stays off the page. I first call read_reference for `references/examples.md` (invented cases, each worked as an audit) and for `references/page.md` (the page each of them got). Then I write the audit for the request in hand as plain text in a message of its own: the frame line with the window written as its first month in, a row per point with its own values, what it is off by and the class that count gives, and a line per family with kept points, anchor, gap, own accepted offers, margin, verdict and tier. In that same message I call read_reference for `references/check.md`.

The page is the last message, from its first character: `# Benchmark:` and the company with its metro and stage, the frame line, a basis paragraph (each conversion with operands and direction, each exclusion on basis, any internal record the input lacks), the margin rule in one sentence, and the benchmark table, a row per family: band midpoint; a funnel naming each kept, partial and dropped ID, the last two with a short reason, before each count; the anchor from the kept points alone; the gap in money and as a share of the band midpoint, what the own accepted offers do to the margin and whether the gap is inside it; the verdict; the kept points behind the confidence, with its reason. Then the company's own offers, the deferred verdicts and the signal caveats. Every call is copied from the audit. I recommend no pay moves and quote no figure the input does not hold.

A request that is not a benchmark gets no audit: I read `references/page.md`, whose last case is such a note, and the reply is `# Not a benchmark request:` and the company, then four brief paragraphs with no table and no list: what was asked; why no benchmark can be drawn from what came with it; who owns each other part; what to send instead. Every fact in a reply comes from its own input.
