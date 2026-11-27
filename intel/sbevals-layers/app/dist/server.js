"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildServer = buildServer;
const express_1 = __importDefault(require("express"));
const pino_http_1 = require("pino-http");
const monitoring_1 = require("./monitoring");
const store_1 = require("./jobs/store");
const worker_1 = require("./jobs/worker");
const config_1 = require("./routes/config");
const evaluations_1 = require("./routes/evaluations");
const health_1 = require("./routes/health");
function buildServer(cfg, logger) {
    const app = (0, express_1.default)();
    app.disable("x-powered-by");
    // Per-request structured logging.
    app.use((0, pino_http_1.pinoHttp)({ logger }));
    // Health is wired up first and has NO auth — needed for liveness probes.
    (0, health_1.registerHealthRoutes)(app);
    // /config (X-API-Key required — it names the hidden pre-gate judge model):
    // the running process's effective non-secret config, for the suite-builder's
    // stale-server preflight check.
    (0, config_1.registerConfigRoutes)(app, cfg);
    const store = new store_1.MemoryJobStore();
    const worker = new worker_1.JobWorker(cfg, logger, store);
    // Always-on routes: POST /evaluations + GET /evaluations/:jobId.
    (0, evaluations_1.registerEvaluationRoutes)(app, { cfg, store, worker });
    // DB-backed routes (POST /evaluations/from-task, /from-submission) live
    // in a separate module that imports src/db/. The validator-side Docker
    // image strips both that module and src/db/ before tsc runs, which is
    // why server.ts deliberately has NO static imports from src/db/ — only
    // the runtime require() inside the if-block below pulls them in. The
    // require uses a string variable so tsc doesn't try to resolve it at
    // compile time (which would fail in the validator build).
    //
    // cfg.supabase is null whenever SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY
    // is unset — which is the only state the validator-side image is ever
    // started in.
    if (cfg.supabase) {
        const dbRoutesPath = "./routes/evaluations.db";
        // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
        const dbRoutes = require(dbRoutesPath);
        dbRoutes.registerDbRoutes(app, { cfg, store, worker });
        logger.info({ db_routes: true }, "DB-backed routes enabled");
    }
    else {
        logger.info({ db_routes: false }, "DB-backed routes disabled (SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set)");
    }
    // Final error handler. Express 4 doesn't auto-forward async rejections,
    // so route handlers wrap themselves with `asyncHandler` (see routes).
    app.use((err, req, res, _next) => {
        req.log?.error({ err }, "unhandled error");
        (0, monitoring_1.captureError)(err, { source: "http" }, { path: req.path });
        if (res.headersSent)
            return;
        res.status(500).json({ error: err.message ?? "internal error" });
    });
    return { app, store };
}
//# sourceMappingURL=server.js.map