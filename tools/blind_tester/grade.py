"""Grade generated outputs the way the v40 validator does (reconstructed).

Graders (Sonnet 4.6 judges in fresh sessions + deterministic checks):
  rubric            rubric.txt with reconstructed judge_notes / is_trap / rubric_weights;
                    sees the scenario input + the LAST assistant message only (extractor last_assistant).
                    The judge returns its own weighted total, as in production.
  scenario_quality  5 reconstructed criteria; met / partly / missed with a per-criterion score;
                    score = mean. Sees the whole transcript.
  skill_use         4 fixed criteria scored 0-4 each, score = sum/16 (the platform's 1/16 grid);
                    sees SKILL.md, the references the agent actually read, and the transcript.
  novelty_check     deterministic: max cosine (char 4-grams) vs this submission's other outputs;
                    1.0 below the suite's 0.75 threshold.
  fabricated_figures deterministic: money figures in the output that are neither in the input nor
                    a sum/difference/mean of two input figures. The leading S-008 rubric-zero suspect.

score per scenario = .3 rubric + .3 scenario_quality + .3 skill_use + .1 novelty (suite.yaml).

Usage:
    python tools/blind_tester/grade.py <outputs_dir> [--only S-008] [--workers 6] [--force]
Writes <outputs_dir>/<SID>.grade.json and prints a scorecard.
"""
import argparse
import collections
import concurrent.futures as cf
import itertools
import json
import math
import pathlib
import re
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
import session  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parents[2]
SUITE = ROOT / "challenges/v40-compensation-talent-benchmarking-skill/suite"
KEY = json.load(open(SUITE / "judge_key.json", encoding="utf-8"))["scenarios"]
RUBRIC = (SUITE / "rubric.txt").read_text(encoding="utf-8")
DATA = {json.loads(l)["id"]: json.loads(l)["input"] for l in open(SUITE / "dataset.jsonl", encoding="utf-8") if l.strip()}
DIMS = ["contextual_judgment", "output_quality", "adaptability", "domain_knowledge", "communication"]

JUDGE_SYSTEM = "You are a strict, careful evaluator for an AI benchmark. Follow the grading instructions exactly and return only the requested JSON."

# ---------------------------------------------------------------- rubric
RUBRIC_SCHEMA = {"type": "object", "properties": {
    "scores": {"type": "object", "properties": {d: {"type": "number"} for d in DIMS}, "required": DIMS},
    "score": {"type": "number"}, "rationale": {"type": "string"}}, "required": ["scores", "score", "rationale"]}


def rubric_prompt(sid, response):
    k = KEY[sid]
    text = (RUBRIC.replace("{metadata.judge_notes}", k["judge_notes"])
            .replace("{metadata.is_trap}", str(k["is_trap"]).lower())
            .replace("{metadata.rubric_weights}", json.dumps(k["rubric_weights"])))
    return (f"{text}\n\n---\n## Scenario input given to the agent\n{DATA[sid]}\n\n---\n"
            f"## Agent response to score\n{response}\n\n---\nReturn the JSON object only.")


# ---------------------------------------------------------------- scenario quality
SQ_SCHEMA = {"type": "object", "properties": {"criteria": {"type": "array", "items": {"type": "object", "properties": {
    "criterion": {"type": "integer"}, "verdict": {"type": "string", "enum": ["met", "partly", "missed"]},
    "score": {"type": "number"}, "evidence": {"type": "string"}}, "required": ["criterion", "verdict", "score", "evidence"]}}},
    "required": ["criteria"]}


def sq_prompt(sid, transcript):
    crit = "\n".join(f"{i}. {c}" for i, c in enumerate(KEY[sid]["criteria"], 1))
    return f"""Evaluate an AI agent's work on one benchmark scenario against 5 scenario-specific criteria written by the scenario author, who knows the planted decisions in this input.

For each criterion decide:
- met: the work clearly and correctly does what the criterion requires (score 0.75-1.0; 1.0 only when complete and explicit)
- partly: some of it is present, or it is implied but not stated, or it is right with an error attached (score 0.2-0.5)
- missed: absent, contradicted, or wrong (score 0.0-0.1)
Judge only what is actually written. A criterion about excluding or deferring something is missed if the work uses it or gives a verdict anyway. Do not give credit for intentions or generic statements that are not tied to this scenario's evidence.

## Scenario input
{DATA[sid]}

## Criteria
{crit}

## Agent's work (all messages it wrote, in order)
{transcript}

Return JSON with one entry per criterion (1-5)."""


# ---------------------------------------------------------------- skill use
SU_NAMES = ["Novel knowledge", "Knowledge applied", "Situational judgment", "Output naturalness"]
SU_SCHEMA = {"type": "object", "properties": {"criteria": {"type": "array", "items": {"type": "object", "properties": {
    "name": {"type": "string"}, "points": {"type": "integer"}, "reason": {"type": "string"}},
    "required": ["name", "points", "reason"]}}}, "required": ["criteria"]}


