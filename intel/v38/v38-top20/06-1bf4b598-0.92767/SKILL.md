---
name: strip-board
description: Builds the board a manager reads before a weekly 1-on-1. Each agenda item is worked like a filed flight plan — checked against field conditions, then cleared, corrected, diverted to the field that owns it, grounded for lack of evidence, or held when the packet is thin. Inputs that are not this window's traffic get sent back whole.
---

# Strip-board operating rules

The manager's draft agenda is a stack of filed flight plans. Work
every plan on the strip board by these rules, in order. The filing
is a first intention, never a clearance — field conditions decide,
and field conditions are what the packet documents, nothing else.

## Rule 1 — check the document kind before clearing anything

- Notes, minutes or a transcript of a meeting already held —
  even when the manager asks for the next window's plan built
  from it — is last window's traffic. It supports a follow-up
  on its actions, not a board. A skip-level or different
  meeting's preparation, a review, a rating or a disciplinary
  draft is likewise not this window's traffic.
- On such input, clear nothing: reply in under 150 words titled
  `# Not this window's traffic` — what the document is, which
  document it supports and who owns it, what to send for a real
  board — closing with the one-line reason (nothing in it is
  dated after that window, so a board would replay old
  positions or invent new ones). The turnaround carries no
  board structure: no strips, no clearances, no departure
  order — a plain reply, not a board. Open actions in old
  minutes taxi forward verbatim with owner and date, never as
  current position.

## Rule 2 — a thin packet is still this window's traffic

A packet of the manager's own topics for the coming window is
always this window's traffic, however thin: bare agenda,
two-line note, topics without figures. Scarcity is worked plan
by plan (Holding, Rule 5) and never triggers a turnaround. Only
a wrong-kind document does. Every valid packet's reply opens
`# Strip board:` with no preamble.

## Rule 3 — only documented readings go on a strip

An action item and its state (the manager's own included), a
sprint or ticket figure, a quoted line, the manager's note, the
report's own raised topic — these are the readings. No invented
figure, quote, date, name or mood. When a clearance needs a
reading the packet lacks, log the lack; never fill it with a
comfortable guess.

## Rule 4 — readings weigh by kind, not volume

- One documented occurrence is a single report: it clears a
  note, never a trend. A pattern needs the same conduct
  documented at least twice.
- Attributed commendation — a named person's thanks or a
  concrete shipped result — is earned credit; effort, hours
  and unverifiable praise are not.
- The report's own account is self-reported: boardable,
  weighed below an independent reading.
- An impression the packet cannot source ("seems off lately")
  is a reason to ask, not a reading.
- A self-diagnosed pattern works upstream: when the report has
  already found the cause and is tracking it (slipped estimates
  beside a scope expansion the report logged themselves), the
  strip coaches flagging the change earlier — anchored to the
  documented expansion — never a lecture about the symptom.
- A completed plan stays a one-line close unless another
  reading truly cannot coexist with it; then write the
  conflict down, never re-file silently.

## Rule 5 — every plan takes exactly one clearance

- **Cleared**: the conditions support the plan as filed. It
  takes its slot with an anchored question or a concrete
  manager action.
- **Re-routed**: the plan clears under a corrected filing. A
  conduct plan whose conditions show work stalled at another
  team's door becomes the blocked plan it is; a routine check
  on credited work becomes the credit. The board names filing
  and re-route both.
- **Diverted**: real traffic bound for another field — named
  destination, named owner, no talking points. Pay, health,
  family, formal ratings, colleague complaints and
  disciplinary matters are always diversions.
- **Grounded**: no documented reading supports the plan —
  recognition without attributable credit, a topic filed as
  padding. Its absence is logged plainly.
- **Holding**: the plan is live but undocumented. It clears
  as the honest question — what is the position, what does
  the missing reading show — never as invented coverage.

A stalled dependency is the blocking team's traffic: on the
board as the manager's own action to move it, never the
report's fault. A sole reviewer whose queue stalls several
teams is the manager's capacity decision — cleared early with
the fix the report proposed as the starting point. A justified
point made in a public channel keeps its substance and takes
exactly one channel question. A direction the report raised
stays in the window with real time; only its formal mechanism
(promotion case, rating, band) is diverted.

## Rule 6 — build the board in this shape

300 to 650 words, written for the manager to read. The window
runs 30 minutes unless the packet says otherwise; the strips'
minutes add to it.

- **Board head**: `# Strip board: <name>, <role>` — then
  three lines: the window in one sentence; every derivable
  figure as shown work (`3 of 7 done, 4 open`,
  `9 → 14 tickets, +56%`), each pair against its own basis;
  which record types the packet lacks, logged plainly.
- **Departure order**: every plan numbered as
  `n. Clearance · topic · ~minutes`, then its strip line:
  `filed: <the manager's plan> → <clearance>: <the condition
  in a few words>` — on every plan including `as filed`
  ones. No filed plan disappears: a merged plan keeps its
  strip line under the slot that absorbed it; diverted and
  grounded plans name their clearance. Order: earned credit
  first; then blockers and the manager's calls; then a
  one-time note; then the report's own direction with real
  time (book a dedicated slot if the window cannot hold it);
  quick closes last.
- **Vectors**: questions and concrete manager actions only,
  each anchored to a named reading — thread, ticket, figure
  or person — three sentences per plan at most. A direction
  the report never raised takes one open question at the
  end, and the board logs the packet holds none of theirs.
- **Pre-flight**: the manager's own open or overdue items —
  cleared or owned first when they touch the same traffic.
  An item marked not begun still appears, stated plainly
  with its owner. Also the readings to pull for each logged
  gap.
- **Diversions**: outbound traffic with destination and
  owner.
- **Controller's log**: three to five plain sentences
  closing the board — each re-route, diversion or grounding
  and the condition that forced it; why the first strip
  departs or none does; what a headline figure does and
  does not show.

A figure explaining only part of a gap keeps the rest open:
the board names the unexplained share and puts it to the
report as a status question.

## Rule 7 — working before output

1. In the same message where you call read_reference, write
   the working sheet: the document-kind check, then each
   filed plan's condition, its clearance, any diversion, and
   each figure with its working.
2. Call read_reference on `references/tower-drills.md` once:
   full boards on invented packets — a normal window with a
   mis-filed plan, a self-diagnosed pattern worked upstream,
   a thin packet worked honestly, old minutes turned around
   whole, and a queue that is the manager's own capacity
   matter. Carry the clearances and proportions, never the
   facts.
3. Once it returns, send the board alone. First characters:
   `# ` (or `# Not this window's traffic`). The working
   sheet is not repeated, summarised or introduced.
