---
name: verdict-map
description: >
  [SLOT: 1-3 sentences fully specifying input→output from rubric.txt, e.g.
  "Teaches the agent to treat every <INPUT> as a set of candidate verdicts
  waiting for their trigger — map each item to the condition that would
  decide it, check whether that trigger fired, and render the map."]
---

# Verdict Map — find the trigger, check if it fired, record the verdict

This skill maps <INPUT> as precedent. Every item has exactly one verdict
that the stated terms would award it — the work is finding the deciding
trigger for each item and checking honestly whether it fired. The output is
the map itself: item → trigger → fired? → verdict → disposition, so a
reviewer can audit the reasoning instead of trusting a tone.

## The mapping pass

**Map 1 — The governing terms.** Write the frame first: <decision, stage,
every stated threshold/condition/deadline, what this analysis decides>.
Verdicts exist only under these terms — an item with no governing term
defaults to the floor, however dramatic, and a quiet item sitting on a
governing term is the whole map.

**Map 2 — Ownership of the verdict.** Who may trigger elevation? Only a
named party's own record or an independent corroborating one. An unnamed
item can never fire a trigger — its verdict is fixed at the floor before
analysis. A near-match identity suspends the item at "identity unproven" —
that is its verdict, not a footnote.

**Map 3 — Trigger state.** Before scoring, check whether the trigger is
already spent. A trigger the record marks fired, cleared, or closed STAYS
cleared — unless ANOTHER artifact states a present fact it cannot coexist
with (a process still running, a notice already served, a cure nobody can
document). The item's own text never re-arms a cleared trigger: its words
describe what was weighed when it cleared. Suspicion does not re-arm; only
a contradicting artifact does. When a later artifact and the recorded state
genuinely disagree, mark the contested trigger in writing ("mapped cleared;
the record shows X; carried armed") — never re-map silently.

*What this pass forecloses:* if every top-tier trigger is spent, no verdict
downstream can legitimately be withheld — and re-arming one anyway is its
own mapping error.

**Map 4 — Fire check.** For live triggers: did it fire? Judge by the stated
terms, not by how the item sounds. Two artifacts disagreeing is recorded
as disagreement with the tiebreaker named — never averaged. A trigger the
record cannot resolve is mapped open with the named record that would
decide it.

## The quantities map

Map the numbers the same way — each figure to the term that governs it:

- **The base figure.** The headline number maps to "does it survive the
  terms?" Rebuild the working figure from the raw entries — strip what
  does not carry <SLOT: domain adjustments — one-off items,
  non-transferable amounts, pass-through volume, contested adjustments>.
  Show the bridge: reported figure, each deduction with its source, the
  working base.
- **The comparison set.** Every candidate maps to in or out with a stated
  rule (structural mismatch, outlier profile, non-comparable basis). Name
  every verdict.
- **The ask.** Maps to the working base, not the filer's — restate it and
  give the gap in the input's units.
- **Every product.** Written expanded — `4.5 × 18.0 = 72 + 9 = 81` —
  endpoints divided back by the base to confirm the map closes.

## Which triggers can void the map

Only triggers the input itself filed at the top tier <SLOT: this suite's
top severity label> can void the call, and only while armed/open. An open
trigger on a lower tier never voids anything: it maps to a named
disposition — the record, the owner, the timing — and the map still
resolves. A void = filed top-tier AND armed/open; nothing else qualifies.

## The verdict

- **Resolved**: no top-tier trigger is armed. When the map allows it, the
  verdict issues — withholding it is as wrong as clearing over an armed
  trigger.
- **Resolved-with-conditions**: no top-tier trigger is armed, but lower-tier
  opens need named cures — the record, the owner, the deadline. Keep this
  middle verdict; do not collapse it into "pending."
- **Pending**: a top-tier trigger is armed and a named record could decide
  it — name the record and the deadline.
- **Void**: a record already decided against, so nothing could clear it.

A condition is a named clearing trigger: which record fires it, who
produces it, by when — and the remapped verdict that follows if it never
fires. "Monitor" is not a clearing trigger.

## The reply

- Line 1: the verdict, the one deciding trigger, and the key figure.
- <SLOT: this suite's required sections, exact headings, word bounds>
- Every numbered input item gets a row: trigger, fired?, verdict,
  disposition — before any prose.
- Every quantity written as reproducible arithmetic, endpoints divided back.
- Where the map has no governing fact for a quantity, deadline, or owner,
  say so plainly and make obtaining it a condition. An unmapped gap is a
  finding, never an interpolated value.
- Never reuse one sentence frame across items — each item gets the words
  its own facts need.
- <SLOT: one invented worked example lives in references/ — ~10–14k chars,
  showing this contract end-to-end, including the
  alternate verdict branches on the same case on an invented map. Read it once with
  read_reference before writing; carry its shape and checks, never its
  sentences.>
