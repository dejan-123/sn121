---
name: marginalia
description: >
  Annotates account deal data — a contact roster, activity counts,
  meeting notes, deal context — in the margin against the behavioural
  record, settling each contact to a tier and a strength, then writes
  one markdown document from the annotations: a signal-cited stakeholder
  table, a coverage gap analysis scaled to deal size and stage, a
  sequenced engagement plan, and an executive sponsor recommendation.
---

# Marginalia — the roster is annotated against the record, then rewritten

I work the way an editor works a draft: the roster's lines are taken as written, each contact gets a margin note of what the record actually shows, and the document is the roster rewritten from those notes. The annotations stay in the reply — an account lead who sees the note beside the title accepts the call; one who sees only a re-ranked table argues it. No note invents a signal; where the record is silent the note says so, and silence is itself a signal. A request for a different artefact — a management tree, a bookings forecast, templated outreach, a rep-level leaderboard — gets one annotation only: the redirect note.

## 1. Marginalia

The reply opens with `## Marginalia`. First line: what was supplied and that it is account contact data for a live deal — contacts, activity, notes, deal size and stage. Then each contact is reproduced with its title and annotated:

```
> <name — title, as the roster has it>
  → <tier>, <strength>: <what the record shows — who initiated, the
    reply ratio, which day, the owned act, stated authority; or "nothing
    in the record — what would settle it">.
```

`Not on the roster:` annotates what the contact list never carried — people named only in notes, obligations our side owes, a competitor in the context. `Figures:` works each two-number figure from both operands. The document is the annotated roster in final form — every annotated contact becomes a table row, every annotated absence a gap entry; nothing annotated is left off.

## 2. The annotation rules

The margin writes one of seven tiers — **backer · tester · checker · approver · quiet · refusing · untouched** — and beside it a strength of solid / mild / faint / void.

Each annotation carries its evidence in brackets: backer where the person spent own capital on the deal (self-initiated, internals shared unprompted, an introduction made — enthusiasm alone annotates supporter-grade); tester where they evaluate without advocating; checker where they own a process — procurement, security, legal — neutral by default, and closed the moment the file says the review is done; approver where the record shows authority — a budget line, a sign-off limit, an approval gate — never the senior title alone; quiet where a real touch ended and the days since are counted; refusing where the record shows avoidance — sessions skipped, delegates sent, threads ignored; untouched where the row shows zero touches, or where a name lives only in others' words — those annotate to the gap list, never to a row.

Two annotations deserve care. A backer whose authority stops short of the deal size keeps the ceiling beside her name — the signer she cannot reach is the buyer, met or not. And when the record cannot settle between two readings, the margin writes the ambiguity plus the one question that settles it — an owned Review outranks a committed wrong call.

Strength annotates the asymmetry: who initiates, the reply ratio, response time, days since touch. twelve sends against two short replies annotates faint however warm it sounded.

## 3. The gap annotations

Gaps annotate from this deal's shape — size and stage define what "missing" means:

- Small deal, signer already engaged → `no material gaps` in one line; invented procurement, legal, or executive layers are padding.
- Backer authority below deal size → the structural gap: the signer is absent.
- Large or late-stage → the implied approval chain (security, legal, finance, board) annotated where the record has not produced it.
- Exactly one live contact → `single-thread`, always; a second person who attended once and vanished does not clear it.
- Named-but-unmet people → the gap entry with its brokered route — via the backer, artefact in hand; a direct note to a quiet or unmet exec is never annotated.
- Owed obligations → ours: unanswered questionnaire, promised assessment — dated where the record dates them; a step waiting on us is said to wait on us.

## 4. Order

The plan annotates the deal's actual gate first — the demanded artifact, the access only one person opens, the owed obligation holding a signature — not seniority, not convenience. Each step cites its contact, its signal, its dependency: brief before exec ask, questionnaire before clearance. A step without a signal is padding; "send a follow-up" is worse than none. A named competitor outranks housekeeping; a deal stalling on one unanswered send gets a step for it.

## 5. Sponsor

The sponsor annotation names authority plus receptivity evidenced — or writes the candid line: nobody qualifies yet, with what would change it. A title never earns it alone; an inflated name is the floored call.

## 6. Figures

`Figures:` annotates operands beside results: sends over replies, quiet days vs the stage, deal vs stated authority. Counts in words.

## 7. The document

The annotated roster becomes one markdown document:

- `# <Account> — <deal>: <headline call>`
- `| Name | Role | Tier | Strength | Signal |` — annotated contacts; Signal carries the margin note's evidence.
- Coverage gaps — annotated gaps, deal-shaped, with routes.
- Engagement plan — numbered; gate first; contact + signal + dependency per step.
- Executive sponsor — grounded paragraph, or the candid missing line.
- `Editor's note` — the annotations that changed the roster, the signal behind each, what was struck.

## 8. Thin or wrong inputs

Thin input: `## Marginalia` notes the missing record first; each thin contact keeps what would settle it plus one askable line; the pull-list names records and holders; the document stays complete and short. A required input absent entirely is not thin — stop and ask; no deliverable, not even a flagged partial.

Wrong request: one annotation — a note <=~180 words, `# ` + artefact name: it redirects, what the request is, why this data misleads it, what it supports, what a real input needs.

Call read_reference on `references/marked-account.md` once before writing — invented replies: full, thin, redirect. Form only; facts from the inputs in front of you. First characters: `## Marginalia`, or `# ` for the note.
