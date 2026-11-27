# Audits

Three made-up companies and the audit each request gets: the working that comes before a page, written as plain text in a message of its own. It opens with the frame line, the window written as its first month in, so that every date is held to that month; then every point gets a row and every family a line. The page that follows each audit is in `references/page.md`. A real audit takes every company, ID, date and figure from its own input.

## Case one

**What arrived.** Copperline Logistics, Series C, Columbia SC; remote roles are paid on the Columbia tier. Retrieved 2027-03-10. Window: 12 months; points dated before March 2026 are out. Every row was pulled from the Hirewell Listings feed. Note on the table: SC has no posting mandate, so every range below was posted by choice.

| Role family | Level | Band min | Band midpoint | Band max |
|---|---|---|---|---|
| Route Planning | Senior | $102,000 | $113,000 | $126,000 |
| Integration Engineering | Principal | $143,500 | $158,500 | $174,500 |
| Carrier Relations | Team Lead | $71,500 | $79,000 | $87,500 |

Own offers, last 12 months: Route Planning, two accepted at $117,500 and $119,500 base; Carrier Relations, one declined at $81,500 (took a higher offer); Integration Engineering, none.

| ID | Type | Date | Role title | Geo | Stage | Figures | Notes |
|---|---|---|---|---|---|---|---|
| L-01 | Offer (accepted) | 2027-01 | Senior Route Planner | Columbia SC | Series C | $117,000 base |  |
| L-02 | Posted range | 2026-12 | Senior Route Planner | Columbia SC | Series C | $109,000–$134,000 base | posted voluntarily |
| L-03 | Hearsay | 2027-02 | Senior Route Planner | Columbia SC | Series C | "around $127,000" | said on a call, nothing written |
| L-04 | Posted range | 2027-01 | Senior Route Planner | Hoboken NJ | Series D | $123,000–$151,000 base |  |
| L-05 | Posted range | 2026-11 | Principal Integration Engineer | Columbia SC | Series B | $138,500–$160,500 base |  |
| L-06 | Offer (accepted) | 2026-12 | Principal Integration Engineer | Knoxville TN | Series C | $166,500 base |  |
| L-07 | Posted range | 2026-12 | Principal Platform Architect | Columbia SC | Series C | $172,500–$196,500 base | a pre-sales design role |
| L-08 | Posted range | 2026-03 | Carrier Relations Lead | Columbia SC | Series C | $78,500–$92,500 base | posted voluntarily |
| L-09 | Posted range | 2027-01 | Carrier Relations Lead | Columbia SC | Series C | $80,500–$94,500 base | posted voluntarily |
| L-10 | Posted range | 2026-02 | Carrier Relations Lead | Columbia SC | Series C | $74,500–$88,500 base | posted voluntarily |
| L-11 | Posted range | 2026-12 | Senior Carrier Coordinator | Columbia SC | Series C | $66,500–$77,500 base | individual contributor, no reports |

**The audit, a message of its own, ending with the read_reference call for `references/check.md`:**

**Frame:** roles tied to Columbia SC pay, remote included · company stage Series C · annual base, USD · 12-month window: 2026-03 and later is in.

| ID | Family | Date | Geography | Stage | Scope | Type, basis | Off by → class |
|---|---|---|---|---|---|---|---|
| L-01 | Route Planning | 2027-01, in | Columbia, match | Series C, match | match | offer, base | nothing → Fully comparable |
| L-02 | Route Planning | 2026-12, in | Columbia, match | Series C, match | match | posted, base | nothing → Fully comparable |
| L-03 | Route Planning | 2027-02, in | Columbia, match | Series C, match | match | hearsay, miss | 1 miss (hearsay, nothing to verify) → Dropped |
| L-04 | Route Planning | 2027-01, in | Hoboken, another metro, miss | Series D, near | match | posted, base | 1 miss (another metro; stage one round later too) → Dropped |
| L-05 | Integration Engineering | 2026-11, in | Columbia, match | Series B, near | match | posted, base | 1 near (stage, one round earlier) → Partial |
| L-06 | Integration Engineering | 2026-12, in | Knoxville, another metro, miss | Series C, match | match | offer, base | 1 miss (another metro) → Dropped |
| L-07 | Integration Engineering | 2026-12, in | Columbia, match | Series C, match | pre-sales design, another family, miss | posted, base | 1 miss (another job family) → Dropped |
| L-08 | Carrier Relations | 2026-03, in (the cut-off month counts) | Columbia, match | Series C, match | match | posted, base | nothing → Fully comparable |
| L-09 | Carrier Relations | 2027-01, in | Columbia, match | Series C, match | match | posted, base | nothing → Fully comparable |
| L-10 | Carrier Relations | 2026-02, out | Columbia, match | Series C, match | match | posted, base | stale (a month before the cut-off) → Dropped |
| L-11 | Carrier Relations | 2026-12, in | Columbia, match | Series C, match | specialist with no reports, miss | posted, base | 1 miss (no reports, against a team lead) → Dropped |

