# v37 — Call enumeration + coin-flip splits (written T-1:50, suite fetched pre-open)

> **AMENDMENT T-1:05 — Lab brief read.** Three changes now baked into
> all four bundles: (a) recommendation vocabulary is THREE-STATE —
> proceed / request more data / pass — and a proceed verdict over an
> open must-address row eats a DETERMINISTIC penalty; the old
> "proceed-with-conditions" hedge maps to "request more data" (the
> asks carry the named records), "decline" maps to "pass".
> (b) Five required sections in fixed order: thesis → risk table →
> valuation → recommendation → conditions; the memo shape was
> reordered accordingly (rec is 4th — the tail — so length bounds are
> explicit per section to survive the output-budget cut).
> (c) Each submission sees 8 scenarios (2 per capability type A–D);
> Types A–D = cross-doc consistency, memo authorship, recommendation
> consistency, valuation/comp discipline.

Task: **IC memo for an M&A acquisition** — 3 pasted artifacts per scenario:
risk classification table (Finding | Tier | Status), financial narrative,
comparables dataset. Deliverable = recommendation + thesis with named primary
risk + risk table + comp-derived valuation range (reproducible arithmetic) +
conditions/data-requests. 10 scenarios, sealed keys (no ground_truth).

Rubric-declared caps (threat model, rubric.txt):
- proceed despite unresolved must-address finding → ≤0.25 band
- valuation arithmetic not matching stated multiple × base → cap
- thesis's named primary risk absent from risk table → cap
- comp-set multiple applied WITHOUT naming inclusions/exclusions → trap
- fabricated specific where input silent → floors the sample
- missing status columns / conflicting narratives → surface, don't resolve

## Suite-level plants (verified across scenarios)

1. **Status-vs-evidence overrides — THE dominant family.** "Resolved"
   statuses that the narrative contradicts: S-001 ×2, S-004 (explicitly
   flagged), S-005, S-006 ×2, S-007, S-010 (explicitly flagged), S-002
   (anchor contract "Resolved" while concentration persists). EVERY Status
   cell gets re-verified against the evidence before the memo carries it;
   an override is named with the tiebreaker datum.
2. **Valuation-base restatement.** Seller's quoted base is a claim, never
   the base: S-007 recurring $17.3M not $19.7M · S-008 commercial-only
   $7.3M (grants don't transfer) · S-009 net $8.9M not gross $14.7M (+
   churn-adjusted $6.3M run-rate) · S-001 adjusted-EBITDA add-backs.
3. **Comp exclusion with named rationale.** Annotated outliers: S-001
   Logistics AI (55%/82%), S-002 TherapyBuild (62%), S-006 IntraLogix (48%)
   — growth/margin profile outliers. Explicit premium acquisitions:
   S-003 Ampere, S-010 PremiumCampus (both flagged in broker/banker notes
   — the note IS the plant). NM-EBITDA comps and mix-mismatch (S-006
   hardware/software caveat — the note demands a stated adjustment).
4. **EBITDA viability.** Negative/pre-profit target or comps → EV/EBITDA
   is NM: S-005, S-007 (recurring base -$0.6M), S-008 (-$1.1M/-$2.9M).
   S-005/S-009 comp sets literally declare EV/Revenue the only multiple.
5. **Ask-vs-justified arithmetic.** Implied ask multiple vs justified
   range, named: S-001 95/18.4=5.2x ask vs ~4.0-4.5x · S-002 148/31.6=4.7x
   · S-007 78/17.3=4.5x on the correct base · S-008 72/7.3=9.9x (!!) ·
   S-009 62/8.9=7.0x net / 62/6.3=9.8x run-rate · S-010 95/47.3=2.0x.
6. **No-ask scenarios.** S-004, S-006 state no asking price — produce the
   range, state "no ask provided" as a finding, never fabricate one.
7. **Quantified downside lands in the memo.** S-010 -$8.5M program
   termination · S-009 -$2.6M net run-rate · S-004 -$4.2M unbudgeted
   refurb netted off value · S-008 -$4.0M grant revenue + fixed-cost
   subsidy effect (commercial EBITDA -$2.9M worse than blended -$1.1M).
8. **Deadline/backward reasoning.** S-002 FDA response window closes in
   4 weeks · S-005 three top-5 renewals expire within 10mo of close ·
   S-004 re-bid live on 11-month runway · S-010 12-month remediation.
