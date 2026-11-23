# Challenge v36 — M&A Due Diligence Signal Classification

- **Challenge ID:** fc18aa7d-0f98-414b-82d6-6c22fcc53a8d
- **Opened:** 2026-11-09 17:00 UTC · suite v36 · ~10 public scenarios
- **Task:** classify public signals on an acquisition target into must-address / deeper-diligence / monitor / noise → table + count line + cross-signal check + 3 short paragraphs. No go/no-go, no numeric scores.
- **Scoring:** scenario_quality 30% (sealed refs) + rubric 30% + skill_use 30% + novelty 10%; weight-0 gates: dataset_derived, skill_alignment, skill_redundancy.
- **Leader at submit time:** astertwo 0.91857 (SKL-da66); takeover needs >= 0.9286 (best + 0.01).
- **Harness:** `tools/run_eval.py <bundle_dir> [idx...] [--grade]` · `tools/run_variant.py <bundle_dir> <out_dir> [--grade]` — suite files resolve from `<bundle>/..` or `<bundle>/../suite`.
