---
name: ledger-balance
description: >
  [SLOT: 1-3 sentences fully specifying input→output from rubric.txt, e.g.
  "Teaches the agent to post every <INPUT> to a claim-versus-record ledger —
  whose claim, what the record carries, what balance remains — and render a
  standing table with a tally and a written reconciliation."]
---

# Ledger — post every claim, weigh the balance, state the standing

This skill treats <INPUT> as a ledger. Every item is posted twice: once as
the claim, once as the counterweight (what the record actually supports).
The standing of each row falls out of the balance — never from how the item
sounds. The output is a ledger a reviewer can re-foot: every item posted,
every standing traceable, the tally reconciling to the row count.

## Posting rules

**Post 1 — The context line.** Write the anchor before any row: <the
decision/stage/thesis/thresholds/what must be true>. Items mean nothing
without the books they post against — a loud item the books do not depend
on is still a memo line, and a quiet item the books cannot balance without
is the whole account.

**Post 2 — Whose.** Every claim has an owner. The subject's own channel is
a claim, not a confirmation — it posts as "self-reported" and asks for
corroboration. An independent primary record posts heavier than any retold
version. Anonymous, unattributed, or aggregated posts carry no weight on
any topic. A name one letter off is a different party until proven
otherwise — the identity check is itself a posting.

**Post 3 — Standing.** Before weighing, check whether the row is already
posted closed. A row the record marks settled STAYS settled — unless
ANOTHER artifact posts a present fact it cannot balance with (a process
still running, a notice already served, a cure nobody can document). The
row's own claim text never reopens it: those words are what the closer
already weighed. Suspicion does not post; only a contradicting artifact
does. When a later artifact and the posted status genuinely disagree, book
the dispute in writing ("posted settled; the record shows X; carried as
open") — never re-classify silently.

*What this post forecloses:* if every row is settled, nothing downstream
can legitimately reopen the books — and forcing one open anyway is its own
mis-posting.

**Post 4 — Balance.** Each open row gets its counterweight from the record
alone. Two artifacts that disagree are posted as disagreement with the
tiebreaker named — never averaged into a comfortable middle. A balance the
record cannot strike is carried open with the named record that would
strike it.

## Which balances can hold the account

Only rows the input itself filed at the top tier <SLOT: this suite's top
severity label> can hold the account, and only while unreconciled. An
unreconciled balance on a lower tier never holds anything: it posts with a
named disposition — the record, the owner, the timing — and the books
still close. A blocker = a filed top-tier row AND an open balance; nothing
else qualifies, however large the amount reads. Size and tier are different
ledgers.

## The figures ledger

Post every number the same way — claim versus what the record supports:

- **Restate the base.** The headline figure is the filer's claim. Rebuild
  the working figure from the raw entries — strip what does not carry
  <SLOT: domain adjustments — one-off items, non-transferable amounts,
  pass-through volume, contested adjustments>. Show the bridge as journal
  entries: reported figure, each adjustment with its source line, the
  working base.
- **Membership of the comparison set.** Every candidate posts in or out
  with a stated rule (structural mismatch, outlier profile,
  non-comparable basis). Name every one — an unnamed exclusion is an
  unposted adjustment.
- **The ask on the same basis.** Restate the ask against the working base
  and post the gap in the input's units — "materially above" is not a
  posting.
- **Reconciliation.** Every product is written expanded —
  `4.5 × 18.0 = 72 + 9 = 81` — and each endpoint is divided back by the
  base to prove the books close. A figure that cannot be re-footed does
  not post.

## The standing

- **Balanced**: no open top-tier balance remains. When the books allow it,
  state the standing — withholding it is as wrong as closing over an open
  row.
- **Balanced-on-conditions**: no top-tier balance is open, but lower-tier
  opens need named cures — the record, the owner, the deadline. Keep this
  middle standing; do not collapse it into "unreconciled."
- **Open**: a top-tier balance is open and a named record could settle it —
  name the record and the deadline.
- **Unclosable**: a record already balanced against the account, so
  nothing could settle it.

A condition is a named adjusting entry: which record clears it, who posts
it, by when — and the restatement that follows if it does not arrive.
"Follow up" is not an entry.

## The reply

- Line 1: the standing, the one deciding row, and the key figure.
- <SLOT: this suite's required sections, exact headings, word bounds>
- Every numbered input item gets a row: its claim, its counterweight, its
  standing — before any prose.
- Every quantity written as reproducible arithmetic, endpoints divided back.
- Where the books are silent on a quantity, deadline, or owner, say so
  plainly and make obtaining it a condition. An unposted gap is a finding,
  never a plug figure.
- Never reuse one sentence frame across rows — each row gets the words its
  own facts need.
- <SLOT: one invented worked example lives in references/ — ~10–14k chars,
  showing this contract end-to-end, including the
  alternate verdict branches on the same case on an invented ledger. Read it once with
  read_reference before writing; carry its shape and checks, never its
  sentences.>
