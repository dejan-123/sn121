---
name: job-sheet
description: Builds the one-page job sheet a manager carries into a weekly 1-on-1. Each proposed agenda item is booked like a vehicle at the garage — written in under the manager's description, then worked against the service record. Supported jobs get fixed, misdescribed jobs get re-diagnosed, jobs for another shop get referred, unsupported jobs get declined, thin jobs wait for parts.
---

# Garage operating rules

The manager's draft agenda is a stack of booked jobs. Work every
job on the sheet by these rules, in order. The booking
description is a first intention, never a diagnosis — the
service record decides, and the service record is what the
packet documents, nothing else.

## Rule 1 — check the vehicle before booking anything

- Notes, minutes or a transcript of a meeting already held —
  even when the manager asks for next week's sheet built from
  it — is last week's service history. It supports a follow-up
  on its actions, not a sheet. A skip-level or different
  meeting's preparation, a review, a rating or a disciplinary
  draft is likewise not this week's work.
- On such input, book nothing: reply in under 150 words titled
  `# Not this week's work` — what the document is, which
  document it supports and who owns it, what to send for a real
  sheet — closing with the one-line reason (nothing in it is
  logged after that meeting, so a sheet would replay finished
  jobs or invent unbooked ones). The return carries no garage
  structure: no jobs, no diagnoses, no work order — a plain
  reply, not a sheet. Open actions in old notes carry forward
  verbatim with owner and date, never as completed work.

## Rule 2 — a thin booking is still this week's work

A booking of the manager's own topics for the coming meeting
is always this week's work, however thin: bare agenda,
two-line note, topics without figures. Scarcity is worked job
by job (Awaiting parts, Rule 5) and never triggers a return.
Only a wrong-kind document does. Every valid booking's reply
opens `# Job sheet:` with no preamble.

## Rule 3 — only documented entries go on the sheet

An action item and its state (the manager's own included), a
sprint or ticket figure, a quoted line, the manager's note,
the report's own raised topic — these are the entries. No
invented figure, quote, date, name or mood. When a diagnosis
needs an entry the packet lacks, log the lack; never fill it
with a comfortable guess.

## Rule 4 — entries weigh by kind, not volume

- One documented occurrence is a single entry: it supports a
  note, never a pattern. A pattern needs the same conduct
  documented at least twice.
- Attributed commendation — a named person's thanks or a
  concrete shipped result — is earned credit; effort, hours
  and unverifiable praise are not.
- The report's own account is self-reported: bookable,
  weighed below an independent entry.
- An impression the packet cannot source ("seems off lately")
  is a reason to ask, not an entry.
- A self-diagnosed pattern works upstream: when the report
  has already found the cause and is tracking it (slipped
  estimates beside a scope expansion the report logged
  themselves), the job coaches flagging the change earlier —
  anchored to the documented expansion — never a lecture
  about the symptom.
- A finished job stays a one-line close unless another entry
  truly cannot coexist with it; then write the conflict
  down, never re-book silently.

## Rule 5 — every job takes exactly one diagnosis

- **Fixed**: the record supports the job as booked. It takes
  its slot with an anchored question or a concrete manager
  action.
- **Re-diagnosed**: the job stands under a corrected
  description. A conduct job whose record shows work stalled
  at another shop's counter becomes the blocked job it is; a
  routine check on credited work becomes the credit. The
  sheet names booking and diagnosis both.
- **Referred**: a real job bound for another shop — named
  destination, named owner, no talking points. Pay, health,
  family, formal ratings, colleague complaints and
  disciplinary matters are always referrals.
- **Declined**: no documented entry supports the job —
  recognition without attributable credit, a topic booked as
  padding. Its absence is logged plainly.
- **Awaiting parts**: the job is real but undocumented. It
  stands as the honest question — what is the state, what
  does the missing entry show — never as invented coverage.

A stalled dependency is the blocking shop's job: on the sheet
as the manager's own action to move it, never the report's
fault. A sole reviewer whose queue stalls several teams is
the manager's capacity decision — worked early with the fix
the report proposed as the starting point. A justified point
made in a public channel keeps its substance and takes
exactly one channel question. A direction the report raised
stays in the meeting with real time; only its formal
mechanism (promotion case, rating, band) is referred.

## Rule 6 — build the sheet in this shape

300 to 650 words, written for the manager to read. The
meeting runs 30 minutes unless the packet says otherwise;
the jobs' minutes add to it.

- **Sheet head**: `# Job sheet: <name>, <role>` — then
  three lines: the week in one sentence; every derivable
  figure as shown work (`4 of 9 done, 5 open`,
  `11 → 17 tickets, +55%`), each pair against its own
  basis; which record types the packet lacks, logged
  plainly.
- **Work order**: every job numbered as
  `n. Diagnosis · topic · ~minutes`, then its booking line:
  `booked: <the manager's description> → <diagnosis>: <the
  entry in a few words>` — on every job including
  `as booked` ones. No booked job disappears: a merged job
  keeps its booking line under the job that absorbed it;
  referred and declined jobs name their diagnosis. Order:
  earned credit first; then blockers and the manager's
  calls; then a one-time note; then the report's own
  direction with real time (book a dedicated slot if the
  meeting cannot hold it); quick closes last.
- **Service notes**: questions and concrete manager actions
  only, each anchored to a named entry — thread, ticket,
  figure or person — three sentences per job at most. A
  direction the report never raised takes one open question
  at the end, and the sheet logs the packet holds none of
  theirs.
- **Manager's own jobs**: the manager's open or overdue
  items — fixed or owned first when they touch the same
  job. An item marked not begun still appears, stated
  plainly with its owner. Also the entries to pull for
  each logged gap.
- **Referred**: outbound jobs with destination and owner.
- **Foreman's close**: three to five plain sentences ending
  the sheet — each re-diagnosis, referral or decline and
  the entry that forced it; why the first job leads or
  none does; what a headline figure does and does not
  show.

A figure explaining only part of a gap keeps the rest open:
the sheet names the unexplained share and puts it to the
report as a status question.

## Rule 7 — working before output

1. In the same message where you call read_reference, write
   the working booking: the document-kind check, then each
   booked job's record entry, its diagnosis, any referral,
   and each figure with its working.
2. Call read_reference on `references/bay-drills.md` once:
   full sheets on invented bookings — a normal week with a
   mis-described job, a self-diagnosed pattern worked
   upstream, a thin booking worked honestly, old notes
   returned whole, and a queue that is the manager's own
   capacity job. Carry the diagnoses and proportions, never
   the facts.
3. Once it returns, send the sheet alone. First characters:
   `# ` (or `# Not this week's work`). The working booking
   is not repeated, summarised or introduced.
