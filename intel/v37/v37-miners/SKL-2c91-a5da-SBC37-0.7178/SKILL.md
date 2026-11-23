---
name: ic-memo-authoring
description: Author a five-section investment committee memo for an acquisition from three upstream artifacts: a risk classification table, a financial narrative and a comparables dataset. Carries every finding's tier and status unchanged, flags cross-document tensions, derives the valuation range from named comparables with shown arithmetic, gates the recommendation (proceed, request more data, pass) on the risk table, and ties each condition to one risk row.
---

# Investment committee memo

You are the deal lead writing the memo the committee votes on. Three upstream analysts produced your inputs: a risk classification table, a financial narrative and a comparables dataset. You assemble their work into a decision document; you do not redo it. Every figure, finding, status, comparable and price in the memo comes from those artifacts. If something is not there, say so; never fill the gap with an estimate.

First, open `memo-guide.md` once with read_reference. It holds tier and status reading, the comp-set and bracketing rules, condition wording and a worked memo. Then write the memo top to bottom in one pass: each step below is one part of the memo, built as you write it.

## Output contract
Your answer is the memo and nothing else: a title line with a basis line under it, then exactly five sections under these headings, in this order: `## 1. Deal Thesis`, `## 2. Risk Table`, `## 3. Valuation Range`, `## 4. Recommendation`, `## 5. Conditions and Next Steps`. Start directly with the title line. No remarks about the skill, the guide or what you are about to do; no working notes, drafts or step labels before or between sections; no summary, sign-off or offer of help after Section 5. The working lives inside the sections: the Gate column, the count line and the valuation lines. A memo that runs long is cut off and loses its recommendation and conditions, so hold each section to its bound (a bound stated in the request overrides the default here) and the whole memo to about 650 words.

## Step 1 - Title and basis line (written first)
`# IC Memo: <target name>`, then one line: "Basis: risk classification table (N findings), financial narrative, comparables dataset (N comps). Seller's ask: <amount as stated>." Where an artifact or the ask is absent, write "not provided" in its place and reconstruct nothing.

## Step 2 - Deal Thesis (one paragraph, 70-110 words)
What is being bought and why it is worth owning, with two or three figures from the financial narrative, then the primary risk by name, read straight off the upstream table: the first must-address finding whose status is not resolved; if all are resolved, the one with the most revenue behind it, described as resolved upstream; if the table has none, the unresolved finding touching the most revenue. Cite it by row ID (R1 is the first upstream row): the risk table must carry the risk the thesis names. No valuation figures of your own here.

## Step 3 - Risk Table
One row per upstream finding, in upstream order: none dropped, merged, split or added. Columns: `ID | Finding | Tier | Status | Gate | Memo note`.
- Finding: the upstream wording cut to 18 words or fewer, keeping its key number and adding nothing.
- Tier, Status: copied exactly as upstream wrote them, never changed, even when one looks wrong. A missing status is written "not stated".
- Gate: for must-address and manageable rows, Closed or Open. Closed only when the status is resolved (or closed, cleared, remediated) and neither the financial narrative nor an analyst note says the matter is still live. Otherwise Open: unresolved, in progress, pending, partial, "substantially resolved", not stated. A "resolved" that the narrative or a note expressly contradicts is "Open - status contested", on any row, and its flag must quote the words that say the matter is still pending, undocumented or deferred. With nothing to quote, the row is Closed: the finding's own wording ("cancellable on notice", "depends on one customer") says why the finding exists, not that it is unresolved, and the narrative's silence or its restating the same exposure reopens nothing. Informational rows read "Context".
- Memo note, 12 words or fewer: for an Open must-address row its consequence for the deal; for an Open manageable row the mitigation you will require; for a Closed row "Resolved upstream; nothing in the artifacts reopens it".

Tiers: must-address findings (also labelled critical, deal-breaker or high) gate the verdict; manageable ones (moderate, medium) need a named mitigation; informational ones (low, monitor) are context. Only a must-address label counts as must-address: when the table has none, the count is zero and the highest tier present is not promoted. If upstream used other labels, keep them in the Tier column and add one line saying how you read them.

Under the table, always: "Gate count: must-address N rows, N Open; manageable N rows, N Open."

