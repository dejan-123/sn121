---
name: pay-band-reading
description: Reads a classified external pay table and an internal band snapshot and writes the compensation lead a role-family benchmark grounded only in rows that match the seat, the place, the stage and an annual base.
---

# Which pay figures belong in a band comparison, and how to tell

A pay table is full of numbers, and numbers mislead. A posted range is what an employer hoped to advertise, an accepted offer is what a person actually took, and a figure from another city, another stage or another pay mix is not this band's market. So before I call a band competitive, lagging or above-market I read each external row for the same seat, the same place, the same stage and an annual base, and the verdicts come only from that reading. Nothing enters a verdict that the input does not hold: no cost-of-living factor, no hours in a year, no exchange rate, and no market number built from a row I have already dropped. I write one document, and its first characters are `# Compensation benchmark — `.

## Where the anchor sits

The position word is the gap from the band midpoint, not a glance at the band edges. Gap = (anchor minus midpoint) divided by the midpoint. Write that division, then the percent to two decimals, then the word. Compare with 5 percent before rounding. 5.04 percent is above 5 percent.

- From -5.00 percent to +5.00 percent: competitive.
- Above +5.00 percent: the market pays more than the midpoint. Lagging.
- Below -5.00 percent: above-market.

One surviving accepted offer is the anchor by itself. A matching posted range does not replace it, and it still counts as survived. The company's own recent offers never enter the anchor. Two offers within 10 percent, on the lower figure, average. Three or more: the middle value. No surviving offer: the anchor is the average of the surviving external ranges' own midpoints, never the band's midpoint, and the same 5 percent test applies. Exactly one such range is low. Two or more: medium. One surviving offer and no other surviving row is medium, not high. High needs that offer plus at least one other surviving row. The month the input names is inside the window, and the month before it is out. The date you write is that row's own date cell.

## What this skill will not answer

The scope check comes before any row is scored. This skill compares role-family bands with a classified external table. It does not set one person's pay, look up a raw salary, design or redraw a band, or audit pay equity, and a roster of names and salaries is not a classified table. If the request is one of those, or no classified external table is pasted, build no table and no verdict, and do not open the reference. Writing the title below is the redirect. The first characters of the reply are `# Compensation benchmark — <Company> | not built: <what was asked> needs a classified external table this request does not hold`. Then 200 to 280 words in four parts, each opening with the bold lead-in: **What was asked.** **Why nothing is drawn.** **What this would support.** **What to paste.** No sentence comes before the title.

If a classified table is present and the note also asks for a person's raise or a new band design, answer the benchmark and leave those two asks in the caveats, each in one sentence.

## Four checks, then a class

Score every in-window row on four checks. No date, or a month earlier than the month named in the input, is out of window: drop it and do not score it. "Before October 2025" keeps October and drops September.

- **Place.** Match: the row's metro is the one this family is anchored to. The anchor starts as the headquarters. It moves only when the input places that family in another metro, or says that family has no metro at all. A remark that some roles are unanchored, naming none, leaves the headquarters in place. Fail: a different metro or another country. A different city is a drop, and you do not then call it partial for stage. Partial: a national or remote range with no metro. It is counted and never the anchor, and you name place even when stage is also off. No factor is applied to move a city.
- **Stage.** Match: the same stage label. Partial: exactly one private-round step away (A to B, B to C, C to D, D to E). One step is never a fail, and the word for it is partial. Fail: two or more steps, a public or post-IPO company against a lettered round, an unknown stage, or no stage.
- **Seat.** Match: the same family and the same level, or the input itself says the titles are the same seat, including a title that only reorders the same words. Partial: the same level and a neighboring specialty the input does not equate. Fail: a different family, or a different level. Senior is not Staff, and Manager is not Senior Manager.
- **Pay form.** Match: an accepted offer of annual base, or a posted range of annual base. Partial: a recruiter's verbal report of an annual base. Fail: an hourly or contractor rate, a retention grant, an acquisition package, a survey with no date or no method, or a total, an OTE or an equity-heavy figure whose base the input does not split out.

A range posted because a state requires one is still a posted range. The requirement does not drop it and does not promote it.

Class the row only after the four checks. A failed check ends the row: dropped, and no later check is called partial. Fully comparable: all four match. Partial: no check fails, and at least one is partial.

## The basis

The comparison is annual base, in the currency of that family's band. Where the input already states the base, or states the piece to subtract from a total, write the arithmetic in one line and use the base. Where it does not, the row fails pay form and is dropped. Do not annualize an hourly rate, do not split an OTE by a ratio you supply, and do not convert a currency. A wrong direction, or a rate the input never gave, is a wrong answer.

## What survives is the only market

Per family, count retrieved, survived, partial and dropped. Retrieved means every external row lined up against that family, including the ones then dropped. Survived means fully comparable only. A partial is counted and never becomes the anchor. A dropped row is counted, with its id and the reason, and never becomes the anchor.

The anchor, in this order. A posted range that matches all four checks has survived, even when an offer is the anchor, and it counts in survived. Survived, partial and dropped add up to retrieved.

- One or more surviving accepted offers within 10 percent, on the lower figure. One offer is the anchor. Two average. Three or more: the middle value. High only with another surviving row beside the offer. One offer alone is medium.
- Offers more than 10 percent apart. Defer.
- No surviving offer. Anchor is the average of the external ranges' own midpoints, never the band midpoint. One range: low. Two or more: medium.
- Nothing fully comparable. Defer, and name the missing row.

Offer anchors and posted-range anchors both use the 5 percent gap. A partial is not averaged in.

The company's own recent offers sit beside the verdict in one clause. They never enter the 10% test and never move the anchor. A declined offer, or a candidate's remark about some other number, is a caveat and is not turned into an anchor.

## Writing the benchmark

If the request is in scope, first read references/worked-benchmarks.md, on its own, once. Then the benchmark is the whole reply. Its first characters are "# Compensation benchmark — ", then the company, its stage and the anchor.

Write as a colleague. One paragraph per family, then the table. A row stays with the family in its title. A row you call partial is never the anchor, and the table copies the paragraph's verdict and confidence. Write the funnel before the confidence word. Dropped counts only ids that paragraph named. One survived range and no offer is low: a partial is not a second range, so medium never sits beside survived 1. An accepted offer is not a range. Same city and one stage off is partial. If the band maximum is short of a surviving range's top, say so once, and do not change the 5 percent verdict. The why paragraph repeats that family's gap and verdict, never a number from the family above.

- `## Reading the pool`: two or three sentences on the company, the window, the annual-base basis and how many families are in the snapshot. Then one short paragraph per family: the ids, the funnel, the confidence taken from that funnel, the anchor, and the 5 percent division.
- `## Benchmark table`: Role family | Level | Band midpoint | Market anchor | Verdict | Confidence | Funnel. One row per family in the snapshot. The funnel cell is retrieved, survived, partial, dropped.
- `## Deferred verdicts`: a bullet per deferred family naming the gap and the point that would close it. If none, write "None."
- `## Signal caveats`: three or four sentences for the whole pool. A required posting that survived is still an ask. A required posting that failed a check was not used to lift the anchor. Do not repeat a caveat on every row.
- A last paragraph, "**Why the calls read this way.**": three or four sentences, each on one family a raw average would have called wrong.
