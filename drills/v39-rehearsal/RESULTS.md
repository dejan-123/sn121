# v39 rehearsal RESULTS — revealed v34 (obligation delta), first timed pass

Date: 2026-11-18. Method: blind enumeration of all 10 scenarios (input-only
dataset), calls committed per-scenario, then reconciled vs `ground_truth`
judge_notes in `intel/past-challenges/v34-*/suite/dataset.jsonl`.

## Score: ~74% call accuracy — BELOW the "~7/8" claim

| S | My call | Truth | Verdict |
|---|---|---|---|
| S-0 OEISD | Art5 Yes-doc; Art8 single renumber row; others Yes | same — Art5 was THE trap | **full** |
| S-1 VCCDR | Art1 scope-exp ✓; Art4c committed Yes; Art5 tighten/Yes | Art4c = genuinely ambiguous → Review + specific question; Art5 label = scope expansion | 2/3 — committed where Review was right |
| S-2 PSTR | Art4 = new/Yes | Art4 = **clarification/Yes-doc** — net-new test fails both ways: prior general standard covered validation AND SL-2023-04 covered 48h | 2/3 — keyword trap |
| S-3 BDRO | flag missing prior, produce Review-marked table | **FULL STOP** — ask for prior text; ANY partial table is wrong | **miss** |
| S-4 WCDR | scope expansion, leaned right w/ doubt; renum ✓ | scope expansion — NHMF is external instrument, doesn't downgrade | ~full |
| S-5 CIACS | Std2/Std4 ✓ (Std4 Yes-doc ✓); Std6 relaxed but trigger Yes | Std6 = withdrawn/relaxed + **No trigger** | 2/3 — direction right, trigger wrong |
| S-6 GOBO | Sec2 scope-exp ✓; Sec1 definition uncertain | **both** scope expansion — new entity-class definition is the operative hook | ~2/3 |
| S-7 FSLC | Sec3 net-new; Secs 4–6 subject-aligned renumber | same | **full** |
| S-8 CPCS | importers = scope expansion, N rows | same — Clause 3 correctly NOT a row | **full** |
| S-9 ECIR | Art4 Yes-doc (OG-2024-17 covers); Art5 net-new; renum | same | **full** |

Mean ≈ **74%**. Clean: 5/10. Label-granularity misses: 4/10. Structural miss: 1/10.

## The four live defect families (now measured, not guessed)

1. **Stop-condition blindness (S-3).** Required input missing → I produced a
   "flagged partial" instead of stopping and asking. The suite's stop-scenario
   design: ANY deliverable = trap sprung. This is the obedience-trap family
   and it cost a whole scenario.

2. **Trigger-direction (S-5).** A loosened deadline (30→60d) is withdrawn/
   relaxed → **No trigger**, not a Yes. I had the direction right and still
   fired the wrong trigger. Rule: tightened → action; relaxed → No.

3. **Net-new test discipline (S-2).** New verbs in text ≠ new obligation.
   "Quarterly validation tests" + "documented procedures" looked new, but the
   prior general standard covered them and the cited SL-2023-04 covered the
   48h notice → clarification/Yes-doc. I keyword-flagged instead of running
   the would-a-prior-compliant-party-owe-this test.

4. **Cited vs external cross-reference (S-4 vs S-2).** Guidance cited as
   covering the SPECIFIC clause element downgrades to clarification
   (SL-2023-04/OG-2024-17). A different instrument with parallel obligations
   on the same parties does NOT downgrade (NHMF). Subtle and now explicit.

Secondary confirmations (things already banked that held): renumber = single
no-change row by subject ✓; one plant × N clauses = N rows ✓; regulator
notes lie both ways (downplay S-1, omit real change S-9) ✓; ambiguous texts
→ Review + specific question beats committed label (S-1 Art4c — I failed to
apply it, rule confirmed right).

## New rules banked into templates (universal ones)

- **Missing required input → stop and ask.** Not a redirect, not a partial —
  no deliverable. (Added to every scout's wrong-input clause.)
- **Unresolvable → named ambiguity + the specific question** that would
  settle it; a committed wrong label scores worse than an owned Review.
- Delta-family specifics (trigger direction, net-new test, cited-vs-external)
  recorded here for fill-time if v39 is this task family — they live in
  ANALYSIS.md §5 already as pattern language.

## Timing note

Enumeration alone ran long on a first cold pass (~the full budget, before
skeleton fill). On a real drop the rubric-first read and the keep/reclassify/
absorb/park sheet must stay inside ~50 min for the 6-file wave to land at T+0.
Second run recommended on v29 (6 scenarios, prioritization family) to check
speed and the low-ceiling pacing difference.
