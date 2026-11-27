# The benchmark document (invented companies: copy the layout, never the figures)

The notes are written; the document is built from them alone, with every figure taken from the input or computed from it on the page. Its first line, exactly in this form:

`# Compensation benchmark: <company name>` (or `# Compensation benchmark: <company name>, scope note`)

For a benchmark, the sections follow in this order, about 450 to 750 words in all:

1. An opening paragraph in plain sentences: the basis and currency, the 3% line, the window's first month in and what fell before it, the retrieval date, the comparator profile, and the company's own recent offers as context.
2. `## Conversions`: one line each, with its direction, or "None needed."
3. `## Benchmark table`: a row for each role family, in the snapshot's order. Columns: Role family (level, priority) | Band midpoint | Evidence funnel | Anchor and gap | Verdict | Confidence and deciding reason. The funnel counts retrieved, comparable, partial and dropped, every ID written out on its own (E-01, E-02, E-03, never "E-01 to E-03"), every drop and every partial with its reason, every count written even at 0; comparable, partial and dropped always add up to the retrieved count, and a family lists only the rows its titles name. Under the table, one line: `Pool: n retrieved; n comparable, n partial, n dropped.`, each number re-added from the rows of the table above as written, so the line always equals the column sums.
4. `## Verdict notes`: one sentence per family that has a call, two at most, opening on its name in bold: what anchors it and of which kind (an accepted offer is revealed preference, a posted range aspirational), what supports or questions it, and any pressure the company's own offers show.
5. `## Deferred verdicts`: each deferred family, the IDs that leave it without a call, and the evidence that would end the deferral (how many points, of what type, place, stage and level, dated from which month). With none deferred, one sentence opening "None:" naming the call that rests on the fewest points and what would firm it.
6. `## Signal caveats`: up to three skews across the whole pool, each with the IDs or counts behind it, stated once here and never per row.
7. **What this means.** Two or three plain sentences: which priority open roles are at risk and why, which bands can hold, and what waits for evidence.

## Example 1: Alderbrook Grid Software, built from the notes you have seen

# Compensation benchmark: Alderbrook Grid Software

Annual base pay in US dollars, read against Alderbrook's bands at midpoint, with 3% either side counted as competitive. The window opens in May 2030, so E-19 from April 2030 falls out; the pool was retrieved on 22 May 2031. Comparators are Salt Lake City companies at Series B, with remote roles counted when they are paid on the Salt Lake City tier. Alderbrook's own recent offers are context, not evidence: two Senior Grid Modelling hires at $162,900 and $166,300, a Field Integration Manager decline at $131,800 that cited pay, and a Senior Technical Writer hire at $97,600.

## Conversions

E-14: total cash $139,600 less the stated $29,700 bonus = $109,900 base (total to base).

## Benchmark table

| Role family (level, priority) | Band midpoint | Evidence funnel | Anchor and gap | Verdict | Confidence and deciding reason |
|---|---|---|---|---|---|
| Grid Modelling Engineering (Senior, P1 open) | $156,400 | 4 retrieved (E-1, E-2, E-3, E-4): 3 comparable (E-1, E-2 offers; E-3 range), 0 partial, 1 dropped (E-4 Seattle, geography) | Median of the E-1 and E-2 offers $164,600: (164,600 − 156,400) ÷ 156,400 = +5.24% | Lagging | High: two accepted offers, with comparable range E-3 beside them |
| Field Integration (Manager) | $129,700 | 3 retrieved (E-5, E-6, E-7): 1 comparable (E-5 offer), 1 partial (E-6 voluntarily posted, posting type), 1 dropped (E-7 Series C and voluntarily posted: two partials) | E-5 accepted offer $133,900: (133,900 − 129,700) ÷ 129,700 = +3.24% | Lagging, at the edge | Medium: one accepted offer, nothing comparable beside it |
| Billing Operations (Manager) | $105,900 | 3 retrieved (E-8, E-9, E-10): 2 comparable (E-8, E-9 ranges), 0 partial, 1 dropped (E-10 retention grant, basis) | Mean of range midpoints $108,875: (108,875 − 105,900) ÷ 105,900 = +2.81% | Competitive, at the edge | Medium: two ranges, no offer to anchor |
| Forecast Science (Staff, P2 open) | $199,300 | 3 retrieved (E-11, E-12, E-13): 0 comparable, 2 partial (E-11 slash title, role scope; E-12 Series A, stage), 1 dropped (E-13 day rate, basis) | None | Deferred | Deferred: only partial points survive |
| Channel Sales (Senior) | $114,500 | 3 retrieved (E-14, E-15, E-16): 1 comparable (E-14 offer, converted), 0 partial, 2 dropped (E-15 on-target pay with no split, basis; E-16 Series C and voluntarily posted: two partials) | E-14 accepted offer $109,900 base: (109,900 − 114,500) ÷ 114,500 = −4.02% | Above-market | Medium: one accepted offer, nothing comparable beside it |
| Technical Writing (Senior) | $96,900 | 4 retrieved (E-17, E-18, E-19, E-20): 1 comparable (E-17 range), 0 partial, 3 dropped (E-18 Phoenix, geography; E-19 April 2030, window; E-20 undated survey with no method, window and posting type) | E-17 range midpoint $98,200: (98,200 − 96,900) ÷ 96,900 = +1.34% | Competitive | Low: a single posted range |

