# Worked example — the ledger memo

The user pastes three diligence artifacts and asks for the IC memo.
This file shows the full shape: the context line, the postings table
with a tally, the valuation ledger, and open postings that name the
record, the party, and the date. Follow this shape on every input.

---

## The input (abridged for illustration)

Acquisition of Coldhaven Refrigeration, a maker of commercial
refrigeration units with a monitoring-service arm. Risk table
(Finding | Tier | Status):

- Master supply agreement with the largest customer (41% of unit
  revenue); the counterparty holds a 90-day termination option it
  has not waived |
  Must-Address | Resolved
- EPA refrigerant-compliance retrofit required on two product lines;
  engineering estimate $2.8M, not yet budgeted | Must-Address |
  Unresolved
- Firmware update process for monitored units has no written rollback
  procedure; a 2024 update caused a 3-day outage at six sites |
  Manageable | Resolved
- Plant manager retires in 14 months; no successor named |
  Manageable | Unresolved

Financial narrative: LTM revenue $33.8M — $22.4M unit sales, $11.4M
recurring monitoring/service. Growth 16% YoY, all of it in the
service arm; unit revenue was flat. Blended gross margin 44% (units
31%, service 62%). EBITDA $3.6M. Cash $1.9M, debt $7.5M. No asking
price is stated in the artifacts.

Comparables (EV/Revenue, EV/EBITDA, LTM growth, gross margin):
Frostline Industrial 2.9x/14x/13%/41% · ColdChain Systems 2.2x/11x/
8%/37% · ArcticWorks Corp. 3.4x/17x/19%/46% · ThermoServe Inc. (a
pure-service business, no hardware) 4.6x/23x/31%/64% · PolarField
Manufacturing 1.8x/9x/5%/34%. The comp-set note adds that hardware
versus service mix is not broken out for each comparable.

---

## The memo

**Ledger context** — Acquire Coldhaven; no asking price is stated in
the artifacts, so the memo posts a range rather than a verdict on a
price.

The position — The service arm is the asset: 62% gross margin,
16% growth, recurring revenue on an installed unit base. The hardware
line is the ballast — flat, thinner, and carrying a $2.8M unfunded
compliance retrofit. The primary risk is the master supply agreement
covering 41% of unit revenue: filed as Resolved, but an unwaived
90-day termination option is not a resolution — the counterparty's
signature decides this posting, not the tone of the talks.

**Postings**

| # | Finding | Posted as | The record shows | Standing |
|---|---|---|---|---|
| 1 | Master supply agreement, 41% of unit revenue, counterparty holds unwaived 90-day termination option | Resolved | **unsettled** — posted Resolved, but the record shows the option unwaived and nothing signed; the fuse runs from notice, not from progress | Must-Address |
| 2 | EPA retrofit on two product lines, $2.8M, unbudgeted | Unresolved | **breach** — a stated, unfunded, mandatory spend; posts against price in dollars | Must-Address |
| 3 | Firmware process lacks rollback procedure; caused a 3-day outage in 2024 | Resolved | **unsettled** — posted Resolved, but the record shows no written rollback exists; a procedure that was never documented is not remediated | Manageable |
| 4 | Plant manager retires in 14 months, no successor | Unresolved | **carried** — dated event with runway; posts as filed, succession named in open postings | Manageable |

**Tally:** 1 breach / 2 unsettled / 1 carried / 0 struck

**Valuation ledger**

Base posting: $33.8M stands — no one-time items to strip — but the
segments post separately because the comps note declares that
hardware/service mix is not provided for each comparable. Posting a
blended multiple against a mixed business without naming that
limitation is the silent-application failure; the mix-adjustment is
stated instead.

Service arm: $11.4M recurring at service economics. Comp posting —
ThermoServe is the only pure-service comparable and posts as the
service anchor at 4.6x; using it for the whole business would
misstate, using it for the service segment is what the note's caveat
permits. Service value: 4.0x–4.6x × $11.4M ≈ $46M–$52M.

Unit business: $22.4M at 31% margin, flat. Frostline (2.9x) and
ColdChain (2.2x) post as the hardware band, ArcticWorks (3.4x) carries
growth Coldhaven's unit line does not have, PolarField (1.8x) is the
floor. Hardware value: 2.0x–2.9x × $22.4M ≈ $45M–$65M, discounted
toward the band's lower half for the flat growth.

EV/EBITDA check: blended $3.6M at the comp range of 9x–17x cross-checks
to $32M–$61M — consistent only at the low end, which is the direction
the flat hardware margin argues.

Range posting: ~$85M–$110M combined, stated with the retrofit's $2.8M
netted off — call the honest band $82M–$107M. No ask to reconcile;
the committee prices from the range, and the seller's number, when it
arrives, is judged against this band on these segments.

**Settlement** — Request more data: the books do not settle clean.
The master supply agreement's "Resolved" filing does not survive
posting and the EPA retrofit is an unfunded must-address — each
posts an ask with a named record, and no asking price is stated to
settle against.

**Open postings**

1. Master supply agreement: an executed waiver of the termination
   option or an amendment extinguishing it, delivered by the
   customer's procurement authority before signing.
2. EPA retrofit: funded retrofit plan with the engineering estimate
   confirmed by the acquirer's facilities engineer, and $2.8M netted
   or escrowed in the price mechanism.
3. Firmware rollback procedure documented and exercised once before
   close; the 2024 outage report confirmed as the worst historical
   case.
4. Succession: named internal candidate or accepted external offer
   for the plant-manager seat before the 14-month date.
5. [to confirm: whether the service arm's 16% growth is measured on
   the same cohort base as unit revenue — the artifacts do not split
   prior-year mix.]

Reconciliation — The books do not balance at the filed statuses:
two postings marked settled are not settled, and one of them gates
41% of the unit revenue. The deal is worth its service-arm value with
the hardware at the low band — ask for the two named records, net
the retrofit, and let the signature, not the talks, decide the
supply line.

---

## When the books balance — the settled shape

Had the supply agreement posted a signed waiver and the retrofit a
funded plan, the same skeleton compresses to:

**Ledger context** — …the books settle: proceed at the posted range,
no breach on the ledger.

**Open postings** — None gating. Standing items only: succession
naming on its 14-month track, the rollback procedure exercised once
as routine hygiene.

Postings, tally, and valuation run identically either way — the
recommendation reads the ledger, it does not write it.

---

## When the ledger cannot close — the pass posting

Worked note for the structural case. If the option were already
exercised — the customer on record terminating, the signature no
longer requestable — the 41% posting is not unsettled, it
is voidable revenue: the base posts net of it, the range recomputes
on what survives, and if the ask was struck on the voided revenue
the settlement is a pass that names the broken premise and
shows the arithmetic. A condition is not offered where the deciding
signature belongs to a third party already refusing to sign.
