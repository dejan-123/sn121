---
name: pay-band-market-check
description: Judges, one role family at a time, whether a company's pay bands are competitive, lagging or above-market. Screens each external data point on posting type, data window, role scope, geography, company stage and pay basis; keeps an evidence funnel per family; anchors verdicts on surviving accepted offers ahead of posted ranges; tiers confidence; defers families with no comparable evidence; flags pool-wide skews; redirects non-benchmark requests.
---

# Pay-band market check, one role family at a time

A pay band is a reach: the lowest and highest base pay the company will put in an offer. A market check asks whether the prices comparable companies closed hires at land inside that reach. Most of a retrieved pool cannot say (wrong metro, stage or kind of pay, too old, only an advert), so each role family gets its evidence funnel first, its verdict second.

Rules:

- Numbers. Use only figures in the input, or sums worked from them and shown in full. Never add a market rate, cut-off percentage, currency rate, hours-in-a-year multiplier, bonus fraction, regional adjustment or ageing uplift that the input does not state.
- Grain. Speak about role families and levels, never one named person's pay.
- Cite data points by the input's IDs. Missing internal data is a named gap, never filled in.

## A. Is this a benchmark?

The input must hold an external evidence table whose rows are already classified and an internal snapshot with a band per role family. If the table is missing, or the ask is really something else (section H lists the kinds), write the note of section H and stop.

## B. Frame

From the snapshot take: stage; each band's anchor (the headquarters metro and its cost tier, unless a team is placed elsewhere); currency; the window sentence, copied, and its cutoff as year-month ("before March 2025" gives 2025-03); per role family and level the band minimum, midpoint and maximum, own offers accepted and declined, and open-role priority. Two levels of a family are two families.

## C. Screen every data point

File each data point under its family: the same job at the same level, whatever the title wording; accept a note that equates scope. Six checks follow, one per column.

1. **Posting type.** An accepted offer is a price a hire closed at (revealed preference). A posted range is what an employer advertised (aspirational). Hearsay, and a survey figure with no stated method, are not evidence: out.
2. **Window.** Undated: out. Otherwise compare year-month with the cutoff: earlier is out; the cutoff month itself and anything later is in.
3. **Scope.** A level other than the band's is out; read the title to its last word (Senior Manager is not Senior).
4. **Geography.** The band's own anchor metro: match. A metro in the same cost tier also matches; the reference file opens with the tier list. Anything else is off: a metro in another tier, a different country, a nationwide figure, a remote range naming no metro.
5. **Stage.** Ladder: Seed, A, B, C, D, E or late growth, public. Same: match. One step away: off. Two steps or more apart, or a listed company against a private one: out.
6. **Annual base.** The figure must be recurring annual base pay of an employee, in the band's currency. Convert only with the row's own numbers, writing out the sum and which way it moved: "$118,000 total - $13,000 bonus = $105,000 base (down)". Out: a contractor or hourly rate; a retention, sign-on or acquisition grant, or a total that folds one in (or equity) without stating base; on-target earnings given without a split; a figure in another currency when the input states no rate.

**Class.** Any "out": **dropped**, naming every reason. No "out" and both geography and stage match: **fully comparable**; these survive. Exactly one of the two off: a **partial match**, (geography) or (stage). Both off: **dropped** as incomparable; two mismatches are never a partial.

## D. Verdict: where surviving prices land in the band

Only fully comparable data points decide.

1. **None survives: Deferred.** State no verdict for it anywhere.
2. **An accepted offer survives.** It is the anchor (several external offers: their average, sum shown; posted ranges and own offers never go into it). Compare one at a time, in this order. Anchor against the band maximum: over it is **Lagging**, the band cannot reach closing prices. Anchor against the band minimum: under it is **Above-market**. Otherwise the anchor is inside the band: **Competitive**, in the upper half if over the midpoint (upward pressure on the midpoint), the lower half if under. One switch: inside the band, over the midpoint, and a declined own offer on record for the family: **Lagging**, since candidates are already being lost. The switch needs a surviving offer; it never applies in case 3.
3. **Only posted ranges survive.** The posted-range evidence cap applies: advertised pay states intent, not a closed price, so it moves a verdict only when the band midpoint falls outside it. Set the band midpoint against each surviving range: over its start and under its end is inside it, **Competitive**. Under the start of every range: **Lagging**. Over the end of every range: **Above-market**.

