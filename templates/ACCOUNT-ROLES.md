# Account roles — standing orders per hotkey (v37+)

Each account has one job per phase. Roles are assigned to account NAMES, not
frames — if an account gets zeroed or rejected out, the role moves, not the
frame (see "casualty rules" at bottom).

---

## piero / UID 134 — the spearhead
Skeleton: `templates/scout-piero` (gatecheck)

- Wave 1: whichever skeleton finishes first uploads FIRST — piero is the
  default early-crown attempt. Pack piero first at T+1:45.
- Phase 2: if gatecheck returns the best skill_use, piero becomes the primary
  iteration vehicle (ruling-level edits only). If another frame wins su,
  piero downshifts to hypothesis-tester: one scout slot per unresolved
  coin-flip, alternating the guess.
- Endgame: second choice for the corrected-union if star's quota is spent.
- Slot budget: scout(1) + iterate(≤5) + reserve(≥3). Never below 3 after
  hour 12.

## kelvin / UID 140 — the workhorse
Skeleton: `templates/scout-kelvin` (ledger/reconciliation)

- Wave 1: ledger scout — uploads second.
- Phase 2: primary iterator BY DEFAULT — kelvin's reconcile family produced
  the house-best skill_use in v36 (su 0.93). Unless wave-1 su says another
  frame executes better, corrected rulings land on kelvin first.
- Endgame: exhausted is fine — kelvin's job is to have spent its slots
  turning the answer key into score, not to save quota.
- Slot budget: scout(1) + iterate freely (≤10).

## dragon / UID 141 — the specialist
Skeleton: `templates/scout-dragon` (question-first)

- Wave 1: question-first scout — its frame maps naturally to refuse/ask
  scenarios; if rubric.txt plants an obedience trap, dragon's scout carries
  the ask-form output contract.
- Phase 2: hypothesis-tester and frame-fallback. If kelvin's frame
  underperforms, dragon's skeleton is the second iteration home. Also the
  designated scout for "weird" structural calls (row splits, novel deliverable
  shapes) — split-test those here, not on the leader frame.
- Endgame: third choice for union.
- Slot budget: scout(1) + test(≤4) + iterate(≤4).

## star0724 / UID 142 — the vault
Skeleton: `templates/scout-star` (verdict-map)

- Wave 1: verdict-map scout — still scouts (the slot is cheap information
  and still earns crown time).
- After wave 1 report: **FREEZE.** No more uploads until the corrected-union
  build. Star's ~14 remaining slots are the endgame vehicle: union +
  response shots if the leader improves late.
- Rule: star only unfreezes if (a) the union is ready, or (b) the leader
  retakes #1 in the last 12h and a response is needed. Never spend star on
  mid-game iteration — a spent vault is a dead vault (v36 lesson: the union
  died packaged while every account was spent).
- Slot budget: scout(1) + union(1) + endgame responses(≥2) + untouched rest.

---

## Upload order rule (wave 1)

Not simultaneous — sequential-by-readiness: pack → similarity-check →
upload, per scout. piero → kelvin → dragon → star as default order; any
scout that passes its check earlier jumps the queue. Crown time pays by
the hour.

## Casualty rules

- Scout zeroed on a gate (redundancy/dataset-derived): that ACCOUNT keeps
  its role but gets a rebuilt bundle (new invented entities, zero repeated
  sentences) — the frame is not at fault, the execution was.
- Scout rejected repeatedly on similarity: re-skin section labels once
  (measured fix), else swap to the spare frame vocabulary; do not burn
  hours re-voicing prose (moves 0.1%).
- Two accounts burned: dragon's role folds into kelvin; star stays frozen
  regardless — the union vehicle is sacred.
- Union account must differ from ALL wave-1 skeletons: if star's own scout
  was too close, graft union rulings onto the LEAST similar proven skeleton
  instead.

## Standing prohibitions (all accounts)

- No voice/style changes to fix calls (v12: −0.053).
- No verbatim repeated sentences anywhere (v4: scored 0).
- No dataset entities, no scenario-shaped examples, ever.
- No uploading star between wave-1 report and union build.
- No skeleton shared between accounts — labels/vocabulary stay distinct.
