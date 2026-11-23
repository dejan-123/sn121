---
name: compliance-gap-analysis
description: Turns a controls inventory for HIPAA, ISO 27001:2022, GDPR or SOC 2 Type II into a per-control gap table and remediation memo. Status comes from what the evidence proves inside the audit window, gap type from what is actually absent, and the P1-P3 tier from live exposure and the deadline that binds, each cited to the framework's own section, control, article or criterion.
---

# Compliance gap analysis

A status is a claim about the evidence an assessor could be handed; the inventory's Status column is tested, never copied.

## The deadline that binds

Write it once, `<today> → <binding date> = N days`, and reuse that N. **Type II**: the period's first day, not fieldwork; evidence before it proves design. **Certification Stage 2**: the audit date; a major nonconformity withholds the certificate and nothing defers. **Fixed assessment date**: the assessor's arrival; a running window is context. **Readiness review, no external date**: now, for live violations.

## One test decides status and tier

The first test a control's own words meet gives status and tier together, never adjusted; if a tier looks wrong, the test was misread, so take the nearer test.

| Test | What the line shows | Call |
|---|---|---|
| said, not shown | only a claim; a tool staff describe running is not this | Missing, P1 |
| outside template | an outside template never tailored, signed or tested | Missing, P1 |
| awaited | rests on a report requested, not received | Missing, P1 |
| self-defeating | a mechanism that defeats its own condition | Missing, P1 |
| unassessed basis | a required assessment never done (balancing test, impact assessment) | Missing, P1 |
| retired records | records died with a retired system or cover only retired items | Missing, P1 |
| split party | one newly added party uncovered, all others covered: `(a)` the new party, `(b)` the rest | (a) Missing, P1; (b) Implemented, P3 |
| scoped out | the subject does not exist here | Implemented (N/A), P3 |
| signed for all | a signed agreement with every counterparty | Implemented, P3 |
| export in hand | an enforced setting, a dated system export, nothing named missing | Implemented, P2 |
| setting, no policy | an enforced setting with its export, a named policy or procedure absent | Partial, P2 |
| self-recording | an automation whose own system logs every run | Implemented, P3 |
| recorded failure | failed once on the record | Partial, P1 |
| unsigned party | regulated data reaches parties with no agreement, contract or transfer mechanism | Partial, P1 (live violation) |
| foundational stale | a risk analysis or record of processing out of date | Partial, P1 |
| review never run | a tool or granted access with no review record (access, log, alert, vulnerability) | Partial, P1 |
| approvals in chat | approvals in chat or messages, nothing to sample | Partial, P1 |
| unadopted | a written practice its users never trained on or opened | Partial, P1 |
| supplier file thin | a low-exposure or well-assured supplier, review owed | Partial, P2 |
| partner assurance absent | a supplier in the transaction path, contract only | Partial, P1 |
| past review | an artifact dated before the window, or a document past its review cycle | Partial, P2 |
| weaker form | someone's email or a form instead of a system record; notes instead of a policy | Partial, P2 |
| unexercised | a plan never exercised, or exercise notes without scenario, outcome or actions | Partial, P2 |
| unrecorded operation | the work is done, no record kept | Partial, P2 |
| exception group | a small named group outside a working control: check or risk-accept | Partial, P2 |

**Pick rules.** Two or more uncovered parties on one line are one `unsigned party` row, never a split; a certified supplier merely unassessed is `supplier file thin`. An enforced-setting export dated before a Type II period opens is `export in hand`, not `past review`. A form, letter or email in place of a system export is `weaker form`. Roles or access set once and never re-examined are `review never run` (P1), not `past review`. Thin exercise notes are `unexercised`. Work done with no log is `unrecorded operation` even when the inventory says Implemented. A policy past its cycle is `past review` (P2); a stale risk analysis or record of processing is `foundational stale` (P1). Re-check every row against these before writing the memo.

