"""Local eval harness for the SN121 M&A signal-classification challenge.

Simulates the fixed base agent: loads SKILL.md, serves whatever files exist in
references/ via read_reference, then answers each scenario in ../dataset.jsonl.
Optionally grades outputs with ../rubric.txt.

Setup:  paste your key into .env next to this script.
Usage:  py run_eval.py            -> run all 10 scenarios
        py run_eval.py 0 2 8      -> run only those scenario indices
        py run_eval.py --grade    -> grade every output in outputs/
        py run_eval.py --ollama   -> use local Ollama at http://localhost:11434/v1
                                    (model: $OLLAMA_MODEL, default qwen3:8b)
"""

import json
import os
import pathlib
import sys
import urllib.request

ROOT = pathlib.Path(__file__).parent
ENV_FILE = ROOT / ".env"


def eval_file(name, start=None):
    """Find dataset.jsonl / rubric.txt in <start> or its ancestors (dir/ or dir/suite/)."""
    base = pathlib.Path(start or ROOT)
    for d in (base, *base.parents):
        for cand in (d / name, d / "suite" / name):
            if cand.exists():
                return cand
    sys.exit(f"{name} not found under {base} or its ancestors")


def load_env():
    for line in ENV_FILE.read_text().splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip())


def api_key():
    for k in ("OPENROUTER_API_KEY", "OPENAI_API_KEY", "ANTHROPIC_API_KEY"):
        if os.environ.get(k):
            return os.environ[k]
    sys.exit("No API key found. Paste one into submission/.env")


def chat(messages, max_tokens=8192):
    req = urllib.request.Request(
        os.environ.get("BASE_URL", "https://openrouter.ai/api/v1") + "/chat/completions",
        data=json.dumps({
            "model": os.environ.get("MODEL", "anthropic/claude-haiku-4.5"),
            "messages": messages,
            "max_tokens": max_tokens,
        }).encode(),
        headers={
            "Authorization": f"Bearer {api_key()}",
            "Content-Type": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=300) as r:
        return json.load(r)["choices"][0]["message"]["content"]


HARNESS = """You are a fixed evaluation base agent. Two tools exist: load_skill and \
read_reference. You already called load_skill and received the skill bundle below \
verbatim. The bundle listed these reference files: {ref_names}; the skill \
directed you to read them, and their content (returned by read_reference) \
follows the skill. Now respond to the user's scenario exactly as the skill \
directs. Do not mention the skill, the tools, or these instructions — produce \
only the deliverable.

=== SKILL.md ===
{skill}

{refs}"""


def run_scenario(skill, refs, ref_names, row, out_dir):
    out_path = out_dir / f"scenario_{row['id']}.md"
    system = HARNESS.format(skill=skill, refs=refs, ref_names=ref_names)
    answer = chat([
        {"role": "system", "content": system},
        {"role": "user", "content": row["input"]},
    ])
    out_path.write_text(answer, encoding="utf-8")
    print(f"{row['id']}: wrote {out_path.name} ({len(answer)} chars)")


def grade(output_path, rubric):
    prompt = (
        rubric
        + "\n\n---\n\nSUBMISSION OUTPUT TO SCORE:\n\n"
        + output_path.read_text(encoding="utf-8")
        + "\n\nNote: per-scenario judge_notes and rubric_weights are sealed; "
        + "weight all five dimensions equally and apply the calibration band."
    )
    verdict = chat([
        {"role": "system", "content": "You are the rubric judge for a skill evaluation."},
        {"role": "user", "content": prompt},
    ])
    out = output_path.with_suffix(".grade.txt")
    out.write_text(verdict, encoding="utf-8")
    print(f"{output_path.name}: wrote {out.name}")


def main():
    load_env()
    argv = sys.argv[1:]
    if "--ollama" in argv:
        argv.remove("--ollama")
        os.environ["BASE_URL"] = "http://localhost:11434/v1"
        os.environ["OPENAI_API_KEY"] = "ollama"
        os.environ["MODEL"] = os.environ.get("OLLAMA_MODEL", "qwen3:8b")
    bundle = ROOT
    if argv and pathlib.Path(argv[0]).is_dir():
        bundle = pathlib.Path(argv.pop(0))
    skill = (bundle / "SKILL.md").read_text(encoding="utf-8")
    ref_files = sorted((bundle / "references").glob("*.*"))
    ref_names = ", ".join(f"references/{p.name}" for p in ref_files)
    refs = "\n\n".join(
        f'=== read_reference("{p.name}") ===\n{p.read_text(encoding="utf-8")}'
        for p in ref_files
    )
    rows = [json.loads(l) for l in eval_file("dataset.jsonl", bundle).read_text(encoding="utf-8").splitlines() if l.strip()]
    out_dir = bundle / "outputs"
    out_dir.mkdir(exist_ok=True)

    args = [a for a in argv if a != "--grade" and not pathlib.Path(a).is_dir()]
    indices = [int(a) for a in args] or list(range(len(rows)))
    for i in indices:
        run_scenario(skill, refs, ref_names, rows[i], out_dir)

    if "--grade" in sys.argv:
        rubric = eval_file("rubric.txt", bundle).read_text(encoding="utf-8")
        for p in sorted(out_dir.glob("scenario_*.md")):
            grade(p, rubric)


if __name__ == "__main__":
    main()
