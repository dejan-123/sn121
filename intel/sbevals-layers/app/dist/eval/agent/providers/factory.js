"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeProvider = makeProvider;
const anthropic_1 = require("./anthropic");
const openai_1 = require("./openai");
const OPENAI_COMPATIBLE_BASE_URLS = {
    openrouter: "https://openrouter.ai/api/v1",
    together: "https://api.together.xyz/v1",
    chutes: "https://llm.chutes.ai/v1",
    google: "https://generativelanguage.googleapis.com/v1beta/openai", // Gemini OpenAI-compat shim
};
function makeProvider(name, cfg) {
    if (name === "anthropic") {
        const key = cfg.providerKeys.anthropic;
        if (!key)
            throw new Error("ANTHROPIC_API_KEY not configured");
        return new anthropic_1.AnthropicAdapter(key);
    }
    if (name === "openai") {
        const key = cfg.providerKeys.openai;
        if (!key)
            throw new Error("OPENAI_API_KEY not configured");
        return new openai_1.OpenAIAdapter({ apiKey: key, name: "openai" });
    }
    const baseURL = OPENAI_COMPATIBLE_BASE_URLS[name];
    if (!baseURL)
        throw new Error(`Unsupported provider: ${name}`);
    const keyMap = {
        google: cfg.providerKeys.google,
        openrouter: cfg.providerKeys.openrouter,
        together: cfg.providerKeys.together,
        chutes: cfg.providerKeys.chutes,
    };
    const key = keyMap[name];
    if (!key)
        throw new Error(`API key for provider "${name}" is not configured`);
    return new openai_1.OpenAIAdapter({ apiKey: key, baseURL, name });
}
//# sourceMappingURL=factory.js.map