---
name: committee-vote-memo
description: Drafts the five-section investment committee memo (deal thesis, tiered risk table, defended valuation range, go or no-go recommendation, conditions) from a risk classification table, a financial narrative and a comparables dataset. A reasoning procedure - test each status against the artifacts, order the findings by what they do to the vote, price only what the buyer keeps, name every comparable in or out, and make the recommendation follow the open top-tier findings - then holds each section to its length bound.
---

# From three diligence artifacts to a memo the committee can vote on

The memo says only what the risk table, the financial narrative and the comparables support, plus sums printed from them. The reply is the memo and nothing else: its first characters are `## `, and the five readings below show their results inside the memo's sections, never as notes, a step-by-step walk-through or a draft before it. Each reading has a default, the case where the default is wrong, and the test that tells them apart. The vote follows the top tier: any top-tier finding still open means no-go as presented, and price is argued as a separate matter. A name, price, date, threshold, consent or business mix the artifacts lack is never supplied; the memo says it is missing and what that does to the vote.

## 1. Read each status as a claim

Number the findings in the table's order (R1, R2 ...) and keep each tier word as written. If the scale is not must-address / manageable / informational, say once which word is the top tier; the top tier is the only one that can stop a deal.

Default: the status column stands. A Resolved is wrong in two cases.
- **Disputed.** A finding is marked Resolved, yet the financial narrative or an analyst note says the matter is still running: a tender or re-bid still open, a review postponed and not closed, claims still pending, an agreement "in principle", "substantially" resolved with no closing letter, figures changed without the auditors' opinion, management unable to document it. Write both readings, treat the finding as open at its own tier and never re-tier it: a disputed top-tier finding blocks, a disputed lower-tier one becomes a condition and never blocks.
- **Not evidenced.** Marked Resolved, nothing contradicts it, but no artifact shows what resolved it. On a top-tier finding the memo cannot vouch for it: it is carried as open until that document is seen, and the memo says this is a documentation gap, not a known failure. On a lower-tier finding the status is accepted and the document is a condition.
- Test: does the narrative or a note say the fix has not happened? Yes, disputed. Does it say or show the fix was made? Yes, closed. Neither, not evidenced.
In-Progress is open. Experts who disagree are reported as disagreeing, and the less favourable view is carried until a deciding one exists.

## 2. Order the findings by what they do to the vote

Sort the risk table: open top-tier findings first (Unresolved, In-Progress, disputed, not evidenced), then closed top-tier ones, then the rest. Default: a lower-tier row never blocks; open manageable or informational findings are conditions, never a reason for no-go. It is wrong to read such a row alone when another row changes its weight: an operating shortfall against the very standard an open review is testing, a one-time or non-transferable revenue item that sets the valuation base, customer concentration whose contracts lapse within months with no renewal shown, retention under 100%. Keep the tier, name the link ("read with R2"), and say what it moves: the price, a condition or a blocker. A loud row held below the top gets its reason. State the count of open top-tier findings in words, and when it is zero say why.

## 3. Price only what the buyer keeps

