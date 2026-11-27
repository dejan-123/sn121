"""Run isolated headless Claude Code sessions (no API key: uses the logged-in CLI).

Every call is a fresh `claude -p` session: no built-in tools, no user/project
settings, no CLAUDE.md, no hooks, empty working directory. The model defaults to
claude-sonnet-4-6 — the v40 validator's generation and judge model.
"""
import glob
import json
import os
import pathlib
import shutil
import subprocess
import tempfile

MODEL = os.environ.get("BLIND_MODEL", "claude-sonnet-4-6")


def claude_exe():
    if os.environ.get("CLAUDE_EXE"):
        return os.environ["CLAUDE_EXE"]
    found = shutil.which("claude")
    if found:
        return found
    pats = [os.path.expanduser("~/.vscode/extensions/anthropic.claude-code-*/resources/native-binary/claude*")]
    hits = sorted(h for p in pats for h in glob.glob(p) if h.endswith(("claude", "claude.exe")))
    if not hits:
        raise SystemExit("claude CLI not found; set CLAUDE_EXE")
    return hits[-1]


def _env():
    env = {k: v for k, v in os.environ.items()
           if not (k == "CLAUDECODE" or k.startswith("CLAUDE_CODE_") or k.startswith("CLAUDE_AGENT_")
                   or k in ("CLAUDE_PID", "CLAUDE_EFFORT", "AI_AGENT"))}
    env["MAX_THINKING_TOKENS"] = "0"           # production calls are plain completions
    env["DISABLE_AUTOUPDATER"] = "1"
    return env


def run(prompt, system, *, mcp_config=None, allowed_tools=(), json_schema=None,
        timeout=900, model=None, stream=False):
    """Returns dict: {ok, result, structured, messages, usage, error, raw}."""
    cmd = [claude_exe(), "-p", "--model", model or MODEL,
           "--system-prompt", system,
           "--tools", "",
           "--setting-sources", "",
           "--no-session-persistence",
           "--output-format", "stream-json" if stream else "json"]
    if stream:
        cmd.append("--verbose")
    if mcp_config:
        cmd += ["--mcp-config", mcp_config, "--strict-mcp-config"]
    else:
        cmd += ["--strict-mcp-config"]
    if allowed_tools:
        cmd += ["--allowedTools", *allowed_tools]
    if json_schema:
        cmd += ["--json-schema", json.dumps(json_schema)]
    with tempfile.TemporaryDirectory(prefix="blind_") as cwd:
        try:
            p = subprocess.run(cmd, input=prompt, capture_output=True, text=True,
                               encoding="utf-8", errors="replace", timeout=timeout,
                               cwd=cwd, env=_env())
        except subprocess.TimeoutExpired:
            return {"ok": False, "error": f"timeout after {timeout}s"}
    out = p.stdout.strip()
    if not out:
        return {"ok": False, "error": (p.stderr or "empty output")[-2000:]}
    if stream:
        events = [json.loads(l) for l in out.splitlines() if l.strip().startswith("{")]
        msgs, final = [], None
        for e in events:
            if e.get("type") == "assistant":
                for c in e["message"].get("content", []):
                    msgs.append(c)
            if e.get("type") == "result":
                final = e
        if not final:
            return {"ok": False, "error": "no result event", "messages": msgs}
        return {"ok": not final.get("is_error"), "result": final.get("result"), "messages": msgs,
                "usage": final.get("usage"), "model_usage": final.get("modelUsage"),
                "error": final.get("result") if final.get("is_error") else None}
    try:
        final = json.loads(out)
    except json.JSONDecodeError:
        return {"ok": False, "error": out[-2000:]}
    return {"ok": not final.get("is_error"), "result": final.get("result"),
            "structured": final.get("structured_output"), "usage": final.get("usage"),
            "model_usage": final.get("modelUsage"),
            "error": final.get("result") if final.get("is_error") else None}
