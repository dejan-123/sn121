"use strict";
// The skill-only harness agent. This service does NOT run arbitrary
// agent.af / agent.json files — it ALWAYS runs this fixed harness, and
// the only thing that varies per-job is the SKILL.md returned by the
// load_skill tool. Per-task agent definitions in suite.yaml's `target`
// section are accepted-but-ignored for backwards compat with letta-evals
// suite files.
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHarnessAgent = buildHarnessAgent;
function buildHarnessAgent(cfg) {
    return {
        provider: cfg.skillHarness.provider,
        model: cfg.skillHarness.model,
        system_prompt: cfg.skillHarness.systemPrompt,
        tools: ["load_skill"],
        temperature: cfg.skillHarness.temperature,
        max_tokens: cfg.skillHarness.maxTokens,
    };
}
//# sourceMappingURL=harness.js.map