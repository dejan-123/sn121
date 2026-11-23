---
name: ic-memo-evidence-chain
description: Writes a five-section investment committee memo (deal thesis, tiered risk table, valuation, recommendation, conditions) from a diligence risk register, financial narrative and comparables, with each closure status tested against the packet, a valuation rebuilt on the revenue a buyer will own, and a call the risk tier decides.
---

# Reading a diligence packet the way a committee member does

I have watched committees approve deals on a row everyone assumed was closed, and price deals on revenue that left with the seller. Both mistakes come from letting one artifact silently overrule another. The risk register, the financial narrative and the comp table were written by different people at different times; where they disagree, the memo says so in plain words and decides which fact governs. Every number in the memo is either stated in the packet or computed in view from stated numbers.

## A status is a claim; the packet is the evidence

I copy each row's tier and status exactly as written, then ask one question: do present-tense facts anywhere in the packet, the row's own words included, describe something a past cure would not have left in place? An active proceeding, a process not yet finished, a gap nobody has verified, an ongoing contingency, or a termination right a counterparty can still use: each of these, quoted, makes a `Resolved` row **disputed**, and the memo carries it as open. A one-time requirement (a consent, a waiver, an approval needed for this deal) is different: `Resolved` says it was obtained. A row that merely describes the rule behind such a requirement is not a contradiction; it is the thing the resolution cured. A missing attachment is not one either. So a `Resolved` row that nothing contradicts stays resolved; I write that the source reports it resolved and confirm the consent or waiver the resolution implies from the record before signing, without reopening it as a new negotiation. A filing, a hearing date or a cure in progress is a timetable, not a closure. Unknown, blank, In-Progress and Unresolved never count as clear. When a tier looks too low for what the row describes, I say why and leave the tier as given.

## The top tier decides the call

Only the register's deal-breaker tier (`Must-Address`, `Critical` or its equivalent) can stop the deal; a register with no such row has no gate. When a deal-breaker row is open, blank or disputed, no form of Proceed is available, including Proceed with conditions. If the blocker can be cured before signing (a consent, a licence, an audit opinion, a settlement, a finished remediation), the call is **Defer**, and the deal comes back to the committee once the cure exists. The call is **No-Go** only when the packet already shows the cure has failed or cannot happen: a counterparty has refused, a regulator has denied, or a right the core business needs cannot be obtained by any document. A cure that is slow or uncertain still means Defer, and revenue that cannot transfer comes out of the base rather than ending the deal. With every deal-breaker row clear, the call is Proceed with conditions when open lower-tier rows need binding remedies, and Proceed when they do not. An asking price above my range is a counter-offer, not a reason to walk on its own.

## Value what the buyer will own

The base comes before the multiple. Revenue a buyer will not keep comes out: one-time work, amounts collected for others when the peers report net, income that cannot move to a new owner, customers already lost. An add-back stays only if the packet shows it will not recur. Base, growth, margin and any share used together must cover the same period and scope: LTM with LTM, run-rate with run-rate, net with net, one segment with that segment. I recompute a stated blended margin from the segment figures, convert a segment share to the whole only when both shares cover the same period, and when two packet figures disagree I show the gap and say which figure I use. When removing revenue leaves a run-rate or multi-segment base whose own growth or margin is not stated, I say so, do not credit it with the old growth, and either value the segments separately or show both bases. Each comparable is named with its disposition and the fact that decides it: an acquisition price typically carries a control premium and is shown apart from the trading band, a growth or margin profile far from the target prices a different business, a not-meaningful multiple drops on that metric only. Missing peer size or revenue mix is stated as a limit. Negative or unreliable EBITDA puts the valuation on revenue; positive EBITDA is at least a cross-check, and the memo says which metric sets the range and why.

## Arithmetic a committee can redo

Every multiple is applied with its parts written out and rounded only at the end (`4.6x × $16.7M = (4 × $16.7M) + (0.6 × $16.7M) = $66.80M + $10.02M = $76.8M`), each endpoint is divided back by the base to confirm the multiple, and the ask is restated on the same base. Equity value appears only when the packet states debt and cash: equity = EV − debt + cash.

## The memo

A title line `# Investment committee memo: <target>`, then five sections in this order with exactly these headings: `## 1. Deal thesis`, `## 2. Tiered risk table`, `## 3. Valuation`, `## 4. Recommendation`, `## 5. Conditions / next actions`.

1. **Deal thesis**: what we would buy and why, the quality of the earnings, the investment stance, and the primary risk named so that the same finding appears in the risk table.
2. **Tiered risk table**: columns `ID and finding | Source tier/status | Evidence about current closure | Effective state and consequence`, one row per source finding in the source's order, source IDs kept or analyst row numbers labelled as such, resolved rows retained. The closure column quotes the contradicting sentence or says that none is stated.
3. **Valuation**: metric and period, the base equation with its source, any reconciliation gap, the comp table with each disposition, the selected band and why, both endpoint equations with divide-back, the ask on the same base, and the principal uncertainty.
4. **Recommendation**: the label first (`Proceed`, `Proceed with conditions`, `Defer` or `No-Go`), the rows that force it, the price view kept separate, and what is authorised now.
5. **Conditions / next actions**: numbered sentences, each tied to a named row or valuation gap, naming who acts, the record that confirms or cures it, the milestone (before signing, before close, after close) and what happens if it fails. Distinguish blocking cures from routine confirmation and post-close work. No invented dates, names, probabilities or thresholds.

Follow any length bounds in the prompt; otherwise the memo runs about 6,500 to 9,500 characters, with no caveat repeated.

`references/worked-memo.md` is a complete memo for an invented target, followed by the Section 4 that a cleaner packet and a worse packet would have produced. Open it with read_reference before you write, and only once. Only its shape and its checks carry over: do not reuse its sentences, and argue every row of the packet in front of you with that packet's own facts and figures. The reply after the reference step is the memo alone, from its title on.

Your reply begins with `# Investment committee memo:` and the target's name, and nothing comes before it.
