# The benchmark document (invented companies: copy the layout, never the figures)

The notes are written; the document is built from them alone, with every figure taken from the input or computed from it on the page. Its first line, exactly in this form:

`# Compensation benchmark: <company name>` (or `# Compensation benchmark: <company name>, scope note`)

For a benchmark, the sections follow in this order:

1. An opening paragraph in plain sentences: the basis and currency, the window's first month in and what fell before it, the retrieval date, the comparator profile, and the company's own recent offers as context.
2. `## Conversions`: one line each, with its direction, or "None needed."
3. `## Benchmark table`: a row for each role family, in the snapshot's order. Columns: Role family (level, priority) | Band midpoint | Evidence funnel | Anchor and gap | Verdict | Confidence and deciding reason. The funnel counts retrieved, comparable, partial and dropped, each with its IDs and every drop with its reason, every count written even at 0; comparable, partial and dropped always add up to the retrieved count. Under the table, one line: `Pool: n retrieved; n comparable, n partial, n dropped.`
4. `## Verdict notes`: one or two sentences per family that has a verdict, opening on its name in bold: what anchors it and of which kind (an accepted offer is revealed preference, a posted range aspirational), what supports or questions it, and any pressure the company's own offers show.
5. `## Deferred verdicts`: each deferred family, the IDs that leave it without a verdict, and the evidence that would end the deferral (how many points, of what type, place, stage and level, dated from which month). With none deferred, one sentence opening "None:" naming the verdict that rests on the fewest points and what would firm it.
6. `## Signal caveats`: up to three skews across the whole pool, each with the IDs or counts behind it, stated once here and never per row.
7. **What this means.** Two or three plain sentences: which priority open roles are at risk and why, which bands can hold, and what waits for evidence.

## Example 1: Fernwood Irrigation Systems, built from the notes you have seen

# Compensation benchmark: Fernwood Irrigation Systems

Annual base pay in US dollars, read against Fernwood's bands at midpoint. The window opens in August 2029, so E-7 from July 2029 falls out; the pool was retrieved on 16 July 2030. Comparators are Raleigh companies at Series C, with remote roles counted when they are paid on the Raleigh tier. Fernwood's own recent offers are context, not evidence: two Senior Embedded Firmware hires at $151,900 and $154,700, and a Field Service Manager decline at $112,900 that cited pay.

## Conversions

E-5: total cash $126,700 less the stated $11,800 bonus = $114,900 base (total to base).

## Benchmark table

| Role family (level, priority) | Band midpoint | Evidence funnel | Anchor and gap | Verdict | Confidence and deciding reason |
|---|---|---|---|---|---|
| Embedded Firmware (Senior, P1 open) | $143,600 | 4 retrieved (E-1, E-2, E-3, E-4): 2 comparable (E-1 offer, E-2 range), 0 partial, 2 dropped (E-3 Charlotte, geography; E-4 spoken recruiter figure, posting type) | E-1 accepted offer $150,780: (150,780 − 143,600) ÷ 143,600 = +5.00% | Competitive, at the edge | High: an accepted offer, with comparable range E-2 beside it |
| Field Service (Manager) | $109,400 | 3 retrieved (E-5, E-6, E-7): 2 comparable (E-5 offer, converted; E-6 remote range on the Raleigh tier), 0 partial, 1 dropped (E-7, July 2029, window) | E-5 accepted offer $114,900 base: (114,900 − 109,400) ÷ 109,400 = +5.03% | Lagging, at the edge | High: offer E-5 plus comparable range E-6 |
| Revenue Accounting (Manager) | $123,600 | 3 retrieved (E-8, E-9, E-10): 2 comparable (E-8, E-9 ranges), 0 partial, 1 dropped (E-10 retention grant, basis) | Mean of range midpoints $127,150: (127,150 − 123,600) ÷ 123,600 = +2.87% | Competitive | Medium: two ranges, no offer to anchor |
| Hydrology Modelling (Staff, P2 open) | $193,700 | 3 retrieved (E-11, E-12, E-13): 0 comparable, 2 partial (E-11 Series B, E-12 Series D: stage), 1 dropped (E-13 hourly contract rate, basis) | None | Deferred | Deferred: only partial points survive |
| Supply Planning (Senior) | $102,900 | 2 retrieved (E-14, E-15): 1 comparable (E-14 offer), 0 partial, 1 dropped (E-15 Series A, two rungs: stage) | E-14 accepted offer $96,700: (96,700 − 102,900) ÷ 102,900 = −6.03% | Above-market | Medium: one accepted offer, nothing comparable beside it |
| Mechanical Design (Senior) | $127,300 | 3 retrieved (E-16, E-17, E-18): 3 comparable (E-16, E-17 offers; E-18 range), 0 partial, 0 dropped | Median of the E-16 and E-17 offers $134,500: (134,500 − 127,300) ÷ 127,300 = +5.66% | Lagging | High: two accepted offers, with comparable range E-18 beside them |

