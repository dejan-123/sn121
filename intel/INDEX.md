# intel/ — competitor & own-submission evidence

Layout: `miners/<miner>/<subprefix>-<score>/` each holding `SKILL.md`,
`references/<original name>.md`, `tasks.json` (the /tasks grader breakdown).
`ours/` = our own submissions' grader data + uploaded-file verification copies.
`api-dumps/` = raw /submissions and /tasks responses plus local analysis
exports (also the former root-level `v39subs*.json`, `kelvin_sub.json`).
`past-challenges/` = cross-challenge answer-key archive (v30–v34 suites +
winner bundles + judge rationales; ANALYSIS.md is the distilled read).
Per-version evidence lives under `v37/`, `v38/`, and `v39/` — each contains
the folders formerly at this level (`v37-miners/`, `v38-top/`, `v39-top10/`,
etc., now nested as `v37/v37-miners/`, `v38/v38-top/`, `v39/v39-top10/`).

## v38 evidence (all under `v38/`)

- `v38-top-analysis/` — final top-competitor bundles and task cards, including
  winner `e0007252-tomtomtom-0.96599`.
- `v38-top/` — earlier top-bundle snapshots used during the live challenge.
- `v38-top20/` — earlier top-20 harvest; useful for lineage comparison.
- `v38-field/`, `v38-fresh/`, `v38-su1/` — harvested field bundles and probes.
- `api-dumps/v38/v38_subs_latest*.json` — saved leaderboard pages near close.
- `../challenges/v38-manager-coaching-and-1-on-1-preparation-skill/POSTMORTEM.md`
  — canonical final analysis.

## v39 evidence (all under `v39/`)

- `v39-top10-now/` — final leaderboard harvest incl. the winner's three
  iteration files (`winner-*` prefixed copies alongside ranked copies).
- `v39-iterations/` — multi-submission miners' version sequences (winner v1–v3).
- `v39-top10/`, `v39-top20/` — earlier harvests for lineage comparison.
- `v39-field/`, `v39-iterators/`, `knight-v2-evidence/` — field bundles,
  iterator lineages, and one mislabeled own-file kept for reference.
- `../logs/v39-KNOWLEDGE-LOG.md` — full winner autopsy and iteration doctrine.

## miners/

| Miner (hotkey) | Dir | Sub | Score | sq highlights | What it taught |
|---|---|---|---|---|---|
| astertwo (5GNkamB9) | da66-0.91857-leader | da663ef0 | 0.91857 | S-008 .996 S-010 .849 S-004 .996 | leader; register-in-hand→monitor, splits, wrong-record-kind DD |
| astertwo | 0ab1-0.91476 | 0ab1ffa5 | 0.91476 | S-003 .9391 S-009 .996 | cluster-named-against-term, without-prejudice nuance (tasks only) |
| astertwo | f866-0.88858 | f8667059 | 0.88858 | | earlier astertwo bundle (tasks only) |
| stonefashionco (5CCaDSju) | 6f49-0.91905 | 6f49771b | 0.91905 | rubric .928 su .931 — the output-contract edge | five origin labels, count down tier col, <7k reply, 26k ref |
| stonefashionco | 6bc7-0.90707 | 6bc75450 | 0.90707 | S-004/S-009 .996 | |
| stonefashionco | 9f64-0.9025 | 9f64b611 | 0.9025 | | tasks only |
| amantruell (5CDYcrZU) | ab50-0.91158 | ab50d410 | 0.91158 | **S-007 .8275 — only sub >0.7425** | THE cluster ruling: press+target release+lender all must-address "read with row N" |
| amantruell | d6ba-0.91402 | d6ba4d0a | 0.91402 | | same underwriting-referrals family |
| amantruell | 85e1-0.90061 | 85e13e64 | 0.90061 | | tasks only |
| jerry (UIDs 60/117/118) | 48fa-0.90099 | 48fac9c4 | 0.90099 | S-002 .863 (field best) | forced vocab: "Not named"→noise, "Near match"→DD |
| jerry | 49d1-0.89836 | 49d1d2c6 | 0.89836 | | ledger family twin |
| unknown (5CyKxm5G) | a51d-0.90259 | a51df9df | 0.90259 | | tasks only |
| unknown2 | 8f4e-0.90075 | 8f4e27cd | 0.90075 | **S-007 .935 — field best**, S-006 .966 | unconditional cluster wording: "rows showing it are must-address together, count is a second question"; talks-about-named-person→MA |
| — | (api only) | db62a0c7 | 0.91386 | sq mean .8823 — field best overall | API-observed only, bundle not downloaded; astertwo-owned |
| — | (api only) | 0ddb3580 | 0.90414 | S-003 strong | API-observed only |
| — | (api only) | f21c9a94 | 0.90430 | S-001 .997 | API-observed only |

## ours/

One dir per scored submission: `<account>-<version>-<subprefix>-<score>/tasks.json`.

| Dir | Sub | Score | Notes |
|---|---|---|---|
| star-v2-5edc-0.86662 | 5edcb2f6 | 0.86662 | house best; su ~0.93, sq .7715; S-003/S-009 regressed |
| piero-v13-43e8-0.86476 | 43e8a642 | 0.86476 | tasks + uploaded SKILL/ref verification copies |
| dragon-v8-6254-0.85431 | 62543e1f | 0.85431 | trap-map frame, gates clean |
| kelvin-v8-de05-0.83364 | da0519e3 | 0.83364 | reconcile frame; su .93 best execution; sq .79 ruling gaps (playbook §19) |
| star-v7-ebbe-0.83146 | ebbe4a4f | 0.83146 | field-guide (kelvin dir, star wallet); skeleton relabel passed gate; maps under-anchor, S-008 .405 |
| kelvin-v3-c893-0.81059 | c8937196 | 0.81059 | testimony frame; S-007 .9205 field-best+, S-006/S-008 over-elevation |
| dragon-v12-3f6b-0.80115 | 3f6b0c3a | 0.80115 | tasks + tasks-full |
| star-v1-0eff-0.79621 | 0eff9d35 | 0.79621 | fiveq frame |
| kelvin-v7-467c-0.79494 | 467c5d39 | 0.79494 | ledger frame; su .662 format lesson |

Not in intel (tasks not pulled): piero v1 da29 0.8316, piero v11 b203 0.83027,
kelvin v9 f567 0.77241, piero v4 bcb3 0 (gate), early probes piero da37 0.79447
+ 1fea 0.77524.

## api-dumps/

- `subs.json`, `subs2.json` — paginated /submissions snapshots (~330 rows).
- `subs_live_*.json` — later leaderboard snapshots.
- `tasks_*.json` — raw /tasks pulls for API-observed subs (0ddb/8f4e/db62/f21c).
- `f1.json`, `f2.json`, `f3.json` — additional v37 /submissions pages.
- `v37_all_now.json`, `xpair.json` — v37 aggregate and derived analysis export.

## Key cross-file facts

- Full per-scenario sq matrix and the five sealed-call diffs live in
  `logs/playbook.md` §17 — read that before touching any bundle.
- ab50's `references/schedule-example.md` contains the fleet-financing pool that
  unlocked S-007 (rows 1–3 all must-address). Compare against our
  `star0724/v2-clearline/references/worked-cases.md` Case A.
- 6f49's `SKILL.md` is the output-contract reference for rubric/su ≈ .93.
