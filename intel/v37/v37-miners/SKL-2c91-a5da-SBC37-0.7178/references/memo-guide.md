# Memo guide

Companion to SKILL.md. Read it once, then write the memo. The worked memo and the cases use invented deals in unrelated industries: they show the reasoning move, not content to reuse.

## 1. Reading the three artifacts

- Risk classification table: the findings, each with a tier and usually a status. It records the risk analyst's judgment. You carry it; you do not correct it.
- Financial narrative: the figures (revenue, growth, margins, EBITDA, cash, debt, concentration, the asking price) and often remarks that bear on a finding's status. Read every sentence against the table.
- Comparables dataset: the comp rows and their metric columns. Notes under it (a comp that is really an acquisition, a metric that was not provided) are part of the dataset.

A note appended by an upstream analyst ("flagging for the memo author") tells you what to surface. It is not permission to re-tier.

Missing artifact: name it on the basis line and in the section that needed it, and do not reconstruct it. No risk table means Section 2 says so and the verdict is Request more data. No comps means no range. No narrative means no base. An asking price that is not stated is "not provided", never inferred from the multiples.

## 2. Status, tier and flags

| Upstream status | Gate |
|---|---|
| Resolved, closed, cleared, remediated, and no other artifact contradicts it | Closed |
| Unresolved, open, outstanding | Open |
| In progress, pending, under appeal, in discussions, partial | Open |
| "Substantially resolved", "expected to resolve", verbal assurance only | Open |
| Blank, missing column, "TBD", "n/a" | Open (status not stated) |
| Resolved, but the narrative or an analyst note shows the matter is still live | Open - status contested |
| Any status on an informational row | Context |

A contested status is not yours to rewrite. The Status cell keeps the upstream word, the Gate cell carries your reading, and the flag line explains the difference. A "resolved" is contested when another artifact says so: the financial narrative reports the matter as live, deferred, under review, undocumented or waiting on a third party's sign-off, or an analyst's note says the status may be wrong. The finding's own description is not enough, and neither is silence. Every finding describes a risk, and "resolved" means the risk analyst judged it dealt with: "licence needs the licensor's consent on a sale, Resolved" stays Closed when the narrative says nothing about it, and you do not add "consent not obtained" to the finding. Only a statement in another artifact that the matter is still live reopens it, and the flag quotes that statement ("the narrative says the renewal 'decision is due next quarter'"). If you cannot quote such a sentence, there is no contest and the row is Closed. A narrative that repeats the size of the exposure ("this customer is 44% of revenue") without saying the matter is pending has not contradicted the status.

Standard tier definitions. Must-address: left open, it could end the deal or force a reprice, so it has to be closed before the committee can approve. Manageable: a real exposure that a specific protection can contain. Informational: context that needs no action before the vote.

Tiers are carried the same way as statuses. If a finding tiered manageable describes a consequence that fits the must-address definition, or a finding tiered informational is what the narrative itself calls a warning sign, the Tier cell stays as given and a flag line says so, for example: "R3: tiered Manageable upstream, but the finding describes the loss of the licence the revenue depends on; carried as given, not re-tiered; counted as manageable for the verdict; risk analyst to confirm before the vote." The gate count uses the upstream tier. A flagged row still gets its own bullet, and the recommendation names it as the caveat.

Wording that keeps the record honest: "carried as given", "not re-tiered", "treated as open for the recommendation". Wording to avoid: "we have upgraded this", "this is really a must-address", or quietly writing a different tier or status in the table.

Other label sets (Critical / Moderate / Low, High / Medium / Low, red / amber / green): keep them in the Tier column, and add under the table one line such as "Tier reading: Critical is read as must-address, Moderate as manageable, Low as informational." The gate count then uses the standard names.

## 3. Building the range

Base. Use the figure a buyer actually acquires, on the same definition as the comps' metric. That is normally the whole of LTM revenue: do not cut it down to its recurring share, a segment or a product line, because the comps' multiples are quoted on their whole revenue too.
- One-off items the narrative identifies come out: LTM revenue of $24.0M that includes a $3.0M one-time project gives a base of $21.0M. Quote the growth rate of the base you kept.
- Revenue that will not transfer comes out (a grant, a contract that ends on change of control), with the reason.
- If the comps are quoted on net revenue, apply the multiple to net revenue, never to a gross figure.
- Losses already known but not yet in LTM (customers who have given notice) give a second, lower base: show the range on both and say which is the stated one.
- EBITDA is the reported figure. A seller's "adjusted EBITDA" is quoted as the seller's view; its add-backs are named, not accepted.

