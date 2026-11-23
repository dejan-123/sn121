---
name: concentration-impairment-memo
description: Writes the five-section investment committee memo by auditing whether the priced income is actually deliverable to this buyer. Filed findings are tested for revocable rights, prior claims and missing instruments; the valuation prices only revenue that survives the audit.
---

# Audit deliverability before price

Read `references/channel-impairment.md` once; it shows a full worked memo and the same record under a refused instrument. The invented example supplies no facts for the user's transaction.

## 1. Test whether the income can be delivered

Carry every finding row exactly as filed - tier, status, order. Then ask of each row: does any fact in the packet make the priced income undeliverable, whatever the status says?

- A filed `Resolved` normally stands; the resolving instrument (consent, amendment, opinion, renewal) becomes a confirmatory closing deliverable. A row merely describing a persistent exposure - a consent the license always required, a cancellation right, a rival's filing - describes what the resolution addressed, not that it failed.
- `Resolved` fails only where the packet states the closing act never happened or cannot hold: a signature still outstanding, a consent never requested, a hearing pending, an appeal live, or a right that ends on a fixed date with no successor in the record. The two narrow tests below can reopen a filed `Resolved`; an already-open row (Unresolved, In-Progress, blank) is simply an open gate asking for its instrument - never `decided against`.
- **Revocability test, applied narrowly:** an unqualified at-will termination or cancellation right held by a counterparty cannot be "resolved" - it can only be replaced by a new commitment that the packet does not show. When such a row is filed `Resolved` at the blocking tier AND covers a dominant share (roughly two-fifths or more) of a stated revenue line AND the packet names no alternative channel, mark it `decided against`: the priced income is revocable at another party's option and no instrument in the record secures it.
- **Priority test, applied narrowly:** where a blocking-tier row filed `Resolved` shows a third party's earlier filing or registration claiming the specific exclusive right the thesis prices, and the packet supplies no opinion, consent or priority ruling securing the target's right, mark it `decided against` as well. A license term that a counterparty's signed consent can cure is an instrument question, not a priority defeat.

Unresolved, In-Progress and blank are open - and an open gate stays a `request more data` question whenever a named instrument can still answer it: pending litigation asks for counsel's assessment, a consent-requiring license asks for the signed consent, a pending filing asks for its grant or refusal. Open lower-tier rows take conditions and price treatment, never the verdict.

## 2. The verdict follows the deliverability count

The blocking tier is defined by its label's meaning - Must-Address, Critical, or a tier the source itself calls pre-signing. The highest label present is not automatically the gate: a table holding only Manageable/Informational-style rows has N = 0 whatever their statuses. Count `N` = open or decided-against rows at the blocking tier only:

- `N = 0` -> **proceed**. Mandatory even when lower tiers are unsettled; their remedies go to section 5.
- `N >= 1, all open gates answerable by a named instrument` -> **request more data**: the instrument, the signer, the favorable result that reopens proceed.
- `any gate marked decided-against, or an unconditional refusal / express bar recorded` -> **pass**. A conditional refusal containing `if`, `unless`, `provided` or `would` is a question with an unknown answer - the packet does not establish that this buyer fails the condition, so request its answer (this buyer's qualification or a qualified substitute's commitment), never an assumed no.

When two top-tier rows are each decided-against - revocable dominant income plus a prior claim on the priced right - the break is compound: the thesis loses both the revenue it priced and the right that justified the multiple. Pass is the only honest call; do not soften it into diligence.

## 3. Price what survives

Bridge reported revenue to the base this buyer can collect: remove stated one-time items and any income line an open or decided-against gate makes undeliverable - quantify it in the bridge, do not leave it in silently. Keep contracted revenue merely exposed to ordinary renewal risk and handle it in placement. Pick the metric the comparables report; NM earnings push the working metric to EV/Revenue.

Every named comparable gets an in/out decision with a reason. From retained peers choose two explicit multiples justified by the target's growth, margin and concentration risk - dominant revocable channels argue for the bottom of the defensible band, never above it. Write exactly two products and make the printed range equal them:

`low multiple x corrected base = low EV`
`high multiple x corrected base = high EV`

An ask above the range is a counter-offer, not a verdict input. No debt and cash, no equity bridge - say so. Invent nothing: no holdback sizes, deadlines, retention rates or thresholds the packet does not state.

## 4. Write the finished memo

First line: `**Recommendation: <proceed | request more data | pass>** -- <deciding finding>; <defended EV range and ask if given>.` Then exactly five sections:

1. `## 1. Deal thesis` - asset bought, deliverable base, primary risk repeated in section 2 (max 150 words).
2. `## 2. Tiered risk table` - every filed row in order: finding, filed tier, filed status, deliverability mark, consequence under 40 words; then the `N open gating rows` sentence.
3. `## 3. Valuation` - base bridge showing any removed income line, all comps named in or out, placement, the two products, ask comparison (max 300 words plus tables).
4. `## 4. Recommendation` - identical verdict first; deciding rows; why the other two verdicts fail (max 140 words).
5. `## 5. Conditions / next steps` - one bullet per row: instrument or mitigation, responsible role, timing, consequence if unmet.

Finished committee prose, under 900 words, no placeholders or self-check notes. Verify N, both products, every copied status and verdict consistency before answering.
