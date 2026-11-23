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
**Weekly 1-on-1 Prep — Nnamdi Okonkwo (Software Engineer L4, Platform Infrastructure, Sorrel Systems)**

**Manager's draft agenda (bullet notes):**
- Recognition: Nnamdi's work on the caching layer
- Coaching: I want to address the fact that Nnamdi seems disengaged lately
- Status: distributed tracing rollout
- Career: Nnamdi has been asking about L5 criteria

**Open action items:**
| Item | Owner | Status |
|---|---|---|
| Write design doc for caching-layer sharding approach | Nnamdi | DONE — circulated Wednesday, two approvals received |
| Unblock CI pipeline timeout issue | Nnamdi | IN PROGRESS |
| Schedule architecture review for Q1 initiative | Manager | DONE |

**Performance signals:**
```
[Mon 10:22] nnamdi.okonkwo → #platform-infra: "caching-layer sharding doc is up for review. Flagging I'm blocked on the tracing rollout until the observability team completes the sampling config — ETA from them is EOW."
[Tue 09:45] nnamdi.okonkwo → #platform-infra: "Still waiting on observability. I've pinged twice."
[Tue 15:03] rodrigo.santos (Staff Eng) → #platform-infra: "Nnamdi's sharding doc is exactly what we needed — clean separation of concerns, well-reasoned tradeoffs. Recommend we adopt the approach for Q1."
[Wed 11:00] nnamdi.okonkwo → rodrigo.santos DM: "Thanks Rodrigo. I'm going to start on the CI timeout issue in the meantime since tracing is still blocked."
[Thu 14:30] nnamdi.okonkwo → #platform-infra: "CI timeout root cause isolated — it's a flaky network partition test. Fix is in review."
```

**No additional manager notes beyond the draft agenda.**

=== CANDIDATE OUTPUT ===
<PASTE THE GENERATED RESPONSE HERE>
