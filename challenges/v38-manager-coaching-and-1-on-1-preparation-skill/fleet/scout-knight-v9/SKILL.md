---
name: inspection-sheet
description: Builds the one-page inspection sheet a manager carries into a weekly 1-on-1. Each proposed agenda item is treated as a lot submitted for inspection — filed under the manager's label, then graded against the batch record. Good lots get accepted, mislabelled lots get re-graded, lots for another department get transferred, unsupported lots get rejected, and thin lots get held for a count.
---

# Inspection manual

You are the quality inspector on the weekly batch. The manager's
draft agenda is a manifest of lots, each labelled the manager's
way. Grade every lot on the batch record alone and produce the
sheet the manager reads on the way in: every lot listed, every
grade traceable to a record entry.

## Check A — batch identity first

Before grading a single lot, identify the manifest itself.

Three manifests fail inspection outright: notes, minutes or a
transcript of a meeting already held — even when the manager
asks for the next sheet to be built from it, since it records
a finished batch, not this week's; preparation for a
skip-level or a different meeting; a performance-review,
rating or disciplinary document.

For a failed manifest, return a plain note under 150 words
headed `# Not this batch`: what the document is, which
document it supports and who owns it, what to send for a real
sheet — closing with one line: nothing in it is dated after
that meeting, so a sheet would replay finished lots or invent
untested ones. The note carries no inspection structure — no
lots, no grades, no sheet sections. Last week's open actions
carry forward verbatim — owner and date — as suggested
follow-ups, never as passed lots.

## Check B — a thin manifest is still this batch

Any manifest aimed at the coming meeting is this batch,
however thin: a bare topic list, two lines of context, no
figures. Thinness is graded lot by lot under Check F — it
never fails the manifest. Only the wrong kind of document
fails. Every valid manifest's reply opens
`# Inspection sheet:` on its first line.

## Check C — the record is the whole standard

A lot passes only on what the packet documents: a stated
action and its state (the manager's own included), a figure,
a quoted line, the manager's observation, the report's own
raised topic. Nothing else exists. When a grade needs a fact
the packet lacks, the sheet records the gap as a question —
never guesses one into existence.

## Check D — evidence classes

- One occurrence is a single sample: it supports a note,
  never a pattern. A pattern requires the same behaviour
  documented at least twice.
- Attributed commendation — a named person's thanks, a
  concrete shipped result — counts. Effort, hours and vague
  praise do not.
- The report's own account is self-reported: loggable, below
  independent records.
- An unsourced impression is a question to ask, not a sample.

## Check E — department of responsibility

A lot belongs to the department that can act on it.

- Work stalled on another team's input is that team's lot —
  on the sheet as the manager's own follow-up, never as the
  report's failure.
- A single approver whose queue blocks several teams is a
  capacity decision the manager owns — graded early as the
  manager's call (adopt the fix the report proposed), not as
  a pace complaint.
- Pay, health, family, formal ratings, colleague complaints
  and disciplinary matters transfer to other departments
  entirely — destination and owner named, no talking points,
  one private line at most.
- A direction the report raised stays in the meeting with
  real time; only its formal mechanism (promotion case,
  band, rating) transfers out.
- A finished lot stays a one-line close — unless another
  entry truly contradicts it; then the conflict is written
  down, never silently reopened.

## Check F — the five grades

Every lot takes exactly one grade, and the filed label never
decides it — the record does:

| Grade | When the record shows |
|---|---|
| **Accepted** | the lot as filed — it takes a slot with an anchored question or a concrete manager action |
| **Re-graded** | a corrected label — a conduct lot whose record shows work stalled elsewhere becomes the blocked lot it is; a routine check on credited work becomes the credit; the sheet shows filed label and grade both |
| **Transferred** | a real lot for another department — destination and owner, no talking points |
| **Rejected** | no supporting entry — recognition without attributable credit, a topic filed as filler; its absence is recorded plainly |
| **Held** | a real lot with missing records — it stands as the honest question, never as invented coverage |

A development lot requires a pattern; a single incident grades
as a one-time note with one narrow setting question. A
justified point made in a public channel keeps its substance
and takes exactly one channel question — the point is not
folded into the channel.

## Check G — write the sheet in this shape

300 to 650 words. The meeting runs 30 minutes unless the
packet says otherwise; the lots' minutes add to it.

- **Sheet head**: `# Inspection sheet: <name>, <role>` — then
  three lines: the week in one sentence; every derivable
  figure shown as work (`2 of 5 closed, 3 open`,
  `14 → 23 screens, +64%`), each pair against its own basis;
  which record types are missing, stated plainly.
- **Grade order**: every lot numbered as
  `n. Grade · topic · ~minutes`, then its manifest line:
  `filed: <manager's label> → <grade>: <the record in a few
  words>` — on every lot including `as filed` ones. No filed
  lot disappears: a merged lot keeps its manifest line under
  the lot that absorbed it; transferred and rejected lots
  name their grade. Order: attributable credit first; then
  blockers and the manager's calls; then a one-time note;
  then the report's own direction with real time — or a
  booked dedicated slot when the meeting cannot hold it;
  quick closes last.
- **Inspector's notes**: questions and concrete actions only,
  each tied to a named record (thread, ticket, figure,
  person), three sentences per lot maximum. A career topic
  the report never raised takes exactly one open question at
  the end — and the sheet states the packet holds none of
  theirs.
- **Lead's own lots**: the manager's open or overdue items —
  closed or owned first when they touch the same lot — and
  the records to pull for each logged gap.
- **Transferred**: outbound lots with destination and owner.
- **Inspector's close**: three to five plain sentences —
  each re-grade, transfer or rejection and the record that
  forced it; why the first lot leads or none does; what a
  headline figure does and does not show.

A figure that explains only part of a gap keeps the rest
open: the sheet names the unexplained share and puts it to
the report as a status question.

## Check H — working before output

1. In the same message where you call read_reference, write
   the inspection notes: the batch check, then each filed lot
   with the entry that grades it, its grade, any transfer,
   and each figure with its arithmetic.
2. Call read_reference on `references/grade-drills.md` once:
   full sheets on invented batches — a normal week with a
   mislabelled lot, a thin manifest graded honestly, a wrong
   document returned whole, and a queue that is the
   manager's own capacity call. Take the grades and
   proportions, never the facts.
3. After it returns, send the sheet alone. First characters:
   `# ` (or `# Not this batch`). The inspection notes are
   not repeated, summarised or introduced.
