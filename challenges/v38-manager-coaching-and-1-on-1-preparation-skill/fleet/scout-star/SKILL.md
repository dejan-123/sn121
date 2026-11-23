---
name: verdict-map
description: >
  Teaches the agent to treat every agenda item in a manager's weekly 1-on-1 input as a candidate classification waiting for its trigger — map each item to the signal condition that would decide its shape, check whether the trigger fired, and render the prep brief — and to return unbriefable inputs to sender: records of meetings already held, another room's prep, review paperwork.
---

# Verdict Map — find the trigger, check if it fired, record the verdict

This skill maps the input as precedent. Every item has exactly one verdict
that the stated terms would award it — the work is finding the deciding
trigger for each item and checking honestly whether it fired. The output is
the map itself: item → trigger → fired? → verdict → disposition, so a
reviewer can audit the reasoning instead of trusting a tone.

## The mapping pass

**Map 0 — Does this input belong on the map at all?** Before any item is
mapped, map the input itself. Three arrivals have no triggers to fire:

- **Only a record of a meeting already held** — minutes, notes, a
  transcript. Its triggers all fired in last week's session; mapping it
  as this week's input re-runs a closed map and misses everything that
  moved since. (Notes arriving beside real signals are fine — the
  signals are what get mapped.)
- **Prep addressed to a different map** — a skip-level, a panel, a
  review the manager must write. Wrong territory.
- **Review paperwork** — a rating draft, a calibration write-up. A
  different instrument.

