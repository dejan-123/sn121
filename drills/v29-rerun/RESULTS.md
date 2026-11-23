# v29 re-drill RESULTS — gate-applied enumeration vs revealed key

Run 2026-11-18, second blind run (prior drill scored ~55% pre-gate;
contamination disclosed: one-line theme spoiler seen in DRILL-RESULTS).
Method: rubric + all 6 stripped inputs blind, calls committed before key.

## Score: 4 HIT + 2 PARTIAL ≈ 83% (vs ~55% prior, vs 60% v34)

| S | Plant | Result |
|---|---|---|
| S-001 | met-milestone status-theater → verdict "met" + REQUIRED cadence flag | verdict right, flag missing → PARTIAL |
| S-002 | pace-table trap: KR2.2 on-track by ratio but deadline+dependency → at-risk | HIT (caught chain + 8/28 lock) |
| S-003 | scope-creep: redefined KR ≠ met; dependency-propagated CAC miss | HIT |
| S-004 | empty-set plant: correct decisions section is EXPLICITLY EMPTY | reasoning right, never declared → PARTIAL |
| S-005 | shared-resource collapse = one conflict; pace vs actual deadline | HIT (named 80/20 + wk8→10→11 chain) |
| S-006 | GREEN/"Passed" contradicted by significant finding → OFF-TRACK | HIT (+ Obj1 threshold not met) |

## The miss family — appears in BOTH drills now

**Undeclared absence.** When the scored answer is "nothing" — an empty
decisions set, a flag-only verdict, a clean stop — the analysis gets done but
the absence never gets DECLARED:

- v34 S-005: should have produced no table → leaned toward producing one
- v29 S-001: should flag cadence concern on a met KR → gave clean verdict
- v29 S-004: should state "no decisions required" explicitly → implied only

The corpus already held this law ("empty/zero outputs are scored answers")
— it is now confirmed as the single most expensive unfired rule: 3
occurrences, 2 suites, all same shape. This is what G7 below is for.

## Secondary observations

- Gate questions G1–G6 all fired; the two partials are post-analysis output
  decisions, not classification misses — the gap is at the WRITE step.
- Decision-count discipline (S-003 "exactly two decisions", S-006 "planning
  reset not escalation") unverified — my calls didn't enumerate the
  decisions set. Add: enumerate the decisions set explicitly per scenario,
  even when it's empty.
- Format contracts per scenario (plain text / ## markdown / JSON / ALL CAPS)
  are themselves scored — noted on all six; keep a contract line on the
  answers sheet per scenario.

## Gate patch applied

G7 added to `templates/v39/README.md`, `drills/v39-rehearsal/README.md`,
`STRATEGY-HISTORY.md`:

**ABSENCE CHECK — is the scored answer "nothing"?** Empty decisions set,
stop-and-ask, flag-only verdict: declare the absence EXPLICITLY ("no
decisions required — here is why"), never just produce analysis and omit
it. And the mirror: when something IS met, still flag measurement gaps,
stale updates, owner-derived figures, and cadence anomalies.
