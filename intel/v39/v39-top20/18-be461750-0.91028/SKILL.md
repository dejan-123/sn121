---
name: deal-influence-mapping
description: Turns an account's contact list, meeting notes and CRM activity into a stakeholder map for one deal. Tiers people by what they did rather than their titles, scores each relationship from recorded counts, derives coverage gaps from the deal's size and stage, flags single-threaded access, and orders engagement moves so the one that unblocks the deal comes first.
---

# Deal influence mapping

A seller pastes what they know about an account: names and titles, meeting notes, email or CRM counts, deal size and stage. They need to know who really decides, how solid each relationship is, who is missing, and what to do next. Titles mislead; the behaviour recorded in the notes is the evidence, and every judgment in the map must point back to a line the seller can find in their own paste.

## How to judge each person

**Tier comes from behaviour and authority, not title.** Read what each person did: who set up meetings, who shared internal data unprompted, who forwarded our material, who made introductions, who stated a budget limit or sign-off rule, who went quiet. Before writing a sentence about someone, check that the note attaches that behaviour to them and not to someone else in the same meeting.
- *Economic buyer*: holds sign-off at this deal's size. A stated ceiling below the deal value moves sign-off to whoever sits above it, even if that person has never replied.
- *Champion*: drives the deal inside: initiates, briefs others, introduces, pushes. A director who runs the process outranks a silent executive.
- *Endorser*: a senior person who said yes once and handed the work down. Keep them informed through the champion; do not chase them. Someone who never engaged at all is not an endorser.
- *Evaluator*: judges a technical, security or compliance requirement; a blocker while that requirement is open, finished once they close it in writing.
- *Gatekeeper*: owns a process step (procurement, vendor risk, contract). Neutral; needs paperwork, not persuasion.
- *Unknown*: too little evidence; say so rather than guess.

Tier and strength are separate calls: the person who must sign is the economic buyer even if they have never answered, and their strength is then 0 or 1. When title and behaviour disagree, behaviour wins and the reasoning says so. A chief officer who arrives late, says little and ignores two follow-ups is not a supporter.

**Strength is 0 to 5, read from the record and then adjusted for direction.** 5: they initiate and share internal information. 4: they answer most messages and follow up unprompted. 3: they respond when asked but do not drive. 2: brief or occasional replies while we do most of the sending. 1: copied or present once, then silent. 0: never in contact. Score where the relationship is now and name the fall if it has cooled. Lopsided traffic (six sent, one answered) is weak however senior or friendly the one reply was. A ratio is written only when the paste gives both numbers; for a contact known only from meeting notes, describe what they did instead of counting it. Recency is quoted as the paste states it, or as the date of the last note; never work out a span of days or weeks yourself.

**Conflicting signals are written out, never settled silently.** Words that promise action with no action after them, a deal header that disagrees with a contact's written statement, an executive who praised the deal and then went quiet: give both sides, say which way you lean and why, and name the step that would settle it.

## How to find the gaps

A gap is a role this deal needs that nobody on the roster fills. Only four things in the paste create one: a stated sign-off ceiling below the deal value (the person above it is needed); a person or team a contact said must weigh in; a gate the notes name (security questionnaire, vendor risk review, purchase order, final briefing) whose owner we cannot reach; and, for a deal the paste presents as large and late, a signer at that size when no contact holds that authority. Roles that firms of this kind usually have are not gaps unless one of those four points to them. So a team purchase inside its buyer's own authority, with no procurement or legal mentioned, has no gaps, and saying so is the right answer. Keep unnamed people unnamed.

**Single-threading is a structural risk, separate from gaps.** Count the known contacts who can reach the economic buyer or the approver. When that is exactly one person and that person is not the signer, the deal is single-threaded: if they stall, leave or lose the argument, nothing else connects us. Say it in those words, and put the repair first. When the signer is the person we already talk to, the deal is not single-threaded, however few contacts there are; a small purchase run by the buyer who holds the budget needs no such flag, and adding one sends the seller hunting for approvers who do not exist.

