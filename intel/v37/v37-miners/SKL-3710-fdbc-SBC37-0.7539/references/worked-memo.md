# One deal worked from artifacts to memo

An invented deal. It shows the artifacts and the finished memo. Your memo is built only from the artifacts you were given: different rows, different comps, different numbers, and often a different verdict.

## The artifacts (invented)

Risk classification table, as received:

| Finding | Tier | Status |
|---|---|---|
| Gas-safety accreditation: external audit found lapses at two depots; re-audit booked | Must-Address | In-Progress |
| Largest customer, a restaurant group, is 34% of recurring revenue; contract ends in 7 months | Must-Address | Resolved |
| Service-van fleet lease expires in 10 months; replacement terms not quoted | Manageable | |
| Twelve engineers claim unpaid overtime; claim value put at $0.3M | Manageable | Unresolved |
| Closed defined-benefit pension scheme shows a $4.1M deficit at its last valuation | Informational | Unresolved |

Financial narrative, in short: Tessaly Kitchens Ltd services commercial kitchen equipment. LTM revenue $26.0M, of which $3.0M is a one-off installation project; recurring maintenance revenue is $23.0M, up 12%. Gas appliances are about 70% of service visits. Gross margin 44%. EBITDA $3.0M; the seller presents adjusted EBITDA of $3.9M, adding back a $0.4M depot-closure cost and $0.5M of "growth investment". Renewal with the restaurant group is agreed in principle; nothing is signed. Asking price $60M enterprise value.

Comparables dataset:

| Comparable | EV/Revenue | EV/EBITDA | Growth | Gross margin |
|---|---|---|---|---|
| Alder Facilities Services | 1.6x | 11x | 10% | 46% |
| Brookvale Technical | 1.9x | 13x | 14% | 48% |
| Corran Maintenance | 1.4x | 9x | 7% | 42% |
| Dunmore Service Group | 2.0x | 14x | 15% | 50% |
| Elswick Kitchens (bought by a trade buyer 26 months ago) | 3.4x | 24x | 31% | 61% |

## The memo

# IC Memo: Tessaly Kitchens Ltd

## 1. Deal Thesis

Tessaly services commercial kitchen equipment under maintenance contracts: $23.0M of recurring revenue growing 12%, a 44% gross margin and $3.0M of EBITDA. The attraction is a repeat-visit, contracted revenue base. The primary risk is the gas-safety accreditation lapse at two depots (R1), because gas appliances are about 70% of service visits. The second is that the customer behind 34% of recurring revenue has not signed its renewal (R2). The seller asks $60M enterprise value; section 3 tests that against the comparables, and both the risk position and the price need work before the committee can approve.

## 2. Risk Table

| ID | Finding | Tier | Status | Reads as | Mitigation or flag |
|---|---|---|---|---|---|
| R1 | Gas-safety accreditation lapses at two depots; re-audit booked | Must-Address | In-Progress | Open | Re-audit result needed |
| R2 | Restaurant-group customer, 34% of recurring revenue, contract ends in 7 months | Must-Address | Resolved | Open | FLAG: narrative says renewal unsigned |
| R3 | Fleet lease expires in 10 months; no replacement quote | Manageable | blank | Open | Condition to completion: replacement lease, deal team |
| R4 | Overtime claim by twelve engineers, $0.3M | Manageable | Unresolved | Open | Specific indemnity for $0.3M, seller |
| R5 | Pension deficit of $4.1M at last valuation | Informational | Unresolved | Open | FLAG: tier questioned |

Flags:
- R2, status: the risk table says Resolved; the financial narrative says the renewal is agreed in principle and unsigned. Read as open; the upstream status is shown unchanged.
- R5, tier: Informational upstream, yet a $4.1M deficit is a claim on value of the same order as the EBITDA. Tier left as given; if the risk analyst moves it to Manageable it needs a price mechanism and the verdict would not change.
- R3, status: blank upstream, read as open.

## 3. Valuation Range

- Base: $26.0M reported LTM revenue − $3.0M one-off installation project, kind (a) = $23.0M. Still in the business but at risk, so kept in: the restaurant-group customer (34% of recurring revenue), which has not cancelled.
- Multiple: EV/Revenue leads because it is supplied for every comp; EV/EBITDA is the cross-check.

| Comparable | Multiple | Growth | Margin | In or Out | Reason |
|---|---|---|---|---|---|
| Alder Facilities Services | 1.6x | 10% | 46% | In | Contract maintenance peer |
| Brookvale Technical | 1.9x | 14% | 48% | In | Contract maintenance peer |
| Corran Maintenance | 1.4x | 7% | 42% | In | Contract maintenance peer |
| Dunmore Service Group | 2.0x | 15% | 50% | In | Contract maintenance peer; passes the outlier test |
| Elswick Kitchens | 3.4x | 31% | 61% | Out | Transaction price paid by a trade buyer |

- Outlier test: Dunmore Service Group growth 15% − highest other growth 14% = 1 point; stays In.

| Metric | In values, ascending | Median | Target | Target vs median |
|---|---|---|---|---|
| EV/Revenue | 1.4x, 1.6x, 1.9x, 2.0x | (1.6 + 1.9) ÷ 2 = 1.75x | - | - |
| Gross margin | 42%, 46%, 48%, 50% | (46 + 48) ÷ 2 = 47% | 44% | below |
| Growth | 7%, 10%, 14%, 15% | (10 + 14) ÷ 2 = 12% | 12% | in line |
| EV/EBITDA | 9x, 11x, 13x, 14x | (11 + 13) ÷ 2 = 12x | - | - |

