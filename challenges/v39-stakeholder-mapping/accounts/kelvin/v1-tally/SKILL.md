---
name: tally-sheet
description: >
  Posts every contact in account deal data — CRM rosters, activity counts,
  meeting notes, deal context — to a tally of title-claim versus
  behavioural record, settles each posting to a tier and a strength, then
  writes one markdown document from the settled side: a signal-cited
  stakeholder table, a coverage gap analysis scaled to deal size and
  stage, a sequenced engagement plan, and an executive sponsor
  recommendation.
---

# The tally — every contact is posted against the record, then settled

A roster carries the titles people hold; the record carries what they did. I post both, contact by contact — who the person is said to be beside what the signals show — and settle each posting to a tier and a strength before anything is written. The tally is part of the reply: a reader who can see the postings does not have to take the calls on faith, and a map whose rankings are checkable stops being an opinion. Postings only ever carry what the inputs state; an absence is posted as an absence, and silence posts as silence. A request for a different artefact — a reporting-structure diagram, a revenue model, pre-drafted sequences, a territory heatmap — posts the redirect note first, then the map the record supports where a contact record exists (the note rule).

## 1. The tally

The reply opens with `## The tally`. First posting: what arrived — a roster with activity counts and notes, a deal of stated size at a stated stage. Then one posting per contact, in input order:

```
On the roster:  <name — title>
Record shows:   <initiation direction, reply ratio, recency, a named act,
                 stated authority — or "nothing filed">
Posted as:      <tier>, <strength> — <reason>
```

Two sentences inside a posting at most; no machinery words. After the postings, `Unfiled:` lists what the roster never carried — people named only in notes, obligations our side owes, a competitor in the context. `Arithmetic:` works each two-number figure from both operands. The document is built from the settled postings only — every settled contact becomes a table row, every posted absence a gap entry; nothing settled is left off.

## 2. Posting rules

Postings settle to a closed set — **engine · reviewer · control · approver · stale · evasive · no-contact** — strength beside them: solid / mild / light / void.

```
TIER        settles when the record shows...
engine    owned investment — self-initiated, internals shared unprompted,
            an intro made, own capital spent. Enthusiasm alone = supporter.
reviewer  engaged evaluation — attends, answers, tests — without advocacy.
control  a process to run — procurement, security, legal. Neutral default.
approver  authority evidence — budget line, sign-off limit, approval
          gate. Never the senior title alone.
stale     a real touch, then days of silence counted against the clock.
evasive  avoidance on record — late in, early out, follow-ups ignored.
no-contact zero touches on the row, or a name held only in others' words.
```

Settlement overrides:

- An engine whose authority stops short of the deal size settles with the
  ceiling beside her name; the signer she cannot reach is the real buyer.
- a written close — "review complete, nothing owed" — settles the control closed —
  resolved, never an open risk.
- A name with no record settles nowhere — the gap list carries it.
- Strength settles on the asymmetry: initiation direction, reply ratio,
  response time, days since touch. fourteen sends to three short replies = light.
- Unsettled between two postings? Settle the ambiguity plus the one
  question that resolves it — an owned Review outranks a wrong call.

## 3. Gap settlements

The gap side settles what this deal's shape demands and the record did not
produce — size and stage define "missing":

- Small deal, signer engaged → `no material gaps`, one line. Invented
  procurement, legal, or executive layers = padding.
- Engine authority below deal size → the structural gap: signer absent.
- Large or late-stage → the implied approval chain (security, legal,
  finance, board) settled where the record has not produced it.
- Exactly one live contact → `single-thread`, always; a second person who
  attended once and vanished does not clear it.
- Named-but-unmet people settle with their brokered route — via the
  engine, brief in hand; void outreach to a stale or unmet exec is
  never settled.
- Owed obligations — unanswered questionnaire, promised assessment —
  settle as ours, dated where the record dates them; a step waiting on us
  is said to wait on us.

## 4. Sequence

Order settles by the deal's actual gate, not seniority, not convenience.
Step one = the move that unblocks: the demanded artifact, the access only
one person opens, the owed obligation holding a signature. Each step ties
its contact, its signal, its dependency — brief before exec ask,
questionnaire before clearance. A step without a signal is padding;
"send a follow-up" is worse than none. A named competitor outranks
housekeeping; a deal parked on an unanswered ask posts the move that un-parks it.

## 5. Sponsor

The recommendation settles on authority plus receptivity evidenced — or
the candid line: nobody qualifies yet, with what would change it. A title
never settles it alone; an inflated name is the floored call.

## 6. Arithmetic

`Arithmetic:` posts operands with results: sends over replies, quiet days against the stage, deal amount against a stated authority line. Counts in words.

## 7. The document

From the settled side, one markdown document in the asked-for shape:

- `# <Account> — <deal>: <headline>`
- `| Name | Role | Tier | Strength | Signal |` — settled contacts only; Signal = the posted evidence.
- Coverage gaps — named, deal-shaped, with the settling route.
- Engagement plan — numbered, gate first; each posting its contact, signal, dependency.
- Executive sponsor — grounded, or candid about what is missing.
- `Settlement notes` — the postings that differ from the titles, the signal behind each, what was struck.

## 8. When postings conflict

Two signals can pull one contact in opposite directions; the tally
settles them in a fixed order:

- **Recency beats volume.** Twenty warm replies last quarter lose to
  six weeks of silence now — post the silence, cite the older warmth
  as the settling question.
- **Initiation beats reply-count.** A contact who answers everything
  but starts nothing posts warm, never engine — the engine spends
  first.
- **An owned act beats reported warmth.** "He told the deans he wants
  it" posts as secondhand — a claim the record cannot confirm either
  way; the settling question belongs to whoever reported it.
- **A closed file beats seniority.** A completed review posts closed
  at any title; reopened only by new writing, never by worry.
- **The ceiling beats the title.** Authority posts at the stated
  line, not the rank — a $250K ceiling on a $700K deal is the gap,
  wherever the organogram puts her.

When two settlements still fit, post the ambiguity itself with the
one question that resolves it — an honest unsettled line outranks a
confident wrong call.

## 9. Thin or wrong inputs

Thin input: the tally posts the missing record first; each thin posting names what settles it; the document stays complete and short; pull-list per missing record and holder. A required input absent entirely is not thin — stop and ask; nothing posts, no partial.

Wrong request: the note posts first — <=~180 words, `# ` + artefact name: it redirects, names the ask, why this data misleads it, what it supports, what a real input needs. Where the inputs still carry a contact record, the settled tally and document then post in full — the unsupported artefact is declined, the supported one is still produced. No contact record at all means the note is the entire posting.

Call read_reference on `references/settled-account.md` once before writing — invented replies: full, thin, redirect. Form only; facts from the inputs in front of you. First characters: `## The tally`, or `# ` for the note.

