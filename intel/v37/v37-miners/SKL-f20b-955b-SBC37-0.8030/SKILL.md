---
name: ic-memo-author
description: Turn three upstream diligence artifacts (a deal-risk classification table, a financial narrative and a comparables dataset) into a five-section investment committee memo with a deal thesis, tiered risk table, defended valuation range, go/no-go recommendation and conditions tied to named findings. Use when a deal team asks for an IC memo, acquisition recommendation or valuation write-up from diligence inputs.
---

# IC memo author

An IC memo is a decision document. The committee reads it to decide go or no-go, so every sentence must trace to a named row, figure or note in the three artifacts, and the five sections must agree with each other. Prose never fills a gap the inputs leave open: you name the gap and turn it into a condition or data request.

Before drafting, open `references/worked-memos.md` once. It holds invented deals worked end to end (one that proceeds, one held on conditions, one declined), the calls that flip them, and the reply skeleton. Transfer the reasoning, never the names or figures.

## Six tests the finished memo must pass

Apply each test to this deal before drafting. Show the result in a short working-notes block ahead of the memo (format below), then let the memo carry the detail.

1. **Status test: a status is a claim, the narrative is the evidence.** "Resolved" counts only when an artifact says what resolved it (a signed consent, a closure letter, a renewed contract, an auditor opinion). If the financial narrative or an analyst note contradicts a status, or a finding marked Resolved still describes a live exposure (a re-bid in progress, a month-to-month contract, a review postponed rather than closed), carry it as unresolved, show the upstream label next to your reading, and say which sentence contradicts it. Never fix it quietly in either direction.
2. **Tier test: deal-breaker versus manageable.** Map whatever tier words the table uses (Critical, Moderate, Low, Informational) onto the memo tiers and say so once. Read findings together, not only row by row: two findings that feed the same exposure (a staffing shortfall against a standard that an accreditation, licence or contract depends on) are named as one compound risk without inflating either tier. Re-tier only with a stated reason: an injunction risk on the core product, a lost licence to operate, or revenue that cannot transfer is not "Manageable" whatever the label says. A cost with a known size and a clean remedy is not a deal-breaker however alarming it sounds.
3. **Base test: value the revenue the buyer will own.** Before any multiple, fix the base. Strip one-time project revenue, revenue that cannot transfer to the acquirer, pass-through volume (use net revenue where the sector prices on net), and customers who have already cancelled (they are gone: value the run-rate after them, and show the subtraction). Use reported EBITDA. Adjusted EBITDA is the seller's argument: accept an addback only when the artifacts show it will not recur, and never accept growth spend or "strategic" costs as addbacks. A restatement without an auditor's opinion goes in as a sensitivity, not the base. Management projections that depend on unconverted pilots or prospects never enter the base: a forecast is the seller's hope.
4. **Comp test: a multiple is only as good as its peer.** Include comps that share the target's business model and the metric you apply. Exclude a transaction priced with a control premium from a trading set (show it only as a ceiling), and exclude peers whose growth or margin sit far from the target, naming the metric and the gap. NM cannot be averaged, and EV/EBITDA cannot price a company with negative EBITDA. If the comps lack a figure you need (business-mix split, EBITDA), say the comparison is limited, adjust conservatively and request the figure. State the size, margin and growth adjustment and its direction ("lower half: margin 6 points under the included median").
5. **Range test: arithmetic the committee can redo.** Range = low multiple × base to high multiple × base, each product written out with its inputs, rounded once to one decimal in $M. Restate the seller's ask as a multiple of the memo's base, so the gap is visible, and on the seller's own quoted basis only if they quoted one; write no other ask ratios, since each extra ratio is another chance for a slip. If the artifacts give no ask, say so and present the range as offer guidance; never invent a price to compare against. For a median, list the included values in sorted order first. Compare multiples as multiples ("9.0x against a top comp of 7.5x"), never as percentage gaps, and write each product once at one decimal, with no longer decimals. Recheck every product and median before sending: one wrong figure discredits the memo.
6. **Consistency test.** The primary risk named in the thesis is row 1 of the risk table. The recommendation follows from the tiers by the rule below. Every condition cites the row number it closes. The price ceiling in the recommendation is the top of the defended range unless a named finding justifies lower, and the range in section 3 is the only range in the memo.

