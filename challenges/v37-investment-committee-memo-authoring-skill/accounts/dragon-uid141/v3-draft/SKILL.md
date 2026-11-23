---
name: examination-memo
description: Examines a deal's risk table, financial narrative and comparables the way a committee examines a filing — every element answers its question from the record — then writes the five-section IC memo reporting what stayed unanswered. The call answers proceed, request more data or pass, with a price ceiling carried inside proceed. Only an unanswered gating question blocks proceed; where no gating question is on the docket at all, the memo reports plainly that no finding is a deal-breaker. Pass answers where the record itself rules incurably against the deal; an ask above range answers as a price condition.
---

# The examination — questions first, memo second

The artifacts arrive pre-labeled; a memo that inherits the labels
has examined nothing. Before drafting, every element answers its
question in working order: each row's state (gating-open /
answerable / answered / informational), the count of unanswered
gating questions, the base figure, both range products — then the
call reports what the examination left open. Nothing enters the
memo the record does not supply; a missing input is named
`[to confirm: …]`, never invented.

## Q1 — what does each row actually answer?

Gating questions are rows whose filed label means clear-before-deal
(Must-Address, Critical, Deal-Breaker, Blocker, High). A row filed
below that tier never becomes a gating question, however loudly it
reads — it takes a named answer or a price step and a flag that the
tier looks light; it is never promoted.

| Filed as | The record shows | Row answers |
|---|---|---|
| `Resolved` | another artifact or the row's own text shows it live — appeal undecided, certification lapsed, signature absent | `unanswered`, flag quoting the source |
| `Resolved` | only its own wording still describes the exposure | `answered`, questioned — the proving document becomes a condition |
| blank / `In-Progress` / `Unresolved` | — | `unanswered` |
| verified, uncontradicted | — | `answered` |

Rows never take the call words — `gating`, `open`, `answered`,
`noted` describe rows; `proceed`, `request more data`, `pass`
describe the memo. Filed tiers and statuses are quoted verbatim; a
foreign scale maps once above the table.

## Q2 — what revenue actually transfers?

The base is what the buyer owns at close: strip one-time revenue,
revenue that cannot transfer (grants, licences, contracts ending on
change of control), revenue already lost — the narrative's own
post-loss run-rate where stated. Revenue merely at risk — a re-bid,
a customer near expiry — stays in the base and is named as downside.
Add-backs hold only where plainly one-time; show the corrected
figure beside the seller's. Negative EBITDA on the transferable base
→ EV/EBITDA answers nothing; carry EV/Revenue.

## Q3 — which comps answer to this business?

Every comparable answers **in** or **out**, one line each: a
control-premium transaction beside trading peers; NM on the metric
in use; or an outlier whose gap to its nearest neighbour exceeds the
spread of all the rest — no other ground. Where the test fails, the
comp stays in and its gap becomes an adjustment against the included
median: position the target in words on growth, margin,
concentration, retention against that same included set (the middle
value, or the mean of the central pair).

## Q4 — what is the defended range, and where does the ask sit?

Two products, each written out — low multiple × base, high multiple
× base, $M to one decimal; quantified debt-like items come off each
end. The range is the valuation's last line. The ask answers as one
implied multiple on the restated base — bridged on both bases where
they differ — placed under/within/above the range with the $M gap.
Compute only what the call, the range or a condition needs; a
quantified downside a condition relies on is computed, not
suppressed.

## Q5 — what does the examination rule?

- `proceed` — zero unanswered gating questions. Where no gating
  question is on the docket at all, the memo reports plainly *no
  finding here is a deal-breaker* — a committee reading only
  manageable rows expects that sentence. Every open non-gating row
  carries a named answer.
- `request more data` — requires at least one unanswered gating
  question a document answers: consent, closure letter, executed
  renewal, clearance, audited figure. Name the record and the party
  that issues it. Unanswered questions below the gating tier never
  downgrade a proceed — however many documents they need, their asks
  post inside proceed's conditions, not the call.
- `pass` — before pass answers, name every fact about the buyer the
  record leaves unanswered (control status, licences, domicile); a
  row whose outcome turns on any one of them cannot answer incurable —
  the missing fact is itself the document the row wants. Pass then
  requires an unanswered gating question failing all three: unresolved;
  removes what the valuation prices at a size no range absorbs; no
  document or action before signing cures it. A right lapsing on a
  date no party can move — a patent term ending, a statutory licence
  — fails the third when the thesis prices what that right protects:
  no record exists that extends it. A cure removes the exposure; a
  filing, opinion or status report only describes it — documents
  about a risk never satisfy the third test. Pending approvals, a
  re-bid on a counterparty's calendar, a filed appeal — a party can
  still move them: askable, not incurable. A refusal answers only
  when unconditional and on record: a counterparty that 'indicates'
  it 'may not' continue, or hangs its exit on an 'if' the buyer's
  status hasn't triggered, has answered nothing. A leaving
  counterparty is incurable only where the artifacts show no
  substitute exists — a replaceable role (a sponsor bank, a
  processor, a landlord) stays askable. And a row whose outcome
  turns on a fact about the buyer the record never answers —
  control status, licensing, domicile — waits on an unasked
  question, and that answer is itself the document the row wants. A requirement some third
  party must fill — a sponsor, a guarantor, a licensor of record —
  bars nothing while a qualifying substitute can fill the seat; one
  provider declining is not the class closed. A cure's length is
  not its incurability either — a filing that runs months still
  ends in a document. What no consent papers over is a term or rule
  barring the transfer itself — grant terms the buyer cannot hold,
  a licence ending on change of control; where the artifacts state
  the bar, the bar is the record. A frightening row failing any one
  test is a near miss — a condition, never the decline.

## Q6 — what closes each open question?

One bullet per open or questioned row, in row order: the record or
instrument, the party that issues it, the timing mark — before
signing, at close, post-close — only dates the artifacts give, and
the consequence if it fails: walk, re-price, or hold the escrow. An
ask above range answers in the recommendation as a hard ceiling:
*proceed, at a price inside $X–$Y* — never by itself a pass.

## The memo — the examination reported

```
# IC memo: <target>
**Recommendation: <call word>** — <deciding rows, ask vs range>
**Open questions** (≤6 bullets): unanswered gates, contradicted
labels, unreconciled figures, missing inputs.
```

1. `## 1. Deal thesis (≤120 words)` — what is bought, why on the
   restated base, the primary risk in its row's words.
2. `## 2. Tiered risk table` — every row in input order: # |
   finding | tier filed | status filed | answer state | deciding
   fact ≤25 words. Beneath: `Unanswered gating questions: <n>` (or
   `none — no deal-breaker on the docket`) plus ≤2 flag lines.
3. `## 3. Defended valuation (≤260 words + comp table)` — base,
   comp answers, two products, range last, the ask's position.
4. `## 4. Recommendation and consistency check (≤120 words)` —
   call word first, deciding rows, ceiling where ask > range, then
   `Checks:` — primary risk = first gating row, price inside range,
   every figure identical across sections.
5. `## 5. Conditions and asks` — one bullet per open or questioned
   row, ≤40 words, instrument + consequence.

Cut prose before rows, products, the call or the asks — a long memo
loses its tail. The title answers first; the five headings follow
in order and nothing precedes them.

Call read_reference for `references/examination-cases.md` once
before drafting — a full memo and the four call shapes on invented
deals. Follow the form; cite none of its facts.
