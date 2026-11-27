# Evidence ledgers for compensation benchmarks

This is a decision drill, not a source of market facts. It shows how to turn a snapshot and classified evidence into the required ledger: bucket each row once, show every exclusion, count only accepted primary/internal offers and qualifying primary ranges, then choose the verdict that follows. Do not reuse its invented employers or numbers.

## Ledger grammar

| Symbol | Meaning |
|---|---|
| `P` | seat, metro, stage, window and base all match |
| `S` | same checks, exactly one stage away |
| `X` | at least one failed check; one point counts once |
| `I` | every internal offer for that family |
| `offers` | accepted `P` external plus accepted internal offers |
| `ranges` | primary posted midpoints at least 4% from the band midpoint |

Deferred means `P=0` with `I=0` (an empty or secondary-only pool). A lone surviving primary point is never Deferred - when its signal cannot satisfy a verdict test it reads At market at low confidence. A lone primary range can produce a signal but never leads a verdict, and every qualifying range enters the Signal cell even when offers already carry the call. Secondary, excluded and declined points - and `P` points that are neither accepted offers nor posted ranges - produce no signal.

---

## Walkthrough A - full benchmark with exclusions

Setup:

- Aster Cold Chain, a Series C cold-chain technology company of about 340 staff, headquartered in Hamburg; every internal role is anchored to Hamburg. The stated window is nine months - points dated before January 2026 are out; the table was retrieved 2026-10-20. All figures are EUR.
- Internal bands: Senior Cold-Chain Systems Engineer EUR 88K/96K/106K (min/mid/max); Terminal Operations Manager 61K/68K/76K; Trade Controls Lead 72K/79K/87K; Senior Inventory Analyst 78K/86K/95K.
- Priority openings: Senior Cold-Chain Systems Engineer (P1); Senior Inventory Analyst (P2).
- Internal offers, last twelve months: Cold-Chain Systems Engineer - two accepted at 97K and 99K base, one declined at 93K (candidate "took a counter-offer elsewhere"); Terminal Operations Manager - one accepted at 71K; Trade Controls Lead - no offer line given; Inventory Analyst - none.
- Twelve external evidence points:
  - E-01 posted range, Hamburg, Series C, Senior Cold-Chain Systems Engineer, EUR 88K-108K base, dated 2026-08, voluntarily posted.
  - E-02 offer accepted, Hamburg, Series C, Senior Cold-Chain Systems Engineer, EUR 97K base, dated 2026-07.
  - E-03 posted range, Munich, Series C, Senior Cold-Chain Systems Engineer, EUR 95K-118K, dated 2026-09.
  - E-04 posted range, Hamburg, Series E, Senior Cold-Chain Systems Engineer, EUR 110K-140K, dated 2026-08.
  - E-05 contractor day rate, Hamburg, cold-chain systems contractor, EUR 620/day, dated 2026-09.
  - E-06 offer accepted, Hamburg, Series C, Senior Cold-Chain Systems Engineer, dated 2026-09: "EUR 105K total: EUR 95K base plus EUR 10K annual bonus."
  - E-07 posted range, Hamburg, Series D, Terminal Operations Manager, EUR 66K-82K, dated 2026-09, voluntarily posted.
  - E-08 offer accepted, Hamburg, Series C, Terminal Operations Manager, EUR 74K, dated 2026-08.
  - E-09 survey snippet, undated, unnamed source: "trade controls lead median EUR 80K".
  - E-10 posted range, remote-EU (no metro declared), Series C, Trade Controls Lead, EUR 76K-92K, dated 2026-08.
  - E-11 recruiter-reported, verbally shared, Hamburg, Series C, Senior Inventory Analyst, "about EUR 82K base", dated 2026-09.
  - E-12 posted range, Hamburg, Series B, Senior Inventory Analyst, EUR 70K-84K, dated 2026-08, voluntarily posted.

Required output:

# Compensation Benchmark - Aster Cold Chain

Aster is a Series C cold-chain technology company of about 340 people, every role anchored to Hamburg. The pool for each seat is therefore Hamburg-only; Series C points are primary, Series B and D are secondary, and anything further is out. The window is nine months, so anything dated before January 2026 - and anything undated - is excluded. All figures are EUR base salary.

## Signal counts

