---
name: ic-evidence-brief
description: Turns a risk register, financial narrative and comparables into a five-section acquisition committee memo. Tests the register's filed status against independent evidence, decides which issues actually block approval, values only the business the buyer acquires and gives the committee specific next actions.
---

# The evidence brief

Write for directors who will read the recommendation first and then check whether the record supports it. The final document is a decision-ready memo, not an audit worksheet. Work out the risk decision and valuation before drafting its opening line. Read `references/harbour-brief.md` once for a complete example of the finished voice and a contrasting clean-file ending; take no facts from the example into the user's deal.

## Set the decision before drafting

| Record shape | Required verdict |
|---|---|
| Any filed top-tier finding already states an incurable break -- fixed end of the priced exclusive right, express buyer-class bar, or unconditional refusal with no substitute | `pass` |
| No filed top-tier finding exists, or every filed top-tier finding is settled by the evidence | `proceed` |
| Otherwise, a filed top-tier finding is open and can be settled by a named record or outcome | `request more data` |

A lower-tier permit, approval, claim or retention problem can never satisfy the first two rows by being reclassified in the analysis. A conditional warning about an unknown buyer qualification remains an open gate, not an unconditional refusal.

Carry every finding in the input table in its original order, with the tier and status exactly as filed. Highest-tier labels that mean clear-before-deal (for example, Must-Address or Critical) are the gating tier; map different labels by their stated meaning. Lower-tier findings stay lower-tier even when concerning: flag a suspected filing error beside the label and assign a remedy, but do not silently promote it or let it veto a clean vote.

Distinguish an exposure from evidence of its current state. A right that exists, or a historical allegation, does not by itself contradict a row filed Resolved. A current independent statement that the closing step has not happened does contradict it: show both the filed status and the specific source of the disagreement. An explicit "not yet signed", "review still pending", or "outcome deferred" is different from a missing attachment. Request proof of an uncontradicted Resolved row as a diligence deliverable without automatically reopening it. Unresolved, In-Progress and blank statuses remain open.

Set the verdict by formula, not by how alarming the rows sound:

1. **Decided break?** A filed gating-tier row counts as a decided break when its substance is already adverse even though its Status may read open: an essential exclusive right ends on a stated date with no transferable successor on record, a rule bars a material right or income from this buyer class, or an unconditional refusal leaves no qualified substitute. If any decided break exists, the verdict is **pass**, even if other gating rows are still askable. Documents cannot lengthen a fixed end or transfer forbidden income.
2. **Open gate?** If no decided break exists, count filed gating-tier rows that remain open after the evidence check. A pending application, negotiable consent, outside hearing, unrequested signature, or refusal conditioned on an unknown buyer qualification is open rather than final. Any open gate makes the verdict **request more data**. Name the issuer, the favorable result needed, and what happens if it fails.
3. **No open gate?** Then the verdict is **proceed**. If the source table contains no gating-tier row at all, this third branch applies even when lower-tier approvals, permits, claims, repairs or retention problems remain unfinished. Their evidence requests and protections belong under proceed in section 5; severity cannot rewrite the Tier column.

The label `request more data` is forbidden unless the memo can name an open filed gating-tier row that is not a decided break. The label `pass` is forbidden unless the memo can name the stated fixed end, express buyer-class bar, or unconditional refusal that makes the break incurable. Do not infer the buyer's qualification where the packet leaves it unstated.

Never convert a conditional statement into an unconditional refusal. Before treating a provider's warning as a closed door, ask whether the stated condition applies to this buyer and whether another qualified provider can fill the role; if either fact is missing, the row is askable and the verdict stays request more data. A rich asking price is a repricing problem, not a decided break.

### Wrong answers to avoid

