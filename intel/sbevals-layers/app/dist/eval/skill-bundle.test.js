"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const fs = __importStar(require("fs"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const skill_bundle_1 = require("./skill-bundle");
const load_skill_1 = require("./tools/load-skill");
const read_reference_1 = require("./tools/read-reference");
const builtin_1 = require("./extractors/builtin");
const registry_1 = require("./extractors/registry");
const runner_1 = require("./runner");
const check_skill_integrity_1 = require("./graders/check-skill-integrity");
const skill_redundancy_1 = require("./graders/skill-redundancy");
const runtime_1 = require("./agent/runtime");
const registry_2 = require("./tools/registry");
const ref = (p, content = "x") => ({ path: p, content });
(0, vitest_1.describe)("validateReferences", () => {
    (0, vitest_1.it)("accepts a bundle at the caps", () => {
        const refs = Array.from({ length: 4 }, (_, i) => ref(`f${i}.md`, "a".repeat(skill_bundle_1.MAX_REFERENCE_FILE_CHARS)));
        (0, vitest_1.expect)(() => (0, skill_bundle_1.validateReferences)(refs)).not.toThrow();
    });
    (0, vitest_1.it)("rejects more files than the cap", () => {
        const refs = Array.from({ length: skill_bundle_1.MAX_REFERENCE_FILES + 1 }, (_, i) => ref(`f${i}.md`));
        (0, vitest_1.expect)(() => (0, skill_bundle_1.validateReferences)(refs)).toThrow(/max 30/);
    });
    (0, vitest_1.it)("rejects a file over the per-file cap", () => {
        (0, vitest_1.expect)(() => (0, skill_bundle_1.validateReferences)([ref("big.md", "a".repeat(skill_bundle_1.MAX_REFERENCE_FILE_CHARS + 1))])).toThrow(/big\.md/);
    });
    (0, vitest_1.it)("rejects a bundle over the total cap", () => {
        const refs = Array.from({ length: 5 }, (_, i) => ref(`f${i}.md`, "a".repeat(skill_bundle_1.MAX_REFERENCE_FILE_CHARS)));
        (0, vitest_1.expect)(refs.reduce((n, r) => n + r.content.length, 0)).toBeGreaterThan(skill_bundle_1.MAX_REFERENCES_TOTAL_CHARS);
        (0, vitest_1.expect)(() => (0, skill_bundle_1.validateReferences)(refs)).toThrow(/total/);
    });
    (0, vitest_1.it)("rejects traversal, absolute, hidden and odd-character paths", () => {
        for (const p of ["../x.md", "/etc/passwd", ".hidden.md", "a/../b.md", "Caps.md", "has space.md", "a//b.md", ""]) {
            (0, vitest_1.expect)(() => (0, skill_bundle_1.validateReferences)([ref(p)]), p).toThrow(/invalid path/);
        }
    });
    (0, vitest_1.it)("rejects a duplicated path", () => {
        (0, vitest_1.expect)(() => (0, skill_bundle_1.validateReferences)([ref("a.md"), ref("a.md")])).toThrow(/duplicated/);
    });
});
(0, vitest_1.describe)("normalizeReferencePath", () => {
    (0, vitest_1.it)("strips the references/ prefix the agent is shown", () => {
        (0, vitest_1.expect)((0, skill_bundle_1.normalizeReferencePath)("references/cases/a.md")).toBe("cases/a.md");
        (0, vitest_1.expect)((0, skill_bundle_1.normalizeReferencePath)("./references/a.md")).toBe("a.md");
        (0, vitest_1.expect)((0, skill_bundle_1.normalizeReferencePath)(" a.md ")).toBe("a.md");
    });
});
(0, vitest_1.describe)("formatSkillActivation / bundleText", () => {
    (0, vitest_1.it)("leave a single-file skill byte-identical", () => {
        const body = "---\nname: x\n---\n# Skill\nDo the thing.\n";
        (0, vitest_1.expect)((0, skill_bundle_1.formatSkillActivation)(body, [])).toBe(body);
        (0, vitest_1.expect)((0, skill_bundle_1.bundleText)(body, [])).toBe(body);
    });
    (0, vitest_1.it)("list references the way Mastra's skill activation does", () => {
        (0, vitest_1.expect)((0, skill_bundle_1.formatSkillActivation)("BODY", [ref("a.md"), ref("cases/b.md")])).toBe("BODY\n\n## References\n- references/a.md\n- references/cases/b.md");
    });
    (0, vitest_1.it)("puts every reference into the canonical text under a path header", () => {
        const text = (0, skill_bundle_1.bundleText)("SKILL", [ref("a.md", "ALPHA"), ref("b.md", "BETA")]);
        (0, vitest_1.expect)(text).toBe("SKILL\n\n--- references/a.md ---\nALPHA\n\n--- references/b.md ---\nBETA");
    });
});
(0, vitest_1.describe)("harness tools", () => {
    (0, vitest_1.it)("load_skill returns the body unchanged when there are no references", async () => {
        const body = "# Skill\nBody.";
        (0, vitest_1.expect)(await load_skill_1.loadSkillTool.call({}, { skillContent: body })).toBe(body);
        (0, vitest_1.expect)(await load_skill_1.loadSkillTool.call({}, { skillContent: body, skillReferences: {} })).toBe(body);
    });
    (0, vitest_1.it)("load_skill lists references sorted by path", async () => {
        const out = await load_skill_1.loadSkillTool.call({}, { skillContent: "B", skillReferences: { "z.md": "1", "a.md": "2" } });
        (0, vitest_1.expect)(out).toBe("B\n\n## References\n- references/a.md\n- references/z.md");
    });
    const ctx = { skillContent: "B", skillReferences: { "a.md": "ALPHA", "cases/b.md": "BETA" } };
    (0, vitest_1.it)("read_reference returns a file by either path form", async () => {
        (0, vitest_1.expect)(await read_reference_1.readReferenceTool.call({ path: "references/a.md" }, ctx)).toBe("ALPHA");
        (0, vitest_1.expect)(await read_reference_1.readReferenceTool.call({ path: "cases/b.md" }, ctx)).toBe("BETA");
    });
    (0, vitest_1.it)("read_reference names the available files on an unknown or missing path", async () => {
        const miss = await read_reference_1.readReferenceTool.call({ path: "references/nope.md" }, ctx);
        (0, vitest_1.expect)(miss).toContain('No file "references/nope.md"');
        (0, vitest_1.expect)(miss).toContain("references/a.md, references/cases/b.md");
        (0, vitest_1.expect)(await read_reference_1.readReferenceTool.call({}, ctx)).toContain("Available files");
    });
    (0, vitest_1.it)("read_reference does not resolve prototype members", async () => {
        (0, vitest_1.expect)(await read_reference_1.readReferenceTool.call({ path: "constructor" }, ctx)).toContain("No file");
        (0, vitest_1.expect)(await read_reference_1.readReferenceTool.call({ path: "__proto__" }, ctx)).toContain("No file");
    });
});
(0, vitest_1.describe)("skill_content extractor", () => {
    const extract = (files) => {
        const reg = new registry_1.ExtractorRegistry();
        (0, builtin_1.registerBuiltinExtractors)(reg);
        const trajectory = { messages: [], step_count: 0, total_tokens: 0, finish_reason: "end_turn" };
        return JSON.parse(reg.get("skill_content")({ sample: { id: "s", input: "x" }, trajectory, files }));
    };
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "bundle-extract-"));
    const skillPath = path.join(dir, "SKILL.md");
    fs.writeFileSync(skillPath, "---\nname: n\n---\nBODY");
    (0, vitest_1.it)("adds no bundle keys for a single-file submission", () => {
        const payload = extract({ "SKILL.md": skillPath });
        (0, vitest_1.expect)(Object.keys(payload).sort()).toEqual(["final_email", "load_skill_called", "load_skill_returns", "skill", "tool_calls"]);
    });
    (0, vitest_1.it)("carries references and the canonical bundle text for a bundle", () => {
        const refsPath = path.join(dir, skill_bundle_1.REFERENCES_FILE);
        fs.writeFileSync(refsPath, JSON.stringify({ "z.md": "ZED", "a.md": "ALPHA" }));
        const files = { "SKILL.md": skillPath, [skill_bundle_1.REFERENCES_FILE]: refsPath };
        (0, vitest_1.expect)((0, skill_bundle_1.loadReferences)(files).map((r) => r.path)).toEqual(["a.md", "z.md"]);
        const payload = extract(files);
        (0, vitest_1.expect)(payload.references).toEqual([
            { path: "a.md", content: "ALPHA" },
            { path: "z.md", content: "ZED" },
        ]);
        (0, vitest_1.expect)(payload.bundle_text).toBe("---\nname: n\n---\nBODY\n\n--- references/a.md ---\nALPHA\n\n--- references/z.md ---\nZED");
        (0, vitest_1.expect)(payload.skill.body).toBe("BODY");
    });
});
(0, vitest_1.describe)("reference read accounting", () => {
    const refs = { "a.md": "ALPHA", "b.md": "BETA!" };
    const call = (p) => ({ kind: "tool_call", id: "1", name: "read_reference", arguments: { path: p } });
    const traj = (...paths) => ({
        messages: paths.map(call),
        step_count: 1,
        total_tokens: 0,
        finish_reason: "end_turn",
    });
    (0, vitest_1.it)("counts each file once and ignores misses", () => {
        (0, vitest_1.expect)((0, runner_1.referencesRead)(traj("references/a.md", "a.md", "nope.md", 7, "b.md"), refs)).toEqual([
            { path: "a.md", chars: 5 },
            { path: "b.md", chars: 5 },
        ]);
    });
    (0, vitest_1.it)("summarises reads per file, keeping files nobody read at zero", () => {
        const result = (read) => ({
            id: "s",
            result: {
                weighted_score: 0,
                grade: { score: 0, rationale: "" },
                grades_by_key: {},
                performance: { total_tokens: 0, references_read: read.map((p) => ({ path: p, chars: 5 })) },
                gate_passed: true,
            },
        });
        const summary = (0, runner_1.summarizeBundle)([ref("a.md", "ALPHA"), ref("b.md", "BETA!"), ref("never.md", "N")], [result(["a.md"]), result(["a.md", "b.md"]), result([])]);
        (0, vitest_1.expect)(summary).toEqual({
            reference_files: 3,
            reference_chars: 11,
            reference_reads: { "a.md": 2, "b.md": 1, "never.md": 0 },
        });
    });
});
(0, vitest_1.describe)("downloadTaskFiles with a bundle", () => {
    const dataUri = (text) => `data:text/plain;base64,${Buffer.from(text, "utf8").toString("base64")}`;
    const cfg = { workDir: fs.mkdtempSync(path.join(os.tmpdir(), "bundle-dl-")) };
    const logger = { warn: () => { }, info: () => { }, error: () => { } };
    const base = { suite_file_path: dataUri("dataset: dataset.jsonl\n"), skill_file_path: dataUri("# Skill\nBody") };
    (0, vitest_1.it)("adds nothing for a single-file task", async () => {
        const files = await (0, runner_1.downloadTaskFiles)("job-single", base, cfg, logger);
        (0, vitest_1.expect)(files[skill_bundle_1.REFERENCES_FILE]).toBeUndefined();
        (0, vitest_1.expect)((0, skill_bundle_1.loadReferences)(files)).toEqual([]);
    });
    (0, vitest_1.it)("fetches, normalises and persists references", async () => {
        const files = await (0, runner_1.downloadTaskFiles)("job-bundle", {
            ...base,
            skill_reference_files: [
                { path: "references/z.md", url: dataUri("ZED") },
                { path: "cases/a.md", url: dataUri("ALPHA é") },
            ],
        }, cfg, logger);
        (0, vitest_1.expect)((0, skill_bundle_1.loadReferences)(files)).toEqual([
            { path: "cases/a.md", content: "ALPHA é" },
            { path: "z.md", content: "ZED" },
        ]);
    });
    (0, vitest_1.it)("fails the job on a bundle that breaks the contract", async () => {
        const oversize = { path: "big.md", url: dataUri("a".repeat(skill_bundle_1.MAX_REFERENCE_FILE_CHARS + 1)) };
        await (0, vitest_1.expect)((0, runner_1.downloadTaskFiles)("job-big", { ...base, skill_reference_files: [oversize] }, cfg, logger)).rejects.toThrow(/big\.md is 32001 chars/);
        const traversal = { path: "../../etc/passwd", url: dataUri("x") };
        await (0, vitest_1.expect)((0, runner_1.downloadTaskFiles)("job-trav", { ...base, skill_reference_files: [traversal] }, cfg, logger)).rejects.toThrow(/invalid path/);
    });
});
(0, vitest_1.describe)("deterministic gates scan the whole bundle", () => {
    const gctx = (payload, files = {}) => ({
        submission: JSON.stringify(payload),
        files,
        sample: { id: "x", input: "" },
        trajectory: { messages: [], step_count: 0, total_tokens: 0, finish_reason: "end_turn" },
        spec: {},
    });
    (0, vitest_1.it)("check_skill_integrity catches an if-then template that sits in a reference", async () => {
        const skill = { body: "# Skill\nA general method for handling complaints with judgment.", raw: "" };
        const template = "If the customer says the order is late, respond with the following template: sorry.";
        const clean = await (0, check_skill_integrity_1.checkSkillIntegrity)(gctx({ skill }));
        (0, vitest_1.expect)(clean.score).toBe(1);
        const hidden = await (0, check_skill_integrity_1.checkSkillIntegrity)(gctx({ skill, bundle_text: `${skill.body}\n\n--- references/replies.md ---\n${template}` }));
        (0, vitest_1.expect)(hidden.score).toBe(0);
        (0, vitest_1.expect)(hidden.rationale).toContain("if-then template");
    });
    (0, vitest_1.it)("skill_redundancy measures each bundle file on its own", async () => {
        const body = [
            "Start from the renewal date and work backwards through every open commitment.",
            "A champion who changed roles last quarter is a risk until a successor is named.",
            "Usage that fell in one team while rising in another is a migration, not a decline.",
            "Quote the ticket numbers when support history is the reason for a warning.",
            "Never infer budget pressure from silence alone; ask the account owner first.",
            "Separate what the customer said from what the telemetry shows before concluding.",
        ].join(" ");
        const skill = { body, raw: body };
        const alone = await (0, skill_redundancy_1.skillRedundancy)(gctx({ skill }));
        (0, vitest_1.expect)(alone.score).toBe(1);
        // The same six sentences restated once in each of two references: a
        // reference that repeats a rule from the body is a pointer, not padding.
        const restated = await (0, skill_redundancy_1.skillRedundancy)(gctx({
            skill,
            references: [
                { path: "a.md", content: body },
                { path: "b.md", content: body },
            ],
            bundle_text: `${body}\n\n--- references/a.md ---\n${body}\n\n--- references/b.md ---\n${body}`,
        }));
        (0, vitest_1.expect)(restated.score).toBe(1);
        // A reference that repeats itself three times over is still padding.
        const padded = await (0, skill_redundancy_1.skillRedundancy)(gctx({
            skill,
            references: [{ path: "a.md", content: `${body}\n\n${body}\n\n${body}` }],
            bundle_text: `${body}\n\n--- references/a.md ---\n${body}\n\n${body}\n\n${body}`,
        }));
        (0, vitest_1.expect)(padded.score).toBeLessThan(0.5);
        (0, vitest_1.expect)(padded.rationale).toContain("references/a.md");
    });
});
(0, vitest_1.describe)("harness run over a bundle", () => {
    const agentDef = (tools) => ({
        provider: "openai",
        model: "m",
        system_prompt: "s",
        tools,
    });
    const logger = { warn: () => { }, info: () => { }, error: () => { } };
    // Scripted model: load the skill, read one listed reference and one that
    // does not exist, then answer with whatever came back.
    const scripted = (seen) => ({
        async runTurn(input) {
            seen.push({ ...input, messages: [...input.messages] });
            const step = seen.length;
            if (step === 1) {
                return { text: "", toolCalls: [{ id: "1", name: "load_skill", arguments: {} }], stopReason: "tool_use", usageTokens: 1 };
            }
            if (step === 2) {
                return {
                    text: "",
                    toolCalls: [
                        { id: "2", name: "read_reference", arguments: { path: "references/tiers.md" } },
                        { id: "3", name: "read_reference", arguments: { path: "references/missing.md" } },
                    ],
                    stopReason: "tool_use",
                    usageTokens: 1,
                };
            }
            return { text: "final answer", toolCalls: [], stopReason: "end_turn", usageTokens: 1 };
        },
    });
    (0, vitest_1.it)("offers read_reference, serves the file, and records the read", async () => {
        const tools = new registry_2.ToolRegistry();
        tools.register(load_skill_1.loadSkillTool);
        tools.register(read_reference_1.readReferenceTool);
        const skillReferences = { "tiers.md": "TIER TABLE", "unused.md": "NEVER READ" };
        const seen = [];
        const trajectory = await (0, runtime_1.runAgent)({
            agent: agentDef(["load_skill", "read_reference"]),
            provider: scripted(seen),
            tools,
            toolCtx: { skillContent: "BODY", skillReferences },
            sample: { id: "s", input: "task" },
            maxSteps: 10,
            logger,
        });
        (0, vitest_1.expect)(seen[0].tools.map((x) => x.name)).toEqual(["load_skill", "read_reference"]);
        (0, vitest_1.expect)(seen[0].toolChoice).toEqual({ type: "tool", name: "load_skill" });
        const returns = trajectory.messages.filter((m) => m.kind === "tool_return").map((m) => m.content);
        (0, vitest_1.expect)(returns[0]).toBe("BODY\n\n## References\n- references/tiers.md\n- references/unused.md");
        (0, vitest_1.expect)(returns[1]).toBe("TIER TABLE");
        (0, vitest_1.expect)(returns[2]).toContain('No file "references/missing.md"');
        (0, vitest_1.expect)(trajectory.finish_reason).toBe("end_turn");
        (0, vitest_1.expect)((0, runner_1.referencesRead)(trajectory, skillReferences)).toEqual([{ path: "tiers.md", chars: 10 }]);
    });
    (0, vitest_1.it)("offers only load_skill, with the plain body, for a single-file skill", async () => {
        const tools = new registry_2.ToolRegistry();
        tools.register(load_skill_1.loadSkillTool);
        const seen = [];
        const provider = {
            async runTurn(input) {
                seen.push(input);
                return seen.length === 1
                    ? { text: "", toolCalls: [{ id: "1", name: "load_skill", arguments: {} }], stopReason: "tool_use", usageTokens: 1 }
                    : { text: "done", toolCalls: [], stopReason: "end_turn", usageTokens: 1 };
            },
        };
        const trajectory = await (0, runtime_1.runAgent)({
            agent: agentDef(["load_skill"]),
            provider,
            tools,
            toolCtx: { skillContent: "BODY", skillReferences: {} },
            sample: { id: "s", input: "task" },
            maxSteps: 10,
            logger,
        });
        (0, vitest_1.expect)(seen[0].tools.map((x) => x.name)).toEqual(["load_skill"]);
        (0, vitest_1.expect)(trajectory.messages.find((m) => m.kind === "tool_return")?.content).toBe("BODY");
    });
});
//# sourceMappingURL=skill-bundle.test.js.map