Write the worksheet now as your next message, in exactly this form, one block per role family and level. Only when it is complete, including its checks line, end that message with a read_reference call for `references/final-pass.md`.

```
<family, level> band mid <M>
points: <ID | "posted title" scope M/P/F | type figure | date YYYY-MM vs cutoff YYYY-MM -> in/out | geo M/P/F | stage n steps M/P/F -> F=<n> P=<n> -> FULL / PARTIAL (dim, skew) / DROP (every reason)>, every point listed; an exclusion reads <ID | reason -> DROP>
full: offers [<ID figure>, ..] ranges [<ID midpoint>, ..]   (copy only points marked FULL)
convert: <each conversion written out, or "none">
anchor: <if the full line lists offers: one is the anchor, two their mean, more their median> else <if it lists ranges: median of those range mids> else <both lists empty: "—", Deferred>
gap: (<M> - <anchor>) / <anchor> = <x.xx%> -> <x.x%> -> <verdict>
tier: offers=<n>, ranges=<m> (FULL only) -> High if n>=2 / Medium if n=1, or n=0 and m>=2 / Low if n=0 and m=1 / Deferred if none
funnel: <n> retrieved -> <f> full (<o> offer, <r> range), <p> partial, <d> dropped
internal: <this family's own offers or declines only, and whether they agree>
```

After the last block, count the point lines across all blocks: the total equals the evidence table's row count. If not, a point is missing or listed twice: fix the blocks first.

End the worksheet with a "checks:" line confirming:
- every point's class follows its F and P counts, and each point sits in one family only;
- every anchor ID appears in its full line, and no PARTIAL, internal, OTE, unconverted total-comp, contractor, grant or unconvertible foreign-currency figure is in an anchor;
- every row whose full line is empty is Deferred, with "—" for anchor and gap;
- retrieved = full + partial + dropped per family, and the blocks together list every evidence row once;
- every date at the cutoff month is kept; every 2-step stage gap is F and every 1-step gap is P, never M;
- each verdict follows the ±5.0% table (a gap that rounds to ±5.0% is competitive), and each tier is read off the confidence-tier counts.


## A worked worksheet (invented company, rows and figures)

The input, in short: Harlan Tile Works, Series B, Omaha NE; window line "points older than 12 months (before October 2025) are out of window". Bands: Quality Assurance / Senior, midpoint $96,000; Warehouse Operations / Manager, midpoint $80,000. Own offers: one Senior QA hire accepted at $99,000.

| ID | Title | Type | Figure | Date | Metro | Stage | Notes |
|---|---|---|---|---|---|---|---|
| Q-01 | Senior QA Engineer | Accepted offer | $100,000 base | 2026-02 | Omaha NE | Series B | |
| Q-02 | Senior QA Engineer | Posted range | $80,000–$120,000 | 2025-09 | Omaha NE | Series B | |
| Q-03 | Senior QA Engineer | Accepted offer | $120,000 base | 2026-01 | Omaha NE | Series C | |
| Q-04 | QA Engineer / Test Automation Engineer | Posted range | $90,000–$150,000 | 2026-03 | Remote US | Series B | |
| Q-05 | Senior QA Engineer | Posted range | $90,000–$150,000 | 2026-04 | Lincoln NE | Series D | |
| Q-06 | Senior QA Engineer | Posted range | $80,000–$120,000 | 2026-05 | Omaha NE | Series B | voluntary posting |
| Q-07 | Warehouse Operations Manager | Posted range | $70,000–$90,000 | 2026-06 | Omaha NE | Series B | |
| Q-08 | Warehouse Operations Manager | Offer | $90,000 total comp | 2026-04 | Omaha NE | Series B | bonus included, no base split |
| Q-09 | Warehouse Operations Manager | Recruiter call | "around $90,000" | 2026-07 | Omaha NE | Series B | verbal |

The worksheet for it:

```
Quality Assurance, Senior band mid $96,000
points: Q-01 | "Senior QA Engineer" scope M | offer $100,000 | date 2026-02 vs cutoff 2025-10 -> in | geo M | stage 0 steps M -> F=0 P=0 -> FULL
 Q-02 | "Senior QA Engineer" scope M | range $80,000–$120,000 | date 2025-09 vs cutoff 2025-10 -> out -> DROP (before the cutoff month)
 Q-03 | "Senior QA Engineer" scope M | offer $120,000 | date 2026-01 vs cutoff 2025-10 -> in | geo M | stage 1 step P -> F=0 P=1 -> PARTIAL (stage, overstates)
 Q-04 | "QA Engineer / Test Automation Engineer" scope P | range | date 2026-03 -> in | geo P (remote, no metro) | stage 0 steps M -> F=0 P=2 -> DROP (blended title, remote)
 Q-05 | "Senior QA Engineer" scope M | range | date 2026-04 -> in | geo F (Lincoln NE) | stage 2 steps F -> F=2 P=0 -> DROP (other metro, Series D)
 Q-06 | "Senior QA Engineer" scope M | range $80,000–$120,000, midpoint $100,000 | date 2026-05 vs cutoff 2025-10 -> in | geo M | stage 0 steps M -> F=0 P=0 -> FULL
full: offers [Q-01 $100,000] ranges [Q-06 $100,000]
convert: none
anchor: one offer -> $100,000 (Q-01); Q-06 corroborates, stays out
gap: ($96,000 - $100,000) / $100,000 = -4.00% -> -4.0% -> competitive
tier: offers=1, ranges=1 (FULL only) -> Medium: one offer, range agrees
funnel: 6 retrieved -> 2 full (1 offer, 1 range), 1 partial, 3 dropped
internal: one own offer accepted at $99,000, near the midpoint: agrees with competitive

Warehouse Operations, Manager band mid $80,000
points: Q-07 | "Warehouse Operations Manager" scope M | range $70,000–$90,000, midpoint $80,000 | date 2026-06 vs cutoff 2025-10 -> in | geo M | stage 0 steps M -> F=0 P=0 -> FULL
 Q-08 | total comp with no base split -> DROP
 Q-09 | recruiter hearsay -> DROP
full: offers [] ranges [Q-07 $80,000]
convert: none (Q-08 has no stated bonus to subtract)
anchor: no full offer -> median of range mids -> $80,000 (Q-07)
gap: ($80,000 - $80,000) / $80,000 = 0.00% -> 0.0% -> competitive
tier: offers=0, ranges=1 (FULL only) -> Low: one range only
funnel: 3 retrieved -> 1 full (0 offer, 1 range), 0 partial, 2 dropped
internal: none for this family

point lines: 6 + 3 = 9 = rows in the evidence table
checks: classes follow F/P counts, one family per point; anchors use full-line IDs only (Q-03 partial and the own $99,000 offer kept out); no empty full line; funnels sum per family and every row appears once; Q-02 at 2025-09 dropped and every date from 2025-10 kept; Q-05's 2-step gap is F, Q-03's 1-step gap is P; verdicts follow ±5.0%, tiers read off the counts.
```

Then end the message with the read_reference call for `references/final-pass.md`.
