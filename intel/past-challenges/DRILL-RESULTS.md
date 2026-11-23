# Enumeration Drill Results — full corpus (2026-11-11)

Blind enumeration drills run on every challenge with a revealed answer key.
Method: read rubric + scenario inputs only, enumerate planted calls, score
against `judge_notes` / `rubric_descriptions`. v35 scored via
`dataset.revealed.jsonl`.

## Scorecard (~planted-call hit rate per challenge)

| challenge | task family | score | standout result |
|---|---|---|---|
| v17 exec asks | persuasion memo | ~85% | caught ratification-vs-decision, alternatives-reframe, arithmetic error |
| v18 email triage | classify+draft | ~75% | nailed minimal-ack (estoppel) + no-leak replies |
| v19 daily briefing | prioritization | ~50% | WORST — ranking heuristic systematically wrong |
| v20 pipeline coach | anomaly flag | ~65% | good data-integrity calls; missed boundary overrides |
| v21 forecast scrub | anomaly flag | ~55% | missed refuse-vs-caveat (circular quota derivation) |
| v22 win/loss | classify drivers | ~80% | strong: evidence-vs-tag mismatches |
| v23 citation audit | claim tiering | ~85% | strong: partial-audit, truth!=cited, scope-stripping |
| v24 competitive intel | signal tiering | ~75% | biggest!=relevant; learned empty-section legitimacy |
| v25 account expansion | whitespace | ~80% | nailed decline-the-MAP calls |
| v26 save plans | churn triage | ~75% | deadline arithmetic = strength (both clause traps) |
| v27 QBR churn brief | risk triage | ~85% | score-vs-reality inversions now instinctive |
| v28 signal triage | event classify | ~60% | missed zero-rows rule twice (no context = no table) |
| v29 OKR narratives | progress verdict | ~55% | status-theater, deadline-pace, conditional-pass |
| v30 MBR briefing | metric classify | ~85% | pull-forward trap + unclassified data gaps |
| v31 comparability | benchmark tier | ~80% | denominator/unit mismatches = strength |
| v32 compliance gaps | audit status | ~65% | 'Partial' is itself a trap answer (Missing vs N/A) |
| v33 regulatory scope | applicability | ~60% | discovered unclassifiable-verdict family |
| v34 obligation delta | diff classify | ~65% | delta taxonomy (clarify/expand/relax) learned |
| v35 exec decks | storyline | ~65% | ALL misses lived in footnotes |

**Corpus average: ~71%.** Detection (finding the trap) now ~90%; losses are
concentrated in classification granularity and refuse-artifact calls.

## Run 2 — targeted re-drill of weakest suites (2026-11-12)

Run against the post-fifth-wave rules in ANALYSIS §5. Call logs:
`drills/vNN-drill-calls-r2.md` (calls + per-scenario grading).

