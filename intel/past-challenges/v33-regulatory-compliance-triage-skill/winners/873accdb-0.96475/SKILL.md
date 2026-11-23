---
name: scope-architecture-reading
description: Answers "does this regulation apply to this organisation?" by reading the regulation's scope architecture (who it reaches, how it defines its subjects, what it excludes, what it relieves, what its thresholds switch on, what it defers to other acts) against the facts an organisation profile states. Produces a clause-by-clause verdict table with calibrated confidence, a single label (IN-SCOPE, OUT-OF-SCOPE, CONDITIONAL or NEEDS-LEGAL-REVIEW), a short rationale citing clauses and figures, and a routing line. For any jurisdiction, sector or kind of instrument.
---

# Reading a regulation's scope architecture

Scope is engineered, not intuited. Every regulation builds its coverage from a small set of clause types, and each type has a characteristic way of including, excluding or narrowing. An analyst who knows those mechanics can answer applicability from the clauses and the stated facts alone, and can say exactly which clause decided it.

## How scope is built

**Only operative text creates scope.** Coverage comes from numbered clauses on application, definitions, thresholds and exemptions. Documents that talk about a regulation (an enforcement notice, a circular, guidance, a press release, a summary) do not create or reproduce that coverage, and the fact that such a document was sent to a sector says nothing about where the regulation's own boundary runs. When the operative clauses are absent, applicability is undecidable on the papers, and the useful answer names the clauses counsel must produce.

**Territory and reach are separate gates.** A home test asks where the entity is established. A reach clause can still bring in an entity that fails it, but only through the reach clause's own condition, construed with the regulation's definitions of the words inside it. Meeting the condition means coverage despite a foreign seat; missing it, or missing a defined term within it, means the reach clause does nothing.

**A definition is a conjunction.** Where a defined term has several limbs, all must hold. One limb defeated by a stated fact defeats the definition, and everything that hangs from it (classes, sector lists, exemptions) falls away unexamined. The failed definition is then the deciding clause. A later gate the profile answers with a stated fact is still tested as an independent ground; one that would need interpretation is recorded as not reached.

**Removal, relief and narrowing are different acts.** An exclusion or sector carve-out whose conditions all hold removes the entity from the regulation. An exemption relieves an entity that is covered, and its own nullifier can take the relief back: a group headcount or turnover cap, a share or ownership ceiling, an aggregation rule. Whether the entity qualifies and whether the nullifier bites are two findings, not one. A partial or transitional carve-out lifts only the provisions it names. In the table, a relief or exclusion row reads Passes when the relief applies to the organisation, which is what removes it or its duties; Passes there never means the organisation stays covered, and the verdict says what it removes.

**Thresholds act on something specific.** Some thresholds gate the regulation itself; others only switch on a Part, Schedule or Section. A threshold of the second kind decides which obligations apply and can never take the entity out. Aggregation follows the clause's own instructions: add the members it names, deduct what it excludes, and compute any share on the base the clause specifies.

**Subordinate tests depend on their principal.** Indicators, examples and lists that illustrate a primary test count only after the primary test is met. If a stated fact defeats the primary test, the indicators are never reached.

**Deferred content is weighed by whether it is in force.** A schedule adopted by a named order, or a definition incorporated by reference, is part of the regulation and as certain as its text. A delegated or future act that is not yet published leaves an open point; when a stated fact (an existing listing or classification) already answers the question today, that open point is still shown as its own row, at Medium, explaining that it concerns future criteria and does not change today's answer.

**Only a material doubt moves the answer.** A stated fact settles its clause. Construing a clause against stated facts is the analyst's job: when the wording needs interpretation but the profile states the facts it turns on, decide it (Passes or Fails at Medium) rather than calling it ambiguous or sending it to counsel. A missing registration, a pending application or an unperformed duty is a compliance gap inside scope, not doubt about scope.

## Writing it down

**Operative text first.** If the document reproduces no numbered application, definition or threshold clauses, stop: one row (artefact type, Ambiguous, Low), the label NEEDS-LEGAL-REVIEW, and a closing line asking counsel for the operative clauses of the framework it refers to. Its own requests, deadlines, warnings and exceptions are not scoping text; build no rows from them and never answer IN-SCOPE from them.

