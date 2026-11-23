# GDPR and UK GDPR: calls

## Citations
- Principles: Art. 5(1)(a)-(f) principles, 5(1)(e) storage limit, 5(2) accountability.
- Bases: Art. 6(1)(a)-(f) legal bases, Art. 9 special categories.
- Consent: Art. 7 consent conditions, Art. 8 children.
- Transparency: Art. 12-14 notices; Art. 12(3) one-month deadline +2.
- Rights: Art. 15-22 subject rights.
- Responsibility: Art. 24 controller duty, Art. 25 by design/default.
- Instruments: Art. 26 joint controllers, Art. 28 processor terms (28(3) mandatory).
- Records: Art. 30 RoPA (30(1) fields).
- Security: Art. 32 security of processing.
- Breach: Art. 33(1) 72h to authority, Art. 33(5) log all, Art. 34 high-risk to individuals.
- DPIA: Art. 35(1), triggers 35(3)(a)/(b)/(c); Art. 36 prior consult.
- DPO: Art. 37-39.
- Lead: Art. 56 lead authority, main establishment.
- Transfers: Art. 44-49 (45 adequacy, 46 SCCs, 49 derogations); Chapter V.
- Employment: Art. 88 (national laws, e.g. BDSG §26).
- Trackers: ePrivacy Dir. Art. 5(3); UK PECR reg. 6.
- EDPB: WP248 rev.01 DPIA; Guidelines 05/2020 consent; Recs 01/2020 export measures; Guidelines 07/2020 controller/processor; Guidelines 9/2022 breach.

## Calls
| Citation | Situation | Pattern | Note |
|---|---|---|---|
| Art. 6(1)(f) | Notice names a basis but no documented 3-part LIA per activity | never performed | Missing, not Partial; do the purpose/necessity/balancing test |
| ePrivacy 5(3); PECR 6 | Tool lets non-essential trackers fire before choice recorded | works against itself | P1 live (Planet49 C-673/17); block non-essential at once |
| ePrivacy 5(3) | A tracker tool merely installed | template on a shelf | not compliance by itself |
| Art. 26 | Embedded platform pixel treated only as processor terms | second-hand proof | joint controller (Fashion ID C-40/17); need Art. 26 + valid consent |
| Art. 26/28 | Third-party instrument chosen before fixing role | paper missing for some | write the role call in the row and the vendor table (processor, independent controller, or Art. 26 joint controller); CRAs/partners that set their own purposes are rarely plain processors |
| Art. 35(1), 35(3)(a)/(b) | Credit-decision, systematic-monitoring or new tracking tool already running with no DPIA | never performed | Missing, P1 live; not part-of-population |
| Art. 22 | Automated credit outcomes without Art. 22 safeguards | design without record | Partial; also check DPIA trigger |
| Art. 28 | Processor in use with no contract | vendor unassured | P1; execute each DPA then record in RoPA |
| Art. 45/46; Ch. V | US processor with neither DPF cert nor SCCs+TIA | outside the model | double gap: Art. 28 and Chapter V |
| Art. 35(1) | High-risk processing already running, no DPIA | it already failed | P1 live; run DPIA now, pause/restrict if residual high (Art. 36) |
| Art. 35(3) | DPIA row without a precise named trigger | design without record | name the 35(3) limb or WP248 criteria met |
| Art. 30 | RoPA missing recently added processing | paper missing for some | Partial; add each activity, all 30(1) fields, version-date |
| Art. 5(2) | DSARs met on time but no retained records | design without record | Partial, P2; log receipt, ID check, response date, what disclosed |
| Art. 33(5) | Breaches handled ad hoc | never performed | P1; log every breach, re-run 72h test on past one, then test the routine |
| Art. 5(1)(e) | Informal keeping-period notes; legacy systems post-migration | practice nobody follows | doc + process; tooling only if deletion needs a new mechanism |
| Art. 13; 88 | Employee notice older than processing or silent on national rules | predates the window | Partial doc gap |
| Art. 56 | EU competent authority assumed, not checked | approvals nobody can sample | one-stop-shop lead at main establishment; in DE often Land authority; flag for counsel |

## Memo points
- Say plainly: undocumented compliance counts as noncompliance.
- Decide each third party's role (processor / joint controller / independent controller) before choosing the instrument.
- Keep one RoPA; tag each row UK, EU or both, and name the instrument each side needs.
- UK exports use the UK IDTA or UK Addendum to EU SCCs; EU SCCs alone do not cover UK exports.
- A breach can need the ICO and a competent EU authority notified separately, two 72-hour clocks.
- Write the evidence log before any summary counts; take every count (Implemented, Partial, Missing, N/A, P1) from the register rows so summary, register and memo agree exactly.
- Behavioural tracking pixels and credit decisions each usually meet two or more WP248 criteria.
- Say plainly: no external deadline, but live violations carry exposure today; the pass prepares instructions for external counsel.
