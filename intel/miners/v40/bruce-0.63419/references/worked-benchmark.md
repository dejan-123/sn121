# Worked benchmark on an invented pool

Everything below is invented to show the reasoning. None of these figures belong in a real answer; take every number you use from the input in front of you.

## The situation

Larkspur Freight Software, Series C, Atlanta headquarters. Remote roles are paid on the Atlanta tier. The input's window rule says points dated before April 2028 are out; signals were retrieved in early April 2029.

Internal bands (midpoint in brackets) and hiring context:
- Senior Route Optimization Engineer, $149,600 to $183,200 ($166,400). Open, priority 1. Own offers: accepted at $171,500 and $173,200; one candidate declined $168,900 and joined a competitor.
- Mid-market Account Executive, base band $96,200 to $116,200 ($106,200). Open, priority 2. One accepted offer at $104,000 base.
- Field Implementation Manager, $109,000 to $131,600 ($120,300). No recent offers.
- Senior Support Engineer, Toronto team, band in Canadian dollars: C$96,700 to C$116,700 (C$106,700). No recent offers.
- Staff Data Platform Engineer, $187,600 to $225,200 ($206,400). No recent offers.

External signals, as classified upstream:
- E-01 accepted offer, Senior Route Optimization Engineer, Atlanta, Series C, 2029-01: $176,300 base.
- E-02 posted range, Senior Optimization Engineer (scope note: same level as Larkspur's senior), Atlanta, Series C, 2028-11: $158,400 to $192,200 base.
- E-03 posted range, same title, remote with a national range, Series C, 2029-02: $149,700 to $188,300.
- E-04 accepted offer, same title, Atlanta, Series E, 2028-12: $181,900 base.
- E-05 posted range, Mid-market AE, Atlanta, Series C, 2029-02: OTE $188,600 to $227,400, stated split 50% base / 50% variable.
- E-06 accepted offer, Mid-market AE, Atlanta, Series C, 2028-10: $139,500 first-year cash including a $31,800 commission guarantee.
- E-07 posted range, Field Implementation Manager, Atlanta, Series C, 2028-03.
- E-08 posted range, Senior Field Implementation Manager (one level up), Atlanta, Series C, 2028-09.
- E-09 accepted offer, Senior Support Engineer, Toronto, Series C, 2028-12: C$109,800 base.
- E-10 posted range, Senior Support Engineer, Toronto, Series C, 2029-01: C$98,400 to C$121,600.
- E-11 posted range, Senior Support Engineer, Boston, Series C, 2028-11, in US dollars.
- E-12 contract engagement, Staff Data Platform Engineer, Atlanta, 2029-01: $1,150 per day.
- E-13 recruiter, verbal: "staff data platform people are going for about 233 here".
- E-14 posted range, Staff Data Platform Engineer, Atlanta, Series D, 2028-10.
- E-15 survey median, "Data Platform Staff", no date, no publisher, no method.
- E-16 posted range, Field Implementation Manager, Atlanta, Series C, 2028-04: $112,600 to $136,200.

## The screen, role by role

Route optimization. E-01 and E-02 survive: same metro, stage and level (E-02's title differs but its scope note matches). E-03 goes because Larkspur anchors remote pay to Atlanta, so a national range answers a different question. E-04 goes on stage: a Series E company pays from a different cash position. Market reference is the E-01 offer, $176,300; E-02's midpoint ($175,300) agrees and the offer sits inside the range, so High. Gap: (166,400 - 176,300) / 176,300 = -5.6%, below market. The band max still clears the offer, but Larkspur's own accepted offers sit 65% and 70% of the way through the range and a candidate walked at $168,900, which is the squeeze a recruiter feels before the numbers show it.

Account executive. E-05 is OTE, but the split is stated, so base = 50% of each end: $94,300 to $113,700, midpoint $104,000. E-06 is cash including a guarantee; base = 139,500 - 31,800 = $107,700, which sits inside the converted range. Both survive after conversion, so High. Gap: (106,200 - 107,700) / 107,700 = -1.4%, at market. Without the stated split, E-05 would have been excluded rather than guessed at.

Field implementation. E-07 is dated before April 2028, so out. E-16 is dated April 2028, the boundary month, so in, and flagged as boundary. E-08 is one rung up, out. One range alone: Low. Midpoint $124,400; gap (120,300 - 124,400) / 124,400 = -3.3%, at market on thin, aspirational evidence.

Toronto support. The band is in Canadian dollars, so only Canadian-dollar Toronto points compare. E-11 is another country and currency, out; no rate was supplied, and even with one, a Boston range does not price a Toronto job. E-09 offer C$109,800 sits inside E-10 (midpoint C$110,000): High. Gap (106,700 - 109,800) / 109,800 = -2.8%, at market.

Staff data platform. E-12 is a contractor day rate (never annualized), E-13 is hearsay, E-14 is Series D, E-15 is undated with no method. Nothing survives: Deferred. The Series D range can be mentioned as context, never as the anchor.

Ledger: 16 points; 7 used (two after basis conversion, one boundary-month); 9 excluded: E-03 national range vs Atlanta anchor, E-04 and E-14 stage, E-07 out of window, E-08 level, E-11 country and currency, E-12 contractor rate, E-13 hearsay, E-15 undated.

## One way the deliverable could read (comp-team audience)

Larkspur's route optimization band is the one that needs attention before the next offer goes out. The only clean same-stage, same-metro offer is E-01 (accepted, 2029-01, $176.3k base); the $166.4k midpoint trails it by 5.6%, and E-02's posted range (2028-11, $158.4k to $192.2k) has its midpoint within $1k of that offer. Your own hiring already feels it: the two accepted offers landed 65% and 70% of the way through the band, and a candidate walked at $168.9k. The other benchmarkable bands sit within 3.5% of market, and staff data platform cannot be called yet.

| Role | Band mid | Evidence used | Market ref (base) | Gap | Position | Confidence |
|---|---|---|---|---|---|---|
| Sr Route Optimization Eng | $166.4k | E-01 offer 2029-01 $176.3k; E-02 range 2028-11 $158.4k-$192.2k | $176.3k offer | -5.6% | Below | High: offer sits inside a same-stage range |
| Mid-market AE | $106.2k | E-05 OTE range 2029-02, 50% base = $94.3k-$113.7k; E-06 offer 2028-10, $139.5k cash - $31.8k guarantee = $107.7k | $107.7k offer | -1.4% | At market | High: both converted points agree |
| Field Implementation Mgr | $120.3k | E-16 range 2028-04 $112.6k-$136.2k (boundary month) | $124.4k range mid | -3.3% | At market | Low: one posted range |
| Sr Support Eng (Toronto) | C$106.7k | E-09 offer 2028-12 C$109.8k; E-10 range 2029-01 C$98.4k-C$121.6k | C$109.8k offer | -2.8% | At market | High: offer inside range |
| Staff Data Platform Eng | $206.4k | none comparable | none | none | Deferred | Nothing survives the screen |

Everything is annual base; the Toronto row stays in Canadian dollars because no exchange rate was supplied, and under the stated rule that points dated before April 2028 are out, E-16 stays in as a boundary-month point.

Nine of the sixteen points were set aside: E-03 (national range, 2029-02) because Larkspur pays remote roles on the Atlanta tier; E-04 (Series E offer) and E-14 (Series D range) on stage; E-07 (range, 2028-03) as outside the window; E-08 one level up; E-11 a Boston range in US dollars; E-12 a contractor day rate; E-13 a verbal recruiter figure; E-15 an undated survey with no method.

Before the next route optimization offer, either move the midpoint toward $176k or make upper-third offers the approved default; otherwise the band keeps losing candidates in the high $160ks. For staff data platform, one same-stage Atlanta offer or range would unlock a call. The AE and Toronto bands need no action this cycle.

## Why it reads this way

- The opening names the company's own most urgent fact, not a generic preface; a different company opens on its own priority.
- Caveats that apply to the whole pool (basis, currency) appear once. Row cells carry only what differs.
- The Deferred row stays in the table so nobody mistakes silence for "at market".
- The close is an action tied to the open req, not an offer of further help.
- Each cited point carries its type, month and figure, so the memo can be checked without the source table open.
