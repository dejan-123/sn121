---
name: piero-weekly-board-v19
description: Produces a printable weekly 1-on-1 board by reconciling the manager's draft topics with the supplied action rows, figures and messages; records of meetings already held receive a compact redirect.
---

# Weekly 1-on-1 board contract

Produce the page a manager can carry into this week's conversation. The draft agenda supplies topics; the action log, figures, messages and report-submitted topic supply what can be said about them. Keep the manager's topics visible, account for every row, and let the record—not the draft label—decide each call. Use no fact the packet does not provide.

## Route the packet

| Input received | Response |
|---|---|
| Draft agenda or manager topics for a coming 1-on-1, with or without supporting records | Build the full board below. Lack of evidence is handled item by item; it is never a redirect. |
| Minutes, notes or transcript from a meeting already held | Send only the held-meeting redirect. Old positions cannot prepare the next meeting. |
| Material for a different meeting, performance review, rating or disciplinary process | Send the redirect form rather than a weekly board. |

## Evidence and accounting

- A packet fact may be a named person, date, owner, action-row state, figure, quoted message, manager note or report-submitted topic. If a required fact is absent, name the missing record and its holder; invent nothing.
- One dated incident can support a one-time note. Two or more dated occurrences, or a report-chosen development goal, can support coaching. A named prior sprint with planned-versus-actual figures can be the second occasion.
- Named praise or a concrete result can open the board. A vague recollection cannot. A report's self-report is usable but weighs below an independent signal.
- A promised, attempted or scheduled action is not complete. Write `planned to escalate` and ask whether it happened; never turn a plan into `escalated`.
- A completed row stays a one-line close unless a later documented conflict exists.
- When the report already diagnosed the cause, credit that and coach the earlier detection or flagging step, not the symptom already explained.

## Reconcile before writing

Count draft topics and action rows separately.

- `N` draft topics require `N` numbered strips, one per topic.
- `filed:` must carry the manager's exact draft topic. A report-submitted topic may supply the call or question, but it never becomes the filed text unless it is itself the draft item.
- Do not split one draft topic into two strips, repeat its filed line, or merge two filed topics into one.
- Fold an action row into the strip covering the same work. An uncovered open row gets one extra strip after the draft items: `filed: not on the draft`.
- Report-owned open rows remain report questions. Manager-owned open or overdue rows go to `Pre-flight`. DONE rows close or provide evidence; they are never `Pre-flight`.
- If a log exists, report `DONE rows / all supplied rows`, including manager and completed rows. Partial, open, overdue and not-started states are not done.

## Call map

Give each draft topic exactly one call:

| Call | Use when | Required handling |
|---|---|---|
| **Cleared** | The record supports the topic as filed | Ground the question or manager move in a named reading. |
| **Re-routed** | The topic is real but the draft framed it wrongly | Finished credited work becomes earned credit; a stall owned elsewhere becomes a manager unblock; one dated slip becomes a one-time note. |
| **Diverted** | The matter belongs in another venue | Give destination and owner only; no talking points. |
| **Grounded** | No documented signal supports it | Say the absence plainly while keeping the topic accounted for. |
| **Holding** | The topic is live but undocumented | Ask the honest question and name the record that would settle it. |

## Ownership rules

- Work waiting on approval, access, a supplier, a calendar, another team or an assigned queue belongs to whoever can move it. The board gives the manager the move: approve, broker, reassign, escalate or set a date.
- A sole-reviewer or assigned-queue design holding several teams is a capacity problem. The queue holds the teams; do not say the report is blocking them.
- Pay, health, family circumstances, accommodation, formal HR, third-party complaints, ratings and promotion decisions leave the weekly room with venue and owner.
- A report-raised direction, level, training or packet step receives protected time. A career line created only by the manager is a modest invitation.
- A justified request raised in a public channel keeps its substance and gets one narrow channel question. Repeated chasing of the same hold is not a conduct pattern.

## Page specification

Write `# Strip board: <report name>, <role>` and 350–700 words. Assume a 30-minute meeting unless the packet says otherwise. The tone is a colleague briefing the manager: direct, concrete and natural, with no exposed worksheet.

- **Board head** — three short lines: the week in one sentence; figures with operands, including the action-log total when supplied; which record types are absent.
- **Departure order** — number items in meeting order: earned credit first, then dependencies and manager calls, one-time feedback or development, the report's direction, live status and closes.
- Under each item write `filed: <manager's exact draft topic> → <call>: <condition in a few words>`.
- **Vectors** — at most three sentences per item: the signal, the manager's move, or one verbatim question anchored to a thread, ticket, figure, date or person. When a report topic supplies a career check, keep the manager's filed topic on the strip and quote the report in the vector.
- **Pre-flight** — manager-owned open/overdue rows, then one bullet per missing record or manager fetch action. External dependencies and report-owned rows do not go here.
- **Diversions** — routed matters with destination and owner.
- **Controller's log** — three to five plain sentences naming what moved, what lacked evidence and why the opening item earned its place.

Show every figure's basis. Rates and scores move in percentage points; planned-versus-actual uses the same comparison; unrelated counts stay separate. A cause that explains part of a gap leaves the rest open.

## Thin packet

A future-facing draft with no action log, figures or messages still receives a complete board. Say what was not supplied. Each item takes `Holding`, `Diverted`, or another call its wording supports. Ask what the missing record would show and who holds it; invent no praise, pattern, completion or finding. Route pay to the pay owner and keep a manager-created career line as an invitation.

## Held-meeting redirect

Return only a note under 180 words:

`# <report name>, <role>: not a 1-on-1 prep request`

- `**Redirect.**` Identify the held meeting by date, attendees, discussed items or agreed actions; say a board would replay old positions or invent current ones.
- `**What it supports:**` list every open action with exact owner and due date, manager-owned first; state that current status is not supplied.
- `**What the next board needs:**` current action status, this week's signals, any new report topic and a fresh draft agenda.
- `**Private matter:**` route family, health, pay or personal material privately; draft no talking points.

## Working order

1. Build the private sheet: document route, draft-topic count, action-row count, call per topic, figure work, and manager/report/fetch/routed ownership.
2. Read `references/edge-card.md` once with `read_reference`; carry the boundaries, not the facts.
3. Return only the board or redirect. The first characters are `# `; do not show the worksheet or mention this skill.
