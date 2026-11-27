"""Judge every candidate criterion (suite/criteria_pool.json) on generated outputs.

One Sonnet 4.6 call per output; writes <out_dir>/<SID>.features.json = list of verdicts aligned
with the pool. fit_key.py uses these to pick the 5 criteria per scenario that reproduce real scores.

Usage: python tools/blind_tester/features.py <runs_dir_or_output_dir>... [--workers 4] [--force]
"""
import argparse
import concurrent.futures as cf
import json
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
import grade  # noqa: E402

POOL = json.load(open(grade.SUITE / "criteria_pool.json", encoding="utf-8"))
SCHEMA = {"type": "object", "properties": {"criteria": {"type": "array", "items": {"type": "object", "properties": {
    "criterion": {"type": "integer"}, "verdict": {"type": "string", "enum": ["met", "partly", "missed"]},
    "evidence": {"type": "string"}}, "required": ["criterion", "verdict", "evidence"]}}}, "required": ["criteria"]}


def prompt(sid, transcript):
    crit = "\n".join(f"{i}. {c}" for i, c in enumerate(POOL[sid], 1))
    return f"""Check an AI agent's work on one benchmark scenario against each candidate criterion below, independently.

- met: the work clearly and explicitly does exactly what the criterion says
- partly: partially, implicitly, or with an error attached
- missed: absent, contradicted, or the work does the opposite
Some criteria are mutually exclusive readings of the same call; judge each literally against what is written. Keep evidence to one short phrase.

## Scenario input
{grade.DATA[sid]}

## Candidate criteria
{crit}

## Agent's work (all messages, in order)
{transcript}

Return JSON with one entry per criterion number (1-{len(POOL[sid])})."""


def one(path, force):
    sid = path.stem
    dest = path.with_name(f"{sid}.features.json")
    if dest.exists() and not force:
        return dest, "cached"
    rec = json.load(open(path, encoding="utf-8"))
    transcript = "\n\n--- next message ---\n\n".join(rec["transcript"])
    res, err = grade.judge(prompt(sid, transcript), SCHEMA, timeout=300)
    if not res:
        return dest, f"ERROR {err}"
    v = {c["criterion"]: c["verdict"] for c in res["criteria"]}
    out = [v.get(i, "missed") for i in range(1, len(POOL[sid]) + 1)]
    dest.write_text(json.dumps({"sid": sid, "verdicts": out, "pool_size": len(POOL[sid]),
                                "evidence": res["criteria"]}, indent=1, ensure_ascii=False), encoding="utf-8")
    return dest, "ok"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("paths", nargs="+")
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--force", action="store_true")
    a = ap.parse_args()
    outs = []
    for p in map(pathlib.Path, a.paths):
        dirs = [p] if list(p.glob("S-0*.json")) else [d for d in p.iterdir() if d.is_dir()]
        for d in dirs:
            outs += [f for f in sorted(d.glob("S-0??.json"))]
    with cf.ThreadPoolExecutor(a.workers) as ex:
        for dest, st in ex.map(lambda f: one(f, a.force), outs):
            if st != "cached":
                print(dest.parent.name, dest.name, st, flush=True)


if __name__ == "__main__":
    main()
