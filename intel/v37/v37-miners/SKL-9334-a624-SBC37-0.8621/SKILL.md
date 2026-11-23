---
name: ic-memo
description: Writes a five-section investment committee memo from a deal's risk table, financial narrative and comparables.
---

# Writing the investment committee memo

Committees rarely lose money on the risk everyone debated. The loss hides elsewhere: in a status marked resolved while its process was still running, in a multiple laid on revenue the buyer will not own, in a comparable whose price was set in an auction. I write each memo as the member who will have to explain the vote a year from now. The three artifacts disagree; the memo shows each disagreement instead of smoothing it over. Every number either appears in the inputs or is worked from them in plain view, and a number the inputs lack (an asking price, a comp's size, mix or EBITDA) is called missing.

## How each row reads at the gate

1. **Tier as given.** The analyst's tier stays on every row, because the committee has to see the analyst's own reading. When the table uses other tier words, one sentence above it maps them: the highest tier is must-address and everything below it manageable. If a tier looks too low (an informational row the price depends on, a manageable row that already breaks a standard), the observation says so, with the reason and what would settle it; the tier itself never changes.
2. **Status as given, then tested.** Blank, in progress and unresolved are open. Resolved is open only where the packet says the resolving step has not happened, in the narrative or in the row itself: a re-bid is live, a review was deferred rather than closed, an auditor has yet to opine, a settlement is unsigned. The memo quotes that statement beside the status. Two things are not such a statement: the row's own description of the exposure (a termination right, a pending application, a claim once brought), which says what the risk is, not that its resolution failed; and a document the packet does not attach. A Resolved status nothing contradicts stands at the gate, however serious the exposure; the memo says the source reports it resolved, and the paper that would show it (a consent, an amended contract, counsel's opinion) becomes a closing deliverable.
3. **The call follows.** Holding back when no must-address row is open is as wrong as proceeding over an open one. So proceed when no must-address row is open; a manageable row, open or not, never holds the call back: it gets a named mitigation (an escrow, a specific indemnity, insurance, a retention agreement, a closing deliverable). Request more data when a must-address row is open and each open one is a question a document can answer. Pass when the packet already answers a must-address row against the deal, so no document could clear it: a counterparty has refused, or a term or rule bars what the thesis needs. An ask above the range is a price condition, not by itself a pass.

## Value what the buyer will own

Fix the base before choosing a multiple. Where the reported line passes money through to others, use net revenue; where a one-time project swelled the last twelve months, use recurring revenue; where grant income cannot follow a new owner, use commercial revenue. EV/EBITDA needs positive EBITDA that holds up, each add-back judged on its own: one-off severance may come out, recurring spending called strategic may not; failing that, the EBITDA multiple is not meaningful. The base is a figure the inputs state, or one stated amount taken from another, and never a figure built from a percentage.

## Comparables

Each comparable is listed as in or out, and each one left out gets a one-line reason: a control or strategic premium, a sponsor's premium, growth or margin so far from the target and the others that it prices a different business, or an NM multiple (out on that metric only). A single comp table holds them all and ends with a row of the included medians as plain values. In words, the target's growth, margin and size are set against those medians, each with a direction. The range is two products, each one included comp's own multiple times the base: for an even count, the comps on either side of the median; for an odd count, the median comp and its neighbour in the direction the adjustments point. Each product is written in millions to one decimal, and the ask as one division on that same base. Nothing else gets calculated: no implied margins, no downside case. One base and one multiple carry the range, and a revenue mix the comps do not report stays a direction in words, never priced piece by piece. The range appears first as the closing line of the valuation, straight after its two products, and every later mention repeats it word for word. A share keeps the whole the input gives it; where the narrative's figures conflict, the memo names the one it uses.

## The memo

The title names the target in full and what it sells: `# <target's full name>, <what it sells, in four to six words>: investment committee memo`. The line under it is `Recommendation: <proceed | request more data | pass> · Asking price: <as the input states it, or none given> · <the revenue line as the input states it>`, with nothing after the call word; Section 4 argues that call and never changes it. The five sections then follow in this order, each heading carrying its bound:

1. `## 1. Deal Thesis (up to 150 words)`: the business we would buy and why, on the base and growth that support it, and the primary risk in its risk-table row's own words.
2. `## 2. Tiered Risk Table (one row per upstream finding)`: the tier-mapping sentence if one is needed, then columns #, finding, tier as given, status as given, and an observation under 40 words giving the reading at the gate in plain words; rows keep the input's order.
3. `## 3. Valuation Range (up to 300 words, plus the comp table)`: the base and the multiple with the reason, the comp table, the adjustments in words, the ask, then the two products and the range as the closing line.
4. `## 4. Recommendation (up to 140 words)`: the call word from the line under the title as its first word, unchanged; then the rows that decide it, named by their words, and why each of the other two calls does not fit.
5. `## 5. Conditions and Next Steps (one bullet per risk row, up to 45 words each)`: each bullet starts with its row's words, says who produces what, and ends with when: before signing, at close or after close. Under proceed it is a closing condition or a mitigation; under request more data, the document that would clear the row; under pass, what would have to change to reopen the deal.

The memo runs about 6,000 to 8,000 characters.

`references/worked-memo.md` is one invented deal answered in full, followed by its last two sections as they would read had the evidence allowed proceed or forced pass. Read it once with read_reference, in a single turn, before writing. After it, your whole reply is the memo, in that shape and at that size: its first characters are `# ` and the title, and its last are the final condition.

Your reply now begins with `# ` and the memo title.
