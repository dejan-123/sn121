"use strict";
// Unified auth — every non-/health route accepts EITHER:
//   1. X-API-Key header matching one of EVAL_SERVICE_API_KEY (operator path)
//   2. sr25519 signed request from a Bittensor validator (validator path)
//
// The middleware splits across the body parser. Stage A runs BEFORE the
// body parser and short-circuits when X-API-Key is valid (preserving the
// "don't allocate the body for unauthenticated callers" property for
// the high-volume operator path). Stage B runs AFTER the body parser
// and verifies the signature against either the body (for POSTs) or
// `METHOD path` (for GETs).
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryApiKey = tryApiKey;
exports.trySignature = trySignature;
const node_crypto_1 = require("node:crypto");
const signature_1 = require("./signature");
const HEADER_API_KEY = "x-api-key";
const HEADER_SIGNATURE = "x-signature";
const HEADER_HOTKEY = "x-hotkey";
function constantTimeMatch(a, b) {
    const ah = (0, node_crypto_1.createHash)("sha256").update(a).digest();
    const bh = (0, node_crypto_1.createHash)("sha256").update(b).digest();
    return (0, node_crypto_1.timingSafeEqual)(ah, bh);
}
// Stage A: pre-body. Reject early if a wrong X-API-Key was sent. Pass
// through silently when no X-API-Key was sent so stage B can try the
// signature path (after the body is parsed).
function tryApiKey(apiKeys) {
    return function (req, res, next) {
        const presented = req.header(HEADER_API_KEY);
        if (!presented) {
            next();
            return;
        }
        const ok = apiKeys.some((k) => constantTimeMatch(presented, k));
        if (!ok) {
            req.log?.warn({ ip: req.ip, url: req.url }, "auth: invalid X-API-Key");
            res.status(401).json({ error: "invalid X-API-Key" });
            return;
        }
        req.authKind = "api-key";
        next();
    };
}
// Stage B: post-body. If stage A already authenticated via X-API-Key,
// pass through. Otherwise require a valid sr25519 signature.
function trySignature(cfg) {
    return async function (req, res, next) {
        if (req.authKind === "api-key") {
            next();
            return;
        }
        const signature = req.header(HEADER_SIGNATURE);
        // Hotkey can be in X-Hotkey (any method, especially GET) or in body
        // (matching the existing validator POST convention).
        const hotkeyHeader = req.header(HEADER_HOTKEY);
        const body = (req.body ?? {});
        const hotkeyBody = typeof body.hotkey === "string" ? body.hotkey : undefined;
        const hotkey = hotkeyHeader ?? hotkeyBody;
        if (!signature || !hotkey) {
            res.status(401).json({
                error: "auth required: send X-API-Key, OR (X-Signature header + hotkey via X-Hotkey header or body.hotkey)",
            });
            return;
        }
        if (cfg.skipSignatureVerification) {
            req.log?.debug({ hotkey }, "signature verification skipped (dev)");
            req.authKind = "signed";
            req.signedHotkey = hotkey;
            next();
            return;
        }
        // Pick what gets signed:
        //   - body present (any keys after stripping signature fields) → body
        //   - else → "METHOD path"
        const hasMeaningfulBody = Object.keys(body).filter((k) => k !== "signature" && k !== "signed_payload").length > 0;
        try {
            const ok = await (0, signature_1.verifySignedRequest)({
                source: hasMeaningfulBody
                    ? { kind: "body", body }
                    : { kind: "path", method: req.method, path: req.path },
                signature,
                hotkey,
            });
            if (!ok) {
                req.log?.warn({ hotkey, ip: req.ip, url: req.url }, "auth: invalid signature");
                res.status(401).json({ error: "invalid signature" });
                return;
            }
            req.authKind = "signed";
            req.signedHotkey = hotkey;
            // Helpful debug info — visible in the bytes the verifier consumed.
            req.log?.debug({ hotkey, signed_over: hasMeaningfulBody ? "body" : "path" }, "auth: signed request verified");
            next();
        }
        catch (err) {
            req.log?.error({ err, hotkey }, "signature verification threw");
            res.status(500).json({ error: "signature verification failed" });
        }
    };
}
//# sourceMappingURL=middleware.js.map