# Constructing the evidence register

Use a short factual record, not a second essay. The register carries the information that the final brief must preserve:

1. Comparison settings: family/level/pay zone, maturity, currency/base period, window, bands, priorities and internal offers.
2. External records: ID and original title/type/date/notes; geography, maturity, scope and form assessments; full/partial/excluded status; normalization when needed; anchor or context use.
3. Family cards: retrieved/full/partial/excluded IDs and primary exclusion reasons, support series, anchor arithmetic, midpoint difference, verdict, confidence and the decisive interpretation.
4. Pool control: sum family counts, confirm every input ID appears once, and list any unmapped population or missing internal comparison.

Copy a number with its ID and basis. A quoted total and its derived base are two representations of one observation, not two observations. Write a conversion only once and refer back to it. Keep observation date distinct from retrieval date. When an exclusion has multiple causes, count one excluded record and retain the other causes as flags.

## Worked example: Alderbridge Language Systems

This invented company is Series C and pays the two units below on its Bristol pay zone. The assessment snapshot is 2026-04-30. The input excludes observations before June 2025. Bands are annual GBP employee base; 1 GBP = 1.20 EUR is the only exchange quote.

| Unit | Minimum | Midpoint | Maximum | Hiring context |
|---|---:|---:|---:|---|
| Language Platform Engineering / Senior | 57,500 | 63,000 | 72,000 | P1; internal accepted offers of 66,000 and 67,500 |
| Service Delivery / Lead | 42,000 | 47,000 | 53,000 | No active priority or internal offers supplied |

The source column below identifies distinct underlying employers except for rows explicitly described otherwise. No legal inference about disclosure is needed; use the supplied publication descriptions.

| ID | Type and observation date | Job and location | Maturity | Amount and notes |
|---|---|---|---|---|
| hire-a | Accepted offer, 2026-01-12 | Senior Language Platform Engineer, Bristol | Series C | GBP 62,500 annual base; employer Birch |
| hire-b | Accepted offer, 2026-02-04 | Senior Language Platform Engineer, Bristol | Series C | GBP 70,000 annual cash, including a stated GBP 5,250 annual bonus; employer Cedar |
| hire-c | Accepted offer, 2026-03-18 | Senior Language Platform Engineer, Bristol | Series C | EUR 83,100 annual base; employer Rowan; same Bristol pay zone |
| notice-d | Primary employer posting, 2026-03-25 | Senior Language Platform Engineer, Bristol | Series C | GBP 60,000-74,000 base; publication described as mandated |
| notice-e | Primary employer posting, 2026-02-09 | Senior Language Platform Engineer, Bristol | Series B | GBP 61,000-72,000 base; explicitly voluntary disclosure |
| notice-f | Primary employer posting, 2026-01-20 | Service Delivery Lead, Bristol | Series C | GBP 44,000-52,000 annual base; publication motive unspecified |
| hire-g | Accepted offer, 2026-02-26 | Service Delivery Lead, Bristol | Series D | GBP 55,000 annual base |
| hire-h | Accepted offer, 2025-05-31 | Service Delivery Lead, Bristol | Series C | GBP 45,500 annual base |
| rate-i | Agency contractor quote, 2026-03-02 | Service Delivery Lead, Bristol | Series C | GBP 36 per hour; temporary service engagement |

### Register: settings and records

Settings: Bristol, Series C; annual GBP employee base; June 2025 is the first eligible month. Both internal midpoints are supplied. Dates before June are excluded. All dated observations other than hire-h are inside the window. The company's internal offers belong only to hiring context.

