import os, glob, re, io, sys
sys.stdout.reconfigure(encoding='utf8')

base = r"challenges/v38-manager-coaching-and-1-on-1-preparation-skill"

def toks(t):
    return re.findall(r"\w+|[^\w\s]", t.lower())

def bundle_text(d):
    dd = os.path.join(base, "fleet", d)
    t = io.open(dd+"/SKILL.md", encoding="utf8").read()
    for r in sorted(glob.glob(dd+"/references/*.md")):
        t += "\n" + io.open(r, encoding="utf8").read()
    return t

def ngrams(t, n=8):
    w = toks(t)
    return set(tuple(w[i:i+n]) for i in range(len(w)-n+1))

targets = sys.argv[1:] or ["scout-kelvin-v13"]
pool = [os.path.basename(p) for p in glob.glob(os.path.join(base,"fleet","scout-*")) if os.path.isdir(p)]
pool = [d for d in pool if os.path.exists(os.path.join(base,"fleet",d,"SKILL.md"))]
# add top-miner corpus
ext = {}
for p in glob.glob(r"intel/v38-top/*SKILL.md") + glob.glob(r"intel/v38-field/*/SKILL.md"):
    try: ext["X:"+os.path.basename(os.path.dirname(p))] = io.open(p,encoding="utf8").read()
    except: pass
g_pool = {d: ngrams(bundle_text(d)) for d in pool}
g_pool.update({k: ngrams(v) for k,v in ext.items()})

for new in targets:
    g_new = ngrams(bundle_text(new))
    total = len(g_new)
    rows = sorted(((len(g_new & g), d) for d,g in g_pool.items() if d != new), reverse=True)
    s,d = rows[0]
    print(f"{new}: worst {s}/{total} = {100*s/total:.1f}% vs {d}")
    for s2,d2 in rows[1:4]:
        print(f"    next {s2}/{total} = {100*s2/total:.1f}% vs {d2}")
