# Executive Briefing Format Guide

Your working sheet is finished in the previous turn -- include zero working-sheet text in this message. Send only the standalone executive briefing (550 to 750 words, verdicts legible on page 1), carrying forward every verified band bound, record type, anchor, stage distance, offer count, disclosure count, funnel sum, verdict, and confidence tier from the sheet, using solely the current company's details.

## Grounding, Precision, and Structural Adaptation

- **Natural point references:** Omit raw export IDs (`E-01`..`E-15`) everywhere (title, table, narrative, deferrals, caveats) and include no bottom audit table. Identify each signal by month, city or stage, exact type (accepted offer vs posted range), and dollar figure.
- **Worked arithmetic, exact family names, and reconciled funnels:** Inside each non-deferred row's `Anchor & market gap` cell, show `(band_mid - anchor) / anchor = X.X%` (dividing by `anchor`, using external full offers alone whenever 1+ survives). Copy exact band bounds, confirm every role-family name comes strictly from the current company's snapshot (never carrying over an invented family name from the worked samples), and add table rows explicitly so Full, Partial, and Dropped integers sum identically to Pool totals (`+/-1` stage stays partial; `2+` stages or `2P` is dropped).
- **Plain borderline phrasing and confidence caps:** Keep bracketed threshold strings and internal cutoffs (such as 4.85% or 1.5%) strictly on the working sheet; in the briefing, describe borderline calls plainly ("4.1% below market in the 4% to 5% borderline band, confirmed Lagging because own hires sit 4.4% above midpoint" or "4.02% below market with no own hires, tipped to Lagging by the non-conflicting adjacent-stage offer above midpoint"), and describe clear gaps near -5.0% (such as -4.96%) plainly as "effectively at the 5% lag mark" or "nearly 5% below market" without quoting an internal cutoff. Verify before sending: 0 full offers caps at Medium (2+ agreeing ranges) or Low (1 range) even when ranges agree; 1 full offer with 0 full ranges stays Medium even with own hires; 1 full offer + full range earns High when either both share the same verdict word (even >5% apart) or the range sits within 5.0% of the offer.
- **Sign, attribution, and layout:** Measure range gaps against band midpoint (not offers), write "band midpoint sits X.X% below own hires" when hires exceed midpoint, keep each stale drop inside its own family, and sum surviving full offers from the sheet. Paragraph 1 opens with company, baseline, feed, retrieval date, exact prompt window, priority verdicts, and snapshot gaps (internal offers undated). Always include `## <Company> benchmark table`, `## Deferred verdicts -- <Company>` (bulleted when 1+ deferred; 1-2 sentences opening `None:` naming thinnest Low-confidence rows when 0 deferred), and `## Signal caveats -- <Company>`. Include `### Pay-basis and currency adjustments` strictly for basis/currency items (never stale dates); use a numbered priority list when 2+ active P1/P2 openings lag (prose when 0-1 lag); bullets for 3+ caveats (prose for 1-2); ground caveats in the sheet's mandate count (mandated wide spans whenever mandated ranges appear; voluntary upward bias only when zero are mandated); close with one sentence rebutting the highest-dollar dropped figure with its exact stage difference.

## Sample Briefing A -- Meridian Coldchain (mandated spans, basis conversions, multi-currency, 2 deferrals, prose caveats)

# Meridian Coldchain: Refrigeration Telemetry lags, Cold-Chain Ops and Zurich Pricing sit above market, two families deferred

This briefing tests Meridian Coldchain's five role families against NorthLedger market signals (plus one recruiter report) retrieved 2024-05-18 on a Vancouver BC Series C baseline (Zurich CHF for European Pricing) with a 12-month window from May 2023 onward. P1 Refrigeration Telemetry lags at High confidence, P2 Cold-Chain Operations sits above market on normalized base pay, Zurich Pricing sits above market at Low confidence, and two families are deferred. Two internal gaps qualify the read: Regulatory Counsel is omitted from recent offers, and the snapshot leaves unspecified which Vancouver families are unanchored remote-Canada.

## Meridian Coldchain benchmark table