Pool: 18 retrieved; 10 comparable, 2 partial, 6 dropped.

## Verdict notes

**Embedded Firmware.** E-1 is revealed preference and anchors alone; the voluntarily posted range E-2 is aspirational and centres at $152,300, so it supports the reading without moving it. A gap of exactly +5.00% is inside the line, but Fernwood's own hires at $151,900 and $154,700 already sit near the $157,800 maximum, which leaves the P1 role little room.

**Field Service.** E-5 came as total cash and is read at its $114,900 base. The remote range E-6 centres at $112,500, above the midpoint as well, and the decline at $112,900 that cited pay points the same way.

**Revenue Accounting.** E-8's slash title names one job twice, so it counts in full. With no offer, the two ranges set the anchor and hold the tier at Medium; E-10 carries a one-time retention grant and prices nothing.

**Supply Planning.** One accepted offer sits 6.03% under the midpoint; E-15 comes from a Series A company, two rungs away, and is left out.

**Mechanical Design.** Two accepted offers, $133,100 (E-16) and $135,900 (E-17), give a median of $134,500; the range E-18 centres higher, at $139,300, and stays out of the median as a check. Both kinds of evidence put the market above the band.

## Deferred verdicts

**Hydrology Modelling, Staff.** E-11 (Series B) centres at $181,600, below the $193,700 midpoint, and E-12 (Series D) at $215,300, above it; each is one rung from Fernwood, and averaging them would invent a market. E-13 is an hourly contract rate and is never annualised. A verdict needs a single accepted offer, or a pair of posted ranges, for a Staff hydrology modeller at a Raleigh Series C company, dated August 2029 or later; with the P2 role open, the offer is the point to find first.

## Signal caveats

- Posted ranges outnumber accepted offers 10 to 5, and Revenue Accounting rests on aspirational figures alone.
- North Carolina has no pay-transparency mandate: E-2 and E-9 were voluntarily posted by employers who chose to show pay, which tends to run high.
- Three rows (E-4, E-10, E-13) were never base-pay prices.

**What this means.** Field Service lags at the edge and has already lost a candidate on pay, so it is the band to move first, with Mechanical Design close behind on two recent offers. Embedded Firmware holds on the line, though recent hires near its maximum leave the P1 role little room. Revenue Accounting and Supply Planning can hold, and Hydrology Modelling waits for evidence before the P2 hire is priced.

## Example 2: Marrowfield Health, a smaller pool in sterling

**What arrived.** Marrowfield Health, Series B, 90 staff, headquarters in Manchester UK, no remote roles. Bands in GBP; supplied rate 1 EUR = 0.85 GBP. Window: before September 2029 is out. Retrieved 3 June 2030. Bands, minimum / midpoint / maximum: Data Platform, Senior, £71,300 / £79,200 / £87,600 (P1 open); Clinical Sales, Manager, £69,800 / £77,600 / £85,900; Regulatory Writing, Senior, £58,400 / £64,900 / £71,800. Own recent offers: one Clinical Sales Manager hire at £78,900 base.

