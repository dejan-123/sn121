"""Blind pre-submit test for a v40 skill bundle - no API key (uses the logged-in Claude Code CLI).

    python tools/blind_tester/blind_test.py <bundle_dir> [--runs N] [--only S-005,S-008] [--workers 4] [--static]

1. Static pre-flight (upload rules + gate risks; no model calls).
2. Generation: each scenario in a fresh Sonnet 4.6 session that sees the bundle only through
   load_skill / read_reference, as on the validator.
3. Grading: rubric / scenario_quality / skill_use judges (Sonnet 4.6) with the reconstructed sealed key
   (suite/judge_key.json), novelty, and the fabricated-figure check.
4. Report: per-scenario components, predicted total, where it would sit on the harvested leaderboard.

--runs N repeats generation+grading N times (outputs/run1..runN) and reports the mean and spread;
production samples each scenario once, so single runs carry roughly +-0.03 of noise.
Outputs land in <bundle_dir>/blind/runK/ (git-ignored).
"""
import argparse
import json
import pathlib
import re
import statistics as st
import subprocess
import sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[1]
sys.path.insert(0, str(HERE))
import grade  # noqa: E402

COMPANIES = ["Veltrix", "Orenda", "Praxis", "Fenwick", "Cloudmere", "Tessellate", "Auralith", "Nexvault"]
PEOPLE = ["Kelleher", "Moran", "Osei", "Whitfield", "Voss"]
HIDDEN = re.compile("[​-‏‪-‮⁠-⁤﻿]")
EVAL_TALK = re.compile(r"\b(grader|judge|evaluator|rubric|scor(e|ing) (this|highly)|scenario_quality|skill_use)\b", re.I)


def static_checks(bundle):
    issues, warns = [], []
    sk = bundle / "SKILL.md"
    if not sk.exists():
        return ["no SKILL.md"], []
    raw = sk.read_bytes()
    if len(raw) > 10000:
        issues.append(f"SKILL.md {len(raw)} bytes > 10,000")
    txt = raw.decode("utf-8", "replace")
    if not txt.startswith("---") or "name:" not in txt.split("---")[1] or "description:" not in txt.split("---")[1]:
        issues.append("SKILL.md frontmatter needs name + description")
    files = [sk] + sorted((bundle / "references").glob("*")) if (bundle / "references").exists() else [sk]
    refs = files[1:]
    if len(refs) > 30:
        issues.append(f"{len(refs)} reference files > 30")
    total = 0
    for f in refs:
        if f.is_dir():
            issues.append(f"nested folder {f.name}")
            continue
        t = f.read_text(encoding="utf-8", errors="replace")
        total += len(t)
        if len(t) > 32000:
            issues.append(f"{f.name}: {len(t)} chars > 32,000")
        if f.suffix not in {".md", ".txt", ".json", ".yaml", ".yml", ".csv"}:
            issues.append(f"{f.name}: disallowed type")
        if f.name != f.name.lower():
            issues.append(f"{f.name}: names must be lowercase")
    if total > 128000:
        issues.append(f"references total {total} chars > 128,000")
    corpus = {f.name: f.read_text(encoding="utf-8", errors="replace") for f in files if f.is_file()}
    for name, t in corpus.items():
        if "<!--" in t:
            issues.append(f"{name}: HTML comment (rejected at upload)")
        if HIDDEN.search(t):
            issues.append(f"{name}: hidden/zero-width characters")
        if EVAL_TALK.search(t):
            warns.append(f"{name}: mentions grading/judges ('{EVAL_TALK.search(t).group(0)}') - text aimed at evaluators scores zero")
        hits = [c for c in COMPANIES + PEOPLE if re.search(rf"\b{c}\b", t)]
        if hits:
            issues.append(f"{name}: dataset names {hits} -> dataset_derived gate risk")
        figs = set(re.findall(r"\$\d{2,3},\d{3}", t))
        data_figs = set(re.findall(r"\$\d{2,3},\d{3}", "\n".join(grade.DATA.values())))
        shared = figs & data_figs
        if len(shared) >= 6:
            warns.append(f"{name}: {len(shared)} dollar figures identical to dataset figures (e.g. {sorted(shared)[:4]}) - "
                         "dataset_derived is semantic; invented examples should not mirror scenario numbers")
    warns.append(f"sizes: SKILL.md {len(raw)}B, {len(refs)} refs, {total} ref chars")
    return issues, warns


