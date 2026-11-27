# Evidence ledgers for compensation benchmarks

This is a decision drill, not a source of market facts. It shows how to turn a snapshot and classified evidence into the required ledger: bucket each row once, show every exclusion, form the anchor only from surviving primary points, then let the gap pick the label. Do not reuse its invented employers or numbers.

## Ledger grammar

| Symbol | Meaning |
|---|---|
| `P` | seat, metro, stage, window and base all match - the comparable pool |
| `S` | partial: off on exactly one dimension; corroborates, never anchors |
| `X` | at least one failed check; one point counts once, reasons named |
| `I` | every internal offer for that family, accepted or declined |
| `anchor` | decision tree: mean of accepted `P` offers; else mean of same-side `P` posted midpoints; straddled midpoints or nothing anchorable means Deferred - never a blend |
| `gap` | `(anchor - band mid) / band mid`, to one decimal |

Deferred means no comparable point survives (`P=0`) - internal offers never rescue it - or comparable posted midpoints straddle the band midpoint with no accepted offer to settle them. A `P` survivor that is neither an accepted offer nor a posted range cannot form an anchor, so its family also defers unless another `P` point can. Internal offers and declines corroborate inside the row: hires above midpoint or a decline citing pay supports a lagging lean, but they never anchor and never count toward confidence.

The cut-off is assumed once, stated so the reader can adjust it: an anchor within 5% of the midpoint is competitive, beyond 5% above is lagging, beyond 5% below is above-market, and 5.0% exactly still counts as competitive. Within one point of it, the number sets the label, the lean gets named once, and confidence caps at Medium.

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
  - E-11 recruiter-reported, verbally shared, unnamed source, "about EUR 82K base" for a Senior Inventory Analyst, undated.
  - E-12 posted range, Hamburg, Series B, Senior Inventory Analyst, EUR 70K-84K, dated 2026-08, voluntarily posted.

Required output:

# Compensation Benchmark - Aster Cold Chain

Aster is a Series C cold-chain technology company of about 340 people, every role anchored to Hamburg. The pool for each seat is therefore Hamburg-only; Series C points are comparable, Series B and D are partial, and anything further is out. The window is nine months, so anything dated before January 2026 - and anything undated - is excluded. All figures are EUR base salary. The input states no cut-off, so this memo works to one you can change: an anchor within 5% of the band midpoint counts as competitive, more than 5% above it as lagging, more than 5% below it as above-market.

## Evidence audit

| ID | Family | Bucket | Detail |
|---|---|---|---|
| E-01 | Cold-Chain Systems Engineer | P | posted range, mid 98K |
| E-02 | Cold-Chain Systems Engineer | P | accepted offer 97K |
| E-03 | Cold-Chain Systems Engineer | X | metro |
| E-04 | Cold-Chain Systems Engineer | X | stage |
| E-05 | Cold-Chain Systems Engineer | X | basis |
| E-06 | Cold-Chain Systems Engineer | P | accepted offer; 105K total - 10K bonus = 95K base |
| E-07 | Terminal Operations Manager | S | one stage away; passed Hamburg |
| E-08 | Terminal Operations Manager | P | accepted offer 74K |
| E-09 | Trade Controls Lead | X | recency, source |
| E-10 | Trade Controls Lead | X | metro |
| E-11 | Senior Inventory Analyst | X | source, recency |
| E-12 | Senior Inventory Analyst | S | one stage away; passed Hamburg |

## Signal counts

- Senior Cold-Chain Systems Engineer: P=E-01,E-02,E-06; S=-; X=E-03 metro,E-04 stage,E-05 basis; I=3 -> E-02 accepted 97K and E-06's supplied base split 95K (105K total less the stated 10K bonus) straddle mid 96K; E-01's posted mid is 98K, +2.1%. Anchor: 96K (avg offers 97K, 95K) -> Gap: 0.0% -> competitive -> Medium, straddled offers.
- Terminal Operations Manager: P=E-08; S=E-07(Hamburg); X=-; I=1 -> E-08 accepted 74K vs mid 68K; E-07 is partial, corroborates only. Anchor: 74K (single offer) -> Gap: +8.8% -> lagging -> Medium, one offer alone.
- Trade Controls Lead: P=-; S=-; X=E-09 recency,source,E-10 metro; I=0 -> no comparable point survives; the remote-EU point fails metro for a Hamburg-anchored seat. Anchor: none -> Deferred.
- Senior Inventory Analyst: P=-; S=E-12(Hamburg); X=E-11 source,recency; I=0 -> E-11 is unnamed verbal hearsay, set aside; E-12 is partial only. Anchor: none -> Deferred.

