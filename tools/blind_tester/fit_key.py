"""Learn the blind tester's grading from the platform's real scorecards.

Inputs: regenerated competitor outputs under runs/calib/<harvested bundle dir>/ with
  S-xxx.features.json (features.py: every pool candidate judged) and S-xxx.grade.json (grade.py).
Ground truth: intel/miners/v40-all/<bundle>/tasks.json (scorecards.py).

Learns
  scenario_quality  per scenario, the 5 pool criteria whose judged verdicts best reproduce the real
                    sq score (label values met/partly/missed solved from all 656 real rows);
  rubric            per scenario, non-negative weights on the judge's 5 dimension scores (+ intercept)
                    reproducing the real rubric score;
  skill_use         per criterion, the judge-points threshold that best reproduces the real
                    met/partly labels (Knowledge applied and Output naturalness carry all the variance).
Every fit is reported with leave-one-bundle-out error so the numbers describe unseen bundles.
Writes the result into suite/judge_key.json["fitted"]; grade.py applies it automatically.

Usage: python tools/blind_tester/fit_key.py [runs/calib] [--write]
"""
import itertools
import json
import pathlib
import statistics as st
import sys

import numpy as np

sys.path.insert(0, str(pathlib.Path(__file__).parent))
import grade  # noqa: E402
import scorecards  # noqa: E402

HERE = pathlib.Path(__file__).resolve().parent
KEYFILE = grade.SUITE / "judge_key.json"
POOL = json.load(open(grade.SUITE / "criteria_pool.json", encoding="utf-8"))
SU_NAMES = grade.SU_NAMES
DIMS = grade.DIMS


def label_values():
    rows = [r for r in scorecards.load() if r["sq_met"] is not None and r["total"]]
    X = np.array([[r["sq_met"], r["sq_partly"], r["sq_missed"]] for r in rows], float) / 5
    y = np.array([r["sq"] for r in rows])
    sq_v = np.linalg.lstsq(X, y, rcond=None)[0]
    X2, y2 = [], []
    for r in rows:
        lab = su_labels(r["su_fb"])
        if lab:
            X2.append([lab.count("met"), lab.count("partly"), lab.count("missed")])
            y2.append(r["su"])
    su_v = np.linalg.lstsq(np.array(X2, float) / 4, np.array(y2), rcond=None)[0]
    return dict(zip(["met", "partly", "missed"], sq_v.round(4))), dict(zip(["met", "partly", "missed"], su_v.round(4)))


def su_labels(fb):
    out = []
    for n in SU_NAMES:
        lab = None
        for part in fb.split("."):
            if n in part:
                lab = "met" if part.strip().startswith("Met") else "partly" if "Partly" in part else "missed"
        if lab is None:
            return None
        out.append(lab)
    return out


def nnls(A, b, iters=3000):
    """Projected gradient NNLS (small problems; avoids a scipy dependency)."""
    x = np.zeros(A.shape[1])
    L = np.linalg.norm(A, 2) ** 2 or 1.0
    for _ in range(iters):
        x = np.maximum(0, x - (A.T @ (A @ x - b)) / L)
    return x


def load(runs):
    real = {}
    for r in scorecards.load():
        real.setdefault(r["miner"], {})[r["sid"]] = r
    data = []
    for d in sorted(p for p in runs.iterdir() if p.is_dir() and p.name in real):
        for sid in sorted(grade.DATA):
            f, g = d / f"{sid}.features.json", d / f"{sid}.grade.json"
            if sid not in real[d.name]:
                continue
            item = {"bundle": d.name, "sid": sid, "real": real[d.name][sid]}
            if f.exists():
                item["features"] = json.load(open(f, encoding="utf-8"))["verdicts"]
            if g.exists():
                item["grade"] = json.load(open(g, encoding="utf-8"))
            data.append(item)
    return data


