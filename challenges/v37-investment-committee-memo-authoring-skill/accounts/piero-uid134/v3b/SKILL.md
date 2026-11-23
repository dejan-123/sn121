---
name: countline-memo
description: Writes the five-section investment committee memo from three diligence artifacts by reading each element into a count — blocking rows open or settled, the transferable base, every comparable in or out, the range products — and letting the count alone set the vote: proceed, request more data, or pass, with a hard ceiling inside proceed. No vote before the count; no figure the artifacts do not give.
---

# Count first — the vote reads itself off the count

Three artifacts arrive; five sections leave. Between them, five
readings, each with a default, the case where the default is wrong,
and the test that decides. Nothing enters that the artifacts do not
state; a missing input is named `[to confirm: …]`. The vote is not
stated anywhere before section 4 — it falls out of the count, not
out of the prose.

## Reading 1 — count the open blocking rows

Blocking rows are the ones whose filed label says clear-before-deal
(Must-Address, Critical, Deal-Breaker, Blocker, High). A row filed
below that tier never joins the count, however loud — it takes a
condition or a price mark and a flag that the tier looks light.

Each row reads open or settled:
- `Unresolved`, `In-Progress`, blank or missing → **open**.
- `Resolved` contradicted by another artifact — the narrative or a
  note showing a re-bid running, a review deferred, no closing
  letter → **open**, flag quoting that source.
- `Resolved` where only its own wording still describes the
  exposure — pending claims, a right the contract always held →
  **settled but questioned**; the proving document becomes a
  condition. A row's own description never undoes its status.

Write the count in words under the table: `Open blocking rows: two`
or `none — with the reason`. The count alone sets the vote.

## Reading 2 — the base the buyer keeps

Default: reported revenue and EBITDA are the base. Wrong when part
will not transfer or never was comparable: one-time work, grants or
contracts ending on change of control, customers already cancelled
(the narrative's own post-loss run-rate where given), gross volume
where peers report net. Revenue merely at risk — a re-bid, a
customer near expiry — stays in and is named as downside. Print one
line: `reported − named item = priced base`. Tested add-backs keep
only the plainly one-time; the corrected figure is shown.

## Reading 3 — comps: every name counted in or out

Default: a listed comparable is IN. OUT only for: a control-premium
transaction among trading peers; NM on the metric in use; an outlier
whose gap to its nearest neighbour exceeds the spread of the rest.
Under the table print `Growth gaps to <Target>`, every comp's gap
in points, smallest first, OUT names marked — the two IN comps
nearest the target's growth are the range peers.

## Reading 4 — the range and the ask

Two products written out — low multiple × base, high multiple ×
base, $M to one decimal; quantified debt-like items off each end.
The ask is one implied multiple on the priced base, placed inside /
above / below with the $M gap. Compute only what the vote, the range
or a condition needs.

## Reading 5 — the vote

- Zero open blocking rows → **proceed**, every open lower row a
  named condition; where no blocking-tier row exists at all, say
  plainly no finding is a deal-breaker.
- Every open blocking row answerable by a document →
  **request more data**, naming the record and its issuer. Open
  rows below the blocking tier never downgrade a proceed — their
  asks live inside proceed's conditions.
- An open blocking row incurable → **pass**: unresolved; removes
  what the base prices at a size no range absorbs; no document or
  act before signing cures it. A right lapsing on a date no party
  moves — a patent term, a statutory licence — is incurable where
  the thesis prices it. A refusal counts only unconditional and on
  record — 'indicated', 'may not', 'if the buyer is not…' are
  positions, not refusals; a replaceable role (sponsor, processor,
  licensor of record) stays fillable; a cure's length is not its
  incurability. What no consent papers over is a term barring the
  transfer itself. An ask above range is a price condition, never
  a pass.

## The memo

`## <Target>: investment committee memo` first — nothing before.
Five sections, each heading naming the bound:

1. `### 1. Deal thesis (max 140 words)` — what is bought, the
   figures behind it, the primary risk by row number.
2. `### 2. Risk table (one row per finding)` — # | finding | tier |
   status | state | deciding fact ≤25 words; under it the count in
   words and ≤2 flag lines.
3. `### 3. Defended valuation (max 320 words + table)` — base line,
   comp screen with reasons, growth-gap line, two products, range
   last, ask position.
4. `### 4. Recommendation (max 140 words)` — opens by repeating
   section 2's count, then the vote it gives, deciding rows, the
   price sentence, and a `Verified:` line — every figure identical
   across sections.
5. `### 5. Conditions (max 8 lines)` — numbered, each citing its
   row, the record, the issuer, the timing mark, and the
   consequence: walk, re-price or hold the escrow.

Cut prose before rows, products or conditions. Call read_reference
for `references/countline-example.md` once — form only.
