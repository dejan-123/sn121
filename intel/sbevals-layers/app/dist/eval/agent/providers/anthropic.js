"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicAdapter = void 0;
const sdk_1 = __importDefault(require("@anthropic-ai/sdk"));
const pricing_1 = require("../../../lib/pricing");
class AnthropicAdapter {
    name = "anthropic";
    client;
    constructor(apiKey) {
        // Explicit 120s timeout — Anthropic SDK default is 600s. Mirrors the
        // OpenAI adapter for consistency: a stalled backend should fail visibly
        // within 2 minutes, not hang silently for ten.
        this.client = new sdk_1.default({ apiKey, timeout: 120_000 });
    }
    async runTurn(input) {
        const messages = toAnthropicMessages(input.messages);
        // Map our provider-agnostic toolChoice to Anthropic's. Only sent when tools
        // are present and a choice is set; undefined preserves the SDK default (auto).
        let toolChoice;
        if (input.tools.length && input.toolChoice) {
            if (input.toolChoice === "auto")
                toolChoice = { type: "auto" };
            else if (input.toolChoice !== "none")
                toolChoice = { type: "tool", name: input.toolChoice.name };
            // "none" is intentionally unmapped here — the runtime never sends it.
        }
        const res = await this.client.messages.create({
            model: input.model,
            system: input.systemPrompt,
            max_tokens: input.maxTokens ?? 4096,
            temperature: input.temperature,
            messages,
            tools: input.tools.map((t) => ({
                name: t.name,
                description: t.description,
                input_schema: t.input_schema,
            })),
            ...(toolChoice ? { tool_choice: toolChoice } : {}),
        });
        let text = "";
        const toolCalls = [];
        for (const block of res.content) {
            if (block.type === "text")
                text += block.text;
            else if (block.type === "tool_use") {
                toolCalls.push({
                    id: block.id,
                    name: block.name,
                    arguments: block.input ?? {},
                });
            }
        }
        const usageDetail = anthropicUsage(res.usage);
        return {
            text,
            toolCalls,
            stopReason: res.stop_reason === "end_turn"
                ? "end_turn"
                : res.stop_reason === "tool_use"
                    ? "tool_use"
                    : res.stop_reason === "max_tokens"
                        ? "max_tokens"
                        : "other",
            // usageTokens stays native (input+output) so token-budget accounting is
            // unchanged; usageDetail carries the normalized split for cost only.
            usageTokens: (res.usage?.input_tokens ?? 0) + (res.usage?.output_tokens ?? 0),
            usageDetail,
            costUsd: (0, pricing_1.computeCost)("anthropic", input.model, usageDetail).costUsd,
            costSource: "computed",
        };
    }
    async judge(input) {
        const res = await this.client.messages.create({
            model: input.model,
            max_tokens: input.maxTokens ?? 2048,
            temperature: input.temperature,
            messages: [{ role: "user", content: input.prompt }],
        }, { timeout: input.timeoutMs });
        const raw = res.content
            .filter((b) => b.type === "text")
            .map((b) => b.text)
            .join("");
        const usage = anthropicUsage(res.usage);
        usage.costUsd = (0, pricing_1.computeCost)("anthropic", input.model, usage).costUsd;
        usage.costSource = "computed";
        return { raw, usage };
    }
}
exports.AnthropicAdapter = AnthropicAdapter;
// Normalize an Anthropic usage block into our JudgeUsage. Anthropic's
// native `input_tokens` EXCLUDES cache-read and cache-creation tokens, and
// bills them on separate lines (cache read = 0.10x, cache write = 1.25x).
// We add them back so `inputTokens` is the FULL prompt count — matching the
// OpenAI-shape adapters and the normalized contract pricing.ts assumes
// (billableInput = inputTokens − cachedTokens − cacheCreationTokens). No
// measured cost is available, so costSource stays unset → runner computes it.
function anthropicUsage(usage) {
    const u = (usage ?? {});
    const cachedTokens = u.cache_read_input_tokens ?? 0;
    const cacheCreationTokens = u.cache_creation_input_tokens ?? 0;
    const inputTokens = (u.input_tokens ?? 0) + cachedTokens + cacheCreationTokens;
    const outputTokens = u.output_tokens ?? 0;
    return {
        inputTokens,
        outputTokens,
        cachedTokens,
        cacheCreationTokens,
        reasoningTokens: 0, // Anthropic API doesn't surface thinking tokens here
        totalTokens: inputTokens + outputTokens,
    };
}
function toAnthropicMessages(messages) {
    // Anthropic's Messages API requires assistant turns containing tool_use to be
    // followed by a user turn containing matching tool_result blocks. We
    // accumulate consecutive assistant + tool_call entries into one message
    // and tool_returns into a user turn.
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
            const blocks = [];
            while (i < messages.length) {
                const cur = messages[i];
                if (cur.kind === "assistant") {
                    if (cur.content)
                        blocks.push({ type: "text", text: cur.content });
                }
                else if (cur.kind === "tool_call") {
                    blocks.push({
                        type: "tool_use",
                        id: cur.id,
                        name: cur.name,
                        input: cur.arguments,
                    });
                }
                else {
                    break;
                }
                i++;
            }
            out.push({ role: "assistant", content: blocks });
            continue;
        }
        if (m.kind === "tool_return") {
            const blocks = [];
            while (i < messages.length) {
                const cur = messages[i];
                if (cur.kind !== "tool_return")
                    break;
                blocks.push({
                    type: "tool_result",
                    tool_use_id: cur.id,
                    content: cur.content,
                });
                i++;
            }
            out.push({ role: "user", content: blocks });
            continue;
        }
        i++;
    }
    return out;
}
//# sourceMappingURL=anthropic.js.map