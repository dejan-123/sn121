"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFile = fetchFile;
exports.persistFile = persistFile;
const axios_1 = __importDefault(require("axios"));
const node_fs_1 = require("node:fs");
const node_path_1 = __importDefault(require("node:path"));
const DATA_URI_RE = /^data:([^;,]*)(;base64)?,(.*)$/s;
async function fetchFile(ref, opts = {}) {
    if (!ref)
        throw new Error("fetchFile: empty reference");
    const dataMatch = ref.match(DATA_URI_RE);
    if (dataMatch) {
        const [, , isBase64, payload] = dataMatch;
        const content = isBase64
            ? Buffer.from(payload, "base64")
            : Buffer.from(decodeURIComponent(payload), "utf8");
        return { content, source: "data-uri" };
    }
    if (ref.startsWith("http://") || ref.startsWith("https://")) {
        const headers = {};
        if (opts.githubToken && /github\.com|githubusercontent\.com/.test(ref)) {
            headers["Authorization"] = `Bearer ${opts.githubToken}`;
        }
        // Configurable via FILE_FETCH_TIMEOUT_MS. Default raised to 5 minutes:
        // task files can be large (multi-MB datasets / agent files) and the
        // source storage (Supabase) occasionally has slow first-byte. The
        // previous 60s default surfaced as `"timeout of 60000ms exceeded"` on
        // the validator side, which looked like a polling timeout but was
        // actually our file fetch failing — see commit history for context.
        const timeoutMs = process.env.FILE_FETCH_TIMEOUT_MS
            ? parseInt(process.env.FILE_FETCH_TIMEOUT_MS, 10)
            : 5 * 60 * 1000;
        try {
            const res = await axios_1.default.get(ref, {
                headers,
                responseType: "arraybuffer",
                timeout: timeoutMs,
            });
            return {
                content: Buffer.from(res.data),
                filename: node_path_1.default.basename(new URL(ref).pathname) || undefined,
                source: "url",
            };
        }
        catch (err) {
            // Wrap axios's default error message with the URL so failures are
            // debuggable — otherwise "timeout of Xms exceeded" alone tells you
            // nothing about which file timed out.
            const code = err.code ?? "";
            const original = err.message ?? String(err);
            throw new Error(`failed to fetch file: ${ref.slice(0, 200)} (${code || "unknown"}): ${original}`);
        }
    }
    // Heuristic: looks like raw base64 if it contains no whitespace/newlines and is valid.
    if (/^[A-Za-z0-9+/=]+$/.test(ref) && ref.length > 16) {
        try {
            const content = Buffer.from(ref, "base64");
            if (content.length > 0)
                return { content, source: "base64" };
        }
        catch {
            // fall through
        }
    }
    throw new Error(`fetchFile: unrecognized reference (must be URL, data: URI, or base64). Got first 80 chars: ${ref.slice(0, 80)}`);
}
// Persist a fetched file under workDir/<jobId>/<name> and return the absolute path.
async function persistFile(workDir, jobId, name, content) {
    const dir = node_path_1.default.join(workDir, jobId);
    await node_fs_1.promises.mkdir(dir, { recursive: true });
    const full = node_path_1.default.join(dir, name);
    await node_fs_1.promises.writeFile(full, content);
    return full;
}
//# sourceMappingURL=fetch.js.map