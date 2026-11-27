---
name: comp-band-benchmark
description: Benchmark each role family's pay band against a classified external evidence pool. Scope-check first; screen every point on geography, stage, role scope and posting type; exclude non-base pay structures; write each basis conversion with its direction; then give a competitive, lagging, above-market or deferred verdict per family with its evidence funnel and confidence tier.
---

# Compensation band benchmarking

Bad benchmarks average every number in the table. Verdicts come only from the surviving comparable pool. The method in brief: screen every point on geography, stage, role scope and posting type, where any fail drops the point and a single partial keeps it out of the anchor; accepted offers outrank posted ranges (one offer is the anchor, two give their mean, more their median) and ranges then only corroborate; everything goes on annual base, each conversion written with its direction; the gap to the band midpoint gives the verdict (within ±5.0% is competitive); the offers and ranges left give the tier (two offers High, one offer or two ranges Medium, one range Low); and a family with no full point, or only partials pulling opposite ways, is deferred with the evidence that would close it.

## 1. Scope check, before anything else

Redirect, and build no table, when the request is any of these:
- an individual pay decision: what to pay a named person, or whether someone is underpaid;
- a raw salary lookup with no classified evidence supplied;
- band or structure design: new levels, new ranges;
- a pay-equity audit.

A redirect names each out-of-scope ask with its reason and owner, sets any roster aside (a benchmark compares bands with a market, never people with each other), says every band is Deferred until evidence arrives, and asks for the band snapshot and a classified external table. It names no employee and quotes no salary or market figure.

To redirect, call read_reference for `references/redirect.md`, writing at most one short line in that message. Then write the redirect as your final message.

## 2. Audit the inputs

Fix from the input: each family's anchor geography (the HQ metro unless the snapshot places that family elsewhere, plus any remote-role rule), company stage, band currency per family, the data-window cutoff, and internal offers and declines.

Assign every evidence row to exactly one family and level, the one its title maps to: a point sits in one funnel only. A family with a band but no external points is deferred. A point whose role maps to no band is dropped ("no internal match"). A missing band is a named gap, never estimated.

## 3. Screen every point

**Exclusions** are dropped and counted with their reason:
- **Out of window:** only a date earlier than the cutoff month, even by one month. The cutoff month and every later date stay in: "before March 2024" keeps 2024-03 and drops 2024-02; with a cutoff of June 2024, 2024-12 stays.
- **Undated,** or a survey with no named source or method.
- **Unverifiable hearsay,** such as a verbal recruiter figure.
- **Not an FTE base structure:**
  - contractor or hourly contract rates (never annualise them);
  - retention or acquisition grants;
  - sign-on packages;
  - equity-heavy mixes;
  - OTE or total comp with no base split.

  Read the Notes column; the Type field may look normal.
- **Cannot be put on the band's basis:** for example, another currency with no exchange rate supplied. Never invent a rate.

**Four dimensions** for the rest:
- **Geography:**
  - Match: the same metro, or the stated anchor tier.
  - Partial: remote or national with no metro declared.
  - Fail: any other named metro.
- **Stage:** count steps on the ladder Seed, Series A, B, C, D, E or later, Public.
  - Match: 0 steps.
  - Partial: 1 step.
  - Fail: 2 or more steps, Public versus private, or unknown. B versus D is 2 steps, a fail.
- **Role scope:**
  - Match: the same family and level, or a different title that a scope note maps to the same level.
  - Partial: an adjacent level, a blended title joining two different roles with "/" or "or", or a neighbouring specialism of the same family: the job may differ. An alias of the same job ("Bookkeeper / Accounts Clerk"), or a qualifier naming the company's own sector, is M, and a scope note mapping the title always decides.
  - Fail: another level or family.
- **Posting type:**
  - Match: an accepted offer or a posted base range.

**Class, read off the marks.** Count the F and P marks on the point's line; never judge the class by feel:
- any F: **DROP**, however well the rest matches (a named metro other than the anchor is F, never P);
- no F and two or more P: **DROP**, naming both;
- no F and exactly one P: **PARTIAL**;
- all M: **FULL**.

Partials never set the anchor. Note their skew: a lower stage or national point understates the market, a higher stage overstates it.

## 4. One basis: annual base

Write each conversion with its direction:
- total to base: "$147,000 total − $13,500 stated bonus = $133,500 base (total → base, falls)";
- monthly ×12;
- hourly FTE ×2,080 only if the input states the hours basis.

