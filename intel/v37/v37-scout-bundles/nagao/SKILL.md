---
name: investment-committee-memo-writer
description: Writes the investment committee memo a deal team submits for a go or no-go decision, working from a risk classification table, a financial narrative and a comparables set. Covers the deal thesis, the tiered risk table, a valuation range defended from a named peer set, the recommendation and the conditions; checks every recorded status against the other artifacts, corrects the earnings or revenue base before pricing it, lets only the gating tier stop a deal, and ties each condition to the finding it closes.
---

# The IC memo: from three artifacts to one decision

The committee reads the memo to answer three questions: can we sign, at what price, and what must be true first. The three artifacts arrive written by different analysts, and they rarely agree with each other completely; the memo's value lies in noticing where they disagree and saying which reading the committee should rely on. A memo that copies the risk table's labels, prices the seller's headline figure and recommends "proceed" has done none of that work.

## Gating findings and what "Resolved" can be trusted to mean

The risk table's highest tier is the gating tier, whatever it is called (Must-Address, Critical, Tier 1). A gating finding that is still open stops the deal. Findings in any lower tier (Manageable, Moderate, Low, Informational) never stop a deal on their own, however alarming they read; they move the price, shape the structure, or become conditions. Say which labels you treated as gating when the table does not use Must-Address.

Unresolved and In-Progress mean open. "Resolved" is the analyst's word, and it holds unless the artifacts themselves undo it. Two things undo it: another artifact or an appended analyst note states that the closing step has not happened (the contract is still out to re-bid, the regulator deferred the review instead of closing it, the permit was applied for and not granted), or the finding's own text calls a claim, dispute, review or re-bid against the target still pending. Anything short of that is not a contradiction. A finding that describes an exposure which persists by its nature (a licensor whose consent is needed, a customer's right to cancel, a rival's earlier filing) can be resolved in the analyst's sense; accept the label, ask for the document that resolved it as a condition, and let the remaining exposure move the price. A lower-tier finding recorded Resolved while its text says claims are pending is read as open and handled as a condition.

## The base comes before the multiple

Ask five questions of the numbers in the financial narrative before multiplying anything. Is any revenue one-time (a single project, a bulk sale) and how much margin came with it? Will all of it transfer to a buyer, or do grants or change-of-control terms leave some behind? Is it reported gross of costs the business merely passes through, so that net revenue is the honest base? Has any of it already left with customers who cancelled? Are the seller's EBITDA add-backs genuinely non-recurring and evidenced, or are they operating costs renamed (marketing, "strategic" spend)? Revenue or EBITDA that fails a question comes out of the base, and the memo says how much. Forecasts that depend on pilots or prospects converting are not a base. When reported EBITDA is negative, EV/EBITDA is not meaningful, and an adjusted figure built on contested add-backs does not rescue it.

## Pricing from the peer set

Use the comparables the artifact gives you and nothing else. Leave out, naming each one and the reason, any peer priced on a different footing (a past acquisition that carried a control or private-equity premium, when the others are trading multiples) and any peer whose growth or margin is far from the target's. From the peers kept, choose the two or three nearest on growth and margin and set the target among them: a target growing slower or earning less than those peers sits low, and a weakness the peers do not share (shrinking net retention, a hardware-heavy mix, a lapsing right) pushes it lower. If the artifact lacks something you would need (an asking price, the peers' revenue mix), say so plainly and proceed without inventing it.

Write each end of the range with its working, splitting the multiple into its whole and decimal parts and multiplying each by the base: 3.7x × $20.0M = (3 × $20.0M) + (0.7 × $20.0M) = $60.0M + $14.0M = $74.0M. Only a whole multiple (11.0x) skips the split; any multiple with a decimal part is always split. The working makes the figure reproducible and catches slips; round to one decimal of $M. Keep every amount in the currency the input uses. If the peers give a second multiple, test the range against it once and explain any gap (a target whose EBITDA margin is below the peers' looks dearer on revenue multiples than it is). Finish with the asking price expressed as a multiple of your base and its distance from the range in dollars; with no asking price, the range is bid guidance.

## From enterprise value to what the buyer pays

Peer multiples produce enterprise value. What the buyer actually wires is that figure less net debt (debt minus cash) and adjusted for working capital against a normal level: a target collecting its receivables far more slowly than peers will need cash after close, and the purchase agreement should carry a working-capital peg set at the normal level. Mention the bridge when net debt or working capital is large enough to change the decision; otherwise keep the memo on an EV basis so it compares cleanly with the ask.

## Structuring what the price cannot absorb

Some risks are better handled by structure than by a lower headline number, and the conditions should say which tool fits:
- **Closing condition** for a gating document the seller can obtain (a permit, a consent, a closure letter): no document, no close.
- **Specific indemnity, often backed by escrow** for a known liability with a bounded cost (a pending claim, a tax reassessment under appeal); warranty insurance excludes known issues, so they need their own cover.
- **Contingent consideration** for revenue whose survival turns on a future event the seller cannot settle before close (a contract out to re-bid, a renewal under negotiation): pay for it only if it survives.
- **Price reduction** for a quantified cash need the plan omits (deferred capex, an under-funded obligation).
- **Retention and non-compete agreements** for people the value walks out with.

## The recommendation

The recommendation opens with one of three calls and the reason:
- **Proceed with conditions** when no gating finding is open. If the ask is above the range, the price becomes the first condition (a ceiling at the top of the range); a price gap sets the bid and never decides the call.
- **Do not proceed on current terms** when a gating finding is open. Name the finding and what would let the deal return to the committee.
- **Decline** when a gating finding cannot be cured before close, or the business being paid for will not transfer.

The thesis names the deal's primary risk, and that risk is one of the risk table's rows.

## Conditions

Number them and keep each to one tight sentence. Each names the row it closes, the document or event that closes it (an issued permit, a signed consent, a closure letter, an executed amendment, an audited figure), when it is due (before signing, before close, after close), and what happens if it fails (walk, price cut of a stated amount, escrow, specific indemnity). Requests for missing data go here.

## Format and length

Call `read_reference` for `references/worked-memos.md` first, on its own, and follow the layout it shows. The reply after that call is the memo alone. It starts with `**Bottom line.**` and one sentence giving the call and the finding or findings that decide it, with no figures (the numbers belong in the valuation); the five parts follow. Write it as a document a partner would sign, not a filled-in form: tables only where the committee needs to scan rows, sentences everywhere else. The five parts, with their bounds:
- **Deal thesis.** 80 to 130 words: what is being bought, at what ask, and the primary risk.
- **Risk table**: every finding in the input's order; the "Where it stands" cell says in plain words whether the finding is open and whether it blocks the deal.
- **Valuation**: 140 to 240 words of prose: the peers kept and dropped with their reasons, the base, the range, the test and the ask.
- **Recommendation.** 60 to 120 words: the call and its reason first.
- **Conditions**: three to six numbered items, each one tight sentence of at most 30 words naming the finding it closes, the document, the timing and the consequence.

Keep the arithmetic to the range, the revenue or EBITDA test and the ask. Quote any other exposure exactly as the artifacts state it (a share of hardware revenue stays a share of hardware revenue) instead of converting it into new dollar figures, and size escrows or indemnities by the amounts the artifacts give, never by an invented percentage. No figure, name, date or deadline appears that the artifacts or that core arithmetic do not supply.
