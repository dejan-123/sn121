---
name: benchmark-equivalence-ledger
description: Decides whether each retrieved market, peer or benchmark figure may sit beside an internal KPI in a board narrative, pricing memo or executive briefing. Marks unit, period, definition and segment from what each source states, separates a different quantity from a different coverage, tiers HIGH/MEDIUM/LOW/REJECT from the marks, and hands off qualifiers, re-retrieval asks and any reversal.
---

# Benchmark equivalence ledger

A figure printed next to an internal KPI tells the board "same quantity, same kind of business, same window". Test that claim per figure, from what each source states, and stop a figure that measures something else from being cited as a peer. Closeness in value, source prestige and the requester's preferred headline are never evidence.

## 1. Anatomy of the internal KPI

Restate the KPI as four anchors, copying its qualifiers ("net", "excluding", "active", "completed", "as of"):
- **U, unit**: what one denominator item is (a visit, an account, a unit of floor area, a worker-day), plus currency and time scale.
- **P, period**: window and concept (fiscal or calendar, snapshot or average, actuals or cohort year).
- **D, definition**: what the numerator includes and excludes, and on which recognition basis (listed, charged, invoiced, collected, earned, adjusted, reported).
- **S, segment**: the business described (line, customer, size, setting, geography).

## 2. Mark every dimension from stated evidence

| Mark | Meaning |
|---|---|
| ✓ | The source states this basis and it equals the anchor. For S, the brief places the company inside the stated cohort. |
| ~ | A caveat that leaves the quantity intact: a fiscal window overlapping yours for a rate, margin or per-day figure (data from an earlier year is ◐, not ~); a checked derivation (annual ÷ 12); a cohort whose composition, universe or sub-line mix is left unstated; a named extra or missing stream on the same recognition basis (pass-through grants or subsidies, an extra expense line). |
| ≈ | **Peer-size caveat**: a cohort of your kind of business that is larger or smaller (however far apart, even when scale moves the metric in a known direction), in another region, or a voluntary or self-selected panel. A qualifier, never a gap. |
| ? | Material silence: the source never states what its numerator counts, or what one unit is, or whether a class of items your KPI excludes (and the brief names) is counted; or the data period is undated, "current" or a run-rate. |
| ◐ | **Scope gap**, same quantity over different coverage, direction knowable: a denominator that also counts idle, paused or out-of-service units (read every note for which units it counts and set the two rules side by side, word for word); capacity instead of enrolled or occupied units; count weighting against balance or value weighting; a company-wide money ratio, same formula, blending other lines with yours inside; data a year or more older than yours. Size, region or panel differences are ≈; area or unit definitions are ✗. |
| ✗ | **Concept gap**, a different quantity: money before deductions against money after them (list, menu, rack, gross charges or billed vs collected or net); adjusted or non-GAAP vs reported; gross written vs net earned premium; another accounting framework, or a cohort or underwriting year vs calendar results; a different unit of work (per visit vs per multi-visit case, per machine-day vs per worker-day, stacked or total area vs productive area); a cohort mixing activities whose typical levels of this metric differ several-fold while you run only one; a population that explicitly excludes your kind of business; a buyer's "cost" or "spend" against a seller's fee; a source warning that its figure is not comparable to your kind of measure; a source labelled listed, gross, adjusted or total area, whatever a note says. |

A separate stream on the same basis is ~, never ✗. A quantified footnote (an adjustment band, a layer count, a staffing ratio) confirms a gap; it never closes it.

**Source type sets the default; explicit words override it.** A structured row or filing confirms what its metadata and notes say, nothing more. Prose (articles, abstracts, summaries, transcripts) confirms whatever it spells out: never downgrade explicit prose. A speaker with a stake (a vendor quoting its customers, a firm selling the remedy, an unnamed manager) confirms nothing it does not define.

## 3. Derive the tier from the marks

