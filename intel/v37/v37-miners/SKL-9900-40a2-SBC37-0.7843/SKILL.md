---
name: ic-memo-from-diligence-artifacts
description: Writes the investment committee memo for an acquisition from three upstream artifacts (a tiered risk table, a financial narrative, a comparables table). Re-reads every status against the facts, lets open deal-blocking findings set the recommendation, builds the valuation from a normalised base and a named comp set with reproducible arithmetic, and ties every condition to a finding.
---

# An IC memo is a decision, not a summary

The committee reads the memo to decide: may the team sign, and at what price. Three upstream analysts did the work, and each can be wrong. A good memo trusts their facts and tests their labels. Two failures sink memos: recommending "proceed" while a deal-blocking finding is still open, and pricing off the seller's figure or a comp set nobody examined. What follows is how to reason. Write no analysis before the memo: the memo's risk table, financial base and valuation are where that analysis goes, so put each judgement straight into them. The reply's first characters are `## ` and the target's name.

## Statuses are claims

**Tiers.** Map the table's words onto three levels and say so once in the memo: *must-address* (also written Critical, High, Red, Must-Address), *manageable* (Moderate, Medium, Amber, Manageable), *informational* (Low, Green, Informational). Keep the analyst's tier in the row.

**Status is a claim, not a fact.** For each row, read the finding's own words and the narrative, and decide whether the exposure is actually closed. A status of Resolved stands only when the input names the closing record: a signed consent, an issued closure letter or consent decree, an executed renewal, an auditor's opinion, a dismissal with prejudice, an issued approval. Read the row as **open** when:
- the matter is pending, live, under review, in discussion, under appeal, in progress or deferred (a deferral moves a date; it closes nothing);
- the fix needs a third party's consent, award, renewal or decision that is not in hand;
- the exposure is a standing term no document has changed: cancellable on notice, month-to-month, an expiry date, a non-transferable right, an earlier competing filing;
- the only evidence of resolution is the target's own word ("counsel reports", "management believes", "substantially resolved").

When your reading differs from the table, show both: "Given: Resolved. Read: open, because the row itself says the renewal is still pending." Do not silently re-tier and do not silently accept. When an upstream author flags a contradiction, carry it into the memo in their terms and say how you treated it.

**Escalation.** A row tiered manageable or informational that, as written, could stop the close or remove the asset the thesis rests on is named as an item the IC should watch, with the reason, and becomes a condition. It does not by itself turn a Proceed into a Hold: the analyst's must-address tier decides that. Do not escalate on topic alone.

## The base the buyer is actually buying

Start from the reported figures and strip what does not transfer or recur, as arithmetic.
- **One-off revenue** (a single project, a pass-through) comes out of the revenue base and its margin out of EBITDA.
- **Revenue that cannot move to this buyer** (a grant, a licence or contract that terminates on change of control) comes out of the base, or is valued separately and flagged.
- **Gross vs net:** where the business passes through third-party costs, value net revenue and use a multiple stated on net revenue.
- **Lost customers:** recent cancellations reduce the run-rate; show the base with and without them, and say whose characterisation of the churn is unverified.
- **Adjusted EBITDA:** accept an add-back only if the input shows it is one-off and documented; reject recurring or discretionary items ("strategic investments", ongoing costs). Show seller's figure, your figure, and the difference.
- **Restatements or policy changes without an auditor's opinion:** show the sensitivity with the restated amount removed.
- **Management projections** are never the base.
- **Below the line:** cash, debt, unfunded capex the input quantifies, and working capital far from peers are noted for the price, not buried.

## The comp set, named before it is used

Give every comparable a verdict in a short table or list: **included** or **excluded**, with a reason drawn from its own row or a note.
- Exclude a **transaction or precedent** (a control premium, a sponsor or strategic premium, "acquired at") from a trading set, or show it separately; never blend it into the range.
- Exclude **NM** values from that multiple only.
- Exclude **outliers** whose growth or margin is far outside the target's and the rest of the set (as a rule of thumb, growth well above the highest peer near the target); state the test you used.
- When the comps lack a breakdown the target has (business mix, net vs gross), say so and say how it limits the range; do not invent segment multiples.
- When an upstream analyst says "no exclusions", still test each comp in one line.

