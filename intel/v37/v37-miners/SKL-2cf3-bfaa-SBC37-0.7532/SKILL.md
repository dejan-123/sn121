---
name: ic-memo-authoring
description: Writes a five-section investment committee memo from a deal-risk classification table, a financial narrative and a comparables dataset.
---

# Writing the committee memo

One analyst tiered the risks, another wrote the financial narrative, a third assembled the comparables, and none saw the others' work finished. So I read the three artifacts against each other before writing, because the committee will: a finding marked resolved in one and described as live in another is the first thing a member circles. My job is to put their work in front of the committee agreeing with itself, or to say plainly where it does not, and then what we should do, at what value, on what conditions. Every figure, name and date comes from the inputs or is computed from them in view; where they are silent the memo says "not provided" and turns the gap into a request.

## What the risk table can tell me

Tier and status are the upstream analyst's calls, and I carry both into the memo as given. I name the top tier once: it is the tier whose name says the deal cannot go ahead while the finding is open (must-address, critical, high, deal-breaker). Manageable, moderate, medium, low and informational are lower tiers whatever else the table holds. If no row sits in the top tier, nothing blocks on tier and the memo says so; the highest tier present is never promoted to fill the gap.

Status has one clearing value: an unqualified resolved. Anything qualified, pending, partial or missing is open, and so is every row of a table with no status column. An assurance from someone with a stake in the deal is not closing evidence; what closes a finding is a document from the party with the power to end it.

Then I test each resolved label against the narrative and any analyst note. If the narrative shows the matter still running, the label stands in the table, a flag rides beside it, and the recommendation reads the facts. A tier that looks wrong on the row's own words gets the same treatment: a finding tiered low that could halt the product, remove revenue the valuation counts, or reprice the deal keeps its tier, carries a flag saying why, and gets a condition sending it back to the risk analyst before signing. Changing a tier or status myself, even to the right answer, hides the disagreement from the people who must settle it. A resolved label with nothing against it stands as closed; if the row's own text still describes a live exposure and nothing shows what closed it, sight of the closing evidence becomes a condition, not a blocker.

## The verdict is read off the table

There are three verdicts: Proceed, Request more data, Pass. I settle it before drafting: thesis and conditions must agree with it.

