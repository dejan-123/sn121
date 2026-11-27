"""Harvest EVERY scored submission of a challenge: scorecard (/tasks) + all skill files.

Usage: python tools/blind_tester/harvest_all.py [challenge_id] [out_dir]
Default: v40 challenge -> intel/miners/v40-all/<user>-<sub8>-<score>/
Re-runnable: existing complete folders are skipped; a leaderboard.json index is rewritten.
"""
import json, pathlib, re, sys, time, urllib.request

API = "https://api.sundaebar.ai/api/v2"
ROOT = pathlib.Path(__file__).resolve().parents[2]
V40 = "898ac791-4621-4c1a-869c-62f8d517fab4"
HEADERS = {"Origin": "https://www.sundaebar.ai", "Referer": "https://www.sundaebar.ai/",
           "User-Agent": "Mozilla/5.0"}


def get(url, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except Exception:
            if i == tries - 1:
                raise
            time.sleep(2 * (i + 1))


def get_json(url):
    return json.loads(get(url))


def safe(s):
    return re.sub(r"[^A-Za-z0-9_.-]+", "_", str(s or "anon"))[:40]


def all_submissions(cid):
    subs, page = [], 1
    while True:
        d = get_json(f"{API}/submissions?challenge_id={cid}&limit=100&page={page}")
        batch = d.get("submissions", d if isinstance(d, list) else [])
        subs += batch
        if len(batch) < 100:
            break
        page += 1
    seen, out = set(), []
    for s in subs:
        if s["id"] not in seen:
            seen.add(s["id"]); out.append(s)
    return out


def main():
    cid = sys.argv[1] if len(sys.argv) > 1 else V40
    out = pathlib.Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / "intel/miners/v40-all"
    out.mkdir(parents=True, exist_ok=True)
    subs = all_submissions(cid)
    print(f"{len(subs)} submissions listed; statuses:",
          {st: sum(1 for s in subs if s.get('validation_status') == st) for st in {s.get('validation_status') for s in subs}})
    index = []
    for s in sorted(subs, key=lambda s: -(s.get("total_score") or 0)):
        if s.get("validation_status") != "scored" or s.get("total_score") is None:
            continue
        d = out / f"{safe(s.get('username'))}-{s['id'][:8]}-{round(s['total_score'], 5)}"
        index.append({"dir": d.name, "id": s["id"], "user": s.get("username"), "uid": s.get("miner_uid"),
                      "score": s["total_score"], "created": s.get("created_at")})
        tfile = d / "tasks.json"
        if not tfile.exists():
            d.mkdir(parents=True, exist_ok=True)
            tfile.write_bytes(get(f"{API}/tasks?submission_id={s['id']}"))
            (d / "submission.json").write_text(json.dumps(s, indent=1), encoding="utf-8")
        t = json.loads(tfile.read_text(encoding="utf-8"))
        tasks = t.get("tasks") or []
        payload = tasks[0].get("task_payload", {}) if tasks else {}
        skill_url = payload.get("skill_file_path") or s.get("skill_file_path")
        if skill_url and not (d / "SKILL.md").exists():
            (d / "SKILL.md").write_bytes(get(skill_url))
        for r in payload.get("skill_reference_files", []) or []:
            dest = d / "references" / r["path"].split("/")[-1]
            if not dest.exists():
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_bytes(get(r["url"]))
        print(f"  {d.name}: refs={len(payload.get('skill_reference_files') or [])}", flush=True)
    (out / "leaderboard.json").write_text(json.dumps(index, indent=1), encoding="utf-8")
    print(f"{len(index)} scored submissions harvested -> {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
