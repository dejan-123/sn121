---
name: ic-memo-release-gate
description: Release-style procedure for an investment committee memo. From the upstream risk table, the financial narrative and the comps it builds a reproducible valuation range, gates the verdict on risk-row status, flags conflicts between documents without re-tiering, and pins each condition to a numbered row.
---

# The IC memo as a release candidate

Treat the memo as a release. Valuation is a build: anyone rerunning it from the comps gets the same range. The verdict is a gate that ships or blocks by rule. Build off-screen; the release is the memo alone, in plain committee language.

## 1. Build the valuation

**Toolchain (the multiple).** Mostly recurring software, or EBITDA negative or NM: EV/Revenue. Positive EBITDA in a chiefly hardware, manufacturing, services or education business: EV/EBITDA. Gross volume booked as revenue: EV/Net revenue. A second multiple is a smoke test only.

**Pinned input (the base):** what the buyer holds after close. Strip only one-off revenue, revenue this buyer will not inherit, and revenue already lost (a cancelled customer: the run-rate without it); services and every other line stay. EBITDA as reported; an add-back enters only if an artifact documents it as non-recurring. A different seller base is printed beside yours.

**Lint each comp:** in, or out with a single-line reason. Only three reasons clear lint:
- a takeover price (control, strategic or sponsor premium) sitting among trading comps;
- a growth or gross-margin figure over 10 points past all the other comps (never the multiple alone; being top is not enough);
- a multiple that is NM on the metric you chose.

**Median:** the middle passing multiple, or the average of the middle pair, never the set's mean; growth and margin medians alike.

**Steps:** 0.25x on a revenue multiple, 1.0x on an EBITDA multiple. Against the passing comps' medians, each of these is one step:
- growth gap of 5+ points (two steps from 15+);
- gross-margin gap of 3+ points;
- a single customer over 20% of revenue, or the three largest together over 50%;
- NRR under 100%, or a revenue mix absent from the comps.

Ahead of the median steps up, behind steps down. Nothing stripped from the base earns a step; size earns one only if the artifacts state the comps' scale. One running sum: 6.0x − 0.25x growth − 0.25x margin = 5.5x.

**Range (tight tolerance):** adjusted multiple ± half a step (0.15x revenue, 0.5x EBITDA). Write both products (low × base, high × base); subtract quantified debt-like items from each end. Multiples round to 0.05x, dollars to $0.1M. Place the ask: under the range, inside it, or over the top by $X, with its implied multiple on your base; or say none was given. Later sections reuse these exact figures.

## 2. The release gate (recommendation)

- **Proceed** ("Proceed with conditions" when section 5 lists anything due before signing) ships only if each must-address row is Resolved with nothing contrary and each manageable row carries a named mitigation. A row's own wording describes the risk and cannot fail its status, and absent proof is not contrary evidence. The row stays Resolved and its proof becomes a pre-signing item. Only a separate artifact or an analyst note can fail it.
- **Zero must-address rows,** manageable rows open or flagged: Proceed with conditions once each manageable row has its mitigation; a flagged apparent mis-tier turns into a pre-signing condition.
- **Request more data** is the default block while a must-address row is open: Unresolved, In-Progress, blank or unclear, or Resolved yet contradicted elsewhere. An award, an audit opinion, a filed response or a closure letter may yet settle it.
- **Pass:** only a blocker permanent for this buyer, proven by an artifact sentence you can quote: a counterparty the business cannot run without has stated it will stop or refuse consent once this deal closes, with no replacement named; the terms keep a material share of the revenue the thesis relies on from transferring, with no route around; a breached rule this buyer cannot cure. No quotable sentence: Request more data. A price gap alone is never a Pass.

Verdict and table must agree. Ask over the range: state it and give the supported price. No ask: give the bid range.

## 3. Failing checks between artifacts

- **Status conflict.** It takes a second document, another artifact or an analyst's note, whose facts cannot coexist with the status (a re-bid still running, a review postponed rather than closed, a closure letter that never arrived, management unable to produce proof). Leave the upstream status in place, mark the row with that quote, and treat it as open at the gate.
- **Apparent mis-tier.** Never re-tier: flag it, say which tier the facts point to, and carry the weight into pricing or conditions. The flag does not move the gate.
- **Tier vocabulary.** If the table speaks in Critical / Moderate / Low, keep those words and say once how you read them (Critical counts as must-address).
- **Claims nobody has checked** (management forecasts, adjusted EBITDA, the seller's churn story): mark them unverified.
- **Absent inputs.** Write "not provided"; a figure is never invented and an ask never assumed.

## 4. Reading the inputs

Number risk rows R1, R2 … in tier order (must-address, then manageable, then informational), input order inside each tier. Each figure stands as the artifact states it. Derive a number only when the memo needs it, with the working inline (18% × $40.0M = $7.2M).

## 5. Conditions and next steps

Section 5 carries a bullet for every risk row, in table order, each led by its ID (R1:) and stating who owns it, what document or instrument settles it, and the due point; quote any deadline the artifacts give. Informational rows get a watch item. The verdict shapes the bullets:
- **Proceed:** closing conditions with the instrument named (indemnity; escrow or holdback matched to the quantified exposure; covenant; consent or closure letter) and day-one steps.
- **Request more data:** for each open row, the document that would settle it and how each answer moves the verdict.
- **Pass:** a rollback note: the change that would bring the deal back to committee.

Every bullet points at a row; price stays in the Recommendation.

## 6. Ship the memo

First call read_reference on `references/release-candidate-memo.md`; borrow its structure and word budgets, never its facts.

Line one of the reply is `# IC Memo: ` plus the target's name, and nothing comes before it. Opening words like "Now I will draft the IC memo" are the slip seen most often. Then the sections, in this order (a length limit the scenario states replaces these defaults):
1. **Deal Thesis** (80–130 words): the asset, the reason to own it, the primary risk named (the leading open must-address row, also carried in the table) and where price and value pull apart.
2. **Risk Assessment**: a single table, `# | Risk finding | Tier (as given) | Status (as given) | Cross-check note | Effect on the deal`, every cell below 25 words, followed by no more than three sentences on flags and tier reading.
3. **Valuation**: screen table, medians, running sum, both range products and the ask; 220 words at most outside the table.
4. **Recommendation** (40–90 words): bold verdict first, then the gate rule that fired, the rows that fired it, and the price the range supports.
5. **Conditions and Next Steps**: a bullet per risk row, 35 words at most, each tied to its row.

The output budget is fixed and anything past it is cut: hold the memo below roughly 900 words or 6,000 characters, ending on section 5.
