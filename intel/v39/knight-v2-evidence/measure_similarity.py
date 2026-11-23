"""Measure local similarity against explicit v39 sources; no server prediction."""
import hashlib
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "tools"))
import check_similarity as sim
import numpy as np
import torch
from sentence_transformers import SentenceTransformer

TARGET = ROOT / "challenges/v39-stakeholder-mapping/accounts/knight/v2-evidence"
OUT = pathlib.Path(__file__).resolve().parent
sources = set()
for base in [
    ROOT / "challenges/v39-stakeholder-mapping/accounts",
    ROOT / "intel/v39-top20",
    ROOT / "intel/v39-top10",
    ROOT / "intel/v39-iterators",
    ROOT / "challenges/v39-stakeholder-mapping/intel-leader",
]:
    for skill in base.rglob("SKILL.md"):
        if skill.parent.resolve() != TARGET.resolve():
            sources.add(skill.parent)

target_files = sim.bundle_files(TARGET)
paths = sorted(sources)
files = [sim.bundle_files(p) for p in paths]
model = SentenceTransformer(sim.MODELS["all-mpnet"], device="cuda" if torch.cuda.is_available() else "cpu")
target_docs = ["\n\n".join(target_files.values()), target_files["SKILL.md"]]
docs = [text for f in files for text in ("\n\n".join(f.values()), f["SKILL.md"])]
target_vectors = sim.embed_docs(model, target_docs)
vectors = sim.embed_docs(model, docs, texts_key="knight-v2-explicit-v39-corpus")
rows = []
for i, path in enumerate(paths):
    rows.append({
        "path": path.relative_to(ROOT).as_posix(),
        "bundle_similarity": float(np.dot(target_vectors[0], vectors[2 * i])),
        "skill_similarity": float(np.dot(target_vectors[1], vectors[2 * i + 1])),
        "reference_files": sorted(k for k in files[i] if k != "SKILL.md"),
    })
rows.sort(key=lambda row: row["bundle_similarity"], reverse=True)
missing = [
    p.name for p in (ROOT / "intel/v39-top20").iterdir()
    if p.is_dir() and not (p / "SKILL.md").exists()
]
report = {
    "model": sim.MODELS["all-mpnet"],
    "target_sha256": {k: hashlib.sha256((TARGET / k).read_bytes()).hexdigest() for k in target_files},
    "comparison_bundles": len(rows),
    "missing_top20_bundles": missing,
    "limitations": [
        "Local embedding proxy; no reliable conversion to upload percentages.",
        "Corpus includes unsubmitted drafts and duplicate copies; rows are not distinct live miners.",
        "Account-relative own/other gate is not inferred from local directory labels.",
        "Incomplete corpus; only locally available SKILL.md and references/*.md are compared.",
    ],
    "rows": rows,
}
(OUT / "similarity.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
for row in rows[:20]:
    print(f"{row['bundle_similarity']:.4f} bundle {row['skill_similarity']:.4f} skill {row['path']}")
print("Comparison bundles:", len(rows), "Missing top20:", missing)
