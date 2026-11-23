# Reply shape

Write for a compliance reviewer who will check each row against the document. Use the regulation's short name and the organisation's name exactly as the input gives them.

## Worked example (invented rules, unrelated field)

The papers: a fictional 24-paragraph Inland Hire Craft Rules of the Merrow Lakes Authority, and a fictional boat-hire firm registered abroad that lets self-drive cruisers on the lakes. The whole reply:

## Inland Hire Craft Rules and Brightwake Boats Ltd: clause verdicts

| Clause | Profile Attribute | Value | Verdict | Confidence |
|---|---|---|---|---|
| Para. 3(1) — operators established in the district | Seat | "registered in Osterland; no district office" | Fails (home test not met; Para. 3(2) reach decides) | High |
| Para. 3(2) — reach: operators established elsewhere that let craft to holidaymakers on district waters | Customers; waters | "private individuals booking leisure cruises"; "46 cruisers moored at three district marinas" | Passes (reach predicate met: covered despite the foreign seat) | High |
| Para. 4(1) — 'holidaymaker' means a natural person hiring for leisure | Customers | "private individuals booking leisure cruises" | Passes (defined term met; carries Para. 3(2)) | High |
| Para. 4(2) — 'hire craft' means a vessel let for use on district waters | Service | "self-drive cabin cruisers let by the week" | Passes | High |
| Para. 4(2) proviso — excludes vessels let with a skipper | Crewing | "self-drive only; no skipper supplied" | Fails (exclusion does not apply; the fleet stays hire craft) | High |
| Para. 5(1) — Classes A–C listed in Schedule 1 | Fleet class | "all craft registered Class B"; Schedule 1 adopted by Lakes Order 17 of 3 March 2025 | Passes (Class B listed; adopted schedule in force) | High |
| Para. 5(2) — classes may be re-banded by a future order | Fleet class | "Class B on the current register"; no such order made | Passes (current listing governs today; a future re-banding cannot change today's answer) | Medium |
| Para. 7 — public rescue services exempt from Paras. 15–16 | Ownership | "privately owned" | Not evaluated (reserved for public rescue services) | — |
| Para. 9(1) — fewer than 25 staff exempt from Paras. 15–16 | Staff | "18 staff"; fewer than 25 → met | Passes (satisfied on the entity metric; group test follows) | High |
| Para. 9(2) — exemption void where the group employs 150 or more | Group staff | "parent Wakefleet group: 192 further staff"; 18 + 192 = 210; 150 or more → met | Fails (group cap crossed; entity-level exemption void; Paras. 15–16 apply) | High |
| Para. 10 — Paras. 19–20 apply only to fleets of more than 60 craft | Fleet size | "46 cruisers"; more than 60 → not met | Fails (46 < 60: switches off Paras. 19–20; all other provisions unaffected) | High |
| Para. 12 — operators licensed from 1 January 2026 exempt from Para. 17 until 30 September 2027 | Licence date | "licensed 9 February 2026" | Passes (Para. 17 exempt until 30 September 2027; every other provision applies) | High |
| Para. 14 — an unfiled lifejacket log is penalised, not exempting | Filing status | "first log not yet filed" | Passes (open duty: a compliance gap, not a scope question) | High |

## Brightwake Boats Ltd: applicability

**IN-SCOPE**

Brightwake fails the Para. 3(1) home test, being "registered in Osterland", but Para. 3(2) reaches it: it lets craft on district waters to "private individuals booking leisure cruises", holidaymakers under Para. 4(1), and the Para. 4(2) skipper proviso misses a self-drive fleet. Class B sits in Schedule 1, adopted by Lakes Order 17. The Para. 9(1) exemption looks available at "18 staff", fewer than 25, but Para. 9(2) voids it: 18 + 192 = 210 group staff, 150 or more. Para. 10 (46 < 60) and Para. 12 (Para. 17 deferred to 30 September 2027) only narrow the duties, and the unfiled log is a gap inside scope. This is a scoping screen, not legal advice.

Routing — next step: pull the duties in the Inland Hire Craft Rules Paras. 1–16, 18 and 21–24; Para. 17 stays aside until 30 September 2027 (transitional deferral), Paras. 19–20 stay aside (fleet below the trigger).

Had Brightwake let skippered boats only to corporate event clients, with a Class D fleet, the reach would fail through its defined term. Every gate the profile answers still gets its own Passes or Fails row, the class gate included as a separate ground, and a definition that carries its own exclusion is split into its positive test and the exclusion; only exemptions, thresholds and carve-outs below the deciding row are Not evaluated:

| Clause | Profile Attribute | Value | Verdict | Confidence |
|---|---|---|---|---|
| Para. 3(1) — operators established in the district | Seat | "registered in Osterland" | Fails (home test not met; Para. 3(2) reach decides) | High |
| Para. 3(2) — reach: operators letting craft to holidaymakers | Customers | "corporate event clients only" | Fails (reach not met) | High |
| Para. 4(1) — 'holidaymaker' means a natural person hiring for leisure | Customers | "corporate event clients only" | Fails (no natural persons served; this row decides) | High |
| Para. 4(2) — 'hire craft' means a vessel let for use on district waters | Service | "skippered launches let for events" | Passes | High |
| Para. 4(2) proviso — excludes vessels let with a skipper | Crewing | "skipper aboard every hire" | Passes (exclusion applies: the launches are not hire craft; confirms the failure above) | High |
| Para. 5(1) — Classes A–C listed in Schedule 1 | Fleet class | "all craft Class D" | Fails (class not listed; a separate ground) | High |
| Para. 9(1) — fewer than 25 staff exempt from Paras. 15–16 | Staff | "18 staff" | Not evaluated (Para. 4(1) decides) | — |

Its closing line: `Nothing to route for Brightwake Boats Ltd: the Inland Hire Craft Rules stop at Para. 3(2), read with Para. 4(1), because it serves "corporate event clients only".`

Had the papers been only Lakes Authority Bulletin 4/26, which reminds operators of the lifejacket-log duty in a Hire Craft Safety Act it does not reproduce, the whole reply would be:

## Bulletin 4/26 and Brightwake Boats Ltd: clause verdicts

| Clause | Profile Attribute | Value | Verdict | Confidence |
|---|---|---|---|---|
| Artefact type — notice, not operative text | Document | "Bulletin 4/26": a reminder, a filing date and a penalty warning; no application, definition, threshold or exemption clause | Ambiguous (no operative text; any criterion would be read from the narrative) | Low |

## Brightwake Boats Ltd: applicability

**NEEDS-LEGAL-REVIEW**

Bulletin 4/26 is a reminder from the Lakes Authority, not the Hire Craft Safety Act: it contains a filing date, a penalty warning and a summary of the lifejacket-log duty, and lacks the Act's application clause, operator definition, size threshold and exemptions. Fitting Brightwake's profile to the bulletin's audience would not be a scope finding, so no criterion is tested; this is a scoping screen, not legal advice.

Question for counsel on Brightwake Boats Ltd: can you provide the lifejacket-log duty of the Hire Craft Safety Act, together with the application, operator-definition, threshold and exemption clauses that scope it?

## 1. Verdict table

Heading: `## [Regulation] and [Organisation]: clause verdicts`

| Clause | Profile Attribute | Value | Verdict | Confidence |
|---|---|---|---|---|

- Clause: its number as printed, a dash, and a few words naming the test (`Para. 9(2) — group headcount cap`).
- Profile Attribute: the profile entry tested. Value: that entry's own words or figures in quotation marks, then the clause's own comparator and the result (`"18 staff"; fewer than 25 → met`).
- Verdict: the bracket names the link that decides the row: what it switches on or off, removes, or leaves in force; for a Medium row, why today's answer stands. Confidence follows evidence quality, so a table with one confidence level throughout deserves a second look.
- Every gate the profile answers keeps its own Passes or Fails row, even after an earlier gate has failed; Not evaluated is for clauses ranked below the deciding one and for rules reserved to a class the organisation is not in.
- A row that only interprets another (a future order, an open definition, a provisional reading) sits straight after the row it qualifies, at Medium.
- A gap the profile states (a pending registration, an unfiled report, an audit not yet done) gets a row of its own under the clause that imposes the duty: `Passes (open duty: a compliance gap, not a scope question)`.
- Notice or guidance with no operative clauses: exactly one row (artefact type, Ambiguous, Low).

## 2. The label

Heading: `## [Organisation]: applicability`, then the label alone in bold on its own line: `**IN-SCOPE**`, `**OUT-OF-SCOPE**`, `**CONDITIONAL**` or `**NEEDS-LEGAL-REVIEW**`.

## 3. Rationale

Always present: one paragraph of 120 words at most; count the words before finishing and cut to fit. Name the clause numbers that decided it, quote the deciding profile values and write the arithmetic inline. Then name the reading that looks right at first sight and the words of the text that rule it out. For OUT-OF-SCOPE, lead with the deciding gate (for a foreign entity, the reach clause and its defined term, not the home test), add any later independent ground after it, and say which clauses were never reached and why. In the one-row case: what the document is, what it contains (requests, dates, warnings) and what it lacks (application clause, entity definition, threshold, exemptions), and that the profile is not fitted to the document's narrative. Write as an analyst talking a reviewer through the logic in the regulation's own vocabulary, and end on one short clause saying this is a scoping screen, not legal advice.

## 4. Closing line

Plain text under the rationale, no heading, first word fixed by the label. One sentence, no re-explaining.
- IN-SCOPE or CONDITIONAL: `Routing — next step: pull the duties in [Regulation] [provisions in force]; [provisions] stay aside ([reason, six words at most]).` List the provisions in force as ranges that never run across a provision set aside (`Paras. 1–16, 18 and 21–24`, not `Paras. 1–24`); a failed relief removes nothing. For CONDITIONAL, add the omitted fact that decides it.
- NEEDS-LEGAL-REVIEW: `Question for counsel on [Organisation]: can you provide the [duty the document cites, by its name] of [instrument, full name], together with the application, entity-definition, threshold and exemption clauses that scope it?`
- OUT-OF-SCOPE: `Nothing to route for [Organisation]: [Regulation] stops at [deciding clause] because [the profile fact that decided it].`

Nothing else: no summary heading, obligation list or next steps. One row for a notice and five to nine rows for a full text are both normal.

Wording check before you write: an exclusion that applies always reads `Passes (exclusion applies; …)`, never `Fails (… exclusion applies)`; when a definition carries its own exclusion, split it into two rows, the definition's positive test and then the exclusion on its own row. A sector carve-out whose conditions all hold reads `Passes (carve-out applies: removes [Organisation] from [Regulation])`.

Completeness check before you write: every numbered clause or sub-clause the regulation prints has its own row, in its own numbering, with an interpreting row straight after the row it qualifies. That includes indicator lists under a test, deferred or delegated acts, and every exemption, threshold or carve-out ranked below the deciding one, which reads `Not evaluated ([deciding clause] decides)` and is not tested; a territory, reach, definition or class gate the profile answers is still tested. The deciding clause is the highest-ranked one that fails or excludes, so a failed definition outranks any sector or class clause after it. The one exception is a notice or guidance with no operative clauses: there the single artefact-type row is the whole table, and the label is NEEDS-LEGAL-REVIEW.

Your reply now begins with `## ` followed by the instrument and the organisation, with no sentence before it.
