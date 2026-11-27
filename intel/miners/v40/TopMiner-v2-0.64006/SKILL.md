---
name: comp-band-benchmark
description: Benchmarks a company's pay bands, one role family and level at a time, against a classified external evidence table. Screens each point for metro, funding stage, role scope and posting type, removes non-base pay, converts to annual base, and returns a competitive, lagging, above-market or deferred verdict with its evidence funnel and confidence tier; redirects requests that are not benchmarks.
---

# Role-family pay benchmark

A band is judged against the evidence that survives screening, never against the whole table. In short: test each point on four dimensions (any fail drops it; exactly one partial keeps it visible but out of the anchor); let fully comparable accepted offers set the anchor (one is the anchor, two give their mean, three or more their median) and use ranges only when no offer survives; put everything on annual base first; compare the band midpoint with the anchor (a gap inside ±5.0% is competitive); read the tier off what survives (two or more offers: High; one offer, or two ranges with no offer: Medium; a single range: Low); defer any family with no fully comparable point, naming the evidence that would settle it.

## Is this a benchmark at all?

Do not build a table when the request is really one of these: pay for a named person or whether someone is underpaid; market rates with no classified evidence attached; designing levels or ranges; a pay-equity audit. Call read_reference for `references/redirect.md`, with at most one short line in that message, and write the scope note it describes as your final message. In it, every ask that is not a benchmark gets its owner and the reason; a pasted roster is put to one side, since bands are measured against a market and people are not measured against each other; all bands are Deferred for now; and the requester is asked for two things, the band snapshot and a classified external evidence table. No employee is named and no pay figure is quoted.

## Read the input before the evidence

Write down, from the input itself:
- **Cutoff month.** Take the month the window line names: "before April 2025" gives 2025-04. Never recount it from the retrieval date or the window length. With a cutoff of 2024-06, a point dated 2024-06 or 2024-12 stays and one dated 2024-05 goes.
- **Anchor geography** for each family: the HQ metro, unless the snapshot places that family elsewhere, plus any rule for remote roles.
- **Company stage**, band currency per family, and the company's own recent offers and declines.

Each evidence row belongs to exactly one family and level, the one its title maps to. A row whose role has no band is dropped as "no internal match". A family with a band and no external rows is deferred. A missing band is named as a gap, never estimated.

## Screen: exclusions first

| Drop the point when | Note |
|---|---|
| dated before the cutoff month | the cutoff month and anything later stay in |
| undated, or a survey with no named source or method | |
| hearsay, such as a figure a recruiter mentioned | unverifiable |
| contractor or hourly contract pay | never annualise it |
| retention or acquisition grant, sign-on package, equity-heavy mix | not base pay |
| OTE or total comp with no base split | read the Notes column; Type may look normal |
| another currency with no exchange rate supplied | never invent a rate |

## Screen: four dimensions

| Dimension | Match (M) | Partial (P) | Fail (F) |
|---|---|---|---|
| Geography | the anchor metro, or the stated anchor tier | remote or national, no metro given | any other named metro |
| Stage, on the ladder Seed, Series A, B, C, D, E or later, Public | same rung | one rung away | two or more rungs (B against D is two), Public against private, or unknown |
| Role scope | same family and level, or a title a scope note maps to it | adjacent level, a blended title ("X / Y", "X or Y"), or a neighbouring specialism | another family, or a level two or more away |
| Posting type | accepted offer, or posted base range | | |

An alias of the same job or a qualifier naming the company's own sector is M; a scope note on the row always decides.

**Class from the marks, never by feel.** Any F: DROP, however strong the rest (a named metro other than the anchor is F, never P). No F and two or more P: DROP. No F and exactly one P: PARTIAL. All M: FULL. A partial never sets the anchor: an accepted offer one rung off, or under a blended title, is a partial like any other, because offer strength never overrides a mark; note its skew (a lower stage or a national figure understates the market, a higher stage overstates it).

## Basis

Put every figure on annual base and write each conversion with its direction, for example "$160,000 total − $10,000 stated bonus = $150,000 base (total → base, falls)". Monthly ×12; hourly FTE only with the annual hours the input states. An annual base figure needs "no conversion". A GBP or EUR band is compared with same-currency evidence only. A range midpoint is (min + max) / 2; never anchor on a range end, and never round an anchor.

## Anchor, gap, verdict

- **Anchor.** Full external accepted offers alone when there are any; full ranges then corroborate and stay out. With no full offer, the median of the full range midpoints. The company's own offers never enter.
- **Gap** = (band midpoint − anchor) / anchor, to one decimal place.
- **Verdict.** −5.0% to +5.0%, both ends included: competitive. Below −5.0%: lagging. Above +5.0%: above-market. Within one point of ±5.0% is a boundary case. Offers show what was paid; ranges are what employers advertise, wide and aspirational.

## Confidence tier

Count FULL external points only: offers and ranges.

| Full offers | Full ranges | Tier |
|---|---|---|
| 2 or more | any | High (Medium if single offers sit on opposite sides of a ±5.0% line) |
| 1 | any | Medium |
| 0 | 2 or more | Medium: ranges alone never reach High |
| 0 | 1 | Low |
| 0 | 0 | Deferred |

Partials alone never carry a verdict; two partials skewing opposite ways show an unresolved market, which is a deferral. The company's own offers and declines are a separate read on where it pays today: offers landing above the band midpoint support a lag, offers near it support competitive. They never enter a count, anchor, verdict or tier. State the deciding reason in a few words: "Medium: one offer, range agrees".

## Traps that cost a benchmark

- **The cutoff month itself.** "Before October 2025" puts 2025-10 in and 2025-09 out. Check every date against the month on the window line, one by one; one stray point moves an anchor.
- **What may sit in an anchor.** Only IDs on that block's full line. Never a partial (an offer one stage off is a partial), never the company's own offer or decline, and never a range when a full offer exists.
- **High is two offers.** One full offer plus agreeing ranges is Medium; ranges alone stop at Medium; a single range is Low.
- **Only rows you were given.** Cite only IDs that appear in the evidence table, each once, in the family its title maps to.
- **Opposed partials.** One partial a stage below and one a stage above do not average into a verdict: defer, and say what would settle it.

## Order of work

A scope note skips all of this.

1. After load_skill, call read_reference for `references/worksheet.md`. It holds the worksheet form. Your next message is the worksheet itself; when every block and the checks line are written, finish that same message by calling read_reference for `references/final-pass.md`.
2. That file sets out the report. The report is your final message: it carries the worksheet's figures, IDs and dates, reads as finished work for the requester, and leaves the worksheet's working out.
