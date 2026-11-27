"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readReferenceTool = void 0;
const skill_bundle_1 = require("../skill-bundle");
// read_reference — returns one of the skill bundle's reference files. Only
// registered on the harness when the task carries references, so a
// single-file submission sees exactly the tool set it always has.
//
// The product equivalent is Mastra's `skill_read`; the list the agent picks
// from is the "## References" block load_skill appends.
exports.readReferenceTool = {
    schema: {
        name: "read_reference",
        description: "Read one of the skill's reference files. The available files are listed under '## References' in the load_skill output. Read a reference only when the skill's instructions or the task call for it.",
        input_schema: {
            type: "object",
            properties: {
                path: {
                    type: "string",
                    description: "Path of the reference file as listed by load_skill, e.g. references/checklist.md",
                },
            },
            required: ["path"],
        },
    },
    async call(args, ctx) {
        const refs = ctx.skillReferences ?? {};
        const available = Object.keys(refs).sort();
        const listing = available.map((p) => `references/${p}`).join(", ") || "none";
        if (typeof args.path !== "string" || !args.path.trim()) {
            return `read_reference needs a "path". Available files: ${listing}.`;
        }
        const key = (0, skill_bundle_1.normalizeReferencePath)(args.path);
        // Own-key lookup: a path like "constructor" must not resolve to a prototype member.
        if (!Object.prototype.hasOwnProperty.call(refs, key)) {
            return `No file "${args.path}" in this skill. Available files: ${listing}.`;
        }
        return refs[key];
    },
};
//# sourceMappingURL=read-reference.js.map