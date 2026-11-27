---
name: market-read-from-survivors
description: Reads an internal compensation snapshot against a classified table of external salary evidence and returns, for each role family, a competitive-position call - competitive, lagging, above-market, or held - backed by a visible evidence funnel, written-out base conversions, and a confidence tier that rests only on the points that survived filtering.
---

# The market is whatever the survivors say it is

A pool of external salary points is mostly noise against any one question. A coastal tier-1 figure, a posting that only states a wish, last year's number, a contractor's hourly rate, a total-comp bundle with the base buried in equity - none of these can tell me whether a band reaches the market. So I work by taking things away. I read each point once, keep only the few that can bear weight, say out loud why each of the rest cannot, and then read the position off the handful that remain. One call per role family, never per person. If nothing is left that can carry a call, I hold it; a verdict I cannot trace to a surviving, in-scope figure is one I have not earned.

## Before anything: is a benchmark even the ask?

I check the request first, because the wrong question deserves a redirect, not a table. If the ask is to design or redraw a band, add a level, or re-architect pay structure; to decide one person's salary or raise; to look up a bare market number with no internal snapshot to position; or to audit pay equity or fairness - that is not competitive benchmarking, and I say so in two to four sentences: I name the ask, place it outside this work, and point to the right exercise (levelling, an individual pay review, a survey pull, an equity audit). If a benchmark is genuinely wanted but no classified external evidence table came with it, I name that missing input rather than invent one. A mixed ask gets its benchmarkable part done and the rest handed off in a line - never dropped in silence.

## The unit I compare in

I compare annual base salary, each band in its own currency. One row of thinking per role family and level, carrying that family's band (min, mid, max) and any internal offers, accepted or declined. Before I score a single external point I fix the anchors I am comparing to: the company stage, the geography or cost tier, the stated data window, and the currency of each band.

## Letting a point in: three fits and a ceiling

I attach every external point to one role family, then test three fits and read one ceiling.

**Geography fit.** Full when it is the same metro or cost tier as my internal anchor. Partial for an adjacent tier, or a remote-national figure where the internal role is tied to a metro. Incomparable across a clear tier gap - a coastal tier-1 metro set against an inland tier-2 one - or a foreign currency with no rate supplied.

**Stage fit.** Full at the same funding stage. Partial one stage off. Incomparable two or more stages off, or a public company against a private one.

**Scope fit.** Full for the same family and level - and a reworded or bundled title that plainly names that role, or a note mapping it to the level, is still Full. Partial for a flagged near-equivalent at the level. Incomparable for a different level or a different function.

**The type ceiling** sets the most weight a point can ever carry, no matter how well it fits. An accepted offer is revealed pay and carries full weight. A posted range is only an aspiration: I admit it, but it caps the family at Low confidence. Recruiter-reported or verbally-shared figures are hearsay, and an undated or method-less survey median is too thin - neither can carry a verdict at all.

A point counts as **fully comparable** when all three fits are Full and the type is usable; as a **partial** when exactly one fit is Partial and none is Incomparable; otherwise it is **set aside**.

## Throwing points out, and counting the throwaways

Nothing leaves quietly. Every point I set aside is named with its reason and counted, because the funnel has to add up. I set a point aside for any Incomparable fit, and for any of these in the figure itself:

- Out of the stated window, or undated.
- A contractor or hourly rate - non-FTE; I do not annualise it into an FTE comparison.
- No base I can isolate: a retention grant, a sign-on or acquisition package, an equity- or cash-loaded mix, or an OTE/total-comp number with no base split.
- A weak source: an unattributed survey with no methodology, or hearsay.

**A declined offer is never a survivor.** I keep it to one side as market pressure - it can still bend a call toward lagging - but it never joins the surviving set.

## Getting every figure onto a base

I write each conversion and its direction, or I say why the figure cannot be converted and set it aside.

- Already base: use as-is.
- Total comp with a stated variable: base = total minus variable, shown with direction, e.g. "191,000 total - 27,000 bonus = 164,000 base (down)".
- OTE with no base split: I cannot isolate base, so I set it aside - I never guess a split.
- Hourly or contractor rate: set aside, not annualised.
- A foreign-currency figure with no supplied rate: set aside - I never invent a rate.

## The call itself

I line the survivors up offer-first - an accepted offer leads, posted ranges set the level - and ask the only question that matters: can this band hire and hold people at the market the survivors show?

**Lagging** when surviving accepted offers clear band max, or a candidate declined band-level pay or cited materially higher competing comp, or - with no surviving offer at all - the surviving range centre sits at or above band top. The band cannot reach the market. A posting whose top merely pokes past max, with no offer and no decline behind it, does not make a family lagging.

**Above-market** when the surviving market centre sits below band min.

**Competitive** when hiring lands at or near market inside the band: survivors and internal accepted offers fall within it and the market centre sits inside it. A market figure a few points above an internal offer, both in band, is still competitive.

Accepted offers and declines, internal and external, weigh before any posted range. I name the surviving IDs and figures behind the call and never lean on a point I set aside.

## How sure, and the one case where I refuse to call

The confidence tier states the single fact that fixed it.

- **High:** two or more fully-comparable accepted offers that agree.
- **Medium:** one fully-comparable accepted offer.
- **Low:** only posted ranges survive, or the call rests on a lone accepted offer that is a one-dimension partial.

Holding a family is a last resort, not a reflex. A surviving accepted offer still carries a call even when it is a one-dimension partial - I give the call at Low or Medium and name the soft fit, rather than hold. A single fully-comparable posted range is a Low call, not a hold. I hold only when nothing can anchor a call at all: the survivors are conflicting posted-range partials, everything lands two or more fits away, or nothing maps to the family. A held family leaves the comparison and goes to its own section with the exact gap and the one figure that would close it.

## The block I write each family as

The first characters are the title. Nothing comes before it - no preamble, no analysis block, no echo of the inputs, no per-person row. The scoring and arithmetic are reasoning I finish in my head; they are not sections. I write each family as a short fixed block, not a table row.

`# Competitive Position - [Company] ([stage], [anchor])`

One orientation line: the data window, the count of points screened, and "basis = annual base [currency]".

Then, for each family and level that reached a call, a block in this exact order:

```
## [Role family] - [Level]
Call: [Competitive | Lagging | Above-market], confidence [High | Medium | Low]
Funnel: N screened -> M counted ([IDs]) -> K set aside ([ID] [reason]; ...)
Read: [central surviving figure with any conversion, set against band min/mid/max, naming its ID; 25 words or fewer]
```

The Funnel line must reconcile: counted IDs plus set-aside IDs are exactly the N points I mapped to this family - none repeated, none borrowed from another family, none missing - and every set-aside reason names the ID it belongs to.

`## Held` - each held family on one line: what is counted so far, the exact gap, and the one piece of evidence that would resolve it (e.g. "one in-metro, same-stage accepted base offer").

`## Pool notes` - pool-wide skews only, each stated once and never per family: posted ranges dominating a family, voluntary postings in a no-mandate setting possibly reading low, declines signalling the market sits above band.

## My last reconcile

Every figure traces to the input. Every call traces to a surviving in-scope figure; a family with no anchor is held, not guessed. Every funnel line reconciles - screened equals the distinct IDs I mapped there, counted plus set-aside equals screened, each set-aside reason names its ID, and no reason a family's points did not earn shows up in its funnel. Conversions show their direction. The grain is the role family, start to finish.

I open `references/field-cases.md` for four full invented benchmarks worked end to end in this block shape, and `references/line-calls.md` for the hard single boundary calls as a quick check. I take their shape and their reasoning, never their numbers.
