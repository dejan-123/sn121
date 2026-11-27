"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryJobStore = void 0;
// In-memory implementation. Jobs are lost on restart — documented limitation.
// Swap behind this interface (Redis, SQLite) when persistence is needed.
class MemoryJobStore {
    jobs = new Map();
    // Per-job list of resolvers that fire on terminal-state transitions.
    waiters = new Map();
    create(job) {
        this.jobs.set(job.id, job);
    }
    get(id) {
        return this.jobs.get(id);
    }
    inFlight() {
        return [...this.jobs.values()].filter((job) => job.status === "queued" || job.status === "running");
    }
    update(id, patch) {
        const cur = this.jobs.get(id);
        if (!cur)
            throw new Error(`No such job: ${id}`);
        const updated = { ...cur, ...patch };
        this.jobs.set(id, updated);
        if (updated.status === "completed" || updated.status === "failed") {
            const list = this.waiters.get(id);
            if (list && list.length > 0) {
                // Snapshot then clear — protect against re-entrancy if a waiter
                // adds another waiter inside its callback.
                this.waiters.delete(id);
                for (const fn of list)
                    fn(updated);
            }
        }
    }
    waitForCompletion(id, timeoutMs) {
        return new Promise((resolve, reject) => {
            const cur = this.jobs.get(id);
            if (!cur) {
                reject(new Error(`No such job: ${id}`));
                return;
            }
            if (cur.status === "completed" || cur.status === "failed") {
                resolve(cur);
                return;
            }
            const timer = setTimeout(() => {
                const list = this.waiters.get(id);
                if (list) {
                    const filtered = list.filter((w) => w !== resolver);
                    if (filtered.length > 0)
                        this.waiters.set(id, filtered);
                    else
                        this.waiters.delete(id);
                }
                reject(new Error(`timeout waiting for job ${id} after ${timeoutMs}ms`));
            }, timeoutMs);
            const resolver = (job) => {
                clearTimeout(timer);
                resolve(job);
            };
            const list = this.waiters.get(id) ?? [];
            list.push(resolver);
            this.waiters.set(id, list);
        });
    }
}
exports.MemoryJobStore = MemoryJobStore;
//# sourceMappingURL=store.js.map