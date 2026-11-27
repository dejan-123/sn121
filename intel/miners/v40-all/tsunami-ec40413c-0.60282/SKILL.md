---
name: band-benchmark
description: Benchmarks a company's pay bands family by family from a classified table of outside pay evidence and an internal band snapshot, giving each family a verdict, its evidence funnel and a confidence tier, then the deferred verdicts and the pool-wide caveats.
---

# Band benchmarking: settle what each figure is a price of, then compare

A band is benchmarked against what it costs to hire that job, at that level, in that labour market, at that kind of employer, now. No evidence table holds that number. It holds prices of neighbouring things: the same title in a dearer city, a package with a bonus inside it, a range written for an advert, a figure somebody repeated. Averaged together they move the "market" by whatever was in the pile. So the sorting comes first: only like-for-like points set a verdict, the rest are shown with the reason they stood aside and counted, and where nothing like-for-like is left the right output is no verdict.

## 1. Sort every point: comparable, near match, or set aside

A point is **comparable** when all six lines hold. It is a **near match** when the only thing off is the stage, by one step. Otherwise it is **set aside**, under the first line it fails.

1. **Documented pay evidence.** An accepted offer is revealed preference: a price two parties signed. A posted range is aspirational: what an employer says it might pay, written wide, its top seldom reached. Both count, with different weight. A figure passed on by word of mouth, or a survey number with no date or method, is neither.
2. **Inside the window.** The input states the window, and requests differ. Turn it into a cut-off month: dated in that month or later is in, earlier is out, undated cannot be placed and is out.
3. **The same job at the same level.** A note that maps a differently named role to the same level makes it the same job; a familiar title one level up does not. Two levels of one family are two rows, each with its own points.
4. **The same market.** The metro the company prices against: its base, or the tier it anchors remote roles to. Another metro is another market. So is a national or remote range with no metro, unless the snapshot says that role is priced nationally; if it says some roles are and not which, set the point aside and name that gap. A band kept in another currency is benchmarked in that currency against that country's points.
5. **The same kind of employer.** Funding stages are a ladder: seed, Series A, B, C, D, E and later growth, public. Same stage: comparable. One step either way: near match. Two or more steps, or a public company, whose base is one part of a package built on liquid equity: set aside.
6. **The band's own basis.** Ask what the figure pays for. Base salary pays for the job. A total with a bonus, commission, grant or allowance inside pays for more; a rate for contract time buys labour without employment; another currency is another unit. When the input itself gives the missing piece (a note states the bonus inside a total), convert and show the sum. When it does not, set the point aside and name the missing piece. No exchange rate, bonus share, hours per year or cost-of-living factor is ever supplied from memory.

The table's type label is where the sort starts, not where it ends: a row typed as an offer can still be on the wrong basis, and a kind of figure this list never mentions is settled by line 6.

## 2. Anchor, gap, verdict

- **Anchor.** When the family has a comparable accepted offer, the anchor is the offer figure alone (two offers: the point halfway between them), and its posted ranges stay out of the sum. Only a family with no comparable offer is anchored on posted ranges: the centre of the range (two ranges: halfway between their centres). An offer and a range are never averaged together; near matches never enter the anchor.
- **Gap.** Band midpoint against anchor: the difference in money, then as a percentage of the anchor, to a whole percent, under or over.
- **Verdict.** Midpoint within 5% of the anchor: **Competitive**. More than 5% under: **Lagging**. More than 5% over: **Above-market**. Bands are built with that much play around the midpoint and one data point carries that much noise, so a smaller gap is not a finding. One corridor for every family.

## 3. Confidence

- **High**: two or more comparable points, at least one an accepted offer.
- **Medium**: a single comparable accepted offer; or two or more comparable posted ranges and no offer.
- **Low**: a single comparable posted range.
- **Deferred**: no comparable point. No verdict is given, however clear the near matches or set-aside figures look: that would be a verdict on the raw pool.

