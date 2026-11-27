"use strict";
// sr25519 signature verifier — mirrors nestapi's
// /src/express/lib/signature.ts so this service accepts the exact same
// signed POST requests the validator already produces today, and adds a
// small extension for signed GETs (no body) where the signature covers
// `METHOD path` instead.
//
// SIGNING CONVENTIONS
// ===================
//
// 1. POST/PUT/PATCH with a body:
//      payload = JSON.stringify(body, with `signature` and `signed_payload`
//                                fields removed)
//      bytes   = utf8(payload)
//      sig     = sr25519_sign(bytes, validator_keypair)  // hex-encoded
//
//    Matches the validator's existing signRequest() in api-client.ts and
//    nestapi's extractSignatureFromRequest pattern 1/3. No changes to the
//    validator are needed for POSTs.
//
// 2. GET (no body — "{}" or empty):
//      payload = `${METHOD} ${path}`
//                e.g. "GET /evaluations/abc-123-..."
//      bytes   = utf8(payload)
//      sig     = sr25519_sign(bytes, validator_keypair)
//
//    GETs need their own convention because there's no body to sign. We
//    include METHOD so a GET signature can't be replayed against a POST
//    of the same path. The validator code (when ported) will gain a
//    signGet(path) helper alongside the existing signRequest(body).
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSignedBytes = buildSignedBytes;
exports.verifySignedRequest = verifySignedRequest;
const util_1 = require("@polkadot/util");
const util_crypto_1 = require("@polkadot/util-crypto");
let cryptoReady = false;
async function ensureCrypto() {
    if (cryptoReady)
        return;
    await (0, util_crypto_1.cryptoWaitReady)();
    cryptoReady = true;
}
function buildSignedBytes(src) {
    if (src.kind === "body") {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { signature: _s, signed_payload: _sp, ...rest } = src.body;
        return (0, util_1.stringToU8a)(JSON.stringify(rest));
    }
    return (0, util_1.stringToU8a)(`${src.method.toUpperCase()} ${src.path}`);
}
async function verifySignedRequest(args) {
    await ensureCrypto();
    try {
        const bytes = buildSignedBytes(args.source);
        const { isValid } = (0, util_crypto_1.signatureVerify)(bytes, args.signature, args.hotkey);
        return isValid;
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=signature.js.map