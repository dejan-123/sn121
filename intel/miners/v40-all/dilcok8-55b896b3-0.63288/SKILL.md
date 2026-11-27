---
name: compensation-median-evidence-intake
description: Benchmark internal pay bands from classified external evidence and identify which comparable observations could change a median-based position.
---

# Decide from the middle of the eligible market evidence

Start with scope. Benchmark supplied family bands and classified evidence. Send individual pay decisions to compensation review, raw salary requests to market-data gathering and classification, band design to job architecture, and pay-equity questions to an equity audit. For an out-of-scope request, give the boundary, next workflow and missing inputs in two to four sentences, at most 120 words. Omit the benchmark table. Continue supported families.

## Set the comparison and retain the eligible series

Use a separate segment for each requested family, level and pay zone. Preserve band endpoints, midpoint, currency, stage and assessment date. Copy priorities exactly. Use a supplied policy wherever it governs the comparison. Use explicit pay anchors. If relying on HQ geography as a proxy, limit the result to roles where that pay zone applies. An HQ address gives no employee distribution. Benchmark supported HQ roles in a mixed workforce and defer the unmapped remote population until family, band and pay-zone mapping is supplied. Currency equivalence and labor-market equivalence require separate facts.

Assign each retrieved observation to its relevant segment before testing eligibility. A known family row with the wrong level remains in its retrieved segment as a scope failure. Keep distinct supported levels separate and show genuinely unassigned rows on their own. Score all external IDs, even when another check already disqualifies them. Use the order geography, stage, scope and evidence type. Scores are 2 full, 1 limited, 0 mismatch and ? unresolved.

| Dimension | 2 | 1 | 0 |
|---|---|---|---|
| Geography | Same metro or explicit shared pay zone | Broad market or remote without a specific anchor | Different metro or country without a shared anchor |
| Stage | Same funding stage | One adjacent stage | Further removed or private/public mismatch |
| Scope | Equivalent responsibilities and level, including explicit mappings | Limited overlap | Materially different work or level |
| Evidence type | Identifiable offer or primary employer range | Identified, dated secondary evidence with a stated method | Hearsay, anonymous or methodless survey |

Four 2s establishes full comparability. A 0 defeats eligibility regardless of the other scores. An essential unknown remains unresolved. A limited record without a mismatch or essential unknown can remain partial context once other checks pass. Partials contribute neither anchor values nor confidence. Keep internal hiring outcomes outside external counts and comparisons. They indicate possible hiring pressure and give no exact rival pay.

Check the actual observation date against the supplied assessment window. Use the dated retrieval snapshot when it supplies the assessment basis. Include the cutoff month when earlier months alone are excluded. Drop stale, undated or out-of-window records. If records describe one confirmed event, prefer its best documented original with event date and offer status. Break equivalent ties by stable ID. Count copies as drops and point to the canonical observation. Preserve shared provenance for distinct events.

Separately check whether the amount is ordinary recurring employee base. Disqualify contractors, one-time grants, acquisition and retention packages and inseparable pay mixes. Retain a separately identified eligible ordinary base component. Check definitions when a label contradicts the pay terms. OTE without a supported split supplies no base, and annualizing contractor pay leaves it structurally incompatible.

Use the supplied pay terms to put eligible figures on the segment's annual recurring employee base and currency. Preserve both endpoints. Show the original figure, supplied factor or component, direction, equation and result. Carry compatible values through.

- Multiply monthly base by the stated annual pay periods. For eligible hourly employees use stated annual paid hours.
- Subtract a known annual non-base cash component from a compatible total. With bonus fraction r of base, divide total cash by (1 + r). With r of total cash, multiply total cash by (1 − r). An unspecified denominator, split or period cannot supply a guessed rate.
- Multiply by target currency units per source unit, or divide by source currency units per target unit. Use the supplied quote only.

Partition the retrieved IDs into F (eligible full), P (retained partial context), and D (dropped). R = F + P + D and retained S = F + P. Assign each dropped ID one primary reason and include relevant secondary flags. Verify that primary drop counts sum to D. Mark the records supplying the anchor distinctly from full or partial context.

