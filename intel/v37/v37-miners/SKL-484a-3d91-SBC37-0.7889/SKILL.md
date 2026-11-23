---
name: ic-memo-from-diligence-record
description: Drafts a five-section investment committee memo from a risk classification table, a financial narrative and a comparables set. Carries each finding with its upstream tier and status, reads which rows block the vote, derives the range from named comps on a base that survives the deal, and ties each condition to one risk row.
---

# The memo is where the record meets the vote

Three analysts built the pack before you: one tiered the risks, one wrote the financial narrative, one assembled the comps. The committee reads only your memo and votes on it. So the memo owes two things that pull against each other: one verdict, and an upstream record left as it was found. Authors fail in three ways: they tidy the record (quietly fixing a tier or status that looks wrong), let an attractive price outvote an open risk, or state a value the comps never produced.

## Carry the record, flag the conflict

Every finding in the risk table reaches the memo as its own row, with the tier and status words its analyst used, even when they look wrong. Number the rows R1, R2, R3 in tier order (blocking tier first, input order inside a tier); later sections cite these IDs.

Your own read goes in a separate column, and only where the pack gives you grounds:
- **Status contradicted.** A row says Resolved while the narrative or an appended note describes the same matter as live: a re-bid still running, a review deferred rather than closed, an auditor who has not opined. Print the upstream status, add "disputed:" with the other artifact's words in quotation marks, and treat the row as open. No sentence to quote from outside the risk table means no dispute: a finding that merely sounds unfinished in its own description, or a narrative that restates the exposure, leaves a Resolved row closed. You did not do that diligence and cannot overturn the analyst who did.
- **Tier looks off.** A finding tiered low although its own facts put the thesis at stake (most of the revenue, the core product's right to operate, the number the price is built on). Write "apparent mis-tier:" and the reason, and return it to its analyst in a condition. The tier you vote on stays the upstream one: changing it erases the only trace that two analysts disagreed.
- **Labels from another scale** (critical / moderate / low, red / amber / green). Keep them and say once how you read the scale: top label is the blocking tier, lowest is informational.
- **Status blank, or the finding's own words soften it** ("substantially resolved", "expected to close", counsel's assurance with no closure letter): open.

## Which rows block the vote

Read the verdict off the table; never choose it first.
- A blocking-tier row that is anything other than cleanly Resolved (Unresolved, In-Progress, blank, soft, disputed) blocks Proceed. One is enough, and no discount buys it back: price pays for a sized risk, and an open blocker is one nobody has sized.
- With no blocker the verdict is **Proceed**, and every open manageable row must leave the memo with a mitigation you name: a price mechanism (escrow, holdback, earn-out, working-capital adjustment), a contract term (specific indemnity, consent as a closing deliverable, retention agreement) or a funded plan. The mitigation is yours to propose; it need not exist in the pack already. Open manageable rows, flags and a high ask never block on their own: they become conditions.
- With a blocker, pick between the two conservative verdicts by what would cure it. **Request more data**, the usual verdict, when a document, a third party's answer or a lower price could clear the row. **Pass** only when no information and no price can: the counterparty has refused outright or the law bars the transfer.
- A blocking-tier row marked Resolved and not disputed is closed for the vote, however fragile the finding sounds and even when the pack never shows how it was resolved. If every blocking-tier row is in that state the verdict is Proceed, and your doubt about each becomes a condition: the resolving document before signing.

## The base the multiple multiplies

The comps give a multiple; the narrative gives the figure it multiplies, and most valuation errors sit there. Start from the narrative's stated figure and keep what will still be there after closing, measured the way the comps' denominators are:
- one-off revenue the narrative names and sizes (an implementation project, a licence true-up) comes out, and the growth rate without it replaces the headline one;
- revenue that cannot transfer to the buyer, or whose customers have already cancelled, comes out: the remaining run rate is the base;
- a gross figure is no base for a net-revenue multiple: match the comps' definition whatever the seller's banker quotes;
- "adjusted" EBITDA is the seller's argument: accept an add-back only for a documented one-time cost and refuse relabelled operating spend;
- a restatement or policy change no auditor has signed stays in the base with a flag: subtract nothing for it;
- nothing else comes out: services and other non-recurring-sounding lines stay in, a "recurring share" percentage is never turned into a base, and revenue merely at risk (a re-bid, a remediation plan) is a risk row.

