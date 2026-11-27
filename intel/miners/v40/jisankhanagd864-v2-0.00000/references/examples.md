# Audits

Three made-up companies and the audit each request gets: the working that comes before a page, written as plain text in a message of its own. It opens with the frame line, the window written as its first month in, so that every date is held to that month; then every point gets a row and every family a line. The page that follows each audit is in `references/page.md`. A real audit takes every company, ID, date and figure from its own input.

## Case one

**What arrived.** Thornbury Freight, Series C, Nashville TN; remote roles are paid on the Nashville tier. Retrieved 2027-03-10. Window: 12 months; points dated before March 2026 are out. Every row was pulled from the Meridale Careers feed. Note on the table: TN has no posting mandate, so every range below was posted by choice.

| Role family | Level | Band min | Band midpoint | Band max |
|---|---|---|---|---|
| Fleet Scheduling | Senior | $102,000 | $113,000 | $126,000 |
| Onboarding Engineering | Principal | $143,500 | $158,500 | $174,500 |
| Dispatch Operations | Team Lead | $71,500 | $79,000 | $87,500 |

Own offers, last 12 months: Fleet Scheduling, two accepted at $117,500 and $119,500 base; Dispatch Operations, one declined at $81,500 (took a higher offer); Onboarding Engineering, none.

| ID | Type | Date | Role title | Geo | Stage | Figures | Notes |
|---|---|---|---|---|---|---|---|
| K-01 | Offer (accepted) | 2027-01 | Senior Fleet Scheduler | Nashville TN | Series C | $117,000 base |  |
| K-02 | Posted range | 2026-12 | Senior Fleet Scheduler | Nashville TN | Series C | $109,000–$134,000 base | posted voluntarily |
| K-03 | Hearsay | 2027-02 | Senior Fleet Scheduler | Nashville TN | Series C | "around $127,000" | said on a call, nothing written |
| K-04 | Posted range | 2027-01 | Senior Fleet Scheduler | Stamford CT | Series D | $123,000–$151,000 base |  |
| K-05 | Posted range | 2026-11 | Principal Onboarding Engineer | Nashville TN | Series B | $138,500–$160,500 base |  |
| K-06 | Offer (accepted) | 2026-12 | Principal Onboarding Engineer | Louisville KY | Series C | $166,500 base |  |
| K-07 | Posted range | 2026-12 | Principal Systems Designer | Nashville TN | Series C | $172,500–$196,500 base | a pre-sales design role |
| K-08 | Posted range | 2026-03 | Dispatch Team Lead | Nashville TN | Series C | $78,500–$92,500 base | posted voluntarily |
| K-09 | Posted range | 2027-01 | Dispatch Team Lead | Nashville TN | Series C | $80,500–$94,500 base | posted voluntarily |
| K-10 | Posted range | 2026-02 | Dispatch Team Lead | Nashville TN | Series C | $74,500–$88,500 base | posted voluntarily |
| K-11 | Posted range | 2026-12 | Senior Dispatch Coordinator | Nashville TN | Series C | $66,500–$77,500 base | individual contributor, no reports |

**The audit, a message of its own, ending with the read_reference call for `references/check.md`:**

**Frame:** roles tied to Nashville TN pay, remote included · company stage Series C · annual base, USD · 12-month window: 2026-03 and later is in.

