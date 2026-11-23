"""Offline contract checks for v38 local-eval outputs.

This makes no API calls and does not predict the score. It checks the failure
modes that repeatedly hurt this challenge.

Usage:
    python tools/check_v38_outputs.py <bundle_dir>
"""

import pathlib
import re
import sys

from run_eval import eval_file

BANNED = ("filed:", "strip board", "clearance", "pre-flight", "controller's log")


def words(text):
    return len(re.findall(r"\b[\w'-]+\b", text))


def section(text, start, stops):
    if start not in text:
        return ""
    body = text.split(start, 1)[1]
    ends = [body.find(s) for s in stops if body.find(s) >= 0]
    return body[: min(ends)] if ends else body


def check(path, sid):
    text = path.read_text(encoding="utf-8")
    failures = []
    wc = words(text)

    if sid == "S-004":
        if not text.startswith("# "):
            failures.append("redirect does not start with a title")
        if "not a 1-on-1 prep request" not in text:
            failures.append("redirect title is missing")
        if wc > 180:
            failures.append(f"redirect is {wc} words (>180)")
        for required in ("Recorded open actions", "Current status is not supplied."):
            if required not in text:
                failures.append(f"missing `{required}`")
        for forbidden in ("## Draft checked", "## Brief for the meeting", "## Agenda"):
            if forbidden in text:
                failures.append(f"held-meeting reply contains `{forbidden}`")
    else:
        for required in (
            "## Draft checked against the record",
            "## Brief for the meeting",
            "Worked figures:",
            "Log rows:",
            "**Manager-owned rows still open.**",
            "## Agenda for ",
            "## Other venues for ",
            "**Why these calls.**",
        ):
            if required not in text:
                failures.append(f"missing `{required}`")
        evidence = section(text, "## Draft checked against the record", ["Not on the draft:"])
        numbered = len(re.findall(r"^\d+\.", evidence, re.M))
        if numbered < 4:
            failures.append(f"only {numbered} numbered draft checks")
        manager_rows = section(
            text,
            "**Manager-owned rows still open.**",
            ["**Pull first.**", "## Agenda for "],
        )
        venues = section(text, "## Other venues", ["**Why these calls.**"])
        if sid == "S-001" and "Nothing open" not in manager_rows:
            failures.append("S-001 should have no open manager-owned rows")
        if sid == "S-007":
            if wc < 400:
                failures.append(f"thin packet is {wc} words (<400)")
            if "salary" not in venues.lower():
                failures.append("S-007 salary is not routed under Other venues")
            if "Career:" not in text:
                failures.append("S-007 is missing the modest Career check")
        if sid == "S-008":
            if "Nothing open" not in manager_rows:
                failures.append("S-008 should have no open manager-owned rows")
            if "Promotion decision:" not in venues:
                failures.append("S-008 missing `Promotion decision:` venue bullet")
        if sid == "S-009" and "mentorship" not in text.lower():
            failures.append("S-009 dropped the mentorship/development signal")
        if sid == "S-010" and "Career:" not in text:
            failures.append("S-010 dropped the modest manager-written Career check")

    for term in BANNED:
        if term in text.lower():
            failures.append(f"procedural vocabulary `{term}`")
    return wc, failures


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    bundle = pathlib.Path(sys.argv[1])
    dataset = eval_file("dataset.jsonl", bundle)
    out_dir = bundle / "outputs"
    import json

    ok = True
    for line in dataset.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        sid = json.loads(line)["id"]
        path = out_dir / f"scenario_{sid}.md"
        if not path.exists():
            print(f"{sid}: MISSING {path.name}")
            ok = False
            continue
        wc, failures = check(path, sid)
        status = "PASS" if not failures else "FAIL"
        print(f"{sid}: {status} ({wc} words)")
        for failure in failures:
            print(f"  - {failure}")
        ok &= not failures
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
