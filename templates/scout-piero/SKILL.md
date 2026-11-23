---
name: gatecheck-triage
description: >
  [SLOT: 1-3 sentences fully specifying the input (what the user gives) and the
  output (the declared deliverable in rubric.txt). e.g. "Teaches the agent to
  run every item in a retrieved <INPUT TYPE> through an ordered gate sequence —
  attribution, evidence, threshold, action — and emit a verdict table with a
  reconciled count and a plain-language read. Given <INPUT>, produces
  <DELIVERABLE>."]
---

# Gatecheck — every item passes the same gates, in the same order

This skill triages <INPUT TYPE> for <DECISION CONTEXT>. It does not score
overall risk and it does not editorialize. It runs each item through a fixed
gate sequence, assigns each item a verdict from a closed vocabulary, and
writes a self-reconciling report a reviewer can audit line by line.

## The gate sequence

Run gates in order. An item stops at the first gate that settles it.

**Gate 1 — Anchor.** Before touching any item, write the working anchor:
<the target/decision, the stage, any stated thresholds, the question this
analysis must answer>. If the input does not say it, say that — a stated
absence is itself a finding, not a gap to fill with a guess.

**Gate 2 — Attribution.** Who stands behind the item? Named party → it can
carry weight. Unnamed/anonymous/aggregated source → lowest tier,
unconditionally, no matter how alarming the content. A near-match name
(one letter, suffix, or legal form off) is NOT the named party — it gets an
identity-check step, never the elevation path.

**Gate 3 — Origins.** Count origins, not mentions. Two records quoting one
source are one origin. Write the arithmetic in the cell: "3 links, 1 origin —
both outlets cite the same release." Corroboration requires independent
origins.

**Gate 4 — Evidence.** Evidence beats labels. A stated status, score, or
dashboard value that contradicts the underlying record is a stale artifact:
name it, override it, and cite the tiebreaker datum. Two stated facts that
contradict each other are a data-hygiene finding — flag it, never force a
clean verdict onto thin evidence.

**Gate 5 — Threshold.** Adverse items elevate only when a stated threshold,
condition, or deadline actually covers them. No covering condition → hold
low regardless of how bad it sounds. A binary condition that names exactly
this fact elevates even a thin, single-origin claim. Reason backwards from
hard deadlines: a near miss is a miss. Check holds first — a documented
wait (named review, requested pause, in-progress process) suppresses
escalation; unexplained silence does not.

**Gate 6 — Action.** A verdict that requires a step is different from a
verdict that requires none. Watch-only items get no action. Anything
needing a request, confirmation, document, or identity check belongs to
the action tier. Actions name the record, the party, and the timing —
"assign counsel" is not an action.

## The vocabulary [SLOT: replace with the suite's tier set]

- `elevated` — the covering condition fired; named action with a deadline.
- `act` — needs a step before the decision; every act names its step.
- `watch` — confirmed and quiet; no action, re-check at the next stage.
- `out` — no origin, no named party, or no bearing on the decision.

## Fold and split

Fold when items corroborate one established fact — they share a verdict and
cross-reference ("see combined assessment with row N"). Split when one input
row carries divergent findings — one row per status class (1a/1b/1c), never
one row per source URL.

## Restraint

Zero-elevation is a designed answer shape. When nothing clears a gate, the
top tier is empty and the narrative says so plainly — never manufacture an
escalation to fill a quota, and never hedge a clean table into mush.

## Missing input

If the deliverable cannot be produced honestly because required information
is absent, the correct output is the ask itself: name what is missing,
offer 2–3 plausible interpretations the data could serve, and stop. A
polished deliverable built on a guess is worse than a good question.
[SLOT: delete this section if rubric.txt does not plant a refuse/ask trap]

## Writing it down [SLOT: match rubric.txt deliverables exactly]

Output shape:

1. `**Working anchor**` — <stage/decision/thresholds> + the gate-5 verdict
   stated up front ("no covering condition met" is a complete answer).
2. Verdict table, one row per item (or per split class): `# | Item |
   Origin (count+arithmetic) | Gate reached | Verdict | Action (record,
   party, timing — or None)`.
3. `**Count:** <n per verdict>` — reconciles with the table exactly.
4. `**What this means:**` — one dense paragraph: the top verdict first,
   then each act-tier item's specific reason. Never restate the table;
   explain the calls.

Budget: a complete shorter reply always beats a truncated longer one.
Every item gets a row. Every row's rationale is non-interchangeable —
if a sentence could sit under any other item, it is boilerplate; replace it
with the deciding words from the source.

Call read_reference for references/worked-gates.md and write the reply in
that shape.
