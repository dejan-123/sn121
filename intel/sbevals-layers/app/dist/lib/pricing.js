"use strict";
/**
 * Cost computation for the "computed" path — providers that return token
 * counts but no cost (Anthropic, Chutes, OpenAI, Google). OpenRouter returns
 * a MEASURED `usage.cost` and bypasses this module entirely.
 *
 * Rates live in the canonical ./pricing.json (USD per MILLION tokens). See the
 * "_comment" there for sync expectations across repos.
 *
 * Token-count semantics this module assumes (normalized at capture):
 *   inputTokens         = FULL prompt token count, INCLUDING cached + cache-creation
 *   cachedTokens        = cache-READ (hit) tokens, a SUBSET of inputTokens
 *   cacheCreationTokens = cache-WRITE tokens, a SUBSET of inputTokens
 *   outputTokens        = FULL completion count, INCLUDING reasoning tokens
 *   reasoningTokens     = reasoning/thinking tokens, a SUBSET of outputTokens
 * Provider adapters must normalize to this shape (Anthropic's native
 * input_tokens EXCLUDES cache tokens, so anthropic.ts adds them back; OpenAI's
 * completion_tokens already INCLUDES reasoning_tokens).
 *
 *   billableInput = inputTokens − cachedTokens − cacheCreationTokens
 *   cost = (billableInput·input + cachedTokens·cached
 *           + cacheCreationTokens·cacheWrite + outputTokens·output) / 1e6
 * reasoningTokens are a SUBSET of outputTokens — billed once at the output rate
 * via outputTokens, never added on top (doing so double-counts reasoning).
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLENDED_RATE_USD_PER_M = void 0;
exports.hasRate = hasRate;
exports.computeCost = computeCost;
const pricing_json_1 = __importDefault(require("./pricing.json"));
const PRICING = pricing_json_1.default.providers;
exports.BLENDED_RATE_USD_PER_M = pricing_json_1.default
    .blendedRatePerMillion;
/** Whether the (provider, model) pair has an explicit rate in the table. */
function hasRate(provider, model) {
    if (!provider || !model)
        return false;
    return Boolean(PRICING[provider]?.[model]);
}
/**
 * Compute USD cost for a usage block. `hasRate=false` means the pair was not
 * in the table and `costUsd` is a blended estimate (caller should mark it
 * approximate / cost_source stays "computed" but is known-imprecise).
 */
function computeCost(provider, model, usage) {
    if (!usage)
        return { costUsd: 0, hasRate: false };
    const rates = provider && model ? PRICING[provider]?.[model] : undefined;
    if (!rates) {
        // reasoningTokens are a subset of outputTokens — don't add them again.
        const total = usage.inputTokens + usage.outputTokens;
        return { costUsd: (total * exports.BLENDED_RATE_USD_PER_M) / 1_000_000, hasRate: false };
    }
    const cacheCreation = usage.cacheCreationTokens ?? 0;
    const cacheWriteRate = rates.cacheWrite ?? rates.input;
    const billableInput = Math.max(0, usage.inputTokens - usage.cachedTokens - cacheCreation);
    const costUsd = (billableInput * rates.input +
        usage.cachedTokens * rates.cached +
        cacheCreation * cacheWriteRate +
        // reasoningTokens are a subset of outputTokens, already billed here.
        usage.outputTokens * rates.output) /
        1_000_000;
    return { costUsd, hasRate: true };
}
//# sourceMappingURL=pricing.js.map