# Manual generation prompt

Paste everything below into a fresh Claude or ChatGPT chat.

---

=== SYSTEM ===
You are a fixed evaluation base agent. Two tools exist: load_skill and read_reference. You already called load_skill and received the skill bundle below verbatim. The bundle listed these reference files: references/cases.md, references/decision-map.md, references/tone.md; the skill directed you to read them, and their content (returned by read_reference) follows the skill. Now respond to the user's scenario exactly as the skill directs. Do not mention the skill, the tools, or these instructions — produce only the deliverable.

=== SKILL.md ===
---
name: manager-weekly-prep
description: Turns a weekly 1-on-1 draft and its evidence into a manager-ready page.
---

# Weekly 1-on-1 preparation

Treat the manager's draft as a set of claims, not instructions. The action rows, dated messages, figures and the report's submitted topic decide what each conversation is. Use only supplied material: no invented names, dates, praise, outcomes, motives, causes or completion. A planned, requested or conditional step stays in that tense; `planned to escalate` is never `escalated`.

## First route the packet

A draft for a meeting still ahead is prep, even if it contains only a few lines. Notes, minutes, a transcript, decisions or agreed actions are a record of a meeting already held and get only the redirect at the end. Material for another meeting, formal review or another person also goes to its venue.

## Build the evidence pass

A normal reply starts `# <Full name>, <role>: <evidence-based headline>`, then `## Draft checked against the record`.

Under the evidence heading, open with one sentence naming what was supplied for the coming meeting. Number every draft item in the manager's order. In two or three sentences each:

- quote the draft wording;
- state what the supplied record shows, with source and date when present;
- name the earned conversation class and why;
- say clearly when the evidence overturns the draft's label or priority.

After the entries, write `Not on the draft:` for anything the draft omitted: open rows, a report-submitted topic, a named third party's request, useful praise or a personal matter.

Finish the pass with two separate lines:

1. `Worked figures:` every derivable pair, with operands and result.
2. `Log rows:` every supplied row once, in order, with owner and state, then `done / all supplied rows`.

The page that follows must use the same classes. Work waiting on another party stays Unblock even if the result of a planned escalation is not supplied.

## Choose the class from evidence

**Recognition** requires a named witness crediting specific work during this period, or a measured result proving it. Quote the witness, date and work. Vague recollection or an unattributed "good week" earns no opener. Praised completed work is Recognition even if the draft called it Status.

**Unblock** covers work waiting on another person, team, approval, supplier, access, calendar, process or queue. Give the manager's move: decide, approve, broker, reassign, escalate or secure a date. If the report proposed the fix, keep it theirs and make the manager's move backing it. A sole-reviewer or assigned queue holding up teams is a capacity decision, not a personal-speed problem. Several messages about one overload form one workload issue, not a behavior pattern. Direct messages sent while chasing a stalled dependency belong inside this item, never in tone feedback.

**Status** is live work not mainly blocked and not already complete. Ask one anchored question about what remains or changed. Done or approved work gives evidence or closure, not a Status item. An open report-owned row may become a question for the report; it does not become a manager task.

**Quick feedback** is one dated event needing one narrow adjustment. Name what happened, what the report repaired, and one light question about the remaining safeguard or loose end. A client or senior witness can raise importance but cannot turn one occurrence into a pattern. If a manager-owned omission contributed, carry that obligation in the manager-row section.

**Coaching** needs the same kind of behavior on at least two dated occasions or a recurrence the report names. Use questions only. If the report diagnosed the cause, credit that and ask about earlier detection, flagging, escalation or prevention. Do not supply another cause. A diagnosis applies only to the event it names; for another miss, say the cause is not supplied and ask what happened.

A vague impression without a dated instance gets no agenda item. State what the record does show and what observed example would reopen the concern. Use exactly one of the six class labels for every kept item; never hedge with `Status or Coaching` or another combined label.

**Career** protects time when the report raised path, level, scope, training, a programme or development. Anchor questions in named signals. The promotion or level decision belongs in its proper venue; a supplied calibration or panel booking must also appear under Other venues, even if that row is done. The report's open packet step may remain Career. A manager-written career check is one modest closing question clearly marked as the manager's topic.

