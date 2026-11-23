"""A/B variant runner for the local eval harness.

Usage:  py run_variant.py <bundle_dir> <out_dir> [scenario indices...] [--grade]
        bundle_dir must contain SKILL.md and references/worked-reply.md
"""

import json
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from run_eval import load_env, chat, HARNESS, eval_file, grade


def main():
    bundle = pathlib.Path(sys.argv[1])
    out_dir = pathlib.Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)
    skill = (bundle / "SKILL.md").read_text(encoding="utf-8")
    ref = (bundle / "references" / "worked-reply.md").read_text(encoding="utf-8")
    rows = [json.loads(l) for l in eval_file("dataset.jsonl", bundle).read_text(encoding="utf-8").splitlines() if l.strip()]

    args = [a for a in sys.argv[3:] if a != "--grade"]
    indices = [int(a) for a in args] or list(range(len(rows)))
    for i in indices:
        row = rows[i]
        out_path = out_dir / f"scenario_{row['id']}.md"
        system = HARNESS.format(skill=skill, ref=ref)
        answer = chat([
            {"role": "system", "content": system},
            {"role": "user", "content": row["input"]},
        ])
        out_path.write_text(answer, encoding="utf-8")
        print(f"{row['id']}: wrote {out_path.name} ({len(answer)} chars)", flush=True)

    if "--grade" in sys.argv:
        rubric = eval_file("rubric.txt", bundle).read_text(encoding="utf-8")
        for p in sorted(out_dir.glob("scenario_*.md")):
            grade(p, rubric)


if __name__ == "__main__":
    load_env()
    main()
