# SOC 2: criteria identifiers, Type II timing, and recurring rows

The common criteria (CC series) are always in scope; A1 joins them when Availability is chosen. Each criterion is cited on its own (CC6.2, CC6.3), never as a range.

## Further identifiers

CC1.1 integrity and ethics, CC1.2 oversight, CC1.3 structure, CC1.5 accountability; CC2.1 to CC2.3 information and communication; CC3.3 fraud risk, CC3.4 significant change; CC4.1 and CC4.2 monitoring of controls; CC5.1 to CC5.3 control activities and policies; CC6.4 physical access, CC6.5 disposal, CC6.6 boundary protection, CC6.8 malware; CC7.1 vulnerabilities, CC7.3 event evaluation, CC7.5 recovery; CC9.1 business disruption; A1.1 capacity.

## Type II timing

- The report tests operation across a stated period, and the auditor samples occurrences from inside it: access requests, hires, changes, alerts, incidents.
- An artifact dated before the period's first day establishes design only. It is not an operating sample; the period needs evidence of its own.
- The binding date is the day before the period opens. A control designed after the start yields fewer months of operating evidence, its earlier occurrences turn into exceptions, and records cannot be backdated. The weeks from today to that date are the primary constraint; fieldwork comes second.
- Approvals in direct messages, or given by word of mouth, are exception-quality records because they can be edited or lost.
- A periodic control needs an occurrence inside the period: the risk assessment, quarterly access reviews, an incident exercise, vendor reviews, a restore test.
- A vendor touching in-scope data is reviewed through its own SOC 2 Type II report: period overlap (a bridge letter covers months it misses), scope, exceptions, and the complementary user entity controls (CUECs) it hands back, each mapped to a control you run. Reading public documentation is not a review.

## Worked calls (invented organisations)

| Inventory line | Call | Gap type | Tier | What closes it: form, scope, period |
|---|---|---|---|---|
| Payroll API, period from 2032-07-01: MFA enforced by the identity provider, policy export dated 2032-04, nothing named missing | **Implemented**: downgrading it is an error | — | P2 | CC6.1: export repeated inside the period, user population reconciled |
| Same firm: certificates renewed automatically under a monitoring dashboard, TLS 1.3 on every endpoint | **Implemented** | — | P3 | CC6.7: evidence produces itself |
| Booking platform: firewall rule changes requested by email and agreed on calls, no policy, no tickets | **Partial**: the process runs, its record does not survive | doc + process + tooling (a ticket queue in the tracker the team already uses, never a new platform) | P1 | CC8.1: change policy, a ticket per change with requester, approver and date, retrievable after the call |
| Logistics SaaS: branch protection enforces peer review before merge; no change management policy | **Partial**: working mechanism, no policy | doc | P2 | CC8.1: approved change policy describing the enforced review |
| Wallet provider: processors move the in-scope transactions; public documentation read, no risk assessment, no reports obtained | **Partial** | vendor + doc + process | P1 | CC9.2: vendor risk assessments and each processor's report reviewed before the period |
| Ticketing firm: incident runbook plus a tabletop whose notes lack scenario, outcomes and actions | **Partial**: exercise held, thinly recorded | doc + process | P2 | CC7.4: write up the past exercise; run a documented one inside the period |
| Streaming service: monitoring platform with alerts; no monitoring policy, no SLA, no record of alert review or follow-through | **Partial**: the tool exists | doc + process | P1 | CC7.2, with A1.2 when Availability is in scope: policy, thresholds, alert-review log from day one |
| Insurtech: no risk assessment, only informal discussion in design meetings | **Missing** | doc + process | P1 | CC3.1 and CC3.2: documented assessment before the period, refreshed inside it |
| Lending app: SMS provider receives tokens only, never the regulated data; report currency unconfirmed, CUECs unreviewed | **Partial** | vendor + doc | P2 | CC9.2: current report obtained, period overlap checked, CUECs mapped |
| Marketplace: screening for every hire since 2031-03; two earlier hires never checked | **Partial**: small known exception group | process | P2 | CC1.4: check the two, or a documented risk acceptance signed before the period |
| Health app: quarterly user access review never held | **Partial** | process | P1 | CC6.3: one review before the period, two inside a six-month period |

## Calibration

P1: anything Missing, provisioning without durable approvals, critical vendors unreviewed, monitoring with no follow-up record, anything that must already run on the period's first day. P2: a working mechanism with a thin wrapper, a low-sensitivity vendor, a small exception group closed by checks or a documented risk acceptance, an Implemented control needing a fresh export. P3: Implemented controls whose evidence accrues on its own.

## Lines the memo must carry

The summary names the period's start date and the weeks left as the primary risk, says that controls designed late yield fewer months of operating evidence, and puts the fieldwork date second. Data under a separate programme, such as card data under its own industry standard, stays outside the table apart from a boundary note.
