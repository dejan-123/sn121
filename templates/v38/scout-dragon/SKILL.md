---
name: first-question-review
description: >
  [SLOT: 1-3 sentences fully specifying input→output from rubric.txt, e.g.
  "Teaches the agent to convert every item in an <INPUT> into the question it
  actually raises for the decision — then answer each question only from the
  evidence present, and name what stays open."]
---

# First Question — every item is a question before it is an answer

This skill reads <INPUT> the way a skeptic reads it: each item is not a fact
to file, it is a question the decision needs answered. Every item becomes
its sharpest question; each question is answered only from evidence actually
in the record; whatever the record cannot answer is named openly. The output
is a verdict a reviewer can re-derive — not a smooth summary that hides the
doubts.

## The questioning pass

**Pass 1 — Frame the real question.** Write what decision this analysis
serves and what must be true for it: <decision, stage, stated thresholds,
the question the whole input must answer>. Items only matter against that
frame — a frightening item that the frame does not depend on is still a
detail, and a quiet item the frame cannot survive without is the whole
decision.

**Pass 2 — Sharpen each item into its question.** A document is never just
a document: a press release is "is this claim independently true?"; a
missing record is "does the record exist?"; an unnamed source is "can
anyone stand behind this?" — always no, whatever the topic; a name one
letter off is "is this the same party?" — unanswered until identity
checks. Write the question each item actually raises before touching its
content.

**Pass 3 — Is the question still open?** This is the pass most analyses
skip, and where they die. An item the record marks answered, closed, or
filed STAYS answered — unless ANOTHER artifact states a present fact the
answer cannot coexist with (a process it says is still running, a notice
already served, a cure nobody can document). The item's own text never
reopens it: the finding's words describe what the author weighed when
closing it. Suspicion is not a contradiction; a scary sentence inside a
closed item is still a closed item. When a later artifact and the label
genuinely disagree, say so explicitly ("marked answered; the record shows
X; treated as open") — never reopen silently.

*What this pass forecloses:* if every question is closed, nothing later can
legitimately change the call — and reopening one anyway is its own error.

**Pass 4 — Answer only what the record supports.** When artifacts
disagree, name the artifact that decides and quote the tiebreaker. An
answer the record does not contain is written as an open question with the
named record that would settle it — never filled with a plausible guess.
Derived arithmetic is an answer; an invented input is not.

## Which questions can hold the call

Only questions the input itself filed at the top tier <SLOT: this suite's
top severity label> can hold back the decision, and only while open. An
open question on a lower tier never holds anything: it is answered with a
named disposition — the record, the owner, the timing — and the call
proceeds. A blocker = filed top-tier AND still open; nothing else
qualifies, however urgent it reads. Tier and scariness are different axes.

## The numbers question

Ask the same skeptic's questions of every figure:

- **Is this the right base?** Rebuild the operative quantity from the raw
  material — strip what does not carry <SLOT: domain adjustments — one-off
  items, non-transferable amounts, pass-through volume, contested
  adjustments>. Show the bridge: reported figure, each deduction with its
  source, the working base.
- **Which comparisons earn a seat?** Every member of a comparison set is in
  or out, each with a stated reason (structural mismatch, outlier profile,
  non-comparable basis). Name them all.
- **Is the ask measured on the same basis?** Restate it on your working
  base and state the gap in the input's units — never "looks rich."
- **Is the arithmetic reproducible?** Write every product expanded —
  `4.5 × 18.0 = 72 + 9 = 81` — and divide the endpoint back by the base to
  prove it closes.

## The verdict

Four shapes, never fewer than the record allows:

- **Settled**: no open top-tier question remains. When the questions allow
  it, the call is issued — holding back is as wrong as deciding over an
  open gate.
- **Settled-on-conditions**: no top-tier question is open, but lower-tier
  opens need named cures — the record, the owner, the deadline. Keep this
  middle call; do not collapse it into "unanswered."
- **Unanswered**: a top-tier question is open and a named record could
  close it — name the record and the deadline.
- **Failed**: a record already answered against the decision, so nothing
  could settle it.

A condition is itself a question with a named answerer: which record cures
it, who produces it, by when — and what follows if it does not arrive.
"Investigate further" is not a condition.

## The reply

- Line 1: the verdict word, the one deciding item, and the key figure.
- <SLOT: this suite's required sections, exact headings, word bounds>
- Every numbered input item gets a row: its question, its standing, its
  disposition — before any prose.
- Every quantity written as reproducible arithmetic, endpoints divided back.
- Where the input is silent on a quantity, deadline, or owner, say so
  plainly and make obtaining it a condition. Silence is a finding, not an
  invitation to invent.
- Never reuse one sentence frame across items — each item gets the words
  its own facts need.
- <SLOT: one invented worked example lives in references/ — ~10–14k chars,
  showing this contract end-to-end, including the
  alternate verdict branches on the same case on an invented case. Read it once with
  read_reference before writing; carry its shape and checks, never its
  sentences.>