def leaderboard_rank(total):
    lb = json.load(open(ROOT / "intel/miners/v40-all/leaderboard.json", encoding="utf-8"))
    scores = sorted((r["score"] for r in lb if r["score"]), reverse=True)
    above = sum(1 for s in scores if s > total)
    return above + 1, len(scores) + 1, scores[0]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("bundle")
    ap.add_argument("--runs", type=int, default=1)
    ap.add_argument("--only", default="")
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--static", action="store_true", help="pre-flight only, no model calls")
    a = ap.parse_args()
    bundle = pathlib.Path(a.bundle).resolve()

    issues, warns = static_checks(bundle)
    print("== Pre-flight")
    for i in issues:
        print("  FAIL", i)
    for w in warns:
        print("  note", w)
    if a.static:
        return
    if issues:
        print("Fix the FAIL items first (the upload or a gate would reject this bundle).")
        sys.exit(1)

    totals = []
    for k in range(1, a.runs + 1):
        out = bundle / "blind" / f"run{k}"
        args = [sys.executable, str(HERE / "batch_generate.py"), str(out.parent), str(bundle), "--workers", str(a.workers)]
        # batch_generate writes to <runs>/<bundle name>; point it at run folder via a symlink-free rename
        gen_root = out.parent / f"_gen{k}"
        args[2] = str(gen_root)
        if a.only:
            args += ["--only", a.only]
        print(f"\n== Run {k}: generating")
        rc = subprocess.call(args)
        src = gen_root / bundle.name
        out.mkdir(parents=True, exist_ok=True)
        if src.exists():
            for f in src.glob("*.json"):
                f.replace(out / f.name)
        if rc == 2:
            print("Stopped on the usage limit; rerun the same command after the reset to resume.")
            sys.exit(2)
        print(f"== Run {k}: grading")
        subprocess.call([sys.executable, str(HERE / "grade.py"), str(out), "--workers", "3"] +
                        (["--only", a.only] if a.only else []))
        rows = grade.scorecard(out)
        if rows:
            totals.append((rows, st.mean(r["score"] for r in rows)))

    if not totals:
        return
    print("\n== Summary")
    sids = sorted({r["sid"] for rows, _ in totals for r in rows})
    for sid in sids:
        vals = [r for rows, _ in totals for r in rows if r["sid"] == sid]
        m = lambda k: st.mean(v[k] for v in vals)
        fab = sorted({f for v in vals for f in v["fabricated_figures"]})
        flag = f"  !! invented figures {fab[:5]} (rubric-zero risk)" if fab else ""
        print(f"  {sid}: score {m('score'):.3f}  rubric {m('rubric'):.2f}  sq {m('sq'):.2f}  su {m('su'):.2f}{flag}")
    tot = [t for _, t in totals]
    mean = st.mean(tot)
    spread = f" (runs: {', '.join(f'{t:.3f}' for t in tot)})" if len(tot) > 1 else ""
    print(f"  Predicted total {mean:.4f}{spread}")
    if len(sids) == 8:
        rank, n, top = leaderboard_rank(mean)
        print(f"  Would rank ~{rank} of {n} on the harvested board (current top {top:.4f}); "
              f"takeover needs > top + 0.01.")
    print("  Read per-criterion evidence in <bundle>/blind/run*/S-*.grade.json (sq_detail, su_detail, rubric_rationale).")


if __name__ == "__main__":
    main()
