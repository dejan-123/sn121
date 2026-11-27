"use strict";
// Always-available routes:
//   POST /evaluations               full task_payload submitted directly
//   GET  /evaluations/{jobId}       status / result
//
// DB-backed routes (POST /evaluations/from-task,
// POST /evaluations/from-submission) live in ./evaluations.db.ts and are
// registered conditionally by src/server.ts when SUPABASE_* env vars are
// set. The validator-side Docker build strips the .db.ts file entirely
// (see Dockerfile.validator) — the runtime gate ensures we never try to
// require it without DB credentials.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerEvaluationRoutes = registerEvaluationRoutes;
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const middleware_1 = require("../auth/middleware");
function asyncHandler(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
}
function registerEvaluationRoutes(app, deps) {
    const { cfg, store, worker } = deps;
    // Auth stack used by all non-/health routes:
    //   1. tryApiKey      — pre-body. Sets authKind='api-key' on success;
    //                        passes through silently when no X-API-Key was
    //                        sent. Rejects 401 only if a WRONG X-API-Key was
    //                        sent (caller meant to use that auth method).
    //   2. express.json   — body parser.
    //   3. trySignature   — post-body. Skips when authKind already set.
    //                        Otherwise requires a valid sr25519 signature.
    //
    // For the X-API-Key happy path, the body parser only runs after auth
    // has been validated — preserving the "don't allocate 50MB for
    // unauthenticated callers" property.
    //
    // For the signed path, we have to parse the body to verify signatures
    // over body content. Per-route body limits cap the blast radius.
    const auth = (jsonLimit) => [
        (0, middleware_1.tryApiKey)(cfg.apiKeys),
        express_1.default.json({ limit: jsonLimit }),
        (0, middleware_1.trySignature)(cfg),
    ];
    // ── POST /evaluations ─────────────────────────────────────────────
    // Operator path in practice (validators don't have task_payloads to
    // submit directly). Auth-mode-agnostic at the middleware layer; 50MB
    // body limit accommodates inline base64 task payloads.
    app.post("/evaluations", auth("50mb"), asyncHandler(async (req, res) => {
        const body = req.body;
        if (!body || !body.task_payload) {
            res.status(400).json({ error: "Missing 'task_payload' in request body" });
            return;
        }
        // Skill-only mode: the agent is a hardcoded harness (configured via
        // SKILL_HARNESS_* env). Per-task agent files are accepted-but-ignored
        // for back-compat with existing nestapi task_payload shapes — but a
        // skill_file_path is required, since that's the actual thing being
        // graded.
        if (!body.task_payload.suite_file_path || !body.task_payload.skill_file_path) {
            res
                .status(400)
                .json({ error: "task_payload requires both 'suite_file_path' and 'skill_file_path'" });
            return;
        }
        const id = (0, uuid_1.v4)();
        store.create({
            id,
            status: "queued",
            payload: body.task_payload,
            options: body.options,
            progress: { completedSamples: 0, totalSamples: 0 },
            createdAt: new Date().toISOString(),
        });
        worker.enqueue(store.get(id));
        res.status(202).json({ jobId: id, status: "queued" });
    }));
    // ── GET /evaluations/{jobId} ──────────────────────────────────────
    // Status polling. Validators sign the path string (`GET /evaluations/<id>`)
    // and put the sig in X-Signature + their pubkey in X-Hotkey. Operators
    // send X-API-Key. Either auth method works.
    app.get("/evaluations/:jobId", auth("1kb"), asyncHandler(async (req, res) => {
        const job = store.get(req.params.jobId);
        if (!job) {
            res.status(404).json({ error: "job not found" });
            return;
        }
        res.status(200).json({
            jobId: job.id,
            status: job.status,
            progress: job.progress,
            result: job.result,
            error: job.error,
            createdAt: job.createdAt,
            startedAt: job.startedAt,
            completedAt: job.completedAt,
        });
    }));
}
//# sourceMappingURL=evaluations.js.map