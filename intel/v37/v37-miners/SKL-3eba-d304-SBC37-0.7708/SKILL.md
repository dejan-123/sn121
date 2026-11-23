---
name: ic-memo-authoring
description: Drafts an internal investment committee memo from upstream diligence inputs. Reads each finding's real status, normalises the valuation base, derives a defended range from the comps, gates the verdict on the risk record and ties every condition to a named risk row.
---

# IC memo authoring

An investment committee reads a memo in a fixed order: the recommendation first, then whether the risk record and the comps actually support it. Memos fail that read in four recurring ways: the verdict contradicts the risk record, the range is asserted instead of derived, the diligence record is quietly edited (a tier or status changed without saying so), or a figure appears that no artifact contains. The tools against them: a gate reading for every risk row (open, contested, closed), a normalised base, a comp screen with notch adjustments, and a verdict gate in which price never cures an open must-address row.

## 1. Read the risk record as evidence, not as labels

Number the upstream findings R1, R2... in presentation order: must-address first, then manageable, then informational; within a tier, open before closed and larger exposure first. Keep every row's upstream tier and status as received. The memo may comment on a label; it never rewrites one.

Give each row a gate reading:
- Open: unresolved; in progress, pending, under appeal, in settlement, remediation underway; a status softened by qualifiers (largely, substantially, expected to); a deferral or extension; a blank or missing status. Missing is open, because absence of a status is not evidence of closure.
- Contested: marked resolved, and you can quote a sentence from a different artifact (the financial narrative, an analyst, broker or comps note) saying this matter is still open: the decision it depends on has not been taken, the closing document does not exist yet, or the process is still running. Put the quote in the flag. No quote from another artifact, no contest. Contested counts as open for the decision.
- Closed: resolved with no such quote. The finding's own wording never contests it, because the analyst who wrote it concluded the risk was resolved anyway. If the row still reads like a live risk (a pending application, a cancellable contract, a concentration), it stays closed and gets a flag, resolution not evidenced, and the document that would prove it (a consent, an amendment, an audit or freedom-to-operate opinion) becomes a condition precedent to signing.

Then test every tier, resolved and informational rows included, against what the finding actually threatens:
- Must-address, which blocks a proceed until closed: the legal right to operate or sell (operating licences, accreditation or certification, bank or network sponsorship, permits, change-of-ownership approvals), title to or freedom to use the core IP or data, a revenue block big enough to break the thesis (roughly a quarter of revenue or more, or the largest customer or channel), or an exposure nobody can size.
- Manageable: quantifiable and mitigable through price, escrow, a specific indemnity, a closing deliverable or a 100-day plan.
- Informational: context that changes neither price nor structure.
A finding whose content belongs in another tier becomes a flagged observation (apparent under-tier or over-tier) while its label stays. If the upstream table uses its own scale (high/medium/low, red/amber/green, 1-5), map it by rank in one sentence and keep the upstream words in the table.

Read across documents. The narrative and the comps notes often carry facts that change a row: an amount, a date, a status, a seller framing. Each tension becomes one flag sentence: what the table says, what the other artifact says, how the memo treats it. Flags are for tensions only (a contested status, an unevidenced resolution, an apparent mis-tier, a cross-document conflict, a missing input that blocks a judgment); an open row with nothing in tension needs no flag.

## 2. Fix the base before touching multiples