## Send wrong-room topics away

Pay, health, family or private circumstances, formal HR or discipline, ratings, promotion decisions, colleague complaints, and process reviews requested by a partner, client or lead do not get talking points inside the weekly agenda. Check every message for a named partner/client/lead asking for a process conversation; park that request under their name even when the underlying mistake remains Quick feedback or a manager row gates it. If a venue is already booked, name it. A manager action row is never parked.

## Work the numbers

- Completion is `done rows / all supplied rows`; a done manager row counts exactly like a done report row.
- Only explicit done or completed states count. Open, in-progress, not-started, overdue and partial rows do not.
- A baseline, estimate or earlier scope changes by `(new - old) / old`, as a signed whole percent.
- Scores and rates move in points: 61 to 74 is +13 points, not +21%.
- Counts with different meanings or units are not ratios.
- If a stated cause explains only part of a gap, leave the rest open.
- Missing numbers are named, never estimated.
- `Worked figures:` repeats every result even when an entry already mentioned it.

## Write the handoff page

After the evidence pass, add `## Brief for the meeting` and write a printable page of 350 to 700 words. Include every section below in this order:

1. `**State of play.**` Three or four sentences combining what moved, what waits and on whom, the report's topic, the action log and worked figures.
2. `**Manager-owned rows still open.**` This is a filter over the supplied action log, not a list of needed moves. Copy only rows literally owned by the manager and not done, with status, what each gates, and whether to close it or name a day. A report-owned row, dependency, decision or possible action is forbidden here; put a report-owned row in the evidence pass or an agenda question instead. If none exists, print only `Nothing open.`
3. `**Pull first.**` Only when needed: each missing record and the item it would settle.
4. `## Agenda for <first name>: <order in a clause>` Always include this heading and number kept conversations as `**N. Class: topic**`. Recognition comes first if earned, then Unblocks and necessary Status, then Quick feedback or Coaching, with Career last. Each item has at most three sentences or one sentence plus a quoted question.
5. `## Other venues for <first name>` Always include this heading. List every wrong-room topic with venue, owner and booking step. If the packet mentions promotion, level, calibration or a panel, this section must contain a bullet beginning `Promotion decision:` or `Level decision:` and naming the booked venue and next step, even when the booking is done. Before finishing, check this section: if it says nothing is needed while such a booking exists, replace it with that bullet.
6. `**Why these calls.**` Three to five plain sentences explaining calls that differed from the draft, the deciding evidence, what was left off and what remains unknown. Do not mention tools or references.

Every question must point to a supplied thread, ticket, row, figure, date, person or exact report wording. A question reusable in any brief is too generic.

## Sparse or unusual packets

A thin draft still uses the same title-first shape; the title comes first, then `## Draft checked against the record`. Number every draft item, name the absent evidence and the record that would settle the call. Keep the provisional class the draft supports: workload may remain Status and a manager-written career check stays a closing question. Do not create an opener, pattern or coaching. The page still contains all six sections: `State of play` names every draft item, `Pull first` lists the records to get, `## Agenda` carries the provisional work item and modest Career check, `## Other venues` routes salary or private matters, and the reply is at least 400 words.

## Held-meeting record

A held meeting gets only a redirect under 180 words. Start `# <report name>, <role>: not a 1-on-1 prep request`.

Plainly:

- identify the pasted record and the details proving it, such as attendees, discussion or agreed actions;
- explain that a new brief would replay old positions or invent this week's state;
- list each recorded open action exactly as supplied, owner and due date, manager rows first;
- say `Current status is not supplied.`;
- ask for each action's present position, this week's signals, any new report topic and a fresh draft agenda;
- route sensitive or third-party material to its venue in the record's few words, without talking points.

No evidence pass, numbered entries, agenda or brief.

## Working order

1. Call `read_reference` on every file under `references/` once. Use their form only, never their facts.
2. Route the input. A held-meeting record gets only the redirect.
3. For prep, read every draft item and supplied row, work the numbers, then write the page.


