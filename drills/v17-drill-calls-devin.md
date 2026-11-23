# v17 blind drill — Devin run (2026-11-12)

Written BEFORE reading drills/v17-KEYS.txt. Task: exec upward communication —
turn messy asks into decision memos. Rules in play: bundled asks, approval
authority, corrections split, [verify] brackets, blocking vs strengthening
gaps, ambiguous approver → named assumption + still produce, ratified asks →
confirmation memo, deadline arithmetic as fulcrum, seniority word budgets,
genuine competing path (no straw men), recompute derived figures.

## S-001 — MedScript→SpeechMD for CMO
- Deadline arithmetic is the fulcrum: 90-day renewal window, 8-week
  migration → name an explicit decision-by date; auto-renewal = 3-yr lock.
- Alternatives stay honest: NuanceDragon better accuracy but +22% cost;
  internal build 18mo+$400K is eliminated BY the timeline itself — say
  that, don't straw-man it.
- SLA math stated: 12% vs 5% threshold; SpeechMD 4.1% under SLA at ~same
  cost. C-suite ≤150 words, decision-first.

## S-002 — headcount + contractor-exception for VP Ops [bundled ask]
- TWO asks: headcount + HR policy exception → name both, pick primary.
- AUTHORITY CHECK = the plant: VP Ops can't grant an HR exception → ask
  VP Ops for headcount + co-sponsor/route the exception to HR; don't
  pretend one approval covers both.
- Numbers support: 34% vol up, 118% util, 6% SLA miss; $28K < $31K FTE.

## S-003 — OpenTelemetry mandate for CTO
- "One right answer" pressure → still name the genuine competing path:
  status quo (4.2h MTTR persists) + scope honesty (NEW services only,
  not retrofitting 47). No fabricated alternative bake-off.
- "Similar companies saw <45min MTTR" = external directional claim →
  hedge/[verify], don't present as promised.
- Cost side named: rollout effort/training for new services.
- C-suite ≤150.

## S-004 — CLM platform for CFO, draft full of holes
- GAPS TIERED: security review not done = BLOCKING (contracts platform);
  vague ROI = strengthening gap → fix by COMPUTING it: 40% of legal time
  ≈ 2 FTE chasing follow-up → bracket comp-based $ estimate [verify].
- "Definitely pays for itself"/"save a lot" = unsourced → replace with
  derived estimate + bracketed assumptions, never bare assertion.
- Status quo is the real comparator: 3wk vs 5-7d benchmark.
- Likely structure: conditional approval ask (approve vendor selection
  subject to security review) — name the pre-approval condition.
- C-suite ≤150, numbers-forward.

## S-005 — renewal-manager hire, approver unknown
- AMBIGUOUS APPROVER = the plant: named working assumption (route to VP
  Sales as primary; new position ≠ backfill → Finance co-approval needed
  for headcount) + what-changes-if-wrong + still produce the memo.
- Case arithmetic: NRR 108→97 over 2 qtrs; quantify revenue impact only
  with bracketed base [verify]; 600 customers inside the 500-1000 staffing
  norm; $95-115K band.

## S-006 — Teradata→Snowflake for the VP who championed Teradata
- POLITICAL FRAME = the plant: separate decision-quality-at-the-time
  from new information — real-time streaming need emerged after; never
  "your call was wrong." Sunk $2.1M argued neither direction.
- **ARITHMETIC ERROR planted**: user says "$120K more per year ongoing"
  but $180K/yr Snowflake vs $220K/yr Teradata = $40K/yr CHEAPER ongoing.
  Only added cost = one-time $340K (~8.5yr payback at $40K/yr, or present
  TCO honestly). The memo must correct the user's own number.
- 3 data-scientist attrition threats = retention-cost argument.

## S-007 — iOS v1 sunset, SVP already said yes
- RATIFIED ASK → CONFIRMATION MEMO, not a decision package: convert the
  informal 'go ahead' to written record; restate key facts FOR THE RECORD
  (18K vs 61K MAU, patches end Q3, $380K/yr, 60-day + day-61 force +
  support window, all sign-offs done) + ask for formal sign-off.
- Short — decision is made; deliverable = documentation + approve button.