- Size: not in the dataset.
- Endpoints: Case A, margin below and growth not above, so lowest In multiple to the median. 1.4x × $23.0M = $32.2M; 1.75x × $23.0M = $40.3M.
- Asking price: $60M ÷ $23.0M = 2.61x; median 1.75x: above; highest In 2.0x: above.
- Cross-check: seller's $3.9M adjusted EBITDA is $3.0M + $0.4M depot closure + $0.5M "growth investment"; only the closure is a named one-off, giving $3.4M. 12x × $3.4M = $40.8M, at the top of the range.

**Range: $32.2M to $40.3M enterprise value**

## 4. Recommendation

**Recommendation: Request More Data**
Two Must-Address rows are open: R1 is In-Progress, and R2 is marked Resolved while the narrative shows the renewal unsigned. Both can be closed by documents, and nothing in the artifacts says either is beyond cure, so this is not a Pass. A clean re-audit and a signed renewal would make Proceed available, with the R3 and R4 mitigations as conditions and a price inside the range.

## 5. Conditions and Next Steps

- **R1, gas-safety accreditation:** seller to supply the re-audit report for both depots; a pass with no outstanding actions closes the row.
- **R2, restaurant-group renewal:** seller to supply the signed renewal, with term and termination rights; an unsigned draft leaves the row open.
- **R3, fleet lease:** deal team to obtain a written replacement quote; the replacement lease becomes a condition to completion.
- **R4, overtime claim:** legal to confirm the $0.3M claim value from the claim papers; carry it as a specific indemnity.
- **R5, pension deficit:** risk analyst to confirm the Informational tier against the $4.1M deficit; finance to obtain the latest scheme valuation.

## How the memo changes in other situations

**The gate opens (Proceed).** Had the artifacts shown a clean re-audit and a signed renewal, every Must-Address row would be closed, and R3 and R4 each take a mitigation (a mechanism and who carries it; "amount to be set from the replacement quote" where the finding gives no figure). The same holds for a table with no Must-Address rows at all. The verdict line becomes "**Recommendation: Proceed**", and the paragraph names the mitigations it relies on. Section 5 turns from requests into protections: "**R3, fleet lease:** replacement lease signed as a condition to completion", "**R4, overtime claim:** specific indemnity for $0.3M". Closed rows get a bullet only where their evidence must be repeated as a warranty. The price position is stated against the range.

**The blocker cannot be cured (Pass).** Pass needs the artifacts themselves to say the blocker is beyond cure: for example, an operating licence that by its own terms ends on a change of control, with the narrative stating that the licensing body has confirmed it will not reissue. Section 5 then says what would bring the deal back and what the seller is told. A counterparty that will withdraw unless some condition is met, or a filing that has simply not been made, is curable: Request More Data.

**Upstream uses other tier labels.** If the table came in as Severe, Medium and Minor, the Tier cell reads "Must-Address (upstream: Severe)" and one line under the table says the labels were mapped by rank and no finding was re-tiered. With four labels, such as Severe, High, Medium and Minor, only Severe maps to Must-Address, Minor to Informational, and both middle labels to Manageable; if a High finding looks like a deal-breaker, that is a flagged observation, not a reason to map it upward.

**Inputs are missing.** No status column: every row is open, said once under the table, and no Must-Address row can support Proceed. No asking price: say there is none and let the range stand alone. No EV/EBITDA in the comps: no cross-check, and say so. A whole artifact absent, such as no comparables: section 3 states that no range can be derived and gives no figure, the verdict is Request More Data with that artifact as the first request, and all five sections still appear. The same holds with no risk table: section 2 says none was supplied and lists no rows, the gate cannot run, and the verdict is Request More Data.

**A Resolved row with nothing against it.** Had the narrative been silent on the restaurant-group renewal, R2 would read as Closed. It would carry at most one confirmatory bullet ("seller to warrant the signed renewal") and the recommendation would treat it as closed. Only another artifact can reopen a status; the row's own description of the risk cannot. Because it is a Must-Address row, the Flags list would say so openly: "R2, status: Resolved upstream; no evidence of the resolution is in the artifacts. Accepted as closed, subject to the confirmatory condition." Customers that have already cancelled are different from all of this: they are gone and are subtracted from the base.

**Revenue at risk is not revenue gone.** The 34% customer stays in the $23.0M base because it has not left; only the $3.0M the narrative calls one-off is subtracted. Revenue that would be lost "if" a contract ended or a programme closed, or a figure auditors have not yet signed off, is treated the same way: it stays in the base, is named on the "kept in" part of the Base bullet, and lives in the table as a risk row.

**The asking price can sit between the two markers.** An ask of $43M would be $43M ÷ $23.0M = 1.87x; median 1.75x: above; highest In 2.0x: below. Compare the three numbers one at a time.

**The other two range cases.** Had Tessaly's margin been 49% (above the 47% median) with growth in line, it would be Case B: median to highest In multiple, 1.75x × $23.0M = $40.3M to 2.0x × $23.0M = $46.0M. Had margin been 47% and growth 12%, both in line, it would be Case C: set aside the lowest (1.4x) and the highest (2.0x) In multiples, and the range runs across the remaining ones, 1.6x × $23.0M = $36.8M to 1.9x × $23.0M = $43.7M.

**The outlier test runs on what is left.** Elswick left the set first, as a transaction price. The test then looks at the highest remaining multiple (Dunmore, 2.0x): its growth is only 1 point above the next, so it stays In. Had a listed comp shown the highest multiple with growth 10 or more points beyond every other comp, its row would read "Out: outlier, gap of n points".

## Writing your memo

Your next message is the finished memo for the artifacts you were given, in their currency. Its first line is `# IC Memo: [target name]`. Nothing comes before that line, and nothing follows the last condition bullet.
