---
name: ic-memo-gate-then-price
description: Turns three diligence artifacts (a tiered risk table, a financial narrative, a comparables set) into a five-section investment committee memo. The author first reads each risk row into an open or closed gate, then screens the comps and builds the range from a defended base, and only then writes a verdict (Proceed, Request More Data or Pass) whose conditions map one-to-one onto named risk rows.
---

# IC memo: gate first, then price, then verdict

An investment committee does not read a memo for its prose. It checks three things: does the verdict follow from the risk table, can the range be rebuilt from the comps, and does every condition point at a named finding. So the memo is written backwards from those checks, in two turns:

1. **Working turn.** Make the four decisions below and write them out as working notes: gate per row; the line `Must-address rows by recorded tier: ... ; open among them: ...`; base; comp screen with the sorted values and median; range arithmetic; verdict. End this turn by calling `read_reference` for `worked-memo.md`.
2. **Memo turn.** When the reference arrives, reply with the finished memo only, copying every figure and gate from your notes with the same digits. The notes are not repeated.

## Decision 1: read every risk row into a gate

Number the input rows R1, R2… in the order given. For each, copy the **tier and status word for word**; only that tier word decides whether a row is must-address. Then add your own **gate reading**: Open or Closed.

| What the row and the other artifacts show | Gate reading |
|---|---|
| Status "Resolved" and nothing elsewhere disagrees | Closed |
| "In-Progress", "Unresolved", "pending", "under appeal", "substantially resolved", a deferral, a blank or missing status | Open. Missing status is never read as resolved |
| Status "Resolved", but **another artifact** (the narrative or an analyst note) states the matter is still live: a re-bid still running, a review deferred rather than closed, no closing letter | Open, with a flag quoting that artifact |
| Status "Resolved", and only the row's own wording sounds unfinished (a pending application, a cancellable contract, claims still on file) | Closed as recorded, but questioned: the flag says what in the row still looks live and which document would prove the resolution, and a condition asks for it. It does not block the verdict. Missing paperwork is not a contradiction |

**Never re-tier, and the gate uses the recorded tier.** If a row looks mis-tiered (an injunction risk on the core product filed as manageable, a breach of a stated standard filed as manageable), keep the recorded tier in the table and write a flagged observation: what the row says, why it reads as a higher tier, and which condition covers it. A flagged under-tier never becomes a must-address blocker. If the table uses other labels (Critical / Moderate / Low, High / Medium), map them once in a line above the table (Critical = must-address, Moderate = manageable, Low = informational) and keep the original label in each row.

**The primary risk** is the must-address row with an Open gate that moves the most revenue or value. With none open, it is the largest manageable exposure. The thesis names it by row number and the table carries it.

## Decision 2: choose the base before the multiple

The multiple is applied to what the buyer will own after close, not to what the seller quotes.
- Strip revenue only when an artifact calls it one-time, one-off or non-recurring (a single implementation project, an ended contract). Product or hardware sales that repeat are not one-time; keep them in the base.
- Strip revenue that cannot transfer to a new owner (grants, licences or contracts that end on change of control).
- For businesses that pass money through, use net revenue; reject a multiple quoted on gross volume or gross revenue.
- When customers have already cancelled, value the run-rate base without them; quote the reported base once for reference only. Revenue that is only at risk (a live re-bid, an unsigned renewal) stays in the base and becomes a Down adjustment.
- Seller "adjusted EBITDA": accept an add-back only when the inputs show it is one-time; reject vague categories ("strategic investments"). When reported EBITDA is negative or not meaningful, EV/EBITDA is not used.
- Never introduce a figure the artifacts do not contain. An absent asking price is written as "no asking price provided".

## Decision 3: screen the comps

