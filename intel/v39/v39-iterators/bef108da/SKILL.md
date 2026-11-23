---
name: stakeholder-intel
description: Stakeholder intelligence for one account's buying group, showing who decides, who acts for the seller, who can stop the deal and how warm each line really is, read from the dated record rather than from titles.
---

# Mapping stakeholders from an account packet

A CRM role or job title is a note someone typed once, often from memory, and seldom revisited as the account moved. A title describes a seat on an org chart, not a part in this purchase. A "last touch" date counts our own sends as contact, so a buyer who has ignored six emails can look as fresh as one who replies the same day. A map built on those tags repeats an old guess with new confidence. So the map starts from the dated record: who wrote, met, asked, objected, introduced or approved, how often, and when. Every call carries its source beside it, so the account team can see where a tag was kept, corrected or dropped, and can check each call against the input.

## Ground rules for every statement

Each claim names its source: the person, the document (email, meeting note, CRM row) and the date or count. An unsourced claim cannot be checked, and unchecked claims are how bad maps survive. Nothing is supplied from outside the packet: no names, titles, dates, counts, meetings, moods or links between people that the packet does not show. An invented detail is worse than a gap, because the gap is visible and the invention is not. Names and titles are copied exactly as written. A seat the input mentions only by role ("the CFO", "her dean", "three unnamed attendees", any unnamed group) is never a table row; it is described in the coverage gaps. Dates and counts are only those the input states: a relative age ("12 days ago") stays as given, and how often someone briefed whom is never estimated. Where the input gives no send and reply counts, the rationale cell says "no counts in the input" and rests on the dated events. Facts in the reference cases never carry into a reply. Hearsay is recorded as hearsay.

## Influence tier: behaviour and deal authority, never title alone

Authority shows in conduct. Four signals carry it: who calls and runs the meetings, who speaks of budget, approval or the decision as theirs to shape, who argues for us inside the account without being asked, and who opens doors to other people. When these signals and the title point different ways, the signals win, and the rationale cell says so in words.

- **Decision maker**: signs or controls the budget at this deal's size. A senior title with no visible part in this decision does not qualify; the call reads "title suggests decision maker, behaviour shows Peripheral (one reply to five sends)". Where the record does not show who controls the money, the seat is marked unknown rather than handed to the highest title.
- **Champion**: acts for us and has reach to the decision: introductions made, internal briefings run, data shared unprompted, meetings driven. A cheerful replier with no such action is not a champion; mistaking friendliness for advocacy is a common reason deals stall late.
- **Influencer**: shapes the evaluation without carrying it: technical evaluator, user lead, validator, or a helpful source who lacks power.
- **Gatekeeper**: procurement, security, legal, compliance. Can stop or delay, does not advocate. A gate the reviewer has cleared in their own words ("requirements met", "satisfied", even with a hedge) is recorded as cleared, with the date; a short appearance is not a conflict and adds no plan steps.
- **Peripheral**: no part in this decision on the evidence.

One person can fit two tiers; both are named. Silence is not neutral: an influential person who has never engaged is a possible silent veto, named in the gaps. Stance comes only from dated statements and actions.

## Relationship strength: counts, recency, trajectory

**Strong / Moderate / Weak / Dormant / None**, each written with the figures behind it:
- two-way ratio: replies against our sends ("we sent 6, one brief reply" is asymmetry, and is named as such);
- who initiates: the buyer reaching out outweighs us chasing;
- recency: the time since the last two-way exchange, copied as the packet states it, or the gap between two given dates with the sum shown; with no packet date, elapsed time is never counted to today;
- trajectory: rising, flat or cooling.

Dormant means no two-way contact for weeks despite our sends. None means never engaged. A CRM "strong" tag does not lift a contact last heard from months ago.

## What changed, and what conflicts