## How to sequence the moves

Find what is stopping the deal now: a missing signer, an open requirement, an unconfirmed hand-off, or something we owe them. Then read the latest entry in every thread and ask who spoke last. A line such as "no reply from us yet", an outstanding questionnaire, or material whose delivery was never confirmed means the next step is ours; those moves go first or alongside the first, because they block everything and cost little. A competitor named in the paste raises the cost of delay; say which move it makes urgent. The move that removes the main blocker comes next or first, and every later move says which earlier move it depends on. A dormant or never-introduced buyer is reached through a warm introduction from the strongest relationship, never by another cold email. "Send a follow-up" is not a move; each move names who, what, the signal behind it, and its dependency.

## Executive sponsor

The sponsor is an executive (vice-president level or above) on their side who can carry the deal to signature; a director who runs the process is the champion, not the sponsor. The usual candidate is a senior person who has shown support, even if quiet since, re-engaged through the champion. If none qualifies, say so and name the route to one. On a small deal the buyer is the sponsor.

## The reply

Before writing, call read_reference on `references/mapping-notes.md`. Then reply with one markdown document, about 550 to 800 words for a full account and under 400 for a small one. It reads like a senior seller's account review, not a form:

1. The title `# Stakeholder map`, then one sentence with account, deal value and stage, then one line that fixes three facts before any reasoning:
   `Signer: <the person a line in the paste gives sign-off at this size, quoting that line; if no line does, "not stated", then the likeliest candidate and why>. Access: <direct, if we talk to the signer ourselves; through <one name> only; or through several people>. Clock: <a stated deadline or named competitor, or none stated>.`
   The rest of the map follows from that line: "through one name only" makes the deal single-threaded and its repair is move 1; "direct" means no single-thread flag anywhere; a clock is cited in the move it makes urgent.
2. `## How this deal is wired`: the reasoning, in three to five connected paragraphs of no more than four sentences each. Start with who can sign at this size and why, then who drives the deal, then who checks or could block it, then who is missing and whether all access runs through one person. Each person's evidence (what they did, the counts as the paste gives them) comes before the call you make about them, and any conflict is stated where it arises. Close the section with the latest entry of each thread that ends with us (an unanswered email, an outstanding form); say nothing is waiting only after checking every thread.
3. `## Stakeholder table`: Name | Title | Tier | Strength | Deciding signal (a short phrase). Rows only for people the paste names or mentions; an unnamed role keeps its role in brackets.
4. `## Gaps`: a few sentences, each gap with the line in the paste that creates it. A small deal may have none; say so in one sentence.
5. `## Next moves`: a numbered list in plain sentences. Each move says who does what, which note justifies it, and what it waits on, woven into the sentence rather than labelled. When the deal is single-threaded, move 1 says so.
6. `## Executive sponsor: <name and title of a VP-level or more senior person, or "none yet">`: two or three sentences of evidence, or of how to get one; no restating. End the document with two or three sentences on why the first move comes first and what news would change the order.

Every line of the deal context (a competitor, a deadline, an outstanding item, a header the notes contradict) is used somewhere. Copy names, titles, dates and counts exactly. Quote recency the way the paste states it; do not turn dates into durations such as "three weeks of silence". Never invent people, dates, quotes, reporting lines or numbers; where the paste is silent, say so.

## When the request is not a stakeholder map

If the seller asks for something the paste cannot support, most often a reporting-line org chart when no reporting lines are given, or a map when the notes and activity are only mentioned and not pasted, do not draw it. Reply briefly: first line exactly `# Stakeholder map: request on hold`; say what was asked and what the paste contains; explain that reporting lines are absent and drawing them would put guesses in front of leadership; list the known people with titles and "not yet assessable" for tier and strength; and name the material that would let you build the map (meeting notes, CRM activity export, any known reporting lines). A thin paste that does contain notes or counts still gets a full map with honest Unknown calls.
