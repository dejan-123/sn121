# v38 postmortem — Manager Coaching and 1-on-1 Preparation Skill

Status: **closed**. This is the canonical final summary. Detailed evidence lives in
`RESULTS.md`, `CALLS.md`, `../../logs/FIELD-NOTES-ARCHIVE.md`, and `../../intel/`.

## Final outcome

Winner: **tomtomtom** UID 130, submission `e0007252`, **0.96599**.

| Rank | Miner | Submission | Score |
|---:|---|---|---:|
| 1 | tomtomtom | `e0007252` | .96599 |
| 2 | Sakura03 | `32e26c3b` | .95826 |
| 3 | kulhawikb | `877b57ea` | .95804 |
| 4 | kurobasadatake | `845a295f` | .95438 |
| 5 | Sakura03 | `77419368` | .95350 |
| 6 | kulhawikb | `ea325e6b` | .95277 |
| 7 | Marada | `09940d14` | .95073 |
| 8 | phantom | `10582bdd` | .95001 |
| 9 | tomascool0777 | `cd96eeea` | .94625 |
| 10 | kurobasadatake | `80b9c5be` | .94489 |

The API reported **438 evaluated submissions**. The saved pages deduplicate to
400 scored rows; ranks below are exact inside that saved snapshot unless noted.

## Our final bests

| Account | Best score | Snapshot rank | Submission |
|---|---:|---:|---|
| piero | **.93963** | **20 / 400** | `bc6679a8` |
| star0724 | .93245 | 29 / 400 | `e16b8255` |
| kelvin | .91450 | 56 / 400 | `95169db8` |
| knight | .91191 | 59 / 400 | `231dd0ab` |
| captain | .91120 | 60 / 400 | `3053b445` |
| dragon | .90305 | 76 / 400 | `29639cde` |
| astro | .88769 | 114 / 400 | `018b92db` |
| toby | .88512 | 120 / 400 | `4bb005f1` |

Final Toby experiment: `scout-plain-v1` / `8b66aba7` scored **.85131**. That row
was not in the saved leaderboard pages; its score would land around rank 216 in
the 400-row snapshot.

Leadership required incumbent best + `.01`, so the takeover target was
**.97599**. Piero-v7 was `.02636` behind the winner's raw score and `.03636`
below the takeover threshold.

## Verified score model

The v38 scorecards follow the same additive model:

```text
scenario score = .30*scenario_quality + .30*rubric + .30*skill_use + .10*novelty
total score    = mean of the eight scenario scores
```

`dataset_derived`, `skill_alignment`, and `skill_redundancy` are gates/metadata,
not additive terms.

## Winner vs our best

| Component mean | tomtomtom .96599 | piero-v7 .93963 | Gap |
|---|---:|---:|---:|
| scenario_quality | .9547 | .9459 | .0088 |
| rubric | .9475 | .9388 | .0087 |
| skill_use | **.9844** | **.9141** | **.0703** |
| novelty | 1.0000 | 1.0000 | 0 |

Weighted contribution to the `.02636` gap:

- `skill_use`: about **80%** of the gap
- `scenario_quality`: about **10%**
- `rubric`: about **10%**

The winner's `skill_use` was `1.0` on six scenarios and `.9375` on two. Piero-v7
was `.9375` on seven scenarios and `.75` on S-004.

## What won

The winning bundle was:

- `SKILL.md`: 9,995 bytes
- `references/three-briefs.md`: 16,743 characters
- one substantial worked-reference file read on every scenario

Its output shape was natural and manager-facing:

1. read the week first;
2. classify each draft item by evidence, not by the manager's label;
3. show the evidence pass in plain English;
4. then write a normal printable brief;
5. redirect pasted notes from an already-held meeting.

The winning reference contained **complete example replies**, including a thin
packet and a held-meeting redirect. That mattered more than another layer of
rules: the reference taught voice, ordering, and judgment by imitation.

## What failed for us

### 1. Naturalness remained the separator

