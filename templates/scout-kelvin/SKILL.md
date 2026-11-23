---
name: ledger-balance
description: >
  [SLOT: 1-3 sentences fully specifying input→output from rubric.txt, e.g.
  "Teaches the agent to post every <INPUT> to a claim-versus-record ledger —
  whose claim, what weight of evidence, what balance remains — and render a
  standing table with a tally and a written reconciliation."]
---

# Ledger — post every claim, weigh the balance, state the standing

This skill treats <INPUT> as a ledger. Every item is posted twice: once as
the claim, once as the counterweight (what the record actually supports).
The standing of each row falls out of the balance — not from how the item
sounds. The output is a ledger a reviewer can re-foot: every item posted,
every standing traceable, the tally reconciling to the row count.

## Posting rules

**Post 1 — The context line.** Write the anchor before any row: <the
decision/stage/thesis/thresholds/what must be true>. Items mean nothing
without the books they post against.

**Post 2 — Whose.** Every claim has an owner. The target's own channel is a
claim, not a confirmation — it posts as "target voice" and asks for
corroboration. An independent primary record posts heavier than any retold
version of it. Anonymous, unattributed, or aggregated posts carry no weight
on any topic. A name one letter off the party's name is a different party
until proven otherwise — the post is the identity check itself.

**Post 3 — Origins.** Mentions are not origins. One release quoted by three
outlets is one origin — write it as arithmetic in the cell
("2 records, 1 origin"). Independent origins compound; echoed origins do not.

**Post 4 — Balance.** Stated artifacts (labels, scores, tracker statuses)
that contradict the underlying record are stale postings: mark them, override
with the live evidence, name the tiebreaker. Two stated facts in conflict
post as a reconciliation item — the call is "the books disagree," never a
forced clean standing.

**Post 5 — Standing.** Standing follows the stated terms, not severity:
no covering threshold → the item stands low however loud it is; a binary
term naming this exact fact settles it high even on a thin posting. Holds
count as posted settlements: a named review, a requested pause, an
in-flight process suppresses escalation; silence without a reason does not.
Deadline postings run backwards from the hard date — near a line is over it.

**Post 6 — Settlement.** A row that needs a request, a record, or a
confirmation is unsettled — that is a different standing from a row that is
quiet. Quiet rows carry no settlement step. Settlements name the record,
the party, and the timing; anything vaguer is not a settlement.

## Standing vocabulary [SLOT: replace with the suite's tier set]

- `breach` — a stated term fires; settlement named and dated.
- `unsettled` — a step must post before the decision; the step is written.
- `carried` — confirmed, quiet; no settlement.
- `struck` — no origin, no named owner, or outside the books entirely.

## Moved together / split postings

Items corroborating one fact post as a compound entry — same standing,
cross-referenced rows. One input line holding divergent facts splits into
lettered postings (2a/2b), one per class. Never one row per URL.

## The honest ledger

An empty breach column is a valid ledger. If the books balance clean, the
reconciliation says "nothing breaks the books" — plainly, unhedged.
Manufacturing an exception to look diligent is itself a misstatement.

## Under-posted input

If the ledger cannot close because required information is missing, the
deliverable is the open item: state what is missing and the 2–3 plausible
readings it would decide between. Do not post guesses.
[SLOT: delete if no refuse/ask trap in rubric.txt]

## The written reconciliation [SLOT: match rubric.txt deliverables]

Output shape:

1. `**Ledger context**` — anchor line + the standing check stated up front
   ("no stated term fires" is a complete finding).
2. Ledger table: `# | Item | Whose | Origins (count+arithmetic) | Balance |
   Standing | Settlement (record, party, timing — or None)`.
3. `**Moved together:**` — one line per compound entry, why they post as one.
4. `**Tally:** <n per standing>` — re-foots to the row count.
5. `**Reconciliation:**` — one dense paragraph: what breaks the books (or
   that nothing does), then each unsettled row's specific reason in the
   source's own deciding words.

Every item posts. Every standing is traceable. A complete short ledger
beats a truncated long one — cut prose before rows. Any rationale that
could be copied under another row is boilerplate; replace it.

Call read_reference for references/ledger-example.md and write the reply in
that shape.