## Benchmark table

| Role | N | P IDs | S IDs | I | X IDs + reasons | Anchor (gap) | Verdict | Confidence |
|---|---:|---|---|---:|---|---|---|---|
| Senior Cold-Chain Systems Engineer (band 88K-106K, mid 96K) | 6 | E-01,E-02,E-06 | - | 3 | E-03 metro, E-04 stage, E-05 basis | 96K (0.0%) | Competitive | Medium |
| Terminal Operations Manager (band 61K-76K, mid 68K) | 2 | E-08 | E-07 | 1 | - | 74K (+8.8%) | Lagging | Medium |
| Trade Controls Lead (band 72K-87K, mid 79K) | 2 | - | - | 0 | E-09 recency+source, E-10 metro | - | Deferred | - |
| Senior Inventory Analyst (band 78K-95K, mid 86K) | 2 | - | E-12 | 0 | E-11 source+recency | - | Deferred | - |

## Deferred verdicts

- Trade Controls Lead: nothing comparable survives - the survey is undated and unnamed, the remote-EU range is the wrong geography. What settles it is an in-window Hamburg, near-stage base-salary point for this seat.
- Senior Inventory Analyst: the hearsay figure cannot be weighed and the surviving posting is one stage away. One Hamburg Series B or C offer or posted range resolves it.

## Signal caveats

All surviving postings were voluntary, so posted-heavy reads skew aspirational and offers carry the anchors; only Engineering's verdict rests on signed offers. Internal offers corroborate inside their rows - Engineering's two accepted hires bracket the midpoint and Terminal Ops' accepted 71K supports the lagging lean - and the families with no offer line (Trade Controls, Inventory) are named gaps, not zeros. The single piece of evidence that would most move the weakest verdict is a second in-window Hamburg, near-stage point for Terminal Ops.

**Why it reads this way.** The unfiltered table would flatter Engineering through a Series-E range, a contractor rate and a Munich point; all are out. Engineering lands exactly on its midpoint because the two accepted offers straddle it - competitive on the number, not on caution. Terminal Ops lags on a single offer at +8.8%, corroborated by its own internal hire above midpoint, which is why it carries Medium rather than High.

---

## Drill B - thin evidence

A Series-B company anchors every seat to Adelaide. The window starts July 2025.

| Seat | Evidence decision | Anchor | Call |
|---|---|---|---|
| Senior Viticulture Scientist | E-01 and E-03 are one stage away; E-02 is stale | none | Deferred |
| Cellar Operations Manager | E-04 is the wrong metro and E-05 is three stages away | none | Deferred |
| Direct Sales Lead | the OTE posting fails basis; one accepted internal offer sits above midpoint but internals never anchor | none | Deferred, corroboration noted |
| Finance Manager | one primary posted midpoint at +9.6%; the hourly contractor rate fails basis | range mid | Lagging, Low (posted-range cap) |

The lesson is restraint: thin evidence can support a low-confidence read through a posted anchor, but internal offers alone cannot hold a verdict up.

## Drill C - strong offers and exclusions

A Series-D company anchors every seat to Aarhus. The window starts January 2026.

| Seat | Evidence decision | Anchor | Call |
|---|---|---|---|
| Senior Turbine Controls Engineer | E-01 is a primary accepted offer; E-02 is a primary range; E-04 is partial; E-03 is public | offer 860K, +8.9% | Lagging, High |
| Blade Composites Technician | E-05 is a primary range at +2.8%; the accepted internal offer above midpoint corroborates; E-06 is stale | range mid 545K, +2.8% | Competitive, Low |
| Field Service Planner | E-08 is the only primary range; E-07 is the wrong metro | range mid 675K, +8.9% | Lagging, Low |
| Procurement Lead | E-09 is undated | none | Deferred |

Accepted offers carry the Controls call; ranges alone anchor but cap at Low wherever no offer survives.

