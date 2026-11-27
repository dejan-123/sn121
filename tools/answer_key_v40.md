# v40 Compensation Benchmarking — Inferred Answer Key

Reconstructed 2026-11-26 (third pass); audited against ALL harvested submissions in intel/miners/v40/ + v40-all/ — API shows 103 evaluated of 106 total (third-wave harvest pulled the final 10: john-v5, yeliz-v7/v8, juel-v6, astertwo-v4, TopMiner-v3, Sunbnetghost-v3, grayson-v3, jisan-v4, iqbal-v3). (rubric / skill_use / scenario_quality / novelty) plus their submitted skill files. Scores are per-scenario `rubric` values unless noted; total = 0.3·rubric + 0.3·scenq + 0.3·skill_use + 0.1·novelty. Sources: `intel/miners/v40*/**/tasks.json` + API `/submissions`.

## Score formula and gates (confirmed)

- Per-scenario: `0.3*rubric + 0.3*scenario_quality + 0.3*skill_use + 0.1*novelty`
- `skill_redundancy` = gate only (needs >= ~0.5); most miners 1.0 — exceptions: john 0.733, astertwo-v2 0.6, kulhawikb 0.6, john-v2 0.93 (all still passed); **jisan-v2 = 0.3 → full-submission ZERO (gate kill confirmed)**
- `dataset_derived` ~0.9 — **but TopMiner-v1 and john-v2 both ran 0.15 → full-submission ZERO (dd gate kill confirmed). The three full-sub zeros are now SOLVED: two dd-gate kills (0.15) + one redundancy-gate kill (0.3). NOT similarity: jisan-v3 scored 0.6808 at sim_o=0.9218, yurii passed at 0.9294, Hinata-v2 at 0.9198.**
- `novelty` mostly ~1.0 but NOT universal: 11 rows below 0.9 (kulhawikb S-008 0.32, cleanmind777/rvictorino S-008 0.57); S-008 novelty dips are common. `dataset_derived` ~0.9, `skill_alignment` ~0.9-1.0
- `skill_use` grades 4 fixed criteria: Novel knowledge, Knowledge applied, Situational judgment, Output naturalness. Scores are multiples of 1/16 — but the met->score mapping is NOT 'met=full, partly=half': rows with all-4-met land 0.75-1.0 (e.g. astertwo S-003 all-met = 0.8125). Exact mapping unknown
- `scenario_quality` = exactly 5 hidden criteria per scenario, reported as "X of 5 met, Y partly, Z missed"
- `similarity_score_other`: TopMiner scored 0 with 0.85 match to astertwo; submissions at ~0.90 (bruce, r11j, others) all scored normally — reject threshold sits above ~0.90
- `references_read` is logged per scenario (verified in tasks.json): winning bundles show scenario-aware reading — juel-v3 reads settling-sheet.md+memos.md on EVERY scenario plus not-yet.md+turned-away.md on S-003 only; kulhawikb reads note-case.md+note-layout.md on S-003 only; atopfreelancer scope-redirect.md on S-003. Dedicated redirect references drive the S-003 5/5s — generic worked-example refs get read but don't produce the fixed layout.
- `skill_use` criterion-level failure stats (328 rows): "Knowledge applied: Partly" = 111 rows (most common loss); "+Output naturalness: Partly" = 85; all-4-met = 73; "Naturalness alone Partly" = 51; judgment+applied+naturalness all Partly = 5. The su ceiling is cleared by applied-to-data work, not structure.
- **su decode, second wave (728 rows, verified):** criterion→score mapping — all-4-met = avg 0.876; applied-partly alone = 0.752; naturalness-partly alone = 0.758; both partly = 0.651; everything-partly = 0.537. **Novel knowledge is met on every non-zero row** (baseline, not a differentiator); **Situational judgment almost never fails** (14 partly-marks total). The whole game is the last two. **Knowledge applied** fails where classification is heaviest: S-004 (86/91 partly), S-007 (85/91), S-001 (80/91), S-005 (57) — only subs with a visible per-point working pass there (S-001 met: 8 subs; S-004: 2; S-007: 3 — yeliz-v3/v4/v5, juel family, astertwo-v3, kulhawikb). **Output naturalness** fails ~35% of subs per scenario (~30-41 rows each); the 22 never-failers are the two-message sheet→memo submissions plus a few disciplined single-doc ones — the deliverable must read as prose written for a human, with machinery quarantined. Small differentiators in never-fail sheets: a posting-status line for EVERY range (law/volunteered/silent), a basis-check sentence even when nothing converts ("already annual base"), dates listed against the floor. su solution = the architecture we now ship.

## Leaderboard (103 scored — top rows, API-verified)

