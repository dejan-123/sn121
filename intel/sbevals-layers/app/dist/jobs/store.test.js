"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const store_1 = require("./store");
const makeJob = (id, status) => ({
    id,
    status,
    payload: { task_id: `task-${id}`, suite_file_path: "suite.yaml" },
    progress: { completedSamples: 0, totalSamples: 0 },
    createdAt: new Date().toISOString(),
});
(0, vitest_1.describe)("MemoryJobStore.inFlight", () => {
    (0, vitest_1.it)("returns queued and running jobs only", () => {
        const store = new store_1.MemoryJobStore();
        store.create(makeJob("a", "queued"));
        store.create(makeJob("b", "running"));
        store.create(makeJob("c", "completed"));
        store.create(makeJob("d", "failed"));
        const ids = store
            .inFlight()
            .map((j) => j.id)
            .sort();
        (0, vitest_1.expect)(ids).toEqual(["a", "b"]);
    });
    (0, vitest_1.it)("returns an empty list when idle", () => {
        const store = new store_1.MemoryJobStore();
        store.create(makeJob("done", "completed"));
        (0, vitest_1.expect)(store.inFlight()).toEqual([]);
    });
});
//# sourceMappingURL=store.test.js.map