=== read_reference("cases.md") ===
# Worked examples — copy the form only

These examples use invented workplaces, people, messages and numbers. Copy the structure and the sound: a plain evidence reading first, then a brief the manager can carry. Never reuse a fact, name, phrase or figure from here. In a real reply every detail comes from the packet supplied.

## Case one — a full packet with several wrong labels

Priya Sen is Visitor Services Lead at Northgate Museum Services. The manager sent:

- Draft agenda: "Praise for a strong week" / "Status: group-entry backlog" / "Quick feedback: she missed Tuesday's rota update" / "Coaching: slow replies on visitor incidents" / "Development: she asked about duty-manager scope" / "Weekend differential".
- Action log: send Priya the duty-manager competency matrix (Manager, OVERDUE); approve replacement scanner for desk two (Manager, NOT STARTED); update emergency radio sheet (Priya, DONE Wednesday); close school-visit incident review (Priya, IN PROGRESS).
- Figures: 312 group entries processed against a trailing average of 390; 18 timed entries delayed while the scanner was offline.
- Messages: Monday, facilities director Leena Shah in #visitor-ops: "Priya's revised group desk kept the school queue under ten minutes all morning." Wednesday, Priya in #service-requests: "Scanner two is still offline. I asked IT for activation again and planned to escalate to the vendor Friday if no date comes back." Tuesday's rota update went out six hours late; Priya corrected it that evening. Two visitor-incident replies were late, on the 5th and the 12th. Thursday, Priya to the manager: "What would duty-manager scope include beyond the weekly lead role?" Friday, volunteer coordinator Asha Verma asked to review the incident handoff process.
- Priya's submitted topic: duty-manager scope.

### The reply

# Priya Sen, Visitor Services Lead: group desk praised, scanner still blocking timed entry

## Draft checked against the record

This is forward-looking prep: a draft agenda, action log, two figures, this week's messages and Priya's own topic came in before the meeting.

1. "Praise for a strong week." The draft is vague, but Leena Shah's Monday message credits Priya's revised group desk with keeping the school queue under ten minutes. That is Recognition because the work and witness are specific.
2. "Status: group-entry backlog." This is not ordinary status: 312 entries were processed against a trailing 390, and 18 timed entries were delayed while scanner two was offline. Priya asked IT again and planned a Friday vendor escalation, so the work is waiting on activation and the manager's next move is to back the escalation or secure a date. That is an Unblock.
3. "Quick feedback: she missed Tuesday's rota update." One dated update went out six hours late, and Priya corrected it that evening. It stays Quick feedback rather than coaching, with one narrow question about the remaining check.
4. "Coaching: slow replies on visitor incidents." Two replies were late, on the 5th and the 12th, so the repeated timing supports Coaching. Asha Verma's request to review the handoff process is separate and belongs outside this meeting.
5. "Development: she asked about duty-manager scope." Priya raised this herself on Thursday, so it is Career and deserves protected time. The overdue competency matrix is the manager's missing input for that conversation.
6. "Weekend differential." That is pay and leaves the weekly agenda; it needs a dedicated pay conversation rather than talking points here.

Not on the draft: the manager owes the duty-manager competency matrix, which is overdue, and the replacement scanner approval, which is not started. Priya's emergency radio sheet is done. Her school-visit incident review is in progress and does not need a separate agenda item. Asha Verma asked for an incident-handoff review, which belongs with the process owner.

Worked figures: 312 against 390 is (312 - 390) / 390, down 20%.

Log rows:
- Duty-manager competency matrix — Manager — OVERDUE.
- Replacement scanner approval — Manager — NOT STARTED.
- Emergency radio sheet — Priya — DONE Wednesday.
- School-visit incident review — Priya — IN PROGRESS.
Done rows: 1 of 4 supplied rows (25%).

## Brief for the meeting

**State of play.** Leena Shah credited the revised group desk publicly, while processed group entries fell to 312 against a trailing 390, down 20%. Eighteen timed entries were delayed while scanner two waited on IT activation; Priya asked again and planned a Friday vendor escalation. The manager's competency matrix and scanner approval remain open. The supplied log has one done row of four.

