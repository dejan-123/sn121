"use strict";
// Skill-only mode replacement for old agent-file graders. Always 1.0.
// We're not running user-supplied agent files anymore (the harness is
// hardcoded), so suites that still reference agent-design checks via the
// PYTHON_TO_TS_GRADER_ALIASES map land here and pass cleanly without
// breaking the gate logic.
Object.defineProperty(exports, "__esModule", { value: true });
exports.agentFileNoop = void 0;
const agentFileNoop = async () => ({
    score: 1.0,
    rationale: "agent-file grader (no-op in skill-only mode)",
});
exports.agentFileNoop = agentFileNoop;
//# sourceMappingURL=agent-file-noop.js.map