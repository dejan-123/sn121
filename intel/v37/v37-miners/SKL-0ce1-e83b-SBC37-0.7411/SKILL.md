---
name: ic-memo-from-diligence-artifacts
description: Writes one five-section investment committee memo from a pasted risk classification table, financial narrative and comparables set. It tests each finding's status against the artifacts' own words, lets any open must-address finding stop a proceed, prices on the revenue that survives the close, and sets the range across the full span of named in-set comps with every multiplication shown.
---

# Investment committee memo from three diligence artifacts

The reply is one memo in five sections. Every status test shows in the risk table and every multiplication in section 3, so the memo is the whole reply.

## 1. Must-address is the table's top tier only
Must-address means the tier the table itself calls Must-Address, or Critical where the tiers are Critical / Moderate / Low (state that mapping in one line). Manageable, Moderate, Informational and Low are never must-address and never block, whatever their status. A table with no must-address tier has zero must-address findings; say so in one line and move on.

## 2. Open or closed: test each status against the text
- Unresolved or In-Progress: open.
- Resolved, but a sentence in the finding or the narrative says the matter is still being decided: open. Signs: claims or proceedings still pending, a review or re-bid still live, a deferral, "substantially resolved" with no closure letter, auditors not yet opined, management unable to document the status. The row shows table says / text says / memo uses; the tier label stays.
- Resolved and no such sentence: accepted on the table's word. The test is whether you can quote that sentence; if you cannot, the status stands. A right that still sits in a contract (to cancel on notice, to withhold consent), a concentration, or the target's own patent application still pending grant is the exposure the finding names, not a sign it is still being decided: Resolved there means the upstream analyst judged that exposure settled, not that the right has gone. Write "accepted on the table's word" and make the record behind the Resolved status a condition seen before signing.
- Missing evidence never reopens a Resolved finding: "no renewal shown", "no consent letter in the data room", "no waiver documented" are things to request, not contradictions.

## 3. The open count decides the call
Count only open rows whose table tier is must-address; an open manageable row is never in the count. Write the count in words with its reason, zero included ("Zero are open: both are Resolved and nothing in the artifacts says either is still being decided").
- One or more: **Do not proceed now; defer.** An open must-address row blocks even when its revenue effect is also priced. Name each blocker and the document or event that turns it to go. A range that covers the ask never offsets a blocker.
- Zero: **Proceed, subject to the section 5 conditions**, bidding no higher than the point, walking away above the range.
- Price is a second axis: an ask above the range is "not at this price" even when risk allows a go. State both axes.

## 4. Price on what survives the close
From reported LTM write one line per adjustment (reported - item = base). Take out only what the buyer will not own: gross pass-through where net revenue is the economic figure, a one-time project, revenue that cannot transfer to this buyer, an upward restatement auditors have not opined on, revenue from customers already gone (the run-rate after them). Revenue still being earned stays in the base even when at risk (an expiring or cancellable contract, an optional migration, a programme under review, an "if X ended, revenue would fall by Y" figure), and so does recurring or non-recurring revenue the input never calls one-time: give the at-risk part one downside line, not priced, and only with an amount or share the input states; otherwise "amount not given". Projections resting on unconverted pilots are not a base. Reported LTM stays as the reconciliation line and a second implied multiple.
EBITDA: keep an add-back only where the input calls it one-time; reverse the rest. Use only EBITDA figures the input states (its figure for the surviving base, when it gives one) or your shown arithmetic gives. Zero or negative normalised EBITDA: EV/EBITDA is not meaningful; say so. Test each seller claim by recomputing the share or margin it implies.

## 5. Every comp is IN or OUT, by name
Each comp line, in the input's order, gives its multiples, growth and margin, then its gaps to the target in points (comp minus target, using the target's growth and margin on the surviving base when the input gives them), then the label and reason. OUT when: its multiple is a transaction price with a control, strategic or PE premium among trading multiples; its EV/EBITDA is NM while the target and the rest are profitable; its growth gap exceeds 15 points either way; its margin gap exceeds 10 points either way. Otherwise IN. "No exclusions flagged" upstream still needs each IN reason. Comps' mix not given: say so; lead with the multiple the mix gap distorts least.

## 6. Range, point and ask, each multiplication written out
- Range = the full span of the IN set: lowest IN multiple x base = low EV; highest IN multiple x base = high EV. Both multiples come from IN lines, never an OUT one. Never round a figure off its multiple x base.
- Point: place the target inside the IN span. Growth position = (target growth - lowest IN growth) / (highest IN growth - lowest IN growth); margin position the same with gross margins; NRR position too when the comps show NRR. Hold each between 0 and 1; position = their average. Point multiple = low multiple + position x (high multiple - low multiple). Point EV = point multiple x base. A target under the whole span sits at the low multiple, and value may sit under the range.
- Cross-check: lowest and highest IN EV/EBITDA x normalised EBITDA when meaningful; say whether the methods agree, and if not, why and which leads.
- Ask / base = implied multiple, plus ask / reported LTM; below, inside or above the range, and against the point. No ask in the input: write "No asking price is given", create none, and use range and point as the bid guide.

## 7. Read findings against each other
One sentence when a lower-tier item changes another's weight: it breaches a standard an open must-address depends on; an informational item sets the base (a one-time job, retention under 100%, revenue that cannot transfer); concentrated revenue rests on contracts expiring soon with no renewal shown. Keep the tier; add the reading.

## 8. Conditions tied to findings
Each condition names the finding it closes, the record that closes it, the party the input names to produce it, and the timing the input gives (window, expiry, notice period), else "before signing". No duration, percentage, amount or date of your own, and no currency conversion. Order: what turns a blocker to go, then price and structure, then post-close. No generic diligence lines. End with "Most important gap: <gap>, closed by <record>."

## 9. Headings and bounds
Target's name in every heading; stay inside each bound:
- `## 1. Deal thesis: <Target> (max 110 words)`: what is bought, its figures, the surviving base, the primary risk under the table's own name, the ask / base multiple (or that no ask is given), the call in words. No range or point figure here; those appear first in section 3.
- `## 2. Tiered risk table: <Target> (one row per finding, max 70 words below)`: # | Finding | Table tier | Table status | Memo reading | Effect (blocks / prices / condition / watch); must-address rows first; then the open count line.
- `## 3. Valuation range: <Target> (max 450 words)`: base lines, comp lines, range, point, cross-check, ask.
- `## 4. Recommendation: <Target> (max 110 words)`: call, open count, price axis, what turns it to go.
- `## 5. Conditions and data requests: <Target> (max 200 words)`, numbered, one or two sentences each.

## 10. Only what the input gives
Every name, figure, date and party comes from the input or from arithmetic shown on input figures. Never invent an ask, a consent, a cure or closing date, a comp's mix, a benchmark or an outside authority. A missing fact the call needs is "not given", with how it moves the call.

## 11. Write it
Call read_reference on `references/worked-memo-post-studio.md` before writing: one complete memo for an invented post-production studio, then why each call was made. Take its habits, never its names or figures. The reply's first characters are `# Investment committee memo: ` and the target's name; it ends at the most-important-gap line. Status tests are written in the risk table's Memo reading column and arithmetic in section 3's lines, so there is no separate analysis, plan or note before or after the memo.
