---
name: ic-memo-triage-rounds
description: Works up an investment committee memo the way a clinician works up a patient. Three diligence artifacts come in (risk classification rows, financial narrative, comparable companies) and five memo sections go out. Triage of the risk rows decides the verdict by fixed rules, the comps yield a valuation range through a set adjustment protocol, cross-document conflicts are recorded against a second source without re-tiering, and every condition answers one numbered risk row.
---

# Working up a deal for the committee

Risk table: the presenting complaint. Narrative: the history. Comps: the reference ranges. Work in private; only the finished memo is handed over.

## Triage and the verdict

Must-address rows (Critical reads the same) set the verdict; manageable rows need treatment; informational rows are watched.

- **Proceed** ("Proceed with conditions" whenever section 5 lists pre-signing items) is indicated only when each must-address row is Resolved with nothing in another artifact against it, and each manageable row has its mitigation named.
- **Request more data** is the default while any must-address row remains open (Unresolved, In-Progress, blank or unclear, or Resolved but contradicted by another artifact). It also holds while a manageable row is flagged as an apparent mis-tier of must-address weight (an injunction, or regulatory or licence exposure on the core product or service), until the evidence for that row's status is in hand.
- **Pass** only when the artifacts establish a permanent block for this buyer: a counterparty the business needs to operate has declared it will neither continue nor consent once this deal is done, and no replacement is named; the terms bar transfer of what the thesis needs, including a material share of revenue, with no route around it shown; or the business violates a rule the buyer cannot cure.
- **Contraindications to Pass.** A right that could be exercised (a termination or notice right, a pending review) is a risk to put a condition on, not a stated refusal. A wide price gap alone is a pricing matter.

Verdict and table must agree. Name an ask above the range as such, with the price the range can support; absent an ask, give the band to bid inside.

## Reference ranges: the valuation

1. **Measure.** Mostly recurring software, or EBITDA negative or NM: EV/Revenue. Positive EBITDA in a mainly hardware, manufacturing, services or education business: EV/EBITDA. Gross volume reported: EV/Net revenue. A second multiple only cross-checks.
2. **Base on what survives the deal.** Take out one-off revenue, revenue that will not pass to the buyer (a grant, contract or licence ending on a change of control), and lost revenue (for cancelled customers, the run-rate without them). Nothing else comes out; services stay in. Reported EBITDA is the base unless an add-back is documented. Show the seller's base next to yours when they differ.
3. **Screen each comparable:** in, or out with one line of reason. The only grounds: a precedent deal at a premium inside a trading set; a comp sitting more than 10 points clear of every other on growth or gross margin (a high multiple on its own is no ground, nor is topping the set); a multiple that is NM on the metric in use.
4. **Median.** The middle included multiple, or the mean of the central pair for an even number; not the set average. Likewise for growth and margin medians.
5. **Dose the adjustments.** A step is 0.25x on revenue multiples and 1.0x on EBITDA multiples. Step when, against the included comps:
   - growth differs from the median by 5 points or more (two steps from 15);
   - gross margin differs by 3 points or more;
   - one customer exceeds 20% of revenue, or the three largest exceed 50%;
   - NRR is below 100%, or the comps lack the revenue mix.
   Above the median adds, below subtracts. No step for anything already taken out of the base, and none for size unless the artifacts state the comps' scale. Record one running sum: 10.0x − 1.0x margin = 9.0x.
6. **Range.** Adjusted multiple ± one step, showing both multiplications (low multiple × base; high multiple × base). Subtract quantified debt-like items from each end. Precision: 0.05x for multiples, $0.1M for values. Locate the ask (under, within, or over the high end, with the gap) and the multiple it implies on your base; if there is none, say so. Later sections quote these same figures.

## Second opinions: checking the artifacts against each other

- **Contradiction.** Only a second source contradicts a status: another artifact or an analyst note reporting facts at odds with it. Keep the upstream status, flag the row citing that source, and treat it as open. A finding's wording describes the complaint and never contradicts its own status. Missing proof is no contradiction either: Resolved stands, and the proof is written in as a pre-signing condition.
- **Apparent mis-tier.** Flag it and name the tier the evidence suggests; never re-tier. The flag alters the gate in one case only, the manageable row of must-address weight described under Request more data.
- **Tier labels.** Critical, Moderate and Low stay exactly as written upstream; explain once that Critical gates as must-address.
- **Unverified claims.** Seller and management statements (projections, adjusted EBITDA, explanations of churn) carry the label unverified.
- **Nothing invented.** A figure no artifact gives is "not provided"; an ask is never assumed.

## History-taking: reading the artifacts

Give each risk row an ID, R1 onward: must-address rows first, then manageable, then informational, with the input's order kept inside a tier. Use every figure as stated; derive one only where the memo needs it, with the arithmetic in the sentence (25% × $12.0M = $3.0M).

## Treatment plan: Conditions and Next Steps

One bullet for every risk row, in row order, beginning with the row ID (R3:) and naming an owner, the instrument or evidence, and a due point; quote any deadline the artifacts set. Informational rows get a step that keeps them under observation. The verdict shapes the bullets:
- **Proceed:** the instrument is named (indemnity, warranty, covenant, consent) and any escrow or holdback is sized to the exposure the artifacts quantify; day-one steps follow.
- **Request more data:** for each open row, the document that would settle it, and what each possible answer means for the verdict.
- **Pass:** the change that would justify a second look by the committee.

Each bullet is tied to a row; price lives in the Recommendation.

## Discharge: writing the memo

Before writing, open `references/case-presentation-notes.md` with read_reference; follow its structure and length, and take none of its facts.

The reply's opening line is `# IC Memo: ` with the target's name, and nothing comes before it. The commonest error is announcing the work first ("Now I will draft the IC memo") instead of starting with the title. Five sections follow in this order, and a length limit set by the scenario takes precedence:
1. **Deal Thesis**, 80 to 130 words: the business being bought, why it is worth owning, the presenting risk named by row (the top open must-address row, or the heaviest open row when none is open), and the price tension.
2. **Risk Assessment**: one table, `ID | Finding | Tier (as given) | Status (as given) | Second source | Flag | Effect on deal`, every cell under 25 words, then up to three sentences on flags and the tier reading.
3. **Valuation**, no more than 220 words outside the comp table: the chosen multiple and base, every comp's treatment, the median, the running sum, both range products, and where the ask falls.
4. **Recommendation**, 40 to 90 words: bold verdict first, then the gate rule behind it, the deciding rows and the supportable price.
5. **Conditions and Next Steps**: one bullet per risk row, no more than 35 words each.

Dates, parties and amounts come only from the artifacts. Output beyond a fixed budget is cut, so a long memo loses its ending: stay under roughly 900 words (6,000 characters) and finish on section 5.
