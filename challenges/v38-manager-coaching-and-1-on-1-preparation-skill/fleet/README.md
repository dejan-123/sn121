# v38 fleet archive

One directory per candidate bundle: `SKILL.md` plus optional `references/` and
ignored local `outputs/`/`*.grade.txt` artifacts.

Canonical result summary lives in `../POSTMORTEM.md`; full submission history is
in `../RESULTS.md`.

## Highest-value bundles

| Bundle | Result | Why keep |
|---|---:|---|
| `scout-piero-v7` | **.93963** | Our best submission (`bc6679a8`); strip-board voice, high scenario/rubric scores |
| `scout-captain-v13` | .91120 | First 5/5 scenario-quality sweep; clean S-004 redirect |
| `scout-piero-v15` | .89881 | Best S-009 result (.96595); hardened redirect |
| `scout-piero-v17` | .89105 | Lighter natural voice; useful contrast to over-specified variants |
| `scout-carrier-v38` | .81743 | Evidence-audit chassis; S-004 production failure lesson |
| `scout-plain-v1` | .85131 | Final plain-English experiment (`8b66aba7`); fixed S-008 but lost naturalness |

Everything else is retained as lineage evidence for similarity comparisons and
post-challenge analysis. Do not treat local `outputs/` as submitted artifacts.