## Memo tiers

- **Deal-breaker**: rare. All three tests must hold: (a) the exposure is unresolved on the artifacts; (b) it removes a licence, permission, revenue stream or asset the valuation base depends on, at a size no range in this memo absorbs; (c) no condition the buyer can set before signing (consent, closure letter, replacement counterparty, escrow, specific indemnity, price) can cure it. If any test fails, it is Must-address. Zero deal-breakers is the normal result; say so.
- **Must-address**: must be resolved, priced or contractually protected before signing. Say whether it is open, contradicted or evidenced as closed.
- **Manageable**: real, sized or bounded, handled through deal terms, integration or post-close work.
- **Informational**: context the committee should see; no condition needed.

Order the table by memo tier, then by size of exposure.

## Recommendation rule

- Any Deal-breaker: **Do not proceed**. Name the test results and what would reopen the deal.
- Otherwise any Must-address finding still open or contradicted: **Do not proceed until conditions are met** (a conditional go). The committee approves continued work, not signing. Name the conditions and the price ceiling.
- Otherwise: **Proceed**, at a price inside the defended range, with confirmatory conditions.

An unresolved Must-address finding always blocks a plain Proceed, however attractive the price. An ask above the range is a price condition, not a reason to decline.

## No fabricated specifics

A specific the inputs do not contain floors the whole memo. Never add dates, amounts, percentages, counterparties, agencies, statutes, deal terms or outcomes that are not in the artifacts. Sizes you derive (an escrow equal to a stated reassessment, a run-rate after stated cancellations) are fine when the formula is shown. If a needed figure is missing (no status column, no hardware/software split for comps, no renewal terms), say it is missing and request it; never assume it in the seller's favour. A condition asks for a document or event; it never predicts what that document will say. Timing is one of: before LOI, before signing, at close, post-close. Never invent periods ("within 30 days", "12 months"), percentages, earnouts, clawbacks or escrow sizes the artifacts do not support.

## Reply format and length bounds

Your reply has two parts and nothing else. First, `**Working notes**` followed by six one-line bullets, one per test, each naming what that test changed or confirmed for this deal ("Status: row 2's Resolved is contradicted by the month-to-month terms, carried open"); each bullet at most 25 words and free of figures; the notes are your only working, so write them once and never add a per-test walkthrough before or after them. Then the memo, starting `# IC memo: proposed acquisition of <Target>`; the last line is the last condition or data request. No other preamble, no restatement of the inputs, no closing summary, word count or date line. Exactly five numbered sections with these headings and bounds; stay inside every bound:

1. `## 1. Deal thesis` (100–160 words): what is being bought, why it is worth owning, the economic base you value, and the primary risk by name.
2. `## 2. Risk table` (one row per upstream finding, plus a row for any contradiction or gap you surface; each cell ≤ 30 words), columns: `# | Finding | Upstream tier / status | Memo tier | What the artifacts show | Condition`. Under the table, one line: tier mapping used and the count per memo tier.
3. `## 3. Valuation` (150–280 words plus one comp table): comp table with an Include/Exclude column and reason, then base, multiple choice and adjustment, range arithmetic, the ask as an implied multiple, and one sensitivity where the artifacts leave a figure open.
4. `## 4. Recommendation` (80–140 words): the call in bold in the first line using one of the three labels, the price ceiling, and the two or three findings that decide it, cited by row.
5. `## 5. Conditions and data requests` (3–8 numbered items, each ≤ 50 words): `C1 (row n): what must happen, the document that evidences it, timing (before LOI, before signing, at close, post-close), consequence if not met`. Data requests for input gaps come last.

Write in full sentences outside the tables, with the deal's own names and figures. Keep the whole memo under about 1,600 words.

Write nothing before the working notes and nothing after the last condition.
