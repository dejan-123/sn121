---
name: pay-band-benchmark-memo
description: Tell an HR lead, role family by role family, whether each salary band lags, matches or leads the market, using only outside pay points that pass a comparability screen; show the funnel, the confidence tier and the reasoning in a short memo.
---

# Pay band benchmark memo

A band is priced by outside pay that is truly comparable; the company's own hires only show how hard hiring is. Decide every call on a working sheet, then write a memo a sceptical reader can trace back to the points.

## 1. Is it a benchmark?

It needs bands per role family and level and an outside pool already classified (source, type, date, location, funding round, figure per point). If either is missing, or the ask is one person's offer or raise, market rates with no pool (never quote pay from memory), designing grades or levels, executive or board pay, equity sizing, or comparing colleagues: write a note instead, with no sheet and no reference read. Its first line is `## <Company>: nothing to benchmark yet`, with nothing before it. Then two short paragraphs, under 1,200 characters: which asks belong to other work and why; what to send (band per role family and level; outside points with source, type, date, location, round, figure) and what comes back (verdict, funnel, confidence per family). No table, market figure or person's name.

## 2. Frame

- Rounds: Seed 0, A 1, B 2, C 3, D 4, later private 5, public 6. Rungs apart = difference.
- Home location per family: headquarters metro, the tier remote roles are pinned to, or the team's own city when the input places it elsewhere; its band currency follows.
- Window: a month named as the cut-off ("nothing before July 2031") is the first allowed month; never count back from it. Count back from retrieval only for a bare length. Undated points are out.
- Per family: band min, mid, max (no mid: (min+max)/2); own accepted and declined offers; open-role priority.

## 3. Screen

Drop a point, quoting the input, when it is outside the window or undated; unverifiable (spoken, second-hand, unnamed survey or method, anonymous); or not reducible to annual base in the band currency with the input's own numbers. Ranges become midpoints; subtract a stated bonus (down to base); annualise periodic employee pay only with stated periods or hours. Drop on basis: on-target or total pay with no split; retention, acquisition, sign-on or equity money inside the figure; contractor, agency, freelance or day rates; equity- or cash-heavy packages; another currency with no rate. Never supply a rate, split or period.

| | match | partial | mismatch |
|---|---|---|---|
| Location | home | national or unanchored remote | another named city or country |
| Round | same | one rung | two or more; unknown |
| Role | same function and level; any input note mapping the role to yours, whatever the title | adjacent specialism, same level | other level or function |
| Type | accepted offer; posted range | - | declined or claimed rival offer (signal only) |

First fit: drop reason or any mismatch → Dropped; two partials → Dropped; one → Partial; none → Full. No location or round premium is ever assumed.

## 4. Anchor, gap, verdict

1. Full accepted offers → anchor = the median of those offers alone; full ranges only cross-check and are never averaged in.
2. Else two or more full ranges, or one tested full range → median of midpoints. A lone range is tested by a stated pay-transparency law, by the company's own accepted offer in the family, or by partial points on both sides of it (one above its midpoint and one below; partials on one side only are no test).
3. Else **Deferred**: no full point, or one untested range. Its gap is indicative only.

Partials never join a median. The company's own offers and declines are never the anchor and never join the pool; they only settle a close call and corroborate.

gap = (anchor − band midpoint) ÷ band midpoint, two decimals, operands shown. Plus: the market pays more than the band.
- +5.00% or more → **Lagging**; −5.00% or less → **Above-market**; between → **Competitive**.
- 4.00 to 4.99% either way: the company's own accepted offers decide. If their median sits past the band midpoint on the anchor's side, the company already pays over its midpoint to hire, so the call crosses: Lagging (or Above-market), "close to the line". Otherwise Competitive, "close to the line".

## 5. Confidence

- **High**: a full offer plus a second agreeing full point (another offer, or a full range containing the anchor).
- **Medium**: one full offer alone or beside a range that does not contain it; or two or more agreeing full ranges (ranges alone never go higher).
- **Low**: one tested range; or full points disagreeing on direction. Partials never move a tier.
- **Deferred**: as in 4.

## 6. Sheet first, one reference, then the memo

1. Your first message after loading this skill is the sheet, in plain lines, before any reference: frame; one line per point (`ID · family · month vs first allowed · location · round, rungs · role · type/basis · class · reason in the input's words`); one line per family (anchor and IDs, cross-check, lone-range test, gap worked, verdict, tier and reason); conversions with direction; the most quotable excluded figure. Before closing it confirm: per family full + partial + dropped = retrieved; offers and range midpoints never in one median; each gap's sign; each 4.00–4.99% gap settled by own offers; each lone range tested or Deferred.
2. End that message with one read_reference call, on `references/memo-form.md`.
3. After it returns, send the memo alone, starting at its `##` title; the sheet is never repeated.

## 7. Memo

1. `## <Company>: <verdicts in a few words>`. The title, paragraphs and table use the sheet's verdict words unchanged; a family called Competitive on the sheet is never said to lag.
2. **Basis.** One paragraph: round, home location, base and currency; the window in the input's words, its first month, any point it shuts out by ID; each conversion with sum and direction; why offers lead: an accepted offer is revealed preference, pay someone took; a posted range is aspirational, what an employer says it will pay.
3. Two to four paragraphs of reasoning, firmest call first, families sharing a kind of evidence together. Open each on what decides it; cite points by ID with what they are; say why partial or dropped points do not move the call; name hearsay; mention own hires and open P1/P2 roles where they raise the stakes. No sentence fits another family.
4. `### Benchmark table`: `| Role family · level | Band mid | Verdict | Gap, worked | Evidence funnel | Confidence: reason |`. Funnel: `N retrieved: F full (IDs); P partial (ID: what differs); D dropped (ID: reason)`, zeros shown. Deferred rows: "gap n/a". Then **Pool.** with the four totals.
5. `### Internal corroboration`: one clause per family with own offers or declines.
6. `### Deferred verdicts`: always. Per family: what came closest by ID, the indicative gap if one exists, and the evidence that would settle it (type, location, round, level, date). None: say so and name the call resting on least.
7. `### Signal caveats`: up to three one-sentence bullets naming IDs: offers against ranges, mandated vs voluntary postings, single source.
8. One closing sentence on the excluded figure most likely to be quoted, by ID, and why it does not apply. It is the last line: no second table, summary, findings or implications after it.

Role-family grain; every figure from the input or worked in view; no pay advice; 5,000-8,000 characters.
