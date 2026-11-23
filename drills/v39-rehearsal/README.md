# v39 day-0 rehearsal — revealed v34 as the mock drop

Purpose: rehearse the exact T−3h→T+0 sequence from `logs/STRATEGY-HISTORY.md`
under time pressure and convert the "~7/8 enumeration" claim into a measured
number. Suite: **v34 regulatory-obligation-delta-analysis** (10 scenarios, never
drilled). `dataset.jsonl` here is input-only — `ground_truth` stripped; the
answer key stays in `intel/past-challenges/v34-*/suite/dataset.jsonl`.

## Protocol (one sitting, timer running)

| T (min) | Step | Target |
|---|---|---|
| 0–10 | Read `rubric.txt` → write down fatal caps + deliverable contract | caps all listed |
| 10–60 | Read all 10 inputs → **run the ENUMERATION GATE per scenario** → answers sheet: every item keep/reclassify/absorb/park; mark CONFIDENT vs COIN-FLIP; write split table | ≤50 min |

## The enumeration gate — run BEFORE writing each call

The 2026-11-18 rehearsal missed 4/10 plants despite knowing every relevant
rule — the misses were checks never run, not knowledge absent. This gate is
mandatory per scenario; a call isn't written until its row is filled:

| # | Question | If yes → |
|---|---|---|
| G1 | Is every required input present? | Missing → STOP-and-ask scenario. Produce NOTHING, not even a tentative deliverable. Name the missing artifact + why reconstructing misleads. |
| G2 | Renumbering/rename in the map? | Single no-change row with `(was:)` notation — never deletion+addition. |
| G3 | Is the duty/trigger/scope itself new, or only content inside an existing duty? | Content-only (more items, more fields, more covered cases) → documentation tier, not substantive. |
| G4 | Is the practice already covered — by a prior general standard, or guidance cited IN the text/note? | Covered → clarification. External framework named only in the cover note does NOT count as coverage. |
| G5 | Did a threshold/deadline/scope value change? Which DIRECTION? | Tighter → expansion/Yes. Looser → withdrawn-relaxed/No. Direction is part of the label. |
| G6 | Can the texts resolve this call? | No → Review + one specific answerable question. Beats a committed wrong call. |
| G7 | Is the scored answer "nothing"? | Empty decisions set / stop / flag-only → declare it EXPLICITLY + rationale. Mirror: met calls still flag measurement gaps, stale updates, owner-derived numbers. |
| 60–105 | Fill 2 skeletons end-to-end (piero + one other) — description, class vocab, contract, invented example domain | ≤45 min |
| 105–120 | `run_eval.py --ollama` contract smoke on 1–2 scenarios + byte/similarity checks | ≤15 min |

Hard stop at 120 min — that is the real pre-open budget. Log actuals vs targets.

## Scoring (after the clock stops)

Reconcile the answers sheet against `ground_truth` in the revealed dataset
(input-by-input; use `ground_truth.output` + metadata rubric_descriptions /
judge_notes where present):

- **Call accuracy** = per-scenario planted calls correct / total planted calls.
  v38 measured ~7/8. The number to beat.
- **Which defect class** each miss belongs to (detection vs label granularity
  vs completeness vs venue).
- **Fill defects** = contract breaks the smoke test caught (missing section,
  redirect fired on a normal input, kept item dropped).
- **Example-safety check** = does any invented worked-example structure mirror
  a suite input? (dataset_derived rehearsal.)

## Output

Write results to `drills/v39-rehearsal/RESULTS.md`: per-scenario call table,
miss taxonomy, timing actuals, and the two filled skeletons kept under
`bundles/` for inspection. If call accuracy < ~85%, drill the miss family in
`intel/past-challenges/ANALYSIS.md` §5 before the real drop.

## Optional second run — low-ceiling mode

v29 (OKR goal-tracking, 6 scenarios, winner .784) is the prioritization family —
the low-ceiling case where early submission matters more. Same protocol; note
that ranking tasks split coin-flips on ORDER, not yes/no calls.
