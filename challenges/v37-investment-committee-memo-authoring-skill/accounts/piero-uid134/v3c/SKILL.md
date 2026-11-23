---
name: rulings-memo
description: Renders a five-section investment committee memo from three diligence artifacts by issuing eight rulings in order — each a question with the condition under which it answers one way or the other — and assembling the memo from what the rulings return. The recommendation reads proceed, request more data or pass; a defended price ceiling travels inside proceed.
---

# Eight rulings, then the memo

An IC memo fails when its writer narrates instead of rules. This
bundle rules first: each ruling below is a question, the condition
that answers it, and what the answer carries forward. Facts absent
from the artifacts are entered as `[to confirm: …]`; nothing is
supplied from outside the file.

## Ruling 1 — what is each risk row's standing?

The filed tier is quoted verbatim in the table, and it is final:
the diligence team already weighed the severity when they filed
it. Re-tiering a row by how its wording sounds is the named
failure — a Manageable row whose text threatens injunction,
illegality or loss of the core module is still Manageable, and
severity commentary belongs in the consequence column, never in
the tier column.

*If* a row's filed tier says it must clear before signing
(Must-Address, Critical, Deal-Breaker, Blocker, High) → the row
carries blocking weight. *If* filed lower → it never blocks,
however severe the wording; it takes a condition or a price
note, flagged where the label understates.

*If* a status reads Resolved while another artifact shows the
matter live — a re-bid running, a review deferred, no closing
letter → the row stands open, flag citing that source. *If* only
the row's own description still sounds unfinished → it stands,
questioned; the proving document becomes a condition. *If* the
status is Unresolved, In-Progress or blank → open. Otherwise →
settled.

## Ruling 2 — how many blocking rows stand open?

Carry the count in words. *If* zero blocking-tier rows exist at
all → note it: the count line will read *none*, and the
recommendation must say no finding here is a deal-breaker.

## Ruling 3 — what is the priced base?

*If* revenue is one-time, cannot transfer (grants, contracts ending
on change of control) or is already lost → strip it, using the
narrative's own post-loss figure where given. *If* merely at risk —
re-bid, nearing expiry → keep it, name the downside. *If* an
add-back is plainly one-time → accept; else reject and show the
corrected figure beside the seller's. *If* EBITDA on the
transferable base is negative → EV/EBITDA is meaningless; price
EV/Revenue.

## Ruling 4 — which comparables stand?

*If* a comp carries a control or strategic premium beside trading
peers, reads NM on the metric, or sits so far from its nearest
neighbour that the gap exceeds the rest's spread → out, with the
reason in a line. Otherwise → in, and its gap becomes an
adjustment against the included median.

## Ruling 5 — what range do the products give?

Two products, written out: low multiple × base, high × base, $M to
one decimal; quantified debt-like items subtracted at each end.
The ask reads as one implied multiple on the priced base, placed
inside / above / below the range with its $M gap. Compute only
what a ruling or a condition needs.

## Ruling 6 — which call does the count return?

Test the branches in this order.

*First*, the bars: *if* an open row removes what the base prices
at a size the range cannot absorb and no document or act before
signing cures it → **pass**. A term or rule that bars the
transfer itself — grant terms the buyer cannot hold, a licence
ending on change of control, a statutory date no party moves —
is already the record; asking for a consent against it answers
nothing. A position is not such a bar: 'indicated', 'may not',
'if the buyer is not…' remain askable, and a replaceable role —
sponsor, processor, licensor of record — stays fillable.

*Second*: *if* zero blocking rows stand open → **proceed**, and
the memo says plainly no finding here is a deal-breaker. Open
rows below blocking weight — Manageable, Informational, however
severe the wording — become conditions inside the proceed; they
can never turn the call into request more data, and a producible
record for them does not change that.

*Third*: *if* ≥1 open row carries blocking weight and each
answers to a producible document — consent, closure letter,
executed renewal, clearance, audited figure → **request more
data**, naming the record and its issuer. Only a row carrying
blocking weight can put the call here; lower-tier rows cannot.

An ask above the range is a price condition, never a pass.

## Ruling 7 — what closes each open row?

One bullet per open or questioned row, in order: the record or
instrument, its issuer, the timing mark — before signing, at
close, post-close, using only dates the artifacts give — and the
consequence: walk, re-price, or hold the escrow.

## Ruling 8 — what shape does the memo take?

```
# <Target> — committee memo
**Recommendation: <call>** — <deciding rows, ask vs range>
**Exceptions of record** (≤6 bullets): open rows, contradicted
labels, unreconciled figures, missing inputs.
```

1. `## 1. Thesis (≤120 words)` — the asset, its economics on the
   priced base, the primary risk by row.
2. `## 2. Risk record` — # | finding | tier | status | standing |
   fact ≤25 words, input order; beneath: `Blocking rows open: <n>`
   or `none — no deal-breaker`, ≤2 flag lines.
3. `## 3. Valuation (≤260 words + table)` — base, screen,
   products, range last, ask.
4. `## 4. Recommendation (≤120 words)` — call first, deciding
   rows, the ceiling where the ask runs over, then `Verified:` —
   risk = first blocking row, price inside range, figures
   identical everywhere.
5. `## 5. Closings` — one bullet per open or questioned row,
   ≤40 words, consequence named.

Cut prose before rows, products, the call or closings. Call
read_reference once for `references/rulings-applied.md`.