- Senior Cold-Chain Systems Engineer: P=E-01,E-02,E-06; S=—; X=E-03 metro,E-04 stage,E-05 basis; I=3 → E-02 accepted offer 97K sits above mid 96K → offers above; E-06's supplied base split is 95K, below mid → offers below; internal accepted 97K and 99K are above, the declined 93K corroborates only. E-01's posted mid is 98K, +2.1% - under 4%, no range signal. Net: offers 3/1; ranges 0/0 → Survivors: 6, >=3 but offers straddle both sides → At market, Medium.
- Terminal Operations Manager: P=E-08; S=E-07(Hamburg); X=—; I=1 → E-08 accepted 74K and the internal accepted 71K both clear mid 68K → offers above; E-07 is secondary, no signal. Net: offers 2/0; ranges 0/0 → Survivors: 3, >=3 and offers one-sided → Band trails market, High.
- Trade Controls Lead: P=—; S=—; X=E-09 recency,E-10 metro; I=0 → nothing survives to count. Net: offers 0/0; ranges 0/0 → Survivors: 0 → Deferred.
- Senior Inventory Analyst: P=E-11; S=E-12(Hamburg); X=—; I=0 → E-11 is hearsay - it survives into `P` but is neither offer nor range, so no signal; E-12 is secondary, no signal. Net: offers 0/0; ranges 0/0 → Survivors: 2, <3 and weak-source only → At market, Low.

## Benchmark table

| Role | N | P IDs | S IDs | I | X IDs + reasons | Signal | Verdict | Confidence |
|---|---:|---|---|---:|---|---|---|---|
| Senior Cold-Chain Systems Engineer (band 88K-106K, mid 96K) | 6 | E-01,E-02,E-06 | — | 3 | E-03 metro, E-04 stage, E-05 basis | offers 3/1; ranges 0/0 | At market | Medium |
| Terminal Operations Manager (band 61K-76K, mid 68K) | 2 | E-08 | E-07 | 1 | — | offers 2/0; ranges 0/0 | Band trails market | High |
| Trade Controls Lead (band 72K-87K, mid 79K) | 2 | — | — | 0 | E-09 recency, E-10 metro | offers 0/0; ranges 0/0 | Deferred | - |
| Senior Inventory Analyst (band 78K-95K, mid 86K) | 2 | E-11 | E-12 | 0 | — | offers 0/0; ranges 0/0 | At market | Low |

## Deferred verdicts

- Trade Controls Lead: nothing usable survives. What resolves it is an in-window, Hamburg, near-stage base-salary point - one accepted offer would do; a single posted range would raise the read to Low.

## Signal caveats

All surviving postings were voluntary, so posted-heavy rows skew aspirational and offers carry the read. Inventory leans on hearsay and a one-stage-down posting, hence Low. Trade Controls has no offer line, so the table records I=0 and the prose names the gap; internal offers use a different twelve-month clock than the nine-month evidence window.

**Why it reads this way.** The unfiltered table would flatter Engineering through a Series-E range, a contractor rate and a Munich point; all are out. The declined 93K confirms the floor. Terminal Operations trails because its signed offers clear above midpoint - inside the band's ceiling, but the market is paying above its centre, and that is what a trail looks like; for the priority roles, Engineering holds while Inventory needs more evidence before guiding a salary talk.

---

## Drill B - thin evidence

A Series-B company anchors every seat to Adelaide. The window starts July 2025.

| Seat | Evidence decision | Signal | Call |
|---|---|---|---|
| Senior Viticulture Scientist | E-01 and E-03 are one stage away; E-02 is stale | secondary-only pool | Deferred |
| Cellar Operations Manager | E-04 is the wrong metro and E-05 is three stages away | no survivors | Deferred |
| Direct Sales Lead | the OTE posting fails basis; one accepted internal offer is above midpoint | offers 1/0 | At market, Low |
| Finance Manager | one primary posted midpoint clears the 4% threshold; the hourly contractor rate fails basis | ranges 1/0 | At market, Low |

The lesson is restraint: thin evidence can support a low-confidence read, but it cannot manufacture a strong verdict.

## Drill C - strong offers and exclusions

A Series-D company anchors every seat to Aarhus. The window starts January 2026.