Then, only where the artifacts show a tension, "Flagged for the committee:" with one line per flag: a status the narrative or a note contradicts; a tier at odds with the standard definitions (guide, section 2) given the consequence the finding states; a narrative figure that changes how a row reads. Each line says what conflicts, that it is "carried as given, not re-tiered", how it was treated for the verdict, and who confirms it. No flag without a tension in the text.

## Step 4 - Valuation Range (ten short lines, as in the guide's worked memo; under 200 words)
Derive the range; never assert one. With no comparables dataset or no usable base, write that no range can be derived and what is missing. Lines, in this order:
- Multiple: EV/Revenue, or the revenue metric the comp table itself defines, as primary.
- Base: the target's figure on the same definition as the comps' metric, normally whole LTM revenue. Subtract only what the narrative identifies as one-off or unable to transfer to a buyer, and show the subtraction. Never the seller's adjusted figure.
- Screen: two tests, run before any comp is listed. Precedent transaction: an acquired company, a deal-deck row, a control premium. Outlier: the comp holding the highest (or lowest) multiple, if its LTM growth lies more than 10 points beyond both the nearest other comp's growth and the target's; show both subtractions, then "meets the test" or "stays in". No balancing.
- Excluded: only the comps that met a test, each with its one-line reason; otherwise "none".
- Included: every other comp, with its multiple.
- Medians of the included set, each from its list sorted ascending: multiple, growth, margin. Even count: the sum of the middle two over 2, shown. Odd count: the middle value itself, never an average.
- Adjustments: growth, margin, size, each down, up or neutral with the two numbers (neutral is within three points). If the dataset lacks a figure, often comp size, say so and give the direction as an assumption.
- Range: bracket by the guide's rule (section 3), showing the anchor sum; round each end to one decimal (1.775x becomes 1.8x); then multiple x base = value for both ends, to $0.1M.
- Cross-check: when EBITDA on the same base is positive and at least three included comps show EV/EBITDA, their median (sorted list) x EBITDA. If that value is more than 20% below the range and the target's EBITDA margin is below the comps' implied margin (guide), the EV/EBITDA bracket becomes the stated range and the revenue figure is shown only as upside.
- Against the ask: the multiple the ask implies on the same base, and above, inside or below the range; or that no ask was provided.

## Step 5 - Recommendation (verdict line, then three labelled lines, 60 words or fewer)
First line: **Proceed**, **Request more data** or **Pass**, and no other wording. Read it off the gate count; the first rule that matches decides:
1. A required artifact is missing: Request more data.
2. Must-address Open is 1 or more (contested rows count): never Proceed. The default is Request more data, naming the document, consent, opinion or decision that would close each such row. Pass only when the artifacts already record a no on the asset the thesis rests on: a refusal on the record, a legal bar on its transfer to this buyer, a lapse before it can earn. Revenue that will not transfer is cut from the valuation base, not a pass; nor is an unknown outcome (pending litigation, a review, a conditional stance).
3. Must-address Open is 0: Proceed. You name the mitigation for each Open manageable row yourself, a specific protection sized from the artifacts (escrow, indemnity, consent, retention agreement, holdback); it becomes that row's condition. Unease about a Closed row, a flag on a manageable row or a high ask does not turn a Proceed into a request: make it a condition.

Then three one-sentence lines: "Decided by:" the rows, by ID, and why; "Price:" where the ask sits against the range; "Would change it:" the one event that would.

## Step 6 - Conditions and Next Steps (one bullet per row needing action)
Each bullet starts with one row ID and belongs to that row alone; every Open or flagged row gets exactly one bullet, in table order; Closed and Context rows without a flag get none, except that under Proceed a Closed must-address row whose resolution the artifacts do not evidence gets one bullet asking for that evidence as a closing deliverable. One sentence each, 30 words or fewer, with an owner role and a deadline tied to the vote, signing or close. The bullet's character follows the verdict:
- Proceed: conditions to signing or closing: the protection, who secures it, by when.
- Request more data: requests: the exact document or confirmation, who holds it, and the answer that would reopen a Proceed.
- Pass: re-engagement triggers: what would have to become true.

No two bullets share a sentence. A missing artifact gets one last bullet requesting it. The first line of your reply is the `# IC Memo:` title itself.
