"""Fetch the newest SN121 challenge and scaffold its folder.

Usage:
    py tools/fetch_challenge.py            -> print latest challenge status
    py tools/fetch_challenge.py --fetch    -> download public suite files and
                                              create challenges/vNN-<slug>/
    py tools/fetch_challenge.py --fetch --id <uuid>   -> fetch a specific challenge
"""

import json
import pathlib
import re
import sys
import urllib.request

API = "https://api.sundaebar.ai/api/v2"
ROOT = pathlib.Path(__file__).parent.parent
CHALLENGES = ROOT / "challenges"

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


def slugify(title):
    s = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    return s[:60]


def latest():
    return get_json(f"{API}/challenges/latest")["challenge"]


def by_id(cid):
    data = get_json(f"{API}/challenges")
    chs = data.get("challenges", data)
    for c in chs:
        if c["id"] == cid:
            return c
    sys.exit(f"challenge {cid} not found")


def fetch(ch):
    folder = CHALLENGES / f"v{ch['version']}-{slugify(ch['title'])}"
    suite = folder / "suite"
    suite.mkdir(parents=True, exist_ok=True)

    downloads = {
        "dataset_file_path": "dataset.jsonl",
        "suite_file_path": "suite.yaml",
        "rubric_file_path": "rubric.txt",
        "sealed_dataset_public_url": "dataset.revealed.jsonl",
    }
    for key, name in downloads.items():
        url = ch.get(key)
        if not url:
            continue
        dest = suite / name
        if dest.exists():
            print(f"  exists: {dest.name}")
            continue
        try:
            dest.write_bytes(get(url))
            print(f"  wrote {dest} ({dest.stat().st_size} bytes)")
        except Exception as e:
            print(f"  FAILED {name}: {e}")

    brief = folder / "BRIEF.md"
    if not brief.exists():
        brief.write_text(
            f"# Challenge v{ch['version']} — {ch['title']}\n\n"
            f"- **Challenge ID:** {ch['id']}\n"
            f"- **Opened:** {ch.get('submissions_open_at')} UTC\n"
            f"- **Task:** TODO — read dataset.jsonl inputs + challenge description\n"
            f"- **Scoring:** TODO — read suite.yaml graders/weights/gates\n"
            f"- **Leader at submit time:** TODO — GET /submissions?challenge_id={ch['id']}\n"
            f"- **Harness:** `tools/run_eval.py <bundle_dir> [idx...] [--grade]`\n",
            encoding="utf-8",
        )
        print(f"  wrote {brief}")
    (folder / "RESULTS.md").write_text(
        (folder / "RESULTS.md").read_text(encoding="utf-8")
        if (folder / "RESULTS.md").exists()
        else "# v%d version ledger\n\n| Version | Bundle | Status | Real score | Local rubric mean | Notes |\n|---|---|---|---|---|---|\n"
        % ch["version"],
        encoding="utf-8",
    )
    print(f"\nFolder ready: {folder}")
    return folder


def main():
    argv = sys.argv[1:]
    if "--id" in argv:
        cid = argv[argv.index("--id") + 1]
        ch = by_id(cid)
    else:
        ch = latest()

    print(f"v{ch['version']}  {ch['title']}")
    print(f"  id: {ch['id']}")
    print(f"  status: {ch['status']}  submissions_open: {ch.get('submissions_open')}"
          f"  paused: {ch.get('submissions_paused')}")
    print(f"  opens: {ch.get('submissions_open_at')}  closes: {ch.get('submissions_close_at')}")
    if ch.get("sealed_dataset_revealed_at"):
        print(f"  sealed dataset revealed: {ch['sealed_dataset_revealed_at']}")

    if "--fetch" in argv:
        if ch["status"] not in ("active", "completed"):
            has_files = any(
                ch.get(k)
                for k in ("dataset_file_path", "suite_file_path", "rubric_file_path")
            )
            if not has_files:
                print("challenge not open yet — nothing to fetch")
                return
            print("status not active but suite URLs present — fetching early")
        fetch(ch)


if __name__ == "__main__":
    main()
