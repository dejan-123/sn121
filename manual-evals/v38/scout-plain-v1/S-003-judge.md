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
**Weekly 1-on-1 Prep — Beatrix Lundqvist (UX Designer, Product Design team, Volantis Health)**

**Manager's draft agenda:**
- Shoutout for the patient-portal redesign launch 🎉
- Status: accessibility audit deliverable
- Career check-in (we do these monthly — this is the month)
- Coaching on her presentation skills — she stumbled on the stakeholder demo last Thursday

**Open action items:**
| Item | Owner | Status |
|---|---|---|
| Deliver WCAG 2.1 audit report to compliance team | Beatrix | DONE — submitted Monday |
| Set up design system component library in Figma | Beatrix | IN PROGRESS (60% per her estimate) |
| Share competitive UX benchmarking deck | Manager | OVERDUE |

**Performance signals:**
- Patient-portal redesign shipped to production last Wednesday. User testing NPS: 74 (prior version: 61). Compliance team lead Obi Nakamura sent a Slack message to #design-team-wins: "The WCAG audit from Beatrix was the most thorough we've received from any team this year — massive lift for our Q4 compliance milestone."
- Beatrix's peer Soren Ehler → #design-team-wins (Friday): "Bea crushed the portal launch. The interaction patterns she introduced are already being referenced by the devs as the new standard."
- Thursday stakeholder demo: Beatrix presented to VP of Product and two clinical directors. Manager's notes: "She rushed through the accessibility section, skipped two slides, and when asked about the colour-contrast rationale she said she'd have to follow up. It was one rough moment in an otherwise solid 45-minute presentation."
- No other behavioral pattern in Slack threads regarding presentation or communication.

**Beatrix's agenda topic:** "Want to explore whether there's a path to a Staff Designer role — I've been reading the level guide and I think I might be closer than I realized."

=== CANDIDATE OUTPUT ===
<PASTE THE GENERATED RESPONSE HERE>
