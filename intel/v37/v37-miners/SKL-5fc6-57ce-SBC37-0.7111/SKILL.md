---
name: reconcile-ic-decisions
description: Author an investment committee acquisition memo from a risk classification table, financial narrative, and comparables dataset; reconcile evidence, defend valuation, and select an actionable verdict.
---

# Reconcile an IC decision

Produce one decision document with these five sections, in order: Deal Thesis; Tiered Risk Table; Valuation; Recommendation; Conditions and Next Steps. Follow any supplied section bounds. If none are stated, use concise, proportionate sections without inventing limits. Work from supplied artifacts; do not invent facts, citations, resolution evidence, transactions, or peer metrics. Label proposed actions and valuation judgments; never present them as completed facts.

Before valuation, read `references/valuation_reconciliation.md` once when economics conflict, the revenue base needs normalization, business models are mixed, multiple metrics are usable, or a peer is disputed.

## 1. Establish the record

Inventory the three artifacts and any requested constraints. If an artifact is absent, retain all five sections, identify what cannot be assessed, and do not fill the gap with outside facts. Missing information that could change the decision ordinarily requires Request More Data; known fatal economics can independently support Pass.

Create a compact working record of findings and economics. Give each risk a stable short name or R-number. Preserve each upstream tier and status verbatim; use "not supplied" for a missing field. Record the artifact and named row, passage, or metric behind each material conclusion. Use compact source labels in the memo such as [Risk: short finding], [Financial: named metric], [Comps: peer]. They refer to supplied inputs, not invented documents or page numbers. Identify calculations and assumptions explicitly.

Separate three questions for each finding:
- What tier/status did the source assign?
- What does the supporting evidence actually establish, and is there contrary evidence?
- Does the finding currently constrain the decision, and what would change that?

Do not silently change a source field. If a "Resolved" label conflicts with a live exposure or another artifact, preserve that label and add an explicit "resolution disputed" flag with both facts. Treat the decision issue as open pending reconciliation. Conversely, do not reopen every resolved item merely because the dataset lacks a closure attachment: absent a concrete contradiction, accept the stated status and retain residual exposure. Neither management optimism nor a process milestone proves resolution of the underlying issue.

## 2. Construct the risk-to-action record

Use the Tiered Risk Table to account for every upstream finding, including resolved and informational rows. Suggested columns: Finding / Upstream tier and status / Evidence and decision implication / Mitigation or evidence needed. Keep nonstandard tiers intact; explain any functional blocker interpretation separately. Flag apparent mis-tiers without silently changing labels. Name the thesis's controlling risk in this table. Include material new narrative issues as clearly marked additions rather than burying them in prose.

For each open must-address issue, state the specific evidence that would establish closure, the decision it would change, and why current evidence is insufficient. For each manageable finding, name a practical mitigation directed at its mechanism; distinguish an existing control from a proposed one. Include a mitigation even for a resolved manageable row, using a grounded maintenance or verification measure if needed. Do not claim a proposed escrow, renewal, insurance policy, consent, appointment, or control is in place.

## 3. Build the valuation before considering the ask

First choose the valuation denominator and explain why it represents the business being acquired. State period, currency, units, and whether the base is reported, normalized, or pro forma. Match it to the peer multiple definition. Do not apply EV/EBITDA to negative or nonmeaningful EBITDA; a seller add-back does not establish sustainable earnings. Do not substitute ARR for recognized revenue without explaining the mismatch. Separate gross transaction flows, revenue, and net revenue. Remove demonstrated nonrecurring or nontransferable amounts from a continuing-business base; distinguish an observed loss from a hypothetical downside. Avoid double-subtracting overlapping adjustments.