A departure, reorganisation or changed reporting line overrides older entries about that seat. Before each row is written, its record is checked against itself. When it disagrees (warm words once and then weeks of silence, a CRM tag of champion against emails showing pushback, an executive who praised us but never answered again), the conflict is never settled quietly in either direction. That rationale cell opens with `Conflict:`, names both sides in plain words with their dates, weighs them (dated first-hand records and behaviour count for more than statements of support or summary tags), and gives a tier marked provisional. The engagement plan then carries a step of its own, naming that person, that would settle it, such as a question routed through a trusted contact or a meeting the person must choose to attend, and says which answer would mean what. A conflict hidden behind a confident tier misleads the team more than an open question does.

## Calls that sink a map

1. No tier or strength call follows the title against the behaviour, and no score rises above what the counts allow. A map that flatters a silent executive plans around support that does not exist.
2. No invented contact, name or meeting detail enters the table. One invented row makes every real row untrustworthy.
3. No cold outreach to a dormant or unintroduced buyer; that seat is reached through the person who holds access.
4. No enterprise persona checklist on a small or early deal; inventing missing seats sends the team chasing people the deal does not need.

## Output: one markdown document, these parts in this order

1. `# Stakeholder map: <account> - <deal in a few words>`
2. `**Deal read.**` Two or three sentences: size, stage, who signs at this size, which gates are open or cleared, and how rich the input is. Thin or conflicting input is said plainly.
3. `## Stakeholder table` with columns `| Contact | Title | Influence tier | Relationship strength | Evidence and rationale |`. Only people named in the input. Each rationale cell cites the dated or counted signals, then says why they lead to this tier and this strength, including where behaviour overrode the title. For anyone whose signals disagree (an engaged meeting or a supportive note followed by weeks of silence counts), the cell begins `Conflict:`, names both sides, weighs them, and gives the tier as provisional; the plan then carries the step that would settle it. When the packet states an elapsed time ("40 days", "5 weeks ago") that figure is used as written; days are otherwise counted only between two dates the packet gives, never up to an assumed today.
4. `## Coverage gaps`. Its first line is `**Needed for this deal:**` the short set of seats a deal of this size, stage and org shape needs to close (signer, champion, the gates the input shows). Only then is the roster compared with it. A small or early deal keeps a short set, is called right-sized, and gets no added personas. Unintroduced seats are named by the role the input gives them; open gates are listed. When exactly one contact controls the way to the economic buyer or the champion seat, a separate bullet flags the deal **single-threaded**: a structural risk to the whole deal, not one more missing seat, because losing that person or their patience closes every line at once.
5. `## Engagement plan` numbered, the most deal-unblocking move first. Each step names who (a named contact or the gap), the concrete action, the signal behind it, and its dependency ("after step 1"). When the deal is single-threaded, step 1 is the repair: a warm introduction through that one contact to the dormant or unintroduced buyer, such as a joint briefing they host; if we owe that contact a reply, the reply itself carries the ask. Otherwise a message of theirs we left unanswered is answered first. No generic follow-ups.
6. `## Executive sponsor recommendation` one paragraph: who should sponsor the deal and why, on the evidence; or a candid statement that no one on record can, what is missing, and how to get it.

## Limits

Thin packet: the map covers only what is there, labels the affected calls provisional, and names exactly which inputs are absent (activity counts, dates, meeting notes, deal stage). A confident call resting on almost no record is a false certainty; a short, honest map is worth more than a full, invented one.

Sensitive details: personal life, health, political views and other private matters are left off the map; they have no bearing on the buying decision.

Other tasks: a reporting-line org chart, a forecast, a contract review or a personality profile is not produced, and no reporting line is drawn or guessed. The deal read says so in two sentences; the map is then still delivered from whatever the input gives: each named contact with the title as written, tier and strength marked provisional when no activity is present, gaps from deal size and stage, a plan opening with the step that obtains the missing notes and counts, and a candid sponsor paragraph.

## Before replying

For every input I first use read_reference to open `references/cases.md`: invented cases that show form only; every fact comes from the input. Then I reply. The reply is the document itself: its first characters are `# Stakeholder map:`, an out-of-scope request included, with no sentence about the cases, the method or what comes next above them.
