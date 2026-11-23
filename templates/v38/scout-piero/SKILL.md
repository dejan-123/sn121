---
name: gatecheck-triage
description: >
  [SLOT: 1-3 sentences fully specifying the input and the declared deliverable
  in rubric.txt, e.g. "Teaches the agent to run every item in a retrieved
  <INPUT TYPE> through an ordered gate sequence — attribution, standing,
  evidence, threshold — and emit a verdict table with a reconciled count and
  a plain-language read."]
---

# Gatecheck — every item passes the same gates, in the same order

This skill triages <INPUT TYPE> for <DECISION CONTEXT>. It does not score
overall risk and it does not editorialize. It runs each item through a fixed
gate sequence, assigns each item a verdict from a closed vocabulary, and
writes a self-reconciling report a reviewer can audit line by line.

## The gate sequence

Run gates in order. An item stops at the first gate that settles it.

**Gate 1 — Anchor.** Before touching any item, write the working anchor:
<the target/decision, the stage, any stated thresholds, the question this
analysis must answer>. If the input does not say it, say that — a stated
absence is itself a finding, not a gap to fill with a guess. An item that
looks alarming but that the anchor does not depend on still passes this
gate.

**Gate 2 — Attribution.** Who stands behind the item? Named party → it can
carry weight. Unnamed/anonymous/aggregated source → lowest tier,
unconditionally, however alarming the content. A near-match name never
elevates: "identity unproven" is the verdict, not a footnote.

**Gate 3 — Standing.** Is the item still open? An item the record marks
resolved, closed, or filed STAYS resolved — unless ANOTHER artifact states
a present fact it cannot coexist with (a process still running, a notice
already served, a cure nobody can document). The item's own text never
reopens it: its words describe what the closer already weighed. Suspicion
is not a contradiction; a resolved item with alarming content is still
resolved — flag why the tier looks low and carry it as filed. When a later
artifact and the mark genuinely disagree, log the gate failure in writing
("marked cleared; the record shows X; held open") — never re-tier
silently.

*What this gate forecloses:* if every item clears standing, nothing later
can legitimately stop the sequence — and manufacturing a stop is its own
gate failure.

**Gate 4 — Evidence.** For open items: what does the record support?
Conflicting artifacts are reported as conflict with the tiebreaker named —
never resolved by picking the favorable fact. Evidence the record lacks is
an open item with the named record that would close it.

**Gate 5 — Measure.** Run the same gates on the numbers. Rebuild the
working figure from the raw entries — strip what does not carry <SLOT:
domain adjustments — one-off items, non-transferable amounts, pass-through
volume, contested adjustments>; show the bridge: reported figure, each
deduction with its source, the working base. A comparison set is gated the
same way: every member passes in or out with a stated rule (structural
mismatch, outlier profile, non-comparable basis), all named. Restate the
ask on the working base and give the gap in the input's units. Every
product written expanded — `4.5 × 18.0 = 72 + 9 = 81` — endpoints divided
back by the base to prove they clear.

## Which gates can stop the verdict

Only items the input itself filed at the top tier <SLOT: this suite's top
severity label> can stop the sequence, and only while failing Gate 3. An
open item on a lower tier never stops anything: it routes to conditions
with the record, the owner, the timing named — and the verdict issues. A
stopper = filed top-tier AND open; nothing else qualifies, however severe
it reads.

## The verdict

- **Clear**: every top-tier gate passed. When the table allows it, the
  verdict issues — a withheld verdict fails as surely as a wrong one.
- **Clear-with-conditions**: every top-tier gate passed, but lower-tier
  opens need named cures — the record, the owner, the deadline. Keep this
  middle verdict; do not collapse it into "hold."
- **Hold**: a top-tier gate is open and a named record could clear it —
  name the record and the deadline.
- **Barred**: a record already ruled against passage, so nothing could
  clear it.

A condition is a gate-clearance order: which record clears it, who produces
it, by when — and the re-run that follows if it does not arrive. "Follow
up" is not a clearance order.

## The reply

- Line 1: the verdict, the one deciding item, and the key figure.
- <SLOT: this suite's required sections, exact headings, word bounds>
- Every numbered input item gets a row: gates passed, verdict, disposition —
  before any prose.
- Every quantity written as reproducible arithmetic, endpoints divided back.
- Where the record is silent on a quantity, deadline, or owner, say so
  plainly and make obtaining it a condition. A silent gate is logged, never
  filled.
- Never reuse one sentence frame across items — each item gets the words
  its own facts need.
- <SLOT: one invented worked example lives in references/ — ~10–14k chars,
  showing this contract end-to-end, including the
  alternate verdict branches on the same case on an invented input. Read it once with
  read_reference before writing; carry its shape and checks, never its
  sentences.>
