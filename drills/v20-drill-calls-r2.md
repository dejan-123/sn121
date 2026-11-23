# v20 drill run 2 — planted-call enumeration (2026-11-12, blind)

Deliverable: full coaching table + anomaly brief. Flags: time-in-stage,
sandbagging, stale activity, forecast-category mismatch, missing fields,
coverage math (3x norm). Contamination: prior drill S-001..S-003 glimpsed.

## S-001 (as-of 9/15; Discovery override = 45d)
- Horizon $320K Discovery entered 7/20 = 57d > the 45d OVERRIDE → flag (must
  use override, not default). AND close 9/30 while still Discovery =
  stage-vs-close structural mismatch. AND last activity 8/18 = 28d. Triple.
- Northvault $740K Neg Commit close 9/19: next step "Demo scheduled Aug 28"
  is PAST = stale/broken next step; a demo inside Negotiation = stage-
  evidence mismatch; Commit on a lapsed next step = category risk.
- Silverline $210K Proposal close 9/22, next step "—" missing + silent 16d =
  missing field + near-close silence → anomaly.
- Cedarstone $290K Evaluation since 7/1 = 76d = time-in-stage.
- Alpine owes revised pricing = dated deliverable.
- Coverage/attainment: Adaeze $800K remaining vs $830K open = 1.04x, and the
  only Q3 close is the triple-flagged Horizon → attainment impossible, name
  it. Marcus covered ONLY by flagged Northvault $740K. Yuki $400K vs Sep
  closes $185K+$210K=$395K → short even at 100%.

## S-002 (NO as-of date)
- THE call: missing anchor datum → date-dependent analysis CANNOT run. Do
  not silently pick an anchor and do not quietly produce a full table.
  Produce date-independent findings + name the blocked checks + ask for the
  date. (v20 lesson: a declared assumption fails the same as a silent one.)