| ID | Four comparability assessments | Status, value and use |
|---|---|---|
| hire-a | Geography matched; maturity matched; scope matched; employee offer matched | Full; GBP 62,500 base; accepted-offer series |
| hire-b | All four matched | Full; 70,000 cash - 5,250 annual bonus = GBP 64,750 base, downward component adjustment; accepted-offer series |
| hire-c | All four matched; payment currency does not change its stated Bristol pay zone | Full; EUR 83,100 / 1.20 EUR per GBP = GBP 69,250 base, conversion into the comparison currency; accepted-offer series |
| notice-d | All four matched under the supplied mandated-posting description | Full; GBP 60,000-74,000, midpoint 67,000; posting context only because accepted offers survive |
| notice-e | Geography/scope matched; maturity qualified by one adjacent stage; form qualified by voluntary disclosure | Excluded; two qualifications. Primary reason compound comparability; flags adjacent stage and voluntary posting. No anchor value |
| notice-f | All four matched; no claim that unspecified motive means legally mandated | Full; GBP 44,000-52,000, midpoint 48,000; advertised support series |
| hire-g | Geography/scope/form matched; maturity qualified by one adjacent stage | Partial; GBP 55,000 remains context, not the Service Delivery anchor |
| hire-h | All four comparability dimensions matched, but the date fails | Excluded; primary reason outside the window. Its May 2025 date is before June 2025 |
| rate-i | Matching job/location/stage cannot cure an incompatible contractor basis | Excluded; primary reason service charge rather than employee base. Do not assume working hours or annualize it |

### Family decision cards

Language Platform Engineering / Senior:

- Retrieved 5: hire-a, hire-b, hire-c, notice-d, notice-e.
- Full 4: three accepted offers and one posted range. Partial 0. Excluded 1: notice-e, compound qualification.
- Accepted-offer series: 62,500; 64,750; 69,250. Sum 196,500; arithmetic mean 196,500 / 3 = GBP 65,500. Observed offer span 62,500-69,250.
- The posting midpoint of GBP 67,000 is a separate supporting advertisement. It is not a fourth salary in the mean. The median of the offer series would be 64,750; this method explicitly uses the arithmetic mean instead.
- Internal midpoint minus anchor: 63,000 - 65,500 = -2,500. Percentage: 100(-2,500)/65,500 = -3.8167939%. Lagging under the disclosed 3% convention, close enough to the boundary to qualify its precision.
- High confidence within this limited pool: three accepted, comparable observations from explicitly distinct employers, supported directionally by the posting. The offer span still limits precision and is not a population percentile.
- Hiring interpretation: both internal accepted offers exceed the midpoint. That adds practical urgency to P1 without entering the external series or creating another external observation.

Service Delivery / Lead:

- Retrieved 4: notice-f, hire-g, hire-h, rate-i.
- Full 1: notice-f. Partial 1: hire-g, adjacent-stage offer. Excluded 2: hire-h, stale; rate-i, contractor basis.
- No full offer survives. The posting midpoint is (44,000 + 52,000) / 2 = GBP 48,000, an advertised-market estimate.
- Difference: 47,000 - 48,000 = -1,000. Percentage: 100(-1,000)/48,000 = -2.0833333%. Competitive under the same convention; Low confidence from one posting.
- The partial offer at GBP 55,000 raises a useful question about coverage but does not replace the full posting, increase confidence, or by itself force deferral. No quantified stage adjustment is available.

Pool control: retrieved 9 = full 5 + partial 1 + excluded 3. Primary exclusions are compound qualification 1, stale 1 and contractor basis 1. No confirmed duplicates or unmapped units are supplied. No family requires deferral. The low-confidence Delivery estimate most needs a same-scope Bristol Series C employee offer.

## A comparison that cannot yet be made

Suppose a separate family has an internal band but only an adjacent-stage offer and an unresolved blended-role posting. Neither observation is fully comparable. Record both as context or unresolved exclusions according to their actual deficiencies; do not average them into a market anchor. The family is Deferred. Ask for a dated observation matching its pay zone, maturity, duties/level and annual-base definition. A hiring priority cannot fill that evidence gap.

If the external market is observable but the internal band is absent, preserve the market estimate and defer only the company's competitive position. An internal recent hire is not a substitute for that band.

## Two basis checks that generalize

An annual total of 96,000 with a bonus explicitly equal to 20% of base gives base = 96,000 / 1.20 = 80,000. If instead the bonus is 20% of total, base = 96,000 x 0.80 = 76,800. State which denominator the input supplies; the formulas are not interchangeable.

A genuine employee's monthly base of 4,200 paid exactly thirteen times per year annualizes to 54,600. A contractor quoting the same monthly figure does not become employee-base evidence through that multiplication. Employment arrangement and numeric conversion are separate eligibility questions.

For the real request, finish the register using only its facts. Resolve any count or calculation mismatch before calling read_reference for `references/client-brief.md`.