Each returns with a redirect, not a brief: under ~180 words, headed
`# Not a 1-on-1 prep input` — what the input actually is and the detail
that shows it, why a brief mapped from it would mislead, what to send
instead (this week's signals — open action items, the week's figures,
threads, the manager's own topics), and any open actions it does carry,
with the owners and dates it gives. Nothing else — no agenda, no
talking points, no parking lot.

**Map 1 — The governing terms.** Write the frame first: the report, the
meeting date, every stated deadline and condition, what this brief
decides. Verdicts exist only under these terms — an item with no
governing term
defaults to the floor, however dramatic, and a quiet item sitting on a
governing term is the whole map.

**Map 2 — Ownership of the verdict.** Who may trigger elevation? Only a
named party's own record or an independent corroborating one. An unnamed
item can never fire a trigger — its verdict is fixed at the floor before
analysis. A near-match identity suspends the item at "identity unproven" —
that is its verdict, not a footnote.

**Map 3 — Trigger state.** Before scoring, check whether the trigger is
already spent. A trigger the record marks fired, cleared, or closed STAYS
cleared — unless ANOTHER artifact states a present fact it cannot coexist
with (a process still running, a notice already served, a cure nobody can
document). The item's own text never re-arms a cleared trigger: its words
describe what was weighed when it cleared. Suspicion does not re-arm; only
a contradicting artifact does. When a later artifact and the recorded state
genuinely disagree, mark the contested trigger in writing ("mapped cleared;
the record shows X; carried armed") — never re-map silently.

*What this pass forecloses:* if every top-tier trigger is spent, no verdict
downstream can legitimately be withheld — and re-arming one anyway is its
own mapping error.

**Map 4 — Fire check.** For live triggers: did it fire? Judge by the stated
terms, not by how the item sounds. Two artifacts disagreeing is recorded
as disagreement with the tiebreaker named — never averaged. A trigger the
record cannot resolve is mapped open with the named record that would
decide it.

## The quantities map

Map the numbers the same way — each figure to the term that governs it:

- **The derived figures.** Every raw number in the input maps to what it
  computes to: point changes, completion rates, blocked counts, scope
  deltas. Show each mapping — the reported figures, the operation, the
  result.
- **Blocked versus delinquent.** An overdue item held by an upstream
  dependency maps to blocked, never to neglect — the trigger sits on the
  manager's side, not the report's.
- **The due-date map.** Every deadline maps to the interval against the
  meeting date — the gap is computed, never copied.
- **Every pair mapped.** Before the header is drawn, each comparable
  pair the input offers is on the map — every raw figure against the
  figure it belongs to — so no derivable figure goes unmapped.
- **Every product.** Written expanded — `3 of 8 = 37.5%`,
  `61 → 74 = +13 (+21%)` — re-derived from the input alone to confirm
  the map closes.

## Which triggers can void the map

Only triggers the input itself filed — a topic the manager's draft agenda
or the report's own submission actually filed, nothing the map invents —
can void the call, and only while armed/open. An open
trigger on a lower tier never voids anything: it maps to a named
disposition — the record, the owner, the timing — and the map still
resolves. A void = filed top-tier AND armed/open; nothing else qualifies.

## The verdict

Every filed item resolves to exactly one mapping — four shapes, never
fewer than the triggers allow:

- **Resolved**: the signals map the item as filed — it keeps its anchored
  question. When the map allows it, the item resolves — demoting it is as
  wrong as clearing over an armed trigger.
- **Resolved-with-conditions**: the item resolves but re-mapped — a
  coaching label the signals soften to a question, a status that is
  really a blocker on the manager's side of the map. Keep this middle
  mapping; do not collapse it into "pending."
- **Pending**: the item is real but belongs to another venue — a
  sensitive matter, a session of its own, an escalation on the
  manager's side. It maps to a named venue, never to talking points.
- **Void**: nothing in the record warrants the item — the recognition
  with no signal, the padding topic. Its absence is itself mapped.

A condition is a named clearing trigger: which record fires it, who
produces it, by when — and the remapped verdict that follows if it never
fires. "Monitor" is not a clearing trigger.

## The reply

Two renders only — the brief or the redirect, never a hybrid.

**The brief** — 350 to 700 words, the page a manager carries in:

- `# 1-on-1 brief: <report name>, <role>`
- `**This week:**` two to four sentences on what the map resolved — what
  matters most and why. Figures map with their working (`94% SLA against
  89% last month`, `2 of 3 actions done; the overdue one is the
  manager's`), every comparison showing both operands. When a class of
  signal is absent, say which ("no ticket figures or threads this week").
- `**Order:**` one sentence on why the items run as they do — an earned
  recognition first, then what blocks work or needs the manager's call,
  feedback and coaching with real time, quick closes last.
- `## Agenda` — numbered items `### 1. <short topic> · <Type>`, the type
  drawn from Recognition / Status / Feedback / Coaching / Career — the
  map's call, not the label's. Under each heading, one line:
  `Manager's label: <their word>, kept` or `Manager's label: <their
  word> → <Type>: <the signal that decides it>` — or `Added: <signal>`
  for an item the record demands but the draft omits. Every filed item
  appears once: one merged into another keeps its own label line under
  the item that absorbed it. Then the talking points: questions only,
  each mapped to a named signal — a thread, a ticket, a figure, a
  person — at most three sentences; statements and unanchored questions
  stay off the map. Status points name what the manager must decide or
  clear, with no deadline the input does not give.
- `## Parking lot` — one line per item mapped to another venue: named
  neutrally, its venue, its owner — zero talking points. Sensitive
  matters, the manager's own escalations, and any item the record
  cannot warrant land here; the last kind gets one clause on why it
  does not resolve. `Nothing this week.` when empty.
- Recognition opens the brief only when a signal fires for it — a named
  anchor, or `No recognition opener: <reason>` as the first line under
  `## Agenda`.
- Where the map has no governing fact for a quantity, deadline, or
  owner, say so plainly — an unmapped gap is a finding, never an
  interpolated value.
- The brief renders the map's conclusions, not the map: prose and named
  lines a manager reads plainly — a reader sees a good brief, never the
  triggers behind it, and nothing summarizes itself after the parking
  lot.
- Never reuse one sentence frame across items — each item gets the
  words its own facts need.
- A worked example lives in references/weekly-prep-brief.md — the brief
  drawn end-to-end on invented weeks: the item the label mis-maps, the
  sensitive item parked, the thin week with its gaps named, and a
  notes-only ask answered with the redirect. Read it once with
  read_reference before writing; carry its shape and checks, never its
  sentences.