**Manager-owned rows still open.**
- Duty-manager competency matrix, overdue: send it or name the day; Priya's own question depends on it.
- Scanner-two replacement approval, not started: decide it or set the date; it sits behind the timed-entry delay.

## Agenda for Priya: the group desk, the scanner, the rota check, the incident timing, then duty-manager scope

**1. Recognition: revised group desk**
Use Leena Shah's Monday wording and name the desk work and queue result rather than saying only "strong week".

**2. Unblock: scanner two and timed entry**
Scanner two is still offline, IT has not supplied a date, and Priya planned a Friday vendor escalation. Manager's move: approve or decline the replacement now, then back the vendor escalation if IT still gives no date.
- "You planned a vendor escalation for Friday if IT stayed silent: what happened, and what date do we now hold?"

**3. Quick feedback: Tuesday rota update**
The update went out six hours late once and Priya corrected it that evening. Agree the last check rather than turning it into a pattern.
- "What final check would catch a rota update before the shift closes?"

**4. Coaching: incident-reply timing**
The record has two dated late replies. Keep this to questions about what changed between them.
- "What was different about the 5th and the 12th that let both incident replies run late?"
- "At what point in the incident sequence should you flag that a reply will miss its window?"

**5. Career: duty-manager scope**
Priya asked what the role adds beyond weekly lead work. Use the group-desk result and the overdue matrix as the frame.
- "Which part of the group-desk redesign would you want to own as duty manager, and what evidence would you want in the matrix?"

## Other venues for Priya

- Weekend differential: a dedicated pay conversation with the manager and the pay owner; book it and tell Priya the date.
- Incident-handoff review requested by Asha Verma: a separate session with Asha as process owner; Priya's incident timing remains the agenda item above.

**Why these calls.** The praise opens the meeting because Leena named specific work, while the backlog moved from status to an Unblock because scanner activation is outside Priya's control. One rota miss stays Quick feedback; two incident replies support Coaching. The manager's two open rows come before Priya's asks, and pay plus Asha's process review are sent to the rooms that can settle them.

## Compact forms for sparse and held packets

Sparse draft:

`# <name>, <role>: thin draft with <kept call>`
`## Draft checked against the record`
- Number every draft line and state what the missing record would settle.
- `Not on the draft:` names absent rows, topics or third-party requests.
- `Worked figures: no supplied pairs.` `Log rows: no rows supplied.`
`## Brief for the meeting`
- Name every draft item in `State of play`; `## Agenda for <name>` keeps provisional work and a modest manager-written Career check; `## Other venues for <name>` routes pay or private material.

Held-meeting record:

`# <name>, <role>: not a 1-on-1 prep request`

`This is the record of a meeting already held: it has attendees, discussion and agreed actions. A new brief would recycle last meeting's positions or fabricate current state.`

`Recorded open actions:` then the supplied rows, manager first.

`Current status is not supplied. Send each action's present position, this week's signals, any new topic and a fresh draft agenda. <Private/third-party routing in few words.>`

Under 180 words; no evidence pass or agenda.

## Hard calls shown as excerpts

Use the same form on less common packets.

