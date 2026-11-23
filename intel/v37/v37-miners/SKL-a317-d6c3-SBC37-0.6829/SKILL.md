---
name: assay-office-ic-memo
description: Assays three diligence inputs (the tiered risk findings, the narrative of the financials and the comparable-company set) into a five-section investment committee memo. Grades value from a screened comp set in fixed steps, strikes the recommendation from the risk table by rule, gives every risk row a gate reading, marks disagreements between inputs while leaving tiers untouched, and hangs each condition on a numbered row.
---

# The assay before the hallmark

No mark before the assay: test each figure against its artifact, grade value from the comps by one method, strike the verdict from the risk table by rule. The reply is the finished memo alone.

## Grading the value

1. **Measure.** EV/Revenue when most revenue is recurring software, or EBITDA is negative or NM. EV/EBITDA when EBITDA is positive and the business is chiefly hardware, manufacturing, services or education. EV/Net revenue where revenue is booked as gross volume. Any other multiple only cross-checks.
2. **Weigh what the buyer takes away** after close. Only three things come off: one-off revenue; revenue that cannot pass to the buyer (a grant, contract or licence lapsing on a change of control); revenue already lost, so cancelled customers leave the run-rate. Every other line stays, services included. Weigh reported EBITDA; adjusted figures count only for add-backs shown to be non-recurring. Set a different seller base beside yours.
3. **Touchstone every comparable:** kept, or struck out with a one-line reason. Only three reasons pass: a precedent deal carrying a control, strategic or sponsor premium inside a trading set; growth or gross margin sitting over 10 points clear of every other comp (never the multiple alone, nor merely being highest); a multiple shown as NM on the chosen metric.
4. **True median.** The middle included multiple, or the mean of the middle two for an even count; never the average of the set. Growth and margin medians likewise.
5. **Correct in fixed steps:** 0.25x for revenue multiples, 1.0x for EBITDA multiples, only for a material gap:
   - growth 5+ points off the median (15+: two steps);
   - gross margin 3+ points off;
   - one customer above 20% of revenue, or the top three above 50%;
   - NRR below 100%, or a revenue mix no comp carries.
   Better than the median steps up, worse steps down. Nothing taken off the base earns a step; size earns none unless the comps' scale appears in the artifacts. Write them as one running sum.
6. **Strike the range.** Adjusted multiple ± one step; write out both products. Take off both ends any debt-like item the artifacts put a number on (unbudgeted capex, a liability). Multiples round to 0.05x, values to $0.1M. Place the ask: under the range, inside it, or over the high end by a stated amount, with its implied multiple on your base; or record that none was given. Later sections repeat these figures.

## Striking the verdict

- **Proceed**, written "Proceed with conditions" when section 5 holds pre-signing items, only when every must-address row is Resolved and uncontradicted by any other artifact and every manageable row carries a named mitigation.
- **Request more data** is the standing mark for any open must-address row: Unresolved, In-Progress, a missing or unclear status, or a Resolved status some other artifact contradicts. A letter, filing or audit could still settle it.
- **Also held at Request more data:** a manageable row flagged as an apparent mis-tier of must-address weight (injunction, regulatory or licence exposure on the core product), until its status is evidenced; and revenue the terms bar from transferring, valued out of the base, with the transfer question first in section 5.
- **Pass** only when the artifacts show an obstacle this buyer can never remove: a counterparty the business cannot run without has refused to continue or consent once this deal closes, with no substitute named; the terms forbid transferring an asset the core product depends on; or the target is in breach of a rule no new owner could cure. A right that could be used (a termination or notice right, a pending review) is a risk to condition, not a refusal given. A price gap alone is never grounds to Pass.

Verdict and table never disagree. An ask over the range is stated as such, with the supported price; with no ask, name the range to bid in.

## Cross-testing the artifacts

- **Gate reading, one per row.** Each row of the Risk Assessment table carries a Gate reading cell: Resolved; or "Open:" plus the status word (Open: In-Progress); or "Open: contradicted by" plus the quoted words of the other artifact. A Resolved row reads Open only when you can quote a different artifact, or an analyst note, against it (a re-bid still undecided, a deferral rather than a closure, a closure letter that never came, papers management cannot produce). The upstream status keeps its own column and the row counts as open at the gate. Without such a quote the row reads Resolved, and the document proving it goes into section 5 as a pre-signing condition.
- **Apparent mis-tier.** Never re-tier. Flag the row, name the tier the evidence points to, and let the risk show in the valuation or the conditions. The flag leaves the gate where it was, apart from the core-product hold above.
- **Tier words.** Critical / Moderate / Low stay as written; one sentence says Critical is treated as must-address.
- **Unproven claims.** Forecasts from management, seller-adjusted EBITDA and the seller's own story of churn are marked unverified.

## Sampling the artifacts

Give the rows IDs R1, R2 and so on, must-address rows leading, manageable next, informational last, in input order inside each tier. Take every figure as printed. Derive one only when a section needs it, with the working inline (30% × $12.0M = $3.6M). Where a section needs something no artifact gives, write "not provided"; no figure is invented, and when no ask is given none is assumed.

## Conditions and Next Steps

A bullet for each risk row, in the table's order, starting with the row ID (R1:) and stating who owns it, the instrument or proof, and the due point; quote any deadline the artifacts give. Informational rows get a watch item. The verdict decides what kind of bullet you write:
- **Proceed:** the protection that closes the row (indemnity; escrow or holdback matched to the exposure the artifacts quantify; covenant; consent or closure letter), plus day-one steps.
- **Request more data:** for each open row, the paper or answer that would close it, and how each possible answer moves the verdict. Barred-revenue transfer goes first; the rest keep row order.
- **Pass:** the change that would bring the deal back before the committee.

Every bullet names its row and every manageable row gets its mitigation; price lives in the Recommendation.

## Writing the memo

Before writing, call read_reference on `references/assay-ledger.md`; copy the shape and the length discipline, never the facts.

The reply's first line is `# IC Memo: ` followed by the target's name, with nothing at all above it. The slip made most often is a lead-in like "Now I will draft the IC memo" placed before the title. Sections, in this order (a length limit stated in the scenario wins over these):
1. **Deal Thesis**, 80–130 words: the asset, the case for owning it, the primary risk named (the highest open must-address row, which then appears in the table), and the gap between ask and value.
2. **Risk Assessment**: one table, `# | Risk | Tier (as given) | Status (as given) | Gate reading | Flag | Deal impact`, no cell over 25 words, then up to three sentences on flags and how the tiers are read.
3. **Valuation**: screen table, median, running sum, both range products, the ask; 220 words at most outside the table.
4. **Recommendation**, 40–90 words: bold verdict, the gate rule that set it, the deciding rows, the price the range will carry.
5. **Conditions and Next Steps**: a bullet per risk row, each tied to its row, no longer than 35 words.

Never invent a date, party or amount. Output is capped, and a memo that runs long is cut off before its end: keep below roughly 900 words (6,000 characters) and close on section 5.
