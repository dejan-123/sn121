---
name: two-pass-memo
description: Produces the five-section investment committee memo in two passes. Pass one — silent working notes: every risk row read open or settled, the blocking count, the priced base, the comp screen, the range, the vote. Pass two — the memo alone, copying the notes' digits exactly. Vote vocabulary: proceed, request more data, pass; a ceiling lives inside proceed.
---

# Two passes — the notes decide, the memo reports

The memo is written backwards from what a committee checks: does
the vote follow the table, can the range be rebuilt, does every
condition cite a row. So the work happens first.

**Pass one — working notes.** Settle, in order: each row's read;
the line `blocking rows: <n> open`; the priced base; every comp in
or out; both range products; the vote. Then call read_reference for
`references/decided-memos.md`.

**Pass two — the memo only.** Every figure carries the notes'
digits verbatim. Nothing the artifacts do not state enters; a
missing input is `[to confirm: …]`.

## Note line 1 — the row reads

Blocking tier = labels meaning clear-before-deal (Must-Address,
Critical, Deal-Breaker, Blocker, High). Below that tier, a row
never joins the blocking count — condition or price mark, plus a
flag where the tier looks light.

| Filed as | The record shows | Read |
|---|---|---|
| Resolved | another artifact shows it live — re-bid running, review deferred, no closing letter | open, flag quoting source |
| Resolved | only its own wording still describes the exposure | settled, questioned — proving document becomes a condition |
| Unresolved / In-Progress / blank | — | open |
| verified, uncontradicted | — | settled |

## Note line 2 — the base

Reported figures are the default; restate only for: one-time work,
non-transferring revenue (grants, contracts ending on control
change), cancelled customers (the narrative's own run-rate), gross
volume where peers price net. At-risk revenue — re-bid, near-expiry
— stays in, named downside. Plainly one-time add-backs only;
corrected figure shown. Negative EBITDA on the transferable base →
EV/EBITDA not meaningful; carry EV/Revenue.

## Note line 3 — the screen

Every comp in or out, one reason: control-premium transaction among
trading peers; NM on the metric; outlier whose gap to its nearest
neighbour exceeds the spread of the rest — else retained and its
gap becomes the adjustment. Median of the included set; position
the target in words — growth, margin, concentration, retention.

## Note line 4 — the range

Two products — low multiple × base, high multiple × base, $M to one
decimal; debt-like items off each end; range as the last valuation
line. Ask = implied multiple on the priced base, placed against the
range with the $M gap. Compute only what the vote, range or a
condition needs.

## Note line 5 — the vote

- `proceed` — zero open blocking rows; where no blocking-tier row
  exists, say plainly no finding is a deal-breaker. Open lower rows
  never downgrade — their asks live in proceed's conditions.
- `request more data` — ≥1 open blocking row a document answers;
  name the record, the issuer.
- `pass` — an open blocking row fails all three: unresolved;
  removes what the base prices, at a size no range absorbs; no
  document or act before signing cures. A right lapsing on a date
  no party moves — patent term, statutory licence — is incurable
  where the thesis prices it. Refusal counts only unconditional
  and on record: 'indicated', 'may not', 'if the buyer is not…'
  are positions, not refusals; replaceable roles (sponsor,
  processor, licensor of record) stay fillable; a cure's length is
  not its incurability; a row turning on an unstated buyer fact is
  askable by definition. A term barring the transfer itself is the
  only bar no consent papers. Above-range ask = price condition.

## Pass two — the memo

`# <Target>: IC memo`, then `**Recommendation: <vote> — <deciding
rows, ask vs range>**` as the first line, then `**Exceptions**
(≤6 bullets)` — contradicted labels, unreconciled figures, missing
inputs. Five sections, bound in each heading:

1. `## 1. Deal thesis (≤120 words)` — asset, economics, primary
   risk by row.
2. `## 2. Risk table` — # | finding | tier filed | status filed |
   read | fact ≤25 words; beneath: `Blocking rows open: <n>` or
   `none — no deal-breaker`, ≤2 flag lines.
3. `## 3. Valuation (≤260 words + comp table)` — base, screen,
   products, range last, ask.
4. `## 4. Recommendation (≤120 words)` — vote first, deciding
   rows, ceiling where needed, `Verified:` — primary risk = first
   blocking row, price in range, figures 
   identical across sections.
5. `## 5. Conditions` — one bullet per open or questioned row,
   ≤40 words: record, issuer, timing mark (before signing / at
   close / post-close — only dates given), consequence: walk,
   re-price, escrow.

Cut prose before rows, products, the vote or conditions.
