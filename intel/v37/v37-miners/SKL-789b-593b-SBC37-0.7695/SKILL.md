---
name: ic-memo-from-diligence-record
description: Writes a five-section investment committee memo from three upstream diligence artifacts (a tiered risk table, a financial narrative, a comparables set). The record is carried, never edited: tiers and statuses stay as the analysts recorded them and every tension is flagged. Price is derived from what the buyer will actually own and a screened comp set, and the verdict follows from the must-address rows alone, with one condition per risk row.
---

# IC memo from the diligence record

The deal team has done its work in three artifacts. The memo's job is to carry that record to the committee without bending it, and to reach a verdict the committee could rebuild from the same pages. Four commitments govern every memo.

**1. Carry the risk record exactly; flag, never fix.** Each finding keeps the tier and status the upstream analyst gave it, word for word. Where the artifacts disagree with themselves (a row marked Resolved while the narrative says the matter is still live, a finding that reads more serious than its tier, labels outside the usual must-address / manageable / informational scale), the memo says so in a flagged observation and leaves the record as it is. A status that is in progress, ambiguous or missing is read as unresolved.

**2. Price what the buyer will own.** The multiple is applied to a base the memo defends: one-time revenue, revenue that cannot transfer to a new owner and gross pass-through amounts are taken out; vague seller add-backs are rejected. The comp set is screened in the open, with every comparable named as included or excluded and a one-line reason, the median shown from the sorted values, directional adjustments for size, margin and growth stated against that median, and the range shown as arithmetic. Figures the artifacts do not contain are never supplied.

**3. Let the must-address rows decide.** An unresolved must-address finding blocks Proceed. Proceed is available only when every must-address finding is resolved and each manageable finding has a named mitigation. Price above the defended range is a negotiating condition, not a verdict.

**4. Tie every next step to a row.** Conditions and next steps run one bullet per risk row, and their character follows the verdict: protections to close on after Proceed, specific documents to obtain after Request More Data, what would reopen the deal after Pass.

## The memo

Five numbered sections, in this order:

1. **Deal Thesis** (80–150 words): what is bought and why, the defended range against the ask, and the primary risk by row number. The primary risk is the open must-address row worth the most; with none open, the largest remaining exposure.
2. **Risk Table**: `| Row | Finding | Tier (as recorded) | Status (as recorded) | Gate | Evidence or mitigation |`, rows numbered R1, R2… in input order and listed must-address, manageable, informational. Gate is Open or Closed. Under the table, one line: `Must-address rows: R1, R2; open: R2.` Then **Flagged observations**, one bullet each under 45 words, ending "Not re-tiered."
3. **Valuation** (prose under 220 words): the base and why; `| Comp | Multiple | Growth | Margin | In / Out | Reason |`; included values in ascending order and the median; the three adjustments; the range arithmetic; a cross-check on a second multiple when one is usable; the ask against the range.
4. **Recommendation** (under 90 words): Proceed, Request More Data or Pass, the deciding rows, the price position.
5. **Conditions and Next Steps**: one bullet per risk row in table order, labelled R#, under 40 words, with an owner and a timing. A closed row still gets a bullet ("confirm at signing").

The memo is about 6,000 to 9,000 characters, opens with `# IC Memo:` and the target's name, and ends on the last condition bullet.

## Decision rules

These settle the cases the commitments leave open.

**Gate for each row**, first match wins:

| The row and the artifacts show | Gate |
|---|---|
| Status field In-Progress, Unresolved, pending, under appeal, "substantially resolved", deferred, blank or missing | Open |
| Status Resolved, but the narrative or an analyst note says the matter is still live (a re-bid running, a review deferred rather than closed, no closing letter) | Open, flagged with a quote of that artifact |
| Status Resolved, and only the finding's own wording describes a lasting exposure (a pending application, a cancellable contract, claims on file) | Closed as recorded; a flag names the document that would prove it and a condition asks for it. Missing paperwork alone is not a contradiction |
| Status Resolved and nothing disagrees | Closed |

Only the recorded tier makes a row must-address. A row that reads higher than its tier is flagged and covered by a condition, and never blocks. Other label sets are mapped once above the table (Critical = must-address, Moderate = manageable, Low = informational).

**Base.** Strip revenue an artifact calls one-time or non-recurring, revenue that ends on change of control (grants, non-transferable licences or contracts), and customers already cancelled; value pass-through businesses on net revenue. Keep revenue that is only at risk (a live re-bid, an unsigned renewal, an optional migration, an anchor customer) and repeat product sales; at-risk revenue becomes a Down adjustment. Accept an EBITDA add-back only when the inputs show it is one-time. Negative or NM EBITDA rules out EV/EBITDA. With no asking price given, write "no asking price provided".

**Comps.** Out: a precedent transaction carrying a stated control, strategic or sponsor premium; a comp whose growth or margin is more than 10 points beyond the next-nearest comp; a comp with NM for the multiple applied (out of that multiple only). Everything else is in. Median: odd count, the middle value; even count, the mean of the two middle values.

**Range.** Count the adjustments. More Down than Up: from the included value just below the median to the median. More Up than Down: from the median to the value just above. Balanced: from the value below to the value above. Multiply each end by the matching base once (`3.4x × $20.0M = $68.0M`) and quote each derived figure with the same digits everywhere.

**Verdict.**

| Must-address rows | Verdict |
|---|---|
| One is open, a party outside our control has already decided it against the deal (refusal, terms bar transfer), and the core business cannot run without it | Pass |
| Open ones, each settleable by a named document, opinion or confirmation | Request More Data |
| None open, or none exist | Proceed, with a mitigation named for every manageable row (escrow, specific indemnity, condition precedent, price adjustment, 100-day plan item) |

Manageable and informational rows never block, open or not, and neither do flags.

## Working order

Settle the gates, base, comp screen, median, range and verdict in notes first, and end that message by calling `read_reference` for `worked-memo.md`. When it arrives, reply with the memo alone, copying figures from the notes digit for digit.
