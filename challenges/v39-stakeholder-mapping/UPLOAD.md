# v39 — Upload order & rulings ledger (authoritative)

Window: 2026-11-19 17:00 UTC → 2026-11-21 17:00 UTC.
Rule: read the similarity dialog % before confirming. Never confirm a warning.
Platform reads ~3pts above local — treat local 90 as the ceiling, 88 as comfortable.

## Wave 1 — ship STRONGEST FIRST (all live pairs ≤ 89.0 local)

Order rationale: all four are packed, so there is no "speed" file — the first
upload claims the earliest scoring slot and sets our takeover bar. That is
kelvin (the incumbent bid). Star goes last: it is the side-B hedge and the
thinnest file; if earlier dialogs reveal the platform reads hot, it is the
file we can afford to hold.

| # | Account | Zip | S-004 side | Notes |
|---|---------|-----|-----------|-------|
| 1 | kelvin | accounts/kelvin/v1-tally/submission.zip         | A | incumbent bid — strongest file; ref 13.0k, pull-list + precedence rules |
| 2 | astro  | accounts/astro/v1-two-passes/submission.zip   | A | biggest ref (13.7k); true side-A probe, case-3 contact-rich note→map |
| 3 | dragon | accounts/dragon/v1-sharpening/submission.zip    | A | 8.6k SKILL — precedence/"refuses" section; S-004 fingerprint removed |
| 4 | star   | accounts/star/v1-dispositions/submission.zip    | B | the hedge — redirect-only; max 87.0 vs live set; last so it can be held if dialogs read hot |

Fallback: `templates/v39/crown-grabber/submission.zip` (generic, packed).

Similarity matrix vs live set (local bundle sim):
- astro: dragon 89.0, knight 88.9, captain 87.8, star 87.0, kelvin 85.7
- dragon: astro 89.0, captain 87.1, knight 86.0, kelvin 85.8, star 85.3
- kelvin: knight 89.2, captain 86.8, dragon 85.8, astro 85.7, star 84.8
- star: knight 87.2, astro 87.0, toby 85.9, captain 85.6, dragon 85.3, kelvin 84.8

## Reserve / held

| Account | Status | Reason |
|---------|--------|--------|
| captain | endgame reserve — untouched, do not ship early | clean vs wave-1 (~85.6-87.8); conflicts only with piero 91.9 |
| knight | endgame reserve — untouched | 89.2 vs kelvin, 88.9 vs astro — borderline; ship only after dialogs confirm headroom |
| toby | held | 90.2 astro, ~90 knight, 91.9 piero — semantic plateau; Phase-3 material |
| piero | held | ≥91.8 vs every live file after full ref rewrite + 30% SKILL compression — plateau is semantic, not phrasing. Path back: v2 on the winning lineage's content post-scorecard. Cinema ref kept as v2 seed. |

## S-004 split — executed 3A + 1B + reserves

Side-A (redirect note first, then supported map when contact data exists):
astro, dragon, kelvin — clause + contact-rich worked example in each ref.
Side-B (note only): star, toby, piero, captain, knight.

## Rulings ledger (calls encoded in all files)

| Scenario | Call |
|----------|------|
| S-001 Veltrano $1.2M | Dagny champion w/ $500K ceiling → structural gap = dormant CFO Fernand, via Dagny never cold; CISO disengaged; questionnaire+VRA ours; VP Eng unmet → gap |
| S-002 Brindlewood $38K | Carsten signs alone → `no material gaps` + single-thread flag only |
| S-003 Orinthal $780K | Baxter mobilizer; Preethi passive — honest asymmetry; Olatunde VP Finance planted gap; Callista closed file |
| S-004 Kelstrom $2.4M | wrong-artefact → side-A: note then map / side-B: note only (split covers it) |
| S-005 Surenthis $510K | Hector sole access → mandatory `single-thread`; COO unmet, never cold |
| S-006 Thymebrook $3.1M | Daisuke engaged w/ CMO access; Valentina stale; CMO unmet gap; implied C-suite/board + procurement + legal chain |

Open coin-flips (resolve on first scorecard, patch the peak only):
- S-001 step order: procurement docs vs CFO-path first
- S-002 single-thread prominence on a clean deal
- S-003 sponsor: name Preethi with caveats vs honest "thin"
- S-004: which side scores (3A live + 1B covers it)

## Mechanics

- Tier/strength vocab differs per account — load-bearing, never harmonize.
- Refs are invented-domain; none mirror the six suite archetypes.
- After scorecards: patch the peak, propagate calls via this ledger, never rebuild.