Partial matches never anchor or flip a verdict; they get a clause of direction.

## E. Confidence tier

Count surviving accepted offers, surviving posted ranges, and own offers on record for the family (accepted and declined together).

- **High**: two or more surviving accepted offers; or one surviving accepted offer and a surviving posted range, with two or more own offers on record.
- **Medium**: a surviving accepted offer that does not reach High; or posted ranges only, with a stage-partial accepted offer inside a surviving range (over its start, under its end).
- **Low**: posted ranges only, however many (the cap).
- **Deferred**: nothing survives.

Geography partials and partial posted ranges never raise a tier.

## F. Signal caveats

Four or five bullets on the whole pool, each made once: how many survivors are accepted offers and how many posted ranges; whether ranges were published because a pay-transparency law required it (wide, compliance-driven) or by choice (self-selected employers, so these read high), going by each row's note; one source providing most data points; which way dropped data points leaned, and the wrong impression the unfiltered pool would have given; that this compares base pay only, so equity and bonus mix, which shift with stage, sit outside it.

## G. The reply

- `# <Company>: pay-band market check`
- `**Frame:**` stage, anchor, the window in the input's words and the cutoff as year-month, retrieval date, basis. `**Conversions and exclusions:**` each conversion and each data point dropped on pay basis, or that none was needed. `**Internal gaps:**` what the snapshot lacks (a family without own offers, an unstated anchor), or "none".
- `## Evidence funnel by role family`. For each band line of the snapshot, in its order:
  - `### <Family> (<Level>): band <min> / <mid> / <max>`
  - `Own offers:` this family's line from the snapshot (it may name the job, as in "Senior Data Engineer"): accepted, declined, and how many on record; or "none on record".
  - a table with one row per data point filed under the family: ID | Posting type | Window | Scope | Geography | Stage | Annual base | Class. Window shows the comparison ("2025-04 vs 2025-06: before, out"); Stage shows both sides.
  - `- **Funnel:**` IDs first, counts after: "Retrieved 3. Survived: A-02 offer = 1. Partial: A-01 = 1. Dropped: A-03 (hearsay) = 1. Check: 1 + 1 + 1 = 3."
  - `- **Position:**` the comparisons of section D, each written "<figure> against <figure>: over" or "under"; then partial matches as direction only.
  - `- **Tier:**` the three counts, then the tier they give.
  - `- **Call:**` verdict and tier in bold, then the deciding reason in a clause.
- `## Benchmark table`: Role family (level) | Evidence funnel | Anchor | Verdict | Confidence. One row per family, copied from its Funnel and Call lines; Verdict is the bare label, Confidence the tier and reason.
- `**Bottom line:**` two sentences sorting families into lagging, competitive, above-market and deferred, marking P1 open roles.
- `## Deferred verdicts`: per deferred family, why nothing survived, which way the partial matches point, labelled as direction and not a verdict, and the one data point that would settle it. If none is deferred, say so in a line.
- `## Signal caveats`: section F.

## H. The note when it is not a benchmark

190 to 280 words, no table, no pay figure that is not in the input. `# <Company>: benchmark not run`, a sentence or two on why (no external evidence is classified, so a market figure would be made up), then `**Request by request**`: a numbered line per thing asked. Market pay for roles: the benchmark itself, not yet runnable. One person's pay, or market rates from memory: outside a benchmark, which speaks about bands from evidence. Band design or re-levelling: out of scope; it is job architecture, which a finished benchmark can inform. A pay-equity audit: a separate internal analysis. Then `**Position now:**` each role family and level in the input: Deferred, 0 retrieved, 0 survived; `**What the input does give:**` families, levels and headcount, naming and judging nobody; `**To run the benchmark, send:**` the data points with every field the screen needs, the window, a band per family and level, own offers; `**What comes back:**` one line.

Before writing, call read_reference once on `references/sample-checks.md`: a tier list, then invented cases that show the form. Take layout and method from them, never a figure, ID or sentence. Your next message is the finished document alone. Its first characters are `# ` and the company name: no sentence before the title, even to answer a question the user asked, and nothing after the last section.
