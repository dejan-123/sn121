"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentDefSchema = void 0;
exports.parseAgentDef = parseAgentDef;
const zod_1 = require("zod");
exports.AgentDefSchema = zod_1.z.object({
    provider: zod_1.z.enum(["anthropic", "openai", "google", "openrouter", "together", "chutes"]),
    model: zod_1.z.string(),
    system_prompt: zod_1.z.string(),
    tools: zod_1.z.array(zod_1.z.string()).default([]),
    temperature: zod_1.z.number().optional(),
    max_tokens: zod_1.z.number().int().positive().optional(),
});
function parseAgentDef(text) {
    let raw;
    try {
        raw = JSON.parse(text);
    }
    catch (err) {
        throw new Error(`agent.json is not valid JSON: ${err.message}`);
    }
    const parsed = exports.AgentDefSchema.safeParse(raw);
    if (!parsed.success) {
        throw new Error(`Invalid agent.json: ${parsed.error.message}`);
    }
    return parsed.data;
}
//# sourceMappingURL=format.js.map