"use strict";
// Shared types used across the eval pipeline. These mirror the shapes
// produced by today's letta-evals so the validator's existing result
// extraction code keeps working when we wire it up.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZERO_GRADER_USAGE = void 0;
// Zero-valued constant for safe initialization / fallback.
exports.ZERO_GRADER_USAGE = {
    inputTokens: 0,
    outputTokens: 0,
    cachedTokens: 0,
    reasoningTokens: 0,
    totalTokens: 0,
};
//# sourceMappingURL=types.js.map