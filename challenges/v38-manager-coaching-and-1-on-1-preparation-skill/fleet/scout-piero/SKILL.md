---
name: gatecheck-triage
description: >
  Teaches the agent to run every item in a manager's weekly 1-on-1 prep input through an ordered gate sequence — filed-vs-invented, label-vs-signals, venue, warrant, anchor — and emit a prep brief with a classified agenda and a parking lot — and to bounce inputs that fail the first gate: records of meetings already held, another room's prep, review paperwork.
---

# Gatecheck — every item passes the same gates, in the same order

This skill triages a weekly 1-on-1 prep input for a manager building the
meeting brief. It does not score
overall risk and it does not editorialize. It runs each item through a fixed
gate sequence, assigns each item a verdict from a closed vocabulary, and
writes a self-reconciling report a reviewer can audit line by line.

## The gate sequence

Run gates in order. An item stops at the first gate that settles it —
and the input itself stops at Gate 0.

**Gate 0 — Admissibility.** Before any item runs, the input itself faces
the first gate: can it enter the sequence at all? Three arrivals fail:

- **Only a record of a meeting already held** — minutes, notes, a
  transcript. It documents a session that closed; a brief built on it
  re-runs a settled sequence and misses everything that moved since.
  (Notes arriving beside real signals pass — the signals are the input,
  the notes are context.)
- **Prep addressed to a different proceeding** — a skip-level, a panel,
  a review the manager must write. Wrong sequence, wrong output.
- **Review paperwork** — a rating draft, a calibration write-up. A
  different instrument.

A failed input exits with a bounce, not a brief: under ~180 words,
headed `# Not a 1-on-1 prep input` — what the input actually is and
the detail that flags it, why a brief run on it would mislead, what to
send instead (this week's signals — open action items, the week's
figures, threads, the manager's own topics), and any open actions it
does carry, with the owners and dates it gives. Nothing else — no
agenda, no talking points, no parking lot.

**Gate 1 — Anchor.** Before touching any item, write the working anchor:
the report, the meeting date, and what the brief must answer. If the
input does not say it, say that — a stated
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

**Gate 5 — Measure.** Run the same gates on the numbers. Every raw figure
in the header is a claim; the derived figures — point changes, completion
rates, blocked counts, scope deltas — are what must actually pass. Show
each bridge: the reported figures, the operation, the result. An overdue
item held upstream passes as blocked, not delinquent — the dependency
fails the manager's gate, not the report's. A due date passes only as an
interval to the meeting date, never as a copied label. Before the header
clears, every comparable pair the input offers passes the gate — each
raw figure against the figure it belongs to — so no derivable figure is
skipped. Every figure
written expanded — `3 of 8 = 37.5%`, `61 → 74 = +13 (+21%)` — re-derived
from the input alone or it does not clear.

## Which gates can stop the verdict

Only items the input itself filed at the top gate — a topic the manager's
draft agenda or the report's own submission actually filed, nothing the
sequence invents — can stop the sequence, and only while failing Gate 3. An
open item on a lower tier never stops anything: it routes to conditions
with the record, the owner, the timing named — and the verdict issues. A
stopper = filed top-tier AND open; nothing else qualifies, however severe
it reads.

## The verdict

Each filed item exits the sequence through exactly one gate:

- **Clear**: the signals pass the item as filed — it proceeds with its
  anchored question. When the gates allow it, the item clears — demoting
  it fails as surely as a wrong pass.
- **Clear-with-conditions**: the item passes but re-shaped — a coaching
  label the signals soften to a question, a status that is really a
  blocker for the manager to clear. Keep this middle gate; do not
  collapse it into either side.
- **Held**: the item is real but fails the venue gate — a sensitive
  matter, a session that belongs elsewhere, an escalation on the
  manager's side of the sequence. It exits with a named venue and no
  talking points.
- **Barred**: nothing in the record warrants the item — the recognition
  with no signal, the padding topic. Its exclusion is stated plainly.

A condition is a gate-clearance order: which record clears it, who produces
it, by when — and the re-run that follows if it does not arrive. "Follow
up" is not a clearance order.

## The reply

Two outputs only — the brief or the bounce, never a hybrid.

**The brief** — 350 to 700 words, the page a manager carries in:

- `# 1-on-1 brief: <report name>, <role>`
- `**This week:**` two to four sentences on what the sequence cleared —
  what matters most and why. Figures pass with their working (`94% SLA
  against 89% last month`, `2 of 3 actions done; the overdue one is the
  manager's`), every comparison showing both operands. When a class of
  evidence is absent, say which ("no ticket figures or threads this
  week").
- `**Order:**` one sentence on why the items run as they do — an earned
  recognition first, then what blocks work or needs the manager's call,
  feedback and coaching with real time, quick closes last.
- `## Agenda` — numbered items `### 1. <short topic> · <Type>`, the type
  drawn from Recognition / Status / Feedback / Coaching / Career — the
  gates' call, not the label's. Under each heading, one line:
  `Manager's label: <their word>, kept` or `Manager's label: <their
  word> → <Type>: <the evidence that decides it>` — or `Added: <signal>`
  for an item the record demands but the draft omits. Every filed item
  appears once: one merged into another keeps its own label line under
  the item that absorbed it. Then the talking points: questions only,
  each gated to a named signal — a thread, a ticket, a figure, a
  person — at most three sentences; statements and unanchored questions
  do not pass. Status points name what the manager must decide or
  clear, with no deadline the input does not give.
- `## Parking lot` — one line per item the venue gate held: named
  neutrally, its correct venue, its owner — zero talking points.
  Sensitive matters, the manager's own escalations, and any item the
  record cannot warrant land here; the last kind gets one clause on
  why it does not clear. `Nothing this week.` when empty.
- Recognition opens the brief only when a signal warrants it — a named
  anchor, or `No recognition opener: <reason>` as the first line under
  `## Agenda`.
- Where the record is silent on a quantity, deadline, or owner, say so
  plainly — a silent gate is logged, never filled.
- The output presents as a finished brief, not a gate log: prose and
  named lines a manager reads plainly — a reader sees a good brief,
  never the sequence that produced it, and nothing audits itself after
  the parking lot.
- Never reuse one sentence frame across items — each item gets the
  words its own facts need.
- A worked example lives in references/weekly-prep-brief.md — the brief
  written end-to-end on invented weeks: the item the label mis-routes,
  the sensitive item held, the thin week logged with its gaps named,
  and a notes-only ask answered with the bounce. Read it once with
  read_reference before writing; carry its shape and checks, never its
  sentences.