Who is in the set. Every comp is named once, as included or excluded, and included plus excluded equals the rows in the dataset. Two tests decide, reported on the Screen line, and a comp that meets either goes onto the Excluded line with a one-line reason:
- Precedent transaction: an "acquired" row, a deal from a banker's or broker's deck, anything carrying a control or strategic premium. It is a price paid once, not a trading level, and often stale as well.
- Outlier: it holds the highest or the lowest multiple in the set, and its growth lies more than 10 points beyond both the nearest other comp's growth and the target's. Rank the comps by growth to find the nearest one. Write the two subtractions so the test can be checked: "growth 52% - 35% nearest comp = 17 points; 52% - 20% target = 32 points; both over 10: excluded". Growth of 29% when the next-highest comp shows 23% is 29 - 23 = 6 points: it stays in, however far it sits from the target and however high its multiple. Both gaps must exceed 10; one is not enough.

A comp that meets neither test stays, including one whose EBITDA multiple is "NM" (it simply drops out of the EBITDA cross-check). The Screen line reports both tests, for example: "Screen: no precedent transactions; outlier test on the highest multiple, Kestrel (1.6x): growth 14% - 11% nearest comp = 3 points, under 10, stays in". A comp whose gaps come out at 10 points or under has passed the screen: it is not excluded, and its name goes on the Included line. The Excluded line then reads "none".

Medians. Write the included multiples out in ascending order. Even count: the mean of the middle two, with the sum shown: "3.2, 3.6, 4.0, 4.4 -> (3.6 + 4.0) / 2 = 3.8x". Odd count: the middle value itself, with no arithmetic: "3.2, 3.6, 4.0 -> 3.6x" and "2.9, 3.2, 3.6, 4.0, 4.4 -> 3.6x". A median is never the average of the whole list, and with five values it is the third, not the mean of the third and fourth. Do the same for the included comps' growth and margin columns, and for the EBITDA multiples in the cross-check. A list left in table order gives the wrong middle. Writing the sorted list is what keeps the median right, and it lets the committee check it. Keep the exact value (1.95x, 13.5%): do not round a median before using it.

Adjustments. Each has a direction and the two numbers behind it, and anything within three points is neutral, never "slightly" up or down:
- Growth: target 12% against a comp median of 21%: down.
- Margin: target 64% against a comp median of 63%: neutral.
- Size: if the dataset gives comp revenue or enterprise value, compare. If it does not, write "comp scale is not in the dataset; no size premium assumed, down if anything (assumption)" and leave size out of the net.

A caveat written under the comp table belongs to the dataset. If a note says a comparison may be distorted or that a breakdown was not provided (business mix, segment margins, a missing multiple), repeat it on the Adjustments line as a limitation of that comparison and name who could supply the missing figure. Never fill the gap with your own estimate of the comps' mix or scale.

Bracketing. The range comes from the included comps, not from a percentage haircut. Two anchors: the low anchor is the midpoint of the lowest included multiple and the median; the high anchor is the midpoint of the median and the highest included multiple. Then:
- net down (more factors down than up): low anchor to median;
- net up: median to high anchor;
- neutral (all neutral, or one up and one down): low anchor to high anchor.

Example: included 3.2x, 3.6x, 4.0x, 4.4x; median 3.8x; low anchor (3.2 + 3.8) / 2 = 3.5x; high anchor (3.8 + 4.4) / 2 = 4.1x. Net down gives 3.5x-3.8x, and on a $21.0M base "3.5x-3.8x x $21.0M = $73.5M-$79.8M". Show the anchor sum on the Range line, then round each end of the range to one decimal place before multiplying (1.775x becomes 1.8x, 4.05x becomes 4.1x, 18.25x becomes 18.3x): a one-decimal multiple keeps the product easy to get right. Check both products before writing them.

Cross-check. Use EBITDA on the same base as the revenue figure: if one-off revenue was stripped and the narrative gives EBITDA without it, that is the figure, and if it is negative the cross-check is not available. When that EBITDA is positive and at least three included comps show a meaningful EV/EBITDA, take the median of those multiples (sorted list again) times EBITDA: one product. If it lands inside the range or within 20% of either end, say so and the revenue-based range stands. If it lands more than 20% below the range, run the implied-margin test: a comp's implied EBITDA margin is its EV/Revenue divided by its EV/EBITDA (3.6x / 20x = 18%). A target whose EBITDA margin is well below the comps' implied margin is being priced by the revenue method for profit it does not earn. Then the conclusion is fixed: bracket the EV/EBITDA multiples by the same anchor rule, and that EV/EBITDA range is the stated range of the memo; the revenue-based figure is mentioned only as what the business would be worth at comp-level margins. Do not average the two and do not leave both standing.

Against the ask. The asking price divided by the same base gives the implied multiple: $90M / $21.0M = 4.3x, above the range. If the seller computed its multiple on something else (full LTM, gross revenue, adjusted EBITDA), say so. Enterprise value is before net debt: mention cash and debt only if the artifacts give them, and do not net them into the range.