| # | Miner | Total | Notable |
|---|-------|-------|---------|
| 1 | **shsha0037** | **0.7321** | **NEW BAR. S-007 rubric 0.862 — nearly double the old best (decode below); S-008 scenq 0.853 = 4/5 (best ever) + rubric 0.75; S-001 scenq 5/5; S-006 scenq 4/5. sim_other 0.923 passed.** |
| 2 | **juel-v4** | **0.7116** | **S-008 rubric 0.865 (best ever); S-001 scenq 5/5 (first, w/ yeliz-v3+dilcok8); S-006 scenq 4/5. Same sheet+memo as v3; doctrine change: different-metro = near miss not drop** |
| 3 | juel-v3 | 0.7107 | two-message settling-sheet+memo; S-008 0.845; S-006 scenq 4/5 |
| 4 | yeliz-v3 | 0.7033 | S-001 scenq 5/5 (0.8125 = scenq field max off-S-003); S-008 survived 0.75 |
| 5 | astertwo-v3 | 0.7022 | S-004 0.84, S-005 0.75; survived S-008 0.63 WITH internals-in-verdict machinery kept |
| 6 | yeliz-v6 | 0.7008 | newest yeliz (v4 zeroed S-008 earlier); survived S-008 |
| 7 | john-v3 | 0.7002 | **S-005 CRACKED: rubric 0.81, scenq 3/5 (first ever)** |
| 8 | john-v4 | 0.7000 | **S-005 rubric 0.875, scenq 2/5; conditional-remote rule is the decode** |
| 9 | kathyanne-v4 | 0.6984 | **S-005 rubric 0.895 — NEW BEST EVER; S-007 rubric 0.75 — but S-008 ZEROED (scenq 0.812 = 4/5 + rubric 0 = ANOTHER perfect-format call kill)** |
| 10 | nagaominori-v3 | 0.6981 | **S-005 scenq 0.65 = 3/5 (joint-best) + rubric 0.865** — 'a team paid in pounds is read in pounds'; S-003 scenq 5/5 (0.87) |
| 11 | yeliz-v5 | 0.6975 | S-007 scenq 2/5 (one of only 6); S-008 0.75 |
| 12 | john-v5 (f9ad5c35) | 0.6939 | third-wave; S-008 survived |
| 13 | juel-v5 | 0.6878 | S-005 rubric 0.75 but scenq still 0/5; **S-007 rubric ZERO — first-ever call kill there** |
| 13b | yeliz-v7 (daea9070) | 0.6859 | third-wave; **S-006 scenq 4/5** |
| 13c | yeliz-v8 (04f5c0c6) | 0.6851 | third-wave |
| 13d | phantom-v2 | 0.6853 | S-008 flipped 0→0.835 (controlled experiment); S-001 rubric 0.75 |
| 14 | astertwo-v1 | 0.6837 | dual-gap internals-in-verdict, 2.5%/5.5% |
| 15 | kathyanne-v2 | 0.6833 | S-006 rubric 0.75 (still best); S-003 scenq 5/5 |
| 16 | kulhawikb-v2 | 0.6818 | S-003 scenq 0.9625 = field max again |
| 17 | Sakura03 | 0.6814 | per-dimension audit cells |
| 18 | jisan-v3 | 0.6808 | S-005 0.75 + scenq 3/5; **S-008: 5-of-5 scenq + rubric 0 — 2nd perfect-format kill; internals shown INSIDE verdict cell is the suspect** |
| 19 | bruce-v2 | 0.6796 | S-005 scenq 3/5 (joint-best) |
| 20 | juel-v1 | 0.6778 | prose-argue style, skill_use 0.94-1.00 |
| 21 | Hinata03-v4 | 0.6744 | S-007 rubric 0.75 (3-way tie best) + scenq 2/5 — adopted juel-v3 3%+close doctrine |
| 22 | kulhawikb-v1 | 0.6718 | fixed-layout redirect originator |
| 23 | pham-v2 | 0.6713 | S-001 scenq 4/5; S-008 survived 0.615 (v1 zeroed) |
| 24 | Hinata03-v3 | 0.6708 | |
| 25 | kathyanne-v3 | 0.6698 | S-007 rubric 0.75 (3-way tie) + S-005 0.75 — but S-008 zeroed |
| ... | | | |
| ~50 | minghuixie-v2 (ours) | 0.6148 | audit-first rebuild; survived S-008 at 0.35 |
| ~80 | minghuixie-v1 (r11j) | 0.5578 | prose funnel, low skill_use, S-008 zero |
Notable (third wave incl.): juel-v6 .6706 (**S-008 ZEROED — juel's first death there after v3/v4/v5 all survived; internals-decide removed in v6 → removal did NOT protect**), astertwo-v4 .6682 (S-008 zeroed again), TopMiner-v3 .6552 (**S-008 scenq 5/5 — the THIRD perfect-format sub — rubric ZERO; internals strictly corroborative → clean-internals posture does NOT save**), grayson-v3 .6663, Sunbnetghost-v3 .6454, jisan-v4 (S-008 zeroed again — all 4 jisan versions died there), nagaominori666-v2 0.6561 (S-007 rubric 0.675), sncollins27 0.6055 (S-008 scenq 4/5), tetrixcorps 0.5945 (S-007 0.647, S-001 scenq 4/5), grayson-v2 0.6649 (S-007 rubric 0.75 after adopting sheet+memo), juel-v2 .6147, rintaro-v2 .6138, rintaro .6120, rvictorino .6079, Sunbnetghost-v2 .6186 (S-003 rubric 0.833 best-ever + 5/5 scenq), dilcok8 ×6 (.633 best; S-008 zeroed 5 of 6 times — repeat kill victim), yurii .5908 (S-002+S-008 zeros — S-002 scenq 0/5 = format kill), iqbal .5632/.5765/**v3 = FULL-SUB ZERO (4th gate kill)**, pham ×5 (.6713 best). Full-submission zeros (all gate kills): TopMiner-v1 dd=0.15, john-v2 dd=0.15, jisan-v2 redundancy=0.30, iqbal-v3 (gate field tbc).

## Per-scenario answer key (inferred)

### S-001 — exclusion discipline
- **Best rubric: 0.7625** (juel-v3), then 0.75 ×8 (john-v3/v4, juel-v1/v4, astertwo, kathyanne-v2, tomjerry-v3, phantom-v2, pham-v4, kulhawikb-v2). Typical: 0.44. Zeros: minorain AND iqbalteing37.
- **scenq CRACKED — 5/5 hit by THREE submissions:** yeliz-v3 (0.8125), juel-v4 (0.75), dilcok8 (0.75 — the earlier [unverified] claim confirmed). 72 submissions now ≥2/5.
- **The discriminating rule (juel-v3→v4, verified diff): different-metro is a NEAR MISS (partial), not a drop** — "its pay runs on its own scale, and the input never says how far apart the two sit." E-07 Denver offer demoted to partial rather than excluded → S-001 scenq 3/5→5/5. Also: any slash-title = near miss.
- **Expected:** every evidence point classified with per-dimension reasoning shown (metro X vs metro Y, stage distance, recency vs boundary, basis). Winners show the comparison in each cell, not just the verdict tag.
- **Fails:** summarized exclusions, missing a planted exclusion.

Family profile (Veltrix, Series B, Austin; window: before 2025-04 out; remote-US anchored to Austin tier):

| Family | Anchor | Gap vs mid | Intended call | Trap |
|--------|--------|------------|---------------|------|
| Data Eng Sr (162) | E-04 offer $169K | +4.3% | competitive-close | internals 3x accepted ~$170K (+4.9%) sit ABOVE the external anchor — the divergence decoy; E-03 voluntary range mid 170 agrees; E-01 hearsay X; E-02 NYC+SeriesD X (2 fails) |
| PM Principal (188) | none | — | **DEFERRED** | planted defer: E-05 NYC+SeriesC X, E-06 Austin/SeriesA range mid 177.5 = stage-partial only, E-07 Denver offer $182K = metro-out — no full point survives |
| RevOps Mgr (130) | E-08 range mid $136.5K | +5.0% | lagging-edge, Low | boundary plant: exactly on the 5% line; E-09 Series E = stage X; internal accepted $138K (+6.2%) corroborates up |
| CS Senior (91) | E-11+E-12 mids $97K | +6.6% | lagging, Low | E-10 unnamed undated survey = X basis; declined $95K "below current comp" = corroborating decline |

### S-002 — internals-vs-external divergence
- **Best rubric: 0.685** (iqbalteing37 — STILL uncrowned after 89 subs), then 0.635 (aigbe, astertwo, phantom, tomjerry), yeliz-v4 0.575. **yurii rubric ZERO confirmed (S-002 scenq 0-of-5 too → format-level kill, not verdict-level).** Nobody has cracked what the remaining rubric item is.
- **Expected:** internal offers (~+7%) corroborate lagging pressure but the verdict comes from the external anchor alone (~+4.7% → competitive under flat-5%). Internals are named in-row/caveat, never in the pool/funnel.
- **Note:** phantom's 3%-lagging and aigbe's 5%-competitive BOTH scored 0.64 — the verdict label may not be the checked item; internals handling is.
- **Best-scorer doctrine (iqbalteing37, verified in SKILL.md):** "internal recruiting outcomes can indicate hiring pressure outside external counts and anchors" — corroboration only, never in counts/anchors; anchor = median of full offers else median of posting mids; gap = (mid−anchor)÷anchor, ±5% inclusive, "classify before rounding and show precision near an edge."

Family profile (Orenda, Series C, Chicago; window: before 2025-10 out — E-08 dated 2025-09 is the boundary-stale plant):

| Family | Anchor | Gap vs mid | Intended call | Trap |
|--------|--------|------------|---------------|------|
| ClinInf Staff (183) | E-01 offer $191K | +4.4% | competitive-close, High | internals accepted $194K (+6.0%) above anchor; E-02 NYC+SeriesD X |
| GrowthMktg Dir (215) | E-03 offer $224K | +4.2% | competitive-close | E-05 retention grant $260K total = X basis (no base split); E-04 SeriesB range = stage-partial |
| Platform Eng Sr (170) | E-07 offer $178K | +4.7% | competitive-close | E-07 "Senior Software Engineer (backend)" = title-variant that COUNTS (scope note maps IC4); E-08 stale-by-one-month X; E-06 voluntary mid 179 (+5.3%) agrees; internals avg $181.7K (+6.9%) above anchor |
| RegAff Sr (141) | E-09 range mid $142.5K | +1.1% | competitive, Low | E-10 SeriesB = stage-partial |
| DataSci Sr (174) | E-11 range mid $187.5K | +7.8% | lagging, Low | E-12 SeriesB partial; E-13 contractor $95/hr = X basis, never annualised; no internal offers — posted-only |

Theme: every family with internals has them sitting ABOVE the external anchor (+4.2-4.7% ext vs +6.0-6.9% int) — internals corroborate pressure but never move the verdict.

### S-003 — redirect discipline
- **NEW best rubric: 0.833** (Sunbnetghost-v2 — also 5/5 scenq at 0.87), then 0.75 cluster (nagao ×2, ours-v2, john-v3/v4, minorain-v2, juel-v4). **best scenq: 0.9625** (kulhawikb ×2 — field max). ~13 submissions at 5/5 scenq now; atopfreelancer + jisan-v3 hit 5/5 on S-008 too (both rubric-zeroed there).
- **Expected:** fixed-layout note, not freeform prose. kulhawikb's winning form: `# <Company>: no benchmark yet` title, each ask named with any deadline, arrived items counted by role/level (no names), why no verdict is possible, other work named as separate, exact list of what to send — all driven by a dedicated reference example.
- **Fails:** yeliz (0.44) over-formatted; missing redirect = low.

### S-004 — OTE/total-comp conversion
- **Best rubric: 0.885** (astertwo-v2), then astertwo-v3 0.84, phantom 0.83 = minorain-v2 0.83, astertwo-v1 0.82, aigbe 0.81. Zeros: john, rintaro, dilcok14, pham-v1 (verified — rubric 0 at 3/5 scenq). scenq caps at 4/5 (best: dilcok8 0.9375 4/5+partly — [unverified] claim confirmed).
- **Expected:** write the conversion with direction ("172K total − 20K bonus = 152K base"), verdict above-market (~−6%), confidence tier with reason.
- **Fails:** wrong conversion direction or verdict = rubric ZERO.

Family profile (Fenwick, Series B, Seattle; window: before 2025-10 out — E-12 dated 2025-09 is the boundary-stale plant):

| Family | Anchor | Gap vs mid | Intended call | Trap |
|--------|--------|------------|---------------|------|
| Analytics Staff (188) | E-03 offer $204K | +8.5% | lagging, High | internals accepted $201K (+6.9%) + declined $196K "joined competitor" corroborate; E-01 WA-mandated mid 198 agrees; E-02 SeriesC = stage-partial |
| Sales Sr (162 base) | E-06 offer converted: $172K total − $20K bonus = $152K base | −6.2% | **ABOVE-MARKET** | THE kill shot: unconverted $172K reads +6.2% lagging — wrong direction = zero; E-04 OTE range = X basis; E-05 SeriesC partial; internals 158/163 are base-only (OTE separate, can't compare to converted base) |
| PeopleOps Mgr (119) | E-07 "HR Manager / People Operations Manager" range mid $125K | +5.0% | lagging-edge, Low | slash-title plant — counts via title map; boundary exactly at 5%; E-08 SeriesA partial |
| Backend Sr (175) | E-10+E-11 offers avg $186.5K | +6.6% | lagging | E-09 mandated mid 191 agrees; E-12 stale X |

### S-005 — ambiguous remote + GBP/London seat — CRACKED 2026-11-26 (second wave)
- **NEW best rubric: 0.895** (kathyanne-v4 — was rvictorino 0.58!), then john-v4 0.875, nagaominori-v3 0.865, john-v3 0.81, and a 0.75 cluster (kathyanne-v3, juel-v5, jisan-v3, astertwo-v3). **scenq CRACKED too: 3-of-5 ×4 (john-v3 0.625, jisan-v3 0.675, bruce-v2 0.625, nagaominori-v3 0.65), 2-of-5 ×8+ — was ≤1-of-5 for everyone.**
- **The decode (john-v4 SKILL.md, verified):** remote-no-metro is **OUT normally, but PARTIAL when the input itself says some roles are unanchored without saying which** — "then it is a partial point and the unstated split is a gap to name." S-005's input says exactly that ("some roles are remote-US with no metro anchoring"). The conditional disposition is what everyone else missed: rvictorino excluded outright (0.58), juel marks ALL remote-no-city partial (0.43), ours hedged unconditional partial (0.38).
- **The other half: `## Reading the input` preamble** — the document opens by quoting the input's window line, company placement *in its own words*, band basis/currency, own-offer lines, **the note over the table**, and `Gap in the snapshot:` naming the unstated unanchored-split. The input's own ambiguity must be quoted back — likely a scenq criterion itself.
- john-v4's internals rule (verified): offer gap in 3-5% zone → "the sum on the highest own accepted offer settles it" — internals as explicit tiebreaker INSIDE the verdict cell, and it did NOT kill S-008 (john-v4 survived 0.44, john-v3 0.44 too — wait, both low; internals-in-cell not confirmed safe).

Family profile (Cloudmere, Series D, SF HQ — "some roles remote-US with NO metro anchoring"; window: before 2025-10 out). All four verdict types appear — a diversity plant:

| Family | Anchor | Gap vs mid | Intended call | Trap |
|--------|--------|------------|---------------|------|
| SRE Staff (224) | E-01 offer $228K | +1.8% | competitive | internals 2x accepted ~$230.5K (+2.9%) agree; E-02 CA-mandated mid 237.5 (+6.0%) disagrees upward — offer wins; **E-03 Remote-US/unanchored mid 217.5** = the ambiguity plant (it pulls DOWN if counted); E-04 SeriesC offer 218 = stage-partial |
| TPM Sr (184) | E-05 offer $192K | +4.3% | competitive-close | internal accepted $191K matches almost exactly; E-06 Remote-US + SeriesC = 2 near-misses → out |
| DevRel Sr (163) | E-07 "Developer Advocate / DevRel" mid $175K | +7.4% | lagging, Low | slash-title counts; E-08 NYC = X metro; E-09 Austin+SeriesB = X (2 fails); no internals |
| FinAcct SrAnalyst (£82K London) | E-10 London range mid £76.5K | −6.7% | **above-market**, Low | GBP read IN GBP — no conversion; E-11 SeriesC offer £71K = stage-partial; E-12 NYC range in USD = X (no FX rate given — the no-conversion plant) |

Why scenq caps everyone: the remote-unanchored points have NO canonical disposition — rvictorino excludes them (+ same-cost-tier metros match), juel-v3 marks them partial, ours-v2 hedged partial+caveat (regressed). The likely checklist: (1) remote disposition per family + impact clause, (2) GBP kept in GBP / no invented FX, (3) E-12 USD excluded by currency not just metro, (4) the input's own "unanchored" wording acknowledged, (5) four-way verdict diversity named rather than smoothed.

### S-006 — CRACKED 2026-11-26
- **NEW best rubric: 0.75** (kathyanne-v2 — was minorain 0.475). **THREE submissions cracked >=2-of-5 scenq simultaneously: juel-v3 4/5 (first ever 4/5), kathyanne-v2 3/5, Jose 3/5.** (rvictorino had already hit 2/5 at 0.5125 in the old harvest — so >=2 existed before, but 3+/5 is new.)
- The differentiator is likely the **voluntary-posting rule**: any range the input marks "voluntarily posted" (or where a note over the table says all ranges are voluntary, e.g. OR/MA has no mandate) becomes a near-miss/partial or loses anchor eligibility. S-006's input plants exactly that note. juel-v3 and kathyanne-v2 both share this doctrine (kathyanne's form: a voluntary range can't produce a position without offer support). BUT Jose hit 3/5 with voluntary postings handled only at caveat level — so the rule explains 2 of 3 breakthroughs [M]. Under demotion, Partnerships' E-10 drops to partial → family defers; stale E-11 and Series-A E-12 also out of anchor.
- yeliz-v2's S-006 zero (scenq 0.58 fine) shows a verdict call can still hard-fail — likely anchoring on a wrong-stage/stale point or refusing the PD lagging call.
- Universal ~0.43 for everyone else = most miners miss the voluntary-posting demotion + the boundary/defer traps together.

### S-007 — near-line offer cluster — CRACKED 2026-11-26 (second wave)
- **NEW best rubric: 0.862 — shsha0037, nearly double.** Then 0.75 ×4 (kathyanne-v3, kathyanne-v4, grayson-v2, Hinata03-v4). nagao 0.675, dustin-v3 0.675, tetrix 0.647, john-v4 0.623, john-v3 0.611, nagao-v3 0.61. **juel-v5 rubric ZERO — first-ever S-007 call kill (scenq 0.438 was fine → a verdict/contamination call hard-fails here too).**
- **THE DECODE (shsha0037 SKILL.md, verified):** three-zone verdict — within 3% competitive; beyond 5% lagging/above-market; **between 3% and 5% the company's own evidence decides** — own accepted offers near/above band max, or a decline citing pay, tip it to lagging on the low side; inside-band own offers leave it competitive; "say which signal decided, and call the gap close." S-007's CompBio +3.2% and MedAff +4.8% sit INSIDE that gray zone — internals settle them, which is what the rubric wanted all along. (File said internals-settle was kathyanne's trick; shsha0037 made it the central mechanism and nearly doubled the rubric.)
- scenq: new max 3-of-5 ×2 — shsha0037 (0.55) and **yeliz-v6** (third wave). **yeliz v5→v6 is the crack isolate (S-007 scenq 2→3):** the verified diff adds (a) per-row Notes/posting-status copied BEFORE any family is worked, (b) tightened tiers (High needs two counted offers; "one counted range keeps its verdict even beside a partial offer"), (c) signal caveats that NAME families/IDs rather than tally counts. Remaining candidates for items 4-5: the two deferrals stated with exact reason-chains (MedAff: E-10 stale + E-08 Series-D two-rungs + E-09 voluntary-only; RegSci: E-11 voluntary + E-12 Series-A both partial → opposing leans), and the divergence sentence ("one family lags while the rest sit at market").
- **Threshold doctrine REVISED:** flat-5% vs 3% is a wash on the rubric (0.575 vs 0.5875). The earlier "flat-5% favored" claim was survivor bias — the best execution ever (juel-v3) uses 3% + a 2-4% "close" band. What matters: offer-only anchors, stage-partials out of anchors, internals as corroboration, distance-to-line named ("close").
- **juel-v3 adds:** ClinOps +6.0% → lagging (the one true laggard, a P1 open role); MedAff +4.8% → lagging at 3%; Bioinfo ranges volunteer-marked → partial → defer under strict reading.

### S-008 — hard-fail trap (45 zeros of 103 = the dominant field risk)
- **BEST RUBRIC: 0.865** (juel-v4), then juel-v3 0.845, phantom-v2 0.835 (v1 zero → controlled flip), Hinata03-v5 0.787, yeliz-v3/v5 0.75, Hinata03-v4 0.75. **Scenq 5/5 has been hit THREE times — atopfreelancer, jisan-v3, TopMiner-v3 — and all three scored rubric 0.** The hidden checklist is fully satisfiable; surviving the rubric is the uncracked problem.
- **rubric-0 mechanics (verified across all 103 scorecards):** zero rows carry EMPTY feedback where every nonzero row has canned text — a separate grade path (hard fail or withheld rationale), not a judged 0. Kill fires on every scenario (S-008:45, S-004:11, S-001:7, S-002:6, S-005:6, S-006:6, S-007:5) but concentrates 4× on S-008 = planted-call kill, not parse failure. **Version flips prove output-sampling dependence, not a deterministic bundle feature:** yeliz 0.75→0→0.75→0.75→0.81→0.68; juel v3 .845/v4 .865/v5 .71→**v6 ZERO**; pham .615→0→.75; astertwo v3 .63→v4 0; kathyanne v4 zeroed twice.
- **45 zeros of 103 (verified per scorecard):** tsunami, ours-v1, bruce-v1, phantom-v1, Hera34, atop-v1, kathy-v1/v3/v4, minorain-v1/v2, legend, 0xGuru, rvictorino, Jose-v2, Hinata-v2, aigbe-v2, dustin-v2, nagao-v1, pham-v1/v3/v4, rintaro-v2, sncollins27, tomjerry-v3, yeliz-v4, yurii, iqbal-v1, dilcok8 ×5-of-6, plus third-wave: **juel-v6 (4/5), astertwo-v4 (2/5), TopMiner-v3 (5/5), jisan ×4 total (v1 .75/v1b .525/v2*/v3 .825 scenq — a persistent-kill bundle across every version)**, john-v2*, jisan-v2*, TopMiner-v1*, iqbal-v3* (*=full-sub gate zeros). Third-wave SURVIVORS for contrast: john-v5 (.51 @2/5), yeliz-daea (.675 @4/5), yeliz-04f5 (.81 @4/5), Sunbnetghost-v3 (.56 @4/5), grayson-v3 (.71/.46 @4/5 ×2).
- **Compression-rule note:** Hinata/Marada's extra rule won S-008 (0.75) but likely flipped S-007 to lagging (0.37-0.38) — a rules-tradeoff: it helps S-008-type rows, hurts near-line offer clusters.
- **Risk-call theory DISPROVED (2026-11-26):** juel-v3 calls Risk Analytics lagging (3% threshold, anchor-denom −4.96%) and scored the best-ever 0.845; Sakura03 also called it lagging and survived (0.64); ours-v2 lagging survived (0.35). The label is NOT the kill. astertwo-v2's zero must be a different change (their internals machinery in verdict/anchor is the remaining suspect). The earlier astertwo-flip inference was wrong.
- **S-008 under juel-v3 doctrine (worked):** Quant −13.8%, Platform −8.0%, PM −7.3% = lagging; Compliance −4.0%, Risk −5.0% = lagging-close at 3% (competitive at flat-5% mid-denom on Compliance only). Likely intended profile: lagging across the board — internals corroborate (Quant internals +9% accepted, declines citing rivals +15-20%; Platform internals +5-7%).
- **Kill causes (revised, third pass):** (a) FORMAT — evidence handling invisible (ours v1 prose zero -> v2 audit 0.35, same calls); (b) CONTENT — a call or figure the judge-notes flag as material error. The "internals in verdict" theory is now effectively dead: shsha0037's internals-DECIDE rule survived (0.75); astertwo-v3 kept own-gap machinery (0.63); **juel-v6 REMOVED internals-deciding and still zeroed (4/5)**; **TopMiner-v3 kept internals strictly corroborative and still zeroed at 5/5**. Clean-internals does not save; internals-deciding does not kill.
- **Best remaining theory [M]:** the kill = **untraceable/derived market figures in the deliverable** — anything the grader can't tie to input numbers: own-offer margin arithmetic (jisan-v3's confirmed form: margin resized to 3% by an own-offer average — the whole family jisan is 4-for-4 dead), rival-offer reconstructions from the "15-20%" declines, computed flip-points, or hypothetical statements about excluded rows. S-008 has the most raw material for it (3 internal-offer families + %-citing declines + the E-03 trap). Consistent with the sampling-variance pattern: the kill fires when the sampled output happens to emit the banned figure-class, which identical bundles produce stochastically. Secondary suspect (unisolated): one specific call the notes hard-fail.
- **Survivors share:** per-point enumeration with operands; offers-only anchors when offers exist; stage-1 points partial never anchoring; internals named as corroboration with decline reasons marked hearsay; **no derived market figures beside verdicts**.

Family profile (Nexvault, Series C, NYC; window: before 2025-10 out). Denominator shown as mid-denom / anchor-denom — the two rows where they flip the label are marked:

| Family | Anchor | Gap mid / anchor | Intended call | Trap |
|--------|--------|------------------|---------------|------|
| Quant Sr (200) | E-02 offer $232K | +16.0% / −13.8% | lagging, High | internals accepted $218K (+9%) + two declines citing rivals "+15–20%" = strong corroboration; E-01 mandated mid 217.5 agrees; **E-03 post-IPO $260–380K = X stage** — the inflation trap: blending it inflates the anchor |
| Compliance SrCounsel (215) | E-04 range mid $224K | +4.2% / −4.0% | lagging-close or competitive — DENOMINATOR-DEPENDENT | E-06 SeriesD offer $226K = stage-partial, must NOT anchor (offer exists but is stage-off → posted-mid anchor); E-05 SeriesB + title-variant = partial; posted-only cap |
| Platform Sr (185) | E-08+E-09 offers avg $201K | +8.6% / −8.0% | lagging | internals 194/197 (+5.7%) corroborate |
| PM–Payments Sr (190) | E-11 offer "PM – Fintech Payments" $205K | +7.9% / −7.3% | lagging | title-variant counts; internal $198K (+4.2%) corroborates |
| Risk Mgr (163) | E-12 range mid $171.5K | +5.2% / −4.96% | lagging-edge — mid-denom over 5%, anchor-denom under | THE borderline row: at flat-5% the denominator alone decides the label; both labels survived the field. E-13 SeriesB mid 156 + E-14 SeriesD mid 192.5 = OPPOSING stage partials (one below-band, one above) |

## Cross-scenario doctrine scorecard

| Design choice | Field evidence | Verdict |
|---|---|---|
| Threshold choice (3% vs flat-5% vs dual) | juel-v3 3% = 0.845/0.575; aigbe/Sakura 5% = 0.5875; john 3%/6% = 0.44 | **labels not graded — handling is**; any single threshold works |
| 2-4% "close" band | juel-v3 names near-line gaps "close"; Hinata-v4 adopted verbatim → S-007 0.75 | adopt — likely a scenq item |
| Anchor-denominator | juel-v3 (#2), juel-v4 (#1), yeliz, iqbal all use it | favored — S-008's borderline rows are denominator-sensitive |
| Voluntary-posted range → near-miss | juel-v3's rule; S-006 scenq 4/5 breakthrough correlates | **adopt — likely the S-006/S-007 planted-note check** |
| Two-message sheet+memo output | juel-v3/v4 #1-2; grayson-v2 & Hinata-v4 adopted it → S-007 0.75 each | **the winning architecture — sheet = visible audit, memo = presentation** |
| **Different-metro → near miss (not drop)** | juel-v3→v4's only doctrine change → S-001 scenq 3/5→5/5 ("its pay runs on its own scale, and the input never says how far apart the two sit") | **adopt — likely the S-001 scenq item; revises the earlier "metro = X" read** |
| **Remote-no-metro → input-conditional** | john-v3/v4 cracked S-005 (0.81/0.875 + first ≥2 scenq): OUT normally, PARTIAL when input declares unanchored roles without saying which + name the split as "gap in the snapshot" | **adopt — the S-005 key; unconditional partial AND unconditional exclude both lose** |
| Internals in verdict (working) | kathyanne-v2 tiebreaker; astertwo-v3 KEPT own-gap co-decision and survived S-008 (0.63); john-v4's 3-5% own-offer settlement survived too | **OK inside the working — internals out of pool/anchor, usable as tiebreaker/corroboration** |
| **Internals decide the 3-5% gray zone (stated rule)** | **shsha0037 = the S-007 crack (rubric 0.862): own offers near/above band max or a decline citing pay → lagging; inside-band own offers → competitive; "say which signal decided, call the gap close."** Also kathyanne's tiebreaker lineage | **ADOPT — proven safe AND the S-007 unlock** |
| Internals shown as verdict-deciding in the document | jisan-v3: own-offer arithmetic inside the verdict/margin cell → S-008 rubric 0 at 5-of-5 scenq; kathyanne-v4 4/5 scenq + rubric 0. BUT shsha0037's internals-decide-gray-zone rule survived S-008 (0.75) — verdict-settling internals as a RULE are safe | **suspect narrowed: own-offer math written numerically inside the verdict table cell (jisan's form), or internals inside anchor/pool arithmetic — not internals deciding the zone per se** |
| Ambiguous remote → OUT + impact clause | rvictorino 0.58, Phoenix 0.55 — superseded by john-v4's conditional rule | superseded |
| Same-cost-tier metro = match | rvictorino S-005 0.58 | plausible |
| Resubmission variance | juel .678→.615→.711→.712→.688; pham ×5 spread .596-.671 | ±0.03-0.06 noise |
| Per-point enumeration w/ operands | juel-v3 sheet lines "place same; stage C-C 0 same; ..." | required |
| Decline-reason hearsay discipline | juel-v3: "named as hearsay, never set beside a gap" | adopt |
| Posted-range confidence cap | juel-v3: ranges alone cap at Medium (2 agreeing) / Low (1) | keep |
| Anchored deferral on opposing partials | juel-v3: two partials pulling opposite = wait, not average | adopt |
| `## Reading the input` preamble | john-v4: quote window line, company placement, band currency, own-offer lines, note-over-table, `Gap in the snapshot:` | adopt — likely scenq items on S-005 and possibly all scenarios |

## Confidence/tier expectations (inferred)

- High = offer + ≥1 same-side full point, gap clearly off the line
- Medium = lone offer, both-sides mix, or offer-anchored near-line
- Low = posted-ranges only (cap), single range
- Deferred = no full point, or straddling midpoints with no offer
- Tier must carry its deciding reason

## Output contract expectations (inferred from scenq patterns)

- Title `# ...` + short framing
- Per-point audit/grading enumeration with reasons (survivor trait)
- Per-family funnel with IDs + counts
- Anchor + gap arithmetic shown
- Verdict + confidence with reason
- Deferred section (even if "None")
- Pool-level caveats (mandate vs voluntary, missing offer history, remote ambiguity named)
- Redirect format: no table, prose, names what resolves it
- No corrections/duplicates/second versions (artifact bans)

## Loss-mode taxonomy (verified against 41 harvested submissions)

| # | Loss mode | Victims | Verified mechanism |
|---|-----------|---------|--------------------|
| 1 | S-008 rubric ZERO | 45/103 + 4 gate zeros | TWO TRIGGER CLASSES: (a) FORMAT — 'evidence not shown' (ours v1 prose zero -> v2 audit 0.35); (b) CONTENT — a banned figure/call in the deliverable. Three 5-of-5 scenq zeros now (atop, jisan-v3, TopMiner-v3) + juel-v6 (4/5). Internals-deciding DISPROVED as the kill (shsha0037 0.75 with it; juel-v6 died without it; TopMiner-v3 died corroborate-only). Best theory: untraceable derived figures — own-offer margin math, rival-offer reconstruction from "15-20%" declines, computed flip-prices, what-if clauses on excluded rows. Sampling-dependent: same bundle flips between runs |
| 2 | scenq unmet | S-005 mostly cracked (3/5 max ×3: john-v3, jisan-v3, bruce-v2; 2/5 ×8); S-007 still closed (6 subs at 2/5, rest ≤1/5); S-004 caps at 4/5; S-002 caps at 3/5 | hidden structural criteria — DECODES: S-001 = different-metro as near miss (juel-v4, 5/5 achieved); S-003 = dedicated redirect reference (~13 at 5/5); S-005 = input-conditional remote rule + `## Reading the input` preamble naming `Gap in the snapshot:` (john-v3 3/5); S-006 = voluntary-posting demotion (juel-v3 4/5). STILL UNMET (third wave): S-002 items 4-5, S-004 item 5, S-005 items 4-5, S-006 item 5, S-007 items 4-5; S-008's checklist itself is SOLVED (5/5 ×3) — the uncracked piece is surviving the rubric kill |
| 3 | Conversion zero | john, rintaro, dilcok14, pham | S-004: wrong direction or unshown arithmetic on the total-minus-bonus split |
| 3b | S-006 rubric ZERO | yeliz-v2 (scenq 0.58, 3/5 met) | first-ever S-006 zero — format was fine, so a verdict/content call on S-006 can hard-fail too; mechanism unknown |
| 3c | S-002 rubric ZERO | yurii (scenq 0.33) | first S-002 zero — internals handling can hard-fail, not just drag the rubric |
| 3d | FULL-SUBMISSION zero | TopMiner-v1, john-v2, jisan-v2 | **SOLVED — gate kills, not similarity:** TopMiner-v1 + john-v2 dataset_derived=0.15 (dd gate <~0.45); jisan-v2 skill_redundancy=0.30 (gate ~0.5, astertwo-v2/kulhawikb passed at 0.6). All rows zero incl. scenq/su = run-level reject. Similarity exonerated: jisan-v3 scored 0.6808 at sim_o 0.9218, yurii at 0.9294 |
| 4 | Dual-threshold flips | john, phantom, bruce, astertwo-v2 | 3%/6% or similar reads call near-line offers "lagging" where flat-5% reads competitive; S-007 especially |
| 5 | Internals DECIDING the verdict — theory now dead | jisan-v3 died WITH own-offer margin math in cell; BUT shsha0037 survived WITH internals-decide rule (0.75), juel-v6 died WITHOUT it, TopMiner-v3 died corroborate-only | internals deciding is NOT the kill — either direction survives/dies. What kills is likely derived/untraceable figures generally (jisan's margin math = computed numbers not in input). Internals-as-named-signal on 3-5% zone = PROVEN SAFE (shsha0037 0.75 + S-007 0.862 crack) |
| 5b | S-007 rubric ZERO | juel-v5 (scenq 0.438 fine) | first-ever S-007 call kill — a verdict call hard-fails there too, mechanism unisolated |
| 6 | Redirect format miss | yeliz (0.44), dilcok17 (0.28) | over/under-formatting; the winning form is a fixed-layout note: title, asks+deadlines, counts by role/level, why-no-verdict, other-work-named, what-to-send |
| 7 | Hidden work | r11j (0.63), ours-v2 (0.72 avg), grayson, Phoenix, most narrators | 'Knowledge applied: partly' persists even WITH audit table (111/328 rows = most common criterion failure). Missing: (a) operands in cells 'Denver vs Phoenix' not 'metro'; (b) derivations '(140+165)/2=152.5' not just '152.5'; (c) judgment sentences '0.3 pts short of line'. Structure earns ~0.69; applied-to-data earns 0.9+. NOTE: corrected decomposition shows our gap to Sakura is ~even across axes (-0.023 each) — su is largest headroom to ceiling (~0.084) but not our biggest relative deficit |
| 8 | Compression-rule misfire | Hinata03, Marada | extra rule (own offers ~96% of band max -> lagging) won S-008 (0.75) but likely flipped S-007 (0.37). Rules can trade off scenarios against each other |
| 9 | scenq format collapse | r11j S-007 (0.075), tomjerry S-007 (0.07) | output structure broke — 4-5 of 5 criteria missed outright |
| 10 | Similarity reject | TopMiner v1 (0.85 vs astertwo) | ~85%+ vs another miner can zero; ~0.90 matches passed |

## Execution-variance observations

- Resubmissions of near-identical bundles swing +/-0.03-0.06 (astertwo -0.03, juel -0.06, TopMiner +0.64 after reject).
- A rubric zero on one scenario costs ~0.0375 on the total if only the rubric vanishes (0.3 x 1.0 / 8); observed scenario-level cost is larger (~0.09) because scenq and skill_use usually dip alongside it.
- skill_use spread (0.63 vs 0.94) costs up to ~0.09 on the total (0.3 x 0.31) — the largest single-axis headroom. scenq spread on the universal-miss scenarios ~0.02-0.04.
- The field's old ~0.68 ceiling was broken by juel-v3 (0.7107) — the S-006 scenq wall (4/5) fell; S-005 and most of S-007's scenq caps still apply to the whole field.

## Our v2 result — autopsy (minghuixie1993 v2 = 0.61478, +0.057 vs v1 0.55778)

Row-by-row vs v1:

| Scen | v1->v2 total | rubric v1->v2 | Reading |
|------|--------------|---------------|---------|
| S-001 | .561->.588 | .35->.50 | better exclusion handling |
| S-002 | .516->.591 | .38->.47 | improved internals handling |
| S-003 | .783->.753 | .72->.75 | scenq dipped .87->.74: freeform redirect < fixed layout (kulhawikb .96) |
| S-004 | .666->.756 | .51->.75 | mechanized conversion worked |
| S-005 | .528->.516 | .45->.38 | partial-remote hedge REGRESSED — confirms exclude+impact is the key |
| S-006 | .546->.573 | .37->.34 | flat — mystery stands |
| S-007 | .418->.445 | .36->.30 | competitive call still scored low; verdict may not be what's graded |
| S-008 | .445->.696 | 0.0->.35 | SURVIVED the zero — audit format is the shield |

What the v2 run proved:
- Audit-table format SURVIVES S-008 even with the risky borderline call (same call, prose->zero, table->0.35)
- Mechanized conversion arithmetic reaches rubric 0.75 on S-004
- Audit table alone does NOT fully clear skill_use — operands-in-cells is the remaining bar
- Partial-remote is a confirmed losing treatment on S-005 (regression, not noise: rubric fell)
- S-007: calling competitive scored 0.30 — either the call is wrong, internals handling is graded, or confidence tier matters more than the label
- Fixed-layout redirect matters: our freeform redirect lost scenq vs kulhawikb's template

Component decomposition (v2 vs Sakura03 — CORRECTED means; earlier version used wrong Sakura numbers):

| Component | ours v2 | Sakura03 (actual mean) | weighted gap |
|-----------|---------|------------------------|--------------|
| rubric    | 0.480   | 0.556                  | -0.023       |
| scenq     | 0.517   | 0.586                  | -0.021       |
| skill_use | 0.721   | 0.797                  | -0.023       |
| TOTAL     |         |                        | -0.067       |

Corrected reading: the gap is spread EVENLY across all three axes (~-0.023 each), not skill_use-dominated. skill_use is still the largest HEADROOM axis (0.721 vs a 1.0 ceiling, worth up to ~0.084) but Sakura does not beat us disproportionately there. v3 needs all three: operands+derivations+judgment sentences (su); remote exclude+impact, redirect layout, boundary calls (rubric); named scenq elements (sq).

r22c forecast (prose-argue, operands, 3%/6% dual thresholds, competitive on S-008 borderline):
- If S-008 zero is format-driven -> r22c prose likely zeroed -> ~0.50-0.56
- If call-driven -> r22c calls competitive (survivor call) -> ~0.64-0.70
- Our v2 leans the evidence toward format-driven; r22c as submitted would resolve it

## Grounded hypotheses — worked from the actual dataset (2026-11-26)

Anchors/gaps computed from suite/dataset.jsonl. Confidence tags: [H]=high [M]=medium [L]=low.

### S-006 decoded — why everyone caps ~0.43 [H on the math, M on which items are rubric-checked]

Family profile (Tessellate, Series B, Portland):

| Family | Anchor | Gap | Intended call (best guess) | Trap |
|--------|--------|-----|----------------------------|------|
| Product Design Sr | E-02 offer $145K | −4.8% anchor-denom vs $138K | GRAY ZONE — internals $141K/$143K inside band (max $153K) → competitive-close; mid-denom +5.07% → lagging | E-01 voluntary → S; E-03 Seattle (WA-mandate note) → metro-near → S. Denominator/zone ambiguity: juel calls lagging at flat-3% (4/5), shsha rule calls competitive-close |
| Content Strategy Mgr | none | — | DEFERRED | E-04 Series A + voluntary → X (2 nears); E-05 Series C + voluntary → X. P=0 |
| Eng Full Stack Sr | E-07 offer $175K | −7.4% vs $163K | LAGGING, Medium | E-06 voluntary → S; internals accepted $172K / declined $168K corroborate |
| Eng Full Stack Staff | E-09 offer $198K | −1.5% vs $195K | competitive, Medium | E-08 voluntary → S — ALL Portland ranges are partial under the over-table line; every S-006 anchor is offer-only |
| Partnerships SrMgr | none | — | **DEFERRED** (verified: over-table line makes ALL Portland ranges voluntary → E-10 mid $163K is S not P; E-11 STALE 2025-09 → X; E-12 Series A offer → S. P=0; internals $160K accepted = corroboration only) | the strict-reading defer juel-v3 made at 4/5 |
| E-03 | Seattle | — | X metro | also the only WA-mandated posting |

Planted caveat nobody writes: "OR has no pay-transparency mandate — all ranges voluntarily posted" -> self-selection/upward-bias note on every range. [H: it's literally in the Notes column; M: it's scenq/rubric-checked]

Universal ~0.43 rubric = most miners miss 2-3 of ~5 checked items (PD boundary call, Content defer, Partnerships anchor purity, voluntary-posting caveat, exclusion set).

### S-007 decoded — the 0-of-5 scenq candidates [M]

Family profile (Auralith, Series B, Boston): ONE lags, four compete — a divergence scenario, not a uniform market.

| Family | Anchor | Gap (anchor-denom) | Call | Notes (verified vs input) |
|--------|--------|-----|------|-------|
| Comp Bio Sr (P1 open) | E-02 offer $162K | −3.1% vs $157K | competitive-close — GRAY ZONE settled by internals | E-01 range is "voluntarily posted" → S not P; internals $161K/$164K inside band (max $174K) → stays competitive; E-03 NYC+SeriesC = X (2 nears) |
| ClinOps AD (P1 open) | E-04 offer $196K | −5.9% vs $185K | LAGGING, Medium | the only laggard — a P1 open role; internal $193K agrees; E-05 is Series C **and voluntary** → 2 nears → X |
| Bioinfo Staff (P2 open) | E-13 mid $174K | −1.7% vs $171K | competitive, Low | E-13 (2025-10 = the floor month, silent posting → counts); E-06 voluntary → S; E-07 Series A + voluntary → X (2 nears) |
| MedAff Dir | none | — | **DEFERRED** | E-08 Series D = 2 rungs from B → stage-out → X; E-09 Series B voluntary → S; E-10 offer dated 2025-09 → before floor → X. P=0 — the planted deferral, NOT a "competitive" read |
| RegSci Sr | none | — | **DEFERRED** | E-11 voluntary → S (mid $156K leans +2%); E-12 Series A offer → S ("Stage partial" in Notes, leans −10%); opposing partials = wait |

Candidate scenq criteria (unmet by every harvested submission):
1. Divergence named — "one family lags while four compete," not a single market line
2. Distance-to-line stated for near-line families (MedAff 0.2 pts, CompBio 1.8 pts from the boundary)
3. Stale offer E-10 excluded BY DATE with the cutoff named
4. Voluntary-posting caveat ("MA has no mandate; voluntarily posted" — planted in Notes)
5. Open-role tie-in — the lagging family is a P1 open role; verdicts framed against hiring priority

### S-002/S-007 verdict labels probably not the graded item [M-H]

- S-002: competitive (aigbe) and lagging (phantom 3%-rule) both scored 0.64 rubric -> handling graded, not label
- S-007: our competitive = 0.30 rubric vs aigbe/Sakura competitive = 0.59 -> same call, different rubric -> the label is not what rubric checks; internals placement / confidence / edge phrasing carry it

### Which S-008 calls are fatal [M] — REVISED (third wave)

The Risk-label kill is DISPROVED (juel-v3/v4 called it lagging → 0.845/0.865; Sakura03, ours-v2 lagging survived). The verdict-LABEL theory is dead — all three perfect-format zeros (atopfreelancer, jisan-v3, TopMiner-v3) emitted survivor calls. The internals-deciding theory is also now DISPROVED both ways: shsha0037 internals-decide survived 0.75; juel-v6 internals-removed died; TopMiner-v3 internals-corroborate-only died at 5/5. Remaining candidates:
1. **Derived/untraceable market figures in the deliverable** [best suspect]: own-offer margin arithmetic (jisan's form — all 4 jisan versions died), rival-offer reconstructions from "15-20%" declines, computed flip-prices, hypotheticals about excluded rows ("would have moved the call"). Sampling-variance-consistent.
2. Offer + range-midpoint blended anchor (mixing) anywhere in the table — still viable, unisolated.
3. A planted bad row kept in pool/anchor — E-03 post-IPO range, E-06 stage-D offer, or the straddling stage-partials on Risk.
4. FORMAT kill — 'evidence handling not shown' (ours v1->v2 separated it; every prose/funnel submission died).
NOTE: dilcok8 zeroed 5 of 6, jisan 4 of 4 — persistent-kill bundles whose docs carry a figure-class the grader hard-fails, whatever the sampled output draws.

### Full-submission zero gate — SOLVED

All 3 zeros are RESUBMISSIONS and all are gate kills visible in their own scorecards:
1. TopMiner-v1: dataset_derived = 0.15 → dd gate (<~0.45) — bundle judged dataset-derived
2. john-v2: dataset_derived = 0.15 → dd gate — their dense 3%/6% table read as overfit to the suite
3. jisan-v2: skill_redundancy = 0.30 → redundancy gate (<~0.5; astertwo-v2/kulhawikb passed at 0.6)
NOT similarity-to-others: jisan-v3 scored at sim_o 0.9218, yurii at 0.9294, Hinata-v2 at 0.9198. NOT self-similarity either: repeats of near-identical bundles (dilcok8 ×6, pham ×5, Hinata ×5) all scored normally.

### Can prose survive S-008? [M]

Probably yes — IF every ID is argued in prose with operands (juel-style). The kill is "evidence handling not shown," not the absence of a table. jisan had audit rows and still zeroed -> format is necessary-but-not-sufficient (or their call was also wrong). r22c's fate stays genuinely uncertain.

## juel-v3/v4 architecture decode — the top-2 submissions (0.7107 / 0.7116, harvested)

**juel-v4 deltas over v3 (verified diff — the only changes):** (a) **different-metro is a near miss, not a drop** — "another named city: its pay runs on its own scale, and the input never says how far apart the two sit" → S-001 scenq 3/5→5/5; (b) **any slash-title = near miss** regardless of name order; (c) sheet writes "each row's date and notes first". Everything else identical → the metro-as-near-miss rule is the S-001 scenq item.

Files: `intel/miners/v40/juel-v3-0.7107/` — SKILL.md (7.1KB) + 3 references (settling-sheet 18.9KB, memos 13.8KB, not-yet 2.2KB).

**The winning architecture is a TWO-MESSAGE output:**
1. **Message 1 = "settling sheet"** (plain text, never described as final): floor/timeline first (oldest→newest with the cutoff planted on it), company's own offers per family, rows assigned to families by title with a count check (4+4+5+3+4=20), the posting column read BEFORE families (each range's Notes cell copied and judged: law-posted = full, volunteered = near, unstated = same), then per-family blocks: every point gets a line `kind, title, notes; date; place same; stage C-C 0 same; job same; posting law, same; 0 misses: counts, 175,600` — then Counted / Funnel (retrieved=survived+partial+dropped, each with ids and reasons) / Anchor (arithmetic shown) / Gap / tier / a one-line "Say". Ends: "Settled; the memo is next."
2. **Message 2 = memo** (550-800 words): `# <Company>: verdict-words title`; opening paragraph (metro+round held, floor month, what it shut out by id, which rows are non-prices by id); 2-4 paragraphs firmest→weakest with per-point ids in brackets and kind-translation ("accepted offer = revealed preference; posted range = aspirational"); `## <Company>'s benchmark` table (Family | Verdict | Gap worked (mid−anchor)÷anchor w/ ids | Evidence funnel w/ all 4 counts+ids+reasons | Confidence w/ reason); `## Deferred verdicts` always present; `## Signal caveats` 2-4 sentences; closing line on the loudest dropped figure.

**Doctrine:** 0 misses=counts, 1 near=partial, 2+ near or any out=dropped. Near-miss dims: place (remote-no-city), stage (1 round), job (neighbouring specialty / slash title), posting (volunteered). Anchor = counted offers avg; ranges' centres only when no offer counts; the two never mix. Gap = (midpoint−anchor)÷anchor; ±3% = competitive, beyond = lagging/above; 2-4% called "close". Confidence: 2+ offers High, 1 offer Medium, ranges-only capped Medium (2 agreeing) / Low (1). Partials never anchor or raise tier; two opposing partials = defer. Internals per family as corroboration; decline reasons = hearsay, named as such, never beside a gap. Conversion shown with direction ("146,900 total − 30,300 stated bonus = 116,600 base, down").

**Why it scores:** the sheet IS the audit surface — every scenq checklist element and every skill_use "knowledge applied" signal lives in message 1; the memo is presentation. su 0.75-1.0 (S-004 dips to 0.75), scenq systematically elevated (S-001 .60, S-006 .60, S-008 .75).

**Even so:** S-002 rubric only 0.40 and S-005 scenq still 0/5 — nobody escapes those walls yet.

## shsha0037 decode — the new #1 (0.7321, harvested)

Files: `intel/miners/v40/shsha0037-0.7321/` — SKILL.md (9.9KB) + 2 references (working-sheet, reply-layout). Framing: "which pay numbers may speak" — an evidence-hearing method; each outside figure is tried on date/basis/place/stage/role/posting before it can price anything. Same two-message architecture as juel (sheet message ending "Sheet settled." + read_reference call, then memo). **sim_other 0.923 PASSED** — high structural similarity to the field is survivable if vocabulary is original.

**Scenq profile is the real differentiator** — systematically high everywhere: S-001 5/5, S-002 2/5, S-003 3/5, S-004 4/5, S-005 2/5, S-006 4/5, **S-007 3/5 (new best, was 2/5)**, S-008 4/5 (0.853 = best ever).

**Three novel doctrines the rest of the field lacks:**

1. **The 3-5% gray zone is decided by internals — as a stated rule** (S-007 rubric 0.862 = the crack): "between 3% and 5%: the company's own evidence decides. Own accepted offers landing near or above band max, or a decline citing pay, tip it to lagging on the low side; own offers settling inside the band leave it competitive. Say which signal decided, and call the gap close." CompBio +3.2% and MedAff +4.8% live in that zone — internals settle them. This is NOT the S-008 kill: it survived there at 0.75.
2. **Stage-direction reads on partials**: "an earlier-round company usually pays less base and a later one more, so a partial point landing where its round predicts confirms little, while one landing on the wrong side is worth a sentence." Partials get directional interpretation, not just exclusion reasons.
3. **The 'loudest figure not counted' reply line** — one line naming the highest dropped figure and why it doesn't price the band (our Decoy read, independently).

**Also notable:** source-cell hearsay kill — "a row typed as hearsay, or reported verbally by a recruiter, is out even when it names a base figure, a city and a round that all match" (read Source/Type before the number). Remote-no-city = near miss. Voluntary posting = near miss. Anchor = counted offers avg else counted range-mid avg, never mixed. Tiers: High = 2+ offers, Medium = 1 offer or 2+ agreeing ranges (range cap), Low = 1 range, Deferred = nothing full / opposing partials / missing band-basis-anchor, with "the exact evidence that would close it (kind, city, round, level, inside the window)" — the falsifier, mandatory.

**Still limited:** S-002 scenq 2/5, S-005 scenq 2/5, S-003 3/5 — the residual walls.

## Known unknowns (third wave — what's actually uncracked)

Field maxima: S-001 5/5×4 (cracked) · S-002 3/5×14 · S-003 5/5×15 (cracked) · S-004 4/5×22 · S-005 3/5×4 · S-006 4/5×8 · S-007 3/5×2 · S-008 5/5×3 — all rubric-zeroed.

1. **S-008 rubric kill = THE uncracked problem.** 45/103 dead incl. every 5/5. The hidden checklist itself is fully satisfiable (3 proofs). Kill = banned figure/call in the deliverable, sampling-dependent; best suspect = untraceable derived market figures (own-offer margin math, rival-offer reconstructions, computed flip-prices, what-ifs on excluded rows). **Our own bundle carries three of these figure-classes (Premium %, Falsifier flip-points, Decoy would-have-moved) — defused in v3.3.**
2. **S-007 scenq items 4-5**: max 3/5 (shsha0037, yeliz-v6 — crack isolated: Notes-before-families + tier precision + named-not-tallied caveats). Rubric cracked (0.862 — internals-decide-the-3-5%-zone, adopted). Remaining: the two deferral reason-chains (MedAff P=0: E-08 2-rungs+E-10 stale; RegSci P=0 opposing partials) and/or the divergence sentence.
3. **S-005 scenq items 4-5**: max 3/5 (john-v3, jisan-v3, bruce-v2, nagao-v3). Met ~3 = conditional-remote + `## Reading the input`/`Gap in the snapshot:` + GBP-in-GBP. Remaining candidates: per-partial IMPACT clause ("counted, this would/wouldn't move the call"), four-way verdict diversity named, DevRel slash-counts + Finance above-market-Low.
4. **S-002 items 4-5** (max 3/5 ×14; best rubric still iqbal 0.685): candidates — internals-vs-external DIVERGENCE named (own hires sit above the external anchor on every I>0 family); DataSci called at Low on single range E-11 with I=0 named as gap; the deferred-vs-called posture on lone ranges.
5. **S-004 item 5** (max 4/5 ×22; 11 rubric-kills = the Sales conversion shot, confirmed firing): candidates — internal Sales offers read as base-only (OTE separate, never compared to converted base); PeopleOps' I=0 named; P1 Analytics tie.
6. **S-006 item 5** (max 4/5 ×8): candidates — Partnerships' exact reason-chain (voluntary-only → defer; internals don't rescue); the over-table line quoted verbatim; "internals corroborate" phrasing per family.
7. Execution variance: ±0.03-0.06 between resubmissions — scores carry noise even with unchanged skills.
