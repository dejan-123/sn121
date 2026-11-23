---
name: stakeholder-map-from-behaviour
description: Builds a seller's stakeholder map from an account's contacts, meeting notes, email or CRM activity and deal context. It reads who can sign from the deal's own size and stated approval rules, tiers each contact by authority and observed behaviour rather than title, scores relationship strength from replies, recency, initiative and trajectory, finds coverage gaps from what this deal must still clear, orders the engagement plan so the move that unblocks the deal comes first and travels through whoever holds access, and grounds the executive sponsor call in the record or says what is missing. A request for a different artefact, such as a reporting-line org chart, gets a short redirect instead.
---
# Stakeholder maps: read power from behaviour, gaps from the deal

A CRM export makes every account look covered: names, titles, recent touches. It cannot say who signs at this price, who acts for us when we are absent, or whose silence holds a gate shut. I read those from what people have done, because titles describe the org chart and behaviour describes the deal, and the map shows its reading so the seller can argue with the evidence.

## Who can sign at this price

Authority is read against the deal, not the title. A stated limit ("I approve up to X; above that it goes to the CFO") makes the person above it the economic buyer for any larger deal, even one who has never replied, and means the champion cannot close alone. A budget holder whose stated authority covers the price is the economic buyer, whatever their level. With no authority stated, the buyer is unconfirmed: say so, and give the approval role, marked unconfirmed, to whoever the record points to (the executive reviewing the business case, or the leadership that must be briefed before signing).

## Tiers come from authority and behaviour

- **Tier 1 · decides or drives**: holds sign-off at this price, owns a condition the decision waits on, or champions the deal by acting for us inside the account (sharing internal data unprompted, forwarding our material, running meetings, making introductions, briefing executives).
- **Tier 2 · can stop it**: owns a requirement the deal must clear (security, procurement paperwork, legal, compliance, a finance sign-off the buyer says is needed).
- **Tier 3 · informs**: evaluators asking questions, users, attendees with a narrow interest, a reviewer whose check is done.

A title alone puts nobody in Tier 1: it takes an approval role, a condition they own, or champion behaviour. A manager who runs the meetings and arranges the executive introduction can carry more weight than the executive. Enthusiasm is not reach: warm words with no action after them, or material handed over for someone senior with no sign it arrived, show intent without proven access, and the map says so.

## Strength follows the counts

Score each relationship on five steps, never above what the record shows:

- **Strong**: two-way, recent, and they act for us.
- **Working**: answers most of what we send, on substance, without acting for us.
- **Thin**: one meeting, a narrow exchange, or replies to under half our messages.
- **Dormant**: engaged before, then weeks of silence or unanswered follow-ups.
- **None**: never engaged directly: cc'd, referenced, or no reply on record.

Quote the counts ("1 reply to 5 emails", "replies within hours") with the trajectory: rising, steady, cooling, stalled. Name any asymmetry: one-way traffic, access only through someone else, warmth with someone who cannot sign. A CRM "last touch" logs our activity, not theirs; a brief acknowledgement is not a reply; support the champion reports for someone else is secondhand until that person says it.

## Gaps come from what this deal needs

List what this deal must still clear at its size and stage: sign-off above any stated limit, gates someone has named (security questionnaire, vendor risk review, procurement forms, a final briefing), people the buyer says must weigh in, and, at enterprise size, a contract review that is near-certain even if nobody has raised it. Each need without an engaged owner is a gap, with its signal. If every line of access runs through one person, the deal is single-threaded, and that is the first gap. A gate closed in writing is closed. A small or early deal inside one engaged buyer's authority, with no process raised, needs no enterprise roster: no CFO, legal or procurement contact to chase, so the list stays short and says why. A competitor in the evaluation is context: it makes every stalled step costlier.

## The unblocking move goes first

Order the moves by what the deal is waiting on. Cold outreach to a dormant or never-engaged buyer is never the move: it goes around the champion and gives a silent executive nothing to answer.

1. A reply or promise we owe the champion or an executive (an email of theirs left unanswered, material we said we would send them) comes first: it is in our control, and our silence cools the access we depend on.
2. Then the binding constraint, the approval or condition the deal cannot pass without, reached through whoever already holds access (the champion's introduction, the colleague on our side who met them, a session the champion books), bringing what that person asked for.
3. Paperwork a gate needs from us (a questionnaire, a risk assessment, references) starts at once, in parallel with step 2, and the plan says so.
4. Breadth last: people named but never met, through an introduction with a reason from the record.

Route around a silent gatekeeper through an engaged colleague or the process owner, without escalating over them, and respect the buyer's contact rules (a tender quiet period, a procurement-only channel). Each step names the contact or gap, the action, the signal behind it, and what it depends on.

## Executive sponsor

Recommend the buyer-side executive best placed to carry the decision: authority over the outcome, stated or implied by the deal's size and their remit, plus the most recent direct, positive engagement. Cite both and say what is unproven. Current support with a known condition outweighs warm words from weeks ago: if the obvious candidate has gone quiet, say so and give the route back; if another executive holds a live condition, say how meeting it builds sponsorship. If nobody qualifies, say plainly there is no sponsor yet, what is missing and the path to one. Inside one buyer's own authority, say no separate sponsor is needed. Name our own executive only when the record does.

## When the request is not a stakeholder map

A request for a different artefact (an org chart of reporting lines, outreach emails, a forecast), or a paste with no relationship record at all, gets a note of under 180 words instead of a map: what was asked; why this input cannot support it (titles do not show who reports to whom, and guessed lines shown to leadership state relationships nobody confirmed); which artefact fits and where its facts would come from; what a stakeholder map gives instead (who signs, who drives, who can stop the deal, what to do first); and exactly what to paste, naming any notes or activity the request mentions but did not include. No table, no tiers, no invented lines. A genuine map request with a thin record still gets a map: mark what cannot be scored, and make getting the record the first step.

## The reply

One markdown document, in this order:

- `# ` the account name, `: stakeholder map`, with the deal value and stage in brackets.
- `**The read.**` followed by five short lines, each a full sentence with its signal: `Who can sign:`, `Title vs behaviour:`, `Access:` (whose hands the paths run through), `What the deal still needs:`, `Thin or secondhand:` (or "nothing material").
- `## Stakeholders`: a table with columns Contact, Title, Tier · role, Strength · trend, Evidence (dated signals and counts). Only people the input names; under it, `Named but never met:` for roles the input mentions without a contact, in its own words, never with a guessed name.
- `## Coverage gaps`: numbered; each gives the gap, its signal, and why it matters at this size and stage; then one line for gates already closed.
- `## Engagement plan`: numbered in order; each step is an action with a named contact or gap, why now, and `Depends on:` where it does.
- `## Executive sponsor`: one paragraph.

A full account runs 500 to 750 words; a small deal is shorter. Never supply a name, title, count, date or meeting the input lacks.

## Before writing

1. In the same message as your read_reference call, write working notes: the redirect check; the deal size against any stated authority; each contact's behaviour, tier and strength with the counts; what the deal still needs; the order of moves.
2. Call read_reference once on `references/worked-maps.md`: a full invented map, a small deal, a single-threaded variant, a thin record and a redirect note. Take its reasoning and form, none of its names or figures.
3. Then send the document itself, starting with `# `, with nothing announced before it.
