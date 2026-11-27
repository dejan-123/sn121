# Worked example

One invented case, shown as working notes and then as the document sent. Every company, row and figure is made up. Borrow the sequence and the layout; your facts all come from the request you were given.

## The request, summarised

Tidewater Ledger is a Series C accounting-software company in Lisbon, with every role anchored there. Bands are annual base in EUR. The pool was retrieved in 2026-02 and the request says evidence dated earlier than March 2025 is excluded.

Bands (minimum / midpoint / maximum):

- Firmware Engineering, Senior: 58,500 / 64,500 / 70,500
- Technical Writing, Lead: 40,500 / 44,500 / 48,500
- Procurement, Manager: 50,500 / 55,500 / 60,500
- Data Protection, Counsel: 70,500 / 77,500 / 84,500

Open roles: Senior Firmware Engineer, top priority. Own offers: Firmware Senior, one accepted at 67,500 and one declined at 65,500 with pay given as the reason. None listed for the other families.

External rows:

- K-01: Senior Firmware Engineer, Lisbon, Series C; accepted offer dated 2025-11; 69,500 base
- K-02: Senior Firmware Engineer, Lisbon, Series C; posted range dated 2025-09; 62,500 to 74,500 base
- K-03: Senior Firmware Engineer, Zurich, Series C; posted range dated 2025-10; figures in CHF, no rate given
- K-04: Senior Firmware Engineer, Lisbon, Series C; accepted offer dated 2025-02; 66,500 base
- K-05: Lead Technical Writer, Lisbon, Series C; posted range dated 2025-08; 41,500 to 47,500 base
- K-06: Lead Technical Writer, Lisbon, Series C; accepted offer dated 2025-12; 53,000 total, and the note says this includes a 6,300 annual bonus
- K-07: Procurement Manager, Lisbon, Series C; posted range dated 2025-06; 56,500 to 66,500 base
- K-08: Procurement Manager, Lisbon, Series C; typed as an offer, dated 2025-07; 430 per day, and the note says contract engagement
- K-09: Data Protection Counsel, Lisbon, Series D; accepted offer dated 2025-10; 83,500 base

## Working notes (the second turn: written out, then closed by the read_reference call for final-check.md; never sent as the document)

Cut-off month 2025-03. Ladder: seed, A, B, [C], D, E+. Anchor: Lisbon, EUR base.

- K-01 Firmware: geo match, stage match, scope match, type match. Fully comparable. 69,500.
- K-02 Firmware: all match. Fully comparable. Midpoint 68,500.
- K-03 Firmware: another country, geography fail; also CHF with no rate. Dropped.
- K-04 Firmware: 2025-02 is before 2025-03. Dropped, out of window.
- K-05 Writing: all match. Fully comparable. Midpoint 44,500.
- K-06 Writing: 53,000 - 6,300 = 46,700 base. All match. Fully comparable.
- K-07 Procurement: all match. Fully comparable. Midpoint 61,500.
- K-08 Procurement: day rate for contract time, not salary. Dropped.
- K-09 Counsel: stage one rung later, partial; rest match. Partial match.

Firmware: 4 = 2 + 0 + 2. Offer K-01 sets 69,500; it sits inside K-02, so they agree. (64,500 - 69,500) / 69,500 = -7.2%. Lagging. High.
Writing: 2 = 2 + 0 + 0. Offer K-06 sets 46,700; inside K-05. (44,500 - 46,700) / 46,700 = -4.7%. Marginal, no own offers to settle it, arithmetic stands: Competitive. High less one tier for a marginal call: Medium.
Procurement: 2 = 1 + 0 + 1. No offer; K-07 midpoint 61,500, above band maximum 60,500. (55,500 - 61,500) / 61,500 = -9.8%. Lagging. One posted range: Low.
Counsel: 1 = 0 + 1 + 0. A single partial. Deferred.
Pool: 9 = 5 + 1 + 3.

## The document sent

# Tidewater Ledger: where four bands sit against the market

This reading uses evidence dated March 2025 or later, as the request specifies; K-04 (February 2025) falls outside it. Bands and evidence are annual base in EUR. One figure needed converting: K-06, 53,000 total less the 6,300 bonus its note states, gives 46,700 base. I treat a band within 5% of the market reference as competitive, and I let an accepted offer set that reference ahead of a posted range, because an offer is a revealed price and a range is aspirational.

| Role family, level | Band midpoint | Evidence funnel | Market reference | Gap | Verdict | Confidence |
|---|---|---|---|---|---|---|
| Firmware Engineering, Senior | 64,500 | 4 retrieved: 2 fully comparable (K-01, K-02), 0 partial, 2 dropped (K-03 another country and no exchange rate; K-04 out of window) | 69,500, accepted offer K-01 | (64,500 - 69,500) / 69,500 = -7.2% | Lagging | High: the offer sits inside posted range K-02 |
| Technical Writing, Lead | 44,500 | 2 retrieved: 2 fully comparable (K-05, K-06), 0 partial, 0 dropped | 46,700, accepted offer K-06 after conversion | (44,500 - 46,700) / 46,700 = -4.7% | Competitive | Medium: offer and range agree, lowered one tier for a marginal gap |
| Procurement, Manager | 55,500 | 2 retrieved: 1 fully comparable (K-07), 0 partial, 1 dropped (K-08 contract day rate, not salary) | 61,500, midpoint of posted range K-07 | (55,500 - 61,500) / 61,500 = -9.8% | Lagging | Low: one posted range, no offer |
| Data Protection, Counsel | 77,500 | 1 retrieved: 0 fully comparable, 1 partial (K-09, stage), 0 dropped | none | none | Deferred | Deferred: a single partial match |

Pool: 9 retrieved, 5 fully comparable, 1 partial, 3 dropped.

Technical Writing is the close call: at 4.7% under the offer it stays inside the 5% line, and with no offers of your own in that family there is nothing to tip it. Firmware is the clear one, and it is your top-priority opening: your own accepted offer at 67,500 already sits above the midpoint and a candidate declined 65,500 over pay. For Procurement the only reference is an advertised range whose midpoint is above your band maximum, so treat the direction as sound and the size as soft.

**Deferred verdicts.** Data Protection, Counsel: the single row, K-09, is from a company one funding round later, so it should read high and cannot place the band. An accepted offer or posted range for this level in Lisbon at Series C, dated March 2025 or later, would settle it.

**Signal caveats.** Three of the five fully comparable rows are posted ranges, which state what employers advertise and tend to sit above what is paid. A third of the pool was dropped, half of it in Firmware.

## What to notice

- The working is done before the document and stays out of it. The table copies its counts; it does not rework them.
- K-08 kept an "offer" label in the request. Its note decided.
- K-09 is an accepted offer and still cannot set a reference, and no direction is hinted for its family.
- A thin pool lowers the tier (Procurement); it does not block the verdict.
- Own offers settle nothing here except as context for a clear call. They never enter the funnel.
- The document is short. Its length goes on the calls, not on describing the method.
