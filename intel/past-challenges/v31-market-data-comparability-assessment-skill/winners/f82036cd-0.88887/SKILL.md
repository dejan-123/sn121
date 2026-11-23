---
name: peer-figure-equivalence
description: Tests whether each retrieved peer, market or benchmark figure may sit beside an internal KPI. Reads unit, period, definition and segment as match, lean, silent or clash; classifies every clash as foundation or coverage; tiers HIGH/MEDIUM/LOW/REJECT; states bias direction and any narrative flip; quarantines rejects with named re-retrieval asks.
---

# Peer Figure Equivalence

A number next to an internal KPI claims sameness. Prove or break that claim one figure at a time, using only the packet. Prestige, numeric closeness and the sponsor's preferred headline never lift a tier.

## 1. Disassemble the internal KPI first

Write its four parts before opening any retrieved figure:

- **Unit** — what one denominator item is, currency, and time grain.
- **Period** — window (calendar, fiscal, TTM, snapshot) and period *concept* (reported actuals, run-rate, underwriting/cohort year).
- **Definition** — numerator inclusions/exclusions and the event that qualifies a count.
- **Segment** — product, customer tier, size band, geography, channel.

Quote the KPI's own qualifiers ("net", "collected", "active", "completed", "as of"). Those words are where equivalence usually fails.

## 2. Grade each dimension from evidence only

For every figure × dimension, pick exactly one:

| Mark | Meaning |
|---|---|
| **match** | Source text, row metadata or footnote states the basis, and it equals the internal one. |
| **lean** | Unstated, but a different basis would not move this metric much (obvious %-of form; mild FY/CY overlap on a non-seasonal rate). Prior-year data on a cost or price metric is never lean — it is silent. |
| **silent** | Unstated, and a plausible other basis would move the number. |
| **clash** | Source states a different basis. Any stated difference is a clash, never a soft caveat. |

**Source-type defaults, overridden by explicit text.** Structured rows and filings confirm only what their metadata states. Prose defaults to silent on what it leaves out. When prose spells a basis, period or segment, that dimension is **match**. Downgrading an explicit prose statement is an error; so is upgrading a structured row on a dimension its metadata never mentions. Speaker titles and hedges ("about", "roughly", "right now") confirm nothing.

**Footnotes cut both ways.** A note that says the figure is not comparable, or that quantifies an adjustment, cession, layer count or exclusion, usually *confirms* a clash. Keep the dimension as clash. You may apply both ends of a stated band to show direction and size, but that arithmetic does not upgrade the tier. Homemade restatements are not citations.

**Silence is evidence.** When the internal KPI uses an uncommon basis and the figure states no method, assume the prevailing convention for that source type, name the assumption, and mark silent — never treat missing method as match.

## 3. Name the gap kind for every clash

- **Foundation** — different quantity. Other numerator basis (gross vs net, listed/rack vs collected, adjusted vs reported). Other denominator *kind* (visit vs episode, camera-day vs tech-FTE-day, stacked area vs single deck). Different period *concept* (underwriting/cohort year vs calendar incurred). Explicit exclusion of the company's population. Or an operational blend that mixes incompatible throughput regimes (fast modalities with slow ones in one rate). Restating needs a factor the packet does not give.
- **Coverage** — same kind of item, same formula shape, but different scope or weighting. Multi-division rollup that still includes the KPI's line with no breakout. Looser/tighter *eligibility* on the same population (active only vs also counting idle, dark, or suspended units). Count vs value weighting of the same book. Disclosed extra stream in or out of an otherwise shared formula. You can reason about bias direction even when size is unknown. **Any coverage clash caps the row at LOW — never MEDIUM.**

Representativeness (voluntary panel, size-band peer, company not a member) is **not** a clash. It is a qualifier on a row whose four dimensions otherwise hold. Do not confuse a looser eligibility rule with a size-band caveat.

## 4. Tier with downward pressure

Assign the lowest tier any rule triggers. A clean dimension never offsets a broken one.

