import os, glob, re, io, sys
sys.stdout.reconfigure(encoding='utf8')
base = r"challenges/v38-manager-coaching-and-1-on-1-preparation-skill"

def bundle_text(d):
    dd = os.path.join(base, "fleet", d)
    t = io.open(dd+"/SKILL.md", encoding="utf8").read()
    for r in sorted(glob.glob(dd+"/references/*.md")):
        t += "\n" + io.open(r, encoding="utf8").read()
    return t

def grams(t, n=5):
    w = re.findall(r"[a-z0-9]+", t.lower())
    return set(tuple(w[i:i+n]) for i in range(len(w)-n+1))

target = sys.argv[1] if len(sys.argv)>1 else "scout-knight-v14"
t_new = bundle_text(target)
g_new = grams(t_new)

# union coverage: fraction of target grams found in ANY other file (union)
pool = {}
for p in glob.glob(os.path.join(base,"fleet","scout-*")):
    if os.path.isdir(p) and os.path.exists(p+"/SKILL.md") and os.path.basename(p)!=target:
        pool[os.path.basename(p)] = bundle_text(os.path.basename(p))
for p in glob.glob(r"intel/v38-top/*SKILL.md") + glob.glob(r"intel/v38-field/*/SKILL.md") + glob.glob(r"intel/ours/*/SKILL.md"):
    try: pool["X:"+os.path.basename(os.path.dirname(p))] = io.open(p,encoding="utf8").read()
    except: pass

u_all=set(); u_fleet=set(); u_wave=set()
wave={"scout-captain-v14","scout-piero-v14","scout-knight-v14","scout-kelvin-v13","scout-dragon-v13","scout-star-v13","scout-astro-v14","scout-toby-v13"}-{target}
for d,t in pool.items():
    g=grams(t)
    u_all|= (g_new & g)
    if d in wave: u_wave|=(g_new&g)
    else: u_fleet|=(g_new&g)
print(f"{target}: union-all {100*len(u_all)/len(g_new):.1f}%  union-wave {100*len(u_wave)/len(g_new):.1f}%  union-rest {100*len(u_fleet)/len(g_new):.1f}%")
