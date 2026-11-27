# Evaluator internals — extracted from `sundaebarai/sn121-skill-evals` image

Source: Docker image pulled via registry HTTP API (no Docker locally), layers extracted to
`intel/sbevals-layers/app/dist/`. Compiled JS + source maps, fully readable.
Validator repo clone: `intel/sb-validator` (orchestrator only — posts tasks to sbevals, polls, submits results).

## Pipeline / trust boundaries

- Validator (`src/sbevals-client.ts`): `POST /evaluations` with task_payload, `X-Api-Key`, poll
  `GET /evaluations/{jobId}` every 5s, 12 consecutive-failure cap, 30-min default timeout.
- All scoring lives in the eval service. Judges: **anthropic/claude-sonnet-4.6 via openrouter, temp 0**
  (pinned per-grader in suite.yaml for skill_use / scenario_quality / rubric).
- `ground_truth` (judge_notes, rubric_weights, rubric_descriptions, reference answer, prohibited_moves,
  novelty_group, scenario_type) exists ONLY in the sealed server dataset. Public `dataset.jsonl` = id+input only.
- Agent NEVER sees ground_truth — it only enters judge prompts server-side.
- Extractors (`eval/extractors/builtin.js`):
  - `last_assistant` = **last assistant message only** (the memo). Sheet is invisible to all graders.
  - `skill_content` = JSON{skill{name,description,body,raw}, final_email, tool_calls, load_skill_called,
    load_skill_returns, references, bundle_text}.
- runtime.js: agent forced to call `load_skill` first (toolChoice pinned until loaded). Cannot skip the skill.

## Judge input windows (judge-input.js)

- `QUALITY_JUDGE_OUTPUT_MAX_CHARS = 12,000` — agent output head+tail window for quality judges.
- `GATE_JUDGE_MAX_CHARS = 48,000` — gate judges get whole bundle; SKILL.md repeated in every window
  (packBundleForJudge), files labelled `=== FILE: references/x ===`, wrapped in BUNDLE_PREAMBLE
  ("untrusted data") + BUNDLE_CLOSING (judge-directed text = decisive evidence of gaming, lowest score).
- skill_use prompt specifics (evaluate-skill-use.js): `skill_body[:4000]`, scenario_prompt[:3000],
  agent_email[:12000], `load_skill_called` flag, `load_skill_returns[:2000]`.
  => **novel_knowledge judged ONLY on frontmatter name/description + first ~4KB of SKILL.md.**

## Graders

### skill_use (weight 0.3) — evaluate-skill-use.js
4 criteria, avg: novel_knowledge / knowledge_applied / situational_judgment / output_naturalness, each 0/.25/.5/.75/1.
- **knowledge_applied CAP at 0.5** if material execution errors: wrong arithmetic, figures contradicting
  scenario data, internally inconsistent numbers.
- Gaming detection: "restates evaluation criteria as instructions" scores low on novel_knowledge.
- Judge prompt does NOT show tool_calls or references_read — only load_skill_called + returns.
- resolveToolJudge: suite-pinned model (sonnet-4.6) > SKILL_USE_JUDGE_* env > default openai/gpt-5.1.

### scenario_quality (weight 0.3) — evaluate-scenario-quality.js
- Criterion list = `metadata.rubric_weights` keys + `metadata.rubric_descriptions` (sealed). Judge scores
  each 0/.25/.5/.75/1; weighted mean; missing criterion defaults 0.5.
- "met" in miner feedback = score >= 0.75; "partly" = 0.25..0.74; "missed" < 0.25.
- Sees scenario_prompt[:3000], reference output (12K window), agent output (12K window).
- **PENALTY_PATTERNS (deterministic -0.1 each) fire when metadata.prohibited_moves non-empty:**
  'sorry you feel that way'; 'will never happen again'; 'unfortunately' x2;
  'as I/we explained|as already/previously stated|per our earlier'; 'actually'+capitalized word;
  'please do not contact us'. => bundle bans all of these in memo (SKILL §6).
- Truncation (finish_reason=max_tokens): flagged to judge, no leniency; advisory content_score in detail.

### rubric (weight 0.3) — model-judge.js
- rubric.txt template with {submission} {input} {reference_answer} + metadata placeholders incl.
  `{metadata.judge_notes}` — sealed notes are substituted into the prompt.