def su_prompt(skill_text, refs, transcript, sid):
    reftxt = "\n\n".join(f"### references/{n}\n{t}" for n, t in refs) or "(the agent read no reference files)"
    return f"""Evaluate how well an AI agent USED a skill it was given, on one task. Score four criteria, each 0-4 points:

1. Novel knowledge - does the skill supply specific, non-obvious domain knowledge (decision rules, thresholds, rulings, worked judgments) beyond what a capable model already knows, and does that knowledge show up in the work? 4 = clearly distinctive knowledge visibly at work; 2 = mostly generic best practice; 0 = nothing beyond common knowledge.
2. Knowledge applied - is the skill's knowledge applied to THIS input's actual data: specific IDs, figures, dates and comparisons worked through (operands and arithmetic shown where the method calls for it), rather than restated as procedure or applied only at the level of headings? 4 = applied concretely throughout; 3 = applied but some steps asserted without the working; 2 = partly applied, gaps or generic stretches; 0-1 = barely.
3. Situational judgment - does the agent handle this scenario's particular conditions well (edge cases, what to exclude or defer, what not to do, scope), adapting the skill rather than applying it mechanically or forcing a template where it does not fit? 4 = sound, adaptive judgment; 2 = mechanical or with a notable misjudgment; 0 = poor.
4. Output naturalness - does the deliverable read like work by an experienced practitioner written for its reader: plain professional prose and tables where they help, the skill's machinery not leaking into the output (coined labels, internal checklists, step numbers, rule names, scaffolding), no padding or repetition? 4 = natural, could be sent as-is; 3 = good with minor template feel or jargon; 2 = noticeably mechanical, clipped or label-heavy; 0-1 = robotic or a dump of working.

Scores of 4 are for clearly excellent work on that criterion; use 3 for good work with minor shortfalls. Be strict and consistent.

## The skill: SKILL.md
{skill_text}

## Reference files the agent opened
{reftxt}

## The task input
{DATA[sid]}

## The agent's output (all messages, in order)
{transcript}

Return JSON: criteria = four entries named exactly {SU_NAMES} with integer points 0-4 and a one-sentence reason."""


# ---------------------------------------------------------------- deterministic checks
MONEY = re.compile(r"(?:[$£€]|GBP\s?|USD\s?)\s?(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)\s?([kKmM](?![A-Za-z]))?")


def money_values(text):
    vals = set()
    for m in MONEY.finditer(text):
        n = float(m.group(1).replace(",", ""))
        suf = (m.group(2) or "").lower()
        n *= 1000 if suf == "k" else 1_000_000 if suf == "m" else 1
        if n >= 1000:
            vals.add(round(n))
    return vals


def fabricated_figures(sid, text):
    """Money figures not in the input and not derivable as sum/diff/mean/2-point ratio of input figures."""
    base, points = set(), set()
    for line in DATA[sid].splitlines():
        vals = sorted(money_values(line) | {int(a + b) for a, b in re.findall(r"(\d{2,3}),(\d{3})", line)})
        base.update(vals)
        if len(vals) == 1:                          # an offer / single figure
            points.add(vals[0])
        elif len(vals) == 2 and "|" in line:        # a posted range -> its midpoint
            points.add(sum(vals) / 2)
        elif "offer" in line.lower():               # internal offer line: each figure + their means
            points.update(vals)
            for r in range(2, len(vals) + 1):
                for combo in itertools.combinations(vals, r):
                    points.add(sum(combo) / r)
    derived = base | points
    for a, b in itertools.combinations(sorted(points), 2):   # anchor = mean of two evidence points
        if b <= a * 1.10:
            derived.add((a + b) / 2)
    for big in base:                                # stated bonus subtracted (TC -> base)
        for small in base:
            if small <= 0.15 * big:
                derived.add(big - small)
    pts = sorted(base | points)
    for a, b in itertools.combinations(pts, 2):     # currency gaps between real figures
        if abs(b - a) <= 60000:
            derived.add(abs(b - a))
    out = []
    for v in sorted(money_values(text)):
        if v < 30000:                               # gaps/differences in currency are fine
            continue
        if not any(abs(v - d) <= max(150, 0.0015 * d) for d in derived):
            out.append(v)
    return out


def ngram_vec(text, n=3):
    w = re.findall(r"[a-z0-9$£%.,-]+", text.lower())
    return collections.Counter(tuple(w[i:i + n]) for i in range(len(w) - n + 1))


def cosine(a, b):
    dot = sum(v * b.get(k, 0) for k, v in a.items())
    na, nb = math.sqrt(sum(v * v for v in a.values())), math.sqrt(sum(v * v for v in b.values()))
    return dot / (na * nb) if na and nb else 0.0


# ---------------------------------------------------------------- run
def judge(prompt, schema, timeout=300, tries=2):
    last = None
    for _ in range(tries):
        r = session.run(prompt, JUDGE_SYSTEM, json_schema=schema, timeout=timeout)
        if r.get("ok") and r.get("structured"):
            return r["structured"], None
        last = r.get("error") or "no structured output"
        if "limit" in str(last).lower():
            break
    return None, str(last)[:300]


