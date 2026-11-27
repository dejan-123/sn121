"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const config_1 = require("./config");
const cfg = {
    serverPort: 8090,
    logLevel: "info",
    workDir: "/tmp/w",
    apiKeys: ["k1"],
    skipSignatureVerification: true,
    maxSteps: 10,
    maxConcurrentEvals: 1,
    tokensPerTestCase: 30000,
    maxTokensPerEval: 300000,
    judgeMaxTokens: 2048,
    skillHarness: {
        provider: "openrouter",
        model: "anthropic/claude-haiku-4.5",
        systemPrompt: "sp",
        temperature: 0,
        maxTokens: 8192,
    },
    providerKeys: { openrouter: "secret-or-key", anthropic: undefined },
};
(0, vitest_1.describe)("buildConfigReport", () => {
    (0, vitest_1.it)("reports effective harness + judge env without any secret values", () => {
        const report = (0, config_1.buildConfigReport)(cfg, {
            SKILL_USE_JUDGE_PROVIDER: "openrouter",
            SKILL_USE_JUDGE_MODEL: "anthropic/claude-opus-4.8",
        });
        (0, vitest_1.expect)(report.harness.model).toBe("anthropic/claude-haiku-4.5");
        (0, vitest_1.expect)(report.harness.maxTokens).toBe(8192);
        (0, vitest_1.expect)(report.judges.skillUseJudgeModel).toBe("anthropic/claude-opus-4.8");
        (0, vitest_1.expect)(report.judges.skillUseJudgeProvider).toBe("openrouter");
        (0, vitest_1.expect)(report.limits.tokensPerTestCase).toBe(30000);
        (0, vitest_1.expect)(report.db_routes).toBe(false);
        // keys are presence-only — the value must never appear anywhere
        (0, vitest_1.expect)(report.provider_keys_present).toEqual({ openrouter: true, anthropic: false });
        (0, vitest_1.expect)(JSON.stringify(report)).not.toContain("secret-or-key");
        (0, vitest_1.expect)(JSON.stringify(report)).not.toContain("k1");
    });
    (0, vitest_1.it)("reports null judge config when the env vars are unset", () => {
        const report = (0, config_1.buildConfigReport)(cfg, {});
        (0, vitest_1.expect)(report.judges.skillUseJudgeModel).toBeNull();
        (0, vitest_1.expect)(report.judges.skillUseJudgeProvider).toBeNull();
    });
});
//# sourceMappingURL=config.test.js.map