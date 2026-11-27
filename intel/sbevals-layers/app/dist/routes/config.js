"use strict";
// GET /config — the RUNNING process's effective (non-secret) configuration.
//
// Why it exists: the suite-builder's preflight (`build_cli doctor`) needs to
// verify what the live service actually loaded, not what the .env file says
// now. config.ts loads dotenv once at startup, so an operator who edits .env
// without restarting is silently running stale models — the classic
// "bogus gate FAIL from a stale :8090 instance" failure. Comparing this
// endpoint's values against the file catches it deterministically.
//
// Auth: unlike /health this REQUIRES a valid X-API-Key. The response names
// the anti-gaming pre-gate judge model (SKILL_USE_JUDGE_MODEL), which is
// deliberately never disclosed to miners — an unauthenticated /config on a
// validator's public deployment would leak it. No secret VALUES are ever
// returned (provider keys are reported presence-only).
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildConfigReport = buildConfigReport;
exports.registerConfigRoutes = registerConfigRoutes;
const middleware_1 = require("../auth/middleware");
function buildConfigReport(cfg, env = process.env) {
    return {
        started_at: new Date(Date.now() - process.uptime() * 1000).toISOString(),
        uptime_s: Math.floor(process.uptime()),
        harness: {
            provider: cfg.skillHarness.provider,
            model: cfg.skillHarness.model,
            temperature: cfg.skillHarness.temperature,
            maxTokens: cfg.skillHarness.maxTokens,
        },
        judges: {
            skillUseJudgeProvider: env.SKILL_USE_JUDGE_PROVIDER || null,
            skillUseJudgeModel: env.SKILL_USE_JUDGE_MODEL || null,
            judgeMaxTokens: cfg.judgeMaxTokens,
        },
        limits: {
            maxSteps: cfg.maxSteps,
            maxConcurrentEvals: cfg.maxConcurrentEvals,
            tokensPerTestCase: cfg.tokensPerTestCase,
            maxTokensPerEval: cfg.maxTokensPerEval ?? null,
        },
        db_routes: Boolean(cfg.supabase),
        provider_keys_present: Object.fromEntries(Object.entries(cfg.providerKeys).map(([k, v]) => [k, Boolean(v)])),
    };
}
function registerConfigRoutes(app, cfg) {
    app.get("/config", (0, middleware_1.tryApiKey)(cfg.apiKeys), (req, res) => {
        // tryApiKey passes through silently when NO key was sent (it's built for
        // the two-stage evaluations auth) — here the key is mandatory.
        if (req.authKind !== "api-key") {
            res.status(401).json({ error: "X-API-Key required for /config" });
            return;
        }
        res.status(200).json(buildConfigReport(cfg));
    });
}
//# sourceMappingURL=config.js.map