"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const pricing_1 = require("./pricing");
(0, vitest_1.describe)("computeCost", () => {
    (0, vitest_1.it)("computes from token counts × rates (no cache)", () => {
        // sonnet-4-6: input $3/M, output $15/M
        const { costUsd, hasRate } = (0, pricing_1.computeCost)("anthropic", "claude-sonnet-4-6", {
            inputTokens: 1000,
            outputTokens: 500,
            cachedTokens: 0,
            reasoningTokens: 0,
        });
        (0, vitest_1.expect)(hasRate).toBe(true);
        (0, vitest_1.expect)(costUsd).toBeCloseTo((1000 * 3 + 500 * 15) / 1_000_000, 12);
    });
    (0, vitest_1.it)("prices cache-read and cache-write at their own rates", () => {
        // inputTokens is the FULL prompt (cached + cacheCreation are subsets).
        // billable = 1000 − 200 − 100 = 700.
        // sonnet: input 3, cached 0.3, cacheWrite 3.75, output 15.
        const { costUsd } = (0, pricing_1.computeCost)("anthropic", "claude-sonnet-4-6", {
            inputTokens: 1000,
            outputTokens: 500,
            cachedTokens: 200,
            reasoningTokens: 0,
            cacheCreationTokens: 100,
        });
        const expected = (700 * 3 + 200 * 0.3 + 100 * 3.75 + 500 * 15) / 1_000_000;
        (0, vitest_1.expect)(costUsd).toBeCloseTo(expected, 12);
    });
    (0, vitest_1.it)("bills reasoning tokens at the output rate (reasoning is a subset of output)", () => {
        // outputTokens is the FULL completion incl. reasoning; reasoningTokens is an
        // informational subset, billed once via outputTokens — never added on top.
        const { costUsd } = (0, pricing_1.computeCost)("anthropic", "claude-sonnet-4-6", {
            inputTokens: 0,
            outputTokens: 150, // 100 visible + 50 reasoning
            cachedTokens: 0,
            reasoningTokens: 50,
        });
        (0, vitest_1.expect)(costUsd).toBeCloseTo((150 * 15) / 1_000_000, 12);
    });
    (0, vitest_1.it)("defaults cacheWrite to the input rate when the model has no cacheWrite", () => {
        // chutes gemma has no cacheWrite → cache-creation billed at input rate (0.15).
        const { costUsd } = (0, pricing_1.computeCost)("chutes", "google/gemma-4-31B-turbo-TEE", {
            inputTokens: 1000,
            outputTokens: 0,
            cachedTokens: 0,
            reasoningTokens: 0,
            cacheCreationTokens: 200,
        });
        // billable 800 @0.15 + 200 @0.15(=input) = 1000 @0.15
        (0, vitest_1.expect)(costUsd).toBeCloseTo((1000 * 0.15) / 1_000_000, 12);
    });
    (0, vitest_1.it)("falls back to a blended estimate for unknown (provider, model)", () => {
        const { costUsd, hasRate } = (0, pricing_1.computeCost)("mystery", "unknown-model", {
            inputTokens: 1000,
            outputTokens: 500, // incl. the 100 reasoning tokens below
            cachedTokens: 0,
            reasoningTokens: 100,
        });
        (0, vitest_1.expect)(hasRate).toBe(false);
        // blended: (input + output) × $7/M; reasoning is a subset of output, not added.
        (0, vitest_1.expect)(costUsd).toBeCloseTo(((1000 + 500) * 7) / 1_000_000, 12);
    });
    (0, vitest_1.it)("never lets cache subsets push billable input negative", () => {
        const { costUsd } = (0, pricing_1.computeCost)("anthropic", "claude-haiku-4-5-20251001", {
            inputTokens: 100,
            outputTokens: 0,
            cachedTokens: 200, // nonsense > input; must clamp to 0 billable
            reasoningTokens: 0,
        });
        // billable clamped to 0; only cached priced: 200 × 0.08
        (0, vitest_1.expect)(costUsd).toBeCloseTo((200 * 0.08) / 1_000_000, 12);
    });
});
//# sourceMappingURL=pricing.test.js.map