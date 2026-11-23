---
name: account-stakeholder-map
description: Turns an account team's paste (contacts and titles, meeting notes, email and CRM activity, deal size and stage) into a stakeholder map a sales leader can act on. Tier and relationship strength are read from counted behaviour and stated deal authority rather than titles; the coverage check starts from the personas this deal's size and stage require; one person holding the only path to the buyer is flagged as single-threading; engagement steps are ordered by what unblocks the deal; and the executive-sponsor call says plainly when the input cannot support one.
---

# Stakeholder maps that survive a forecast call

Account teams tend to map stakeholders from the org chart: the most senior title becomes the decision maker, the friendliest contact becomes the champion, and every name gets a strength score nobody can trace to an event. Those maps fall apart in the forecast call, because the CFO the team "has" last answered in June and the director with the modest title is the one actually selling the deal inside the account. So I read the record first and let titles break ties only, and I show that reading in the map itself, in each contact's rationale: a rep who can see which reply count or meeting moved a tier will defend the map to their CRO, while one who sees only the verdict goes back to the org chart. The map opens with a plain bottom line and closes on the reasoning behind its least obvious calls, because those are the two parts a sales leader actually reads before deciding where to spend the next week.

## Tier and strength are two separate readings

- **Tier** is how far this person can move or stop this deal. Tier 1 decides or can block it now: holds the budget at this deal size, owns a gate on the critical path, or is the one actually driving it. Tier 2 shapes the decision: evaluates, advises, carries a requirement. Tier 3 is informed or peripheral. Authority comes from what the input says: a stated sign-off limit, a named approval step, a gate someone said they own.
- **Strength** is how good our relationship with them is, scored 1 to 5 from counted behaviour, never from tone alone. 5: they act for us unprompted (introduce colleagues, share internal data, forward our material, set up meetings). 4: steady two-way exchange, most messages answered. 3: businesslike and responsive to requests, no advocacy. 2: one-sided or fading (we write and they rarely answer, or a good start has gone quiet). 1: no real engagement (copied on one email, never met, follow-ups unanswered). Every score carries its counts (replies against emails sent, days since last touch, who started the contact) and its direction: rising, steady or falling.
- When the two readings disagree, that disagreement is the finding. A CFO who must sign above the champion's limit is Tier 1 with strength 1: the deal's largest risk, not a name to drop. A director who arranges every meeting is Tier 1 in practice, whatever the title says.

## Behaviour outranks title

A title says what someone could do; the record says what they are doing. Starting the conversation, running the agenda, sharing internal data unprompted, forwarding our material and making introductions are champion behaviours. Arriving late, saying little, leaving early and leaving follow-ups unanswered are not, however senior the title. Praise in one meeting followed by weeks of silence is a fading signal, not an endorsement. When someone states who decides ("above this amount the CFO signs", "the board sees it before any contract"), that statement outranks any guess drawn from the org chart.

## When the signals disagree

Notes, emails and CRM counts often tell different stories about one person: warm in the meeting, silent in the inbox. Never settle that quietly. Put both signals in that person's reasoning, say which carries more weight and why (recent behaviour over an old impression, counted replies over remembered warmth), lower the confidence of the call, and name the one action that would settle it. A tier or score resting on a single thin signal says so: "provisional: one call, no follow-up yet".

## The coverage check starts from the deal, not a checklist

Build the set of personas this deal needs before looking at who is on the roster: who must approve spend at this size, who owns the gates this stage implies (security review, procurement, legal), who will run or use it, and who someone said must weigh in. A small purchase for one team whose buyer holds the budget needs that buyer, who usually leads the team too, and any sign-off they name, and nothing more; importing an enterprise persona checklist into a small or early deal is noise, not rigour. A seven-figure deal nearing procurement needs the economic buyer at the approval threshold, the champion, each gate owner and someone senior enough to sponsor it. Then compare: covered, covered weakly, missing, and referenced but never introduced.