| ID | Family | Date | Geography | Stage | Scope | Type, basis | Off by → class |
|---|---|---|---|---|---|---|---|
| K-01 | Fleet Scheduling | 2027-01, in | Nashville, match | Series C, match | match | offer, base | nothing → Fully comparable |
| K-02 | Fleet Scheduling | 2026-12, in | Nashville, match | Series C, match | match | posted, base | nothing → Fully comparable |
| K-03 | Fleet Scheduling | 2027-02, in | Nashville, match | Series C, match | match | hearsay, miss | 1 miss (hearsay, nothing to verify) → Dropped |
| K-04 | Fleet Scheduling | 2027-01, in | Stamford, near | Series D, near | match | posted, base | 2 nears (metro, stage) → Dropped |
| K-05 | Onboarding Engineering | 2026-11, in | Nashville, match | Series B, near | match | posted, base | 1 near (stage, one round earlier) → Partial |
| K-06 | Onboarding Engineering | 2026-12, in | Louisville, near | Series C, match | match | offer, base | 1 near (metro) → Partial |
| K-07 | Onboarding Engineering | 2026-12, in | Nashville, match | Series C, match | pre-sales design, another family, miss | posted, base | 1 miss (another job family) → Dropped |
| K-08 | Dispatch Operations | 2026-03, in (the cut-off month counts) | Nashville, match | Series C, match | match | posted, base | nothing → Fully comparable |
| K-09 | Dispatch Operations | 2027-01, in | Nashville, match | Series C, match | match | posted, base | nothing → Fully comparable |
| K-10 | Dispatch Operations | 2026-02, out | Nashville, match | Series C, match | match | posted, base | stale (a month before the cut-off) → Dropped |
| K-11 | Dispatch Operations | 2026-12, in | Nashville, match | Series C, match | specialist with no reports, miss | posted, base | 1 miss (no reports, against a team lead) → Dropped |

**Basis.** Every kept figure is already annual base in USD, so nothing was converted.

- Fleet Scheduling, Senior: kept: K-01, K-02 (2) · partial: none (0) · dropped: K-03, K-04 (2) · retrieved 4. Anchor: Among the kept, one offer: K-01, $117,000. Posted K-02 is not averaged in. Gap: $117,000 − $113,000 = +$4,000, about 3.5% of the $113,000 band midpoint, anchor above. Own accepted offers average ($117,500 + $119,500) / 2 = $118,500, about 4.9% above the midpoint; 4.9% is more than 4% and on the anchor's side, so the margin narrows to 3% × $113,000 = $3,390; $4,000 is outside. → Lagging; kept (2): 1 offer + 1 posted → High.
- Onboarding Engineering, Principal: kept: none (0) · partial: K-05, K-06 (2) · dropped: K-07 (1) · retrieved 3. Anchor: none. Gap: not computed. → Deferred; kept (0) → Deferred.
- Dispatch Operations, Team Lead: kept: K-08, K-09 (2) · partial: none (0) · dropped: K-10, K-11 (2) · retrieved 4. Anchor: Among the kept, no offer. Posted midpoints: K-08 ($78,500 + $92,500) / 2 = $85,500; K-09 ($80,500 + $94,500) / 2 = $87,500; mean ($85,500 + $87,500) / 2 = $86,500. Gap: $86,500 − $79,000 = +$7,500, about 9.5% of the $79,000 band midpoint, anchor above. No accepted own offer (the one made was declined), so the margin is 5% × $79,000 = $3,950; $7,500 is outside. → Lagging; kept (2): 2 posted, no offer → Medium.

## Case two

**What arrived.** Ashgrove Mutual, Series B, Baltimore MD; every role is tied to Baltimore except Audit Operations, a Lisbon team banded in EUR. Retrieved 2027-02-18. Window: 18 months; points dated before August 2025 are out. All rows came through the Meridale Careers feed.

| Role family | Level | Band min | Band midpoint | Band max |
|---|---|---|---|---|
| Underwriting Analytics | Senior | $119,500 | $132,500 | $146,500 |
| Policy Product | Director | $182,500 | $202,500 | $223,500 |
| Audit Operations (Lisbon) | Senior | €89,500 | €99,500 | €109,500 |

Own offers, last 12 months: Underwriting Analytics, three accepted at $133,500, $134,000 and $136,000 base; Audit Operations, two accepted at €99,000 and €100,500 base; Policy Product, none.