| Role family (level) | Band (min / mid / max) | Evidence funnel | Anchor & market gap | Verdict | Confidence & reason |
|---|---|---|---|---|---|
| Refrigeration Telemetry Eng., Senior (P1) | CAD 121,400 / CAD 134,700 / CAD 148,200 | 5 in: 2 full (Mar 2024 offer, May 2024 L4-mapped posting), 1 partial (Mar 2024 remote-Canada posting), 2 dropped (Feb 2024 Toronto Series D - other metro & +1 stage; May 2024 hearsay) | Mar 2024 offer CAD 144,300: (134,700 - 144,300) / 144,300 = -6.7%; May 2024 posting mid CAD 144,800 (-7.0%) agrees | **Lagging** | **High:** comparable offer backed by agreeing range |
| Cold-Chain Operations, Manager (P2) | CAD 98,600 / CAD 109,400 / CAD 120,800 | 3 in: 1 full (Mar 2024 converted base offer), 1 partial (Jan 2024 Series D posting, +1 stage), 1 dropped (Feb 2024 OTE range, no base split) | Mar 2024 converted base CAD 101,800: (109,400 - 101,800) / 101,800 = +7.5% | **Above-market** | **Medium:** single converted comparable offer |
| Fleet Capacity Analytics, Staff | CAD 143,800 / CAD 159,200 / CAD 175,600 | 2 in: 0 full, 2 partial (Mar 2024 Series B -1 stage; Feb 2024 Series D +1 stage), 0 dropped | None (straddling stage partials: CAD 150,100 vs CAD 173,400) | **Deferred** | **Deferred:** no same-stage comparable survives |
| European Pricing Analytics, Senior (Zurich) | CHF 116,200 / CHF 128,600 / CHF 141,400 | 3 in: 1 full (May 2024 Zurich Series C posting), 1 partial (Mar 2024 Series B offer, -1 stage), 1 dropped (Feb 2024 Vancouver CAD - other metro & currency) | May 2024 posting mid CHF 123,000: (128,600 - 123,000) / 123,000 = +4.55% (borderline; non-conflicting Series B offer CHF 120,200 below midpoint on same side) | **Above-market** | **Low:** single posted range (posted-range cap) |
| Regulatory Cold-Storage Counsel, Senior | CAD 151,400 / CAD 167,800 / CAD 184,600 | 2 in: 0 full, 0 partial, 2 dropped (Mar 2024 CAD 118/hr contractor rate; Jan 2024 CAD 234,600 acquisition retention grant) | None (no FTE annual base record survives) | **Deferred** | **Deferred:** all records failed basis screening |

**Pool totals:** 15 retrieved = 4 fully comparable + 5 partial + 6 dropped.

### Pay-basis and currency adjustments

- **Total comp to base (Cold-Chain Ops):** March 2024 accepted offer of CAD 117,400 total minus stated CAD 15,600 annual bonus = **CAD 101,800 annual base** (downwards).
- **OTE excluded (Cold-Chain Ops):** February 2024 posting at CAD 113,200-137,600 OTE gives no base/variable split and is dropped.
- **Currency isolation (Zurich Pricing):** February 2024 Vancouver CAD posting is excluded with no supplied FX rate; Zurich stays in CHF.
- **Non-FTE and retention drops (Regulatory Counsel):** The CAD 118/hr contractor rate is not annualized without hours, and the CAD 234,600 retention grant lacks a base split.

On P1 Refrigeration Telemetry, the March 2024 accepted offer (CAD 144,300) anchors the band 6.7% below market, backed by the L4-mapped May 2024 posting (midpoint CAD 144,800, -7.0%). Recent accepted hires (CAD 139,600 and CAD 141,200; band midpoint sits 4.1% below own hires) and a pay-cited decline at CAD 137,400 reinforce the lag, while the unanchored remote-Canada posting (midpoint CAD 136,100) sits closer to midpoint.

