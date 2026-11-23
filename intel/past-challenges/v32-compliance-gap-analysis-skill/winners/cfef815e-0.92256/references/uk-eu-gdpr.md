# GDPR and UK GDPR: articles, the two-regime split, roles, and recurring rows

There is no certificate. Readiness is the ability to demonstrate compliance (Art. 5(2)), so a control with no record behind it counts as absent.

## Further identifiers

Principles Art. 5(1) and accountability Art. 5(2); notices Art. 13 and Art. 14; erasure Art. 17; objection Art. 21; solely automated decisions Art. 22; privacy by design Art. 25; security Art. 32; notice to individuals Art. 34; lead authority Art. 56; adequacy Art. 45; derogations Art. 49; cookies ePrivacy Directive Art. 5(3) and UK PECR reg. 6.

EDPB guidance WP248 rev.01 names nine criteria (evaluation or scoring, automated decisions, systematic monitoring, sensitive data, large scale, matched datasets, vulnerable subjects, innovative technology, blocked access to a service); two or more usually make an impact assessment mandatory. Credit scoring that feeds decisions about people falls under 35(3)(a) with Art. 22; behavioural tracking of site visitors at scale is large-scale systematic monitoring, cited as Art. 35(3)(b) with 35(3)(c), and WP248's monitoring criterion named. Impact assessment Art. 35(1), its triggers 35(3)(a) systematic evaluation or profiling with legal or similarly significant effect, 35(3)(b) large-scale special-category or criminal data, 35(3)(c) systematic monitoring of a publicly accessible area at scale; prior consultation Art. 36.

## Two regimes at once

Under UK GDPR and EU GDPR together there are two supervisory authorities: the ICO for UK processing and the EU lead authority of the main establishment. A notifiable breach can need two separate 72-hour notices, one to each. A transfer out of the UK uses the UK IDTA or the UK addendum to the EU SCCs; EU SCCs on their own do not cover a UK export. Each row says UK, EU or both, with each side's instrument.

## Roles before instruments

Settle what each third party is before choosing its contract. A processor acting only on instructions needs an Art. 28(3) contract. A partner using the data for purposes of its own, such as a credit reference agency or an advertising platform whose pixel collects visitor behaviour, is a controller; where purposes are set together the relationship is joint controllership under Art. 26, and an Art. 28 contract alone is the wrong instrument. The row names the role.

## Worked calls (invented organisations)

| Inventory line | Call | Gap type | Tier | What closes it: form, scope, period |
|---|---|---|---|---|
| Lettings app: notice names legitimate interests for all marketing; no balancing test for any activity | **Missing**: basis asserted, its assessment never done | doc + process | P1 | Art. 6(1)(f): purpose, necessity and balancing test per activity; ePrivacy or PECR consent for electronic marketing unless soft opt-in applies |
| Tutoring site: consent banner installed; analytics tags load before the visitor's choice is stored | **Missing**: the mechanism fails its own condition; live violation | tooling configuration + doc | P1 | Art. 7 and ePrivacy Art. 5(3): non-essential tags blocked until consent, verified by a dated scan; disable them this week |
| Gym chain: record of processing last updated 2031-06, three activities added since | **Partial** | doc | P1 | Art. 30(1): every activity with all fields, version-dated, regime tagged |
| Travel agency: contract with one processor, none with its email platform, payroll bureau or scoring partner | one **Partial** row naming each uncovered party, no split | vendor + doc | P1 | Art. 28(3) contracts, or Art. 26 arrangements where the party is a joint controller |
| Same agency: email platform processes in the US by default, no SCCs, no adequacy check, no contract; another provider's clauses in place | **Partial** | vendor + doc | P1 | Art. 28 and Art. 46 together, a double gap on one line: contract plus SCCs and a transfer assessment; IDTA or UK addendum for UK data |
| Clinic booking site: no impact assessment for new in-app location tracking or an automated eligibility score; the only one on file covers a retired newsletter tool | **Missing**: covers retired processing only; live violation | doc + process | P1 | Art. 35(1) with 35(3)(a) for scoring and 35(3)(b) with (c) for large-scale monitoring; Art. 36 if residual risk stays high |
| Recruitment platform: two access requests answered inside a month, nothing retained | **Partial** | process | P2 | Art. 15 and Art. 12(3): request log with receipt, identity check, response date, content |
| Estate agency: breach procedure from 2030, untested; a misdirected email in 2032 handled ad hoc, never assessed against the 72-hour test | **Partial** with a recorded failure | doc + process | P1 | Art. 33(1) and 33(5): retrospective assessment of that incident logged now, then a tested procedure |
| Car-hire firm: retention periods in personal notes, no deletion job, a legacy store unreviewed after a migration | **Partial** | doc + process | P2 | Art. 5(1)(e): approved schedule, legacy store reviewed and purged |
| Insurer: employee notice from 2029, silent on current HR processing and Art. 88 rules | **Partial** | doc | P2 | Art. 13 and Art. 88: revised notice, issued and acknowledged |

## Calibration

P1 is a live violation (consent that fails, a basis never assessed, no impact assessment for running high-risk processing, data with a processor and no contract, an unprotected transfer), an incident never assessed, or a stale record of processing. P2 is a working process without its record or formal version. P3 is housekeeping on compliant items.

## Lines the memo must carry

The summary leads with the live violations and this week's contain-now step for each. It states the number of Implemented controls even when it is zero ("Implemented: 0"). For an internal board review it says no regulator deadline exists, the exposure exists today, and the table is the brief for external counsel.