Pool: 20 retrieved; 8 comparable, 3 partial, 9 dropped.

## Verdict notes

**Grid Modelling Engineering.** Two accepted offers, revealed preference, set the anchor, the aspirational range E-3 centres higher at $167,600, and Alderbrook's own hires at $162,900 and $166,300 already sit well above the midpoint of a band with a P1 role open.

**Field Integration.** E-5 anchors alone; E-6 was voluntarily posted, so it is noted but cannot price the band, and the decline at $131,800 that cited pay points the same way as the offer.

**Billing Operations.** With no offer, the two ranges set the anchor and hold the tier at Medium; E-10 carries a one-time retention grant and prices nothing.

**Channel Sales.** E-14 came as total cash and is read at its $109,900 base; the on-target range E-15 states no split and stays out.

**Technical Writing.** One range sits just above the midpoint and Alderbrook's hire at $97,600 agrees; the Phoenix offer E-18 is another metro's price.

## Deferred verdicts

**Forecast Science, Staff.** E-12, a Series A offer, sits at $184,700, below the $199,300 midpoint, and E-11, a range filed under the blended title Staff Forecast Scientist / Demand Forecaster, centres at $217,500, above it; each fails one test, and averaging them would invent a market. E-13 is a day rate and is never annualised. A call needs either an accepted offer or a pair of agreeing posted ranges for a Staff Forecast Scientist at a Salt Lake City Series B company, dated May 2030 or later; with the P2 role open, the offer is the point to find first.

## Signal caveats

- Three ranges were voluntarily posted (E-6, E-7, E-16), written to attract, and none of them sets a price.
- Billing Operations and Technical Writing rest on posted ranges alone, so their tiers stop at Medium and Low.
- Four rows (E-10, E-13, E-15, E-20) were never base-pay prices.

**What this means.** Grid Modelling Engineering lags with High confidence while its P1 role is open, so it is the band to move first, and Field Integration lags at the edge on one offer and a decline that cited pay. Billing Operations and Technical Writing can hold, Channel Sales sits above the market on one offer, and Forecast Science waits for a same-stage price before the P2 hire is made.

## Example 2: Copperline Diagnostics, a smaller pool in Canadian dollars

**What arrived.** Copperline Diagnostics, Series C, 210 staff, headquarters in Toronto ON, no remote roles. Bands in CAD; supplied rate 1 USD = 1.36 CAD. Window: before March 2030 is out. Retrieved 14 February 2031. Bands, minimum / midpoint / maximum: Assay Development, Senior, C$112,600 / C$124,800 / C$138,200 (P1 open); Quality Systems, Manager, C$97,400 / C$108,300 / C$119,900; Field Sales, Senior, C$88,600 / C$98,500 / C$109,000. Own recent offers: one Senior Assay Development hire at C$129,400 base; one Senior Field Sales hire at C$99,800 base.

