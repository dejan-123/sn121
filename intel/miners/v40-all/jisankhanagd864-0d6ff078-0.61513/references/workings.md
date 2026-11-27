# Audits

Three made-up companies and the audit each request gets: the working that comes before a page, written as plain text in a message of its own. It opens with the frame line, the window written as its first month in, so that every date is held to that month; then every point gets a row and every family a line, which ends with its page cells: the verdict, the gap cell and the confidence cell exactly as the page will carry them. Two closing lines follow, for the page's first two caveats: Standing, which sorts the families by what their verdict rests on, and Posting basis, which quotes what the input says about how ranges came to be posted: a line above the table if there is one, then each kept range's own Notes cell, copied word for word or marked as having no note. The page that follows each audit is in `references/pages.md`. A real audit takes every company, ID, date and figure from its own input.

## Case one

**What arrived.** Stonebridge Haulage, Series C, Richmond VA; remote roles are paid on the Richmond tier. Retrieved 2027-03-10. Window: 12 months; points dated before March 2026 are out. Every row was pulled from the Jobtrace Index feed. Note on the table: no VA posting mandate; ranges posted by choice.

| Role family | Level | Band min | Band midpoint | Band max |
|---|---|---|---|---|
| Fleet Scheduling | Senior | $102,000 | $113,000 | $126,000 |
| Systems Integration | Principal | $143,500 | $158,500 | $174,500 |
| Vendor Relations | Team Lead | $71,500 | $79,000 | $87,500 |
| Customs Brokerage | Senior | $88,000 | $97,000 | $107,000 |