| ID | Type | Date | Role title | Geo | Stage | Figures | Notes |
|---|---|---|---|---|---|---|---|
| M-01 | Offer (accepted) | 2026-12 | Senior Underwriting Analyst | Baltimore MD | Series B | $134,500 base |  |
| M-02 | Offer (accepted) | 2026-11 | Senior Underwriting Analyst | Baltimore MD | Series B | $137,500 base |  |
| M-03 | Contractor rate | 2027-01 | Senior Underwriting Analyst | Baltimore MD | Series B | $780 per day | six-month contract, not an employee |
| M-04 | Offer (accepted) | 2026-12 | Senior Underwriting Analyst | Baltimore MD | Series B | $109,500 base | took a reduced base for a double equity grant |
| M-05 | Acquisition package | 2026-11 | Director, Policy Product | Baltimore MD | Series B | $252,500 total | includes a retention grant; base not broken out |
| M-06 | Posted range | 2027-01 | Director of Policy Product | Baltimore MD | Series B | $176,500–$206,500 base | MD mandate |
| M-07 | Offer (accepted) | 2026-12 | Director, Policy Product | Baltimore MD | Series B | $213,500 total cash | includes a $24,000 annual bonus; the rest is base |
| M-08 | Offer (accepted) | 2027-01 | Senior Audit Operations Analyst | Lisbon PT | Series B | €93,500 base |  |
| M-09 | Posted range | 2026-12 | Senior Audit Operations Analyst | Leeds UK | Series B | £78,500–£92,500 base | figures in GBP |
| M-10 | Posted range | 2026-11 | Senior Underwriting Analyst | Baltimore MD | Series B | $125,500–$149,500 base | MD mandate |

**The audit, a message of its own, ending with the read_reference call for `references/check.md`:**

**Frame:** roles tied to Baltimore MD, Audit Operations to Lisbon · company stage Series B · annual base, USD, Audit Operations in EUR · 18-month window: 2025-08 and later is in.

| ID | Family | Date | Geography | Stage | Scope | Type, basis | Off by → class |
|---|---|---|---|---|---|---|---|
| M-01 | Underwriting Analytics | 2026-12, in | Baltimore, match | Series B, match | match | offer, base | nothing → Fully comparable |
| M-02 | Underwriting Analytics | 2026-11, in | Baltimore, match | Series B, match | match | offer, base | nothing → Fully comparable |
| M-03 | Underwriting Analytics | 2027-01, in | Baltimore, match | Series B, match | match | contractor day rate, miss | basis exclusion (a contract rate is not a salary) → Dropped |
| M-04 | Underwriting Analytics | 2026-12, in | Baltimore, match | Series B, match | match | offer, base cut for equity | basis exclusion (base traded down for equity) → Dropped |
| M-05 | Policy Product | 2026-11, in | Baltimore, match | Series B, match | match | acquisition package, miss | basis exclusion (retention grant in the total, no base) → Dropped |
| M-06 | Policy Product | 2027-01, in | Baltimore, match | Series B, match | match | posted, base | nothing → Fully comparable |
| M-07 | Policy Product | 2026-12, in | Baltimore, match | Series B, match | match | offer, total converted to base | nothing → Fully comparable at $189,500 base |
| M-08 | Audit Operations | 2027-01, in | Lisbon, match | Series B, match | match | offer, base in EUR | nothing → Fully comparable |
| M-09 | Audit Operations | 2026-12, in | Leeds, another country, miss | Series B, match | match | posted, base in GBP | 1 miss (another country; GBP, no rate supplied) → Dropped |
| M-10 | Underwriting Analytics | 2026-11, in | Baltimore, match | Series B, match | match | posted, base | nothing → Fully comparable |

**Basis.** One conversion: M-07, $213,500 total cash − $24,000 bonus = $189,500 base (total to base, downward). Three points left the pool on basis alone, each a match on metro, stage and scope. M-03: $780 a day prices a contract without benefits, and annualising it needs a working-days figure the input does not give. M-04: the $109,500 base was accepted in exchange for a double equity grant, so it understates cash pay. M-05: $252,500 includes a retention grant and no base is broken out. Audit Operations is banded in EUR and M-08 is quoted in EUR, so it is compared as it stands; M-09 is in GBP and the input supplies no rate, so it is not converted.

