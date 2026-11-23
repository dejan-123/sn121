# Memo worksheet

Do not write the memo yet, and make no tool call until this worksheet is written. Your next message is private working, not the memo: it settles the gate and every figure the memo will quote, in short lines, using only what the artifacts give. Then it ends with the tool call named at the bottom.

## 1. The risk table as given

List every row as `Rn | finding in a few words | tier exactly as printed | status exactly as printed`. Then:

- `tier order:` the table's own severity order, most severe first, in its own words.
- `blocking tier:` the label that says a finding must be cleared before proceeding (Must-Address, Critical, Deal-Breaker, Blocker, High), or `none` when the table uses no such label. Manageable, Moderate, Low, Informational, Monitor and Observation are not blocking whatever their position in the list.
- `blocking rows:` each blocking row with its status, then `all Resolved: yes | no`.
- `open rows:` every row whose status is not the word Resolved, blocking or not. In-Progress, Unresolved, blank, missing, pending and under review are all open.
- `contradictions:` for each row whose status or tier the narrative argues against, one line: the row, its label as given, the narrative sentence against it, and what follows if the label is wrong. The label is never changed here.

## 2. The verdict

- `gate:` read only from the status column as printed. No blocking tier, or all blocking rows Resolved, gives **proceed available**; any blocking row open gives **not proceed**.
- `verdict:` proceed, request more data, or pass. Pass only where an open blocking row is of a kind no document could cure, or the corrected range cannot reach the ask.
- A contradiction from step 1 never moves the gate. Where a contradiction sits on a blocking row, write `conditional:` and the sentence the memo will carry: the verdict rests on that status as given, and the verdict becomes request more data if the document behind it does not exist.

## 3. The base

- `artifact notes:` any sentence appended to an artifact outside its table, quoted. These carry instructions: that no exclusions were flagged, that a multiple column is absent because the comps are pre-profitability, that one comparable's multiple reflects a control premium, or that a breakdown behind a column was not supplied. Follow them, and where one says a breakdown is missing, qualify the comparison that rests on it and name the gap in the conditions.
- `comp metric:` the multiple column the comp set supplies, as printed (EV/revenue, EV/net revenue, EV/EBITDA).
- `headline figure:` the narrative's own figure for that metric.
- `named exclusions from the base:` only an amount the narrative itself names that the comps do not include: a one-time engagement, the gap between gross and net where the comps are net, a grant or subsidised stream against commercial comps, customers already cancelled.
- `run rate stated:` yes or no. Where the narrative gives a figure after a named loss or cancellation as well as the current figure, write both and use the run rate as the base; the other figure is named in the memo but the range is struck on the run rate. Show the subtraction. A recurring or segment percentage is composition, not an exclusion, and leaves the base whole.
- `base:` the figure and one line on why it.
- `EBITDA usable:` yes or no, with the sign and size. Negative or near-zero rules out an EBITDA multiple.

## 4. The comp set

- One line per comparable: `name | multiple | growth | margin | in or out | one-line reason if out`. Every comparable in the artifact gets a line, and the memo later names every one of them.
- Out, for one of three reasons only: a transaction or acquisition multiple among trading comps; a comparable marked NM for the multiple being computed; an outlier by the gap test.
- Where the artifact supplies two multiples, keep two retained sets and two medians, one per multiple. NM is per multiple: a comparable marked NM for EBITDA leaves the EBITDA set and stays in the revenue set. Never let an NM in one column remove a comparable from the other column's median.
- `gap test:` sort the multiples and write them in order. Then for the highest and for the lowest in turn, write both subtractions in full and never the difference alone:
  `gap = [the candidate] - [its nearest neighbour] = [result]`
  `spread = [highest of the others] - [lowest of the others] = [result]`
  Check each subtraction once by adding the result back. Then write the comparison as a sentence before deciding: `gap [result] is greater than | is not greater than spread [result]`. The candidate is an outlier only when the sentence says *is greater than* **and** its growth or margin is the set's highest or lowest; write `outlier: yes | no`. Where the sentence says *is not greater than*, the answer is no and the comparable is retained even when its growth, margin or multiple looks extreme; a near miss is still a miss, and the memo must not exclude a comparable its own figures retain.
- `retained:` the kept multiples in order, then the count.
- `median:` with an odd count, the middle value. With an even count, write the division out: `median = (a + b) / 2 = result`, where a and b are the two middle multiples. Never report the lower middle value as the median. Do the same for the growth and margin medians below.
- Where every comparable is retained, write `retained: all, no exclusions` and say why none qualified.

## 5. The adjustment and the arithmetic

- `retained medians:` after the exclusions, list the retained comparables' growth figures in order and give their median, then the same for gross margin. These medians come from the retained set only, never from the full set.
- `target vs retained medians:` growth (target, retained median, above, below or at), gross margin (target, retained median, above, below or at), scale (target revenue against the retained set). Where the target sits within a point or two of a median, write `at` rather than forcing a direction.
- `drags:` each reason the multiple cannot sit above the median: an unaudited restatement, an add-back that is not genuinely one-time, a projection resting on unsigned business, falling retention, concentration already crystallised.
- `net direction:` up, down or at the median.
- `multiples chosen:` the two multiples and why, positioned against the retained median by the net direction: below it for a downward net, above for upward, bracketing it for neutral. Not the set's highest and lowest.
- `range:` two lines, low multiple first, each written in full as `base x multiple = result`. Check each by dividing the result back by the multiple and confirm the high line gives the larger result; both lines are carried into the memo unchanged.
- `ask:` the seller's price if given, converted to the same multiple on the same base, then inside, above or below the range.

## 6. The thesis risk

- `primary risk:` the row the thesis will name, which must be one of the rows in step 1.
- `conditions:` one line per open row from step 1, in table order, each as `Cn for Rn | owner role | document or action | the step it must clear`. Their character follows the verdict: mitigations and closing conditions for proceed, the documents that would resolve each open blocking row for request more data, what would reopen the file for pass.

When step 6 is written, end that same message by calling read_reference for `references/memo-layout.md`. The memo follows in the next message and quotes these figures unchanged.
