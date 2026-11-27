"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSkillTool = void 0;
const skill_bundle_1 = require("../skill-bundle");
// load_skill — returns the SKILL.md body that came in via the task payload.
// This is the v1's only built-in tool. Trajectory graders can detect whether
// the agent called it (via the tool_calls extractor).
exports.loadSkillTool = {
    schema: {
        name: "load_skill",
        description: "Load the skill instructions provided for this task. Returns the full markdown body of SKILL.md. Call this once at the start to learn the procedure you should follow before producing your final answer.",
        input_schema: {
            type: "object",
            properties: {},
            required: [],
        },
    },
    async call(_args, ctx) {
        if (ctx.skillContent === null) {
            return "No skill is attached to this task.";
        }
        // A bundle lists its reference files after the body (read via
        // read_reference). With none, the output is the body unchanged.
        const refs = (0, skill_bundle_1.sortReferences)(Object.entries(ctx.skillReferences ?? {}).map(([path, content]) => ({ path, content })));
        return (0, skill_bundle_1.formatSkillActivation)(ctx.skillContent, refs);
    },
};
//# sourceMappingURL=load-skill.js.map