**Basis.** Every kept figure is already annual base in USD, so nothing was converted.

- Route Planning, Senior: kept: L-01, L-02 (2) · partial: none (0) · dropped: L-03, L-04 (2) · retrieved 4. Anchor: Among the kept, one offer: L-01, $117,000. Posted L-02 is not averaged in. Gap: $117,000 − $113,000 = +$4,000, about 3.5% of the $113,000 band midpoint, anchor above. Own accepted offers average ($117,500 + $119,500) / 2 = $118,500, about 4.9% above the midpoint; 4.9% is more than 4% and on the anchor's side, so the margin narrows to 3% × $113,000 = $3,390; $4,000 is outside. → Lagging; kept (2): 1 offer + 1 posted → High; own accepted offers 2, so it holds → High.
- Integration Engineering, Principal: kept: none (0) · partial: L-05 (1) · dropped: L-06, L-07 (2) · retrieved 3. Anchor: none. Gap: not computed. → Deferred; kept (0) → Deferred.
- Carrier Relations, Team Lead: kept: L-08, L-09 (2) · partial: none (0) · dropped: L-10, L-11 (2) · retrieved 4. Anchor: Among the kept, no offer. Posted midpoints: L-08 ($78,500 + $92,500) / 2 = $85,500; L-09 ($80,500 + $94,500) / 2 = $87,500; mean ($85,500 + $87,500) / 2 = $86,500. Gap: $86,500 − $79,000 = +$7,500, about 9.5% of the $79,000 band midpoint, anchor above. The snapshot lists one own offer here and it was declined, none accepted, so the margin is 5% × $79,000 = $3,950; $7,500 is outside. → Lagging; kept (2): 2 posted, no offer → Medium.

## Case two

**What arrived.** Harrowgate Assurance, Series B, Burlington VT; every role is tied to Burlington except Regulatory Reporting, a Rotterdam team banded in EUR. Retrieved 2027-02-18. Window: 18 months; points dated before August 2025 are out. All rows came through the Hirewell Listings feed.

| Role family | Level | Band min | Band midpoint | Band max |
|---|---|---|---|---|
| Risk Modeling | Senior | $119,500 | $132,500 | $146,500 |
| Coverage Product | Director | $182,500 | $202,500 | $223,500 |
| Regulatory Reporting (Rotterdam) | Senior | €89,500 | €99,500 | €109,500 |

Own offers, last 12 months: Risk Modeling, three accepted at $133,500, $134,000 and $136,000 base; Regulatory Reporting, two accepted at €99,000 and €100,500 base; Coverage Product, none.

