Your next message is the worksheet: one small table per role family and level, in snapshot order, each followed by its seven settling lines. Only when every family is done and the checks line is written, end that same message with a read_reference call for `references/final-pass.md`.

## The form

```
### <Family>, <level>: band mid <M> | home <metro>, <stage> | cutoff <YYYY-MM> | table note: <what any note above the evidence table says about how ranges were posted, or "none">
| ID | Title as posted | Type and figure | Date vs cutoff | Geo | Stage (steps) | Scope | Post | Marks | Class |
|---|---|---|---|---|---|---|---|---|---|
| <ID> | "<title>" | <offer / range min–max, midpoint / other> | <YYYY-MM> in/out | M/P/F | M/P/F (<n>) | M/P/F | M offer / M mandate / M no note / P voluntary | F<n> P<n> | SURVIVES / PARTIAL (<dim>, <lean>) / DROP (<every reason>) |
| <ID> | set aside before marking | | | | | | | | DROP (<reason>) |
Survivors: offers [<ID figure>, ..] ranges [<ID midpoint>, ..]   (only rows whose Class is SURVIVES)
Convert: <each conversion with its sum and direction, or "none">
Anchor: <offers on the Survivors line: one is the anchor, several their mean> else <ranges on it: mean of their midpoints> else <"—", Deferred>
Gap: (<M> − <anchor>) / <anchor> = <x.xx%> → <x.x%> → <verdict>, adding "close" when 2.0% to 4.0% either way
Tier: offers=<n>, ranges=<m> on the Survivors line → High if n≥2 / Medium if n=1, or n=0 and m≥2 / Low if n=0 and m=1 / Deferred if none
Funnel: <n> retrieved → <f> full (<o> offer, <r> range), <p> partial, <d> dropped
Own pay: <this family's own offers or declines only, and whether they agree>
```

Fill Post from the row's own Notes first and, where they are silent, from the table note: under a note such as "unless otherwise noted, all ranges are voluntarily posted", a range with a blank Notes cell is P voluntary. Every evidence row appears in exactly one family's table, the one its title maps to. After the last family, add up the table rows: the total equals the evidence table's row count, or a row is missing or doubled and must be fixed first.

Close the worksheet with one "Checks:" line confirming that
- each Class follows its marks (any F, or two P, is DROP; one P is PARTIAL; no P and no F SURVIVES);
- every range marked voluntarily posted, on its row or by the table note, has Post P and does not survive;
- every title with a slash or an "or" in it ("X / Y", "X or Y") has Scope P;
- every anchor ID is on its Survivors line, an anchor with any offer on that line holds offers only (never an offer and a range together), and no partial, own offer, OTE, unconverted total comp, contractor rate, grant or unconvertible foreign figure is in an anchor;
- every family with an empty Survivors line is Deferred, with "—" for anchor and gap;
- retrieved = full + partial + dropped for each family;
- every date before the cutoff month is DROP and every date in or after it is kept; a 2-step stage gap is F and a 1-step gap is P;
- each verdict follows the ±3.0% line (−3.1% lags; −2.9% is competitive and close) and each tier follows the counts.

## First worked case (invented company, rows and figures)

The input, in short: Brindle Cycle Works, Series B, Tulsa OK; window line "points older than 12 months (before March 2026) are out of window". Bands: Frame Engineering / Senior, midpoint $110,000; Dealer Support / Lead, midpoint $68,000; Paint Shop / Supervisor, midpoint $64,000. Own offers: two Senior Frame Engineer hires accepted at $120,000 and $130,000; one Dealer Support Lead offer declined at $72,000, the candidate citing pay.

| ID | Title | Type | Figure | Date | Metro | Stage | Notes |
|---|---|---|---|---|---|---|---|
| B-01 | Senior Frame Engineer | Accepted offer | $120,000 base | 2026-05 | Tulsa OK | Series B | |
| B-02 | Senior Frame Engineer | Accepted offer | $150,000 total comp | 2026-07 | Tulsa OK | Series B | includes a stated $10,000 bonus |
| B-03 | Senior Frame Engineer | Posted range | $100,000–$140,000 base | 2026-06 | Tulsa OK | Series B | voluntarily posted |
| B-04 | Senior Frame Engineer | Posted range | $110,000–$150,000 base | 2026-04 | Tulsa OK | Series C | voluntarily posted |
| B-05 | Senior Frame Engineer | Accepted offer | $120,000 base | 2026-02 | Tulsa OK | Series B | |
| B-06 | Dealer Support Lead | Posted range | $60,000–$80,000 base | 2026-08 | Tulsa OK | Series B | |
| B-07 | Dealer Support Lead / Account Manager | Posted range | $60,000–$90,000 base | 2026-05 | Tulsa OK | Series B | |
| B-08 | Dealer Support Lead | Contractor rate | $40/hour | 2026-06 | Tulsa OK | Series B | contract engagement |
| B-09 | Paint Shop Supervisor | Posted range | $50,000–$70,000 base | 2026-09 | Tulsa OK | Series A | voluntarily posted |
| B-10 | Paint Shop Supervisor | Accepted offer | $70,000 base | 2026-04 | Tulsa OK | Series C | |
| B-11 | Paint Shop Supervisor | Posted range | $50,000–$60,000 base | 2026-06 | Remote US | Series B | no metro declared |

