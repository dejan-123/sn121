"""Two-message eval runner for the v3.x sheet->memo bundle.

Simulates the fixed base agent turn-by-turn instead of the old single-shot
harness, because the skill now produces a working sheet as message 1 and the
memo as message 2, with conditional read_reference calls in between.

Flow per scenario:
  system: skill + read_reference(ledger-sheet.md) already returned (the skill's
          unconditional first move), plus the names of the other references.
  turn A: model writes the sheet - or, for non-benchmark asks, the note intent.
  inject: read_reference(benchmark-memo.md) (+ thin-pools.md when the sheet
          shows a family with fewer than two P points; + not-a-benchmark.md
          when turn A was a note).
  turn B: model writes the memo (or the note).

Saves scenario_<id>_sheet.md and scenario_<id>.md into <bundle>/outputs_sheetmemo/.

Usage:  python tools/run_eval_sheet_memo.py <bundle_dir> [scenario indices...]
"""

import json
import os
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
import run_eval

ROOT = pathlib.Path(__file__).resolve().parent

SYSTEM = """You are a fixed evaluation base agent. Two tools exist: load_skill and \
read_reference. You already called load_skill and received the skill bundle below \
verbatim. The bundle lists these reference files: {ref_names}. To read one you emit \
a read_reference call; its content is then returned to you. The skill's first move \
is to read references/ledger-sheet.md - its returned content is included below. \
Do not mention the skill, the tools, or these instructions - produce only the \
deliverable messages the skill directs.

=== SKILL.md ===
{skill}

=== read_reference("references/ledger-sheet.md") - returned ===
{sheet_ref}"""

THIN_HINT = "\nA family ending with fewer than two P points also triggers a read of references/thin-pools.md - its returned content follows here.\n\n=== read_reference(\"references/thin-pools.md\") - returned ===\n{thin}"

NOTE_SYSTEM = """You are a fixed evaluation base agent. Two tools exist: load_skill and \
read_reference. You already called load_skill and received the skill bundle below \
verbatim. The bundle lists these reference files: {ref_names}. For a non-benchmark \
ask the skill directs you to read references/not-a-benchmark.md first - its \
returned content follows. Do not mention the skill, the tools, or these \
instructions - produce only the note the skill directs.

=== SKILL.md ===
{skill}

=== read_reference("references/not-a-benchmark.md") - returned ===
{note_ref}"""


def thin_triggered(sheet_text):
    # a family whose funnel reads 0 or 1 survived means <2 P points
    return ("0 survived" in sheet_text) or ("1 survived" in sheet_text) or ("P=0" in sheet_text)


def run_scenario(skill, refs, ref_names, row, out_dir):
    rid = row["id"]
    sheet_path = out_dir / f"scenario_{rid}_sheet.md"
    memo_path = out_dir / f"scenario_{rid}.md"

    system = SYSTEM.format(skill=skill, refs="", ref_names=ref_names,
                           sheet_ref=refs["ledger-sheet.md"])
    sheet = run_eval.chat([
        {"role": "system", "content": system},
        {"role": "user", "content": row["input"]},
    ], max_tokens=12000)

    settled = "Settled; the memo follows." in sheet
    sheet_path.write_text(sheet, encoding="utf-8")

    if not settled:
        # note path - turn A already produced the note (model routed correctly
        # without needing the ref injected); save it as the deliverable
        memo_path.write_text(sheet, encoding="utf-8")
        print(f"{rid}: NOTE path -> {memo_path.name} ({len(sheet)} chars)")
        return

    thin = thin_triggered(sheet)
    inject = '=== read_reference("references/benchmark-memo.md") - returned ===\n' + refs["benchmark-memo.md"]
    if thin:
        inject += THIN_HINT.format(thin=refs["thin-pools.md"])
    memo = run_eval.chat([
        {"role": "system", "content": system},
        {"role": "user", "content": row["input"]},
        {"role": "assistant", "content": sheet},
        {"role": "user", "content": inject},
    ], max_tokens=8000)
    memo_path.write_text(memo, encoding="utf-8")
    print(f"{rid}: sheet {len(sheet)} chars (thin-pools read: {thin}) -> memo {len(memo)} chars")


def main():
    run_eval.load_env()
    argv = sys.argv[1:]
    bundle = pathlib.Path(argv.pop(0)) if argv and pathlib.Path(argv[0]).is_dir() else (
        ROOT.parent / "challenges/v40-compensation-talent-benchmarking-skill/accounts/piero/v1-benchmark")
    skill = (bundle / "SKILL.md").read_text(encoding="utf-8")
    refs = {p.name: p.read_text(encoding="utf-8") for p in sorted((bundle / "references").glob("*.*"))}
    ref_names = ", ".join(f"references/{n}" for n in refs)
    rows = [json.loads(l) for l in run_eval.eval_file("dataset.jsonl", bundle).read_text(encoding="utf-8").splitlines() if l.strip()]
    out_dir = bundle / "outputs_sheetmemo"
    out_dir.mkdir(exist_ok=True)
    indices = [int(a) for a in argv] or list(range(len(rows)))
    for i in indices:
        run_scenario(skill, refs, ref_names, rows[i], out_dir)


if __name__ == "__main__":
    main()
