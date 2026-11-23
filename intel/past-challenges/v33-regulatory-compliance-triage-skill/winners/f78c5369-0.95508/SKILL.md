---
name: applicability-ledger
description: Decides whether a regulatory instrument applies to a named organisation by understanding how coverage is built - operative text, reach, the defined subject, removal clauses, then Part-level switches - and keeping a ledger in which each scoping clause is paired with the stated profile fact that answers it. A clause-role table (references/clause-roles.csv) gives the signal words, the question to ask and the verdict wording for each role. Output is a verdict table, one label (IN-SCOPE, OUT-OF-SCOPE, CONDITIONAL or NEEDS-LEGAL-REVIEW), a rationale under 120 words led by the deciding clause, and a routing line when the organisation is covered.
---

# Applicability ledger

An applicability call that cannot be audited is only an opinion. The ledger makes it checkable: each line names a clause, quotes the profile fact that answers it, gives the result in the clause's own terms, and says what that result does to coverage. The label is the ledger's balance, traceable to one deciding line.

## How coverage is built
Regulations build coverage in layers, and each layer acts only on what the one before it let through.

**Operative text first.** Only numbered clauses on application, definitions, thresholds and exemptions create scope. An enforcement notice, circular, bulletin, guidance note, FAQ or press release that points to duties "under" another instrument cannot decide scope; its addressees, deadline and excusing sentences describe enforcement, not coverage. Without the operative text the answer is NEEDS-LEGAL-REVIEW, and the useful output is a precise request for the provisions counsel must supply.

**Reach.** A home route (established or operating in the territory) and a route for entities based elsewhere are alternatives: one is enough, but a foreign entity needs the foreign route met on its own terms, and a merely reachable website is not targeting.

**The defined subject.** A defined word is replaced by its definition before testing. "Consumer" becomes "natural person acting outside a trade" and is tested against who the customers actually are. When a reach route turns on such a term and the term fails on the stated facts, that failure decides; an exclusion in the definition that points the same way confirms it rather than deciding it.

**Absence wording.** Some definitions require that something is missing: "without meaningful human review", "not for remuneration". When people make the final decision on what a system outputs, whether a score, a ranking or a shortlist, the output is reviewed, so the definition is not met. Any fee is remuneration.

**Removal clauses.** "Is not a covered person for the purposes of this Act" takes an organisation out entirely, but only when all of its conditions hold. Until a later clause like this has been tested, an earlier coverage line is a provisional pass.

**Switches.** Thresholds, exemptions, the limits that void exemptions, and transitional reliefs change which Parts or sections apply. They never change whether the instrument applies, so a company under a Part threshold is still IN-SCOPE.

**Status and timing.** A listing, licence or register class the profile states settles current status even when classification criteria are left to an act not yet made; that pending act still gets its own row, at Medium. Missing registrations, pending applications and overdue audits are compliance facts, not coverage facts. A later commencement date changes when duties start, not whether they apply.

**Figures.** Comparators are literal. A stated share is used as stated, with its base, and each clause is tested on the base it names.

**Groups and bases.** Counts are taken on the basis the clause names. A group threshold adds only the members the clause brings in, and a member that a clause excludes (an administrative subsidiary, an affiliate outside the defined activity) stays out of the sum. An exemption measured on the entity can still be voided by a limit measured on the group, so the two are separate questions with separate answers.

**Why the order matters.** Reading in this order stops the commonest mistakes: treating a Part threshold as a scope test, letting a sector list rescue an organisation that already failed a definition, and lowering the label because of a compliance gap.

## What the reply holds
A title naming the instrument and the organisation, a one-line triage disclaimer, then a verdict table with the columns Clause, Profile Attribute, Value, Verdict and Confidence. Rows follow the instrument's numbering, one for every numbered clause; a clause the decision never reaches appears as Not evaluated, naming the clause that decided. Then the label, a rationale of at most 120 words that opens with the deciding clause and fact, and, for IN-SCOPE or CONDITIONAL, a routing line listing the provisions that apply.

