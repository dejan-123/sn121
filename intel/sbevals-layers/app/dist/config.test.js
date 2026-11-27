"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const config_1 = require("./config");
// Pins the bypass polarity: verification runs everywhere except an
// explicit NODE_ENV=development or SKIP_SIGNATURE_VERIFICATION=true.
function skipWith(env) {
    const touched = ["NODE_ENV", "SKIP_SIGNATURE_VERIFICATION", "EVAL_SERVICE_API_KEY"];
    const saved = {};
    for (const k of touched)
        saved[k] = process.env[k];
    try {
        for (const k of touched)
            delete process.env[k];
        process.env.EVAL_SERVICE_API_KEY = "test-key";
        Object.assign(process.env, env);
        return (0, config_1.loadConfig)().skipSignatureVerification;
    }
    finally {
        for (const k of touched) {
            if (saved[k] === undefined)
                delete process.env[k];
            else
                process.env[k] = saved[k];
        }
    }
}
(0, vitest_1.describe)("signature-verification bypass", () => {
    (0, vitest_1.it)("verifies when NODE_ENV is unset", () => {
        (0, vitest_1.expect)(skipWith({})).toBe(false);
    });
    vitest_1.it.each(["production", "staging", "test"])("verifies when NODE_ENV=%s", (nodeEnv) => {
        (0, vitest_1.expect)(skipWith({ NODE_ENV: nodeEnv })).toBe(false);
    });
    (0, vitest_1.it)("skips on explicit NODE_ENV=development", () => {
        (0, vitest_1.expect)(skipWith({ NODE_ENV: "development" })).toBe(true);
    });
    (0, vitest_1.it)("skips on SKIP_SIGNATURE_VERIFICATION=true regardless of NODE_ENV", () => {
        (0, vitest_1.expect)(skipWith({ NODE_ENV: "production", SKIP_SIGNATURE_VERIFICATION: "true" })).toBe(true);
    });
    (0, vitest_1.it)("ignores SKIP_SIGNATURE_VERIFICATION values other than 'true'", () => {
        (0, vitest_1.expect)(skipWith({ SKIP_SIGNATURE_VERIFICATION: "1" })).toBe(false);
    });
});
//# sourceMappingURL=config.test.js.map