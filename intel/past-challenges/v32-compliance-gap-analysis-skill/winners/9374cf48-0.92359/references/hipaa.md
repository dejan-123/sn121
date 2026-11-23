# HIPAA security standards: calls

## Citations
- Admin §164.308: (a)(1)(i) mgmt process; (a)(1)(ii)(A) enterprise analysis of risks; (B) risk reduction; (C) sanctions; (D) activity review/log reading; (a)(2) named official; (a)(3)(ii)(A)-(C) workforce clearance+termination; (a)(4)(ii)(B)-(C) rights grant/modify; (a)(5)(i) awareness std; (a)(5)(ii)(A)-(D) reminders/malware/login-watch/passwords; (a)(6) IR; (a)(7)(i) contingency std; (a)(7)(ii)(A)-(C) backup/DR/emergency-mode; (D)-(E) test+criticality; (a)(8) periodic eval; (b)(1) BAAs.
- Physical §164.310: (a)(1) facility; (b) workstation-use rules; (c) workstation protection; (d)(2)(i)-(ii) disposal/re-use; (iii)-(iv) accountability/pre-move backup.
- Technical §164.312: (a)(1) rights std; (a)(2)(i) per-user IDs; (ii) emergency path; (iii) idle-logoff; (iv) at-rest crypto; (b) log+examine; (c)(1)-(2) integrity/authenticate; (d) entity auth; (e)(1),(e)(2)(i)-(ii) transit integrity+crypto.
- Org/docs/breach: §164.314(a) BAA contents, flow-down; §164.316(a)-(b) written policies, six-year keep, periodic refresh; §164.402 breach presumption + four-factor; §164.404/408/406 notices; §164.502(e)/504(e) privacy-side BA.

## Calls
| Citation | Situation | Pattern | Note |
|---|---|---|---|
| §164.308(a)(1)(ii)(A) | Enterprise analysis of risks never done | never performed | P1 |
| §164.308(a)(1)(ii)(A) | Not refreshed after a material change | predates the window | P1 |
| §164.308(a)(1)(ii)(A) | Older than ~a year with new systems/vendors since | predates the window | P1 |
| §164.308(b)(1) | ePHI with a vendor lacking a BAA | vendor unassured | P1; impermissible disclosure now - contain this week, then §164.402 assessment |
| §164.312(b), §164.308(a)(1)(ii)(D) | Logs collected but never read | tool left unwatched | P1 |
| §164.308(a)(7)(ii)(D) | Emergency plan never tested | design without record | live gap |
| §164.308(a)(3)(ii)(C) | Termination steps missing | paper missing for some | repeat finding |
| §164.312(a)(2)(iv) | Unencrypted at rest, no documented addressable decision | design without record | P1 if vendor-reliant with no report |
| §164.316(b)(2)(i) | Course completions lost in a retired system | records gone | documentation failure, P1 for the year |
| §164.308(a)(5)(i) | No course completions for the year | never performed | P1 |
| §164.310(b),(c) | Remote workforce, no documented workstation policy/acknowledgements | word only | P1; home laptops/networks are the workstations |
| §164.308(b)(1) | Relying on vendor report still not yet received | still waiting | no evidence at all |
| §164.308(b)(1) | Vendor report received, period overlaps, reviewed, CUECs mapped | proven current | acceptable |
| §164.308(b)(1) | Vendor report in hand but CUECs not mapped to own controls | second-hand proof | P2 |
| §164.312(a)(2)(iv) | Setting confirmed only by sales/account rep email | word only | get dated vendor export instead |
| §164.312(a)(2)(iv) | Vendor admin export/attestation, dated in period | proven current | beats rep email |
| §164.312(e)(2),(a)(2)(iv) | Old TLS/crypto/idle scan | predates the window | P2; re-run and date in period |
| §164.312(a)(2)(iii) | Idle-logoff confirmed only by email | word only | P2 |
| §164.312(a)(2)(i) | Unique IDs asserted via onboarding form or process write-up, no system account export | second-hand proof | Partial, P2 — reconcile account list to roster |
| §164.312(a)(2)(i) | Per-user IDs evidenced only for new hires, not the full workforce | part of the population | P2 |
| §164.308(a)(7)(i) | Consultant emergency-plan/policy template not tailored, approved, distributed, tested | template on a shelf | Missing, P1 — status is Missing even when the inventory says Partial |
| §164.306(d)(3) | Addressable item, no build and no documented decision | design without record | P2 |
| §164.308(a)(1)(ii)(B)+ | Required control runs but evidence stale/thin | overdue review | P2 |
| §164.316(b)(2)(iii) | Sound control needing only refreshed export | proven current | P3 housekeeping |

## Memo points
- State R vs A for every specification; cite the section.
- Say plainly: ePHI already with an unassured vendor is a disclosure happening now, not paperwork - contain first (sign the BAA or stop the flow and remove data), then document a §164.402 four-factor assessment.
- Addressable is not optional; a missing build plus missing written decision is a shortfall.
- Pending vendor report counts as nothing - do not grade it as partial evidence.
- Configuration proof must be re-run and dated inside the period; an old scan only shows the setting once existed.
- On short runway, sequence fast-evidence wins first; if a plan test cannot land before fieldwork, record the scheduled date and present a signed action plan rather than claiming closure.
- Breach notices: individuals without unreasonable delay, at most 60 days from discovery; HHS per §164.408; media where above 500 residents of a state.
