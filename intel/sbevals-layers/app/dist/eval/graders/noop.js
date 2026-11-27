"use strict";
// Smoke-test stub. Always 1.0. Useful when wiring up a new suite to
// confirm the grader-dispatch plumbing works before plugging in real
// graders.
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = void 0;
const noop = async () => ({ score: 1.0, rationale: "noop grader" });
exports.noop = noop;
//# sourceMappingURL=noop.js.map