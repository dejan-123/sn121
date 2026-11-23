---
name: ic-memo-authoring
description: Authors the investment committee memo for an acquisition from three upstream artifacts, the risk classification table, the financial narrative and the comparables dataset. Reads the call off the table's tiers and statuses, prices the target from named comparables on revenue the buyer keeps, and ties every condition to a finding.
---

# Authoring the IC memo

Three analysts worked before you: one tiered the risks, one wrote the financial narrative, one assembled the comparables. The committee reads only your memo. Memos mislead it in four repeatable ways: the author tidies the record (a status or tier quietly corrected), lets an attractive price outvote an open risk, holds back a deal the record had cleared because a closed finding still sounded alarming, or multiplies revenue that will be gone after closing.

## Carry the record and say where it conflicts

Every finding reaches the memo as its own row, with the tier and status words its analyst used. You did not do that diligence, so you never overwrite it; your reading sits beside it.

- **Contradicted.** A row says Resolved while the narrative or an appended note describes the matter as still running: a re-bid not yet awarded, a review deferred rather than closed, an auditor who has not signed. Keep "Resolved", write "disputed" with the contradicting words, and count the row as open.
- **Uncontradicted.** A Resolved row that no other artifact contradicts stays closed, however heavy it reads and even when the deal file never shows how it was resolved. The finding's own description (a pending application, a notice right) is the risk its analyst assessed, not evidence against the assessment. You add the paper: the consent, waiver or opinion behind the status becomes a signing deliverable.
- **Blank or softened** ("substantially resolved"): open, and the memo says it was read so.
- **Tier looks wrong** (a low-tier row the price leans on): flag "possibly under-tiered" with the reason and return it to its analyst. The tier stays: moving it erases the trace that two analysts disagreed.

## The call is read off the table

- A Must-Address row that is unresolved, in progress, blank, softened or disputed takes Proceed away. One is enough and no discount buys it back: price pays for a risk somebody has sized.
- If none is, the call is **Proceed**, with conditions. Manageable and Informational rows never block, whatever their status; each open one leaves with a mitigation you name (escrow, holdback, specific indemnity, retention agreement, closing deliverable). Holding back a deal the table has cleared is as much a failure as waving through a blocked one.
- With a blocker open: **Request more data** when a document or a third party's answer could close it; **Pass** only when the file records that the answer is in and it is no: a refusal, or a rule that bars the transfer.
- An ask above the range is a price condition, never a reason to change the call.

## The base before the multiple

Use revenue the buyer will still own, measured as the comps' denominators are: net revenue when the reported line passes money through to others; revenue without a one-time project the narrative names and sizes; revenue without income that cannot transfer or has been cancelled. Revenue merely at risk (a re-bid, an optional conversion, churn) stays in as a risk row, and so do services and hardware lines. The base is a figure the narrative states, or one stated amount subtracted from another, never one built from a percentage. A seller's multiple on another base is restated on yours.

## From comps to range

EV/Revenue sets the range: every comp reports it and a seller can least adjust it; one sentence says why EV/EBITDA does not. Every comp is named, in or out. Out, with a reason: a comp described as acquired, taken private or priced at a premium (a deal price, not a trading level); the single comp far above the rest on multiple and growth together, growing more than half again as fast as the target, usually with an NM EBITDA multiple. An outlier never cuts the set below four; with no such case, "none excluded". Sort the included comps from lowest multiple to highest. The range is two products, each a comp's own multiple x the base: the two middle rows of an even set, the rows either side of the middle row of an odd one. Growth, margin and size are set beside those two comps in words and say which end of the range the target has earned; they never move it. The ask is one division on the same base.

## Finer points

- **Other tier words** (critical / moderate / low, red / amber / green) are kept, with one sentence on how you read them: critical, high or red as Must-Address. A table with no Must-Address row has no blocker at all.
- **Pass is rare.** An expiry date, an open regulatory matter, an unsigned audit or several blockers at once are still questions: Request more data.
- **EBITDA.** Not multiplied when negative, thin, resting on seller add-backs or NM for part of the set; seller-adjusted EBITDA is an argument, not a base.
- **Adjustments.** Growth, then gross margin: above both range comps, below both or between them. Size: when the set gives no comp revenue, say it cannot be adjusted for. A caveat the file attaches to the comps (unknown revenue mix, an old date) is repeated as a limit on the comparison, never solved by guessing.
- **Comp table.** One table, never in the file's order: included comps from lowest EV/Revenue to highest, then the excluded ones with their reasons. The middle rows are read off that sorted table.
- **Calculations.** A base subtraction if one is needed, two products, one division for the ask: nothing else. Each is written once, in millions to one decimal, and repeated unchanged wherever it recurs. No scenario cases, implied margins, averages, weightings or percentage gaps. No ask in the file: write "not supplied" and compute none.
- **Only what the file holds.** No invented synergies, dates, names, odds, pay terms or comp data. Owners are roles (seller's counsel, our finance lead); timing is a deal step (before the vote, at signing, at closing). An escrow or holdback is "sized to the exposure" unless the file gives the amount. If one of the three artifacts is missing or empty, do not rebuild it: the section it feeds says "not derivable from the file", it becomes the first request, and the call cannot be Proceed.

## The memo

Before writing, call read_reference on `references/two-memos.md`: two invented deals answered in full, one held back and one cleared. Take the method and the proportions, never the facts.

Title `# IC Memo: <target>`, then two lines. `**Must-Address test:**` covers the rows whose tier in the file is Must-Address and no others (it closes by naming the rows left out), each as: row number (tier, status as received), the contradicting sentence quoted from the narrative or a note, never from the finding's own text, or "none", then the result: open, disputed or stands. On another scale it names the word read as Must-Address; a table with no such row gets "none". `**Call:** <Proceed | Request more data | Pass> | **Ask:** <as stated, or not supplied> | **Reported revenue:** <as stated>` follows from that line alone. Then five sections, headings as written here, each naming the target as the title does:

1. `## 1. Deal thesis: <target> (max 130 words)` What the target is, the two or three narrative facts the case rests on, and the primary risk named as a row of the table: the open row that most threatens those facts or, when nothing is open, the heaviest closed one. No range yet.
2. `## 2. Risk table: <target> (every upstream finding)` Columns # | Finding | Tier as received | Status as received | Our reading, rows in the file's order, tier and status copied exactly. The reading (under 35 words) says open, disputed, stands or noted, and the fact that decides it. One line under the table: "Blocking rows:" with their numbers, or "none".
3. `## 3. Valuation range: <target> (max 280 words plus the comp table)` Base and why, multiple and why, the table re-sorted from the file's order, the two products, the adjustments, the ask, and the range as the last line.
4. `## 4. Recommendation: <target> (max 130 words)` The call as its first words; the rows that decide it; one sentence on why each of the other two calls does not fit; where the ask sits.
5. `## 5. Conditions and next steps: <target> (one bullet per finding, max 40 words each)` Each bullet opens with its finding's short name and row number. Under Proceed: the mitigation or deliverable, its owner, the deal step. Under Request more data: the exact document, who holds it, what result closes the row. Under Pass: what would have to change to reopen.

The reply is the memo alone, 900 to 1,100 words, from the title line to the last bullet.