def grade_one(out_dir, sid, bundle_override=None):
    rec = json.load(open(out_dir / f"{sid}.json", encoding="utf-8"))
    bundle = pathlib.Path(bundle_override or rec["bundle"])
    skill_text = (bundle / "SKILL.md").read_text(encoding="utf-8")
    refs = [(n, (bundle / "references" / n).read_text(encoding="utf-8")) for n in rec["references_read"]
            if (bundle / "references" / n).exists()]
    transcript = "\n\n--- next message ---\n\n".join(rec["transcript"])
    jobs = {"rubric": (rubric_prompt(sid, rec["last_assistant"]), RUBRIC_SCHEMA, 120),   # suite: timeout 120
            "sq": (sq_prompt(sid, transcript), SQ_SCHEMA, 300),
            "su": (su_prompt(skill_text, refs, transcript, sid), SU_SCHEMA, 300)}
    res = {}
    with cf.ThreadPoolExecutor(3) as ex:
        futs = {k: ex.submit(judge, *v) for k, v in jobs.items()}
        for k, f in futs.items():
            res[k] = f.result()
    g = {"sid": sid, "errors": {k: v[1] for k, v in res.items() if v[1]}}
    rb = res["rubric"][0]
    g["rubric"] = max(0.0, min(1.0, float(rb["score"]))) if rb else 0.0
    g["rubric_dims"] = rb["scores"] if rb else None
    g["rubric_rationale"] = rb["rationale"] if rb else None
    sq = res["sq"][0]
    if sq:
        crit = sorted(sq["criteria"], key=lambda c: c["criterion"])[:5]
        g["sq"] = sum(max(0.0, min(1.0, c["score"])) for c in crit) / 5
        g["sq_detail"] = crit
        g["sq_counts"] = collections.Counter(c["verdict"] for c in crit)
    else:
        g["sq"], g["sq_detail"], g["sq_counts"] = 0.0, None, {}
    su = res["su"][0]
    if su:
        g["su"] = sum(max(0, min(4, int(c["points"]))) for c in su["criteria"][:4]) / 16
        g["su_detail"] = su["criteria"]
    else:
        g["su"], g["su_detail"] = 0.0, None
    g["fabricated_figures"] = fabricated_figures(sid, transcript)
    g["chars_last"] = len(rec["last_assistant"])
    g["references_read"] = rec["references_read"]
    (out_dir / f"{sid}.grade.json").write_text(json.dumps(g, indent=1, ensure_ascii=False), encoding="utf-8")
    return g


def novelty(out_dir):
    recs = {p.stem: json.load(open(p, encoding="utf-8"))["last_assistant"]
            for p in sorted(out_dir.glob("S-*.json")) if not p.name.endswith(".grade.json")}
    vecs = {k: ngram_vec(v) for k, v in recs.items()}
    nov = {}
    for k in vecs:
        sims = [cosine(vecs[k], vecs[o]) for o in vecs if o != k]
        m = max(sims) if sims else 0
        nov[k] = (1.0 if m < 0.75 else max(0.0, 1 - (m - 0.75) * 4), round(m, 3))
    return nov


def scorecard(out_dir):
    nov = novelty(out_dir)
    rows = []
    for p in sorted(out_dir.glob("S-*.grade.json")):
        g = json.load(open(p, encoding="utf-8"))
        rec = json.load(open(out_dir / f"{g['sid']}.json", encoding="utf-8"))
        g["fabricated_figures"] = fabricated_figures(g["sid"], "\n".join(rec["transcript"]))
        n = nov.get(g["sid"], (1.0, 0))[0]
        g["novelty"] = n
        g["score"] = 0.3 * g["rubric"] + 0.3 * g["sq"] + 0.3 * g["su"] + 0.1 * n
        rows.append(g)
    return rows


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("out")
    ap.add_argument("--only", default="")
    ap.add_argument("--workers", type=int, default=3)
    ap.add_argument("--force", action="store_true")
    a = ap.parse_args()
    out = pathlib.Path(a.out)
    sids = [p.stem for p in sorted(out.glob("S-*.json")) if not p.name.endswith(".grade.json")
            and (not a.only or p.stem in a.only.split(","))]
    todo = [s for s in sids if a.force or not (out / f"{s}.grade.json").exists()]
    with cf.ThreadPoolExecutor(a.workers) as ex:
        list(ex.map(lambda s: grade_one(out, s), todo))
    rows = scorecard(out)
    print(f"{'SID':6} {'rubric':>6} {'sq':>6} {'su':>6} {'nov':>4} {'score':>6}  fabricated / errors")
    for g in rows:
        print(f"{g['sid']:6} {g['rubric']:6.3f} {g['sq']:6.3f} {g['su']:6.3f} {g['novelty']:4.2f} {g['score']:6.3f}  "
              f"{g['fabricated_figures'][:6]} {g['errors'] or ''}")
    if rows:
        print(f"TOTAL (mean of {len(rows)}): {sum(r['score'] for r in rows) / len(rows):.4f}")


if __name__ == "__main__":
    main()
