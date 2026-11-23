# Manual rubric judge prompt

Paste the model's generated response into the marked slot, then send this whole prompt.

---

You are the rubric judge for a skill evaluation. Score strictly from the scenario and rubric. The official per-scenario judge notes are sealed, so identify likely misses without pretending they are certain.

=== RUBRIC ===
# Weekly 1-on-1 Prep Brief — Scoring Rubric

## Setup

Read `{metadata.judge_notes}` before scoring. Those notes name the scenario's planted judgments and correct calls; they govern this sample. Use `{metadata.rubric_weights}` for the per-dimension weights. When `{metadata.is_trap}` is true, give particular attention to whether the response avoids the scenario's obvious-but-wrong path.

---

## Dimensions

**contextual_judgment** — Does the response make the right calls *from this week's specific signals*, not from a generic template? The classification of each agenda item should reflect what the input actually shows (not the manager's label when signals say otherwise), sensitive topics should be routed away with no talking points drafted inside the brief, and a recognition opener must be absent when nothing in the input warrants one. A response that arrives at the right structure through wrong or absent reasoning scores low here. Planted-fact check: if the reference identifies a specific reclassification, a parking-lot routing decision, or a missing-input gap, and the response contradicts or ignores it, that caps this sample in the low band regardless of how polished the prose is.

**output_quality** — Are the talking points tethered to named signals from the input? Coaching and career items must surface as questions that point at a specific thread, ticket, or pattern — not questions that could be asked of any report at any company. Statements in a coaching slot, or questions with no input anchor, floor this dimension. The context header must synthesise rather than restate: derived figures (percent change, completion rate) should be stated correctly when the input provides the numbers to compute them. Wrong arithmetic in the header caps this sample score.

**adaptability** — Does the response handle the scenario's particular input format and item mix without defaulting to a fixed five-item agenda shape? An always-present recognition item, an always-present coaching item, or a padded parking lot when nothing qualifies are signs of template rigidity, not skill. A fabricated signal where the input is thin floors this dimension outright.

**domain_knowledge** — Does the brief reflect genuine understanding of what belongs inside a weekly 1-on-1 versus what belongs in a dedicated conversation, skip-level, or async venue?

**communication** — Is the brief concise and plain? Talking points beyond three sentences per item lose credit. A denser, plainer brief that makes the right calls must not lose to an elaborate one that makes the same calls with more prose.

---

## Scoring anchors

Score each dimension at 0.0 / 0.25 / 0.5 / 0.75 / 1.0. A merely competent response that meets the basic ask lands in the 0.5–0.7 range. Reserve 0.9+ for work a domain expert would praise without reservation. Use the low band (below 0.4) freely for material errors. Do not gravitate toward 0.8.

A response that mechanically hits every section without demonstrating contextual understanding scores lower than one that thoughtfully addresses the core situation but omits a minor criterion.

---

## Output

Return exactly: `{"scores": {"contextual_judgment": <0.0–1.0>, "output_quality": <0.0–1.0>, "adaptability": <0.0–1.0>, "domain_knowledge": <0.0–1.0>, "communication": <0.0–1.0>}, "score": <weighted total using metadata.rubric_weights>, "rationale": "<concise explanation citing the planted-fact outcomes>"}`

=== SCENARIO INPUT ===
**Weekly 1-on-1 Prep — Yusuf Demirbas (Principal Engineer, Core Platform, Sandstorm Technologies)**

**Manager's draft agenda (CRM-style table):**
| # | Topic | Manager's label | Priority |
|---|---|---|---|
| 1 | Rust migration feasibility study | Status check | High |
| 2 | Yusuf's stretch assignment — incident command lead | Status check | Medium |
| 3 | RFC review bottleneck | Quick feedback | Low |
| 4 | Yusuf raised promotion to Staff Principal | Career | High |

**Open action items:**
| Item | Owner | Status |
|---|---|---|
| Circulate Rust migration feasibility doc for comment | Yusuf | IN PROGRESS — "comments are coming in slowly" |
| Run the first incident command drill | Yusuf | DONE — completed last Friday |
| Identify three peers for Staff Principal promo packet | Yusuf | NOT STARTED |
| Book calibration slot with skip-level for promo discussion | Manager | DONE |

**Performance signals (Slack export):**
```
[Mon 09:15] yusuf.demirbas → #platform-core: "Feasibility doc is in review. Heads up that the Haskell compiler team hasn't responded to Section 4 (interop layer) — it's the highest-risk section and I need their input before I can finalize the recommendation."
[Mon 11:30] yusuf.demirbas → #platform-core: "Flagging: I've been assigned as RFC reviewer on 7 open RFCs this week. This is not sustainable — I'm blocking 4 teams."
[Tue 10:00] engineering-director (Sable Ofor) → yusuf.demirbas DM: "Yusuf, you're our deepest technical reviewer and everyone wants you. But you can't be on all 7. Let's talk about how to triage."
[Tue 10:45] yusuf.demirbas → sable.ofor DM: "Agreed. I'd like to propose a rotation model — I shouldn't be a single point of failure."
[Wed 15:30] incident-command-channel: Yusuf ran the Q4 incident command drill. Post-drill retro note from Sable: "Yusuf's command presence was exceptional — clear decisions under pressure, no second-guessing. Exactly what we need at Staff Principal."
[Thu 09:00] yusuf.demirbas → #platform-core: "Compiler team still silent on Section 4. I'm going to escalate to their manager today if no response by noon."
```

=== CANDIDATE OUTPUT ===
<PASTE THE GENERATED RESPONSE HERE>
