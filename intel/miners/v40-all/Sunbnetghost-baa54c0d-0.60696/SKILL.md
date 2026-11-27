---
name: pay-band-market-position
description: Turns a classified external pay-evidence table and an internal band snapshot into a benchmark by job family and level. Each point is screened for kind, date, money basis, place, funding round and level. Only the survivors, put on one annual-base basis, decide each family's Competitive, Lagging or Above-market verdict. Each verdict comes with its evidence funnel and a High, Medium, Low or Deferred confidence reason, followed by deferred families and caveats that apply to the whole pool. A paste with no classified evidence gets a short redirect.
---

# Only comparable money gets a vote on a pay band

An evidence table looks like more market than it holds. Some rows were paid in a dearer city or by a company several rounds away. Some are not salary at all: a grant folded into a total, a contractor's hourly price, a figure a recruiter mentioned. Even the two honest kinds say different things. An accepted offer is revealed preference, the price a candidate actually took. A posted range is what an employer says it might pay, drawn wide and hopeful at the top. If I averaged the raw pool, a band would move on a gap that is part geography and part rumour. So before I look at any band I read every row, down to the last, and decide whether it votes, leans or is set aside. Only votes reach a verdict. A family with no votes is deferred, because a wrong verdict moves money and an honest gap does not. Every figure I write is in the input or comes from a sum I show.

## Five questions for every point

I test each point against the one snapshot row its title and level name. Two levels of one function are two families.

- **Kind.** Accepted offers and posted ranges count. Hearsay, an unnamed or undated survey, or anything that is not a pay quote is set aside, because nothing stands behind it.
- **Date.** I use the window the input states. A point dated in the first month inside it is in. A point from the month before is out, even if it is an offer. An undated point cannot be placed, so it is out.
- **Money.** Bands are annual base. When the input states the bonus inside a total, I subtract it and write the sum as total minus bonus. These are out whatever their label says: on-target pay with no split, a package holding a retention, sign-on or acquisition grant, an hourly or contractor rate (no hours are given, so I never annualise it), and base traded for equity. Another currency converts only at a rate the input supplies, and I show the direction; with no rate the point is out. A family banded in another currency is read in that currency.
- **Place.** The company's metro matches, and so does the metro the input ties its remote roles to. Another metro is one miss, and so is a remote range naming no metro. Another country is out. If the input says some roles are remote without saying which, I read every family at headquarters and say so.
- **Round and level.** The same funding round matches, and one round either way is one miss. Two or more rounds away is out. So is a public company, whose pay rests on liquid stock, and a company of unknown round. The same work at the same level matches, even under another title when a scope note or the title's own words map it. Another level is out.

## Votes, leans, set-asides

A point with no miss **votes**. A point with one miss **leans**: I give its figure and the way it points, but it never enters an anchor or a confidence count, even when it is an offer. It mixes the band question with a place or round difference, and the input gives no factor to separate them. A point with two misses, or one that is out on any question, is **set aside**, and I name the reason.

## Anchor, gap, verdict

If accepted offers vote, the anchor is that offer, or the mean of the offers. A voting range beside an offer only agrees or disagrees with it and is never averaged in, because an advertised middle is not a price anyone paid. If no offer votes, the anchor is the mean of the voting ranges' midpoints, each taken as (low + high) / 2.

Gap = (midpoint - anchor) / anchor, to one decimal, with its sign. A minus means the band sits under the market.

The company's own accepted offers are a second witness: what its own hires took. I work the same gap against their mean. They have no ID and never enter the anchor, the funnel or any count. A declined offer shows the band is not landing, and a percentage a candidate quoted is hearsay. I mention both but compute neither.

- **Own accepted offers listed:** the band is Lagging when both gaps are below -2.5% and Above-market when both are above +2.5%. Otherwise it is Competitive: one outside figure does not overrule the company's own hires accepting near the midpoint.
- **No own accepted offers:** the outside gap decides alone and must pass 5.5% in either direction, because one offer is one person and advertised middles run high. Inside that line the band is Competitive. I say whether the family had no hires or is simply missing from the offer list.
- **No voting point:** Deferred, whatever the leaning points suggest.

If the anchor falls above the band's top or below its bottom, I say so.

## Confidence

Only voting outside points count. **High**: a voting offer plus at least one more voting point. **Medium**: one voting offer alone, or two or more voting ranges with no offer, which is the most that ranges can carry. **Low**: one voting range. **Deferred**: no voting point. If a Lagging or Above-market call clears its line by less than one point, it is borderline and drops one tier, never below Low.

## When the paste is not a benchmark

A benchmark needs two halves: classified outside points, and bands by family and level. These are other work: a roster of named salaries, market rates with no evidence attached, one person's pay, band design or re-levelling, and a pay-equity review. Any of them gets a note of at most 230 words, with no table and no market figure, titled `# <Company>: no benchmark can be built from this paste`. It covers:
- what arrived, in its own counts;
- each ask and the work it belongs to;
- why a roster can neither confirm nor rebut a worry that someone is underpaid;
- what to send (each point's ID, source, type with offers kept apart from ranges, date, title, level, place, round, figure and basis; bands with headcount and min, mid and max; recent own offers; the window) and what will come back;
- one line on what to gather first if there is a deadline, and one on keeping named salaries out of shared papers.

If both halves are present but one family has no band or no usable point, only that family is deferred.

## How the reply reads

The title `# <Company>: pay bands against the market` is the first line. Then:

1. **What the input fixes.** One paragraph: the window in the input's words, with any boundary or excluded point named by ID; each conversion with its operands and direction, or that none was needed; any internal gap that touches a row (a family missing from the offer list, a remote anchor left open, a missing band).
2. `## Family by family`: a short paragraph for each snapshot row, in snapshot order, opening with the family, level and band in bold. It says which points vote, lean or are set aside and why, then gives the anchor sum, both gaps, the verdict and the tier with its reason. Vary the sentences from family to family.
3. `## Benchmark table`: Family (level) | Min / mid / max | Verdict | Evidence funnel (`n retrieved: n voted (IDs); n leaned (IDs, miss); n set aside (IDs, why)`) | Anchor and gap | Confidence and reason. The table only restates the paragraphs. Under it, one line adds the counts into totals for the pool.
4. `## Deferred verdicts`: for each deferred family, what blocked each point and the evidence that would settle it (type, place, round, level, date). If nothing is deferred, say which call rests on a single voting point.
5. `## Signal caveats`: two or three bullets about the whole pool, with IDs. They cover offers set against ranges; ranges posted under a pay-range law (wide by law) against ranges posted by choice (usually by confident payers), where the notes say which; one source supplying most rows; and stale or off-basis points and the families they cost. None of this is repeated in the rows.
6. **Calls a quick read would get wrong.** Two or three sentences, each naming the point that decides the call. No raises, band changes or hiring advice.

A full pool runs to about 3,500 to 7,000 characters; a thin one is shorter.

## Before you answer

Call read_reference on `references/worked-replies.md`. It holds four invented cases (a full pool, a small clean one, a thin one with deferrals, and a paste that cannot be benchmarked) with the reply each one gets. They show form only; every fact in your reply comes from the input in front of you. Then send the reply as the whole message, starting at its `# ` title: no preamble, no visible working, no mention of this skill or the examples.
