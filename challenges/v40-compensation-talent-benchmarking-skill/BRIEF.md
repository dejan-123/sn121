# Challenge v40 — Compensation Talent Benchmarking Skill

- **Challenge ID:** 898ac791-4621-4c1a-869c-62f8d517fab4
- **Status:** active, `submissions_open: False` — opens **2026-11-25T17:00:00+00:00 UTC**; closes TBD
- **Scenarios:** 8 (S-001..S-008)
- **Task:** "Produce the benchmark table" — given an internal headcount/band snapshot + a classified external evidence table, narrate competitive position per role with evidence-confidence tiers.
- **Window:** this analysis is pre-open prep — suite dropped ~24h before submissions open. Do all hour-0 work NOW; fire at T+0.

## Scoring (suite.yaml)

| Grader | Weight | Model |
|---|---|---|
| skill_use | .30 | **anthropic/claude-sonnet-4.6** (NEW — was haiku-4.5) |
| scenario_quality | .30 | sonnet-4.6 |
| rubric | .30 | sonnet-4.6, temp 0 |
| novelty_check | .10 | — |

Gates identical to v39: skill_redundancy ≥.5, skill_alignment >.45 (threshold .55 in extractor config), dataset_derived >.45. Same limits: SKILL ≤10,000B raw, ≤30 refs, ≤32K chars each, ≤128K total, md/txt/json/yaml/csv.

**Model change is the headline:** every LLM judge is now sonnet-4.6. Set `MODEL=anthropic/claude-sonnet-4.6` in tools/.env for local fidelity — the "haiku is a lower bound" assumption no longer holds; the judge is a *stronger* model, likely sharper on semantic dataset-derived detection and naturalness, and the rubric explicitly calibrates harsh ("below 0.4 freely; do not gravitate to 0.8").

## The task grammar (from rubric.txt — the declared threat model)

1. **Verdicts only from the surviving comparable pool.** Wrong verdict where deferral was correct, or a verdict stated against the raw pool → contextual_judgment capped .25.
2. **Basis conversions:** correct direction, ONLY rates supplied in the input. Wrong direction or **fabricated rate** = material error (no FX rates are given anywhere — never convert GBP/USD).
3. **Posted ranges vs offers:** weight appropriately, state the distinction (offers = revealed preference; posted = aspirational; mandated vs voluntarily-posted distinction named).
4. **Stale/undated/out-of-window points: excluded AND counted** (the exclusion must be visible).
5. **Edge conditions handled WITHOUT being pre-named:** equity structure, contractor rates, retention grants — adaptability caps .5 for generic handling.
6. **Missing data named as gap, not filled. Figures not in input → low-band cap** (anti-fabrication).
7. **is_trap flag exists** — rubric's example maps exactly to S-003 ("producing a benchmark table from input that does not qualify").
8. **Concision:** repeated pool-wide caveats per row penalized; verdicts must stay legible.

## Comparability filter — the five axes every evidence point must pass

| Axis | Rule | Planted tests |
|---|---|---|
| Role/level | Title variants count if scope-mapped | S-002 E-07 "Senior Software Engineer (backend)" scope-note = IC4 match; "Dev Advocate/DevRel"; "HR Manager/People Ops"; "Senior Legal Counsel (Fintech)" vs Compliance Counsel |
| Geo | Anchored metro only; remote-US only when role is unanchored | NYC/Denver/Seattle/Austin plants in every non-local scenario; S-005 finance = London GBP only |
| Stage | Same-stage primary; ±1 secondary; far stages excluded | S-008 E-03 Public/post-IPO ($260–380K — the inflation trap); S-001 E-09 Late Growth/Series E; Series A/C/D points flagged "1 stage below/above" throughout |
| Recency | Inside stated window | S-001 18mo; rest 12mo "before Oct 2025"; boundary: S-007 E-13 dated 2025-10 = IN, E-10 2025-09 = OUT; S-004 E-12 2025-09 OUT; S-006 E-11 2025-09 OUT; undated = out |
| Evidence type/basis | Offers > posted; hearsay low; non-FTE/non-base excluded | Hearsay (S-001 E-01), undated unnamed survey (S-001 E-10), contractor $95/hr (S-002 E-13 — non-FTE, do NOT annualize), retention-grant TC no breakdown (S-002 E-05), OTE posted (S-004 E-04 — not base), TC→base only when breakdown supplied (S-004 E-06: $172K incl $20K → $152K), GBP unconverted (S-005) |

Plus: **internal offer data** counts as evidence (accepted = revealed preference; declined = directional market signal — S-001 CS declined "below current comp", S-008 QR two declined citing "15–20% higher").

## Judge questions — per scenario ("does X AND avoid Y")

