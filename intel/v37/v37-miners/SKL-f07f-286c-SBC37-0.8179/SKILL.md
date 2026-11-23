---
name: ic-memo-evidence-authority
description: Drafts a five-section investment committee memo (thesis, tiered risk table, defended valuation range, recommendation, conditions) from a risk register, a financial write-up and a comp table. It works by asking, for every question the committee must answer, which piece of input has the authority to settle it. Documents from outside parties (regulator notices, executed contracts, consents, audit opinions, closure letters) outrank hard figures in the financial write-up. Those figures outrank analyst tier and status labels, which in turn outrank seller, banker or management characterisation. A status label never closes a finding that the narrative shows is still live: a deferral, a belief or a "substantially done" is not closure. The value base is the revenue or earnings the buyer actually keeps (recurring, economic, transferable, after lost customers), never the base the seller chose. The multiple comes from comps that share the target's model, growth and margin, and control-premium deals and outliers are named and excluded. The ask is something to compare against, not evidence of value. What the committee can vote for is capped by the highest-severity finding that is not closed by a document. Every condition names its finding and the document that would close it. Where the input is silent, the memo says so and turns the gap into a data request instead of filling it. Output only the finished memo, opening with the decision.
---

# IC memo: who gets to settle what

An IC memo rules on evidence. The three artifacts you receive speak with different authority, and most bad memos let a weak source settle a question that only a strong one can answer. For each question below, decide which input has standing to answer it. The thesis, table, range, vote and conditions then follow from those rulings.

## The authority ladder

1. **Outside-party facts:** regulator notices and deadlines, executed contracts with their expiry and termination rights, consents, audit opinions, closure letters, filed claims.
2. **Hard figures** in the financial write-up: reported revenue, margins, EBITDA, cash, debt, retention, concentration shares.
3. **Analyst labels** in the risk register: tier (how bad) and status (how closed).
4. **Interested-party characterisation:** "adjusted" earnings, "voluntary" churn, "we expect to retain", projections resting on unconverted pilots, comp lists lifted from a sell-side deck.

A lower rung never overrules a higher one. When two rungs collide, the higher one wins and the memo says so. The contradiction is itself a finding, and the committee needs to see it.

## Decision matrix

| Question | Settled by | Not settled by | If unsettled |
|---|---|---|---|
| Is the finding closed? | a closing document or event stated in the input | a status label, a deferral, counsel calling it nearly done, management confidence | treat it as open at its stated tier |
| How severe is it? | the register's tier, tested against what it touches (share of revenue, licence to operate, core IP) | the tone of the narrative | keep the tier; argue a re-tier only with a figure |
| What base takes the multiple? | the recurring, economic figure left after removing one-offs, pass-through volume, unaudited restatements, non-transferable sources and departed customers | the seller's quoted base, or add-backs that actually recur | value the surviving base and show the bridge |
| Which multiple? | comps with the same model and nearby growth and margin | strategic or control-premium deals, hypergrowth outliers, one convenient comp | name each inclusion and exclusion with a reason |
| Is the price right? | the derived range | the ask | state the ask's premium or discount to the range in % |
| What can the IC vote? | the worst open top-tier finding | upside or polish | see the vote notes |

## Notes on applying the matrix

**Closure.** "Resolved" means something in the input closes the finding. A review that was postponed, a re-bid still running, a closure letter not yet issued or a consent not yet obtained all mean the finding is open, whatever the column says. Severity and closure are separate axes:
- An open manageable item becomes a condition or covenant.
- An open top-tier item blocks a clean proceed.
- A blank or missing status column means the status is not established. Treat the finding as open and request the evidence.

**Base.** Strip items from the base in this order:
1. one-time project revenue;
2. pass-through volume, down to the revenue the business keeps;
3. restatements the auditor has not opined on;
4. revenue from sources that lapse on change of control (grants, licences, sponsor relationships);
5. customers already lost.

Accept an add-back only if it is documented and truly non-recurring. A "strategic investment" that will recur is a cost. If EBITDA on the surviving base is negative or unclean, say that EBITDA multiples are not meaningful and value on revenue.

**Comps.** Compute the median of the included set yourself. Place the target against it on growth and margin. If the target trails on both, price it in the lower part of the range; if it leads, say why it still does or does not earn the top. When the comps' business mix is unknown (hardware against software, for example), say the margin comparison is weakened and consider valuing the segments separately. Range = base × low multiple to base × high multiple, with the arithmetic printed. Cross-check against an EBITDA multiple only when EBITDA is positive and clean. Recompute every product before writing it down, because one wrong figure undermines the whole valuation.

**Vote.** There are three positions:
- **Proceed:** no top-tier finding is open, and manageable items become conditions.
- **Proceed only subject to conditions precedent before signing:** a top-tier finding is open, but a named document can close it in time, it leaves the base intact, and price protection backs it (escrow, specific indemnity, walk right).
- **Do not proceed on these terms:** the open finding is structural (it takes away a licence to operate, a major revenue source or core IP), or the ask sits far above any defensible range. In that case name the price or event at which you would re-engage.

When the top tier is genuinely closed, do not invent blockers; a clean deal deserves a clear go.

**Conditions.** Each condition gives the finding, the document or event that closes it, and the consequence if it fails (walk, price cut, escrow). Never invent names, dates, amounts or owners the input does not give. A missing figure becomes a data request.

## Writing it

Output only the memo, with no working notes or restated procedure before it.

Open with a short decision paragraph covering the vote, the range against the ask, and the finding that drives the vote. Then give the five sections:
- **Thesis:** why the asset is attractive, and the primary risk that could break the case. That risk must appear in the table.
- **Risk table:** deal-breakers above manageable items. Columns: finding, tier, register status, status on the evidence, consequence.
- **Valuation:** the base bridge, comps in and out with reasons, the multiple, the arithmetic, and the gap to the ask.
- **Recommendation.**
- **Conditions.**

Write like a senior partner talking the committee through the deal: direct, first-person plural, concrete numbers, and reasoning visible in sentences such as "the register marks this closed, but the write-up shows...". Vary sentence shape from one finding to the next, and never stamp the same phrasing on every row. Follow any length bounds the request states. Otherwise aim for 3,000–4,500 characters in total, with the thesis and recommendation each a tight paragraph. Copy input figures exactly. Show the arithmetic behind every derived figure, and state your confidence plainly where the evidence is thin.

## Miniature (invented)

**Inputs.** The target is Brindlecove, a scheduling platform for dental labs.
- Register: "state-board data-sharing approval: top tier, resolved." The write-up says the board's hearing was moved to next quarter.
- Revenue is $10.9M, including a $2.7M one-off migration fee. The ask is $58M.
- Comps trade at 3.9x, 4.5x and 5.0x. A fourth deal at 7.7x was a take-private at a strategic premium.

**The memo opens:** "We recommend against proceeding at $58M. We would support an offer near the top of a $32.0M–$36.9M range once the board's approval is issued in writing. The register calls that approval closed, but a postponed hearing is not a decision. Until a written approval exists, the platform's core data flow has no confirmed licence."

**Valuation.** The recurring base is $8.2M ($10.9M − $2.7M). The 7.7x deal is excluded because it includes a premium for control. Brindlecove's growth trails the included median, so we apply 3.9x–4.5x: 8.2 × 3.9 = $32.0M and 8.2 × 4.5 = $36.9M. The ask sits about 57% above the top of that range.

**Condition.** Written board approval before signing. If the board denies it, we walk; there is no price cut that cures a missing licence.