- Date-independent flags that survive: Granite $340K Proposal Commit +
  "awaiting budget approval" = category mismatch; Skyward next step "—"
  missing; Ravine concentration (77% of Priya's open pipe in one deal);
  Bex 1.18x coverage thin; Terraform SQL + Best Case = aggressive category.
- Blocked: all staleness, sandbagging, close-imminence checks.

## S-003 (as-of 9/22; NO quota; NO stage-entry dates)
- Name the blocked checks: coverage (quota absent — as asked) AND
  time-in-stage (no stage-entry dates) — name them, don't silently skip.
- Maplewood $57K Proposal close 9/25 (3d), silent 22d, next step "—", Best
  Case = top anomaly (near-close silence + missing field + category).
- Parallax Studio ARR "—" = missing field, can't size.
- Westfield close 9/24 Commit, call 9/23 = on-track near close.
- Aquifer $88K Commit 9/30 CFO reviewing = documented wait → watch.
- Pebble Creek owes SOW by 9/25 = dated deliverable.

## S-004 (as-of 9/10; Pacific; no quota)
- The planted pattern: Leila's ENTIRE book is giant Discovery deals with
  imminent closes — Crimson $890K (71d in stage, closes 9/25, Best Case),
  Wavecrest $670K (62d, closes 9/30, Best Case), Sunrise $1.1M (57d, closes
  10/15). Either stage field is stale (record hygiene at scale) or the
  forecast is fantasy → flag the REP-LEVEL pattern, not just three rows.
  Discovery + Best Case = category mismatch on Crimson/Wavecrest.
- Terrace $530K Evaluation 40d, Best Case = borderline watch.
- Bluebell owes CFO pricing answers = deliverable.
- Kestrel $380K Neg Commit close 9/22, markup sent 9/9 = on-track.
- No quota → note it; no coverage math.

## S-005 (as-of 10/5; Closed deals in export)
- Pacific Union Closed Won $310K + Central Crane Closed Lost $220K in an
  OPEN-pipeline export = exclude from open pipe/coverage; report separately;
  don't let them inflate coverage or count in Q4 open.
- Orbital $175K: stage-entry 9/20 AFTER last activity 9/15 = impossible
  ordering = record flag; AND "follow-up email sent" one-sided ≠ touch →
  effective silence ~3wk.
- Crestwood $410K Discovery + Best Case = category mismatch.
- Northshore $280K Neg Commit 10/20, MSA sent 10/4 = on-track.
- Quorum owes revised proposal = deliverable.
- Coverage: Fiona $550K vs $475K open = 0.86x → cannot cover even at 100%.
  Devraj $480K vs $725K = 1.5x thin.

## S-006 (as-of 8/20; sandbag override 45d close/14d no-activity/not-Commit)
- Valley Creek $145K Proposal Best Case close 9/10, silent since 8/5 = 15d:
  under the OVERRIDE (45d window, 14d silence, not Commit) = sandbagging.
  Under the 30d default it would pass → using the override IS the test.
- Silverstone $230K Proposal Commit close 9/15, next step "waiting for
  Silverstone sign-off" = passive/vague next step — Commit resting on
  unprompted customer action = category-risk flag even though Commit exempts
  it from the sandbag rule.
- Highline $290K Neg Commit close 8/28, legal Friday = on-track.
- Olympic $180K Evaluation since 7/1 = 50d = time-in-stage.
- Fairway $410K Discovery "feedback awaited" = passive note → mild.
- Coverage: Kwame $420K vs $505K = 1.2x thin; Renata $350K vs $845K = 2.4x
  below 3x → thin.

## S-007 (as-of 11/3; partial quota)
- Quota only for Tamsin → compute HER coverage ($1.2M vs $1.33M = 1.1x thin;
  Q4 closes = Midland 11/20 + Quadrant 12/31) and explicitly say Gregor's and
  Pilar's can't run.
- Delta Crane $310K Proposal COMMIT, last activity 10/8 = 26d, "customer
  requested legal review" = stale + early-stage + Commit resting on
  customer-side action = category mismatch → top anomaly.
- PrairieView $720K Neg Commit close 11/15, "awaiting board ratification" =
  passive next step on external gate = Commit-risk flag (structural, fresh
  activity doesn't save it).
- Rockdale $265K Evaluation silent 33d + internal deliverable overdue = stale.
- Midland $950K Neg Commit 11/20, contract w/ GC = documented wait, on-track.

## S-008 (as-of 7/14; Espejo anomalies)
- Espejo $520K Evaluation Commit: close 7/1 in the PAST + pulled forward
  twice while stage never advanced = INWARD DATE-PULL integrity anomaly —
  manipulation flag, not progress. Exclude from coverage/sort until the real
  date is resolved; ask for it. The planted call of the scenario.
- Andean $480K Neg Commit close 7/31, "waiting for CFO pricing approval",
  silent 14d = passive wait + Commit → category-risk/sandbag-adjacent flag.
- Cordova "exec sponsor review pending" = passive → watch.
- Coverage: Valentina $700K vs $860K on paper but Espejo is date-broken →
  real coverage $340K = 0.49x critical. Omar $650K vs $945K = 1.45x thin.
- Aguila on-track; Sierra intro today clean.

---

## GRADING vs v20-KEYS (run 2)

| S | score | what landed | what missed |
|---|-------|-------------|-------------|
| 001 | HIT- | override-on-Discovery-only, coverage arithmetic, Silverline, stale next-step | **Northvault mechanism: 13d is ONE DAY UNDER threshold yet at-risk on 4-day close — I flagged it but didn't name the threshold-edge explicitly** |
| 002 | HIT- | hard stop + date-independent partial output + ask (exact) | **missed secondary test: non-standard stage names (SQL/POC/Contract) → propose mapping WITH confirmation, not silently** |
| 003 | PARTIAL | named blocked checks, Maplewood top anomaly, Parallax missing ARR | **Aquifer: "CFO reviewing" + 14d EXACTLY at threshold + 8-day close → at-risk; I suppressed as documented wait — WRONG DIRECTION. Also wanted qualitative coverage + quota request, not just "can't run"** |
| 004 | HIT- | rep-level pattern (all-Discovery + imminent closes), category mismatch | wanted each deal explicitly AT-RISK via structural incompatibility (not "stalled") + "Leila's Q3 forecast effectively zero" stated unprompted; and discriminate: this is NOT sandbagging (activity is recent) |
| 005 | HIT- | closed-deal exclusion, Orbital one-sided ≠ touch + impossible-ordering find (extra), coverage ratios | **Crestwood: clean metrics + vague next step ("stakeholder mapping in progress") = at-risk — I flagged category mismatch instead. Also "pipeline-generation vs coaching" framing** |
| 006 | PARTIAL | Valley Creek sandbagging under override, Silverstone Commit-on-passive → at-risk, Highline on-track | **Fairway under-flagged: "feedback awaited" w/ no owner+action+date = full at-risk, not "mild". Missed team-wide pattern: 5/6 deals have passive/absent next steps** |
| 007 | HIT | Tamsin-only coverage + can't-compute + request, PrairieView board-gate → at-risk, Delta Crane rep-side failure → top anomaly | — |
| 008 | HIT | Espejo past-date = pre-table structural flag, exclude from coverage/sort, inward-pull = manipulation signal | — |

**Run-2 score ~75%** (run 1: ~65%). Dominant residual family:
suppression-overfiring — "documented wait"/"Commit"/"clean metrics" excuses
overrode structural escalation on Aquifer, Fairway, Crestwood.