Open roles: Senior Fleet Scheduler (P1), Principal Systems Integrator (P2). Own offers, last 12 months: Fleet Scheduling, two accepted at $117,500 and $119,500 base; Vendor Relations, one declined at $81,500 (a higher offer came in, by the candidate's account); Systems Integration, none; Customs Brokerage, none.

| ID | Type | Date | Role title | Geo | Stage | Figures | Notes |
|---|---|---|---|---|---|---|---|
| K-01 | Offer (accepted) | 2027-01 | Senior Fleet Scheduler | Richmond VA | Series C | $117,000 base |  |
| K-02 | Posted range | 2026-12 | Senior Fleet Scheduler | Richmond VA | Series C | $109,000–$134,000 base | posted voluntarily |
| K-03 | Hearsay | 2027-02 | Senior Fleet Scheduler | Richmond VA | Series C | "around $127,000" | said on a call, nothing written |
| K-04 | Posted range | 2027-01 | Senior Fleet Scheduler | Newark NJ | Series D | $123,000–$151,000 base |  |
| K-05 | Posted range | 2026-11 | Principal Systems Integrator | Richmond VA | Series B | $138,500–$160,500 base |  |
| K-06 | Offer (accepted) | 2026-12 | Principal Systems Integrator | Raleigh NC | Series C | $166,500 base |  |
| K-07 | Posted range | 2026-12 | Principal Presales Architect | Richmond VA | Series C | $172,500–$196,500 base | a pre-sales design role |
| K-08 | Posted range | 2026-03 | Vendor Relations Lead | Richmond VA | Series C | $78,500–$92,500 base | posted voluntarily |
| K-09 | Posted range | 2027-01 | Vendor Relations Lead | Richmond VA | Series C | $80,500–$94,500 base | posted voluntarily |
| K-10 | Posted range | 2026-02 | Vendor Relations Lead | Richmond VA | Series C | $74,500–$88,500 base | posted voluntarily |
| K-11 | Posted range | 2026-12 | Senior Vendor Coordinator | Richmond VA | Series C | $66,500–$77,500 base | individual contributor, no reports |
| K-12 | Posted range | 2026-11 | Senior Customs Broker | Richmond VA | Series C | $84,000–$96,000 base | posted voluntarily |
| K-13 | Offer (accepted) | 2026-10 | Senior Customs Broker | Richmond VA | Series B | $93,000 base |  |

**The audit, a message of its own, ending with the read_reference call for `references/check.md`:**

**Frame:** roles tied to Richmond VA pay, remote included · company stage Series C · annual base, USD · 12-month window: 2026-03 and later is in.

| ID | Family | Date | Geography | Stage | Scope | Type, basis | Off by → class |
|---|---|---|---|---|---|---|---|
| K-01 | Fleet Scheduling | 2027-01, in | Richmond, match | Series C, match | match | offer, base | nothing → Fully comparable |
| K-02 | Fleet Scheduling | 2026-12, in | Richmond, match | Series C, match | match | posted, base | nothing → Fully comparable |
| K-03 | Fleet Scheduling | 2027-02, in | Richmond, match | Series C, match | match | hearsay, miss | 1 miss (hearsay, nothing to verify) → Dropped |
| K-04 | Fleet Scheduling | 2027-01, in | Newark, another metro, miss | Series D, near | match | posted, base | 1 miss (another metro; stage one round later too) → Dropped |
| K-05 | Systems Integration | 2026-11, in | Richmond, match | Series B, near | match | posted, base | 1 near (stage, one round earlier) → Partial |
| K-06 | Systems Integration | 2026-12, in | Raleigh, another metro, miss | Series C, match | match | offer, base | 1 miss (another metro) → Dropped |
| K-07 | Systems Integration | 2026-12, in | Richmond, match | Series C, match | pre-sales design, another family, miss | posted, base | 1 miss (another job family) → Dropped |
| K-08 | Vendor Relations | 2026-03, in (the cut-off month counts) | Richmond, match | Series C, match | match | posted, base | nothing → Fully comparable |
| K-09 | Vendor Relations | 2027-01, in | Richmond, match | Series C, match | match | posted, base | nothing → Fully comparable |
| K-10 | Vendor Relations | 2026-02, out | Richmond, match | Series C, match | match | posted, base | stale (a month before the cut-off) → Dropped |
| K-11 | Vendor Relations | 2026-12, in | Richmond, match | Series C, match | specialist with no reports, miss | posted, base | 1 miss (no reports, against a team lead) → Dropped |
| K-12 | Customs Brokerage | 2026-11, in | Richmond, match | Series C, match | match | posted, base | nothing → Fully comparable |
| K-13 | Customs Brokerage | 2026-10, in | Richmond, match | Series B, near | match | offer, base | 1 near (an offer, but stage one round earlier, so it anchors nothing) → Partial |

**Basis.** Every kept figure is already annual base in USD, so nothing was converted.

- Fleet Scheduling, Senior: retrieved 4 · kept: K-01, K-02 (2) · partial: none (0) · dropped: K-03 (hearsay, nothing to verify); K-04 (another metro; stage one round later too) (2). Anchor: Among the kept, one offer: K-01, $117,000. Posted K-02 is not averaged in. Gap: $117,000 − $113,000 = +$4,000, about 3.5% of the $113,000 band midpoint, anchor above. Own accepted offers average ($117,500 + $119,500) / 2 = $118,500, about 4.9% above the midpoint; 4.9% is more than 4% and on the anchor's side, so the margin narrows to 3% × $113,000 = $3,390; $4,000 is outside. → Lagging; kept (2): 1 offer + 1 posted → Medium (kept offers 1; High takes 2). Page cells: **Lagging** | Offer K-01, $117,000, is $4,000 (3.5%) over the midpoint; posted K-02 is not averaged in. Own accepted offers average $118,500, 4.9% over, so the margin is 3%, $3,390: outside. | **Medium**: one accepted offer; the posted range beside it is not a second offer, and High takes two
- Systems Integration, Principal: retrieved 3 · kept: none (0) · partial: K-05 (stage, one round earlier) (1) · dropped: K-06 (another metro); K-07 (another job family) (2). Anchor: none. Gap: not computed. → Deferred; kept (0) → Deferred. Page cells: **Deferred** | No anchor: no point is fully comparable. | **Deferred**: nothing kept; see the deferred entry
- Vendor Relations, Team Lead: retrieved 4 · kept: K-08, K-09 (2) · partial: none (0) · dropped: K-10 (stale, a month before the cut-off); K-11 (no reports, against a team lead) (2). Anchor: Among the kept, no offer. Posted midpoints: K-08 ($78,500 + $92,500) / 2 = $85,500; K-09 ($80,500 + $94,500) / 2 = $87,500; mean ($85,500 + $87,500) / 2 = $86,500. Gap: $86,500 − $79,000 = +$7,500, about 9.5% of the $79,000 band midpoint, anchor above. The snapshot lists one own offer here and it was declined, none accepted, so the margin is 5% × $79,000 = $3,950; $7,500 is outside. → Lagging; kept (2): 2 posted, no offer → Medium. Page cells: **Lagging** | Posted midpoints K-08, $85,500, and K-09, $87,500, average $86,500, which is $7,500 (9.5%) over the midpoint. No own accepted offer (the one on record was declined), so the margin is 5%, $3,950: outside. | **Medium**: two posted ranges and no offer, which is as far as posted ranges go
- Customs Brokerage, Senior: retrieved 2 · kept: K-12 (1) · partial: K-13 (an offer, but stage one round earlier, so it anchors nothing) (1) · dropped: none (0). Anchor: Among the kept, no offer. Posted midpoint K-12: ($84,000 + $96,000) / 2 = $90,000. Gap: $90,000 − $97,000 = −$7,000, about 7.2% of the $97,000 band midpoint, anchor below. No accepted own offer, so the margin is 5% × $97,000 = $4,850; $7,000 is outside. → Above-market reading; that call needs a kept offer and kept offers are 0, so it drops → Deferred; kept (1): 1 posted, no offer → Deferred. Page cells: **Deferred** | Posted midpoint K-12, $90,000, is $7,000 (7.2%) under the midpoint, past the 5% margin of $4,850: an Above-market reading, and that call needs a kept offer. Kept offers 0, so no verdict. | **Deferred**: an Above-market reading on posted ranges alone (kept offers 0), so it drops; see the deferred entry

**Standing.** On accepted offers: Fleet Scheduling. On posted ranges alone: Vendor Relations. Deferred: Systems Integration; Customs Brokerage.

**Posting basis.** Line above the table: "no VA posting mandate; ranges posted by choice". Kept ranges, each with its Notes cell: K-02 "posted voluntarily"; K-08 "posted voluntarily"; K-09 "posted voluntarily"; K-12 "posted voluntarily". So: all four by choice.

## Case two

**What arrived.** Wexcombe Mutual, Series B, Hartford CT; every role is tied to Hartford except Statutory Reporting, a Ghent team banded in EUR. Retrieved 2027-02-18. Window: 18 months; points dated before August 2025 are out. All rows came through the Jobtrace Index feed.

| Role family | Level | Band min | Band midpoint | Band max |
|---|---|---|---|---|
| Loss Forecasting | Senior | $119,500 | $132,500 | $146,500 |
| Policy Product | Director | $182,500 | $202,500 | $223,500 |
| Statutory Reporting (Ghent) | Senior | €89,500 | €99,500 | €109,500 |

Open roles: Director, Policy Product (P2). Own offers, last 12 months: Loss Forecasting, three accepted at $133,500, $134,000 and $136,000 base; Statutory Reporting, two accepted at €99,000 and €100,500 base; Policy Product, none.

| ID | Type | Date | Role title | Geo | Stage | Figures | Notes |
|---|---|---|---|---|---|---|---|
| R-01 | Offer (accepted) | 2026-12 | Senior Loss Forecaster | Hartford CT | Series B | $134,500 base |  |
| R-02 | Offer (accepted) | 2026-11 | Senior Loss Forecaster | Hartford CT | Series B | $137,500 base |  |
| R-03 | Contractor rate | 2027-01 | Senior Loss Forecaster | Hartford CT | Series B | $780 per day | six-month contract, not an employee |
| R-04 | Offer (accepted) | 2026-12 | Senior Loss Forecaster | Hartford CT | Series B | $109,500 base | took a reduced base for a double equity grant |
| R-05 | Acquisition package | 2026-11 | Director, Policy Product | Hartford CT | Series B | $252,500 total | includes a retention grant; base not broken out |
| R-06 | Posted range | 2027-01 | Director of Policy Product | Hartford CT | Series B | $176,500–$206,500 base | CT mandate |
| R-07 | Offer (accepted) | 2026-12 | Director, Policy Product | Hartford CT | Series B | $213,500 total cash | includes a $24,000 annual bonus; the rest is base |
| R-08 | Offer (accepted) | 2027-01 | Senior Statutory Reporting Analyst | Ghent BE | Series B | €93,500 base |  |
| R-09 | Posted range | 2026-12 | Senior Statutory Reporting Analyst | Leeds UK | Series B | £78,500–£92,500 base | figures in GBP |
| R-10 | Posted range | 2026-11 | Senior Loss Forecaster | Hartford CT | Series B | $125,500–$149,500 base | CT mandate |

**Audit for this request, sent alone; its last line calls read_reference on `references/check.md`:**

**Frame:** roles tied to Hartford CT, Statutory Reporting to Ghent · company stage Series B · annual base, USD, Statutory Reporting in EUR · 18-month window: 2025-08 and later is in.

| ID | Family | Date | Geography | Stage | Scope | Type, basis | Off by → class |
|---|---|---|---|---|---|---|---|
| R-01 | Loss Forecasting | 2026-12, in | Hartford, match | Series B, match | match | offer, base | nothing → Fully comparable |
| R-02 | Loss Forecasting | 2026-11, in | Hartford, match | Series B, match | match | offer, base | nothing → Fully comparable |
| R-03 | Loss Forecasting | 2027-01, in | Hartford, match | Series B, match | match | contractor day rate, miss | basis exclusion (a contract rate is not a salary) → Dropped |
| R-04 | Loss Forecasting | 2026-12, in | Hartford, match | Series B, match | match | offer, base cut for equity | basis exclusion (base traded down for equity) → Dropped |
| R-05 | Policy Product | 2026-11, in | Hartford, match | Series B, match | match | acquisition package, miss | basis exclusion (retention grant in the total, no base) → Dropped |
| R-06 | Policy Product | 2027-01, in | Hartford, match | Series B, match | match | posted, base | nothing → Fully comparable |
| R-07 | Policy Product | 2026-12, in | Hartford, match | Series B, match | match | offer, total converted to base | nothing → Fully comparable at $189,500 base |
| R-08 | Statutory Reporting | 2027-01, in | Ghent, match | Series B, match | match | offer, base in EUR | nothing → Fully comparable |
| R-09 | Statutory Reporting | 2026-12, in | Leeds, another country, miss | Series B, match | match | posted, base in GBP | 1 miss (another country; GBP, no rate supplied) → Dropped |
| R-10 | Loss Forecasting | 2026-11, in | Hartford, match | Series B, match | match | posted, base | nothing → Fully comparable |

**Basis.** One conversion: R-07, $213,500 total cash − $24,000 bonus = $189,500 base (total to base, downward). Three points left the pool on basis alone, each a match on metro, stage and scope. R-03: $780 a day prices a contract without benefits, and annualising it needs a working-days figure the input does not give. R-04: the $109,500 base was accepted in exchange for a double equity grant, so it understates cash pay. R-05: $252,500 includes a retention grant and no base is broken out. Statutory Reporting is banded in EUR and R-08 is quoted in EUR, so it is compared as it stands; R-09 is in GBP and the input supplies no rate, so it is not converted.

- Loss Forecasting, Senior: retrieved 5 · kept: R-01, R-02, R-10 (3) · partial: none (0) · dropped: R-03 (a contract rate is not a salary); R-04 (base traded down for equity) (2). Anchor: Among the kept, two offers, R-01 and R-02; their mean: ($134,500 + $137,500) / 2 = $136,000. Posted R-10 is not averaged in. Gap: $136,000 − $132,500 = +$3,500, about 2.6% of the $132,500 band midpoint, anchor above. Own accepted offers average ($133,500 + $134,000 + $136,000) / 3 = $134,500, about 1.5% above the midpoint; 1.5% is less than 2.5%, so the company hires at its midpoint and that settles the call. → Competitive; kept (3): 2 offers + 1 posted → High (kept offers 2). Page cells: **Competitive** | Offers R-01 and R-02 average $136,000, which is $3,500 (2.6%) over the midpoint; posted R-10 is not averaged in. Own accepted offers average $134,500, 1.5% over: within 2.5%, so the company hires at its midpoint and that settles the call. | **High**: two accepted offers, with a posted range beside them
- Policy Product, Director: retrieved 3 · kept: R-06, R-07 (2) · partial: none (0) · dropped: R-05 (retention grant in the total, no base) (1). Anchor: Among the kept, one offer: R-07 on base, $189,500. Posted R-06 is not averaged in. Gap: $189,500 − $202,500 = −$13,000, about 6.4% of the $202,500 band midpoint, anchor below. No accepted own offer, so the margin is 5% × $202,500 = $10,125; $13,000 is outside. → Above-market; kept (2): 1 offer + 1 posted → Medium (kept offers 1; High takes 2). Page cells: **Above-market** | Offer R-07, $189,500 on base, is $13,000 (6.4%) under the midpoint; posted R-06 is not averaged in. No own accepted offer, so the margin is 5%, $10,125: outside. | **Medium**: one accepted offer, converted to base; the posted range beside it is not a second offer, and High takes two
- Statutory Reporting, Senior (Ghent): retrieved 2 · kept: R-08 (1) · partial: none (0) · dropped: R-09 (another country; GBP, no rate supplied) (1). Anchor: Among the kept, one offer: R-08, €93,500. Gap: €93,500 − €99,500 = −€6,000, about 6.0% of the €99,500 band midpoint, anchor below, past 5% × €99,500 = €4,975. Own accepted offers average (€99,000 + €100,500) / 2 = €99,750, about 0.3% above the midpoint; 0.3% is less than 2.5%, so the company hires at its midpoint and that settles the call. → Competitive; kept (1): 1 offer alone → Medium. Page cells: **Competitive** | Offer R-08, €93,500, is €6,000 (6.0%) under the midpoint, past the 5% margin of €4,975. Own accepted offers average €99,750, 0.3% over: within 2.5%, so the company hires at its midpoint and the hires decide. | **Medium**: one offer alone; own offers never raise a tier

**Standing.** On accepted offers: Loss Forecasting; Policy Product; Statutory Reporting. On posted ranges alone: none. Deferred: none.

**Posting basis.** Line above the table: none. Kept ranges, each with its Notes cell: R-06 "CT mandate"; R-10 "CT mandate". So: both under the mandate.

## Case three

**What arrived.** Ashgrove Biolabs, Series A, Boise ID. Retrieved 2027-04-06. Window: 12 months; points dated before April 2026 are out. Source of the rows: the Jobtrace Index feed and nothing else.

| Role family | Level | Band min | Band midpoint | Band max |
|---|---|---|---|---|
| Process Engineering | Senior | $101,500 | $112,500 | $124,500 |
| Process Engineering | Staff | $120,500 | $132,500 | $145,500 |
| Trial Logistics | Manager | $118,500 | $131,500 | $145,500 |
| Sample Automation | Senior Automation Engineer | $68,500 | $76,000 | $84,500 |

Open roles: Senior Process Engineer (P1), Trial Logistics Manager (P1). Own offers, last 12 months: Process Engineering Senior, one accepted at $120,500 and one declined at $115,000 (the candidate mentioned a better package elsewhere); Sample Automation, two accepted at $77,000 and $79,500; Process Engineering Staff, none.

| ID | Type | Date | Role title | Geo | Stage | Figures | Notes |
|---|---|---|---|---|---|---|---|
| T-01 | Posted range | 2026-09 | Senior Process Engineer | Boise ID | Series A | $110,500–$129,500 base | posted voluntarily |
| T-02 | Offer (accepted) | 2027-01 | Process Engineer III | Boise ID | Series A | $121,500 base | scope note: level III there is Senior here |
| T-03 | Posted range | 2027-02 | Staff Process Engineer | Boise ID | Series A | $126,500–$151,500 base |  |
| T-04 | Offer (accepted) | 2026-03 | Trial Logistics Manager | Boise ID | Series A | $139,500 base |  |
| T-05 | Posted range | 2026-12 | Trial Logistics Manager | Boise ID | Series B | $127,500–$153,500 base |  |
| T-06 | Posted range | 2027-02 | Trial Logistics Manager | Boise ID | Seed | $105,500–$128,500 base |  |
| T-07 | Posted range | 2027-01 | Senior Sample Automation Engineer | Boise ID | Series A | $73,500–$86,500 base | posted voluntarily |
| T-08 | Posted range | 2026-12 | Senior Sample Automation Engineer | Remote-US | Series A | $66,500–$82,500 base | national range, no metro |
| T-09 | Posted range | 2027-02 | Senior Sample Automation Engineer | Boise ID | Series C | $74,500–$90,500 base |  |
| T-10 | Posted range | 2027-01 | Senior Sample Automation Engineer | Boise ID | Series A | $80,500–$94,000 with overtime | overtime included; base not split out |

**Here the audit is again one message by itself, and it closes by calling read_reference for `references/check.md`:**

**Frame:** roles tied to Boise ID · company stage Series A · annual base, USD · 12-month window: 2026-04 and later is in.

| ID | Family | Date | Geography | Stage | Scope | Type, basis | Off by → class |
|---|---|---|---|---|---|---|---|
| T-01 | Process Engineering, Senior | 2026-09, in | Boise, match | Series A, match | match | posted, base | nothing → Fully comparable |
| T-02 | Process Engineering, Senior | 2027-01, in | Boise, match | Series A, match | level III there is Senior here per its note, match | offer, base | nothing → Fully comparable |
| T-03 | Process Engineering, Staff | 2027-02, in | Boise, match | Series A, match | match | posted, base | nothing → Fully comparable |
| T-04 | Trial Logistics | 2026-03, out | Boise, match | Series A, match | match | offer, base | stale (the month before the cut-off) → Dropped |
| T-05 | Trial Logistics | 2026-12, in | Boise, match | Series B, near | match | posted, base | 1 near (stage, one round later) → Partial |
| T-06 | Trial Logistics | 2027-02, in | Boise, match | Seed, near | match | posted, base | 1 near (stage, one round earlier) → Partial |
| T-07 | Sample Automation | 2027-01, in | Boise, match | Series A, match | match | posted, base | nothing → Fully comparable |
| T-08 | Sample Automation | 2026-12, in | national, near | Series A, match | match | posted, base | 1 near (national range, no metro) → Partial |
| T-09 | Sample Automation | 2027-02, in | Boise, match | Series C, miss | match | posted, base | 1 miss (stage, two rounds later) → Dropped |
| T-10 | Sample Automation | 2027-01, in | Boise, match | Series A, match | match | posted, total with overtime, no split | basis exclusion (overtime inside, base not split out) → Dropped |

**Basis.** One exclusion: T-10 quotes pay with overtime inside and no base split out, so it cannot be put on base. Every other figure is annual base in USD and nothing needed converting.

- Process Engineering, Senior: retrieved 2 · kept: T-01, T-02 (2) · partial: none (0) · dropped: none (0). Anchor: Among the kept, one offer: T-02, $121,500. Posted T-01 is not averaged in. Gap: $121,500 − $112,500 = +$9,000, about 8.0% of the $112,500 band midpoint, anchor above. The one accepted own offer, $120,500, is about 7.1% above the midpoint; 7.1% is more than 4% and on the anchor's side, so the margin narrows to 3% × $112,500 = $3,375; $9,000 is outside. → Lagging; kept (2): 1 offer + 1 posted → Medium (kept offers 1; High takes 2). Page cells: **Lagging** | Offer T-02, $121,500, is $9,000 (8.0%) over the midpoint; posted T-01 is not averaged in. The one own accepted offer, $120,500, is 7.1% over, so the margin is 3%, $3,375: outside. | **Medium**: one accepted offer; the posted range beside it is not a second offer, and High takes two; T-02 is counted on its scope note and not its title
- Process Engineering, Staff: retrieved 1 · kept: T-03 (1) · partial: none (0) · dropped: none (0). Anchor: none: the one kept point, T-03, is a posted range with nothing beside it. Gap: not computed. → Deferred; kept (1): 1 posted, no offer → Low; beside it: partial points 0 + own accepted offers 0 = 0, and with 0 beside it, it drops → Deferred. Page cells: **Deferred** | No anchor: the one kept point, T-03, is a posted range with nothing beside it. | **Deferred**: one posted range would be Low, but 0 points stand beside it (partial points 0 + own accepted offers 0); see the deferred entry
- Trial Logistics, Manager: retrieved 3 · kept: none (0) · partial: T-05 (stage, one round later); T-06 (stage, one round earlier) (2) · dropped: T-04 (stale, the month before the cut-off) (1). Anchor: none. Gap: not computed. → Deferred; kept (0) → Deferred. Page cells: **Deferred** | No anchor: no point is fully comparable. | **Deferred**: nothing kept; see the deferred entry
- Sample Automation, Senior Automation Engineer: retrieved 4 · kept: T-07 (1) · partial: T-08 (national range, no metro) (1) · dropped: T-09 (stage, two rounds later); T-10 (overtime inside, base not split out) (2). Anchor: Among the kept, no offer. Posted midpoint T-07: ($73,500 + $86,500) / 2 = $80,000. Gap: $80,000 − $76,000 = +$4,000, about 5.3% of the $76,000 band midpoint, anchor above. Own accepted offers average ($77,000 + $79,500) / 2 = $78,250, about 3.0% above the midpoint; 3.0% is more than 2.5% and less than 4%, so the margin stays 5% × $76,000 = $3,800; $4,000 is outside, by $200. → Lagging, borderline; kept (1): 1 posted, no offer → Low; beside it: partial points 1 + own accepted offers 2 = 3, and with 3 beside it, it holds → Low. Page cells: **Lagging**, borderline | Posted midpoint T-07, $80,000, is $4,000 (5.3%) over the midpoint. Own accepted offers average $78,250, 3.0% over: between 2.5% and 4%, so the margin stays 5%, $3,800: outside by $200. | **Low**: one posted range, held by the 3 points beside it (partial points 1 + own accepted offers 2); own offers never raise a tier

**Standing.** On accepted offers: Process Engineering, Senior. On posted ranges alone: Sample Automation. Deferred: Process Engineering, Staff; Trial Logistics.

**Posting basis.** Line above the table: none in this pull. Kept ranges, each with its Notes cell: T-01 "posted voluntarily"; T-03 no note; T-07 "posted voluntarily". So: T-01 and T-07 by choice; T-03 not said.

## After the audit

The audit ends with the read_reference call for `references/check.md`, in the same message. Nothing of the page is written before that file returns.
