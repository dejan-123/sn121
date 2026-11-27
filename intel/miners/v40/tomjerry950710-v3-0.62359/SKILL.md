---
name: role-family-pay-benchmark
description: Builds a role-family benchmark from a classified external pay-evidence table and an internal band snapshot. Each band is called competitive, lagging or above-market from the evidence that survives a comparability screen, with its evidence funnel and confidence tier, plus deferred verdicts and pool caveats.
---
# Screen first, convert second, decide last

A band's market position rests on a few comparable points, never on the whole evidence table. Each external point is screened first, the survivors are put on annual base, and each role family's verdict comes from its survivors alone. A request that is not a benchmark is turned away first (see "Requests to turn away").

## Fix the company's position

Note the company's metro and cost tier, its stage, each family's level, and whether each family is tied to a metro or hired remote with no metro. Read dates by month against the first in-window month: when points before October 2025 are out, 2025-10 is in and 2025-09 is out, accepted offer or not.

## Screen each point on four dimensions

- **Geography.** Same metro or cost tier: match. A remote figure with no metro: match only for a family the input says is hired that way; partial for a metro-tied family, and partial with the gap named when the input does not say which families are remote. Another cost tier or country: mismatch, unless a differential is supplied.
- **Company stage.** Same stage: match. One stage up or down: partial. Two or more, or public against private: mismatch.
- **Role scope.** Same family and level: match. One level off, a wider or narrower remit, or a different title with no note mapping it to the family: partial. Further off: mismatch. A note that maps the level makes a different title a match.
- **Posting type.** An accepted offer is revealed preference, a price a candidate took: match. A posted range is aspirational. Published under a pay-transparency mandate, or with no word on why it was posted, it is a disclosure the employer stands behind: match. Marked as voluntarily posted, on its row or by a note covering the table, it is recruiting copy: partial. Recruiter hearsay and surveys with no method or date are unverifiable: dropped. A declined offer is a refused price, not a market rate.

Four matches make a point **fully comparable**. One partial and no mismatch make it a **partial match**: it may lean, but it never sets a verdict. Any mismatch, or two partials on one point (say, one stage away and also voluntarily posted), make it **incomparable**. Out-of-window and undated points are dropped. Every dropped point is counted with its reason.

## Take out pay that is not base salary

Retention and acquisition grants, contractor or hourly rates, on-target earnings with no base share, and packages or equity-heavy mixes with no base figure are a different kind of money. Each is excluded by name and counted as dropped; a contract rate is never annualised. A note that sizes the difference confirms it and does not close it. What can reach base is converted in the open: total cash minus the stated bonus; monthly times 12; another currency only at a rate the input gives. No rate, bonus share or equity value is ever assumed.

## Form the verdict from the survivors

1. **Anchor.** Surviving accepted offers set it: their median, or the lone figure. A surviving range beside an offer only confirms or questions it and is never averaged in. With no surviving offer, the anchor is the mean of the surviving range midpoints, under the posted-range cap.
2. **Gap** = (anchor − band midpoint) / band midpoint. A positive gap means the market pays more than the band. Above +3%, the band trails the market: **lagging**. Below −3%, the band pays more than the market: **above-market**. Otherwise **competitive**.
3. **Own accepted offers** are the company's hires, never pool points, and never move the verdict. Their mean is set against the midpoint the same way: own hires above the midpoint agree with lagging, and own hires below it agree with above-market. A contradiction is stated and costs one confidence tier; agreement never raises a tier.
4. **Confidence.** High: two or more surviving offers that agree. Medium: one surviving offer, whatever own offers or partials add, or two or more agreeing ranges and no offer. Low: a single range. A decline that cites pay supports a lagging reading and changes no tier.

## Defer when the pool cannot carry a verdict

A family is deferred when no fully comparable point survives, when only partial matches remain (whether they agree or pull opposite ways), when survivors conflict and no offer settles it, or when the family has no band. A partial match is never promoted to fill the gap. The deferral names what blocked the verdict, by ID, and the evidence that would settle it: how many points, of what type, at which stage, level and place, inside which dates.

## Requests to turn away

This skill answers one question: where each role family's band sits against the market, given classified external evidence and a band snapshot. Other requests get a short redirect, not a table:
- one person's raise, offer or retention (an individual pay decision);
- "what does this role pay" with no classified evidence (a salary lookup);
- adding, removing or redrawing band levels (band design);
- pay differences between groups of people (a pay-equity audit).
The redirect is under 200 words and titled `# <Company>: not a benchmark request`. It numbers each ask with the kind of work it is and who owns it. If the request carries a belief, such as a team being underpaid, it says why a salary roster can neither confirm nor rebut it. It lists what to send for a benchmark and, when a deadline is stated, what to collect first. It has no figures, no names and no partial table.

## How the reply is built

Only the last message is read by the requester, so it holds the document and nothing else.
1. Read `references/worked-pools.md` first. It has two invented pools with their working sheets, and one redirect.
2. For a benchmark, the next message is the working sheet for this input: the company line, one short line per point down to the last row of the table, then per family the counts, anchor, gap, own-offer check and tier. Close that same message by calling read_reference on `references/sent-benchmarks.md`.
3. Then send the document, copied from the sheet. It starts at its title, with no lead-in.

## The document

- Title: `# <Company>: role-family benchmark`.
- **Basis.** Up to four sentences: the first in-window month, with boundary and out-of-window points by ID; each conversion with its direction, or that none was needed (an exclusion is not a conversion); internal data that is missing and matters, such as a family with no own offers or a remote policy not stated.
- One table, one row per family and level:
  - band midpoint;
  - evidence funnel, written as "4 retrieved: 2 survived (IDs), 1 partial (ID, why), 1 dropped (ID, why)";
  - anchor and reading: whether the anchor is an offer or a range, what the partials lean toward, what own offers say;
  - gap;
  - verdict;
  - confidence with its reason.
- `## Deferred verdicts`: one or two sentences per deferred family. With none, say so and name any family resting on a single survivor.
- `## Signal caveats`: two or three whole-pool skews, each stated once: offers against ranges, mandated against voluntary postings, one source or stage dominating.
- A full pool takes about 4,000-6,000 characters. Where a note in the input decided a call, quote its words.

## Never

- Never form a verdict from dropped, excluded or partial points, or from the raw pool.
- Never leave out the funnel or a needed conversion.
- Never report at the level of a person.
- Never invent a rate, a figure or a point.
