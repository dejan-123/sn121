---
name: compensation-talent-benchmarking
description: Judges whether pay bands are competitive, lagging or above market for each role family, by filtering classified external salary evidence for comparability, normalising it to annual base, and tracing every verdict and deferral to the points that survived. Use when a classified evidence table and an internal band snapshot are supplied; redirect anything else.
---

# Compensation benchmarking

A benchmark is only as good as the pool left after filtering. The common failure is to read a market number off the whole table, then hunt for reasons. Work the other way: decide what each point is, decide whether it can speak for this role, and only then look at what it says. A thin pool honestly labelled helps a pay committee more than a confident number it cannot defend. Most errors come from generosity: keeping a point that is nearly comparable, or calling a verdict firm because the arithmetic was clean.

## 1. Is this a benchmarking request?

You need both a classified external evidence table and internal bands by role family and level. Check this before touching any figure.

Redirect instead of benchmarking when the request is for what one person should earn, a lookup of market salaries, designing or re-levelling bands, or a pay-equity audit, or when there is no external evidence. A request may mix several of these; answer each one in a sentence. Say what you cannot do and why, and who handles it. If outside evidence has not been gathered and classified yet, say that step comes first. Then list what to send: an evidence table giving source, type (offer or posted range), date, role and level, location, company stage and base figures, plus bands by family and level, headcount, the data window and recent offers. Do not repeat any name or salary from the request, settle the argument the requester wants settled, quote pay from memory, or draw a table. Write 120 to 200 words, then stop. No table and no reference read are needed.

When evidence exists but one internal band is missing, benchmark the other families and name that gap.

## 2. Classify every point before reading what it pays

Call `read_reference` for `references/written-up-cases.md` now, on its own, to see a finished answer. Its companies and figures are illustrative; none may appear in yours.

Then classify. The answer begins with this classification, one compact row per evidence ID in table order, because every later number depends on it:

ID | Family and level | Type | Date check | Geography | Stage distance | Scope | Class and reason | Usable annual base

Every ID appears exactly once. Under the table write one counts line per family, "3 retrieved = 1 full + 1 partial + 1 dropped", and copy those numbers into the funnel cells unchanged. Notes in the input often hold the deciding fact.

**Exclusions come first; an excluded point is dropped whatever else matches.**

- **Date.** Take the cutoff month exactly as the input states it; do not recompute it from the window length. Decide by year first and write the cell that way: "2026 after 2025: in", "2024 before 2025: out"; only when the years are the same do months decide: "2025, month 10 = 10: in", "2025, month 09 before 10: out". Equal or later stays; earlier goes, even by one month, even for an accepted offer. No date, no place in the pool.
- **Basis.** Drop a different kind of pay: retention or deal money, hourly contract work, acquisition packages, equity-heavy or cash-heavy totals. A combined figure is usable only when the input itself gives the split.
- **Provenance.** Verbal reports and surveys with no named source or method are dropped.

**Then three dimensions, judged against the company's own row:**

| | Match | Near | Miss |
|---|---|---|---|
| Geography | same metro, or remote explicitly anchored to it | remote or national with no metro declared | any other metro or country |
| Stage | distance 0 | distance 1 | distance 2 or more, public, unknown |
| Scope | same work and level; a different title counts when the input's note maps it to the same level | adjacent title, substantial overlap | different level or function |

Stage distance is counted, not judged: number the rounds Seed 0, A 1, B 2, C 3, D 4, E 5 and subtract. Write it in the cell: "B to E = 3, Miss".

Three Matches: **fully comparable**, whether it is an offer or a posted range. Exactly one Near and no Miss: **partial**. Any Miss, or two Nears: **dropped**, even when everything else matches and even when it is an accepted offer. Only the input can declare two places equivalent; never reason that two cities cost about the same. Posting type is the fourth dimension: it decides weight in step 4, and hearsay fails it outright.

## 3. One basis

