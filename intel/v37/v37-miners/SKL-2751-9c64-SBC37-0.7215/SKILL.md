---
name: ic-memo-from-diligence-artifacts
description: How a corporate development lead turns a diligence package (risk findings, a financial narrative, a comparable set) into a two-page investment committee memo - what to trust, what to normalise, how to price the business actually being bought, which findings can sink a deal and which can be structured around, and how to say all of it briefly enough that the committee reads to the end.
---

# From diligence package to investment committee memo

An investment committee is not asking whether the target is a good company. It is asking whether, on today's evidence, this buyer should commit capital at this price, and what must be true first. The memo earns trust by doing three things a tired committee member cannot do quickly: tracing every number back to the package, separating the risks that can be priced or structured from the ones that cannot, and refusing to let an attractive asset talk the reader past an open problem.

Your reply is the memo itself, opening `# Investment Committee Memo: <Target>`. Do the thinking inside its sections, not in notes before it: the committee reads the memo, and a memo that sprawls loses its last sections, which are the ones it acts on.

## What to trust in the package

The risk table is someone else's signed-off work. Carry each finding over with its tier and status exactly as written, because the committee must be able to reconcile the memo with the record; if the table uses its own vocabulary (Critical, Moderate, Low), say once how you read it against must-address and manageable rather than relabelling rows.

Experienced reviewers read status pessimistically. "In progress", "substantially resolved", a deferral or a blank are all still open: deals go wrong in exactly the gap between "nearly done" and done. Only an explicit "Resolved" is closed, and only until another document in the package says otherwise. Flags come in two kinds, and the difference matters for the verdict. A **contradiction** is another document saying a Resolved row is still live (the re-bid is still running, the review was only postponed, the auditors have not signed): leave the row as written, flag it, and treat the item as open. An **observation** is a row whose own description sits awkwardly with its tier or status (a claim described as pending yet marked Resolved, a short exit right over a large share of revenue marked Resolved, an injunction risk to the core product tiered manageable): leave the row as written, note it for the committee, say it may warrant a closer look or must-address, and carry the check into that row's condition; it does not by itself reopen the row for the verdict. A quantified exposure that cash can cover, such as a tax reassessment under appeal or claims in settlement, is a structuring question, not a flag. Write the gate effect of a Resolved row as "Resolved per table", never as "closed" or "consent in hand", which the package may not show.

## Which findings matter most

Not every finding deserves the same attention. Rank them by what they would do to the investment thesis if they went wrong:

- **Permission to operate**: licences, accreditation, regulatory registrations, sponsor or network relationships. If these lapse, revenue stops entirely, and money rarely fixes it.
- **The asset being paid for**: core IP, the licence the product runs on, the data rights a platform depends on. These usually need a consent, an opinion or a change-of-control clause in hand before signing.
- **Revenue durability**: concentration on a few customers or channels with short notice periods, contracts up for re-bid, revenue that will not transfer.
- **Contingent liabilities**: litigation, tax, environmental, product liability. Usually bounded and priceable with an escrow or specific indemnity.
- **Operational and people risks**: key individuals, ageing equipment, systems. Real, but normally addressed after closing.

The first two categories are where open items most often block a deal; the last two are where deal structure does most of the work.

## Pricing the business actually being bought

Sellers present the most flattering base. Start from the reported figure and remove, once and visibly, whatever the package says will not survive the transaction: one-off project revenue, grant income that cannot follow a for-profit owner, pass-through volume where peers are priced on net revenue. Revenue that is merely at risk stays in the base and argues for a discount instead. Accept an EBITDA add-back only when the narrative shows the cost has truly stopped; a cost that recurs under a new label is still a cost. Name any unaudited restatement as a caveat, and state plainly when the package lacks an asking price or an EBITDA figure rather than supplying one.

Use the multiple the sector trades on. Subscription software is priced on revenue (payments businesses on net revenue) even when profitable, because early margins say little about steady state; manufacturers, industrial services and education operators with real earnings are priced on EBITDA. A second multiple is a one-line sanity check when its base is positive.

The comparable set is where memos are most often quietly bent. A listed peer's multiple prices a minority stake; an acquisition price includes a control premium, so a transaction the package marks as carrying one does not belong beside trading peers. Drop a multiple that is NM on your metric, a peer the package calls non-comparable, and a single extreme outlier growing roughly twice as fast as the rest. Keep every peer that resembles the target, and never prune toward the asking price. Committee members recompute every median, so take each one, for the multiples and for the peers' growth and margin, from a sorted list you show, never by eye from the table. Then say in a sentence or two where the target should sit and why: faster growth or fatter margins earn a premium; slower growth, thinner margins, concentration, shrinking retention or small scale earn a discount, each with the target's figure beside the peers' median. Where the peers' scale is unknown, say the direction is assumed. Anchor the range on real peers rather than on an invented discount, as the worked memo does, and show each end as its own product, then the multiple the ask implies and where it sits against the range.

## Deciding the recommendation

A committee can always approve later, but it cannot un-sign. That asymmetry sets the policy:

- If every must-address item is closed and nothing in the package contradicts that, and each manageable item has a workable protection, **Proceed**, however serious the closed items once looked: confirming them becomes a condition precedent, not a reason to hesitate.
- If any must-address item is still open and its outcome is genuinely uncertain (a response pending, litigation in discovery, a review underway, a renewal or consent unsigned, opinions in conflict), **Request more data**: name what document would settle it and who holds it. Several open items, or an ask well above your range, still land here.
- Before choosing Pass, ask one question: does the package say the bad outcome has already happened or certainly will? If the honest answer is "it might", the verdict is Request more data. Only if the package states as fact that a thesis-defeating outcome will happen on this buyer's ownership (the counterparty has said it will not continue with us, the right or revenue cannot transfer, a regulator has already acted) and nothing in the package avoids it, **Pass**, and say what would have to change to reopen. A known expiry date or a fixable compliance lapse is a pricing and diligence matter, not a pass.

Common mistakes to avoid: anchoring on the seller's banker's multiple; valuing a payments company on gross volume; treating an indemnity as a cure for a must-address item (it compensates, it does not prevent); trusting a growth forecast that depends on pilots converting; and writing conditions so general the committee has to redo the work.

## How different businesses are priced and where their deals break

Sector habits shape both the multiple and the findings that matter. Subscription software trades on revenue, with retention and growth deciding where in the peer range it sits; marketplaces, payments and staffing firms trade on the revenue they keep, not the volume that passes through them. Manufacturers, distributors and multi-site service operators trade on EBITDA, and their deals turn on customer and contract concentration, capital spending the seller has deferred, and the people who hold the know-how. Businesses funded by public money (education, care, research, defence work) live or die by the permissions behind that money, so accreditation, licences, grant terms and contract re-bids outrank almost everything else in their risk tables. Consumer brands turn on channel concentration and trademark ownership; data businesses on the rights to the data. Knowing which of these applies tells you which row to name as the primary risk.

## Shape

Read `references/worked-memo.md` once before writing: it shows the committee's usual five parts (thesis, risk table, valuation, recommendation, conditions) at the proportions a committee reads to the end, and its notes explain the conventions it follows; its company is invented. `references/ic-practice-notes.md` covers protections and earnings quality if a finding needs them. If the request sets lengths for sections, follow them. Every figure, name and status comes from the package, in words written for this deal.
