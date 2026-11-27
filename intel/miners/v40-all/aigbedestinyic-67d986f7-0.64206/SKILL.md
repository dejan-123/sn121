---
name: compensation-band-benchmarking
description: Audits external salary records against an internal pay-band snapshot to produce a tailored role-family benchmark briefing with full funnel accounting, basis normalization, competitive-position verdicts, confidence tiers, deferred verdicts, and signal caveats. Screens scope first and redirects individual pay decisions, raw lookups, band redesigns, and pay-equity audits.
---

# Benchmarking Pay Bands Against Surviving Market Evidence

Compensation benchmarking tests whether each role family and level sits competitive with, lagging, or above its competing market. Raw feeds look richer than usable evidence: other cities, distant stages, hearsay, non-base pay, or stale listings distort anchors unless screened first. Audit every record before reading the band, strictly at role-family and level grain (Senior and Staff take separate rows and funnels).

## Core Method at a Glance

- **Scope and survivors' bias:** Role-family benchmarking relies on classified outside salary records; redirect individual pay actions, raw lookups, band redesigns, pay-equity audits, or roster-only asks via `references/scope-redirect.md` first (incumbent rosters show survivors, not external hiring cost).
- **Window and pay basis:** Scan through the final row and compare `YYYY-MM` by calendar year then month (floor month stays in, earlier drops). Keep only annual local FTE base, convert solely from stated splits, and test foreign teams in local currency.
- **Comparability (`M/P/X`):** Score geography, financing stage (`0` steps `M`, `+/-1` `P`, `2+` or public/private `X`), role scope, and signal type. Clean matches (`0X, 0P`) survive as full; `0X, 1P` are partial directional signals; `2+P` or any `X` drop.
- **Revealed preference and deferral:** Accepted offers reflect cleared hiring prices whereas postings reflect employer aspirations. Anchor strictly on full external offers whenever any survive; defer on zero full comparables or an unreliable lone range contradicted by an inside-span partial offer beyond 5.0%.
- **Verdicts and confidence:** Compute unrounded `(band midpoint - anchor) / anchor`, corroborate gaps in the 4.00% to 4.85% margin, and set confidence from full external evidence alone (posted ranges cap at Medium).
- **Briefing craft:** Omit export IDs and bracketed thresholds in the deliverable, show worked arithmetic, match disclosure caveats strictly to posting notes, and rebut the highest-dollar dropped figure.

## Step 1: Scope Check

A benchmark requires an internal band snapshot and classified external salary records. Four asks sit outside scope: individual pay decisions (raises, counter-offers, underpay checks), standalone lookups without audited market records, band redesigns, and pay-equity audits. Deadlines govern collection timing, never eligibility. If an out-of-scope ask applies or no classified external table is supplied (such as an employee roster alone), your first action must be a single `read_reference` call on `references/scope-redirect.md` -- wait for it before drafting a word, and do not compose a redirect from this overview alone. If one family lacks a band, benchmark the rest and defer it while noting the gap.

## Step 2: Ingestion, Window, and Pay Basis

Scan through the final row, where exports often place a closing family or boundary-month record. Record feed(s), retrieval date, home metro, remote policy, stage, and exact lookback window (6, 12, or 18 months). Every external row counts in retrieved (hearsay and undated surveys count in both retrieved and dropped). Surface snapshot gaps explicitly: missing bounds, families omitted from recent offers (distinct from listing none), shorter internal lookbacks, or unnamed remote-national roles; leave undated internal offers undated.

State the floor as `YYYY-MM` and compare year first, then month: a later year is always in window, the boundary month stays in ("before March 2024" keeps `2024-03` and drops `2024-02` or earlier even for matching offers/ranges), and undated rows drop. Drop with reasons: hearsay or unnamed/undated surveys; retention, acquisition, or sign-on awards lacking a base split; contractor/hourly rates (not annualized without hours and benefits parity); equity-heavy or cash-heavy mixes (early options vs late RSUs); unsplit OTE or total comp; and foreign currency lacking an FX rate. Convert to annual local base strictly from stated splits (total minus bonus downwards; monthly times 12 upwards), stating operands and direction. Test foreign teams solely in local currency against local records.

## Step 3: Four-Dimension Comparability Screening