Annual base needs "no conversion". A band in GBP or EUR is compared with same-currency evidence and nothing is converted. A range midpoint is (min + max) / 2. Never use a range minimum or maximum as an anchor, and never round an anchor.

## 5. Anchor, gap and verdict

- **Anchor:**
  - With full accepted offers, the anchor uses them alone: one offer is the anchor itself, two give their mean, three or more their median. It uses external offers only: full posted ranges then corroborate but do not enter it, and the company's own internal offers never enter it.
  - With no full offer, the anchor is the median of the full range midpoints.
  - A partial offer never anchors. An accepted offer one stage off, or under a blended title, is PARTIAL like any other point: offer strength never overrides a mark.
- **Gap** = (band midpoint − anchor) / anchor, to one decimal.
- **Verdict:**

| Gap | Verdict |
|---|---|
| −5.0% to +5.0%, both ends included | competitive |
| below −5.0% | lagging |
| above +5.0% | above-market |

A gap within one point of ±5.0% is called a boundary case. Offers are revealed preference (what was paid); ranges are aspirational and wide.

## 6. Confidence tier: count, then read off

Count only FULL points from the external table: offers = accepted offers, ranges = posted ranges. Internal company offers are not counted, and partials are not counted.

- offers ≥ 2: **High** (Medium if the offers, taken one by one, fall on opposite sides of a ±5.0% line)
- offers = 1: **Medium**, whatever the ranges show
- offers = 0 and ranges ≥ 2: **Medium** (the posted-range cap: ranges alone never reach High)
- offers = 0 and ranges = 1: **Low**, never Medium
- nothing full: **Deferred**. Partials alone cannot carry a verdict. Two partials with opposite skews (one stage below, one above) do not cancel into an anchor; they show the market is unresolved, which is a deferral.

The company's own offers and declines are a separate check on where it pays today: the notes say where they sit against the band midpoint and whether that points the same way as the external verdict (offers above the midpoint agree with a lag; offers near it, with competitive), and they never enter a count, an anchor, a verdict or a tier. Write the deciding reason briefly: "Medium: one offer, range agrees".

## 7. Order of work

A redirect from section 1 skips all of this.

1. After load_skill, write the worksheet below as your next message. Only when it is complete, including its checks line, end that message with a read_reference call for `references/final-pass.md`.
2. The final pass gives the deliverable's layout. Write the deliverable as your final message, carrying over the figures, IDs and dates you worked out. It reads as a finished report for the requester; the worksheet's working stays behind.

Worksheet, one block per role family and level:

```
<family, level> band mid <M>
points: <ID | "posted title" scope M/P/F | type figure | date YYYY-MM vs cutoff YYYY-MM -> in/out | geo M/P/F | stage n steps M/P/F -> F=<n> P=<n> -> FULL / PARTIAL (dim, skew) / DROP (every reason)>, every point listed; an exclusion reads <ID | reason -> DROP>
full: offers [<ID figure>, ..] ranges [<ID midpoint>, ..]   (copy only points marked FULL)
convert: <each conversion written out, or "none">
anchor: <if the full line lists offers: one is the anchor, two their mean, more their median> else <if it lists ranges: median of those range mids> else <both lists empty: "—", Deferred>
gap: (<M> - <anchor>) / <anchor> = <x.xx%> -> <x.x%> -> <verdict>
tier: offers=<n>, ranges=<m> (FULL only) -> High if n>=2 / Medium if n=1, or n=0 and m>=2 / Low if n=0 and m=1 / Deferred if none
funnel: <n> retrieved -> <f> full (<o> offer, <r> range), <p> partial, <d> dropped
internal: <this family's own offers or declines only, and whether they agree>
```

After the last block, count the point lines across all blocks: the total equals the evidence table's row count. If not, a point is missing or listed twice: fix the blocks first.

End the worksheet with a "checks:" line confirming:
- every point's class follows its F and P counts, and each point sits in one family only;
- every anchor ID appears in its full line, and no PARTIAL, internal, OTE, unconverted total-comp, contractor, grant or unconvertible foreign-currency figure is in an anchor;
- every row whose full line is empty is Deferred, with "—" for anchor and gap;
- retrieved = full + partial + dropped per family, and the blocks together list every evidence row once;
- every date at the cutoff month is kept; every 2-step stage gap is F and every 1-step gap is P, never M;
- each verdict follows the ±5.0% table (a gap that rounds to ±5.0% is competitive), and each tier is read off the counts in section 6.
