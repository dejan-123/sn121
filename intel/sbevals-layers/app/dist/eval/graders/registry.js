"use strict";
// Tool-grader registry. Each grader lives in its own file
// (`./<name>.ts`); this file just imports them, registers them by name,
// and provides the `kind: tool` ↔ TS-function lookup the runner uses.
//
// Layout convention is "one file per grader" — see docs/EXTENDING.md.
// To add a new grader, drop a file alongside this one and add one
// `reg.register("name", impl)` line in `registerBuiltinToolGraders` (or
// in `registerSkillToolGraders` if it needs cfg/logger).
Object.defineProperty(exports, "__esModule", { value: true });
exports.PYTHON_TO_TS_GRADER_ALIASES = exports.ToolGraderRegistry = void 0;
exports.resolveGraderName = resolveGraderName;
exports.registerBuiltinToolGraders = registerBuiltinToolGraders;
exports.registerSkillToolGraders = registerSkillToolGraders;
const agent_file_noop_1 = require("./agent-file-noop");
const blacklist_substrings_1 = require("./blacklist-substrings");
const check_skill_integrity_1 = require("./check-skill-integrity");
const cross_sample_novelty_1 = require("./cross-sample-novelty");
const dataset_derived_knowledge_1 = require("./dataset-derived-knowledge");
const evaluate_scenario_quality_1 = require("./evaluate-scenario-quality");
const evaluate_skill_use_1 = require("./evaluate-skill-use");
const noop_1 = require("./noop");
const require_load_skill_1 = require("./require-load-skill");
const skill_redundancy_1 = require("./skill-redundancy");
const skill_rubric_alignment_1 = require("./skill-rubric-alignment");
// Registry — name → impl. Per-suite custom graders are out of scope;
// this is the contract for what `function: <name>` in suite.yaml can
// resolve to.
class ToolGraderRegistry {
    graders = new Map();
    register(name, fn, phase = "per_sample") {
        this.graders.set(name, { fn, phase });
    }
    get(name) {
        return this.getRegistration(name).fn;
    }
    getPhase(name) {
        return this.getRegistration(name).phase;
    }
    getRegistration(name) {
        const reg = this.graders.get(name);
        if (!reg) {
            throw new Error(`Unknown tool grader: "${name}". Registered: ${[...this.graders.keys()].join(", ") || "(none)"}`);
        }
        return reg;
    }
}
exports.ToolGraderRegistry = ToolGraderRegistry;
// We accept the production-suite `function: <file>.py:<fn>` references and
// resolve them to TS implementations. Suites are sourced from challenge
// authors; we don't get to rewrite them, so this maps the names that
// actually appear in nestapi-built suites to our ports.
exports.PYTHON_TO_TS_GRADER_ALIASES = {
    "skill_evaluation.py:check_skill_integrity": "check_skill_integrity",
    "skill_evaluation.py:evaluate_skill_use": "evaluate_skill_use",
    "skill_evaluation.py:evaluate_scenario_quality": "evaluate_scenario_quality",
    // Agent-file graders are no-ops in skill-only mode — the agent file no
    // longer exists. Score 1.0 + a rationale so they don't drag scores down.
    "agent_design.py:check_blacklist": "agent_file_noop",
    "agent_design.py:evaluate_agent_design": "agent_file_noop",
};
// Resolve a suite-level grader function reference to a registry name,
// applying back-compat aliases. Suites can reference graders directly by
// name (e.g. "check_skill_integrity") OR by their old letta-evals
// `<file>.py:<fn>` form, which we map via PYTHON_TO_TS_GRADER_ALIASES.
function resolveGraderName(fnRef) {
    return exports.PYTHON_TO_TS_GRADER_ALIASES[fnRef] ?? fnRef;
}
// Built-in graders that don't need cfg/logger context. One line per
// grader; the implementations live in their own files.
function registerBuiltinToolGraders(reg) {
    // Pre-phase: no trajectory or per-sample input access — see audit in
    // each grader's source.
    reg.register("noop", noop_1.noop, "pre");
    reg.register("blacklist_substrings", blacklist_substrings_1.blacklistSubstrings, "pre");
    reg.register("agent_file_noop", agent_file_noop_1.agentFileNoop, "pre");
    reg.register("check_skill_integrity", check_skill_integrity_1.checkSkillIntegrity, "pre");
    reg.register("skill_redundancy", skill_redundancy_1.skillRedundancy, "pre");
    // Per-sample (default): reads ctx.trajectory.
    reg.register("require_load_skill", require_load_skill_1.requireLoadSkill);
}
// Graders that need a provider/logger context. Built via factory once at
// runtime startup; the registry call itself is the same shape.
//
// `EvaluateSkillUseDeps` and `EvaluateScenarioQualityDeps` are the same
// shape (cfg + logger), so this single deps argument works for both.
function registerSkillToolGraders(reg, deps) {
    // Per-sample: reads ctx.sample.input.
    reg.register("evaluate_skill_use", (0, evaluate_skill_use_1.makeEvaluateSkillUse)(deps));
    // Per-sample: reads ctx.sample.input and ctx.sample.ground_truth.
    reg.register("evaluate_scenario_quality", (0, evaluate_scenario_quality_1.makeEvaluateScenarioQuality)(deps));
    // Per-sample: accumulates state across samples.
    reg.register("cross_sample_novelty", (0, cross_sample_novelty_1.makeCrossSampleNovelty)(deps));
    // Pre-phase: technically reads ctx.sample.ground_truth, but only the
    // metadata.rubric_weights / rubric_descriptions fields, which describe
    // the rubric structure and are invariant across samples in a given
    // dataset. Result depends only on (skill_body, rubric_criteria) — both
    // suite-level. Has its own resultCache so the pre-flight + per-sample
    // invocations only pay for one LLM judge call per skill. See cache
    // invariant block in skill-rubric-alignment.ts.
    reg.register("skill_rubric_alignment", (0, skill_rubric_alignment_1.makeSkillRubricAlignment)(deps), "pre");
    // Pre-phase: judges SKILL.md against dataset.jsonl once per skill body.
    // The grader's internal resultCache makes re-invocation free, so pre-flight
    // and per-sample callers both hit the same cached judge result — see the
    // cache-guard comment in dataset-derived-knowledge.ts.
    reg.register("dataset_derived_knowledge", (0, dataset_derived_knowledge_1.makeDatasetDerivedKnowledge)(deps), "pre");
}
//# sourceMappingURL=registry.js.map