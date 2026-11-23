---
name: closing-record-gate
description: Produces the five-section acquisition committee memo by keeping a signing record for every filed finding. Each row is tested for the instrument that closes it; the verdict follows which instruments exist, which can still be signed, and which can never exist.
---

# Work the closing record, then vote

The memo answers one question: what must exist before this deal signs? Read `references/consent-docket.md` once before writing; it shows a full worked memo plus the same facts re-decided when an instrument is missing or refused. The invented example supplies no facts for the user's deal.

## 1. Build the signing record

Copy every finding row exactly: tier and status as filed, in source order. For each row name the **closing instrument** - the signed writing that would retire it (a consent, a license amendment, a regulator's letter, a settlement, counsel's opinion, a renewal, a signature). Then mark each row:

- `instrument exists or status uncontested` - filed status stands; the instrument becomes a closing deliverable.
- `instrument missing, obtainable` - the status says Resolved but nothing in the packet shows the closing writing exists, or the status is open. The instrument is a gate if the row sits in the register's highest tier.
- `instrument refused or impossible` - the packet records a denial, an unconditional refusal, an expired non-renewable right, or a rule barring this buyer. Only then is the row decided against the deal.

A `Resolved` row whose resolution is inherently a signed writing (a consent, a waiver, an approval for this deal) stands only while nothing says the writing is absent. When the packet shows the writing was never obtained - signature still needed, consent not yet requested, approval applied for but not granted - carry the row as `instrument missing` even beside a Resolved label; that is a factual gap, not a disagreement with the analyst. When the packet is silent about whether the writing exists, accept Resolved and list the instrument as a confirmatory deliverable.

A row describing an exposure that persists by nature (a consent the license always required, a contractual cancellation right, a rival's earlier filing) is describing what the resolution addressed, not proof that resolution failed. Unresolved, In-Progress and blank are always open.

## 2. Count only the highest filed tier

The gating tier is defined by its label's meaning, not its position: Must-Address, Critical, or a tier the source text says must clear before signing. **The highest label present is not automatically a gate.** A table holding only Manageable, Moderate, Low or Informational-style rows has no gating tier at all: N = 0 whatever their statuses. Before drafting, write the count: `N open gating rows` - rows at a deal-blocking tier marked `instrument missing` or `refused`. Lower tiers never enter N, however serious they read; they get conditions and price treatment. If a lower-tier row looks under-tiered, say so beside its filed tier and still exclude it from N.

Then apply the verdict mechanically:

- `N = 0` -> **proceed**. Mandatory - the first verdict word must match the count just printed; a memo that writes `0 open gating rows` and then requests data has contradicted itself and must be corrected before sending. A worrying Manageable row is a condition, never the deciding finding.
- `N >= 1, every open gate is an obtainable instrument` -> **request more data**. Name each missing instrument, its signer, the favorable outcome that reopens proceed, and the refusal that converts to pass.
- `any gate refused or impossible` -> **pass**. One decided break settles the vote; other open rows do not soften it.

Test every adverse statement for a condition word - `if`, `unless`, `provided`, `would`, or a named attribute the buyer may or may not hold. "Will not continue *if* the buyer is not a bank" is a question with an unknown answer, not a refusal: the packet does not establish that this buyer fails the condition, and a qualified substitute may exist. The instrument request is the buyer's qualification evidence or a substitute provider's commitment. Only a packet that states the condition fails for this buyer AND names no substitute is `refused`. When the packet never states whether this buyer holds the qualification, the answer is unknown - unknown is a request, never a failure. Do not assume, infer or write that the buyer is disqualified.

## 3. Price the transferable base, not the headline

Restate the base to what this buyer will actually own: subtract stated one-time income, departed income and revenue that cannot transfer; keep contracted revenue merely exposed to renewal and address the exposure in placement or consideration. Never substitute a forecast for realized revenue. Use the metric the comparables report; when EBITDA is negative or NM, EV/Revenue is the working metric and EBITDA a cross-check.

Give every named comparable an in/out decision with a reason - completed control sales, different-metric quotes and far-off growth or margin profiles are out, each named. From retained peers justify a low and a high explicit multiple against the target's growth, margin, mix and size. Write exactly two products:

`low multiple x corrected base = low EV`
`high multiple x corrected base = high EV`

The printed range must equal those products everywhere they appear. An ask above the range is a pricing condition, never a pass by itself. Without supplied debt and cash there is no equity bridge; say so. Never invent retention rates, escrow sizes, deadlines or thresholds.

## 4. Deliver the finished memo

First line: `**Recommendation: <proceed | request more data | pass>** -- <deciding finding>; <defended EV range and ask if given>.` Then exactly:

1. `## 1. Deal thesis` - what is bought, the sustainable base, the primary risk that also appears in section 2 (max 150 words).
2. `## 2. Tiered risk table` - every filed row, source order: finding, filed tier, filed status, instrument mark and consequence in under 40 words. Below it, the `N open gating rows` sentence.
3. `## 3. Valuation` - base bridge, every comp named in or out, placement, the two products, ask comparison (max 300 words plus tables).
4. `## 4. Recommendation` - the identical verdict word first; the rows that decide it; why each other verdict fails on this record (max 140 words).
5. `## 5. Conditions / next steps` - one bullet per risk row: the instrument or mitigation, its responsible role, timing relative to signing, consequence if unmet.

A complete professional document: no placeholders, no working notes, no invented facts. Under 900 words. Before answering, verify N against the tier column, both products, every copied status, and that the first-line verdict equals section 4.
