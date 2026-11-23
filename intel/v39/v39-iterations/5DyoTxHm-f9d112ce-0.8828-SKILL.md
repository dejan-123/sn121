---
name: stakeholder-map
description: Turns an account's contacts, meeting notes and CRM activity into a stakeholder map a seller can act on: influence tiers from behaviour, relationship strength from the record, coverage gaps from the deal's shape, a sequenced plan and an executive sponsor call.
---

# Titles say who could decide; behaviour says who is deciding

A contact list sorted by title is the seller's guess: the most senior name is assumed to be the buyer and the friendliest the champion. The record usually says otherwise: whoever forwards our material, sets up the meetings and talks about budget is steering the deal, while an executive who replied once and went quiet is a risk. So I read what each person did, and how often, before I read their title, and every tier, score and gap in the map has to point at a line of the input. A contact, name or meeting the input does not hold does not exist, and a person the notes mention without introducing (an unnamed COO, four unnamed attendees) is a gap to close, never a row to fill.

## First, what was pasted

A request for a different artefact (an org chart of who reports to whom, a forecast) gets the redirect note of its own section below, whose first characters are `# ` and the account's name and `: not a stakeholder map request`. Everything else, however thin, is a stakeholder map, and its reply's first characters are `## Reading ` and the account's name, with no sentence before them. The reply is the document itself, written to the seller; it never mentions this skill or its reference.

## The reading comes first

The reply opens with `## Reading <account>'s contacts against the deal`, with nothing before it, because a tier the seller cannot trace to the record reads as opinion. Its first sentence says what was supplied: the deal's size and stage, and which sources came with it. Then one numbered entry per named contact, in the input's order, two or three plain sentences each: what the person did, with dates and counts copied from the input (who initiated, emails out against replies in, days since the last touch), the tier that behaviour earns and why that tier rather than the one the title suggests, and the strength with its trajectory. A `Figures:` line works each ratio and gap from its numbers (replies over emails sent, the deal size against a stated authority). A `Not in the record:` line names each person mentioned but not introduced, and each fact the plan would need.

## Influence tiers, from behaviour

- **Economic buyer:** the person whose sign-off the deal needs at its size, by stated authority or by what others say they must clear. When the champion's own limit sits below the deal size, the buyer is whoever holds the rest, met or not.
- **Champion:** someone who spends their own capital on the deal: initiates, shares internal data unprompted, forwards our material, arranges introductions, briefs upward. A champion without authority for the deal size is still a champion; the map says what they cannot sign.
- **Influencer:** shapes the decision without owning it: a technical evaluator, a senior user, an executive who has said the deal fits but does not drive it.
- **Gatekeeper:** controls a required step: procurement, security, legal, compliance. The map says whether the gate is cleared (with the line that clears it) or pending (with what it needs).

A title never sets a tier by itself; a senior title with no behaviour is an influencer at most, and a junior title that drives the meetings can be the champion. An executive who said the deal fits and asked their own person to keep driving it has delegated, not gone cold: the tier reads sponsor acting through that person, and our strength with them stays low until they answer us directly.

## When the signals disagree

Signals often point two ways: warm words with no action behind them, praise relayed but never said to us, an executive who blessed the deal and went silent. Never settle the contradiction silently in either direction. The contact's Rationale cell says `Conflict:` with both signals and their dates, which one weighs more and why (an act outweighs a statement; what the person did outweighs what someone said about them), and the tier held provisionally; the plan then carries the one action that would settle it. When a call rests on one thin signal, or none, the cell says so rather than projecting certainty.

## Relationship strength, from the record

Score each named contact 1 to 5, citing the counts: 5 initiates and acts for us, replies the same day, has introduced others; 4 engaged and responsive, replies to most emails; 3 responsive when asked, no initiative; 2 occasional or narrow (one reply, one topic); 1 dormant (no reply to repeated outreach, or silent for longer than the deal cycle allows) or never contacted. Say the asymmetry when it exists: our emails against their replies, praise relayed rather than said to us. Say the trajectory (warming, steady, cooling, dormant) with its dates.

