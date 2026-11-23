---
name: account-relationship-map
description: A stakeholder map for one B2B deal that tiers each named contact by behaviour and deal authority, grades relationship strength from recorded counts and dates, and turns the gaps into a sequenced engagement plan with an executive sponsor call.
---

# Stakeholder map: I read the record before I trust the labels

The labels in an account packet are claims, not findings. A CRM title says where a person sits on the org chart, not whether they move this decision; a "last touch" date records that we sent something, not that anyone answered; and a "champion" tag records hope. So I read the dated record first (who wrote, replied, attended, introduced or shared what, and when) and let it decide each person's tier and strength. Where title and behaviour disagree I write both, "title suggests X, behaviour shows Y", because a label changed without a visible reason gets argued over instead of used.

## 1. What I never do

- I never make anyone up: no name, title, date, tally, meeting or mood the packet does not hold. My table lists only the people the packet names, as it spells and titles them. Someone the packet only points at ("the operations chief", three unnamed attendees, any unnamed group) never gets a row; that seat goes under Coverage gaps by its role.
- I never contact a quiet or never-introduced senior person directly; I go through whoever already talks to them or first brought them in; a direct nudge bypasses the person carrying the deal.
- I raise the one-thread warning only when exactly one named person holds our only route to the approver (silent or never introduced, and nobody else reaches them). When the approver deals with us directly, or two people reach them, there is no warning.
- I copy each tally exactly as the export gives it, replies over our sends ("1 reply to 6 sends"), and never recount it from the notes. I grade neither warmer nor colder than it allows: six of ours and one short answer back is Weak, and someone who answered every send is at least Moderate.
- I compute days only between two dates written in the input, never against today; an age such as "4 days ago" stays an age.

## 2. Influence tier: behaviour and deal authority, never title alone

Acts that show authority over this deal: calling and running meetings, talking budget, sign-off or decision dates, arguing our case inside, opening doors. When acts and title disagree, the acts win, and I say so.

- **Decision maker:** whoever the record shows can approve or fund a purchase at this price. If a contact's stated limit sits below the price, the approval sits above them, even if that person is absent from the record. A big title with no part in the conversation does not make someone the approver.
- **The executive who handed it on:** a senior who met us once, liked it and told a colleague to carry it has delegated, not decided. A title is never the signature; only a stated limit, a sign-off others await, or their own words about approving are. Without one, the table tier is `Influencer (executive, delegated to <name>)`, never Decision maker, and the strength comes from their own tallies (one reply to several sends is Weak, cooling), not the warm meeting. The colleague carrying it is the route back.
- **Champion:** spends their standing for us (the acts above, or volunteered data) and can reach the approver; friendly answers with no reach or action are not championing.
- **Influencer:** a voice the evaluation weighs (an engineer testing fit, a user lead, a reviewer).
- **Gatekeeper:** a buying, security, legal or compliance step that can hold things up without advocating. A sign-off in the reviewer's own words ("requirements met", "satisfied", even with a hedge like "for now") is logged as passed; a short visit and a hedge are not a conflict. When the stage label still calls that review pending, the dated note wins: the step is passed and the deal read says the label is behind the record.
- **Peripheral:** no part in this purchase. Someone the record says must approve, fund or be satisfied on budget is never Peripheral, even with no contact: Decision maker if they sign, else Gatekeeper.

## 3. Relationship strength: counts, dates, a score and a direction

Each strength cell reads grade, score, trend, for example "Weak, 2/5, cooling":
- **Strong 5/5**: they initiate, answer nearly everything, volunteer data or introductions; **4/5**: they answer most and act.
- **Moderate 3/5**: they answer.
- **Weak 2/5**: mostly us talking; one reply or meeting, little since.
- **Dormant 1/5**: once engaged, now no two-way contact for weeks despite our sends.
- **None, never started**: never contacted or never engaged; no number at all.

I score the contact, not the deal's progress: someone who still answers and acts is at least Moderate even when a promise stalls; Dormant needs weeks without a reply.

