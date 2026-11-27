"""Generate outputs for many bundles with one shared worker pool.

Usage: python tools/blind_tester/batch_generate.py <runs_dir> <bundle_dir>... [--workers 8]
Each bundle's outputs go to <runs_dir>/<bundle_name>/<SID>.json (existing files are skipped).
"""
import argparse, concurrent.futures as cf, pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).parent))
import generate

ap = argparse.ArgumentParser()
ap.add_argument("runs")
ap.add_argument("bundles", nargs="+")
ap.add_argument("--workers", type=int, default=8)
ap.add_argument("--only", default="")
a = ap.parse_args()
data = generate.load_dataset()
jobs = []
for b in map(pathlib.Path, a.bundles):
    out = pathlib.Path(a.runs) / b.name
    out.mkdir(parents=True, exist_ok=True)
    for sid in sorted(data):
        if (not a.only or sid in a.only.split(",")) and not (out / f"{sid}.json").exists():
            jobs.append((b, sid, out))
print(f"{len(jobs)} generations queued", flush=True)
import threading
stop = threading.Event()

def job(b, sid, out):
    if stop.is_set():
        return sid, "skipped (rate limit)", []
    r = generate.gen_one(b, sid, data[sid], out)
    if r[1].startswith("RATE_LIMIT"):
        stop.set()
    return r

with cf.ThreadPoolExecutor(a.workers) as ex:
    futs = {ex.submit(job, b, sid, out): (b.name, sid) for b, sid, out in jobs}
    for i, f in enumerate(cf.as_completed(futs), 1):
        name, sid = futs[f]
        _, status, refs = f.result()
        print(f"[{i}/{len(jobs)}] {name} {sid}: {status} refs={refs}", flush=True)
if stop.is_set():
    print("STOPPED: usage limit reached - rerun the same command after the reset; finished outputs are kept.")
    sys.exit(2)
