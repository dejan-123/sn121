"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHealthRoutes = registerHealthRoutes;
function registerHealthRoutes(app) {
    app.get("/health", (_req, res) => {
        res.status(200).json({ status: "ok", uptime_s: Math.floor(process.uptime()) });
    });
}
//# sourceMappingURL=health.js.map