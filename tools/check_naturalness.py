"""Naturalness checker — a local proxy for the skill_use (su) axis.

su is ~30% of the score and the measured separator is output naturalness:
the same rulings scored 1.0 (free-flowing practitioner memo), .9375 (coined
labels), .75 (clipped headings), and .667 (audit shape) on identical suites.
Until now the only local check was eyeballing. This tool judges generated
outputs on an anchored 0-1 scale and, in --calibrate mode, verifies the judge
reproduces the known ordering of real submissions before you trust it.

Judge model: haiku via OpenRouter when tools/.env has a key (matches the real
grader), else local Ollama. Generation uses the run_eval.py harness the same
way — pass --ollama or it auto-falls back when no API key is configured.

Usage:
    python tools/check_naturalness.py <bundle_dir> [idx...]  generate + judge
    python tools/check_naturalness.py --score <outputs_dir>  judge saved outputs
    python tools/check_naturalness.py --calibrate            verify ordering
"""

import json
import os
import pathlib
import sys
import urllib.request

sys.path.insert(0, str(pathlib.Path(__file__).parent))
import run_eval  # reuse .env loading + chat plumbing

ROOT = pathlib.Path(__file__).resolve().parent
REPO = ROOT.parent
CALIB_DIR = ROOT / "calibration"
MANIFEST = CALIB_DIR / "manifest.json"

JUDGE_PROMPT = """You are grading the OUTPUT NATURALNESS of an AI agent's deliverable.

An agent followed a written skill to produce the text below. Judge ONLY how
naturally it reads as writing by an experienced practitioner — not whether the
content is correct.

Score guide (anchored on real graded submissions):
- 1.0: reads like a practitioner wrote a note to a colleague. Flowing prose,
  plain vocabulary, structure that serves the reader, length that fits the
  ask. No template smell.
- 0.9: mostly natural; light sectioning or one coined label, still reads human.
- 0.75: competent but visibly templated — clipped headings, mechanical
  section stubs, stilted fragments, or decorative labels.
- 0.6 or below: reads like an audit checklist or a form — trigger fields,
  status tags, mechanical labels, checkbox phrasing.

Reply with EXACTLY two lines and nothing else:
SCORE: <number 0.0-1.0>
WHY: <one sentence naming what pushed it up or down>

OUTPUT TO JUDGE:
---
{text}
---"""


def judge_chat(prompt):
    """temp-0 judge call on whatever backend is configured."""
    req = urllib.request.Request(
        os.environ.get("BASE_URL", "https://openrouter.ai/api/v1") + "/chat/completions",
        data=json.dumps({
            "model": os.environ.get("MODEL", "anthropic/claude-haiku-4.5"),
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0,
            "max_tokens": 1024,
        }).encode(),
        headers={
            "Authorization": f"Bearer {run_eval.api_key()}",
            "Content-Type": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=300) as r:
        return json.load(r)["choices"][0]["message"]["content"]


def parse_score(verdict):
    for line in verdict.splitlines():
        if line.upper().startswith("SCORE:"):
            try:
                return float(line.split(":", 1)[1].strip().rstrip("."))
            except ValueError:
                return None
    return None


def judge_output(text):
    verdict = judge_chat(JUDGE_PROMPT.format(text=text))
    return parse_score(verdict), verdict


def score_outputs_dir(out_dir):
    files = sorted(pathlib.Path(out_dir).glob("scenario_*.md"))
    if not files:
        sys.exit(f"no scenario_*.md in {out_dir}")
    results = []
    for p in files:
        score, verdict = judge_output(p.read_text(encoding="utf-8"))
        results.append((p, score, verdict))
        why = next((l[4:].strip() for l in verdict.splitlines()
                    if l.upper().startswith("WHY")), "?")
        print(f"{p.name}: {score}  ({why})")
    scores = [s for _, s, _ in results if s is not None]
    if scores:
        print(f"--- mean naturalness: {sum(scores)/len(scores):.3f} "
              f"over {len(scores)} outputs ---")
    return results


def calibrate():
    manifest = json.loads(MANIFEST.read_text())
    bands = {}
    for entry in manifest:
        p = CALIB_DIR / entry["file"]
        score, verdict = judge_output(p.read_text(encoding="utf-8"))
        bands.setdefault(entry["expected_su"], []).append(score)
        why = next((l[4:].strip() for l in verdict.splitlines()
                    if l.upper().startswith("WHY")), "?")
        print(f"{entry['file']} (real su {entry['expected_su']}): "
              f"judged {score}  ({why})")
    means = [(su, sum(v)/len(v)) for su, v in sorted(bands.items(), reverse=True)]
    ordered = all(means[i][1] > means[i+1][1] for i in range(len(means)-1))
    print("--- anchor means: " +
          "  ".join(f"su{su:g}->{m:.2f}" for su, m in means) + " ---")
    print("CALIBRATION", "PASS - judge ordering matches real su ordering"
          if ordered else "FAIL - do not trust this judge/model combo")


def ensure_outputs(bundle, indices):
    out_dir = bundle / "outputs"
    rows = [json.loads(l) for l in
            run_eval.eval_file("dataset.jsonl", bundle)
            .read_text(encoding="utf-8").splitlines() if l.strip()]
    missing = [i for i in indices
               if not (out_dir / f"scenario_{rows[i]['id']}.md").exists()]
    if not missing:
        return
    skill = (bundle / "SKILL.md").read_text(encoding="utf-8")
    ref_files = sorted((bundle / "references").glob("*.*"))
    ref_names = ", ".join(f"references/{p.name}" for p in ref_files)
    refs = "\n\n".join(
        f'=== read_reference("{p.name}") ===\n{p.read_text(encoding="utf-8")}'
        for p in ref_files)
    out_dir.mkdir(exist_ok=True)
    for i in missing:
        run_eval.run_scenario(skill, refs, ref_names, rows[i], out_dir)


def main():
    run_eval.load_env()
    argv = sys.argv[1:]
    use_ollama = "--ollama" in argv or not os.environ.get("OPENROUTER_API_KEY")
    if "--ollama" in argv:
        argv.remove("--ollama")
    if use_ollama:
        os.environ["BASE_URL"] = "http://localhost:11434/v1"
        os.environ["OPENAI_API_KEY"] = "ollama"
        os.environ["MODEL"] = os.environ.get("OLLAMA_MODEL", "qwen3:8b")

    if argv and argv[0] == "--calibrate":
        calibrate()
        return
    if argv and argv[0] == "--score":
        score_outputs_dir(argv[1])
        return
    if not argv:
        sys.exit(__doc__)
    bundle = pathlib.Path(argv[0])
    indices = [int(a) for a in argv[1:]] or [0]
    ensure_outputs(bundle, indices)
    score_outputs_dir(bundle / "outputs")


if __name__ == "__main__":
    main()
