# Basis and exclusions

Use this when a row's pay category is unusual, mixed, or not obviously annual base salary.

## Why some categories never enter the pool

A band is a standing price for a job: recurring base salary for a salaried employee. A figure answers the same question only if it is also a recurring salaried price. The categories below are payments for something else, so no amount of arithmetic makes them comparable.

| Category | What the money is actually for | Typical tell in the row |
|---|---|---|
| Retention grant | keeping a specific person through an event | "retention", "stay bonus", vesting tied to a date |
| Acquisition package | terms negotiated in a deal, often inflated | "acquisition", "acqui-hire", "transaction" |
| Sign-on payment | one-off inducement, not recurring | "sign-on", "one-time", "first-year" |
| Contractor or hourly rate | labour plus the contractor's own taxes, benefits and idle time | "per hour", "per day", "contract", "not FTE" |
| Equity-heavy mix | base deliberately held low in exchange for ownership | equity value larger than cash, "below-market base" |
| Cash-heavy mix | variable pay dominates, base is a floor | commission or bonus larger than base |
| Total with no breakdown | unknown share of base | "total comp", "package", "all-in" with no split |

Rules:

- Exclude on the category, not on the size of the figure. A retention-inflated figure that happens to look plausible is still excluded.
- The type column is a label someone else applied. The notes column is where the category usually shows. When they disagree, the note wins.
- Name the reason in the drop log using the category, so the reader can see it was a deliberate exclusion.
- An excluded row is counted in the family's dropped total. It is never mentioned again as supporting colour.
- Do not multiply an hourly rate by a year of hours. The result looks like a salary and is not one.

## Out-of-window and undated rows

- Use the explicit cut-off given in the input over any "last N months" phrasing; if only the phrasing is given, count back from the retrieval date.
- The cut-off month itself is inside the window. Call such a row a boundary row so the reader knows it is the oldest admissible point.
- An undated row is excluded: its age cannot be shown to be inside the window.
- Do not age stale figures forward with a growth rate. No rate is supplied, and an aged figure is an invented one.

## Conversions

The target basis is always the internal band's basis: annual base salary, in the band's currency. Direction is external row to internal basis.

**Allowed, when the input gives the parts:**

- Total minus stated bonus or variable equals base. Example of the written form, with invented figures: `row 7: 131,500 total - 14,500 stated bonus = 117,000 base`.
- On-target earnings minus stated variable equals base.
- Currency at a rate the input supplies. Write the rate and the direction: `row 9: 61,000 in currency A x 1.20 (supplied rate, A to band currency) = 73,200`.

**Not allowed:**

- A bonus percentage, variable split or exchange rate from general knowledge.
- Converting the band into the row's currency or basis. That changes the thing being assessed.
- Converting a range's endpoints differently from each other.

When the parts are not supplied, the row is dropped as "basis not convertible" and counted. A figure labelled on-target earnings with no split is the common case: it cannot be compared with a base band, and treating it as base overstates the market.

**Currency without a rate.** If a band is in one currency and a row is in another with no rate supplied, the row cannot be converted. It will usually also fail geography, since it comes from another country; record both reasons. Rows in the band's own currency are compared directly, and the verdict for that family is stated in that currency.

**Mixed internal labels.** If the snapshot marks some bands as base and others carry no label, treat unlabelled bands as base unless the input says otherwise, and say that you did.

## Order of operations

Exclude first, convert second, score comparability third. A row excluded by category is not converted, and a converted row is scored on its converted figure. This order keeps a non-comparable figure from being tidied into something that looks usable.
