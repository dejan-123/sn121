"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerBuiltinExtractors = registerBuiltinExtractors;
exports.readFileExtractor = readFileExtractor;
const node_fs_1 = require("node:fs");
const skill_bundle_1 = require("../skill-bundle");
const lastAssistant = (ctx) => {
    for (let i = ctx.trajectory.messages.length - 1; i >= 0; i--) {
        const m = ctx.trajectory.messages[i];
        if (m.kind === "assistant" && m.content)
            return m.content;
    }
    return "";
};
const fullTrajectory = (ctx) => JSON.stringify(ctx.trajectory.messages, null, 2);
const toolCalls = (ctx) => {
    const calls = ctx.trajectory.messages
        .filter((m) => m.kind === "tool_call")
        .map((m) => ({ name: m.name, arguments: m.arguments }));
    return JSON.stringify(calls);
};
// Mirrors validator/python/skill_evaluation.py:skill_content_extractor.
// Returns a JSON payload that downstream graders (check_skill_integrity,
// evaluate_skill_use) parse — matching field-for-field so the ports
// behave the same:
//   {
//     skill: { name, description, body, raw },   ← parsed from SKILL.md
//     final_email: <last assistant message>,
//     tool_calls: [{name, arguments}],
//     load_skill_called: bool,
//     load_skill_returns: [string],
//   }
// A skill bundle (SKILL.md + reference files) adds two keys, absent for a
// single-file submission so that payload stays byte-identical:
//     references: [{ path, content }],   ← sorted by path
//     bundle_text: <SKILL.md raw, then every reference under a path header>
// Gates must scan the bundle, not just SKILL.md — see graders/judge-input.ts.
const skillContent = (ctx) => {
    // 1. Read SKILL.md from the run's downloaded files. The downloader
    // always lands it at files["SKILL.md"] (see runner.ts:downloadTaskFiles).
    // We deliberately don't honor extractor_config.skill_file_path because
    // it points at a relative path inside the suite tarball; we already
    // resolved it during file fetch.
    const skillPath = ctx.files["SKILL.md"];
    let skill = { name: "", description: "", body: "", raw: "" };
    if (skillPath) {
        const raw = (0, node_fs_1.readFileSync)(skillPath, "utf8");
        skill = parseSkillMd(raw);
    }
    // 2. Walk the trajectory.
    const calls = ctx.trajectory.messages.filter((m) => m.kind === "tool_call");
    const returns = ctx.trajectory.messages.filter((m) => m.kind === "tool_return");
    const loadSkillCalls = calls.filter((c) => c.name === "load_skill");
    const loadSkillReturns = returns.filter((r) => r.name === "load_skill").map((r) => r.content);
    let finalEmail = "";
    for (let i = ctx.trajectory.messages.length - 1; i >= 0; i--) {
        const m = ctx.trajectory.messages[i];
        if (m.kind === "assistant" && m.content) {
            finalEmail = m.content;
            break;
        }
    }
    const references = (0, skill_bundle_1.loadReferences)(ctx.files);
    return JSON.stringify({
        skill,
        final_email: finalEmail,
        tool_calls: calls.map((c) => ({ name: c.name, arguments: c.arguments })),
        load_skill_called: loadSkillCalls.length > 0,
        load_skill_returns: loadSkillReturns,
        ...(references.length > 0
            ? { references, bundle_text: (0, skill_bundle_1.bundleText)(skill.raw, references) }
            : {}),
    });
};
// Parse YAML-style frontmatter (between --- delimiters) out of a SKILL.md
// file. Mirrors skill_evaluation.py:_read_skill_content.
function parseSkillMd(raw) {
    let name = "";
    let description = "";
    let body = raw;
    const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (fm) {
        const fmText = fm[1];
        body = fm[2];
        for (const line of fmText.split(/\r?\n/)) {
            const trimmed = line.trim();
            if (trimmed.startsWith("name:")) {
                name = trimmed.slice(5).trim().replace(/^["']|["']$/g, "");
            }
            else if (trimmed.startsWith("description:")) {
                description = trimmed.slice(12).trim().replace(/^["']|["']$/g, "");
            }
        }
    }
    return { name, description, body, raw };
}
// Reads the file referenced by extractor_config.agent_file_path (relative
// name within the run's files map). Used by static checks on the agent
// definition.
const agentFileContent = (ctx) => {
    const name = ctx.config?.agent_file_path ?? "agent.json";
    const path = ctx.files[name];
    if (!path)
        throw new Error(`agent_file_content extractor: file "${name}" not in run files`);
    // Sync read is fine here — extractors run post-grading on small files.
    return (0, node_fs_1.readFileSync)(path, "utf8");
};
// Returns "" — used as the alias target for agent-file extractors in
// skill-only mode (their paired graders are no-ops, so the submission
// content is irrelevant).
const noop = () => "";
function registerBuiltinExtractors(reg) {
    reg.register("noop", noop);
    reg.register("last_assistant", lastAssistant);
    reg.register("full_trajectory", fullTrajectory);
    reg.register("tool_calls", toolCalls);
    reg.register("skill_content", skillContent);
    reg.register("agent_file_content", agentFileContent);
}
// Awaited variant for extractors that actually need async I/O. We expose this
// so graders can call await extractor(ctx) where appropriate, but the simple
// extractors above are synchronous to keep the path tight.
async function readFileExtractor(ctx, name) {
    const path = ctx.files[name];
    if (!path)
        throw new Error(`file "${name}" not in run files`);
    return node_fs_1.promises.readFile(path, "utf8");
}
//# sourceMappingURL=builtin.js.map