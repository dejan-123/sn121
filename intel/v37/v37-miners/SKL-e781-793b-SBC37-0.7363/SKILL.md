---
name: ic-memo-from-diligence
description: Drafts an internal investment committee memo from three diligence artifacts - a risk classification table, a financial narrative and a comparables set - as five sections in fixed order and length: deal thesis, tiered risk table, defended valuation range, recommendation, and conditions with next steps. Reconciles the artifacts, keeps upstream tiers and statuses exactly as given while flagging any the evidence contradicts, gates the recommendation on the risk table, derives the range from the comp set with every inclusion, exclusion and adjustment named, and ties each condition to one risk row.
---

# Writing an IC memo from diligence artifacts

An IC memo is a decision document. Every claim in it traces to one of the three artifacts, and the recommendation follows from the risk table by a fixed gate, not from how attractive the business sounds. The memo's own sections carry the working, in the order you need it: the risk table settles the gate, the valuation section shows its arithmetic, and the recommendation reads off both. So nothing is worked out before the heading: the reply's first characters are `# IC Memo:`.

## 1. Reconcile the three artifacts

Read the risk table, the narrative and the comp set side by side. Every tension surfaces in the memo, as a flag in the risk table or as a base adjustment in the valuation; none is fixed quietly.
- **Statuses another artifact contradicts.** A row marked Resolved that the narrative or an analyst note still describes as live. A postponed review, an appeal, a pending test, a re-bid or talks under way leave a matter open.
- **Statuses only the finding's own wording undercuts** (a consent not yet shown, a rival's earlier filing, a contract cancellable at will): the status stands and the row reads Closed, with a flag naming the live element and a condition asking for the document that proves the resolution.
- **Missing or unclear status** (blank, "TBD", "?"): read as Unresolved, and say so in the row.
- **Tier names outside must-address / manageable / informational** (Critical, High, Moderate, Low): map them openly in a line under the table, most severe to must-address.
- **Tiers that look wrong by ordinary definitions**, such as a matter that could halt the core product sitting at manageable: keep the tier, flag it, carry it into the conditions.
- **Seller figures needing a basis check**: adjusted EBITDA add-backs, revenue booked gross of pass-through costs, one-off revenue inside LTM, revenue that will not transfer to a buyer, restated or unaudited figures, revenue from customers already lost.
Upstream tier and status cells are copied exactly as written. Re-tiering is the risk owner's job; the memo shows the tension and its consequence.

## 2. The risk table and its gate

One row per upstream finding: none dropped, merged or added. Order must-address, then manageable, then informational, keeping upstream order within a tier. The Gate column takes one of four values:
- `Closed`: Resolved, uncontradicted.
- `Closed (flag)`: Resolved, but the finding's own wording leaves something to prove.
- `Open (flag)`: Resolved, but another artifact says the matter is live.
- `Open`: Unresolved, In-Progress, or status missing.
Each manageable row names a mitigation fitted to the risk: escrow or holdback sized to the exposure, specific indemnity, price adjustment, consent before signing, retention or non-solicit terms, transition services, a covenant. Each must-address row says what document or event would close it.

**The gate.** Proceed only when no must-address row reads Open or Open (flag) and every manageable row carries a named mitigation. Otherwise:
- **Request more data** when each open must-address row could be settled by documents, answers or third-party decisions before signing. An open row is an unknown: litigation in discovery, a pending review, an unsigned consent.
- **Pass** only when the adverse outcome is already in the artifacts (a refusal, a termination, a final ruling, a lost licence) and no condition, structure or price could cure it, or when the artifacts' own facts defeat the thesis.
Price never replaces the verdict: an ask above the range becomes a price condition.

## 3. The valuation range

1. **Base.** Name the figure valued and why: recurring, transferable, economically meaningful revenue or EBITDA. Adjust LTM for one-off items, pass-through or gross-booked revenue, streams that will not transfer, customers already gone and unaudited restatements, each as arithmetic. Accept an EBITDA add-back only if the cost will not come back.
2. **Multiple.** EV/Revenue for software, platforms, and any target with negative EBITDA or an EBITDA margin under about 10%; EV/EBITDA for mature profitable businesses. If the set gives both, add the other as a one-line cross-check.
3. **Screen every comparable**, Included or Excluded. Exclude only: an acquisition price carrying a control or strategic premium among trading multiples; a comparable at either end of the set whose growth sits more than about 15 points from both the target and the set median, or whose margin sits more than about 10 points from both; a different revenue basis or business model; NM for the multiple used. Give each exclusion one line. Keep at least three included.
4. **Median.** Write the included multiples in ascending order. Odd count: the middle one. Even count: the two middle ones added and halved, written out, e.g. (3.4 + 3.8) / 2 = 3.6x.
5. **Adjust** against the included set's median growth and margin, plus any other metric the set gives (retention, profitability): one line each, target versus median, then down, up or neutral. Where the set gives no figure, such as company size, write "not given".
6. **Range.** Net adverse: lowest included multiple to the median. Net favourable: median to highest included. Mixed or neutral: the multiples either side of the median (for an even count, the two middle ones). Write both products as base x multiple = value; the range is those two values, quoted unchanged in section 4. Then the ask's implied multiple, ask / base, and where it falls.

## 4. Conditions and next steps

One bullet per risk-table row, in table order, opening with the row number and short name; no bullet without a row. Their character follows the verdict:
- **Proceed**: the protection that holds the risk inside the price, with its size and owner; Closed (flag) rows become conditions precedent.
- **Request more data**: the exact document or answer, who provides it, and the result that would close the row.
- **Pass**: what would have to change for the deal to be reconsidered.
Informational rows get a monitoring bullet.

## Writing the memo

Call read_reference for `references/worked-memo.md` before writing, and match its form and length. Five sections, in this order and within these bounds:

1. `## 1. Deal Thesis`: three sentences, under 100 words. What is bought and the value case in the artifacts' figures; the primary risk, named as in its risk-table row, with the number; the rows the recommendation turns on.
2. `## 2. Risk Table`: `| # | Finding | Tier (as given) | Status (as given) | Gate | Mitigation or flag |`, cells under 30 words, then a `Gate:` line in row numbers and any tier mapping.
3. `## 3. Valuation Range`: base line, `| Comparable | Multiple | Growth | Margin | Included | Reason |`, median, adjustments, range arithmetic; under 230 words outside the table.
4. `## 4. Recommendation`: first line `**Recommendation: Proceed**`, `**Recommendation: Request more data**` or `**Recommendation: Pass**`, then under 100 words: the gate in row numbers and the price against the range.
5. `## 5. Conditions and Next Steps`: the bullets, each under 40 words, then one line starting `Next step:`.

Keep the memo under about 6,500 characters. Every figure is quoted from the artifacts or computed from them with the arithmetic shown. When something the memo needs is missing, including a whole artifact, write "not provided", derive nothing from it, and treat the gap as open. No probabilities, no invented dates, names, amounts or comparables. Nothing comes before `# IC Memo:`, not even a sentence about the plan.
