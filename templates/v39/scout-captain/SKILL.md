---
name: marginalia
description: >
  [SLOT: 1-3 sentences fully specifying input→output — "Annotates a <INPUT>
  draft in the margin against the record, then writes <DELIVERABLE> from the
  annotations."]
---

# Marginalia — the draft is annotated against the record, then rewritten

I work the way an editor works the draft: the requester's lines are taken as written, each one gets a margin note of what the record actually shows, and the deliverable is the draft rewritten from those notes. The annotations stay in the reply — a requester who sees the note beside their own line accepts the call; one who sees only a changed agenda argues it. No note invents a signal; where the record is silent the note says so. [SLOT: wrong-input-type family] gets one annotation only — the redirect note.

## 1. Marginalia

The reply opens with `## Marginalia`. First line: what was supplied and that it is [SLOT: expected input kind]. Then each draft item is reproduced in its words and annotated:

```
> "<item exactly as the draft has it>"
  → <kept | reclassified to X | absorbed into Y | parked to venue>: <what the
    record shows — who, which day, which figure; or "nothing in the record —
    what would settle it">.
```

`Not on the draft:` annotates what the requester left off — their own owed rows, third-party asks, a personal matter. `Figures:` works each derived figure from both numbers. The deliverable is the annotated draft in final form — every kept or reclassified annotation becomes a deliverable item, count them; nothing annotated is left off.

## 2. The annotation rules

[SLOT: closed class set for this task, rubric vocabulary — retie at fill.]

- Credit annotates only where a named person or measured result credits specific work this period; vague praise annotates to the verifiable signal or to nothing — and the note says so.
- Waiting on another party annotates to unblock/escalate owned by the requester, never to a progress quiz; a fix the worker already proposed still annotates as unblock — the move being to back it.
- Dated occurrences of one behaviour: 2+ annotate the pattern class; exactly 1 annotates the light class (what happened, one question, no verdict); 0 — "seems", "lately" — annotate "not an item" with the record's read and the instance that would change it. A pattern already diagnosed still annotates the pattern class — aimed one step upstream at the unfixed behaviour. A single dated instance the record already shows owned folds into the nearest existing item — not a standalone light annotation.
- The requester's own open/overdue rows annotate under `Not on the draft:` — each with status and "bring it or name the day"; a holds-up link is claimed only where the record ties the rows — never an item, never parked.
- When the record cannot settle between two annotations, annotate the ambiguity and the one question that settles it; an owned Review outranks a committed wrong call.

## 3. The venue annotations

[SLOT: suite's sensitive topics.] Each annotates `→ parked: <venue>` with the one booking step; nothing drafted on it anywhere; a personal matter in the input's own few words. Nothing qualifies → one line.

## 4. Figures

`Figures:` shows every two-number figure with operands beside the result: (new − old) / old signed whole percent; scores and rates in points; counts in words.

## 5. The deliverable

[SLOT: rubric's declared contract — title, sections, per-item bounds, length,
ordering.]

- Title: [SLOT]
- [SLOT: context block]
- Annotated items under [SLOT: item format], ≤3 sentences each
- [SLOT: routing section]
- Last: `Editor's note` — three or four sentences: the annotations that changed the draft, the signal behind each, what was struck.

## 6. Thin or wrong inputs

Thin input: `## Marginalia` notes the missing record first; items keep the class their words give; each note names what would settle it plus one askable question; pull-list names missing records and holders. A required input absent entirely is not thin — stop and ask for it; no deliverable, not even a flagged partial. [SLOT: wrong-input-type] takes one annotation — a note ≤~180 words titled `# ` + [SLOT]: it redirects, what the input is, why a deliverable misleads, what it supports, what a real input needs, sensitive matter in its own few words sent private.

Call read_reference on `references/marked-week.md` [SLOT] once before writing — complete invented replies: full input, thin input, the redirect. Form only. First characters: `## Marginalia`, or `# ` for the note.
