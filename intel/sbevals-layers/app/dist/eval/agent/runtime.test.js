"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const runtime_1 = require("./runtime");
const registry_1 = require("../tools/registry");
const logger = { error: vitest_1.vi.fn(), warn: vitest_1.vi.fn(), info: vitest_1.vi.fn(), debug: vitest_1.vi.fn() };
const agentDef = (tools) => ({
    provider: "openai",
    model: "test-model",
    system_prompt: "You are a test agent.",
    tools,
});
const registryWith = (names) => {
    const reg = new registry_1.ToolRegistry();
    for (const name of names) {
        reg.register({
            schema: { name, description: name, input_schema: { type: "object", properties: {} } },
            call: async () => `${name} result`,
        });
    }
    return reg;
};
// Scripted provider: returns each turn in order, recording every runTurn input.
const scriptedProvider = (turns) => {
    const calls = [];
    let i = 0;
    const provider = {
        name: "openai",
        runTurn: async (input) => {
            calls.push(input);
            return turns[Math.min(i++, turns.length - 1)];
        },
    };
    return { provider, calls };
};
const turn = (partial) => ({
    text: "",
    toolCalls: [],
    stopReason: "end_turn",
    usageTokens: 10,
    ...partial,
});
const baseOpts = (tools, provider) => ({
    agent: agentDef(tools),
    provider,
    tools: registryWith(tools),
    toolCtx: {},
    sample: { id: "s-1", input: "hello" },
    maxSteps: 5,
    logger,
});
(0, vitest_1.describe)("runAgent load_skill forcing", () => {
    (0, vitest_1.it)("forces load_skill on the first turn, then reverts to provider default", async () => {
        const { provider, calls } = scriptedProvider([
            turn({
                toolCalls: [{ id: "t1", name: "load_skill", arguments: {} }],
                stopReason: "tool_use",
            }),
            turn({ text: "final answer" }),
        ]);
        const traj = await (0, runtime_1.runAgent)(baseOpts(["load_skill"], provider));
        (0, vitest_1.expect)(calls[0].toolChoice).toEqual({ type: "tool", name: "load_skill" });
        (0, vitest_1.expect)(calls[1].toolChoice).toBeUndefined();
        (0, vitest_1.expect)(traj.finish_reason).toBe("end_turn");
        (0, vitest_1.expect)(traj.messages).toContainEqual({
            kind: "tool_return",
            id: "t1",
            name: "load_skill",
            content: "load_skill result",
        });
    });
    (0, vitest_1.it)("keeps forcing until load_skill has actually been called", async () => {
        const { provider, calls } = scriptedProvider([
            turn({
                toolCalls: [{ id: "t1", name: "other_tool", arguments: {} }],
                stopReason: "tool_use",
            }),
            turn({
                toolCalls: [{ id: "t2", name: "load_skill", arguments: {} }],
                stopReason: "tool_use",
            }),
            turn({ text: "final answer" }),
        ]);
        await (0, runtime_1.runAgent)(baseOpts(["load_skill", "other_tool"], provider));
        (0, vitest_1.expect)(calls[0].toolChoice).toEqual({ type: "tool", name: "load_skill" });
        (0, vitest_1.expect)(calls[1].toolChoice).toEqual({ type: "tool", name: "load_skill" });
        (0, vitest_1.expect)(calls[2].toolChoice).toBeUndefined();
    });
    (0, vitest_1.it)("surfaces max_tokens truncation as the finish reason", async () => {
        const { provider } = scriptedProvider([
            turn({ text: "cut off mid-repor", stopReason: "max_tokens" }),
        ]);
        const traj = await (0, runtime_1.runAgent)(baseOpts([], provider));
        (0, vitest_1.expect)(traj.finish_reason).toBe("max_tokens");
    });
    (0, vitest_1.it)("does not force when the agent has no load_skill tool", async () => {
        const { provider, calls } = scriptedProvider([turn({ text: "answer" })]);
        const traj = await (0, runtime_1.runAgent)(baseOpts([], provider));
        (0, vitest_1.expect)(calls[0].toolChoice).toBeUndefined();
        (0, vitest_1.expect)(traj.finish_reason).toBe("end_turn");
    });
    (0, vitest_1.it)("degrades to end_turn if the provider ignores the force and answers", async () => {
        const { provider, calls } = scriptedProvider([turn({ text: "answer from priors" })]);
        const traj = await (0, runtime_1.runAgent)(baseOpts(["load_skill"], provider));
        (0, vitest_1.expect)(calls).toHaveLength(1);
        (0, vitest_1.expect)(calls[0].toolChoice).toEqual({ type: "tool", name: "load_skill" });
        (0, vitest_1.expect)(traj.finish_reason).toBe("end_turn");
        (0, vitest_1.expect)(traj.step_count).toBe(1);
    });
});
//# sourceMappingURL=runtime.test.js.map