Name the base and why in one sentence; an ask priced off another base is restated on yours.

## From comp set to range

1. **Pick the multiple.** EV/Revenue leads: every comp has one and a seller can least adjust it. EV/EBITDA is a one-line cross-check, used only when the target's reported EBITDA is positive on your base: the included comps' median EBITDA multiple x that EBITDA, then whether the result falls inside, above or below the range. A multiple only ever meets its own base.
2. **Name every comp once**, included or excluded. Exclude with a one-line reason: any comp the pack describes as acquired, taken private or priced at a premium (a deal price carries a control premium and an old date); the single comp at the top of the set on multiple and growth together that is clearly apart from the next one or growing more than half again as fast as the target, usually the one whose EBITDA multiple is not meaningful: keeping it prices the target as a different stage of company. An outlier never cuts the set below four comps; other differences are for the adjustment. A set with no such case is used whole: "none excluded".
3. **Median of the included set.** Re-sort the included comps from lowest multiple to highest (the pack's order is not sorted), then take the median, never the mean: of three values the 2nd, of four the midpoint of the 2nd and 3rd, of five the 3rd. Growth and gross margin get the same treatment, each written out: the values lowest first, then the median.
4. **Adjust by direction.** Compare the target with those medians on growth and margin, one clause each: above, below or in line (within two points). Size is the third clause: a smaller target usually takes a discount, but with no scale figures in the set, say size cannot be adjusted for.
5. **Set the range.** Mostly below the medians: lowest included multiple up to the median. Mostly above: median up to the highest. Mixed or in line: the included values either side of the median. Write each end as multiple x base = value.
6. **Place the ask.** Asking price / base = implied multiple; inside the range when between its two ends, otherwise above or below. If the pack states no asking price, say so and supply none.

## Nothing that is not in the pack

No invented synergies, buyer strategy, dates, names, odds, thresholds, costs, comp margins or comp data. Owners are roles (deal counsel, the risk analyst); timing is a deal step (before the vote, before signing, at closing). A figure the pack lacks is "not supplied". If one of the three artifacts is missing or empty, do not rebuild it: write the section it feeds as "not derivable from the pack", make it the first data request, and do not recommend Proceed.

## The memo

Before writing, call read_reference on `references/worked-memo.md`: two invented deals worked end to end, one blocked and one not. Take the method, never the facts.

Five sections in this order under a title line `## IC memo: [target]`. Length bounds stated in the request override these.

- `### 1. Deal thesis` Prose, at most 110 words: what the target is, the two or three narrative facts the case rests on (on your base), the asking price if one is stated, and a last sentence naming the primary risk by row ID. Leave the range to section 3. The primary risk is the open row that most threatens those same facts, and it must be a row of the table.
- `### 2. Risk table` Columns ID | Finding (under 20 words, key number kept) | Upstream tier | Upstream status | Author's read. The read says blocks, open - needs mitigation, closed or noted, plus any flag. Below it one line: "Blocking rows:" and the IDs, or "none".
- `### 3. Valuation range` At most 190 words: the six steps as compact lines, numbers shown as operations. One base and one range: settle them before writing the line and never revise a figure further down.
- `### 4. Recommendation: [Proceed | Request more data | Pass]` At most 80 words. The first sentence states the gate: which rows make Proceed unavailable, or that none does. A Proceed is always "subject to the conditions in section 5", never unconditional. Then what would move the verdict.
- `### 5. Conditions and next steps` One bullet per row needing action, opening with its ID, at most 35 words; no row twice, no bullet without a row. Under Proceed, conditions: the mitigation, its owner, the deal step. Under Request more data, requests: the exact document or answer, who holds it, what result clears the row. Under Pass, reasons and what would reopen the file. Closed and noted rows get no bullet.

The reply is the memo alone, about 750 words, from the title line to the last bullet. The last two sections are the first lost when a reply runs long.