def fit_sq(items, vals, k=5):
    pool_n = len(items[0]["features"])
    V = np.array([[vals[v] for v in it["features"]] for it in items])
    y = np.array([it["real"]["sq"] for it in items])
    best, best_err = None, 1e9
    for combo in itertools.combinations(range(pool_n), k):
        e = float(((V[:, combo].mean(1) - y) ** 2).sum())
        if e < best_err:
            best, best_err = combo, e
    return best, V, y


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    runs = pathlib.Path(args[0]) if args else HERE / "runs/calib"
    write = "--write" in sys.argv
    sq_vals, su_vals = label_values()
    print(f"label values  sq {sq_vals}   su {su_vals}")
    data = load(runs)
    fitted = {"sq_values": sq_vals, "su_values": su_vals, "scenarios": {}, "su_thresholds": {}}
    report = []

    # ---- scenario_quality criteria selection, per scenario, with leave-one-bundle-out
    for sid in sorted(grade.DATA):
        items = [it for it in data if it["sid"] == sid and "features" in it
                 and len(it["features"]) == len(POOL[sid])]
        if len(items) < 6:
            print(f"{sid}: only {len(items)} featured bundles - need >= 6 to fit sq")
            continue
        combo, V, y = fit_sq(items, sq_vals)
        loo = []
        for i in range(len(items)):
            rest = items[:i] + items[i + 1:]
            c, _, _ = fit_sq(rest, sq_vals)
            loo.append(abs(V[i, c].mean() - y[i]))
        base = [abs(y.mean() - v) for v in y]
        fit_err = np.abs(V[:, combo].mean(1) - y).mean()
        fitted["scenarios"].setdefault(sid, {})["criteria_idx"] = list(combo)
        fitted["scenarios"][sid]["criteria"] = [POOL[sid][i] for i in combo]
        report.append((sid, "sq", len(items), fit_err, st.mean(loo), st.mean(base)))

    # ---- rubric weights on judge dimensions
    for sid in sorted(grade.DATA):
        items = [it for it in data if it["sid"] == sid and it.get("grade", {}).get("rubric_dims")]
        if len(items) < 6:
            continue
        A = np.array([[it["grade"]["rubric_dims"][d] for d in DIMS] + [1.0] for it in items])
        y = np.array([it["real"]["rubric"] for it in items])
        w = nnls(A, y)
        loo = []
        for i in range(len(items)):
            m = np.ones(len(items), bool); m[i] = False
            wi = nnls(A[m], y[m])
            loo.append(abs(A[i] @ wi - y[i]))
        raw = [abs(it["grade"]["rubric"] - it["real"]["rubric"]) for it in items]
        fitted["scenarios"].setdefault(sid, {})["rubric_w"] = [round(float(x), 4) for x in w]
        report.append((sid, "rubric", len(items), float(np.abs(A @ w - y).mean()), st.mean(loo), st.mean(raw)))

    # ---- skill_use thresholds per criterion
    pairs = [(it["grade"]["su_detail"], su_labels(it["real"]["su_fb"]), it["real"]["su"])
             for it in data if it.get("grade", {}).get("su_detail") and su_labels(it["real"]["su_fb"])]
    if len(pairs) >= 10:
        for j, name in enumerate(SU_NAMES):
            pts = [next((c["points"] for c in d if c["name"].startswith(name[:8])), 4) for d, _, _ in pairs]
            lab = [l[j] for _, l, _ in pairs]
            best_t = max(range(1, 6), key=lambda t: sum((p >= t) == (l == "met") for p, l in zip(pts, lab)))
            acc = sum((p >= best_t) == (l == "met") for p, l in zip(pts, lab)) / len(pts)
            fitted["su_thresholds"][name] = best_t
            print(f"skill_use '{name}': met when judge points >= {best_t}  (agreement {acc:.0%} over {len(pts)} rows;"
                  f" real met-rate {sum(l == 'met' for l in lab) / len(lab):.0%})")
        def su_pred(d):
            labs = []
            for name in SU_NAMES:
                p = next((c["points"] for c in d if c["name"].startswith(name[:8])), 4)
                labs.append("met" if p >= fitted["su_thresholds"][name] else "partly" if p >= 1 else "missed")
            return sum(su_vals[l] for l in labs) / 4
        err = st.mean(abs(su_pred(d) - y) for d, _, y in pairs)
        raw = st.mean(abs(sum(c["points"] for c in d) / 16 - y) for d, _, y in pairs)
        report.append(("all", "su", len(pairs), err, float("nan"), raw))

    print(f"\n{'scen':5} {'grader':7} {'n':>3} {'fit MAE':>8} {'LOO MAE':>8} {'baseline':>8}   (baseline: sq/su = predict field mean / raw judge; rubric = raw judge)")
    for sid, g, n, fe, lo, b in report:
        print(f"{sid:5} {g:7} {n:3} {fe:8.3f} {lo:8.3f} {b:8.3f}")
    for sid, s in fitted["scenarios"].items():
        if "criteria" in s:
            print(f"\n{sid} fitted criteria:")
            for c in s["criteria"]:
                print("   -", c)
    if write:
        key = json.load(open(KEYFILE, encoding="utf-8"))
        key["fitted"] = fitted
        for sid, s in fitted["scenarios"].items():
            if "criteria" in s:
                key["scenarios"][sid]["criteria"] = s["criteria"]
        KEYFILE.write_text(json.dumps(key, indent=2, ensure_ascii=False), encoding="utf-8")
        print(f"\nwrote fitted section -> {KEYFILE}")


if __name__ == "__main__":
    main()
