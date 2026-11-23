---
name: ic-memo-from-diligence
description: Drafts a five-section investment committee memo from three upstream diligence artifacts (risk classification table, financial narrative, comparables dataset). Teaches how to read statuses and tiers without silently changing them, gate the recommendation on the risk table, derive a valuation range from named comparables with shown arithmetic, and tie every condition to a risk row.
---

# Writing an IC memo from diligence artifacts

The memo rests on three artifacts written by other people. Say where they disagree, reach the verdict the risk table permits, and use nothing from outside them.

## Judgment rules

**1. Status.** A finding is closed only if its status is Resolved and no other artifact shows it still running. Unresolved, In-Progress, blank, a missing column or hedged wording ("substantially resolved") is open. If the narrative or an analyst note shows a Resolved finding is still live (a process under way, a deferral instead of a closure, an undocumented outcome), read it as open, keep the upstream status visible and name the contradicting artifact. A finding's own description of its risk is not a contradiction: with nothing against it elsewhere, Resolved stays closed and is never argued as open; it may carry one confirmatory condition.

**2. Tier.** Never change one. Other label sets map by rank (top Must-Address, bottom Informational, any between Manageable), disclosed as a relabelling. A tier that sits badly with the narrative is flagged: what argues against it and how the verdict would move. The verdict still runs on the tier as given.

**3. Verdict gate, in order.**
1. Any Must-Address finding open: Proceed is unavailable. **Request More Data**, naming what closes each. **Pass** only if the artifacts themselves say the blocker cannot be waived, consented to or cured by anyone; a conditional refusal, an unfiled licence or an unanswered question is curable.
2. Otherwise give each Manageable finding a mitigation: a standard deal mechanism (price deduction, indemnity, escrow, condition to completion, retention plan, funded capex) and who carries it, with an amount only if the finding states one. Then **Proceed**.
3. **Request More Data** instead only if a Manageable finding is too undefined for any mechanism.
A missing or contradicted status never resolves in the deal's favour.

**4. Base.** Start from the reported LTM figure on the comps' metric. Subtract an amount only if the narrative gives it in currency and it is one of three kinds: (a) a one-time project, (b) income that cannot transfer to the buyer, (c) customers that have already cancelled, which are gone and always subtracted. Everything else stays in and is named as kept: revenue that is concentrated, up for renewal, unaudited, or lost only "if" something happens. Never build a base from a percentage split. Keep only seller add-backs tied to a named one-off. No figure is estimated: each is quoted or a shown sum.

**5. Comps.** Every comp gets one row marked In or Out with a one-line reason. First take out transaction prices (an acquired company, a control premium) and comps on a different metric or business model. Then run one outlier test on what is left: growth of the highest-multiple comp minus the highest growth among the others; 10 points or more takes it out.

**6. Range.** EV/Revenue leads; EV/EBITDA cross-checks only if supplied and target EBITDA is positive and clean. For the In comps, list each metric's values in ascending order and take the median (even count: mean of the middle two). The target is "in line" with a median when within 1 percentage point, otherwise above or below; size is "not in the dataset" unless given. Three cases set the range. Case A, margin or growth below and neither above: lowest In multiple to the median. Case B, margin or growth above and neither below: median to the highest In multiple. Case C, both in line or one each way: set aside the lowest and the highest In multiples; the range runs across the remaining ones. Each endpoint is multiple × base to one decimal; the stated range copies them. Asking price ÷ base is its implied multiple, compared separately with the median and with the highest In multiple.

**7. Missing inputs.** Name what is absent and make it a request; never fill the gap. With no risk table or no comparables, still write all five sections; the verdict is Request More Data.

## Output format

First call `read_reference` for `references/worked-memo.md`, an invented deal worked through to a finished memo; take its method and proportions, never its rows, figures or sentences.

Your whole reply is then the memo. Start typing at `# IC Memo:`. Write no "let me work through this", no step list, no status recap and no analysis before the title, and nothing after the last condition bullet: a reply with notes around the memo is a failed memo. Reason silently; the Flags list and section 3 carry the reasoning. Use the currency of the artifacts. Exactly this skeleton, these five headings, this order:

```
# IC Memo: [target name]

## 1. Deal Thesis
[one paragraph, 80-130 words]

## 2. Risk Table
| ID | Finding | Tier | Status | Reads as | Mitigation or flag |
|---|---|---|---|---|---|
| R1 | [15 words or fewer] | [tier] | [upstream status, or "blank"] | [Open or Closed] | [mechanism and owner, no invented amount; or FLAG] |

Flags:
- [row ID, status or tier]: [what the artifacts say against it; nothing was changed]

## 3. Valuation Range
- Base: [reported figure] - [amounts of kind (a), (b) or (c), each named] = [base], or "nothing removed". Still in the business but at risk, so kept in: [what and why, or "none"]
- Multiple: [primary and why; cross-check or why none]

| Comparable | Multiple | Growth | Margin | In or Out | Reason |
|---|---|---|---|---|---|
| [every comp in the dataset, once] | | | | [In | Out] | [one line] |

- Outlier test: [highest-multiple remaining comp] growth [a]% - highest other growth [b]% = [gap] points; [Out | stays In]

| Metric | In values, ascending | Median | Target | Target vs median |
|---|---|---|---|---|
| [primary multiple] | | [even count: (a + b) / 2 = m] | - | - |
| Gross margin | | | | [above | below | in line] |
| Growth | | | | [above | below | in line] |

- Size: [direction, or "not in the dataset"]
- Endpoints: [Case A, B or C and why]; [multiple x base = low]; [multiple x base = high]
- Asking price: [ask / base = implied multiple]; median [m]x: [above | below]; highest In [h]x: [above | below]. Or "not stated"
**Range: [low] to [high] enterprise value**

## 4. Recommendation
**Recommendation: [Proceed | Request More Data | Pass]**
[40-90 words: the rows that decided it; the one change that would move the verdict]

## 5. Conditions and Next Steps
- **R1, [short name]:** [who does what; the answer needed]
```

- Deal Thesis: what the target is and why it is worth owning, in the narrative's figures; the primary risk, which is row R1 of the table; the asking price, and that section 3 tests it. No computed figures here.
- Risk Table: one row per upstream finding, none merged, added or dropped; Must-Address open first, then Must-Address closed, Manageable, Informational. A relabelled tier reads "Must-Address (upstream: [label])". Flags are only for a contradicted status, a blank or hedged status, a questioned tier, a relabelling, or a Must-Address row marked Resolved with no evidence of the resolution anywhere in the artifacts (say so, and that it is accepted as closed subject to its confirmatory condition); at most three; omit the list if none.
- Valuation Range: both tables always; the bullets 170 words at most. Only when rule 6 allows a cross-check, add an EV/EBITDA row to the second table and a "- Cross-check:" bullet (median x EBITDA = value) before the range line.
- Conditions: 3 to 7 bullets, 30 words or fewer each, one row ID per bullet. Proceed: the protection for each Manageable row, naming the mechanism. Request More Data: the document, consent or analysis that closes each open row, who supplies it, what result reopens Proceed. Pass: what would have to change for the deal to return, and what the seller is told.

Before sending, check: the range line equals the endpoint sums; no Proceed beside an open Must-Address row; every comp has one row; every condition cites an existing row ID; no figure is estimated.
