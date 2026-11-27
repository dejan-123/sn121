"use strict";
// 1.0 if the agent invoked load_skill at least once during the run,
// else 0.0. Useful as a 0-weight gate to ensure agents are actually
// consulting the skill rather than freelancing.
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireLoadSkill = void 0;
const requireLoadSkill = async (ctx) => {
    const called = ctx.trajectory.messages.some((m) => m.kind === "tool_call" && m.name === "load_skill");
    return called
        ? { score: 1.0, rationale: "Agent called load_skill" }
        : { score: 0.0, rationale: "Agent did not call load_skill" };
};
exports.requireLoadSkill = requireLoadSkill;
//# sourceMappingURL=require-load-skill.js.map