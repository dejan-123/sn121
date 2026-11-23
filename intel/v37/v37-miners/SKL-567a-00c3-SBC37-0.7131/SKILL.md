---
name: ic-memo-dead-reckoning
description: Navigates from three diligence inputs (the upstream risk table, the deal's financial narrative and the comparable-company set) to a five-section investment committee memo. Fixes a valuation range off the comps with set step sizes, reads every risk row into a gate that sets the verdict, quotes a second source for any status contradiction rather than re-tiering, and hangs each condition on a numbered risk row.
---

# The IC memo by dead reckoning

Take soundings in three artifacts, fix the value from the comps, let the risk table set the heading. The plotting stays below deck: the reply is the finished memo alone.

## Fixing the value

1. **Instrument by kind of business.** EV/Revenue when most revenue is recurring software, or EBITDA is negative or NM. EV/EBITDA when EBITDA is positive and the business is chiefly hardware, manufacturing, services or education. EV/Net revenue when it reports gross volume. Any second multiple is a cross-bearing.
2. **Base: what the buyer holds once the deal closes.** Strike only one-time revenue; revenue that cannot transfer (a grant, contract or licence lapsing on change of control); revenue already lost (value the run-rate without cancelled customers). Every other line stays aboard, services included. Value on reported EBITDA; a seller's add-back counts only with documents behind it. If the seller's base differs, set it beside yours.
3. **Screen every comp:** in, or out with a one-line reason. Three reasons only: a premium precedent deal sitting in a trading set; a comp whose growth or gross margin lies over 10 points past all the others (never the multiple alone; being highest is not enough); a multiple reading NM on the chosen metric.
4. **Median.** The middle included multiple; with an even count, average the two middle values. Never the set's mean. Same rule for the growth and margin medians.
5. **Steps.** Step size: 0.25x for revenue multiples, 1.0x for EBITDA multiples. Step for a gap against the included set:
   - growth 5+ points off the median (two steps at 15+);
   - gross margin 3+ points off the median;
   - a single customer over 20% of revenue, or a top three over 50%;
   - NRR under 100%, or a revenue mix the comps lack.
   Above the median steps up; below steps down. Never step for anything already struck from the base, and no size step unless the artifacts give the comps' scale. Log every step in one running sum: 8.0x − 1.0x margin = 7.0x.
6. **Range.** The adjusted multiple plus or minus one step; write out both products, low multiple × base and high multiple × base. Take quantified debt-like items off both ends. Multiples round to 0.05x, values to $0.1M. Place the ask: below, inside or above the high end and by how much, with the multiple it implies on your base; or say no ask was given. Later sections repeat these exact figures.

## Setting the heading: the gate

Read each risk row into a Gate reading: Resolved; or Open: plus its status word; or Open: contradicted by, plus the quoted words of another artifact or an analyst note. A Resolved row reads Open only when such words can be quoted against it.

- **Proceed** (written "Proceed with conditions" when section 5 holds pre-signing items) only when every must-address row reads Resolved and every manageable row carries a named mitigation. Open or flagged manageable rows do not stop it: each gets a mitigation, and a flagged apparent mis-tier becomes a pre-signing condition.
- **Request more data** whenever a must-address row reads Open (Unresolved, In-Progress, blank, ambiguous or contradicted). Revenue the terms bar from transferring lands here too, not at Pass: strike it from the base, value what transfers, and make the transfer question the first condition.
- **Pass** only on a quotable artifact sentence proving the block cannot be lifted for this buyer: a counterparty the business could not run without says it will neither carry on nor consent once this deal closes, and no replacement appears; the terms forbid transferring the licence or asset the thesis rests on; or the business breaches a rule this buyer has no way to cure. Nothing to quote means Request more data. A wide price gap alone is never a Pass.

The heading must agree with the table. Call out an ask above the range and name the price the range will bear; with no ask, give the range to bid within.

## Cross-bearings: one artifact against another

- **Contradiction.** It takes a second source. Keep the upstream status in its column, put the quote in the Gate reading, and count the row as open. The finding's own row is never its own second source.
- **Apparent mis-tier** (a finding that weighs more, or less, than the tier it carries): name it in the Memo flag with the tier the evidence suggests, and never re-tier. The flag leaves the gate as it was; carry the risk into the valuation or a pre-signing condition.
- **Tier words.** Keep the upstream labels, Critical, Moderate or Low, and say once how they read: Critical counts as must-address for the gate.
- **Seller and management claims** (projections, adjusted EBITDA, an account of churn) are marked unverified.
- **Gaps.** Never invent a figure; write "not provided". Never assume an ask.

## Soundings: reading the artifacts

Label rows R1, R2 and on: must-address rows lead, manageable rows follow, informational rows come last, and inside a tier the input's order holds. Figures are copied as given. Derive one only when the memo needs it, and show the working inline (40% × $15.0M = $6.0M).

## Conditions and Next Steps

Each risk row gets exactly one bullet, in table order, led by its ID (R1:) and stating who owns it, which instrument or evidence settles it, and the due point; quote any deadline the artifacts give. Informational rows get something to monitor. The verdict decides what the bullets are:
- **Proceed:** closing conditions that name the instrument (indemnity, covenant, consent, an escrow or holdback sized to the quantified exposure), plus day-one steps.
- **Request more data:** the document that would settle each open row, and how each answer would move the verdict.
- **Pass:** what must change before the committee would reopen the file.

Every bullet names a row; price stays in the Recommendation.

## Landfall: writing

First call read_reference on `references/fix-and-bearing-notes.md`, and copy its shape and its length limits, never its facts.

Line one of the reply is `# IC Memo: ` and the target's name, with nothing above it. The usual slip is a preamble like "Now I will draft the IC memo" ahead of the title; leave it out. Five sections follow, in this order, and any length bound the scenario states beats these:
1. **Deal Thesis** (80–130 words): the asset, the reason to own it, the primary risk named by row ID, and the gap between ask and value.
2. **Risk Assessment**: a single table, `Row | Finding | Tier (as given) | Status (as given) | Gate reading | Memo flag | Deal impact`, cells kept below 25 words, followed by no more than three sentences about flags and the tier reading.
3. **Valuation** (220 words at most outside the comp table): multiple, base, screen, median, running sum, range arithmetic, the ask.
4. **Recommendation** (40–90 words): bold verdict, the gate reading that forced it, the rows behind it, and the price the range supports.
5. **Conditions and Next Steps**: a single bullet per row, 35 words at most.

Invent no date, party or amount. Past a fixed output budget the reply is cut off, so stay near or below 900 words (about 6,000 characters) and stop once section 5 is done.
