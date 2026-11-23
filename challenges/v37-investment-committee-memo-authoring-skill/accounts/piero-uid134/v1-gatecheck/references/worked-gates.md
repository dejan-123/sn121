# Worked example — the gatecheck memo

The user pastes three diligence artifacts and asks for the IC memo.
This file shows the full shape: the anchor, the audited findings
table, the number with reproducible arithmetic, and conditions that
name record, party, and timing. Follow this shape on every input.

---

## The input (abridged for illustration)

Acquisition of Molarline Systems, a practice-management SaaS for
dental groups. Risk table (Finding | Tier | Status):

- Core scheduling module depends on a proprietary routing dataset
  licensed from a trade consortium, revocable on 90 days' notice |
  Must-Address | Resolved
- PII of ~400K patients held on a legacy database whose encryption
  review is booked but not started | Must-Address | Unresolved
- Top reseller drives 36% of new logos; agreement renews annually and
  auto-renewed last month | Manageable | Unresolved
- Founder-CEO transitioning to advisory role in 6 months | Manageable |
  In-Progress

Financial narrative: LTM revenue $14.9M, of which $2.2M is a one-time
data-migration contract for a DSO roll-up completed last quarter;
recurring subscription revenue grew 24% YoY. Gross margin 79% on
subscription, 63% blended. EBITDA $1.3M on the full base; on the
recurring base EBITDA is -$0.4M. Cash $2.9M, no debt. Seller asks
$61M enterprise value. The narrative adds: the consortium "is
expected to confirm the grant" but no written confirmation exists,
and the encryption review was booked after the
data-room flagged two unpatched servers.

Comparables (EV/Revenue, EV/EBITDA, LTM growth, gross margin):
CareOps Cloud 5.4x/44x/33%/81% · DentaCore Inc. 4.1x/31x/19%/77% ·
PracticeHub Ltd. 4.8x/38x/27%/80% · ClinicFlow Systems 3.3x/21x/12%/
74% · SmileSuite Global (acquired 9 months ago at a strategic
premium, flagged in the broker note) 7.6x/NM/49%/83%.

---

## The memo

**Thesis and primary risk** — The decision: acquire Molarline at a
stated $61M ask. Molarline is a durable niche platform:
79% subscription gross margin and 24% recurring growth in a
fragmented, sticky vertical justify a premium multiple if the two
open items clear. The balance-sheet position is clean ($2.9M cash,
no debt) and the installed base renews rather than repurchases. The
primary risk is the routing-dataset license on the core scheduling
module — filed as Resolved, but revocable on 90 days' notice —
because a 90-day fuse on the data the product exists to apply is a
live must-address until a longer grant exists in writing.

**Findings**

| # | Finding | Stated status | Gate verdict | Tier carried |
|---|---|---|---|---|
| 1 | Core scheduling module on a consortium dataset license revocable on 90 days' notice | Resolved | **open** — stated Resolved, but the narrative itself records that no written confirmation exists; "expected to confirm" is a claim, not a record | Must-Address |
| 2 | ~400K patient records on a legacy database, encryption review booked but not started | Unresolved | **gates** — review unstarted and triggered by two unpatched servers; neither cost nor exposure is bounded yet | Must-Address |
| 3 | Top reseller drives 36% of new logos; annual renewal | Unresolved | **open** — the narrative shows it auto-renewed last month, so the stated "unresolved" overstates this cycle's risk; the dependency itself is real and unmitigated | Manageable |
| 4 | Founder-CEO transitioning to advisory role in 6 months | In-Progress | **stands** — dated transition already under way; carry as filed, tie to retention terms in conditions | Manageable |

**Gate tally:** 1 gates / 2 open / 1 stands / 0 noted

**The number**

Base first: the seller's $14.9M includes a $2.2M one-time migration
contract that completed last quarter and will not recur. The recurring
base is $12.7M; the growth rate that prices is the recurring 24%,
not a blended figure. EBITDA is $1.3M blended but -$0.4M on the
recurring base, so EV/EBITDA is not meaningful on the economics that
transfer — EV/Revenue carries this valuation.