- **Error:** `request more data` when no filed gating-tier row exists. Pending permits, approvals, claims, weak retention or missing proof filed below that tier are conditions inside proceed; they cannot supply the missing top-tier row.
- **Error:** waiting for a later answer about an exclusive right whose current end date is already fixed. If the thesis depends on that right and no transferable successor exists on the record, the end date itself is the decided break.
- **Error:** reading "would not continue IF buyer lacks a qualification" as "will not continue." If the buyer's qualification is unstated or replacements have not been checked, request those facts; do not infer the buyer is unqualified.
- **Error:** asking whether expressly non-transferable income can transfer. Remove it from the acquired base; the only question is whether the remaining thesis still supports the deal.

## Rebuild the money before selecting peers

Identify the priceable metric and its period. Show the reported figure, each deduction supported by a stated amount, and the corrected base. Remove a one-off item, cash flow that does not pass to this buyer, and revenue already lost. A business having subscriptions and services does not mean its services are one-off: retain both unless the packet says otherwise. Keep revenue merely at risk in the base, but name the downside and address it through price, conditions or contingent consideration. Reject recurring costs disguised as one-time add-backs. A forecast dependent on a future win is not earned revenue. If the acquired earnings are negative or unreliable, explain why an earnings multiple does not set the price. Do not construct an exact revenue figure out of an unsupported percentage; label any estimate as a sensitivity. Never assume a churn rate, price haircut or numerical trigger absent from the artifacts.

Name every comparable, whether it is included on the chosen metric, and why. Treat control-premium transactions separately from quoted trading peers; exclude a clearly non-comparable growth or margin profile with an explained test, not merely because its multiple is inconvenient. A peer with NM earnings can still be a revenue peer. Compare the target with the retained peers on growth, margin, concentration and business mix where the packet permits. If the packet warns that the peer mix is unknown, keep that limit visible rather than pretending the adjustment was measured.

Choose a defensible low and high multiple from the retained set and justify the target's placement. Print both actual products, `low x base = low EV` and `high x base = high EV`, rounded consistently. Do not claim the range equals different products elsewhere in the memo. Distinguish enterprise value from equity value; use a debt/cash bridge only if the necessary figures are provided. If there is an asking price, divide it by the same base, then say whether it lies below, within or above the supported range. If no ask is supplied, say so; do not invent one.

## Deliver the brief

Start with `**Recommendation: proceed | request more data | pass**` filled with ONE of those labels, followed by the decisive finding and the supported range (or the reason a range cannot be computed). The first line must be the same decision as section 4. Then write exactly these five numbered sections:

1. `## 1. Deal thesis` (up to 150 words): what is bought, why it might be worth buying, and one primary risk that appears as a named finding in section 2.
2. `## 2. Tiered risk table`: one row per source finding, in source order; columns `Finding | Filed tier | Filed status | Evidence and treatment`. Cite the actual conflict or say the filed status stands. Below it, state the number of open gating findings in a natural sentence.
3. `## 3. Valuation` (up to 300 words plus comp table): corrected base, retained and excluded comps by name and reason, two correct products, the target's placement, the ask on the corrected basis if stated, and material limits.
4. `## 4. Recommendation` (up to 140 words): repeat the first-line label and explain what is authorized NOW, not what might be authorized after later conditions are met. Name the gating findings and price discipline.
5. `## 5. Conditions and next actions`: each numbered action names its finding or valuation gap, an owner by role, the record or instrument, a deal-stage timing, and the consequence if the item fails. A bounded liability calls for an indemnity or appropriately sized holdback; a cash need may call for a price adjustment; retention risk calls for a retention plan.

Use complete sentences; keep the finished memo around 650-950 words, with row observations under 35 words and action bullets under 45 words. Unknowns are described plainly ("the packet does not give an asking price"), never bracketed placeholders or multiple-choice blanks. Do not invent amounts, dates, owners by name, laws or evidence. Before sending, recalculate the two products from the printed multiples and base; if the range anywhere disagrees, replace it with those products. Check that the opening verdict, table's open-gate count and section 4 agree.
