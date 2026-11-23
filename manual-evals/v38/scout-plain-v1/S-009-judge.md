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
**Weekly 1-on-1 Prep — Florencia Castañeda (Product Designer, Onboarding Squad, Helix Commerce)**

**Manager's draft agenda (free text note):**
"For Florencia this week: quick shoutout for the checkout flow work, status on the design handoff to engineering, I want to do some coaching on her time estimation — she keeps blowing her estimates, and finally check in on the mentorship program she signed up for."

**Open action items:**
| Item | Owner | Status |
|---|---|---|
| Complete final design specs for checkout flow v3 | Florencia | DONE — handed off Monday |
| Run usability test session with 5 participants | Florencia | IN PROGRESS (3 of 5 done) |
| Provide manager feedback on Florencia's Q3 self-review | Manager | NOT STARTED |

**Performance signals:**
```
[Mon 09:45] florencia.castañeda → #design-handoffs: "Checkout flow v3 specs handed off. Full Figma annotations included — dev team shouldn't need to come back with questions."
[Mon 11:15] marco.iglesias (Engineering Lead) → #design-handoffs: "Just reviewed the checkout specs. Cleanest handoff we've had from design this quarter — no ambiguities. Ship it."
[Tue 14:30] florencia.castañeda → #onboarding-squad: "Heads up that session 4 is rescheduled — participant had to cancel. Rescheduled for Thursday EOD."
[Wed 10:00] florencia.castañeda → manager DM: "Quick update: I know I estimated 2 days for the checkout annotations but it took 4. The annotation scope grew significantly once I got into the edge cases — 23 screens instead of the 14 we scoped. I should have flagged the scope change earlier. I'm tracking this for next time."
[Thu 09:00] #design-team: florencia.castañeda posted a summary of learnings from the mentorship program kick-off session she attended Wednesday."
```

**Manager's additional note:** "The 'blowing estimates' issue — this is the second sprint in a row where her estimate was off. Last sprint she estimated 3 days for the accessibility icons update and it took 5."

=== CANDIDATE OUTPUT ===
<PASTE THE GENERATED RESPONSE HERE>
