# v20 blind drill — Devin run (2026-11-12)

Written BEFORE reading drills/v20-KEYS.txt. Task: coaching table (per-deal
flags: time-in-stage, staleness, forecast mismatch, structural risk) +
anomaly brief (rep-level, pipeline-level, coverage, data hygiene).
Default norms assumed: coverage ~3x, activity thresholds, time-in-stage.

## S-001 — EMEA, as-of 9/15, Discovery override 45d
- Horizon: 57d in Discovery (>45 override) + close 9/30 in Discovery =
  structurally unmeetable + "awaiting intro" vague → flag hard.
- Northvault: Negotiation but next step "Demo scheduled for Aug 28" =
  PAST-dated next step + stage/next-step contradiction (demo in
  Negotiation) + Commit 13d silent closing 9/19 → headline anomaly.
- Silverline: next step "—" missing + 16d silent + close 9/22 → at-risk +
  hygiene.
- Cedarstone: 76d in Evaluation → likely time-in-stage breach.
- Coverage: open $2.35M vs quota $1.8M = ~1.3x << 3x → flag.
- Alpine fine; Irongate active-but-watch (close 9/18, legal Friday).

## S-002 — NO 'as of' DATE → hard stop
- Every date-dependent check (staleness, time-in-stage, close imminence,
  coverage-vs-deadline) is uncomputable → STOP + targeted ask for the
  as-of date. Do NOT assume a date (declared assumption fails the same).
- Date-INDEPENDENT findings only: Skyward missing next step; Ravine
  Contract+Commit fine structurally; per-rep open totals (Bex $1.065M,
  Priya $810K) vs quotas; note which checks are blocked pending the date.

## S-003 — SMB, as-of 9/22, NO quota + NO stage-entry dates
- Name both limits: coverage uncomputable (no quota); time-in-stage
  uncomputable (no entry dates) — do not fabricate.
- Aquifer: Commit + 14d silent + "contract under CFO review" + close 9/30
  = Commit resting on unprompted customer action → category-mismatch flag.
- Maplewood: next step "—" + 22d silent + close in 3d → at-risk + hygiene.
- Coastal Drone: 21d silent. Pebble Creek: rep owes SOW by 9/25.
- Parallax: ARR "—" missing → exclude from totals + hygiene flag.
- Westfield: call 9/23 imminent → watch, fine.

## S-004 — Pacific, as-of 9/10, no quota
- LEILA CLUSTER = the planted anomaly: three huge Discovery deals
  (Crimson 71d, Wavecrest 62d, Sunrise 57d in stage) all closing
  9/15–10/15 = unmeetable closes + time-in-stage breaches + rep-level
  stale-stage/sandbagging pattern → $2.66M of fantasy-dated Discovery.
- Marco's deals healthy (Kestrel active Commit; Terrace 40d eval ok;
  Bluebell rep-owed CFO answers → mild).
- The anomaly brief should name the rep-level pattern, not just per-deal.

## S-005 — APAC, as-of 10/5, Closed Won/Lost in export
- Exclude closed deals from open pipeline; count Won $310K toward
  attainment, Lost $220K as pipeline change — name the handling.
- Orbital: "demo follow-up email SENT 9/15" = one-sided activity, no reply
  in 20d → effective staleness; sent ≠ touch → at-risk anomaly.
- Coverage: open $1.2M vs quota $1.03M = ~1.17x << 3x → flag.
- Northshore fine (MSA sent 10/4). Others OK.

## S-006 — Northeast, as-of 8/20, CUSTOM sandbagging override (45d close +
  14d no-activity + not-Commit)
- Valley Creek: close 9/10 (21d), last act 8/5 (15d), Best Case → TRIPS
  the override → sandbagging flag. Apply the custom threshold, not default.
- Silverstone: Commit but next step = "waiting for sign-off" — unprompted
  customer action → category-mismatch flag despite yesterday's activity.