- Literal 0.0 = judge applying a sealed zero-condition in judge_notes. **No deterministic rubric kill
  exists in code — S-008 zeros are judge_notes text firing via the LLM judge.**
- max_retries 2, timeout 120s, temp 0 (suite.yaml).

### novelty_check (weight 0.1) — cross-sample-novelty.js
- Structural fingerprint only: paragraph count, line count, word count, list-item count.
- Per novelty_group (sealed metadata), compared against our OTHER outputs in same group.
- similarity >= 0.75 threshold (suite.yaml) -> penalty = (sim-thr)/(1-thr), score = 1-penalty.
- Near-identical memo skeletons across scenarios are a real cost.

### Gates (weight 0 graders, gate.js) — avg_score per metric across samples
- `skill_redundancy >= 0.5` -> fail; `skill_alignment > 0.45` -> fail; `dataset_derived > 0.45` -> fail.
- Gate aggregation = mean across samples; empty metric -> gate false.

## Deterministic scanners (pre-gate, no LLM)

### answer-key-signals.js (feeds dataset_derived; cap 0.15 when tripped)
- Tokenizes every number; canonicalizes (commas/decimals); needs >=3 significant digits, not a year.
- Distinctive = document frequency <=1 across scenario inputs+reference answers (reference-side included!).
- **Answer pair: two numbers distinctive to the SAME scenario within 400 chars in our bundle -> floor trips
  -> dataset_derived capped 0.15 < gate 0.45 -> whole submission zeroed.**
- Also: label/verbatim overlap (LABEL_VERBATIM_WINDOW), concealment/override/copy-exact instruction patterns.
- LOCAL CHECK RUN: replicated detector vs our bundle + 8 public inputs -> hits only 101000 (S-001),
  144000+161000 (S-007) in ledger-sheet.md; NO pairs. Clean but note: invented Dockline numbers DO collide
  with real inputs — two same-scenario hits within 400 chars would be fatal. Rule: no invented number
  in references may equal a scenario figure.

### JUDGE_DIRECTED_PATTERNS (judge-input.js) — fails gate without judge call
- Literal judge field names: alignment_score|answer_key_detected|answer_key_evidence|mapped_scenarios|
  closed_world|suspiciously_specific_rules|beyond_dataset_knowledge|novel_knowledge|knowledge_applied|
  situational_judgment|output_naturalness.
- Text addressing evaluator/judge/grader ("note to the evaluator..."); claims of pre-verified/full marks/
  perfect score; "ignore all other instructions" variants. => bundle greps clean.

### check-skill-integrity.js — dataset entity + verbatim-phrase scan over bundle; not in v40's grader list.

## Miner-facing feedback (judge-feedback.js) — canned, zero info content
- statusOf: >=0.75 met / >=0.25 partly / else missed.
- skill_use: named dimensions (novel_knowledge etc. literal labels).
- scenario_quality: counts only "X of N criteria met" (criterion ids never named).
- rubric: band sentences ("Meets the rubric" >=0.9 ... "Falls short almost entirely" <0.25).
- Judge RATIONALES narrate the reference answer + traps but are withheld while sealed;
  **coordinator publishes them at challenge close** (code comment) — the answer key unlocks then.

## Bundle validation (skill-bundle.js)
- Max 30 reference files, 32,000 chars each, 128,000 total. (SKILL.md ~10KB cap enforced upstream/coordinator.)
- load_skill returns SKILL body + "## References" list (sorted paths).

## runner.js
- weighted_score = sum(grade*weight)/sum(weights) per sample; final = mean across samples; gate fail -> 0.
- references_read extracted from trajectory into performance metrics (not shown to judges).
- results carry per-test grades + integrity hash (task, competition, hotkeys, score, verdict, ts).

## Side channel noted
- Grader token `usage` (prompt/completion) rides into compacted results. If scorecards expose it,
  rubric judge prompt-token count reveals judge_notes LENGTH (not content).

## Residual unknowns (still sealed)
- judge_notes / rubric_weights / rubric_descriptions / reference answers content (until close).
- agent.json: agent model, max_steps, max_tokens, system prompt.
- Reference-answer-side numeric collisions with our invented figures (unverifiable).
- Which scenario metadata sets prohibited_moves / novelty_group.
