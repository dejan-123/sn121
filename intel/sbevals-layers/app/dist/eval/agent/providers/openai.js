"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIAdapter = void 0;
exports.extractUsage = extractUsage;
exports.measuredCost = measuredCost;
const openai_1 = __importDefault(require("openai"));
const pricing_1 = require("../../../lib/pricing");
class OpenAIAdapter {
    name;
    client;
    constructor(opts) {
        this.name = opts.name ?? "openai";
        // Explicit 120s timeout — OpenAI SDK default is 600s. A stalled inference
        // backend (e.g., Chutes returning slowly or hanging on cold-start) would
        // otherwise wedge a sample for ten minutes silently. 120s is generous for
        // any normal LLM call but short enough that operators see the failure.
        this.client = new openai_1.default({
            apiKey: opts.apiKey,
            baseURL: opts.baseURL,
            timeout: 120_000,
        });
    }
    async runTurn(input) {
        // Map our provider-agnostic toolChoice to OpenAI's tool_choice. Only sent
        // when tools are present and a choice is set; undefined preserves default (auto).
        const toolChoice = input.tools.length && input.toolChoice
            ? input.toolChoice === "none"
                ? "none"
                : input.toolChoice === "auto"
                    ? "auto"
                    : { type: "function", function: { name: input.toolChoice.name } }
            : undefined;
        const res = await this.client.chat.completions.create({
            model: input.model,
            temperature: input.temperature,
            max_tokens: input.maxTokens,
            messages: [
                { role: "system", content: input.systemPrompt },
                ...toOpenAIMessages(input.messages),
            ],
            tools: input.tools.length
                ? input.tools.map((t) => ({
                    type: "function",
                    function: {
                        name: t.name,
                        description: t.description,
                        parameters: t.input_schema,
                    },
                }))
                : undefined,
            ...(toolChoice ? { tool_choice: toolChoice } : {}),
        });
        const choice = res.choices[0];
        const msg = choice.message;
        const toolCalls = (msg.tool_calls ?? []).map((tc) => {
            let args = {};
            try {
                args = tc.function.arguments ? JSON.parse(tc.function.arguments) : {};
            }
            catch {
                args = { _raw: tc.function.arguments };
            }
            return { id: tc.id, name: tc.function.name, arguments: args };
        });
        const usageDetail = extractUsage(res.usage);
        const cost = this.priceCall(measuredCost(res.usage), input.model, usageDetail);
        return {
            text: msg.content ?? "",
            toolCalls,
            stopReason: choice.finish_reason === "stop"
                ? "end_turn"
                : choice.finish_reason === "tool_calls"
                    ? "tool_use"
                    : choice.finish_reason === "length"
                        ? "max_tokens"
                        : "other",
            usageTokens: res.usage?.total_tokens ?? 0,
            usageDetail,
            costUsd: cost.costUsd,
            costSource: cost.costSource,
        };
    }
    // Measured cost (OpenRouter `usage.cost`) if present, else computed from the
    // token split × pricing table keyed by this provider + model.
    priceCall(measured, model, usage) {
        if (measured != null)
            return { costUsd: measured, costSource: "measured" };
        return { costUsd: (0, pricing_1.computeCost)(this.name, model, usage).costUsd, costSource: "computed" };
    }
    async judge(input) {
        const res = await this.client.chat.completions.create({
            model: input.model,
            temperature: input.temperature,
            max_tokens: input.maxTokens ?? 2048,
            messages: [{ role: "user", content: input.prompt }],
        }, { timeout: input.timeoutMs });
        const raw = res.choices[0]?.message?.content ?? "";
        const usage = extractUsage(res.usage);
        const cost = this.priceCall(measuredCost(res.usage), input.model, usage);
        usage.costUsd = cost.costUsd;
        usage.costSource = cost.costSource;
        return { raw, usage };
    }
}
exports.OpenAIAdapter = OpenAIAdapter;
// Normalize an OpenAI-shape usage block into our JudgeUsage. inputTokens =
// prompt_tokens (cached/cache_write are subsets, per OpenAI semantics — matches
// pricing.ts's normalized contract, so no add-back needed here).
function extractUsage(usage) {
    const u = (usage ?? {});
    const inputTokens = u.prompt_tokens ?? 0;
    const outputTokens = u.completion_tokens ?? 0;
    return {
        inputTokens,
        outputTokens,
        cachedTokens: u.prompt_tokens_details?.cached_tokens ?? 0,
        cacheCreationTokens: u.prompt_tokens_details?.cache_write_tokens ?? 0,
        reasoningTokens: u.completion_tokens_details?.reasoning_tokens ?? 0,
        totalTokens: inputTokens + outputTokens,
    };
}
// Measured cost off the response when present (OpenRouter `usage.cost`).
// Returns undefined for token-only providers so the runner computes it.
function measuredCost(usage) {
    const cost = usage?.cost;
    return typeof cost === "number" ? cost : undefined;
}
function toOpenAIMessages(messages) {
    const out = [];
    let i = 0;
    while (i < messages.length) {
        const m = messages[i];
        if (m.kind === "user") {
            out.push({ role: "user", content: m.content });
            i++;
            continue;
        }
        if (m.kind === "assistant" || m.kind === "tool_call") {
            let textContent = "";
            const tcs = [];
            while (i < messages.length) {
                const cur = messages[i];
                if (cur.kind === "assistant") {
                    textContent += cur.content;
                }
                else if (cur.kind === "tool_call") {
                    tcs.push({
                        id: cur.id,
                        type: "function",
                        function: { name: cur.name, arguments: JSON.stringify(cur.arguments) },
                    });
                }
                else {
                    break;
                }
                i++;
            }
            out.push({
                role: "assistant",
                content: textContent || null,
                tool_calls: tcs.length ? tcs : undefined,
            });
            continue;
        }
        if (m.kind === "tool_return") {
            out.push({ role: "tool", tool_call_id: m.id, content: m.content });
            i++;
            continue;
        }
        i++;
    }
    return out;
}
//# sourceMappingURL=openai.js.map