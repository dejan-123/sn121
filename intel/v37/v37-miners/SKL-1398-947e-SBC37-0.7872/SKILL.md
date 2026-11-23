---
name: ic-memo-gatekeeper
description: Draft a five-section investment committee memo from a risk table, a financial narrative and a comparables set. Re-test each status against the artifacts' own text, price on the base the buyer will actually own, rule every comp in or out by its growth gap, show multiple x base, and refuse a go while any top-tier finding is still open.
---

# Investment committee memo: doctrine

Write one memo a committee can vote on. Before drafting, open `references/hotel-group-memo.md` with read_reference: a complete invented hotel-group memo plus short variants for other cases. Copy its reasoning moves, never its facts. Every name, figure, date and document in the memo comes from the pasted artifacts or from arithmetic you show: no estimate, assumed share, year, period, industry norm or threshold the input does not state, and no consent or letter described as obtained unless the input says so. A figure you need but lack becomes a data request. The reply is the memo and nothing else: its first characters are `# ` and the target's name. Nothing about the skill, the reference or your method ("Now I will draft...") comes before the title or after the last line; your reasoning shows inside the five sections.

## 1. What the committee decides

Two questions, in order. Gate: may we proceed at all? Any top-tier finding still open (section 2 decides "open") means NO-GO now. Only the top tier blocks: Must-Address, or the word the table uses in its place (Critical, High). Manageable, Moderate, Informational and Low never block, however serious they look; they move price and conditions. A table with no open top-tier finding has zero blockers. Price: at what value, from the comps applied to the base the buyer would own. Answer both; never let one excuse the other.

## 2. Trusting the three artifacts

