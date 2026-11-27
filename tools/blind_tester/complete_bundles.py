"""Download any skill files listed in a harvested submission.json but missing on disk.

Usage: python tools/blind_tester/complete_bundles.py [intel/miners/v40]
Files are public on the platform's Supabase bucket (same source as harvest_winner.py).
"""
import json, pathlib, sys, urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[2]
HEADERS = {"User-Agent": "Mozilla/5.0"}


def file_list(sub):
    d = sub.get("data") or {}
    for key in ("skill_files", "files"):
        if isinstance(d.get(key), list):
            return d[key]
    if isinstance(sub.get("skill_files"), list):
        return sub["skill_files"]
    # fall back: walk for dicts with url+path
    out = []
    def walk(x):
        if isinstance(x, dict):
            if "url" in x and "path" in x:
                out.append(x)
            for v in x.values():
                walk(v)
        elif isinstance(x, list):
            for v in x:
                walk(v)
    walk(sub)
    return out


def main():
    base = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "intel/miners/v40"
    for d in sorted(p for p in base.iterdir() if p.is_dir()):
        s = d / "submission.json"
        if not s.exists():
            continue
        files = file_list(json.load(open(s, encoding="utf-8")))
        for f in files:
            path = f["path"] if "/" in f["path"] or f["path"] == "SKILL.md" else "references/" + f["path"]
            dest = d / path
            if dest.exists():
                continue
            dest.parent.mkdir(parents=True, exist_ok=True)
            try:
                req = urllib.request.Request(f["url"], headers=HEADERS)
                dest.write_bytes(urllib.request.urlopen(req, timeout=60).read())
                print("fetched", dest.relative_to(base))
            except Exception as e:
                print("FAILED", dest.relative_to(base), e)
        refs = sorted(p.name for p in (d / "references").glob("*")) if (d / "references").exists() else []
        print(f"  {d.name}: {len(files)} listed, refs on disk {refs}")


if __name__ == "__main__":
    main()