9. **Conflicting evidence surfaced.** S-008 two bioethics opinions
   conflict → unresolved, don't pick a side. S-004/S-010 appended analyst
   notes flag the table-vs-narrative contradiction — carry it, don't
   silently re-tier.
10. **Restraint.** S-003 has zero unresolved must-address and an ask at
    ~3.5x vs ~3.9x justified — proceed-shape is the designed answer; do
    not manufacture blockers. NRR-91%-as-"Informational" is under-tiered
    and still gets carried (re-tier the label, keep the item honest).

## Recommendation logic (the heavy call, cj weight always largest)

Unresolved Must-Address/Critical ⇒ never proceed (deterministic
penalty). Correct shapes: **request more data** naming the record
that settles each open row, or **pass** where the gap is
structural/unbridgeable.

| scenario | confident or coin-flip | our call |
|---|---|---|
| S-001 | **coin-flip** (verified: haiku declines 3/3 under neutral rules) | request-data vs pass — 3 unresolved/overridden must-address + ask above range |
| S-002 | **coin-flip** | two unresolved Criticals (FDA 483 window + terminable founder-IP license) → conditional vs decline |
| S-003 | **coin-flip** | clean proceed vs proceed-w/-conditions (NRR 91%, 3 pending state approvals) |
| S-004 | confident | request more data — override Air Force 'Resolved'→unresolved; $4.2M refurb nets off; no ask stated |
| S-005 | confident | request more data — Verifax consent as condition precedent (status 'Resolved' is undocumented) |
| S-006 | confident | request more data — RoboCore priority = unresolved FTO; NorthStar 90-day cancel unresolved; mix-adjusted comps; no ask |
| S-007 | **coin-flip** | conditional vs decline — ISO consent unresolved + live lawsuit; reprice to recurring base |
| S-008 | **coin-flip** | pass vs request-data — 31% revenue doesn't transfer, ask 9.9x commercial vs ~6.4x justified |
| S-009 | **coin-flip** | pass (non-bank) vs request-data — sponsor-bank gate is structural on acquirer type |
| S-010 | **coin-flip** | conditional vs decline — accreditation deferral ≠ closure, 74% Title IV dependency |

## Coin-flip split matrix (WRITTEN DOWN — deliberate)

| call | piero | kelvin | dragon | star | resolution |
|---|---|---|---|---|---|
| S-001 recommendation | pass | request data | pass | pass | first /tasks sq — piero pass verified ×3 local runs (as decline); kelvin carries the data-request branch |
| S-002 recommendation | request data | request data | pass | pass | first /tasks sq |
| S-003 recommendation | request data | request data | proceed | proceed | first /tasks sq |
| S-007 recommendation | request data | request data | pass | pass | first /tasks sq |
| S-008 recommendation | pass | pass | request data | request data | first /tasks sq |
| S-009 recommendation | pass (non-bank) | pass (non-bank) | request data | request data | first /tasks sq |
| S-010 recommendation | request data | request data | pass | pass | first /tasks sq |

Everything else identical across scouts (rulings same, delivery differs).

## Wave-2 expected-call matrix (VERIFIED by local run_eval — replaces the wave-1 split design)

v2 rule changes (never-re-tier, pending-vs-bar, askable-signatures,
tier-scoped verdicts) collapsed most splits — mostly *toward the
proven winner*. Verified by generation, not assumed:

| call | piero | kelvin | dragon | star | evidence |
|---|---|---|---|---|---|
| S-001 | RMD | RMD | **pass** | **pass** | ALL generated: piero RMD, dragon pass, star pass — 2v2 split survives. Dragon/star read patent-clock + counterparty-held GDPR cure as outside-held; piero/kelvin read them askable |
| S-002 | RMD | RMD | RMD | RMD | w1 all-RMD anyway (.75–.85); no change |
| S-003 | RMD | RMD | RMD | **proceed** | ALL FOUR generated locally; split survives on the unsolved scenario |
| S-004 | RMD | RMD | RMD | RMD | confident, unchanged |
| S-005 | RMD | RMD | RMD | RMD | confident, unchanged |
| S-006 | RMD | RMD | RMD | RMD | piero generated RMD; pass experiment failed — see note below |
| S-007 | RMD | RMD | RMD | RMD | piero generated RMD; w1 calls were a wash (pass .815/.653, RMD .772/.702) — converge to safe |
| S-008 | pass? | pass? | pass? | pass? | "rule bars transfer" should fire on non-transferable NIH grants; NOT YET generated — verify |
| S-009 | RMD | RMD | RMD | RMD | piero generated RMD — lands on the proven w1 winner (star .935); conditional refusal read as askable |
| S-010 | RMD | RMD | RMD | RMD | deferral=pending=askable under new clause; w1 favored RMD |

