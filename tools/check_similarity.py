"""Local proxy for the upload similarity gate.

Usage:
    python tools/check_similarity.py <bundle_dir> [--model all-mpnet]

Embeds the target bundle and every comparison bundle (own prior submissions
under accounts/, competitor bundles under intel/miners/) with a local
sentence-transformers model, then prints cosine similarities.

Uses CUDA when torch sees a GPU (install the cuXXX torch wheel, not the
+cpu build). IMPORTANT: run with `python`, not `py` — on this machine the
py launcher resolves to Python 3.13 (torch +cpu) while `python` is 3.11
(torch +cu128, GPU). CPU fallback now prints a loud warning.
Comparison-corpus embeddings are cached in tools/.simcache/ —
only the target is re-embedded per run.

Gate bands observed on v36 (2026-11-11):
    >= 97% vs own previous   -> hard reject
    ~95-97% vs own previous  -> rate-limited ("resubmit in ~3h")
    >= 93% vs another miner  -> hard reject
Scores here are a proxy — the server's model and aggregation are unknown.
"""

import os
import sys
import glob
import zipfile
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
CHUNK = 1400          # chars per embedding window
OVERLAP = 200
OWN_BAND_REJECT = 0.97
OWN_BAND_RATELIMIT = 0.95
MINER_BAND_REJECT = 0.93

MODELS = {
    "all-mpnet": "sentence-transformers/all-mpnet-base-v2",
    "bge-small": "BAAI/bge-small-en-v1.5",
    "minilm": "sentence-transformers/all-MiniLM-L6-v2",
}


def load_env():
    env = ROOT / "tools" / ".env"
    if env.exists():
        for line in env.read_text().splitlines():
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip().strip('"'))


def bundle_files(bundle_dir):
    """Return {relpath: text} for SKILL.md + references/*.md in a dir or zip."""
    out = {}
    p = pathlib.Path(bundle_dir)
    if p.is_file() and p.suffix == ".zip":
        with zipfile.ZipFile(p) as z:
            for n in z.namelist():
                if n == "SKILL.md" or (n.startswith("references/") and n.endswith(".md")):
                    out[n] = z.read(n).decode("utf-8", "replace")
        return out
    skill = p / "SKILL.md"
    if skill.exists():
        out["SKILL.md"] = skill.read_text(encoding="utf-8", errors="replace")
    for f in sorted((p / "references").glob("*.md")):
        out[f"references/{f.name}"] = f.read_text(encoding="utf-8", errors="replace")
    return out


def chunks(text):
    text = " ".join(text.split())
    if not text:
        return []
    out, i = [], 0
    while i < len(text):
        out.append(text[i:i + CHUNK])
        i += CHUNK - OVERLAP
    return out


CACHE_DIR = ROOT / "tools" / ".simcache"


def _model_tag(model_key):
    return model_key.replace("/", "_")


def embed_docs(model, texts, texts_key=None):
    """Mean-pool chunk embeddings into one L2-normalised vector per doc.

    One flat encode() call for ALL docs' chunks (big win on both CPU and GPU).
    If texts_key is given, results are cached under tools/.simcache/ so
    re-checking the same comparison corpus costs nothing.
    """
    import hashlib
    import numpy as np

    if texts_key is not None:
        key = hashlib.sha256((texts_key + "\0" + "\0".join(texts)).encode()).hexdigest()[:24]
        cf = CACHE_DIR / f"{key}.npy"
        if cf.exists():
            return np.load(cf)

    dim = model.get_sentence_embedding_dimension()
    flat, spans = [], []
    for t in texts:
        cs = chunks(t)
        spans.append(len(cs))
        flat.extend(cs)
    if flat:
        e = model.encode(flat, batch_size=64, convert_to_numpy=True,
                         normalize_embeddings=True, show_progress_bar=False)
    vecs, i = [], 0
    for n_cs in spans:
        if n_cs:
            vecs.append(e[i:i + n_cs].mean(axis=0))
            i += n_cs
        else:
            vecs.append(np.zeros(dim))
    v = np.stack(vecs)
    n = np.linalg.norm(v, axis=1, keepdims=True)
    n[n == 0] = 1
    out = v / n

    if texts_key is not None:
        CACHE_DIR.mkdir(parents=True, exist_ok=True)
        np.save(cf, out)
    return out