- Underwriting Analytics, Senior: kept: M-01, M-02, M-10 (3) · partial: none (0) · dropped: M-03, M-04 (2) · retrieved 5. Anchor: Among the kept, two offers, M-01 and M-02; their mean: ($134,500 + $137,500) / 2 = $136,000. Posted M-10 is not averaged in. Gap: $136,000 − $132,500 = +$3,500, about 2.6% of the $132,500 band midpoint, anchor above. Own accepted offers average ($133,500 + $134,000 + $136,000) / 3 = $134,500, about 1.5% above the midpoint; 1.5% is less than 2.5%, so the company hires at its midpoint and that settles the call. → Competitive; kept (3): 2 offers + 1 posted → High.
- Policy Product, Director: kept: M-06, M-07 (2) · partial: none (0) · dropped: M-05 (1) · retrieved 3. Anchor: Among the kept, one offer: M-07 on base, $189,500. Posted M-06 is not averaged in. Gap: $189,500 − $202,500 = −$13,000, about 6.4% of the $202,500 band midpoint, anchor below. No accepted own offer, so the margin is 5% × $202,500 = $10,125; $13,000 is outside. → Above-market; kept (2): 1 offer + 1 posted → High.
- Audit Operations, Senior (Lisbon): kept: M-08 (1) · partial: none (0) · dropped: M-09 (1) · retrieved 2. Anchor: Among the kept, one offer: M-08, €93,500. Gap: €93,500 − €99,500 = −€6,000, about 6.0% of the €99,500 band midpoint, anchor below, past 5% × €99,500 = €4,975. Own accepted offers average (€99,000 + €100,500) / 2 = €99,750, about 0.3% above the midpoint; 0.3% is less than 2.5%, so the company hires at its midpoint and that settles the call. → Competitive; kept (1): 1 offer alone → Medium.

## Case three

**What arrived.** Wexcombe Labs, Series A, Boise ID. Retrieved 2027-04-06. Window: 12 months; points dated before April 2026 are out. Source of the rows: the Meridale Careers feed and nothing else.

| Role family | Level | Band min | Band midpoint | Band max |
|---|---|---|---|---|
| Assay Development | Senior | $101,500 | $112,500 | $124,500 |
| Assay Development | Staff | $120,500 | $132,500 | $145,500 |
| Trial Coordination | Manager | $118,500 | $131,500 | $145,500 |
| Instrument Support | Senior Specialist | $68,500 | $76,000 | $84,500 |

Open roles: Senior Assay Developer (P1), Trial Coordination Manager (P1). Own offers, last 12 months: Assay Development Senior, one accepted at $120,500 and one declined at $115,000; Instrument Support, two accepted at $77,000 and $79,500; Assay Development Staff, none.

| ID | Type | Date | Role title | Geo | Stage | Figures | Notes |
|---|---|---|---|---|---|---|---|
| R-01 | Posted range | 2026-09 | Senior Assay Developer | Boise ID | Series A | $110,500–$129,500 base |  |
| R-02 | Offer (accepted) | 2027-01 | Assay Developer III | Boise ID | Series A | $121,500 base | scope note: level III there is Senior here |
| R-03 | Posted range | 2027-02 | Staff Assay Developer | Boise ID | Series A | $126,500–$151,500 base |  |
| R-04 | Offer (accepted) | 2026-03 | Trial Coordination Manager | Boise ID | Series A | $139,500 base |  |
| R-05 | Posted range | 2026-12 | Trial Coordination Manager | Boise ID | Series B | $127,500–$153,500 base |  |
| R-06 | Posted range | 2027-02 | Trial Coordination Manager | Boise ID | Seed | $105,500–$128,500 base |  |
| R-07 | Posted range | 2027-01 | Senior Instrument Support Specialist | Boise ID | Series A | $73,500–$86,500 base |  |
| R-08 | Posted range | 2026-12 | Senior Instrument Support Specialist | Remote-US | Series A | $66,500–$82,500 base | national range, no metro |
| R-09 | Posted range | 2027-02 | Senior Instrument Support Specialist | Boise ID | Series C | $74,500–$90,500 base |  |
| R-10 | Posted range | 2027-01 | Senior Instrument Support Specialist | Boise ID | Series A | $80,500–$94,000 with overtime | overtime included; base not split out |

**The audit, a message of its own, ending with the read_reference call for `references/check.md`:**