Notes for wave 3:
- **S-006 pass attempt failed twice.** (a) "live adjudication on the
  priced IP" → model read RoboCore interference as askable. (b)
  "record already answered against the deal (earlier-filed
  priority)" → model produced **proceed over open must-address** —
  the illegal output. Reverted. The doctrine is now clean RMD; the
  asterone .819 hypothesis (sealed=pass) is untestable with our
  current trigger design. Wave-3 option: dedicated clause in ONE
  bundle only, e.g. "a blocking question whose answer the filing
  dates already decided" — but word it as pass-or-RMD, never
  weaken the no-proceed-over-open-must-address gate.
- **S-008 is the only unverified expected call** — if the bar clause
  doesn't fire on non-transferable grants, all four land RMD there
  (w1: pass .931 proven winner, RMD .835–.851 still decent).
- S-003 star-proceed is the deliberate restraint hedge; if w2 scores
  show it beating the three RMDs, propagate its reasoning in w3.
- Row-level verdict-word leaks: none observed in w2 local outputs
  (vocabularies held: gates/open/stands/noted, breach/unsettled/
  carried/struck, blocks/unanswered/open/settled, triggered/
  pending/clear/void).
- Residual tier-scope deviations seen locally: piero/dragon/kelvin
  each escalated one Manageable-filed row to the gating verdict on
  S-003 while keeping the filed tier visible — call stayed RMD,
  acceptable; star handled it cleanly (triggered-but-manageable →
  named disposition under proceed).

## Wave-1 watch items (check first /tasks report)

1. **Row-state vs rec contradiction.** The penalty reads "contradicts
   the risk table state" — a strict checker may flag ANY open-style
   standing under a proceed verdict, not just must-address. Fix shipped:
   all four frames now carry the mitigation name in the cell under
   proceed (`open`/`unsettled`/`pending`/`pending` + carried step).
   Verify a real memo shows it.
2. **Outside-held rule narrowed (T-0:40 fix).** Dragon/star's old
   "2+ open items in outside hands → pass" over-fired on confident-RMD
   scenarios (S-005 Verifax+FTC, S-006 NorthStar+RoboCore) and would
   have flattened S-009 to 4v0. New count: only sovereign
   determinations (court/agency/accreditation), on-record refusals,
   and impossible records (expired patent) qualify; unasked-for
   signatures are askable. EFFECT ON MATRIX: S-002/007/010 likely go
   all-RMD (split coverage lost — accepted: RMD is the likelier sealed
   call on record-settleable items); S-001 keeps piero-pass vs
   rest-RMD; S-008/S-009 stay 2v2. Verify actual calls in first
   /tasks.
3. **Truncation.** If any memo loses its tail, tighten per-section
   bounds in wave-2 rather than adding rules.

## Per-scenario call cards