- Olympic Paper: 50d in Evaluation → time-in-stage breach.
- Fairway: "feedback awaited" = passive next step → hygiene flag.
- Highline active (call 8/21). Coverage $1.35M vs $770K = 1.75x → flag.

## S-007 — Central, as-of 11/3, PARTIAL quota (Tamsin only)
- Coverage computable ONLY for Tamsin: $1.33M vs $1.2M = 1.1x → flag;
  Gregor/Pilar uncomputable — say so.
- PrairieView: Commit + term-sheet signed but "awaiting board
  ratification" + close 11/15 = external gate on unknown calendar →
  structurally at-risk despite yesterday's activity → Commit-confidence
  flag. Structure overrides thresholds.
- Delta Crane: Commit resting on customer's requested legal review + 26d
  silent → category mismatch.
- Rockdale: rep owes POC criteria doc, 33d silent → stale + owed.
- Quadrant: "awaiting feedback" = passive → hygiene.
- Midland: GC circulating = documented wait → watch (flag lightly).

## S-008 — LATAM, as-of 7/14, Espejo past-date + double inward-pull
- ESPEJO = headline anomaly: close 7/1 in the PAST + pulled forward twice
  (9/30→8/15→7/01) while stage stays Evaluation + still Commit =
  inward date-pull integrity/manipulation flag; EXCLUDE from coverage &
  commit until the date is resolved. Do not silently compute on it.
- Andean Cloud: Commit + "waiting CFO pricing approval" (unprompted
  customer action) + 14d silent + close 7/31 → category mismatch.
- Sierra: stage-entry 6/30 but "intro call TODAY" = premature stage
  entry → hygiene flag (Discovery before first call).
- Aguila active. Cordova passive-ish next step (mild).
- Coverage excluding Espejo: $1.285M vs $1.35M = <1x → flag; note the
  exclusion.

---

# GRADING (post-key) — blind score ~79%

S-001 ~88% | S-002 ~80% | S-003 ~80% | S-004 ~75% | S-005 ~65% | S-006 ~70%
S-007 ~85% | S-008 ~90%

## MISSES
- S-002: didn't propose SQL→Discovery / POC→Evaluation / Contract→Negotiation
  stage mapping WITH confirmation request — non-standard vocab needs an
  explicit mapping proposal, not silence.
- S-005: Crestwood "stakeholder mapping in progress" = weak next step →
  at-risk, I called it OK. Coverage should be PER-REP (Fiona 0.86x,
  Devraj 1.51x), not aggregate; frame as pipeline-GENERATION issue.
- S-006: Fairway "awaiting feedback" = at-risk via next-step quality alone
  (I said hygiene only). Missed the TEAM-WIDE pattern flag (5/6 passive
  next steps). Should affirmatively note Olympic Paper does NOT trip the
  sandbagging override (activity 2d < 14d).
- S-004: called Leila's cluster "sandbagging-ish" — key distinguishes:
  NOT sandbagging (activity too recent) but at-risk via close-date
  incompatibility = forecast-discipline problem. Name the right pathology.

## RULE WEAKNESSES FOUND (v20)
1. Passive next-step alone = AT-RISK class, not hygiene flag (metrics can
   all be green).
2. At-threshold-exactly → say "borderline" then ESCALATE via close-date
   incompatibility; don't skip the borderline label.
3. Cross-deal patterns are themselves scored findings: name rep-level /
   segment-level patterns explicitly.
4. Coverage is per-rep; missing quota → qualitative coverage + explicit
   request, never skip the section.
5. Non-standard vocabulary → propose mapping + ask confirmation.
6. Mixed overrides: display the mixed set AND note who does NOT trip it.
7. Past-dated next step = effectively blank, not "documented".
8. Distinguish sandbagging vs structural-incompatibility pathology (recent
   activity can coexist with unmeetable close → at-risk, not stalled).
