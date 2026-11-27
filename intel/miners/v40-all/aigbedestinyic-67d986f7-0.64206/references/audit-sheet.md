# Private Working Sheet Guide

Complete the entire plain-text working sheet in one turn before opening the briefing guide. Settling dates, internal offers, comparability scores, stage distances, conflict checks, external-offers-only anchors, funnels, unrounded gaps, verdicts, confidence tiers, and disclosure counts up front prevents arithmetic drift when writing the briefing. Both illustrations below use invented firms, cities, dates, and currencies for method alone.

## Working Sheet Steps

1. **Snapshot & Baseline:** Scan through the last row; record total rows (first to last ID), feed(s), home metro, remote policy, stage step (Seed zero, Series A one, Series B two, Series C three, Series D four, Series E/later private five, public six), retrieval date, exact window (6, 12, or 18 months), floor (`YYYY-MM`), open P1/P2 roles, and internal gaps (omitted offer lines vs `"no recent offers"`, unnamed remote-national roles, shorter internal lookback). Copy each family's exact band min/mid/max.
2. **Internal Offer Register:** Copy only recent offers under `Recent offer data` per family (`Own = none` if omitted or none). If `own_mean > band_mid`, compute positive lag magnitude `(own_mean - band_mid) / own_mean`; if `own_mean < band_mid`, compute `(band_mid - own_mean) / own_mean`. Keep external offers separate and internal offers undated.
3. **Row-by-Row Chronological Date Screen (list EVERY row `ID:YYYY-MM` before family screening -- do not summarize without listing each row's date):**
   - Write one line listing every row from first ID to last ID with its `YYYY-MM` (`E-01:2024-03, E-02:2024-05, ...`) and check each against `floor YYYY-MM` by calendar year first, then month:
   - Later year (`row_year > floor_year`) -> in window.
   - Same year (`row_year == floor_year`): if `row_month < floor_month` (even one month earlier, such as `2024-01 < 2024-02` or month `09 < 10`) -> stale and dropped (not boundary and not full, even when metro and stage match); if `row_month == floor_month` -> boundary in window.
   - Earlier year (`row_year < floor_year`) or undated -> dropped. Note each stale row's owning family. Every external row counts in `Retrieved`.
4. **Family-by-Family Screening (snapshot order):** For every matching row, write:
   `ID | Date | Type & Basis/Figure | Notes | Geo Stage(|row-co|) Scope Type | P=?, X=? -> FULL / PARTIAL / DROPPED`
   - Another named city (Toronto vs Vancouver, Munich vs Utrecht) is `Geo=X -> DROPPED` (not remote/partial); literal remote/national with no city is `Geo=P`.
   - Exact stage diff `|row_step - co_step|`: `0 -> M`; `1` (`-1` or `+1`) with Geo/Scope/Type `M` stays `P -> PARTIAL` (not dropped); `2+` (e.g. Series D[4] vs Series B[2] = 2, Series E[5] vs Series B[2] = 3) or public vs private -> `X -> DROPPED`.
   - Slash-combined equivalent titles and voluntary postings score `M`; `P >= 2` (remote + 1 stage off) or any `X` -> `DROPPED`.
   - `Funnel: N = F full (IDs) + P partial (IDs) + D dropped (IDs)` (`F+P+D = N`).
   - List surviving counts: `Full offers = [IDs, count] | Full ranges = [IDs, count] | Partial accepted offers = [IDs, figures]`.
   - **Deferral check first:** defer if `F = 0` or no band. Conflict deferral applies only when `0 full offers`, `1 full range [min, max]`, `>= 1 partial accepted offer` (not a partial range), `min <= partial_offer <= max` (check numerically!), AND `|partial_offer - range_mid| / range_mid > 5.0%`. If `<= 5.0%` (e.g. `0.9%` or `2.3%`) -> no conflict (proceed to gap, do not defer); if `partial_offer < min` -> below range floor (do not defer).
   - **Anchor (external full points only):** 1 full offer -> alone; 2 -> mean; 3+ -> median (keep ranges and own hires out). Only with 0 full offers -> mean of full range midpoints.
   - **Unrounded two-decimal band gap:** `(band_mid - anchor) / anchor` (divide by `anchor`, not `band_mid`).
   - **Two-step Offer+Range Check (applies only when 1 full offer + 1+ full ranges survive; skip whenever 0 full offers survive -- ranges alone cap at Medium):**
     - **Step A:** Does the full range give the same verdict word as the full offer (e.g. both Lagging, even if >5.0% apart)? If yes -> agrees -> **High** (done).
     - **Step B (only if verdict words differ):** Is `|range_mid - anchor| / anchor <= 5.0%`? If yes -> agrees -> **High**; only if verdict words differ AND `> 5.0%` -> disagrees -> **Medium**.
   - **Verdict (on unrounded two-decimal gap):**
     1. `-4.86%` or deeper (`< -4.85%`, e.g. `-4.96%`) -> **Lagging**; `+4.86%` or higher (`> +4.85%`) -> **Above-market**.
     2. Borderline Lagging (`-4.85%` to `-4.00%`): with own hires, if `own_mean > band_mid` and `(own_mean - band_mid)/own_mean >= 1.50%` (e.g. `2.82%`, `3.66%`, `3.73%`) -> **Lagging**, else **Competitive**. With `Own = none`, test explicitly: `non-conflicting partial accepted offer > band_mid?` (not a posted range) -> if yes, **Lagging**, else **Competitive**.
     3. Borderline Above-market (`+4.00%` to `+4.85%`): mirror (`own_mean < band_mid` and `(band_mid - own_mean)/own_mean >= 1.50%` -> **Above-market**; `Own = none`, partial accepted offer `< band_mid` -> **Above-market**).
     4. Inside `(-4.00%, +4.00%)` -> **Competitive**.
   - **Confidence tier (full external points only; partials and own hires do not lift tiers):** `0` full offers -> `2+` agreeing full ranges = **Medium** (posted-range cap), `1` full range = **Low**; `1` full offer + `0` full ranges = **Medium**; `1` full offer + agreeing full range = **High** (disagreeing = **Medium**); `2+` full offers = **High**; Deferred above = **Deferred**.
5. **Reconciled Totals, Disclosures, Register, Headline:**
   - Add row-by-row integers for `Retrieved`, `Full`, `Partial`, `Dropped` (`F+P+D = N`). Sum surviving full external offers across families.
   - Count posted ranges by exact `Notes` disclosure status (`Mandated` + law, `Voluntary`, `Unmarked`; do not count offers). With `Mandated >= 1`, caveats cover **mandated-range width**; only with `Mandated = 0`, **voluntary upward selection bias**.
   - Identify highest-dollar dropped figure + exact `|row_step - co_step|` stage diff. Draft Verdict register and Briefing headline strictly from that register.

## Worked Sheet A: Meridian Coldchain (mandated spans, basis conversions, multi-currency, non-conflict partial, 2 deferrals)

- Baseline: 15 rows (C-01..C-15), NorthLedger (14) + recruiter report (C-05), retrieved `2024-05-18`. Vancouver BC (Zurich CHF for Eur Pricing), Series C (3). Window: 12 months, floor `2023-05`.
- Own offers: Refrig Telemetry = 139,600 & 141,200 (mean 140,400 > 134,700, lag `4.06%`), decl 137,400; Cold-Chain Ops = 108,300 & 110,900 (mean 109,600, lag `0.18%`); Fleet Capacity = none; Eur Pricing = none; Reg Counsel = none (omitted).
- Date Check (`ID:YYYY-MM` vs `2023-05`): C-01:2024-03, C-02:2024-05, C-03:2024-03, C-04:2024-02, C-05:2024-05, C-06:2024-03, C-07:2024-02, C-08:2024-01, C-09:2024-03, C-10:2024-02, C-11:2024-05, C-12:2024-03, C-13:2024-02, C-14:2024-03, C-15:2024-01 -> all 2024 > 2023 -> 0 stale. Gaps: Reg Counsel omitted; remote-Canada unnamed.

**Refrig. Telemetry Eng., Senior (CAD 121,400/134,700/148,200, P1)** | Own lag `4.06%`, decl 137,400.
- C-01 2024-03 Offer 144,300 | M M(0) M M -> FULL; C-02 2024-05 Range 131,800-157,800 (mid 144,800, BC mandate, L4 map) -> FULL; C-03 2024-03 national Range mid 136,100 -> PARTIAL (P=1 remote); C-04 2024-02 Toronto Ser D (ON mandate) -> DROPPED (X geo, +1); C-05 Hearsay 147,900 -> DROPPED.
- Funnel: 5 = 2 full + 1 partial + 2 dropped. Full offers: 1 (C-01). Anchor: 144,300; gap `-6.65%` -> Lagging. Step A: C-02 `-6.98%` Lagging (same verdict) -> High.

**Cold-Chain Ops, Manager (CAD 98,600/109,400/120,800, P2)** | Own lag `0.18%`.
- C-06 2024-03 Offer 117,400 total - 15,600 bonus = 101,800 base (downwards) -> FULL; C-07 OTE (no split) -> DROPPED; C-08 2024-01 Ser D BC mandate mid 115,600 -> PARTIAL (+1).
- Funnel: 3 = 1 full + 1 partial + 1 dropped. Anchor: 101,800; gap `+7.47%` -> Above-market. 1 offer + 0 ranges -> Medium.

**Fleet Capacity Analytics, Staff (CAD 143,800/159,200/175,600)** | Own = none.
- C-09 Ser B BC mandate mid 150,100 -> PARTIAL (-1); C-10 Ser D Offer 173,400 -> PARTIAL (+1). Funnel: 2 = 0 full + 2 partial + 0 dropped -> Deferred.

**European Pricing, Senior (Zurich, CHF 116,200/128,600/141,400)** | Own = none.
- C-11 Range CHF 113,400-132,600 (mid 123,000) -> FULL; C-12 Ser B Offer CHF 120,200 -> PARTIAL (-1); C-13 Vancouver CAD (no FX) -> DROPPED.
- Funnel: 3 = 1 full + 1 partial + 1 dropped. Deferral check: 0 offers, 1 range `[113,400, 132,600]`, partial offer 120,200 inside span, `|120,200-123,000|/123,000 = 2.28% <= 5.0%` -> no conflict (not deferred). Anchor: 123,000; gap `+4.55%` (borderline, Own=none; partial offer 120,200 < band_mid 128,600 -> Above-market). Tier: 1 range -> Low.

**Regulatory Counsel, Senior (CAD 151,400/167,800/184,600)** | Own = none (omitted).
- C-14 CAD 118/hr contractor -> DROPPED; C-15 CAD 234,600 retention grant -> DROPPED. Funnel: 2 total -> 0 surviving, 0 partial, 2 excluded -> Deferred.

- Pool sums: Retrieved = 5+3+2+3+2 = 15; Full = 2+1+0+1+0 = 4; Partial = 1+1+2+1+0 = 5; Dropped = 2+1+0+1+2 = 6 (`4+5+6=15`). Full offers = 2.
- Disclosures: 8 posted ranges -> 5 mandated (4 BC, 1 ON), 0 voluntary, 3 unmarked -> Mandated-range width. Loudest dropped: C-15 CAD 234,600 retention grant.
- Register: Refrig Telemetry (P1) Lagging/High; Cold-Chain Ops (P2) Above-market/Medium; Fleet Capacity Deferred; Eur Pricing Above-market/Low; Reg Counsel Deferred.
- Headline: `# Meridian Coldchain: Refrigeration Telemetry lags, Cold-Chain Ops and Zurich Pricing sit above market, two families deferred`

## Worked Sheet B: Bramblewood Agritech (inside-span conflict vs outside-span partial, stale vs boundary, 2-step range check)

- Baseline: 15 rows (P-01..P-15, AgriPay), retrieved `2025-02-19`. Utrecht NL (EUR, no mandate), Series B (2). Window: 12 months, floor `2024-02`.
- Own offers: Agronomy Firmware = 136,600 & 137,200 (mean 136,900 > 131,800, lag `3.73%`); Crop-Sensing DS = 158,400 & 159,600 (mean 159,000, lag `3.40%`); Field Impl = none; Supply Chain = none (omitted); Precision QA = 126,800 (lag `1.74%`).
- Date Check (`ID:YYYY-MM` vs `2024-02`): P-01:2024-12, P-02:2025-01, P-03:2024-12, P-04:2024-12, P-05:2025-01, P-06:2024-12, P-07:2024-12, P-08:2024-12, **P-09:2024-01 (stale < 2024-02, Field Impl -> DROPPED)**, P-10:2025-01, P-11:2024-12, P-12:2024-12, P-13:2025-01, **P-14:2024-02 (boundary == 2024-02, Supply Chain -> IN)**, P-15:2024-12.

**Agronomy Firmware, Senior (EUR 119,400/131,800/145,200, P1)** | Own lag `3.73% >= 1.50%`.
- P-01 Offer 137,600 -> FULL; P-02 Range mid 138,300 (vol) -> FULL; P-03 Munich Ser C -> DROPPED (X geo, +1).
- Funnel: 3 = 2 full + 0 partial + 1 dropped. Anchor (offer alone): 137,600; gap `-4.22%` (borderline; own lag `3.73% >= 1.50%` -> Lagging). Step A: P-02 `-4.70%` Lagging (same verdict) -> High.

**Crop-Sensing DS, Lead (EUR 139,200/153,600/169,400, P2)** | Own lag `3.40%`.
- P-04 Offer 158,700 -> FULL; P-05 Range mid 165,200 (vol) -> FULL; P-06 Public (+4 steps -> X) 194,200-248,600 -> DROPPED.
- Funnel: 3 = 2 full + 0 partial + 1 dropped. Anchor: 158,700; gap `-3.21%` -> Competitive. Step B: P-05 `-7.02%` Lagging (diff verdict), `|165,200-158,700|/158,700 = 4.1% <= 5.0%` -> agrees -> High.

**Field Implementation, Manager (EUR 96,200/106,400/117,200)** | Own = none.
- P-07 Range 99,800-124,600 (mid 112,200, vol) -> FULL; P-08 Ser A Offer 102,400 -> PARTIAL (-1); P-09 `2024-01` Offer 111,300 -> DROPPED (stale); P-10 Ser C Range mid 120,300 -> PARTIAL (+1).
- Funnel: 4 = 1 full + 2 partial + 1 dropped. Deferral check: 0 full offers, 1 full range `[99,800, 124,600]`, partial offer 102,400 inside span AND `|102,400-112,200|/112,200 = 8.73% > 5.0%` -> Deferred.

**Supply Chain Planning, Senior (EUR 106,800/118,200/130,400)** | Own = none (omitted).
- P-11 Range 111,800-135,400 (mid 123,600, vol) -> FULL; P-14 `2024-02` boundary Range mid 123,600 (vol) -> FULL; P-15 Ser A Offer 104,200 -> PARTIAL (`104,200 < 111,800` below range floor -> not inside).
- Funnel: 3 = 2 full + 1 partial + 0 dropped. Anchor: mean 123,600; gap `-4.37%` (borderline, Own=none, partial offer 104,200 < midpoint -> Competitive). 0 full offers -> skip Offer+Range Check -> 2 agreeing ranges cap at **Medium** (posted-range cap).

**Precision Hardware QA, Senior (EUR 112,800/124,600/137,200)** | Own lag `1.74%`.
- P-12 Offer 126,900 -> FULL; P-13 Range mid 135,700 (vol) -> FULL. Funnel: 2 = 2 full + 0 partial + 0 dropped. Anchor: 126,900; gap `-1.81%` -> Competitive. Step B: P-13 `-8.18%` Lagging AND `6.9% > 5.0%` -> disagrees -> Medium.

- Pool sums: Retrieved = 15; Full = 9; Partial = 3; Dropped = 3 (`9+3+3=15`). Full offers = 3.
- Disclosures: 9 posted ranges -> 0 mandated, 8 voluntary, 1 unmarked public -> Voluntary upward bias. Loudest dropped: P-06 public top EUR 248,600 (4 stages above Series B).
- Register: Agronomy Firmware (P1) Lagging/High; Crop-Sensing DS (P2) Competitive/High; Field Impl Deferred; Supply Chain Competitive/Medium; Precision QA Competitive/Medium.
- Headline: `# Bramblewood Agritech: Agronomy Firmware lags, Field Implementation deferred, three bands competitive`

Write the complete plain-text working sheet in your next turn before calling `read_reference` on `references/briefing-guide.md` at the end of that message so the final reply holds only the executive briefing.
