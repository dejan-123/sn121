---
name: preflight-ic-memo-checklist
description: Runs a fixed preflight over a risk-tier table, a written account of the financials and a list of comparable companies, then files a five-section investment committee memo. Clears or holds the recommendation at a risk-table gate, flies the valuation off a screened comp set in set increments, logs where the inputs disagree without changing any tier, and pins each next step to a numbered risk row.
---

# Preflight checklist for an IC memo

No one takes the runway with an item open. Read each number back from its artifact, clear the verdict through the gate, fly the value off the comps by one method. Transmit only the finished memo.

## Clearance gate: hold short until every row is read

- **Proceed** is cleared only when all must-address rows are Resolved, none contradicted elsewhere, and each manageable row has a named mitigation; write "Proceed with conditions" when section 5 lists pre-signing items. A table with no must-address row clears the same way: each open or flagged manageable row gets its mitigation, and a mis-tier you flagged becomes a pre-signing item.
- **Request more data** is where any open must-address row leaves you: Unresolved, In-Progress, empty or ambiguous, or Resolved yet contradicted by a different artifact. A grave finding can still be settled by a letter, filing, audit or opinion.
- **Pass** only for a blocker the artifacts show is permanent for this buyer, and only when you can quote the artifact sentence that shows it. Permanent means: a party the business cannot operate without states it will stop dealing with it, or withhold consent, after this sale, with no replacement in view; the terms bar transfer of what the thesis needs, a material share of revenue included, and the artifacts show no way around them; or it breaches a regulation the buyer cannot put right. No quotable sentence, no Pass: the verdict is Request more data. A wide ask-to-range gap alone is a price issue.
- **Readback.** The verdict must agree with the table. Ask over the range: say so, and quote the price the range will bear. No ask: quote the range to bid inside.

## Flight plan: valuation

1. **Multiple by what the business is.** Mostly recurring software, or EBITDA negative or NM: EV/Revenue. Positive EBITDA, mainly hardware, manufacturing, services or education: EV/EBITDA. Gross-volume reporting: EV/Net revenue. Other multiples serve only as cross-checks.
2. **Base: the payload that lands with the buyer.** Offload only non-recurring revenue, revenue that stays behind at close (a grant, lease, contract or licence ending when control changes) and revenue already gone; cancelled customers leave the run-rate. All other lines stay aboard, services included. Use reported EBITDA; seller add-backs count only with documents showing they will not recur. Show the seller's base beside yours if it differs.
3. **Screen each comp:** in, or out with a single-line reason. Valid reasons only: a past acquisition whose price carried a control, strategic or sponsor premium, sitting among trading comps; growth or margin beyond the nearest other comp by more than 10 points (not the multiple alone, nor just being highest); a multiple that reads NM on your metric.
4. **Median.** The middle included value, or the mean of the middle pair for an even count; never the mean of the set. Same rule for growth and margin medians.
5. **Increments:** 0.25x (revenue multiple) or 1.0x (EBITDA multiple), applied only for a material gap:
   - growth at least five points from the median, two increments at fifteen or more;
   - gross margin at least three points from it;
   - one client over 20% of revenue, or the three largest over 50%;
   - NRR below 100%, or a revenue mix absent from the comps.
   Up when the target beats the median, down when it trails. None for anything offloaded from the base; none for size unless the comps' scale is given. Log a single running sum.
6. **Range.** Adjusted multiple plus and minus one increment, both products shown. Subtract quantified debt-like items at both ends (unbudgeted capex, a liability). Round multiples to 0.05x, values to $0.1M. Locate the ask against the range (below, inside, or how far above the top) and state its implied multiple on your base, or note that no ask was given. Later sections reuse these numbers.

## Walkaround: artifacts against each other

- **Conflicting status.** It takes a second source: another artifact, or an analyst note, whose facts do not fit the status (an award still pending, a review pushed back rather than closed, a closure letter never issued, documents management cannot supply). Leave the upstream status as given, flag the row with the quoted source, and count the row open at the gate.
- **Apparent mis-tier.** Flag it and never re-tier: say which tier the facts imply, and take the exposure into the price or into section 5. The flag alone moves nothing at the gate, outside the no-must-address case above.
- **Tier labels.** If the table says Critical / Moderate / Low, use those words, and say once that Critical gates as must-address.
- **Unverified claims.** Management forecasts, seller-adjusted EBITDA and a seller's version of churn are marked unverified.

## Instrument scan: reading the artifacts

Label the risk rows R1, R2 and onward: must-address first, then manageable, then informational, holding the input's order within each tier. Take each figure as printed. Work a figure out only when a section needs it, and show the sum inline (40% × $15.0M = $6.0M). If a section calls for something none of the artifacts contain, it is "not provided": never invent a figure, and never assume an ask that was not given.

## Next legs: Conditions and Next Steps

Each risk row gets one bullet, taken in row sequence and led by its ID (R1:), saying who is responsible, what instrument or evidence, and the deadline; quote any deadline the artifacts set. Informational rows get a monitoring step. What the bullets do depends on the verdict:
- **Proceed:** the closing instrument (an indemnity, an escrow or holdback set at the figure the artifacts give for the exposure, a covenant, a consent) and the steps for day one.
- **Request more data:** what document or reply would settle every open row, and where each outcome would leave the verdict.
- **Pass:** the conditions under which the committee would reopen the file.

Every bullet names a row and every manageable row has its mitigation. Price goes in the Recommendation, not here.

## Transmit: writing the memo

Call read_reference on `references/preflight-walkaround.md` before you write. It carries one full worked deal and a short second case; fly their layout and length discipline, none of their facts.

Line one of the reply is `# IC Memo: ` and the target's name. Nothing goes before it: the slip seen most often is an opening line such as "Now I will draft the IC memo" above the title. The five sections follow in this order; a length bound set by the scenario beats these:
1. **Deal Thesis** (80 to 130 words): what the buyer gets, why it is worth having, which risk matters most (name the top open must-address row; the table must carry it), and how the ask compares with value.
2. **Risk Assessment**: a single table with columns `Row | Finding | Tier (as given) | Status (as given) | Flag | Effect on the deal`; keep each cell below 25 words; add up to three sentences covering flags and tier reading.
3. **Valuation**: screen the comps in a table, then median, running sum, the two range products and the ask, with no more than 220 words beyond the table.
4. **Recommendation** (40 to 90 words): verdict in bold, then the gate rule, the rows it rests on and the supportable price.
5. **Conditions and Next Steps**: a bullet for every risk row, up to 35 words, opening with the row ID.

Invent no dates, parties or amounts. Output is capped and a long memo loses its end: keep it below about 900 words (6,000 characters) and stop after section 5.
