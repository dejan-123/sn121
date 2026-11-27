---
name: band-market-readout
description: Gives each role family's pay band a market position (competitive, lagging, above-market or deferred) from a classified table of outside pay evidence and the company's band snapshot, with every point screened, a confidence tier per family and the caveats that bear on the whole pool. A request that is not a band review gets a short redirect.
---

# A band's market position comes only from the points that are truly comparable

Most rows in an evidence table price something next door to the job: the same title in another city, a firm at another stage of funding, a package that folds in bonus or stock, a range a company advertised rather than paid. An accepted offer is the strongest signal there is, the base two parties actually signed for (revealed preference). A posted range is stated intent, wide where a mandate forced it out and flattering where it was published by choice. So each point is screened before any band is judged, the survivors go on one basis, and the verdict rests on them alone. When the survivors disagree with each other, or none are left, the honest answer is a deferral that names what is missing. No exchange rate, hours figure, bonus share or cost-of-living factor comes from outside the input.

## 1. Screening each point

Out first, each with its reason: a date before the window or no date (a window "before May 2025 are out" makes 2025-05 the first month in; earlier months are out, even for an accepted offer; read a date year first, then month: 2026-03 is after 2025-05); hearsay, or a survey with no source, method or date; any figure that is not annual base: retention or acquisition grants, hourly or contract rates (never annualised), on-target earnings or totals with no stated split, equity- or cash-heavy packages. A stated split rescues a total: total less the stated bonus is base, written out.

Every remaining point gets four marks:

- **Place.** The company's metro, or the metro the input gives that family: match. A national or remote range with no metro: partial. Any other named metro or country: mismatch.
- **Stage.** Rounds on seed, A, B, C, D, E: the same round is a match; one round away is partial, never dropped; two or more, or a public firm against a private one, is a mismatch.
- **Scope.** The same work at the same level, under any title the input maps to it: match. Another level or role: mismatch.
- **Type.** An accepted offer or a posted range for a salaried role: match.

Any mismatch: dropped. Four matches: survived. Otherwise partial, which shows direction only. A family paid in another currency is read in that currency; a point in a second currency is compared only at a rate the input gives.

## 2. Anchor, gap and verdict

- **Anchor.** Name the surviving accepted offers by ID: one offer is the anchor, two give the point halfway, more give the median; surviving ranges beside them only agree or disagree. With no surviving offer, the mean of the surviving range midpoints. Offers and ranges are never mixed.
- **Gap.** (anchor - band midpoint) / band midpoint, operands written, rounded to one decimal. Plus: the market pays more.
- **Verdict.** -5.0% to +5.0%, both ends included: **Competitive**. Above +5.0%: **Lagging**. Below -5.0%: **Above-market** (the band pays more). Two checks can change it:
  - Compression, only for an offer anchor with a gap of +3.0% to +5.0% and own accepted offers on file (none: no check): median own offer / band maximum, to two decimals; at 0.96 or more, **Lagging**.
  - Conflict, only for a family whose sole survivor is one posted range: a partial accepted offer on the other side of the midpoint, wherever it sits in the band (at the minimum too), makes it **Deferred**; advertised and paid evidence disagree.

## 3. Confidence, from survivors only

Count surviving offers and ranges, never partials:

- `2 or more offers → High`
- `1 offer, with or without ranges → Medium`
- `0 offers + 2 or more ranges → Medium` (the posted-range cap)
- `0 offers + 1 range → Low`, still a verdict unless the conflict check defers it
- `nothing survived, or the conflict check → Deferred`

The company's own recent offers are internal evidence, not pool: never in the anchor, the funnel or a count. They serve the compression check and sit beside the midpoint in the row. "No recent offers" is an answer; a family that no line of the offer list names is a gap in the input.

## 4. The document

The reply is one document, written once from the title down; the screening shows inside each row as it is written.

1. Title `# Pay band review: <Company>`, then **Reading of the input.** in one paragraph: the window in the input's words and its first month in, the points on its boundary and outside it, by ID; each conversion with its operation and direction, or that none was needed; each internal gap the input shows, found by taking the families one by one against the offer list, and roles the snapshot calls remote without naming them (a snapshot that ties remote roles to a metro leaves nothing open).
2. One table, a row per family and level in the snapshot's order, deferred families included: Family and level (open-role priority) | Band (min / mid / max) | Evidence screened | Anchor and gap | Verdict | Confidence. The screening cell names every point of the family, wherever it sits in the input, as kind, month against the first month in (`2025-11 ≥ 2025-05`), metro and round, then its outcome: `survived`, `partial, one round`, `partial, no metro` or `dropped, <reason>` (a basis failure is always dropped); then `retrieved 4 → survived 2 · partial 1 · dropped 1`. The anchor cell gives the anchor by ID and the gap with its operands; then, for an offer anchor, `Compression check:` with the gap's zone, the own offers on file and the ratio, or why there is no check; for a family whose sole survivor is a range, `Conflict check: partial accepted offers in this family:` naming each with its side of the midpoint, or none; then each partial's figure and lean, and the own offers against the midpoint. The verdict comes after the gap. The confidence cell opens with the count from the table above (`1 offer + 1 range → Medium`), then the reason.
3. **Count.** One line adding the screening cells up: retrieved, survived, partial, dropped.
4. `## Deferred verdicts`: a bullet per deferred family: what ruled out or contradicted each point, by ID, what the partials suggest as direction only, and the evidence that would settle it. With none, one sentence naming the verdict that rests on a single survivor.
5. `## Signal caveats`: two or three bullets on the pool as a whole, counted by ID: offers against ranges, mandate against voluntary postings, one source or one stage behind most points, what stale or off-basis points removed. Said once, never repeated in a row.
6. **What decides the close calls.** Two or three sentences on the verdicts a fast reading would get wrong and the point that settles each. No raise, band change or hire is recommended.

## 5. When the request is not a band review

Pricing one person, looking up what a role earns, designing or redrawing bands, auditing pay equity, or any paste with no classified outside evidence: a short note of four brief paragraphs, under 200 words, with no table, no figures and no advice beyond what to send. It carries the same title, and its first sentence says the request is not a band review. It names what was asked and where each ask belongs, why the paste cannot carry a review (no classified points; a roster neither confirms nor rebuts that anyone is underpaid), and exactly what to send: outside points with ID, source, type, date, title, metro, stage and figure; bands with minimum, midpoint and maximum per family and level; the data window; the company's recent offers.

## Before you reply

For every input, a request that is not a review included, you first use read_reference to open `references/casework.md` (invented companies, for form and judgment only; every fact comes from the input). Then you reply. The reply is the document itself, pasted as it stands into the compensation lead's file: its first characters are `# Pay band review: `, for a review and a redirect note alike, with no announcement such as "Now I will produce the review", no remark about the skill, the casework or your method, and no `---` rule before the title.