Our best file solved most scenario calls, but still sounded more procedural
than the winner. Later rewrites made this worse, not better. Mechanical cues
such as audit-like evidence passes, rigid class explanations, and visible
accounting repeatedly produced `skill_use` scores of `.6875`–`.8125`.

The important distinction is not "show reasoning" vs "hide reasoning." The
winner showed reasoning, but it read like a capable manager's assistant wrote
it. Ours often read like a rules engine emitted a worksheet.

### 2. More rules did not buy naturalness

`scout-plain-v1` fixed several deterministic traps but scored only `.85131`:

- mean `skill_use`: `.7500`
- mean `scenario_quality`: `.8644`
- mean `rubric`: `.8900`
- S-009 collapsed to `.75475`, with `scenario_quality` `.625`
- S-010 stayed weak at `.82375`

The official score also disproved the optimistic local estimate. Local rubric
judging cannot see sealed scenario criteria and does not model official
`skill_use` naturalness.

### 3. Similarity was not the final problem

`scout-plain-v1` passed the official gate at `.8883`. The uploaded files matched
the local ZIP byte-for-byte. The loss was score quality, not packaging or
similarity.

### 4. Reference quality beat reference count

The best files used one deep worked reference. `scout-plain-v1` split material
into `cases.md`, `decision-map.md`, and `tone.md`; all were read, but the result
still looked template-driven. Compact decision cards are useful for rules, but
they do not teach the judge-facing voice as well as full replies.

## Scenario lessons worth reusing

See `CALLS.md` for the full scenario map. The durable patterns are:

- Treat the manager's draft as claims to test, not labels to copy.
- A single dated incident is not coaching.
- Coaching needs repeated dated behavior or a named recurrence.
- If the report already diagnosed the cause, coach earlier detection/flagging,
  not the symptom.
- External dependencies are unblocks/escalations, not character criticism.
- Recognition needs a named witness or measured result.
- Sensitive topics get routed to another venue without talking points.
- Preserve modest report-raised topics; do not delete Career/development just
  because evidence is thin.
- A booked promotion/calibration venue belongs in `Other venues` even if the
  report still has an open Career step.
- Held-meeting records get only a redirect: identify the record, carry open
  actions, say current status is not supplied, and request current evidence.

## Similarity knowledge

Observed upload behavior:

- own-prior around `>=97%`: hard reject;
- own-prior roughly `95–97%`: warning/rate-limit risk;
- other-miner around `>=93%`: hard reject;
- platform readings can differ from the local proxy by several points.

For future submissions, budget a margin rather than aiming just under the gate:
keep local own-prior and external matches below ~90% when possible.

## Tooling left in the repo

- `tools/run_eval.py --ollama <bundle> <indices>` — local no-API generation;
  useful for plumbing, not score prediction.
- `tools/export_eval_prompt.py <bundle> [out]` — writes Claude/ChatGPT manual
  generation and judge prompts.
- `tools/check_v38_outputs.py <bundle>` — deterministic checks for the known
  v38 output traps.
- `tools/check_similarity.py <bundle>` — local semantic similarity proxy.
- `tools/pack_bundle.py <bundle> [zip]` — safe ZIP packaging.

## Next-challenge rules learned from v38

1. Write in the customer's ordinary work voice. No costume metaphor unless it
   is indistinguishable from a real workplace artifact.
2. Use one deep worked reference with complete replies; do not substitute a
   stack of terse rule cards.
3. Put the judgment method in `SKILL.md`; put the voice and full examples in
   the reference.
4. Treat official task-card components as the source of truth. Local rubric is
   only a rough lower bound.
5. Freeze a chassis once it shows a high `skill_use` ceiling. Patch scenario
   calls; do not keep rebuilding the visible architecture.
6. Keep accounting rules, but express them as natural advice rather than
   visible machinery.
7. Before upload, verify the ZIP bytes and leave similarity margin on both
   own-prior and other-miner comparisons.