The worksheet for it:

```
### Frame Engineering, Senior: band mid $110,000 | home Tulsa OK, Series B | cutoff 2026-03 | table note: none
| ID | Title as posted | Type and figure | Date vs cutoff | Geo | Stage (steps) | Scope | Post | Marks | Class |
|---|---|---|---|---|---|---|---|---|---|
| B-01 | "Senior Frame Engineer" | offer $120,000 base | 2026-05 in | M | M (0) | M | M offer | F0 P0 | SURVIVES |
| B-02 | "Senior Frame Engineer" | offer $150,000 total, $140,000 base | 2026-07 in | M | M (0) | M | M offer | F0 P0 | SURVIVES |
| B-03 | "Senior Frame Engineer" | range $100,000–$140,000, midpoint $120,000 | 2026-06 in | M | M (0) | M | P voluntary | F0 P1 | PARTIAL (posting, overstates) |
| B-04 | "Senior Frame Engineer" | range $110,000–$150,000 | 2026-04 in | M | P (1) | M | P voluntary | F0 P2 | DROP (Series C, voluntarily posted) |
| B-05 | "Senior Frame Engineer" | offer $120,000 | 2026-02 out | | | | | | DROP (before the cutoff month) |
Survivors: offers [B-01 $120,000, B-02 $140,000] ranges []
Convert: B-02 $150,000 total − $10,000 stated bonus = $140,000 base (total → base, falls)
Anchor: two offers → mean ($120,000 + $140,000) / 2 = $130,000 (B-01, B-02); B-03 is partial and stays out
Gap: ($110,000 − $130,000) / $130,000 = −15.38% → −15.4% → lagging
Tier: offers=2, ranges=0 → High: two offers, each below the line on its own
Funnel: 5 retrieved → 2 survived (2 offer, 0 range), 1 partial, 2 dropped
Own pay: hires accepted at $120,000 and $130,000, both above the midpoint: agrees with lagging

### Dealer Support, Lead: band mid $68,000 | home Tulsa OK, Series B | cutoff 2026-03 | table note: none
| ID | Title as posted | Type and figure | Date vs cutoff | Geo | Stage (steps) | Scope | Post | Marks | Class |
|---|---|---|---|---|---|---|---|---|---|
| B-06 | "Dealer Support Lead" | range $60,000–$80,000, midpoint $70,000 | 2026-08 in | M | M (0) | M | M no note | F0 P0 | SURVIVES |
| B-07 | "Dealer Support Lead / Account Manager" | range $60,000–$90,000, midpoint $75,000 | 2026-05 in | M | M (0) | P (blended title) | M no note | F0 P1 | PARTIAL (scope, overstates) |
| B-08 | set aside before marking | | | | | | | | DROP (contractor hourly rate; never annualised) |
Survivors: offers [] ranges [B-06 $70,000]
Convert: none
Anchor: no surviving offer → mean of range midpoints → $70,000 (B-06)
Gap: ($68,000 − $70,000) / $70,000 = −2.86% → −2.9% → competitive, close
Tier: offers=0, ranges=1 → Low: one range only
Funnel: 3 retrieved → 1 survived (0 offer, 1 range), 1 partial, 1 dropped
Own pay: one offer declined at $72,000 citing pay, above the midpoint: leans toward a lag, so the close call is worth watching

### Paint Shop, Supervisor: band mid $64,000 | home Tulsa OK, Series B | cutoff 2026-03 | table note: none
| ID | Title as posted | Type and figure | Date vs cutoff | Geo | Stage (steps) | Scope | Post | Marks | Class |
|---|---|---|---|---|---|---|---|---|---|
| B-09 | "Paint Shop Supervisor" | range $50,000–$70,000 | 2026-09 in | M | P (1) | M | P voluntary | F0 P2 | DROP (Series A, voluntarily posted) |
| B-10 | "Paint Shop Supervisor" | offer $70,000 base | 2026-04 in | M | P (1) | M | M offer | F0 P1 | PARTIAL (stage, overstates; above the midpoint) |
| B-11 | "Paint Shop Supervisor" | range $50,000–$60,000, midpoint $55,000 | 2026-06 in | P (remote, no metro) | M (0) | M | M no note | F0 P1 | PARTIAL (geography, understates; below the midpoint) |
Survivors: offers [] ranges []
Convert: none
Anchor: — (no survivor), Deferred
Gap: — → deferred; B-10 and B-11 lean opposite ways and are not averaged
Tier: offers=0, ranges=0 → Deferred
Funnel: 3 retrieved → 0 survived (0 offer, 0 range), 2 partial, 1 dropped
Own pay: none for this family

Rows: 5 + 3 + 3 = 11 = rows in the evidence table
Checks: classes follow the marks; B-03, B-04 and B-09 have Post P and none SURVIVES; anchors use Survivors-line IDs only (B-03 partial and the own offers kept out); Paint Shop's empty Survivors line is Deferred with "—"; funnels sum; B-05 at 2026-02 dropped and every date from 2026-03 kept; the 1-step gaps of B-04, B-09 and B-10 are P; verdicts follow ±3.0% (Dealer Support −2.9% competitive, close), tiers follow the counts.
```

