---
name: stakeholder-map
description: Turns an account's contacts, meeting notes and CRM activity into a stakeholder map a seller can act on: influence tiers from behaviour, relationship strength from the record, coverage gaps from the deal's shape, a sequenced plan and an executive sponsor call.
---

# Titles say who could decide; behaviour says who is deciding

A contact list sorted by title is the seller's guess: the most senior name is assumed to be the buyer, the friendliest name the champion, and every missing title a gap. The record usually says otherwise. The person who forwards our material the same afternoon, sets up the meetings and talks about budget treatment is steering the deal, while a senior executive who replied once and went quiet is a risk, not a sponsor. So I read what each person did, and how often, before I read their title, and every tier, score and gap in the map has to point at a line of the input. A contact, name or meeting the input does not hold does not exist, and a person the notes mention without introducing (an unnamed COO, four unnamed attendees) is a gap to close, never a row to fill.

## First, what was pasted

A request for a different artefact (an org chart of who reports to whom, a forecast) gets the redirect note of its own section below, whose first characters are `# ` and the account's name and `: not a stakeholder map request`. Everything else, however thin, is a stakeholder map, and its reply's first characters are `## Reading ` and the account's name, with no sentence before them. The reply is the document itself, written to the seller; it never mentions this skill or its reference.

## The reading comes first

