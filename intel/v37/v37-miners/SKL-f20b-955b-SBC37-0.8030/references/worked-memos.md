# Worked IC memos (invented deals)

Three invented deals in sectors unlike yours, each read with the six tests from SKILL.md. Memo A is written in full: copy its discipline, not its facts. Memo B shows how a clean deal reads. Case C shows the rare decline and the near miss beside it. Part D lists the calls that flip when one fact changes. Part E is the skeleton your reply follows.

---

## Memo A: conditional go (full memo)

**Inputs in brief.** Brindle Route Systems sells dispatch-scheduling SaaS to regional waste haulers. Risk table: (1) the largest municipal contract, 27% of ARR, "Must-Address / Resolved"; (2) a copyleft open-source component inside the routing engine, remediation estimated at $0.7M over 5 months, "Must-Address / In-Progress"; (3) the founder holds the product domain and trademark personally, "Manageable / Unresolved"; (4) sales commissions capitalised inconsistently, "Informational / Resolved". Financial narrative: LTM revenue $24.0M, of which $2.0M is one-time data-migration projects; recurring revenue $22.0M growing 16%; recurring gross margin 73%; reported EBITDA $1.9M; seller's adjusted EBITDA $5.5M adds back $2.3M office relocation (invoiced, one-off) and $1.3M "growth hires". The narrative adds that the council has opened a public tender for that contract and Brindle has bid. Ask: $110M EV. Six comps, one acquired by a strategic buyer two years ago, one growing 61%.

**How the tests land.** Status test: row 1 says Resolved, but an open tender is a live exposure, so it is carried as contradicted. Base test: value $22.0M recurring, not $24.0M; reject the growth-hire addback (those salaries recur). Comp test: drop the strategic transaction and the 61% grower. Tier test: zero deal-breakers, because the tender loss would be large but is sized and priceable and the licence issue has a costed remedy. Recommendation rule: an open Must-address row means conditional.

The reply as it should be written:

**Working notes**
- Status: row 1's Resolved is contradicted by the open council tender, carried open; row 4's Resolved stands (presentation only).
- Tier: tiers already match; zero deal-breakers, since the tender loss is sized and the licence issue has a costed fix.
- Base: recurring revenue only; one-time migration projects stripped; growth-hire addback rejected.
- Comps: strategic transaction and the 61% grower excluded; Brindle sits at the included medians, so mid-set multiples.
- Range: EV/Revenue on recurring revenue, because reported EBITDA is too thin to price; ask restated on that base.
- Consistency: primary risk is the tender (row 1); an open must-address row gives a conditional go.

# IC memo: proposed acquisition of Brindle Route Systems

## 1. Deal thesis

Brindle gives us a recurring base of $22.0M in dispatch software for regional haulers, growing 16% with a 73% recurring gross margin. We value the recurring base only: the $2.0M of one-time migration projects in LTM revenue will not repeat. The primary risk is the municipal contract behind 27% of ARR, which the risk table lists as resolved while the financial narrative says the council has opened a public tender for it. Until the tender outcome is known, more than a quarter of the base we are pricing is contestable. The second risk is the copyleft component inside the routing engine, which has a costed fix but no completion evidence yet.

## 2. Risk table

| # | Finding | Upstream tier / status | Memo tier | What the artifacts show | Condition |
|---|---|---|---|---|---|
| 1 | Municipal contract, 27% of ARR | Must-Address / Resolved | Must-address (status contradicted) | Narrative: council has opened a public tender and Brindle has bid; nothing shows a renewal | C1 |
| 2 | Copyleft component in routing engine | Must-Address / In-Progress | Must-address (open) | Remediation estimated at $0.7M over 5 months; no completion or code-scan evidence | C2 |
| 3 | Founder holds domain and trademark | Manageable / Unresolved | Manageable | Personal ownership of brand assets the product trades under; curable by assignment | C3 |
| 4 | Commission capitalisation inconsistent | Informational / Resolved | Informational | Accounting presentation; no revenue or cash effect stated | None |
| 5 | Adjusted EBITDA addback for growth hires | Not in risk table | Manageable (valuation) | $1.3M of recurring salaries added back by the seller; rejected in the base | C4 |

Tier words match the memo tiers, so no mapping was needed. Count: 0 deal-breaker, 2 must-address, 2 manageable, 1 informational.

## 3. Valuation