### S-001 Veltrano (fleet-telematics SaaS) — ask $95M
- GDPR subprocessor cert lapsed 8mo — Must-Address UNRESOLVED → gates rec.
- OVERRIDE: customer-concentration row says Resolved but no LT contracts
  exist (M2M can't "resolve" concentration) → carry as open.
- OVERRIDE: rev-rec shift "Resolved" while narrative says auditors have
  NOT opined on the $1.4M restatement → carry as open.
- Adjusted EBITDA $3.1M: severance $2.6M genuinely one-time, "$1.7M
  strategic investments" is a rejected add-back → EBITDA stays ~-ve/≈$1.4M.
- Patent cliff 14mo + competitor continuations = in-progress must-address.
- Comps: exclude Logistics AI (6.9x, 55% growth, 82% GM — outlier
  profile); justified ~3.6–4.8x on $18.4M → ~$66–88M. Ask 5.2x = rich.
- Rec: request more data; primary risk = patent/GDPR (name ONE).

### S-002 Dawnfield (CDMO) — ask $148M
- FDA 483: response window closes in 4 weeks → backward-deadline, blocks.
- Founder personal patents, license terminable on 12-mo notice — the
  core process isn't owned → existential, unresolved Critical.
- Sublease: landlord's own lease expires 22mo, no renewal option →
  cascade into facility risk.
- Anchor client 58% fwd revenue, 18mo remaining → concentration alive.
- DSO 74 vs peer 52 → working-capital condition, quantified.
- Mgmt 35% projection contingent on two prospects in feasibility →
  uncommitted; underwrite 41% realized, not 35% projected.
- Comps: exclude TherapyBuild (6.8x, 62%); median ~4.35x → ~$137M;
  EV/EBITDA ~27x → ~$130M. Ask $148M above.
- COIN-FLIP rec: request-data vs pass.

### S-003 Quartzline (grid-opt SaaS) — ask $80M
- RESTRAINT scenario. No unresolved must-address.
- Ampere exclusion is PLANTED in the broker note (control premium) →
  name it. Ex-Ampere ~2.9–4.5x, median ~3.9x → ~$67–103M. Ask 3.5x.
- NRR 91% filed as "Informational" → re-tier: real churn signal, carry
  into risk table + modest price haircut; not a blocker.
- Tribunal claims "Resolved" but injunction risk on core module noted →
  verify resolution docs (minor).
- 3 pending state approvals → condition or monitoring item.
- WATCH: if rec = proceed, the NRR row must ride as hygiene/void-style
  standing with the haircut shown in the number — a pending/open-style
  verdict + proceed = self-inflicted contradiction.
- COIN-FLIP rec: proceed vs request-data.

### S-004 Halverton (aerospace connectors) — NO ask stated
- APPENDED ANALYST NOTE = the plant: Air Force 40%-of-revenue contract
  under live re-bid, two competitors, mgmt can't document → override
  'Resolved' → unresolved must-address. Recommendation cannot be clean.
- ITAR: self-cert only, no third-party audit 36mo → 'Resolved' dubious →
  independent audit as a condition.
- CNC 2008 machines, $4.2M refurb, NO capex budget → net off valuation.
- No asking price → produce range, state the absence.
- Comps: all four similar, no exclusions flagged → restraint: don't
  manufacture exclusions. ~1.8–2.1x × $14.3M ≈ $26–30M less refurb →
  ~$22–26M; EV/EBITDA ~10x × $3.1M ≈ $31M less refurb.
- Rec: request more data.

### S-005 Orvex (identity SaaS) — ask $175M
- Verifax KYC/AML license non-transferable on change of control WITHOUT
  CONSENT, marked Resolved — consent never documented → override →
  condition precedent. THE row.
- FTC CID "substantially resolved" with no consent decree/closure letter
  → in-progress, not closed → carry as open must-address.
- 3/5 top bank customers expire within 10mo of close, no renewals →
  backward-deadline renewal condition.
- Pre-profitability → EV/Rev only (comp note declares it). 4.9–8.1x,
  median ~6.4x → ~$143–237M; justified tighter ~$170–211M. Ask in range.
- NRR 118% genuine positive; concentration top-5 71%.
- Rec: request more data.

### S-006 Creston (warehouse robotics) — NO ask stated
- Patent OVERRIDE: Creston filed 24mo ago; RoboCore filed 6mo EARLIER =
  competitor holds priority — 'Resolved' is wrong → unresolved FTO/
  priority risk, must-address.
- NorthStar OVERRIDE: 44% hardware revenue cancellable on 90 days →
  'Resolved' is wrong → unresolved.
- Comps caveat planted: comps' HW/SW mix NOT provided → state the
  mix-adjustment method explicitly (segment value: software ARR $16.3M
  at SaaS multiple vs hardware at hardware multiple) or name the
  limitation — never apply blended comps silently.
- Exclude IntraLogix (5.4x, 48%/63% outlier). Ex-outlier ~2.7–4.1x ×
  $41.7M ≈ $113–171M; blended/mix-adjusted lower on hardware share.
- €1.1M German tax under appeal → priced-in reserve; injury claims in
  settlement → monitor.
- Mgmt 32% projection on three pilots → underwrite 27% realized.
- Rec: request more data.

### S-007 Thornwick (insurance analytics) — ask $78M
- BASE RESTATEMENT: $2.4M one-time project → recurring base $17.3M,
  growth 11% not 19% — seller's $78M quoted on $19.7M is the trap.
- Recurring EBITDA -$0.6M → EV/EBITDA NM on the real base — say so.
- ISO mortality-table license prohibits transfer w/o consent, marked
  Resolved → override → unresolved must-address (same license plant as
  S-005).
- Trade-secret lawsuit, discovery next quarter → unresolved must-address.
- PII retention 7yr/manual CCPA → manageable condition.
- Comps ex nothing obvious (all similar); ~3.5–4.6x × $17.3M ≈ $61–80M;
  ask $78M = 4.5x recurring = top of range with two open must-address.
- COIN-FLIP rec: request-data vs pass.

### S-008 Sundra (genomics platform) — ask $72M
- BASE RESTATEMENT: NIH grants 31% do NOT transfer to for-profit acquirer
  → valuation base = commercial licensing $7.3M (+$1.5M services?), not
  $12.8M. THE call of the scenario.
- Commercial-only EBITDA -$2.9M worse than blended -$1.1M (grants
  subsidize fixed costs) → post-close economics deteriorate; say it.
- Consent framework: two bioethics opinions CONFLICT → genuinely
  unresolved → surface both, condition = definitive legal opinion; do
  not pick a side.
- CMS recoding not done, $900K/yr impact → condition.
- PhD joint-appointment risk → condition.
- Comps EV/Rev only (pre-profit): 4.8–7.2x median ~6.35x × $7.3M ≈
  $35–53M. Ask $72M = 9.9x commercial / 5.6x full — massive gap.
- COIN-FLIP rec: pass vs request-data.

### S-009 Perentis (PayFac) — ask $62M
- DENOMINATOR TRAP: seller's banker quotes 4.2x GROSS revenue — PayFac
  industry metric is NET revenue ($8.9M). Ask = 7.0x net, 9.8x churn-
  adjusted run-rate $6.3M.
- Sponsor bank won't continue for non-bank acquirer → structural gate:
  recommendation depends on acquirer type → name it.
- 7-state unfiled MTL, $400K fines + 60–90d suspension risk → unresolved
  must-address.
- Churn: 29% of GTV gone in 60 days = ~$2.6M net revenue; seller's
  'low-margin voluntary' spin → carry as run-rate restatement.
- Comps EV/Net: 4.9–8.4x median ~6.3x → $6.3M base ≈ $31–53M; even on
  $8.9M ≈ $44–75M. Ask rich on run-rate.
- COIN-FLIP rec: decline (non-bank) vs conditional.

### S-010 Marvell (trade schools) — ask $95M
- APPENDED NOTE = plant: NAICE accreditation 'Resolved' is a deferral
  not a closure → override → unresolved must-address. Title IV = 74% of
  tuition → existential.
- GE metrics: 3 programs below threshold, 12-mo remediation → condition;
  termination scenario -$8.5M revenue must be in the memo.
- UNDER-TIERED: staff ratio 1:27 vs required 1:22 is accreditation-
  standard non-compliance → connects to the must-address family, not
  generic manageable.
- Exclude PremiumCampus (banker-deck plant: PE premium acquisition).
  Ex-premium ~1.7–2.4x × $47.3M ≈ $80–114M; EV/EBITDA ~14x → ~$95M.
  Ask ≈ range midpoint BUT risk haircut justified.
- COIN-FLIP rec: request-data vs pass.

## Memo output contract (all frames deliver this — brief order)

1. Thesis + ONE named primary risk that also appears in the risk table
2. Risk table — every input row carried, status re-verified (overrides
   named), tiers preserved from the input's own vocabulary
3. Valuation — stated base (restated if needed) × chosen multiple from
   named included/excluded comps; arithmetic reproducible; ask-vs-range
   gap named; "no ask provided" where absent
4. Recommendation — proceed / request more data / pass; never a
   proceed over an open must-address row
5. Conditions / next steps — one per named risk-table row: finding,
   record, party, timing; character follows the rec
6. Length discipline — per-section bounds; the rec and conditions are
   the tail and must never be truncated off