Comps: SmileSuite Global is excluded — the broker note flags that it
was acquired at a strategic premium nine months ago, and a 7.6x paid
for control is a transaction price, not a market multiple. The
surviving set is CareOps (5.4x), DentaCore (4.1x), PracticeHub (4.8x),
ClinicFlow (3.3x): a 3.3x–5.4x range with a 4.45x median. Molarline's
24% recurring growth sits mid-pack against 12–33%, its 79% margin is
near the top, and its recurring share of revenue is higher than the
blend implies — the range needs no further adjustment.

Arithmetic: 3.3x–5.4x on the $12.7M recurring base gives $42M–$69M;
the defensible band is the median neighborhood, ~$52M–$61M.

Ask-versus-range: the $61M ask is 4.8x on the correct base. Quoted
against the seller's $14.9M it reads as 4.1x — that flattering basis
is exactly the framing to refuse. The ask reaches only the top of the
justified band, and only if both gating items clear.

**The call** — Request more data: two must-address rows stand open —
the unsecured dataset grant and the unstarted encryption review —
and each clears on a named record the seller can produce. The ask
reaches only the top of the justified band on the restated base, so
the data request carries a repriced proposal with it.

**Conditions to close**

1. Written confirmation from the consortium that the grant survives
   the acquisition or an amendment extending the notice to 24
   months, delivered before signing — a condition precedent, not a
   post-close covenant.
2. The encryption review commissioned now; scope, findings, and a
   remediation estimate delivered to the acquirer's security lead
   before definitive documents, with remediation cost priced against
   the offer.
3. Reseller dependency: either a multi-year renewal commitment in
   writing or a management plan naming how the 36% new-logo channel
   diversifies, reviewed at the first post-close board meeting.
4. CEO advisory agreement signed at close covering the 6-month
   transition, with retention terms for the two senior engineers the
   diligence file identifies as scheduling-module owners.
5. [to confirm: any patient-data breach notifications in the trailing
   24 months — the artifacts are silent.]

Bottom line — A good platform priced off the wrong base with two
gating items still open. Pay for the $12.7M recurring base, not the
$14.9M headline; the consortium letter and the encryption review are
the seller's homework before signing, not the buyer's discovery
after.

---

## If the file were clean — the restraint shape

When no gate fires, the memo still says so explicitly rather than
hunting for blockers. Had every row stood as filed and the ask sat
inside the range, the same skeleton compresses to:

**The call** — Proceed: no unresolved must-address finding, and the
ask sits inside the justified range at 4.1x recurring.

**Conditions to close** — None gating. Standard items only: confirm
the reseller's renewal intent in writing and keep the CEO transition
on its dated plan.

Everything else — the findings table, the base restatement, the comp
arithmetic — runs identically. Restraint changes the call and the
conditions list; it never changes the audit.

---

## Second shape — when the gate cannot clear

Worked mini-example for the pass branch. Input: Tollbridge
Systems, a toll-road payment-hardware maker. The risk table files its
only real asset — a 15-year state concession covering 58% of revenue —
as "Must-Address / Resolved," but the narrative states the concession
is non-assignable on change of control and the state DOT has declined
to confirm it will consent. Asking price $88M on $21.0M revenue; the
comp set runs 2.2x–3.1x.

**Thesis and primary risk** — Tollbridge has real hardware economics
inside the concession geography, but the deal as offered buys revenue
the buyer cannot keep. The primary risk is concession
non-assignability — and it is not a diligence item to close, it is
the deal's premise failing.

**Findings** (abridged): the concession row carries **open** with
verdict "stated Resolved — carried open: counterparty declined to
confirm consent"; every other row stands or carries as filed.

**The number**: even granting the base, 2.2x–3.1x on $21.0M is
$46M–$65M against an $88M ask — and the correct base excludes the
non-transferable concession revenue (~$12.2M), on which the surviving
base of $8.8M supports $19M–$27M. The ask prices the revenue the
buyer would not own.

**The call** — Pass: the concession that carries 58% of
revenue does not transfer on change of control, and no record the
buyer can request clears it — the consent belongs to a state DOT that
has already declined to confirm.

**Conditions to close** — None offered: the single clearing condition
(DOT written consent) sits outside both parties' control, and a deal
that cannot close its own gate should not be conditioned into
existence.

Bottom line — The pass is the deliverable: name the broken
premise, show the corrected base arithmetic, and stop.
