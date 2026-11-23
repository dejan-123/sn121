"""Package a skill bundle directory into submission.zip with forward-slash paths.

PowerShell Compress-Archive produces backslash entry names that the upload
endpoint rejects — always use this instead.

Usage:  python tools/pack_bundle.py <bundle_dir> [out.zip]
        python tools/pack_bundle.py challenges/v37-x/accounts/piero-uid134/v1-gates

The zip root contains SKILL.md and references/... exactly as the bundle dir
lays them out.
"""

import pathlib
import sys
import zipfile

BUNDLE_FILES = ("SKILL.md",)


def pack(bundle: pathlib.Path, out: pathlib.Path) -> None:
    if not (bundle / "SKILL.md").exists():
        sys.exit(f"{bundle} has no SKILL.md")
    files = [p for p in bundle.rglob("*") if p.is_file() and "__pycache__" not in p.parts
             and p.suffix != ".zip"
             and "outputs" not in p.relative_to(bundle).parts]
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        for p in files:
            arc = p.relative_to(bundle).as_posix()  # forward slashes required
            z.write(p, arc)
    with zipfile.ZipFile(out) as z:
        bad = [n for n in z.namelist() if "\\" in n]
        print(f"{out}: {len(z.namelist())} entries")
        for n in z.namelist():
            print("  ", n)
        if bad:
            sys.exit(f"BACKSLASH paths found: {bad}")


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    bundle = pathlib.Path(sys.argv[1])
    out = pathlib.Path(sys.argv[2]) if len(sys.argv) > 2 else bundle / "submission.zip"
    pack(bundle, out)


if __name__ == "__main__":
    main()