Value what this buyer will own and what recurs.
- Revenue: strip one-off project or implementation fees, revenue that cannot transfer to this buyer (grants, programmes tied to the seller's legal status, related-party contracts) and revenue from customers already lost. Where the target passes money through (payments, marketplaces, staffing, travel, ad networks), the base is revenue net of the pass-through, whatever multiple the seller's banker quotes. Unaudited restatements and policy-driven uplift are a sensitivity, not the base.
- EBITDA: start from reported. An add-back survives only if it is non-recurring, documented and not needed to run the business. One-time severance can pass; recurring spend relabelled as one-off (growth programmes, ongoing hires, costs a buyer must replace) cannot. Never price off a seller-adjusted figure you have not rebuilt line by line.
- Write the bridge in one line: reported, each adjustment, base.
Handle each issue once: revenue quality in the base, comparability in the multiple, specific risks in conditions and structure. Counting a risk in two places double-discounts the deal.

## 3. Derive the range from the comps

Pick the primary multiple. EV/EBITDA fits when the target's normalised EBITDA margin is 8% or more and at least three usable comps carry an EBITDA multiple; thinner or negative earnings make an EBITDA multiple misprice the business, so use EV/Revenue, or the metric the comps are quoted on. Name it, and use the other multiple as a cross-check when it exists.

Name every comp in the memo as in or out of the set, giving each one left out a one-line reason:
- transaction multiples carry a control or sponsor premium, so they leave a trading set (and the reverse);
- a comp that is NM on the primary multiple cannot inform it;
- outliers leave: a comp whose growth sits 10pp or more beyond the next-closest comp, or whose margin sits 8pp or more beyond it, or whose business model or revenue basis differs;
- keep at least three; if screening leaves fewer, keep the closest and call the set thin. When a comps note warns that a metric is distorted (mix, accounting basis), say how that limits the comparison.

Take every median from the included comps only and write its sorted values: the multiple, the growth and the margin. Adjust from the multiple's median in notches. Notch size: on revenue multiples 0.1x below a 2.5x median, 0.2x below 5x, 0.3x above; on EBITDA multiples 0.5x below 12x, 1.0x below 20x, 1.5x above.
- Growth against the included median, reported (LTM) growth on both sides; management projections are a sensitivity, never the comparison. Gap under 3pp none, 3pp to 10pp one notch, over 10pp two.
- Margin: on a revenue multiple compare gross-margin with the comps' gross-margin column (gap under 2pp none, 2pp to 6pp one notch, over 6pp two). On an EBITDA multiple the target's margin already sits in its EBITDA base: write that and apply no margin notch.
- Size: only when the record gives comp scale; otherwise state that scale is not disclosed and apply none.
Point = median plus or minus notches; range = point less one notch to point plus one notch; EV = multiple x base at both ends, written out. If the cross-check lands more than 20% away, explain the gap (usually the margin difference) and keep the range on the primary multiple. Then test the ask: implied multiple = ask / base, and its distance from the range. With no ask in the record, say so and present the range as bid guidance.

## 4. Apply the gate

- Proceed: no open or contested must-address row, a named mitigation for every manageable row, and a price the range supports.
- Request more data: a must-address row is open or contested and can still be closed by evidence or by a decision not yet taken. Name the decisive item, its source, and the answer that would turn the verdict to proceed or to pass.
- Pass: the record shows a must-address operating right already refused or lost (a counterparty has declined, a licence or sponsorship cannot survive the change of control) with no cure in the record, or the thesis fails on the normalised base even if every open item closed. Revenue that cannot transfer is a base adjustment, not by itself a pass; an undecided matter (a pending review, conflicting legal opinions) calls for more data.
Price never cures an open must-address row: a discount does not restore a licence. A flagged under-tier does not by itself change the verdict; it becomes a condition precedent, and the memo says what happens if it comes back badly.

## 5. Conditions follow the verdict

One bullet per must-address and manageable row, and per flagged informational row, opening with its ID, with any flag on that row folded in. Under proceed, bullets are closing mechanics: condition precedent, specific indemnity or escrow, holdback or earn-out on at-risk revenue, 100-day actions. Under request more data, each bullet is a request: the document or decision, who supplies it, the deal milestone it is needed by, and the answer that clears the row. Under pass, each bullet says why the row disqualifies and what would reopen the deal. Protections are sized only from figures in the record (references/memo-craft.md has the mechanics).

## 6. From analysis to memo

After loading this skill, open references/memo-craft.md, then write the memo as your final message. The memo is the whole answer: it opens with the title line, and the analysis lives inside its tables and valuation lines, not in notes placed before it. Sections in order: 1 deal thesis, 2 risk table, 3 valuation, 4 recommendation, 5 conditions and next steps. The memo stands alone: every number traces to an artifact or to arithmetic shown in it, and anything absent is written as not in the record.