| Tier | When |
|---|---|
| **REJECT** | Any foundation clash; three or more silent marks; wrong reporter class (supplier "partner" averages, unnamed speakers, consultancy quotes with no instrument, methodology-free blurbs); or the source itself warns non-comparability. |
| **LOW** | No foundation clash, but any coverage clash — even with three matches — **or** exactly two silent marks. Directional texture only. |
| **MEDIUM** | No clash at all, at most one silent, rest match or lean, **and** a representativeness caveat (size band, panel, mild self-selection, sub-line mix inside a matched family). Matched definition with only a size-tier gap stays here — do not drop it to LOW. |
| **HIGH** | All four match from explicit text, primary/structured source, representative cohort, no material caveat. Rare; never the default. |

**Keep these distinctions sharp:**

- A stated other construction (before vs after deductions, listed vs collected, stacked vs single measure, other accounting framework, other period *concept*) is foundation → **REJECT**, even when a footnote quantifies a band.
- Units that need a conversion factor the packet never supplies are foundation → **REJECT**. Closeness of the raw numbers does not rescue them.
- Same formula across other product lines, KPI line still inside the blend → coverage → **LOW**.
- Same eligibility rule, but averaged over a year vs a single month-end (or mild FY/CY overlap on a non-seasonal rate) → period **lean**, not a clash. Coverage on the denominator requires a *different eligibility rule*, not a different averaging grain.
- Confirmed weighting or eligibility differences that are only directionally estimable → coverage → **LOW**, never MEDIUM.
- Ambiguous event definition that can move a productivity rate → **LOW**, not MEDIUM.
- Two soft silents with no clash (e.g. paywalled summary) → **LOW** texture, not REJECT.
- Matched definition, same product, but size band / mix / voluntary panel → **MEDIUM** caveat. Do not demote these to LOW.
- Vague "cost" or "total spend" against a fee-only or collections-only KPI → usually **REJECT**.

Never soften a true REJECT for prestige or closeness. Never escalate coverage or soft-silence rows to REJECT.

## 5. Bias direction and narrative check

For every clash and every material silent, state which way the gap pushes the peer relative to the internal figure, and why. For weighting gaps, write the chain once (value-weighted rates lean toward large items' behavior). Where the packet gives a factor or band, show the arithmetic. Then test the sponsor's intended claim against the best surviving figure and say whether it holds, weakens or **reverses**. A reversal belongs in the pre-table note and the handoff — not buried.

## 6. Package the answer

Open on the assessment. No worksheet above it.

1. Title: company — KPI being benchmarked. Restate the internal reference (formula, basis, period, value). Two or three sentences: which figure can carry the claim, and what the comparable evidence says.
2. Optional pre-table note when one basis issue governs several rows, or when the intended headline reverses.
3. **Comparability table** — one row per figure (prefer stronger tiers first): Figure | Tier | Source | Unit | Period | Definition | Segment | Why. Each dimension cell carries its mark plus a few evidence words. REJECT rows stay brief and point to quarantine.
4. **REJECT — Do Not Cite** — for each reject: deciding evidence (quote or close paraphrase), distortion direction/size, and a **re-retrieval ask** that names the document, table, cohort or basis to fetch. If the source can never supply it, say so and name where a defined version would live.
5. **Handoff notes** — headline carrier (if any); ready-to-paste qualifier for each MEDIUM; directional-only line for each LOW; any narrative reversal stated plainly.

**Rationale rule:** each Why line must fail a swap test — it would be wrong under any other row. Name the deciding dimension and that figure's own evidence. Generic "definition unclear" is not a rationale.

Use numbers only from the packet plus arithmetic you show. Label industry conventions as conventions. Write as a finance colleague. Keep roughly 5,000–8,500 characters.

## 7. Work sequence

1. Call `read_reference` on `references/ladder.md` only.
2. Next message: a private worksheet — internal anatomy, then one line per figure (U/P/D/S marks, gap kind, tier, bias). End that message by calling `read_reference` on `references/lastlook.md` so the worksheet stays out of the answer.
3. After lastlook returns, reply with the assessment alone, starting at the title line.
