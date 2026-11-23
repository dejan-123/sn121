---
name: decision-log
description: >
  [SLOT: 1-3 sentences fully specifying input→output — "Logs the decision on
  every item of a <INPUT> draft against the record, then writes <DELIVERABLE>
  from the log."]
---

# The decision log — every item gets a logged call before the deliverable exists

The deliverable is the easy part; the work is the decision on each draft item. I log each decision as it is made — the item, the call, the signal behind it — and the log goes in the reply ahead of the deliverable. A reader who can check the log does not have to trust the output; the calls are already in the open. A decision is only ever logged on what the inputs state; silence is logged as silence. [SLOT: wrong-input-type family] gets one logged decision — redirect.

## 1. The decision log

The reply opens with `## Decisions`. First line: what was supplied and that it is [SLOT: expected input kind]. Then one log line per draft item, in draft order:

```
D1. "<item in the draft's words>" — <kept | reclass → X | absorb → Y |
park → venue>: <the signal — who, which day, which figure; or "no signal:
<what would settle it>">.
```

`Off the record:` logs what the draft never carried — requester-owed rows, third-party asks, a personal matter. `Figures:` works each derived figure from both numbers. The deliverable is written from the log — every kept or reclass decision becomes a deliverable item, count them; nothing logged is left off.

## 2. The logging rules

[SLOT: closed class set for this task, rubric vocabulary — retie at fill.]

- Credit logs only on a named person or measured result crediting specific work this period; vague praise logs to the verifiable signal or logs nothing.
- Waiting on another party logs unblock/escalate owned by the requester — the move, not a progress quiz; a worker-proposed fix still logs unblock — the move being to back it.
- Dated occurrences of one behaviour: 2+ log the pattern class; exactly 1 logs the light class (what happened, one question, no verdict); 0 — "seems", "lately" — log not-an-item with the record's read and the instance that would reopen it. A pattern already diagnosed still logs the pattern class — aimed one step upstream at the unfixed behaviour. A single dated instance the record already shows owned folds into the nearest existing item — not a standalone light entry.
- The requester's open/overdue rows log under `Off the record:` — each with status and "bring it or name the day"; a holds-up link logs only where the record ties the rows — never an item, never parked.
- When the record cannot settle between two calls, log the ambiguity and the one question that settles it; an owned Review outranks a committed wrong call.

## 3. Venue decisions

[SLOT: suite's sensitive topics.] Each logs `park → <venue>` with the one booking step; nothing drafted anywhere; a personal matter in the input's own few words. Nothing qualifies → one line.

## 4. Figures

`Figures:` shows every two-number figure with operands beside the result: (new − old) / old signed whole percent; scores and rates in points; counts in words.

## 5. The deliverable

[SLOT: rubric's declared contract — title, sections, per-item bounds, length,
ordering.]

- Title: [SLOT]
- [SLOT: context block]
- Logged items under [SLOT: item format], ≤3 sentences each
- [SLOT: routing section]
- Last: `Log notes` — three or four sentences: the decisions that differ from the draft's labels, the signal behind each, what was dropped.

## 6. Thin or wrong inputs

Thin input: `## Decisions` logs the missing record first; items keep the class their words give; each logs the record that would settle it plus one askable line; pull-list names missing records and holders. A required input absent entirely is not thin — stop and ask for it; no deliverable, not even a flagged partial. [SLOT: wrong-input-type] logs one decision — a note ≤~180 words titled `# ` + [SLOT]: it redirects, what the input is, why a deliverable misleads, what it supports, what a real input needs, sensitive matter in its own few words sent private.

Call read_reference on `references/logged-week.md` [SLOT] once before writing — complete invented replies: full input, thin input, the redirect. Form only. First characters: `## Decisions`, or `# ` for the note.
