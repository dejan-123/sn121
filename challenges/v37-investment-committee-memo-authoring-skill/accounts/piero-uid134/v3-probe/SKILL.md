---
name: memo-defect-audit
description: Writes a five-section investment committee memo from three diligence artifacts (risk classification rows, financial narrative, comparables set) by auditing the draft against the ways these memos fail — a verdict the table does not support, a base priced on revenue that will not transfer, a range nobody can rebuild, conditions tied to nothing. Decides each row's state and the call in working order before a word of memo is written; call vocabulary is proceed, request more data or pass, with price ceilings carried inside proceed.
---

# The defect file — how this memo gets rejected

Committees and reviewers throw out these memos for a short list of
causes. The audit runs in the order the defects occur: decide every
row's state, fix the base, screen the comps, compute the range, then
the call — before the first memo line is drafted. Nothing enters the
memo that the artifacts do not state; a fact the artifacts lack is a
named gap, `[to confirm: …]`, never an invention.

## Defect 1 — a verdict decided by prose instead of the table

Before drafting, settle in working order: each row's read
(gates / open / stands / noted), the count of open gating rows, the
base figure, both range products, then the call word. The call falls
out of that count; it is not composed in the recommendation.

The gating tier is the rows whose filed label means must-clear
(Must-Address, Critical, Deal-Breaker, Blocker, High). A row filed
below that tier never arms the gate, however loudly it reads: a
scary Manageable row takes a condition or a price step and a flag
saying the tier looks light — never a promotion, never a block.

- `proceed` — zero open gating rows. Where the table holds no
  gating-tier row at all, say so in plain words: *no finding here is
  a deal-breaker.* Holding back on a clean table is as wrong as
  proceeding over an open gate. Every open non-gating row carries a
  named mitigation.
- `request more data` — requires at least one open gating row whose
  question a document answers: a consent, a closure letter, an
  executed renewal, a clearance, an audited figure. Name the record
  and the party that issues it. Open rows below the gating tier
  never downgrade a proceed — however many documents they need,
  their asks post inside proceed's conditions, not the call.
- `pass` — an open gating row fails the three-part incurable test:
  (a) unresolved, (b) removes what the valuation prices at a size no
  range absorbs, (c) no document or action before signing can cure
  it. A right lapsing on a date no party can move — a patent term
  ending, a statutory licence expiring — fails (c) when the thesis
  prices what that right protects: no record exists that extends it.
  A cure removes the exposure; a filing, opinion or status report
  only describes it — documents about a risk never satisfy (c). A
  pending approval, a re-bid on a counterparty's calendar, a filed
  appeal — askable, however slow; a party's action can still move
  them. A refusal counts only when unconditional and on record: a
  counterparty that 'indicates' it 'may not' continue, or hangs its
  exit on an 'if' the buyer's status hasn't triggered, has answered
  nothing. A leaving counterparty is incurable only where the
  artifacts show no substitute exists — a replaceable role (a
  sponsor bank, a processor, a landlord) stays askable. A
  requirement some third party must fill — a sponsor, a guarantor,
  a licensor of record — bars nothing while a qualifying substitute
  can fill the seat; one provider declining is not the class
  closed. A cure's length is not its incurability either — a filing
  that runs months still ends in a document. What no consent papers
  over is a term or rule barring the transfer itself — grant terms
  the buyer cannot hold, a licence ending on change of control;
  where the artifacts state the bar, the bar is the record. An ask
  above the range is a price condition, never a pass.
  A frightening row that fails any one test is a near miss — a
  condition, not a decline.

## Defect 2 — a status column read instead of audited

| Filed as | The record shows | Row read |
|---|---|---|
| `Resolved` | another artifact or the row's own text shows it live — an appeal undecided, a certification lapsed, a signature absent | `open`, flag quoting the source |
| `Resolved` | only its own wording still describes the exposure — a right the contract always held | `stands`, questioned: the proving document becomes a condition |
| blank / missing / `In-Progress` / `Unresolved` | — | `open` |
| verified and uncontradicted | — | `stands` |

Row words are never `proceed`, `request more data`, `pass` — those
are memo calls. Filed tiers and statuses are quoted verbatim in the
table; a foreign scale maps once above the table (Critical =
Must-Address…), original labels kept.

## Defect 3 — pricing revenue the buyer does not get

Restate the base before any multiple: strip one-time revenue,
revenue that cannot transfer (grants, licences, contracts ending on
change of control), revenue already lost — the narrative's own
post-loss run-rate where it gives one. Revenue merely at risk — a
contract out for re-bid, a customer near expiry — stays in the base
and is named as downside. Accept only plainly one-time add-backs;
show the corrected figure beside the seller's. Negative EBITDA on
the transferable base → EV/EBITDA is not meaningful; carry
EV/Revenue.

## Defect 4 — a range that cannot be rebuilt

- Every comparable named **in** or **out**, one line each: a
  transaction/control-premium multiple among trading peers; a
  multiple NM on the metric in use; or an outlier whose gap to its
  nearest neighbour exceeds the spread of all the rest. No other
  ground; when the test fails, the comp stays in and its gap becomes
  an adjustment.
- Take the median of the included comps — the middle value or the
  mean of the central pair — and move off it in words: growth,
  margin, concentration, retention against that same included set.
- Two products written out, low multiple × base, high multiple ×
  base, in $M to one decimal; subtract quantified debt-like items
  from each end. The range is the last line of the valuation.
- The ask is one implied multiple on the restated base — bridged on
  both bases where they differ — placed under/within/above the range
  with the $M gap. Compute only what the call, the range or a
  condition needs; a quantified downside a condition relies on is
  computed, not suppressed.

## Defect 5 — conditions that point at nothing

One bullet per open or questioned row, in row order: the record or
instrument (consent, indemnity, escrow, holdback, contingent
consideration), the party that issues it, the timing mark — before
signing, at close, post-close — taken only from dates the artifacts
give, and the consequence if it fails: walk, re-price, or hold the
escrow. Where the ask exceeds the range, the recommendation names
the hard ceiling: *proceed, at a price inside $X–$Y* — the ceiling
is the top of the defended range.

## Defect 6 — a memo that contradicts itself or dies mid-sentence

Output contract — the memo opens exactly like this:

```
# Committee memo — <target>
**Recommendation: <call word>** — <deciding row(s), ask vs range>
**Record exceptions** (≤6 bullets): open gates, contradicted labels,
unreconciled figures, missing inputs.
```

Then five sections, bound in each heading:

1. `## 1. Deal thesis (≤120 words)` — what is bought, why on the
   restated base, the primary risk named in its row's words.
2. `## 2. Risk findings` — every row in input order: # | finding |
   tier as filed | status as filed | row read | deciding fact ≤25
   words. Beneath: `Open gating rows: <n>` (or `none — no
   deal-breaker filed`) plus ≤2 flag lines.
3. `## 3. Defended valuation (≤260 words + comp table)` — base
   line, comp screen table, two products, range as last line, ask
   position.
4. `## 4. The call, audited (≤120 words)` — the call word first,
   deciding rows, ceiling where ask > range, then `Verified:` —
   primary risk = first blocking row, price inside range, every
   figure identical in all sections.
5. `## 5. Conditions and next steps` — one bullet per open or
   questioned row, ≤40 words each, instrument + consequence.

Cut prose before rows, products, the recommendation or conditions.
The first line restates the settled call; the five headings appear
in order and nothing precedes the title.

Call read_reference for `references/failure-memos.md` once before
drafting; it holds a full memo and the four call shapes on invented
deals. Follow its form, take none of its facts.
