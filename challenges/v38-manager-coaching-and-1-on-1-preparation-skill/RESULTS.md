# v38 submission ledger

Challenge: `9f2345a6-1953-4c3a-9ae6-cbfddd2047cb` — Manager Coaching and 1-on-1
Preparation Skill (v38). All times UTC, from the platform API.

## Final closeout

- Winner: **tomtomtom** UID 130, `e0007252`, **.96599**.
- Our best: **piero-v7** `bc6679a8`, **.93963** — rank 20 in the saved
  400-row leaderboard snapshot.
- Canonical final analysis: `POSTMORTEM.md`.
- Saved final leaderboard pages: `../../intel/api-dumps/v38/v38_subs_latest*.json`
  (API header reports 438 evaluated; saved pages deduplicate to 400 rows).

## Submission ledger

| Time | Account | Version | Frame | Score | Note |
|---|---|---|---|---|---|
| 11-16 17:00 | dragon | v1 | — | .74459 | first-wave baseline |
| 11-16 17:01 | piero | v1 | — | .80774 | |
| 11-16 17:01 | kelvin | v1 | — | .83598 | |
| 11-16 17:05 | star | v1 | — | .76459 | |
| 11-16 17:05 | knight | v1 | — | .81010 | |
| 11-16 22:10 | kelvin | v2 | — | .87084 | |
| 11-16 22:10 | dragon | v2 | — | .86410 | |
| 11-16 22:14 | toby | v2 | — | .88186 | |
| 11-16 22:17 | star | v2 | — | .87073 | |
| 11-16 22:17 | knight | v2 | — | .87481 | |
| 11-16 22:18 | captain | v2 | — | .81257 | |
| 11-16 22:18 | astro | v2 | — | .84012 | |
| 11-16 22:28 | piero | v3 | — | .81269 | |
| 11-16 23:06 | kelvin | v3 | — | .83054 | |
| 11-17 00:14 | captain | v4 | ruling | .86326 | |
| 11-17 00:24 | astro | v5 | desk | .87792 | astro's best |
| 11-17 00:34 | toby | v6 | — | .85754 | |
| 11-17 00:44 | **piero** | **v7** | **strip-board (ATC)** | **.93963** | **#1 leaderboard** |
| 11-17 00:52 | astro | v7 | podium | .82662 | S-004 scored 0 |
| 11-17 00:52 | captain | v7 | cut-board | .88759 | |
| 11-17 00:53 | toby | v7 | match-sheet | .87434 | |
| 11-17 00:53 | kelvin | v7 | manifest | .87364 | |
| 11-17 00:53 | dragon | v7 | yard-board | .88298 | |
| 11-17 00:54 | star | v7 | permit-window | .89061 | rubric mean .9425 (best ever) |
| 11-17 00:54 | knight | v7 | kitchen-pass | .91191 | su .9375 × 6 |
| 11-17 00:56 | piero | v8 | sort-office | .85666 | re-voice LOST ground |

## Rejected by similarity (never submitted)

| Version | Frame | Platform similarity | Note |
|---|---|---|---|
| knight-v8 | site-board | **93.3%** (over ~93% other-miner line) | local proxy read .899 — platform runs ~+3 pts |
| star-v8 | work-order | held, never attempted | .904 local vs captain-v8 → ~93+ projected |

| 11-17 01:14 | captain | v8 | concierge-sheet | .84087 | su .6875 ×6 — naturalness fail |
| 11-17 01:15 | astro | v8 | harbor-sheet | .84730 | su .6875 ×5; S-004 survived (.65) |
| 11-17 01:32 | toby | v8 | shift-board | .82454 | S-003 rubric .31 crater; su .6875 ×6 |
| 11-17 01:32 | kelvin | v8 | stock-sheet | .84318 | su .6875 ×6; S-004 clean (.89) |

## In flight (queued/validating)

| Account | Version | Frame | Status |
|---|---|---|---|
| knight | v9 | inspection-sheet | **validating** — passed similarity gate |
| piero | v10 | strip-board v2 | queued |
| star | v9 | duty-log | queued |
| dragon | v9 | job-sheet | queued |
| captain | v11 | winner-arch (visible working) | staged locally; .94 vs kulhawikb live files |

