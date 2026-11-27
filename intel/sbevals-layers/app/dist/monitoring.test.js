"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const monitoring_1 = require("./monitoring");
(0, vitest_1.describe)("monitoring", () => {
    const savedDsn = process.env.SENTRY_DSN;
    (0, vitest_1.beforeEach)(() => {
        delete process.env.SENTRY_DSN;
    });
    (0, vitest_1.afterAll)(() => {
        if (savedDsn !== undefined) {
            process.env.SENTRY_DSN = savedDsn;
        }
    });
    (0, vitest_1.it)("stays disabled without SENTRY_DSN", () => {
        (0, vitest_1.expect)((0, monitoring_1.initMonitoring)()).toBe(false);
    });
    (0, vitest_1.it)("captures and markers are no-ops when disabled", async () => {
        (0, vitest_1.expect)(() => {
            (0, monitoring_1.captureError)(new Error("boom"), { source: "test" });
            (0, monitoring_1.captureError)("not an Error instance", { source: "test" });
            (0, monitoring_1.captureBootMarker)();
            (0, monitoring_1.captureShutdownMarker)("SIGTERM", [
                { jobId: "j1", taskId: "t1", status: "running" },
            ]);
            (0, monitoring_1.captureShutdownMarker)("SIGTERM", []);
        }).not.toThrow();
        await (0, vitest_1.expect)((0, monitoring_1.flushMonitoring)()).resolves.toBeUndefined();
    });
});
(0, vitest_1.describe)("coerceError", () => {
    (0, vitest_1.it)("passes Error instances through unchanged", () => {
        const err = new Error("boom");
        (0, vitest_1.expect)((0, monitoring_1.coerceError)(err)).toBe(err);
    });
    (0, vitest_1.it)("uses message and code from plain error-shaped objects", () => {
        const err = (0, monitoring_1.coerceError)({
            message: "connection refused",
            code: "ECONNREFUSED",
            details: "upstream provider unreachable",
        });
        (0, vitest_1.expect)(err.message).toBe("connection refused (code: ECONNREFUSED)");
    });
    (0, vitest_1.it)('serializes message-less objects instead of "[object Object]"', () => {
        (0, vitest_1.expect)((0, monitoring_1.coerceError)({ status: 502 }).message).toBe('{"status":502}');
    });
    (0, vitest_1.it)("omits the code suffix when code is an empty string", () => {
        (0, vitest_1.expect)((0, monitoring_1.coerceError)({ message: "fetch failed", code: "" }).message).toBe("fetch failed");
    });
    (0, vitest_1.it)("falls back to String() when serialization throws", () => {
        const circular = {};
        circular.self = circular;
        (0, vitest_1.expect)((0, monitoring_1.coerceError)(circular).message).toBe("[object Object]");
    });
    (0, vitest_1.it)("stringifies primitives", () => {
        (0, vitest_1.expect)((0, monitoring_1.coerceError)("plain string").message).toBe("plain string");
        (0, vitest_1.expect)((0, monitoring_1.coerceError)(undefined).message).toBe("undefined");
        (0, vitest_1.expect)((0, monitoring_1.coerceError)(null).message).toBe("null");
    });
});
//# sourceMappingURL=monitoring.test.js.map