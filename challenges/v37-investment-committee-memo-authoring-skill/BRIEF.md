# Challenge v37 — Investment Committee Memo Authoring Skill

- **Challenge ID:** 34663eb2-d5b5-481a-8502-c6c242bad602
- **Opened:** 2026-11-12T17:00:00+00:00 UTC · **Closes:** 2026-11-14T17:00:00+00:00 UTC
- **Task:** Draft an IC memo for an M&A acquisition from 3 pasted artifacts
  (risk table w/ Tier+Status, financial narrative, comparables dataset).
  10 scenarios, sealed keys — CALLS.md holds the enumeration + splits.
- **Scoring:** suite.yaml = identical stack to v36: sq .3 / rubric .3 /
  skill_use .3 / novelty .1, all judges anthropic/claude-haiku-4.5 temp 0.
  Gates: redundancy ≥0.5, alignment >0.45, dataset_derived >0.45.
  Rubric caps: proceed-despite-unresolved-must-address ≤0.25; arithmetic
  must match multiple×base; thesis primary risk must appear in risk table;
  comp multiple requires named in/exclusions; fabrication floors sample.
- **Leader at submit time:** TODO — GET /submissions?challenge_id=34663eb2-d5b5-481a-8502-c6c242bad602
- **Harness:** `tools/run_eval.py <bundle_dir> [idx...] [--grade]`
