"""Poll /challenges/latest until a NEW challenge appears (or v<next> opens),
then beep and exit so you can run fetch_challenge.py --fetch immediately.

Usage:  python tools/watch_challenge.py            # check once and exit
        python tools/watch_challenge.py --loop 300 # poll every 300s until new
"""

import argparse
import json
import time
import urllib.request

from fetch_challenge import HEADERS, API


def latest():
    req = urllib.request.Request(API + "/challenges/latest", headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as r:
        d = json.load(r)
        return d.get("challenge", d)


def describe(c):
    return f"{c.get('title')} id={str(c.get('id'))[:8]} status={c.get('status')} open={c.get('submissions_open')}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--loop", type=int, default=0, help="poll interval seconds; 0 = single check")
    ap.add_argument("--baseline", default="", help="challenge id considered 'old' (default: current latest)")
    args = ap.parse_args()

    base = args.baseline
    while True:
        try:
            c = latest() or {}
            line = describe(c)
            if not base:
                base = c.get("id") or ""
                print(f"baseline: {line}")
                if not args.loop:
                    return
            elif (c.get("id") or "") != base:
                print(f"NEW CHALLENGE: {line}  -> run tools/fetch_challenge.py --fetch")
                for _ in range(5):
                    print("\a", end="", flush=True)
                    time.sleep(0.5)
                return
            else:
                print(f"same: {line}", end="\r")
            if not args.loop:
                return
        except Exception as e:
            print(f"poll error: {e}")
        time.sleep(args.loop or 0)


if __name__ == "__main__":
    main()