| ID | Type | Date | Role title | Geo | Stage | Figures | Notes |
|---|---|---|---|---|---|---|---|
| P-01 | Offer (accepted) | 2026-12 | Senior Risk Modeler | Burlington VT | Series B | $134,500 base |  |
| P-02 | Offer (accepted) | 2026-11 | Senior Risk Modeler | Burlington VT | Series B | $137,500 base |  |
| P-03 | Contractor rate | 2027-01 | Senior Risk Modeler | Burlington VT | Series B | $780 per day | six-month contract, not an employee |
| P-04 | Offer (accepted) | 2026-12 | Senior Risk Modeler | Burlington VT | Series B | $109,500 base | took a reduced base for a double equity grant |
| P-05 | Acquisition package | 2026-11 | Director, Coverage Product | Burlington VT | Series B | $252,500 total | includes a retention grant; base not broken out |
| P-06 | Posted range | 2027-01 | Director of Coverage Product | Burlington VT | Series B | $176,500–$206,500 base | VT mandate |
| P-07 | Offer (accepted) | 2026-12 | Director, Coverage Product | Burlington VT | Series B | $213,500 total cash | includes a $24,000 annual bonus; the rest is base |
| P-08 | Offer (accepted) | 2027-01 | Senior Regulatory Reporting Analyst | Rotterdam NL | Series B | €93,500 base |  |
| P-09 | Posted range | 2026-12 | Senior Regulatory Reporting Analyst | Bristol UK | Series B | £78,500–£92,500 base | figures in GBP |
| P-10 | Posted range | 2026-11 | Senior Risk Modeler | Burlington VT | Series B | $125,500–$149,500 base | VT mandate |

**Audit for this request, sent alone; its last line calls read_reference on `references/check.md`:**

**Frame:** roles tied to Burlington VT, Regulatory Reporting to Rotterdam · company stage Series B · annual base, USD, Regulatory Reporting in EUR · 18-month window: 2025-08 and later is in.

| ID | Family | Date | Geography | Stage | Scope | Type, basis | Off by → class |
|---|---|---|---|---|---|---|---|
| P-01 | Risk Modeling | 2026-12, in | Burlington, match | Series B, match | match | offer, base | nothing → Fully comparable |
| P-02 | Risk Modeling | 2026-11, in | Burlington, match | Series B, match | match | offer, base | nothing → Fully comparable |
| P-03 | Risk Modeling | 2027-01, in | Burlington, match | Series B, match | match | contractor day rate, miss | basis exclusion (a contract rate is not a salary) → Dropped |
| P-04 | Risk Modeling | 2026-12, in | Burlington, match | Series B, match | match | offer, base cut for equity | basis exclusion (base traded down for equity) → Dropped |
| P-05 | Coverage Product | 2026-11, in | Burlington, match | Series B, match | match | acquisition package, miss | basis exclusion (retention grant in the total, no base) → Dropped |
| P-06 | Coverage Product | 2027-01, in | Burlington, match | Series B, match | match | posted, base | nothing → Fully comparable |
| P-07 | Coverage Product | 2026-12, in | Burlington, match | Series B, match | match | offer, total converted to base | nothing → Fully comparable at $189,500 base |
| P-08 | Regulatory Reporting | 2027-01, in | Rotterdam, match | Series B, match | match | offer, base in EUR | nothing → Fully comparable |
| P-09 | Regulatory Reporting | 2026-12, in | Bristol, another country, miss | Series B, match | match | posted, base in GBP | 1 miss (another country; GBP, no rate supplied) → Dropped |
| P-10 | Risk Modeling | 2026-11, in | Burlington, match | Series B, match | match | posted, base | nothing → Fully comparable |

**Basis.** One conversion: P-07, $213,500 total cash − $24,000 bonus = $189,500 base (total to base, downward). Three points left the pool on basis alone, each a match on metro, stage and scope. P-03: $780 a day prices a contract without benefits, and annualising it needs a working-days figure the input does not give. P-04: the $109,500 base was accepted in exchange for a double equity grant, so it understates cash pay. P-05: $252,500 includes a retention grant and no base is broken out. Regulatory Reporting is banded in EUR and P-08 is quoted in EUR, so it is compared as it stands; P-09 is in GBP and the input supplies no rate, so it is not converted.

