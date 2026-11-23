import os, glob, re, io, sys
sys.stdout.reconfigure(encoding='utf8')
base = r"challenges/v38-manager-coaching-and-1-on-1-preparation-skill"

def bundle_text(d):
    dd = os.path.join(base, "fleet", d)
    t = io.open(dd+"/SKILL.md", encoding="utf8").read()
    for r in sorted(glob.glob(dd+"/references/*.md")):
        t += "\n" + io.open(r, encoding="utf8").read()
    return t

def norm_lines(t):
    out=[]
    for ln in t.splitlines():
        ln = re.sub(r"[^a-z0-9 ]","",ln.lower()).strip()
        ln = re.sub(r"\s+"," ",ln)
        if len(ln) >= 20: out.append(ln)
    return out

def sent_ngrams(t, n=5):
    w = re.findall(r"[a-z0-9]+", t.lower())
    return set(tuple(w[i:i+n]) for i in range(len(w)-n+1)), len(w)

target = sys.argv[1] if len(sys.argv)>1 else "scout-knight-v14"
t_new = bundle_text(target)
pool = {}
for p in glob.glob(os.path.join(base,"fleet","scout-*")):
    if os.path.isdir(p) and os.path.exists(p+"/SKILL.md") and os.path.basename(p)!=target:
        pool[os.path.basename(p)] = bundle_text(os.path.basename(p))
for p in glob.glob(r"intel/v38-top/*SKILL.md") + glob.glob(r"intel/v38-field/*/SKILL.md") + glob.glob(r"intel/ours/*/SKILL.md"):
    try: pool["X:"+os.path.basename(os.path.dirname(p))] = io.open(p,encoding="utf8").read()
    except: pass

g_new, w_new = sent_ngrams(t_new, 5)
lines_new = norm_lines(t_new)
rows=[]
for d,t in pool.items():
    g,_ = sent_ngrams(t,5)
    ng = len(g_new & g)/max(1,len(g_new))
    L = set(norm_lines(t))
    ln = sum(1 for l in lines_new if l in L)/max(1,len(lines_new))
    rows.append((ng, ln, d))
rows.sort(reverse=True)
print(f"target {target} — {w_new} words, {len(g_new)} 5-grams, {len(lines_new)} lines")
for ng,ln,d in rows[:10]:
    print(f"  5gram {ng*100:5.1f}%  lines {ln*100:5.1f}%  {d}")