Basis normalization reverses P2 Cold-Chain Operations: stripped of its stated bonus, the cleared offer leaves Meridian 7.5% above market at Medium confidence, and own hires near midpoint (CAD 108,300 and CAD 110,900) do not overturn a clear external gap while the Series D partial leans higher as expected. Zurich Pricing sits +4.55% above its May 2024 posting (CHF 123,000) in the 4% to 5% borderline band with no recent internal hires, and the non-conflicting Series B accepted offer (CHF 120,200, within 2.3% of the posting and below midpoint on the same side) tips the call to Above-market at Low confidence.

## Deferred verdicts -- Meridian Coldchain

- **Fleet Capacity Analytics, Staff:** Only straddling stage partials survive (Series B midpoint CAD 150,100 vs Series D offer CAD 173,400). Needed: a Vancouver Series C FTE base offer or posting dated May 2023 or later.
- **Regulatory Cold-Storage Counsel, Senior:** Both records failed basis screening. Needed: Vancouver Series C FTE base offers or postings in window plus omitted internal offer history.

## Signal caveats -- Meridian Coldchain

Fourteen of 15 records come from NorthLedger (plus one excluded hearsay figure), leaving no secondary feed check. Only two comparable accepted offers survive across five families while non-base exclusions and stage misses absorb most of the pool; five of eight posted ranges are legally mandated disclosures (four BC mandate, one ON mandate), whose spans run wide across hiring levels rather than reflecting voluntary upward selection bias, and unnamed remote-Canada roles add geographic uncertainty.

Anyone citing CAD 234,600 for Regulatory Counsel is quoting an acquisition retention package with no base breakdown rather than a comparable FTE salary.

## Sample Briefing B -- Bramblewood Agritech (voluntary spans, conflict deferral, range cap, bulleted caveats)

# Bramblewood Agritech: Agronomy Firmware lags, Field Implementation deferred, three bands competitive

This briefing tests Bramblewood Agritech's five role families against AgriPay signals retrieved 2025-02-19 on an Utrecht NL Series B baseline with a 12-month window from February 2024 onward. P1 Agronomy Firmware lags at High confidence, Field Implementation is deferred on conflicting ad-vs-offer evidence, and P2 Crop-Sensing Data Science, Supply Chain Planning, and Precision Hardware QA sit competitive. Supply Chain Planning is omitted from recent offers and flagged as an internal gap.

## Bramblewood Agritech benchmark summary

| Role family (level) | Band (min / mid / max) | Evidence funnel | Anchor & market gap | Verdict | Confidence & reason |
|---|---|---|---|---|---|
| Agronomy Firmware, Senior (P1) | EUR 119,400 / EUR 131,800 / EUR 145,200 | 3 in: 2 full (Dec 2024 offer, Jan 2025 voluntary posting), 0 partial, 1 dropped (Munich Series C - other metro & +1 stage) | Dec 2024 offer EUR 137,600: (131,800 - 137,600) / 137,600 = -4.2% (borderline; band mid 3.7% below own hires); Jan 2025 posting mid EUR 138,300 (-4.7%) agrees | **Lagging** | **High:** comparable offer backed by agreeing range |
| Crop-Sensing Data Science, Lead (P2) | EUR 139,200 / EUR 153,600 / EUR 169,400 | 3 in: 2 full (Dec 2024 offer, Jan 2025 voluntary posting), 0 partial, 1 dropped (public company - 4 stages above) | Dec 2024 offer EUR 158,700: (153,600 - 158,700) / 158,700 = -3.2%; Jan 2025 posting mid EUR 165,200 (-7.0%) sits within 4.1% of offer | **Competitive** | **High:** comparable offer backed by range within 5% |
| Field Implementation, Manager | EUR 96,200 / EUR 106,400 / EUR 117,200 | 4 in: 1 full (Dec 2024 voluntary posting), 2 partial (Dec 2024 Series A offer -1 stage; Jan 2025 Series C posting +1 stage), 1 dropped (Jan 2024 offer - stale, before Feb 2024) | None: lone posting mid EUR 112,200 conflicts with partial Series A offer EUR 102,400 inside its span (8.7% apart) | **Deferred** | **Deferred:** uncorroborated ad conflicts with clearing offer |
| Supply Chain Planning, Senior | EUR 106,800 / EUR 118,200 / EUR 130,400 | 3 in: 2 full (Dec 2024 & Feb 2024 boundary-month voluntary postings), 1 partial (Dec 2024 Series A offer -1 stage, below range floor), 0 dropped | Mean of Dec 2024 (mid EUR 123,600) & Feb 2024 (mid EUR 123,600) = EUR 123,600: (118,200 - 123,600) / 123,600 = -4.37% (borderline, no own offers) | **Competitive** | **Medium:** two agreeing ranges (posted-range cap) |
| Precision Hardware QA, Senior | EUR 112,800 / EUR 124,600 / EUR 137,200 | 2 in: 2 full (Dec 2024 offer, Jan 2025 voluntary posting), 0 partial, 0 dropped | Dec 2024 offer EUR 126,900: (124,600 - 126,900) / 126,900 = -1.8%; Jan 2025 posting mid EUR 135,700 (-8.2%) disagrees (>5% above offer) | **Competitive** | **Medium:** offer leads over disagreeing posted range |

