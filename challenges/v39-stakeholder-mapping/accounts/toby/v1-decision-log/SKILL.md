---
name: decision-log
description: >
  Logs a tier and strength decision on every contact in account deal data —
  CRM exports, activity counts, meeting notes, deal context — against the
  behavioural record, then writes one markdown document from the log: a
  signal-cited stakeholder table, a coverage gap analysis scaled to deal
  size and stage, a sequenced engagement plan, and an executive sponsor
  recommendation.
---

# The decision log — every contact gets a logged call before the document exists

The document is the easy part; the work is the decision on each contact. A title looks like a tier and a busy inbox looks like a relationship — the log forces each onto the record before it earns either. I log each decision as it is made — the contact, the call, the signal behind it — and the log goes in the reply ahead of the document. A reader who can check the log does not have to trust the map; the calls are already in the open. A decision is only ever logged on what the inputs state; silence is logged as silence, and silence is itself a signal. A request for a different artefact — a hierarchy diagram, a pipeline rollup, drafted follow-up emails, a win-probability number — gets one logged decision: redirect.

## 1. The decision log

The reply opens with `## Decisions`. First line logs the shipment: a contact roster with activity and notes for a deal of stated size and stage. Then one log line per contact, in input order:

```
D1. <name — title>: <tier>, <strength> — <the signal: who initiated,
reply ratio, days since touch, a named act, a stated authority; or "no
record: <what would settle it>">.
```

`Off the record:` logs what the roster never carried — people named only in notes, obligations our side owes, a competitor in the context. `Figures:` works each two-number figure from both operands. The document is written from the log — every logged contact becomes a table row, every logged absence a gap entry; nothing logged is left off.

## 2. The logging rules

Tiers come from a closed set — **driver · evaluator · control point · signer · quiet · avoidant · unmet** — with strength logged beside them as live / active / faint / absent. Each tier has exactly one qualifying condition:

| Tier | Logs only when the record shows |
|---|---|
| driver | an owned investment — initiated the contact, shared internals unprompted, made an intro, spent own capital |
| evaluator | engagement without advocacy — evaluates, answers, validates |
| control point | a process to run — procurement, security, legal; neutral by default |
| signer | evidence of signature authority — budget line, sign-off limit, approval gate |
| quiet | one real touch, then silence counted in days |
| avoidant | avoidance — skipped reviews, a delegate sent instead, threads gone unanswered |
| unmet | zero touches on a CRM row, or a name held only in others' words |

Overrides that beat the title:

- Enthusiasm with no owned act logs supporter-grade, never driver.
- Authority needs a number or a gate, not seniority. A driver whose authority stops short of the deal keeps the ceiling in her row — the signer she cannot reach is the buyer, met or not.
- a written close-out logs the control point closed — resolved, never an open risk.
- A name with no record never gets a row — the gap list carries it.
- Strength logs the asymmetry: who initiates, the reply ratio, response time, days since touch. eight sends against two short replies logs faint.
- Can't settle between two tiers? Log the ambiguity and the one question that settles it — an owned Review outranks a wrong call.

## 3. Gap decisions

The gap list logs what this deal's shape demands and the record did not produce — deal size and stage decide what "missing" means:

- Small deal, signer already engaged → `no material gaps`, one line; inventing procurement, legal, or executive layers there is padding.
- Driver's authority below deal size → the structural gap: the signer is absent.
- Large or late-stage → the implied approval chain (security, legal, finance, board) named where the record has not produced it.
- Exactly one live contact → `single-thread`, always; a second person who attended once and vanished does not clear it.
- Named-but-unmet people log with their brokered route — through the driver, carrying the brief that earns the meeting; a fresh thread to a quiet or unmet exec is never logged.
- Owed obligations — unanswered questionnaire, promised pack — log as ours, dated where the record dates them; a step waiting on us is said to wait on us.

## 4. Sequencing rules

Order by the deal's actual gate, not seniority or convenience. Step one = the move that unblocks: the artifact a control point demanded, the access only one person opens, the owed obligation holding a signature. Each step cites its contact, its signal, its dependency — the brief precedes the exec ask; the questionnaire precedes clearance. A step citing nothing is padding; a vague nudge is worse than none. A rival in the context beats tidy admin; a deal idling on one unanswered ask gets the move that answers it.

## 5. Figures

`Figures:` logs operands beside results — sends/replies, days quiet vs the stage, deal vs a stated authority line. Counts in words.

## 6. The document

From the log, one markdown document:

- `# <Account> — <deal>: <headline call>`
- `| Name | Role | Tier | Strength | Signal |` — logged contacts; Signal carries the logged evidence.
- Coverage gaps — logged gaps, deal-shaped, with routes.
- Engagement plan — numbered; the unblocking decision first; contact + signal + dependency per step.
- Executive sponsor — grounded paragraph, or the candid none-yet line.
- `Log notes` — the decisions that differ from the titles, the signal behind each, what was dropped.

## 7. Thin or wrong inputs

Thin input: `## Decisions` logs the missing record first; each thin contact logs its settling signal and one question that would supply it; the pull-list names each missing record and its holder; the document stays whole and short. An input that is required and absent is a stop, not a thin case — ask for it; nothing logs, no partial.

Wrong request: one logged decision — a note <=~180 words, `# ` + artefact name: it redirects, what the request is, why this data misleads it, what it supports, what a real input needs.

Call read_reference on `references/logged-account.md` once before writing — invented replies: full, thin, redirect. Form only; facts from the inputs in front of you. First characters: `## Decisions`, or `# ` for the note.