Write the four marks first, then the tier:
1. Any ✗ → **REJECT**. A conversion the source offers never rescues it; use it only to show the restated value.
2. Three or four ?, or a stake-holding source that defines nothing → **REJECT**.
3. Any ◐ → **LOW**, whatever else holds.
4. D is ? → **LOW**: without the numerator's basis there is nothing to qualify.
5. Otherwise the figure is **MEDIUM**, even with one ? on U, P or S and any number of ~ or ≈: that unstated detail becomes the qualifier, and MEDIUM can carry the headline with it. A second ? drops it to LOW.
6. **HIGH** only with four ✓ from explicit text, a primary structured source and no caveat; it is rare.

Texture exception: the requester calls a figure texture, its only failure is the unit of capacity it is measured per (✗ on U), the source prints the conversion ratio and the other three hold → **MEDIUM (texture use only)**, REJECT if promoted to the headline.

Most usable benchmark figures land at MEDIUM. LOW is only for a ◐, an open D or two open dimensions; it is never a hedge for a figure you feel unsure about. Intended use never lifts a tier; LOW (directional only) and REJECT never carry a headline.

## 4. Direction, restatement, claim test

- State which way each ✗, ◐ and material ? pushes the figure against yours.
- When a source supplies a factor or band, apply both ends and show the figure on your basis. A per-item value over a denominator k times larger restates to value × k (10 per unit over a base three times yours is 30 on your basis, never 3.3). A note telling you to divide by a count means dividing the denominator, so the per-item figure is multiplied: restated onto a smaller denominator, a figure always comes out larger. Subtract the two numbers before writing "above" or "below".
- Weighting: a balance-weighted rate follows the large items. Where large items perform better, a count-based rate runs above the balance-weighted one for the same book, so a count-based company set beside a balance-weighted peer looks worse than it is. Commit to the direction the company's mix implies.
- Test the intended claim against the best surviving figure: holds, weakens or reverses. If a peer's basis inflates its figure and the company is above it anyway, the company is above like-for-like.
- For the dimension deciding the headline, give the industry's usual practice and typical size, labelled as a convention ("in this industry, X typically runs Y").

## 5. Write the assessment

Your reply starts with the `##` title, no preamble.

1. `## <Company> — <KPI>: Comparability Assessment`, then **Internal reference:** formula, basis, period, value.
2. `### Dimension ledger`: one line per figure in the brief's order: `**Figure X** (source, value; use): U <mark> <2–5 words> · P … · D … · S … → <deciding mark> on <dimension> → **TIER**`.
3. `### Before the table`: one or two short paragraphs: the issue deciding the intended headline or several rows, the industry convention behind it, the direction and any restated arithmetic, and what the best surviving figure says about the company, including any reversal.
4. `### Comparability table`, rows in tier order: Figure | Source (type) | Unit | Period | Definition | Segment | Tier | Why this tier. Each dimension cell starts with its mark and a few words of evidence. **Why this tier** is one sentence naming the deciding dimension and the evidence; it must not fit any other row.
5. `### REJECT — do not cite`: per REJECT, the deciding words quoted, what the gap does to the number, and a **Re-retrieval ask** naming the exact document, table, sub-cohort, basis or line item, or "not rescuable from this source" plus where a defined version lives.
6. `### Handoff notes`: open with one flat sentence giving the verdict on the intended claim with both numbers; then which figure, if any, carries the headline; a paste-ready qualifier for each MEDIUM (source, cohort, basis, period, caveat); a directional-only sentence for each LOW with its bias; texture guidance.

Use only numbers from the brief plus shown arithmetic. Outside the ledger and table, write connected sentences as a finance colleague would, never rule names. Aim for 7,000–9,000 characters; keep table cells to a few words.

## Calibration (invented cases)

- Car-wash operator, revenue per wash. Article: operators with 10–30 sites, calendar 2024, silent on membership washes and tax → U ? · D ? → LOW.
- Regional airline, revenue per seat flown. Industry row: same formula and year, carriers above 50 aircraft, member list unstated → S ? → MEDIUM.
- Marina, revenue per occupied slip. Peer adds fuel-dock sales and divides by every slip it owns → U ◐ · D ~ → LOW.
