"use strict";
// Optional Sentry error monitoring — enabled only when SENTRY_DSN is set,
// every capture below is a silent no-op otherwise. Ports the coordinator's
// module, coerceError included.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.flushMonitoring = exports.captureShutdownMarker = exports.captureBootMarker = exports.captureError = exports.coerceError = exports.initMonitoring = void 0;
const Sentry = __importStar(require("@sentry/node"));
let enabled = false;
// The docker image tag is the package version, so it doubles as the release
// identity. Runtime require so tsc's output layout is untouched; the runtime
// image copies package.json next to dist/.
const packageVersion = (() => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const pkg = require("../package.json");
        return typeof pkg.version === "string" ? pkg.version : undefined;
    }
    catch {
        return undefined;
    }
})();
// Start Sentry when SENTRY_DSN is set. Returns whether monitoring is active.
const initMonitoring = () => {
    const dsn = process.env.SENTRY_DSN?.trim();
    if (!dsn) {
        return false;
    }
    Sentry.init({
        dsn,
        // Railway's env name splits staging from production; NODE_ENV is
        // production on both (matches the coordinator).
        environment: process.env.SENTRY_ENVIRONMENT?.trim() ||
            process.env.RAILWAY_ENVIRONMENT_NAME ||
            process.env.NODE_ENV ||
            "development",
        release: process.env.SENTRY_RELEASE?.trim() ||
            (packageVersion ? `sb-evals@${packageVersion}` : undefined),
        tracesSampleRate: 0,
        // strict = capture then exit, matching Node's default crash-on-rejection;
        // the default 'warn' mode would silently keep the process alive. Custom
        // integrations MERGE with the defaults, so onUncaughtException stays on.
        integrations: [Sentry.onUnhandledRejectionIntegration({ mode: "strict" })],
    });
    enabled = true;
    return true;
};
exports.initMonitoring = initMonitoring;
const safeStringify = (value) => {
    try {
        return JSON.stringify(value) ?? String(value);
    }
    catch {
        return String(value);
    }
};
// Non-Error throwables (provider SDK errors can be plain objects) stringify
// to "[object Object]"; pull out their message/code instead.
const coerceError = (value) => {
    if (value instanceof Error) {
        return value;
    }
    if (typeof value === "object" && value !== null) {
        const { message, code } = value;
        const text = typeof message === "string" && message !== "" ? message : safeStringify(value);
        return new Error((typeof code === "string" && code !== "") || typeof code === "number"
            ? `${text} (code: ${code})`
            : text);
    }
    return new Error(String(value));
};
exports.coerceError = coerceError;
// Capture an exception; context entries become searchable tags, extra
// entries attach as non-indexed context (use for unbounded values like URLs).
const captureError = (error, context, extra) => {
    if (!enabled) {
        return;
    }
    Sentry.withScope((scope) => {
        scope.setTags(context);
        for (const [key, value] of Object.entries(extra ?? {})) {
            scope.setExtra(key, value);
        }
        // Keep the full original shape (details/hint/etc.) alongside the message
        if (!(error instanceof Error)) {
            scope.setExtra("raw_error", error);
        }
        Sentry.captureException((0, exports.coerceError)(error));
    });
};
exports.captureError = captureError;
// One event per boot. The event timeline of this issue is the restart
// ledger the in-memory job store otherwise erases.
const captureBootMarker = () => {
    if (!enabled) {
        return;
    }
    Sentry.withScope((scope) => {
        scope.setTags({ source: "lifecycle" });
        Sentry.captureMessage("eval-service started", "info");
    });
};
exports.captureBootMarker = captureBootMarker;
// Captured on graceful shutdown only when evaluations are in flight — those
// jobs are lost with the process, and this event is the forensic record of
// which ones. A hard kill skips this; the next boot marker still brackets it.
const captureShutdownMarker = (signal, inFlight) => {
    if (!enabled || inFlight.length === 0) {
        return;
    }
    Sentry.withScope((scope) => {
        scope.setTags({ source: "lifecycle", signal });
        scope.setExtra("in_flight_jobs", inFlight);
        Sentry.captureMessage(`eval-service shutting down with ${inFlight.length} evaluation(s) in flight`, "warning");
    });
};
exports.captureShutdownMarker = captureShutdownMarker;
// Flush pending events before an exit path; best-effort.
const flushMonitoring = async (timeoutMs = 2_000) => {
    if (!enabled) {
        return;
    }
    try {
        await Sentry.flush(timeoutMs);
    }
    catch {
        // Exiting anyway.
    }
};
exports.flushMonitoring = flushMonitoring;
//# sourceMappingURL=monitoring.js.map