## Walkthrough B - the Drill C record rendered in full

Setup: the same record family as Drill C, expanded. Skarv Wind Services, a Series D wind-turbine maintenance company of about 500 staff, all roles anchored to Aarhus. The window opens January 2026 - earlier or undated points are out; the table was retrieved 2026-10-22. All figures are DKK thousands.

- Internal bands: Senior Turbine Controls Engineer 720K/790K/870K; Blade Composites Technician 480K/530K/585K; Field Service Planner 560K/620K/680K; Procurement Lead 640K/710K/780K.
- Internal offers, last twelve months: Controls Engineer - one accepted at 855K, two declined at 810K and 825K (both candidates cited "competing packages well above the offer"); Blade Composites Technician - one accepted at 545K; Field Service Planner and Procurement Lead - none.
- Nine external evidence points:
  - E-01 offer accepted, Aarhus, Series D, Senior Controls Engineer, 860K base, dated 2026-09.
  - E-02 posted range, Aarhus, Series D, Senior Controls Engineer, 780K-920K base, dated 2026-08, voluntarily posted.
  - E-03 posted range, Aarhus, listed utility group, Senior Controls Engineer, 950K-1,200K, dated 2026-09.
  - E-04 offer accepted, Aarhus, Series C, Senior Controls Engineer, 830K base, dated 2026-07 - noted "one stage below Skarv".
  - E-05 posted range, Aarhus, Series D, Blade Composites Technician, 500K-590K, dated 2026-03.
  - E-06 offer accepted, Aarhus, Series D, Blade Composites Technician, 555K, dated 2025-10.
  - E-07 posted range, Copenhagen, Series D, Field Service Planner, 600K-720K, dated 2026-08.
  - E-08 posted range, Aarhus, Series D, Field Service Planner, 610K-740K, dated 2026-09, voluntarily posted.
  - E-09 survey snippet, undated, unnamed source: "procurement lead median 700K".

Required output:

# Compensation Benchmark - Skarv Wind Services

Skarv is a Series D wind-services company of about 500, every role anchored to Aarhus. The pool for each seat is Aarhus-only; Series D points are comparable, Series C and E are partial, and listed-company points are out of the comparison entirely. The window opens January 2026, so anything earlier or undated is excluded. All figures are DKK base salary. With no stated cut-off the memo works to an assumed one: within 5% of midpoint is competitive, beyond it lagging or above-market.

## Evidence audit

| ID | Family | Bucket | Detail |
|---|---|---|---|
| E-01 | Turbine Controls Engineer | P | accepted offer 860K |
| E-02 | Turbine Controls Engineer | P | posted range, mid 850K |
| E-03 | Turbine Controls Engineer | X | stage |
| E-04 | Turbine Controls Engineer | S | one stage away; passed Aarhus |
| E-05 | Blade Composites Technician | P | posted range, mid 545K |
| E-06 | Blade Composites Technician | X | recency |
| E-07 | Field Service Planner | X | metro |
| E-08 | Field Service Planner | P | posted range, mid 675K |
| E-09 | Procurement Lead | X | recency |

## Signal counts

- Senior Turbine Controls Engineer: P=E-01,E-02; S=E-04(Aarhus); X=E-03 stage; I=3 -> E-01 accepted 860K vs mid 790K; E-02's posted mid is 850K, +7.6%, same side; E-04 is a partial accepted offer, corroborates only; the two declines corroborate only. Anchor: 860K (single offer) -> Gap: +8.9% -> lagging -> High, offer plus a same-side range.
- Blade Composites Technician: P=E-05; S=-; X=E-06 recency; I=1 -> E-05's posted mid is 545K, +2.8%; E-06 falls before the window. Anchor: 545K (range mid) -> Gap: +2.8% -> competitive -> Low, posted-range cap.
- Field Service Planner: P=E-08; S=-; X=E-07 metro; I=0 -> E-08's posted mid is 675K, +8.9%; E-07 is excluded on metro. Anchor: 675K (range mid) -> Gap: +8.9% -> lagging -> Low, posted-range cap.
- Procurement Lead: P=-; S=-; X=E-09 recency; I=0 -> nothing survives to anchor. Anchor: none -> Deferred.

