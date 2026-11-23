---
name: ic-memo-authoring
description: Draft a five-section investment committee memo from a risk table, a financial narrative and a comp set, with a gated recommendation, a derived valuation range and row-linked conditions.
---

# Investment Committee Memo Authoring

Work only from the supplied artifacts. Every figure, label and claim in the memo traces to an artifact or is shown as your own calculation, judgment or proposal.

## Decision rules (apply in order)

1. **Inventory and IDs.** Number the risk rows R1, R2, ... in source order and use these IDs throughout. Copy each tier and status exactly. Note the key financials: reported, recurring and one-time revenue, growth, margin, reported vs adjusted EBITDA, cash, debt, ask.
2. **Decision status.** A row is Closed only if it is marked Resolved and nothing in the artifacts contradicts that. Missing, blank, ambiguous, In-Progress, "substantially resolved", under appeal, deferred and pending all count as Open.
3. **Contradicted "Resolved".** If the narrative, an analyst note or the finding's own text shows the risk is still live, keep the label "Resolved", add an observation citing the evidence, and treat the row as Open. Do not invent doubt without contrary evidence; at most, list a confirmatory document.
4. **Tier vocabulary.** If tiers use other words (e.g. Critical / Moderate / Low), give a working mapping to blocker / manageable / informational in a note marked as your interpretation. Keep the original labels in the table.
5. **Apparent mis-tier.** Keep the source tier and add a flagged observation. Do not let the verdict rest on a tier you doubt: show that it holds under both readings, or adopt the conservative one and say so.
6. **Recommendation gate.**
   - An Open blocker rules out Proceed, including "Proceed subject to resolving R#".
   - Proceed requires every blocker to be Closed and every manageable row to have a named, concrete mitigation (an indemnity, escrow, holdback, price adjustment, closing deliverable, retention agreement or remediation plan). Label these as proposed; a proposal is not a completed mitigation.
   - Choose Request More Data when obtainable evidence (a closure letter, consent, audit, contract, opinion or renewal) could settle the Open rows and the deal stays viable at a defensible price.
   - Choose Pass when the deal fails even if open questions resolve well: an Open blocker is a confirmed adverse fact the seller cannot cure, or the economics cannot support a price near the ask.
7. **Account for every comp.** Name each comp as Included or Excluded, giving a one-line reason. Exclude a comp for comparability, such as a control-premium transaction among trading peers, a different model or revenue basis, an NM metric, or a gap too large to adjust for. Do not exclude a comp for being expensive; a high multiple that tracks higher growth or margin is adjusted for, not dropped.
8. **Right metric, right base.** Use EV/EBITDA only on positive, reported EBITDA, never on negative EBITDA or seller add-backs. Otherwise use EV/Revenue on the comps' own basis (e.g. net revenue). Remove one-time revenue from the base. Show separately any revenue that is non-transferable, churned or restated without audit. Forecasts are context only. If the target's revenue mix differs from the peers', value the part the comps represent or say how the mix gap limits comparability.
9. **No fabrication.** Do not invent peer sizes, data-like discounts, names, dates, legal conclusions or completed diligence. Say what is missing and how it limits the conclusion.

## Valuation working

1. Comp table: Comp | Multiple(s) | Growth | Margin | In/Out | Reason.
2. Take the median of the included set: sort the values; for odd n use the middle value, for even n the mean of the two middle values. Give the included set's median growth and margin too. If any comp is excluded, also state the all-comps median so the effect of the exclusion is visible.
3. Compare the target with the included-set medians and state the direction of each adjustment: growth (above the median means up), margin (above means up), size (only if comp size data are given; otherwise write "size comparability cannot be quantified") and revenue quality (recurring share, concentration, retention). Set an applied range around the median and label its width as analyst judgment.
4. EV range = base x low multiple to base x high multiple, with the multiplication shown.
5. If two methods diverge materially, explain why and choose a primary method. Do not average them blindly.
6. Bridge from EV to equity only when cash and debt are given: Equity = EV - debt + cash.
7. Ask check, only if an ask is supplied: implied multiple = ask / your base, compared with the applied range.
8. If no credible number is possible, list the missing inputs and give an illustrative sensitivity, clearly labelled as such.

Worked example (invented figures): the included multiples are 2.4x, 2.9x, 3.3x and 3.8x, so the median is (2.9 + 3.3) / 2 = 3.1x, with median growth 15% and margin 60%. The target grows 10% (below the median: adjust down) at a 64% margin (above: adjust up), and no peer size data are given (unquantified). Net, the target sits modestly below the median, so the applied range is 2.6x-3.0x (judgment). Reported revenue of $50.0M includes $4.0M one-time, giving a base of $46.0M. EV = 46.0 x 2.6 = $119.6M to 46.0 x 3.0 = $138.0M. An ask of $150M / 46.0 = 3.26x implied, which is above the range. With $5.0M cash and $12.0M debt, equity value is $112.6M-$131.0M.

## Memo layout (five sections, in this order)

**1. Deal Thesis.** State what is being bought and why it is attractive, using evidence such as growth, margin, recurring mix and position. Name the primary risk with its row ID; the same row must appear in the table. Give the verdict in one line.

**2. Tiered Risk Table.** Columns: ID | Finding | Source tier | Source status | Decision status (Open/Closed) | Analyst observation. Order the rows blocker tier, then manageable, then informational, keeping source order within each tier. Every source row must appear. Source facts stay in the source columns, and your contradiction flags, mis-tier flags and mitigations go in the observation column. Put the tier-mapping note below the table if one is needed.

**3. Valuation.** Give the metric and the base (with any adjustments to the base), the comp table, the medians, the directional adjustments, the range arithmetic, any cross-check, the ask comparison and EV vs equity.

**4. Recommendation.** State **Proceed**, **Request More Data** or **Pass**. Add a gate line listing the Open blocker rows (or "none") and any manageable rows without a mitigation. Explain why this verdict follows from the table and the valuation, and why the other two do not fit.

**5. Conditions and Next Steps.** Write one bullet per action, each starting with exactly one row ID: `[R2] action - owner role (proposed) - deliverable - done when ...`. Split combined actions. Match the content to the verdict:
- Proceed: SPA protections, how each mitigation is implemented, post-close monitoring.
- Request More Data: the evidence that would close each Open blocker, which result would change the verdict, and the trigger for re-deciding.
- Pass: the rows that drive the rejection and, only where useful, the evidence that would justify reconsidering.
Cover every Open blocker and every manageable row that needs a mitigation. Include informational rows only where an action is useful. Mark any suggested owner or timing as proposed.

## Drafting discipline

- Obey any section-length limits stated in the request. If none are stated, keep sections proportionate: thesis and recommendation one short paragraph each, one line of finding text per table row, and valuation as tight as the arithmetic allows.
- Where the nature of a statement is not obvious, tag it: (source), (calc), (judgment), (proposed) or (missing).
- Write it as a decision document. Let the reasoning follow the deal's actual facts, and use no boilerplate paragraphs.

## Final check

- Every risk row is present with its original tier and status, and contradictions and mis-tiers are flagged.
- The thesis's primary-risk row ID appears in the table.
- The verdict matches the gate, with no conditional Proceed over an Open blocker.
- Every comp is named In or Out with a reason, and the median has been recomputed from the included set.
- The base matches the comps' denominator, every product has been re-multiplied, and EV is kept distinct from equity.
- Every action bullet carries exactly one row ID and fits the verdict.
- Nothing has been invented.
