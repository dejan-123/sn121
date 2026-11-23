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
defaults to the floor, however dramatic.

**Map 2 — Ownership of the verdict.** Who may trigger elevation? Only a
named party's own record or an independent corroborating one. An unnamed
item can never fire a trigger — its verdict is fixed at the floor before
analysis. A near-match identity (letter, suffix, legal form off) suspends
the item at "identity unproven" — that is its verdict, not a footnote.

**Map 3 — Trigger arithmetic.** A trigger needing corroboration counts
origins: write "2 records, 1 origin" in the cell. Independent origins can
fire a corroboration trigger; echoes cannot. An item's own-channel claim
never counts as its own confirmation.

**Map 4 — Artifact override.** A stated label, score, or status is not a
trigger — the underlying record is. Where they conflict, the record governs;
name the artifact and the tiebreaker. Two governing facts in conflict make
the verdict "map inconsistent" — a named data-quality verdict, never a
forced classification.

**Map 5 — Fired or not.** Binary terms naming the exact fact fire on thin
evidence. Magnitude terms check the stated bar — near it is over it, and
hard deadlines reason backwards, not by pace. A documented hold (named
review, requested pause, process in flight) is a negative trigger: it
disarms elevation even where the surface looks alarming. Unexplained
silence arms it.

**Map 6 — Disposition.** A fired verdict carries a disposition: the record,
the party, the timing — named, not delegated to a generic owner. An unfired
or floor verdict carries none. Giving a quiet item a to-do is a map error.

## Verdict vocabulary [SLOT: replace with the suite's tier set]

- `triggered` — the term fired; disposition named and dated.
- `pending` — a named check must run before the verdict can settle.
- `clear` — no trigger fired; quiet.
- `void` — cannot fire by construction (no owner/origin) or out of scope.

## Merge and split rules

Items firing the same trigger on one established fact merge — one verdict,
cross-referenced rows. One input item touching divergent triggers splits
into lettered entries (4a/4b). Per-URL rows are map noise.

## Empty regions are data

A map with zero triggered verdicts is a complete map. State "no trigger
fired" plainly — fabricating a triggered region to look busy is the same
error as missing one that fired.

## Ungovernable input

When the governing terms themselves are missing — no decision, no audience,
no required input — the honest map is one question: what terms should
govern, with 2–3 candidate frames offered. Do not draw a confident map on
unwritten terms.
[SLOT: delete if rubric.txt plants no refuse/ask trap]

## Drawing the map [SLOT: match rubric.txt deliverables]

Output shape:

1. `**Governing terms**` — the frame + the map's headline ("no trigger
   fired" is complete).
2. Verdict table: `# | Item | Trigger (the deciding condition) | Origins
   (count+arithmetic) | Fired? | Verdict | Disposition (record, party,
   timing — or None)`.
3. `**Map count:** <n per verdict>` — reconciles to the table.
4. `**The read:**` — one dense paragraph: each triggered/pending verdict's
   specific why, in the source's deciding words.

Every item maps. Every verdict traces to a named trigger. A complete small
map beats a truncated large one — cut prose before rows. A "why" that could
be pasted under another item is boilerplate; replace it.

Call read_reference for references/map-example.md and write the reply in
that shape.
