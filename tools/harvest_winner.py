"""Harvest a past challenge's public suite + winner bundle + /tasks feedback.

For challenges without a revealed dataset, the top submission's per-scenario
grader feedback is the closest thing to an answer key.

Usage:
    py tools/harvest_winner.py <challenge_id> [out_dir]
Default out_dir: intel/past-challenges/vNN-<slug>/
"""

import json
import pathlib
import re
import sys
import urllib.request

API = "https://api.sundaebar.ai/api/v2"
ROOT = pathlib.Path(__file__).parent.parent
HEADERS = {
    "Origin": "https://www.sundaebar.ai",
    "Referer": "https://www.sundaebar.ai/",
    "User-Agent": "Mozilla/5.0",
}


def get(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def get_json(url):
    return json.loads(get(url))


def slugify(t):
    return re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")[:50]


def save(dest, url):
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        dest.write_bytes(get(url))
        print(f"  wrote {dest.relative_to(ROOT)} ({dest.stat().st_size}b)")
    except Exception as e:
        print(f"  FAIL {dest.name}: {str(e)[:60]}")


def main():
    cid = sys.argv[1]
    chs = get_json(f"{API}/challenges")
    ch = next(c for c in (chs.get("challenges", chs)) if c["id"] == cid)
    out = pathlib.Path(sys.argv[2]) if len(sys.argv) > 2 else (
        ROOT / "intel" / "past-challenges" / f"v{ch['version']}-{slugify(ch['title'])}")
    print(f"v{ch['version']} {ch['title']} -> {out.relative_to(ROOT)}")

    for key, name in [("dataset_file_path", "dataset.jsonl"),
                      ("suite_file_path", "suite.yaml"),
                      ("rubric_file_path", "rubric.txt"),
                      ("sealed_dataset_public_url", "dataset.revealed.jsonl")]:
        if ch.get(key):
            save(out / "suite" / name, ch[key])

    subs = []
    for page in (1, 2):
        d = get_json(f"{API}/submissions?challenge_id={cid}&limit=100&page={page}")
        subs += d.get("submissions", [])
    scored = [s for s in subs if s.get("validation_status") == "scored" and s.get("total_score")]
    scored.sort(key=lambda s: s["total_score"], reverse=True)
    (out / "leaderboard.json").write_text(json.dumps(
        [{"id": s["id"], "uid": s["miner_uid"], "user": s.get("username"),
          "score": s["total_score"]} for s in scored[:25]], indent=1), encoding="utf-8")
    print(f"  {len(scored)} scored subs; top:", [(round(s['total_score'], 4), s['miner_uid']) for s in scored[:3]])

    for s in scored[:2]:  # top 2 bundles
        wdir = out / "winners" / f"{s['id'][:8]}-{round(s['total_score'],5)}"
        save(wdir / "tasks.json", f"{API}/tasks?submission_id={s['id']}")
        if s.get("skill_file_path"):
            save(wdir / "SKILL.md", s["skill_file_path"])
        # reference files: discover via tasks payload
        tfile = wdir / "tasks.json"
        if tfile.exists():
            try:
                t = json.loads(tfile.read_text(encoding="utf-8"))
                refs = (t.get("tasks") or [{}])[0].get("task_payload", {}).get("skill_reference_files", [])
                for r in refs:
                    save(wdir / "references" / r["path"].split("/")[-1], r["url"])
            except Exception as e:
                print(f"  ref discovery fail {s['id'][:8]}: {str(e)[:50]}")


if __name__ == "__main__":
    main()
