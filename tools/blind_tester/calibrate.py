"""Check the blind tester against reality: regenerated + regraded competitor bundles vs their real scorecards.

Usage:
    python tools/blind_tester/calibrate.py [runs/calib]
Each subfolder of the runs dir must be named after a harvested bundle folder in intel/miners/v40-all
(batch_generate.py does that) and contain graded outputs (grade.py).

Reports, per bundle: predicted vs real total; per component MAE; Spearman rank correlation of totals;
and the S-008 rubric-zero table (fabricated figures flagged vs real zero).
"""
import json
import pathlib
import statistics as st
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
import grade  # noqa: E402
import scorecards  # noqa: E402

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[1]


def spearman(x, y):
    def ranks(v):
        order = sorted(range(len(v)), key=lambda i: v[i])
        r = [0.0] * len(v)
        for pos, i in enumerate(order):
            r[i] = pos
        return r
    rx, ry = ranks(x), ranks(y)
    n = len(x)
    if n < 3:
        return float("nan")
    mx, my = st.mean(rx), st.mean(ry)
    num = sum((a - mx) * (b - my) for a, b in zip(rx, ry))
    den = (sum((a - mx) ** 2 for a in rx) * sum((b - my) ** 2 for b in ry)) ** 0.5
    return num / den if den else float("nan")


def main():
    runs = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else HERE / "runs/calib"
    real = {}
    for r in scorecards.load():
        real.setdefault(r["miner"], {})[r["sid"]] = r
    pred_tot, real_tot, err = [], [], {"rubric": [], "sq": [], "su": [], "score": []}
    s8 = []
    print(f"{'bundle':40} {'pred':>6} {'real':>6}   per-scenario score pred/real")
    for d in sorted(p for p in runs.iterdir() if p.is_dir()):
        rows = grade.scorecard(d)
        if not rows or d.name not in real:
            continue
        rs = real[d.name]
        pairs = [(g, rs[g["sid"]]) for g in rows if g["sid"] in rs]
        p = st.mean(g["score"] for g, _ in pairs)
        q = st.mean(r["score"] for _, r in pairs)
        pred_tot.append(p)
        real_tot.append(q)
        for g, r in pairs:
            for k in ("rubric", "sq", "su", "score"):
                err[k].append(abs(g[k] - r[k]))
            if g["sid"] == "S-008":
                s8.append((d.name, g["fabricated_figures"], g["rubric"], r["rubric"]))
        cells = " ".join(f"{g['sid'][-1]}:{g['score']:.2f}/{r['score']:.2f}" for g, r in pairs)
        print(f"{d.name:40} {p:6.3f} {q:6.3f}   {cells}  (n={len(pairs)})")
    if not pred_tot:
        print("nothing graded yet")
        return
    print()
    print("MAE  " + "  ".join(f"{k}={st.mean(v):.3f}" for k, v in err.items() if v))
    print(f"Spearman(total) = {spearman(pred_tot, real_tot):.2f} over {len(pred_tot)} bundles; "
          f"mean pred {st.mean(pred_tot):.3f} vs real {st.mean(real_tot):.3f}")
    if s8:
        print("\nS-008  fabricated-figures flag vs real rubric zero:")
        for name, fab, pr, rr in s8:
            print(f"  {name:40} fabricated={fab[:4]!s:28} pred_rubric={pr:.2f} real_rubric={rr:.2f}")


if __name__ == "__main__":
    main()
