---
name: buyer-price-and-vote
description: Writes a five-part IC acquisition memo by independently setting the buyer's economic base and the committee's risk permission, then reconciling them into a single recommendation, valuation range, risk table and actionable closing terms using only the three supplied artifacts.
---

# Two independent tests before a purchase

One question is "what are we buying and what is it worth?" The other is "can we authorize this transaction on the evidence?" Do not let a strong answer to one question answer the other. A cheap deal with an open blocking risk cannot be approved. A clean deal at an excessive ask is a repricing negotiation, not an automatic walk-away. Read `references/willow-price.md` once: it shows these two questions resolved in a finished memo, with a short alternate vote. Write only the memo for the user's company.

## Permission: use the table as filed, tested against the record

| Evidence pattern | Permission |
|---|---|
| Any filed top-tier row already states a fixed end to the priced exclusive right, a rule excluding this buyer class, or an unconditional refusal with no substitute | `pass` |
| No filed top-tier row exists, or the evidence closes every filed top-tier row | `proceed` |
| Any other filed top-tier row is open and answerable by a named record or outcome | `request more data` |

Lower-tier permits, approvals, claims, repairs and retention work cannot satisfy the first two rows. A conditional warning about an unknown buyer qualification stays askable.

Copy all findings with their tiers and statuses; preserve their order. Determine which filed tier means must clear before a deal. Mark each row's *evidence status* separately. Resolved stands when no newer or external fact establishes that its required remedy is unfinished. The mere description of the old risk or absence of a supporting attachment is not proof that the remedy failed; request the paper as a deliverable. Resolved is disputed when an artifact actually reports that the step has not occurred, the settlement was only postponed, or a purported closing act remains incomplete. Quote the conflicting fact next to the filed status, not in place of it. An open lower-tier row needs a remedy; it cannot gain veto power by sounding alarming. When the source table has no filed top-tier rows, count zero open gates; neither a pending lower-tier approval nor deteriorating retention can create one. Flag apparent under-tiering without rewriting the filed tier.

Apply the permission test in three fixed steps:

1. **Pass for a proved, irreversible block.** A filed top-tier row is decided against the deal when its substance is already adverse even though its Status may read open: a priced exclusive right ends on a stated date, a material right or income is contractually unavailable to this buyer class, or an unconditional refusal has no qualified substitute. One such block calls for **pass** before considering other open rows; more documents about the forbidden item cannot cure it.
2. **Request more data for an askable top-tier gate.** A pending filing, negotiable consent, unsigned document, outside decision, or warning conditioned on an unknown buyer qualification remains askable. Any such open top-tier row calls for **request more data**: name the issuer, favorable result and consequence if it fails. A required provider's "would not continue IF buyer lacks qualification" statement is not proof that this buyer lacks it or that no replacement exists. The absence of replacement-provider evidence is a fact to request, not a substitute for a recorded refusal.
3. **Proceed when the gate count is zero.** If no filed top-tier row exists, or none remains open after evidence testing, the answer is **proceed**. Unfinished Manageable permits, claims, repairs, approvals or retention work cannot become a top-tier row by analysis; their documents, protections and pricing consequences live under proceed, never the verdict.

Use `request more data` only after naming an open filed top-tier row that is not already decided. Use `pass` only after naming the fixed end, express buyer-class bar, or unconditional refusal that makes the block incurable. Do not infer an unprovided buyer qualification.

Price can discipline an offer but does not create or remove a gate.

### Mistakes that change the verdict incorrectly

- **No top-tier row but request more data:** wrong. If every filed row is Manageable or Informational, proceed is required even if lower-tier permits, approvals, claims, retention or proof remain open.
- **Fixed end treated as a missing answer:** wrong. When the thesis prices an exclusive right that ends on a stated date and no successor is on record, the record has already decided the barrier.
- **Conditional warning treated as refusal:** wrong. "Would not continue IF buyer lacks qualification" is not a refusal until the packet establishes the buyer's status and the absence of qualified replacements; ask for those facts.
- **Non-transferable stream treated as a consent question:** wrong. A rule barring transfer to this buyer class already removes that stream; assess the smaller acquired base rather than asking whether the rule exists.

