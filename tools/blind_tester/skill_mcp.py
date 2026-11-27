"""Minimal stdio MCP server reproducing the SN121 eval harness's two agent tools.

    load_skill()            -> SKILL.md text + list of reference file names
    read_reference(name)    -> one reference file's text

Production gives the agent exactly these two tools; a reference the agent never
opens contributes nothing. Every call is appended to --log as JSON lines so the
generator can report references_read the same way the platform's results JSON does.

Usage (launched by generate.py through --mcp-config, not by hand):
    python skill_mcp.py --bundle <dir> --log <calls.jsonl>
"""
import argparse
import json
import pathlib
import sys

ALLOWED = {".md", ".txt", ".json", ".yaml", ".yml", ".csv"}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--bundle", required=True)
    ap.add_argument("--log", required=True)
    a = ap.parse_args()
    bundle = pathlib.Path(a.bundle)
    skill = (bundle / "SKILL.md").read_text(encoding="utf-8")
    refdir = bundle / "references"
    refs = sorted(p.name for p in refdir.iterdir() if p.is_file() and p.suffix in ALLOWED) if refdir.exists() else []
    log = open(a.log, "a", encoding="utf-8")

    def record(tool, arg, chars):
        log.write(json.dumps({"tool": tool, "arg": arg, "chars": chars}) + "\n")
        log.flush()

    tools = [
        {"name": "load_skill",
         "description": "Load the skill available for this task. Returns the skill's SKILL.md and the list of reference files you can open with read_reference.",
         "inputSchema": {"type": "object", "properties": {}, "additionalProperties": False}},
        {"name": "read_reference",
         "description": "Read one reference file of the loaded skill by file name.",
         "inputSchema": {"type": "object", "properties": {"name": {"type": "string", "description": "Reference file name, e.g. example.md"}},
                         "required": ["name"], "additionalProperties": False}},
    ]

    def call(name, args):
        if name == "load_skill":
            listing = "\n".join(f"- {r}" for r in refs) or "(none)"
            text = f"{skill}\n\n---\nReference files available via read_reference:\n{listing}"
            record("load_skill", None, len(skill))
            return text, False
        if name == "read_reference":
            want = (args.get("name") or "").split("/")[-1]
            if want not in refs:
                record("read_reference", want, 0)
                return f"No reference named '{want}'. Available: {', '.join(refs) or 'none'}", True
            text = (refdir / want).read_text(encoding="utf-8")
            record("read_reference", want, len(text))
            return text, False
        return f"Unknown tool {name}", True

    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        msg = json.loads(line)
        mid, method = msg.get("id"), msg.get("method")
        if mid is None:          # notification
            continue
        if method == "initialize":
            result = {"protocolVersion": msg.get("params", {}).get("protocolVersion", "2024-11-05"),
                      "capabilities": {"tools": {}},
                      "serverInfo": {"name": "skill", "version": "1.0"}}
        elif method == "tools/list":
            result = {"tools": tools}
        elif method == "tools/call":
            p = msg.get("params", {})
            text, err = call(p.get("name"), p.get("arguments") or {})
            result = {"content": [{"type": "text", "text": text}], "isError": err}
        elif method == "ping":
            result = {}
        else:
            sys.stdout.write(json.dumps({"jsonrpc": "2.0", "id": mid,
                                         "error": {"code": -32601, "message": f"no method {method}"}}) + "\n")
            sys.stdout.flush()
            continue
        sys.stdout.write(json.dumps({"jsonrpc": "2.0", "id": mid, "result": result}) + "\n")
        sys.stdout.flush()


if __name__ == "__main__":
    main()
