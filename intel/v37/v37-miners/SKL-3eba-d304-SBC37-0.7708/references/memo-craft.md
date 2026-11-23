# Memo craft: shape, length, arithmetic, condition mechanics

Use this when drafting. It governs how the memo looks; the judgments come from SKILL.md. Your final message is the memo itself: no preamble, no working notes, no analysis outside the five sections.

## Shape and length

Whole memo: 850-1,300 words including tables. A memo that runs long is usually restating the inputs; cut repetition before cutting reasoning.

Title line in sentence case: a `#` heading with the target's name, a colon, then the verdict in one clause. Under it, one plain line naming the sector, what is being bought, the ask (or "no ask in the record") and the three source artifacts.

Every section heading carries its section name plus the finding of that section for this deal, for example `## 3. Valuation: 3.4-3.8x revenue, ask sits 12% above` (invented figures). A heading that could sit on any other memo is too generic. Number the five sections 1-5 and keep them in this order.

1. Deal thesis, 4-5 sentences (90-130 words). What we would own, why it is worth owning, what the ask asks us to believe, and the primary risk named with its row ID: the row the IC should worry about first. That row must appear in the risk table with the same ID.
2. Risk table. Columns: `ID | Finding | Upstream tier | Upstream status | Gate reading | Effect on decision`. Finding is condensed to 14 words or fewer. Gate reading is open, contested or closed (add the reason in two or three words). Effect on decision is short: blocks proceed, condition precedent (every flagged under-tier or unevidenced resolution), needs mitigation, or monitor. Every upstream row appears once; none is dropped or merged. Beneath the table, a line starting `Flags:` followed by one sentence per flag (four at most, tensions only), each opening with its tag, e.g. `F1 (R2, contested)`.
3. Valuation, at most 180 words of prose plus one comps table. Order: base bridge line; comps table `Comparable | primary multiple | cross-check multiple | growth | margin | treatment`, where treatment reads included, or excluded plus the reason; median line listing the sorted included values; notch line covering growth, margin and size; range line with both multiplications written out; cross-check line; ask line.
4. Recommendation, 3-4 sentences (60-100 words). Open with the verdict in bold: **Proceed** when the gate is clear (always subject to the section 5 conditions, and say so), **Request more data** when a decisive item is still open, **Pass** when the record has already ruled the deal out. Then the gate in plain words: which rows decide it, why, and what single development would flip it. When the gate is clear but the ask sits above the range, proceed only at a stated price inside the range.
5. Conditions and next steps. One bullet per must-address and manageable row, and per flagged informational row, 35 words or fewer each, opening `R3 -`. End the memo on the last bullet; no sign-off, no summary paragraph.

## Voice

Write for people who will vote. Declarative sentences; figures carry units and say which artifact they come from. No filler, no apology words, no restating the request. When an input is missing, write that it is not in the record and state the consequence (for instance, no size adjustment is possible without comp scale). Analyst judgments are labelled as judgments, never presented as facts from the record. Timing is a deal milestone (before signing, before the IC vote, within 30 days of close); never leave a placeholder for someone to fill in. If a whole artifact is missing (no comps, no narrative, no risk table), the affected section says what cannot be done without it, no outside figures fill the gap, and the verdict cannot be proceed.

## Arithmetic conventions

- Multiples to one decimal; use two only when a median falls between two values. EV in $M to one decimal.
- The median of an even count is the mean of the two middle values. Write the sorted values beside every median you use, including growth and margin medians, and use the median exactly as computed.
- Write every step as a sum or product you can read back: 3.8x - 0.2x = 3.6x; 3.4x x $40.0M = $136.0M.
- Check every result by division: EV divided by base must return the multiple you used.
- Implied ask multiple = ask / base. Gap to range = (ask - range top) / range top, or the mirror when the ask sits below the range.
- The set's implied EBITDA margin = median EV/Revenue / median EV/EBITDA. Use it only to explain a cross-check gap.
- Compute only what the decision uses. Every extra derived figure is one more place for an error, and one wrong figure undermines the whole valuation.

Worked fragment, all figures invented. Reported revenue $44M includes a $4M one-off migration project, so the base is $40M. Comps: A 3.2x, B 3.6x, C 4.0x, D 4.4x, E 7.5x; E grows 70% while the next-closest comp grows 30%, so it is excluded as a growth outlier. Included median of 3.2, 3.6, 4.0 and 4.4 is 3.8x; on a revenue multiple below 5x one notch is 0.2x. Target growth 16% against an included growth median of 22% (18, 20, 24, 30) is one notch down; gross-margin 70% against an included median of 71% (66, 70, 72, 75) needs none; comp scale is not disclosed, so no size adjustment. Point 3.6x; range 3.4x to 3.8x, giving 3.4 x 40 = $136M and 3.8 x 40 = $152M. An ask of $170M implies 4.25x and sits about 12% above the top of the range.

## Condition mechanics by verdict

Proceed. Each bullet names the mechanism and, where the record gives the figure, sizes it.
- Condition precedent: something that must be true before signing or closing, such as a consent received, a licence assigned, an approval granted or a renewal signed.
- Specific indemnity backed by escrow: for a known, sizeable exposure such as a tax reassessment, litigation or remediation. Size the escrow from the exposure the record states, plus costs, and say how long it stays in place; when the record states no amount, name the diligence that will size it. Known matters sit outside R&W insurance cover.
- Holdback or earn-out: when revenue may not survive, such as a contract up for renewal or a channel that can walk; payment follows the revenue.
- Covenant or 100-day action: for operating fixes such as key-person retention, documentation, capex or a finance hire, with an owner.

Request more data. Each bullet is a request the deal team can send tomorrow: the artifact (closure letter, executed consent, audit opinion, regulator decision, signed renewal, independent legal opinion), who produces it, the deal milestone by which the IC needs it (before signing, before the IC vote), and the reading that clears the row versus the reading that turns the memo into a pass.

Pass. Each bullet states the disqualifying fact, why no structure fixes it, and the specific change that would justify reopening.

## Rights that may not survive a change of control

Before calling any row closed, ask whether the deal itself breaks it: licences, permits and registrations that need regulator consent to a new owner; accreditation and eligibility for public funding; bank, card-network or platform sponsorship; government contracts that need novation or face recompete; IP or data licences with change-of-control or non-assignment terms; consents that cover the current use but not the buyer's planned use; grants and subsidies tied to the recipient's status. If the record does not say a right transfers, the bullet for that right's row makes the transfer a condition.

## Now write

Start your reply with the title line. Everything you send is the memo, in the five numbered sections, ending on the last condition bullet.