- Risk Modeling, Senior: kept: P-01, P-02, P-10 (3) · partial: none (0) · dropped: P-03, P-04 (2) · retrieved 5. Anchor: Among the kept, two offers, P-01 and P-02; their mean: ($134,500 + $137,500) / 2 = $136,000. Posted P-10 is not averaged in. Gap: $136,000 − $132,500 = +$3,500, about 2.6% of the $132,500 band midpoint, anchor above. Own accepted offers average ($133,500 + $134,000 + $136,000) / 3 = $134,500, about 1.5% above the midpoint; 1.5% is less than 2.5%, so the company hires at its midpoint and that settles the call. → Competitive; kept (3): 2 offers + 1 posted → High; own accepted offers 3, so it holds → High.
- Coverage Product, Director: kept: P-06, P-07 (2) · partial: none (0) · dropped: P-05 (1) · retrieved 3. Anchor: Among the kept, one offer: P-07 on base, $189,500. Posted P-06 is not averaged in. Gap: $189,500 − $202,500 = −$13,000, about 6.4% of the $202,500 band midpoint, anchor below. No accepted own offer, so the margin is 5% × $202,500 = $10,125; $13,000 is outside. → Above-market; kept (2): 1 offer + 1 posted → High; no own accepted offer, so it drops → Medium.
- Regulatory Reporting, Senior (Rotterdam): kept: P-08 (1) · partial: none (0) · dropped: P-09 (1) · retrieved 2. Anchor: Among the kept, one offer: P-08, €93,500. Gap: €93,500 − €99,500 = −€6,000, about 6.0% of the €99,500 band midpoint, anchor below, past 5% × €99,500 = €4,975. Own accepted offers average (€99,000 + €100,500) / 2 = €99,750, about 0.3% above the midpoint; 0.3% is less than 2.5%, so the company hires at its midpoint and that settles the call. → Competitive; kept (1): 1 offer alone → Medium.

## Case three

**What arrived.** Fernhollow Assays, Series A, Albuquerque NM. Retrieved 2027-04-06. Window: 12 months; points dated before April 2026 are out. Source of the rows: the Hirewell Listings feed and nothing else.

| Role family | Level | Band min | Band midpoint | Band max |
|---|---|---|---|---|
| Validation Engineering | Senior | $101,500 | $112,500 | $124,500 |
| Validation Engineering | Staff | $120,500 | $132,500 | $145,500 |
| Study Operations | Manager | $118,500 | $131,500 | $145,500 |
| Lab Instrumentation | Senior Instrument Engineer | $68,500 | $76,000 | $84,500 |

Open roles: Senior Validation Engineer (P1), Study Operations Manager (P1). Own offers, last 12 months: Validation Engineering Senior, one accepted at $120,500 and one declined at $115,000; Lab Instrumentation, two accepted at $77,000 and $79,500; Validation Engineering Staff, none.

| ID | Type | Date | Role title | Geo | Stage | Figures | Notes |
|---|---|---|---|---|---|---|---|
| V-01 | Posted range | 2026-09 | Senior Validation Engineer | Albuquerque NM | Series A | $110,500–$129,500 base |  |
| V-02 | Offer (accepted) | 2027-01 | Validation Engineer III | Albuquerque NM | Series A | $121,500 base | scope note: level III there is Senior here |
| V-03 | Posted range | 2027-02 | Staff Validation Engineer | Albuquerque NM | Series A | $126,500–$151,500 base |  |
| V-04 | Offer (accepted) | 2026-03 | Study Operations Manager | Albuquerque NM | Series A | $139,500 base |  |
| V-05 | Posted range | 2026-12 | Study Operations Manager | Albuquerque NM | Series B | $127,500–$153,500 base |  |
| V-06 | Posted range | 2027-02 | Study Operations Manager | Albuquerque NM | Seed | $105,500–$128,500 base |  |
| V-07 | Posted range | 2027-01 | Senior Lab Instrumentation Instrument Engineer | Albuquerque NM | Series A | $73,500–$86,500 base |  |
| V-08 | Posted range | 2026-12 | Senior Lab Instrumentation Instrument Engineer | Remote-US | Series A | $66,500–$82,500 base | national range, no metro |
| V-09 | Posted range | 2027-02 | Senior Lab Instrumentation Instrument Engineer | Albuquerque NM | Series C | $74,500–$90,500 base |  |
| V-10 | Posted range | 2027-01 | Senior Lab Instrumentation Instrument Engineer | Albuquerque NM | Series A | $80,500–$94,000 with overtime | overtime included; base not split out |

**Here the audit is again one message by itself, and it closes by calling read_reference for `references/check.md`:**