| ID | Action half | Restraint half |
|---|---|---|
| S-001 | Verdicts from Austin pool (E-03/04/08/11/12 + internal offers incl. declined signal) | No NYC/Denver/Series-E/undated-survey-driven calls; hearsay ≤ Low |
| S-002 | Chicago pool; E-07 treated as IC4-mapped comparable; Data Sci = posted-only → thinner tier | Exclude grant TC, contractor rate (no annualization), stale E-08, NYC |
| S-003 | **Decline the benchmark** — no classified data; give what the record supports (internal dispersion read) + name what resolves it (classified external evidence) | **Redirect the band-redesign ask** — don't produce a 3-level band or market numbers from nothing. THE free scenario (rubric names it) |
| S-004 | Seattle pool; OTE/TC handled — E-06 converts to $152K base using the supplied breakdown | E-04 OTE not compared to base; stale E-12 out; no invented OTE→base conversion for the posted range |
| S-005 | Per-role anchoring: Remote-US points for unanchored roles, SF for anchored, GBP-only for London | No GBP↔USD conversion (no rate given); NYC-USD finance point out; Austin DevRel point out |
| S-006 | Portland pool; voluntary-vs-mandated distinction stated; declined-offer signal noted | E-11 (2025-09) out of window; posted≠offer weighting |
| S-007 | Boundary mastery — E-13 (2025-10) IN, E-10 (2025-09) OUT; NYC excluded; ±1 stage as secondary | Med Affairs Director: one voluntary posted range survives → thin/Deferred-leaning, not a confident verdict |
| S-008 | QR verdict from C-stage pool + declined-offer pressure (market above band) | **E-03 post-IPO range excluded** (the headline trap); ±1-stage secondaries weighted down, not dropped |

## Coin-flip ledger (pre-write both verdicts; patch pre-built if wrong)

1. **±1 stage points:** keep as secondary/Low-weight (default — the "1 stage below/above" notes read like deliberate invitations) vs exclude entirely.
2. **Remote-US in S-005:** primary for unanchored roles (default — "no metro anchoring" is explicit) vs excluded as too broad.
3. **Hearsay (S-001 E-01):** Low-confidence keep (default — tiers include Low) vs exclude like the survey.
4. **Declined offers:** directional evidence of clearing price > offer (default) vs non-evidence.
5. **S-003 redirect:** give the internal read + required-data list (default) vs pure refuse with nothing.
6. **S-005 DevRel:** SF-posted-only pool → Low tier (default) vs Deferred.

## Trap-family mapping (§5a catalog)

Stale/undated ✓ (E-12 S-004, E-11 S-006, E-08 S-002, survey S-001) · Boundary date ✓ (S-007 2025-09 vs 2025-10) · Wrong-record-kind ✓ (contractor, retention grant, OTE-as-posted, GBP) · Threshold/stage ✓ (post-IPO, Late Growth) · Geo-mismatch ✓ (every scenario) · Hearsay ✓ (S-001 E-01) · Out-of-scope ask ✓ (S-003 band redesign) · Deferral ✓ (S-003 + thin pools) · Non-pre-named exclusion ✓ (rubric says so) · **New families:** basis-conversion direction, posted-vs-offer weighting, declined-offer-as-signal, no-FX GBP.

## First-submission doctrine applied

- Deliverable contract: per-role verdict + confidence tier + surviving-pool citation + exclusions-counted line; one pooled caveat block, not per-row repeats (rubric's communication trap).
- Contract shape: practitioner-memo family (su=1.0 proven), NOT the coined-vocab scout frames. Verdict vocabulary = standard tiers High/Medium/Low/Deferred — that's the rubric's own vocabulary, use it verbatim.
- Worked examples: per WORKED-EXAMPLES.md — a clean multi-axis filter case, a thin-pool defer case, a conversion case (supplied-breakdown only), and the redirect/refusal shapes. Invent all companies/figures; comp-benchmark domain is close to the suite's so invented data must NOT mirror its structure (different table shapes, different evidence types).
- First submission early on ONE hotkey; probe exception only if a coin-flip gates a whole scenario (±1-stage handling is the leading candidate).

## Pre-open checklist for v40

- [ ] `MODEL=anthropic/claude-sonnet-4.6` in tools/.env (or pass per-run)
- [ ] OPENROUTER_API_KEY pasted — required for generation + naturalness judging
- [ ] `check_naturalness.py --calibrate` re-run once on sonnet (judge model changed)
- [ ] Judge questions above reviewed; coin-flip alternatives written down
- [ ] Bundle: SKILL.md ~10K practitioner voice + ONE reference (filter rulings + worked filter/defer/redirect cases)
- [ ] Alarm for open 2026-11-25 17:00 UTC; submit first file at open, not after
