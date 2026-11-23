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
    return set(tuple(w[i:i+n]) for i in range(len(w)-n+1)), re.findall(r"[a-z0-9]+", t.lower())

target = sys.argv[1] if len(sys.argv)>1 else "scout-knight-v14"
g_new, w_new = grams(bundle_text(target))

pool={}
for p in glob.glob(os.path.join(base,"fleet","scout-*")):
    if os.path.isdir(p) and os.path.exists(p+"/SKILL.md") and os.path.basename(p)!=target:
        pool[os.path.basename(p)] = bundle_text(os.path.basename(p))
for p in glob.glob(r"intel/v38-top/*SKILL.md") + glob.glob(r"intel/v38-field/*/SKILL.md") + glob.glob(r"intel/ours/*/SKILL.md"):
    try: pool["X:"+os.path.basename(os.path.dirname(p))] = io.open(p,encoding="utf8").read()
    except: pass

# union coverage per word position
covered=[False]*len(w_new)
for d,t in pool.items():
    g,w = grams(t)
    gw = grams(bundle_text(target))[0]
    # mark positions in target covered by any gram in g
    for i in range(len(w_new)-4):
        if tuple(w_new[i:i+5]) in g:
            for j in range(i,i+5): covered[j]=True

# print covered runs
i=0; runs=[]
while i<len(w_new):
    if covered[i]:
        j=i
        while j<len(w_new) and covered[j]: j+=1
        if j-i>=6: runs.append((i,j))
        i=j
    else: i+=1
tot=sum(covered)
print(f"{target}: {tot}/{len(w_new)} words covered by union = {100*tot/len(w_new):.1f}%")
print("=== covered runs (>=6 words) ===")
for a,b in runs:
    print(f"[{b-a:3d}] " + " ".join(w_new[a:b])[:160])