def collect_comparisons():
    """{label: (dir_or_zip, is_own)} for own priors and competitor bundles."""
    out = []
    for ch in sorted((ROOT / "challenges").glob("v*-*")):
        for d in sorted((ch / "accounts").glob("*/*/")):
            if (d / "SKILL.md").exists():
                acct = d.parent.parent.name
                out.append((f"own:{ch.name[:3]}:{acct}/{d.name}", d, True))
            zips = list(d.glob("submission*.zip"))
            for z in zips:
                out.append((f"own-zip:{ch.name[:3]}:{acct}/{d.name}/{z.name}", z, True))
    for d in sorted((ROOT / "intel" / "miners").glob("*/*/")):
        if (d / "SKILL.md").exists():
            out.append((f"miner:{d.parent.name}/{d.name}", d, False))
    for d in sorted((ROOT / "intel" / "ours").glob("*/*/")):
        if (d / "SKILL.md").exists():
            out.append((f"ours:{d.name}", d, True))
    for d in sorted((ROOT / "intel").glob("v37/*/*/")):
        if (d / "SKILL.md").exists():
            out.append((f"v37miner:{d.parent.name}/{d.name}", d, False))
    for d in sorted((ROOT / "intel").glob("v39/*/*/")):
        if (d / "SKILL.md").exists():
            out.append((f"v39miner:{d.parent.name}/{d.name}", d, False))
    return out


def main():
    argv = [a for a in sys.argv[1:] if not a.startswith("--")]
    model_key = "all-mpnet"
    for i, a in enumerate(sys.argv[1:]):
        if a == "--model" and i + 2 <= len(sys.argv[1:]):
            model_key = sys.argv[i + 2]
    if not argv:
        print(__doc__)
        return
    target = argv[0]

    from sentence_transformers import SentenceTransformer
    import numpy as np
    import torch

    if torch.cuda.is_available():
        device = "cuda"
    else:
        device = "cpu"
        print(
            "WARNING: torch sees no CUDA GPU — running on CPU.\n"
            f"  interpreter: {sys.executable}\n"
            f"  torch: {torch.__version__} (cuda build: {torch.version.cuda})\n"
            "  If this is the wrong interpreter/wheel: run `python tools/check_similarity.py`\n"
            "  (NOT `py ...` — the py launcher resolves to a Python with the +cpu wheel)\n"
            "  or install the cuXXX torch build for this interpreter.\n",
            file=sys.stderr,
            flush=True,
        )
    print(f"device: {device}", flush=True)
    model = SentenceTransformer(MODELS[model_key], device=device)

    tfiles = bundle_files(target)
    if "SKILL.md" not in tfiles:
        sys.exit(f"no SKILL.md in {target}")
    t_all = "\n\n".join(tfiles.values())
    docs, labels, kinds = [t_all, tfiles["SKILL.md"]], ["<target-all>", "<target-skill>"], [None, None]

    comps = collect_comparisons()
    skill_texts, file_names, file_labels = [], [], []
    for label, src, is_own in comps:
        files = bundle_files(src)
        if "SKILL.md" not in files:
            continue
        docs.append("\n\n".join(files.values()))
        docs.append(files["SKILL.md"])
        labels += [label, label]
        kinds += [(is_own, "bundle"), (is_own, "skill")]
        skill_texts.append(files["SKILL.md"])
        for fn, tx in files.items():
            file_names.append(tx)
            file_labels.append((label, fn))

    print(f"embedding {len(docs)} docs ({len(comps)} comparison bundles)…", flush=True)
    # target separately (changes every run), corpus cached (stable across runs)
    temb = embed_docs(model, docs[:2])
    emb = embed_docs(model, docs[2:], texts_key=f"corpus:{model_key}")
    t_all_v, t_skill_v = temb[0], temb[1]

    rows = []
    for i in range(0, len(docs) - 2, 2):
        label = labels[i + 2]
        is_own, _ = kinds[i + 2]
        bundle_sim = float(np.dot(t_all_v, emb[i]))
        skill_sim = float(np.dot(t_skill_v, emb[i + 1]))
        rows.append((bundle_sim, skill_sim, is_own, label))
    rows.sort(reverse=True)

    print(f"\n{'bundle':>8} {'skill':>8}  kind   bundle")
    for bs, ss, own, label in rows[:25]:
        kind = "own" if own else "miner"
        flag = ""
        if own and bs >= OWN_BAND_REJECT:
            flag = "  <-- REJECT (own>=97)"
        elif own and bs >= OWN_BAND_RATELIMIT:
            flag = "  <-- rate-limit band"
        elif not own and bs >= MINER_BAND_REJECT:
            flag = "  <-- REJECT (miner>=93)"
        print(f"{bs*100:>7.1f}% {ss*100:>7.1f}%  {kind:5}  {label}{flag}")

    # per-file max similarity (which file drives the match)
    print("\nper-file max sim (target files vs comparison files):")
    file_embs = embed_docs(model, file_names, texts_key=f"corpus-files:{model_key}")
    for tname, ttext in tfiles.items():
        tv = embed_docs(model, [ttext])[0]
        sims = file_embs @ tv
        j = int(np.argmax(sims))
        lab, fn = file_labels[j]
        print(f"  {tname:32} -> {sims[j]*100:5.1f}%  {lab} :: {fn}")


if __name__ == "__main__":
    main()
