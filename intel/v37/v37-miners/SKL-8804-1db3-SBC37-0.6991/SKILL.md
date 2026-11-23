---
name: ic-memo-load-path-check
description: Inspects an investment committee memo the way an engineer checks a structure before sign-off. Traces every figure down a load path to the risk table, the financial narrative or the comparables; runs the recommendation through a hold-point gate on the risk table; sizes the valuation from inspected comps within set tolerances; flags conflicting drawings without re-tiering; and bolts each condition to one numbered risk row.
---

# Load-path inspection for an IC memo

A claim with no load path to one of the three artifacts is an unbraced member: take it out. Size everything off the page; the reply is the finished memo alone. Inspect in this sequence.

## 1 · Hold point: recommendation gate

Tag each risk row with a Gate reading before any sizing: Resolved; "Open:" plus its status word; or "Open: contradicted by" plus another artifact's quoted words. Upstream Resolved turns Open only against another artifact's quotable words.

- Load case Proceed ("Proceed with conditions" when section 5 lists pre-signing items): sign-off needs every must-address row bearing Resolved and every manageable row carrying a named mitigation. Wording describes the load, not its status: Resolved keeps bearing however live it sounds, and a missing certificate goes on the pre-signing list, not the crack list. With no must-address row open, open or flagged manageable rows still reach sign-off once mitigated, a mis-tier flag becoming a pre-signing item.
- Load case Request more data: the hold point stays shut while any must-address row reads Open (Unresolved, In-Progress, status missing or unclear, contradicted), and for revenue the terms bar from transferring: excavate it from the footing, size what transfers, put the transfer question first in section 5.
- Load case Pass: permanent failure for this buyer, shown by an artifact sentence you quote: a counterparty the operation rests on says it will stop or withhold consent after the deal, no substitute named; terms forbid moving an asset the thesis bears on; or a breached rule the buyer cannot cure. No such sentence, and the hold point governs. An exercisable right (termination or notice right, pending review) is a design load for a condition, not a refusal; a wide price gap never fails the structure.

The verdict never deflects from the table: call out an ask above the range with the price the range bears; with no ask, give the span to bid inside.

## 2 · Sizing: valuation method

- Load case multiple: recurring software, or EBITDA negative or NM → EV/Revenue; positive EBITDA in a mainly hardware, manufacturing, services or education business → EV/EBITDA; gross volume reported → EV/Net revenue. A second multiple is a check reading only.
- Load case footing, what the buyer stands on after close: excavate only one-time revenue, revenue that cannot transfer and revenue already gone (cancelled customer: run-rate without it); all other lines stay, services included. EBITDA as reported unless a document certifies an add-back as non-recurring. Draw a differing seller base beside yours.
- Load case members: inspect every comp, in, or out with a one-line reason, rejecting only a premium precedent deal within a trading set; growth or gross margin over 10 points outside every other comp (a high multiple or top rank alone is no defect); a multiple NM on the metric in use.
- Load case median: the middle included multiple, or the mean of the middle two for an even count, never an average; growth and margin medians alike.
- Load case tolerance: a step is 0.25x on revenue multiples, 1.0x on EBITDA multiples, taken only where the target deflects past tolerance from the included median: growth 4+ points (15+, two steps); gross margin 3+; one customer over 25% of revenue or top three over 60%; NRR under 100% or a revenue mix the comps lack. Stronger up, weaker down; nothing excavated earns a step; size only with the comps' scale given. One running sum: 6.0x − 0.25x growth = 5.75x.
- Load case range: one step either side of the adjusted multiple, both products written out (low × base, high × base), less any quantified debt-like item at both ends; 0.05x for multiples, $0.1M for values. State where the ask bears (below, within, or past the high end, by how much) with its implied multiple on your footing, or that no ask was given. Later sections quote these figures unchanged.

## 3 · Cross-bracing between drawings

- Load case contradiction: it needs a second source, another artifact or an analyst note whose facts will not carry the status (re-bid still running, a review put off, closure letter absent, management unable to document). The upstream status stays; quote that source in the Gate reading; the row reads Open.
- Load case apparent mis-tier: a row whose content over- or under-loads its tier keeps the tier as issued. Flag it with the tier the evidence suggests and carry the load into valuation and conditions; the gate ignores the flag.
- Load case tier vocabulary: Critical / Moderate / Low stay as issued, with one sentence on how they map (Critical bears must-address weight at the hold point).
- Load case design claims: management projections, seller-adjusted EBITDA and the seller's churn account are not as-built; label them unverified.

## 4 · Survey of the artifacts

Mark rows R1, R2 … like members on a drawing, in tier order (must-address, manageable, informational), input order inside each tier. Take every figure as given; compute a new one only where a section calls for it, showing the step inline (15% × $22.0M = $3.3M). An input the artifacts lack is written "not provided"; nothing is assumed, least of all an ask.

## 5 · Punch list: conditions and next steps

One punch-list bullet per risk row, in table order, opening with its row ID (R1: …) and stating owner, instrument or evidence, and due point; quote any deadline the artifacts set. Informational rows get a monitoring step. The verdict sets what the punch list holds:
- Proceed: closing conditions naming the instrument (warranty, indemnity, covenant, consent or closure letter), any escrow or holdback sized to the quantified exposure, and day-one steps.
- Request more data: the document that would settle each open row, and how each answer would move the verdict.
- Pass: the change that would justify the committee taking a second look.

Each bullet bears on a row; price lives in the Recommendation; no manageable row is left without its mitigation.

## 6 · Issue the memo

First call read_reference on `references/casting-yard-load-test.md`; copy its layout and length tolerances, not its facts.

Line one of the reply is its title block, `# IC Memo: ` and the target's name, with nothing ahead of it; an opening sentence of narration (for example "Now I will draft the IC memo") is the most frequent slip. The memo itself is plain committee prose. Its five sections follow in this order, and a length limit stated in the scenario takes precedence over this schedule:

| Section | Limit | Carries |
|---|---|---|
| Deal Thesis | 80–130 words | scope of the acquisition, the case for owning it, the primary risk by row ID (the top must-address row reading Open), the price-versus-value tension |
| Risk Assessment | cells under 25 words; up to three sentences after the table | one table: Row, Finding in brief, Tier (as given), Status (as given), Gate reading, Flag and deal impact |
| Valuation | 220 words outside the comp table | comp inspection table, median, running sum, range products, where the ask lands |
| Recommendation | 40–90 words | verdict in bold (Proceed, Proceed with conditions, Request more data or Pass), the gate rule behind it, the governing rows, the supported price |
| Conditions and Next Steps | 35 words per bullet | one bullet per risk row, tied to that row |

Invent no dates, parties or amounts. A fixed output budget truncates from the end, so stay within roughly 900 words (6,000 characters) and make section 5 the last thing written.