| Seat | Evidence decision | Signal | Call |
|---|---|---|---|
| Senior Turbine Controls Engineer | E-01 is a primary accepted offer; E-02 is a qualifying primary range; E-04 is secondary; E-03 is public | offers 2/0; ranges 1/0 | Band trails market, High |
| Blade Composites Technician | E-05 is primary but below the range threshold; the accepted internal offer is above midpoint; E-06 is stale | offers 1/0 | At market, Medium |
| Field Service Planner | E-08 is the only qualifying primary range; E-07 is the wrong metro | ranges 1/0 | At market, Low |
| Procurement Lead | E-09 is undated | no survivors | Deferred |

Accepted offers carry the Controls call; secondary evidence and declined offers only corroborate.

## Walkthrough B - the Drill C record rendered in full

Setup: the same record family as Drill C, expanded. Kestrel Wind Services, a Series D wind-turbine maintenance company of about 500 staff, all roles anchored to Aarhus. The window opens January 2026 - earlier or undated points are out; the table was retrieved 2026-10-22. All figures are DKK thousands.

- Internal bands: Senior Turbine Controls Engineer 720K/790K/870K; Blade Composites Technician 480K/530K/585K; Field Service Planner 560K/620K/680K; Procurement Lead 640K/710K/780K.
- Internal offers, last twelve months: Controls Engineer - one accepted at 855K, two declined at 810K and 825K (both candidates cited "competing packages well above the offer"); Blade Composites Technician - one accepted at 545K; Field Service Planner and Procurement Lead - none.
- Nine external evidence points:
  - E-01 offer accepted, Aarhus, Series D, Senior Controls Engineer, 860K base, dated 2026-09.
  - E-02 posted range, Aarhus, Series D, Senior Controls Engineer, 780K-920K base, dated 2026-08, voluntarily posted.
  - E-03 posted range, Aarhus, listed utility group, Senior Controls Engineer, 950K-1,200K, dated 2026-09.
  - E-04 offer accepted, Aarhus, Series C, Senior Controls Engineer, 830K base, dated 2026-07 - noted "one stage below Kestrel".
  - E-05 posted range, Aarhus, Series D, Blade Composites Technician, 500K-590K, dated 2026-03.
  - E-06 offer accepted, Aarhus, Series D, Blade Composites Technician, 555K, dated 2025-10.
  - E-07 posted range, Copenhagen, Series D, Field Service Planner, 600K-720K, dated 2026-08.
  - E-08 posted range, Aarhus, Series D, Field Service Planner, 610K-740K, dated 2026-09, voluntarily posted.
  - E-09 survey snippet, undated, unnamed source: "procurement lead median 700K".

Required output:

# Compensation Benchmark - Kestrel Wind Services

Kestrel is a Series D wind-services company of about 500, every role anchored to Aarhus. The pool for each seat is Aarhus-only; Series D points are primary, Series C and E are secondary, and listed-company points are out of the comparison entirely. The window opens January 2026, so anything earlier or undated is excluded. All figures are DKK base salary.

## Signal counts

- Senior Turbine Controls Engineer: P=E-01,E-02; S=E-04(Aarhus); X=E-03 stage; I=3 → E-01 accepted 860K and the internal accepted 855K both clear mid 790K → offers above; E-02's posted mid is 850K, +7.6% → ranges above. E-04 is a secondary accepted offer - it corroborates but produces no signal; the two declines corroborate only. Net: offers 2/0; ranges 1/0 → Survivors: 6, >=3 and offers one-sided → Band trails market, High.
- Blade Composites Technician: P=E-05; S=—; X=E-06 recency; I=1 → E-05's posted mid is 545K, +2.8% - under 4%, no range signal; the internal accepted 545K clears mid 530K → offers above; E-06 is excluded on recency. Net: offers 1/0; ranges 0/0 → Survivors: 2, <3 → At market, Medium.
- Field Service Planner: P=E-08; S=—; X=E-07 metro; I=0 → E-08's posted mid is 675K, +8.9% → ranges above; E-07 is excluded on metro. Net: offers 0/0; ranges 1/0 → Survivors: 1, <3 → At market, Low.
- Procurement Lead: P=—; S=—; X=E-09 recency; I=0 → E-09 is excluded - nothing to count. Net: offers 0/0; ranges 0/0 → Survivors: 0 → Deferred.

## Benchmark table

