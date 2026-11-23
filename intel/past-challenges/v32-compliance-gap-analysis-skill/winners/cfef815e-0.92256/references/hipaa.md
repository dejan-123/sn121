# HIPAA: the safeguard identifiers and how its recurring rows are called

Identifiers come from 45 CFR Part 164, subpart C. Each implementation specification is marked R for required or A for addressable. An addressable specification is met by implementing it, by adopting a reasonable equivalent, or by a written decision explaining why neither fits (§164.306(d)(3)); an addressable item with no measure and no written decision is open.

## Further identifiers

Security official §164.308(a)(2) R. Termination procedures §164.308(a)(3)(ii)(C) A. Access authorisation and modification §164.308(a)(4)(ii)(B)-(C) A. Log-in monitoring and passwords §164.308(a)(5)(ii)(C)-(D) A. Incident response and reporting §164.308(a)(6)(ii) R. Periodic evaluation §164.308(a)(8) R. Agreement terms §164.314(a). Facility access §164.310(a)(1). Integrity §164.312(c)(1). Person or entity authentication §164.312(d) R. Encryption in transit §164.312(e)(2)(ii) A. Written policies and periodic review §164.316(a), (b)(2)(iii). Notice to individuals within 60 days §164.404.

## Engagement rules

The assessor's arrival is the binding date, and the input usually states it as a count of days from today; that count is the interval, repeated as given. The assessment accepts evidence dated inside roughly the twelve months before arrival; anything older proves a past state. A deliverable that needs a cycle to finish, such as a tested contingency plan or a training campaign with completions, may not fit in that time, and the memo says which ones.

Relying on a vendor's assurance report works only when the report is in hand, covers months that overlap the window, has been read by someone at the entity, and has its complementary user entity controls mapped to the entity's own safeguards. A console export from the vendor outranks a note from its account manager.

## Worked calls (invented organisations)

| Inventory line | Call | Gap type | Tier | What closes it: form, scope, period |
|---|---|---|---|---|
| Physiotherapy chain: unique logins for all staff; the evidence is the hiring form recording each username | **Partial**: assignment at hire only, no listing of active accounts | doc | P2 | §164.312(a)(2)(i): system export of all active accounts, dated in the window, reconciled to the staff roster |
| Imaging centre: images encrypted on the hosted archive, the only proof a line in the vendor's sales brochure | **Partial**: weak form | vendor + doc | P2 | §164.312(a)(2)(iv): vendor configuration export or report showing the setting, dated in the window |
| Pharmacy group: stored ePHI encrypted by the host; its assurance report was requested in 2031-11 and has not come | **Missing**: a request in flight is no evidence | vendor + doc | P1 | §164.312(a)(2)(iv): the report received, its period overlapping the window, reviewed with CUECs mapped |
| Home-care agency: completions held in a learning system retired in 2031; the new one has no course yet | **Missing**: no record inside the window | doc + process + tooling (course module only) | P1 | §164.308(a)(5)(i): course built, completion log for every workforce member; §164.316(b)(2)(i) six-year records |
| Dialysis provider: agreements with long-standing vendors; an offsite backup store added last quarter holds ePHI with none | split: (a) new store **Missing**; (b) others **Implemented** | (a) vendor + doc; (b) — | (a) P1; (b) P3 | (a) §164.308(b)(1): signed agreement this week or data pulled, then a §164.402 assessment |
| Sleep clinic: risk analysis signed 2030-01, never updated; systems and vendors added since | **Partial**: stale, age counted in months to the window's end | doc + process | P1 | §164.308(a)(1)(ii)(A): enterprise-wide analysis covering every current system and vendor, signed, with a risk management plan |
| Optometry network: the platform collects logs and the admin says everything is logged; no review procedure, no alerting rule, no review on record | **Partial**: the collector runs, nobody examines it | doc + process | P1 | §164.312(b) with §164.308(a)(1)(ii)(D): review procedure, alert rules, dated review reports |
| Hearing-aid retailer: continuity plan downloaded from a consultant's site, never tailored, signed or tested | **Missing**: possession is not adoption | doc + process | P1 | §164.308(a)(7)(i), (ii)(A)-(E): tailored plan, signed, then a recorded test |
| Remote billing firm: no written workstation policy, staff told verbally to avoid public networks | **Missing**: spoken only | doc + process | P1 | §164.310(b) and (c): written policy plus signed acknowledgements; home devices are the workstations |
| Patient portal: TLS live, the only proof a scan from 2030, before the window | **Partial**: working setting, stale proof | doc | P2 | §164.312(e)(1): a fresh scan dated inside the window |
| Dental group: no written emergency access procedure | **Missing** | doc | P1 | §164.312(a)(2)(ii): approved procedure and one recorded drill |
| Laboratory: laptops wiped on return, no disposal log | **Partial** | process | P2 | §164.310(d)(1): disposal log for the window |

ePHI in the hands of a business associate with no signed agreement is a per se violation of §164.308(b)(1), ongoing until contained, not a paperwork gap.

## Calibration

The enterprise-wide risk analysis is the failure enforcement cites most, so a stale one is P1 even though it exists. A working safeguard whose proof is the wrong form or the wrong date is P2. Executed agreements are P3.

## Lines the memo must carry

- A plain verdict: "not ready" while P1 items cannot all close before the assessor arrives.
- For a contingency plan that is absent or unadopted with about three months or less left: "<ID> cannot close before the assessment", followed by what will be shown instead (adopted plan, dated test schedule, signed plan of action).
- Vendor-dependent items under their own heading, asked for in week one with a fallback, since the vendor's reply sets the critical path.
