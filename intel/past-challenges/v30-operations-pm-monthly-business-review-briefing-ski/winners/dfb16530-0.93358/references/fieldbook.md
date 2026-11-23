# Fieldbook — worksheet, polarity, zones, headline, beats, levers, prose

## 1. Private worksheet (before the briefing; never paste into it)

After reading this file, your next message is the worksheet, then a `read_reference` of `references/gatecheck.md` on that same message. Do not open gatecheck early. Do not start the briefing until gatecheck returns. The briefing's first line is the packet title.

Keep the worksheet compact (bullet lines, not a second briefing). Include:

1. Per metric: name; polarity; actual; target; signed gap (actual−target); adverse % if miss; zone. Missing either side → Unclassified.
2. Polarity audit: every lower-better tag above target is a miss; untagged reverse. Fix contradictions.
3. Count of At-risk + Off-track (= Needs Attention cardinality).
4. Driver graph: note-to-note cites; multi-miss roots; resolved vs open at report date.
5. Pre-event baseline for event-named misses: prior vs target → already short / on target before. If already short, briefing + recommendation must say the event exposed thin resilience.
6. Each favorable note: mechanism name or "run-rate". If underlying < target → "nominally on-track, underlying below target" (use those words in the briefing).
7. Headline shortlist via §3; winner + one reason; category label (lasting customer consequence / self-feedback / primary process outcome / commercial discipline / resourcing density / P&L symptom). If a density or P&L symptom won while a higher category is open → re-rank.
8. Lever per open driver (§5) with dates/triggers from notes. Top three by materiality fill Next-period focus.

## 2. Polarity and zones

Test: if the number rose alone, would a competent operator be glad? No → lower-is-better.

Lower-better: absolute and unit costs; expense and markdown ratios; latencies (cycle, fulfillment delay, time-to-fill, downtime); loss rates (defect, scrap, waste, rework, shrink, spoilage, adverse variance); customer/quality signals (complaint, return, churn, cancel, escalate, incident); workforce (turnover, absence, vacancy, contingent-staff share); credit (delinquency, bad debt, past-due); denser caseloads per person; prices paid for assets (entry multiple, acquisition cost, cost-per-hire).

Higher-better: revenue, growth, margin %, throughput, yield, turns, labor productivity, on-time %, uptime, compliance %, satisfaction/NPS, recovery/coverage, conversion, retention, milestone hit rate.

Ambiguous levels (utilisation, inventory days, headcount): a ceiling target makes overshoots adverse; a floor target makes undershoots adverse. State which reading you used.

Zone order: (1) good side or equal → On-track; (2) gap = actual − target; (3) adverse % = |gap|/|target|×100, 1dp; (4) ≤5.0% and >0 → At-risk, >5.0 → Off-track (5.2 and 6.0 are Off-track, not At-risk); (5) missing side → Unclassified with "—" deltas.

Pitfalls: always divide gap by |target| — a small point miss on a small target can be Off-track. Exact favorable 5.0% is On-track without †. Exact adverse 5.0% is last At-risk with †. Notes never override zones: fragile beat stays On-track*; one-time-labelled miss keeps its zone plus caveat.

Worked numbers (invented, not from any packet): defect 0.9 vs 1.0 lower-better → On-track. Availability 99.1 vs 99.5 → 0.4% At-risk. Gross margin 37.0 vs 39.5 → 6.3% Off-track. Growth +4.6 vs +5.0 → 8.0% Off-track. Scrap 3.15 vs 3.00 lower-better → 5.0% At-risk†. Unit cost $6.20 vs $6.00 → 3.3% At-risk. Ask premium 12% vs 8% ceiling → 50% Off-track (lower-better price paid). Cases/FTE 22 vs 20 → 10.0% Off-track. Fraud rate — vs 1.5% → Unclassified.

Sign rule: print arithmetic actual−target; meaning rides in adverse/favorable. Example: churn 9.5 vs 7.0 → `+2.5 pts (+35.7%, adverse)`; unit haul $3.10 vs $3.25 → `−$0.15 (−4.6%, favorable)`.

