# Comparability scoring

Use this when a row's score on one of the four dimensions is not obvious.

The test behind every dimension is the same: would this company lose or win a candidate against the employer in the row, for this job, on these terms? A row that is not a real alternative for the same person says little about the band.

## Geography

Start from the company's own location policy, because it defines what "same place" means.

- **Roles anchored to a named cost tier.** A remote row counts as a match only if it declares that same tier or metro. A remote or national row with no metro is partial: it blends high-cost and low-cost hiring, so it could sit either side.
- **Only some roles remote, and the input does not say which.** Treat a family as anchored to headquarters unless the input names that family as remote or unanchored. A general remark that some roles are remote does not unanchor every family. Headquarters-metro rows then score match and national rows partial. Say once that you read it this way.
- **Roles with no anchoring.** National and remote rows are the natural comparison and score match; a single-metro row is partial, biased toward that metro's cost level.
- **Different metro.** Similar cost level is partial. When the input does not say how two metros compare and the difference is not obvious, score partial and say the direction is uncertain; keep fail for an unmistakable gap. A top-cost hub against a mid-cost metro, or the reverse, is a fail, because the difference is larger than any gap the method is trying to detect.
- **Different country.** Fail, whatever the currency arithmetic says. Labour markets, benefits and tax differ.
- **A family based elsewhere.** If the snapshot says one family sits in another location, score that family's rows against that location, not headquarters.

When a partial geography row survives, state the direction it should lean. A national range for a company anchored to a high-cost metro should read low; if it reads high, that is worth a clause.

## Company stage

Stage stands in for cash available, equity share of the package, and risk.

- Before scoring, write the funding ladder in order and mark the company's place on it. Count rounds on that ladder; do not estimate.
- Same stage: match.
- One funding round either side: partial. Earlier-stage rows tend to read low on base, later-stage rows high.
- Two or more rounds away: fail.
- Public company against a venture-backed company: fail in either direction. Liquid equity and public pay structures make base figures a different instrument.
- Unknown or undisclosed stage: fail. A row cannot be scored on a dimension it does not report.
- Headcount can refine a call only when the input gives it for both sides. Do not infer stage from a company name.

Two partial rows on opposite sides of the company's stage do not average into a match. They bracket the answer, which is useful as corroboration and nothing more.

## Role scope

Titles are the weakest field. Score on level and track first, then family.

- Same family, same level: match.
- Different title, with a note in the input mapping it to the same level: match. Use the mapping; do not second-guess it.
- Different title, same level implied but not stated: partial.
- Blended title covering two functions, or a broader generalist title: partial. Part of the pay is for work outside the family.
- Adjacent specialism in the same family: partial.
- Different level, even by one step: fail. A step in level is usually worth more than the gaps being measured.
- Management track against individual-contributor track: fail, even when the seniority word matches. "Senior" and "senior manager" are different jobs.

Assign each row to one family only. A row that could serve two families goes to the closer one and is not counted twice.

## Posting type

This dimension is about how the figure came to exist.

- **Accepted offer.** Someone took the job at this price. Match.
- **Posted range with both ends stated as base.** Match, whether the employer published under a pay-transparency mandate or by choice.
- **Range with one end missing, or an offer not confirmed as accepted.** Partial. Half the information needed to place it is absent.
- **Declined offer.** Evidence of a price that did not clear, so not a market price. Treat it as an internal signal if it is the company's own, and as partial if external.
- **Verbal, second-hand or method-free survey figures.** These were removed in the exclusion step and do not reach scoring.

**Mandated and voluntary ranges.** The distinction does not change the score, because it is a property of the jurisdiction more than of the row: where there is no mandate, every range is voluntary, and marking them all down would tell the reader nothing about which rows are better. It does change the reading.

- Mandated ranges are published defensively and run wide. The midpoint is soft; an offer that survives is a much better guide to where hires land.
- Voluntary ranges come from employers who chose to publish, who tend to be comfortable with their pay. The sample leans high.

If one of these conditions covers the whole pool, state it once among the pool-wide caveats with its direction. If it affects only the row that decides a family's verdict, give it one clause in that family's rationale. A row whose notes are silent takes the status of its jurisdiction when the input states one.

## Classifying

- Four matches: fully comparable.
- Exactly one partial, no fail: partial match. Record which dimension.
- Any fail: incomparable. Record the failing dimension as the drop reason.
- Two or more partials: incomparable. Each partial adds an unknown bias, and two unknown biases cannot be netted.

Score every row the same way in every family. If a stage-adjacent row is partial in one family, it is partial in all of them; inconsistency between families is the most visible sign of scoring by convenience.

## Worked reasoning, with invented rows

A growth-stage company anchors all roles to one mid-cost metro and has a band for senior analysts. Four rows arrive:

- Row 1: accepted offer, same metro, same stage, same title. Four matches, fully comparable.
- Row 2: mandated posted range, top-cost hub, same stage, same title. Geography fails. Dropped: cost tier.
- Row 3: voluntarily posted range, same metro, one stage earlier, same title. One partial (stage). Partial match; expected to read low.
- Row 4: accepted offer, same metro, same stage, "senior analyst manager". Track differs. Dropped: role scope.

Funnel: retrieved 4, fully comparable 1, partial 1, dropped 2. The reference comes from row 1 alone, which limits how confident the verdict can be; row 3 can only corroborate.
