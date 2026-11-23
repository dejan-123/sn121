import os, glob, io, sys, difflib
sys.stdout.reconfigure(encoding='utf8')
base = r"challenges/v38-manager-coaching-and-1-on-1-preparation-skill"

def bundle_text(d):
    dd = os.path.join(base, "fleet", d)
    t = io.open(dd+"/SKILL.md", encoding="utf8").read()
    for r in sorted(glob.glob(dd+"/references/*.md")):
        t += "\n" + io.open(r, encoding="utf8").read()
    return t

target = sys.argv[1] if len(sys.argv)>1 else "scout-knight-v14"
t_new = bundle_text(target)
pool = {os.path.basename(p): bundle_text(os.path.basename(p))
        for p in glob.glob(os.path.join(base,"fleet","scout-*"))
        if os.path.isdir(p) and os.path.exists(p+"/SKILL.md") and os.path.basename(p)!=target}
for p in glob.glob(r"intel/v38-top/*SKILL.md") + glob.glob(r"intel/v38-field/*/SKILL.md") + glob.glob(r"intel/ours/*/SKILL.md"):
    try: pool["X:"+p.split("\\")[-2]+"/"+os.path.basename(p)] = io.open(p,encoding="utf8").read()
    except: pass

rows=[]
for d,t in pool.items():
    # fraction of target's chars inside matching blocks vs this file
    sm = difflib.SequenceMatcher(None, t, t_new, autojunk=False)
    m = sum(b.size for b in sm.get_matching_blocks())
    rows.append((m/len(t_new), d, m))
rows.sort(reverse=True)
for r,d,m in rows[:8]:
    print(f"{r*100:5.1f}%  {m:6d} chars  {d}")
