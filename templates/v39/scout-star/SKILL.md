---
name: dispositions
description: >
  [SLOT: 1-3 sentences fully specifying input→output — "Tests every item on a
  <INPUT> draft against its disposition triggers, shows which trigger each
  item fires, then writes <DELIVERABLE>."]
---

# Dispositions — every item fires exactly one trigger, shown in the open

Draft labels are guesses until a trigger fires. For each item I check which disposition trigger the record actually trips, I show the firing in the reply, and the deliverable is written from the fired dispositions. An item that fires nothing is not kept out of politeness — it is shown void or parked with the reason. No trigger ever fires on material the inputs lack. [SLOT: wrong-input-type family] fires the redirect trigger only.

## 1. Dispositions

The reply opens with `## Dispositions`. First line: what was supplied and that it is [SLOT: expected input kind]. Then per draft item, in draft order:

```
Item N — "<draft's words>": fires <disposition> because <the trigger the
record trips — named person, dated instance, waiting party, measured result>.
```

Items that fire nothing get `void — <what the record shows instead; what instance would make it fire>`. `Unlisted:` covers what the draft never filed — requester-owed rows, third-party requests, a personal matter. `Figures:` works each derived figure from both numbers. Every fired item reaches the deliverable — the fired set is the item list, count them; nothing fired is left off.

## 2. The triggers

[SLOT: closed disposition set for this task, rubric vocabulary. Doctrine —
retie at fill.]

- Credit trigger: fires only on a named person or measured result crediting specific work this period; vague praise voids unless a verifiable signal fires it.
- Blocker trigger: fires when the record shows waiting on another party — the item's point is the requester's move (escalate, broker, decide), not a progress quiz; a worker-proposed fix still fires blocker, the move being to back it.
- Pattern trigger: fires on 2+ dated occurrences of the same behaviour. Exactly 1 fires the light trigger (what happened, one question, no verdict). 0 — "seems", "lately" — fires nothing: void, with the record's read and the instance that would fire it. A pattern already diagnosed still fires the pattern trigger — aimed one step upstream at the unfixed behaviour. A single dated instance the record already shows owned fires nothing standalone — it folds into the nearest existing item.
- Requester-owed trigger: the requester's open/overdue rows fire `Unlisted:` only — each with status and "bring it or name the day"; a holds-up link fires only where the record ties the rows — never an item, never parked.
- Unresolvable trigger: when the record cannot confirm between two dispositions, fire the ambiguity — name it plus the one fact that settles it; an owned Review outranks a committed wrong call.

## 3. The venue triggers

[SLOT: suite's sensitive topics.] Each fires park-to-venue with the one booking step; nothing drafted on it anywhere; a personal matter named in the input's own few words. Nothing fires → one line says the lot is empty.

## 4. Figures

`Figures:` shows every two-number figure with operands beside the result: (new − old) / old signed whole percent; scores and rates in points; counts in words.

## 5. The deliverable

[SLOT: rubric's declared contract — title, sections, per-item bounds, length,
ordering.]

- Title: [SLOT]
- [SLOT: context block]
- Fired items under [SLOT: item format], ≤3 sentences each
- [SLOT: routing section]
- Last: `Trigger notes` — three or four sentences: the dispositions that differ from the draft's labels, the trigger each fired, what voided.

## 6. Thin or wrong inputs

Thin input: `## Dispositions` says first what is missing; items keep the disposition their own words imply; each names the trigger that would settle it plus one askable line; pull-list names each missing record and holder. A required input absent entirely is not thin — stop and ask for it; no deliverable, not even a flagged partial. [SLOT: wrong-input-type] fires the redirect trigger only — a note ≤~180 words titled `# ` + [SLOT]: it redirects, what the input is, why a deliverable misleads, what it supports, what a real input needs, sensitive matter in its own few words sent private.

Call read_reference on `references/fired-week.md` [SLOT] once before writing — complete invented replies: full input, thin input, the redirect. Form only. First characters: `## Dispositions`, or `# ` for the note.
