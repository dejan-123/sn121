"""Export manual Claude/ChatGPT evaluation prompts for a skill bundle.

No API calls are made. For each dataset row this writes:
  <scenario>-generate.md  Paste into Claude/ChatGPT to produce the response.
  <scenario>-judge.md     Paste the generated response into the marked slot.

Usage:
    python tools/export_eval_prompt.py <bundle_dir> [out_dir]

By default, bundles under challenges/vNN-* write to manual-evals/vNN/<bundle>/.
"""

import pathlib
import sys

from run_eval import HARNESS, eval_file

ROOT = pathlib.Path(__file__).parent.parent


def build_prompts(bundle: pathlib.Path, out_dir: pathlib.Path) -> None:
    skill_path = bundle / "SKILL.md"
    if not skill_path.exists():
        sys.exit(f"{bundle} has no SKILL.md")

    skill = skill_path.read_text(encoding="utf-8")
    ref_files = sorted((bundle / "references").glob("*.*"))
    ref_names = ", ".join(f"references/{p.name}" for p in ref_files)
    refs = "\n\n".join(
        f'=== read_reference("{p.name}") ===\n{p.read_text(encoding="utf-8")}'
        for p in ref_files
    )
    system = HARNESS.format(skill=skill, refs=refs, ref_names=ref_names)

    dataset_path = eval_file("dataset.jsonl", bundle)
    rubric_path = eval_file("rubric.txt", bundle)
    rubric = rubric_path.read_text(encoding="utf-8")

    import json

    rows = [
        json.loads(line)
        for line in dataset_path.read_text(encoding="utf-8").splitlines()
        if line.strip()
    ]

    out_dir.mkdir(parents=True, exist_ok=True)
    for row in rows:
        sid = row["id"]
        generation = (
            "# Manual generation prompt\n\n"
            "Paste everything below into a fresh Claude or ChatGPT chat.\n\n"
            "---\n\n"
            "=== SYSTEM ===\n"
            f"{system}\n\n"
            "=== USER ===\n"
            f"{row['input']}\n"
        )
        (out_dir / f"{sid}-generate.md").write_text(generation, encoding="utf-8")

        judge = (
            "# Manual rubric judge prompt\n\n"
            "Paste the model's generated response into the marked slot, then send this whole prompt.\n\n"
            "---\n\n"
            "You are the rubric judge for a skill evaluation. Score strictly from the scenario and rubric. "
            "The official per-scenario judge notes are sealed, so identify likely misses without pretending they are certain.\n\n"
            "=== RUBRIC ===\n"
            f"{rubric}\n\n"
            "=== SCENARIO INPUT ===\n"
            f"{row['input']}\n\n"
            "=== CANDIDATE OUTPUT ===\n"
            "<PASTE THE GENERATED RESPONSE HERE>\n"
        )
        (out_dir / f"{sid}-judge.md").write_text(judge, encoding="utf-8")

    (out_dir / "README.md").write_text(
        "# Manual evaluation prompts\n\n"
        "1. For each scenario, open a fresh chat and paste the `*-generate.md` file.\n"
        "2. Copy the model's response into `<PASTE THE GENERATED RESPONSE HERE>` in the matching `*-judge.md` file.\n"
        "3. Paste that judge prompt into a second fresh chat and collect the score.\n\n"
        "These prompts make no API calls. They are useful for style and contract checks, "
        "but cannot reproduce the sealed scenario judge notes or guarantee the platform score.\n",
        encoding="utf-8",
    )
    print(f"wrote {len(rows) * 2 + 1} files to {out_dir}")


def main() -> None:
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    bundle = pathlib.Path(sys.argv[1]).resolve()
    version = next((p.name.split("-", 1)[0] for p in bundle.parents if p.parent.name == "challenges"), bundle.parent.name)
    default_out = ROOT / "manual-evals" / version / bundle.name
    out_dir = pathlib.Path(sys.argv[2]).resolve() if len(sys.argv) > 2 else default_out
    build_prompts(bundle, out_dir)


if __name__ == "__main__":
    main()