**Pool totals:** 15 retrieved = 9 fully comparable + 3 partial + 3 dropped.

On P1 Agronomy Firmware, the December 2024 accepted offer (EUR 137,600, -4.2%) lands in the 4% to 5% borderline band, and Bramblewood's own recent accepted hires (EUR 136,600 and EUR 137,200; band midpoint sits 3.7% below own hires) confirm Lagging alongside the agreeing January 2025 posting. P2 Crop-Sensing Data Science holds cleanly competitive: revealed preference (EUR 158,700, -3.2%) sits inside 4%, and the January 2025 posting (midpoint EUR 165,200) sits within 4.1% of the offer, supporting High confidence.

Across the remaining three families, ad-vs-offer conflict, date boundaries, and range caps govern the calls. On Field Implementation, dropping this family's stale January 2024 offer (EUR 111,300) leaves a lone December 2024 voluntary posting (EUR 99,800-124,600, midpoint EUR 112,200) beside a Series A accepted offer (EUR 102,400) inside that posted span yet 8.7% below its midpoint; with no same-stage offer to resolve the disagreement, the family is deferred. Supply Chain Planning keeps the February 2024 boundary-month posting beside December 2024 (-4.37% with no own hires, while the Series A partial offer at EUR 104,200 sits below the range floor and below midpoint -> Competitive, capped at Medium because zero full offers survive). On Precision Hardware QA, clearing pay (EUR 126,900, -1.8%) leads over the higher voluntary posting (midpoint EUR 135,700, -8.2%, 6.9% above offer -> Medium).

## Deferred verdicts -- Bramblewood Agritech

- **Field Implementation, Manager:** After this family's stale January 2024 offer fell outside window, the lone December 2024 voluntary posting (midpoint EUR 112,200) disagrees by 8.7% with the partial Series A accepted offer (EUR 102,400) inside its span, while the Series C posting pulls higher. Needed: at least one Utrecht Series B FTE accepted base offer dated February 2024 or later.

## Signal caveats -- Bramblewood Agritech

- **Single-source concentration:** All 15 records come from AgriPay, with no secondary feed to cross-check outliers.
- **Voluntary-posting upward selection bias:** The Netherlands has no salary-range disclosure mandate, and 8 of 9 posted ranges are voluntary; self-selecting publishers tend to advertise wider, higher spans than actual accepted offers.
- **Thin offer base and missing internal check:** Only three comparable full offers survive after window screening dropped a stale offer, and omitted internal offers leave Supply Chain Planning untested against actual hires.

Anyone quoting EUR 248,600 for Crop-Sensing Data Science is pointing to a public-company range top four stages past Series B rather than Bramblewood's peer market.

Deliver only the standalone executive briefing in your next message (zero working-sheet text, zero `E-01`..`E-15` codes anywhere including caveats, zero bracketed threshold strings, zero leading `---` or preamble), with the very first characters `# ` followed by the company name, faithfully carrying forward every verified figure, funnel count, disclosure type, verdict, and confidence tier from your sheet.
