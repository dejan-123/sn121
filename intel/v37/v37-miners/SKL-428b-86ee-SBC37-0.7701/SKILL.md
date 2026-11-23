---
name: ic-memo-comp-calibration
description: Draft compact IC decisions from diligence risks, financial data and peer valuations with outlier-aware comp selection, preserved upstream tiers and no fabricated deal specifics.
---

# Author the committee decision, with an evidence trail

Read `references/compact_ic_cases.md` with `read_reference` before drafting. Its fictional cases illustrate judgment and compression; they are not facts, numeric adjustment defaults or company-specific precedents. Ground each conclusion in the supplied artifacts.

## 1. Build the deal ledger before writing

Identify **R** (risk table), **F** (financial narrative), **C** (comps), target, business model, seller ask and period. Give every R finding an ID (R1, R2, ...); preserve its **original tier/status verbatim**. Flag missing artifacts; never infer favorable diligence or invent figures.

For each R row note evidence, R/F agreement or conflict, closure proof, deal impact and mitigation/action. If no owner is supplied, write `owner not identified — assign before milestone`; never manufacture an existing job title, person, committee approval or date. Separate allegations from regulatory actions and actual closure.

**Conflict:** If R says `Resolved` but F reveals an open material process, **retain that upstream label** and flag `R/F conflict`; gate it as open absent closure proof. Also flag conflicts involving low-tier rows or revenue quality. Never silently re-tier.

**Open:** Unresolved, In-Progress, missing/ambiguous, or contradicted Resolved. Deferral is not closure. Preserve uncontradicted Resolved without inventing proof.

**Gate:** Open Must-Address/Critical blocks Proceed; Manageable/Moderate needs named mitigation; Low/Informational normally monitor. Unclear tier: avoid premature Proceed.

## 2. Fix recommendation logic before prose

Anchor the thesis in revenue quality, profitability and deal dependencies; use the **exact primary risk name from R**. Distinguish recurring, subsidized, net and gross revenues and adjusted EBITDA.

Choose only one committee action:
- **Proceed:** all Must-Address/Critical findings verifiably closed **and** each Manageable/Moderate finding has a named, plausible mitigation. A missing or contradictory gating status forbids Proceed. Conditions may document ongoing mitigation; they cannot replace unresolved must-address proof.
- **Request More Data:** open gating items or decisive gaps exist, but it is not established that the thesis is incurably broken. Name the specific evidence needed before a decision. Default for an unresolved must-address item or ambiguous closure.
- **Pass:** supplied evidence already establishes an unacceptable, unmitigable thesis failure. Name the fact and why further diligence would not repair this deal. Mere uncertainty is not a Pass.

Valuation never overrides gating. Missing decisive inputs call for Request More Data. Recheck verdict against R.

## 3. Reconstruct valuation, not a borrowed multiple

Account for **every comp** as Included/Excluded with its multiple and a *record-specific* reason. Exclude a disclosed control-premium transaction from trading-peer statistics; exclude incompatible denominators or economics; exclude a material growth, margin or scale outlier when its profile is nonrepresentative of the target and central peer cluster, even if its industry label matches. Identify the actual differentiator, not merely `highest multiple`; do not discard a high peer solely to lower the value. `NM` EBITDA invalidates that metric, not necessarily EV/revenue. No usable peers means no defensible numerical range.

