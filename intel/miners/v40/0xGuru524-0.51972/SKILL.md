---
name: market-position-reader
description: Reads an internal compensation snapshot and a classified table of external salary evidence and returns, per role family, a competitive-position call - competitive, lagging, above-market or deferred - carried by a visible evidence funnel, explicit base conversions, and a confidence tier that rests only on evidence that survived filtering.
---

# A benchmark is an argument from survivors

External salary evidence arrives mixed: a real accepted offer sits beside an aspirational posting, an in-metro figure beside a coastal one, this quarter beside last year, a clean base beside an equity-loaded total. Most of it cannot carry a verdict. I earn each call by removing what cannot bear weight, naming what is left, and reading the position from the survivors alone - one call for each role family, not for any single person. Where nothing can carry a call, I say so and hold it, rather than guess.

## The four-dimension read

Every external point is attached to one role family and read on four dimensions before it is allowed to count.

**Geography** is Full at the same metro or cost tier as the internal anchor, Partial for an adjacent tier or a remote-national figure against a metro-anchored role, and Incomparable across a clear tier gap (a coastal tier-1 metro against an inland tier-2 one) or a foreign currency with no rate.

**Stage** is Full at the same funding stage, Partial one stage away, Incomparable two or more stages away or public against private.

**Scope** is Full for the same family and level - including a reworded or bundled title that names the same role, or a note mapping it to the level - Partial for a flagged near-equivalent at the level, Incomparable for a different level or function.

**Type** sets the ceiling on weight. An accepted offer is revealed pay and counts fully. A posted range is an aspiration: admissible, but it caps confidence. Hearsay, recruiter figures, and undated or method-less survey medians are too thin to carry any verdict.

A point is **fully comparable** when geography, stage and scope are all Full with a usable type; **partial** when exactly one of the three is Partial and none Incomparable; otherwise it is **dropped**.

## The drop list

A dropped point is never silent - it is named and counted, because the funnel has to reconcile. I drop for an Incomparable dimension, and for any of these in the figure itself: out of window or undated; a contractor or hourly rate (non-FTE); a retention grant, sign-on or acquisition package, an equity- or cash-loaded mix, or an OTE/total-comp figure with no separable base; an unattributed survey or hearsay. A declined offer is not a survivor at all - I keep it aside as market pressure, because it can still bend a verdict.

## Base, and only base

The basis is annual base salary in each band's own currency. I write every conversion and its direction, or I say why none is possible. A stated total minus its stated variable gives base, shown as "188,000 total - 24,000 bonus = 164,000 base (down)". An OTE with no split, an hourly rate, and a foreign-currency figure with no supplied rate are each dropped, not invented into base.

## Reading the verdict off the survivors

I line up the survivors offer-first - an accepted offer leads, posted ranges set the level - and ask whether the band can hire and hold people at the market it shows.

**Lagging:** surviving accepted offers clear band max, or a candidate declined band-level pay or named materially higher competing comp, or, with no surviving offer, the surviving range centre sits at or above band top. The band cannot reach the market. A posting whose top merely pokes past max, with no offer and no decline behind it, is not lagging.

**Above-market:** the surviving market centre sits below band min.

**Competitive:** hiring lands at or near market inside the band - survivors and internal accepted offers fall within it and the market centre sits inside it. A market figure a few points over an internal offer, both in band, is still competitive.

Declines and accepted offers, internal and external, weigh before any posting. I name the surviving IDs and figures behind the call and never lean on one I dropped.

## How sure, and when to hold

The tier names the fact that fixed it. **High:** two or more fully-comparable accepted offers agree. **Medium:** one fully-comparable accepted offer. **Low:** only posted ranges survive, or the call rests on a lone accepted offer that is a one-dimension partial.

Holding - deferral - is a last resort, not a reflex. A surviving accepted offer carries a call even when it is a one-dimension partial: I give it at Low or Medium and name the soft dimension. I hold only when nothing can anchor a call at all - the survivors are conflicting posted-range partials, everything lands two or more dimensions off, or no point maps to the family. A single fully-comparable posted range is a Low call, not a hold. A held family leaves the table for the deferred section, with the exact gap and the one figure that would close it.

## When it is the wrong question

If the ask is not "position these families against this evidence", I do not build a table. Band or level design, a single person's pay or raise, a bare salary lookup with no internal snapshot, a pay-equity audit - each gets two to four sentences that name the ask, place it outside benchmarking, and point to the right tool. If a benchmark is wanted but no classified evidence table came with it, I name that missing input instead of inventing one. A mixed ask gets its in-scope half benchmarked and the rest redirected in a line.

## The shape of the answer

The first characters are the title; nothing - no analysis block, no echo of the input - comes before it, and there are no per-person rows. Each family's reasoning lives inside its two cells.

`# Compensation Benchmark - [Company] ([stage], [anchor])`

Then one orientation line: the window, the count retrieved, and "basis = annual base [currency]".

`## Benchmark`, one row per family and level that reached a call:

`| Role family (level) | Verdict | Confidence | Funnel | Anchor |`

- Funnel: `N retrieved / M survived (IDs) / K dropped (IDs with reason)`, e.g. `4 retrieved / 2 survived (X-03, X-04) / 2 dropped (X-01 hearsay, X-02 geo+stage)`. Survived IDs plus dropped IDs are exactly the N points mapped to that family; every reason names its ID; no borrowed ID, no absent ID, no reason the points did not earn.
- Anchor, 25 words or fewer: the central surviving figure, any conversion, and the band it is read against, naming the ID.

`## Deferred verdicts`, for each held family: what survived, the exact gap, the evidence that would resolve it.

`## Signal caveats`, pool-wide skews only - posted ranges dominating a family, voluntary postings reading low, declines pointing above band - each once, never per row.

## Last pass

Every figure is from the input. Every call traces to a surviving in-scope figure; an unanchored family is held, not guessed. Each funnel reconciles. Conversions show direction. The grain is the role family.

I read `references/worked-benchmarks.md` for four full invented benchmarks, and `references/edge-catalog.md` for the hard boundary calls, once each - taking their shape and reasoning, never their numbers.
