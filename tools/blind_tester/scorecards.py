"""Flatten every harvested v40 scorecard (intel/miners/v40/*/tasks.json) into rows."""
import json, glob, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parents[2]

def load(miners_dir=None):
    miners_dir = pathlib.Path(miners_dir or ROOT / "intel/miners/v40-all")
    rows = []
    for f in sorted(miners_dir.glob("*/tasks.json")):
        d = json.load(open(f, encoding="utf-8"))
        tasks = d["tasks"] if "tasks" in d else list(d.values())[0]
        for t in tasks:
            rd = t.get("result_data") or {}
            for r in rd.get("results", []):
                g = r["grades_by_key"]
                sq = g["scenario_quality"].get("feedback", "")
                m = re.search(r"(\d+) of 5", sq)
                p = re.search(r"(\d+) partly", sq)
                x = re.search(r"(\d+) missed", sq)
                rows.append(dict(
                    miner=f.parent.name, total=rd.get("score"), sid=r["id"], score=r["score"],
                    tokens=r.get("tokens"),
                    refs=[z["path"] for z in (r.get("references_read") or [])],
                    rubric=g["rubric"]["score"], rubric_fb=g["rubric"].get("feedback", ""),
                    su=g["skill_use"]["score"], su_fb=g["skill_use"].get("feedback", ""),
                    sq=g["scenario_quality"]["score"], sq_fb=sq,
                    sq_met=int(m.group(1)) if m else None, sq_partly=int(p.group(1)) if p else 0,
                    sq_missed=int(x.group(1)) if x else 0,
                    novelty=g["novelty_check"]["score"],
                    dd=g["dataset_derived"]["score"], align=g["skill_alignment"]["score"],
                    redund=g["skill_redundancy"]["score"]))
    return rows
