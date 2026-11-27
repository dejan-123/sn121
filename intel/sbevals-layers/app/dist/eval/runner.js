"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEvaluation = runEvaluation;
exports.referencesRead = referencesRead;
exports.summarizeBundle = summarizeBundle;
exports.aggregateTokenUsage = aggregateTokenUsage;
exports.aggregateCost = aggregateCost;
exports.computeDisplayHiddenGrades = computeDisplayHiddenGrades;
exports.stripDisplayHiddenGrades = stripDisplayHiddenGrades;
exports.downloadTaskFiles = downloadTaskFiles;
const node_fs_1 = require("node:fs");
const monitoring_1 = require("../monitoring");
const fetch_1 = require("../files/fetch");
const harness_1 = require("./agent/harness");
const factory_1 = require("./agent/providers/factory");
const runtime_1 = require("./agent/runtime");
const budget_1 = require("./budget");
const dataset_1 = require("./dataset");
const gate_1 = require("./gate");
const model_judge_1 = require("./graders/model-judge");
const registry_1 = require("./graders/registry");
const suite_1 = require("./suite");
const load_skill_1 = require("./tools/load-skill");
const read_reference_1 = require("./tools/read-reference");
const skill_bundle_1 = require("./skill-bundle");
const tool_judge_1 = require("./graders/tool-judge");
const registry_2 = require("./tools/registry");
const registry_3 = require("./extractors/registry");
const builtin_1 = require("./extractors/builtin");
async function runEvaluation(input) {
    const start = Date.now();
    const { jobId, payload, cfg, logger } = input;
    const maxSteps = input.options?.max_steps ?? cfg.maxSteps;
    // 1. Fetch task files into the job's work directory.
    const files = await downloadTaskFiles(jobId, payload, cfg, logger);
    // 2. Parse suite + dataset + agent.
    const suite = (0, suite_1.parseSuite)(await node_fs_1.promises.readFile(files["suite.yaml"], "utf8"));
    const datasetPath = files["dataset.jsonl"] ?? files[suite.dataset];
    if (!datasetPath) {
        throw new Error(`dataset file not found in payload (suite expects "${suite.dataset}")`);
    }
    const datasetText = await node_fs_1.promises.readFile(datasetPath, "utf8");
    const dataset = (0, dataset_1.loadDataset)(datasetText, datasetPath.endsWith(".csv") ? "csv" : "jsonl");
    const samples = suite.max_samples ? dataset.slice(0, suite.max_samples) : dataset;
    // The "agent" is now a fixed harness configured via SKILL_HARNESS_*
    // env vars. The harness has only the load_skill tool. Per-task agent
    // files (Letta .af or our agent.json) are accepted-but-ignored for
    // backwards compat with existing suite shapes — see suite.ts:TargetSchema.
    // The skill being graded comes via files["SKILL.md"], not the agent file.
    if (!files["SKILL.md"]) {
        throw new Error("skill_file_path is required — this service only evaluates skill-type submissions. " +
            "task_payload must include skill_file_path pointing at a SKILL.md file.");
    }
    const agent = (0, harness_1.buildHarnessAgent)(cfg);
    // 3. Set up registries.
    const tools = new registry_2.ToolRegistry();
    tools.register(load_skill_1.loadSkillTool);
    const skillContent = await node_fs_1.promises.readFile(files["SKILL.md"], "utf8");
    // Skill bundle: reference files the agent can pull on demand. With none,
    // the harness keeps exactly its single-file shape (one tool, same output).
    const references = (0, skill_bundle_1.loadReferences)(files);
    const skillReferences = Object.fromEntries(references.map((r) => [r.path, r.content]));
    const toolCtx = { skillContent, skillReferences };
    if (references.length > 0) {
        tools.register(read_reference_1.readReferenceTool);
        agent.tools.push(read_reference_1.readReferenceTool.schema.name);
    }
    const withBundle = (result) => {
        if (references.length > 0)
            result.summary.skill_bundle = summarizeBundle(references, result.results);
        return result;
    };
    const extractors = new registry_3.ExtractorRegistry();
    (0, builtin_1.registerBuiltinExtractors)(extractors);
    const toolGraders = new registry_1.ToolGraderRegistry();
    (0, registry_1.registerBuiltinToolGraders)(toolGraders);
    (0, registry_1.registerSkillToolGraders)(toolGraders, { cfg, logger });
    const provider = (0, factory_1.makeProvider)(agent.provider, cfg);
    // 4. Compute the token budget. This caps the cumulative provider tokens
    // across the run; samples that push over get prorated, samples after
    // exhaustion are short-circuited with a zero score.
    const budget = (0, budget_1.computeBudget)({
        ...cfg,
        maxTokensPerEval: input.options?.max_tokens_per_eval ?? cfg.maxTokensPerEval,
    }, samples.length);
    logger.info({
        jobId,
        mode: budget.mode,
        maxTokensPerEval: budget.maxTokensPerEval,
        tokensPerTestCase: budget.tokensPerTestCase,
        totalSamples: samples.length,
        cappedByAbsoluteMax: budget.cappedByAbsoluteMax,
    }, "token budget computed");
    // Graders that are inert in skill-only mode (agent-file no-ops). Computed
    // once; stripped from the output grades_by_key at each return point so the
    // per-grader breakdown only carries real skill signal. Metrics + gate are
    // unaffected (they run against the full grades_by_key).
    const displayHiddenGrades = computeDisplayHiddenGrades(suite);
    // 5. Pre-flight gate. Run pre-phase tool graders ONCE before the sample
    // loop. If the suite's gate is already provably failing on those metrics,
    // return early with zero scores — saves N agent runs + N per-sample
    // judge calls when a submission is clearly going to fail anyway.
    //
    // Pre-phase graders are tagged in graders/registry.ts. The list is small
    // and conservative — only graders that don't read ctx.sample.* or
    // ctx.trajectory qualify. They get re-run inside the per-sample loop
    // below; grader-internal caching keeps that ~free (notably for
    // dataset_derived_knowledge, which memoizes its judge result per skill).
    const preFlightVerdict = await runPreFlightGate({
        suite,
        samples,
        files,
        toolGraders,
        extractors,
        logger,
        jobId,
        agent,
    });
    if (preFlightVerdict.bail) {
        const duration_seconds = (Date.now() - start) / 1000;
        const bailed = preFlightVerdict.result(duration_seconds, budget.maxTokensPerEval);
        stripDisplayHiddenGrades(bailed.results, displayHiddenGrades);
        return withBundle(bailed);
    }
    // 6. Iterate samples sequentially. (Concurrency at the eval-job level
    // happens in the worker pool; per-sample concurrency could be added
    // later but isn't needed for v1 given typical dataset sizes.)
    const results = [];
    let cumulativeTokens = 0;
    let proratedCount = 0;
    let zeroedCount = 0;
    for (let i = 0; i < samples.length; i++) {
        const sample = samples[i];
        // Short-circuit: if the budget is already exhausted, skip the provider
        // call entirely and record a zero-scored result. This is the only
        // behavioral divergence from the current validator (which pays for
        // those samples, then zeroes them after the fact). We end up at the
        // same submitted result either way.
        if (cumulativeTokens >= budget.maxTokensPerEval) {
            logger.info({ jobId, sampleId: sample.id, idx: i + 1 }, "skipping sample — token budget exhausted");
            const zero = buildZeroSkippedResult(sample.id, suite.graders);
            results.push(zero);
            zeroedCount++;
            input.onProgress?.(results.length, samples.length);
            continue;
        }
        logger.info({ jobId, sampleId: sample.id, idx: i + 1, total: samples.length }, "running sample");
        const trajectory = await (0, runtime_1.runAgent)({
            agent,
            provider,
            tools,
            toolCtx,
            sample,
            maxSteps,
            logger,
        });
        const gradesByKey = {};
        let weightSum = 0;
        let weightedScore = 0;
        for (const [key, spec] of Object.entries(suite.graders)) {
            // resolveExtractorName aliases the production-suite Python refs
            // (e.g. "skill_evaluation.py:skill_content_extractor") onto our
            // TS extractor names.
            const extractorName = (0, registry_3.resolveExtractorName)(spec.extractor ?? "last_assistant");
            const submission = extractors.get(extractorName)({
                sample,
                trajectory,
                config: spec.extractor_config,
                files,
            });
            let grade;
            try {
                if (spec.kind === "model_judge") {
                    const rubricPath = files[spec.prompt_path] ?? files["rubric.txt"];
                    if (!rubricPath) {
                        throw new Error(`model_judge rubric not found (expected "${spec.prompt_path}")`);
                    }
                    grade = await (0, model_judge_1.runModelJudge)({
                        spec,
                        sample,
                        submission,
                        rubricPath,
                        cfg,
                        logger,
                    });
                }
                else {
                    // resolveGraderName translates the production-suite Python refs
                    // (e.g. "skill_evaluation.py:check_skill_integrity") into the
                    // names registered in our TS registry.
                    const fn = toolGraders.get((0, registry_1.resolveGraderName)(spec.function));
                    const gctx = { sample, trajectory, submission, spec, files };
                    grade = await fn(gctx);
                }
            }
            catch (err) {
                logger.error({ err, jobId, sampleId: sample.id, key }, "grader threw");
                // Grader failures score 0 and the job still completes — without this
                // capture a judge-provider outage is invisible from the outside.
                (0, monitoring_1.captureError)(err, { source: "grader", phase: "sample", job_id: jobId, grader: key });
                grade = { score: 0, rationale: `Grader error: ${err.message}` };
            }
            gradesByKey[key] = grade;
            if (spec.weight > 0) {
                weightedScore += grade.score * spec.weight;
                weightSum += spec.weight;
            }
        }
        const finalWeighted = weightSum > 0 ? weightedScore / weightSum : 0;
        const aggregateGrade = {
            score: finalWeighted,
            rationale: Object.entries(gradesByKey)
                .map(([k, g]) => `${k}=${g.score.toFixed(3)}: ${g.rationale}`)
                .join(" | "),
        };
        const sampleResult = {
            id: sample.id,
            sample_id: sample.id,
            result: {
                weighted_score: finalWeighted,
                grade: aggregateGrade,
                grades_by_key: gradesByKey,
                performance: {
                    total_tokens: trajectory.total_tokens,
                    truncated: trajectory.finish_reason === "max_tokens",
                    ...(references.length > 0
                        ? { references_read: referencesRead(trajectory, skillReferences) }
                        : {}),
                },
                gate_passed: true,
            },
            trajectory,
        };
        sampleResult.result.gate_passed = (0, gate_1.evaluatePerSampleGate)(suite.gate, sampleResult);
        const budgeted = (0, budget_1.applyBudgetToSample)({
            result: sampleResult,
            cumulativeBefore: cumulativeTokens,
            budget,
            graderSpecs: suite.graders,
        });
        if (budgeted.status === "prorated") {
            proratedCount++;
            logger.warn({
                jobId,
                sampleId: sample.id,
                sampleTokens: trajectory.total_tokens,
                tokensCharged: budgeted.tokensCharged,
                maxTokensPerEval: budget.maxTokensPerEval,
            }, "sample prorated — pushed cumulative tokens over budget");
        }
        else if (budgeted.status === "zeroed") {
            zeroedCount++;
        }
        cumulativeTokens += budgeted.tokensCharged;
        results.push(budgeted.result);
        input.onProgress?.(results.length, samples.length);
    }
    // 6. Aggregate metrics for the suite.
    const metrics = aggregateMetrics(results, suite);
    metrics["max_tokens_per_eval"] = budget.maxTokensPerEval;
    metrics["tokens_used"] = cumulativeTokens;
    metrics["samples_prorated"] = proratedCount;
    metrics["samples_zeroed"] = zeroedCount;
    const duration_seconds = (Date.now() - start) / 1000;
    const overallPassed = (0, gate_1.evaluateGate)(suite.gate, results);
    metrics["overall_gate_passed"] = overallPassed ? 1 : 0;
    // Gate-blocked submissions score 0. Validators and miners should not
    // receive a positive score for a submission that failed anti-gaming gates.
    // sb-validator/task-processor.ts:527-555 averages per-sample weighted_score,
    // so zeroing only the aggregate metric leaves the leak open — zero both.
    if (!overallPassed) {
        metrics["avg_score_total"] = 0;
        for (const r of results) {
            r.result.weighted_score = 0;
            r.result.grade.score = 0;
        }
    }
    stripDisplayHiddenGrades(results, displayHiddenGrades);
    // Build the per-grader / per-kind token breakdown for cost attribution.
    const { tokens_by_grader, tokens_by_kind } = aggregateTokenUsage(results);
    const cost = aggregateCost(results, suite, toolGraders);
    return withBundle({
        summary: {
            metrics,
            tokens_by_grader,
            tokens_by_kind,
            cost_by_grader: cost.cost_by_grader,
            cost_by_kind: cost.cost_by_kind,
            cost_by_phase: cost.cost_by_phase,
            cost_total_usd: cost.cost_total_usd,
            cost_source: cost.cost_source,
            models: collectModels(suite, agent),
        },
        results,
        duration_seconds,
    });
}
// Distinct reference files the agent actually received on one sample. A call
// for a path that is not in the bundle returned an error string, not a file,
// so it does not count as a read.
function referencesRead(trajectory, skillReferences) {
    const seen = new Set();
    const out = [];
    for (const m of trajectory.messages) {
        if (m.kind !== "tool_call" || m.name !== read_reference_1.readReferenceTool.schema.name)
            continue;
        if (typeof m.arguments.path !== "string")
            continue;
        const key = (0, skill_bundle_1.normalizeReferencePath)(m.arguments.path);
        if (seen.has(key) || !Object.prototype.hasOwnProperty.call(skillReferences, key))
            continue;
        seen.add(key);
        out.push({ path: key, chars: skillReferences[key].length });
    }
    return out;
}
// Run-level bundle summary. `reference_reads` lists every file, including
// those read on zero samples — a file the eval never opened has no evidence
// behind it, which the publication review needs to see.
function summarizeBundle(references, results) {
    const reads = Object.fromEntries(references.map((r) => [r.path, 0]));
    for (const r of results) {
        for (const read of r.result.performance.references_read ?? []) {
            if (read.path in reads)
                reads[read.path]++;
        }
    }
    return {
        reference_files: references.length,
        reference_chars: references.reduce((acc, r) => acc + r.content.length, 0),
        reference_reads: reads,
    };
}
// Build a per-grader and per-kind token-usage summary by walking each sample's
// grades_by_key. Graders that didn't return usage (deterministic graders like
// blacklist, cross_sample_novelty, agent_design) contribute zeros and are
// excluded from tokens_by_grader entirely (no point listing them).
//
// Cached graders (dataset_derived_knowledge, skill_rubric_alignment) compute
// once and return the SAME GradeResult — and thus the same `usage` object —
// for every sample, even though the judge was only called once. The pre-flight
// bail path likewise copies one pre-grade into every sample. Deduping by usage
// object identity counts each real judge call once; per-sample graders build a
// fresh usage object per call, so they still accumulate across samples.
//
// The agent harness tokens (already in result.performance.total_tokens) are
// rolled into tokens_by_kind.agent.totalTokens but NOT broken down further —
// the agent doesn't expose input/output/cached split anywhere we capture today.
function aggregateTokenUsage(results) {
    const byGrader = {};
    const judgesTotal = {
        inputTokens: 0, outputTokens: 0, cachedTokens: 0, reasoningTokens: 0, totalTokens: 0,
    };
    const agentTotal = {
        inputTokens: 0, outputTokens: 0, cachedTokens: 0, reasoningTokens: 0, totalTokens: 0,
    };
    const countedUsage = new Set();
    for (const r of results) {
        agentTotal.totalTokens += r.result.performance.total_tokens;
        for (const [name, g] of Object.entries(r.result.grades_by_key)) {
            if (!g.usage || countedUsage.has(g.usage))
                continue;
            countedUsage.add(g.usage);
            const acc = byGrader[name] ?? {
                inputTokens: 0, outputTokens: 0, cachedTokens: 0, reasoningTokens: 0, totalTokens: 0,
            };
            acc.inputTokens += g.usage.inputTokens;
            acc.outputTokens += g.usage.outputTokens;
            acc.cachedTokens += g.usage.cachedTokens;
            acc.reasoningTokens += g.usage.reasoningTokens;
            acc.totalTokens += g.usage.totalTokens;
            byGrader[name] = acc;
            judgesTotal.inputTokens += g.usage.inputTokens;
            judgesTotal.outputTokens += g.usage.outputTokens;
            judgesTotal.cachedTokens += g.usage.cachedTokens;
            judgesTotal.reasoningTokens += g.usage.reasoningTokens;
            judgesTotal.totalTokens += g.usage.totalTokens;
        }
    }
    return { tokens_by_grader: byGrader, tokens_by_kind: { agent: agentTotal, judges: judgesTotal } };
}
function zeroCost() {
    return {
        inputTokens: 0, outputTokens: 0, cachedTokens: 0, reasoningTokens: 0,
        cacheCreationTokens: 0, totalTokens: 0, costUsd: 0, costSource: "computed",
    };
}
// USD cost attribution. Mirrors aggregateTokenUsage's identity-dedup (so a
// cached/once-run judge's cost counts once) and adds: per-phase rollup
// (pre_gate vs agent vs scoring — making blocked-vs-passed economics explicit,
// since a pre-gate-blocked run only has cost_by_phase.pre_gate > 0), and a
// measured/computed/mixed source flag. Cost rides on each grade's `usage`
// object (attached by the provider adapter); the agent's per-trajectory cost
// comes from trajectory.total_cost_usd.
function aggregateCost(results, suite, toolGraders) {
    const phaseOf = (key) => {
        const spec = suite.graders[key];
        if (spec && spec.kind === "tool") {
            try {
                return toolGraders.getPhase((0, registry_1.resolveGraderName)(spec.function)) === "pre"
                    ? "pre_gate"
                    : "scoring";
            }
            catch {
                return "scoring";
            }
        }
        return "scoring";
    };
    const byGrader = {};
    const judges = zeroCost();
    const agent = zeroCost();
    const phase = { pre_gate: 0, agent: 0, scoring: 0 };
    const sources = new Set();
    const counted = new Set();
    for (const r of results) {
        const aCost = r.trajectory?.total_cost_usd ?? 0;
        agent.totalTokens += r.result.performance.total_tokens;
        agent.costUsd += aCost;
        phase.agent += aCost;
        if (r.trajectory?.cost_source) {
            sources.add(r.trajectory.cost_source);
            if (r.trajectory.cost_source === "measured")
                agent.costSource = "measured";
        }
        for (const [name, g] of Object.entries(r.result.grades_by_key)) {
            const u = g.usage;
            if (!u || counted.has(u))
                continue;
            counted.add(u);
            const c = u.costUsd ?? 0;
            const acc = byGrader[name] ?? zeroCost();
            addUsage(acc, u);
            acc.costUsd += c;
            if (u.costSource)
                acc.costSource = u.costSource;
            byGrader[name] = acc;
            addUsage(judges, u);
            judges.costUsd += c;
            if (u.costSource) {
                sources.add(u.costSource);
                if (u.costSource === "measured")
                    judges.costSource = "measured";
            }
            phase[phaseOf(name)] += c;
        }
    }
    const cost_total_usd = agent.costUsd + judges.costUsd;
    const cost_source = sources.has("measured") && sources.has("computed")
        ? "mixed"
        : sources.has("measured")
            ? "measured"
            : "computed";
    return {
        cost_by_grader: byGrader,
        cost_by_kind: { agent, judges },
        cost_by_phase: phase,
        cost_total_usd,
        cost_source,
    };
}
function addUsage(acc, u) {
    acc.inputTokens += u.inputTokens;
    acc.outputTokens += u.outputTokens;
    acc.cachedTokens += u.cachedTokens;
    acc.reasoningTokens += u.reasoningTokens;
    acc.cacheCreationTokens = (acc.cacheCreationTokens ?? 0) + (u.cacheCreationTokens ?? 0);
    acc.totalTokens += u.totalTokens;
}
// Which models ran in which role, for per-model cost/quality attribution
// downstream. `agent` is the harness; `judges` is the distinct set of judge
// models (suite-baked model_judge specs + the SKILL_USE_JUDGE_* model the
// tool graders call).
function collectModels(suite, agent) {
    const judges = [];
    const seen = new Set();
    const add = (provider, model) => {
        if (!provider || !model)
            return;
        const key = `${provider}/${model}`;
        if (seen.has(key))
            return;
        seen.add(key);
        judges.push({ provider, model });
    };
    for (const spec of Object.values(suite.graders)) {
        if (spec.kind === "model_judge")
            add(spec.provider, spec.model);
        // Suite-baked quality-judge override on a tool grader (skill_use /
        // scenario_quality) — disclosed, same as a model_judge model.
        if (spec.kind === "tool" && spec.model) {
            const j = (0, tool_judge_1.resolveToolJudge)(spec);
            add(j.provider, j.model);
        }
    }
    add(process.env.SKILL_USE_JUDGE_PROVIDER || "openai", process.env.SKILL_USE_JUDGE_MODEL || "gpt-5.1");
    return { agent: { provider: agent.provider, model: agent.model }, judges };
}
// Pre-flight gate. Runs pre-phase tool graders once against a synthetic
// empty-trajectory context (samples[0] as the representative sample —
// pre-phase graders must not read ctx.sample.* or ctx.trajectory, that's
// the contract). If the resulting partial gate verdict is provably FALSE,
// returns a bail-out that the runner converts into an early return with
// zero scores. Otherwise returns { bail: false } and the runner proceeds
// with the normal per-sample loop.
async function runPreFlightGate(input) {
    const { suite, samples, files, toolGraders, extractors, logger, jobId, agent } = input;
    if (samples.length === 0)
        return { bail: false };
    const syntheticTrajectory = {
        messages: [],
        step_count: 0,
        total_tokens: 0,
        finish_reason: "end_turn",
    };
    const representative = samples[0];
    const preGrades = {};
    for (const [key, spec] of Object.entries(suite.graders)) {
        if (spec.kind !== "tool")
            continue;
        const graderName = (0, registry_1.resolveGraderName)(spec.function);
        let phase;
        try {
            phase = toolGraders.getPhase(graderName);
        }
        catch {
            // Unknown grader — the per-sample loop will throw with a useful
            // error; don't shadow it here.
            continue;
        }
        if (phase !== "pre")
            continue;
        const extractorName = (0, registry_3.resolveExtractorName)(spec.extractor ?? "last_assistant");
        const submission = extractors.get(extractorName)({
            sample: representative,
            trajectory: syntheticTrajectory,
            config: spec.extractor_config,
            files,
        });
        try {
            const fn = toolGraders.get(graderName);
            preGrades[key] = await fn({
                sample: representative,
                trajectory: syntheticTrajectory,
                submission,
                spec,
                files,
            });
        }
        catch (err) {
            logger.error({ err, jobId, key }, "pre-flight grader threw");
            (0, monitoring_1.captureError)(err, { source: "grader", phase: "pre", job_id: jobId, grader: key });
            preGrades[key] = { score: 0, rationale: `Pre-flight grader error: ${err.message}` };
        }
    }
    if (Object.keys(preGrades).length === 0)
        return { bail: false };
    const partialSample = {
        id: samples[0].id,
        sample_id: samples[0].id,
        result: {
            weighted_score: 0,
            grade: { score: 0, rationale: "" },
            grades_by_key: preGrades,
            performance: { total_tokens: 0 },
            gate_passed: false,
        },
    };
    const knownMetricKeys = new Set(Object.keys(preGrades));
    const verdict = (0, gate_1.evaluateGatePartial)(suite.gate, [partialSample], knownMetricKeys);
    logger.info({
        jobId,
        verdict,
        preGrades: Object.fromEntries(Object.entries(preGrades).map(([k, g]) => [k, Number(g.score.toFixed(5))])),
    }, "pre-flight gate evaluated");
    if (verdict !== false)
        return { bail: false };
    // Bail. Build a zero-everything result so the downstream submission
    // path (sb-validator processSkillTask) sees a consistent shape: all
    // samples present, all per-sample scores zero, overall_gate_passed=0.
    return {
        bail: true,
        result: (duration_seconds, maxTokensPerEval) => {
            const reason = "Pre-flight gate failed; per-sample eval skipped";
            const zeroResults = samples.map((s) => ({
                id: s.id,
                sample_id: s.id,
                result: {
                    weighted_score: 0,
                    grade: { score: 0, rationale: reason },
                    // Preserve the pre-phase grader scores in every sample's
                    // grades_by_key so the per-grader signal is still legible
                    // downstream (which gate fired, what the score was).
                    grades_by_key: Object.fromEntries(Object.entries(suite.graders).map(([k]) => [
                        k,
                        preGrades[k] ?? { score: 0, rationale: reason },
                    ])),
                    performance: { total_tokens: 0 },
                    gate_passed: false,
                },
            }));
            const metrics = {};
            metrics.avg_score_total = 0;
            for (const key of Object.keys(suite.graders)) {
                metrics[key] = preGrades[key]?.score ?? 0;
            }
            metrics.tests_count = samples.length;
            metrics.total_tokens = 0;
            metrics.max_tokens_per_eval = maxTokensPerEval;
            metrics.tokens_used = 0;
            metrics.samples_prorated = 0;
            metrics.samples_zeroed = samples.length;
            metrics.overall_gate_passed = 0;
            metrics.pre_gate_blocked = 1;
            // Pre-gate-blocked runs still spent tokens on the pre-phase graders
            // (skill_alignment, dataset_derived, etc.). Surface their per-grader
            // breakdown the same as the main return path so cost attribution
            // works whether the run gets through to per-sample evaluation or not.
            const { tokens_by_grader, tokens_by_kind } = aggregateTokenUsage(zeroResults);
            const cost = aggregateCost(zeroResults, suite, toolGraders);
            return {
                summary: {
                    metrics,
                    tokens_by_grader,
                    tokens_by_kind,
                    // Pre-gate-blocked: only the pre-phase gate judges ran, so all spend
                    // lands in cost_by_phase.pre_gate (agent + scoring stay 0). This is
                    // the measurable "blocked $/sub" floor.
                    cost_by_grader: cost.cost_by_grader,
                    cost_by_kind: cost.cost_by_kind,
                    cost_by_phase: cost.cost_by_phase,
                    cost_total_usd: cost.cost_total_usd,
                    cost_source: cost.cost_source,
                    models: collectModels(suite, agent),
                },
                results: zeroResults,
                duration_seconds,
            };
        },
    };
}
function buildZeroSkippedResult(sampleId, graderSpecs) {
    const reason = "Evaluation cancelled due to token limit exceeded";
    const gradesByKey = {};
    for (const key of Object.keys(graderSpecs)) {
        gradesByKey[key] = { score: 0, rationale: reason };
    }
    return {
        id: sampleId,
        sample_id: sampleId,
        result: {
            weighted_score: 0,
            grade: { score: 0, rationale: reason },
            grades_by_key: gradesByKey,
            performance: { total_tokens: 0 },
            gate_passed: false,
        },
    };
}
// Grader that's inert in skill-only mode — see graders/agent-file-noop.ts.
const NO_OP_GRADER = "agent_file_noop";
// Keys whose grader is an agent-file no-op: they score a constant 1.0 for
// every submission, so they're noise (and misleading) in the per-grader
// breakdown shown downstream. We drop them from the output grades_by_key
// only — they stay in summary.metrics, and gate + metric aggregation have
// already run against the full set by the time we strip.
function computeDisplayHiddenGrades(suite) {
    return new Set(Object.entries(suite.graders)
        .filter(([, spec]) => spec.kind === "tool" && (0, registry_1.resolveGraderName)(spec.function) === NO_OP_GRADER)
        .map(([key]) => key));
}
// Strip display-hidden keys from each sample's grades_by_key (in place).
function stripDisplayHiddenGrades(results, hiddenKeys) {
    if (hiddenKeys.size === 0)
        return;
    for (const r of results) {
        for (const key of hiddenKeys)
            delete r.result.grades_by_key[key];
    }
}
function aggregateMetrics(results, suite) {
    const metrics = {};
    if (results.length === 0) {
        metrics.avg_score_total = 0;
        return metrics;
    }
    metrics.avg_score_total =
        results.reduce((acc, r) => acc + r.result.weighted_score, 0) / results.length;
    for (const key of Object.keys(suite.graders)) {
        const scores = results
            .map((r) => r.result.grades_by_key[key]?.score)
            .filter((v) => typeof v === "number");
        if (scores.length > 0)
            metrics[key] = scores.reduce((a, b) => a + b, 0) / scores.length;
    }
    metrics.tests_count = results.length;
    metrics.total_tokens = results.reduce((acc, r) => acc + r.result.performance.total_tokens, 0);
    // How many samples had their agent generation cut at the token cap.
    // Downstream analyses use this to judge whether a score delta between
    // submissions is content or output-budget luck.
    metrics.samples_truncated = results.filter((r) => r.result.performance.truncated === true).length;
    return metrics;
}
// Exported for tests.
async function downloadTaskFiles(jobId, payload, cfg, logger) {
    const out = {};
    const fields = [
        { key: "suite", ref: payload.suite_file_path, defaultName: "suite.yaml" },
        { key: "dataset", ref: payload.dataset_file_path, defaultName: "dataset.jsonl" },
        { key: "rubric", ref: payload.rubric_file_path, defaultName: "rubric.txt" },
        {
            key: "skill",
            ref: payload.skill_file_path,
            backup: payload.skill_backup_file_path,
            defaultName: "SKILL.md",
        },
        {
            key: "agent",
            ref: payload.agent_file_path,
            backup: payload.agent_backup_file_path,
            defaultName: "agent.json",
        },
    ];
    for (const f of fields) {
        if (!f.ref)
            continue;
        let fetched;
        try {
            fetched = await (0, fetch_1.fetchFile)(f.ref, { githubToken: cfg.githubToken });
        }
        catch (err) {
            if (f.backup) {
                logger.warn({ err, key: f.key }, "primary fetch failed, trying backup");
                fetched = await (0, fetch_1.fetchFile)(f.backup, { githubToken: cfg.githubToken });
            }
            else {
                throw err;
            }
        }
        const name = fetched.filename ?? f.defaultName;
        const persisted = await (0, fetch_1.persistFile)(cfg.workDir, jobId, name, fetched.content);
        out[name] = persisted;
        if (name !== f.defaultName)
            out[f.defaultName] = persisted;
    }
    // Skill bundle references. Fetched whole and validated against the bundle
    // caps before anything runs; persisted as one path → content map so the
    // tools, extractors and gates all read the same copy.
    const refSpecs = payload.skill_reference_files ?? [];
    if (refSpecs.length > 0) {
        const refs = [];
        for (const spec of refSpecs) {
            if (!spec || typeof spec.path !== "string" || typeof spec.url !== "string") {
                throw new Error("task_payload.skill_reference_files entries need { path, url }");
            }
            const fetched = await (0, fetch_1.fetchFile)(spec.url, { githubToken: cfg.githubToken });
            refs.push({ path: (0, skill_bundle_1.normalizeReferencePath)(spec.path), content: fetched.content.toString("utf8") });
        }
        (0, skill_bundle_1.validateReferences)(refs);
        out[skill_bundle_1.REFERENCES_FILE] = await (0, fetch_1.persistFile)(cfg.workDir, jobId, skill_bundle_1.REFERENCES_FILE, Buffer.from(JSON.stringify(Object.fromEntries(refs.map((r) => [r.path, r.content]))), "utf8"));
    }
    if (!out["suite.yaml"])
        throw new Error("task_payload.suite_file_path is required");
    // skill_file_path is the only mandatory agent-shaped input now — see
    // the harness wiring in runEvaluation. agent_file_path is downloaded
    // when present (back-compat with nestapi task_payload shapes) but
    // ignored at runtime.
    if (!out["SKILL.md"])
        throw new Error("task_payload.skill_file_path is required");
    return out;
}
//# sourceMappingURL=runner.js.map