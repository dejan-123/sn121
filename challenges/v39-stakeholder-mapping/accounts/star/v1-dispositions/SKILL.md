---
name: dispositions
description: >
  Tests every contact in account deal data — CRM rosters, activity
  counts, meeting notes, deal context — against tier-and-strength
  triggers, shows which trigger each contact fires, then writes one
  markdown document: a signal-cited stakeholder table, a coverage gap
  analysis scaled to deal size and stage, a sequenced engagement plan,
  and an executive sponsor recommendation.
---

# Dispositions — every contact fires exactly one trigger, shown in the open

Roster titles are guesses until a trigger fires. For each contact I check which disposition the record actually trips — the mobilizer trigger needs owned acts, not enthusiasm; the buyer trigger needs evidence of authority, not seniority — I show the firing in the reply, and the document is written from the fired dispositions. A contact that fires nothing is not kept out of politeness — it is shown void or unseen with the reason. No trigger ever fires on material the inputs lack. A request for a different artefact — a command-chain diagram, a pipeline forecast, ready-to-send emails, an activity scoreboard — fires the redirect trigger only.

## 1. Dispositions

The reply opens with `## Dispositions`. First line: what arrived for disposition — a roster, activity counts, notes, a deal of stated size at a stated stage. Then per contact, in input order:

```
<name — title>: fires <tier>, <strength> because <the trigger the
record trips — initiation direction, reply ratio, a named act, days
cooled, stated authority; or "no record: <what would fire it>">.
```

Contacts that fire nothing get `void — <what the record shows instead; what instance would make it fire>`. `Unlisted:` covers what the roster never filed — people named only in notes, obligations our side owes, a competitor in context. `Figures:` works each two-number figure from both operands. Every fired contact reaches the table — the fired set is the row list, count them; nothing fired is left off.

## 2. The triggers

One disposition fires per contact — **mobilizer · validator · checkpoint · budget-owner · cooled · unresponsive · unseen** — with strength firing separately as high / rising / faint / none:

```
mobilizer      <- owned investment fires it: self-initiated, internals
                 shared unprompted, intro made, own capital spent.
                 (enthusiasm alone fires supporter-grade)
validator    <- engaged evaluation without advocacy: attends, tests,
                 answers — never sells it internally
checkpoint    <- a process to run: procurement, security, legal.
                 neutral by default; a written close-out fires
                 closed, never an open risk
budget-owner  <- authority evidence: budget line, sign-off limit,
                 approval gate. Seniority never fires it.
cooled       <- one real touch, then silence counted in days
unresponsive    <- avoidance on record: late in, early out, follow-ups dead
unseen   <- zero touches on the row, or a name held only in
                 others' words (fires void → gap list)
```

Overriding triggers:

- Mobilizer-with-ceiling: authority below deal size fires mobilizer AND the
  ceiling — the unreachable signer is the real buyer, met or not.
- Re-warm trigger: cooled fires through whoever made the introduction.
- Strength trigger: the asymmetry — initiation direction, reply ratio,
  response time, days since touch; nine attempts to one holding reply fires faint.
- Ambiguity trigger: record can't settle between two dispositions → fire
  the ambiguity plus the one question that settles it; an owned Review
  outranks a committed wrong call.

## 3. The gap triggers

Gap dispositions fire from this deal's shape — size and stage define what
"missing" means:

- Small deal, signer engaged → fires `no material gaps`, one line;
  invented procurement/legal/executive layers are padding.
- Mobilizer authority below deal size → fires the structural gap:
  the signer is absent.
- Large or late-stage → fires the implied approval chain (security,
  legal, finance, board) where the record has not produced it.
- Exactly one live contact → fires `single-thread`, always; a second
  person who attended once and vanished does not clear it.
- Named-but-unmet people → fire the access gap with the brokered route —
  via the mobilizer, the brief that earns the door already written; a direct note to a cooled or
  unmet exec never fires.
- Owed obligations → fire as ours: unanswered questionnaire, promised
  assessment — dated where the record dates them; a step waiting on us
  is said to wait on us.

## 4. Order

Steps fire in unblocking order: the deal's actual gate first — the
demanded artifact, the access only one person opens, the owed obligation
holding a signature. Each step cites its contact, its signal, its
dependency — the brief precedes the exec ask; the questionnaire
precedes clearance. A step firing on no trigger is padding; a vague
nudge is worse than none. A rival named in context outranks tidy
admin; a deal idling on an unanswered ask gets the move that unsticks
it.

## 5. Sponsor

The recommendation fires on authority plus receptivity evidenced — or
fires the candid void: nobody qualifies yet, with what would change it.
A title never fires it alone; an inflated name is the floored call.

## 6. Figures

`Figures:` fires operands beside results: sends/replies, days quiet vs stage, deal vs authority line. Counts in words.

## 7. The document

The fired dispositions produce one markdown document:

- `# <Account> — <deal>: <headline call>`
- `| Name | Role | Tier | Strength | Signal |` — fired contacts only; Signal = the trigger evidence.
- Coverage gaps — fired gaps, deal-shaped, with routes.
- Engagement plan — numbered; the unblocking disposition first; contact + signal + dependency per step.
- Executive sponsor — grounded, or the candid void.
- `Trigger notes` — the dispositions that differ from the titles, the trigger behind each, what voided.

## 8. Thin or wrong inputs

Thin input: `## Dispositions` fires the missing record first; each thin contact keeps the trigger that would settle it plus one askable line; pull-list names records and holders; the document stays complete and short. A required input absent entirely is not thin — stop and ask; nothing fires, no partial.

Wrong request: fires the redirect trigger only — a note <=~180 words, `# ` + artefact name: it redirects, names the ask, why this data misleads it, what it supports, what a real input needs.

Call read_reference on `references/fired-account.md` once before writing — invented replies: full, thin, redirect. Form only; facts from the inputs in front of you. First characters: `## Dispositions`, or `# ` for the note.