Rule: take each finding's tier and status as the table gives them.
Exception, status contradicted: the input says the matter itself is still running: a claim or suit not yet decided, a review or investigation still active, a re-bid live, a response window still open; a deferral (a delay is not a closure); "substantially resolved" with no closure letter; auditors not yet opined; legal opinions in conflict; management unable to document. Carry it as OPEN for the gate; its row gives the table's word, the input's words, and which the memo uses. Keep the table's tier; never re-tier quietly.
Exception, status unevidenced: "Resolved", and the input describes only the shape of the exposure: a consent required but not mentioned either way, a contract cancellable on notice or month-to-month, the target's own patent or trademark application still awaiting grant (even with a rival filing on record), self-certification without audit. It stays resolved for the gate, does not count as open and does not block a go, however large the exposure; its size moves price and conditions. Mark it "resolved, not evidenced", name the remaining exposure, and make the missing document a condition before signing.
Test: does the input say in words that a dispute, demand, review or bid involving the target is still undecided, or that the closing document has not been issued? Yes: OPEN. Silence about a document is never a contradiction: a missing copy, the target's own filing awaiting grant or the exposure's shape is unevidenced.
Other tier words (Critical / Moderate / Low): state the mapping above the table (top word = must-address); same gate.
Seller statements are claims (an "adjusted" profit, a description of lost customers, a banker's multiple on the wrong metric). Recompute them; if customers called low-margin carry the same share of net revenue as of volume, the claim fails. Say so.
Cross-links: a lower-tier finding keeps its tier but gains weight when it feeds a top-tier finding or the price base (a metric breaching a standard tied to an open review; an "informational" item that changes revenue; contracts expiring within months with no renewals). Name the link in the row ("bears on F2").

## 3. The valuation base

Rule: price on the revenue and EBITDA the buyer will own after close; show the bridge from reported LTM in one line. Remove volume passed through to others when net revenue is the economic figure, one-time projects, revenue that cannot transfer to this buyer, customers already cancelled, and an upward restatement auditors have not opined on (at the stated amount). Projections resting on unconverted pilots or prospects are upside, never base. Keep only add-backs the input shows are one-time; recurring "investment" or "catch-up" spending stays in.
Exception: nothing in the input marks part of LTM as non-surviving: reported LTM is the base, "no adjustment".
Test: on the input's own words, will this dollar recur under our ownership? Ended, one-time, non-transferable or unaudited: out. Revenue at risk but still flowing (a re-bid, a remediation plan, an estimated impact not yet incurred) stays in; a downside line only from a dollar amount the input states, with no assumed share.
A figure the narrative states for an adjusted base is used as given; if your arithmetic differs, say so in one clause and keep the narrative's figure. Never pro-rate. Reported EBITDA negative, or negative on the base: EV/EBITDA is NM, even if an adjusted figure is positive; never apply an EBITDA multiple to EBITDA that includes removed revenue.

## 4. Comp discipline

Rule every comp IN or OUT with its reason, in a table kept in the input's order, with growth gap and margin gap against the target's own stated figures, in points, always positive. The IN/OUT cell holds only IN or OUT and the reason; closeness is decided after the table.
OUT: a transaction multiple with a control, strategic or PE premium when the others trade; growth gap over 15 points or margin gap over 10; NM on the multiple used (out of that multiple only).
Range: under the table list the IN comps' growth gaps from smallest to largest (sort by gap, never by multiple), then "Closest two:" the first two in that list, each with its multiples; those multiples set low and high (margin gap breaks ties). Other INs are outer bounds, named, not used. Place the target in the range by margin and retention and say why (thinner margin or sub-100 retention: low end).
Exception: the analyst flags no exclusions: still give every gap and each IN its reason. Every IN comp grows faster than the target: the lowest IN multiple is the top of its range; state any discount below it in turns, with the reason.
Comps' revenue mix not given (hardware vs software): say it is missing; it distorts revenue multiples most.

## 5. Arithmetic on the page

Lead multiple: EV/EBITDA when reported EBITDA is positive, EBITDA on the base is positive and both closest comps give one, or when the comps' mix is missing. If reported EBITDA is negative, EV/Revenue leads, whatever the add-backs. Show the other as a cross-check.
One line each: low multiple x base = low EV; high multiple x base = high EV; ask / base = implied multiple; the same multiples on reported LTM as a reconciliation line. If the methods disagree, say why (peers' implied margin = EV/Revenue / EV/EBITDA, against the target's). Multiply, then round to one decimal in $M; the printed range must equal the products. Say whether the ask is below, inside or above the range, and by how much.
No asking price in the input: write "No asking price is given"; the range is the offer ceiling; no implied multiple; never suggest a seller figure.

## 6. The recommendation rule

Write the gate line first, then the call. Gate: count the open top-tier findings (Unresolved, In-Progress, or a contradicted Resolved; an unevidenced Resolved is not open), in words. The call follows the count:
- One or more: "Call: NO-GO at this time". Name each blocker and the record that turns it into a go (consent letter, closure letter, audit opinion, signed renewal). Conditions precedent do not make an open top-tier finding a go today.
- Zero: "Gate: zero must-address findings are open because ...", then "Call: GO with conditions". Never write NO-GO when the count is zero.
- Price, on its own line: ask above range, "not at the asking price; ceiling $X"; inside, "the ask is supported; ceiling $X"; no ask, "offer ceiling $X".

## 7. Conditions and data requests

One numbered line per finding that is open, contradicted, unevidenced or cross-linked: the finding (F# and label), the record that closes it, who produces it, and when (timing the input gives, else "before signing" or "before close"). Name only parties, bodies and documents the input names; otherwise describe the record by kind (counsel's written opinion, the signed renewal). Then each missing input (no ask, no comp mix, no documentation) as a data request, with how it affects the call. Close with one line: the most important open gap for the target and the record that closes it.

## 8. Memo layout

Start `# <Target>: investment committee memo`. Each heading carries the target's name and its bound:
1. `## 1. Deal thesis for <Target> (up to 130 words)`: what is bought, why it is worth owning, the primary risk (the open top-tier finding with most at stake) named as its risk-table row (F#), the call in one clause.
2. `## 2. Risk table for <Target> (one row per finding, notes up to 60 words)`: F# | Finding | Tier as given | Status as given | Status used | Why / bears on. Status used: OPEN, OPEN (contradicted), resolved, not evidenced, or Resolved. Top tier first; under it, the open must-address count in words.
3. `## 3. Valuation for <Target> (up to 350 words plus tables)`: base bridge, comp table, gap list, arithmetic lines, where the ask sits.
4. `## 4. Recommendation for <Target> (up to 170 words)`: Gate line, Call line, what turns a no into a go, Price line.
5. `## 5. Conditions for <Target> (one line per finding, up to 250 words)`.
Whole memo under 1,300 words. State each figure once and reuse it unchanged.
