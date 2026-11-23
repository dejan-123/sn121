---
name: trigger-board-memo
description: Maps a deal's risk table, financial narrative and comparables onto a board of decision triggers — which armed, which cleared, which stay pending — then writes the five-section IC memo off the board. The verdict maps as proceed, request more data or pass, with a price ceiling carried inside proceed. Only an armed blocking trigger holds proceed; where the board holds no blocking-tier trigger at all, the memo states plainly that no finding is a deal-breaker. Pass maps where the board shows an incurable break; an ask above range maps as a price condition, never a decline.
---

# The trigger board — set the board, then write the memo

The artifacts arrive with verdicts printed on them; the board exists
because printed verdicts are claims, not the decision. Arm the board
before a word of memo is drafted: each row's trigger state
(armed-blocking / pending / cleared / off-board), the count of armed
blocking triggers, the base figure, both range products — then the
verdict reads off the board. Nothing enters the memo that the
artifacts do not state; a missing input maps as `[to confirm: …]`,
never invented.

## Zone 1 — trigger states

Blocking-tier triggers are rows whose filed label means
clear-before-deal (Must-Address, Critical, Deal-Breaker, Blocker,
High). A row filed below that tier never arms a blocking trigger,
however loudly it reads — it takes a disposition or a price mark and
a flag that the tier looks light; it is never promoted.

| Filed as | The record shows | Trigger state |
|---|---|---|
| `Resolved` | another artifact or the row's own text shows it live — appeal undecided, certification lapsed, signature absent | `armed`, flag quoting the source |
| `Resolved` | only its own wording still describes the exposure | `cleared`, questioned — the proving document becomes a disposition |
| blank / `In-Progress` / `Unresolved` | — | `armed` |
| verified, uncontradicted | — | `cleared` |

Trigger words are never the verdict words — `armed`, `pending`,
`cleared`, `off-board` describe rows; `proceed`, `request more
data`, `pass` describe the memo. Filed tiers and statuses map
verbatim; a foreign scale maps once above the table.

## Zone 2 — the base that transfers

Map what the buyer owns at close: strip one-time revenue, revenue
that cannot transfer (grants, licences, contracts ending on change
of control), revenue already lost — the narrative's own post-loss
run-rate where given. Revenue merely at risk — a re-bid, a customer
near expiry — stays mapped and marks the downside. Add-backs hold
only where plainly one-time; the corrected figure maps beside the
seller's. Negative EBITDA on the transferable base → EV/EBITDA maps
meaningless; carry EV/Revenue.

## Zone 3 — the comp screen

Every comparable maps **in** or **out**, one line each: a
control-premium transaction beside trading peers; NM on the metric
in use; an outlier whose gap to its nearest neighbour exceeds the
spread of all the rest — no other ground. Where the test fails the
comp stays in and its gap becomes a mark against the included
median (middle value, or mean of the central pair): position the
target in words on growth, margin, concentration, retention.

## Zone 4 — the range and the ask

Two products written out — low multiple × base, high multiple ×
base, $M to one decimal; quantified debt-like items off each end.
The range is the valuation's last line. The ask maps as one implied
multiple on the restated base — bridged on both bases where they
differ — placed under/within/above the range with the $M gap.
Compute only what the verdict, the range or a disposition needs; a
quantified downside a disposition relies on is computed, not
suppressed.

## Zone 5 — the verdict reads off the board

- `proceed` — zero armed blocking triggers. Where the board holds
  no blocking-tier trigger at all, the memo states plainly *no
  finding here is a deal-breaker* — a committee reading only
  manageable rows expects that sentence. Every armed non-blocking
  row carries a named disposition.
- `request more data` — requires at least one armed blocking trigger
  clearable by a document a party can produce: consent, closure
  letter, executed renewal, clearance, audited figure. Name the
  record and its issuer. Armed rows below the blocking tier never
  downgrade a proceed — however many documents they need, their asks
  map inside proceed's dispositions, not the verdict.
- `pass` — an armed blocking trigger fails all three: unresolved;
  removes what the valuation prices at a size no range absorbs; no
  document or action before signing clears it. A right lapsing on a
  date no party can move — a patent term ending, a statutory licence
  — fails the third when the thesis prices what that right protects:
  no record exists that extends it. A cure removes the exposure; a
  filing, opinion or status report only describes it — documents
  about a risk never satisfy the third test. Pending approvals, a
  re-bid on a counterparty's calendar, a filed appeal — a party can
  still move them: askable, not incurable. A refusal arms only when
  unconditional and on record: a counterparty that 'indicates' it
  'may not' continue, or hangs its exit on an 'if' the buyer's
  status hasn't triggered, has armed nothing. A leaving
  counterparty is incurable only where the artifacts show no
  substitute exists — a replaceable role (a sponsor bank, a
  processor, a landlord) stays askable. A requirement some third
  party must fill — a sponsor, a guarantor, a licensor of record —
  bars nothing while a qualifying substitute can fill the seat; one
  provider declining is not the class closed. A cure's length is
  not its incurability either — a filing that runs months still
  ends in a document. What no consent papers over is a term or rule
  barring the transfer itself — grant terms the buyer cannot hold,
  a licence ending on change of control; where the artifacts state
  the bar, the bar is the record. A frightening row failing any one
  test is a near miss — it takes a disposition, never the decline.

## Zone 6 — the dispositions

One disposition per armed or questioned row, in row order: record
or instrument, issuing party, timing mark — before signing, at
close, post-close — only dates the artifacts give, and the
consequence if it fails: walk, re-price, or hold the escrow. An ask
above range maps in the recommendation as a hard ceiling: *proceed,
at a price inside $X–$Y*.

## The memo — the board rendered

```
# Committee memo — <target>
**Recommendation: <verdict word>** — <deciding triggers, ask vs range>
**Board state** (≤6 bullets): armed triggers, contradicted labels,
unreconciled figures, missing inputs.
```

1. `## 1. Deal thesis (≤120 words)` — what is bought, why on the
   mapped base, the primary risk in its row's words.
2. `## 2. Trigger table` — every row in input order: # | finding |
   tier filed | status filed | state | deciding fact ≤25 words.
   Beneath: `Blocking rows armed: <n>` (or `none — no
   deal-breaker on the board`) plus ≤2 flag lines.
3. `## 3. Defended valuation (≤260 words + comp table)` — base,
   comp screen, two products, range last, ask position.
4. `## 4. Verdict, verified (≤120 words)` — verdict word first,
   deciding triggers, ceiling where ask > range, then `Board
   check:` — primary risk = first blocking trigger, price inside
   range, every figure identical across sections.
5. `## 5. Dispositions and next steps` — one bullet per armed or
   questioned row, ≤40 words, instrument + consequence.

Cut prose before rows, products, the verdict or dispositions — a
long memo loses its tail. The board renders title-first; the five
headings follow in order.

Call read_reference for `references/board-cases.md` once before
drafting — a full memo and the four verdict shapes on invented
deals. Follow the form; map none of its facts.
