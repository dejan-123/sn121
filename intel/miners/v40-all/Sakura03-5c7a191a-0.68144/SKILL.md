---
name: comp-benchmark-narrator
description: Reads a classified external salary evidence table and an internal compensation snapshot and writes a role-family benchmark table with a competitive-position verdict (competitive, lagging, above-market or deferred), the evidence funnel behind it and a confidence tier for each family, followed by a deferred-verdicts section and a signal-caveats section; out-of-scope pay requests get a short redirect.
---

# Benchmarking pay bands on evidence that survives

A salary figure is evidence about our band only if it describes the same job, in the same labour market, at a company like ours, on the same pay basis, recently. So the band is never compared with the pool as retrieved: every point is screened, what survives is put on one basis, and only then is the band set against it; where too little survives, the answer is a deferral that names the missing evidence. Nothing is added that the input lacks.

## The method at a glance

1. **Scope.** Role-family bands against a classified external evidence table; anything else gets a short redirect (step 1).
2. **Eligibility first.** Drop out-of-window, undated, hearsay, retention or acquisition grants, contractor rates, equity- or cash-heavy packages, and OTE or total comp with no base; extract a stated base only from an otherwise eligible offer (step 3).
3. **Comparability.** Geography, stage, scope and posting type, each match, partial or mismatch; any mismatch drops the point, all matches make it full, otherwise partial: corroboration, never an anchor (step 4).
4. **One basis.** Annual base in the band's currency, conversions written out; no rate, no conversion (step 5).
5. **Anchor.** Median of full external accepted offers (revealed preference) if any exist, else mean of full external range midpoints (aspirational, hence capped); our own offers are context, not pool (step 6).
6. **Verdict.** Gap = (anchor - band midpoint) / band midpoint, compared unrounded with 5%: within it competitive, above lagging, below above-market (step 6).
7. **Confidence.** High: a full offer and at least two full points; Medium: one full offer alone, or two or more full ranges (the posted-range cap); Low: one full range, still a verdict; Deferred: no full point or no band (step 7).

## Step 1: scope check, before anything else

This skill benchmarks role-family bands against a classified external evidence table. Check the request first. If it asks for any of the following, or supplies no classified external evidence at all, do not build a table:

- a pay decision about a named person (a raise, an offer, whether someone is underpaid);
- a raw lookup ("what do geologists earn?") with no evidence pool to filter;
- band design or restructuring (adding levels, setting new ranges);
- a pay-equity or demographic audit.

Then the whole reply is a short redirect, under 200 words, opening with a `# ` title: what was asked, why this skill does not do it, what it can do instead, and the exact inputs that would allow a role-family benchmark (a classified external evidence table with source, type, date, title, geography, stage and pay basis per point, plus band minimum, midpoint and maximum per family). If part of the request is in scope but its evidence is missing, say so in the same note.

## Step 2: audit the input

Note the retrieval date, the stated data window, the company's stage and metro, how remote roles are anchored, each family's band with its currency and basis, and the internal offers. A family with no band is a gap to name, never a band to estimate.

## Step 3: drop what is not evidence of base pay

Before comparability, remove points whose basis cannot be compared, and give each its reason:

- out of window or undated. "Points before March 2024 are out" removes 2024-02 and earlier; 2024-03 itself stays in;
- hearsay or unsourced (verbal recruiter figures, surveys with no methodology);
- non-taxonomy basis: retention or acquisition grants, contractor or hourly contract rates (not FTE), equity-heavy or cash-heavy packages, total comp or OTE with no base given. If the note states the base inside a total, convert to that base and keep the point.

These may appear anywhere in the pool, and the input may not label them; read the notes column.

## Step 4: score comparability on four dimensions

For every remaining point score geography, company stage, role scope and posting type as match, partial or mismatch:

- Geography: the company's metro or stated anchor tier is a match; a national or unanchored remote figure is partial; any other named metro is a mismatch, whatever its cost tier.
- Stage: number the rungs seed 0, Series A 1, B 2, C 3, D 4, E or later growth 5, public 6, and subtract. A difference of 0 is a match, 1 is partial, 2 or more is a mismatch (1 step is always partial, never mismatch; "E 5 vs B 2, 3 steps: mismatch").
- Scope: same title and level, or a level mapping the input states, is a match; an adjacent level is partial; a different role is a mismatch.
- Posting type: an accepted offer or a posted range for a full-time role is a match; a range quoted in another currency or on another basis than the band is a mismatch unless the input supplies the rate.

