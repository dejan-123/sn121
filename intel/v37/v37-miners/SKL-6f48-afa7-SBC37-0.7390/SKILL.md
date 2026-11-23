---
name: ic-memo-kitchen-recipe
description: Kitchen-brigade method for an investment committee memo. Calls the recommendation from risk-row status first, prices the deal from the comparables by a fixed recipe, tastes the three diligence artifacts against each other without re-tiering anything, and plates five sections whose conditions each answer to one numbered risk row.
---

# Cooking the IC memo to recipe

A memo reaches the committee the way a plate reaches a guest: prepped from the three artifacts, cooked to a fixed recipe, tasted before it leaves. Prep stays in the back; serve only the memo, in plain deal language.

## Expo: make the call first

Call the recommendation from the risk table, then cook the rest to match it.

- **Proceed** (served as "Proceed with conditions" if section 5 holds pre-signing items): only when each must-address row is Resolved, unchallenged by any other artifact, and each manageable row has a named fix.
- **Request more data:** the house default while a must-address row is open, its status Unresolved, In-Progress, empty, ambiguous, or Resolved but contradicted by another artifact. A closure letter, audit, award, opinion or filing may still settle it.
- **Pass:** only for a blocker that, on the artifacts, this buyer can never get past. A supplier, customer or partner the business cannot trade without says it will not carry on or consent after this deal, and none replaces it; the terms forbid transferring the licence or asset the business cannot run without; or a rule is broken that the buyer cannot cure. A right that could still be exercised (termination, notice, a pending review) is a risk to condition, not a refusal. A wide price gap is not a Pass.
- **Revenue whose terms bar its transfer** (a slice of revenue, not the core asset): Request more data; value only what moves to the buyer, and make the transfer question the first condition.
- **No must-address row, manageable rows open or flagged:** Proceed with conditions once each has its fix; a flagged apparent mis-tier becomes a pre-signing condition.

The call never argues with the table. If the ask is over the range, the memo says so and states what the range would pay; with no ask, it offers the range to bid inside.

## The recipe: valuation

1. **Multiple.** EV/Revenue for mostly recurring software revenue, or EBITDA negative or NM; EV/EBITDA for positive EBITDA in a mostly hardware, manufacturing, services or education trade; EV/Net revenue where gross volume is booked. A second multiple is a taste test only.
2. **Base:** what the buyer owns after close. Take out one-time revenue, revenue that will not move to the buyer, and revenue already lost (cancelled customer: the run-rate without it), nothing more; services stay. Reported EBITDA; an add-back counts only with documents showing it will not recur. Set a differing seller base beside yours.
3. **Comps:** keep each, or eighty-six it with a one-line reason, for three reasons only: a precedent acquisition whose price includes a control, strategic or sponsor premium, mixed into trading comps; growth or gross margin sitting over 10 points clear of every other comp (never the multiple alone, nor merely being highest); a multiple NM on the metric used.
4. **Median:** the middle kept multiple, or the average of the middle two, never the set's mean; the same for growth and margin.
5. **Season in steps** of 0.25x (revenue multiple) or 1.0x (EBITDA multiple), one per item against the kept medians:
   - growth 4+ points apart (two steps at 15+);
   - gross margin 3+ points apart;
   - a single customer above 25% of revenue, or the top three above 60%;
   - NRR below 100%, or a revenue mix the comps lack.

   Above the median goes up, below goes down. Never season what the base already removed; size gets no step unless the comps' scale is given. One running sum: 10.0x − 1.0x growth − 1.0x margin = 8.0x.
6. **Portion:** adjusted multiple ± one step, both products written (low × base, high × base), quantified debt-like items off both ends; multiples to 0.05x, values to $0.1M. Say where the ask lands (beneath the range, within it, or past the high end and by how much, with its implied multiple on your base) or that none was given. Later sections repeat these figures.

## Mise en place: reading the artifacts

Number the risk rows R1, R2 …: must-address first, then manageable, then informational, in input order within each tier. Use every figure as given; derive only what the memo needs and show it inline (12% × $25.0M = $3.0M). If a section needs something no artifact gives, write "not provided"; never invent a figure or assume an ask.

## Tasting: the artifacts against each other

- **Clashes need a second witness:** a separate artifact, or a note from an analyst, stating facts that clash with the status (a tender not yet awarded, a regulator's review put off rather than closed, a promised closure letter missing, management unable to show the paperwork). Leave the status as upstream wrote it, mark the row with the clashing quote, and treat it as open for the call. A row cannot contradict itself: the finding text says what the risk is and the status says where it stands, so never call a row "contradicted by its own finding". Absent proof is no contradiction either; the row stays Resolved and the missing proof turns into a pre-signing condition.
- **A tier that looks wrong** stays as given: flag the apparent mis-tier, note which tier the facts point to, and carry the risk into pricing or conditions. At the gate the row counts under its upstream tier.
- **Tier labels** such as Critical / Moderate / Low stay as the table wrote them; one sentence says Critical is read as must-address.
- **Unverified:** management projections, adjusted EBITDA and a seller's story about churn are labelled unverified.

## Garnish: conditions and next steps

Each risk row gets exactly one bullet, following the row sequence and beginning with the row ID (R1:). It names an owner, the instrument or evidence, and the date it is due, quoting any deadline the artifacts state. An informational row gets a monitoring item. The verdict sets the garnish:
- **Proceed:** what must be true at closing, each with its instrument (an indemnity, an escrow or holdback as large as the quantified exposure, a covenant, a signed consent or closure letter), plus first-day steps.
- **Request more data:** the document that would settle each open row, and what each answer changes.
- **Pass:** what must change before the committee would reopen the file.

Each bullet answers to a row; price belongs in the Recommendation.

## Plating: write the memo

Before plating, call read_reference on `references/plated-memo-recipe.md`; take its structure and portion sizes, not its ingredients.

The reply's very first line is `# IC Memo: ` followed by the target's name, and nothing is served ahead of it. The commonest slip is a warm-up line in front of the title, such as "Now I will draft the IC memo". Then five sections, in this order; a length limit in the scenario replaces these portions:
1. **Deal Thesis**, 80 to 130 words: what is being bought and why it is worth having; the primary risk under its own name, meaning the highest open must-address row, which section 2 also lists; and the tension on price.
2. **Risk Assessment**: one table, `# | Risk | Tier (as given) | Status (as given) | What the other artifacts say | Deal impact`, each cell under 25 words, then up to three sentences on flags and how tiers were read.
3. **Valuation**: comp screen table, medians, running sum, range arithmetic and the ask, no more than 220 words of prose beyond the table.
4. **Recommendation**, 40 to 90 words: the verdict in bold, the rule that produced it, the rows behind it, the price supported.
5. **Conditions and Next Steps**: one bullet per risk row, tied to it, 35 words or fewer.

The plate holds at most about 900 words (some 6,000 characters) and its last course is section 5; the output budget is fixed and anything longer gets cut off.
