---
name: sharpening
description: >
  Sharpens every contact in account deal data — CRM rosters, activity
  counts, meeting notes, deal context — into the question the behavioural
  record can actually answer: what is this person to the deal, and how
  hot is the thread. Shows the sharpening, then writes one markdown
  document from it: a signal-cited stakeholder table, a coverage gap
  analysis scaled to deal size and stage, a sequenced engagement plan,
  and an executive sponsor recommendation.
---

# Sharpening — every contact becomes the question the record can answer

A roster entry is a question the deal wants answered, phrased as a title. "CFO" asks is this our signer; "pusher" asks who carries the deal. My job is not to answer the title's phrasing but the question the record actually supports — sometimes the same question, often a sharper one, occasionally none at all. The sharpening happens in the open: the reply shows each contact becoming the call the record earns, and the document is built from those calls. Nothing is invented to make a weak contact answerable; an unanswerable one says what would answer it. A request for a different artefact — an internal-hierarchy picture, a bookings estimate, sequenced email drafts, a cross-account rollup — sharpens into nothing: the reply leads with the redirect note, then supplies the map the record does support where a contact record exists (the note rule).

## 1. Sharpening

The reply opens with `## Sharpening`. First sentence: what the file carries — a roster, activity counts, notes, the deal's size and stage. Then per contact, in input order:

```
"Title says <name — role>."
The record answers <what the signals settle — who initiated, the reply
ratio, which day, the owned act, stated authority> — so the contact
becomes <tier>, <strength>.
Cannot answer: <what the title assumes that no signal settles> — <the
record that would settle it>.
```

(The last line only where true.) Two or three plain sentences per contact. `Unasked:` covers what the roster never raised — people named only in notes, obligations our side owes, a competitor in context. `Figures:` writes every computed quantity with its inputs shown. The document asks only the sharpened calls — every sharpened contact becomes a table row, every sharpened absence a gap entry; nothing sharpened is left off.

## 2. What the record can answer

Seven tiers, asked one at a time — **pusher · assessor · control-point · decision-maker · silent · refusing · unapproached** — strength sharpened alongside: hot / warm / cool / dead.

- "Is this person a pusher?" — only if the record shows owned investment: self-initiated contact, internals shared unprompted, an intro made, own capital spent. Enthusiasm without an owned act sharpens to supporter-grade.
- "Is this the decision-maker?" — only on evidence of authority: a stated budget line, a sign-off limit, an approval gate. The senior title never answers it. A pusher whose authority stops short keeps the ceiling in her row; the signer she cannot reach is the sharper answer.
- "Is this a control-point or a blocker?" — process owners (procurement, security, legal) sharpen to control-point, neutral. writing that closes the review — "completed, nothing owed" — sharpens to closed — never an open risk.
- "Engaged or gone?" — a real touch then silence sharpens to silent, days counted. The re-warm route is whoever introduced us.
- "Risk or absence?" — the avoidance pattern (late in, early out, ignored follow-ups) sharpens to refusing, on the record's facts alone.
- "A row or a name?" — zero-touch CRM rows sharpen to "no record" rows; names held only in others' words sharpen to nothing — the gap list asks them.
- "How hot?" — the asymmetry: initiation direction, reply ratio, response time, days since touch. eleven touches against two acknowledgements sharpens to cool.
- "Settled or ambiguous?" — when the record cannot settle between two calls, sharpen to the ambiguity plus the one question that resolves it; an owned unanswerable outranks a wrong call.

## 3. Gaps that get asked

The gap questions are shaped by this deal — size and stage decide what counts as missing:

- Small deal, signer engaged → "is anything missing?" answers `no material gaps` in one line; invented procurement, legal, or executive layers are padding.
- Pusher authority below deal size → "who signs?" — the structural gap: the signer is absent.
- Large or late-stage → "who must approve?" — the implied chain (security, legal, finance, board) named where the record has not produced it.
- Exactly one live contact → "what if they leave?" — `single-thread`, always; a second person who attended once and vanished does not clear it.
- Named-but-unmet people → "who opens that door?" — the brokered route via the pusher, artefact in hand; a direct approach to a silent or unmet exec is never the ask.
- Owed obligations → "what do WE owe?" — unanswered questionnaire, promised pack, dated where the record dates them; a step waiting on us is said to wait on us.

## 4. Order

"Which move unblocks the deal?" is asked first, not "who is most senior." Step one meets the actual gate — the demanded artifact, the access only one person opens, the owed obligation holding a signature. Each step cites its contact, its signal, its dependency — brief before exec ask, questionnaire before clearance. A step with no signal is padding; "send a follow-up" is worse than none. A named competitor outranks housekeeping; a deal stalling on one unanswered send gets a step for it.

## 5. The sponsor question

"Who can carry this deal at authority?" — answered with a name the record supports, or candidly: nobody qualifies yet, plus what would change it. A title never answers it alone; an inflated name is the floored call.

## 6. Figures

`Figures:` — every computed quantity shown with its inputs: replies against sends, silent days against the stage, the deal's amount against any written authority line. Whole counts spelled out.

## 7. The document

The sharpened questions become one markdown document:

- `# <Account> — <deal>: <headline call>`
- Stakeholder table `| Name | Role | Tier | Strength | Signal |` — one row per sharpened contact; Signal cites name, date, or count.
- Coverage gaps — what the deal's shape asks and the record lacks; unmet names and `single-thread` live here.
- Engagement plan — numbered; the unblocking ask first; each step cites contact, signal, dependency.
- Executive sponsor — grounded paragraph or the candid missing line.
- `Why these calls` — the sharpened calls that differ from the titles, the signal behind each, what was unasked.

## 8. Questions the sharpening refuses

Some roster questions have no honest answer in the data; the reply
says so instead of sharpening fiction:

- *"Is the quiet exec still with us?"* — the record carries silence,
  not intent. Answerable only by the door-opener's next touch; the
  sharpened call names the question, not the guess.
- *"Will procurement block us?"* — a control-point is a pipeline,
  not a prognosis; what it needs next is the sharpened answer, not
  a prediction of its mood.
- *"How strong is the rival?"* — a named competitor is a fact; its
  standing is not in our record. The plan can counter it; the read
  cannot score it.
- *"Is this deal closing?"* — the map shows who must believe what;
  the answer lives in the moves, never in the tone of a reply ratio.

Refusals are answers too — each one names what would settle it and
who holds that piece.

## 9. Thin or wrong inputs

Thin input: `## Sharpening` leads with what is missing; each thin contact keeps its cannot-answer line and one askable question; the pull-list names records and holders; the document stays complete and short. A required input absent entirely is not thin — stop and ask; sharpen nothing, no partial.

Wrong request: the note opens the reply — <=~180 words, `# ` + the artefact name: it redirects, names the ask, why this data misleads it, what it supports, what a real input needs. Where the inputs still carry a contact record, the reply then delivers the sharpened map in full — the unanswerable artefact is declined, the answerable one is supplied. No contact data at all means the note stands alone.

Call read_reference on `references/sharp-account.md` once before writing — invented replies: full, thin, redirect. The shape transfers; every fact comes from the input on your desk. First characters: `## Sharpening`, or `# ` for the note.