The tier carries its deciding reason in one clause. Near matches do not raise a tier; they are cited by direction only (higher, lower, straddling the midpoint), with no new sum. The company's own offers are a cross-check shown beside the verdict, not outside evidence: "no recent offers" is an answer, while a family the offer list never mentions is a gap in the input, and the reply names it.

## 4. What tilts the whole pool

Some facts bear on every row. They go in one place, each with the direction it pushes, and are not repeated in the rows:

- the mix: a pool that is mostly posted ranges reads high, because ranges advertise and offers settle;
- how the ranges came to be posted: under a legal mandate they are written wide to cover any hire; by choice, they come from employers content to show their pay. If the input says this once for the whole pool, so does the reply;
- one source behind every point.

At most three lines, only those the input supports; a posting note that covers some ranges is said of those ranges, not of all.

## 5. The reply

Call read_reference on `references/sample-benchmarks.md` before writing (three invented replies; form only, every fact comes from the input in front of you). The reply is one document and the work is done inside it, in this order:

- `# <Company>: band benchmark, <n> role families`
- `**Yardstick.**` One short paragraph: the window as stated, with the first month that is in and the last month that is out written the way the table writes its dates; then what like-for-like means here (market, stage, band basis and currency); then the corridor in a clause.
- `## Sorting the evidence`: each family and level in bold with its band midpoint, then one line per point in the input's order: `ID, kind, date, place, stage:` and the result, which is `comparable`, `near match` with what is off, or `set aside` with the reason. A converted figure shows its sum on its line. Every point in the input appears exactly once. The family's last line is `Anchor:` naming by ID the outside offer it rests on, or the range centre with its sum, or `none`. The company's own offers do not appear in this section.
- `## Benchmark`: a table, one row per family and level in the snapshot's order, with the columns Role family, Funnel, Midpoint vs anchor, Verdict, Confidence.
  - Funnel: the family's IDs by pile with a count, copied from the sort: `comparable: <IDs> (<k>); near match: <IDs> (<j>); set aside: <IDs> (<m>)`.
  - Midpoint vs anchor: both figures, the difference, the percent, under or over.
  - Verdict: Competitive, Lagging or Above-market, nothing added; a deferred family keeps its row with anchor `none` and verdict `No verdict`.
  - Confidence: the tier, then the deciding reason.
- `**Own offers (cross-check, not evidence):**` one line after the table, every family in the snapshot's order, each looked up in the offer list on its own: its offers in the snapshot's wording, or `no recent offers` where the list says that, or `not listed, a gap in the input` where the list has no line for that family at all.
- `## Deferred verdicts`: one bullet per deferred family: why none of its points is comparable, the direction the near matches hint at (a hint, not a verdict), and the one piece of evidence that would settle it. With none, one line saying so.
- `## Signal caveats`: the pool-wide points, one line each.
- Two closing lines, one sentence each. `**What the verdicts rest on:**` which verdicts are anchored on accepted offers (what was paid) and which only on posted ranges (what was advertised). `**Open roles:**` every open role in the snapshot's priority order, each with its priority and its row's verdict, nothing more.

Figures, IDs and titles are the input's own, copied and never rounded. Under 750 words.

## 6. When there is nothing to benchmark

The method needs two halves: classified outside evidence, and bands by family and level. A staff list with salaries is not a band structure. A request to look up or recall what the market pays supplies no evidence. Designing or reshaping bands, setting a budget or pricing one candidate's offer are different jobs from benchmarking. When a half is missing there is no table, no verdict, no market figure and no view on whether anyone is underpaid, however the request presses for one. The reply is then a plain note, not a benchmark document: under 180 words, a title line `# <Company>: nothing to benchmark yet` and three short paragraphs with no headings, lists or bold: what was asked and what arrived; why no benchmark can stand on it; exactly what to send (evidence rows with source, type, date, title, location, stage and figures; bands with minimum, midpoint and maximum per family and level; the window; own recent offers) and where the other work belongs. When both halves are present and one family lacks a band or any comparable point, that family is deferred and the rest goes ahead.

Once the reference is read, the next message is the finished document. Its first character is `#`: the title line comes first, and the working is the document's own sorting section, not a preface to it.
