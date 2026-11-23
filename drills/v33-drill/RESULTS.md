# v33 blind drill RESULTS — regulatory applicability triage, 2026-11-18

Method: blind enumeration of all 10 scenarios from input-only copy
(`dataset.jsonl` here), committed calls written before key check.
Key: `intel/past-challenges/v33-*/suite/dataset.jsonl` ground_truth.

## Score: 9/10 verdicts correct (vs ~74% on v34)

One miss: **S-2** — called "Applies"; truth is NEEDS-LEGAL-REVIEW.

## The miss — a new defect family, same root as S-3 (v34)

**Artefact-type blindness.** S-2's artefact is an *enforcement notice* with no
operative scoping clauses. There are no criteria to evaluate — the correct
output is the review verdict + ONE triage row, not a fabricated criteria
table. I applied generic checklist reasoning (territory ✓ sector ✓
authorisation ✓ → IN-SCOPE) and produced the deliverable the input couldn't
support. Root cause identical to v34 S-3's stop-condition miss: **when the
input doesn't support the deliverable, producing it anyway IS the trap.**

## Rule refinements banked from this run

1. **Artefact-type check runs FIRST.** Before any criterion row: does this
   input contain operative clauses the deliverable's criteria apply to? A
   notice/narrative with no scoping provisions → the review/escalate verdict,
   one triage row, no fabricated criteria. (Sibling of "missing required
   input → stop and ask.")

2. **Owned-Review applies only to verdict-DECIDING ambiguity.** S-4's Art 6
   RSA ambiguity was peripheral — Art 4(2) already killed scope cleanly, and
   elevating to NEEDS-LEGAL-REVIEW on the peripheral ambiguity is itself the
   scored anti-pattern ("ambiguity as hedge"). Rule refined: name the
   ambiguity + question ONLY when it decides the top-line verdict; when a
   clean kill exists, commit to the kill.

## What confirmed (transferred from banked doctrine)

- Group-structure nullification of entity-level exemptions: fired correctly
  twice (S-1 FTE, S-8 portfolio) — same trap family, caught both times.
- Thresholds as provision-delimiters, not instrument gates (S-3, S-5, S-8).
- External-reference verification without over-claiming: adopted schedules
  resolve High (S-1 Schedule B, S-9 Schedule 3); unpublished future delegated
  reg is a distractor when a current register listing exists (S-5).
- Reach-clause second limb: Reg 3(1) fails → check 3(2) before concluding
  (S-3); Art 1.1(b) predicate checked against profile attributes (S-0).
- Carve-outs read to their exact provision range (EPDC 8–12 not 13–16;
  Rule 4 covers Rules 9+11 only; Sec 10 covers Sec 14 only).

## Scorecard

| S | Call | Truth | |
|---|---|---|---|
| 0 | OUT (predicate fail + DMO fail) | OUT | ✓ |
| 1 | IN partial (exemption voided; EPDC partial) | IN | ✓ |
| 2 | Applies | NEEDS-LEGAL-REVIEW | ✗ |
| 3 | IN Sch1 | IN Sch1 | ✓ |
| 4 | OUT (human review; RSA peripheral) | OUT | ✓ |
| 5 | IN incl Part IV (570 aggregated) | IN | ✓ |
| 6 | OUT (Rule 12 dispositive) | OUT | ✓ |
| 7 | IN (292M; 41.9% > 40%) | IN | ✓ |
| 8 | IN (group voids exemption; 13 out; 9/11 transitional) | IN | ✓ |
| 9 | IN Sec 12 only | IN | ✓ |

## Caveats

- Verdict tasks (in/out/review) have a cleaner decision space than v34's
  per-clause delta rows — 9/10 here doesn't erase 74% there; it shows the
  banked rules transfer across families.
- Output-form details (routing pointer content, one-row NLR table, ≤120-word
  rationale) weren't rehearsed — calls only. Fill-time contract compliance
  still needs the template pass.
