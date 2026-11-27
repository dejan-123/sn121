"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuiteSpecSchema = void 0;
exports.parseSuite = parseSuite;
const js_yaml_1 = __importDefault(require("js-yaml"));
const zod_1 = require("zod");
// Suite schema mirrors the keys used by today's suite_sbc8.yaml so existing
// suites can be ingested unchanged. Provider-specific fields stay open via
// passthrough to avoid breaking forward-compat.
const TargetSchema = zod_1.z.object({
    // Accept whatever kind a production suite declares ("letta_agent",
    // "agent", "skill_harness", anything else) and ignore it. The runtime
    // uses a hardcoded harness — see src/eval/agent/harness.ts.
    kind: zod_1.z.string().default("skill_harness"),
    // agent_file is similarly ignored — the harness has no agent file.
    // Optional so production suites referencing `base_agent.af` still
    // parse, AND so future skill-only suites can omit it entirely.
    agent_file: zod_1.z.string().optional(),
    base_url: zod_1.z.string().optional(),
});
const ExtractorConfigSchema = zod_1.z.record(zod_1.z.unknown()).optional();
const GraderBaseSchema = zod_1.z.object({
    display_name: zod_1.z.string().optional(),
    weight: zod_1.z.number().default(1.0),
    extractor: zod_1.z.string().optional(),
    extractor_config: ExtractorConfigSchema,
});
// `rubric_grader` is the canonical name going forward; `model_judge` stays
// accepted as an alias for back-compat with nestapi-generated production
// suites. The aliasing happens via a YAML pre-processing step in
// parseSuite() — we can't put `z.union([...]).transform(...)` here because
// `z.discriminatedUnion("kind", ...)` requires a literal discriminator on
// each branch (it errors at module load: "could not extract discriminator").
const ModelJudgeSchema = GraderBaseSchema.extend({
    kind: zod_1.z.literal("model_judge"),
    prompt_path: zod_1.z.string(),
    model: zod_1.z.string(),
    provider: zod_1.z.enum(["openai", "anthropic", "google", "openrouter", "together", "chutes"]).default("openai"),
    temperature: zod_1.z.number().default(0.0),
    max_retries: zod_1.z.number().default(3),
    timeout: zod_1.z.number().default(120),
    rubric_vars: zod_1.z.array(zod_1.z.string()).default([]),
});
const ToolGraderSchema = GraderBaseSchema.extend({
    kind: zod_1.z.literal("tool"),
    // Reference to a built-in tool grader by name. We deliberately do NOT
    // accept arbitrary "file.py:fn" paths in v1 — the registry is the
    // contract.
    function: zod_1.z.string(),
    // Optional judge override for tool graders that call an LLM judge — the
    // WEIGHTED quality graders (`skill_use`, `scenario_quality`). Baked in the
    // suite exactly like the rubric grader's `model`, and DISCLOSED to miners
    // on purpose: these are quality graders, not anti-gaming gates. When unset,
    // the grader falls back to the server-side `SKILL_USE_JUDGE_*` env (see
    // resolveToolJudge). The weight-0 anti-gaming pre-gates (`dataset_derived`,
    // `skill_alignment`) deliberately DON'T read this — their judge stays hidden
    // in env so miners can't tune against it.
    model: zod_1.z.string().optional(),
    provider: zod_1.z.enum(["openai", "anthropic", "google", "openrouter", "together", "chutes"]).optional(),
});
const GraderSchema = zod_1.z.discriminatedUnion("kind", [ModelJudgeSchema, ToolGraderSchema]);
// `kind` on SimpleGate is OPTIONAL because production suites omit it on
// inner conditions of a logical gate. Real-world example
// (sundaebar_customer_email_skill_v9 suite.yaml):
//
//   gate:
//     kind: logical
//     operator: and
//     conditions:
//       - metric_key: blacklist        # ← no `kind` field
//         aggregation: avg_score
//         op: gte
//         value: 1.0
//
// LogicalGate's discriminator (`kind: "logical"`) is required, so the
// union below tries LogicalGate first and only falls through to
// SimpleGate when the inner conditions lack `operator`/`conditions`.
//
// aggregation/op defaults are applied at evaluation time (in gate.ts) —
// see comment there.
const SimpleGateSchema = zod_1.z.object({
    kind: zod_1.z.literal("simple").optional(),
    metric_key: zod_1.z.string(),
    aggregation: zod_1.z.enum(["avg_score", "min", "max", "sum"]).optional(),
    op: zod_1.z.enum(["gte", "gt", "lte", "lt", "eq"]).optional(),
    value: zod_1.z.number(),
});
const LogicalGateSchema = zod_1.z.lazy(() => zod_1.z.object({
    kind: zod_1.z.literal("logical"),
    operator: zod_1.z.enum(["and", "or"]),
    // LogicalGate first in the union — its `kind: "logical"` is required,
    // so anything without that falls through to SimpleGate.
    conditions: zod_1.z.array(zod_1.z.union([LogicalGateSchema, SimpleGateSchema])),
}));
const GateSchema = zod_1.z.union([
    LogicalGateSchema,
    SimpleGateSchema,
]);
exports.SuiteSpecSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    dataset: zod_1.z.string(),
    max_samples: zod_1.z.number().int().positive().optional(),
    target: TargetSchema,
    graders: zod_1.z.record(GraderSchema),
    gate: GateSchema.optional(),
});
// Walk the parsed YAML and rewrite `kind: rubric_grader` → `kind: model_judge`
// on grader entries before Zod validation. Lets suite authors use the
// clearer `rubric_grader` name without needing the schema to bend.
function normalizeAliases(raw) {
    if (!raw || typeof raw !== "object")
        return raw;
    const obj = raw;
    const graders = obj.graders;
    if (graders && typeof graders === "object") {
        for (const v of Object.values(graders)) {
            if (v && typeof v === "object" && v.kind === "rubric_grader") {
                v.kind = "model_judge";
            }
        }
    }
    return obj;
}
function parseSuite(yamlText) {
    const raw = normalizeAliases(js_yaml_1.default.load(yamlText));
    const result = exports.SuiteSpecSchema.safeParse(raw);
    if (!result.success) {
        throw new Error(`Invalid suite.yaml: ${result.error.message}`);
    }
    return result.data;
}
//# sourceMappingURL=suite.js.map