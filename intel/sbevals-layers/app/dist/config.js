"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = loadConfig;
const dotenv_1 = require("dotenv");
// override: true so values in the local .env file take precedence over
// pre-existing shell env (e.g. an empty ANTHROPIC_API_KEY from a global
// shell rc). For an app config file this is the expected behavior — if
// you put it in .env, you mean it.
(0, dotenv_1.config)({ override: true });
function int(name, def) {
    const raw = process.env[name];
    if (raw === undefined || raw === "")
        return def;
    const n = parseInt(raw, 10);
    if (Number.isNaN(n))
        throw new Error(`Env var ${name} must be an integer, got: ${raw}`);
    return n;
}
function optInt(name) {
    const raw = process.env[name];
    if (raw === undefined || raw === "")
        return undefined;
    const n = parseInt(raw, 10);
    if (Number.isNaN(n))
        throw new Error(`Env var ${name} must be an integer, got: ${raw}`);
    return n;
}
function loadConfig() {
    const maxConcurrentEvals = Math.min(int("MAX_CONCURRENT_EVALS", 2), 20);
    const apiKeys = (process.env.EVAL_SERVICE_API_KEY ?? "")
        .split(",")
        .map((k) => k.trim())
        .filter((k) => k.length > 0);
    if (apiKeys.length === 0) {
        throw new Error("EVAL_SERVICE_API_KEY is required. Set a non-empty value in .env (or a comma-separated list of accepted keys for rotation).");
    }
    const supabaseUrl = process.env.SUPABASE_URL?.trim();
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
    const supabase = supabaseUrl && supabaseKey ? { url: supabaseUrl, serviceRoleKey: supabaseKey } : undefined;
    // Fail closed: verification runs everywhere — an unset NODE_ENV
    // verifies. Bypassed only by an explicit NODE_ENV=development or
    // SKIP_SIGNATURE_VERIFICATION=true (matches the coordinator).
    const isLocal = process.env.NODE_ENV === "development";
    const skipSignatureVerification = process.env.SKIP_SIGNATURE_VERIFICATION === "true" || isLocal;
    // Default harness: OpenRouter + DeepSeek V3. Cheap and capable enough
    // for skill-grading, and OpenRouter's catalog gives flexibility if
    // anyone wants to swap models without changing provider plumbing.
    // Override per deployment via SKILL_HARNESS_PROVIDER + SKILL_HARNESS_MODEL.
    const skillHarnessProvider = (process.env.SKILL_HARNESS_PROVIDER || "openrouter");
    const skillHarnessModel = process.env.SKILL_HARNESS_MODEL || "deepseek/deepseek-chat-v3-0324";
    // Deliberately neutral — we don't bake in any persona. Persona belongs
    // in the SKILL.md the submission provides.
    const defaultSystemPrompt = "You are an assistant evaluating a skill. A skill containing the procedure for this task is available via the load_skill tool. Always call load_skill FIRST to retrieve the procedure, then follow it precisely on the user's request. Do not deviate from the skill's instructions, prohibited moves, or output format.";
    return {
        // Railway/Heroku/Fly inject PORT at runtime — read it first. Fall
        // back to SERVER_PORT for our docker-compose / local-dev convention,
        // then 8090 as a last resort.
        serverPort: process.env.PORT
            ? parseInt(process.env.PORT, 10)
            : int("SERVER_PORT", 8090),
        logLevel: process.env.LOG_LEVEL || "info",
        workDir: process.env.WORK_DIR || "/tmp/eval-service-work",
        apiKeys,
        supabase,
        skipSignatureVerification,
        maxSteps: int("MAX_STEPS", 10),
        maxConcurrentEvals,
        tokensPerTestCase: int("TOKENS_PER_TEST_CASE", 30000),
        maxTokensPerEval: optInt("MAX_TOKENS_PER_EVAL"),
        judgeMaxTokens: int("SKILL_JUDGE_MAX_TOKENS", 2048),
        skillHarness: {
            provider: skillHarnessProvider,
            model: skillHarnessModel,
            systemPrompt: process.env.SKILL_HARNESS_SYSTEM_PROMPT || defaultSystemPrompt,
            temperature: process.env.SKILL_HARNESS_TEMPERATURE
                ? parseFloat(process.env.SKILL_HARNESS_TEMPERATURE)
                : 0,
            maxTokens: int("SKILL_HARNESS_MAX_TOKENS", 1024),
        },
        providerKeys: {
            openai: process.env.OPENAI_API_KEY,
            anthropic: process.env.ANTHROPIC_API_KEY,
            google: process.env.GOOGLE_API_KEY,
            openrouter: process.env.OPENROUTER_API_KEY,
            together: process.env.TOGETHER_API_KEY || process.env.TOGETHERAI_API_KEY,
            chutes: process.env.CHUTES_API_KEY,
        },
        githubToken: process.env.GITHUB_TOKEN,
    };
}
//# sourceMappingURL=config.js.map