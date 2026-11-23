---
name: ic-memo-from-diligence
description: Turns a deal-risk table, a financial narrative and a comparables set into a five-section investment committee memo (thesis, tiered risk table, valuation range, recommendation, conditions) whose call, figures and conditions each trace to named evidence in those three inputs.
---

# The memo is a decision the committee can act on, built only from the three artifacts

Five mistakes sink IC memos: a "proceed" while a must-address finding is open; a status taken on trust when another input contradicts it; a multiple applied to revenue the buyer will not own; a range asserted instead of derived from the comps; conditions that would fit any deal. Every claim names its source, the call follows from the risk table, and the arithmetic can be redone. Nothing is added that the inputs lack: no invented dates, people, prices, thresholds, currency conversions, discounts, synergies or outcomes. A figure derived from the inputs appears only with its computation shown; otherwise use the input's own words ("68% of test volume"). Where the inputs are thin or disagree, the memo says so and takes the cautious reading.

## Read the inputs in this order

**1. Risk table.** Copy each finding's tier and status exactly. Must-Address and Critical are blocking; Manageable, Moderate and Low are manageable; Informational is informational. A finding is OPEN when its status is Unresolved or In-Progress, or when any input, the finding's own text included, says the matter is still live: a re-bid under way, an active review, a deferral (not a closure), "substantially resolved" with no closure letter, claims or litigation called pending. Show both and quote it: "Resolved → treated as open: narrative says the re-bid is still live". Never re-tier silently. The table records each finding as first raised and the status what diligence has done since, so a finding's text still describes its underlying exposure (a rival's earlier filing, a cancellation right, a patent application awaiting grant) once resolved. That description, or a missing closure document, does not reopen it: "Resolved" stands and the document becomes a condition. A risk-table finding at a lower tier that the figures show is material (revenue the ask is priced on, retention below 100%) is flagged as under-tiered and carried into the valuation or the conditions.

**2. Base.** Value what the buyer acquires. Take out only what the input says will not recur or cannot transfer (a one-time project, an ended contract, grants, a licence that ends on change of control) and customers already lost: the base is the run-rate without them. A recurring share ("83% recurring") describes quality, not a cut: the rest stays in the base. A payment facilitator or marketplace is valued on net revenue, never gross. Use reported EBITDA and add back only costs that are truly one-time ("strategic investments" recur). A restatement auditors have not opined on is open.

**3. Comps and method.** Name every comp as included or excluded, with the reason. Exclude only an acquisition price carrying a control or private-equity premium (a transaction, not a trading multiple), a comp that is NM for the metric in use, or a profile far outside the set (growth more than double the target's, a different business model). A comp merely above or below the target stays in. Use EV/EBITDA whenever EBITDA is positive and the comps give it; EV/Revenue only when EBITDA is negative or the comps lack it. When the comps do not disclose a mix the target has, say the margin comparison is unreliable.

**4. Range.** Low and high come from the included comps nearest below and nearest above the target on growth, named with their figures. Compute only those two products, as multiple × base = value rounded to $0.1M (4.1x × $41.7M = $171.0M). No point estimate and no cross-check products: every extra figure is a chance to contradict yourself. Compare the ask: ask ÷ base = implied multiple, and the gap as a subtraction, larger minus smaller ($70.0M − $64.0M = $6.0M above the top). With no ask in the inputs, say so and give the range as bid guidance.

## Recommendation rule

- Any OPEN blocking finding: **Do not proceed** now; a conditional proceed is not available. Say what would bring the deal back to IC.
- No open blocking finding: **Proceed**, or **Proceed with conditions** when findings still need proof, at a price inside the range. A blocking finding marked Resolved that no other input contradicts is not open and does not block: the proof of its resolution becomes a condition. Do not invent a blocker.
- An ask above the range: not at the ask; the supportable maximum is the top of the range.
- Check before section 4: the thesis's primary risk is a numbered row of the table; every open blocking finding is in the recommendation and in a condition; section 4 cites section 3's base and range.

## Sections and length

1. **Deal Thesis** (at most 150 words): what is being bought and why it is worth owning, with input figures; what must be true; then "Primary risk:" naming the finding that most threatens the case (the open blocking finding with the largest exposure, or the largest open finding when none blocks) and its row number.
2. **Tiered Risk Table**: when the input's tier words differ from Must-Address/Manageable/Informational, one line above the table says which are blocking. One row per input finding, by tier (blocking, manageable, informational) and, within a tier, open findings first. Columns: # | Finding | Tier | Status (table → memo) | Why it matters to this deal | Treatment. Treatment is one of: blocks, condition N, price, monitor. Under the table, at most three short lines: each reopened row with the quote that reopens it; each Resolved blocking row that stands ("no other input contradicts it; its proof is condition N"); gaps.
3. **Valuation Range** (at most 220 words, arithmetic included): base and why (one or two sentences); included and excluded comps with reasons; adjustments (one line: where growth and margin put the target against the bracketing comps, and size: not given, so no size adjustment, unless the inputs give sizes); the two arithmetic lines; the ask (one sentence).
4. **Recommendation** (50-110 words): the call in bold first, then why, citing rows and the range.
5. **Conditions and Data Requests** (3-6 numbered items, one or two sentences each): each names the finding (row number), the document or action that closes it, who provides it (seller, counsel, auditors, the deal team) and when (before signing, before closing, before returning to IC). No amount, threshold, deadline or price formula the inputs do not give: never "if the cost exceeds $X, the deal returns to IC". A row reopened against its Resolved status gets a condition before signing.

## The memo

Before writing, call read_reference on `references/ic-memo-cases.md`: two full memos, one stopped and one approved, then short cases for the traps above. Take the form and the reasoning, never the facts or figures: every name, figure and date in a real memo comes from its own inputs.

Your reply is the memo and nothing else: its first characters are `# Investment Committee Memo:` and the target's name. No sentence about the skill, the cases or how you will proceed comes before that heading, and no dividing line. Then the five numbered `##` sections in the order above, and nothing after section 5.

Checks before finishing:
- Every number appears in an input or is computed from input numbers on a line the reader can see.
- Tier and status cells match the input table; any change of treatment is stated with the contradicting fact.
- The call, the range and the conditions agree with each other and with the risk table.