| challenge | run 1 | run 2 | delta | residual family |
|---|---|---|---|---|
| v17 exec asks | ~85% | ~82% | flat | bracket-discipline on load-bearing unsourced claims; 3rd blocking gap (approval authority) |
| v19 daily briefing | ~50% | ~70% | +20 | rank commitment (identify mechanism, hedge the #1); recent-activity+near-close tiering; uniform-staleness overreach |
| v20 pipeline coach | ~65% | ~75% | +10 | suppression-overfiring: documented-wait/Commit/passive-step excuses overridden by close-date structure; stage-name mapping secondary test |

New verified laws folded into ANALYSIS §5 'Eighth-wave' block. Headline
finding: detection is saturated (~95%) — run-2 losses are ALL in the
label/escalation layer, and the dominant error direction flipped from
missed-flags to over-suppression. Every carveout rule now needs a
tie-breaker: suppress only if the excuse survives the deadline.

## Systematic miss families (ordered by frequency)

1. **Refuse-to-produce calls** — no context/date/prior-text means ZERO
   artifact, not a provisional one (v20 S-002, v28 S-002/S-009, v34 S-005,
   v35 S-004). Caveated compliance is scored as failure.
2. **Footnote/notes carry the trap** — arithmetic errors, basis mismatches,
   expiring dates, exclusions all hide in notes (v35 throughout, v17 S-001,
   v20 S-001). Read every footnote as a candidate planted fact.
3. **Score/status vs reality inversions** — tracker GREEN on a missed
   target, health 82 on a churning account, "Partial" on a missing control
   (v26-29, v32). State-of-record vs state-of-evidence.
4. **Boundary arithmetic** — exactly-on-threshold values, one-day-under
   thresholds overridden by structural logic (v20 S-001, v30 S-003, v31).
5. **Direction of change** — 45->30 = tightening, 30->60 = relaxing;
   "threshold changed" isn't a verdict (v34 S-006/S-007).
6. **Cross-reference check before "net-new"** — a named prior instrument
   (SL-2023-04, OG-2024-17) makes it clarification+doc, not new (v34).
7. **Cascade/one-cause linking** — one driver behind multiple symptoms is
   scored (v30 S-003); conversely same-surface different-cause must be
   differentiated (v22 S-004, v34 S-010).
8. **Headline vs surface anomaly** — the visible mismatch is often the
   decoy; structural verdict leads (v21 S-001/S-010, v24, v28).
9. **Primary-signal naming** — "silence" vs "usage decline" are different
   playbooks; commit to one primary, don't list all (v26-27).
10. **Megadeal distortion** — one large item driving an aggregate stat must
    be named as single-deal before it becomes a pattern (v22 S-001/S-003).

## Now-stable strengths (don't over-drill)

- Deadline/notice-window arithmetic including buried clause overrides
- Denominator/unit/basis comparability (episode!=visit, count!=UPB, etc.)
- Evidence-vs-tag mismatches; unevidenced = unclassified
- Data-gap handling (missing actuals -> unclassified, never fabricate)
- Score-vs-reality inversions (healthy score masking churn and vice versa)
- Decline-the-artifact when the request is premature (expansion MAP on a
  dying account, save plan after valid non-renewal notice)

## Independent verification run (agent blind drill, v34, 2026-11-12)

Second operator, same method (rubric-first, §5 checklist, no peeking at
ground_truth). Result: ~6/10 clean — S-005/S-006/S-008/S-010 hit; S-002/S-004/
S-007/S-009 partial; S-001/S-003 missed the primary trap. Detection ~95%,
label accuracy ~60% — the SAME miss profile as the human drills, which
confirms the miss families are properties of the suites, not the operator.
Live-reproduced: Yes vs Yes-doc (S-001, S-007), cross-reference clarification
(S-003), ambiguous→Review (S-002), definition-as-scope-expansion (S-004).
New rules from this run are folded into ANALYSIS §5 label-taxonomy rulings.

Second run (v33, after the new rules were written): 10/10 top-line verdicts,
~85-90% planted-fact granularity — vs ~60% on v34 pre-rules. The new rules
were directly load-bearing (no-derivable-criteria → NEEDS-LEGAL-REVIEW on
S-004; group-aggregation kills on S-002/S-006; carve-out-before-thresholds
on S-010). Residual micro-family found and added: authority-status checks
(adopted schedule = resolved, not ambiguous; unpublished delegated act moot
if a live register already states status), gate-vs-delimiter thresholds,
decorative ambiguity. Caveat: S-004 was partly primed by the existing rule.

## Full-sweep verification runs (agent blind drills, 2026-11-12)

Same operator, same protocol across the whole keyed corpus (rubric-first,
enumerate blind, grade against judge_notes). Scores are estimated
planted-call hit rates, not leaderboard equivalents.

| Suite | Task family | Score | Dominant remaining miss |
|-------|------------|-------|------------------------|
| v17 | strategy-memo rewrites | ~85% | derivation depth (2nd-order math asks) |
| v18 | inbox triage | ~82% | respect "no action needed" = no draft |
| v19 | daily sales briefing | ~55% | ranking grammar (see below) |
| v20 | pipeline anomalies | ~60% | threshold overrides (below) |
| v21 | forecast review | ~65% | coverage-context materiality |
| v22 | win/loss classify | ~80% | hold N interpretations at Low conf |
| v23 | citation audit | ~85% | implied-arithmetic check |
| v24 | competitive watch brief | ~78% | complicates-vs-contradicts dial; rumor quarantine |
| v25 | whitespace/expansion | ~86% | catalog-gate citation; MAP milestone sizing |
| v26 | at-risk save plans | ~78% | timing-causality classification; don't-guess ≠ don't-classify |
| v27 | QBR churn risk | ~82% | exact tier landing; explicit scope-refusal |
| v28 | account-signal triage | ~62% | fuse-evidence; company-level money = Discard |
| v29 | OKR narratives | ~78% | empty-section is a scored answer |
| v31 | comparability tierer | ~86% | directional math under-derived twice |
| v32 | compliance gaps | ~90% | — (label rules carried cleanly) |
| v30 | MBR metrics narration | ~80% | headline = run-rate consequence, not cleverest trap |
| v31 | comparability tierer | ~86% | directional math under-derived twice |
| v32 | compliance gaps | ~90% | — (label rules carried cleanly) |
| v33 | regulatory triage | ~95% | authority-status micro-family |
| v34 | obligation delta | ~60% | label granularity (pre-rules run) |
| v35 | deck storyline | ~78% | commit-vs-hedge on verdict; refusal form (offer options) |

Aggregate (19/19 keyed suites drilled, 2026-11-12): detection saturates
(~95%); classification is now the binding constraint in (a) ranking/pacing
families (v19/v20), (b) "no artifact is the answer" calls under user
pressure, (c) headline/tier calibration — pick the highest run-rate
consequence and land on the exact named tier, and (d) verdict commitment —
references commit to a direction with named caveats rather than hedging
(v35 S-007: BID while explicitly reopening the CEO's rule).

### New rule families harvested this sweep (folded into ANALYSIS §5)

- **v28 triage grammar**: company-level money events (funding, earnings)
  = Discard unless tied to the budget owner's scope; escalation needs a
  fuse (<90d to a decision gate) evidenced in the events, not vibes;
  rumor+confirmation dedupes to ONE row at the confirmed source; keep
  contradictory signals in the table and resolve by source-authority
  hierarchy; "provisional/best-guess" user pressure is a meta-trap —
  check whether context is actually missing first.
- **v29 OKR grammar**: backward-deadline reasoning overrides pace ratios
  (fixed external date = the binding constraint); effective pace is
  computed against the actual internal gate, not period end; binary
  milestones get tracker-GREEN overridden by the underlying verdict;
  owner KR-redefinition = scope-creep miss, not partial; an explicitly
  empty "no decisions required" section is a legitimate scored output;
  one shared team = one conflict, not two.
- **v32 gap-audit grammar**: artifact-present != control-operating
  (unadopted template = Missing, "Partial" is the trap label); evidence
  must fall inside the audit window; in-flight evidence requests count
  as absent; resist uniform downgrade — genuine dated artifacts stay
  Implemented; N/A-with-justification is not a gap; future audit period
  reverses urgency (design-complete deadline = period start, not
  fieldwork); the *process* around a tool is the control, not the tool.
- **v24 watch-brief grammar**: 'contradicts' vs 'complicates' is a real
  dial — contradicts = thesis claim directly falsified, complicates = a
  wrinkle but claim may still hold (missed 3× by over-committing);
  rumors stay quarantined in open-questions even when they CORROBORATE
  confirmed signals — never merge to build a confident narrative (v24
  S-006); partner/provider/regulatory signals get a dependency-exposure
  frame, not the competitor tag taxonomy (v24 S-004/S-005/S-006);
  internal CS data counts as a real-time signal (v24 S-010); empty
  core-section is a scored answer (v24 S-009); no prior thesis → zero
  confirms/complicates/contradicts tags (v24 S-002).
- **v25 whitespace grammar**: org-chart name with zero usage/ticket/meeting
  data = Needs Discovery, NEVER a tier (fabrication bait — Ellison,
  Whitmore, Chou, Ashby); product-catalog requirements are hard gates
  (size minimums, required stakeholder roles — disqualify explicitly);
  exact tier count + MAP milestone count (3–6 band) are scored, padding
  fails; risk context can veto the deliverable itself (no expansion MAP
  on a HIGH-risk account); dual-reading tickets get both readings named
  before resolution.
- **v26 save-plan grammar**: contract addenda re-derive the window EVERY
  time (ARR overrides, premium-tier clauses — S-001/S-008); timing
  causality classifies root cause (the acute-and-earliest signal wins;
  volumetric noise ≠ cause — a new exec is a decoy when complaints
  predate arrival and the champion is intact); 'don't guess' from the
  requester still wants a committed primary when evidence supports one;
  a validly-delivered notice ends the save question — the only remaining
  action is the win/loss interview; internal process failures (ignored
  product-team flags) get named, not hidden.
- **v27 churn-brief grammar**: health score is always subordinate to the
  compounding signal stack (82 can hide a dead account; 29 can hide a
  recovery); land on the EXACT named tier (S-002 = at-risk not low;
  S-010 = critical not elevated); refuse out-of-scope asks explicitly
  (S-009 deck request); undeterminable-pending-info is a real verdict
  (S-007 acquisition); primary-signal must be ONE named driver, not a
  list (silence vs usage-decline vs competitive are different plays).
- **v30 MBR grammar**: headline = highest run-rate consequence, not
  biggest delta or cleverest trap (S-001 complaints > sensor story;
  S-002 supply chain > comp-beat; S-003 absenteeism-root > fuel cliff);
  decompose every beat (pull-forward, rebate, contract expiry, single
  exit) and state whether the underlying run-rate misses target; a fix
  resolves the CAUSE, not automatically its downstream consequences;
  boundary values get explicit disclosure (+5.0% exactly = at-risk);
  baseline-already-above-target = thin-resilience flag.
- **v31 comparability grammar**: a footnote that quantifies a
  reconciliation can still CONFIRM a mismatch — a stated adjustment
  range is evidence for REJECT, not a bridge (v31 S-001); always run
  the directional derivation — which way does the definitional gap
  push, and does it flip the client's intended narrative (S-001 31–38%
  → $318–351 < $487; S-005 collected > listed; S-007 cession direction;
  S-009 count-vs-UPB direction)? Prose sources are not blanket-
  downgraded — explicit confirmations inside prose count as confirmed
  (S-007 Fig Z, S-009 Fig P); a unit conversion needing an external
  factor (per-visit → per-episode) = REJECT, not 'close enough'
  (S-006).
- **v35 storyline grammar**: footnotes carry the verdict — check whether
  they DEFUSE the headline concern (S-007 capacity resolves by
  mobilization date) or GUT the thesis (S-005 credit expiry before
  purchase window); references commit to a direction with named caveats
  rather than hedging (bid-with-rule-revisit, not decline-or-reframe);
  refusal form = name the missing field AND offer the plausible option
  set (S-004's three candidate decisions); decision-made decks are
  persuasion artifacts — honor the strongest objection visibly.

## Residual risks for the next competition

- Refuse-artifact calls still split ~50/50 under "just do your best"
  pressure from the prompt — the split-vote design should put
  refuse-vs-proceed on coin-flip rows when ambiguous. (Still true after
  v28 S-002: caught the rule on S-009, missed it on S-002 in the same
  suite — the check must run on EVERY scenario, not just obvious ones.)
- Ranking/pacing families (v19, v20) remain the weakest — the override
  conditions are scenario-specific and don't compress into one rule;
  re-drill these two before the drop.
- Delta/taxonomy classification needs the second-pass label check.
- Long-input tail: traps planted in the LAST items of long pools are the
  easiest to miss — enumerate to the end, always.

## Fourth drill run — fresh operator, v19 + v20 + v17 (2026-11-12, ~3h to v37 open)

Third independent operator, same protocol (rubric-first, input-only
extraction to drills/, enumerate blind, grade vs judge_notes). Same miss
profile confirmed — misses are suite properties, not operator quirks.

| Suite | Task family | Score | Dominant misses |
|-------|------------|-------|-----------------|
| v19 | daily briefing (ranking) | ~67% | final-stage carveout, effort-to-impact rank, decline-extra-request |
| v20 | pipeline anomalies | ~61% | hard-stop missing-datum, threshold-vs-structure, passive next-steps, 3× coverage norm |
| v17 | exec ask memo | ~72% | approval-authority check, evidence-problem typing, gap tiering |

Drill notes + keys extracted: `drills/vNN-*.input.txt`, `drills/vNN-drill-calls.md`, `drills/vNN-KEYS.txt`.

### Where the current rules FAILED (weaknesses found in practice)

1. **Refuse-artifact: a declared assumption is NOT a resolution.** v20 S-002:
   missing 'as of' date → the only scored answer is a hard stop + targeted
   ask. I proceeded with a declared anchor assumption = same failure as
   silently assuming. Refinement: *a missing anchor datum blocks; it does
   not get assumed. The partial-output allowance is date-INDEPENDENT work
   only* (stage-mapping proposal, blank-field flags) — the blocked
   dimension gets zero rows, not a caveat.
2. **Decline-the-extra-request** (new family, sibling of refuse-artifact):
   v19 S-007 — an out-of-scope request inside a scoped deliverable
   ("build me a bottom-up forecast" inside a daily-briefing skill) =
   decline cleanly + point to the right channel + deliver the FULL normal
   deliverable. Not "build it anyway," not "reduce the briefing to
   compensate."
3. **Final-stage carveout beats close-date urgency** (v19): verbal
   received / contracts-in-drafting / e-sign-out = monitor tier even with
   an imminent close — UNLESS the signature mechanics are still open
   (Waverly: contract review timeline unknown = act). The discriminator
   is whether a DEFINED next step is already in the customer's court.
   Corollary: an e-sign/reminder sent YESTERDAY is a documented wait —
   re-chasing it is manufactured urgency (Meridian Ports miss).
4. **Effort-to-impact ranks above deal size** (v19 S-006/S-008): a
   5-minute self-created fix unblocking $185K outranks a $460K deal;
   "verbal intent, one email closes $200K" outranks a larger deal in
   documented legal wait. Ranking grammar = irreversibility ×
   effort-to-impact × close-date, not revenue × staleness.
5. **Automated and one-sided activity ≠ engagement** (v19 Silica, v20
   Orbital): CRM auto-sends and sent-but-unanswered emails don't count
   as touches — effective last-activity = last CONFIRMED two-way or
   rep-initiated-and-answered contact. Extends state-of-record-vs-
   evidence to the activity-type dimension.
6. **Structural close-date incompatibility overrides thresholds** (v20
   throughout): a deal that PASSES its activity threshold is still
   at-risk when the close date can't structurally be met (13d silent
   <14d threshold but close in 4d; signed term sheet awaiting board
   ratification with unknown calendar; Discovery-stage with a close in
   weeks). At-threshold-exactly = borderline, then escalate on
   close-date logic (Aquifer). Threshold compliance is never the verdict.
7. **Passive or vague next-step = at-risk signal** (v20): "awaiting
   feedback", "waiting for sign-off", "stakeholder mapping in progress"
   = no owner+action+date = at-risk on QUALITATIVE grounds even with
   fresh metrics and Commit forecast. A Commit resting on unprompted
   customer action is a category mismatch by itself.
8. **Pipeline coverage norm = 3×** (v20): raw open-ARR ÷ remaining-quota
   below ~3× is critically thin — 0.86× AND 1.51× both flag. Blind
   drill scored 1.51× as "OK": the domain constant was unknown.
   Weighted coverage is expected to be lower — say so.
9. **Inward date-pull = integrity anomaly, not progress** (v20 S-008):
   close-date SLIPPAGE detection has an inverse — a date pulled forward
   twice while stage doesn't advance = manipulation/fantasy-dating
   flag, and a PAST close date is a structural pre-table flag that
   excludes the row from coverage and ARR sort until resolved.
10. **Approval-authority check** (v17 S-002): does THIS approver own
    THIS ask? VP Ops can't grant an HR policy exception — flag the
    routing fallback explicitly inside a bundled ask.
11. **Evidence-problem typing** (v17 S-009): user corrections split
    into (a) factual corrections → apply them and (b) methodological
    weaknesses → flag for removal-or-measurement. Identical bracketing
    of both = the gaming tell. Unsourced claims get [verify] brackets;
    sourced facts don't (don't over-bracket the pilot, v17 S-008).
