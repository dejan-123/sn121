---
name: claims-desk
description: Builds the one-page desk sheet a manager carries into a weekly 1-on-1. Each proposed agenda item is handled like a claim filed at the desk — submitted under the manager's label, then settled against the file record. Supported claims get paid, mislabelled claims get re-assessed, claims for another desk get referred, unsupported claims get denied, thin claims stay pending.
---

# Claims desk field manual

The manager's draft agenda arrives as a stack of filed claims.
Each one is labelled the manager's way — the label is the filing,
not the settlement. Settle every claim on the file record alone:
what the packet documents, nothing it does not. Produce the desk
sheet the manager reads on the way in — every claim listed, every
settlement traceable to a file entry.

## §1 File identification

Determine what was actually submitted before settling anything.

- Minutes, notes, or a transcript of a meeting already held are
  an archive file, not a claims file — even when the manager
  asks for the next sheet built from them. What they support is
  a follow-up on the recorded actions.
- Skip-level preparation, a different meeting, a review, a
  rating, or a disciplinary document is likewise not a claims
  file.
- On an archive file, settle nothing. Return a plain note under
  150 words headed `# Not this week's file`: what the document
  is, which document it supports and who owns it, what to send
  for a real sheet — closing with one line: nothing in it is
  filed after that meeting, so a sheet would re-settle closed
  claims or invent unfiled ones. The note carries no desk
  structure — no claims, no settlements, no sheet sections.
  Open actions in the archive carry forward verbatim — owner
  and date — as suggested follow-ups, never as settled claims.
- Any file aimed at the coming meeting is a live file, however
  thin: bare agenda, two lines, no figures. Thinness is settled
  claim by claim under §4 — never a reason to return the file.
  Every live file's reply opens `# Desk sheet:` on its first
  line.

## §2 Evidence standard

A claim settles only on what the packet documents: a stated
action and its state (the manager's own included), a figure, a
quoted line, the manager's observation, the report's own raised
topic. Nothing else exists. Where a settlement needs a fact the
packet lacks, the sheet records the gap as a question — never
assesses a guess.

Weight classes, applied strictly: one occurrence is a single
data point — it supports a note, never a pattern, which needs
the same conduct documented at least twice. Attributed
commendation — a named person's thanks or a concrete shipped
result — counts; effort, hours and vague praise do not. The
report's own account is self-reported: fileable, below
independent records. An unsourced impression is a question to
ask, not evidence.

## §3 Ownership

A claim belongs to the desk that can pay it.

- Work stalled on another team's input is that desk's claim —
  on the sheet as the manager's own follow-up, never the
  report's failure.
- A sole approver whose queue blocks several teams is a
  capacity settlement the manager owns — it pays early as the
  manager's decision (adopt the fix the report proposed), not
  as a pace complaint.
- Pay, health, family, formal ratings, colleague complaints
  and disciplinary matters refer to other desks entirely —
  destination and owner named, no talking points, one private
  line at most.
- A direction the report raised stays in the meeting with real
  time; only its formal mechanism (promotion case, band,
  rating) refers out.
- A settled claim stays a one-line close — unless another
  entry truly contradicts it; then the conflict is written
  down, never silently reopened.

## §4 The five settlements

Every claim takes exactly one settlement; the filed label never
decides it — the record does:

- **Paid** — the record supports the claim as filed. It takes
  its slot with an anchored question or a concrete manager
  action.
- **Re-assessed** — the claim stands under a corrected label.
  A conduct claim whose record shows work stalled at another
  desk becomes the blocked claim it is; a routine check on
  credited work becomes the credit. The sheet shows filed
  label and settlement both.
- **Referred** — a real claim for another desk. Destination
  and owner named; no talking points.
- **Denied** — no record supports the claim: recognition
  without attributable credit, a topic filed as filler. Its
  absence is recorded plainly.
- **Pending** — the claim is real but undocumented as filed.
  It stands as the honest question — what is the state, what
  does the missing entry show — never as invented coverage.

A development claim requires a pattern; a single incident
settles as a one-time note with one narrow setting question. A
justified point made in a public channel keeps its substance
and takes exactly one channel question — the point is not
folded into the channel.

## §5 Sheet construction

300 to 650 words. The meeting runs 30 minutes unless the packet
says otherwise; the claims' minutes add to it.

- **Sheet head**: `# Desk sheet: <name>, <role>` — then three
  lines: the week in one sentence; every derivable figure
  shown as work (`2 of 5 closed, 3 open`,
  `14 → 23 screens, +64%`), each pair against its own basis;
  which record types are missing, stated plainly.
- **Settlement order**: every claim numbered as
  `n. Settlement · topic · ~minutes`, then its file line:
  `filed: <manager's label> → <settlement>: <the record in a
  few words>` — on every claim including `as filed` ones. No
  filed claim disappears: a merged claim keeps its file line
  under the claim that absorbed it; referred and denied
  claims name their settlement. Order: attributable credit
  first; then blockers and the manager's calls; then a
  one-time note; then the report's own direction with real
  time — or a booked dedicated slot when the meeting cannot
  hold it; quick closes last.
- **Desk notes**: questions and concrete actions only, each
  tied to a named record (thread, ticket, figure, person),
  three sentences per claim maximum. A career topic the
  report never raised takes exactly one open question at the
  end — and the sheet states the packet holds none of theirs.
- **Adjuster's own claims**: the manager's open or overdue
  items — settled or owned first when they touch the same
  claim — and the records to pull for each filed gap.
- **Referred**: outbound claims with destination and owner.
- **Adjuster's close**: three to five plain sentences — each
  re-assessment, referral or denial and the record that
  forced it; why the first claim leads or none does; what a
  headline figure does and does not show.

A figure explaining only part of a gap keeps the rest open:
the sheet names the unexplained share and puts it to the
report as a status question.

## §6 Order of work

1. In the same message where you call read_reference, write
   the working file: the file check, then each filed claim
   with the entry that settles it, its settlement, any
   referral, and each figure with its arithmetic.
2. Call read_reference on `references/claim-drills.md` once:
   full sheets on invented files — a normal week with a
   mislabelled claim, a thin file settled honestly, an archive
   returned whole, and a queue that is the manager's own
   capacity settlement. Take the settlements and proportions,
   never the facts.
3. After it returns, send the sheet alone. First characters:
   `# ` (or `# Not this week's file`). The working file is
   not repeated, summarised or introduced.