Give every supplied comparable a named Included or Excluded disposition in a compact table or list. State a specific rationale for every exclusion and identify why retained peers are useful. Select peers on comparability of business, metric, period, growth, margin, and scale where supplied, before looking at the desired price. A high multiple alone is not an exclusion rule. Exclude a growth/margin outlier only with an explained economic mismatch; otherwise retain it and reflect dispersion. Keep stale or premium acquisition observations separate from a current trading anchor unless their transaction basis is demonstrably appropriate. Never deduct an invented control premium. Dispositions may differ by metric: NM EBITDA excludes that observation from the EBITDA median, not automatically the company from revenue analysis.

State the retained multiple range and median (sort; average the middle pair for an even count), plus retained growth and margin medians. Never use an excluded observation in the anchor. Choose an applied interval relative to that anchor; identify its magnitude as judgment and avoid counting a loss twice. Discuss three adjustment axes separately:
- Size: larger/smaller only when peer scale is known; otherwise say not assessable and do not fabricate a size discount.
- Growth: above/below/near the retained median; distinguish historical results from contingent forecasts.
- Margin: above/below/near the retained median using the same margin definition; acknowledge unavailable mix data.

Show both endpoint equations with units: low multiple x supported base = low EV; high multiple x the same base = high EV. Separate base sensitivities from multiple sensitivities. If more than one metric is economically usable, choose a primary and reconcile the cross-check; do not average incompatible ranges or ignore a materially divergent earnings valuation. If no usable peers/base remain, state valuation is not defensible from the inputs rather than manufacture a range. Label any provisional calculation and its conditions.

Compare a supplied seller ask only after deriving EV, using the same denominator. Equity = EV - supplied debt + supplied cash; disclose unknown bridge items and never assume missing balances are zero.

## 4. Decide, then write the thesis

Select exactly one explicit verdict: Proceed, Request More Data, or Pass.

Proceed is blocked by any unresolved, in-progress, absent-status, or ambiguous-status must-address finding. An affirmative source conflict over resolution also blocks reliance on that closure. The same logic applies to explicitly explained functional blockers under other source tier names. Never use "Proceed subject to" to bypass a blocker.

Proceed becomes eligible only when all must-address findings are resolved without contradictory evidence and every manageable finding has a named mitigation. Proposed mitigations can support eligibility for manageable risks, but state what must be implemented before closing; a proposal cannot close a must-address issue. Eligibility is not an obligation: economics and residual risks must still support the investment.

Choose Request More Data when specific obtainable evidence could plausibly change the call. Name that evidence and the resulting decision fork. Choose Pass when known structural risk, unworkable economics, or unprotectable downside supports rejection; explain why ordinary diligence or a realistic mitigation would not fix it. Uncertainty alone is not proof of impossibility, and cheap valuation cannot authorize a blocked transaction. If an unknown acquirer attribute matters, state the conditional branches without inventing that attribute; select the verdict warranted by what is known now.

Write a concise Deal Thesis with sourced merits, economic quality, and the named controlling risk. Trace the verdict to that risk and the valuation.

## 5. Make next steps match the verdict; audit the memo

Write one discrete bullet per named risk row requiring action. Start each bullet with the exact row name/ID. Give the specific deliverable or mitigation, proposed owner role when useful, timing or trigger, and acceptance criterion. Keep separate risks in separate bullets. When one document informs multiple rows, explain the linkage without merging their decisions.
- Proceed: execution conditions and ongoing mitigations for eligible risks; do not conceal an unresolved must-address finding here.
- Request More Data: prioritized evidence requests and what favorable versus adverse evidence would change. Do not imply approval to close.
- Pass: reasons to stop and only credible risk-specific re-entry criteria, not a generic closing checklist.
Do not fabricate actions for informational or closed rows that need none. Add a named row first if a new material diligence request has no risk-table counterpart.

Final audit: five sections in order and within actual requested bounds; every source risk and comparable accounted for; thesis risk present in table; original labels preserved; contradictions exposed; every material claim traceable; normalized base and retained medians correct; both EV equations reproducible; no EV/equity confusion; verdict passes the gate; each required next step maps to its own named row; proposals are not described as facts. Repair discrepancies before returning only the memo.
