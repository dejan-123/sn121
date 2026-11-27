"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobWorker = void 0;
const monitoring_1 = require("../monitoring");
const runner_1 = require("../eval/runner");
// Bounded concurrent worker pool. Each call to enqueue() returns immediately;
// the job runs as soon as a slot is free.
class JobWorker {
    cfg;
    logger;
    store;
    active = 0;
    waiting = [];
    constructor(cfg, logger, store) {
        this.cfg = cfg;
        this.logger = logger;
        this.store = store;
    }
    enqueue(job) {
        void this.run(job);
    }
    async acquire() {
        if (this.active < this.cfg.maxConcurrentEvals) {
            this.active++;
            return;
        }
        await new Promise((resolve) => this.waiting.push(resolve));
        this.active++;
    }
    release() {
        this.active--;
        const next = this.waiting.shift();
        if (next)
            next();
    }
    async run(job) {
        await this.acquire();
        const log = this.logger.child({ jobId: job.id });
        try {
            this.store.update(job.id, { status: "running", startedAt: new Date().toISOString() });
            const result = await (0, runner_1.runEvaluation)({
                jobId: job.id,
                payload: job.payload,
                options: job.options,
                cfg: this.cfg,
                logger: log,
                onProgress: (completedSamples, totalSamples) => {
                    this.store.update(job.id, { progress: { completedSamples, totalSamples } });
                },
            });
            this.store.update(job.id, {
                status: "completed",
                result,
                completedAt: new Date().toISOString(),
            });
            log.info({ duration: result.duration_seconds }, "evaluation completed");
        }
        catch (err) {
            const message = err.message ?? String(err);
            log.error({ err }, "evaluation failed");
            const metadata = job.payload.metadata ?? {};
            const minerHotkey = typeof metadata.miner_hotkey === "string" ? metadata.miner_hotkey : undefined;
            // Omit absent identity tags entirely — Sentry drops empty tag values,
            // which would make tag presence inconsistent across events.
            (0, monitoring_1.captureError)(err, {
                source: "eval_job",
                job_id: job.id,
                ...(job.payload.task_id ? { task_id: job.payload.task_id } : {}),
                ...(minerHotkey ? { miner_hotkey: minerHotkey } : {}),
            });
            this.store.update(job.id, {
                status: "failed",
                error: message,
                completedAt: new Date().toISOString(),
            });
        }
        finally {
            this.release();
        }
    }
}
exports.JobWorker = JobWorker;
//# sourceMappingURL=worker.js.map