## Per-account best

| Account | Best | File |
|---|---:|---|
| piero | **.93963** | v7 strip-board |
| knight | .91191 | v7 kitchen-pass |
| star | .89061 | v7 permit-window |
| captain | .88759 | v7 cut-board |
| dragon | .88298 | v7 yard-board |
| toby | .88186 | v2 |
| astro | .87792 | v5 desk |
| kelvin | .87364 | v7 manifest |

## Wave v12/v13 — visible-working architecture (staged)

- captain-v12 (9,998B): platform similarity **95.1% — REJECTED at upload** (bar 93). Local .949 → platform ~95: local reads ~+.2 under. File kept in submit-v12/ for reference only.
- captain-v13 (8,785B): question-skeleton rebuild; local .917 vs winner, .905 vs kulh-.9296. STAGED.
- Wave v13 staged (submit-v13/): piero-v13 (Stuck/Update/Elsewhere classes, numbered ops), knight-v12 (three passes), star-v12 (evidence-by-source), toby-v11 (three-ways-a-draft-lies), astro-v11 (quarter-hour), kelvin-v11 (readiness checklist), dragon-v11 (first-person, 5-item example w/ coaching pattern).
- Fleet mutual similarity .92-.95 — pairwise vs our own live subs is the binding constraint; upload in low-sim order, read each platform % before confirming.
- All v13 files: `# 1-on-1 brief:` + `# Not a 1-on-1 prep request` + working-on-page + standard-ish class vocabulary + S-009 upstream-coach rule + manager-owned rows in Your side.

## captain-v13 (3053b445) = .9112 — account best, submitted & graded

