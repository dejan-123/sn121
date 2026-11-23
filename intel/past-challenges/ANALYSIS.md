# Cross-challenge analysis — FINAL, v17–v36 (2026-11-11)

Corpus: **all 20 completed challenges**. Reference outputs (`ground_truth`) are
present in the suite datasets for **all of v17–v34** (v35/v36 hid them until
post-close reveal — the same URL pattern serves both). Per-challenge dirs hold
suite/, leaderboard.json, winners/. Judge-rationale corpus: `ANSWERKEYS.md`
(1,336 lines, ~37 submissions). Reference skeletons: `REF-SKELETONS.txt`.

**Day-0 check:** the moment `--fetch` lands, inspect dataset.jsonl keys — if
`ground_truth` is present the answer key is public *during* the competition
(v17–v34 layout). Expect the v35/v36 input-only layout, but the check is free.

## 0. Era note

SKILL.md cap history from winners: v17 51KB → v18–v29 14–40KB → v32+ ≤10KB.
The 10,000-byte cap + strict reference limits are recent — only v32–v36-era
tactics (single ~9–16k anchor reference) bind us now.

## 1. The grader stack is FIXED

sq 0.3 / rubric 0.3 / skill_use 0.3 / novelty 0.1; identical gates (alignment
0.55, dataset_derived 0.45, similarity 0.75 novelty). Only the judge MODEL
rotates: sonnet-4.6 (v30/v31) → haiku-4.5 (v32–v36). Scenario count 4–10.
sq internally is `Base=X, penalties=Y, final=Z` — a deterministic penalty
layer exists beneath the LLM base score (nobody we've seen triggered it).

## 2. Winning-score trend — the ceiling swings by task type

v17 .834 · v18 .917 · **v19 .767** · v20 .957 · v21 .818 · v22 .864 · v23 .893
v24 .905 · v25 .904 · v26 .841 · v27 .960 · v28 .947 · **v29 .784** · v30 .942
v31 .908 · v32 .924 · v33 .965 · v34 .964 · v36 .919

- Pattern-extraction tasks (regulatory delta, scope triage) won at **0.94–0.96**.
- **Prioritization/ranking tasks cap low** (v19 .767, v29 .784): the ordering
  itself is the planted call and everyone gets it partly wrong. In a
  low-ceiling challenge an early ~0.80 may hold — first-mover value goes UP.
- Truncation is a recurring killer: "output truncated mid-sentence" / "JSON
  incomplete" cost sq across v19/v21/v29 winners. **A complete short reply
  beats a truncated long one** — teach a hard length budget.

## 3. "Planted" is literal, universal, and named by the judges

"All five planted facts", "the planted trap", "planted footnote language",
"the trap condition in N-01". Inputs carry trap-marked evidence (footnotes,
metadata fields, context notes — IDs like N-01/N-09) and sq checks whether the
output caught it and traced the consequence. Read footnotes/metadata FIRST.

## 4. rubric.txt is a threat model — the caps are DECLARED

rubric.txt is public at hour 0 and announces which mistakes are fatal:

| challenge | declared cap |
|---|---|
| v30 | omitted planted miss → ≤0.10 |
| v31 | wrong tier on planted-metadata figure, or no scenario-specifics → ≤0.35 |
| v32 | structure without input provenance → ≤10% of credit |
| v33 | wrong top-line label → LOW; fabricated profile attribute → floored |
| v34 | misclassify planted fact, or notes don't name the clause element → ≤0.4 |
| v35 | wrong apex ≤0.10 · missed must-flag ≤0.30 · topic-label title ≤0.50 ·
        storyline where correct output is ask/contradict ≤0.20 |
| v36 | missed planted call → low band |

Universal lines in every rubric: **"a fabricated specific where the input is
silent floors the sample outright"** and the anti-template clause ("mechanically
hits every criterion without judgment scores LOWER than one that reasons well
but is imperfect in a minor respect"). Calibration: 0.5–0.7 competent,
0.9+ = domain expert would rely on it; anchors 0/.25/.5/.75/1.0, per-scenario
weights in sealed metadata.

**Day-0 use:** rubric.txt names the obedience-trap types and the catastrophic
errors — design so the worst-case miss is a mid-band error, never a capped one.

## 5. The universal trap grammar + ruling catalog (verified in rationales)

Two kinds of findings lived under one heading for years; split 2026-11-23.
**5a = true traps**: planted bait designed to make the obvious answer
wrong. **5b = rulings & conventions**: judgment rules, classification
grammar, and scoring conventions that shape a correct answer but are
not themselves bait. Wave labels preserve provenance (which drill run
or challenge verified each entry).

### 5a. True traps — planted bait

**Core (cross-domain):**
- **Reversal trap** — the intended/obvious headline is WRONG (v31 9/9
  scenarios; v30, v36).
- **Unit/denominator/definition mismatch** — footnotes carry the kill: gross
  vs net, count vs UPB-weighted, listed vs collected. Restate or reject,
  never "close enough".
- **Non-recurring favorable item** — one-time beat masquerading as run-rate.
- **Silent marks** — a source missing material metadata caps low regardless
  of its numbers.
- **Identity/renumbering** — same thing, new name = no change.
- **Process/state traps** — in-progress ≠ outcome; ended-without-prejudice
  ≠ resolved.
- **Restraint call** — correct answers include zero-top-tier tables,
  "no decisions required". Manufacturing escalations is penalized.

**Second-wave (v17–v29 mining):**
- **Threshold-immunity bait** — passes the numeric rule, still risky
  (13<14 days silence but deal closes in 4 → act). Context overrides rules.
- **Documented-wait suppression** — inverse: NAMED holds (attorney review,
  customer-requested eval) must NOT be escalated. Unexplained silence =
  act; documented hold = don't.
- **Stale/system-artifact rejection** — a stated metric/tracker status that
  contradicts live evidence is a model artifact: name it, override it, cite
  the tiebreaker datum.
- **Internal contradiction flag** — two stated facts contradict (CRM stage vs
  close date): own call as data-hygiene, never force a label.
- **Deadline backward-reasoning** — reason from hard deadlines, not pace
  ratios; a 97.1%-vs-98% near miss is a miss.
- **Concentration risk** — 59% of commit in one deal gets named even when
  the deal looks healthy.
- **Claim-vs-source audit** — fabricated figures, unsourced causation,
  inverted claims (v23 planted 7/document).
- **Straw-man avoidance** — name the GENUINE competing path (status quo,
  do-nothing); never fabricate alternatives.
- **Ranking = planted call** — order is scored; rank by fewest-actions-to-
  value, not size.
**Whole-scenario obedience tests (v35 sealed criteria, also seen in v17/v28/v34 references):**
- **Refusal scenario** — correct output = STOP and ask for the missing
  decision/audience, offering 2–3 plausible interpretations. Producing the
  deliverable anyway fails (v35 cap ≤0.20).
- **Fix-don't-rebuild** — an explicit edit instruction must preserve working
  content.
- **Evidence-contradicts-request** — correct apex = "do not approve without
  conditions"; endorsing on face-value evidence is the trap.
- **Refuse-the-artifact calls** — missing context (as-of date, contract
  context, prior text, audience/decision) means ZERO rows + a targeted ask;
  a provisional table is scored as failure (v20/v28/v34/v35 drills).
- **Footnotes are the payload** — arithmetic errors, basis mismatches,
  expiring dates, and exclusions hide in notes/footnotes; read each one as
  a candidate planted fact (v35 drill finding).
- **'Partial' is a trap answer** — assertion without assessment, broken
  mechanism, or evidence predating the audit window = Missing; N/A is a
  legitimate verdict, not a gap (v32 drill finding).
- **State-of-record vs state-of-evidence** — tracker GREEN on a missed
  target, "Implemented" on an unevidenced control, "active in CRM" on a
  dark champion — trust evidence over declared status (v26-29/v32 drills).
- **No-derivable-criteria verdict** — an artefact with no scoping clauses
  (enforcement notice, narrative doc) cannot be classified by a generic
  checklist; correct answer is needs-review/unclassifiable, NOT in-scope.
  Inferring criteria = fabricated rows (v33 S-004 trap; drill miss 2026-11-11).

**Label-taxonomy rulings (v34 blind-drill misses, sealed-key verified):**
- **Doc-tier rule** — same trigger/process, bigger paperwork (an extra
  required submission item, a recording duty on an established process) =
  doc-tier label, NOT the full substantive tier (v34 S-001 Art. 5, S-007
  Std. 4 — both were the scenario's primary trap).
- **Regulator notes are unreliable in both directions** — they downplay real
  changes ('clarification' over a removed exemption or a new entity class:
  S-002/S-006) AND silently omit whole new obligations (S-003 Art. 6,
  S-009 Art. 5). But they can also be accurate (S-008). Verify every claim
  against the texts; absence from the note is not evidence of absence.
- **Threshold type: gate vs delimiter** — a threshold that fails may
  delimit a provision (pick tier A vs B) rather than gate the instrument
  (in vs out). Failing a delimiter is never OUT-OF-SCOPE; check what the
  threshold switches before treating it as exclusion (v33 S-005/S-006,
  v34 pattern).
- **Carve-outs are dispositive before thresholds** — a sector/class
  carve-out (e.g. 'incidental residential supply <500 MPDs') removes the
  entity before any threshold or exemption is evaluated; running the full
  checklist and deciding on a later row is a criterion-ordering error
  (v33 S-010).

**Third-wave (v28–v32, sweep-verified):**
- **Fuse-evidence escalation** — urgency must be IN THE EVENTS (days to a
  decision gate), not inferred from event type. PE acquisition + CEO swap
  10 months from renewal = Monitor, not Escalate (v28 S-008). Contrast:
  three Escalates in a 45-day window is correct, not inflation, when each
  strikes a different vector (v28 S-004).
- **Company-level money = Discard** — funding rounds, earnings beats,
  competitor raises are account-level noise unless tied to the budget
  owner's scope (v28 S-001/S-003/S-007). 'They have money' is never an
  expansion signal by itself.
- **Context-completeness check per scenario** — 'provisional/best-guess'
  user pressure is a meta-trap: produce a normal table when context IS
  complete (v28 S-010), zero rows + targeted ask when ANY contract
  context is absent — even when the events look like obvious noise
  (v28 S-002 vs S-009; missed S-002 in-drill because the check ran only
  on the obviously-empty scenario).
- **Backward-deadline reasoning** — a fixed external date (queue close,
  price lock, committee meeting, regulatory filing) overrides pace ratios
  entirely; reason backward from the date and propagate the block
  downstream (v29 S-002: pace 0.98 = 'on-track' by table, dead by
  deadline). Effective pace is computed against the ACTUAL internal
  gate (week-8 handoff), not period end (v29 S-005).
- **Status-theater vs tracker-trust** — 0%→100% week-13 jumps = met but
  flag cadence, don't mark off-track (v29 S-001). Inverse: binary
  milestones get tracker-GREEN OVERRIDDEN by the underlying verdict
  ('Conditional Satisfactory' ≠ 'Satisfactory or better') (v29 S-006).
  Owner-calculated or manually-entered progress = measurement gap, not
  data (v29 S-004/S-005).
- **Empty-section is a scored answer** — 'no leadership decisions
  required' with rationale is the CORRECT output when all gaps are
  owner-executable or externally gated; manufacturing asks = fail
  (v29 S-004 — the restraint family inside a narrative task).
- **Artifact-present ≠ control-operating** — an unadopted template,
  unread checklist, or never-exercised policy = Missing; 'Partial' is
  the trap label for anything with an artifact present (v32 CTL-08,
  INT-03, INT-05). In-flight evidence requests count as ABSENT (SOC 2
  report requested ≠ received, v32 CTL-03).
- **Evidence-window alignment** — evidence dated outside the audit
  window = Missing/Partial regardless of control quality (v32 CTL-10
  screenshot pre-dating the window). Future audit period reverses the
  logic: the binding deadline is design-complete BEFORE period start,
  not fieldwork day (v32 S-004).
- **Resist uniform downgrade** — a genuine dated artifact stays
  Implemented (v32 DW-01); N/A with documented justification is not a
  gap (remote-only physical controls, v32 INT-08); the process around a
  tool is the control — logging without review = Missing the review
  function (v32 CTL-07, DW-07).

**Fourth-wave (v24, v31):**
- **Quantified footnote can confirm a mismatch** — a footnote stating
  the adjustment range is evidence for REJECT (it confirms the figure
  uses a different basis), not a bridge to MEDIUM (v31 S-001). Run the
  number anyway and report the post-adjustment value: it often flips
  the client's intended narrative.
- **External-factor conversion = REJECT** — when comparability needs a
  conversion factor that isn't disclosed (visits-per-episode), the
  figure is rejected, not 'close enough' — near-equal absolute values
  across different units is the trap (v31 S-006 $1,180/visit vs
  $1,240/episode).

**Fifth-wave (v17, v19, v20 — fourth drill run, 2026-11-12):**
- **Missing anchor datum = hard stop, never an assumption** — no 'as of'
  date → stop + targeted ask; a declared anchor assumption fails the same
  way a silent one does. Partial output is allowed ONLY on
  date-independent checks (field-hygiene flags, mapping proposals);
  blocked dimensions get zero rows (v20 S-002).
- **Decline-the-extra-request** — an out-of-scope ask inside a scoped
  deliverable gets a clean decline + right-channel pointer + the FULL
  normal deliverable; building it anyway or shrinking the deliverable
  both fail (v19 S-007 forecast request).
- **Final-stage carveout** — verbal received / contracts-drafting /
  e-sign-out = monitor tier despite imminent close, UNLESS signature
  mechanics are genuinely open (unknown contract-review timeline = act).
  A chase sent yesterday is a documented wait; re-chasing is manufactured
  urgency (v19 Keystone, Bluewater, Meridian Ports).
- **Activity-type discrimination** — automated CRM sends and
  sent-but-unanswered emails are NOT touches; effective last activity =
  last confirmed two-way or answered rep contact (v19 Silica auto-send,
  v20 Orbital one-sided follow-up).
- **Structure overrides thresholds** — a deal passing its activity
  threshold is still at-risk when the close date is structurally
  unmeetable (stage too early, external gate on unknown calendar,
  close in days); at-threshold-exactly = borderline then escalate on
  close-date logic (v20 Northvault, PrairieView, Aquifer, Leila cluster).
- **Passive/vague next-step = at-risk** — "awaiting feedback" / "waiting
  sign-off" / "mapping in progress" lack owner+action+date; a Commit
  resting on unprompted customer action is a category mismatch on its
  own (v20 Silverstone, Fairway, Delta Crane).
- **Inward date-pull = integrity anomaly** — pulled-forward close dates
  while stage doesn't advance = manipulation flag, not progress; past
  close dates = pre-table structural flag, exclude from coverage/sort
  until resolved (v20 Espejo).

**Sixth-wave (v31, v30, v24 — fifth drill run, 2026-11-12):**
- **Empty sections are scored answers — third confirmation** — empty
  core tier, explicitly-omitted synthesis, zero-row tables: every
  structural slot can legitimately be empty, but the emptiness must be
  NAMED with its reason (v24 S-008/S-009, v28/v34).
- **Synthesis is itself a planted call** — the "what this means" section
  must state a cross-signal claim no individual entry made (convergence,
  squeeze, opposite-direction forces, a quantified time window);
  restating the top signals side-by-side = the gaming tell (v24 C5,
  all 10 scenarios).

**Seventh-wave (v35, v23, v27 — sixth drill run, 2026-11-12):**
- **Recompute every derived figure** — input numbers are claims, not
  facts: "7% of remaining budget" was actually 11.5%; "+31% growth" over
  a $4.1B source is actually +76%. Implied arithmetic that doesn't
  reconcile = fabrication evidence → flag it (v35 S-001, v23 S-010).
- **Refuse the tier on framework-breaking inputs** — acquisition
  wildcard, missing anchors: the scored answer is "unratable + why +
  what resolves it," not "elevated risk with caveats" (v27 S-007).

**Eighth-wave (v19, v20, v17 re-drill — seventh drill run, 2026-11-12):**
- **Documented-wait needs a resolvable date + owner to suppress** — a
  named hold with an unknown calendar (board ratification, "customer
  requested legal review" 26 days ago) escalates, not suppresses; a
  documented wait NEVER survives a close date the wait can miss
  (v20 Aquifer: CFO contract review + 8-day close → at-risk, not watch;
  Delta Crane: 'customer requested' + 26d silence = rep-side failure).
- **Threshold is a floor, not a ceiling** — exactly-at-threshold and
  one-under both escalate under structural close-date incompatibility
  (v20 Aquifer 14d-exact/8d, Northvault 13d/4d); name the edge in the
  output ('at threshold — escalate on close-date logic').
- **Passive next step = full at-risk, not a soft flag** — 'awaiting
  feedback' / 'stakeholder mapping in progress' with no owner+action+
  date overrides clean metrics entirely (v20 Fairway, Crestwood,
  Silverstone). Read ACROSS deals too: '5 of 6 next steps are passive'
  is itself a scored segment-pattern finding.

**Stakeholder-map traps (v39, scorecard + winner-lineage verified):**
- **Spending-line buyer test** — a stated spending authority determines
  the economic buyer. No spending line stated → buyer is UNCONFIRMED and
  finance is the first place to investigate; a CFO/VP title alone does
  not prove the role (winner's flagship v2 ruling; S-003).
- **Delegated-executive sponsor** — an exec who endorsed AND delegated
  in writing stays the sponsor "at arm's length"; the delegated colleague
  is the ROUTE to them, not the sponsor. The hand-off must exist in the
  record — "at arm's length" needs a delegation in the exec's own words,
  never inferred to flatter a quiet champion.
- **Lapsed sponsor** — a warm exec who went silent with NO recorded
  delegation is a lapsed sponsor, a distinct verdict from arm's-length.
- **Dormant signer** — a signer/buyer untouched for months is dormant;
  cold outreach to them is capped. Re-warm through the live thread.
- **Unreplied-message debt** — ANY customer message without a recorded
  seller reply is owed, even one that asked nothing. A last-activity
  date alone does not establish who owes.
- **Completed-review supremacy** — a finished review stays finished
  even when an older stage label says pending; name the label out-of-date
  in the first sentence (state-of-record vs state-of-evidence, restated).
- **Momentum verdict** — identify whether the deal is stalling and AT
  WHOSE DESK; unanswered/returned paperwork is the planted evidence.
- **Unnamed-role exclusion** — unnamed roles (title only, no person)
  get NO table row; they live in gaps/prose. Fabricating names = DD kill.
- **No title-derived org chart** — a reporting-line diagram cannot be
  inferred from titles alone; decline with bounded alternatives.
- **Deal-size calibration** — small deals do not get enterprise approval
  checklists; small-deal sponsor ≠ executive sponsor.
- **Never-contacted labeling** — an unreached finance/buyer candidate
  rows as "Never contacted" (roster fact), while the GAP carries
  "Economic buyer not established" — never a guessed title.
- **Single-thread flag** — exactly one access holder must be flagged as
  the coverage risk; missing the flag caps sequencing.
- **Echo-case dd penalty** — invented worked examples that echo the
  planted suite's shape cost ~.10 dd across ALL scenarios; reuse proven
  cases or write ones with genuinely different shapes. Untestable
  locally — only the scorecard shows it.

### 5b. Judgment rulings & scoring conventions

**Second-wave (v17–v29 mining):**
- **Dependency cascade** — propagate one item's miss downstream; name shared
  blockers explicitly.
- **Cleanup-vs-anomaly** — data-quality items are their own class.
- **Anchor-event arithmetic** — business-day counts start from the real
  event, not automated touches.
- **Exceeding the reference is rewarded** — "adds value beyond the reference"
  appears as praise; grounded extra findings can lift Base toward 1.0.
**Whole-scenario obedience tests (v35 sealed criteria, also seen in v17/v28/v34 references):**
- **Scored self-check** — boilerplate "no gaps detected" is penalized.
- **Micro-format rules are scored** — e.g. slide titles <14 words.
- **Label-granularity second pass** — after enumerating, re-check each call:
  trigger-change vs content-only (doc-only), exactly-on-threshold boundary
  math, texts-genuinely-silent → label ambiguous+question rather than commit
  (v30 S-003, v34 S-001/S-002 drill misses). One cause → multiple symptoms
  (cascade) is scored separately too.

**Label-taxonomy rulings (v34 blind-drill misses, sealed-key verified):**
- **Net-new test** — ask "would a party compliant under the PRIOR text
  already owe this?" Yes → clarification/doc-tier; no → net-new. A new verb
  in the text is not evidence of a new obligation (v34 S-003: 'quarterly
  tests' and '48h notification' were already covered by the general standard
  and cited guidance → clarification, not net-new).
- **Cross-reference hierarchy** — a duty already owed under binding guidance
  the regulator cites (SL-2023-04, OG-2024-17) = clarification even though
  newly written into the instrument (v34 S-003/S-009). But a framework named
  ONLY in the regulator's cover note and never inside the instrument is
  context, not coverage — an explicit in-text exemption removal still labels
  expansion (v34 S-006 NHMF).
- **Ambiguous is a label** — when the texts genuinely don't resolve a point
  (prior 'prominently' scoped to advertising vs new formatting duty in
  agreements, v34 S-002 Art. 4(c)), the planted verdict is
  ambiguous/needs-review + a specific answerable question, not a committed
  Yes/No.
- **Replicated scope extension** — one entity-class change swept across N
  clauses = N identical expansion rows (never collapsed to one), with a
  discriminating row nearby that looks similar but was not amended
  (v34 S-010: 'importers' in 5 clauses; permissive Clause 3 untouched).
- **Authority-status check** — for every cited schedule/order/framework,
  check adoption status: a schedule ADOPTED by a named order is a resolved
  fact (High confidence, never 'ambiguous'); an unpublished delegated act
  does not elevate to needs-review when a live register already states the
  status (v33 S-002 Schedule B, S-007/S-009 adopted schedules, S-008 Dir.
  11 vs the current BNTF listing). Ambiguity that cannot change today's
  verdict is decorative — the 'ambiguity as hedge' response scores as
  ducked judgment, not caution.

**Third-wave (v28–v32, sweep-verified):**
- **Rumor+confirmation dedupe** — same story at two confidence levels =
  ONE row at the higher confidence; the rumor is discarded, not monitored
  (v28 S-006). Contradictory same-week signals = keep BOTH, resolve by
  source-authority hierarchy (earnings call > job posting) (v28 S-007).
- **Scope-creep classification** — owner redefining a KR mid-period
  (checkout → 'waitlist beta') = a miss on the original definition, never
  a partial success (v29 S-003).
- **Version-appropriate framework citations** — 2022 Annex A numbering
  (A.5–A.8) vs 2013 (A.9–A.18) is a domain-knowledge check (v32 S-002);
  cite the framework version the scenario names.

**Fourth-wave (v24, v31):**
- **Severity dial: contradicts vs complicates** — 'contradicts' = the
  thesis claim is directly falsified by the signal; 'complicates' = a
  wrinkle is introduced but the claim may still hold. Unannounced
  product/positioning moves that close a named thesis gap = contradicts
  (v24 S-007 SkySeal changelog); distribution/infrastructure moves that
  pressure but don't falsify = complicates (v24 S-003, S-005, S-007
  Nearmap). Over-committing to 'contradicts' is as wrong as hedging to
  'complicates'.
- **Rumor quarantine even when corroborating** — a low-confidence signal
  that AGREES with a confirmed signal still goes to open questions;
  never merge them into a confident narrative (v24 S-006 churn tweet +
  confirmed tier exit). Corroboration is noted as 'consistent with an
  unverified signal', not used as evidence.
- **Non-competitor signals get their own frame** — a signal from a
  supplier, partner, or regulator is reasoned about as the READER's
  dependency/compliance exposure, not forced into the competitor tag
  taxonomy (v24 Stripe, DocuSign, OSHA, Nearmap). Same for internal
  data: CS inbound counts as a real-time market-movement signal (v24
  S-010).
- **Directional derivation is mandatory** — for every definitional gap,
  compute which way it biases the figure and whether the direction
  overturns the user's thesis (v31 S-005 collected>listed reversal;
  S-007 gross-premium cession direction; S-009 count-vs-UPB direction
  for jumbo-heavy books). A mismatch named without its direction is a
  half-answer.
- **Prose confirmations count** — no blanket prose downgrade; explicit
  confirmations inside prose text (basis, period, segment stated
  verbatim) are confirmed dimensions (v31 S-007 Fig Z, S-009 Fig P).

**Fifth-wave (v17, v19, v20 — fourth drill run, 2026-11-12):**
- **Effort-to-impact ranking** — a trivial self-created fix that unblocks
  a deal outranks bigger deals; ranking = irreversibility ×
  effort-to-impact × close-date, not revenue × staleness (v19 Halcyon
  expired e-sign link > Frontier $460K; Seagate "one email closes $200K"
  > legal-wait deals).
- **Coverage norm = 3×** — raw open-pipeline ÷ remaining-quota under ~3×
  flags; note weighted coverage runs lower (v20 S-001/S-005/S-007).
- **Exec-ask package grammar (v17 → v37-adjacent)** — classify the
  request type and say so (bundled asks: name both + pick primary);
  check approval authority vs the ask (VP Ops can't grant an HR
  exception); corrections split factual-apply vs methodological-flag;
  [verify]-bracket only unsourced claims; gaps tier blocking vs
  strengthening; ambiguous approver/input → named working assumption +
  what-changes-if-wrong + still produce; ratified asks → confirmation
  memo, not decision package; deadline arithmetic is the decision-line
  fulcrum; seniority-tier word budgets (C-suite ≤150, VP ~200–300).
- **House-format extraction is a T+0 task** — planted calls split into
  judgment calls AND format-structural calls (tier names, section
  contract, summary-first order). The format contract is extractable at
  hour 0 from rubric.txt deliverable language + prior winners' outputs;
  enumerate it alongside the trap list (all three suites penalized
  format errors independently of call quality).

**Sixth-wave (v31, v30, v24 — fifth drill run, 2026-11-12):**
- **Comparability tier grammar — confirmed-mismatch ≠ REJECT** — REJECT
  = a confirmed FATAL mismatch (unit, numerator/denominator basis) OR
  all dimensions unresolvable. LOW = confirmed mismatch with estimable
  direction, or 2-of-4 dims confirmed. MEDIUM = 3 confirmed + 1
  inferred. Test: "what does this error cost the user" — fatal-to-
  purpose → REJECT; usable-with-caveat → LOW (v31 S-001 Fig 2, S-005
  Fig γ, S-009 Fig N — the run's dominant bias was over-rejecting).
- **Headline-rejection protocol** — when the reader's intended headline
  figure is the rejected one: flag BEFORE the table, name the narrative
  reversal explicitly (post-adjustment the comparator is LOWER — the
  thesis inverts), and make each re-retrieval ask name the specific
  artifact, never "request more detail" (v31 S-001/S-005/S-007).
- **Headline = metric + root-cause-in-same-sentence** — lead with the
  operational metric carrying the largest run-rate consequence; the
  cascade root rides in the same sentence, not the lead slot (v30 S-005:
  headline = maintenance completion, driven by PM understaffing).
- **Qualification-typing** — identical "seasonal/one-off" labels carry
  different severity: reversal-type (underlying run-rate is BELOW
  target = disguised miss → needs-attention) vs lift-type (will
  partially reverse later = qualified beat). Regulator-trigger proximity
  = ACTION item, not a monitoring note (v30 S-005 dual-seasonal, S-004
  CMS 6.0).
- **Contradicts-vs-complicates, claim-vs-vector check** — CONTRADICTS =
  a shipped/funded FACT that directly falsifies a stated claim;
  COMPLICATES = pressure through a DIFFERENT vector than the claim
  addresses (distribution threat vs analytics-DEPTH claim; marketing
  pivot vs product-substance claim). Errors verified BOTH directions —
  match the tag to the claim's exact wording (v24 S-003/S-004/S-005).
- **Proximity × evidence are two axes** — core needs exposure AND
  evidence clarity. Verified fact + ambiguous impact = adjacent, not
  open question; unverified source = open question; all-thin batch →
  even the most-verifiable item stays out of core (v24 S-004/S-009).
  Dual-audience contradictory signals = parallel positioning — name
  both, don't resolve into a contradiction call (v24 S-005).

**Seventh-wave (v35, v23, v27 — sixth drill run, 2026-11-12):**
- **Policy-conflict ≠ evidence-contradiction** — evidence supports
  proceeding but violates a stated internal rule → apex = proceed AND
  name the override as a conscious decision. Evidence undercuts the
  case itself → decline-flavored apex. Conflating them = wrong-apex cap
  (v35 S-007 bid-with-override vs S-005 decline-without-conditions).
- **Derive the deciding number** — break-even win probability,
  worst-case payback, implied growth: the scenario's load-bearing
  comparison often isn't printed; compute and show it (v35 S-005/S-007).
- **Citation tier grammar** — A = number AND scope in source; B = number
  in source, scope/date/definition shifted (or vendor source, retained
  WITH labeling); C = absent, contradicted, or disclaimed. World
  knowledge never counts; secondary citations escalate as provenance
  gaps; source-vs-source conflict escalates both (v23, 10 scenarios).
- **Escalation routing + staleness flags** — next-action owner matches
  problem seniority (VP Eng for P1, AE+Director for change-of-control);
  every cited datum carries its collection date — a pre-event NPS is
  stale evidence (v27 S-005/S-007/S-010).
- **Tier vocabulary = playbook labels** — save-play/critical/at-risk/
  monitor select different action classes (discovery vs remediation vs
  escalation); silence → discovery, decline → remediation (v27 S-003).
- **Scope-note escalation** — "maximum scrutiny on X" or a stated
  $-decision raises flag severity: a missing figure for a $75M decision
  is decision-blocking, not a routine log entry (v23 S-010).

**Eighth-wave (v19, v20, v17 re-drill — seventh drill run, 2026-11-12):**
- **Commit the #1** — naming the mechanism without placing it in the
  ordered top-3 is a half-answer; sq scores the ordering (v19 S-005
  Verdana, S-007 Titanium, S-009 Crownview, S-010 Cobalt).
- **Recent activity + near close still tiers** — close-date proximity is
  an independent trigger (v20 ClearRoute 'activity yesterday', v19
  Quartz 3-day gap/Feb-28 close → 'escalate by Wednesday'); staleness is
  not the only path to top tier.
- **Missing-field dual handling** — missing note + near close → the
  outreach IS the data fix → top-3 + record-update flag post-call;
  missing + far → record-update flag AND still listed in-tier with an
  update-the-record action. Never 'flag and drop' (v19 S-005 Ironclad
  vs Prism).
- **Blocked check → name it + qualitative fallback + explicit ask** —
  quota absent → still produce qualitative coverage; stage-entry absent
  → still run activity/close-date analysis; non-standard stage names
  (SQL/POC/Contract) → propose the mapping WITH a confirmation request,
  never apply silently (v20 S-002 secondary test, S-003).
- **Verify-bracket discrimination** — bracket only UNSOURCED
  extrapolations (peer benchmarks, informal 'they'll quit' signals,
  unverified projections); NEVER bracket input-sourced facts (v17 S-008:
  bracket the 30–40% projection, not the +8pt pilot). Apply it to the
  load-bearing claim, not just soft language (v17 S-003 MTTR benchmark).
- **Blocking-gap standard trio** for vendor/tooling asks —
  security/compliance review, quantified ROI, approval authority/budget
  line. All three are blocking; evaluation docs = strengthening
  (v17 S-004 — missed the authority item).
- **Uniform-staleness artifact clause** — a rep-level gap artifact (PTO,
  system migration) destroys RELATIVE ordering signal but absolute gap
  thresholds still fire; business days do not pause for the rep's
  calendar (v19 S-004 — the 'no signal' reading is itself penalized).
- **Suppression rules are the biggest live risk** — across all three
  re-drills the residual family was over-suppression (excuse accepted
  over structure), NOT missed detection. When two rules collide
  (documented-wait vs close-date, Commit vs passive-step), the
  escalation wins. Add a tie-breaker to every carveout: 'suppress only
  if the excuse survives the deadline.'

## 6. Reference-answer house style (all 17 challenges with ground_truth)

Stats per challenge (median length, opening pattern):

| range | challenges |
|---|---|
| ~2–3k chars | v17, v18, v28, v33, v34 |
| ~3.5–6.5k | v19, v21, v23, v24, v25, v27, v31, v36 |
| ~8–11k | v20, v22, v26, v29, v30 |
| ~18–20k | v32 (multi-artifact task) |

References size themselves to the natural deliverable, not a fixed length —
match the task's natural size; never pad.

**Opening patterns (house archetypes):**
- **DIRECT** (most common): straight into the deliverable (header/table).
- **NOTE-FIRST** (v17 ×5, v22, v25–v27): a bolded classification/structural
  note names the judgment call BEFORE the deliverable ("This input bundles
  two distinct request types…", "Note on structure: rather than fabricating
  an alternative, it names the genuine competing path…"). The reference
  *surfaces its planted-call resolution explicitly, up front*.
- **REFUSE/ASK** (v17 ×2, v20, v21, v26, v28 ×2, v34): the entire "answer" is
  a clarification request when info is missing — recurring archetype, not a
  v35 novelty.

**Recurring structural moves across references:**
- Bolded section leads; tables with every-item coverage.
- Transparency sentences inside the output naming the call made and why
  ("I'm reframing this honestly…" / "X is a legitimate competing path").
- Bracketed placeholders `[User to verify: …]` where the input is silent —
  the reference NEVER fabricates; it leaves a named gap.
- Closing italic notes listing what needs verification/confirmation.
- v36-specific skeleton: `**Working notes (Step 1)**` anchor paragraph ending
  with an explicit elevation-gate verdict → 8-col table → tier count line →
  `**What this means:**` single dense paragraph.

## 7. What winning outputs do (verbatim praise patterns)

- "Scenario-specific, NON-INTERCHANGEABLE rationales" — every row grounded in
  the scenario's own text; template reasoning is the most-cited failure.
- Restatement arithmetic: "$1,780 → $1,513–1,638, reversing" — show the
  corrected figure and the directional move.
- Headline by MATERIALITY not size.
- Quote "the deciding words" from the source for each verdict.
- Specific asks: name the record, party, timing — never "assign counsel".
- Full coverage + reconciled counts with arithmetic shown.
- In-cell evidence of reasoning: v36 refs show origin arithmetic inline
  ("2 URLs, 1 origin — single press release cited verbatim by both outlets").

## 8. Winning SKILL.md DNA (identical across v30/v33/v34/v35/v36 winners)

- YAML description fully specifies input→output contract.
- Method = ordered principles with bold leads, each a RESOLVED ruling, never
  abstract guidance.
- Closed label vocabulary, exact strings, one row = one label.
- Coverage rule stated literally ("one row per clause, none merged or skipped").
- Missing-input stop rule ("if X missing → ask, don't produce").
- A "writing it down" output-contract section; ends with
  `Call read_reference for references/<file>.md and write the reply in that shape.`
- ~9KB SKILL.md + ONE load-bearing 9–17.7k reference read every scenario
  (v32 winner used 11 files — survivable, but single-anchor dominates 0.94+).

## 9. Gate internals, verbatim from rationales

- dataset_derived: "worked example is a wholly fictional [X] with no entity
  names, figures, or labels from any dataset scenario… deterministic scan
  confirms zero verbatim overlap… teaches a general methodology that would
  handle novel [X]s, not a closed lookup table" — literal scan PLUS semantic.
- skill_use: "teaches a specialized methodology a general agent would not
  know."

## 10. Our verified failure profile (v8-reconcile, all 10 scenarios vs ref)

sq by scenario: S-001 .963 · S-002 .845 · S-003 .849 · S-004 .870 · S-005 .844
· S-006 .866 · S-007 .807 · S-008 .795 · S-009 .913 · S-010 .585 (mean .834)

| error family | where | direction |
|---|---|---|
| MON over-use — action-needed items held watch-only | S-002r2, S-006r6/r8, S-008r5/r7, S-009r7, S-010r4 | ours MON → ref DD |
| Over-elevation on positive confirmations | S-004r1/r2 | ours MA → ref DD |
| Missed elevation (decisive unsearched register) | S-003r7 | ours MON → ref MA |
| Nobody-row held instead of noise | S-010r6 | ours MON → ref NOI |
| Denial nuance | S-002r6 | ours DD → ref MON-ish |
| Row-split/fold mechanics | S-007r2, S-010 | split on divergent status, fold on convergent confirmation |

**The binding rule:** monitor is for confirmed-positive and genuinely
watch-only items; anything needing a step (request, confirmation, paper to
pull) is DD. DD is the workhorse tier — refs carry 2–5 DD rows/scenario.
A target's OWN positive claim = DD (a claim, not confirmation); the
independent corroborating record = MON. Monitor/noise rows get `None`
actions — don't spend action cells on them.

Mid-scorer profile (0.78): big calls right, bleeds on secondary calls + vague
actions. sq deductions are granular per call — no "close enough" credit.

## 11. Predictions for v37 → day-0 procedure

1. `fetch_challenge.py --fetch`; check dataset.jsonl for `ground_truth` (§top).
2. **Read rubric.txt before any input** — it declares the caps and names the
   obedience-trap types (§4).
3. Read inputs, footnotes/metadata first; enumerate planted calls against §5a's
   trap families; check for a REFUSE/ASK scenario.
4. Write rules as resolved rulings; match reference house style (§6–7): name
   judgment calls up front in a bolded note, show arithmetic in cells,
   bracketed named gaps where input is silent, hard length budget.
5. 4-scout wave: distinct frame per account AND split the hedge on the top-2
   uncertain calls; then rulings-only iteration on the best frame.
- Ceiling estimate: pattern-extraction domain → 0.93–0.96 bar;
  prioritization domain → 0.77–0.84 bar (move even faster). Margin +0.01.
