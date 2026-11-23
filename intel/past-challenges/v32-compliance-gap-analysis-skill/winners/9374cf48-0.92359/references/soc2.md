# SOC 2: calls

## Say plainly in the memo
- Say plainly: a control first switched on after the span opens yields fewer samples and the auditor notes shorter operation or raises exceptions.
- Timing raises urgency for every open item; it does not raise the tier of a control whose mechanism already works.
- Approvals or reviews still happening in chat after the span opens are exception-quality from that day forward.
- For first-time reports, a vendor's latest SOC 2 plus a bridge letter covering months it does not reach is the standard package; ask through the vendor's portal first.
- Tiers: P1 — assessment of risks absent; grant/removal without durable approvals; critical vendor reviews absent; watching without follow-up records in a Security+Availability report; any Missing control in CC6/CC7/CC8. P2 — working control needing a policy, better-recorded exercise, or lower-risk vendor reports; exceptions handled by recorded acceptance. P3 — Implemented controls where evidence simply builds up during the span.

## Citations
- CC1 environment: CC1.1 integrity/ethics; CC1.2 oversight; CC1.3 structure/authority; CC1.4 competence/hiring/screening/training; CC1.5 accountability
- CC2 communication: CC2.1 quality info; CC2.2 internal; CC2.3 external
- CC3 risk: CC3.1 objectives; CC3.2 identify/analyse; CC3.3 fraud; CC3.4 significant changes
- CC4 monitoring: CC4.1 evaluations; CC4.2 deficiencies
- CC5 activities: CC5.1-5.3 selection/tech/policies
- CC6 logical+physical: CC6.1 infra (MFA, encryption at rest); CC6.2 registration/authorisation pre-credential; CC6.3 role grant/change/removal; CC6.4 physical; CC6.5 disposal; CC6.6 boundary; CC6.7 transmission; CC6.8 malware
- CC7 operations: CC7.1 config/vuln detection; CC7.2 anomaly watch; CC7.3 event eval; CC7.4 IR; CC7.5 recovery
- CC8 change: CC8.1 authorise/design/test/approve/implement
- CC9 mitigation: CC9.1 disruption; CC9.2 vendors/partners
- A1 availability: A1.1 capacity; A1.2 environment/backup/recovery infra; A1.3 recovery testing

## Calls
| Citation | Situation | Pattern | Note |
|---|---|---|---|
| CC6.1 | Dated IdP policy export showing MFA for in-scope population | proven current | Implemented; still owe span evidence (unchanged policy log, population reconciliation) — do not downgrade |
| CC6.7 | Automated certificate management with watching, no inventory hole | proven current | Implemented |
| CC8.1 | Branch protection enforcing peer review, no documented change policy | design without record | Partial, doc gap, usually P2 — not a tooling gap |
| CC6.3 | Grant requests via chat, approvals in direct messages | second-hand proof | Partial; doc + process + narrow tooling (ticketed request type keeping requester, approver, date, access); IdP already exists. Usually P1 — sampled nearly every engagement |
| CC6.3 | Approvals in editable/deletable DMs or verbal sign-off | approvals nobody can sample | Exception even if work happened |
| CC7.2 | Watching platform with alerts but no policy, thresholds rationale, or follow-up record | tool left unwatched | doc + process (also A1.2 if Availability in scope), not tooling |
| CC7.4 | IR runbook plus a tabletop whose notes lack scenario, outcomes or actions | design without record | Partial, usually P2; the incomplete record is the gap (not overdue review); write up the past exercise now, run a fully recorded one inside the span |
| CC3.1-3.4 | No formal assessment of risks | never performed | Missing, P1; must exist before the span then refresh inside it |
| CC3.1-3.4 | Assessment of risks exists before span but no refresh inside | still waiting | Needs at least one occurrence inside the span |
| CC9.2 | Critical vendor SOC 2 Type II whose span does not overlap yours | predates the window | Ask for a bridge letter for any gap |
| CC9.2 | Reading a vendor's public documentation only | word only | Not a review; keep inventory with risk ratings, obtain report, review exceptions, map CUECs |
| CC9.2 | No critical vendor reviews | vendor unassured | P1 |
| CC9.2 | Lower-sensitivity vendor (never receives regulated data) | part of the population | Still needs inventory + review, usually P2 |
| CC9.2 | Subservice org treatment undecided | design without record | State carve-out vs inclusive in the description of the system |
| CC1.4 | Staff hired before the screening programme, while later hires are covered | part of the population | Partial, usually P2; complete checks or record management-approved risk acceptance |
| CC1.4 | Hire inside span lacking screening support | part of the population | Sample exception |
| any CC6/7/8 | Mid-span start of a control | still waiting | Fewer samples; auditor notes shorter operation or exception — timing does not raise tier of a working mechanism |
| CC6.3 | Approvals/reviews still in chat after span opens | approvals nobody can sample | Exception-quality from that day on |
| periodic | Periodic control (assessment of risks, IR test, vendor review, quarterly grant reviews) with zero occurrence inside span | never performed | Needs >=1 occurrence (two grant reviews in a six-month span) |
| scope | Payment/health/regulated data under separate programme (e.g. PCI DSS) | outside the model | Out of the SOC 2 table except where description of the system states the boundary |
| any | Records that cannot be retrieved reliably | records gone | Exception even if work happened |
