---
name: ic-memo-authoring
description: Writes a five-section investment committee memo (thesis, tiered risk table, defended valuation range, go or no-go, conditions) from a risk classification table, a financial narrative and a comparables set. It checks every status against the artifacts' own text, prices a base that survives the close, names each comp in or out with its reason, and lets only an open must-address finding block a go.
---

# Investment committee memo from three diligence artifacts

The reply is the memo, opening on its `## ` heading; the reading is written inside it (terms block, risk table, section 3), never as notes before it. Every fact comes from the artifacts or arithmetic printed on them.

## Operative rules

**Blocking.** Only a must-address row blocks (on a Critical / Moderate / Low scale, Critical; state the mapping). It blocks while open: Unresolved, In-Progress, or a Resolved the artifacts contradict. With no must-address row nothing blocks: manageable and informational rows become conditions or price points, never a no-go.

**Status test.** A row keeps its tier and status unless an artifact says the matter is still running: a re-tender open, a review postponed, a plan filed but not accepted, a settlement unsigned, a claim still pending, counsel's word with no closing letter, an unaudited restatement. Then print both readings and carry it open, tier label unchanged. Exposure is not contradiction: a cancellation right, a rival's earlier filing, a pending application, a needed consent, a concentration or an expiry is the risk itself, so Resolved stands and the document behind it becomes a condition. Silence about a document reopens nothing. Experts in conflict: report both, carry the less favourable.

**Base.** Price what survives the close. Take out, with its amount: an ended one-time project; revenue the buyer cannot take over (tied to the seller's ownership or legal form); customers gone or under notice (use the run-rate after them); gross pass-through where comps use net revenue; an unaudited restatement uplift. Keep in revenue only at risk (a re-bid, a remediation, a customer without notice) and show its loss once as a downside line; a recurring share or product mix only positions the target. Pilots and projections never enter. A normalised figure the narrative states is used as stated. EBITDA under a multiple is reported EBITDA or the narrative's surviving-base figure, never the seller's adjusted one; negative, or positive only after add-backs, means EV/EBITDA NM. Print: reported LTM − item = pricing base.

**Seller claims.** Low-margin business carries a smaller share of revenue than of volume, so equal shares refute that label; a banker's multiple is checked for its metric.

**Comps.** Every comp gets a role and a reason, even with no exclusions flagged. OUT only: a transaction carrying a control or sponsor premium beside trading comps, or an outlier far from the target on growth or margin. IN, range: the two comps nearest the target's growth rate; their multiples are the range's ends. IN, bound: the rest, quoted by multiple. Slower than every comp: the lowest multiple is the top. Retention under 100% points low.

**Leading method.** The comps' first multiple (usually EV/Revenue) leads; the other is one cross-check. EV/EBITDA leads instead when its range sits wholly below the revenue range and reported EBITDA is positive. The defended range is the leading method's two values.

**Arithmetic.** One operation per line, on input figures or the line above: 2.0x (Comp A) × $30.0M = $60.0M at each end; ask ÷ base = implied multiple; ask − range top = gap. No number the line does not produce; one decimal in $M. The thesis and section 4 quote that same range, never a second one. No ask given: say so, no implied multiple.

**Call and price.** Must-address open: No-go at this time, naming what closes each blocker. None open: Go, with conditions. Then price: an ask above the range is "not at this price"; a go is at or below its top. The thesis's primary risk is a risk-table row.

**Conditions.** Per open finding, accepted resolution or gap: the row, the closing document, who supplies it (a party the input names), when (before signing, before close, or a window the input states). No term, percentage, threshold or date of your own; nothing called obtained unless the input says so. Last: the gap that matters most and its record.

## Notes on the rules

- A Resolved row is contradicted only by words that the matter is still live: a tender still being decided, a review still running, a closing letter still missing. A row whose own text names the risk (who may cancel, who filed first, whose consent is needed) is not reopened by that text.
- In-Progress is open because work under way is not work done; a remediation plan under way still blocks a must-address row.
- Weights between rows go in the risk table's last cell: an operating gap that breaches the standard an open review is testing, an informational revenue item that sets the base, contracts ending within the first year with no renewal in hand, a licence or key person whose loss would set off another row. An alarming row held lower gets its reason there. A zero is a sentence with its reason: "No must-address finding is open: both are resolved and no artifact reopens them."
- A seller's adjusted EBITDA is restated once, with the recurring add-backs put back, only to show what the seller's case rests on.
- A further discount below the lowest comp is named as judgment, never sized with a multiple nobody gave. Never supply a price, consent, cure date, comp business mix or market norm the artifacts lack.
- "Signed renewals from the top three customers" is a condition; "three-year renewals" or "concentration under 50%" invents a term.

## Shape of the reply

Call read_reference on `references/worked-memo.md` before writing: a complete memo for an invented target, and its variants.

The memo goes into the committee pack exactly as sent, every company name in it taken from the input, so the message holds the memo alone, under 7,500 characters: `## [Target]: investment committee memo`, then **Terms read from the artifacts: [Target]**, one short line each in the input's figures: ASK, BASE, TIERS (only when the scale differs), OPEN (the count in words, then each row), STATUS CHECK, COMPS, POSITION (growth and margin beside the two range comps, and which method leads), GAP. Then five sections, each heading with the target's name and its bound:
- `### 1. Deal thesis: [Target] (up to 130 words)`
- `### 2. Tiered risk table: [Target] (one row per finding)`, columns `# | Finding | Table tier / status | Status used | Why (weight, links)`, blocking rows first
- `### 3. Defended valuation range: [Target] (up to 300 words)`
- `### 4. Recommendation: [Target] (up to 130 words)`
- `### 5. Conditions and data requests: [Target] (up to 45 words per item)`
