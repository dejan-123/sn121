---
name: ledger-memo-v3
description: Posts a deal's risk table, financial narrative and comparables to a diligence ledger — row postings, base posting, comp postings, the range, the settlement call, open postings — then writes the five-section IC memo as the reconciliation. The call posts as proceed, request more data or pass, with a price ceiling carried inside proceed. Only an open must-clear posting blocks proceed; where the ledger holds no must-clear posting at all, the memo says plainly no finding is a deal-breaker. Pass posts where the books show an incurable break; an ask above range posts as a price condition, never a decline.
---

# Ledger policy — every deal posts by the same rules

The artifacts arrive as entries filed by different hands. The ledger
reconciles them before any memo line is written: post every row's
state, fix the base, post the comps, strike the range, then the call
settles itself from the open postings. Nothing enters the books that
the artifacts do not state; a missing input posts as
`[to confirm: …]`, never an invented figure.

## Posting 1 — every row gets a state

The must-clear tier is rows whose filed label means clear-before-
deal (Must-Address, Critical, Deal-Breaker, Blocker, High). A row
posted below that tier never blocks the ledger, however loud it
reads — it takes a settlement or a price note and a flag saying the
tier looks light.

| Filed as | The books show | Posts as |
|---|---|---|
| `Resolved` | another artifact — the narrative or an analyst note — shows it live: a re-bid still running, a review deferred, a certification lapsed, no closing letter | `open`, flag quoting that source |
| `Resolved` | only the row's own wording still describes the exposure — pending claims, a right the contract always held | `stands`, questioned — a row's own description never undoes its own status; the proving document posts as a settlement |
| blank / `In-Progress` / `Unresolved` | — | `open` |
| verified, uncontradicted | — | `stands` |

Postings are never the call words — `gates`, `open`, `stands`,
`noted` describe rows; `proceed`, `request more data`, `pass`
describe the memo. Filed tiers and statuses post verbatim; a foreign
scale maps once above the table.

## Posting 2 — the base

Post what the buyer keeps: strip one-time revenue, revenue that
cannot transfer (grants, licences, contracts ending on change of
control), revenue already lost — the narrative's own post-loss
run-rate where it gives one. Revenue merely at risk — a re-bid, a
customer near expiry — stays posted, named as downside. Accept only
plainly one-time add-backs; show the corrected figure beside the
seller's. Negative EBITDA on the transferable base → EV/EBITDA does
not post; carry EV/Revenue.

## Posting 3 — the comps

Every comparable posts **in** or **out**, one line each: a
control-premium transaction among trading peers; NM on the metric in
use; or an outlier whose gap to its nearest neighbour exceeds the
spread of all the rest. No other grounds — when the test fails the
comp stays and its gap becomes a step.

## Posting 4 — the range, stepped not asserted

Adjustments post as steps, not adjectives. Step size: **0.25x** on
revenue multiples, **1.0x** on EBITDA multiples, stepped off the
included-set median (middle value, or mean of the central pair):

- growth 5+ points off the included median (two steps at 15+);
- gross margin 3+ points off the median;
- one customer over 20% of revenue, or top three over 50%;
- NRR under 100%, or a revenue mix the comps lack.

Above the median steps up, below steps down; nothing steps for an
item already stripped from the base, and no size step unless the
artifacts give the comps' scale. Post one running sum:
`3.2x − 0.5x margin − 0.25x concentration = 2.45x`. Two products
written out — low multiple × base, high multiple × base, $M to one
decimal; quantified debt-like items come off each end. The range is
the valuation's last line. The ask posts as one implied multiple on
the posted base — on both bases where they differ — placed
under/within/above the range with the $M gap. Compute only what the
call, the range or a settlement needs.

## Posting 5 — the settlement call

- `proceed` — zero open must-clear postings. Where the ledger holds
  no must-clear row at all, the memo says plainly *no finding here
  is a deal-breaker* — a committee reading only manageable postings
  expects that sentence. Every open non-gating posting carries a
  named settlement.
- `request more data` — requires at least one open must-clear
  posting whose answer is a document a party can produce: consent,
  closure letter, executed renewal, clearance, audited figure. Name
  the record and its issuer. Open postings below the must-clear tier
  never downgrade a proceed — however many documents they need,
  their asks post inside proceed's settlements, not the call.
- `pass` — before pass posts, name every fact about the buyer the
  artifacts leave unstated (control status, licences, domicile); a
  row whose outcome turns on any one of them cannot post incurable —
  the missing fact is itself the record the row asks for. Pass then
  requires an open must-clear posting failing all three: unresolved;
  removes what the base prices at a size no range absorbs; no
  document or action before signing cures it. A right lapsing on a
  date no party can move — a patent term, a statutory licence —
  fails the third when the thesis prices what that right protects: no
  record exists that extends it. A cure removes the exposure; a
  filing, opinion or status report only describes it — documents
  about a risk never satisfy the third test. Pending approvals, a
  re-bid on a counterparty's calendar, a filed appeal — a party can
  still move them: askable, not incurable. A refusal posts only when
  unconditional and on record: a counterparty that 'indicates' it
  'may not' continue, or hangs its exit on an 'if' the buyer's
  status hasn't triggered, has posted nothing. A leaving
  counterparty is incurable only where the artifacts show no
  substitute exists — a replaceable role (a sponsor bank, a
  processor, a landlord) stays askable. And a row whose outcome
  turns on a fact about the buyer the artifacts never post —
  control status, licensing, domicile — waits on an unasked fact,
  and that fact is itself the record the row asks for. A requirement some third
  party must fill — a sponsor, a guarantor, a licensor of record —
  bars nothing while a qualifying substitute can fill the seat; one
  provider declining is not the class closed. A cure's length is
  not its incurability either — a filing that runs months still
  ends in a document. What no consent papers over is a term or rule
  barring the transfer itself — grant terms the buyer cannot hold,
  a licence ending on change of control; where the artifacts state
  the bar, the bar is the record. An alarming
  row failing any one test is a near miss — it posts a settlement,
  never the decline.

## Posting 6 — open postings

One settlement per open or questioned row, in row order: record or
instrument, issuing party, timing mark (before signing, at close,
post-close — only dates the artifacts give), and the consequence if
unsettled: walk, re-price, or hold the escrow. An ask above range
posts in the recommendation as a hard ceiling: *proceed, at a price
inside $X–$Y*.

## The memo — the reconciliation rendered

```
# IC memo: <target>
**Recommendation: <call word>** — <deciding rows, ask vs range>
**Open postings** (≤6 bullets): open gates, contradicted labels,
unreconciled figures, missing inputs.
```

1. `## 1. Deal thesis (≤120 words)` — what is bought, why on the
   posted base, the primary risk in its row's words.
2. `## 2. Risk ledger` — every row in input order: # | finding |
   tier filed | status filed | posting | deciding fact ≤25 words.
   Beneath: `Open must-clear: <n>` (or `none — no deal-breaker
   posted`) plus ≤2 flag lines.
3. `## 3. Defended valuation (≤260 words + comp table)` — base,
   comp postings, the running sum, two products, range last, ask.
4. `## 4. Settlement and check (≤120 words)` — call word first,
   deciding postings, ceiling where ask > range, then `Checks:` —
   primary risk = first must-clear row, price inside range, every
   figure identical across sections.
5. `## 5. Open postings` — one bullet per open or questioned row,
   ≤40 words, instrument + consequence.

Cut prose before postings, products, the call or the settlements.
The title posts first; the five headings post in order.

Call read_reference for `references/ledger-cases.md` once before
drafting — a full memo and the four call shapes on invented deals.
Follow the form; post none of its facts.
