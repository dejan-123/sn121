---
name: benchmark-compensation-bands
description: Compare existing pay bands with classified external salary evidence. Give HR a market position and a confidence tier for each role family and level, with the pay figures and exclusions that determine the result.
---

# Where does this pay band sit in its hiring market?

## Choose the response before comparing salaries

Identify the decision HR needs. Benchmarking requires an existing internal band or other stated family-level pay benchmark, its level and pay market, and external observations classified by source and compensation type. If the request supplies only individual salaries, ask for the relevant bands and classified market evidence. Route salary sourcing to market research, new bands or levels to job architecture, individual adjustments to pay review, and equity questions to a pay-equity analysis. Give a brief, specific handoff when that covers the whole request. For mixed requests, complete any supported benchmark and route the rest. Missing information for one family should interrupt only that family's comparison.

For an in-scope benchmark, use read_reference to open `references/worked-decisions.md` once before assessing the evidence. Use the current input for every source and amount. Work out its verdict afresh.

## Establish the internal comparison

Start one working row per family and level, including families with no external data. Record the band limits, midpoint if available, currency, pay period, compensation basis, location or remote-pay policy, and employer stage. If a midpoint must be calculated, label it as the arithmetic midpoint of the supplied limits. Keep different levels distinct even when their titles share a stem. A title variant can qualify when the input establishes equivalent duties and level.

Keep internal offers and hiring priority alongside the band. An accepted offer documents the terms agreed. Describe signature, employment or payment only when the source confirms it. A decline can explain hiring pressure. Neither adds an external observation. Urgency may change the order in which HR reads the rows. It cannot strengthen a market estimate.

## Decide which external observations can answer the question

Preserve each external source ID. Assign every observation once to its intended family and level, including observations that will fail. Account separately for orphan rows with no corresponding internal group. Apply the stated observation window to the source date. If the cutoff excludes dates before a named month, that month itself is eligible. Retrieval dates cannot establish when an undated salary was observed. Where multiple records describe the same offer or vacancy, keep the clearest source and count the repeat as a drop.

For each record judge the fit on four dimensions. Record which fit, which are qualified, and which rule the observation out. Surface the material differences in the answer.

- **Geography.** Which market sets the pay? A role with an explicit city pay anchor can match a local peer even if the work is remote. A national range, different cost market or unspecified remote anchor carries a qualification or fails if the difference could dominate the result.
- **Company stage.** Decide whether the peer hires at a comparable funding or operating stage. An adjacent stage may still provide a useful bound. Explain the mismatch. Several observations from large public employers cannot establish the price at a small private employer merely through repetition.
- **Role scope.** Match responsibilities, level, specialist remit and individual-contributor or management track. Use supplied evidence of equivalent scope. An ambiguous title alone cannot establish equivalence.
- **Source and posting type.** Identify an accepted offer, advertised range, reliable survey or second-hand claim. Note its date, provenance and compensation definition. A local posted range can fit the role exactly while providing limited information about what anyone accepted. Reject unsupported hearsay and undated or opaque figures that cannot be verified against the required window or basis.

### Recover annual employee base

Read the component notes as well as the column headings. Show each necessary conversion with its ID, original amount, operation, units and resulting annual base. Deduct identified bonus, variable pay or other components only if the remainder is unambiguously recurring base. Multiply periodic base by the supplied pay periods. For a range convert both ends. For a currency change, use only an input-supplied rate and orient it so the source currency cancels. Two local figures already in the same currency can be compared directly. FX cannot repair a geographic mismatch.

Drop a contractor billing rate, a one-off retention or acquisition award, or an inseparable equity-heavy or cash-heavy package when it would misstate comparable employee base. An ordinary, itemized base embedded in a package may survive if the employment terms and role otherwise fit. If the split, units or rate are missing, record precisely what blocked the conversion.

Assign the external ID one disposition. **Full** means usable pay for a matching peer profile. **Partial** means usable pay with a named limitation whose effect you can explain. **Dropped** means the observation cannot support this comparison. Multiple defects on one record still count as one drop. Survived = full + partial. Retrieved = survived + dropped.

## Set the verdict, then judge its confidence

Find the strongest surviving evidence for this family's actual hiring price. Give comparable accepted offers precedence over advertised ranges. If an offer is only a partial peer, explain how its mismatch affects its use. Name the decisive IDs and figures. When two sources point in different directions, identify the fact that breaks the tie: for example, one documents an agreed base or one matches the hiring location more closely. When the conflict remains material, say what is missing. Group supporting IDs if they add no distinct qualification. Keep the market evidence and the internal figures on their respective sides of the comparison. Averaging offers with posting midpoints would hide the distinction.

Read the external figures against the internal midpoint and endpoints. **Competitive** means the credible market evidence fits a usable portion of the band. **Lagging** means credible peers pay above the employer's position. **Above-market** means the employer's band is positioned higher. Explain a material gap or edge concentration in currency units where helpful. Mere overlap of broad limits or a small difference at the midpoint rarely settles a call. Use an explicit target or tolerance if supplied.

Use **High** for a direction supported by multiple independent, well-matched observations of agreed or documented paid base. Use **Medium** for a sound but limited anchor, such as a close accepted offer with independent support. **Low** describes a direction supported by thin, indirect or weakly corroborated evidence. Apply any stated postings-only cap. Otherwise use Low for a solitary or materially qualified range and treat Medium as a provisional ceiling for consistent, independent, closely matched postings. Give the deciding reason for the tier.

On a close call, set the weakest partial aside. Would the remaining evidence support the direction? If the decision depends entirely on a questionable assumption, competing partials point opposite ways without a stronger anchor, nothing usable survives or the internal benchmark is missing, mark verdict **Deferred** and confidence **Deferred**. A cautious verdict still needs a defensible direction. State which observation or missing internal fact would resolve a deferral.

## Write the answer HR can use

For a supported market-benchmark request, open with a Markdown table. Keep the following five columns in order. Give each internal family and level one row, including families with no external records.

| Role family and level | Internal annual base | Verdict and decisive evidence | Confidence and reason | Evidence accounting |
|---|---|---|---|---|

In the verdict cell, lead with the position, then compare the strongest surviving figure with the relevant band floor, midpoint or ceiling. Name the source. If another survivor points elsewhere, explain why it carries less weight here. Show conversion arithmetic where it affects the decision. A lengthy calculation can sit immediately below the table, labeled with its family and source ID. For a deferred row identify the obstacle. In the confidence cell, state the tier and the fact that determines it, such as a single accepted offer or unresolved disagreement between imperfect peers.

Give the count in this form: “N retrieved = F full + P partial + D dropped (S survived).” S is F + P. Include zeros. Attach the IDs to their dispositions and give the reason for each partial or drop, grouping shared reasons. When none were retrieved for a family, show all zeros and defer. When all retrieved rows were dropped, keep their count, IDs and reasons, show zero survived, and defer. Keep the employer's own hiring history outside this calculation.

After the table, use **Deferred verdicts** for the specific evidence that would settle each open comparison. If every family has a verdict, one line suffices. Use **Signal caveats** for pool-wide skews supported by the input. Explain each once, or briefly state that none is evident. For a wholly out-of-scope request give the direct handoff described above.

Before sending, check that every decisive external amount comes from a survivor, all arithmetic preserves units, and every external ID is accounted for once. Keep sentences that explain a decision, a consequential disagreement, an exclusion, a confidence limit, or an evidence need. Remove repeated explanations.
