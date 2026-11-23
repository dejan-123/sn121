# Worked example — the verdict-map memo

The user pastes three diligence artifacts and asks for the IC memo.
This file shows the full shape: governing terms, the verdict map with
its count line, the price worked as mapped arithmetic, and triggers
that name record, party, and timing. Follow this shape on every
input.

---

## The input (abridged for illustration)

Acquisition of Farrow Compliance, a certification-and-inspection
workflow SaaS for the lift-maintenance trade. Risk table (Finding |
Tier | Status):

- Migration of the certification records database to a new cloud
  region is mid-flight; the data-integrity sign-off is pending |
  Must-Address | Resolved
- Platform depends on a proprietary inspection-code dataset licensed
  from the standards body; license revocable on 6 months' notice |
  Must-Address | Resolved
- LTM revenue includes $1.8M of pass-through regulator filing fees
  billed at cost | Manageable | Unresolved
- Disaster-recovery failover untested since a 2024 tabletop
  exercise | Manageable | In-Progress

Financial narrative: LTM revenue $11.6M, growth 19% YoY. Of the
total, $1.8M is pass-through filing fees recovered at cost; the
seller presents the full $11.6M as "platform revenue." Gross margin
77% excluding pass-through, 71% blended. EBITDA is $0.2M —
effectively breakeven. Cash $1.4M, no debt. Seller asks $52M
enterprise value, quoted as "4.5x LTM."

Comparables (EV/Revenue, EV/EBITDA, LTM growth, gross margin):
CertifyPro Inc. 5.1x/NM/27%/79% · InspectCloud Ltd. 4.2x/29x/19%/75%
· TradeSafe Systems 3.6x/24x/14%/72% · ComplianceForge 4.8x/NM/24%/
78% · RegWorks Global 6.3x/NM/38%/82%. Note: several comparables are
pre-profitability; EV/EBITDA is not provided for all entries.

---

## The memo

**Governing terms** — Acquire Farrow for a stated $52M ("4.5x LTM").

The case — Farrow owns a narrow, defensible niche: 77% margin on
real platform revenue in a workflow where switching costs are
regulatory, not commercial. The thesis holds at a price struck on
the revenue that is actually platform economics. The primary risk is
the inspection-code dataset license — a 6-month revocable fuse on
the content the product exists to apply — filed as Resolved with no
amendment on record.

**Verdict map**

| # | Finding | Deciding trigger | Fired? | Verdict |
|---|---|---|---|---|
| 1 | Records-database migration mid-flight; sign-off pending | A completed migration with an integrity sign-off on record — mid-flight is a schedule, not an outcome | No | **triggered** — filed Resolved; the record shows the move unfinished and unverified. Gates the headline until sign-off lands |
| 2 | Inspection-code dataset license, revocable on 6 months' notice | Written amendment or consent surviving change of control | No | **triggered** — filed Resolved; nothing in the record shows the license secured. The product's core dataset hangs on a 6-month fuse |
| 3 | $1.8M pass-through filing fees inside LTM revenue | Whether the priced base counts zero-margin recovery | No — and that is the point | **pending** — not a risk row, a base row: the fees post out of the priced base and the seller's multiple restates |
| 4 | DR failover untested since 2024 tabletop | A live failover test on record | No | **pending** — process in flight but undocumented; a named test before close settles it |

**Map count:** 2 triggered / 2 pending / 0 clear / 0 void

**The price the map supports**

Base trigger: "4.5x LTM" maps $52M against $11.6M — but $1.8M of that
figure is pass-through recovery at zero margin; it is not platform
economics and it does not belong in the priced base. The base that
maps is $9.8M. Growth restates with it: 19% on $11.6M is not 19% on
$9.8M, and the map records the direction — stripping zero-margin
revenue raises the true platform growth share, a point in the
seller's favor the map still shows.

Comp triggers: RegWorks strikes — a 6.3x multiple on 38% growth and
82% margin is a profile Farrow at 19%/77% does not share; including
it would bend the range, so it fails its inclusion trigger. The
surviving set is CertifyPro (5.1x), InspectCloud (4.2x), TradeSafe
(3.6x), ComplianceForge (4.8x): 3.6x–5.1x, median 4.5x. EV/EBITDA
maps void — Farrow is at breakeven and the set is partly
pre-profitability; EV/Revenue carries the range.

Arithmetic: 3.6x–5.1x × $9.8M ≈ $35M–$50M; the median maps ~$44M.
Against this, $52M is 5.3x the real base — outside the mapped range,
and it only reads as "4.5x" against a base that counts zero-margin
recovery as platform revenue.

**The verdict** — Request more data: two must-address triggers are
armed behind "Resolved" filings, and each fires shut on a named
record — the migration sign-off, the license amendment. The ask
maps above the range the real base supports, so the data request
carries a repriced proposal with it.

**Triggers for closing**

1. Migration: the completed data-integrity sign-off, with a
   reconciliation report on record counts before and after the
   move, delivered before definitive documents.
2. Dataset license: written amendment or consent from the standards
   body confirming the license survives change of control, obtained
   by the seller before signing — a 6-month revocable fuse is a
   closing item, not a post-close project.
3. Fee pass-through: a revenue schedule splitting platform revenue
   from pass-through recovery for the trailing 12 months, so the
   priced base is confirmed, not estimated.
4. DR: one live failover test, executed and documented, before
   close.
5. [to confirm: whether the license's change-of-control clause has
   ever been invoked — the artifacts give no precedent.]

**The read** — A niche asset priced on revenue that is not platform
economics and filed under statuses the record does not support.
Price the $9.8M that is real, ask for the two named records, and
the map either clears or the deal passes.

---

## When no trigger is armed — the clear shape

Had the sign-off landed and the license been amended, every section
is still present — each just thinner:

**Governing terms** — Acquire Farrow for a stated $52M. The case
runs two sentences: a niche with real platform economics, and no
armed trigger on the map.

**Verdict map** — same four rows, never dropped. Rows 1 and 2 map
`clear`; rows 3 and 4 map `pending`, and each pending cell carries
its disposition — "fee schedule asked," "failover test dated" — so
no armed row is left unowned under a proceed.

**Map count:** 0 triggered / 2 pending / 2 clear / 0 void

**The price the map supports** — same restated $9.8M base, same
exclusion, same arithmetic: ~$35M–$50M. The $52M ask maps just
over the band — a price negotiation, not an armed trigger.

**The verdict** — Proceed at the mapped band: no must-address
trigger is armed, and the memo prices to the band with the ask's
premium named rather than absorbed.

**Triggers for closing** — None gating. Standing items: the DR
failover test run and dated, and the revenue-mix schedule confirmed
at the first post-close board — one line each.

The map runs identically either way — a clear region is a finding,
not a missing paragraph.

---

## When a trigger cannot fire — the void shape

If the dataset license were structurally non-transferable — the
standards body holding a veto it has already exercised against other
acquirers — the trigger is un-firable: the base restates down, the
range recomputes on what survives, and if the ask still prices the
dead revenue the verdict is pass. A trigger no
party can fire is not a condition — it is the verdict.