## 3. Headline — open principles (not a case catalogue)

Pool = every At-risk/Off-track row, plus any On-track* whose underlying run-rate is below target.

Remove from the pool: favorable beats; internal process rows whose proximate cause is already fixed (the residual risk is downstream). Keep customer-consequence rows even after a process fix when trust/retention has not reset.

Rank what remains with the skill's materiality order (unresolved structural → cascade/self-feedback → timing → documented history → size). Closed feedback (a level that causes misses which then worsen that same level) outranks density gaps and near-breach compliance for the title slot; put density/tripwire in the causal clause and action list. Resourcing-density rows (turnover, vacancy, hiring lag, workload per FTE) are supporting causes in the sentence, never the title, whenever a primary process or service outcome is also missing. If notes document that paying above a stated price or underwriting limit later underperformed, that limit-breach metric titles the briefing over the volume or win-rate shortfall the same stance caused, even when volume has the larger adverse %. Operational shocks (supply, logistics, capacity, quality) outrank the P&L lines they drag. Near external tripwires get an action and a forward clause; they take the headline only if no wider cascade exists.

Do not build a per-industry lookup. The same ranking applies to a call-center abandon spike, a warehouse putaway backlog, a SaaS net-retention miss, or a fleet empty-mile rise. Record the winner's category; if a density or P&L symptom beat a higher category, re-rank.

Shape: metric, actual vs target, dual gaps, direction, note-tied cause, timed forward effect. ≤2 sentences.

## 4. Qualifying beats

Pull-forward: pull size, underlying vs target, payback; underlying miss if below target. Rebate/credit/one-time: accounting not ops; do not bank. Expiring lock: rate, end date, market, unit gap; dated renew/hedge. Single event: name it; exclude from run-rate. Carry-forward: prior-origin share and current origination vs target; warn against presenting it as this period's success. Seasonal: reverse window; de-seasonalized vs target. Reported-basis one-time: recurring level per note; name asserting function; rests on that confirmation; zone unchanged.

Causal extras: fixed root ≠ reset of trust, spot buys, deferred work, departed staff, or backlog. Next-period load = scheduled + carried (note counts); say if capacity covers. Pre-event shortfall → thin resilience. Lagging measures ignore mid-period fixes. Lead times vs next peak decide timing. Disclose methodology the notes allow.

## 5. Levers

Expiring commercial terms: renew/extend/hedge before expiry with unit exposure. Supply/logistics break: capped expedite or alternate for a named set; dual-source next cycle. Staffing lag: interim coverage sized to the gap until start dates; protect safety and renewal-critical work. Approaching external limit: preventive plan with a tripwire below the breach, owner, cadence. Capacity with known restore date: sequence relief; surge until then. Quality with customer hit: contain, close root cause, proactive outreach. Discretionary breaches of pricing or underwriting limits: exception process (approver, analysis, review)—never lift the limit to fit deals. Fragile/seasonal beat: reset next-period expectations. Closing renewal window: targeted outreach with the service fix named. Unknown cause: time-boxed diagnostic with owner and date.

Next-period focus: three lean lines in headline order—metric+target, action, owner, rank reason. Shared driver → item one fixes that driver.

## 6. Prose

Line 1 = packet title. No preamble, skill talk, or outro. Full sentences. Each number once in narrative; table owns arithmetic. `(per N-#)` after every note-sourced specific, headline included. Unsourced specifics deleted. ~1,100–1,400 words dense; under 1,000 thin.

## 7. Situations outside this challenge's industry mix

Keep the same arithmetic and ranking when the packet adds: multi-currency translation vs constant-currency views; intercompany or shared-service allocations; post-deal TSA sunset dates; cash conversion cycle beside income-statement rows; or non-financial ESG leading indicators on a different board cadence. Call out which basis drives the zone, whether an allocation is controllable by the reporting unit, and whether a leading indicator will show in this period or the next reporting cycle. These disclosures are required whenever present; inventing them when absent is fabrication.
