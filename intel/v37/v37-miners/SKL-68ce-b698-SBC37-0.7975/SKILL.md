---
name: ic-memo-failure-guards
description: Drafts a five-section M&A investment committee memo from a risk classification table, a financial narrative and a comps table by guarding against the ways IC memos go wrong. Decides whether a finding is open from all the artifacts, not the status column; calls NO-GO at this time while any Must-Address finding is open, however fair the price, and otherwise PROCEED WITH CONDITIONS capped at the top of a defended range. Picks the multiple by the sign of EBITDA, names each comp in or out with a reason, values only recurring revenue the buyer will own, shows multiple × base, and ties every condition to a numbered finding.
---

# Where IC memos go wrong

**1. Trusting the status column.** A finding is **open** if Unresolved or In-Progress, or if marked Resolved while another artifact (a note, the narrative) says it is live: labels are claims, artifacts evidence.

**2. Misreading a row's own wording.** Row text records the finding as first found, never against its status. A Resolved row whose wording still describes the exposure, and nothing else confirms the fix, is **questioned**: the proving document becomes a condition precedent; alone it does not block.

**3. Taking near-closure for closure.** Counsel's view, an expected approval, a filed appeal or an agreement in principle leaves a matter open; only the regulator's, court's or counterparty's own document closes it.

**4. Letting price override a deal-breaker.** Any open Must-Address → **NO-GO at this time (do not proceed to signing)**, however fair the price: price cannot size it. Otherwise **PROCEED WITH CONDITIONS** at no more than the top of the defended range, never unconditional while a condition precedent stands. Name the condition whose failure would reverse the call.

**Value:** every comp in or out; EV/EBITDA if EBITDA > 0, else EV/Revenue; owned recurring base; two closest comps bound it; multiple × base, then range.

Call read_reference on `references/prevented-failures-memos.md` once, before writing; one read gives you all three deals.

## Failures that distort the value

**5. Averaging in premium or outlier comps.** Name every comp as included or excluded, with the reason. Exclude a past acquisition's multiple when the others are trading peers (it carries a control or sponsor premium); a peer the target does not resemble (growth about 1.6 times the target's or more, a growth or margin gap of 20 points or more, or many times its size); and a comp marked NM on the multiple in use. Why: one outlier drags the average away from what this asset would fetch.

**6. Pricing on the wrong multiple.** EV/EBITDA when the target's EBITDA is positive and the comps report it; EV/Revenue when EBITDA is negative or the comps give none; the industry's own metric (net revenue, say) when the artifacts say the comps use it. Why: a multiple of a negative or absent figure means nothing.

**7. Valuing revenue the buyer will not own.** Remove one-time revenue, revenue that ends or cannot transfer on a change of control, and volume already lost. Use net rather than gross where the comps do. Treat an unaudited or disputed uplift as a sensitivity. Never price projections that need prospects or pilots to convert. If these cuts turn EBITDA negative, value on revenue. Why: the buyer pays for what recurs after closing.

## Failures of form, and the shape that prevents them

**8. Burying the decision.** Write the memo directly, with no analysis before it; do not narrate the process or mention the skill. The Input check carries the recomputed figures and section 3 the arithmetic, so a separate walk-through only repeats numbers and invites mismatches. Run 4,500-7,000 characters in exactly this order:

- `# Investment Committee Memo: <target> (<sector>)`
- `**Recommendation: …**` and a one-sentence reason, first so it survives a cut-off.
- `**Input check**`: at most 6 bullets and 120 words on scale, open rows, contradicted or questioned labels, figures that do not reconcile, missing inputs.
- `## 1. Deal Thesis (≤ 120 words)`, ending with a **Primary risk:** sentence.
- `## 2. Tiered Risk Table`, the only table: # | Finding | Input tier / status | IC treatment | Why. Then 2-3 lines separating deal-breakers from manageable risks.
- `## 3. Valuation Range`.
- `## 4. Recommendation and Consistency Check (≤ 120 words)`.
- `## 5. Conditions and Data Requests`: 4-6 numbered items.

**9. Generic conditions.** Each condition cites its finding (#n) or the input gap and names the document, the party that supplies it and the timing. Why: "complete confirmatory diligence" gives the IC nothing to check.

**10. Inventing missing numbers.** Never invent a figure. If no ask is stated, say so and request it. Where the narrative's own figures do not reconcile, show both sides and request the bridge. Why: one made-up number discredits every true one.

## Finer guards

**11. Asserting a range.** The two included comps closest to the target on growth and margin bound the multiple; state any adjustment as a number with its reason. Section 3 then runs: multiple × named base = value, low and high; quantified unfunded capex deducted; the defended range straight after the primary method's products; any other multiple after it, labelled "cross-check only"; the ask's implied multiples and its distance from the range; equity value = EV − net debt. Why: a range the IC cannot reproduce cannot be defended.

**12. Letting two multiples argue.** When EV/Revenue and EV/EBITDA point to different values, compare implied EBITDA margins (EV/Revenue ÷ EV/EBITDA) and let profitability decide which comps fit. Why: the margin shows which peers earn like the target.

**13. Renumbering or relabelling findings.** Number findings 1..n in input order and keep each number everywhere. Map another tier scale (Critical / Moderate / Low, for example) to Must-Address / Manageable / Informational and say so in the Input check. Why: the IC cross-checks the memo against the source table.

**14. Softening the analyst's tier.** Give each row one IC treatment: Blocks proceed (open Must-Address); Condition precedent; Price or structure; Post-close plan or monitor. An open row below Must-Address is a condition precedent when a document can close it before signing, price or structure when it is quantified, and a post-close plan or monitor otherwise. Never demote a tier; disagree in the Why column. Raise a row whose tier understates it when it sets the valuation base or feeds a blocking row, and say why. Order the table: blocking rows, then conditions precedent, then the rest, each keeping its input number. Why: the IC reads the deal-breakers first.

**15. Taking the seller's figures on trust.** Recompute margins, net debt (debt less cash), each EBITDA add-back on its own (one-time only if the artifacts show it), shares of a total, and the ask as multiples of revenue and of EBITDA. Compute each figure once and reuse it unchanged; compute only what the call, the range or a condition needs; check every product before writing it. Why: a figure that changes between sections breaks trust in all of them.

**16. Contradicting yourself.** The thesis's primary risk is the first row of the risk table. The recommended price sits inside the range. Every figure is identical wherever it appears. Section 4 confirms all three. Why: an inconsistency is the first thing a committee member spots.