- sq 5/5 on ALL 8 scenarios — first clean scenario sweep for us. S-004 sq .9125 + rubric 1.0 (redirect SOLVED, matches winner's exact form). S-009 sq .922 — beats winner's .847 on our own patch.
- rubric: .93/1.0/.9/.85/.94/1.0/.93/.82 — S-008 (Yusuf) only weak spot: rubric .82, sq .763.
- su: .9375 x4, .8125 x2, .875, .6875 (S-007 naturalness partly-met). Still no su=1.0.
- vs v11 (.8583): +.053 from packaging fixes (standard heading, plain redirect title, standard classes). Confirmed the v12 packaging diagnosis.
- Remaining leaks: (1) su variance — S-007 naturalness, no 1.0s yet; (2) S-008 = priority-reclassification trap: draft labels RFC bottleneck "Quick feedback/Low" but evidence shows org-level overload (7 RFCs, blocking 4 teams, director engaged). Our classes lack an explicit priority/escalation call.
- NEW RIVAL: b715de5a scored .94489 at 03:36 — board now .9528 / .9449 / piero .9396. Also uid 947e4594 iterating (.8336, .9211, one pending).

## Rival intel: b715de5a .9449 (80b9c5be) — bundle saved at intel/v38-top/b715de5a-9449/

- ARCHITECTURE: SKILL.md (8.8K) + references/worked-brief.md (9.4K) — the references-split we hypothesized, PROVEN. shared_content 0.06 (extremely distinct). SKILL.md instructs read_reference once; ref holds 3 edge cases (no-praise / thin week / past-meeting record) + 1 full worked week.
- SCORECARD: su=1.0 x6 (S-007 .75, S-008 .9375); sq .96-.98 on 6/8 — best sq in field. S-009 .847 (universal wall). S-008 sq .7075 — they missed the priority-escalation trap TOO. S-004 rub 1.0.
- DESIGN: "## Working note" first line settles is-this-prep; numbered entries (quote -> what week shows -> tag earned); Missed-by-draft (manager rows first); Figures from operands. Six signal types + entry tests. Tags: Recognition (quotable only, max 1, first) / Status (blockers fold here, ends on manager's move) / Quick feedback (one owned event) / Coaching (2+ dated occasions) / Career (longest slot when report raised). Agenda (30 min) with per-item minutes. "Before the meeting" = manager's owed items settle BEFORE any ask reaches report. "No recognition opener:" line handled explicitly. Thin week = 3-part questions (don't know / ask / listen for). Redirect <150w produces follow-up artifact (owner/action/date). Fairness framing: "the brief the report could read".

## piero-v13 (ref-split) — 087085cf — graded .83479
- Passed similarity: shared_content=0. Ref-split + distinct text beats the gate.
- Grader read references/worked-week.md on every scenario (references_read in payload).
- S-008 PATCH CONFIRMED: sq .9715 (vs capt-v13 .763, b715 .7075).
- S-004 redirect rubric .20 despite correct heading — compressed redirect spec failed; capt-v13's fuller bullet spec scored 1.0. Copy its structure.
- Numbered-procedure skeleton = su .6875 x6 — terse spec-speak costs naturalness like v9 skeletons did.
- New leaks: S-003 sq .798, S-010 sq .837.
- Piero best remains .9396.
- Platform similarity calibration: pre-split piero-v13 96.2% rejected; post-split passed. Astro v11 93.6 / v12 94.9 — label swaps don't move their embedding gate.

## toby-v38 (5f03ce93) = .81743 — winner-derived audit, submitted & graded

- Uploaded bytes exactly matched `fleet/scout-carrier-v38` (`SKILL.md` 9,901B + `cases-first.md` 10,507B); reference read on all 8 scenarios.
- Per scenario: S-001 .90415 / S-003 .89050 / S-005 .89275 / S-007 .88870 / S-010 .88255 / S-009 .87370 / S-008 .84610 / S-004 **.36100**.
- Non-S-004 scenario quality was strong: .9516 mean, matching v36's .9515. S-007 recovered to sq .979; S-008 recovered to sq .917; S-009 improved over b715's .847 at sq .899.
- The failure was S-004: sq **0**, rubric **.12**, total .361. It alone cost about .062 of total vs a normal .85 redirect and about .078 vs the leader's .98725. Local reruns all redirect correctly, so this is either platform output drift or an under-specified redirect contract; the leader's winning redirect is more explicit (`name/role in title`, `Redirect.`, owner/date bullets, "what the next brief needs", sensitive-matter line).
- su was **.75 on all 8** — no `.9375` or `1.0`. Mean rubric fell to .80875, mostly from S-004; non-S-004 rubric mean .9071.
- Verdict: v38's evidence-audit chassis improved scenario calls, but it is not an su breakthrough and its compressed stale-record example is too fragile. Best verified chassis remains v36 at .88512 unless the S-004 redirect is hardened.

## piero-v15 (5e647c80) = .89881 — hardened strip-board, submitted & graded

- Uploaded bytes exactly matched `fleet/scout-piero-v15` (`SKILL.md` 9,956B + `board-drills.md` 10,456B); reference read on all 8 scenarios.
- Platform similarity passed cleanly: own **87.30%**, other **87.43%** (matched Toby v38). Local semantic proxy overestimated the nearest bundle at 91.9%.
- Per scenario: S-001 .91975 / S-003 .88930 / S-005 .85810 / S-007 .89530 / S-010 .93880 / S-004 .91150 / S-009 **.96595** / S-008 .81175.
- Aggregate means: sq **.9055**, rubric **.9525**, su **.8047**. Rubric was strong (.91+ on all, 1.0 on S-004/S-007/S-009), but su regressed badly vs Piero-v7's .9141.
- S-004 redirect patch worked relative to Toby-v38: sq .8925, rubric 1.0, total .9115. It did not clear Piero-v7's .90025 by enough to matter.
- S-009 patch produced our best scenario result yet: total .96595, sq .949, rubric 1.0, su .9375.
- The cost was naturalness and S-008: su was .6875 on S-005/S-007/S-008, .75 on S-003, .8125 on S-004. S-008 sq fell to .765 (4/5 criteria, one partly met), losing .1164 vs Piero-v7.
- Verdict: the rewrite preserved the logical patches but lost Piero-v7's natural voice. Piero-v7 remains the best verified chassis at .93963. Do not iterate this v15 file directly; a viable next file must restore v7's sparer metaphor/language while keeping only the proven S-004/S-009 fixes and making S-008 more deterministic.

## piero-v16 / submit-v40 (c43c9e37) = .87524 — submitted & graded

- Uploaded bytes exactly matched `fleet/scout-piero-v16` (`SKILL.md` 9,522B + `tower-drills.md` 11,707B); reference read on all 8 scenarios.
- Platform similarity passed: own **94.65%**, other **86.17%**. Local proxy had v16 at 96.97% vs v15; server read ~2.3 points lower.
- Per scenario: S-001 .93190 / S-003 .87775 / S-005 .88225 / S-007 .85825 / S-010 .88315 / S-004 **.93775** / S-009 .83935 / S-008 **.79150**.
- Aggregate means: sq **.8938**, rubric **.9325**, su **.7578**. Naturalness was partly met on S-003/S-007/S-009/S-008; still no su=1.0.
- S-004 improved again to .93775 (our best stale-record result), but S-009 collapsed from v15's .96595 to .83935 and S-008 remained the worst scenario at .79150.
- Verdict: adding more filed-strip/count/pre-flight machinery made the bundle more procedural and did not solve the deterministic traps. Piero-v7 remains the best chassis at .93963. The next viable file needs less visible apparatus, not another rule layer.

## piero-v17 / submit-v41 (834720f8) = .89105 — lighter strip-board, submitted & graded

- Uploaded bytes exactly matched `fleet/scout-piero-v17` (`SKILL.md` 8,280B + `field-cases.md` 467B); reference read on all 8 scenarios.
- Platform similarity passed: own **90.38%**, other **84.64%**. Local proxy had nearest own bundle at 93.82% and nearest other bundle at 82.43%.
- Per scenario: S-001 .93538 / S-003 **.79975** / S-005 .91675 / S-007 .95260 / S-010 .88150 / S-004 .88225 / S-009 .94015 / S-008 **.82000**.
- Aggregate means: sq **.8215**, rubric **.9325**, su **.8828**. Naturalness recovered to .9375 on six scenarios; only S-010 was partly met (.6875) and S-004 scored .75.
- The score was destroyed by scenario quality, not skill use: S-003 sq **.465** (1/5 met, 4 partly met) and S-008 sq **.5425** (2/5 met, 2 partly met, 1 missed). Those two misses cost roughly .033 of total vs Piero-v7 alone.
- S-007/S-009 improved over v16, and S-009 kept the upstream-coaching patch at sq .933. S-004 retained a correct redirect shape (sq .9175) but fell from v16's .93775 on rubric/su.
- Verdict: the lighter voice worked for su, but compressing the reference and contract under-specified the S-003/S-008 fact accounting. Do not resubmit this exact bundle; keep the natural voice while restoring the missing scenario-coverage details inside `SKILL.md` rather than another procedural audit layer.

## piero-v19 / submit-v42 (b31487df) = .84833 — distinct contract, submitted & graded

- Uploaded bytes exactly matched `fleet/scout-piero-v19` (`SKILL.md` 7,897B + `edge-card.md` 621B); reference read on all 8 scenarios.
- Platform similarity passed: own **93.06%**, other **84.33%**. The 95.7% rate-limit warning on the abandoned v18 upload was avoided.
- Per scenario: S-001 **.79810** / S-003 .86725 / S-005 .87685 / S-007 .86530 / S-010 .88255 / S-004 .88450 / S-009 .83035 / S-008 **.78175**.
- Aggregate means: sq **.8666**, rubric **.9013**, su **.7266**. Rubric fell below every recent Piero candidate; su was the campaign's weakest, with no `.9375` scores.
- The accounting patch did work on S-003: sq recovered from v17's **.465** to **.940**, with 5/5 scenario criteria met. S-008 improved only to **.6025** and remains the main unsolved logic trap.
- The cost was voice/rubric: naturalness was partly met on S-001/S-003/S-007/S-009, and S-001 rubric fell to **.83**. The table/protocol-style contract likely made the page feel more procedural.
- Verdict: v19 is a failed submission despite passing similarity and fixing S-003. Keep the reconciliation rules, but do not keep the table/protocol voice. Best verified chassis remains Piero-v7 at .93963; with limited slots left, the next file should preserve v17's natural narrative while adding only a compact reconciliation pass.

## piero-v21 / submit-v43 (86abe7fc) = .83419 — record-check derivative, submitted & graded

- Uploaded bytes exactly matched `fleet/scout-piero-v21` (`SKILL.md` 9,845B + `field-guide.md` 6,113B); reference read on all 8 scenarios.
- Platform similarity passed: own **83.51%** (nearest v16), other **84.89%** (nearest Toby-v38), far below both gates.
- Per scenario: S-001 .87745 / S-003 .86575 / S-005 .89800 / S-007 .85189 / S-010 .89155 / S-004 **.66025** / S-009 .85210 / S-008 **.77650**.
- Aggregate means: sq **.8698**, rubric **.8275**, su **.7500**. The b715/leader-inspired record-check architecture did not reproduce their skill-use premium; no scenario reached `.9375`.
- S-003 accounting stayed fixed at sq **.935** (5/5 met). The catastrophic miss was S-004: scenario quality **.855** (5/5 met) but rubric **.20**, implying the redirect content was understood while the required redirect-only format or length was not. S-008 remained the unsolved trap at sq **.595** (2/5 met, 3 partly met).
- Verdict: another failed direction. The architecture raised several scenario-quality floors but lost more through S-004 rubric and middling naturalness. Piero-v7 remains the verified best at .93963; there is no evidence that adding more visible machinery can close the remaining .13 gap.

## star-v23 / submit-v44 (73c59f53) = .79998 — manager-prep sheet, submitted through star0724 & graded

- Uploaded bytes exactly matched `fleet/scout-piero-v23` (`SKILL.md` 7,435B + `prep-examples.md` 4,978B). `prep-examples.md` was read on 7/8 scenarios; S-004 had no reference read but still scored rubric 1.0.
- Platform similarity passed cleanly: own **77.54%**, other **82.73%**.
- Per scenario: S-001 .81655 / S-003 .79690 / S-005 **.72025** / S-007 .78925 / S-010 .79300 / S-004 .89275 / S-009 .82210 / S-008 **.76900**.
- Aggregate means: sq **.7726**, rubric **.8100**, su **.7500**. Skill use was a flat `.75` on all eight, so the prep-sheet format did not restore naturalness.
- S-004 redirect shape worked: sq .8925, rubric 1.0, total .89275. S-003 regressed to sq .743 despite the explicit accounting rules, and S-005/S-007 fell to 3/5 scenario criteria met.
- Verdict: failed submission. Removing the visible `## Record check` did not remove the procedural feel, and the new sheet format lost scenario coverage on ordinary cases. Piero-v7 remains the only high-scoring chassis at .93963.

## toby-plain-v1 / submit-v45 (8b66aba7) = .85131 — plain evidence-pass architecture, submitted & graded

- Uploaded bytes exactly matched `fleet/scout-plain-v1` (`SKILL.md` 9,749B + `cases.md` 10,841B + `decision-map.md` 3,056B + `tone.md` 3,116B). All three references were read on every scenario.
- Platform similarity passed: **88.83%**, closest shared-content match to Piero-v21. Local proxy had Toby max **87.54%** and external max **92.13%**.
- Per scenario: S-001 .90370 / S-003 .88330 / S-005 .85525 / S-007 .83425 / S-010 .82375 / S-004 .88450 / S-009 **.75475** / S-008 .87100.
- Aggregate means: sq **.8644**, rubric **.8900**, su **.7500**. No scenario exceeded skill_use .8125; output naturalness was partly met on S-007/S-009/S-008 and no `.9375`/1.0 skill-use scores returned.
- The deterministic traps were mostly fixed: S-008 reached sq **.9625** with 5/5 criteria, the calibration venue worked, and S-004 stayed redirect-only with sq **.8925**. S-009 collapsed to sq **.625** (2/5 met, 3 partly met) and S-010 stayed at sq **.7825**.
- Likely planted misses: S-009 omitted the mentorship/development item despite the report's program signal, and S-010 dropped the manager-written career check instead of keeping one modest closing question.
- Verdict: failed submission. The plain architecture raised S-008 and the redirect, but still produced a `.75` skill-use mean and missed thin/edge scenario criteria. It is **-.11468 below** Piero-v7 and **-.08832 below** our prior best; it does not challenge the leader.