12. **Bundled/ambiguous input handling** (v17 S-002/S-005/S-010): name
    the classification, pick a primary, state the working assumption +
    what changes if wrong, STILL PRODUCE — and tier gaps as blocking
    (can't send) vs strengthening (nice-to-have).
13. **Ratified-but-undocumented asks → confirmation memo** (v17 S-007,
    re-verified): a "your decision: approve X" structure on a fait
    accompli misleads; pivot document type, memorialize, offer revert.
14. **House-format layer is a second blind spot beyond calls:** the
    misses split into judgment-call misses AND format-structural ones
    (v19's Tier/Top-3-outbound/Needs-Record-Update contract; v20's
    at-risk/sandbag labels + exec-summary-first; v17's classification-
    note + decision-line + seniority word budget). Blind enumeration
    can cover judgment calls; format contracts must be extracted from
    rubric.txt deliverable language + winners' outputs in the first
    hour — fold format extraction into the T+0 rubric read.

## Fifth drill run — same operator, v31 + v30 + v24 (2026-11-12)

v37-adjacent families: diligence math, headline selection, thesis pressure.

| Suite | Task family | Score | Dominant misses |
|-------|------------|-------|-----------------|
| v31 | comparability tierer | ~78% | over-rejecting: confirmed-estimable mismatches sent to REJECT instead of LOW |
| v30 | MBR briefing | ~80% (blind half) | headline = metric-with-root-in-sentence, not root-first |
| v24 | competitive watch brief | ~75% | contradicts/complicates dial errors BOTH directions; let one verifiable signal into an all-thin core |

### New rule families harvested this run

15. **v31 tier grammar — confirmed-mismatch ≠ REJECT** (S-001/004/005/009
    corrections): REJECT = a confirmed fatal mismatch (unit,
    numerator/denominator basis) OR all dimensions unresolvable. LOW = a
    confirmed mismatch whose direction is estimable, or 2-of-4 dimensions
    confirmed. MEDIUM = 3 confirmed + 1 inferred. My systematic bias:
    collapsing "mismatch" into REJECT (Fig γ subsidies-in-numerator +
    capacity-denominator = LOW direction-only, not REJECT; Fig 2
    period+segment confirmed with definition unconfirmed = LOW not
    REJECT). Also verified twice: a quantified footnote that PROVES the
    mismatch still means REJECT (footnote confirms, doesn't bridge), and
    prose sources that explicitly state a dimension CONFIRM it — no
    blanket prose downgrade (Fig Z AM Best "net earned premium basis, US
    GAAP, calendar year" = 3 confirmed).
16. **Headline-rejection protocol:** when the reader's intended headline
    is the rejected figure, flag it BEFORE the table (not buried in a
    rationale cell), name the narrative reversal explicitly (applying
    the stated adjustment makes the comparator LOWER than us — the
    "below market" premise inverts), and make every re-retrieval ask
    name the specific artifact ("calendar-year marine combined ratio on
    net premium basis"), never "request more detail."
17. **v30 headline grammar:** headline = the METRIC with the largest
    run-rate consequence, root cause riding in the same sentence
    ("maintenance completion fell 9.6 pts, driven by PM understaffing")
    — not root-cause-first framing. Qualification-typing: identical
    "seasonal" labels carry different severity — reversal-type
    (underlying run-rate is BELOW target = disguised miss →
    needs-attention) vs lift-type (will partially reverse later =
    qualified beat). Regulator-trigger proximity (CMS 6.0 at current
    5.8) = an ACTION item, not a monitoring note.
18. **v24 contradicts-vs-complicates dial — errors verified in BOTH
    directions** (S-003 over-called to contradicts, S-004 under-called;
    S-005 over-called): CONTRADICTS = a shipped/funded FACT that directly
    falsifies a stated thesis claim (feature shipped the thesis said was
    absent; enterprise sales hire falsifying the SMB-only read).
    COMPLICATES = pressure arriving through a DIFFERENT vector than the
    claim addresses (DAT distribution threat vs an analytics-DEPTH claim;
    homepage-marketing pivot vs product-substance claim). Check each tag
    against the claim's exact wording — "the analytics depth thesis may
    still hold" = complicates.
19. **v24 proximity vs evidence are two axes:** core needs BOTH exposure
    AND evidence clarity. Verified fact + ambiguous impact = adjacent
    (VP departure — the event is real, impact unclear → tier it, state
    the ambiguity). Unverified source = open question. In an all-thin
    batch the most-verifiable item STILL doesn't reach core — meaning-
    ambiguous isn't classifiable (S-009: empty core was the scored
    answer; I let one signal through). Internal CS/inbound data =
    first-class market-movement signal (S-010). Dual-audience
    contradictory signals (compliance homepage + engagement blog the
    same week) = parallel positioning — name both, don't declare
    contradiction.
20. **Empty sections are scored answers — third confirmation:** empty
    core section (v24 S-009), explicitly-omitted synthesis with the
    reason named (v24 S-008), zero-row tables (v28/v34). Generalizes:
    EVERY structural slot in the output contract can legitimately be
    empty when evidence doesn't fill it — but the emptiness must be
    NAMED with the reason, not just absent.
21. **Synthesis = cross-signal CLAIM, not restatement** (v24 C5, all 10
    scenarios): the "what this means" section must name a pattern no
    individual entry already made (two actors converging simultaneously;
    distribution squeeze + buyer expansion; opposite-direction forces on
    mid-market; the 90-120-day window from hire-timing + live inbound).
    Restating the two best signals side-by-side = the gaming tell.

### Residual risks (updated after run 5)

- Refuse/hard-stop calls remain the highest-variance family — three
  runs, three different wrong-direction errors (proceed-with-assumption,
  partial-fill, over-produce). Day-0 rule: enumerate a
  refuse/empty/degrade candidate for EVERY scenario; when the rubric
  declares a completeness cap, check twice.
- Tier-boundary landing (LOW vs REJECT, MEDIUM vs HIGH, adjacent vs
  core vs open-question) is the second constraint — the fix is the
  "what does this error cost the user" test: fatal-to-purpose → REJECT;
  usable-with-caveat → LOW; fact-solid-meaning-fuzzy → adjacent;
  fact-unverified → open question.
- The contradicts/complicates dial needs the claim-vs-vector check on
  every tagged signal — errors were split 50/50 across directions.
- Synthesis-quality is scored separately from call-quality: a correct
  enumeration with restatement-style synthesis still loses C5/output-
  quality credit. The cross-signal claim is itself a planted call.

## Sixth drill run — same operator, v35 + v23 + v27 (2026-11-12)

| Suite | Task family | Score | Dominant misses |
|-------|------------|-------|-----------------|
| v35 | exec deck storyline | ~75% | apex inversion on policy-conflict; missed arithmetic re-checks |
| v23 | citation audit | ~92% | near-clean; implied-arithmetic inconsistency + decision-blocking frame |
| v27 | churn-risk brief | ~82% | forced a tier on an unratable account; escalation routing; staleness flags |

### New rule families harvested this run

22. **Recompute every derived figure the input hands you** (v35 S-001,
    v23 S-010): "7% of remaining budget" was actually 11.5%
    ($22M/$192M); claimed "+31% growth" over a $4.1B source figure is
    actually +76%. An input number is a CLAIM, not a fact — implied
    arithmetic that doesn't reconcile is fabrication evidence and
    belongs in the self-check/log.
23. **Policy-conflict ≠ evidence-contradiction** (v35 S-007, scored
    wrong): when evidence supports proceeding but a stated internal
    policy is violated, apex = "proceed AND name the policy conflict as
    a conscious override decision" — NOT decline. Decline-flavored apexes
    are for evidence that undercuts the case itself (v35 S-005: notes
    gutted the loan economics → "do not approve without conditions").
    Wrong apex direction caps at 0.10 — highest-cost miss on the run.
24. **Compute the derivable worst-case comparison** (v35 S-005/S-007):
    break-even win probability ($1.4M/$30.8M = 4.5%), no-credit payback
    (26 yrs) — the scenario's deciding number often isn't printed; it
    must be derived and shown.
25. **Citation tier grammar** (v23, confirmed across 10): A = number
    AND scope both in source. B = number in source but scope/date/
    definition shifted, or vendor provenance (retain WITH labeling —
    dropping vendor data entirely is also wrong). C = absent from all
    sources, source says the opposite, or source explicitly disclaims
    the claim. Sub-rules: world knowledge never counts (plausible-but-
    unsourced = C); secondary citation = provenance gap → escalate, not
    ground; source-vs-source conflict = escalate both, never silently
    pick; compound sentences split into sub-claims; scope notes raise
    stakes — a missing figure for a $75M decision is a DECISION-BLOCKING
    gap, not a routine flag.
26. **OOD = refuse the tier** (v27 S-007, scored wrong): when the
    framework's premise breaks (acquisition: unknown platform, vendor
    policy, contract honor), the scored answer is "unratable + why +
    what would resolve it" — not "at-risk with caveats." Same family as
    empty sections: an explicit framework-refusal is an output.
27. **Escalation routing is scored** (v27 S-005/S-007): the next-action
    owner must match the problem's seniority — VP Support Engineering
    for a P1, AE+CS Director for a change-of-control; defaulting every
    action to the CSM loses output_quality.
28. **Staleness flags on every datum** (v27 S-001/S-005/S-010): a Jan
    NPS is not current evidence; a pre-P1 NPS is not post-P1 sentiment;
    a score computed before a champion departure is a stale artifact.
    Cite the date when citing the number.
29. **Tier vocabulary is playbook labels, not severity words** (v27):
    save-play ≠ critical ≠ at-risk ≠ monitor — each implies a different
    next action class (discovery vs remediation vs escalation). Silence
    = discovery playbook; usage decline = remediation. Naming the wrong
    signal type produces the wrong playbook even at the right severity.
30. **Internal-vs-customer scope re-verified** (v27 S-009): an embedded
    customer-facing ask inside an internal-deliverable packet gets an
    EXPLICIT refusal — ignoring it also fails.