## Working method
Read `references/clause-roles.csv` and `references/reply-form.md` in a single step, then write. The CSV gives each clause role its signal words, the question that settles it and the verdict text for each answer; the reply form gives the layout and three invented cases.

Settle the label with the earliest rule that matches:
1. The inputs contain no operative scope text: **NEEDS-LEGAL-REVIEW**, with a single row `Artefact type - operative scoping clauses present?` marked Ambiguous (no operative text; scope cannot be read from a notice) at Low.
2. **OUT-OF-SCOPE** if, on the stated facts, every reach route fails, a definition or trigger fails, or every condition of a removal clause holds.
3. **NEEDS-LEGAL-REVIEW** if nothing has failed yet the deciding clause hangs on wording that is undefined or self-contradictory and the profile cannot resolve it.
4. **CONDITIONAL** if the deciding clause needs one fact the profile leaves out. Name that fact.
5. **IN-SCOPE** in every other case, however many Parts are switched off.

Rows:
- The ledger has one row per numbered clause in the inputs (unreached duties may share one). Clauses the decision never reaches stay as Not evaluated rows, and a clause that leaves criteria to an act not yet made is a row even where a stated listing settles it: Passes (listing settles current status; pending act concerns future classification) at Medium, given one clause in the rationale.
- Every defined term the decision relies on has its own row, including the term a reach route names (a consumer or buyer definition); an exclusion written inside a definition has a row separate from that definition.
- The deciding clause is the first failure in reading order: reach routes and the terms they depend on come before triggers, so a failed term inside the only open reach route decides and a later failing trigger is a second ground. Every Not evaluated row names the deciding clause.
- A definition about who is served is met when any stated customer group fits it; size or share tests belong to the clause that sets them.
- Passes (provisionally, pending [clause]) is for a coverage row a later clause could still override; threshold, exemption and deduction rows are plain.
- A removal clause with several conditions is one row showing each condition beside its result. An exclusion that agrees with an earlier failure reads Passes (exclusion applies; confirms [clause]).
- After the label is fixed, thresholds, exemptions, limits and duties read Not evaluated ([deciding clause] decides) with no figures. A further reach, trigger, definition or removal clause that a plain stated fact answers is still decided; if it alone would exclude the organisation, the rationale names it as a second ground.
- Ambiguous is only for undefined wording (a sector list silent on whether a supplier to the sector belongs to it), unpublished criteria with no listing stated, or missing text; its bracket says why the label stays. Where the facts are stated, decide the clause at Medium instead.
- The verdict word matches the result: a definition or limb not met is Fails, never Passes.
- A deduction row sits directly above the count it reduces, whatever its number, and changes no other clause's base.
- A share row shows the division from the profile's figures ("130 of 310 = 41.9% of gross") and names the base the clause tests on; where a deduction elsewhere makes the base arguable, it gives the share on both bases, and Ambiguous at Medium if they disagree.
- An absence element's Value restates the condition in the clause's words with its result, never its opposite: "without meaningful human review: not met (the employer's HR team decides on every shortlist)".
- An evaluative condition (primary, mainly, incidental) is shown with the figures that settle it ("8,200 of 8,620 points = 95% commercial"), High when they do.
- A threshold row gives the comparison and its effect together: "640 vehicles; more than 500: met" with Passes (Part IV applies).

Rationale: count the words; 120 is the ceiling. Name every Part or rule the routing line takes away, transitional reliefs and their end dates included, so that the two agree.

Confidence: High where clause and fact are explicit and compared head-on; Medium for one step of interpretation the stated figures do not settle (an evaluative word such as primarily or meaningful, indirect wording, a listing standing in for unpublished criteria); Low where the fact is inferred or absent; a dash for Not evaluated.

The reply's first line is its title, `# [abbreviation] scope verdict: [organisation name]`; no sentence about the task or the method comes before it. A notice reply is no exception: title, disclaimer, the single artefact row, the label and the rationale, with the explanation of why a notice cannot decide scope inside the rationale.
