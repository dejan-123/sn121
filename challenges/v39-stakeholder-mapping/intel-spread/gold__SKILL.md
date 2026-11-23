---
name: stakeholder-control-map
description: Build one decision-ready stakeholder map from a pasted account record (contacts, titles, meeting notes, CRM or email counts, deal size and stage). Tier each person as Authority, Champion, Gate owner, Influencer or Observer from recorded behaviour, never from title alone; grade each relationship A, B, C, D or 0 from reply counts, recency, initiative and trajectory, with asymmetry stated. Derive coverage gaps from the approval path the deal's size and notes imply, with no persona checklist on small or early deals. Sequence engagement so debts to the buyer and the most deal-unblocking move come first, route every senior contact through whoever holds access, flag single-threading, and recommend an executive sponsor only on evidence. Invent nothing; redirect requests the record cannot support.
---

# Map contract

Always call read_reference on `references/water-utility-maps.md` before writing anything. Its maps show the length, tone and restraint the page should have, including how little a small deal inside the buyer's own authority needs.

Return only the map: the evidence reading, the table, the gaps, the plan, the sponsor call and a short note on departures from titles. No preamble, no narration of method, no mention of a skill. Every tier, grade, gap and action points to a fact in the paste; a blank stays blank.

## The defaults the record does not carry

Apply these grades unless the user supplies a different scale. Ratio = replies / messages we sent.

| Grade | Reciprocity | Recency of last two-way exchange | Initiative and depth |
|---|---|---|---|
| A | ratio 0.75 or higher | within 14 days | buyer starts threads, shares internal material, introduces others |
| B | ratio 0.5 or higher | within 30 days | buyer answers promptly and follows through |
| C | two-way but narrow | 31-60 days, or cooling | one topic, short appearances, transactional |
| D | ratio under 0.5, or one acknowledgment | over 60 days, or a single old reply | we push, they rarely answer |
| 0 | no reply recorded | never | cc only, never met |

Grade down one step when the trajectory is falling. Never grade up for seniority. A meeting our side arranged is weaker evidence than one the buyer requested. Quote the counts in the cell; where no counts exist, grade from the notes and say so.

Tiers: **Authority** (the record places this deal's approval in their hands), **Champion** (repeatedly acts for the deal: initiates, shares, forwards, briefs upward, makes introductions), **Gate owner** (holds a requirement that can stop the purchase; open or cleared), **Influencer** (substantive input, no advocacy or authority shown), **Observer** (on record, nothing consequential).

## A title marks a possible seat, behaviour marks the real one

A title tells you where someone could sit; behaviour tells you where they do. Four patterns override a title read.

**The person doing the work outranks the person with the title.** Someone below director level who sets agendas, shares internal data unprompted and arranges introductions is the Champion; a chief officer who acknowledged one email is not.

**Authority follows the money, not the org chart.** Where someone states a spending limit and the deal exceeds it, approval sits above that limit. A named person tied to that seat by the record is Authority even if dormant; mark the grade honestly and write "likely" when the link is inferred.

**A requirement is a gate whatever the rank.** Security, procurement, legal and finance conditions can halt a purchase. A requirement confirmed met in writing makes the gate cleared and removes it from the plan.

**Unnamed people are gaps, not rows.** "the operations chief", "senior leadership", "several attendees": no name, no row, no invented title, meeting, count or date.

## Gaps come from the deal's shape

Ask three questions. Who approves above the champion's stated authority? Which gates do the notes name, and who owns each? Who has been referenced but never introduced? A small or early deal inside the buyer's own authority, with no procurement or legal raised, has no enterprise checklist to fill: say coverage fits and name the trigger that would change it, such as price rising above the stated limit.

## Sequence by what unblocks the deal

1. Debts first: a buyer message still awaiting our answer, material we promised and have not sent, a delivery nobody confirmed.
2. The one action most likely to free the stalled approval, usually equipping the champion to carry the case upward and requesting a joint meeting.
3. Open gates with their owners, then breadth.

Each action names a contact or gap, cites the signal behind it and states its dependency. Dormant or unintroduced senior people are reached only through whoever holds access; cold outreach is never a step. If every route into the account runs through a single person, name that person and mark the deal single-threaded.

## Step one: does the record carry the request?

When a request needs facts the paste lacks, such as reporting lines, a hierarchy diagram, sentiment ratings or budgets nobody stated, or when the evidence is only referred to and not pasted, answer with this and stop:

```
## Evidence on file: <account name>
## What the record cannot support
  One sentence on the request and the missing fact; titles do not show reporting lines.
## What it does support
  The named contacts exactly as given, and the stated deal facts.
## What to paste
  Meeting notes, sent/replied counts per contact, confirmed reporting lines.
```

No tiers, grades or diagram. When the main map is supportable and only an add-on is not, produce the full map and say in one sentence which part cannot be drawn.

## Situations the standard read does not settle

**A champion who promises and does not act.** "Let me see what I can do" followed by nothing is a soft signal; keep the tier, lower the trajectory.

**A silent senior who once engaged.** One strong meeting weeks ago, then silence, is a fading grade, not a won relationship. Re-entry runs through the introducer or the colleague on our side who met them.

**A leaning toward a rival.** Questions only about a competitor's terms are evidence of preference; map it and plan around it through the champion.

**A contact changing role.** Tier holds until the move; ask them now for a hand-over introduction.

**Two references that might be one person.** Do not merge them unless the record says so; ask.

## Engagement versus effort

Engagement means the buyer took part. A "last touch" field frequently records our own send, a sequence step or a voicemail; that is effort, and it does not refresh a grade. Date the relationship from the buyer's last reply, attendance or action, and say which date you used when it differs from the field. Content counts as well as frequency: a same-day answer with internal figures attached is worth more than several one-line acknowledgments. Forwarding, internal briefings and introductions rank highest because the buyer spends personal credibility on them. Read free-text notes before the activity table; a remark about who approves what, or who is unhappy, outranks a column.

## The page

About 450-750 words. The answer's first characters are exactly `## Evidence on file: <account name>`.

```
## Evidence on file: <account name>
  4-6 bullets: deal size and stage, stated authority limits, named gates,
  referenced-but-unintroduced people, what we owe, how thick the evidence is.
## Stakeholder table
  Contact | Title (as given) | Tier and the behaviour behind it | Grade and the counts behind it | Role in this deal
## Gaps the deal shape exposes
  Every gap tied to the fact that reveals it, or "coverage fits" with its trigger.
## Plan of engagement
  Numbered, most deal-unblocking first; single-thread flag where it applies.
## Sponsor recommendation
  Authority + engagement on record + reachable path, or a candid "nobody qualifies yet"
  naming the likeliest seat and the evidence that would make it count. A champion under
  the approval ceiling is not the sponsor; a deal inside the champion's own authority needs none.
## Why some calls overrule the title
  One short paragraph on each tier or grade that departs from a title or CRM field.
```

Illustrated maps for a municipal water utility, including a redirect and a small deal, are in `references/water-utility-maps.md`; carry their reasoning, never their particulars.

## Release audit

Every row is a named person from the paste; every grade quotes its counts; every gap cites a signal; the first action clears anything we owe; no step contacts a dormant senior directly; a deal reached through one person carries the single-thread warning. Remove anything not found in the input.
