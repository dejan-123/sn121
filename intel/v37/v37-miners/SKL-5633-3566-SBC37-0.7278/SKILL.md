---
name: write-ic-memo
description: Draft a decision-ready investment committee memo from a deal-risk classification table, financial narrative and comparables dataset, reconciling contradictions, defending valuation and linking the verdict to evidence and risk-specific next steps.
---

# Write the decision the record supports

Establish the asset, transferable economics, thesis risk and decision available today. Use supplied facts and transparent calculations. Label judgments, proposed protections and missing evidence; never present them as completed diligence.

Before drafting, call read_reference for `references/worked-reply.md`: three invented input-and-memo pairs. Transfer the procedure, never their facts, prose or discounts. Output the memo without a methodology preamble.

## Establish the record

Check that the risk table, financial narrative and comps are usable. If one is missing, name it and its consequence; retain five sections, mark unsupported analysis unavailable and request the artifact. Never manufacture it or recommend Proceed on an incomplete risk record. Use a partial comp set if defensible, disclosing limitations.

Privately record target, thesis dependency, stage, currency/period, revenue components, earnings adjustments, growth, margins, cash/debt, asking EV and source conflicts. Distinguish facts, calculations and proposals. Cite artifact names and row IDs; invent no documents, approvals, dates, synergies or diligence results.

Assign stable R1, R2 IDs in input order; retain every finding, upstream tier and status when sorting. Explicitly map alternate vocabularies (normally Critical -> Must-Address, Moderate -> Manageable, Low -> Informational), preserving original labels and respecting supplied definitions. Never silently re-tier.
Treat missing, blank, unclear, pending, in-progress and 'substantially resolved' statuses as unresolved for the decision gate. Show the original status, not an invented completion. Accept an explicit Resolved status unless the supplied record contradicts it; absence of attached closure paperwork alone is not a contradiction. Distinguish residual exposure from evidence contradicting resolution. Where facts conflict with Resolved, retain it as 'Resolved upstream; disputed by [specific fact]' and treat resolution as unverified for the gate. Postponement, management belief and settlement talks are not closure evidence.

Identify apparent mis-tiers separately: 'Upstream tier retained; potential escalation for IC review because ...'. Explain economic or operating consequences and request revalidation. A lower-tier operating blocker can justify Request more data without re-tiering. Add material finance-only observations with F1, F2 IDs, clearly marked as memo observations rather than upstream classifications. Carry the thesis's primary risk into the table, using its R/F ID.

## Decide what the money means

Check add-backs, earnings bridges, denominators, revenue mix and nested percentages. State discrepancies without silently repairing them. Distinguish bookings, ARR, GTV, revenue, cash flow and EBITDA; do not value volume as revenue or treat multiyear totals as annual revenue.

Align the denominator with acquisition economics and peer definitions. Bridge reported revenue to transferable recurring revenue, separating grants, one-offs, licensing and services; use net revenue for net-revenue peers. Distinguish historical LTM from retained run rate after known churn; explain period mismatch and do not carry historical growth onto a reduced base. If segment EBITDA fails to reconcile with project margins, show the discrepancy and request a bridge. Never assume lost and retained revenue earn the same margin.

Choose revenue/net-revenue multiples for negative or unreliable earnings or absent peer EBITDA data; EBITDA multiples for sustainable positive earnings with peer support. NM is unavailable, never zero. Flag unsupported seller add-backs even if they sum correctly. Name the primary method and subordinate cross-check; do not average incompatible methods or hide their disagreement.

Account for EVERY comp by name: anchor, cross-check or excluded. Give each exclusion a specific reason: model, disclosed transaction premium, scale or extreme growth/margin profile. Do not discard the highest multiple automatically or double-count control premiums. Explain when all are included. Exclude NM only from the EBITDA subset, not a useful revenue set.

Compute selected-set median multiple, growth and margin; average the middle pair for even counts. Name the set; omit excluded peers. Address three axes explicitly:
- Size: give a direction only if peer scale is supplied. Otherwise state 'peer scale unavailable; size adjustment unquantified' rather than inventing a smaller-target discount as a fact.
- Margin: compare the same margin definition and business mix. Give upward, downward or neutral direction, and flag absent mix data; blended hardware/software margins are not like-for-like software economics.
- Growth: compare matched periods and bases; distinguish historical performance from contingent management forecasts and organic recurring growth from one-off project growth.

