"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const tool_judge_1 = require("./tool-judge");
const tool = (over = {}) => ({ kind: "tool", function: "evaluate_skill_use", weight: 0.3, ...over });
(0, vitest_1.describe)("resolveToolJudge", () => {
    const saved = {
        provider: process.env.SKILL_USE_JUDGE_PROVIDER,
        model: process.env.SKILL_USE_JUDGE_MODEL,
    };
    (0, vitest_1.beforeEach)(() => {
        delete process.env.SKILL_USE_JUDGE_PROVIDER;
        delete process.env.SKILL_USE_JUDGE_MODEL;
    });
    (0, vitest_1.afterEach)(() => {
        if (saved.provider === undefined)
            delete process.env.SKILL_USE_JUDGE_PROVIDER;
        else
            process.env.SKILL_USE_JUDGE_PROVIDER = saved.provider;
        if (saved.model === undefined)
            delete process.env.SKILL_USE_JUDGE_MODEL;
        else
            process.env.SKILL_USE_JUDGE_MODEL = saved.model;
    });
    (0, vitest_1.it)("falls back to the built-in default when nothing is set (backward compatible)", () => {
        (0, vitest_1.expect)((0, tool_judge_1.resolveToolJudge)(tool())).toEqual({
            provider: "openai",
            model: "gpt-5.1",
            source: "default",
        });
    });
    (0, vitest_1.it)("uses the SKILL_USE_JUDGE_* env when set and no suite model (current prod behavior)", () => {
        process.env.SKILL_USE_JUDGE_PROVIDER = "openrouter";
        process.env.SKILL_USE_JUDGE_MODEL = "anthropic/claude-opus-4.8";
        (0, vitest_1.expect)((0, tool_judge_1.resolveToolJudge)(tool())).toEqual({
            provider: "openrouter",
            model: "anthropic/claude-opus-4.8",
            source: "env",
        });
    });
    (0, vitest_1.it)("prefers the suite-baked model/provider over the env (the cost-split lever)", () => {
        process.env.SKILL_USE_JUDGE_PROVIDER = "openrouter";
        process.env.SKILL_USE_JUDGE_MODEL = "anthropic/claude-opus-4.8";
        (0, vitest_1.expect)((0, tool_judge_1.resolveToolJudge)(tool({ provider: "openrouter", model: "anthropic/claude-sonnet-4.6" }))).toEqual({
            provider: "openrouter",
            model: "anthropic/claude-sonnet-4.6",
            source: "suite",
        });
    });
    (0, vitest_1.it)("inherits the env provider when the suite pins only a model", () => {
        process.env.SKILL_USE_JUDGE_PROVIDER = "openrouter";
        process.env.SKILL_USE_JUDGE_MODEL = "anthropic/claude-opus-4.8";
        (0, vitest_1.expect)((0, tool_judge_1.resolveToolJudge)(tool({ model: "anthropic/claude-haiku-4.5" }))).toEqual({
            provider: "openrouter",
            model: "anthropic/claude-haiku-4.5",
            source: "suite",
        });
    });
});
//# sourceMappingURL=tool-judge.test.js.map