Compare annual base with annual base in the band's currency. Where the input gives the arithmetic, show it with its direction: "total 96,000 − bonus 11,000 → base 85,000". Removing variable pay always lowers a figure. If the split, hours or exchange rate is absent, drop the point and name what was missing; never supply one. A family banded in another currency is judged in that currency. A posted range is read at (low + high) / 2, a convention and not a wage anyone was paid.

## 4. Verdict and confidence

For each family and level:

1. **External accepted offers that are fully comparable set the anchor**: one alone, or the median of several. Posted ranges then corroborate or disagree. Never blend a posted midpoint into an offer anchor.
2. **None?** Anchor on the midpoint of the fully comparable posted ranges the average of all of them when there are several.
3. **No fully comparable point?** Defer. Partials never set an anchor, alone or averaged.

Work each gap in three written steps, because a slip here reverses the verdict:

a. Difference in currency: anchor − band midpoint. "59,200 − 56,700 = 2,500".
b. Share of the anchor: "2,500 / 59,200 = 4.2%". Sanity check: 1% of the anchor is 592, and 2,500 is a little over four of those.
c. Direction from which number is larger. Anchor larger: the band pays below market, so the gap is negative: **lagging** if beyond 3%, otherwise competitive. Midpoint larger: positive gap: **above-market** if beyond 3%, otherwise competitive.

d. Sides: write "above" or "below" the band midpoint for the anchor and for each partial, with its type: "anchor above; R12 partial offer below: opposite".
e. Tier count: list the IDs that are both Full and an accepted offer, "external full offers: R1 = 1", then the tier. A posted range is never counted here, and neither are own offers.

If the gap is within half a point of 3%, say the call is close. Say whether the anchor falls inside the band.

The company's own offers are not external evidence and never enter the funnel or the anchor. Mention them as corroboration or contradiction; a decline and its stated reason are worth a clause. They cannot settle a conflict in the external pool.

Confidence is counted, not felt. Count the fully comparable **external accepted offers** for the family:

| Tier | Rule |
|---|---|
| High | two or more |
| Medium | exactly one |
| Low | none: posted ranges only, however many |
| Deferred | no fully comparable point |

There are exactly two grounds for deferring. One: the family has no fully comparable point. Two: the anchor rests on posted ranges only and a partial accepted offer sits on the other side of the band midpoint, because what someone was paid outranks what was advertised. Nothing else defers a verdict. A full point always outranks a partial, so when a partial sits on the other side from an offer anchor, or a partial posted range from a posted anchor, keep the verdict, say they disagree, and set Low. Two full points on one side that differ in size are agreement. Own offers never change a tier; report in a clause whether they agree with the anchor. An open priority role raises urgency, never confidence. Write the deciding reason beside each tier.

## 5. The answer

Address the pay committee. No title and no process note. In this order:

**Evidence classification**: the table from step 2, cells kept to a few words.

**Gap working**: one line per family with steps a to e.

**What it shows**: one or two sentences on the finding that matters most for this company, in its own terms.

**Role-family benchmark**, one row per family and level (two levels of one family are two rows):

Role family and level | Verdict and gap | Evidence funnel | Anchor and band | Confidence and reason

Funnel cell: "4 retrieved: 2 full (IDs), 1 partial (ID), 1 dropped (ID, reason)", agreeing with the classification. Anchor cell: what the anchor is (offer or posted range, which ID), and whether it sits inside the band. Deferred families keep a row with no gap. One line under the table totals the IDs.

**Deferred verdicts**: for each, what the evidence was, why it cannot decide, and the exact point that would (level, metro, stage, type). If none, one sentence naming the weakest verdict and what would firm it.

**Signal caveats**: only skews that cross families: reliance on one source, posted-only coverage, pay-transparency rules that differ by place. Each once, tied to the families it touches, never repeated in rows. Use the input's own words on any mandate; add no law.

Keep cells tight; say nothing twice. End on the last caveat particular to this company.

Never: name individuals' pay, propose a new band or raise, use a dropped point in a verdict, bring in market knowledge from outside the input.
