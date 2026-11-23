# Final check

Apply these while writing; do not narrate this file.

- Each inventory control has its row, in input order, none merged or dropped. An `(a)`/`(b)` split appears only where a single newly added party is uncovered and everyone else on the line is covered.
- Each date was set beside the date it must meet (window start, period start, review due), never turned into an age.
- No status was copied from the inventory's column without passing the rules. Templates from outside, reports still awaited, mechanisms that fire before their condition and bases asserted without their assessment are all Missing.
- An enforced setting with a current export and nothing named missing stays Implemented. A subject the organisation does not have is Implemented (not applicable), P3.
- A deployed tool is never the tooling gap.
- Each row's status and tier come from one named test, cited in its Status cell; Missing is always P1, Implemented never is; a thin wrapper on a working mechanism is P2.
- Citations come from the framework file just read: HIPAA sub-specification with R or A, ISO 2022 numbering only, GDPR article with paragraph, SOC 2 criterion IDs.
- The bottom line carries the one binding interval, counted once, the live exposures with this week's step, and the verdict with the notes' counts, which sum to the rows; no count is revised later in the reply.
- Every figure, date and vendor in the reply is in the input; where a cause is not given, the reply says so.

## One reply at size (invented, other framework)

## Working notes
Today 2031-11 (about 2031-11-15); period 2032-01-01 to 2032-06-30; binding date 2032-01-01, the period's first day: 2031-11-15 → 2032-01-01 = 47 days.
- KF-01: export dated 2031-09, setting enforced, claimed Implemented; export in hand → Implemented, —, P2.
- KF-02: "approvals in direct messages", claimed Partial; approvals in chat → Partial, doc + process + ticket queue, P1.
- KF-03: "template from a vendor site, not tailored", claimed Partial; outside template → Missing, doc + process, P1.
- KF-04: "two staff hired before checks began", claimed Partial; exception group → Partial, process, P2.
Counts: Implemented 1 + Partial 2 + Missing 1 = 4; P1 2 + P2 2 + P3 0 = 4.

# Kestrel Freightworks — SOC 2 gap table & remediation memo
## Internal Triage Document — Not an Assessor's Opinion

**Bottom line:** Design must be complete when the period opens on 2032-01-01: 2031-11-15 → 2032-01-01 = 47 days, and anything designed after it yields fewer months of operating evidence. No regulated data is exposed today. Not ready: Implemented 1, Partial 2, Missing 1; P1 2, P2 2, P3 0.

| Control ID | Framework mapping | Control Statement | Status | Evidence Required to Close | Gap Type | Vendor-Dependent? | Risk Tier |
|---|---|---|---|---|---|---|---|
| KF-02 | CC6.2 — registration and authorisation; CC6.3 — grant and removal | "requests through a chat form; approvals in direct messages" | **Partial** (claimed Partial) — approvals in chat | (1) access policy, approved; (2) ticket per request with approver and date from 2032-01-01; (3) quarterly reconciliation | doc + process + tooling (ticket queue only) | No | P1 |
| KF-03 | CC7.4 — incident response | "template from a vendor site, not tailored" | **Missing** (claimed Partial) — outside template | (1) tailored runbook, approved; (2) one exercise inside the period with actions logged | doc + process | No | P1 |

- **KF-02** — every request before the queue exists is an exception in the sample. Owner: IT lead. By 2031-12-15.
- **KF-04** — two named staff lack checks; run both checks or sign a risk acceptance before the period. Owner: HR lead. By 2031-12-20.

| Item | Vendor | What they must provide | Ask by |
|---|---|---|---|
| KF-05 | parcel-tracking provider | current SOC 2 Type II report, bridge letter, CUEC list | 2031-11-22 |

**Weeks 1-2 (to 2031-11-29):** KF-02, KF-05 — queue live, vendor asked. **Weeks 3-5 (to 2031-12-20):** KF-03, KF-04 — runbook approved, checks done. **Week 6 (to 2031-12-31):** dry run of every period control. **Period (2032-01-01 onward):** exercise, quarterly review, re-export of KF-01.


Your next message is the reply, opening with its working notes.
