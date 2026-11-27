"use strict";
// Tests that skill_integrity now generalizes to any challenge by deriving
// its variant patterns from the challenge's own dataset.jsonl. The old
// hardcoded-SBC9-regex behavior is preserved for the SBC9 case (same
// dataset → same patterns extracted → same catch).
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("node:fs"));
const os = __importStar(require("node:os"));
const path = __importStar(require("node:path"));
const vitest_1 = require("vitest");
const check_skill_integrity_1 = require("./check-skill-integrity");
// Build a minimal context that the grader expects. The grader only reads
// `submission` and `files["dataset.jsonl"]`; the rest are placeholders to
// satisfy the GraderContext shape.
function makeCtx(submission, datasetPath) {
    return {
        submission,
        files: datasetPath ? { "dataset.jsonl": datasetPath } : {},
        // Unused by this grader — type satisfaction only
        sample: { id: "x", input: "" },
        trajectory: { messages: [], step_count: 0, total_tokens: 0, finish_reason: "end_turn" },
        spec: {},
    };
}
// Write a temporary dataset.jsonl and return its path. tests clean these
// up via the beforeEach/afterEach pair below.
let tmpDir;
(0, vitest_1.beforeEach)(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "skill-integrity-test-"));
});
(0, vitest_1.afterEach)(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
});
function writeDataset(rows) {
    const p = path.join(tmpDir, "dataset.jsonl");
    fs.writeFileSync(p, rows.map((r) => JSON.stringify(r)).join("\n"));
    return p;
}
function submission(skillBody) {
    return JSON.stringify({ skill: { body: skillBody } });
}
(0, vitest_1.describe)("checkSkillIntegrity — dataset-derived patterns", () => {
    (0, vitest_1.it)("catches a named entity from the dataset appearing verbatim in SKILL.md", async () => {
        const ds = writeDataset([
            {
                id: "S-001",
                input: "Customer Apex Corp emailed about a billing discrepancy of $1,200.",
                ground_truth: { output: "Acknowledge and apologize.", metadata: {} },
            },
        ]);
        const result = await (0, check_skill_integrity_1.checkSkillIntegrity)(makeCtx(submission("If the customer is Apex Corp, offer a 10% discount."), ds));
        (0, vitest_1.expect)(result.score).toBe(0.0);
        (0, vitest_1.expect)(result.rationale).toMatch(/Apex Corp/i);
    });
    (0, vitest_1.it)("catches a currency amount that only makes sense for this dataset", async () => {
        const ds = writeDataset([
            { id: "S-001", input: "The customer paid $1,188 and wants a refund." },
        ]);
        const result = await (0, check_skill_integrity_1.checkSkillIntegrity)(makeCtx(submission("For refunds, the standard answer mentions $1,188."), ds));
        (0, vitest_1.expect)(result.score).toBe(0.0);
        (0, vitest_1.expect)(result.rationale).toContain("$1,188");
    });
    (0, vitest_1.it)("catches a 30+ char verbatim phrase from a sample input", async () => {
        const phrase = "the customer told us they were misled by the original sales pitch";
        const ds = writeDataset([
            { id: "S-001", input: `Initial complaint: ${phrase}. Please respond.` },
        ]);
        const result = await (0, check_skill_integrity_1.checkSkillIntegrity)(makeCtx(submission(`When you see "${phrase}", reply with empathy and a 5% refund.`), ds));
        (0, vitest_1.expect)(result.score).toBe(0.0);
        (0, vitest_1.expect)(result.rationale).toMatch(/verbatim phrase/i);
    });
    (0, vitest_1.it)("catches the universal if-then template even with a clean dataset", async () => {
        const ds = writeDataset([
            { id: "S-001", input: "Generic scenario with no leakable specifics." },
        ]);
        const result = await (0, check_skill_integrity_1.checkSkillIntegrity)(makeCtx(submission("If the customer is upset, respond with the following template: ..."), ds));
        (0, vitest_1.expect)(result.score).toBe(0.0);
        (0, vitest_1.expect)(result.rationale).toMatch(/if-then template/i);
    });
    (0, vitest_1.it)("passes a procedural SKILL.md that doesn't reference variant specifics", async () => {
        const ds = writeDataset([
            { id: "S-001", input: "Customer Apex Corp emailed about a $1,200 billing issue." },
        ]);
        const result = await (0, check_skill_integrity_1.checkSkillIntegrity)(makeCtx(submission("When handling billing disputes, first acknowledge the customer's concern, " +
            "then confirm the disputed amount in your records before responding."), ds));
        (0, vitest_1.expect)(result.score).toBe(1.0);
    });
    (0, vitest_1.it)("works for a non-SBC9 challenge — HR feedback variants", async () => {
        // No SBC9 hardcoded patterns appear here. This case would have
        // slipped through the old gate entirely.
        const ds = writeDataset([
            {
                id: "S-001",
                input: "Sarah Mendez missed her deadline. Provide feedback in the brand voice.",
                ground_truth: { output: "Direct yet supportive feedback example.", metadata: {} },
            },
        ]);
        const result = await (0, check_skill_integrity_1.checkSkillIntegrity)(makeCtx(submission("If giving feedback to Sarah Mendez, prefer the supportive tone."), ds));
        (0, vitest_1.expect)(result.score).toBe(0.0);
        (0, vitest_1.expect)(result.rationale).toMatch(/Sarah Mendez/i);
    });
    (0, vitest_1.it)("fails open when dataset.jsonl is missing", async () => {
        // No dataset path in ctx.files. Should still pass cleanly without
        // crashing — variants can't be checked but structural patterns ran.
        const result = await (0, check_skill_integrity_1.checkSkillIntegrity)(makeCtx(submission("A perfectly procedural skill body."), null));
        (0, vitest_1.expect)(result.score).toBe(1.0);
        (0, vitest_1.expect)(result.rationale).toMatch(/dataset not available/i);
    });
    (0, vitest_1.it)("fails open when SKILL.md cannot be parsed", async () => {
        const ds = writeDataset([{ id: "S-001", input: "x" }]);
        const result = await (0, check_skill_integrity_1.checkSkillIntegrity)({
            ...makeCtx("not valid json", ds),
            submission: "not valid json",
        });
        (0, vitest_1.expect)(result.score).toBe(1.0);
        (0, vitest_1.expect)(result.rationale).toMatch(/defaulting to pass/i);
    });
    (0, vitest_1.it)("reports the empty-content case", async () => {
        const ds = writeDataset([{ id: "S-001", input: "x" }]);
        const result = await (0, check_skill_integrity_1.checkSkillIntegrity)(makeCtx(JSON.stringify({ skill: { body: "" } }), ds));
        (0, vitest_1.expect)(result.score).toBe(0.0);
        (0, vitest_1.expect)(result.rationale).toContain("No SKILL.md content");
    });
});
//# sourceMappingURL=check-skill-integrity.test.js.map