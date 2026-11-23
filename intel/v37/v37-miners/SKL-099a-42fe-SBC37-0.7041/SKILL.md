---
name: ic-memo-authoring
description: Drafts an internal investment committee memo from three upstream diligence artifacts (a risk classification table, a financial narrative, a comparables set) in five sections: deal thesis, tiered risk table, defended valuation range, recommendation, and conditions tied one-to-one to named risk rows. Carries the upstream tiers unchanged, gates the recommendation on the state of the blocking tier, and builds the range from the comp set with every inclusion and exclusion named.
---

# Writing the memo the committee can act on

The committee asks what are we buying, what could stop us, what is it worth. The memo answers in that order, and its credibility rests on one discipline: **every sentence traces to one of the three artifacts.** The risk table is the diligence record, the narrative the economics, the comp set the market's price. Nothing enters from anywhere else; where the memo needs a fact the artifacts lack, it says so and asks for it in the conditions. Two failures sink a memo: a recommendation the table does not support, and a range asserted rather than derived.

## The five sections

In this order, with these headings, and nothing before the first one.

1. **Deal thesis**, 100 to 130 words: what the buyer acquires, the supporting economics from the narrative, and **the primary risk, named** — one the risk table carries and the memo's table then shows.
2. **Tiered risk table**: every upstream row, blocking tier first. Columns: finding (shortened, faithful), tier as given, status as given, deal implication in one line, and the condition number carrying it. Flags as short lines beneath.
3. **Valuation range**, 200 to 260 words: the five steps below, with the arithmetic visible.
4. **Recommendation**, 60 to 90 words: pass, request more data, or proceed, in a sentence naming the gate's reason, then what the verdict rests on. It must agree with the table.
5. **Conditions and next steps**: numbered bullets, one per open finding, in table order, each naming its row, with an owner role, the document or action required, and the step it must clear.

No go/no-go language outside the recommendation, no risk scores, no invented precedents. Under about 1,100 words. Write each section about this deal, not from a phrasebook: the thesis opens on the target and the asset bought, each flag names its row, and the recommendation's first sentence names the finding that decides it.

## Status, and the recommendation gate

Only the word **Resolved** resolves a finding. In-Progress means work has started and nothing is cleared. Unresolved, blank, absent, "pending", "under review", or any wording not asserting resolution, is **unresolved**; a missing status column makes every row unresolved. Say which reading you took.

The blocking tier is the one whose label says a finding **must be cleared before the deal proceeds**: Must-Address, Critical, Deal-Breaker, Blocker, High. It is not merely whichever label sits at the top of the table. Labels saying a finding can be managed are not blocking, however high in the list: Manageable, Moderate, Low, Informational, Monitor, Observation. Read the label's meaning, not its position.

**A table with no blocking-class label has no blocking tier**, and then nothing bars a proceed verdict: the gate is satisfied, and the open rows become mitigations. Say so in the recommendation: a committee reading only Manageable findings expects to be told none is a deal-breaker. The three outcomes:

- **Proceed** when there is no blocking tier at all, or every blocking-tier row reads Resolved, **and** every open row carries a named mitigation in the conditions. A proceed verdict standing against an unresolved blocking row is the first error the committee will see.
- **Request more data** when one or more blocking rows are not Resolved and the open questions are answerable from documents: name those documents against each row.
- **Pass** when a blocking row is unresolved and no document could make it acceptable, or when the corrected valuation cannot reach the price the seller wants.

Blocking rows all Resolved with lower rows open means proceed is available, and those rows become mitigations, not reasons to wait.

## Carry the tiers; never re-tier

The memo keeps each finding's tier and status **exactly as the artifact assigned them**, even where the assignment looks wrong: silent re-tiering destroys the diligence record and is penalised. **A flag never moves the gate**: the verdict follows the status as printed, and the contradiction becomes a condition plus one sentence in the recommendation saying the verdict rests on that status and would turn conservative if the document behind it does not exist. Where the narrative contradicts a tier or status, or a finding's substance plainly exceeds its label, add a **flagged observation**: the row, the label it carries, the evidence sitting against it, and the consequence if the label is wrong. The label stays; the flag travels with it. Common cases: a row marked Resolved while the narrative says no documentation exists; a row marked Informational holding the metric the thesis depends on; a status the narrative's author questions.