## Second worked case (invented): a pound band, three offers

The input, in short: Orrin Software, Series D, Bristol UK; window line "points older than 12 months (before June 2026) are out of window". Bands in GBP: Data Platform / Staff, midpoint £90,000; People Partner / Senior, midpoint £50,000. No own offers this year.

| ID | Title | Type | Figure | Date | Metro | Stage | Notes |
|---|---|---|---|---|---|---|---|
| K-01 | Staff Data Platform Engineer | Accepted offer | £100,000 base | 2026-07 | Bristol UK | Series D | |
| K-02 | Staff Data Platform Engineer | Accepted offer | £90,000 base | 2026-08 | Bristol UK | Series D | |
| K-03 | Staff Data Platform Engineer | Accepted offer | £110,000 base | 2026-06 | Bristol UK | Series D | |
| K-04 | Staff Data Platform Engineer | Posted range | $130,000–$170,000 base | 2026-07 | Bristol UK | Series D | figures in USD |
| K-05 | Staff Data Platform Engineer | Accepted offer | £100,000 base | 2026-09 | Bristol UK | Series E | |
| K-06 | Senior People Partner | Posted range | £40,000–£60,000 base | 2026-08 | Bristol UK | Series D | |
| K-07 | Senior People Partner | Posted range | £50,000–£70,000 base | 2026-07 | Bristol UK | Series D | voluntarily posted |

```
### Data Platform, Staff: band mid £90,000 | home Bristol UK, Series D | cutoff 2026-06 | table note: none
| ID | Title as posted | Type and figure | Date vs cutoff | Geo | Stage (steps) | Scope | Post | Marks | Class |
|---|---|---|---|---|---|---|---|---|---|
| K-01 | "Staff Data Platform Engineer" | offer £100,000 base | 2026-07 in | M | M (0) | M | M offer | F0 P0 | SURVIVES |
| K-02 | "Staff Data Platform Engineer" | offer £90,000 base | 2026-08 in | M | M (0) | M | M offer | F0 P0 | SURVIVES |
| K-03 | "Staff Data Platform Engineer" | offer £110,000 base | 2026-06 in (the cutoff month stays) | M | M (0) | M | M offer | F0 P0 | SURVIVES |
| K-04 | set aside before marking | | | | | | | | DROP (USD figures, no exchange rate in the input; never invent one) |
| K-05 | "Staff Data Platform Engineer" | offer £100,000 base | 2026-09 in | M | P (1) | M | M offer | F0 P1 | PARTIAL (stage, overstates) |
Survivors: offers [K-01 £100,000, K-02 £90,000, K-03 £110,000] ranges []
Convert: none (all base, all GBP)
Anchor: three offers → mean (£100,000 + £90,000 + £110,000) / 3 = £100,000 (K-01, K-02, K-03)
Gap: (£90,000 − £100,000) / £100,000 = −10.00% → −10.0% → lagging
Tier: offers=3, ranges=0 → High: three offers, each at or above the midpoint
Funnel: 5 retrieved → 3 survived (3 offer, 0 range), 1 partial, 1 dropped
Own pay: none for this family

### People Partner, Senior: band mid £50,000 | home Bristol UK, Series D | cutoff 2026-06 | table note: none
| ID | Title as posted | Type and figure | Date vs cutoff | Geo | Stage (steps) | Scope | Post | Marks | Class |
|---|---|---|---|---|---|---|---|---|---|
| K-06 | "Senior People Partner" | range £40,000–£60,000, midpoint £50,000 | 2026-08 in | M | M (0) | M | M no note | F0 P0 | SURVIVES |
| K-07 | "Senior People Partner" | range £50,000–£70,000, midpoint £60,000 | 2026-07 in | M | M (0) | M | P voluntary | F0 P1 | PARTIAL (posting, overstates) |
Survivors: offers [] ranges [K-06 £50,000]
Convert: none
Anchor: no surviving offer → mean of range midpoints → £50,000 (K-06)
Gap: (£50,000 − £50,000) / £50,000 = 0.00% → 0.0% → competitive
Tier: offers=0, ranges=1 → Low: one range only
Funnel: 2 retrieved → 1 survived (0 offer, 1 range), 1 partial, 0 dropped
Own pay: none for this family

Rows: 5 + 2 = 7 = rows in the evidence table
Checks: classes follow the marks; K-07 has Post P and does not survive; anchors use Survivors-line IDs only (K-05 partial kept out, K-04 never converted); funnels sum; K-03 in the cutoff month kept; verdicts follow ±3.0%, tiers follow the counts.
```

When the worksheet is complete, end the message with the read_reference call for `references/final-pass.md`. The message after that read is the report alone, beginning at its `# ` title line.
