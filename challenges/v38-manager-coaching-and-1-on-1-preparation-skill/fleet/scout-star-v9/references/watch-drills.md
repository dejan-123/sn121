# Watch drills — full logs on invented watches

Four invented packets, logged the way the duty officer should
log them. Names, figures and products are invented; the
statuses are the part to carry.

## Case 1 — normal week, one mis-labelled entry

Packet: report "Dana, senior backend engineer". Manager filed:
(a) "Dana's friction with the mobile team — she pushed back
hard in the release channel", (b) "why is the payments split
behind", (c) "flag the deploy-freeze success". Record: mobile
lead posted public thanks naming Dana for catching a
double-release bug; the channel exchange shows Dana objecting
— bluntly, on substance — to shipping a build that failed its
smoke tests; the split is 5 of 12 services done, waiting on a
finance sign-off requested 9 days ago; deploy freeze held,
zero incidents, and the SRE lead messaged that rollback
drills now take 4 minutes.

Statuses:

- (a) **Re-entered** → one-time note with one narrow channel
  question: "The mobile exchange was on the merits — they
  were already thanking you for the release catch. One thing:
  it ran in the release channel rather than on the ticket.
  Does moving it there cost anything?" Substance stands;
  channel gets one question and no more.
- (b) **Re-entered → manager's own action.** 5 of 12 done,
  stalled on a 9-day finance sign-off, not Dana's pace:
  "I'll chase the approver today for a date; who do I
  escalate to if it slips again?"
- (c) **Signed first.** Two attributable credits — public
  thanks, and 4-minute rollbacks. Credit opens the log.
- Every filed entry gets a source line and a status; nothing
  filed disappears.

Log: `# Duty log: Dana, senior backend engineer` — picture
line, worked figures, log order with all three filed entries,
watch notes, officer's own entries, routed list, duty
officer's close.

## Case 2 — thin watch, logged honestly

Packet: report "Ari, staff engineer". Manager: "prep my
weekly with Ari — want to discuss his path to principal and
whether he can take the migration." No action log, no
figures, no excerpts. One note: Ari asked in passing about
stock refresh timing.

Thin is not invalid: the packet aims at the coming meeting,
so it is still this watch — entries marked one by one. Only
a wrong-kind document (case 3) goes back. First line:
`# Duty log: Ari, staff engineer`.

Statuses:

- Path to principal: **Signed — split by owner.** Ari's
  direction and the readiness question stay in the meeting
  with real time: "You asked about the next level — here's
  the gap evidence I see and what I'd need documented; what
  scope would you take to build it?" Stock refresh timing is
  **Routed** — it sits with the comp review; destination and
  owner named, one line, no talking points.
- Migration readiness: **Open**. No delivery record in the
  packet; the entry stands as the honest question: "I don't
  have your recent record in front of me — walk me through
  the last few weeks: shipped, stuck, and what you'd take
  on."
- Nothing is invented to fill the log. A thin log of honest
  questions beats a padded one.

## Case 3 — wrong document, sent back whole

Packet: "Here are the minutes from this week's 1-on-1 with
Kai — please prep next week's agenda from them." Three open
actions: Kai's benchmark doc (due Thursday), the manager's
budget confirmation, a mentoring pilot follow-up.

**Whole packet sent back — no entries logged.** Under 150
words, headed `# Not this watch's log`:

Minutes of a meeting already held — they record what was
agreed, not what has moved since. This supports a follow-up
on the open actions, not a log: Kai's benchmark doc (due
Thursday), your budget confirmation, the mentoring
follow-up — owners and dates exactly as filed. For a log,
send this week's action items, any figures, and whatever
Kai raised or you want addressed. Nothing in the material
is newer than that meeting, so a log would repeat stale
entries or invent fresh ones.

Personal matters in the minutes stay private — not
repeated, not summarized, not hinted at.

## Case 4 — the queue that is the manager's own call

Packet: report "Nadia, senior platform engineer". Manager
filed: (a) "Nadia must clear her review queue — seven design
docs wait on her, two teams blocked"; (b) "Nadia seemed
checked out in planning". Record: the seven docs sit with
her because the process names her sole approver for
cross-team work; she shipped two features this sprint and
raised the queue in retro herself, proposing a rotation;
"checked out" appears once, in the manager's note.

Statuses:

- (a) **Re-entered → manager's capacity call.** A
  sole-approver rule stalling two teams is owned by the
  manager, early in the log: "Your rotation proposal is the
  right starting point — I'll approve it this week and take
  it to the team leads. What load should each reviewer hold
  so nothing queues behind one person again?"
- (b) **Struck.** One unsourced observation; the sprint
  shows two shipped features and a raised process fix. Its
  absence is recorded plainly.
- The manager's own open item — acting on the retro
  proposal — sits under officer's own entries with whom and
  when.

## Constants across all four

- The record decides; the filing is only a draft.
- Attributable credit signs first.
- Justified substance keeps its place; the channel takes one
  question.
- Another owner's work routes there.
- One occurrence is never a pattern.
- Missing records stand `Open` — the honest question —
  never covered over.
- Routed entries get destination and owner, never talking
  points.
- Every figure shows its arithmetic; every filed entry gets
  a source line and a status.
- A thin watch still gets a log. The send-back is for the
  wrong document only — under 150 words, no log structure.
