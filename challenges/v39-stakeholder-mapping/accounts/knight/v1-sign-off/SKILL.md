---
name: sign-off
description: >
  Signs off every contact in account deal data — CRM rosters, activity
  counts, meeting notes, deal context — against the behavioural record:
  cleared to a tier and strength, held where the record cannot settle,
  rerouted where the person belongs to the gap list. Then writes one
  markdown document from the cleared sheet: a signal-cited stakeholder
  table, a coverage gap analysis scaled to deal size and stage, a
  sequenced engagement plan, and an executive sponsor recommendation.
---

# The sign-off — each contact is cleared, held, or rerouted on the record

Every contact is reviewed before the document is written: cleared means the record supports the tier the signals argue; held means the record does not yet support a call at that strength; rerouted means the person belongs in the gap list, not the table. The review stays in the reply — the sign-off sheet is what makes the calls checkable instead of asserted. Contacts are only cleared on what the inputs state; silence is recorded as silence. A request for a different artefact — a chain-of-command diagram, a quarterly projection, pre-written cadences, a portfolio health score — is never cleared: the reply redirects per the note rule.

## 1. The sign-off sheet

The reply opens with `## Sign-off`. First line: what was supplied and that it is account contact data for a live deal — contacts, activity, notes, deal size and stage. Then one row per contact, in input order:

```
<name — title> — CLEARED: <tier>, <strength> | HELD → <what the record
does not yet support; what would clear it> | REROUTED → <gap list>:
<basis — initiation, reply ratio, recency, a named act, stated
authority>.
```

`Not reviewed:` covers what the roster never filed — people named only in notes, obligations our side owes, a competitor in context. `Figures:` works each two-number figure from both operands. The document is written from the cleared and held contacts — every one of them appears in it, count them; nothing reviewed is left off.

## 2. The review rules

The sheet clears seven tiers — **mover · analyst · controller · decider · stale · unresponsive · unknown** — strength beside them: firm / building / weak / void.

- [ ] mover — record shows owned investment: self-initiated contact,
      internals shared unprompted, an intro made, own capital spent.
      Enthusiasm without an owned act holds at supporter-grade.
- [ ] analyst — engaged evaluation without advocacy: attends, tests,
      answers, never sells it inside.
- [ ] controller — process owner: procurement, security, legal. Neutral
      by default; writing that closes the file — review complete, nothing owed — clears closed —
      resolved, never an open risk.
- [ ] decider — authority evidence: budget line, sign-off limit,
      approval gate. Seniority alone never clears it.
- [ ] stale — a real touch, then silence counted in days. Re-warm runs
      through whoever made the introduction.
- [ ] unresponsive — avoidance on record: missed both reviews, answered once in eleven days,
      follow-ups ignored.
- [ ] unknown — zero touches on the row, or a name held only in
      others' words; the second case reroutes to the gap list.

Review overrides:

- A mover whose authority stops short of the deal size clears with the
  ceiling beside her name — the signer she cannot reach is the buyer.
- Strength clears on the asymmetry: initiation direction, reply ratio,
  response time, days since touch. ten sends to two acknowledgements = weak.
- Can't settle between two tiers? Hold the ambiguity and name the one
  question that clears it; an owned hold outranks a wrong sign-off.

## 3. Gap review

Gaps clear from this deal's shape — size and stage define "missing":

- Small deal, signer engaged → `no material gaps`, one line; invented
  procurement, legal, or executive layers are padding.
- Mover authority below deal size → the structural gap: signer absent.
- Large or late-stage → the implied approval chain (security, legal,
  finance, board) cleared where the record has not produced it.
- Exactly one live contact → `single-thread`, always; a second person
  who attended once and vanished does not clear it.
- Named-but-unmet people → gap entry with the brokered route — via the
  mover, artefact in hand; a direct note to a stale or unmet exec
  never clears.
- Owed obligations — unanswered questionnaire, promised assessment —
  clear as ours, dated where the record dates them; a step waiting on
  us is said to wait on us.

## 4. Order

The sheet clears the deal's actual gate first — the demanded artifact,
the access only one person opens, the owed obligation holding a
signature — not seniority, not convenience. Each step cites its
contact, its signal, its dependency: brief before exec ask,
questionnaire before clearance. A step without a signal is padding;
"send a follow-up" is worse than none. A named competitor outranks
housekeeping; a deal stalling on one unanswered send gets a step for it.

## 5. Sponsor

The recommendation clears on authority plus receptivity evidenced — or
holds the candid line: nobody qualifies yet, with what would change it.
A title never clears it alone; an inflated name is the floored call.

## 6. Figures

`Figures:` clears operands beside results: sends over replies, quiet days vs the stage, deal vs stated authority. Counts in words.

## 7. The document

The cleared sheet produces one markdown document:

- `# <Account> — <deal>: <headline call>`
- `| Name | Role | Tier | Strength | Signal |` — reviewed contacts; Signal carries the basis.
- Coverage gaps — cleared gaps, deal-shaped, with routes.
- Engagement plan — numbered; the gate first; contact + signal + dependency per step.
- Executive sponsor — grounded paragraph, or the candid hold.
- `Reviewer's note` — the holds and reroutes that differ from the titles, the basis of each, what cleared.

## 8. Thin or wrong inputs

Thin input: `## Sign-off` records the missing evidence first; each thin contact names what clears it plus one askable line; pull-list names records and holders; the document stays complete and short. A required input absent entirely is not thin — stop and ask; nothing is cleared, no partial produced.

Wrong request: never cleared — a note <=~180 words, `# ` + artefact name: it redirects, what the request is, why this data misleads it, what it supports, what a real input needs.

Call read_reference on `references/reviewed-account.md` once before writing — invented replies: full, thin, redirect. Form only; facts from the inputs in front of you. First characters: `## Sign-off`, or `# ` for the note.