| Comparable | EV/Revenue | Growth | Gross margin | Include? | Reason |
|---|---|---|---|---|---|
| Haulix Cloud | 4.6x | 18% | 74% | Include | Same model and buyer base |
| FieldOps Suite | 4.4x | 17% | 72% | Include | Same model |
| RouteWorks | 4.1x | 14% | 71% | Include | Same model |
| Civic Dispatch | 3.8x | 12% | 69% | Include | Same model, slower growth |
| Wasteline (acquired by a strategic buyer) | 5.9x | n/a | n/a | Exclude | Control premium; shown as ceiling only |
| BinTrack AI | 8.2x | 61% | 83% | Exclude | Growth 45 points above Brindle's |

The base is recurring revenue of $22.0M. EV/EBITDA is not used: reported EBITDA of $1.9M would imply multiples above 45x for any credible price, and the seller's $5.5M adjusted figure leans on $1.3M of salaries that recur. The four included comps run 3.8x–4.6x with a median of 4.25x ((4.1 + 4.4) / 2). Brindle's growth (16%) and margin (73%) sit at the included medians (15.5% and 71.5%), so we apply the middle of the set, 4.1x–4.4x.

Range: 4.1 × $22.0M = $90.2M to 4.4 × $22.0M = $96.8M.

The $110M ask is 5.0x recurring revenue ($110M / $22.0M), above the highest included comp (4.6 × $22.0M = $101.2M), and near the strategic transaction's 5.9x ceiling, which a trading set should not pay.

Sensitivity: if the tender is lost, the recurring base falls to $16.1M ($22.0M × 0.73), and at 4.1x the value is $65.8M. That gap, about $24.4M, is why row 1 decides the recommendation.

## 4. Recommendation

**Do not proceed until conditions are met (conditional go), at no more than $96.8M.** The committee should approve continued diligence and a revised offer, not signing. Row 1 blocks a plain proceed: the upstream table calls the anchor contract resolved, but the narrative shows an open tender, and losing it removes about $24.4M of value ($90.2M against $65.8M). Row 2 is open but costed, so it can be closed by completion evidence or protected by escrow. Nothing reaches deal-breaker: both exposures can be cured or priced before signing. If C1 and C2 close, the deal proceeds inside $90.2M–$96.8M; if the tender is lost, the offer resets to the sensitivity case.

## 5. Conditions and data requests

1. **C1 (row 1):** Obtain the council's tender documents and award timetable, and the outcome or a signed renewal, before signing. If the award is unknown at signing, make the price contingent on it; if lost, reprice to the $16.1M base.
2. **C2 (row 2):** Remediation of the copyleft component evidenced by an independent code-scan report before signing; otherwise hold an escrow equal to the $0.7M estimate until the scan is clean.
3. **C3 (row 3):** The founder assigns the domain and trademark to the company at close, as a closing deliverable.
4. **C4 (row 5):** The price is set on reported EBITDA and recurring revenue; the seller's growth-hire addback is not accepted.
5. **Data request:** Split of the $2.0M one-time revenue by customer and quarter, to confirm none of it recurs.

*Why this memo works:* the thesis names the primary risk, row 1 carries it, the recommendation cites it, C1 closes it, and the sensitivity shows its size. Upstream labels stay visible beside the memo's reading, so the committee sees the contradiction instead of a silent re-label.

---

## Memo B: proceed (condensed)

**Inputs in brief.** Tallis Veterinary Labs runs reference diagnostics for clinics. Risk table: (1) lab accreditation renewal, "Must-Address / Resolved", and the narrative quotes the renewed certificate, valid for two years; (2) the largest clinic group is 18% of revenue under a three-year contract whose change-of-control clause the customer has waived in writing, "Manageable / Unresolved"; (3) two lab managers retire within a year, "Manageable / Unresolved"; (4) courier rates rise next year, "Informational". LTM revenue $36.0M, growth 11%, reported EBITDA $6.0M (16.7% margin). Ask $82M.

**How the tests land.** Status test: row 1's Resolved is backed by a named document, so it stands, with the memo saying what evidences it. Row 2 is labelled unresolved but the written waiver answers the concentration question; keep it Manageable and confirm the waiver. Zero must-address findings remain open, so the rule gives Proceed. The ask is a price condition, not a reason to decline.

Valuation in brief: comps on EV/EBITDA, because Tallis and the peers are profitable on the same basis. Included: 11x, 12x, 13x, 14x (median 12.5x). Excluded: a genomic-testing peer at 21x growing 38%, which prices a different growth profile. Tallis' growth equals the included median (11%) and its margin is slightly below (16.7% against 17.5%), so the range is 12.0x–13.0x: 12.0 × $6.0M = $72.0M to 13.0 × $6.0M = $78.0M. The ask is 13.7x ($82M / $6.0M), above the range. Cross-check: the range is 2.0x–2.2x revenue ($72.0M / $36.0M, $78.0M / $36.0M), inside the included revenue multiples.

