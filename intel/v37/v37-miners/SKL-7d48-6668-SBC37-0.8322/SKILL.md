---
name: ic-memo-failure-guards
description: Drafts a five-part investment committee memo (thesis, tiered risk table, defended valuation range, recommendation, conditions) from a deal-risk table, a written account of the target's financials and a comp table. It is built around the five ways these memos usually fail, with one habit that prevents each. The failures are trusting a status label that the written account contradicts, pricing a multiple off a revenue or EBITDA base the comps do not share, using every comp the banker supplied (including control-premium deals and growth outliers), recommending a go while a blocking-tier finding is still open, and writing conditions that could be pasted into any deal. Before writing, the agent reads the three artifacts against each other. It re-labels open items honestly and rebuilds the base by removing one-offs, pass-through volume, non-transferable revenue, departed customers, unaudited restatements and add-backs. It names comp inclusions and exclusions with reasons and shows range arithmetic against the ask that anyone can reproduce. It compares the go/no-go options side by side, picks one, and ties every condition to a named finding with a test and a consequence. It never invents names, dates or figures that the input lacks, and it says plainly what the artifacts do not establish.
---

# IC memo: know how it fails, then avoid each failure

A failed IC memo almost always comes from a reasoning slip. Prose is rarely the cause. Read the three artifacts against each other first, run the guards below, and only then write. Output only the finished memo. Do not add a preamble, restate this procedure, or show scratch work.

## Five failure modes and their guards

| Failure | How it shows up in a draft | Guard habit |
|---|---|---|
| Label trust | A finding marked closed is treated as closed, yet the written account says a review was only deferred, a re-bid is still live, or a consent is not yet in hand | A status is a claim, not a fact. Test every "closed" item against the narrative facts. If the exposure is still live, carry it as open and name the artifact that disagrees |
| Base mismatch | The multiple is applied to gross volume, to revenue inflated by a one-off project, to grant or customer revenue that will not survive close, to an unaudited restatement, or to add-back EBITDA | The base must be the metric the comps are priced on and the business the buyer will actually own. Rebuild it and show each subtraction |
| Comp drift | Every comp is averaged, including a control-premium take-out or a hyper-growth outlier, or a multiple is quoted with no named set | Mark every comp in or out and give the reason. Anchor on the clean set's median, then adjust for the target's growth and margin gap |
| Verdict leak | The memo says "proceed" while a blocking-tier item is open, or declines a deal whose only issues are manageable | Derive the verdict from tier × true status (ladder below) |
| Floating conditions | "Complete customary diligence" or "retain key staff" | Each condition names its finding, the proof that clears it, and the consequence if it is not met (price, holdback, walk) |

## Reading the tiers

Tier vocabularies differ (blocking/critical, manageable/moderate, informational/low). Map them to three classes:
- **Blocking:** could on its own destroy the deal's value or legality.
- **Manageable:** can be priced or integrated around.
- **Informational:** context for valuation.

A low-tier item can still drive valuation. Dollar retention below 100% or a one-off revenue spike belongs in the base and the thesis even when tiered informational. If you think an analyst mis-tiered a finding, keep their tier visible and argue the re-tier in one sentence; never rewrite it silently. If a status column is blank, missing or contradicted, say so. A missing closure document does not mean the item is closed.

## Verdict ladder

Before choosing, lay the options out side by side. The usual set is: proceed at the ask; proceed at a revised price with conditions; sign only once conditions precedent are met (exclusivity held); pause or decline. Give each option one line on what would have to be true. Then decide:
- **A blocking item is truly open (mislabelled ones included):** no unconditional proceed. If the item can be cured before signing, recommend a conditional proceed with the cure as a condition precedent. If it cannot be cured or priced (a core licence that cannot be transferred and has no consent path, or regulatory loss of the revenue engine), recommend pause or decline.
- **All blocking items are genuinely closed and only manageable items are open:** proceed with conditions, at a price that reflects them.
- **The ask is above your defended range:** say so and state the gap in dollars and as an implied multiple. A go happens at your price, not the seller's.

