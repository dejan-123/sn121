---
name: intake-memo
description: Works the three diligence artifacts the way an intake works a case file — presenting complaint (risk rows), history (financial narrative), reference panel (comps) — then writes the five-section IC memo as the disposition. Call vocabulary: proceed, request more data, pass, with a hard ceiling inside proceed. Only an unresolved critical complaint blocks; a clean intake states plainly that nothing is a deal-breaker.
---

# Intake — complaint, history, panel, disposition

Three artifacts arrive like a case file. Work them privately; only
the finished memo is handed over. Nothing enters that the file
does not state; a missing input is charted `[to confirm: …]`.

## The complaint — reading the risk rows

Critical complaints are rows whose filed label says
clear-before-deal (Must-Address, Critical, Deal-Breaker, Blocker,
High). A row filed below that tier never blocks the disposition —
treatment or a price note, plus a flag where the label understates.

| Filed as | The file shows | Reads |
|---|---|---|
| Resolved | another artifact shows it live — re-bid running, review deferred, no closing letter | open, flag quoting source |
| Resolved | only its own wording still describes the exposure | stands, questioned — proving document becomes a treatment |
| Unresolved / In-Progress / blank | — | open |
| verified, uncontradicted | — | stands |

## The history — what the file's economics actually show

Base = what transfers at close: strip one-time work, revenue that
cannot transfer (grants, contracts ending on control change),
customers already lost (the file's own post-loss run-rate). Revenue
merely at risk — re-bid, near-expiry — stays in, named as
downside. Plainly one-time add-backs only; corrected figure beside
the seller's. Negative EBITDA on the transferable base → EV/EBITDA
unusable; EV/Revenue carries it.

## The panel — every comparable examined

Each comparable in or out, one reason: control-premium transaction
beside trading peers; NM on the metric; an outlier whose gap to
its nearest neighbour exceeds the spread of the rest — else in and
its gap adjusts. Position the target against the included median
in words: growth, margin, concentration, retention.

## The dosage — the range

Two products written out — low multiple × base, high multiple ×
base, $M to one decimal; quantified debt-like items off each end;
the range is the valuation's last line. The ask reads as one
implied multiple on the priced base, placed under/within/above
with the $M gap. Compute only what the call, range or a treatment
needs.

## The disposition

- `proceed` — no critical complaint open. Where the file holds no
  critical-tier complaint at all, chart plainly: *no finding here
  is a deal-breaker.* Open non-critical items take treatments
  inside proceed, never the call itself.
- `request more data` — each open critical complaint a document
  settles: consent, closure letter, executed renewal, clearance,
  audited figure. Name the record and its issuer.
- `pass` — an open critical complaint fails all three: unresolved;
  removes what the base prices at a size no range absorbs; no
  document or act before signing cures. A right lapsing on a date
  no party moves — a patent term, a statutory licence — is
  incurable where the thesis prices it. A refusal counts only
  unconditional and on record — 'indicated', 'may not', 'if the
  buyer is not…' are positions, not refusals; a replaceable role
  (sponsor, processor, licensor of record) stays fillable; a
  cure's length is not its incurability. A term barring the
  transfer itself is the only bar no consent papers. Above-range
  ask = price condition, never a pass.

## The memo — the disposition rendered

```
# <Target>: committee memo
**Recommendation: <call>** — <deciding rows, ask vs range>
**Chart exceptions** (≤6 bullets): open complaints, contradicted
labels, unreconciled figures, missing inputs.
```

1. `## 1. Presenting picture (≤120 words)` — the business, the
   economics, the primary complaint by row.
2. `## 2. Complaint list` — every row, input order: # | complaint |
   tier filed | status filed | read | deciding fact ≤25 words.
   Beneath: `Open critical complaints: <n>` or `none — nothing is
   a deal-breaker`, ≤2 flag lines.
3. `## 3. Reference valuation (≤260 words + table)` — base,
   screen, products, range last, ask.
4. `## 4. Disposition (≤120 words)` — the call first, deciding
   rows, ceiling where needed, then `Verified:` — primary
   complaint = first critical row, price inside range, figures
   identical across sections.
5. `## 5. Treatment plan` — one bullet per open or questioned
   row, ≤40 words: record or instrument, issuer, timing mark
   (dates the file gives only), consequence — walk, re-price,
   escrow.

Cut prose before rows, products, the call or treatments. Call
read_reference for `references/case-files.md` once before writing.
