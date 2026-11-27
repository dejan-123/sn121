---
name: band-market-memo
description: Write a role-family pay benchmark memo - which salary bands lag, match or lead the market, judged only on outside pay points that survive a comparability screen, with the evidence funnel, a confidence tier and the reasoning behind every call.
---

# Band market memo

The reader is an HR lead who will be challenged on every call. Give them calls that rest on comparable outside pay, the reasoning in plain prose, and the numbers that back it. Settle everything on a working sheet first; the memo only reports what the sheet decided.

## 1. Benchmark or not

A benchmark needs bands per role family and level plus an outside pool already classified (source, type, date, location, funding round, figure per point). Without both, or when the ask is one person's offer or raise, market rates with no pool (never quote pay from memory), designing grades or levels, executive or board pay, equity sizing, or comparing colleagues for fairness: write a short note instead, with no sheet and no reference read. Its first line is `## <Company>: nothing to benchmark yet`; no greeting or thanks before it. Then two short paragraphs, under 1,200 characters: which asks belong to other work and why (individual offer, grade design, a lookup with no pool); what to send (band per role family and level, outside points with source, type, date, location, round, figure) and what comes back (verdict, funnel, confidence per family). No table, market figure or person's name.

## 2. Frame

- Rounds: Seed 0, A 1, B 2, C 3, D 4, later private 5, public 6; rungs apart = difference.
- Home location per family: headquarters metro, the tier remote roles are pinned to, or the team's own city when the input puts it elsewhere (its band currency follows).
- Window: a named month ("nothing before March 2031") is the first allowed month itself; a bare length is counted back from the retrieval month. Undated points are out.
- Per family: band min, mid, max (no mid: (min+max)/2); own accepted and declined offers; open-role priority.

## 3. Screen each point

Dropped, with the input's words as reason: outside the window or undated; unverifiable (verbal, second-hand, unnamed survey or method, anonymous); or not convertible to annual base in the band currency from the input's own numbers. Ranges become midpoints; a stated bonus is subtracted (down to base); periodic employee pay is annualised only with stated periods or hours. Dropped on basis: on-target or total pay without a split; retention, acquisition, sign-on or equity money mixed in; contractor, agency, freelance or day rates; packages flagged equity- or cash-heavy; another currency with no rate. Never supply a rate, split or period.

| | match | partial | mismatch |
|---|---|---|---|
| Location | home | national or unanchored remote | another named city or country |
| Round | same | one rung | two or more; unknown |
| Role | same function and level; any input note mapping the role to yours, whatever the title | adjacent specialism, same level | other level or function |
| Type | accepted offer; posted range | - | declined or claimed rival offer (signal only) |

First fit: drop reason or any mismatch → Dropped; two partials → Dropped; one → Partial; none → Full. Never assume a pay differential.

## 4. Anchor and verdict

1. Full accepted offers → anchor = their median; full ranges only cross-check.
2. Else two or more full ranges, or one full range that is tested → median of their midpoints. One range is tested by a stated pay-transparency law, by the company's own accepted offer in the family, or by a partial posted range one rung away. A lone offer from another round does not test it: one person's price at a different stage.
3. Else **Deferred**: no full point, or one untested range (a voluntary posting is a wish nobody has paid).

Partials never enter a median. Own offers and declines are never pool points.

gap = (anchor − band midpoint) ÷ band midpoint, two decimals, operands shown. Plus: the market pays more than the band.
- +5.00% or more → **Lagging**; −5.00% or less → **Above-market**; between → **Competitive**.
- Near the line (4.00 to 4.99% either way): when the median of the company's own accepted offers sits past the band midpoint on the anchor's side, the company already pays over its midpoint to hire, so the call crosses: Lagging (or Above-market), "close to the line". Otherwise Competitive, "close to the line".

## 5. Confidence

- **High**: a full offer plus a second agreeing full point (another offer, or a full range containing the anchor).
- **Medium**: one full offer alone or beside a range not containing it; or two or more agreeing full ranges that the company's own accepted offers or a pay-citing decline also support.
- **Low**: any other range-only call (name the posted-range cap); full points disagreeing on direction.
- **Deferred**: as in 4.

## 6. Sheet, then memo

1. Your first message after loading this skill is the sheet, in plain lines, before any reference is read: a frame line; one line per point (`ID · family · month vs first allowed · location · round, rungs · role · type/basis · class · reason in the input's words`); one line per family (anchor with IDs, cross-check, test for a lone range, gap worked, verdict, tier with reason); conversions with direction; the most quotable excluded figure. Before closing it, confirm on the sheet: per family full + partial + dropped = retrieved; anchors from full points only, offers and range midpoints never in one median; every gap's sign (plus = market pays more); each 4.00–4.99% gap settled by own offers; each lone range tested or Deferred; range-only tiers capped.
2. End that same message with one read_reference call, on `references/memo-shapes.md`, which holds the memo's form.
3. After it returns, send the memo alone. The sheet is already written and is never repeated: the final message starts at the memo's `##` title.

## 7. The memo

1. `## <Company>: <verdicts in a few words>`, e.g. "two bands lag, one is deferred".
2. **Basis** paragraph: round, home location, base pay and currency; the window in the input's words and its first month, naming any point it shuts out by ID; every conversion with its sum and direction; why offers lead: an accepted offer is revealed preference, pay someone took; a posted range is aspirational, what an employer says it will pay.
3. Two to four prose paragraphs, firmest call first; families decided by the same kind of evidence share one. Open each on what decides it. Cite each point by ID with what it is ("a Series B posting in Raleigh (T-06)"). Say why a partial or dropped point does not move the call, name hearsay as hearsay, and mention the company's own hires and open P1/P2 roles where they raise the stakes. No sentence could be pasted into another family.
4. `### Benchmark table`: `| Role family · level | Verdict | Gap, worked | Evidence funnel | Confidence: reason |`, one row per family and level. Funnel: `N retrieved: F full (IDs); P partial (ID: what differs); D dropped (ID: reason)`, zeros shown. Deferred rows: "gap n/a". Then a **Pool.** line with the four totals.
5. `### Deferred verdicts`: always. Per family, what came closest by ID and the evidence that would settle it (type, location, round, level, date). None: say so and name the call resting on least.
6. `### Signal caveats`: two to four sentences on the whole pool, first counting offers against ranges; mandated vs voluntary postings; single source.
7. One closing sentence on the excluded figure most likely to be quoted, by ID, and why it does not apply.

Role-family grain; every figure from the input or worked in view; no pay advice; 5,000-8,000 characters.
