# WORKED-EXAMPLES — the reference-file method

The canonical recipe for building `references/` worked examples. Merges
STRATEGY-NEXT Phase 3, `../intel/past-challenges/ANALYSIS.md` §6–9, the v39
winner autopsy, and the S-003 side-by-side diff (piero v2-counsel su .9375
vs ef71800d su 1.0, same generator, same scenario). Read this before
writing any references/ file; check it again before packing.

Exemplars on disk: `../intel/v39/v39-top10-now/01-5f3914f4-*/references/field-notes.md`
(4 full replies + 2 cases in brief, su 1.0) and
`../challenges/v39-stakeholder-mapping/intel-leader/outputs/` (su 1.0
outputs, campaign-era). Counter-example: `accounts/piero/v2-counsel` —
same case architecture, coined vocabulary, su .9375.

---

## Scope — necessary, not sufficient

This recipe covers the delivery vehicle, not the whole win. Decomposed
gaps from the last two closes:

- v38: gap to winner .026 — ~80% skill_use (natural contract/voice).
- v39: gap to winner .044 — su .013 + sq .017 + rubric .015 (spread).

Examples alone cannot fix: a wrong output contract (knight v2-evidence
.821 — headings poisoned su regardless of cases; captain v3-audit .831
carried all rulings through an audit shape and lost on voice), missing
rulings (examples transmit verdicts, they don't invent them — sq calls
come from judge-question reads + scorecard diffs), or operations
(knight v1-fieldmemos — the both-halves file — went QUEUED and never
scored; eight scattered submissions ate the 93% other-gate). The full
chain is: right contract → right rulings → examples that demonstrate
them → scorecard-driven iteration → slot/similarity discipline. This
file owns the middle link.

## Why examples carry the score

- **Rules tell, examples show.** The harness mimics the example's format
  and judgments more than the rules text. v39 proof: piero v2's SKILL.md
  contained every ruling the winner applied — "never promote the
  friendliest title", "unnamed teams get no row" — and the outputs
  violated them anyway. Rules exist as intentions; examples exist as
  habits.
- Worked examples drive 'knowledge applied' scores more than rules
  (v37 lesson). The v39 winner's big jump came from tripling the worked
  examples, not from adding rules.
- Winners run 26–38K reference text against ~10K SKILL.md. The size
  budget belongs here.

## The anatomy — every worked example has three parts

1. **The record, summarised** — the INPUT, bulleted facts. Skip it and
   the agent learns formatting; include it and it learns judgment
   (record → reply transformation).
2. **The reply** — the COMPLETE deliverable in the exact output
   contract. No fragments; every section present, in final shape.
3. **Why it reads this way** — each verdict with its signal attached:
   "a 4 and not a 5 *because* his last promise produced nothing."
   Signal-cited verdicts are what the rubric's contextual-judgment
   dimension scores; verdict-without-reason teaches bare output.

## The seven rules

1. **Demonstrate restraint per case.** Show the answer that correctly
   does NOT flag/chase/escalate, with a one-line reason — "Nkem is
   asked for nothing more: his part is done"; "a $19K purchase gives
   no reason to go looking." Judge questions are "do X AND avoid Y";
   the avoid-half gets no credit unless an example teaches it.
2. **Coverage over depth.** One full reply per contract variant —
   full deliverable, thin input, redirect, refusal — then "cases in
   brief" (~10 lines each) for secondary trap types. The winner covers
   6 archetypes on 4 full + 2 brief; the briefs are the cheap multiplier.
3. **Zero ambiguity.** Audit every SKILL.md rule for contradictions
   BEFORE writing examples. v39 defect: "a person known only by role
   may appear marked 'no record'" vs "unnamed attendees and teams get
   no row" — the agent resolved it by guessing, wrong. If a rule has an
   edge case, the example must show the edge applied exactly once.
4. **Plain vocabulary only.** Standard direction words
   (stalling/quiet/done/steady), standard states, no coined label
   systems. The example's vocabulary becomes the output's vocabulary —
   invented labels are the measured .9375 su cap.
5. **Invent everything.** Domains, entities, figures with zero overlap
   to dataset scenarios — the winner used a city council, a dental
   clinic, a quarry. Suite-echoing examples cost ~.10 dataset_derived
   on EVERY scenario (piero v3, measured). dd is untestable locally;
   distance by construction.
6. **Audit for bugs.** An example that teaches a wrong move is worse
   than none — the agent mimics errors faithfully. Verify every
   verdict, count, quote and restraint call inside each case before
   packing.
7. **Fill the budget.** Grow the reference, not the rule list. When in
   doubt: more demonstrated calls, fewer stated ones.

## The build process

1. Rulings list first — every numbered SKILL.md ruling gets ≥1 demo.
2. Trap list second — each predicted trap family gets a case or a
   brief.
3. Contract variants third — full, thin-input, redirect, refusal.
4. Write the replies by hand in the contract — if you cannot produce
   the contract cleanly yourself, the contract is the defect; fix it
   before the example.
5. Self-grade each case against its rulings; fix example-side, not
   rules-side, when they disagree (the rule text already lost once).

## Pre-submit checklist

- [ ] Record summary shown (input present, not just output)
- [ ] Reply complete — every contract section, final shape
- [ ] "Why" section cites a signal per verdict
- [ ] ≥1 explicit restraint demo per case
- [ ] Every SKILL.md ruling demonstrated ≥once
- [ ] Plain vocabulary — zero coined labels
- [ ] No rule ambiguity left unresolved by the cases
- [ ] Redirect AND refusal shapes each have a case
- [ ] Entities/domains share nothing with dataset.jsonl
- [ ] Every fact inside the example is self-consistent
- [ ] Reference ≥ ~20K chars; SKILL.md ~10K

## Failure profile this recipe is built against

- su .9375 ceiling — coined vocabulary (piero v2, measured)
- su .6875–.75 — clipped/template section stubs (piero v3, captain
  v3-audit, measured)
- dd −.10/scenario — invented case echoing planted suite shape
  (piero v3, measured)
- rule-stated-but-not-firing — rules present, outputs violate them
  (piero v2 S-003: leadership-team row, promoted-friendly-title
  sponsor)
