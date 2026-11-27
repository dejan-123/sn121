"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const logger_1 = require("./logger");
// Production output must carry the level label, not pino's numeric level.
function levelsWith(nodeEnv) {
    const saved = process.env.NODE_ENV;
    try {
        process.env.NODE_ENV = nodeEnv;
        const lines = [];
        const logger = (0, logger_1.createLogger)("info", {
            write: (msg) => {
                lines.push(msg);
            },
        });
        logger.warn("warn line");
        logger.error("error line");
        return lines.map((line) => JSON.parse(line).level);
    }
    finally {
        if (saved === undefined)
            delete process.env.NODE_ENV;
        else
            process.env.NODE_ENV = saved;
    }
}
(0, vitest_1.describe)("createLogger", () => {
    (0, vitest_1.it)("emits string level labels in production", () => {
        (0, vitest_1.expect)(levelsWith("production")).toEqual(["warn", "error"]);
    });
});
//# sourceMappingURL=logger.test.js.map