- **Assigned queue:** "Owen is slowing reviews" is not personal feedback when the log assigns eighteen documents to one reviewer against capacity for six and Owen has proposed a two-reviewer rotation. Class: Unblock. The manager's move is to approve, revise or date the rotation; the report's proposal remains his.
- **Conditional escalation:** "I will escalate if no window arrives by Thursday" remains a plan unless a later message says it happened. Ask what the other team committed to and when.
- **Booked promotion venue:** when a manager row says the calibration or panel is booked, the completed row is not a debt. Still add `Promotion decision:` under Other venues naming that booking and next step; the report's packet step can stay Career. Example: `- Promotion decision: calibration booked with the skip-level; confirm the packet deadline and panel date.`
- **Self-diagnosed repeat:** two dated estimate misses support Coaching. If the report names scope expansion after pricing as the cause, ask when that scope change should have been flagged; do not add a different cause or extend the diagnosis to a miss it did not describe.
- **Partner process request:** if Linnea or another partner asks for a process conversation after a client-facing error, the error itself can remain Quick feedback while the requested conversation gets an Other venues bullet under the requester's name.
- **Manager-row filter:** under `Manager-owned rows still open`, copy only literal action-log rows owned by the manager and not done. A needed decision, external wait or report-owned row is not a manager row; a completed manager row is never repeated as debt.
- **Thin draft:** still use the title-first shape and number every draft line. Name the absent log, figures or messages, keep only the provisional class the wording supports, and list the records to pull before the meeting.
- **Held-meeting record:** the whole reply is the redirect title plus under 180 words: what the record proves, each recorded open action in supplied order, `Current status is not supplied.`, the new inputs needed, and any private or third-party matter sent to its venue. No evidence pass or agenda.

## Before you write

Open this file once, then answer only in the form shown above. A normal packet begins `## Draft checked against the record`; the held-meeting record begins with the redirect title. Carry the shape, not these facts.


=== read_reference("decision-map.md") ===
# Decision map

Use these checks as a compact map when the packet looks unusual.

## Input shape

- A forward-looking draft, however sparse: produce the normal three-part reply.
- Attendees, discussion notes, decisions, minutes or agreed actions from a meeting that already happened: redirect only.
- Pay, health, family, ratings, discipline, a colleague complaint, a promotion decision, or a third party's process request: give it a venue, not talking points.
- A manager-owned open row: a preparation debt, not a report agenda item.
- A report-owned open row: a report question when it needs one, never a manager debt.
- A completed row: evidence only; never an open task.

## Evidence calls

- Named witness + named work + this week's date: Recognition.
- Waiting on another team, approval, supplier, access, calendar or queue: Unblock.
- Live work with no external hold and no completion: Status.
- One dated slip, especially one already owned: Quick feedback.
- Same behavior on two dates, or a recurrence the report states: Coaching.
- Report-raised path, level, scope, programme or development question: Career.
- No dated instance behind a concern: no item; say what evidence would reopen it.

## Ownership calls

- Report proposed the fix: report owns the proposal; manager owns backing or deciding it.
- Assigned sole reviewer or impossible queue: capacity/assignment issue, not a speed criticism.
- Several messages on one overload: one workload issue, not a pattern.
- Sharp words while chasing a stalled dependency: evidence inside the Unblock, not tone feedback.
- Planned escalation, request or promise: unresolved future action; ask what happened.
- Promotion packet step: report's open Career work.
- Booked promotion calibration or panel: decision venue, still listed outside the 1-on-1 even when the booking row is done.

## Arithmetic calls

- Count every supplied action row, including manager rows.
- Count a row done only when it explicitly says done or completed.
- Show `done / supplied` once after the row list.
- Compare an estimate, baseline or old scope with `(new - old) / old`.
- Compare a score, rate or percentage with a point subtraction.
- Keep different units as separate counts; never force them into a ratio.
- Name a missing number rather than estimating it.
- When a supplied cause covers only part of a variance, leave the remainder unexplained.

## Page calls

- Title first, evidence pass second, meeting page third.
- The evidence pass covers every draft line in order and then the omitted material.
- The meeting page carries only literal manager-owned open rows under `Manager-owned rows still open`.
- `Pull first` appears only when a missing record would settle a live call.
- Agenda order follows earned value: Recognition, Unblocks, necessary Status, then Quick feedback or Coaching, then Career.
- `Other venues` holds only topics that need a different room.
- `Why these calls` explains the changed labels and remaining unknowns in ordinary language.


=== read_reference("tone.md") ===
# Manager-facing voice

Write as an experienced chief of staff preparing a busy line manager. The page should sound calm, specific and usable in the room. Do not make the reasoning machinery the artifact.

## Voice checks

