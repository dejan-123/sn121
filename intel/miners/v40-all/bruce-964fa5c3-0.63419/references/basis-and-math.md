# Basis and math: formulas with direction checks

Invented figures throughout. Do the arithmetic on the input's numbers, keep one decimal place for percentages, and re-derive any figure you are about to print once more before sending; a single slipped digit caps how much a careful analysis is worth.

## Core formulas

| Quantity | Formula | Sanity check |
|---|---|---|
| Range midpoint | (min + max) / 2 | sits exactly between the ends |
| Market reference from offers | median of comparable accepted offers (mean of the middle two if even) | lies between the lowest and highest offer |
| Market reference from ranges | average of comparable range midpoints | only when no comparable offer survives |
| Gap | (band midpoint - market reference) / market reference | negative when the band is lower |
| Range penetration | (pay - band min) / (band max - band min) | 0% at min, 100% at max |
| Compa-ratio | pay / band midpoint | 1.00 at midpoint |
| Band spread | (max - min) / min | professional bands often run 30% to 50% |
| Midpoint progression | (upper level midpoint / lower level midpoint) - 1 | adjacent IC levels often step 10% to 20% |

The gap is measured against the market reference, not against the band, so the denominator is the market figure. Example: band midpoint $143,600, market reference $151,900. Gap = (143,600 - 151,900) / 151,900 = -8,300 / 151,900 = -5.5%. Using the band as the denominator would print -5.8%, a different number a reader cannot reconcile.

## Converting to base, both directions shown

- Total cash $126,800 including a stated $11,600 bonus: base = 126,800 - 11,600 = $115,200. Smaller than the total, as it must be.
- Total cash $126,800 with a stated 10% target bonus: base = 126,800 / 1.10 = $115,273. Dividing, not subtracting 10% of the total (which would give $114,120 and understate base).
- OTE range $171,500 to $204,500 with a stated 60/40 base/variable split: base range = $102,900 to $122,700; midpoint $112,800. Apply the share to each end, then take the midpoint.
- Part-time salary $58,400 at 0.8 FTE: full-time equivalent = 58,400 / 0.8 = $73,000. Larger, as it must be.

## Currency, with a rate supplied

Suppose the input says 1 EUR = 1.09 USD.
- EUR 84,500 to USD: 84,500 x 1.09 = USD 92,105. Euros times dollars-per-euro gives dollars.
- USD 92,105 to EUR: 92,105 / 1.09 = EUR 84,500.
If the result moved in the wrong direction (a euro amount shrinking when converted to dollars at a rate above 1), the rate was applied upside down. With no rate in the input, nothing is converted and the reply says so in one clause.

## Why some figures are never converted

- Contractor rates: $88 an hour x 2,080 hours = $183,040 looks like a salary but includes what an employer would spend on benefits, payroll tax and idle time, typically 25% to 40% on top of salary; the comparison would make almost any band look low.
- Retention and acquisition grants: their size depends on the deal, not the job.
- OTE or equity-inclusive totals without a split: any split you assume decides the verdict, which means the verdict would be yours, not the evidence's.

## Rounding and display

Compute on full figures, display shorthand ($115.2k). Show a percentage with its sign. When a gap sits within a rounding step of a position threshold (-4.96% and -5.04% both display as -5.0%), show two decimals for that row so the position is visible; never round across a threshold to make a nicer story.
