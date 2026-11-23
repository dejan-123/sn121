---
name: ic-memo-authoring
description: Turns a deal's risk classification table, financial narrative and comparables into the five-section investment committee memo a deal team submits for a go or no-go decision. It tests every status label against the other artifacts, recomputes every figure, builds the valuation range from a named comp set with the multiple, base and arithmetic shown, lets any open must-address finding block "proceed", and ties each condition to a numbered finding. It never invents a figure the artifacts lack, and it keeps every section inside its length bound with the recommendation stated first.
---

# Investment committee memo from three diligence artifacts

The IC needs one answer: go or no-go, at what price, on what conditions. Every claim traces to a numbered finding, a figure or a note in the artifacts. A figure they lack is named as missing and requested, never supplied.

## The four decisions

1. **Open or not.**
   - A finding is open when its status is Unresolved or In-Progress, or when it is marked Resolved but *another* artifact (an analyst's note, the narrative) says it is still live.
   - A row's own wording never contradicts its status. A Resolved row that still reads live is **questioned**, and the document that proves the fix becomes a condition precedent.
   - While a matter is open, an opinion that it is nearly closed changes nothing.
2. **The call.** Any open Must-Address finding means **NO-GO at this time (do not proceed to signing)**, however fair the price. Otherwise, **PROCEED WITH CONDITIONS**, at no more than the top of the defended range.
3. **The value.** Price only what the buyer will own and what recurs, on the multiple the comps support (EV/EBITDA when EBITDA is positive, EV/Revenue when it is not). The two closest included comps set the bracket, and every product is shown.
4. **The conditions.** Each cites a finding (#n) or a missing input, and names the document, the party and the timing.

## Memo sections and length bounds

The memo runs 4,500 to 7,000 characters, in this order:
1. Write the memo directly. Do not narrate your process or mention this skill. The reply's first line is `# Investment Committee Memo: <target> (<sector>)`; the Input check is where the reading shows. Then `**Recommendation: …**` with a one-sentence reason, so the decision survives any cut-off.
2. `**Input check**`: at most 6 bullets and 120 words covering the scale, open rows, contradicted or questioned labels, figures that do not reconcile, and missing inputs.
3. `## 1. Deal Thesis (≤ 120 words)`: what is bought, the value case in figures, then a **Primary risk:** sentence.
4. `## 2. Tiered Risk Table`: the memo's only table, with columns # | Finding | Input tier / status | IC treatment | Why. The IC treatment is Blocks proceed, Condition precedent, Price or structure, or Post-close plan. Then two or three lines separating deal-breakers from manageable risks.
5. `## 3. Valuation Range`: comp set, multiple, base, adjustments, arithmetic bullets, the defended range, and the comparison with the ask (or "no ask stated").
6. `## 4. Recommendation and Consistency Check (≤ 120 words)`.
7. `## 5. Conditions and Data Requests`: 4 to 6 numbered items.

## Reading the artifacts
- **Risk table.** Number the findings 1..n in input order and keep that numbering. Record each tier and status in the input's words. Map a different scale to Must-Address / Manageable / Informational (for example Critical / Moderate / Low) and say so.
- **Recompute every derived figure:**
  - margins and net debt (debt less cash);
  - each EBITDA add-back on its own (one-time only if the artifacts show it);
  - shares of a total;
  - the ask as a multiple of revenue and of EBITDA.

  Where the narrative's own figures do not reconcile, show both sides and request the bridge.
- **Compute each figure once and reuse it unchanged.** Check every multiple × base product before writing it. Compute only what the call, the range or a condition needs.

## Comp-set discipline
- **Inclusions and exclusions.** Name every comp as included or excluded, with the reason. Exclude:
  - a past acquisition's multiple, which carries a control or sponsor premium, when the others are trading peers;
  - a peer whose growth, margin or scale the target does not share (roughly 1.6x the target's growth, 20 or more points away, or many times its size);
  - a comp marked NM on the multiple in use.
- **Multiple.** Use EV/EBITDA when the target's EBITDA is positive and the comps report it. Use EV/Revenue when EBITDA is negative or the comps give none. Use the industry's own metric when the artifacts say the comps use it.
- **Base.**
  - Remove one-time revenue, revenue that ends or cannot transfer on a change of control, and volume already lost.
  - Use net revenue rather than gross where the comps do.
  - Treat an unaudited or disputed uplift as a sensitivity.
  - Never price projections that depend on prospects or pilots converting.

## IC treatment and order
| IC treatment | When it applies |
|---|---|
| **Blocks proceed** | open Must-Address |
| **Condition precedent** | to be evidenced or cleared before signing |
| **Price or structure** | quantified exposure for the range, an escrow or an earn-out |
| **Post-close plan or monitor** | everything else |

Raise a row whose tier understates it when it sets the valuation base or feeds a blocking row, and say why. Never demote a tier the analyst set; disagree in the Why column instead. Order the table: blocking rows, then conditions precedent, then the rest, each keeping its input number.

## Bracket and arithmetic
- **Bracket.** The two included comps closest on growth and margin set the multiple range. State any adjustment (size, margin, growth, retention, concentration) as a number with its reason. When revenue and EBITDA multiples disagree, compare implied EBITDA margins (EV/Revenue ÷ EV/EBITDA) and let profitability decide.
- **Arithmetic, shown in full:**
  - multiple × named base = value, low and high;
  - quantified unfunded capex deducted;
  - the defended range;
  - the ask's implied multiples and its distance from the range;
  - equity value = EV − net debt.

## Consistency check before writing section 4
- The thesis's primary risk is the first row of the risk table.
- The call follows decision 2.
- Any price named in section 4 sits inside section 3's range.
- Each figure is identical wherever it appears.
- No unconditional proceed while any condition precedent stands.
- Name the condition whose failure would reverse the call.

## Worked examples
Call read_reference on `references/memo-examples.md` before writing. It holds three invented deals in unrelated industries, each with abridged artifacts and the full memo: two no-go calls, valued on EBITDA and on revenue, and one proceed with conditions. Take the reasoning and proportions, never the facts. Every name and figure comes from the request's own artifacts.

Write only the memo. Its first line is the title line `# Investment Committee Memo: <target> (<sector>)`. Everything you work out appears inside the memo's sections, and the memo ends with its last condition.