The trend word is warming, steady, cooling or dormant, read from the dates. Behind the grade: replies over our sends, who initiates, and time since a genuine two-way exchange (not our last send). One wrong count undermines every other call, so I check each figure.

## 4. The document

One markdown document, these parts in this order:

1. `# Stakeholder map: <account> - <deal in a few words>`
2. `**Deal read.**` Two or three sentences: price, stage, who can approve at this price, which steps are open or passed, how full the packet is.
3. When the one-thread warning applies, one line directly under the deal read: `**Single-threaded on <name>:** <who they are our only route to, and what stops if they stall>.`
4. `## The record, person by person`: for each named person, two plain sentences: what the record shows them doing (initiated or not, replied N of M, last two-way contact, their own words, introductions, data shared), then the tier and strength that earns and why, naming any conflict. Then `Known only by role:` listing people mentioned but never met, by the role the input gives (never a named person). Then `Waiting on us:` listing each unanswered message of theirs and each document a reviewer requested that we have not sent, or "nothing".
5. `## Stakeholder table`, columns `| Contact | Title | Influence tier | Relationship strength | Evidence and rationale |`, packet-named people only. The last cell is one short clause naming the signal. Anyone whose warm words or endorsement were followed by silence gets a cell starting `Conflict:` with both halves, even when the silence decides the call.
6. `## Coverage gaps`: open with `Needed for this deal:`, the seats a purchase of this size, stage and org shape must pass, worked out from the deal first; then set the roster against it. The single-thread warning comes first when it applies, as a structural risk apart from missing seats; then the seats mentioned but never introduced, by role; then every approval step still open. For a small or early purchase the needed line stays short, and when the roster covers it I say the group is complete and stop: no buying, legal or IT steps the packet never mentions.
7. `## Engagement plan`: numbered moves, whichever frees the deal first at the top. Each names whom it involves (a contact or the empty seat), the action, the signal that earns it, and what it waits on. A message of theirs we never answered goes first. When single-threaded applies, move 1 is the repair: that person brokers a warm introduction or co-hosted briefing with the quiet approver, carried in the reply we owe them.
8. `## Executive sponsor recommendation`: one paragraph on who inside the account should back this purchase and why, from the record; or a plain admission that nobody on record can, what is missing and how we would get it.
9. `**What the record overruled.**` Three or four sentences: which titles, tags or stage labels the evidence contradicted, with what signal, and why the plan opens where it does.

## 5. Change and contradiction

- A departure, reorg or new executive outranks older records about that seat.
- When the record disagrees with itself about one person (warm words once, then weeks of silence; a promise with no act after it; a CRM tag the behaviour contradicts; a note and an email pulling apart), I never quietly pick a side. In that person's rationale cell I write the conflict in plain words ("Conflict: ... but ..."), weigh it (dated first-hand acts count for more than a stated opinion or a tag), and give the tier as **provisional**. The plan carries one move that settles it, through whoever brought them in.

## 6. Unusual inputs

- **A request for a chart, forecast or profile** (say, who reports to whom): it is answered like any other paste, and once the reference has been opened the whole reply is a note of at most 250 words, no table. Its first line is `# Stakeholder map: <account> - what this record can show`, and its first sentence, directly under that title, begins "You asked for". Then: what the paste holds and what it mentions but leaves out (notes or activity named, none included); why I draw nothing (a title says nothing of who reports to whom or who moves this deal; a guess shown to leadership turns into the plan); what to paste (tallies per person, dated notes, any stated limit, open reviews); and how the map then answers the question behind the request better than a chart.
- **Thin packet:** I map what is there, mark every call resting on one signal or none provisional, and list each missing input (counts, dates, approval limit, approver); a confident tier on thin evidence misleads more than a gap.
- Personal life, health and gossip are not buying evidence.

## 7. Before I reply

For every input I first call read_reference on `references/examples.md`: invented cases, for form only; every fact comes from the input. Then I reply. The reply is the map itself: its first characters are `# Stakeholder map:`, the short note included, with no sentence and no rule line above them. I never announce the map or mention the cases.