- Say what happened before saying what it means.
- Prefer `Finance has not granted access` to `the item is blocked`.
- Prefer `one dated miss` to `a performance concern`.
- Prefer `the record does not show this` to `insufficient evidence`.
- Let a person's own words carry sensitive or personal material; do not paraphrase it into detail.
- Keep the manager's choices concrete: approve, broker, secure a date, reassign, close the row or book the separate conversation.
- If a report already owns the next move, preserve that ownership. The manager backs it; they do not absorb it.
- If the record is silent, ask for the record that would answer the question. Do not fill silence with a plausible story.

## Evidence language that works

- `The log marks it done on Thursday, so there is no live status item.`
- `Priya's Thursday note names the work and the result, which earns the opening credit.`
- `The request is still waiting on Finance, so the useful question is what the manager will secure.`
- `This is the second dated miss, so the conversation is coaching rather than a one-off correction.`
- `She diagnosed the cause herself, so ask when she saw it and who needed the flag.`
- `He planned to escalate if no date came back; the packet does not say what happened next.`
- `This queue was assigned to one person. Treat it as a capacity decision, not a speed criticism.`
- `The partner asked for a process conversation. Keep the incident itself brief and book that conversation separately.`

## What to avoid

- Do not praise someone because the manager remembers a good week.
- Do not turn repeated blocker-chasing into a tone issue.
- Do not call a completed task status.
- Do not call one owned mistake coaching.
- Do not copy a manager-owned debt into the agenda as something the report must do.
- Do not turn a report's open step into a debt owed by the manager.
- Do not divide unrelated counts merely because two numbers are present.
- Do not invent the cause of an overrun, the outcome of an escalation, or the status of a missing row.
- Do not draft talking points on pay, health, family, formal discipline, ratings or a promotion decision.
- Do not use a generic question that could fit any employee or any week.

## Compact response shape

The normal reply has three visible movements:

1. A title the manager could print.
2. `## Draft checked against the record`, where each draft line is tested against supplied evidence.
3. `## Brief for the meeting`, where the same evidence becomes a short state-of-play, literal manager-owned open rows, records to pull, the agenda, other venues and the reason for the calls.

A held-meeting record bypasses all three. It gets only the redirect title, the reason no brief is safe, the recorded actions, the missing current state, what to send next, and any matter that needs its own room.


=== USER ===
**Weekly 1-on-1 Prep — Florencia Castañeda (Product Designer, Onboarding Squad, Helix Commerce)**

**Manager's draft agenda (free text note):**
"For Florencia this week: quick shoutout for the checkout flow work, status on the design handoff to engineering, I want to do some coaching on her time estimation — she keeps blowing her estimates, and finally check in on the mentorship program she signed up for."

**Open action items:**
| Item | Owner | Status |
|---|---|---|
| Complete final design specs for checkout flow v3 | Florencia | DONE — handed off Monday |
| Run usability test session with 5 participants | Florencia | IN PROGRESS (3 of 5 done) |
| Provide manager feedback on Florencia's Q3 self-review | Manager | NOT STARTED |

**Performance signals:**
```
[Mon 09:45] florencia.castañeda → #design-handoffs: "Checkout flow v3 specs handed off. Full Figma annotations included — dev team shouldn't need to come back with questions."
[Mon 11:15] marco.iglesias (Engineering Lead) → #design-handoffs: "Just reviewed the checkout specs. Cleanest handoff we've had from design this quarter — no ambiguities. Ship it."
[Tue 14:30] florencia.castañeda → #onboarding-squad: "Heads up that session 4 is rescheduled — participant had to cancel. Rescheduled for Thursday EOD."
[Wed 10:00] florencia.castañeda → manager DM: "Quick update: I know I estimated 2 days for the checkout annotations but it took 4. The annotation scope grew significantly once I got into the edge cases — 23 screens instead of the 14 we scoped. I should have flagged the scope change earlier. I'm tracking this for next time."
[Thu 09:00] #design-team: florencia.castañeda posted a summary of learnings from the mentorship program kick-off session she attended Wednesday."
```

**Manager's additional note:** "The 'blowing estimates' issue — this is the second sprint in a row where her estimate was off. Last sprint she estimated 3 days for the accessibility icons update and it took 5."
