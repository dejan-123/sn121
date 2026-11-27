"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAgent = runAgent;
async function runAgent(opts) {
    const { agent, provider, tools, toolCtx, sample, maxSteps, logger } = opts;
    const messages = [];
    // Sample.input may be a single user message or a list to seed multi-turn.
    if (typeof sample.input === "string") {
        messages.push({ kind: "user", content: sample.input });
    }
    else {
        for (const turn of sample.input)
            messages.push({ kind: "user", content: turn });
    }
    const toolSchemas = tools.schemasFor(agent.tools);
    let totalTokens = 0;
    let totalCostUsd = 0;
    let sawMeasured = false;
    let stepCount = 0;
    let finishReason = "max_steps";
    for (let step = 0; step < maxSteps; step++) {
        stepCount = step + 1;
        // Force the harness to consult the skill: until `load_skill` has been
        // called, require the model to call it this turn (via provider tool_choice).
        // Soft prompting ("always call load_skill first") is ignored on sparse /
        // refuse traps, where the model answers from priors and never loads
        // SKILL.md — so skill-specific procedures never apply (measured on the live
        // challenge's S-004 sample). Once loaded, revert to the provider default so
        // the model can answer (and call other tools if any). No-op when the agent
        // has no load_skill tool.
        const loadSkillAvailable = agent.tools.includes("load_skill") && toolSchemas.some((t) => t.name === "load_skill");
        const alreadyLoaded = messages.some((m) => m.kind === "tool_call" && m.name === "load_skill");
        const forceLoadSkill = loadSkillAvailable && !alreadyLoaded;
        let turn;
        try {
            turn = await provider.runTurn({
                systemPrompt: agent.system_prompt,
                messages,
                tools: toolSchemas,
                model: agent.model,
                temperature: agent.temperature,
                maxTokens: agent.max_tokens,
                toolChoice: forceLoadSkill ? { type: "tool", name: "load_skill" } : undefined,
            });
        }
        catch (err) {
            logger.error({ err, sampleId: sample.id }, "agent provider call failed");
            return {
                messages,
                step_count: stepCount,
                total_tokens: totalTokens,
                finish_reason: "error",
                error: err.message,
                total_cost_usd: totalCostUsd,
                cost_source: sawMeasured ? "measured" : "computed",
            };
        }
        totalTokens += turn.usageTokens;
        // Adapters always return a per-turn cost (measured on OpenRouter, computed
        // from the token split + pricing table elsewhere).
        totalCostUsd += turn.costUsd ?? 0;
        if (turn.costSource === "measured")
            sawMeasured = true;
        if (turn.text)
            messages.push({ kind: "assistant", content: turn.text });
        for (const tc of turn.toolCalls) {
            messages.push({ kind: "tool_call", id: tc.id, name: tc.name, arguments: tc.arguments });
        }
        if (turn.toolCalls.length === 0) {
            // A truncated final generation is not a clean end of turn — surface it
            // so downstream scoring/analyses can tell "finished" from "cut off".
            finishReason = turn.stopReason === "max_tokens" ? "max_tokens" : "end_turn";
            break;
        }
        for (const tc of turn.toolCalls) {
            const handler = tools.get(tc.name);
            let result;
            if (!handler) {
                result = `Error: tool "${tc.name}" is not available.`;
            }
            else {
                try {
                    result = await handler.call(tc.arguments, toolCtx);
                }
                catch (err) {
                    result = `Error executing tool "${tc.name}": ${err.message}`;
                }
            }
            messages.push({ kind: "tool_return", id: tc.id, name: tc.name, content: result });
        }
    }
    return {
        messages,
        step_count: stepCount,
        total_tokens: totalTokens,
        finish_reason: finishReason,
        total_cost_usd: totalCostUsd,
        cost_source: sawMeasured ? "measured" : "computed",
    };
}
//# sourceMappingURL=runtime.js.map