Evidence rows:
- B-1, accepted offer, 2030-02, Senior Data Platform Engineer, Manchester, Series B, £84,300 base.
- B-2, posted range, 2029-12, Senior Data Platform Engineer, Manchester, Series B, €92,400–€107,600 base.
- B-3, salary survey, 2030-01, "UK data engineers", national, median £81,000; no publisher or method named.
- B-4, accepted offer, 2030-03, Clinical Sales Manager, Manchester, Series B, £109,500 on-target earnings, split not stated.
- B-5, posted range, 2029-10, Clinical Sales Manager, Manchester, Series B, £69,400–£81,800 base.
- B-6, accepted offer, 2030-04, Clinical Sales Manager, Manchester, Series B, £104,800 total package, mostly share options, base not stated.
- B-7, posted range, 2030-01, Senior Regulatory Writer, Leeds, Series B, £60,200–£72,600 base.
- B-8, accepted offer, 2029-11, Senior Regulatory Writer, Manchester, Series B, $88,400 base, in US dollars.

# Compensation benchmark: Marrowfield Health

Annual base pay in pounds sterling, against Marrowfield's bands at midpoint, with euro figures converted at the supplied 1 EUR = 0.85 GBP and no other rate assumed. The window opens in September 2029 and nothing falls before it; the pool was retrieved on 3 June 2030. Comparators are Manchester companies at Series B. Marrowfield's own Clinical Sales hire at £78,900 is context, not evidence.

## Conversions

B-2: €92,400–€107,600 × 0.85 = £78,540–£91,460, midpoint £85,000 (EUR to GBP, supplied rate).

## Benchmark table

| Role family (level, priority) | Band midpoint | Evidence funnel | Anchor and gap | Verdict | Confidence and deciding reason |
|---|---|---|---|---|---|
| Data Platform (Senior, P1 open) | £79,200 | 3 retrieved (B-1, B-2, B-3): 2 comparable (B-1 offer, B-2 range, converted), 0 partial, 1 dropped (B-3 survey naming no source or method, posting type) | B-1 accepted offer £84,300: (84,300 − 79,200) ÷ 79,200 = +6.44% | Lagging | High: offer B-1 and the converted range B-2 both comparable |
| Clinical Sales (Manager) | £77,600 | 3 retrieved (B-4, B-5, B-6): 1 comparable (B-5 range), 0 partial, 2 dropped (B-4 on-target pay with no split, basis; B-6 option-heavy package, basis) | B-5 range midpoint £75,600: (75,600 − 77,600) ÷ 77,600 = −2.58% | Competitive | Low: a single posted range |
| Regulatory Writing (Senior) | £64,900 | 2 retrieved (B-7, B-8): 0 comparable, 0 partial, 2 dropped (B-7 Leeds, geography; B-8 US dollars with no rate supplied, basis) | None | Deferred | Deferred: nothing survives screening |

Pool: 8 retrieved; 3 comparable, 0 partial, 5 dropped.

## Verdict notes

**Data Platform.** B-1, an accepted offer and so revealed preference, is the anchor; the converted range B-2, aspirational by nature, has its midpoint at £85,000, in line with it. With the P1 role open, the band trails what the market has just paid by more than the line allows.

**Clinical Sales.** Both offers fall out on basis: B-4 is on-target pay with no split, and the variable share of sales pay varies too much to guess; B-6 is mostly options with no base stated. One posting is left, so the verdict holds at Low, and Marrowfield's own hire at £78,900 sits close to the midpoint.

## Deferred verdicts

**Regulatory Writing, Senior.** B-7 is a Leeds range, another metro, and B-8 is in US dollars with no dollar rate supplied, so it cannot be read against a sterling band. An accepted offer, or a pair of posted ranges, for a Senior Regulatory Writer at a Manchester Series B company, in sterling or in euro at the supplied rate and dated September 2029 or later, would open a verdict.

## Signal caveats

- Three of the eight points are offers but only one survives; two fell out on basis, so the pool says less about sales pay than its size suggests.
- The pool mixes three currencies, and only the euro figure has a supplied rate.

**What this means.** Data Platform lags with High confidence with its P1 role still open, so it is the band to move. Clinical Sales can hold on thin evidence, and Regulatory Writing waits for a Manchester price.

## Your next message

The document for the real company, built from your notes, and nothing else. Its first character is the `#` of the title; nothing in it mentions the notes, the skill or the steps, and no horizontal rule appears.