Missing is always P1 and Implemented never is; P1 is for a missing or broken mechanism, P2 for a working mechanism with a thin wrapper, and the tiers are spread, never all P1. Downgrading a genuine Implemented row is as wrong as upgrading a gap.

Call read_reference for the target framework (`references/hipaa.md`, `references/iso27001.md`, `references/uk-eu-gdpr.md` for GDPR or UK GDPR, `references/soc2.md`) and `references/final-check.md`; cite only from them. `references/walkthrough-questions.md` lists what an assessor asks each control owner, and `references/assessor-sampling.md`, `references/interview-follow-ups.md` and `references/spot-checks.md` how a sample is drawn and followed up; open one only when a row's closing evidence is unclear.

## Reading each line

- **Test name**: the reply names the deciding test exactly as the table spells it; a call has no other vocabulary.
- **Due**: set each date beside what it must meet, never convert it into an age: the window or period start, or its review due date ("approved 2030-06, annual review due 2031-06, none recorded"). Evidence dated before the window proves the past only.
- **Operating**: a record that the control ran (review, test, completion, ticket, approval); for an enforced setting, a dated export or live monitor.
- **Named gap**, **contradiction** (the mechanism fails, always or once on the record), **third party** (a vendor must sign, send or configure).

## Gap type

**doc** (policy, procedure, record or scoping note missing or stale), **process** (the recurring activity is not performed or leaves no record), **tooling** (no tool exists that could do it), **vendor** (a third party must act), joined with " + ". A deployed tool is never a tooling gap. Where a narrow tool is missing beside a working one, name it (a ticket queue), never a new platform. Implemented rows read "—".

## Deadline details

An item needing a test cycle (a contingency plan) cannot close in the days left; the bottom line says so with its ID. An incident already handled outside procedure needs a retrospective assessment, not only a future fix. Where today is given only as a month, count from the 15th and write "about". Nothing the input does not state: no cause, date, count or vendor it lacks. Name concurrent regimes separately, each with its own authority and instrument.

## The reply, in this order

1. `## Working notes`: the dates and the one binding interval on one line, then one plain sentence per control, under 120 characters: the deciding words, the claimed status, the test, the call, such as "KF-07: 'records lost with the retired system', claimed Partial; retired records → Missing, doc + process, P1." A split control takes one line per part and each part counts as a row. Then the counts by status and by tier, summed. Nothing else is decided later.
2. `# <Organisation> — <Framework> gap table & remediation memo`, then `## Internal Triage Document — Not an Assessor's Opinion`.
3. `**Bottom line:**` three or four sentences: the binding date with its one interval and why it binds; each live exposure with its contain-now step this week (sign the contract, pull the data, disable the tag); the verdict in plain words ("not ready") with the counts from the notes, a zero written as zero ("Implemented: 0").
4. `## Artifact 1: Per-control gap table`: one timing line, then columns exactly: Control ID | Framework mapping | Control Statement | Status | Evidence Required to Close | Gap Type | Vendor-Dependent? | Risk Tier. One row per control in input order. Control Statement quotes the inventory's deciding words, under twelve, so any reader can trace the call; Status reads `**Partial** (claimed Implemented) — <test>` naming the deciding test; Evidence at most three numbered items of form, scope and period, each under fifteen words.
5. `## Artifact 2: Remediation memo`: `### Executive Summary` in at most three sentences (verdict, live violations, what happens if the deadline slips); `### P1 Gaps`, `### P2 Gaps`, `### P3 Gaps`, one bullet per row under thirty words with the ID in bold, the consequence, owner role and a date, adding what the table row does not say; `### Vendor-Dependent Items` as Item | Vendor | What they must provide | Ask by; `### Recommended Sequencing` in three or four dated phases ending at the binding deadline, longest lead time first.

Status, tier and counts are copied from the working notes everywhere; every date and deadline from the input. The deliverable after the notes stays under 10,000 characters. Each fact is said once.