**Ranking.** Operative text present; territory; reach; definitions; class and sector; instrument-level exclusions; exemptions and nullifiers; thresholds; partial or transitional carve-outs. The highest-ranked dispositive finding settles the label.

**Rows.** One per scoping clause, in the regulation's own numbering, none merged or skipped: application, reach, definitions, classes, exclusions, exemptions, nullifiers, thresholds, carve-outs, adopted or deferred cross-references, review powers. Indicator clauses and deferred acts get rows of their own. Present operative text gets no row of its own.

**Verdict wording.** Passes, Fails, Ambiguous or Not evaluated, with a brief bracketed reason where it helps:
- instrument-level exclusion or sector carve-out whose conditions all hold: `Passes (exclusion applies: removes [Org] from [Regulation])`, dispositive, each of its conditions shown with its result in the Value cell (`condition one → met; condition two → met`); exemptions and thresholds ranked after it are then not tested, even with their figures at hand, and read `Not evaluated ([exclusion] decides)`; exclusion with a condition unmet: `Fails (exclusion does not apply)`;
- entity-level exemption met: `Passes (satisfied on the entity metric; group test follows)`, then the nullifier's own row with the sum, e.g. `Fails (group cap crossed; entity-level exemption void; Secs. 9–11 apply)`;
- a reach predicate or definition that turns on a defined term: that term gets its own row, tested on the stated facts (Passes or Fails), and it is the deciding row; an exclusion pointing the same way gets its own row as confirmation, e.g. `Passes (exclusion applies; confirms the failure above)`, not as a separate gate;
- provision threshold: not met, `Fails (41 < 60: switches off Secs. 12–13; all other provisions unaffected)`; met, `Passes (75 > 60: switches on Secs. 12–13)`; partial carve-out: `Passes (Sec. 9 exempt until [date]; every other provision applies)`;
- indicator behind a failed primary test, and each exemption, threshold or carve-out ranked below a dispositive finding: `Not evaluated ([deciding clause] decides)`;
- deferred act already answered by a stated fact: `Passes (stated classification governs today; criteria pending)` at Medium;
- compliance gap: `Passes (open duty, not a scope question)`;
- a rule written for a kind of entity the organisation is not (foreign entities for a domestic one, public hospitals for a private firm): `Not evaluated (applies only to foreign entities)` with `—`; a relief whose condition is an ownership or status fact the profile states is tested: `Fails (exemption unavailable: privately held)`;
- Ambiguous only for missing operative text or a missing fact; a clause that needs construing against stated facts is decided at Medium, never Ambiguous;
- a definition limb or condition the profile answers is always Passes or Fails; Not evaluated is only for clauses ranked below a dispositive finding and indicators behind a failed primary test.

**Confidence.** High for stated facts and adopted schedules; Medium where a clause must be construed or an open point cannot change the answer; Low for inferred or missing values; `—` for Not evaluated. Cite an adopting order's reference in the Value cell.

**Label.** OUT-OF-SCOPE: a regulation-level gate fails or an exclusion holds. IN-SCOPE: every gate holds and no exemption survives its nullifier; thresholds and partial carve-outs only shape the routing. CONDITIONAL: only for an omitted fact that would flip the result, named. NEEDS-LEGAL-REVIEW: operative text missing, or the deciding clause rests on unavailable text.

**Figures.** Quote every figure as given and show sums (`4,300 + 1,250 = 5,550 > 5,400`). When the profile states a figure on a particular basis (gross, net, group, entity), the Value cell names that basis and whether the clause tests on it. When any clause, even one numbered later, removes some volume or some members from a threshold's calculation, apply that removal first: the threshold row tests the adjusted figure and shows it (`880 − 45 = 835; more than 800 → met`), and the removing clause's own row says it was applied there. State each comparison with the clause's own comparator and its result, `fewer than 60 → 41: met` or `more than 9,000 → 6,850: not met`; never paraphrase a comparator as "below the threshold". Never supply a value, threshold or attribute the input does not give.

Call read_reference for `references/reply-shape.md` and write the reply in that shape. Scope and verdict only: no obligation lists, remediation or policy drafting. The reply opens with `## ` immediately, with no sentence about the method before it.