## Determine position from the median rank

Use the segment's eligible full offer series when it exists. Keep a documented candidate-declined offer in that series as an offer made, with its status stated. Full employer postings remain eligible context if offers anchor the comparison. If no eligible full offer survives, use the series of eligible full posted-range midpoints. A partial or excluded offer cannot activate offer priority. Identify that fallback as an advertised-pay indicator and preserve its ranges. Advertised bounds cannot determine paid-market percentiles.

Sort the chosen amounts with their IDs. With an odd count use the single central amount. With an even count, call the lower and upper central amounts L and U and use (L + U) ÷ 2. Keep all chosen IDs in the series. Use the supplied internal midpoint M, or label the mean of its endpoints when the midpoint was absent. If internal pay is missing, an external anchor can still be reported and the position must defer. If there is no defensible anchor or relevant pay population, defer the unsupported comparison and state the missing facts. Opposing partials call for a full match rather than an average.

The author materiality convention is competitive where M is 95%–105% of A, inclusive, for positive A. Equivalently the competitive external-anchor bounds are M ÷ 1.05 and M ÷ 0.95. Use the central rank or central pair to check the exact side of these bounds. A above the upper bound means lagging. A below the lower bound means above-market. Near a bound compare 95 × A or 105 × A to 100 × M. For pairs substitute A = (L + U) ÷ 2. For even samples, the center average matters when the two values straddle a boundary. Apply any supplied tolerance instead when specified.

Render the signed gap as 100 × (M − A) ÷ A using adequate precision near either boundary. Recheck the sign against the signed difference. The displayed percentage follows the decision made from unrounded amounts. If substantive conflict prevents a defensible conclusion, name the conflict and defer.

Assign confidence from the observed sources. High requires multiple recent independent full offers with secure basis and coherent corroboration. Thin offer evidence is usually Medium. Unknown employer independence caps at Medium. Posting-only has a Medium ceiling, or Low for one posting. Weak evidence can support a qualified Low direction, and an unsupported direction is Deferred. Honor stricter supplied confidence policies. A platform, counted copies, or contextual partials cannot establish independent corroboration.

## Specify evidence that could change the position

For a supported segment with two or more anchor values, use this when asked about additional evidence, or when a near-boundary result would benefit from a short acquisition note. Take one hypothetical new eligible amount x in the **same anchor class**, an actual offer base or an advertised range midpoint. Use this only with the chosen class kept fixed, applying its ordinary date, pay-zone, role and basis requirements. The current result and funnel continue to use observed evidence.

- If the current count is even, the new median is x bounded by L and U. Below L it stays at L, above U it stays at U, and inside it is x.
- If the current count is odd and at least three, call the current median C. Bound x by the observed rank immediately below C and immediately above C using the same rule. The new median is the average of C and the bounded x.
- Check the possible new median's low and high endpoints against the competitive bounds. If these endpoints remain in the current classification, one new same-class observation cannot change it. Otherwise solve the applicable boundary for x and state whether equality changes the classification. For odd count, to reach an external-anchor boundary B, the bounded x must reach 2 × B − C. For even count it must reach B. Check that the resulting threshold is reachable between the adjacent observed ranks.

Use the smallest informative condition, including its units, eligible evidence class and strict or inclusive inequality. It supplies no additional observed record, prediction or confidence increase. Where the request already lacks a usable anchor or internal midpoint, state the needed eligible evidence instead. By default include at most one intake note.

## Present the decision and audit

Show all requested family segments. Include internal band and midpoint, R/F/P/D/S, anchor IDs and basis, median or central pair, gap, verdict and confidence with a specific reason. Show every external ID's scores, disposition and use with its decisive exclusion where relevant. Place conversions once beside those records. Show useful band overlap. List deferred segments with missing evidence and pool-level caveats about selection, freshness or dependence. Keep hypothetical intake material separate from current evidence, and use concise source-specific explanations.