Use a matching economic denominator and time basis:
- EV/revenue for negative-profit businesses or when that is the comparable metric; distinguish recurring from one-off or subsidy-supported revenue.
- EV/**net** revenue when peer PayFac multiples use net revenue, not pass-through gross receipts or transaction volume.
- For reliably profitable businesses, consider EV/EBITDA alongside EV/revenue when both are available. Never apply a positive EBITDA multiple to zero, negative or unsupported adjusted earnings.
- If target and peer revenue bases differ, flag it and give a labeled sensitivity.

Report included peer **median multiple**, target growth vs included peer median, and target gross margin vs included peer median. For each of **size / margin / growth**, state warranted multiple direction (premium, discount or no change) and why. When C has no peer revenue scale, size is **unknown**; assign no fictitious size discount. Use the **included distribution** and target-versus-peer differences to select and defend both applied endpoints. Give directional adjustments; quantify only with case evidence. Do not apply a standing 0.05x/0.1x discount or invented size premium. A range may use suitable included-peer endpoints, or an explained narrower/discounted band. Label departures from the observed peer range.

Show exact arithmetic: `EV low = target matching LTM base × low selected multiple`; `EV high = base × high selected multiple`. Give units, currency, rounded EV endpoints and ask-vs-range comparison. If doing an EBITDA cross-check, show its own basis and multiplication; explain tension rather than averaging incompatible outputs. Keep EV separate from equity value. If normalization changes revenue or EBITDA, say what was removed, citing F; no arithmetic on an invented adjustment. Check median and endpoint multiplication before answering.

## 4. Output budget is an underwriting constraint

Make all judgments and arithmetic **before emitting the memo**. Determine the verdict and the required row-linked condition bullets first in your analysis, then render five sections in the required order. A correct unfinished memo is a failed memo: **reserve output capacity for Sections 4 and 5**. Never put appendices, self-audit, metadata, or commentary after Section 5.

**Hard limits:** Obey each supplied section word/character minimum and maximum, counting tables unless explicitly exempt. Public inputs supply no universal numeric cap; defaults below are only fallbacks.

**Compact defaults only if no section limits are given:** Section 1 ~55-85 words; Section 2 one succinct row for *each* supplied finding; Section 3 one compact comp table plus ~95-145 words explaining the math; Section 4 ~40-65 words; Section 5 one ~15-24-word bullet per actionable R row; use `owner to assign` when no accountable party is identified. Adjust for the number of risks/comps: shorten prose and cells as the tables grow. No redundant executive summary. Do not trim or omit a risk/comparable, quantitative proof, verdict, or action bullet to save space.

Write only the five sections, no preamble. Budget table rows and final bullets before writing. Under pressure compress Sections 1-3, **never drop Sections 4-5**. End after the last bullet.

### 1. Investment Thesis
Summarize the economic thesis, a few decisive metrics, the seller ask if supplied and the **primary risk by exactly the same identifying name as R**. That named risk must appear in Section 2. Explain the dependency rather than naming several generic risks.

### 2. Risk Assessment
Provide **one table row for every supplied R finding** (never drop low-tier rows). Use compact columns: `ID / finding | Original tier / status | Cross-document finding | IC consequence / mitigation`. Keep upstream labels verbatim. When F contradicts a Resolved or low-tier row mark `R/F conflict` in that row; analyze what is still open **without silently changing the upstream classification**. For a material issue in F not in R, write one concise `IC observation` after the table rather than invent an upstream finding.

### 3. Valuation Range and Comparables
Use a compact table with **every named C comparable**, its applicable reported multiple and `Include`/`Exclude: reason`. If a peer's metric is unavailable, say `NM`, not zero. In brief prose state the included median multiple, median growth and gross margin (when provided), relative size/growth/margin directions, any judgmental multiple adjustments, exact target economic base, selected low/high multiples, **both EV products**, and ask-versus-range result. Report incompatible denominator or unavailable data honestly; use a separate EBITDA cross-check only when meaningful.

### 4. Recommendation
Start with exactly **Proceed**, **Request More Data**, or **Pass**. In a concise causal statement point to named gating rows, manageable mitigations and valuation. No Proceed for open Must-Address/Critical (including false closure or missing status); no Pass merely for uncertainty. Preserve distinction between permission to continue and acceptance of seller's asking price.

### 5. Conditions and Next Steps
One brief bullet per **actionable R row**: `R#`, *source-named owner or owner-to-assign*, document/mitigation, decision milestone. Label proposed workstreams. Proceed: carry residual mitigations, not unresolved blockers. Request More Data: prioritize open gates. Pass: explain disposition for proven failures. No fabricated dates, titles or unlinked actions. If none, say no outstanding row-specific actions.

## Silent preflight — do not print

- All **five** headings in order, Sections 4/5 included, each within the scenario's explicit bound.
- Exactly every R finding displayed with original tier/status; factual tensions flagged; recommendation matches actual gate state.
- Every comparable named once, including exclusions; medians and numeric EV products reproducible; consistent revenue/EBITDA and gross/net bases.
- Primary thesis risk is in the table; conditions cite actual R IDs and only source-identified owners, otherwise explicitly request owner assignment.
- No facts, proof of closure, peer sizes, staffing titles, numerical adjustment rules or legal outcomes invented. No appendix or printed audit.
