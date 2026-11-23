---
name: ic-memo-from-diligence-artifacts
description: Drafts a five-section investment committee memo from a risk classification table, a financial narrative and a comparables set; derives the valuation from the comp set with a fixed adjustment method, gates the recommendation on the risk table's state, flags cross-document contradictions without re-tiering, and ties every condition to a named risk row.
---

# Writing an IC memo the committee can act on

Every claim traces to an artifact; value comes from the comps by a fixed method; the verdict follows the risk table by rule. Work silently: the reply is the finished memo only.

## Valuation method

1. **Multiple**: EV/Revenue when most revenue is recurring software or EBITDA is negative or NM; EV/EBITDA when EBITDA is positive and the business is mainly hardware, manufacturing, services or education; EV/Net revenue where the business reports gross volume. A second multiple is a cross-check only.
2. **Base**: what the buyer owns after close. Remove only one-time revenue, revenue that will not transfer (grants, contracts or licences lapsing on a change of control) and revenue already lost (cancelled or notified customers: use the run-rate without them); keep every other line, services included. Use reported EBITDA, not seller-adjusted unless an add-back is documented. If the seller uses another base, show both and value on yours.
3. **Screen** every comp: included, or excluded with a one-line reason, only for a premium precedent deal (control, strategic or sponsor) in a trading set; an outlier with growth or gross margin more than 10 points beyond every other comp (never for its multiple alone, nor for merely being highest); or an NM multiple.
4. **Median**: list the included values in order and take the middle one, or the mean of the middle two when the count is even; never the mean of the whole set. Use the same rule for the growth and margin medians.
5. **Adjust in steps** of 0.25x (revenue multiple) or 1.0x (EBITDA multiple), one step per material gap from the included set:
   - growth 5+ points from the median (two steps at 15+); gross margin 3+ points;
   - a single customer above 20% of revenue, or the top three above 50%;
   - NRR below 100%, or a revenue mix the comps lack.
   The sign follows the comparison (above the median → up, below → down), but step up only for a durable advantage: never for growth the artifacts tie to one customer, a one-off or a management projection. Never adjust for anything already removed from the base, nor for size unless the artifacts give the comps' scale. Write one running sum: 4.0x median − 0.25x growth − 0.25x concentration = 3.5x.
6. **Range**: the adjusted multiple ± one step; write both products out (low multiple × base, high multiple × base). Deduct quantified debt-like items (unbudgeted capex, a liability) from both ends. Round multiples to 0.05x, values to $0.1M. Place the ask (below, within, or above the high end by how much) with the multiple it implies on the same base, or say no ask was given. Later sections repeat these figures.

## The recommendation gate

- **Proceed** (written "Proceed with conditions" when section 5 carries pre-signing items) only if every must-address row is Resolved with no contradicting evidence and every manageable row has a named mitigation. Resolved means the risk was dealt with, not that it can no longer happen: a Resolved row whose event could still occur (a landlord who may still use a break date) counts as resolved, and its protection (consent, escrow, covenant, price term) becomes a condition. Every must-address row Resolved and uncontradicted is the case for Proceed with conditions.
- **Request more data** is the default for any open must-address row: Unresolved, In-Progress, missing or ambiguous status, or Resolved but contradicted by another artifact.
- **Pass** only on a quotable artifact sentence showing the blocker is permanent for this buyer: a counterparty the business cannot operate without says it will not continue or consent after this deal (no replacement named), the terms forbid transferring what the thesis needs, or a rule is broken that the buyer cannot cure. An exercisable right (termination, notice, a pending review) is a risk to condition, and a wide price gap is a price point: neither is a pass.

The verdict never contradicts the table. If the ask sits above the range, say so and name the price the range supports; with no ask, state the range to bid within.

## Checking the artifacts against each other

- **Status contradiction** needs a second source: a different artifact or an analyst note stating facts inconsistent with the status (re-bid still open, a review only deferred, no closure letter, management unable to document). Keep the upstream status, flag the row quoting that source, and count it as open for the gate. A finding's own wording describes the risk and never contradicts its own status; never write that a row is "contradicted by the finding itself". Missing proof is not a contradiction: Resolved stands, and the evidencing document becomes a pre-signing condition.
- **Apparent mis-tier** (content heavier or lighter than its tier): never re-tier. Flag it, say what tier the evidence suggests, and carry the risk into the valuation or conditions; the flag does not change how the row counts for the gate.
- **Tier vocabulary**: keep the upstream words (Critical / Moderate / Low) and state the reading once (Critical gates like must-address).
- **Unverified claims** (management projections, "adjusted" EBITDA, a seller's account of churn): label them as such.

## Reading the artifacts

Number risk rows R1, R2 … with must-address first, then manageable, then informational, keeping the input's order within a tier. Take every figure exactly as given; derive a figure only when the memo needs it, showing the derivation inline (35% × $20.0M = $7.0M). Anything a section needs that no artifact supplies is "not provided", never an assumption presented as fact; when no ask is given, never assume one.

## Conditions and next steps

One bullet per risk row, in row order, opening with its row number (R2: …), naming the owner, the instrument or evidence, and when it is due (quote any deadline the artifacts give: a response window, an expiry, a notice period); an informational row gets a monitoring step. The verdict sets the character:
- **Proceed**: closing conditions naming the instrument (an indemnity; an escrow or holdback sized to the exposure the artifacts quantify; a covenant; a consent or closure letter), and day-one steps.
- **Request more data**: the document or answer that would settle each open row (a closure letter, a filed response, a signed consent or renewal, an audit opinion) and what each answer does to the verdict.
- **Pass**: what would have to change for the committee to look again, and at what price.

Every bullet names a row (price belongs in the Recommendation), and every manageable row gets its mitigation.

## Write the memo

Before writing, call read_reference on `references/memo-casebook.md`; copy its layout and length discipline, none of its facts.

The reply's first line is `# IC Memo: ` and the target's name, with nothing before it; a sentence such as "Now I will draft the IC memo" is the slip most often made. Then five sections in this order (any length bound the scenario states overrides these):
1. **Deal Thesis** (80–130 words): what is bought, why it is worth owning, the primary risk by name (the top open must-address row, which the table then carries), and the price tension.
2. **Risk Assessment**: one table, `# | Finding | Tier (as given) | Status (as given) | Memo flag | Deal impact`, cells under 25 words, then at most three sentences on flags and tier reading.
3. **Valuation**: the comp screen table, median, running sum, range arithmetic, the ask (at most 220 words besides the table).
4. **Recommendation** (40–90 words): the verdict in bold, the gate that produced it, the rows that drive it, the supported price.
5. **Conditions and Next Steps**: one row-tied bullet per risk row, at most 35 words each.

No invented dates, parties or amounts. The output budget is fixed and a long memo is cut off at the end: keep it under about 900 words (6,000 characters) and end with section 5.