**Position the target.** Compare its growth, margin and any retention or quality figure the table gives with the included comps. Name the closest comps. Say which way size, margin and growth push the multiple (below a peer median on growth and margin puts it in the lower part of the range). Size is a factor only if the input gives size.

## Value, with arithmetic anyone can redo

- Pick the multiple that fits the base: EV/EBITDA only when the target's normalised EBITDA is positive and the comps give it; otherwise EV/Revenue on the right revenue base. Use a second multiple as a cross-check when both work, and say why the two differ if they do.
- State the range (low and high of the included comps, or the closest comps around your position) and compute each end: base × multiple = EV. Round to one decimal in millions. Recompute medians and products before writing them.
- Compute the asking price's implied multiple on your base (ask ÷ base) and on the seller's base if the seller used another, and say where it sits against the range.
- If the input gives no asking price, say "No asking price supplied" and give the range only. Never invent a price, multiple, premium, date or benchmark.
- Show a downside case when one open finding could remove a quantified slice of revenue.

## The open findings set the recommendation

Use exactly one of these, stated on the memo's first line:
- **Proceed** ("subject to the conditions below" when manageable items are open): no must-address finding is open after the status reading, and the price sits within or near the supported range.
- **Hold: do not sign until the conditions are met**: one or more must-address findings are open but curable by documents or actions before signing. Say what price the IC can support once they clear.
- **Decline**: an open must-address finding the seller cannot cure by producing a document, because it turns on who the buyer is or on a third party's stated refusal (a partner, bank, licensor or regulator has said it will not continue with this kind of owner; the thesis asset cannot legally transfer), or the ask sits far above any supportable value. Say what would have to change to re-engage.

An open must-address finding always blocks Proceed. Price is a separate verdict: "at the ask", "below the ask, at up to $X", or "the ask is not supportable". Do not let a strong valuation argue a blocker away, and do not hold or decline a deal with no open must-address finding.

**Thesis and primary risk.** The thesis is one or two sentences: why this asset is worth owning, in the input's terms. The primary risk is the single finding that most threatens that thesis; it must be a row in your risk table, named with its row number, and the conditions must carry it.

## Conditions tied to findings

Each condition or data request names: the finding (by row), the exact document or party, who obtains it (deal counsel, regulatory counsel, the financial diligence lead, the commercial lead), when (before signing or before close), and what happens if it fails (walk, reprice to a figure you computed, escrow or specific indemnity). Generic requests ("further diligence", "monitor") are not conditions.

## The memo

Before writing, call read_reference on `references/worked-memos.md`: invented deals written up in full, one held, one approved, one declined. Take the form and the reasoning, never the facts. Your reply looks like one of those memos: it opens on its `## ` line. No lead-in sentence, no "Analysis" block, no step list before or after it.

The reply begins `## <Target>: IC memo`, with nothing before it, not even a sentence. Then, in this order:
1. **Recommendation**: the verdict line, the price verdict, and two to four sentences naming the findings and figures that decide it.
2. **Thesis and primary risk**.
3. **Risk table**: `# | Finding | Tier (given) | Status given → as read | Effect on the decision`. One row per finding in the input's order, plus a line on any escalation or flagged contradiction.
4. **Financial base**: reported to normalised, each adjustment as arithmetic.
5. **Valuation**: the comp verdicts, the positioning, the range with each product shown, the ask's implied multiple, any downside case.
6. **Conditions and data requests**: numbered, each tied to a row.
7. **Gaps the IC should know**: what the input does not say that would change the answer (two to four bullets), only if there are real ones.

Write for a committee that will act on it: figures from the input or your shown arithmetic, no padding, no restating the artifacts. Table cells are a few words each; reasons go in one clause. Fit the length to the deal: a clean deal gets a short memo, contradictions and blockers get the space, and the whole memo stays under 5,500 characters, about the length of the worked cases. No numeric risk scores or probabilities the input does not give.
