"""Generate scenario outputs for a skill bundle the way the v40 validator does.

The agent (Sonnet 4.6) gets the scenario input as the user message and two tools,
load_skill and read_reference, served by skill_mcp.py over the bundle. Each
scenario is a fresh isolated session.

Writes <out>/<SID>.json with: transcript (all assistant text blocks in order),
last_assistant (what the rubric judge sees), references_read, tokens.

Usage:
    python tools/blind_tester/generate.py <bundle_dir> <out_dir> [--only S-001,S-008] [--workers 4]
"""
import argparse
import concurrent.futures as cf
import json
import pathlib
import sys
import tempfile
import time

sys.path.insert(0, str(pathlib.Path(__file__).parent))
import session  # noqa: E402

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[1]
DATASET = ROOT / "challenges/v40-compensation-talent-benchmarking-skill/suite/dataset.jsonl"

# The production agent prompt is not public. This one only states the harness
# facts every bundle can rely on: a skill exists, two tools reach it, and the
# reply to the user is the deliverable. Keep it neutral; do not tune it to a bundle.
AGENT_SYSTEM = """You are an AI agent completing a task for a user.

A skill has been provided for this task. Call load_skill to load its instructions, and use read_reference to open any reference file the skill tells you to read. Follow the skill when producing your answer.

Respond to the user directly with your work."""


def skill_meta(bundle):
    txt = (bundle / "SKILL.md").read_text(encoding="utf-8")
    name = desc = ""
    if txt.startswith("---"):
        for line in txt.split("---")[1].splitlines():
            if line.startswith("name:"):
                name = line.split(":", 1)[1].strip()
            if line.startswith("description:"):
                desc = line.split(":", 1)[1].strip()
    return name, desc


def load_dataset():
    return {json.loads(l)["id"]: json.loads(l)["input"] for l in open(DATASET, encoding="utf-8") if l.strip()}


def gen_one(bundle, sid, text, out_dir, retries=2):
    dest = out_dir / f"{sid}.json"
    name, desc = skill_meta(bundle)
    system = AGENT_SYSTEM + (f"\n\nAvailable skill: {name} — {desc}" if name else "")
    for attempt in range(retries + 1):
        with tempfile.TemporaryDirectory(prefix="blindmcp_") as td:
            log = pathlib.Path(td) / "calls.jsonl"
            log.touch()
            cfg = pathlib.Path(td) / "mcp.json"
            cfg.write_text(json.dumps({"mcpServers": {"skill": {
                "command": sys.executable,
                "args": [str(HERE / "skill_mcp.py"), "--bundle", str(bundle.resolve()), "--log", str(log)]}}}))
            t0 = time.time()
            r = session.run(text, system, mcp_config=str(cfg),
                            allowed_tools=("mcp__skill__load_skill", "mcp__skill__read_reference"),
                            stream=True, timeout=1200)
            calls = [json.loads(l) for l in log.read_text(encoding="utf-8").splitlines() if l.strip()]
        texts = [m["text"] for m in r.get("messages", []) if m.get("type") == "text" and m.get("text", "").strip()]
        if r.get("ok") and texts:
            rec = {"sid": sid, "bundle": str(bundle), "transcript": texts, "last_assistant": texts[-1],
                   "skill_loaded": any(c["tool"] == "load_skill" for c in calls),
                   "references_read": [c["arg"] for c in calls if c["tool"] == "read_reference" and c["chars"]],
                   "usage": r.get("usage"), "seconds": round(time.time() - t0, 1), "model": session.MODEL}
            dest.write_text(json.dumps(rec, indent=1, ensure_ascii=False), encoding="utf-8")
            return sid, "ok", rec["references_read"]
        err = r.get("error")
        if "hit your" in str(err).lower() or "rate limit" in str(err).lower():
            return sid, "RATE_LIMIT: " + str(err)[:200], []
    return sid, f"FAILED: {str(err)[:300]}", []


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("bundle")
    ap.add_argument("out")
    ap.add_argument("--only", default="")
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--force", action="store_true")
    a = ap.parse_args()
    bundle, out = pathlib.Path(a.bundle), pathlib.Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    data = load_dataset()
    sids = [s for s in sorted(data) if not a.only or s in a.only.split(",")]
    todo = [s for s in sids if a.force or not (out / f"{s}.json").exists()]
    with cf.ThreadPoolExecutor(a.workers) as ex:
        for sid, status, refs in ex.map(lambda s: gen_one(bundle, s, data[s], out), todo):
            print(f"{bundle.name} {sid}: {status} refs={refs}", flush=True)


if __name__ == "__main__":
    main()