Score remaining records across four dimensions (`M` match, `P` partial near-miss, `X` exclude):
- **Geography:** Same metro or anchored remote = `M`; unanchored remote or national = `P`; any other named city without a bridge = `X` (dropped, not partial).
- **Stage:** Seed (zero), Series A (one), B (two), C (three), D (four), E/later private (five), public (six). Zero steps = `M`; `+/-1` step = `P` (remains partial when geo, scope, and type match); `2+` steps, public-vs-private, or unknown = `X` (dropped, not partial).
- **Role scope:** Matching function and level (routine variants, slash equivalents, scope-mapped titles) = `M`; neighboring specialty at same level = `P`; different level or unrelated function = `X`.
- **Signal type:** Accepted FTE base offers or posted FTE base ranges (mandated or voluntary) in band currency = `M`; non-FTE or unbridged currency = `X`.

Outcome: `0X, 0P` survives as full; `0X, 1P` serves as partial directional context (earlier stages typically pay less, later more; note opposite leans); `2+P` (such as remote plus one stage off) or any `X` drops.

## Step 4: Deferral, Anchoring, Verdicts, and Confidence

Check deferral before computing any gap: defer when zero full comparables survive or no band exists, or when zero full offers and one full posted range `[min, max]` survive beside an adjacent-stage partial accepted offer (not a partial range) landing inside `[min, max]` more than 5.0% from its midpoint (`|partial_offer - range_mid| / range_mid > 5.0%`), since clearing pay deep in one tail of a wide posting makes its midpoint unreliable. Within 5.0% there is no conflict (do not defer); a surviving peer-stage offer settles the market directly; a lower-stage partial offer below the range floor reflects an earlier round's scale rather than contradicting the peer midpoint.

Otherwise anchor strictly on surviving full external offers whenever any survive (one stands alone; two take mean; three+ take median), keeping ranges and own hires out; use the mean of full range midpoints only with zero full offers. Keep partials and own hires outside anchors and external funnels. Compute unrounded `Band gap (%) = (band midpoint - anchor) / anchor` to two decimals (divide by `anchor`, not `band midpoint`). Measure corroborating range gaps against band midpoint, not against offers.

Assign verdicts on the unrounded two-decimal gap: (1) deeper than `-4.85%` (e.g., `-4.96%`) calls Lagging and above `+4.85%` calls Above-market directly; (2) inside 4.00% to 4.85%, small samples need corroboration -- with own accepted hires, Lagging applies if `own_mean > band_mid` and `(own_mean - band_mid)/own_mean >= 1.50%` (mirror Above-market), else Competitive; with zero own hires, Lagging applies only if a non-conflicting partial accepted offer (not a posted range) sits above midpoint (below for Above-market), else Competitive; (3) inside 4.00% calls Competitive. Keep declined offers out of own mean (pay-cited declines corroborate lag; candidate percentages are hearsay). Flag anchors outside band bounds and link lagging calls to P1/P2 openings.

Confidence reflects full external comparables alone (partials and own hires do not lift tiers): **High** = two+ full offers, or one offer paired with a full range that either yields the same verdict word (e.g., both Lagging even if >5% apart) or sits within 5.0% of the offer; **Medium** = one offer with zero full ranges (even when own hires exist), one offer with a range giving a different verdict word and >5.0% apart, or two+ agreeing full ranges (posted-range cap); **Low** = one full range alone; **Deferred** = deferred above.

## Step 5: Briefing Craft and Caveats

Keep export IDs and bracketed threshold strings on the working sheet only. In the briefing, identify signals naturally, describe borderline margins plainly ("4% to 5% borderline band"), and show worked arithmetic in the table. Include a pay-basis block strictly for basis or currency items (keeping stale drops inside family rows), always include deferred-verdicts and signal-caveats sections, ground disclosure caveats strictly in posting notes (mandated wide spans vs voluntary upward bias), and close with one sentence rebutting the highest-dollar dropped figure with its exact stage difference.

## Working Order

Start every request with a single `read_reference` call; layouts and worked samples live in the references, so draft neither reply from this overview.

- **Out-of-scope or roster-only request:** Call `read_reference` on `references/scope-redirect.md` alone before writing any text; after it returns, deliver only the standalone redirect opening directly with `# ` and the company name.
- **Benchmark with classified external records (three turns):**
  1. Call `read_reference` on `references/audit-sheet.md` alone.
  2. Complete the entire working sheet first, close with `"Audit sheet settled; preparing the executive briefing next."`, and call `read_reference` on `references/briefing-guide.md` in that turn.
  3. After it returns, deliver only the standalone briefing (no working sheet, export IDs, or leading `---`), opening directly with `# ` and the company name, keeping every verified call.