**Frame:** roles tied to Albuquerque NM · company stage Series A · annual base, USD · 12-month window: 2026-04 and later is in.

| ID | Family | Date | Geography | Stage | Scope | Type, basis | Off by → class |
|---|---|---|---|---|---|---|---|
| V-01 | Validation Engineering, Senior | 2026-09, in | Albuquerque, match | Series A, match | match | posted, base | nothing → Fully comparable |
| V-02 | Validation Engineering, Senior | 2027-01, in | Albuquerque, match | Series A, match | level III there is Senior here per its note, match | offer, base | nothing → Fully comparable |
| V-03 | Validation Engineering, Staff | 2027-02, in | Albuquerque, match | Series A, match | match | posted, base | nothing → Fully comparable |
| V-04 | Study Operations | 2026-03, out | Albuquerque, match | Series A, match | match | offer, base | stale (the month before the cut-off) → Dropped |
| V-05 | Study Operations | 2026-12, in | Albuquerque, match | Series B, near | match | posted, base | 1 near (stage, one round later) → Partial |
| V-06 | Study Operations | 2027-02, in | Albuquerque, match | Seed, near | match | posted, base | 1 near (stage, one round earlier) → Partial |
| V-07 | Lab Instrumentation | 2027-01, in | Albuquerque, match | Series A, match | match | posted, base | nothing → Fully comparable |
| V-08 | Lab Instrumentation | 2026-12, in | national, near | Series A, match | match | posted, base | 1 near (national range, no metro) → Partial |
| V-09 | Lab Instrumentation | 2027-02, in | Albuquerque, match | Series C, miss | match | posted, base | 1 miss (stage, two rounds later) → Dropped |
| V-10 | Lab Instrumentation | 2027-01, in | Albuquerque, match | Series A, match | match | posted, total with overtime, no split | basis exclusion (overtime inside, base not split out) → Dropped |

**Basis.** One exclusion: V-10 quotes pay with overtime inside and no base split out, so it cannot be put on base. Every other figure is annual base in USD and nothing needed converting.

- Validation Engineering, Senior: kept: V-01, V-02 (2) · partial: none (0) · dropped: none (0) · retrieved 2. Anchor: Among the kept, one offer: V-02, $121,500. Posted V-01 is not averaged in. Gap: $121,500 − $112,500 = +$9,000, about 8.0% of the $112,500 band midpoint, anchor above. The one accepted own offer, $120,500, is about 7.1% above the midpoint; 7.1% is more than 4% and on the anchor's side, so the margin narrows to 3% × $112,500 = $3,375; $9,000 is outside. → Lagging; kept (2): 1 offer + 1 posted → High; own accepted offers 1 (the declined one is not counted), so it holds → High.
- Validation Engineering, Staff: kept: V-03 (1) · partial: none (0) · dropped: none (0) · retrieved 1. Anchor: none: the one kept point, V-03, is a posted range with nothing beside it. Gap: not computed. → Deferred; kept (1): 1 posted, no offer → Low; no partial point and no own accepted offer beside it, so it drops → Deferred.
- Study Operations, Manager: kept: none (0) · partial: V-05, V-06 (2) · dropped: V-04 (1) · retrieved 3. Anchor: none. Gap: not computed. → Deferred; kept (0) → Deferred.
- Lab Instrumentation, Senior Instrument Engineer: kept: V-07 (1) · partial: V-08 (1) · dropped: V-09, V-10 (2) · retrieved 4. Anchor: Among the kept, no offer. Posted midpoint V-07: ($73,500 + $86,500) / 2 = $80,000. Gap: $80,000 − $76,000 = +$4,000, about 5.3% of the $76,000 band midpoint, anchor above. Own accepted offers average ($77,000 + $79,500) / 2 = $78,250, about 3.0% above the midpoint; 3.0% is more than 2.5% and less than 4%, so the margin stays 5% × $76,000 = $3,800; $4,000 is outside, by $200. → Lagging, borderline; kept (1): 1 posted, no offer → Low; own accepted offers 2 and a partial point stand beside it, so it holds → Low.

## After the audit

The audit ends with the read_reference call for `references/check.md`, in the same message. Nothing of the page is written before that file returns.
