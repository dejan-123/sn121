---
name: ic-memo-authoring
description: Drafts a five-section investment committee memo (deal thesis, tiered risk table, defended valuation range, recommendation, conditions) from a risk classification table, a financial narrative and a comparables dataset.
---

# Investment committee memo from three diligence artifacts

A memo misleads its committee in three quiet ways: it votes Proceed over a finding nobody closed, it prices the deal on the seller's base and the seller's comps, or it tidies away a disagreement between the upstream analysts. The author reads the three artifacts against each other, carries every real tension into the memo in so many words, and lets the verdict fall out of the table.

## Status decides the verdict; the tier is not yours to change

Each finding gets an id in input order (R1, R2, ...) and keeps the tier and status its analyst recorded, word for word. The status is read on a ladder:

- **Closed**: recorded Resolved. Finding and status come from one analyst, so a finding's wording (an application still pending, an agreement that can be cancelled) never contradicts its own status, nor does the narrative's silence. The row does not block; its bullet only asks that the document behind Resolved be put on file.
- **Open**: Unresolved, In-Progress, a missing status (read as unresolved, and said so), or soft wording such as "substantially resolved".
- **Contested**: recorded Resolved while a sentence outside the risk table (the financial narrative, an analyst's note) says the matter is still live or the status may be wrong. It counts as open.

The recommendation is exactly one of `Proceed`, `Request More Data`, `Pass`:

1. A must-address row that is open or contested blocks `Proceed`, whatever the growth or the price.
2. Blocked: `Request More Data` if a document, decision or dated event would close the row and can be asked for or awaited; `Pass` only if the input states the blocking fact as final for any buyer, incurable before signing and fatal to the thesis; a fact that only shrinks the base, depends on who the buyer is, or can be cured by filings and fines stays a data request.
3. `Proceed` needs every must-address row closed and every open manageable row carrying a mitigation the input itself names (a reserve, insurance cover, a funded plan). "Under appeal" or "in discussions" is a status, not a mitigation; without one the verdict is `Request More Data`, never Pass.

Flagged observations go under the table only where two things disagree: a contested row (both sides quoted, each artifact named); a tier that does not fit the standard definitions (the row keeps its tier, the flag asks its analyst to confirm, and Proceed waits for the answer; re-tiering it yourself hides the disagreement); other tier words such as Critical / Moderate / Low (mapped in one line, original word kept in each cell). An open status or a fitting tier is not a flag.

## Valuation: a range read off the comp table, not asserted

- **Base.** Only four things leave the headline, and only where the input says so: pass-through costs where the narrative calls net revenue the meaningful figure; one-time projects; revenue the input says cannot pass to a buyer (a non-transferable grant); customers that have already cancelled, whatever the seller calls the loss and even if it is also a row of the risk table. Where the narrative gives the reduced figure, that is the base. Non-recurring revenue, a services line, a legacy product or a business mix stays in: non-recurring is not one-time.
- **Comp set.** Every comparable is In or Out with a reason. Out: a transaction price (control, strategic or sponsor premium), a profile standing clear of the target and of the other comps, another revenue model. Never out merely for being high or low; if none qualifies, "none excluded".
- **Range.** The comp table is sorted strictly by growth, each row lower than the one above, with the target on its own row in its place. The range runs between the EV/Revenue multiples of the included comp on the row just above the target and the one just below it (the two nearest rows if the target is fastest or slowest), each named. Margin against those two, and size, say where inside the range the target sits.
- **Ask.** `ask / base` as an implied multiple, placed against the two ends of the range.

## Standard tier definitions

Must-address: the finding alone could stop the deal, void the thesis or reset the price (title to core IP or an injunction on a core product; a licence, accreditation or funding source most revenue depends on; an open enforcement matter). Manageable: a bounded cost or disruption that price, a covenant or a plan can absorb. Informational: it changes how a number is read and needs no action alone. A tier flag is for a row that sits below or above where these put it, never for a top-tier row. A missing status gets one line. Where nothing disagrees: "Flagged observations: none; the artifacts agree on tier and status."

## Valuation in detail

Each base correction is one visible subtraction, and the seller's base appears once, as "not X, because". Growth that depends on unsigned customers is never in the base. EBITDA is the reported figure: an add-back counts only if one-time and evidenced, and spend called "strategic" or "investment" is operating cost.

A banker's or broker's choice of comp is the seller's argument: it is tested like the rest. When the input says no exclusions were flagged, each comp is still tested, and the memo never manufactures an exclusion.

EV/Revenue is the multiple applied, because the base corrections and the growth comparison are both made on revenue. Where reported EBITDA is negative or distorted by a one-off item, where the dataset gives no EV/EBITDA, or where the seller leans on an adjusted EBITDA, one line says so; otherwise EV/EBITDA is not discussed. No second range and no EBITDA product is computed.

Adjustments are stated before the range, in this order. Growth: the two neighbours named, the same two that set the range, and whether the target sits in the upper or lower half of the included set, that is above or below its median. Margin: thinner than both neighbours points to the low end, richer than both to the high end; where a note says margins are not like-for-like (revenue mix not broken down), no margin adjustment is taken and the breakdown is requested. Size: "not in the dataset, no adjustment taken", unless it is. Only where the input reports it, retention under 100%, concentration or an unaudited restatement is named as downward pressure.

Each end is written `multiple x base = EV`, rounded to $0.1M and quoted unchanged afterwards. The ask is placed only against figures on the page: below the low end, inside the range, or above the high end. No ask in the input: say so and supply none.

## The memo: five sections, this order, each inside its bound

It opens `## [target] ([two or three words on what it is]): IC memo` and one line naming the three artifacts. Each section heading ends with this deal's own particulars, as shown. The whole memo stays under 6,000 characters: a longer one is cut off before its recommendation and conditions.

- `### 1. Deal Thesis: [target]`: 3 to 5 sentences, 120 words at most. What is bought and its value driver, in input figures on the corrected base; the ask if stated; "Primary risk:" naming one row of the risk table by id, the open or contested row of the highest tier that would hurt the driver most; then one sentence, in this deal's own terms, naming the verdict the table leads to. The range is not quoted here; it is derived in section 3.
- `### 2. Risk Table: [n] findings, primary risk [id]`: one row per input finding, none merged, added or dropped; must-address first, then manageable, then informational. Columns `| ID | Finding | Tier | Status | Reading | Deal impact |`. Reading is Closed, Open or Contested plus a few words of why; 20 words a cell at most. Then "Flagged observations:".
- `### 3. Valuation Range: EV/Revenue on [base]`: comp table `| Comparable | Growth | Margin | EV/Revenue | In/Out | Reason |`, fastest grower first, the target on its own row; then 150 words at most: base, multiple, the three adjustments, both ends of the range, where the target sits in it, the ask, data needed to tighten the range.
- `### 4. Recommendation: [verdict]`: 70 words at most, opening with the verdict in bold inside the first sentence: the rows that decided it by id, why the table allows or blocks Proceed, the price position. It never contradicts the Reading column.
- `### 5. Conditions and Next Steps: [first id] to [last id]`: one bullet per risk-table row, same order, opening with the row id, 30 words at most: an owner by role, the exact document, party or action, and the step it must precede. Under `Request More Data` each bullet is the data request that would close or re-tier its row; under `Proceed`, a condition precedent or a mitigation written into the deal; under `Pass`, what would have to change to reopen the file. No bullet without a row, nothing generic, and no amount, threshold or deadline the input does not state.

## Before sending

The primary risk is a row of the table; the verdict agrees with every Reading; each product recomputes; every comp is In or Out; bullets match rows one to one. Every figure, name, date and document comes from the input; what is missing is written "not provided" and requested, never estimated.

Before writing, read `references/worked-memos.md` with read_reference: two invented deals in full (one blocked, one that proceeds) and two excerpts. They show form and size; none of their names, figures, findings or sentences may appear in the memo. The reply starts at its `## ` title with no sentence about method before or after it.
