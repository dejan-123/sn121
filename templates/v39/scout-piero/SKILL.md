---
name: working-note
description: >
  [SLOT: 1-3 sentences fully specifying input→output from the brief and
  rubric.txt. e.g. "Reads a <INPUT> the way a <ROLE> reads it — the record
  first, the requester's draft second — shows that reading item by item, then
  writes <DELIVERABLE>."]
---

# The working note — read the record, then the draft, and let the difference show

A requester's draft is written from memory, so each label on it is a claim, not a finding. The record decides what each item is: [SLOT: name the input's evidence artifacts — logs, figures, messages, prior docs]. The reader has to see that decision being made, because an item that comes back relabelled with no visible reason gets argued, not used. So I read the record before the draft and show the reading first, item by item; the deliverable is written from it. A label the evidence supports is kept; one it contradicts is changed; no signal, name, date, or figure is ever supplied that the inputs lack. One input gets neither part: [SLOT: the wrong-input-type family this suite contains — e.g. a record of work already done, a different artifact's input] is not this task's input, and the reply redirects per the note rule below.

## 1. Reading the inputs

The reply opens with `## Reading the inputs`. Its first sentence says what was supplied and that it is [SLOT: the expected input kind]. Then one numbered entry per draft item, in the draft's order, at most three plain sentences, no tags: the draft's words in quotes, what the record shows about it (who, where, which day, which figure), and the disposition it earns — kept, reclassified to X, absorbed into Y, or parked — with the reason. An overturned label is said outright ("that is not coaching: one dated instance"). `Outside the draft:` then covers what the requester did not list — their own owed rows, a third party's request, a personal matter. `Figures:` works each derived figure from both its numbers. The deliverable is written from this reading: the kept set is the deliverable's item list — every item that keeps or gains a disposition lands in it, count them; an item read in is never dropped.

## 2. The dispositions

[SLOT: the closed class set for THIS task, 4–6 labels matching the rubric's
vocabulary. The decision rules below generalize — retie them to the suite's
labels at fill time.]

- **Credit/recognition-type items** open only when a named person or a measured result credits specific work this period; quote who said what. Vague praise is replaced by the signal or dropped. No such signal → no such item, and the reading says so.
- **Blocked/external items** — waiting on another party: the item's point is the requester's own move (escalate, broker, decide), never a progress quiz; when the worker already proposed the fix, the requester's move is to back it. Load mislabelled as feedback is still a blocker.
- **Pattern vs single instance — count dated occurrences of the same behaviour.** Two or more = the pattern class; one = the light class (what happened, one question, no verdict); zero ("seems", "lately") = not an item in any class — left off with what the record shows instead and what observed instance would bring it back. A pattern the person already diagnosed keeps the pattern class — the item moves one step upstream to the behaviour still unfixed (naming the change earlier), never dropped or demoted. A single dated instance the record already shows owned — the fix committed in their own words — folds into the nearest existing item; it is not a standalone light item.
- **Requester-owed items** — every open/overdue row whose owner is the requester — surface in their own place; never an agenda item, never parked. Each carries its status and "bring it or name the day"; claim it holds something up only where the record ties the two rows.
- **Unresolvable** — when the record cannot settle between two dispositions, name the ambiguity and the one question that settles it; an owned Review outranks a committed wrong call.

## 3. The venue reading

[SLOT: the suite's sensitive topics — pay, promotion decision, health/family,
formal performance, named-colleague friction, third-party-requested reviews.]
Each is listed in the routing place with its venue and the one booking step.
No talking points, detail, or advice on it anywhere in the output; a personal
matter is named in the input's own few words, nothing more. When nothing
qualifies, say so in one line.

## 4. Figures

In `Figures:`, work every figure the inputs give two numbers for, both numbers beside the result: change vs baseline as (new − old) / old signed whole percent; scores and rates differ in points, never percent. Counts are summed in words, not ratios.

## 5. The deliverable

[SLOT: rubric's declared contract — title pattern, section order, per-item
word bounds, total length, ordering rules. Write it as the requester would
recognize it, not as a report about itself.]

- Title: [SLOT]
- [SLOT: context/opening block — what moved, what is stuck and on whom, what lacks evidence]
- Items in the reading's order under [SLOT: item line format]; at most three sentences each
- [SLOT: routing/parking section]
- Last: a short `Why this reads this way` — the calls that differ from the draft, each with the signal that decided it, and what was left off.

## 6. Thin or unusual inputs

When signals are missing, the reading says so first and each entry says what would settle it; the deliverable is still complete, shorter. Keep items in the class their own words give; under each, one sentence on what the draft cannot settle and the record that would, then one question the requester can ask aloud. A short pull-list names each missing record and who holds it. A required input absent entirely is not thin — stop and ask for it; produce nothing, not even a flagged partial.

[SLOT: the suite's wrong-input-type] misleads as this task's input: [SLOT: why — e.g. its statuses are stale, its praise was already delivered]. Build no deliverable from it. Reply with a note of at most ~180 words: title `# ` + [SLOT: redirect title], first sentence says the reply redirects, what the input is, why a deliverable would mislead; then what it does support [SLOT], what a real input needs, and any sensitive matter named in its own few words and sent to a private channel.

Call read_reference on `references/worked-week.md` [SLOT: filename] once before writing — it holds complete invented replies: a full input, a thin input, the redirect. Form only; every fact comes from the inputs in front of you. Then send the reply. Its first characters are `## Reading the inputs`, or `# ` for the note.
