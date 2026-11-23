---
name: first-question-review
description: >
  [SLOT: 1-3 sentences fully specifying input→output from rubric.txt, e.g.
  "Teaches the agent to convert every item in an <INPUT> into the question it
  actually raises for the decision — then answer each question only from the
  evidence present, and mark what stays open."]
---

# First Question — every item is a question before it is an answer

This skill reads <INPUT> the way a skeptic reads it: each item is not a fact
to file, it is a question the decision needs answered. The method converts
every item into its sharpest question, answers only from evidence actually
in the record, and reports what stays open. The output is a question-answer
table where every answer is traceable and every open item is named — not a
smooth summary that hides the doubts.

## The questioning pass

**Pass 1 — Frame.** Write what decision this analysis serves and what must
be true for it: <decision, stage, stated thresholds, the question the whole
input must answer>. Items only matter against that frame.

**Pass 2 — Sharpen.** Convert each item to its real question. A press release
is not "a press release" — it is "is this claim independently true?" A missing
record is "does the record exist?" An unnamed source is "can anyone stand
behind this?" — and the answer is always no, whatever the topic. A name that
is one letter off is "is this the same party?" — unanswered until identity
checks, never assumed.

**Pass 3 — Origins.** Before answering, count who independently said it.
Three citations of one release = one voice. Write the count as arithmetic in
the cell. One voice says "claimed"; independent voices say "established."

**Pass 4 — Answer honestly.** Answer only what the record supports. A
dashboard that contradicts the evidence gets answered by the evidence —
name the artifact, cite the tiebreaker. Two inputs that disagree with each
other get the answer "the record contradicts itself" — flagged as a
data-quality question, never resolved by picking the nicer fact.

**Pass 5 — Weight.** Answers tier by the stated terms, not by how urgent the
question sounds. No covering threshold → stays open-and-low however loud.
A binary term naming this exact question answers itself. A documented hold
is an answer ("deliberately waiting") — unexplained silence is not. Run
hard deadlines backwards: the question "can it close in time?" is decided
by the date, not by how close it looks.

**Pass 6 — The next ask.** An open question needs its next ask named: the
record, the party, the timing. A closed question needs nothing — giving a
settled item a follow-up task is noise, not diligence.

## Answer vocabulary [SLOT: replace with the suite's tier set]

- `blocks` — the answer kills the stated terms; the named ask is dated.
- `open` — needs the named ask before the decision.
- `settled` — answered, quiet; no ask attached.
- `moot` — unanswerable by design (no owner/origin) or outside the frame.

## Combine and divide

Items that answer the same underlying question share one answer and
cross-reference. One input item raising divergent questions splits into
lettered questions (3a/3b), one per status. Never one question per source.

## The honest open set

"All questions answered, nothing blocks" is a complete deliverable when the
record supports it. Never invent a blocking question to seem thorough — an
empty blocking set is a finding, stated plainly.

## When the frame itself is missing

If the decision, audience, or required input is absent so no honest answer
exists, the output IS the question: name what is missing and offer 2–3
plausible frames the data could serve. Answering confidently into a missing
frame is the failure this skill exists to prevent.
[SLOT: delete if rubric.txt plants no refuse/ask trap]

## Writing the Q&A [SLOT: match rubric.txt deliverables]

Output shape:

1. `**The frame**` — decision anchor + the headline answer ("nothing blocks"
   is complete).
2. Question table: `# | The question | Voices (count+arithmetic) | Answer |
   Standing | Next ask (record, party, timing — or None)`.
3. `**Still open:** <count>` and `**Answered:** <count>` — reconciles to rows.
4. `**The read:**` — one dense paragraph naming each open question's specific
   stakes in the source's deciding words.

Every item becomes a question. Every question gets an honest answer.
Complete beats comprehensive: cut narration before cutting rows. An answer
that could be swapped under another question is boilerplate — replace it.

Call read_reference for references/questions-example.md and write the reply
in that shape.