Put the verdict as one decisive sentence at the top of the thesis, and do not walk it back with hedges later.

## Valuation discipline

1. Choose the primary multiple the comp table actually supports. Use revenue when the comps' EBITDA is not meaningful or the target loses money. Use EBITDA only as a cross-check, and only when both the target and the comps have real EBITDA.
2. Rebuild the target's base and state it as one number with its derivation. Management projections that depend on unconverted pilots or prospects are upside to mention. Never price on them.
3. Define the clean set, listing inclusions and exclusions with reasons (control or sponsor premium, scale, business mix, growth outlier).
4. Position the target against the clean set on growth and GM, and state the direction of the adjustment. If the comps lack data you need, such as hardware/software mix, say so and widen the range rather than pretend precision.
5. Compute the range as low, mid and high multiples × base, writing out each product. Then divide the ask by the base to get the implied multiple, and state the gap to your midpoint.

Recheck every product and quotient before you write it, because one wrong figure discredits the whole memo. Never take a median that includes comps you excluded.

## Writing it

Use five sections in this order: thesis, risk table, valuation, recommendation, conditions. Follow any length limits the request states. If it states none, keep the thesis to about 120–180 words, the recommendation to about 150–250, and the whole memo to about 2,500–4,500 characters.

- **Thesis:** the verdict, one or two facts from the input that make the asset worth owning, and the primary risk by name. That risk must also appear in the risk table.
- **Risk table:** columns for finding, tier as given, true status (with your note wherever it differs from the label), deal impact, and treatment. List blocking items first, then the rest by value at stake.
- **Valuation:** connected prose plus the arithmetic. A small table of comps in and out is fine.
- **Recommendation:** the options compared, then the call, with its causal chain traced to the specific findings.
- **Conditions:** numbered, each tied to a finding, grouped as before signing, before close, and post-close. Use only timing the input supplies, such as a regulator's response window or a contract expiry. Do not invent dates, people, owners or holdback sizes. A price chip or holdback is acceptable only if it is derived, visibly, from an input figure.

Write the way a deal lead would, in connected prose. Use terms like true status, rebuilt base, clean set and condition precedent where they fit. Vary sentence shapes across sections and do not copy this file's headings. When the artifacts leave something unestablished (an auditor's opinion, a re-bid outcome, a counterparty's consent), call it unknown and turn it into a data request. Never assume the favourable answer.

## Miniature (invented)

**Inputs**
- Target: Kestrelmoor Dental Cloud, a practice-scheduling SaaS business.
- Risk table:
  - (a) Payment-processor partnership, blocking, labelled closed. The written account says the partner's renewal letter is unsigned.
  - (b) State dental-board approval for data sharing, blocking, underway.
  - (c) Top client is 27% of ARR, manageable.
- Financials: trailing revenue $26.5M, which includes $2.0M of hardware resale pass-through. Growth 16%, GM 70%. Ask $118M.
- Comps: four SaaS peers at 3.4x, 3.9x, 4.3x and 4.6x (growth 13–24%, GM 68–76%), plus one strategic take-out at 6.2x.

**How the memo handles it**
- **Verdict:** conditional proceed, but not at the ask.
- **Base:** $24.5M, which is $26.5M less the $2.0M pass-through.
- **Comp set:** the 6.2x take-out is excluded because it carries a control premium. The clean median is 4.1x. The target sits below that median on growth and GM, so the range is 3.6x / 4.1x / 4.4x, which gives $88.2M / $100.5M / $107.8M.
- **Ask:** $118M implies 4.8x on the rebuilt base, above every clean comp, and is $17.5M over the midpoint.
- **Item (a):** carried as open despite its label.
- **Items (a) and (b):** both become conditions precedent, each with its required proof (a signed renewal; the board's approval letter) and the consequence that we walk if either fails.
- **Item (c):** becomes a post-close retention plan and part of the case for pricing low in the range.