Defend the applied multiple interval relative to anchors/medians using economics, concentration, capital intensity, retention and uncertainty. Label adjustments as judgment, not statistical estimates. Avoid automatic discounts and false precision. A discount cannot clear an operating or legal blocker.

Show '[low]-[high]x [metric] x [currency/base] = [low]-[high EV]'; round after multiplication. State one final conditional EV range and its assumptions. Compare the ask on the same base, or say none supplied. If showing equity, bridge EV + cash - debt, with other adjustments unknown. Never double-deduct debt or mix currencies without a rate. Explain material cross-check divergence and what would change the price ceiling.

## Apply the recommendation gate

Choose exactly one verdict: **Proceed**, **Request more data**, or **Pass**. Make the same choice everywhere in the memo.

- If any Must-Address is unresolved, missing-status, in-progress or disputed-resolved, Proceed is unavailable. Use Request more data when a specific, obtainable answer could change the investment decision; identify that answer and defer binding authorization. Do not disguise Proceed as 'proceed subject to resolving' a blocker.
- Use Pass for evidenced structural constraints, irreparable thesis failure or uneconomic offered terms. Explain why further diligence would not cure it under those terms. Do not assume a high asking price is non-negotiable or that every unresolved finding is fatal.
- Proceed is available only when all Must-Address findings are resolved without affirmative contradiction AND every Manageable finding has a named, feasible mitigation with an owner and milestone. Proposed mitigations remain proposals, never claims of completed action. Preserve informational findings that materially affect valuation. Missing risk status on a manageable row requires an explicit mitigation/verification plan, not automatic promotion to Must-Address.

Distinguish diligence authorization from transaction approval. Invent no Must-Address finding when none exists; assess mis-tier flags and mitigation feasibility. Explain decisive evidence and economics, not just row counts.

## Write five sections, in order

Use a target-specific title and exactly five numbered sections. Obey supplied section lengths. If absent, use editorial targets: thesis 100-150 words; one risk row per finding; valuation 200-350 words plus comp table; recommendation 60-100 words; one concise action bullet per relevant row. These are defaults, not mandated limits; retain required evidence.

1. **Deal Thesis**: what asset/cash flow is attractive, key input metrics, what must remain true, and the primary risk by R/F ID. Avoid promotional certainty and unnamed generic risks.
2. **Tiered Risk Table**: columns ID / Finding and consequence / Upstream tier (mapping if needed) / Upstream status and conflict / Mitigation or evidence needed. Sort Must-Address first, then Manageable, then Informational, retaining IDs and every finding. Include labeled F observations and mis-tier flags without replacing upstream classifications.
3. **Valuation**: named comp dispositions and exclusions, selected medians, explicit size/margin/growth directions, denominator bridge, chosen method and multiple interval, EV arithmetic, ask comparison and material cross-checks/limitations. Put the final range in one clear sentence.
4. **Recommendation**: exact verdict, current authorization, decisive risk status and economics, and what would reverse the decision. Never let a valuation discount stand in for clearance.
5. **Conditions and Next Steps**: link each bullet to exactly one named R/F table row. Use its ID, owner ROLE, action, specific evidence/deliverable, timing/milestone and acceptance criterion. Cover every unresolved Must-Address and every Manageable row requiring mitigation, plus disputed statuses and actionable F gaps. Group tasks for the same finding into its one bullet; do not merge unrelated findings into a vague checklist. For Proceed, give executable closing protections and integration milestones. For Request more data, give answerable evidence requests required before IC reconsideration. For Pass, give only focused re-entry requirements or record preservation; do not write an ordinary closing checklist for a rejected deal. Do not force a condition onto a genuinely informational or resolved finding that needs no further action.

Check silently: every finding/comp accounted for; thesis risk in table; statuses preserved; contradictions and arithmetic gaps disclosed; three adjustment axes covered; medians/EV correct; verdict passes gate; actions map individually to rows with owners and acceptance tests; order/length limits satisfied. Output only the memo.