Any mismatch makes the point incomparable, and it is dropped. All four match: fully comparable. Any partial and no mismatch: partial, which is kept, never dropped, and can corroborate but never set a verdict alone. A partial is never re-priced with a premium or discount: the input gives no adjustment factor.

## Step 5: convert to one basis

Compare only annual base salary in the band's currency. Write every conversion with its direction: hourly to annual at 2,080 hours, monthly times 12, a range to its midpoint, a total to its stated base. Use only rates the input supplies; with no rate, a point in another currency is not converted and the missing rate is named.

## Step 6: form the verdict from the surviving pool

Offer data outranks posted ranges. An accepted offer is revealed preference, the price a candidate took; a posted range is aspirational, what an employer advertises, often wide or stale, and hires tend to land below its midpoint, so a verdict on ranges alone is capped (step 7). The market anchor is fixed by rule, never adjusted by judgement: if any FULL external accepted offer exists, the median of those offers and nothing else (range midpoints are context and are never averaged in); with no full offer, the mean of the FULL external range midpoints, under the posted-range cap below. A partial point never enters the anchor, even when it is the only offer. The verdict rests on the external pool alone. Our own recent offers are context, never anchor points: accepted offers near or above the band maximum show the band binding, and declined offers that cite pay show lagging pressure.

Gap = (anchor minus band midpoint) divided by band midpoint, compared with 5% before any rounding; show two decimals when the gap is within 0.1 of the line (+5.04% is above 5%, so lagging):

- gap from -5.0% to +5.0%: competitive;
- above +5.0%: lagging (the market pays more than our midpoint);
- below -5.0%: above-market.

## Step 7: confidence tier, from the count of full points

- High: at least one full offer and at least two full points in all.
- Medium: exactly one full offer and no other full point; or two or more full ranges and no offer (the posted-range cap: agreeing ranges are still advertised intent, not accepted pay).
- Low: exactly one full range and no offer. Still a verdict.
- Deferred: no full point survives, or the family has no band.

## Output

Open the reference before writing: call read_reference on `references/worked-benchmarks.md`. It holds three invented benchmarks, a redirect and a last check; they show form only, and every figure comes from the input in hand.

The reply, in order:

1. `# Compensation benchmark: <company>` and one or two sentences: the data window and the anchor. No verdict is stated before the family blocks have produced it.
2. `## Evidence and workings by family`: take the families one at a time and finish each before starting the next. Under `### <family> (band midpoint)`: a table `| ID | Date | Geography | Stage | Scope | Type | Outcome |` with one row per external evidence ID of that family (Date compares the month with the cutoff, "2024-03 vs cutoff 2024-03: in"; the cutoff month itself is in; each dimension gives its reason first and its mark last, "Phoenix vs Denver, another metro: mismatch", "C 3 vs B 2, 1 step: partial"; a point removed in step 3 shows "n/a" and its reason; any mismatch is dropped, all matches full, otherwise partial). Then four lines: Funnel (retrieved = full + partial + dropped), Conversion or Midpoints, Anchor (full points only, sorted values then median or mean, naming what set it: revealed-preference offers, or aspirational ranges when no full offer survives), Gap with the test against 5.0% ("+5.2%, above +5.0%: lagging"), Confidence as the count of full offers and full ranges, then the tier. Our own offers are context in the last line, never evidence rows.
3. `## Benchmark table`, compiled from those blocks without changing a figure: one row per family with band midpoint, funnel counts, market anchor, gap, verdict, confidence and the deciding reason. Role-family grain only; never a row or a figure for a named person.
4. `## Deferred verdicts`: each deferred family, the specific gap, and the evidence that would settle it.
5. `## Signal caveats`: skews across the whole pool (one dominant source, ranges clustered in pay-transparency states, stage concentration, posted ranges outnumbering offers), stated once here and never repeated per row.

Keep the prose tight. Send the benchmark as your whole reply: its first characters are `# `. Nothing comes before that title: no remark about the skill or the reference, no rule line.