Evidence rows:
- B-1, accepted offer, 2030-10, Senior Assay Development Scientist, Toronto ON, Series C, C$131,200 base.
- B-2, posted range, 2030-12, Senior Assay Development Scientist, Toronto ON, Series C, US$91,200–US$107,200 base.
- B-3, posted range, 2031-01, Quality Systems Manager / Quality Lead, Toronto ON, Series C, C$104,500–C$122,500 base.
- B-4, accepted offer, 2030-02, Quality Systems Manager, Toronto ON, Series C, C$111,500 base.
- B-5, posted range, 2030-09, Quality Systems Manager, Toronto ON, Series D, C$96,000–C$112,000 base; voluntarily posted.
- B-6, accepted offer, 2030-11, Senior Field Sales Representative, Toronto ON, Series C, C$131,400 on-target earnings, split not stated.
- B-7, posted range, 2030-08, Senior Field Sales Representative, Toronto ON, Series C, C$92,000–C$106,000 base.
- B-8, accepted offer, 2031-01, Senior Field Sales Representative, Toronto ON, Series C, C$118,000 total package, mostly stock options, base not stated.

# Compensation benchmark: Copperline Diagnostics

Annual base pay in Canadian dollars, each band read at its midpoint on the same 3% line, with US-dollar figures converted at the supplied 1 USD = 1.36 CAD and no other rate assumed. The window opens in March 2030, so B-4 from February 2030 falls out; the pool was retrieved on 14 February 2031. Comparators are Toronto companies at Series C. Copperline's own hires, C$129,400 in Assay Development and C$99,800 in Field Sales, are context, not evidence.

## Conversions

B-2: US$91,200–US$107,200 × 1.36 = C$124,032–C$145,792, midpoint C$134,912 (USD to CAD, supplied rate).

## Benchmark table

| Role family (level, priority) | Band midpoint | Evidence funnel | Anchor and gap | Verdict | Confidence and deciding reason |
|---|---|---|---|---|---|
| Assay Development (Senior, P1 open) | C$124,800 | 2 retrieved (B-1, B-2): 2 comparable (B-1 offer; B-2 range, converted), 0 partial, 0 dropped | B-1 accepted offer C$131,200: (131,200 − 124,800) ÷ 124,800 = +5.13% | Lagging | High: offer B-1 with the converted range B-2 beside it |
| Quality Systems (Manager) | C$108,300 | 3 retrieved (B-3, B-4, B-5): 0 comparable, 1 partial (B-3 slash title, role scope), 2 dropped (B-4 February 2030, window; B-5 Series D and voluntarily posted: two partials) | None | Deferred | Deferred: nothing comparable survives |
| Field Sales (Senior) | C$98,500 | 3 retrieved (B-6, B-7, B-8): 1 comparable (B-7 range), 0 partial, 2 dropped (B-6 on-target pay with no split, basis; B-8 option-heavy package, basis) | B-7 range midpoint C$99,000: (99,000 − 98,500) ÷ 98,500 = +0.51% | Competitive | Low: a single posted range |

Pool: 8 retrieved; 3 comparable, 1 partial, 4 dropped.

## Verdict notes

**Assay Development.** B-1, an accepted offer and so revealed preference, is the anchor; the converted range B-2, aspirational by nature, centres higher at C$134,912, and Copperline's own hire at C$129,400 already sits above the midpoint.

**Field Sales.** Both offers fall out on basis, B-6 as on-target pay with no split and B-8 as mostly options with no base stated, so one range is left and the call holds at Low; Copperline's hire at C$99,800 sits close to the midpoint.

## Deferred verdicts

**Quality Systems, Manager.** B-3 joins two titles with a slash, so its pay was set for a blended job and it stays partial; B-4 is an offer from February 2030, one month before the window, and B-5 is a stage away and voluntarily posted. Either an accepted offer or a pair of agreeing posted ranges for a Quality Systems Manager at a Toronto Series C company, dated March 2030 or later, would open a call.

## Signal caveats

- Three of the four offers fall out (B-4 on its date, B-6 and B-8 on basis), so the pool says less about offers than its size suggests.
- One range came in US dollars and is read only at the supplied rate.

**What this means.** Assay Development trails the market on a High-confidence call with its P1 hire still open, and it is the band to raise. Field Sales can hold on thin evidence, and Quality Systems waits for a same-stage Toronto price.

## Your next message

The document for the real company, built from your notes, and nothing else. Its first character is the `#` of the title; nothing in it mentions the notes, the skill or the steps, and no horizontal rule appears.