## 4. Choosing the verdict

The gate is mechanical on purpose: the judgment went into reading each row Open or Closed, and the count line records it.
- Must-address Open is zero: Proceed. You name the mitigation for every Open manageable row: a specific protection that fits the finding and is sized from the artifacts (an escrow equal to the assessed claim, a consent as a closing condition, a retention agreement for the named person, a holdback equal to the quoted capex). The upstream table never lists mitigations, so their absence there is no reason to hold back. "Monitor" or "manage after close" is not a mitigation.
- Must-address Open is one or more: Request more data is the default. Evidence, an opinion or a third party's answer would close the row or let it be priced: a closure letter, a renewed certificate, a consent, an audit opinion, a contract award, litigation counsel's assessment. Name it. A lawsuit not yet decided, a review still running or a counterparty's conditional position is an unknown, and unknowns are requests.
- Pass only when the artifacts already record the answer as no for one of those rows: the counterparty has refused in terms that cover this buyer, the right cannot legally pass to this kind of buyer, the asset lapses before its value can be earned. Say what would have to change for the committee to look again.

With several must-address rows Open, the hardest one decides between Request more data and Pass. Softening a blocked deal into "proceed with conditions" contradicts the table. So does blocking a deal whose count shows zero must-address Open because a resolved row still feels uncomfortable, a manageable row is flagged, or the ask is high: those become conditions and caveats under a Proceed. An ask above the range is a price condition under Proceed, a negotiating fact under Request more data, and supporting context under Pass.

## 5. Conditions that can be assigned

| Verdict | Weak | Assignable |
|---|---|---|
| Proceed | Mitigate the tax exposure | R4: Tax counsel to agree an escrow equal to the assessed amount plus interest, released on the final ruling, in the purchase agreement before signing |
| Proceed | Keep the key engineer | R5: HR lead to sign a two-year retention agreement with the named engineer as a closing condition |
| Proceed | Price | R2: Deal lead to hold the price at or below the top of the range, with any excess moved into an earn-out tied to the flagged contract's renewal |
| Request more data | Follow up on the regulator | R2: Regulatory counsel to obtain the regulator's written closure letter from the seller's counsel within 15 business days; closure without continuing undertakings reopens a Proceed |
| Pass | Revisit later | R1: Re-engage only if the grantor confirms in writing that the concession passes to a non-operator owner |

Owners: deal lead, legal counsel, regulatory counsel, tax counsel, IP counsel, financial diligence lead, commercial diligence lead, HR lead, operations lead, and the upstream risk analyst for a flagged tier or status. Deadlines hang on a real event: before the vote, before signing, at closing, within N business days. Under Request more data, an Open manageable row's bullet asks for the document that lets its protection be sized.

## 6. Worked memo and cases

The request gave a risk table of four findings, a financial narrative and five comps for a veterinary group. The memo, complete:

# IC Memo: Brightwell Veterinary Partners
Basis: risk classification table (4 findings), financial narrative, comparables dataset (5 comps). Seller's ask: $48M enterprise value.

## 1. Deal Thesis
Brightwell runs 22 veterinary clinics and a referral hospital, with LTM revenue of $36.0M (including a $2.0M one-off insurance recovery), 6% growth and reported EBITDA of $4.4M. The attraction is the hospital, which earns 38% of revenue and feeds the clinic network with referrals. The seller asks $48M. The primary risk is that hospital's controlled-drugs licence renewal (R1): the risk table marks it resolved, but the financial narrative shows the inspector has not yet decided, and without the licence the hospital cannot operate.

## 2. Risk Table
| ID | Finding | Tier | Status | Gate | Memo note |
|---|---|---|---|---|---|
| R1 | Controlled-drugs licence for the referral hospital (38% of revenue) up for renewal | Must-Address | Resolved | Open - status contested | Hospital cannot operate without it |
| R2 | Payroll tax underpayment of $0.6M assessed for 2023 | Manageable | Unresolved | Open | Escrow of the assessed amount plus interest |
| R3 | Largest clinic's lease expires in 8 months; renewal offered | Manageable | Resolved | Closed | Resolved upstream; nothing in the artifacts reopens it |
| R4 | Client survey scores fell at two clinics | Informational | Unresolved | Context | No action before the vote |

Gate count: must-address 1 row, 1 Open; manageable 2 rows, 1 Open.
Flagged for the committee: R1 is marked Resolved upstream, but the narrative says the renewal application is lodged and the decision is due next quarter; carried as given, not re-tiered; treated as open for the recommendation; risk analyst to confirm.

