"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const openai_1 = require("./openai");
(0, vitest_1.describe)("extractUsage", () => {
    (0, vitest_1.it)("maps OpenAI-shape token fields including cached/reasoning/cache-write", () => {
        const u = (0, openai_1.extractUsage)({
            prompt_tokens: 1000,
            completion_tokens: 300,
            total_tokens: 1300,
            prompt_tokens_details: { cached_tokens: 200, cache_write_tokens: 100 },
            completion_tokens_details: { reasoning_tokens: 40 },
        });
        (0, vitest_1.expect)(u).toEqual({
            inputTokens: 1000,
            outputTokens: 300,
            cachedTokens: 200,
            cacheCreationTokens: 100,
            reasoningTokens: 40,
            totalTokens: 1300, // inputTokens + outputTokens
        });
    });
    (0, vitest_1.it)("defaults missing fields to zero", () => {
        const u = (0, openai_1.extractUsage)({ prompt_tokens: 50, completion_tokens: 10 });
        (0, vitest_1.expect)(u.cachedTokens).toBe(0);
        (0, vitest_1.expect)(u.cacheCreationTokens).toBe(0);
        (0, vitest_1.expect)(u.reasoningTokens).toBe(0);
    });
    (0, vitest_1.it)("tolerates an undefined usage block", () => {
        const u = (0, openai_1.extractUsage)(undefined);
        (0, vitest_1.expect)(u.inputTokens).toBe(0);
        (0, vitest_1.expect)(u.totalTokens).toBe(0);
    });
});
(0, vitest_1.describe)("measuredCost", () => {
    (0, vitest_1.it)("reads OpenRouter usage.cost when present", () => {
        (0, vitest_1.expect)((0, openai_1.measuredCost)({ prompt_tokens: 10, completion_tokens: 5, cost: 0.0123 })).toBe(0.0123);
    });
    (0, vitest_1.it)("returns undefined for token-only providers (no cost field)", () => {
        (0, vitest_1.expect)((0, openai_1.measuredCost)({ prompt_tokens: 10, completion_tokens: 5 })).toBeUndefined();
        (0, vitest_1.expect)((0, openai_1.measuredCost)(undefined)).toBeUndefined();
    });
});
//# sourceMappingURL=openai-usage.test.js.map