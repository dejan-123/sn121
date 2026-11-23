# v20 blind drill — planted-call enumeration (2026-11-12, before key)

Deliverable: coaching table + anomaly brief. Thresholds are stated or default;
flags: time-in-stage, sandbagging, stale activity, forecast-category mismatch,
missing fields, coverage math.

## S-001 (as-of 9/15; Discovery override = 45d)
- Horizon $320K Discovery entered 7/20 = 57d > the 45-day OVERRIDE = flag
  (must use override, not default). AND close date 9/30 (15d) while still in
  Discovery = stage-vs-close mismatch. AND last activity 8/18 = 28d silent.
  Triple-flag deal.
- Northvault $740K Negotiation, Commit, close 9/19 — but next step "Demo
  scheduled Aug 28" is IN THE PAST = stale/broken next step; a demo is also
  an early-stage artifact inside a Negotiation = stage-evidence mismatch.
- Silverline $210K Proposal close 9/22 (7d), next step "—" MISSING + silent
  since 8/30 (16d) = missing field + near-close silence.
- Cedarstone $290K Evaluation entered 7/1 = 76d in stage = time-in-stage.
- Coverage: Adaeze $800K remaining vs $830K open (1.04x, and the $320K is
  triple-flagged) = thin; Yuki $400K vs $490K open = thin; Marcus covered
  but dependent on the flagged $740K.
- Alpine owes revised pricing (deliverable).

## S-002 (NO as-of date provided)
- THE call: missing as-of date — every staleness/sandbag flag is
  conditional. Declare the anchor assumption explicitly (e.g., latest
  activity in export ~9/10, or use today's real date and say so); do not
  silently pick one. Flag which checks can't run.
- Granite $340K Proposal marked Commit while "awaiting budget approval
  decision" — Commit ≠ budget-pending = forecast-category mismatch.
- OmniPrint $275K POC, last activity 8/14 = ~4wk stale POC presentation.
- Skyward $190K SQL next step "—" missing.
- Terraform $450K at SQL stage carrying Best Case = early-stage deal with
  aggressive category (mild).
- Coverage: Bex $900K remaining vs $1.065M open (1.18x) thin; Priya $500K
  vs $810K (1.6x) but 77% of it is Ravine = concentration.

## S-003 (as-of 9/22; NO quota; NO stage-entry dates)
- Say plainly: quota unavailable (as asked), and time-in-stage checks CANNOT
  run — name the check that can't run rather than skip it silently.
- Maplewood $57K Proposal close 9/25 (3d), silent since 8/31 (22d), next
  step "—" missing = top anomaly.
- Parallax Studio Discovery, ARR "—" MISSING = can't size; flag.
- Westfield $120K Neg close 9/24 (2d) Commit, call 9/23 = on-track near
  close; Aquifer $88K Commit 9/30 = watch.
- Pebble Creek owes SOW by 9/25 = dated deliverable.
- Small pipeline = restrained flag count; don't manufacture anomalies.

## S-004 (as-of 9/10; Pacific; no quota)
- THE pattern: ONE rep (Leila) holds $2.66M across THREE Discovery deals —
  Crimson $890K entered 7/1 (71d), Wavecrest $670K 7/10 (62d), Sunrise
  $1.1M 7/15 (57d) — ALL far past any Discovery norm AND carrying close
  dates 9/25–10/15 = mis-staged pipeline or fantasy dates. Single-rep
  systemic anomaly, not three independent flags. Two marked Best Case.
- Kestrel $380K Neg Commit close 9/22 = near-close monitor.
- Terrace Evaluation, Bluebell Proposal = clean.
- Note missing quota; no coverage math.

## S-005 (as-of 10/5; APAC; Closed Won/Lost rows in export)
- EXCLUDE Pacific Union (Closed Won $310K) and Central Crane (Closed Lost
  $220K) from open pipeline and coverage — report as outcomes only.
  "Remaining quota" is already net of the win — do NOT credit it again.
- Orbital $175K: stage-entry 9/20 but last activity 9/15 — activity BEFORE
  stage entry = impossible ordering = data-integrity flag.
- Fiona coverage: $475K open vs $550K remaining = 0.86x = BELOW 1x, flag.
- Devraj: $725K vs $480K = 1.5x OK; Crestwood $410K Discovery as Best Case
  = mild category-forward note.
- Northshore $280K Commit MSA sent 10/4 = near-close watch.

## S-006 (as-of 8/20; sandbag OVERRIDE: ≤45d close + ≥14d silent + ≠Commit)
- Apply literally: Valley Creek $145K close 9/10 (21d), silent 15d,
  Best Case = SANDBAGGING hit under the override.
- Highline $290K Neg close 8/28 Commit = exempt by category (don't flag).
- Olympic $180K Evaluation entered 7/1 = 50d in stage = time-in-stage flag;
  active 8/18 so not sandbag.
- Silverstone $230K Proposal close 9/15 Commit "waiting sign-off" = Commit
  is defensible but it's Proposal stage — category-forward note at most.
- Everything else outside the 45d window or active — restraint.

## S-007 (as-of 11/3; quota for Tamsin only)
- PrairieView $720K Neg Commit close 11/15: "term sheet signed by VP,
  AWAITING BOARD RATIFICATION" — signed ≠ ratified: keep but flag the
  remaining gate with a name; do not treat as done.
- Delta Crane $310K Proposal Commit close 11/30 but "customer requested
  legal review" only now — Commit on a deal whose legal hasn't started =
  category over-statement.
- Partial quota: compute coverage for Tamsin ONLY ($1.33M vs $1.2M ≈ 1.1x
  thin); explicitly mark Gregor/Pilar coverage as N/A — no invented totals.
- Pilar (Mid-Market) holding an Enterprise-segment deal = mild data note.
- Pinecrest/Wildflower 2027 closes = future pipeline, fine.

## S-008 (as-of 7/14; Espejo close date 7/1 = past; pulled forward twice)
- Espejo $520K Evaluation, Commit, close date ALREADY PASSED + pulled
  FORWARD twice (9/30→8/15→7/1): this is not normal pull-forward — the
  deal missed a date it set itself. Diagnosis: the close date is
  unreliable; a POC-running Evaluation cannot retroactively close. Re-date
  to reality, question the dating behavior, and DO NOT count it in
  coverage at face value.
- Andean $480K Neg Commit close 7/31 (17d), silent since 6/30 (14d),
  "waiting CFO pricing approval" = stale Commit near close = flag.
- Valentina coverage: $860K/700K = 1.2x WITH Espejo, $340K/700K = 0.49x
  WITHOUT = show both readings.
- Aguila redlines out 7/12, Sierra intro today = clean.