Default: reported LTM revenue and reported EBITDA are the base. Wrong when part of it will not be there after closing or was never comparable: a finished one-time project or recovery, income the new owner cannot receive, customers who have cancelled (use the narrative's own run-rate figure when it gives one), gross volume where peers report net revenue, an uplift from a restatement the auditors have not signed. Print one line, reported - named item = pricing base, and apply multiples to the pricing base; when an item was removed, show the high multiple on reported LTM once, as a reference; otherwise no reference line. Revenue merely at risk (a contract out to re-bid, a client near expiry) stays in the base and is named as downside. Forecasts resting on unsigned business are never a base.
Seller arithmetic is tested: an "adjusted EBITDA" keeps only add-backs that are plainly one-time, and the corrected figure is shown; a claim that lost business was low-margin is checked against its share of revenue; a banker's multiple is checked for the metric under it. EBITDA is quoted only as the narrative states it, never scaled or estimated. If EBITDA on the pricing base is negative, EV/EBITDA is not meaningful for the target and revenue multiples carry the range.

## 4. Comparables: every name in or out, with the reason

Default: a listed comparable is IN. OUT only for a stated reason: it is a transaction or sponsor-owned multiple carrying a control premium beside trading multiples; or it is an outlier whose growth gap to the target is over ten points (often with EV/EBITDA shown NM). A gap of ten or less never excludes. "No exclusions flagged" still requires the reason each one is in.
Under the table print one line, `Growth gaps to <Target> (g%)`, listing every comparable with its gap in points, smallest first, OUT names marked. The two IN names that come first in that line are the range peers (gross margin decides a tie): low multiple x base and high multiple x base, each with the peer's name. Then one line giving the full IN span for reference, and one sentence placing the target inside the range by growth, margin, retention and leverage against those peers. If the target grows slower than every IN name, the lowest IN multiple is the ceiling. If the dataset gives no peer size, say no size adjustment is possible.
When both multiples are usable and they disagree, compare the target's EBITDA margin with the peers' implied margin (EV/Revenue divided by EV/EBITDA): a target earning clearly less is overpaid on revenue multiples, so EV/EBITDA leads and the revenue result is shown as the reason for caution. If the peers' business mix is not given, say so; never guess it.
Ask: one division per usable metric (ask / revenue base, ask / EBITDA) and nothing multiplied back; then inside the range, above it (ask - high end) or below it (low end - ask), in $M. No asking price in the artifacts: say so, compute no implied multiple, and offer the range as the price guidance.

## 5. Consistency, then the vote

Before writing, check four things: the thesis names one primary risk and it is a row of the risk table; any open top-tier finding means the recommendation is not "proceed"; every printed range equals its multiple x base to one decimal in $M; every condition points at a numbered finding or a named gap; every number in the memo is in the artifacts or is a printed sum of numbers that are. The memo sets no threshold of its own (no minimum term, share to reach, period or amount) and re-computes no EBITDA for a downside.
Count the open top-tier findings; that count alone sets the vote.
- One or more: **No-go as presented**, followed by what would turn it to go, each item the closing record of one blocking finding (an award letter, a closure letter, a signed consent, the auditors' opinion), with no plan, term or figure of the memo's own.
- Zero: **Go, subject to the conditions**, however many lower-tier findings are open; those are conditions.
- Price is a separate sentence: an ask above the defended range is "not at this price" even where risk allows a go.

## The memo

Heading `## <Target>: investment committee memo`. The vote is not stated before section 4. Five sections, each heading carrying the target's name and its bound:
1. `### 1. Deal thesis - <Target> (max 140 words)`: what is being bought, the two or three figures that support it, the primary risk by its R number, and what in the seller's case the artifacts dispute.
2. `### 2. Tiered risk table - <Target> (one row per finding)`: columns `# | Finding | Tier given | Status given | Status used and why | Effect on the vote`, in the order above; `Blocks` appears only on an open top-tier row, every other row reads `Condition N` or `Moves the price`; under it at most three lines: status disputes, links between rows, and last `Open top-tier findings:` with the count in words and the R numbers, or `none` with the reason (also when the table has no top-tier row at all).
3. `### 3. Defended valuation range - <Target> (max 320 words plus one table)`: the base line; a table `Comparable | Multiples | Growth | Gross margin | IN or OUT | Reason`; the range sums; the reference span; the position sentence; the ask line.
4. `### 4. Recommendation - <Target> (max 140 words)`: opens by repeating section 2's open top-tier count, then the vote that count gives, the findings that decide it by number, what turns it, the price sentence.
5. `### 5. Conditions - <Target> (max 8 lines)`: numbered; each names its finding, the document or event that closes it, who provides it, and whether before signing or before closing. Conditions and the turns-to-go line use only terms and dates the artifacts give. The last line names the single gap that matters most and the record that closes it.

Call read_reference on `references/worked-memo.md` (a full memo and a second case, both invented, for form only; every fact comes from the artifacts in front of you). Then send the memo, once. Do not announce it or say what you are about to do: the very first characters sent are `## ` and the target's name, and the last are the final condition.