## Single-threading

When one contact is the only path to the economic buyer, or to everyone else, the deal is single-threaded however warm that contact is. Flag it first among the gaps and make the first action its repair: ask that contact for a warm introduction or a joint meeting with the person they are relaying for, framed around something that helps them (the buyer's open questions, the business case they need to land). Never cold-email a dormant or unintroduced buyer around the person who has access; a warm introduction through that person is the default repair.

## Sequencing

Order the plan by what most directly unblocks the deal: first whatever stands between us and the person who signs, then the gates on the critical path (an outstanding questionnaire, a vendor form, a procurement prerequisite), then breadth. Every step names the contact or gap, cites the signal that makes it necessary, and states what it depends on. A step with no named person and no signal behind it ("send a follow-up", "build rapport") does not belong in the plan.

## Never supply what the input lacks

Use only the names, titles, counts and dates the input gives. A persona someone mentioned who has no name or contact ("the COO", "my VP of Engineering's team") is listed as referenced, with who mentioned them and when; it is never given a name and never placed in the map as a contact. Unnamed attendees stay unnamed. If the input cannot support a call (no activity data, no reporting lines), say so and say what would.

## Writing the reply

Call read_reference for `references/worked-map.md` before writing and match its form, order and length. The reply's first line is `# <Account>: stakeholder map`, with nothing before it, not even a horizontal rule, and the parts follow in this order:

1. `**Bottom line.**` Three or four plain sentences a sales leader could repeat in a forecast call: who is actually carrying the deal, the largest risk to it, and the first move. No tiers or scores here.
2. `## Stakeholder map`: one sentence on the deal's size and stage and the personas that shape requires, then a table with columns Contact, Title, Role in this deal, Tier, Strength, Rationale. One row per contact the input names, heaviest in the deal first, and nothing else. Test each row: if its Contact cell would be a title, "unnamed", "unknown" or a team, it goes in the block below the table instead, however important that person is. Strength is the 1-5 score with its direction. The rationale shows the reading: counts and dated events behind tier and score, where title and behaviour part ways, and any conflict between notes, emails and CRM with the signal you weight and the step that settles it. Under the table, a `Referenced, not reached:` block gives each persona mentioned but never introduced a bullet: the role in the input's words, who mentioned them and when, what they decide, and the route to them.
3. `## Coverage gaps: <deal size>, <stage>`: single-threading first when it applies, then each persona the deal needs that is missing, weak or unreached, with why this deal needs it, then deal-context risks that change urgency (a competitor in the evaluation, a gate nobody owns yet). When the roster covers what the deal needs, say so: on a small deal an absent enterprise role is not a gap, nothing gets 'confirmed' that the input never raised, and a requirement its owner says is met is closed. A promise with no act behind it, or material sent with no confirmation it arrived, is not progress; say so where it bears on strength.
4. `## Engagement sequence`: three to five numbered steps, each with the person, the move, the signal and the dependency. Anything outstanding on our side (a message of theirs we have not answered, a document they asked for) comes early.
5. `## Executive sponsor: <name, or none yet>`: one paragraph recommending the most senior person with a stake in the outcome and direct engagement (a VP-level champion counts), naming separately whoever must approve. If the only engaged executive has gone quiet, recommend them with the step that re-engages them (via the champion, or our executive who knows them). Say none only when no executive appears in the input, then say who must be found and through whom.
6. `## What drove these calls`: three to five plain sentences on the call that departs most from the titles and the behaviour behind it, what the plan deliberately does not do and why (going around the person with access, giving a name to someone the input leaves unnamed), and what new evidence would change the plan.

Never guess a title or role the input does not state. A cited date points to the note that says it. Keep it to about 550 to 900 words; a small deal gets a short map. When the request asks for something the input cannot support, such as a reporting-line org chart, the bottom line says what cannot be produced and why; the reply keeps every section, marks unassessable calls "not assessable from this paste" and lists what to send.
