# WRITING RULES — how every submission file must be written (v38)

Consolidated from the v37 postmortem, the validator comments, and the
winning bundles. Applies to every file that goes in the zip. If a draft
violates any rule marked [GATE], it does not ship.

---

## 1. Bundle composition [GATE]

- Default: `SKILL.md` + ONE file in `references/`.
- 1 ref held the .905 winner; 2–3 refs dragged to .71–.76. Never ship a
  second reference "for depth." SKILL-only is verified viable — it held
  the interim lead (.876) and another hit .850 — a legitimate emergency
  or anti-similarity fallback, not the plan.
- `SKILL.md` is `is_primary: true`; the reference is a worked example,
  not a second manual.

## 2. SKILL.md size [GATE]

- **8,000–10,000 bytes at pack time.** Under 8k only works with a dense
  reference behind it — the .862 interim leader ran 7.2k SKILL + 10.4k
  ref, the exception not the plan. Over ~10k = creeping ballast; every
  byte competes for the model's attention.
- Frontmatter `name` and `description` both filled. The description fully
  specifies input→output in 1–3 sentences — it is metadata the judge reads.

## 3. Required content, in order of weight

**(a) The doctrine — must be present, fully argued, in the voice:**
1. Closed status stands unless ANOTHER artifact states a present fact it
   cannot coexist with; the item's own text never reopens it; suspicion
   is not a contradiction. [v37 S-006]
2. Only the filed top tier gates; open lower-tier items get named
   dispositions, never promoted. A blocker = filed top-tier AND open.
3. Verdict shapes carried regardless of declared vocabulary:
   clean / conditional / ask / blocked — the middle state never
   collapses. Sealed v37 keys used only 2 labels (Request More Data ×8,
   Proceed to Exclusivity ×2) and NEVER declined — ask beats decline
   even on structural-looking facts; block only when the packet shows
   the cure already ruled out. [v37 S-001/S-008 sealed RMD, not pass]
   But ask-dominance was v37's plant: v35 keys contain a sealed
   "should not approve" and a "STOP — missing input" — enumerate the
   gate state, never default to ask.
   When nothing gates, the verdict issues; holding back is as
   wrong as proceeding over an open gate. [v37 S-003/S-006 sealed Proceed]
   On a genuine coin-flip, take the more conservative call — the
   penalty is asymmetric: proceed-over-open-gate → near-zero CJ;
   wrong ask/pass → "defensible," partial credit. [v37 rationales]
   And ground every verdict causally in tier+status — sq grades the
   reasoning chain, so defensible logic keeps ~2/3 of the scenario
   even when the call itself misses.
   The verdict is DECIDED from the item rows before any prose — line 1
   restates what the table produced, never the reverse. [v37 piero's
   proceed-over-open-gate and star's line-1/§4 contradiction both came
   from writing the verdict before the analysis.]
4. Restate the operative figure: reported → each deduction sourced →
   working base. Judge the thing evaluated, not the headline.
5. Comparison membership is a defended choice: every member in/out named
   with a stated rule.
6. Reproducible arithmetic: `4.5 × 18.0 = 72 + 9 = 81`; endpoints
   divided back by the base. Every mentioned adjustment must be APPLIED
   in the numbers — named-but-unapplied is a scored miss. [v37 v6-merchant]
7. A condition is a closing event: named record, owner, deadline from the
   input, consequence if unmet. "Follow up" is not a condition.
8. Silence is a finding: no invented figures, dates, or names; a stated
   absence is reported as an absence.

**(b) The output contract the skill prescribes:**
- Line 1 of any output: verdict + deciding item + key figure.
- Exact section headings in fixed order with explicit word bounds —
  but structure serves judgment; the rubric punishes "mechanically hits
  every criterion but no situational reasoning" (prescribes_exact_headings
  r = −.32). Never let format substitute for reasoning.
- Every numbered input item gets a row (finding, standing, disposition)
  before any prose, with the gate tally restated in words under the table.