| Role | N | P IDs | S IDs | I | X IDs + reasons | Signal | Verdict | Confidence |
|---|---:|---|---|---:|---|---|---|---|
| Senior Turbine Controls Engineer (band 720K-870K, mid 790K) | 4 | E-01,E-02 | E-04 | 3 | E-03 stage | offers 2/0; ranges 1/0 | Band trails market | High |
| Blade Composites Technician (band 480K-585K, mid 530K) | 2 | E-05 | — | 1 | E-06 recency | offers 1/0; ranges 0/0 | At market | Medium |
| Field Service Planner (band 560K-680K, mid 620K) | 2 | E-08 | — | 0 | E-07 metro | offers 0/0; ranges 1/0 | At market | Low |
| Procurement Lead (band 640K-780K, mid 710K) | 1 | — | — | 0 | E-09 recency | offers 0/0; ranges 0/0 | Deferred | - |

## Deferred verdicts

- Procurement Lead: nothing usable survives, and there is no internal offer history to lean on. What resolves it is an in-window, Aarhus, near-stage base-salary point for this seat.

## Signal caveats

The Controls verdict rests on revealed preference - a signed offer and an internal accepted offer - not the widest range, and the two declined offers corroborate the same upward direction. All surviving postings were voluntary, so they weigh less than offers. Planner and Procurement Lead have no internal offer history on record, so the table reads I=0 and the gap is named here.

**Why it reads this way.** The unfiltered table would have set the Controls ceiling at the listed utility's 1,200K - a different market's scale, out on stage - and counted the technician offer dated 2025-10 that sits before the window opens. The declined offers at 810K-825K corroborate upward pressure, but the verdict follows the accepted evidence.

## Redirect drill - no outside pool

Setup: Cinderbrook Fabrication supplies only a roster and asks whether the machinists are underpaid, what the market pays, and whether two junior technician levels should be merged.

Required output:

# Compensation Benchmark - Cinderbrook Fabrication | not built: no classified external evidence

**Record.** Senior Machinists cluster at $118K-$124K, Machinists at $96K-$99K, and Production Technicians at $52K-$55K; report only these family spreads, never a named person's salary.
**No market call.** There is no classified outside pool, so no family can receive `P`, `S`, `I` or `X` evidence and no verdict can follow.
**Resolves it.** Supply dated source rows with role, geography, company stage and base-pay figures, then apply the ledger.
**Separate work.** Merging junior technician levels is a structure decision; it belongs to levelling design, not this benchmark.

---

## Edge cards

- **Currency lock.** A Zurich point for a Lyon-anchored seat fails metro and basis when no exchange rate is supplied. A Zurich-based team is different: it keeps its Zurich pool and CHF figures.
- **Boundary month.** If "points before March 2026" are out, a 2026-03 point is in and 2026-02 is out. Read the stated boundary, not a preference about what should count.
- **Contractor basis.** A day rate or hourly rate is `X basis`, never annualised. The same is true for OTE, total cash, grants, equity or retention figures unless a base split is supplied.
- **Missing history.** "No recent offers" and no offer line both produce `I=0`; when that absence matters, name the missing history in prose rather than inventing a number.
- **Title discipline.** A scope note can map a different title to the same seat. A restyling or abbreviation that preserves function and level also counts; a manager title for an IC seat, or Staff for Senior, is `X role`.
- **Anchored versus remote.** A metro-anchored seat rejects other metros, remote-US and national points. An explicitly remote seat uses remote/national evidence; if remote roles are not named, unlabelled families keep the company metro. Geography is checked before stage: a remote-US point one stage away is `X metro`, never `S` - secondary status requires geography to pass first.
- **One point, one bucket.** A Toronto, Series-D posting for a Raleigh-anchored Series-B seat is `E-## metro, stage` in `X`, never two exclusions and never `S`.
- **Weak source, real point.** A dated recruiter report can remain `P` or `S` when it passes the checks. Its weakness lowers confidence; it is not an automatic exclusion.
- **Secondary restraint.** A one-stage-away point corroborates but produces no offer or range signal - even when it is an accepted offer. A pool with no `P` and no `I` is Deferred, not Low.
- **Ranges never make High.** A verdict carried by qualifying ranges alone tops out at Medium no matter how many ranges qualify - High requires at least two accepted offers on the verdict side and three or more surviving points.
- **Decline discipline.** Declines enter `I` and the caveat where useful, but they do not enter `offers above/below` and they are not accepted evidence.
- **Near-midpoint.** A primary posted midpoint at 103K against a 100K band midpoint produces no range signal; 104K does. Accepted offers need no 4% floor: two accepted offers at 101K and 102K still make `offers 2/0`.
