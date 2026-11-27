---
name: pay-benchmark
description: Turns a classified external pay-evidence table and an internal band snapshot into a role-family benchmark with a verdict, evidence funnel and confidence tier per family, the verdicts it defers, and the caveats that apply to the whole pool.
---

# The pay benchmark: a verdict rests on the points that survive, never on the pool

Every row in an evidence table carries a figure, and that is what makes a raw pool dangerous: a range posted in a dearer city, a number somebody mentioned, an offer from before the window, a total-pay figure beside a base-salary band. So I audit before I compare. What survives carries the verdict; what fails is named with its reason; a family with nothing left gets no verdict. I add nothing the input lacks: no exchange rate, bonus share, hours per year or cost-of-living factor from memory.

## 1. Six tests for a point

A point is a full match when it passes all six. They are questions, not a list of bad labels: an unfamiliar kind of figure is judged by asking what it would take to sit beside this band.

- **Evidence?** Two kinds count. An accepted offer is revealed preference: money an employer and a candidate agreed on. A posted range is what an employer advertises: aspirational, wide, its top seldom reached. Anything else is out with its reason: a figure with no document behind it (heard second-hand, a survey with no method) or pay of another nature than salary for the job.
- **Window?** Take the cut-off month this input's own window line names; a month it names outranks any arithmetic on the retrieval date. Dated before it: out. Dated in the cut-off month: in. Undated: cannot be placed, so out.
- **Job?** The same work at the same level. A different title passes when the notes map it to the same scope or level; a similar title one level up does not. Two levels of one family are two rows.
- **Market?** The company's metro, or the cost tier it anchors remote roles to. Another metro, a national or remote range with no metro, another country: out, with no cost adjustment unless the input supplies the factor.
- **Company?** Count the rungs between the two companies on the ladder seed, Series A, B, C, D, E or later. None: a match. One: a **partial** point, kept and shown, never the anchor. Two or more: out. A public company is out whatever the count, because its pay leans on liquid equity and is built differently.
- **Basis?** Annual base salary in the band's currency. Pay that folds in variable or one-off money, a rate for contract time, another currency: another basis. Convert only when the input supplies the missing number (a note states the bonus inside a total: subtract it and show the subtraction); otherwise out.

A point that fails any test is out, even when another would only have made it partial.

## 2. Anchor, gap, verdict

- **Anchor.** The full-match accepted offers alone when there are any (several: the middle of them); posted ranges are never averaged in. With no full-match offer, the centre of each full-match posted range, and the middle of those centres.
- **Gap.** Which of band midpoint and anchor is lower, by how much money, and that as a percentage of the midpoint to one decimal place.
- **Verdict.** It describes the band, not the market. The tolerance is 4% against accepted offers and 5% against posted-range centres, because advertised ranges run above what is paid. Within tolerance either way the band is level: **Competitive**. Midpoint lower by more than the tolerance, the band trails: **Lagging**. Higher by more, the band leads: **Above-market**.
- Partial points never move a verdict. The company's own offers are not external evidence: they stay out of the funnel and are listed beside the band midpoint.

## 3. Confidence

Read the tier off the count of full matches:

- at least 1 accepted offer and at least 2 full matches in all: **High**;
- exactly 1 accepted offer and no other full match: **Medium**;
- 0 offers and 2 or more posted ranges: **Medium**;
- 0 offers and 1 posted range: **Low**;
- no full match: **Deferred**, and then no verdict is given.

## 4. The whole pool

Two things can tilt every surviving row at once, and each gets one line in the caveats section, never in the rows. Source: when every surviving point comes from one source, that source's mix of employers is the whole pool's mix. Posting: when the input carries a note about how the pool's ranges were posted, the line quotes it; failing that, when the Notes column marks all or nearly all surviving ranges the same way, the line says so. Ranges published by choice lean high; ranges published under a legal mandate are written wide, so their centres overstate what is paid. Nothing is assumed about a range whose Notes cell is empty, and where the notes are mixed or silent there is no Posting line.

## 5. The document

