---
name: tally-sheet
description: >
  [SLOT: 1-3 sentences fully specifying input→output from the brief and
  rubric.txt — "Posts every item of a <INPUT> to a tally of draft-claim versus
  record, settles each posting, then writes <DELIVERABLE> from the settled
  side."]
---

# The tally — every draft claim is posted against the record, then settled

A draft carries the requester's version of each item; the record carries what happened. I post both, item by item — what the draft claims beside what the record shows — and settle each posting to a disposition before anything is written. The tally is part of the reply: a reader who can see the postings does not have to take the calls on faith. Postings only ever carry what the inputs state; an absence is posted as an absence. [SLOT: wrong-input-type family] is not posted at all — the reply redirects per the note rule.

## 1. The tally

The reply opens with `## The tally`. First line: what was supplied and that it is [SLOT: expected input kind]. Then one posting per draft item, in draft order:

```
Draft claims:  "<item in the draft's words>"
Record shows:  <who/what/which day/which figure — or "nothing filed">
Posted as:     <keep | reclassify → X | absorb → Y | park → venue> — <reason>
```

Two sentences inside a posting at most; no tags, no machinery words. After the postings, `Unclaimed:` lists what the draft never filed — requester-owed rows, third-party requests, a personal matter. `Arithmetic:` works each derived figure from both operands. The deliverable is built from the settled postings only — every settled keep/reclassify posting becomes a deliverable item, count them; nothing settled is left off.

## 2. Posting rules

[SLOT: the closed class set for THIS task, matching the rubric's vocabulary.
The settlement rules below are the doctrine — retie to the suite's labels.]

- A credit posting needs a named person or a measured result crediting specific work this period; vague praise posts only against a verifiable signal — otherwise it does not post, and the tally says so.
- An item waiting on another party settles as a blocker/escalation whose point is the requester's move (escalate, broker, decide) — never a progress quiz; a fix the worker already proposed still settles as blocker, the move being to back it.
- Count dated occurrences of the same behaviour: 2+ settles the pattern class; exactly 1 settles the light class (what happened, one question, no verdict); 0 ("seems", "lately") settles nothing — struck, with what the record shows instead and what instance would reopen it. A pattern the person already diagnosed still settles the pattern class — the posting moves one step upstream to the unfixed behaviour. A single dated instance the record already shows owned folds into the nearest existing posting — not a standalone light item.
- The requester's own open/overdue rows post to `Unclaimed:` — each with its status and "bring it or name the day"; a holds-up link is claimed only where the record ties the rows — never an agenda line and never parked.
- When the record cannot settle between two dispositions, post the ambiguity and the one question that settles it; an owned Review outranks a committed wrong call.

## 3. Venue settlements

[SLOT: the suite's sensitive topics.] Each posts as `park → <venue>` with the one booking step. Nothing drafted on it anywhere; a personal matter is named in the input's own few words. Nothing qualifying → one line saying so.

## 4. Arithmetic

`Arithmetic:` shows every figure the inputs give two numbers for, both operands beside the result: (new − old) / old as signed whole percent; scores and rates in points, never percent. Counts summed in words, not ratios.

## 5. The deliverable

[SLOT: rubric's declared contract — title pattern, section order, per-item
bounds, total length, item ordering.]

- Title: [SLOT]
- [SLOT: opening/context block]
- Items under [SLOT: item line format], at most three sentences each
- [SLOT: routing section]
- Last: `Settlement notes` — three or four plain sentences: the postings that differ from the draft, each with the signal that settled it, and what was struck.

## 6. Thin or wrong inputs

Thin input: the tally says what is missing first; each posting names what would settle it; the deliverable stays complete and short; a pull-list names each missing record and its holder. A required input absent entirely is not thin — stop and ask for it; produce nothing, not even a flagged partial. [SLOT: wrong-input-type] gets no tally at all — reply with a note of at most ~180 words titled `# ` + [SLOT], saying it redirects, what the input is, why a deliverable built on it misleads, what it does support, what a real input needs, and any sensitive matter named in its own few words, sent private.

Call read_reference on `references/settled-week.md` [SLOT: filename] once before writing — complete invented replies: full input, thin input, the redirect. Form only; facts come from the inputs in front of you. First characters of the reply: `## The tally`, or `# ` for the note.
