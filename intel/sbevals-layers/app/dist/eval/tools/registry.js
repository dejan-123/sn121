"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolRegistry = void 0;
class ToolRegistry {
    handlers = new Map();
    register(handler) {
        this.handlers.set(handler.schema.name, handler);
    }
    get(name) {
        return this.handlers.get(name);
    }
    // Returns the schemas for the named subset, in declaration order. Throws
    // if any name is unknown — better to fail early than send the agent into
    // a loop calling a tool that doesn't exist.
    schemasFor(names) {
        return names.map((n) => {
            const h = this.handlers.get(n);
            if (!h)
                throw new Error(`Unknown tool: "${n}". Registered: ${[...this.handlers.keys()].join(", ")}`);
            return h.schema;
        });
    }
}
exports.ToolRegistry = ToolRegistry;
//# sourceMappingURL=registry.js.map