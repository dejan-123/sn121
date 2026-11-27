"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const logger_1 = require("./logger");
const monitoring_1 = require("./monitoring");
const server_1 = require("./server");
async function main() {
    const cfg = (0, config_1.loadConfig)(); // loads .env — must run before initMonitoring reads SENTRY_DSN
    const logger = (0, logger_1.createLogger)(cfg.logLevel);
    if ((0, monitoring_1.initMonitoring)()) {
        logger.info("Sentry error monitoring enabled");
    }
    else {
        logger.info("SENTRY_DSN not set — error monitoring disabled");
    }
    (0, monitoring_1.captureBootMarker)();
    // Startup audit: shout if sr25519 verification is bypassed. The bypass
    // is opt-in only (explicit NODE_ENV=development or
    // SKIP_SIGNATURE_VERIFICATION=true) and the symptom (validators with
    // forged hotkeys getting accepted) is silent at runtime — this line is
    // the only safety net.
    if (cfg.skipSignatureVerification) {
        const reason = process.env.SKIP_SIGNATURE_VERIFICATION === "true"
            ? "SKIP_SIGNATURE_VERIFICATION=true"
            : "NODE_ENV=development (explicit dev bypass)";
        logger.warn({ reason }, "⚠️  sr25519 signature verification is DISABLED — any caller can claim any hotkey on signed routes. Unset SKIP_SIGNATURE_VERIFICATION and do not run with NODE_ENV=development when serving real traffic.");
    }
    else {
        logger.info({ nodeEnv: process.env.NODE_ENV }, "sr25519 signature verification enabled");
    }
    const { app, store } = (0, server_1.buildServer)(cfg, logger);
    const server = app.listen(cfg.serverPort, "0.0.0.0", () => {
        logger.info({ port: cfg.serverPort }, "eval-service listening");
    });
    server.on("error", (err) => {
        logger.error({ err }, "failed to start server");
        (0, monitoring_1.captureError)(err, { source: "startup" });
        void (0, monitoring_1.flushMonitoring)().finally(() => process.exit(1));
    });
    for (const sig of ["SIGINT", "SIGTERM"]) {
        process.on(sig, () => {
            const inFlight = store.inFlight().map((job) => ({
                jobId: job.id,
                taskId: job.payload.task_id,
                status: job.status,
            }));
            logger.info({ sig, inFlightJobs: inFlight.length }, "shutting down");
            (0, monitoring_1.captureShutdownMarker)(sig, inFlight);
            void (0, monitoring_1.flushMonitoring)().finally(() => {
                server.close(() => process.exit(0));
            });
        });
    }
}
main();
//# sourceMappingURL=index.js.map