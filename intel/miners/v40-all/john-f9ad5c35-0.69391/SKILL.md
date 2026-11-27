---
name: pay-benchmark
description: Turns a classified external pay-evidence table and an internal band snapshot into a role-family benchmark with a verdict, evidence funnel and confidence tier per family, the verdicts it defers, and the caveats on the whole pool.
---

# The pay benchmark: a verdict rests on the points that survive, never on the pool

Every row in an evidence table carries a figure, and that makes a raw pool dangerous: a range from a dearer city, a number somebody mentioned, an offer older than the window, total pay beside a base-salary band. So I audit before I compare. What survives carries the verdict; what fails is named with its reason; a family with too little left gets no verdict. I add nothing the input lacks: no exchange rate, bonus share, hours per year or cost-of-living factor.

Whatever the input, first call read_reference on `references/worked-benchmarks.md`; nothing is written before it returns, and the reply starts at its `# ` title line.

## 1. Six tests for a point

A point is a full match when it passes all six; an unfamiliar figure is judged by asking what it would take to sit beside this band.

- **Evidence?** Two kinds count. An accepted offer is revealed preference: pay an employer and a candidate agreed on. A posted range is what an employer advertises: aspirational and wide. How it came to be posted matters: a range a pay-transparency law made an employer publish (a note naming a mandate) is one it can be held to; one posted by choice, or with no note, is an advertisement. Anything else is out with its reason: a figure with no document behind it (hearsay, a methodless survey) or pay that is not salary for the job.
- **Window?** Take the cut-off month the input's own window line names; it outranks any arithmetic on the retrieval date. Dated before it: out. Dated in that month: in. Undated: out.
- **Job?** The same work at the same level. A different title passes when the notes map it to the same scope or level; a similar title a level up does not. Two levels of one family are two rows.
- **Market?** The company's metro, or the cost tier it anchors remote roles to. Another metro or country: out, no cost adjustment unless the input supplies the factor. A national or remote range with no metro: out, unless the input says some of the company's roles have no metro anchor without saying which; then it is a **partial** point and the unstated split is a gap to name.
- **Company?** Count the rungs between the two companies: seed, A, B, C, D, E or later. None: a match. One: a **partial** point, shown, never the anchor. Two or more: out. A public company is out whatever the count: its pay leans on liquid equity.
- **Basis?** Annual base salary in the band's currency. Pay that folds in variable or one-off money, a rate for contract time, another currency: another basis. Convert only when the input supplies the missing number (a bonus stated inside a total: subtract it, show the sum); otherwise out.

A point that fails any test is out, even when another would only have made it partial; two partial reasons also make it out.

## 2. Anchor, gap, verdict

- **Anchor.** The full-match accepted offers alone when there are any (several: their middle); posted ranges are never averaged in. With no full-match offer, the centre of each full-match posted range, and the middle of those centres.
- **Gap.** Which of band midpoint and anchor is lower, by how much money, and as a percentage of the midpoint to one decimal.
- **Verdict.** Midpoint lower, the band trails (**Lagging**); higher, it leads (**Above-market**); otherwise it is level (**Competitive**). At one decimal: under 3.0% is level; over 5.0% decides on the anchor alone; from 3.0% to 5.0% inclusive a posted anchor reads level, as advertised ranges run high, and an offer anchor is settled by its own hiring: when it has had an offer for the family accepted at more than 5% above the band midpoint, or lost a candidate over pay, the band trails; otherwise it is level. A decline with no reason, or one not about pay, proves nothing.
- Partial points never move a verdict. Own offers are not external evidence: they stay out of the funnel and the anchor, and test what the anchor says.

## 3. Confidence

The tier follows the count of full matches:

- at least 1 accepted offer and at least 2 full matches in all: **High** with an own accepted offer on record too, **Medium** without;
- exactly 1 accepted offer and no other full match: **Medium**;
- 0 offers and 2 or more posted ranges: **Medium**;
- 0 offers and 1 posted range: a lone range is an anchor only when backed: by an own accepted offer for the family, or by a second advertisement: another posted range among its partial points (a partial offer is not one). Backed: **Low**. Unbacked: no anchor, **Deferred**: one advertised range alone cannot place a band;
- no full match: **Deferred**.

## 4. The whole pool

