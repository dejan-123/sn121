---
name: comp-band-benchmark
description: Turns a classified external pay-evidence table and an internal band snapshot into a role-family benchmark with a competitive-position verdict, the evidence funnel behind it and a confidence tier, plus deferred verdicts and pool-wide caveats.
---
# A verdict is only as good as the pool that survives the filter

I benchmark a company's pay bands one role family at a time against outside evidence. The raw evidence table is not the market: most points describe another city, another stage, another job size, another kind of pay or another moment. So I screen every point first, put the survivors on one basis, and only then compare. A verdict stated against the raw pool is wrong even when it lands on the right word.

## Scope comes first

This skill answers one question: is each family's band competitive, lagging or above market? It needs a classified external evidence table (source, type, date, title, location, stage, figure) and an internal band snapshot (min, midpoint, max per family and level). These are not benchmarks:
- one person's raise or offer (an individual pay decision);
- "what do these roles earn" with no classified evidence (a salary lookup);
- drawing or re-levelling a band (band design);
- a pay-gap review across groups (a pay-equity audit).
For those I send the short redirect described under "The reply". I never invent market figures, and no individual's name or salary appears in what I send: the grain is the role family.

## Anchor the company

I fix the company's position before scoring: headquarters metro and cost tier, remote policy (metro-anchored or national), funding stage, each family's level, the data window and the retrieval date. The window is checked by calendar month: "from October 2025" keeps 2025-10 and drops 2025-09, one month early or not. I note the first in-window month so boundary calls are mechanical.

## Score every point on four dimensions

- **Geography:** the same metro or cost tier matches. A national or unanchored remote range against a metro-anchored company is partial. Another cost tier or country is a mismatch unless the input gives a differential.
- **Stage:** the same stage matches; one stage away is partial; two or more, or public against private, is a mismatch.
- **Scope:** the same family and level match; one level off, or a broader or narrower remit, is partial; more is a mismatch. A stated level-equivalence note can turn a title mismatch into a match. A title alone never proves a match.
- **Posting type:** an accepted offer is revealed preference. A posted range is an employer's aspiration and often wide, mandated or not. Recruiter hearsay and surveys without method are unverifiable. A declined offer is a floor someone rejected, not a market rate.

All four match: fully comparable. Exactly one partial and no mismatch: partial match, which may corroborate but never decides. Any mismatch, or two partials: incomparable. Also dropped, each counted with its reason: out of window, undated, unverifiable source.

## Exclude non-taxonomy bases by name

Retention or acquisition grants, contractor or hourly rates, packages folding in sign-on or equity, equity-heavy or cash-heavy mixes without a base split, and on-target earnings without a base share are not salary. I exclude each with its reason ("contract rate, not FTE base") and count it in the funnel drop. A contractor rate is never annualised into an employee pool.

## Normalise to annual base, showing direction

Each conversion is written as figure → operation → result, with the rate's source: total cash with a stated bonus minus the bonus gives base; monthly times 12 gives annual; a currency is converted only at an exchange rate given in the input, otherwise I compare within one currency and say so. I never infer a rate, a bonus share or an equity value. A figure that cannot reach base is excluded.

## Weigh offers over postings, then decide

1. **Anchor.** Surviving accepted offers decide: their median, or the one value. Only when no offer survives does the mean of surviving range midpoints become the anchor, under the posted-range cap. Partials never enter the anchor.
2. **Gap and verdict.** Gap = (anchor − band midpoint) / band midpoint. Within ±5%: competitive. Above +5%: lagging. Below −5%: above-market. The verdict comes from the surviving pool only.
3. **Second test: the company's own accepted offers.** They are not pool points and never change the verdict. I compare their mean with the midpoint the same way. If they point the same way as the verdict, I say so. If they contradict it, I state the conflict and lower confidence one tier. A decline that cites pay supports a lagging reading.
4. **Confidence:**
   - High: two or more surviving offers agree;
   - Medium: one surviving offer, or two or more agreeing ranges with no offer;
   - Low: a single range;
   - Deferred: as below.
   I state the deciding reason.

## Defer when the evidence cannot carry a verdict

I defer when no fully comparable point survives, when survivors conflict and no offer breaks the tie, when only partials remain, or when the band is missing. The note names the gap ("no in-window offer at this stage; the only posting is two stages up") and what would settle it ("two in-window offers or same-stage postings in the home metro").

## The reply: work first, then the document

The scored reply is my last message, so the working never goes in it.
1. Read `references/worked-cases.md` (invented cases with their inputs, working sheets and a redirect).
2. For a benchmark, the next message is the working sheet for this input: the anchor, one line per point (ID, month against the window, four marks, basis, class), and each family's funnel, anchor, gap, own-offer test and tier. That same message ends by calling read_reference on `references/reply-forms.md`, which holds the finished documents for the cases.
3. Then the document, copied from the sheet. It opens with `# <Company>: role-family compensation benchmark` and has:
   - a short **Basis** paragraph (window and boundary points, conversions, missing internal data);
   - the table: family and level, band midpoint, funnel (retrieved → dropped by reason → partial → survived), anchor, gap, verdict, confidence and reason; a **Pool** line under it totals the funnel;
   - **Deferred verdicts** (always present; "None" with a line on the thinnest row when nothing was deferred);
   - **Signal caveats**, stated once for the whole pool.
   Each family's reading is a sentence or two in the table, never repeated below it.
4. A redirect needs no sheet. Straight after the cases, send a note under 200 words titled `# <Company>: not a benchmark request`. List each request with a number, the kind of work it really is, and its owner. Then say why this input cannot support a benchmark, and what to provide: the evidence-table fields, a band snapshot by family and level, recent offers and the data window. Use no figures and no names.

## Never

- Never state a verdict from dropped or excluded evidence, or from the raw pool.
- Never omit the funnel, or skip a needed basis conversion.
- Never produce output at the level of individuals.
- Never invent a rate, a figure or a data point that is not in the input.
