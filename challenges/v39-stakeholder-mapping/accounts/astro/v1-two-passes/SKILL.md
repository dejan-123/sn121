---
name: two-passes
description: >
  Reads account contact data — CRM exports, meeting notes, deal context — in
  two passes: first collecting what the record shows about each contact and
  each referenced person, then deciding each contact's tier and strength. It
  produces one markdown document: a stakeholder table where every row cites
  its signal, a coverage gap analysis scaled to the deal's size and stage, a
  sequenced engagement plan, and an executive sponsor recommendation.
---

# Two passes — collect the signals, then call the tiers, both in the open

Deciding while reading produces the field's classic error: a title accepted as a tier before its evidence is weighed. A "Chief" who never replied is read as senior; the coordinator who arranges every meeting is read as junior — the record says the reverse. So the work runs in two passes. Pass one only collects — for each contact and each named-but-unmet person, what the record actually shows. Pass two only decides — each contact's tier and strength on the collected signals alone. Both passes stay in the reply; the document is written from the second. Nothing is collected that the inputs lack; silence is collected as silence, and silence is itself a signal. A request for a different artefact — a reporting-lines org chart, a bookings forecast, outreach copy, an account-level pipeline review — fails pass one: the reply opens with the redirect note, then delivers the map the data supports when contact data exists (the note rule).

## 1. Pass one — the signals

The reply opens with `## Pass one — the signals`. First line: what arrived and what kind of data it is — a roster, activity counts, notes, the deal's size and stage. Then per contact, in input order, one line of collected fact only:

- who initiated, who replies to whom, and the ratio (sent 7 / replies 6)
- recency — days since last touch, counted against the deal clock, not the calendar
- named acts — arranged an introduction, shared internal data unprompted, forwarded a model, arrived late and left early
- stated authority — budget lines, sign-off limits, approval gates, in the input's own numbers
- or "nothing in the record" — collected plainly, as a fact

`Beyond the roster:` collects what the contact list never filed — people named in notes who hold no record (a division chief seen only through a champion's emails), obligations our side owes (an unanswered questionnaire, a promised data pack), a competitor named in the deal context. `Figures:` works every two-number figure — reply ratios, days dormant, deal size against stated authority — with both operands beside the result.

## 2. Pass two — the calls

`## Pass two — the calls` assigns each contact one tier and one strength on pass-one evidence alone — one sentence each naming the deciding signal. The document is built from this pass: called contacts become rows, collected absences become gap entries or stated non-items; nothing collected is dropped.

Closed tier set — **champion · influencer · gatekeeper · economic buyer · dormant · disengaged · uncontacted** — one tier per contact; strength stated separately as strong / warming / thin / cold.

- **Champion** — owned investment only: brought an executive in, forwarded internals unasked, put budget behind the pilot. Warmth without an owned act is a supporter; say so.
- **Economic buyer** — evidence of authority (budget line, sign-off limit, approval gate), never seniority. A VP holding $600K against a $1.9M deal is a champion with a ceiling; the unreachable signer is the real buyer, present or not.
- **Gatekeeper** — process owner: procurement, security, legal, compliance. Neutral by default. Writing that closes the review closes the row — resolved, never an open risk.
- **Dormant** — engaged, then silent; state the days. Not dead: re-warm through whoever opened the door.
- **Disengaged** — avoidance on record: missed sessions, ignored threads. Facts only, no invented hostility.
- **Uncontacted** — zero-touch CRM row (kept, marked "no record") or a name living only in others' words (no row — gap list).
- **Strength** — the asymmetry: initiation direction, reply ratio, response time, days quiet. Six sent to one brief reply reads thin however warm it sounded.
- Unsettleable call (engaged once, then gone) — name the ambiguity and the question that settles it; an owned Review beats a confident wrong call.

## 3. Gaps and routing

Gaps come from this deal's shape — size, stage, what the record demands — not a persona checklist:

- Signer engaged on a small deal → `no material gaps`, one line; manufactured procurement/legal/exec needs read as noise.
- Champion's authority below the deal → structural gap, named plainly: the signer is not in the room.
- Large or late-stage → the implied chain (security, legal, finance, board sign-off) named where the record lacks it.
- Exactly one live contact → `single-thread`, flagged by name at any deal size; an attendee who vanished once does not clear it.
- Named-but-unmet people → gap entry plus brokered route: through the champion, the meeting-earning brief already written. Cold outreach to an unmet or dormant exec is never the plan.
- Owed obligations (unanswered questionnaire, promised assessment) → listed as ours, dated; a step waiting on us says so.

## 4. Sequencing

Order by what unblocks the deal — not seniority, not convenience. Step one addresses the actual gate: the demanded artifact, the access only one person opens, the owed obligation holding a signature. Each step names contact, signal, dependency (the briefing precedes the executive ask; the questionnaire precedes clearance). A step citing nothing is padding; a generic nudge is worse than none. A rival named in context outranks tidy admin; a deal idling on one unanswered ask gets the move that unblocks it.

## 5. Exec sponsor rules

Name someone the record supports — authority plus receptivity — or state plainly nobody qualifies yet. Title alone never earns it: a champion without signature authority is named champion, the seat flagged to whoever holds the gate she cannot pass. The honest "no sponsor exists" comes in one sentence with what would change it — candor scores, inflation floors.

## 6. Figures

`Figures:` shows every two-number figure with operands beside the result: reply ratios as sent/received, days dormant against the stage, deal size against a stated authority limit ((deal − authority) / authority where a gap matters). Counts are summed in words, not ratios.

## 7. The document

After the passes, one markdown document in the asked-for shape:

- Title: `# <Account> — <deal>: <the headline call>` (the call, not the roster — "champion engaged, signer unmet")
- **Stakeholder table** — `| Name | Role | Tier | Strength | Signal |`, one row per contact, signal column carrying the specific evidence (a name, a date, a count)
- **Coverage gaps** — each gap named, its deal-shape reason, and the path to close it; unmet personas and single-thread flags live here
- **Engagement plan** — numbered in sequence, most deal-unblocking first; each step tied to a named contact or gap and its cited signal, with dependencies where they matter (the briefing exists before the exec ask)
- **Executive sponsor** — a short paragraph naming the recommendation and its grounding, or a candid sentence on what is missing when nobody yet qualifies
- Last: `The calls` — three or four sentences: where pass two differs from the titles, the signal behind each call, what was deliberately left out.

## 8. Thin or wrong inputs

Thin input: pass one collects "nothing in the record" plainly; the table holds what exists; each thin contact carries the signal that would settle it plus one askable line; a pull-list names each missing record and who holds it. A required input absent entirely is not thin — stop and ask for it; no document, not even a flagged partial. A request for a different artefact — a reporting-lines org chart, a bookings forecast, outreach copy, a pipeline-level read — opens with the note and nothing else: at most ~180 words titled `# ` + the artefact name, saying it redirects, what the request is, why producing it from this data would mislead (a chart needs hierarchy data the notes don't carry), what the supplied data does support, and what the real input would need. Then, when the inputs still carry contact-and-activity data, the reply continues with the supported map in the usual shape — passes, table, gaps, plan, sponsor — so the requester leaves with the artefact that exists rather than none. When the inputs carry no contact data at all, the note is the whole reply.

Call read_reference on `references/two-pass-account.md` once before writing — complete invented replies: full input, thin input, the redirect. Form only; every name, figure, and fact in a real reply comes from the inputs in front of you. First characters: `## Pass one`, or `# ` for the note.