## Coverage gaps, from the deal's shape

Gaps come from what this deal at this size and stage still needs, never from a list of titles every enterprise deal is supposed to have. First write the persona set this deal requires, from its size, stage and the approvals the record names (who must sign at this size, which gates the record names, who owns a requirement the record states), then compare the named contacts against that set. A deal with exactly one access holder is flagged as single-threaded, by name, as a structural risk distinct from the ordinary gaps, and the first step of the plan is the move that opens a second thread through that person. That holds when every live line to the decision runs through that person; when other contacts answer us directly, or the one person is the buyer signing inside their own authority, no flag is raised. A small or early deal with its decision-maker engaged and no gate raised has no persona gaps, and the map says so in one line with the reason rather than inventing a CFO, a procurement step or a users' gap; its plan leads with the next step already booked with the buyer and folds any other contact's confirmation into it. A narrow check its owner called satisfied is confirmed inside that step; the team the purchase is for is never a gap. A gate closed in writing is cleared even when the deal's stage label still calls it pending; say the label is out of date. A gate the record never raises (legal, procurement) is not a gap; at most it is one question to the champion.

## The engagement plan, the unblocking move first

Anything we owe comes first: a message of theirs the record shows we have not answered, a document they asked for that has not gone back. It is in our control, and our silence cools the access the deal depends on. Order actions by what unblocks the deal, not by seniority: first the move without which nothing else matters (access to the economic buyer, the open gate), then what de-risks it, then what widens it. Each step names the contact or gap, the cited signal that makes it the right move, who does it, and `Depends on:` the earlier step it needs, or none. A dormant senior contact is never cold-emailed again: the route back runs through the person who has access (the champion, or whoever arranged the first meeting), with a reason to meet that answers that contact's own stated interest. An unintroduced buyer is reached through an introduction the champion brokers, not a cold message.

## The executive sponsor

One paragraph: who should sponsor the deal on the account's side and why, from what the record shows they did and said, or, when no one qualifies yet, a candid statement of what is missing and the step that would produce a sponsor.

## The map

After the reading, the map, as plain markdown: a title `# <account>: stakeholder map`, then `## Stakeholder table` with columns Contact, Title, Influence tier, Strength (1-5), Rationale, Trajectory, one row per named contact and no other rows, the Rationale citing the signal and any conflict; `## Coverage gaps`; `## Engagement plan`, numbered in order; `## Executive sponsor`. It ends with a short section headed `## Why <account>'s map reads this way`: each call that matters, because of which signal, and what was left off and why, in the account's own words. It reasons; it never recaps the labels.

## When the request is for another artefact

The note is under 180 words, with no reading and no map. Its first line is `# <account>: not a stakeholder map request`, with no line before it about the skill, the cases or what follows. Its first sentence opens "This redirects your request:" and says what was asked for, why the material cannot support it (a reporting-line chart needs reporting lines, and contact records and meeting notes do not hold them), and the artefact that fits by name: a stakeholder map, influence tiers and relationship strength read from behaviour, with coverage gaps and a sequenced plan. Then where the asked-for artefact properly comes from (an org chart is drawn in a diagramming tool from reporting lines the account confirms, with the known contacts marked), what the map would tell leadership on this deal (who signs at its size, who drives it, who could stop it) and what it would take to build it (the contacts' meeting notes and CRM activity, pasted), and that nothing is drawn or guessed in the meantime.

## Before you write

Call read_reference on `references/worked-cases.md` (five invented cases, each pasted input with its full reply; take the form and the reasoning, never the facts). Then send the reply once. The seller receives it as the finished document, starting at its first character, so a line such as "Now I'll produce the stakeholder map" would sit at the top of their document. Do not announce it or say what you are about to do: its first characters are `## Reading ` and the account's name, or, for a request for another artefact, `# ` and the account's name.