- A top-tier row that is open, on its label or on the facts, rules out Proceed.
- If every open top-tier row can be closed by something obtainable (a signed contract, a consent, a regulator's letter, an audit opinion), the verdict is Request more data, with that item named row by row.
- Pass is rare. It needs an open top-tier row that nothing obtainable could close: a refusal already given, a prohibition in the terms or a loss already certain, with the thesis resting on it. If anyone could still close the row (a replacement, a successor, a new counterparty), the verdict is Request more data. A Pass memo says what would reopen the deal.
- With no top-tier row open, Proceed is available only when every open lower-tier row carries a named mitigation: an escrow, an indemnity, a price deduction, a retention agreement, an owned remediation. A mitigation names the instrument; its size comes from the inputs or is left to the owner, never invented. A row I cannot mitigate from the inputs sends the verdict to Request more data.

Price alone does not move the verdict: an ask above the range caps the bid at its top and never stretches it.

## Building the valuation range

**Base.** Before any multiple I fix what it multiplies, on trailing actuals; a seller's projection is named as that and never valued. The figure must survive four questions: will it recur, will it transfer to a new owner, is it reported rather than seller-adjusted, and is it on the basis the comps are quoted on? Whatever fails comes out, and the memo shows the figure before and after. An add-back is accepted only where the narrative evidences it as non-recurring; the seller's name for it is not evidence. A figure the inputs themselves call unaudited or disputed is usable but marked as such.

**Comp ledger.** I settle the set before choosing a multiple. Every comparable appears by name with its multiple, marked included or excluded, with a reason for each exclusion; none is reduced to a number in a list, and an excluded comp is out of every statistic. An acquisition multiple carries a control or strategic premium and is not a trading multiple: out. A comp that leads the set on growth by a wide gap, with the richest margin and multiple to match and often no meaningful earnings multiple, is priced as a different business from the target: out. I run the same screen at the low end, where a distressed or shrinking comp drags the set the other way. Inside the set, NM removes a comp from that multiple only. A clean set needs no exclusions, and I say so. A caveat the comps analyst left on the table is carried into the memo as a limit on the comparison it touches; I raise no other gap unless it would change an inclusion or the range.

**Multiple.** EV/EBITDA leads only when EBITDA on the base's own footing, one-time items out and no add-backs in, is positive and every included comp reports the multiple. Otherwise EV/Revenue leads: a business that loses money as reported, or a set with NM entries, is priced on revenue. Where both exist the second is a one-line cross-check on the same comps and position; if the two ranges do not overlap I say why and which one the range rests on.

**Position.** I list the included multiples in order and state the median. Growth, margin and size, and any further measure the table carries such as revenue retention, are each placed against the included set's median as above, in line or below, with the figures; within two points is in line. Where comp revenue is not in the table, size is stated as not measurable and treated as neutral. Below on something and above on nothing: the range runs from the set's low end to its median. Above on something and below on nothing: median to high end. Otherwise: the band one comp either side of the median. A factor on which the target sits outside the whole included set outweighs the rest. Each end is written multiple × base = value, and I recompute both before sending. Where a row puts a stated amount of revenue at risk, one more line shows the range on the reduced base through the revenue multiple, never by scaling EBITDA with a revenue share, and that lower range caps the bid while the row stays open. Last, the ask: its implied multiple (ask ÷ base) and whether it sits inside the range or above it. With no ask given, I write "asking price not provided" and supply none.

## Output format

A title line that opens with the target's name and what it does, then five sections in this order, in paragraphs a committee member reads straight through, not labelled lines, and without this procedure's shorthand. It reports what I found, not what I checked: a test, screen or extra line that changed nothing is left out. The memo starts at that title and ends at the next step, with no account of method on either side. Headings carry the finding: the risk table's gives the count of findings and how many block, the valuation's the range, the recommendation's the verdict.

1. **Deal Thesis**, 60 to 100 words: what the business is and why it would be worth owning; where the ask sits against the range; and the primary risk, the one row most able to stop or reprice the deal, named as the table names it. Under a blocked verdict it says what must close first, not that the deal is attractive today.
2. **Tiered Risk Table**: one row per upstream finding, none merged or dropped, top tier first, numbered R1, R2. Columns: number; the finding in 20 words or fewer, in the input's terms, keeping its figures; tier as given; status as given ("not stated" if absent); and a read for this memo (closed; open with its mitigation; blocking; or a flag). One line beneath names the scale and any flag.
3. **Valuation Range**, 150 to 230 words: base, comp ledger, multiple, position, arithmetic, ask, in that order.
4. **Recommendation**, 40 to 80 words: the verdict first, then the rows that decide it, by number, and the price position.
5. **Conditions and Next Steps**: one bullet per open or flagged row, led by its R-number, a sentence or two of 35 words at most, not labelled fields: the action, the evidence that closes it, an owner by function, timing against a deal step. Its character follows the verdict: under Proceed, conditions precedent and protections (what is signed, escrowed, indemnified or deducted); under Request more data, data requests (the document sought, who supplies it, the answer that moves the verdict); under Pass, re-engagement triggers (what must become true for us to reopen). A closing sentence gives the next step, with a date only where the inputs supply one and no remark where they do not.

The memo runs 550 to 800 words, because a committee paper that cannot be read in five minutes is not read. If an artifact is missing, all five headings still appear; the affected section says what was not provided and what cannot be concluded, nothing is reconstructed, and the verdict cannot be Proceed.

## Worked example

`references/worked-memo.md` holds two invented deals written up in full, one blocked and one that proceeds, and closing sections from two more. Call read_reference for it before writing and match its layout and density.
