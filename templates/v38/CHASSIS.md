# CHASSIS — v38 shared spec (read before writing any bundle)

> Pre-drop spec. Post-drop verified findings (skill_use rubric internals,
> naturalness lever, similarity calibration) are in
> `logs/FIELD-NOTES-ARCHIVE.md` — that file supersedes where they conflict.

Companion: `WRITING-RULES.md` in this directory — the binding file-format
and hygiene spec every bundle must pass before it ships.

One rulings lineage, four voices. This file holds everything that must be
IDENTICAL across the four scout bundles; the scout-*/SKILL.md skeletons hold
the voice-specific delivery. On drop day you fill slots and rulings —
you never restructure.

---

## Verified score model (v37 postmortem)

    score = .30·scenario_quality + .30·rubric + .30·skill_use + .10·novelty

- rubric + skill_use (~60%, the TEMPLATE part) carry ~75% of score variance.
- sq is compressed by partial credit (5 criteria/scenario) — calls are the
  ceiling, template is the floor.
- Target profile: sq .83 + rubric .92 + su .92 → ~.905.

## The five laws — bake into every bundle, voice-translated only

1. **Frozen chassis.** Patch rulings only between versions. Any re-voice
   resets rubric+su to dice (measured −.008 to −.036, mean −.02, on our
   own v1→v2 wave).
2. **Closed status stands.** A state the input marks resolved/closed stays
   closed unless ANOTHER artifact states a present fact it cannot coexist
   with. The item's own finding text never reopens it — the author already
   weighed that text when marking it. (v37 S-006 killer.)
3. **Only the filed top tier gates.** Open lower-tier items get a named
   disposition (mitigation, condition, watch item) — never promoted. A
   blocker = filed top-tier AND open/contradicted. No inference. (S-003.)
4. **Ask over decline; keep the middle verdict.** Sealed v37 keys used
   exactly 2 labels — Request More Data ×8, Proceed to Exclusivity ×2 —
   and the reference never declined, even on a scenario typed
   structural_disqualification: it repriced the base and asked for the
   deciding record. Carry ask / clean-yes / conditional-yes shapes;
   decline only when the packet shows the cure already ruled out.
   BUT: ask-dominance was v37's plant, not a universal — v35's keys
   include a sealed "should not approve" (evidence contradicted the
   request) and a sealed "STOP — input missing" refusal. Enumerate the
   gate state per scenario; never default to ask. AND: when nothing
   gates, issue the clean call — holding back is as wrong as proceeding
   over an open gate.
   WHEN GENUINELY SPLIT between two calls: take the conservative one —
   the judge's penalty curve is asymmetric. Proceed over an open gate
   scores near-zero on contextual_judgment; a wrong ask/pass is graded
   "defensible" (v37: pass verdicts still hit .66–.92 sq, RMD-over-
   proceed cost ~.3; proceed-over-gate cost ~.6+). Write so the
   reasoning survives a wrong verdict — sq grades the causal chain
   (tier → status → verdict), not just the label.
5. **One deep worked reference (~9–15k chars), never several.**
   1 ref contained the .905 winner; 0-ref SKILL-only held the interim
   lead (.876); 2–3 shallow refs dragged to .71–.76. The reference
   teaches SHAPE and CHECKS on an invented example — it is not a second
   instruction manual.

## Output contract (all four voices)

- First line: verdict + the one deciding item + the key number (truncation
  insurance — scored content lands before any cutoff)
- Exact section headings, fixed order, explicit word bound per section
- Every quantity shown as reproducible arithmetic: `4.5 × 18.0 = 72 + 9 = 81`
- Every listed input item gets a row with its disposition BEFORE any prose
- Conditions/data-requests name: the record, the owner, the timing —
  never "assign counsel"-generic
- No fabricated specifics; a stated absence is reported as an absence
- SKILL.md 8–10k bytes at pack time; exactly one file in references/

## Hygiene (each burn costs hours)

- Invent every entity, industry, register — dataset_derived detects
  scenario-shaped examples semantically, n-gram distance does not help
- Zero verbatim repeated sentences anywhere in the bundle
- No text addressed to evaluators; no meta-commentary about the eval
- Zip via tools/pack_bundle.py (fwd-slash paths)
- Server similarity metric is shared_content (accepted 0–.37 observed);
  local cosine overstates — use the upload dialog % as authority

## Drop-day slot-filling checklist (per scout)

- [ ] check dataset.jsonl for a `ground_truth` key FIRST (v17–v34 shipped
      answer keys; v37 didn't — free check, could win outright)
- [ ] description slot: 1–3 sentences naming this suite's input→output
- [ ] <INPUT>/<DECISION> placeholders → this suite's actual artifacts/goal
- [ ] verdict vocabulary → this suite's declared states + the middle state
- [ ] per-scenario rulings from the CALLS enumeration (filed-tier table first)
- [ ] one invented worked example (~10–14k) showing the output contract
- [ ] local-eval all scenarios → verdict lines match enumeration, no flakes
- [ ] pack → upload → verify acceptance + nonzero score before next sub

## The five voices (wave-1 frame race)

| skeleton | frame | source |
|---|---|---|
| scout-dragon | question-ladder | ours |
| scout-kelvin | ledger-balance | ours |
| scout-piero | gatecheck-triage | ours |
| scout-star | verdict-map | ours |
| scout-guards | failure-guards ("the failure is X, the habit is Y") | ChrisZ's .876 frame, doctrine ours |

Wave 1 = a frame SELECTION experiment: put the strongest 4 of these up,
scorecards pick the winner on rubric/su, later waves fly relabels of it.

## The relay (which skeleton goes when)

| wave | accounts | skeleton | fills |
|---|---|---|---|
| Scouts A | 2 | two of the five voices | identical rulings; split coin-flips |
| Scouts B | 2 | two more voices | + first corrections |
| Union | 2 | relabeled copy of the BEST-graded voice | grafted per-scenario winners |
| Snipers | 2 | another relabel of the winning voice | final rulings + field-best grafts |

Relabel = new section names + reordered clauses + new invented entities.
Same rulings, new fingerprint. Do NOT rewrite the reasoning frame — the
winning voice earned its rubric/su numbers, spend only what the dedup gate
requires.
