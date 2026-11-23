---
name: monthly-ops-brief
description: Turns a KPI packet (actuals, targets, priors, freeform notes) into a monthly ops briefing with direction-first zones, materiality-ranked risk headline, one-off beat qualification, shared-driver tracing, and dated corrective levers.
---

# Monthly Ops Briefing Skill

The numbers are arithmetic; the notes are judgment. Scratch privately first (workflow at the bottom). The graded reply is the briefing alone—never a worksheet.

## Failure modes to block

**1. Banking a fragile beat.** Before praising any favorable row, name its mechanism from the note:
- Demand timing shift (promo, holiday, early order) → expect payback; if underlying rate sits under target, treat as a disguised miss too.
- Accounting rebate / credit / one-time gain → non-operating; do not bank.
- Timed commercial lock → state end date and market gap; renewal is a deadline action.
- Single discrete event (one exit, one large deal) → not a run-rate engine.
- Prior-period carry → current-period origination may already miss; do not present as this period's strength.
- Seasonality → name the reverse window and whether the de-seasonalized level clears target.
Never collapse several mechanisms into one vague "one-off" sentence.

**2. Polarity mistakes.** Decide higher-vs-lower-is-better before any math. Lower-is-better covers costs and unit costs, expense ratios, latencies, defect/waste/return/complaint/churn/turnover/absence/delinquency/incident rates, variance-to-standard, days outstanding, denser caseloads per FTE, and prices paid for assets (multiples, acquisition cost). Tag those rows; untagged rows (on-time %, turns, yield, availability, satisfaction) are higher-is-better. A tagged row above target must zone as a miss.

**3. Magnitude ≠ materiality.** Rank open misses by lasting consequence, not raw gap size:
1. Still unresolved and structural at report date.
2. Breadth of cascade or self-feedback (a miss that causes other misses, or that worsens itself).
3. Timing pressure (peak season, hard expiry, external tripwire closing).
4. Packet-documented pattern that this level has hurt before.
5. Absolute size — tie-break only.

Disqualify beats from the headline. Disqualify an internal process miss whose proximate cause is already fixed; the open risk lives in consequences that did not reset. Hard rule first: if any open miss both drives other misses and is worsened by them (closed feedback), that level is the headline—no exceptions for a wider % gap on a density/staffing row or a near-breach compliance metric; those stay in the causal clause and the action list. Prefer lasting customer consequence over a recoverable P&L gap. Prefer a primary process/service outcome over a resourcing-density row when both are open from the same driver—name density in-sentence, never as the title. If notes show that deals or prices above a stated limit later missed return or quality targets, headline that price-paid / limit-breach metric—not the lower win-rate or volume that the same discipline produced—even when the volume miss has the wider adverse %. Prefer an operational disruption (supply, capacity, quality, logistics) over the margin or revenue line it pulls down. External tripwires always earn an action item; they headline only when nothing cascades more widely.

**4. Fabrication.** Absent values, priors, or causes → "not provided" / "driver not specified". Cite `(per N-#)` immediately after every concrete claim, including the headline. Drop unsourced specifics.

## Zone steps

1. Good side of target or equal → **On-track** (any favorable magnitude, including large %).
2. Else gap = actual − target (points for % metrics). Adverse % = |gap|/|target|×100 to one decimal on unrounded inputs.
3. (0, 5.0%] → **At-risk**; >5.0% → **Off-track**. Exact 5.0% adverse is last At-risk (†). Anything above 5.0—5.2, 6.0, 8.0, 11—is Off-track, not At-risk. Tiny adverse misses (0.2%) are still At-risk.
4. Missing actual or target → **Unclassified**; both deltas "—"; never derive from target−prior.

Illustrations (invented): scrap 1.8 vs 2.0 (lower better) favorable → On-track. Fill 97.2 vs 97.6 → 0.4% At-risk. Contribution margin 28.0 vs 30.0 → 6.7% Off-track. Rework 4.2 vs 4.0 (lower better) → 5.0% At-risk†. Favorable-labelled rows stay On-track with no †.

Prior delta = actual − prior; missing prior → `n/a (no prior data)`. Qualifications never rewrite zones (`*` on fragile On-track beats). Table signs are arithmetic actual−target; append the word adverse/favorable.

## Note reading

- Cross-references: if note B cites A's driver, B is downstream; multi-miss drivers are roots.
- Mark each driver resolved vs open. A closed root does not erase trust loss, spot buys already made, deferred work, or backlog.
- Event-named miss: compare prior to target and say whether the row was already short before the event (thin resilience).
- Lagging measures will not show a mid-period fix.
- Near external limits: state distance and prescribe prevention, not monitoring.
- Disclose methodology choices the notes allow. Match lead times to the next peak or renewal window.

## Briefing scaffold

Open on the packet title. About 1,100–1,500 words for a dense 10–12 metric packet; say each fact once.

1. Headline — one or two sentences: metric, actual vs target, both gap forms, proximate driver, timed forward risk.
2. Table — packet order with Metric | Actual | Target | Δ vs target | Δ vs prior | Zone; `*` / `†` footnotes.
3. What's working — durable run-rate beats only. Fragile beats: one-line table footnote; detail in Qualifications.
4. Needs attention — every At-risk/Off-track once, materiality order; zone, both gaps, note-sourced driver, open/closed, links.
5. Recommendation — dated, owned levers the notes support. Never "improve the KPI" or raise the target. Discretionary limit breaches → exception process.
6. Next-period focus — three ranked lines (root first): metric+target, action, owner, why ranked.
7. Gaps & qualifications — Unclassified why; each fragile beat's mechanism and forward path; methodology.

Thin packet → shorter and more honest. Contradictions → show both readings and pick the zone driver. Ugly month → one shared root, many symptoms. Mostly green → still hunt fragile beats and turning leading indicators.

## Beyond the usual retail/ops packet

Apply the same procedure when packets include FX translation overlays, shared-service allocations across legal entities, carve-out or TSA timelines after a deal, cash-conversion / working-capital rows beside P&L, or ESG leading indicators with different reporting cadences. Those frames change disclosure and timing language; they do not change polarity, zone math, or materiality ranking.

## Workflow

1. Open `references/fieldbook.md`.
2. Next message = lean private worksheet (§1 there) and MUST end with `read_reference` on `references/gatecheck.md` (so the worksheet is never the last message).
3. After gatecheck returns: one message = briefing only. Line 1 = packet title. No worksheet, checklist, "confirmed", or process talk.