## The valuation range

Defended, never asserted. Five steps, in order, with the work shown.

**1. Choose the base.** The default base is the figure the comp set measures, taken from the narrative as printed. Change it only where the narrative itself identifies an amount that the comps do not include: a named one-time engagement inside revenue, a gross figure where the comps are struck on net, a grant or subsidised stream with near-zero cost where the comps are commercial operators, or customers already cancelled, where the narrative's own run rate after that loss is the base. Then the base is the remainder, with the subtraction shown, and where the narrative gives both a current figure and a post-loss run rate, the range is struck on the run rate and the other is named. A mix statement is not such an amount: "94% recurring", "83% of revenue is SaaS" or a segment split describes composition, not a one-time item, and the base stays the full figure. Name the base, give its figure, and say in one line why it and not the headline figure.

**2. Choose the multiple.** Use what the comp set supplies and the target can carry. Negative or near-zero EBITDA rules out an EBITDA multiple: say so and use revenue. Where both work, run both and reconcile; a wide divergence is itself a finding, usually about mix or margin.

**3. Name every comparable, in or out,** each exclusion with a one-line reason. Three exclusions, and only these three: a transaction or acquisition multiple sitting among trading comps, including any multiple struck at a past deal; a comparable marked NM for the multiple being computed (NM is per multiple: NM for EBITDA removes it from the EBITDA set only, not the revenue set); and an outlier, by this test — sort the multiples, and a comparable is an outlier when the gap between it and its nearest neighbour is wider than the whole spread of the others **and** its own growth or margin column is the set's highest or lowest. Show the gap and spread as subtractions in the reason. Name every comparable, the retained ones with their multiples. The test decides both ways: where the gap does not exceed the spread the comparable is **retained**, however high its growth or margin, and that figure becomes an adjustment in step 4. Exclude on no other ground: not business model, not "distinct profile", not inconvenience. Keep the others, list their multiples in order, and state the retained median. Never drop a comparable unnamed.

**4. Adjust against the retained medians.** Compute the growth and gross-margin medians of the **retained** comparables only, never the full set, and quote both. Give the target's growth, margin and scale against them with a direction each, writing `at the median` within a point or two: below on margin pulls down, above on growth pulls up. Say which way the net runs. An unaudited restatement, an add-back that is not genuinely one-time, a projection resting on unsigned business, and falling retention are each reasons the multiple cannot sit above the median.

**5. Compute.** The two multiples are positioned by the net direction from step 4, not taken from the ends of the set: a downward net puts both at or below the retained median, an upward net at or above it, and a neutral net brackets it closely. Write both products in full as `base x multiple = result`, low multiple first, and check each by dividing the result back by the multiple; the high line must give the larger result. A range without those two lines is asserted, not derived. Then set it against the seller's ask, if given, converted to the same multiple on the same base, and say whether the ask sits inside, above or below. An add-back the memo rejected never reappears.

## What to take from each artifact

**Risk table:** tier labels and status values exactly as printed, which rows are blocking, and the row count, since every row appears in the memo. **Financial narrative:** the revenue figure and what it measures, growth, gross margin, EBITDA and its sign, the capital position, any seller price, and every sentence qualifying a headline figure: a one-time item, an unaudited restatement, an add-back, a projection resting on unsigned business, a subsidised stream, a customer already gone. **Comp set:** each comparable's multiples, growth, margin and scale, which columns are usable, and **any note appended outside the table**: notes say whether exclusions were flagged, why a column is absent, that a multiple carries a control premium, or that a breakdown is missing. Follow them, and name a missing breakdown as a gap in the conditions.

Call read_reference for `references/memo-worksheet.md` on its own, with no other tool call in the same message, and do what it says first; it names the file to read next and when.