## Price: reconcile the numerator, denominator and peer group

Pick the correct economic base *before* a multiple. Start from the reported figure and show arithmetic for every stated, supportable adjustment: remove nonrecurring income, amounts the buyer cannot acquire, and business already lost; keep future-at-risk income until it is actually lost and expose its downside. Subscription percentage is not permission to discard service revenue; only a line explicitly described as one-time, lost or nontransferable comes out. For gross versus net figures, use the denominator the selected peers use. Never pass a seller's run-rate forecast off as last-twelve-month performance. Test whether an EBITDA adjustment is genuinely nonrecurring; if current EBITDA after defensible adjustments is negative, use an appropriate revenue metric and say why earnings multiples do not price this case. Do not multiply incompatible periods or infer missing revenue mix.

Record every peer's name, its quoted multiple on the chosen metric, and its disposition. A completed control transaction is not an ordinary trading peer; a hyper-growth or high-margin company needs an economic comparison before being excluded. NM on an earnings metric is not NM on revenue. Where peer size, mix or accounting bases are unknown, say which comparison is limited rather than inventing an adjustment. Position the target relative to retained peers using growth, margin, retention and concentration available in this file. Choose low and high multiples from that reasoning, show `low x corrected base = low EV` and `high x corrected base = high EV` exactly, and repeat the same rounded range everywhere. Only derive equity if cash and debt are given. Restate the seller's ask on that same base if stated. If not stated, say "no asking price was supplied"; give the range as an enterprise-value view, not a fabricated bid.

Use numerical discipline: dollar amounts and percentages refer to their actual period and scope, peer multiples to their actual denominator. If a downside is merely possible, do not silently subtract it from the current base *and* haircut the multiple for it. If an exposure has a stated amount, connect it to an instrument or price bridge; do not guess an escrow amount, churn rate, threshold or price haircut. If the input is insufficient to support an endpoint, say which number is missing rather than manufacturing arithmetic.

## Reconciling the two tests into a decision document

Write the opening line last, after the permission and price tests: `**Recommendation: <proceed | request more data | pass>** -- <decisive finding>; <defended range and ask position if known>.` It is the present action, not a prediction of what the committee might do when a document arrives. Follow with:

1. `## 1. Deal thesis` -- up to 150 words: business, defensible earnings or revenue case, and one primary risk from the input risk table.
2. `## 2. Tiered risk table` -- every input row in order, showing exact filed tier/status and one evidence-led interpretation. State how many top-tier rows remain open after the table. Do not replace a source label with the analyst's opinion.
3. `## 3. Valuation` -- up to 300 words plus a peer table: corrected base bridge, included/excluded peers by name, target placement, both products, EV/equity separation, price comparison or no-ask statement. Use the same figures as the opening.
4. `## 4. Recommendation` -- up to 140 words: repeat the opening label and authorize only what the evidence permits now. Explain why pricing neither cures an open gate nor creates one on a clean file.
5. `## 5. Conditions and next actions` -- short numbered actions with row or valuation-gap reference, owner by role, named instrument or proof, signing/closing/post-close timing and consequence if unmet. Use indemnity for a bounded claim, retention for key people, contingent consideration for uncertain future income, and price revision for a quantified gap when appropriate.

Write like a transaction professional, not like a calculator's printout: show calculations in section 3, but discuss their meaning in prose. Aim for 650-950 words, row observations under 35 words and conditions under 45. A blank field is described as absent, not rendered as a fill-in-the-blank marker. Before returning, check the verdict against open gates, recompute endpoint products and implied ask, confirm that the primary risk occurs in the table, and make sure the output contains no invented fact.
