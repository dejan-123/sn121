---
name: ic-memo-from-diligence
description: Drafts a five-section investment committee memo (deal thesis, tiered risk table, defended valuation range, recommendation, conditions) from three upstream diligence artifacts, a risk classification table, a financial narrative and a comparables dataset. It reads the statuses against the narrative, fixes the revenue or EBITDA base before any multiple, builds the comp set with named inclusions and exclusions, lets open deal-breakers decide the call, and ties every condition to a named finding; every figure traces to the input.
---

# Writing the IC memo from three diligence artifacts

An IC memo is a decision document. The committee reads it to decide go or no-go, so every sentence either carries evidence from the three artifacts or is cut. Two failures sink a memo: a recommendation that ignores what the risk table says is still open, and a valuation range nobody can rebuild from the pasted comps. Read the artifacts against each other before writing, because the errors that matter sit in the gaps between them.

## Read the three artifacts against each other

**Risk table.** Note each finding's tier and status as recorded. Tier labels vary by author: Must-Address and Critical are the deal-breaker class; Manageable and Moderate are risks handled through price, structure or integration; Low and Informational are disclosed, not acted on. Say which mapping you used when the labels are not Must-Address/Manageable.

**Only the top tier can block.** The deal-breaker class is the rows tiered Must-Address or Critical (or whatever the table calls its top tier). Every other row, whatever its status, is handled through price, structure or a condition; an In-Progress approval or an open manageable item never becomes a deal-breaker on its own.

**Status is a claim to test.** Unresolved and In-Progress are open. A Resolved status stands unless another artifact or an analyst's note says the closing step has not happened (the re-bid is still live, the review was deferred rather than closed, the licence was applied for but not issued). Then keep the recorded tier and status in the table, read the finding as open, and say why in the same row. A finding whose own wording describes a standing exposure (a consent requirement, a cancellation right, a filing-priority question) is not contradicted by that wording: accept the Resolved status, make the document behind it a condition (the signed consent, the opinion, the amendment), and carry any exposure that remains into price. If a lower-tier row is recorded Resolved while its own text says claims are still pending, note the mismatch in the row and make the closing evidence a condition. Never re-tier silently and never settle a contradiction in the seller's favour.

**Financial narrative.** Separate what was reported from what the seller presents. Find the base the price should rest on: strip one-time revenue and the margin it carried; set aside revenue that will not transfer to a buyer (grants, contracts that end on change of control) and value it separately or at zero; use net revenue where gross revenue includes pass-through costs; take out revenue from customers already lost. Accept an EBITDA add-back only when it is genuinely non-recurring and documented (a departed executive's severance can be; "strategic investments" or marketing are operating costs). Management projections that depend on unconverted pilots or prospects are not a valuation base. If reported EBITDA is negative, EV/EBITDA is not meaningful; do not rescue it with a contested adjusted figure.

**Comparables.** A multiple only means something against comparable growth, margin and size. Exclude, by name and with the reason, any comp priced on a different basis (a control or private-equity premium in a past acquisition when the rest are trading multiples) and any outlier whose growth or margin sits far outside the target's. Keep the three or four closest and place the target inside them: below-median growth and margin put it in the lower half, and a structural weakness the comps do not share (contracting net retention, a lower-margin hardware mix, a lapsing patent) pushes it lower still. When the artifacts omit something the comparison needs (an asking price, the comps' revenue mix), say so rather than assume it.

## Valuation the committee can rebuild

State the base (with its adjustment), the chosen multiple range and the arithmetic for each end, written as multiple × base = value. Check every product before writing it by dividing the value back by the base; a slip in this arithmetic undoes the whole valuation. Round every figure to one decimal of $M, and keep amounts in the currency the input gives: never convert currencies or add figures the artifacts do not contain. Cross-check with the second multiple when the comps give one; if the two methods disagree, explain the cause (usually a margin gap: revenue multiples overstate a target whose margin is below the comps') and say which you weight. Then compute the asking price's implied multiple on the same base and the gap to the range in dollars. EV comparisons stay on an EV basis; mention net debt only when it changes what the buyer pays. If no asking price is given, the range is the bid guidance and the memo says no ask was provided.

## The recommendation follows the risk tiers

Use one of three calls and give the reason in the first sentence:
- **Proceed with conditions**: no top-tier finding is open. The conditions cover the manageable findings, and if the ask sits above the defended range, the first condition is the price: a bid ceiling at the top of the range.
- **Do not proceed on current terms**: a top-tier finding is open (unresolved, in progress, or recorded resolved against the evidence). Name what would let the deal come back to the committee.
- **Decline**: a top-tier finding cannot be cured before close, or the business the price pays for does not transfer.

A price gap alone never decides the call; it sets the bid. An open deal-breaker always blocks a proceed call, however attractive the price. The thesis names one primary risk, and that risk must be a row of the risk table, normally the open deal-breaker with the most value at stake.

## Conditions tied to findings

Each condition names its finding by row number, the deliverable that closes it (an issued licence, a signed consent, a closure letter, an executed amendment, an audited figure), when it is due (before signing, before close, or as a post-close covenant), and the consequence if it is missed (walk right, price reduction of a stated amount, escrow, specific indemnity). Data requests for missing inputs go here too. No condition is generic, and no two conditions share a sentence.

## Shape and length

First call `read_reference` for `references/memo-example.md`, alone, and follow its shape. The message after that call is the memo and nothing else. Its first characters are `**1. Deal thesis:**`, followed on the same line by the thesis itself. Do not open with a sentence announcing the memo ("Now I will draft..."), an analysis of the artifacts, notes or a horizontal rule; the reading of the artifacts shows only inside the five sections. Five numbered sections, the first as a bold label and the other four as `###` headings, each inside its bound:
1. **Deal thesis**: 80 to 130 words.
2. **Risk table**: one row per finding in the input order, cells kept short.
3. **Valuation**: a comp-set table plus 120 to 220 words of base, arithmetic, cross-check and ask.
4. **Recommendation**: 60 to 120 words; the call and its main reason come first, then at most three supporting points.
5. **Conditions**: three to six numbered items, each under 45 words.

Every number, name and date comes from the artifacts or from arithmetic shown in the memo. Never invent an asking price, a deadline the input does not imply, a comp, a percentage or a counterparty.