Two things can tilt every surviving row; each gets one caveat line. Source: when every surviving point comes from one source, its mix of employers is the whole pool's mix. Posting: how the surviving ranges came to be posted, said once for the whole pool, never row by row.

## 5. The document

The reply follows the form of the reference's replies.

- `# <Company>: <number> role families against evidence retrieved <retrieval date as the input writes it>`.
- `## Reading the input`: the input's window line, quoted, and the cut-off month it names, written as year and month (`2026-02`); where the input places the company and its roles, in its own words, and the bands' basis and currency; the method in one sentence, as this benchmark's own convention, not figures from the input; then `Own offers on record:` copying the snapshot's offer lines in order, `Note over the table:` quoting a note above the header row, never a Notes cell, and `Gap in the snapshot:` when the input says some roles are unanchored and not which; the last two `none` when absent.
- `## <Company> evidence audit`: a table with one row per evidence point, in input order, with the columns ID, Family and level, Kind, Dated, Job, Market, Stage, Basis, Notes, Result. Kind is `offer`, `posted`, or `not evidence:` with the reason. Notes copies the row's own Notes cell word for word, or says `empty`; a table-wide note is quoted once, above, never in a row. The Dated, Market, Stage and Basis cells give the point's own value and then the judgement (`2026-01: before 2026-02, out`). Job: `ok`, or the title with the fact that decides it; a note saying a different title matches in scope or level is quoted. A conversion is shown in the Basis cell with its sum. Result is `full`, `partial` or `out`.
- `## <Company> benchmark`: a table with the columns Role family and level, Band midpoint and own offers, Funnel, Anchor and gap, Verdict, Confidence. One row per family and level, with the open-role priority after the name. The second cell gives the midpoint, then the family's own offers from that list, accepted and declined, and where they sit against it, or `own offers: none on record`; a decline carries `reason given:` with the snapshot's words, or `none`; a candidate's word about another offer is hearsay: no figure is taken from it. The funnel cell names the family's points, then counts them: `full: <ID> offer, <ID> posted (2); partial: <ID> posted (1); out: <ID>, <ID> (2)`. The gap cell opens `Offer anchor:` or `Posted anchor:`; a lone range first gets its backing check, both answers read off the funnel, and unbacked the cell ends there with `no anchor`. Otherwise it sets the anchor against the midpoint, gives the money difference and its percentage of the midpoint, then the zone it falls in and what follows; only an offer gap from 3.0% to 5.0% goes on to the sum on the highest own accepted offer, which settles it; any other gap ends the cell at its zone. The confidence cell gives the counts from the funnel's `full:` list, then the tier with its deciding reason. A deferred family keeps its row, verdict `No verdict`.
- `## Deferred verdicts`: one bullet per deferred family: what blocks it, for direction only what its range or partial points show, and the evidence that would settle it; or a line saying none is.
- `## Signal caveats`: two lines, `Source:` and `Posting:`; Posting quotes that note's words on posting once, then lists by ID the surviving ranges under a mandate and those posted by choice or with no note.
- `**What decides each call.**`: one sentence per family: the points the verdict rests on, then those that do not count, by ID, each with the audit's reason.
- Last line: `**Verdicts.**`, then each verdict with its families, copied from the Verdict column, omitting a verdict nobody has: `Lagging: <families>. Competitive: <families>. Above-market: <families>. Deferred: <families>.`

## 6. Not a benchmark job

The job needs both halves: classified external evidence, and bands by family and level. A list of people and their salaries is not a band structure. With a half missing there is no table, verdict, market figure or opinion on whether anyone is underpaid. The reply is a note of about 250 words, from its title line `# <Company>: ...`: each thing asked, in its own words, with any claim and deadline, and where it belongs (testing bands against the market is this benchmark; going rates from memory are not given; redrawing bands goes to whoever owns job architecture; a figure for one hire is a pay decision for hiring); what arrived, counted by family and level without names, and why a roster cannot stand in for market evidence: every family is deferred, the claim neither confirmed nor refuted, whatever the deadline; then `Please send:` with a short bullet list naming what to send, with no sample figure and no sample date, and what comes back.

Once the reference is read (form only), the next message is the finished document from its first character, `# ` and the company name: no announcement, no steps, no rule line above the title.
