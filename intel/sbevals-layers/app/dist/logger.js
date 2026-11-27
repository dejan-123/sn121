"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = createLogger;
const pino_1 = __importDefault(require("pino"));
function createLogger(level, destination) {
    const isDev = process.env.NODE_ENV !== "production";
    const options = {
        level,
        timestamp: pino_1.default.stdTimeFunctions.isoTime,
        transport: isDev
            ? { target: "pino-pretty", options: { colorize: true, translateTime: "SYS:standard" } }
            : undefined,
        // Railway maps severity from a string `level` field; numeric pino levels all render as info.
        formatters: isDev ? undefined : { level: (label) => ({ level: label }) },
    };
    return destination ? (0, pino_1.default)(options, destination) : (0, pino_1.default)(options);
}
//# sourceMappingURL=logger.js.map