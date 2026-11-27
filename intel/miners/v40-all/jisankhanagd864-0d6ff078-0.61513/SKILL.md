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

- **Geography.** The metro the role is tied to, or one the input puts on the same cost tier, is a match. A national or remote range with no metro is near: its pay level differs by a differential the input does not hold. Another named metro, like another country, is a miss: it prices another market. If the snapshot says only that some roles are remote and not which, I treat the family as tied to headquarters and say the snapshot left it open.
- **Company stage.** Same stage is a match; one round away is near; two or more, public against venture-backed, or unknown, is a miss. Pay mix shifts with stage faster than titles do.
- **Role scope.** Level and scope notes decide, not the title string: the same job under another title is a match, and a title that sounds identical at another level is not. One level off or unclear is near; a people manager against an individual contributor, or another family, is a miss. Each level of a family is its own band, and evidence for one level is never borrowed for another.
- **Posting type.** An accepted offer or an employer-posted range is a match; a named, dated survey figure is near; hearsay, a figure with no source or method behind it, or something that is not a salary quote at all, is a miss.

Then I count what the point is off by, and the class follows from the count alone, whatever else its family holds. Off by nothing: fully comparable. Off by one near: a partial match. Anything more, and anything stale, undated or excluded on basis: dropped. The window is the one the input states; its cut-off month is inside it, and an undated point fits no window. Only fully comparable points carry a verdict. Partial points show direction and no more.

## Paid, or only advertised

An accepted offer is revealed preference, a price the market cleared at. A posted range is aspirational, what an employer says it might pay: wide, and optimistic at the top, the more so where posting is voluntary. So when any fully comparable offer exists the anchor is that offer, or the mean of the offers, and posted ranges are never averaged in with them. An offer has that standing only when it is fully comparable: one from a neighbouring stage is a partial point like any other, one from another metro is dropped, and where a reader would expect it to anchor I say why not. Only when no offer survives does the anchor become the posted midpoint, (low + high) / 2, or the mean of such midpoints, and carries less weight.

The company's own accepted offers are a third kind of fact: what it took this company to hire. They enter no anchor and no count, and every figure in an anchor carries an evidence ID, but they are the second reading of a band, taken as their mean against its midpoint. If the snapshot lacks a band or any own offers, I name the gap and leave it empty.

## The verdict and its weight

Gap = anchor minus band midpoint, read against a margin of 5% of the band midpoint. I give the gap in money and as a rounded share of the midpoint, anchor above or below. A gap a dollar past the margin is outside it. Where the company's own accepted offers for the family average more than 4% from the midpoint on the anchor's side, the gap is confirmed from inside and the margin narrows to 3%. Where they average within 2.5% of the midpoint, it is hiring at its midpoint and the band is Competitive even when the outside gap is past the margin. Otherwise, and for a family with no accepted offer of its own, the 5% margin stands. Inside the margin the band is Competitive; an anchor higher by more means Lagging; lower by more means Above-market, a call that needs a kept offer: on posted ranges alone it is Deferred, direction stated.

Confidence says what the call rests on, and only kept points count toward it, never partial ones. High: two or more fully comparable offers. Medium: one fully comparable offer, whatever posted range stands beside it, or two or more posted ranges and no offer, which is as high as posted ranges go. Low: a single posted range; it holds only when something stands beside it, a partial point or an accepted offer of the company's own, and with nothing beside it drops to Deferred, direction stated. Own offers never raise a tier: one posted range is Low even where own hires narrow the margin or settle the call. Deferred: no fully comparable point at all.

## Skews of the pool

Some skews belong to the pool: which verdicts rest on accepted offers, which on posted ranges alone; ranges posted by choice against those under a mandate, as a row note or a line above the table says; one source for nearly every row; what was set aside. I say each once, with its IDs, the way it pulls and the verdicts it touches, weakest last.

## The page

The audit is my working and stays off the page. I first call read_reference for `references/workings.md` and for `references/pages.md`. Then I write the audit for this request as plain text in a message of its own: the frame line with the window written as its first month in, a row per point with its own values, what it is off by and the class that count gives, and a line per family with kept points, anchor, gap, own accepted offers, margin, verdict and tier, then its page cells, then two closing lines, standing and posting basis. In that same message I call read_reference for `references/check.md`, as a real tool call and never as typed text.

The page is the last message, from its first character: `# Benchmark:` and the company with its metro and stage, nothing above it; then the frame line, a basis paragraph (each conversion with operands and direction, each basis exclusion, any internal record the input lacks), the margin rule in one sentence, and the benchmark table, five cells per family: the family and band midpoint; the verdict; the anchor from the kept points alone, its gap in money and as a share of the midpoint, what own accepted offers do to the margin and whether the gap is inside; a funnel naming each kept, partial and dropped ID, the last two with a short reason, before each count; the tier and its basis. Then own offers and open roles, the deferred verdicts (a heading even when none is, saying so) and the signal caveats. Every call is copied from the audit. I recommend no pay moves and quote no figure the input lacks.

A request that is not a benchmark gets no audit: I read `references/pages.md`, whose last case is such a note, then list in a message of its own what is asked and where each part goes, calling read_reference for `references/check.md`. The reply then starts at `# Not a benchmark request:` and the company, then four brief paragraphs with no table and no list: what was asked, with any date it is wanted by; why no benchmark can be drawn from what came with it (a pay list neither confirms nor rebuts that anyone is underpaid); who owns each other part; what to send and which points count, what to gather first for the date, and that named salaries stay unshared. Every fact comes from the reply's own input.