## Benchmark table

| Role | N | P IDs | S IDs | I | X IDs + reasons | Anchor (gap) | Verdict | Confidence |
|---|---:|---|---|---:|---|---|---|---|
| Senior Turbine Controls Engineer (band 720K-870K, mid 790K) | 4 | E-01,E-02 | E-04 | 3 | E-03 stage | 860K (+8.9%) | Lagging | High |
| Blade Composites Technician (band 480K-585K, mid 530K) | 2 | E-05 | - | 1 | E-06 recency | 545K (+2.8%) | Competitive | Low |
| Field Service Planner (band 560K-680K, mid 620K) | 2 | E-08 | - | 0 | E-07 metro | 675K (+8.9%) | Lagging | Low |
| Procurement Lead (band 640K-780K, mid 710K) | 1 | - | - | 0 | E-09 recency | - | Deferred | - |

## Deferred verdicts

- Procurement Lead: nothing usable survives, and there is no internal offer history to corroborate. What resolves it is an in-window, Aarhus, near-stage base-salary point for this seat.

## Signal caveats

The Controls verdict rests on revealed preference - a signed external offer, a same-side posted range, and an internal accepted hire at 855K corroborating the lagging direction; the two declines at 810K-825K cite competing packages and lean the same way without entering the anchor. All surviving postings were voluntary, so they weigh less than offers, and Planner plus Procurement Lead carry no internal offer history - a named gap, not a zero. The single piece of evidence that would most move the weakest read is one near-stage Aarhus point for Field Service Planner or Procurement Lead.

**Why it reads this way.** The unfiltered table would have set the Controls anchor near the listed utility's 1,000K+ scale - a different market tier, out on stage - and counted the technician offer dated 2025-10 that sits before the window opens. Blade and Planner both rest on a single posted midpoint, so both cap at Low whatever direction the gap gives; only Controls earns High, on a signed offer corroborated by a same-side range and internal evidence.

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
- **Contractor basis.** A day rate or hourly rate is `X basis`, never annualised. The same is true for OTE, total cash, grants, equity or retention figures unless a base split is supplied; when a split is supplied, show the subtraction once and anchor on the base.
- **Missing history.** "No recent offers" and no offer line both produce `I=0`; when that absence matters, name the missing history in prose rather than inventing a number.
- **Title discipline.** A scope note can map a different title to the same seat. A restyling or abbreviation that preserves function and level also counts; a manager title for an IC seat, or Staff for Senior, is `X role`.
- **Anchored versus remote.** A metro-anchored seat rejects other metros and national points outright (`X metro`). An explicitly remote seat uses remote/national evidence, and then single-metro points are the partials. When remote roles are named without naming the families, remote-US or national points for unlabelled families are `S` - they corroborate the direction but never anchor.
- **One point, one bucket.** A Toronto, Series-D posting for a Raleigh-anchored Series-B seat is `E-## metro, stage` in `X`, never two exclusions and never `S`.
- **Weak source.** Unverified recruiter hearsay and unnamed surveys are `X source` - counted, named, never weighed. A dated, named recruiter report can survive into `P` on the checks, but it carries no anchor weight and lowers confidence.
- **Secondary restraint.** A one-stage-away point corroborates but never anchors and never moves confidence - even when it is an accepted offer.
- **Internals corroborate.** Internal accepted offers and declines sit inside the family's row or caveat. Hires above midpoint or a decline citing pay support a lagging lean; they never enter the pool, the anchor, or the confidence tier.
- **Posted-range cap.** A verdict anchored on posted midpoints alone reads Low however many ranges qualify - an accepted offer is what would lift it.
- **Near the line.** A gap within one point of the stated cut-off lets the number set the label, names the lean once, and caps at Medium - one more comparable point could swing it.
- **Range tops are routine.** A posted maximum above the band max earns at most one caveat line; the midpoint does the work.
- **Audit before verdicts.** Every external ID gets its own Evidence audit row - bucket plus a one-phrase reason - before any family verdict appears. The audit, Signal counts and the benchmark table must agree on every bucket.
- **Name the weakest link.** The last caveat sentence names the single piece of evidence that would most move the weakest verdict; when the snapshot leaves remote assignment open, one caveat sentence says that plainly.