## 3. Valuation Range
- Multiple: EV/Revenue, which every comp reports; EV/EBITDA as cross-check.
- Base: $36.0M LTM revenue - $2.0M one-off insurance recovery = $34.0M.
- Screen: Alder Veterinary (2.3x) was bought last year by a pet-food group at a strategic premium, so it is a precedent transaction. Outlier test on the highest remaining multiple, Kestrel (1.6x): growth 14% - 11% nearest comp = 3 points, under 10, stays in.
- Excluded: Alder Veterinary (2.3x): a price paid once for control, not a trading level.
- Included: Northfield Vets (1.2x), PawCare Group (1.4x), Riverside Animal Health (1.0x), Kestrel Pet Hospitals (1.6x).
- Medians of included set: multiples 1.0, 1.2, 1.4, 1.6 -> (1.2 + 1.4) / 2 = 1.3x; growth 5, 8, 11, 14 -> (8 + 11) / 2 = 9.5%; gross margin 40, 43, 45, 47 -> (43 + 45) / 2 = 44%.
- Adjustments: growth down (6% vs 9.5%); margin down (40% vs 44%); size: comp scale is not in the dataset, no premium assumed (assumption).
- Range: net down, so low anchor to median: (1.0 + 1.3) / 2 = 1.15x, rounded to 1.2x; 1.2x-1.3x x $34.0M = $40.8M-$44.2M.
- Cross-check: EV/EBITDA of the included comps 8, 9, 10, 11 -> (9 + 10) / 2 = 9.5x; 9.5x x $4.4M reported EBITDA = $41.8M, inside the range, which stands.
- Against the ask: $48M / $34.0M = 1.41x, above the range.

## 4. Recommendation
**Request more data**
- Decided by: R1, a must-address row still open, since the narrative shows the licence renewal is undecided.
- Price: the $48M ask sits $3.8M above the top of the range, a price point once R1 closes.
- Would change it: the inspector's renewal decision, granted without new conditions, moves this to Proceed.

## 5. Conditions and Next Steps
- R1: Regulatory counsel to obtain the inspector's written renewal decision from the seller before the vote; a renewal without new conditions reopens a Proceed.
- R2: Tax counsel to obtain the 2023 assessment notice and the seller's payment position within 10 business days, so the escrow can be sized.

Shorter cases, each for one move:
1. Dental laboratory. Two must-address rows are both Resolved (a supply contract terminable on notice, a trademark opposition) and nothing in the narrative reopens them, so both are Closed even though each still reads uncomfortably. Two manageable rows are Unresolved: a disputed supplier invoice of $0.4M and a founder-technician with no successor. Gate count: must-address 2 rows, 0 Open; manageable 2 rows, 2 Open. Verdict: Proceed, with an escrow of the disputed amount and a retention and handover agreement as closing conditions, the price held inside the range, and one bullet for each Closed must-address row asking for the paper that resolved it (the amended supply contract, the withdrawal of the opposition) as a closing deliverable.
2. Software reseller with no must-address rows at all. A row tiered Informational records a retention rate that the narrative itself calls a warning sign. It is flagged, its tier is carried, and it gets a bullet. The count still shows zero must-address Open, so the verdict is Proceed with conditions, not a request.
3. Language-school chain. The table has Finding and Tier (High / Medium / Low) and no Status column. Every Gate cell reads "Open (status not stated)", a line under the table reads High as must-address, and the count shows two must-address rows Open. Verdict: Request more data; the first bullet asks the risk analyst for the status of each High row.
4. Car-park operator with EBITDA of $2.0M on $25.0M revenue, an 8% margin. Its comps trade near 2.0x revenue and 10x EBITDA, an implied margin of 20%. The revenue method gives about $50M and the EBITDA method about $20M. The cross-check lands far below the revenue range and the target's 8% is well under the comps' implied 20%, so the memo's stated range is the EV/EBITDA bracket, and the revenue figure appears only as the value at comp-level margins.
5. Ferry operator: the comparables dataset was not attached. The basis line says "comparables dataset: not provided", Section 3 says no range can be derived, and no multiple is supplied from memory. Verdict: Request more data, and the last bullet asks for the comp set.
6. Quarry operator: the extraction permit (Must-Address, Unresolved) lapses on a change of control, and the narrative records that the authority has refused a transfer to a financial buyer. No document cures that: Pass. The bullets say what would reopen the file.

## 7. Writing the reply

The reply is the memo itself, written once, top to bottom, in the shape of the worked memo above and with this deal's own facts. Its first line is the title "# IC Memo: <target name>", and nothing comes before it: no sentence about the skill, this guide, the steps or what you are about to do, and no working notes. Keep the five headings exactly, each section inside its bound, and the whole memo at about 650 words so the recommendation and conditions are never cut off. Nothing follows the last bullet of Section 5: no summary, no sign-off and no offer of further help.
