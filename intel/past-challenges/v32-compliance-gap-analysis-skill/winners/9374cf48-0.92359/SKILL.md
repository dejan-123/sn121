---
name: pattern-led-readiness-triage
description: Classify every control in a self-assessed inventory by the evidence pattern its own words reveal, dated against the window it must meet; the pattern fixes status and audit tier, then a dated, owner-assigned plan follows for SOC 2, ISO 27001, HIPAA or GDPR.
---

# Pattern-led readiness triage

An inventory's "Implemented" is a hope until an artifact proves it. For each control, read the inventory's own words, date each artifact against the date it must meet, and name the one evidence pattern those facts show. **Copy status and starting tier from that pattern's row — never from the inventory's status column.** Confidence, vendor fame or a tool's presence never moves a status; a dated artifact does.

## Frame

Settle: framework; engagement type (ISO Stage 2, SOC 2 Type II, insurer yearly, internal review with regulator exposure); tested window; fieldwork; business-model facts that remove risks; every date. Controlling date = earliest date work must exist for the assessor: future period → day before it opens; already-open window → the stated fieldwork/assessment date inside that window (never invent a fieldwork date before the window opens); live legal exposure → today.

## Evidence patterns

Ignore the status column. Pick the one pattern that decides the row; write its name; copy Status and Tier from its row. If the tier feels wrong, pick the closer pattern. Re-check every row before the memo: fix by choosing the closer pattern, never by editing status while keeping a mismatched pattern.

| Pattern | What the inventory's words show | Status | Tier |
|---|---|---|---|
| proven current | dated artifact of control working in/valid for the window (current enforced-setting export counts before a period opens) | Implemented | P3 (P2 if period evidence must still accrue) |
| outside the model | business model removes the object of the control | N/A + scoping note | P3 |
| design without record | setting/doc exists, but required policy, test or operating record missing/incomplete (thin exercise notes) | Partial | P2 |
| second-hand proof | form, letter, email or undated description instead of a system record | Partial | P2 |
| predates the window | scan/screenshot/export dated before an already-open window | Partial | P2 |
| overdue review | policy/plan/analysis whose review date (yearly unless stated) passes before fieldwork | Partial | P2; P1 for core analysis of risks |
| part of the population | covers some people, systems or vendors, not all | Partial | P2 |
| vendor unassured | contract or public reading only; no assurance report reviewed | Partial | P1 if vendor touches regulated data/txn path; else P2 |
| paper missing for some | required contract/transfer instrument/processing record for some parties only | Partial | P1 |
| practice nobody follows | written practice people doing the work have not read or been trained on | Partial | P1 |
| approvals nobody can sample | approvals in chat or by word of mouth; nothing retrievable | Partial | P1 |
| tool left unwatched | tool, access or privileged roles configured/run; no procedure, periodic review or follow-up (set up once, never re-examined) | Partial | P1 |
| it already failed | inventory records the control running late or being bypassed | Partial | P1 |
| word only | someone says it happens; no artifact | Missing | P1 |
| template on a shelf | downloaded or drafted; never tailored, approved, signed or tested | Missing | P1 |
| records gone | old records stranded in a retired system; nothing since | Missing | P1 |
| still waiting | rests on a third-party artifact requested and not received | Missing | P1 |
| works against itself | mechanism runs in wrong order or lets through what it should stop | Missing | P1 |
| never performed | assessment, plan, record or agreement the framework/law requires is absent | Missing | P1 |

**Pick rules:** set-once access/roles with no re-check → `tool left unwatched` (P1), not design-without-record. Setting runs, written policy absent → design-without-record. Thin exercise notes → design-without-record, not overdue-review. Review *date* passed → overdue-review. Template never adopted → `template on a shelf` = **Missing** (even if inventory says Partial). Form/letter instead of system export → `second-hand proof` (not part-of-population). Never invent findings; prefer one row per inventory line.

Date each artifact beside the date it must meet; no ages. Never inflate working controls to P1; never downgrade genuine Implemented. Live exposure → contain-now this week.

## Gap category, vendor, close-out

- **doc** / **process** / **vendor** / **tooling** (tooling only when the tool is absent; deployed tool without review = doc+process).
- **Vendor?** Yes only when a third party must supply or sign the closing artifact.
- **Evidence to close** = form + scope + dates. Name only artifacts/vendors/systems the inventory names. Owners are roles.

## Citations

Cite from the framework calls file you read. ISO 27001:2022 → A.5–A.8; SOC 2 → TSC 2017 IDs (CC6.2); HIPAA → 45 CFR §164 + Required/Addressable; GDPR → article (+ UK regime where it applies).

## Read, then write

In one turn, read_reference `references/answer-layout.md` and the framework file: HIPAA → `references/hipaa.md`; ISO/IEC 27001:2022 → `references/iso27001.md`; SOC 2 → `references/soc2.md`; GDPR/UK GDPR → `references/gdpr.md`. Apply matching calls, then write the deliverable in the layout. First characters of the reply: `# ` and the title.