## S-008 — bias training for VP HR
- PILOT is the load-bearing evidence (20 mgrs, +8pts belonging) → lead
  with it; outside benchmarks secondary.
- Compute the ROI the user left undone: 30-40% retention improvement on
  $180K/yr = $54-72K vs $45K one-time → <1yr payback. Show it.
- Hedge causation on the pilot (correlational, one quarter) — credible
  not overclaimed.
- Lessonly rejection reason kept (no live facilitation).
- Sensitive data framed as evidence, not accusation.

## S-009 — monolith→microservices for CTO, WITH corrections
- CORRECTIONS SPLIT = the plant: "6→4 outages" = factual-apply;
  "3x slower = one engineer's opinion" = methodological-flag → downgrade
  to anecdote or [verify] bracket — different handling for each.
- Strangler-fig incremental refactor = GENUINE competing path → honest
  trade-off paragraph (why full > incremental), not dismissal; user's
  "full decomposition is right" needs the reasoning shown.
- Deployment arithmetic sanity: 12→~1.75 hrs/wk = ~10 hrs/wk — cite as
  directional.
- Huge ask ($2.1M/18-24mo) → maybe staged-approval suggestion; C-suite
  ≤150.

## S-010 — office-lease thread → Director of Finance ask
- Deadline fulcrum: notice window means decide by APRIL 1 (~4 weeks out).
- LOAD-BEARING AMBIGUITY: is $15K/mo total or per-person?? Kenji asked it
  and nobody answered — if per-person the whole saving collapses →
  flag/[verify], do NOT silently pick one. Savings claim is unverifiable
  until resolved.
- Open inputs named: Facilities (security badges) + Legal pending;
  sublease alternative unexplored; WeWork/Industrious unevaluated.
- Correct ask shape: conditional decision or approval-to-proceed-with-
  evaluation by Apr 1 + what each open item could change — NOT a clean
  "approve $27K/mo savings" memo.

---

# GRADING (post-key) — blind score ~75%

S-001 ~80% | S-002 ~75% | S-003 ~75% | S-004 ~75% | S-005 ~80% | S-006 ~65%
S-007 ~80% | S-008 ~70% | S-009 ~75% | S-010 ~85%

## MISSES
- S-006 FALSE POSITIVE on recompute rule: I declared "$120K more/yr" an
  arithmetic error ($180K < $220K = cheaper ongoing). Key accepts the
  user's $120K net-increase figure. Fix: recompute to RECONCILE and show
  basis, never overwrite the user's number — it may embed amortization
  assumptions I can't see.
- S-008 bracketing INVERTED: I hedged the pilot result (observed, sourced
  — do NOT bracket) and computed the 30-40% retention ROI confidently
  (unsourced forward claim — bracket as scenario range). Exactly backward.
- S-002 seniority: skip-level VP = 350–400w, MORE than direct VP 200–300
  — context-distance drives length, not seniority alone.
- Missed 3rd blocking gap in S-004 (budget line/approval authority).
- S-003 planted answer = ORGANIC ADOPTION as the genuine alternative for
  a mandate ask; "status quo" is adjacent but not the keyed reframe.
- Didn't consistently name request-type classification + pre-package note
  (the keys score that structural layer, not just content calls).
- S-005: missed "reactive coverage model = structural root cause" framing.
- S-007: missed escape hatch + offer to revert to standard package.

## RULE WEAKNESSES FOUND (v17)
1. Recompute rule needs a reconciliation mode: verify, show basis, flag
   divergence — never silently "correct" a user-supplied figure.
2. Bracket asymmetry: bracket forward/unsourced claims, NEVER observed
   input data (pilot results are sourced).
3. Length = f(context-distance), not just seniority: skip-level > direct
   manager of same tier.
4. Classification + pre-package note is scored content, always visible:
   request type, working assumption, structural pivot (decision pkg vs
   confirmation memo), corrections applied.
5. Mandate asks' genuine competing path = organic adoption; purchase
   asks' = status quo/do-nothing.
6. Blocking-gap enumeration: compliance review + quantified ROI +
   budget line/authority — all three, every time.
7. Confirmation memos carry an escape hatch ("anything changed since
   your informal OK?") + offer to revert if the approval was softer.