1. **Pick the multiple** the comp table and its notes support (EV/Revenue, EV/EBITDA, EV/Net Revenue). Use a second one only as a cross-check.
2. **Name every comp, in or out**, each with a one-line reason. Exclude: a precedent transaction carrying a stated control, strategic or sponsor premium (it is a deal price, not a trading level); a comp whose growth or margin sits far apart from the rest of the set (well beyond the next nearest peer); a comp with NM for the multiple being applied (out of that multiple only). If nothing is excluded, say so and why.
3. **Median of the included set**: write the included values in ascending order, then take the middle one, or the mean of the two middle ones (four values: the mean of the 2nd and 3rd; five values: the 3rd). Check that the median sits between the lowest and highest included value.
4. **Three directional adjustments against the included median**, each stated as target figure vs median figure and a direction: size (scale and concentration), margin, growth. Add a fourth only when an artifact forces it (contract loss risk, retention below 100%, unbudgeted capex, hardware/software mix the comps do not disclose).
5. **Range from the comps themselves, not from invented multiples.** Count the adjustments: more Down than Up, the range runs from the included value just below the median up to the median; more Up than Down, from the median up to the included value just above it; balanced, from the value just below to the value just above. Multiply each end by the matching base once (an EV/Revenue multiple times revenue, an EV/EBITDA multiple times EBITDA), written as `3.4x × $20.0M = $68.0M`. If the result is a fraction of the asking price or of the cross-check, check that the multiple and base match before explaining any gap. Cross-check with the second multiple if one is usable, then place the asking price against the range.

**Every derived figure is computed once** (median, base, each end of the range, the gap to the ask) and then quoted with the same digits in the log, thesis, valuation and recommendation.

## Decision 4: the verdict gate

| Risk-table state after Decision 1 | Verdict |
|---|---|
| Any row whose recorded tier is must-address (or maps to it) is Open | Never Proceed |
| ...and a party outside our control has already decided it against the deal (a counterparty or regulator has refused, terms bar transfer) and the core business cannot run without it | **Pass** |
| ...and each Open row can be settled by a named document, opinion or confirmation | **Request More Data** |
| No must-address row Open (or none in the table) | **Proceed**, subject to the conditions: name a mitigation for every manageable row (escrow, specific indemnity, closing condition, price adjustment, 100-day plan item) |

The verdict reads only the must-address list from your notes. Manageable and informational rows never block, Open or not, and neither do flagged observations; their mitigations become conditions. A price above the range is not a reason to Pass or to ask for data; it becomes a price condition. The verdict is one word plus one sentence that cites the deciding rows.

## Then write the memo

The memo has exactly five numbered sections, in this order, within these lengths:

1. **Deal Thesis** (80–150 words): what is bought and why, the defended range against the ask, and the primary risk by row number.
2. **Risk Table**: one row per input finding, ordered must-address, manageable, informational. Columns `| Row | Finding | Tier (as recorded) | Status (as recorded) | Gate | Evidence or mitigation |`. Below it, **Flagged observations**: one bullet per contradiction, apparent mis-tier or label mapping, each under 45 words, ending "Not re-tiered."
3. **Valuation**: base and why; comp table `| Comp | Multiple | Growth | Margin | In / Out | Reason |`; median; the three adjustments; range arithmetic; cross-check; ask vs range. Prose under 220 words.
4. **Recommendation** (under 90 words): the verdict word, the deciding rows, the price position.
5. **Conditions and Next Steps**: one bullet per risk row in table order, labelled R#, each under 40 words with an owner and a timing. Their character follows the verdict:
   - Proceed: closing conditions and protections (escrow, specific indemnity, consent as a condition precedent, price adjustment).
   - Request More Data: the exact document or confirmation, and what answer would move the verdict to Proceed or to Pass.
   - Pass: what would have to change for the deal to be reopened.
   A Closed row with nothing outstanding still gets a bullet ("no action; confirm at signing").

**Consistency, kept while writing**: the verdict matches the gate table; every row number in the thesis, recommendation and conditions exists in the risk table; every figure appears in the artifacts or is shown as one operation from them; no tier was changed.

The memo turn is one message of about 6,000 to 9,000 characters. Its first characters are `# IC Memo:` and the target's name: the memo begins at once. Its last line is the final condition bullet, and the memo is the final message.
