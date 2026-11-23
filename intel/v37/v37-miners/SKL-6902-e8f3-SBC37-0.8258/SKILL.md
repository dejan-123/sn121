---
name: ic-memo-evidence-ledger
description: Writes an M&A investment committee memo from a deal-risk classification table, a financial narrative and a comparables set. Method - before drafting, give each finding an evidence-ledger line - its claim, the artifact that supports or contradicts its status, and the document that would close it. Only a regulator's, court's or counterparty's own document closes a matter; opinions, expected approvals, appeals and agreements in principle do not. Any open Must-Address finding means NO-GO; otherwise PROCEED WITH CONDITIONS, priced no higher than the defended range's top. The ledger also fixes the recurring valuation base and the conditions.
---

First give each finding a ledger line: claim | evidence on its status | document that would close it. Unprinted, it feeds the Why column and section 5.

- **Open:** Unresolved, In-Progress, or Resolved while another artifact (analyst's note, narrative) calls it live: newer evidence beats a label. A row's wording never contradicts its status: it records the finding as first found.
- **Questioned:** Resolved, wording still live, nothing else confirming a fix. The label may be right, so its closer is a condition precedent, not a blocker.
- **Closers:** only the regulator's, court's or counterparty's own document: only the deciding party can end it. Until then, counsel's view, an expected approval, a filed appeal or an agreement in principle changes nothing.

**Call.** Any open Must-Address line → **NO-GO at this time (do not proceed to signing)**; price cannot cure a live risk. Otherwise **PROCEED WITH CONDITIONS** at no more than the defended range's top, never unconditional while a condition precedent stands. Name the condition whose failure would reverse the call.

**Valuation.** Comps in or out with reasons; EV/EBITDA if EBITDA > 0, else EV/Revenue or industry metric; owned, recurring base; two closest comps bracket; products, range, cross-check, ask, equity.

Call read_reference on `references/ledger-memos.md` before writing. It takes three invented deals from artifacts to finished memo; borrow the method, not the deals.

## The reply is the memo and nothing else

Write the memo directly, with no analysis, ledger or notes before it, and no remarks on the process or this skill. The Input check carries the recomputed figures and section 3 the valuation arithmetic, so a separate walk-through only repeats numbers and invites mismatches. The memo runs 4,500-7,000 characters, in this order:

1. First line: `# Investment Committee Memo: <target> (<sector>)`.
2. `**Recommendation: ...**` with a one-sentence reason. It leads so it survives a cut-off.
3. `**Input check**`: at most 6 bullets and 120 words on the tier scale, open rows, contradicted or questioned labels, figures that do not reconcile, and missing inputs.
4. `## 1. Deal Thesis (≤ 120 words)`, ending with a **Primary risk:** sentence.
5. `## 2. Tiered Risk Table`, the memo's only table: # | Finding | Input tier / status | IC treatment | Why. Treatment is one of Blocks proceed (open Must-Address), Condition precedent, Price or structure, Post-close plan or monitor. Below it, 2-3 lines separate deal-breakers from manageable risks.
6. `## 3. Valuation Range`.
7. `## 4. Recommendation and Consistency Check (≤ 120 words)`.
8. `## 5. Conditions and Data Requests`: 4-6 numbered items, each citing its finding (#n) or the input gap and naming the document, the party that issues it and the timing.

## Comps, multiple and base

**Comp set.** Name every comp as included or excluded, with the reason. Exclude:
- a past acquisition's multiple when the others are trading peers: it carries a control or sponsor premium;
- a peer the target does not resemble (growth about 1.6 times the target's or more, a growth or margin gap of 20 points or more, or many times its size): it prices a different business;
- a comp marked NM on the multiple in use: there is nothing to apply.

**Multiple.** EV/EBITDA when the target's EBITDA is positive and the comps report it. EV/Revenue when EBITDA is negative or the comps give none, since a multiple of a loss means nothing. The industry's own metric (net revenue, for example) when the artifacts say the comps use it.

**Base: what the buyer will own and what recurs, because that is what it pays for.**
- Remove one-time revenue, revenue that ends or cannot transfer on a change of control, and volume already lost.
- Use net rather than gross where the comps do, so base and multiple match.
- An unaudited or disputed uplift is a sensitivity, never the base.
- Never price projections that depend on prospects or pilots converting.

## How the ledger drives the memo

- **Call:** the open Must-Address lines decide it, before any price is considered.
- **Base:** a line whose claim is revenue that is one-time, ends at closing or is already lost moves that amount out of the base, and the Why cell says so.
- **Conditions:** every closer still missing becomes a section 5 item that names its document, the party that issues it and when.
- A Resolved line backed by a closer document is accepted and moves to post-close plan or monitor.

## Risk table rules

- Number findings 1..n in input order and keep those numbers everywhere, so each #n points at one row.
- Tier words are Must-Address / Manageable / Informational. Map any other scale (Critical / Moderate / Low, say) onto them and state the mapping in the Input check, so the call reads one scale.
- Row order: blocking rows, then conditions precedent, then the rest, so the IC meets what stops the deal first; every row keeps its input number.
- Raise a row whose tier understates it when it sets the valuation base or feeds a blocking row, and give the reason. Never demote the analyst's tier, which is the input on record; put disagreement in the Why column.
- The Why cell is the ledger line in short form: the evidence, then "closer:" and the document where one would end the matter.
- The thesis names the first table row as its primary risk.

## Section notes

- Input check: the first bullet states the tier scale or its mapping; the others list open, contradicted and questioned rows by number, the recomputed base and net debt, the ask's multiples, and any missing input.
- Tier / status cell: the input tier and status as given, plus "contradicted", "questioned" or "raised to <tier>" where the ledger says so.
- Below the table, name the deal-breakers by number, then say how each manageable row is settled: by a condition, in price, or by a plan.
- Section 4: the call and its price, why it holds, the reversing condition (for a NO-GO, the closers that would reopen the deal and the price cap if they arrive), then one consistency line.

## Figures you recompute

- Margins; net debt (debt less cash); each EBITDA add-back on its own, one-time only if the artifacts show it, because a recurring cost called one-time inflates the base; shares of a total; the ask as multiples of revenue and of EBITDA.
- Where the narrative's own figures do not reconcile, show both sides and request the bridge; picking one side hides the gap.
- Never invent a figure. If no ask is stated, say so and request it.
- Compute each figure once and reuse it unchanged, since a figure computed twice tends to drift. Compute only what the call, the range or a condition needs. Check every product before it goes in.

## Bracket and the order of section 3

- The two included comps closest on growth and margin bound the multiple; they are the best evidence of price. State any adjustment as a number with its reason.
- If revenue and EBITDA multiples disagree, compare implied EBITDA margins (EV/Revenue ÷ EV/EBITDA) and let profitability decide which multiple fits.
- Then write, in order: (a) multiple × named base = value, low and high; (b) quantified unfunded capex deducted; (c) the **Defended range**, straight after the primary method's products so no cross-check is mistaken for it; (d) any other multiple, labelled "Cross-check only"; (e) the ask's implied multiples and its distance from the range; (f) equity value, written as "EV less $X net debt" (or "EV plus $X net cash").
- Skip the implied-margin test when the two multiples agree.
- A NO-GO memo still shows the range, so the IC knows the price if the blockers close.

## Check before you finish

- The recommendation's price sits inside the defended range; a proceed is offered at no more than its top.
- Every figure is identical wherever it appears; one mismatch makes the IC doubt the rest.
- Each section 5 item traces to a ledger closer or an input gap, never to a generic request.
- The reply begins with the memo title.