The reply opens with `## Reading <account>'s contacts against the deal`, with nothing before it, because a tier the seller cannot trace to the record reads as opinion and gets argued instead of used. Its first sentence says what was supplied: the deal's size and stage, and which sources came with it. Then one numbered entry per named contact, in the input's order, two or three plain sentences each: what the person did, with dates and counts copied from the input (meetings attended, who initiated, emails out against replies in, days since the last touch), the tier that behaviour earns and why that tier rather than the one the title suggests, and the strength with its trajectory. A `Figures:` line works each ratio and gap from its numbers (replies over emails sent, days since last touch, the deal size against a contact's stated authority). A `Not in the record:` line names each person mentioned but not introduced, and each fact the plan would need.

## Influence tiers, from behaviour

- **Economic buyer:** the person whose sign-off the deal needs at its size, by stated authority or by what others say they must clear. When the champion's own limit sits below the deal size, the buyer is whoever holds the rest, met or not.
- **Champion:** someone who spends their own capital on the deal: initiates, shares internal data unprompted, forwards our material, arranges introductions, briefs upward. A champion without authority for the deal size is still a champion; the map says what they cannot sign.
- **Influencer:** shapes the decision without owning it: a technical evaluator, a senior user, an executive who has said the deal fits but does not drive it.
- **Gatekeeper:** controls a required step: procurement, security, legal, compliance. The map says whether the gate is cleared (with the line that clears it) or pending (with what it needs).
- **Peripheral:** attended or was copied, with no sign of influence.

A title never sets a tier by itself; a senior title with no behaviour is an influencer at most, and a junior title that drives the meetings can be the champion.

## When the signals disagree

Signals often point two ways: warm words with no action behind them, praise relayed but never said to us, an executive who blessed the deal and went silent. Never settle the contradiction silently in either direction. The contact's Rationale cell says `Conflict:` with both signals and their dates, which one weighs more and why (an act outweighs a statement; a recent act outweighs an old one; what the person did outweighs what someone said about them), and the tier held provisionally; the plan then carries the one action that would settle it. When a call rests on one thin signal, or none, the cell says so rather than projecting certainty.

## Relationship strength, from the record

Score each named contact 1 to 5, citing the counts: 5 initiates and acts for us, replies the same day, has introduced others; 4 engaged and responsive, replies to most emails; 3 responsive when asked, no initiative; 2 occasional or narrow (one reply, one topic); 1 dormant (no reply to repeated outreach, or silent for longer than the deal cycle allows) or never contacted. Say the asymmetry when it exists: our emails against their replies, warmth on a call against silence after it, praise relayed second-hand rather than said to us. Say the trajectory (warming, steady, cooling, dormant) with its dates. A score above what the counts allow is wrong.

## Coverage gaps, from the deal's shape

Gaps come from what this deal at this size and stage still needs, never from a list of titles every enterprise deal is supposed to have. First write the persona set this deal requires, from its size, stage and the approvals the record names (who must sign at this size, which gates the record names, who owns a requirement the record states), then compare the named contacts against that set. The team that will use the product is not a missing persona while its own lead is the one driving the deal. The questions are: who signs at this size, and is that person engaged; how many people give us access, and what happens if that one goes quiet; which required gate (security, procurement, legal) is cleared and which is pending, with its owner; whose concern, stated in the record, has not been answered. A deal with exactly one access holder is flagged as single-threaded, by name, as a structural risk distinct from the ordinary gaps, and the first step of the plan is the move that opens a second thread through that person. A small or early deal with its decision-maker engaged and no gate raised has no persona gaps, and the map says so in one line with the reason rather than inventing a CFO, a procurement step or a users' gap; its plan leads with the next step already booked with the buyer and folds any other contact's confirmation into it. The team the purchase is for is the buyer's own team, not an unmet persona, and one buyer signing inside their own authority is not a single-thread risk to repair at that size. A gate the record shows cleared is not a gap.

## The engagement plan, the unblocking move first

Order actions by what unblocks the deal, not by seniority: first the move without which nothing else matters (access to the economic buyer, the open gate), then what de-risks it, then what widens it. Each step names the contact or gap, the cited signal that makes it the right move, who does it, and `Depends on:` the earlier step it needs, or none. A dormant senior contact is never cold-emailed again: the route back runs through the person who has access (the champion, or whoever arranged the first meeting), with a reason to meet that answers that contact's own stated interest. An unintroduced buyer is reached through an introduction the champion brokers, not a cold message. Generic actions ("send a follow-up") are not actions.

## The executive sponsor

One paragraph: who should sponsor the deal on the account's side and why, from what the record shows they did and said, or, when no one qualifies yet, a candid statement of what is missing and the step that would produce a sponsor. Never name a sponsor the record does not support.

## The map

After the reading, the map, as plain markdown: a title `# <account>: stakeholder map`, then `## Stakeholder table` with columns Contact, Title, Influence tier, Strength (1-5), Rationale, Trajectory, one row per named contact and no other rows, the Rationale citing the signal and any conflict; `## Coverage gaps`; `## Engagement plan`, numbered in order; `## Executive sponsor`. It ends with a short section headed `## Why <account>'s map reads this way`: each call that matters, because of which signal, and what was left off and why, in the account's own words. It reasons; it never recaps the labels.

## When the request is for another artefact

The note is under 180 words, with no reading and no map. Its first line is `# <account>: not a stakeholder map request`, with no line before it about the skill, the cases or what follows. Its first sentence opens "This redirects your request:" and says what was asked for, why the material cannot support it (a reporting-line chart needs reporting lines, and contact records and meeting notes do not hold them), and the artefact that fits by name: a stakeholder map, influence tiers and relationship strength read from behaviour, with coverage gaps and a sequenced plan. Then where the asked-for artefact properly comes from (an org chart is drawn in a diagramming tool from reporting lines the account confirms, with the known contacts marked), what it would take to build the map (the contacts' meeting notes and CRM activity, pasted), and that nothing is drawn or guessed in the meantime.

## Before you write

Call read_reference on `references/worked-cases.md` (three invented cases, each pasted input with its full reply; take the form and the reasoning, never the facts). Then send the reply once. The seller receives it as the finished document, starting at its first character, so a line such as "Now I'll produce the stakeholder map" would sit at the top of their document. Do not announce it or say what you are about to do: its first characters are `## Reading ` and the account's name, or, for a request for another artefact, `# ` and the account's name.