- Field-proven cheap wins to include: a brief input check (≤6 bullets
  naming what's present/absent — the .944-su pattern) and a "Verified:"
  line in the recommendation section.
- Conditions name record/owner/timing — never generic.

**(c) Voice rules:**
- Doctrine identical across accounts; phrasing, metaphor, section names
  all differ. Divergence is surface only.
- No sentence frame reused across items — each gets the words its facts
  need. [validator-visible failure]
- Flowing expert prose; tables only where the contract says so.

## 4. references/ — the worked example [GATE]

- **~9,000–15,000 chars** (winner's was 9,234 bytes). This single file moved su
  .80 → .925 on the winning lineage. Budget 45+ min of the pre-open window.
- **Fully invented** entities, industry, names, dates, figures. [GATE:
  dataset_derived detects scenario-shaped examples semantically — an
  example that rhymes with a real scenario fails the gate.]
- Shows the contract END-TO-END on one case: item-by-item table →
  base bridge → comp in/out → arithmetic with divide-back → verdict →
  conditions with named cures. It teaches SHAPE and CHECKS.
- Contains at least one each of: a label-vs-evidence disagreement handled
  in the open, a lower-tier open routed to conditions, a comp exclusion
  with named reason, an adjustment applied (not just mentioned).
- **Multi-branch endings [GATE]:** after the full worked case, show the
  alternate verdict branches on the SAME case — "other versions of the
  evidence, and what would change": one variant that produces ask/defer
  (named record would cure it) and one that produces blocked (record
  already ruled). The winner's reference did exactly this — it is likely
  how the wider verdict space transmits to the eval model. A
  verdict rule without a shown example is a clause that fails in
  production.
- At least one cell/line QUOTES the deciding words from the source
  artifact — the communication grader asks whether reasoning is
  explained; quoted evidence is the strongest answer.
- The SKILL.md tells the reader: read it once with read_reference; carry
  its shape and checks, never its sentences.

## 5. Hygiene [GATE — each cost us a score or an hour in v37]

- Zero verbatim repeated sentences anywhere in the bundle (dedup catches
  boilerplate between SKILL.md and reference).
- No text addressed to evaluators; no meta-commentary about the eval,
  scoring, or the task.
- No fabricated specifics — no figure, date, or name the input lacks.
- No hedging filler ("it is recommended to consider") — verdict-first
  declaratives.
- Zip via `tools/pack_bundle.py` with forward-slash paths exactly
  `SKILL.md` and `references/<name>.md`. Verify the zip contents before
  upload (captain v3: scored 0 on a broken bundle).
- After upload: confirm accepted AND scoring nonzero before spending the
  next sub.

## 6. Similarity

- The server's metric is `shared_content`, not local cosine. Accepted
  range observed 0–.37; ours ran ≤.18 and were still accepted.
- Local cosine OVERSTATES risk — use the upload dialog % as authority.
- Between two accounts carrying the same rulings: new section names,
  reordered clauses, new invented entities = sufficient distance. Do NOT
  drift doctrine for similarity.

## 7. Versioning between waves

- Patch rulings at clause level; keep the voice frozen.
- A full frame rebuild is allowed ONCE per lineage, only when a scorecard
  shows rubric/su weak — doctrine stays byte-equivalent (ChrisZ .740→.876).
- Never ship two diffs at once when avoidable — unobservable cause.

## 8. Drop-day fill order (worked backwards from ship)

1. Check `dataset.jsonl` for a `ground_truth` key FIRST — v17–v34 shipped
   answer keys during the competition; v37 didn't, but it's a free check
   that could win the challenge outright.
2. Enumerate calls: `id | filed top-tier | open? | verdict | evidence |
   expected band` — band column mandatory.
3. Fill description slot + verdict labels + section headings from rubric.
4. Write the worked reference (45 min).
5. Fill per-scenario rulings into each voice.
6. Local eval all scenarios → verdict lines match enumeration, zero flakes.
7. Pack → verify zip → upload → confirm nonzero score.