Before writing, call read_reference on `references/worked-benchmarks.md`; the reply follows the form of its finished replies. The document runs in the order the work is done, so nothing is worked out above it.

- `# <Company>: <number> role families against evidence retrieved <retrieval date as the input writes it>`. This title is the first line of the message; a sentence before it is an error in the document.
- `## Reading the input`: three sentences. The input's window line, quoted, and the cut-off month it names, written as year and month (`2026-02`); where the input places the company and its roles, quoted in the input's own words, and the bands' basis and currency; then the method in one sentence, said as this benchmark's own convention and not as figures from the input: the two tolerances and why they differ, and that partial points carry no weight in an anchor.
- `## <Company> evidence audit`: a table with one row per evidence point, in input order, with the columns ID, Family and level, Kind, Dated, Job, Market, Stage, Basis, Result. Kind is `offer`, `posted`, or `not evidence:` with the reason. The Dated, Market, Stage and Basis cells give the point's own value and then the judgement (`2026-01: before 2026-02, out`; `Series A: two below Series C`; `Public: equity-led pay, not comparable`). Job is about title and level only: `ok`, or the title with the fact that decides it; when a title differs and that row's Notes say the scope or level matches, the cell quotes the note. A conversion is shown in the Basis cell with its arithmetic. Result is `full`, `partial` or `out`.
- `## <Company> benchmark`: a table with the columns Role family and level, Band midpoint, Funnel, Anchor and gap, Verdict, Confidence. One row per family and level, with the open-role priority after the name when the snapshot gives one. The funnel cell names that family's points, then counts what it has just named: `full: <ID> offer, <ID> posted (2); partial: none; out: <ID>, <ID> (2)`. The gap cell opens with the anchor's kind and tolerance (`Offer anchor, 4% allowed:` or `Posted anchor, 5% allowed:`) sets the anchor figure against the midpoint, then gives the money difference and its percentage with the midpoint it was divided by, and ends by saying whether the band trails, leads or is level. The confidence cell gives the counts from the funnel's `full:` list first, then the tier with the reason that decides it, then the company's own offers for that family exactly as the snapshot lists them, accepted and declined, against the band midpoint; when it lists none for the family, `none in the snapshot for this family: a gap, so no internal check on this band`. A candidate's word about another offer is hearsay: say so and take no figure from it. A deferred family keeps its row: anchor `none`, verdict `No verdict`. Figures stay in the band's own currency.
- `## Deferred verdicts`: one bullet per deferred family: why none of its points is a full match, the partial range set beside the band's own range, and the one piece of evidence that would settle it. With none deferred, one line saying so.
- `## Signal caveats`: at most two lines of one sentence each, `Source:` and `Posting:`, as section 4 sets out, with no evidence IDs in either.
- `**What decides each call.**`: one sentence per family, in the table's order, built only from the audit's rows: the point or points the verdict rests on, by ID, then the points that do not count, by ID, each with the audit's reason. An open role's priority goes after the family's name.
- Last line: `**Verdicts.**` and then each verdict with its families, copied from the Verdict column and leaving out a verdict nobody has: `Lagging: <families>. Competitive: <families>. Above-market: <families>. Deferred: <families>.`
## 6. When the input is not a benchmark job

The job needs both halves: classified external evidence, and internal bands by family and level. A list of people and their salaries is not a band structure. A request for market rates with no evidence table cannot be met from memory. Designing or redrawing a band structure is a different piece of work from benchmarking one. When a half is missing there is no table, no verdict, no market figure and no opinion on whether anyone is underpaid. The reply is a note of at most 200 words that starts at its title line `# <Company>: ...`, in three short paragraphs: what was asked and what was supplied; why nothing can be benchmarked from it; what to send so that it can be (the evidence rows; bands per family and level; the window; own recent offers), and where the other request belongs.

Call read_reference on `references/worked-benchmarks.md` (three invented replies; form only, every fact comes from your input). Once the reference is read, the next message is the finished document from its first character, `# ` and the company name. Nothing stands above the title: no announcement, no steps, no rule line.