**Frame:** roles tied to Boise ID · company stage Series A · annual base, USD · 12-month window: 2026-04 and later is in.

| ID | Family | Date | Geography | Stage | Scope | Type, basis | Off by → class |
|---|---|---|---|---|---|---|---|
| R-01 | Assay Development, Senior | 2026-09, in | Boise, match | Series A, match | match | posted, base | nothing → Fully comparable |
| R-02 | Assay Development, Senior | 2027-01, in | Boise, match | Series A, match | level III there is Senior here per its note, match | offer, base | nothing → Fully comparable |
| R-03 | Assay Development, Staff | 2027-02, in | Boise, match | Series A, match | match | posted, base | nothing → Fully comparable |
| R-04 | Trial Coordination | 2026-03, out | Boise, match | Series A, match | match | offer, base | stale (the month before the cut-off) → Dropped |
| R-05 | Trial Coordination | 2026-12, in | Boise, match | Series B, near | match | posted, base | 1 near (stage, one round later) → Partial |
| R-06 | Trial Coordination | 2027-02, in | Boise, match | Seed, near | match | posted, base | 1 near (stage, one round earlier) → Partial |
| R-07 | Instrument Support | 2027-01, in | Boise, match | Series A, match | match | posted, base | nothing → Fully comparable |
| R-08 | Instrument Support | 2026-12, in | national, near | Series A, match | match | posted, base | 1 near (national range, no metro) → Partial |
| R-09 | Instrument Support | 2027-02, in | Boise, match | Series C, miss | match | posted, base | 1 miss (stage, two rounds later) → Dropped |
| R-10 | Instrument Support | 2027-01, in | Boise, match | Series A, match | match | posted, total with overtime, no split | basis exclusion (overtime inside, base not split out) → Dropped |

**Basis.** One exclusion: R-10 quotes pay with overtime inside and no base split out, so it cannot be put on base. Every other figure is annual base in USD and nothing needed converting.

- Assay Development, Senior: kept: R-01, R-02 (2) · partial: none (0) · dropped: none (0) · retrieved 2. Anchor: Among the kept, one offer: R-02, $121,500. Posted R-01 is not averaged in. Gap: $121,500 − $112,500 = +$9,000, about 8.0% of the $112,500 band midpoint, anchor above. The one accepted own offer, $120,500, is about 7.1% above the midpoint; 7.1% is more than 4% and on the anchor's side, so the margin narrows to 3% × $112,500 = $3,375; $9,000 is outside. → Lagging; kept (2): 1 offer + 1 posted → High.
- Assay Development, Staff: kept: R-03 (1) · partial: none (0) · dropped: none (0) · retrieved 1. Anchor: Among the kept, no offer. Posted midpoint R-03: ($126,500 + $151,500) / 2 = $139,000. Gap: $139,000 − $132,500 = +$6,500, about 4.9% of the $132,500 band midpoint, anchor above. No accepted own offer, so the margin is 5% × $132,500 = $6,625; $6,500 is inside, by $125. → Competitive, borderline; kept (1): 1 posted, no offer → Low.
- Trial Coordination, Manager: kept: none (0) · partial: R-05, R-06 (2) · dropped: R-04 (1) · retrieved 3. Anchor: none. Gap: not computed. → Deferred; kept (0) → Deferred.
- Instrument Support, Senior Specialist: kept: R-07 (1) · partial: R-08 (1) · dropped: R-09, R-10 (2) · retrieved 4. Anchor: Among the kept, no offer. Posted midpoint R-07: ($73,500 + $86,500) / 2 = $80,000. Gap: $80,000 − $76,000 = +$4,000, about 5.3% of the $76,000 band midpoint, anchor above. Own accepted offers average ($77,000 + $79,500) / 2 = $78,250, about 3.0% above the midpoint; 3.0% is more than 2.5% and less than 4%, so the margin stays 5% × $76,000 = $3,800; $4,000 is outside, by $200. → Lagging, borderline; kept (1): 1 posted, no offer → Low.

## After the audit

The audit ends with the read_reference call for `references/check.md`, in the same message. Nothing of the page is written before that file returns.