Recommendation line: **Proceed, at no more than $78.0M.** No must-address finding is open; the accreditation renewal is evidenced by the certificate the narrative quotes. Conditions are confirmatory: a copy of the certificate and the customer's written waiver before signing (rows 1 and 2), retention and handover plans for both lab managers as a closing deliverable (row 3), and the price capped at the top of the range.

What a weak memo does here: invents a reason to hold because a must-address label exists, or declines because the ask is above the range. A label that the artifacts evidence as closed does not block, and a high ask is answered with a price.

---

## Case C: the rare decline, and the near miss beside it

**Decline.** A waste-transfer operator earns 60% of revenue at one site whose operating permit renewal was refused, with the appeal route exhausted, per the narrative; no other permitted site exists. Test (a) unresolved: yes. Test (b) removes what the base depends on, at a size no range absorbs: yes, 60% of revenue stops. Test (c) no condition before signing can cure it: yes, no consent, escrow or price restores a refused permit. All three hold, so it is a deal-breaker and the call is **Do not proceed**, naming what would reopen the deal (a granted permit for an alternative site).

**Near miss.** A software target's routing engine runs on a third party's licensed library, and that licence cannot pass to a new owner without the licensor's consent. It looks fatal, but test (c) fails: consent is a condition the buyer can require before signing. It is Must-address, the call is conditional, and the condition names the written consent as the closing document.

Most alarming findings are near misses. A regulator inquiry described as "substantially resolved" without a closure letter, a licence needing consent, a sponsor or partner who will leave unless replaced, a tax reassessment under appeal: each is open and serious, and each has a condition that can close it. Keep Do not proceed for findings that pass all three tests.

---

## Part D: calls that flip when one fact changes

- **Status contradicted by the narrative or an analyst note:** carry it as unresolved, show both readings in the row, and make the contradiction a condition. A postponed review is not a closed review.
- **Status column missing or blank:** treat every row as unresolved, say the status column is missing, and add a data request for it.
- **Upstream tiers use other words (Critical / Moderate / Low):** map once (Critical → Must-address, Moderate → Manageable, Low → Informational unless the finding says otherwise) and state the mapping under the table.
- **An upstream tier understates the finding:** an injunction risk on the core product, a lost operating permission or a non-transferable revenue line is at least Must-address. Say "re-tiered from Manageable because ...".
- **Two expert opinions conflict (legal, regulatory, accounting):** do not pick the favourable one. The finding stays open, and the condition asks for a resolving opinion or a structural protection.
- **Revenue includes grants, pass-through volume or one-time projects:** value the base the buyer will own (commercial revenue, net revenue, recurring revenue) and show the subtraction.
- **Customers cancelled recently:** state the run-rate after the cancellations and value that; the seller's description of the churn is a claim, not evidence.
- **Seller quotes the ask on a basis the sector does not use:** restate it on the right basis and show the implied multiple.
- **Restatement or policy change without an auditor's opinion:** keep it out of the base or show it as a sensitivity, and require the opinion before signing.
- **Comps show NM or omit EBITDA:** price on EV/Revenue; never average NM. If the target's EBITDA is negative, say why EV/EBITDA is not used.
- **Comps differ in revenue mix and the split is not given:** say the margin comparison is unreliable, adjust conservatively, and request the split.
- **A transaction comp appears in a banker's set:** exclude it from the trading range and use it only as a ceiling.
- **Ask inside the range and nothing open:** Proceed at the ask; do not invent a discount.

What never flips: every figure comes from the artifacts or a formula you show; each row has one memo tier; the thesis' primary risk is row 1; an open must-address finding blocks a plain Proceed; every condition cites a row.

---

## Part E: reply skeleton

Write your reply now. Nothing comes before the working notes and nothing after the last condition: no word count, date or summary. Your reply begins exactly like this, filled in for the user's deal and kept inside each section's word bound:

**Working notes**
- Status: <which statuses stand, which are contradicted and by what>
- Tier: <mapping used; any re-tier and why; deal-breaker gate result>
- Base: <the base valued and what was stripped>
- Comps: <inclusions, exclusions, adjustment direction>
- Range: <multiple basis; ask restated on the same base>
- Consistency: <primary risk; which rule gives the call>

# IC memo: proposed acquisition of <Target>

## 1. Deal thesis

<100–160 words: what we buy, why, the base we value, the primary risk by name>

## 2. Risk table

| # | Finding | Upstream tier / status | Memo tier | What the artifacts show | Condition |
|---|---|---|---|---|---|
