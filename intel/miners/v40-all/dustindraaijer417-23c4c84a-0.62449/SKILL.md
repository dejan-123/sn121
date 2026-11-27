---
name: family-pay-position
description: Reads a classified pool of outside pay evidence against a company's internal band snapshot and says, role family by role family, whether each band is competitive, lagging or above the market. Every point passes a date, pay-basis and four-way comparability screen before it may count; each family then gets a position call, a funnel of the points that counted, stood partial or fell out, and a confidence tier with its reason. Use when a people or rewards team asks how its bands compare with outside pay.
---

# Role-family pay position

A pasted pool of pay evidence always mixes real market prices with figures that only look like them: a range from another city, a grant paid once to hold someone through a deal, a contractor's day rate, a posting an employer chose to publish to attract applicants. A band call is only as sound as the points allowed to make it, so the screen runs in the open: each call traces back to the points that counted, and each point that did not is counted with its reason.

## 1. Is this a benchmark?

A benchmark needs two inputs: a classified table of outside pay evidence (each row with an ID, type, date, title, location, company stage and figure) and an internal snapshot of bands by role family and level. Look for both before reading any figure. When one is missing, or the ask is other work (what one named person or one offer should pay, a salary lookup with no evidence, building or reshaping bands, a pay-equity review), no call is made and the reply is a scope note (section 7). A roster of named salaries is not a band snapshot: a benchmark speaks for role families, and one person's number is a pay decision. A family with evidence but no band in the snapshot is named as a gap, never given an invented midpoint.

## 2. The frame

Write down the company's stage, headquarters metro and remote-pay policy; the data window as worded, with the first month inside it ("older than 12 months (before March 2030)" keeps March 2030 and later); the retrieval date; each band's currency; any exchange rate the input supplies; and any note printed above the evidence table, since one line there ("ranges were posted voluntarily unless noted") can mark every range below it.

## 3. Screen every point before any call

Take the rows in table order, keep each title exactly as its row gives it, give each its family by that title, and give each a result.

- **Window.** A row with no date, or with a date earlier than the first month in, drops on the window. A row dated in that first month itself stays in.
- **Basis.** Some rows are not a going base rate even though the pool lists them; they drop with the reason named. A retention or acquisition grant is a one-off payment to keep someone through a deal. A contractor's hourly or day rate carries no benefits, payroll tax or paid leave, so it is never annualised into a salary. Sign-on and relocation money, packages heavy in equity, and totals with no split do not price base pay either.
- **Comparability**, four tests, each a match, partial or mismatch:
  - *Geography*: the headquarters metro, or remote pay pinned to that metro's tier, matches. A national or remote figure with no metro is partial when the company itself pays remote staff that way, and a mismatch otherwise. Any other metro or country is a mismatch: city differentials run wider than the 3% line.
  - *Company stage*: count the funding rungs between the two companies (Seed, A, B, C, D, then E and beyond, with public companies above them all). Same rung: match. One rung away: partial. Two or more: mismatch, because cash and equity trade places as companies grow.
  - *Role scope*: the same family and level, or a title the input maps to that level, matches. A neighbouring specialism is partial. A slash title is partial too, even when both names describe one role ("Office Manager / Workplace Manager"): a posting written under two names was priced to draw either kind of candidate, so a slash title is never a full match. Another level fails the test.
  - *Posting type*: offers a candidate accepted match, and so does a posted range on base, whether a disclosure law made it public or its row says nothing about why it was posted. Where the paste flags a range as voluntarily posted, on that row or in a line printed over the whole table, the range is partial: no law required it, the employer published it to draw applicants, and it binds the employer to nothing. A recruiter's spoken figure, or a survey naming no source or method, is a mismatch. A figure on another basis is converted first (section 6).
  All four match: **comparable**. Exactly one partial: **partial**, named by its test. Two partials, or any mismatch: **incomparable**, dropped with the failing tests named.

## 4. Anchor, gap and the call

- **Anchor.** Comparable accepted offers come first: one stands alone, several give their median (the median of two is their average). With no comparable offer, the anchor is the mean of the comparable posted ranges' midpoints, never their tops. Offers and range midpoints never mix in one anchor, and partial points never anchor.
- **Why offers lead.** An accepted offer is revealed preference: a candidate and an employer both agreed to it. A posted range is aspirational: the employer's stated intention, often stretched wide to satisfy a disclosure rule, and set high when the employer chose to publish it. A range can support or question an offer, never outvote it.
- **The company's own recent offers** stay out of the anchor, the funnel and the tier, since judging a band by them would judge it against itself. They are named as pressure: hires landing above the midpoint or near the maximum, declines that cite pay.
- **Gap** = (anchor − band midpoint) ÷ band midpoint, written as one line of arithmetic to two decimals.
- **Call.** A market more than 3% above the midpoint: **lagging**. More than 3% below: **above-market**. From −3.00% to +3.00%, both ends included: **competitive**. A midpoint is meant to buy a fully competent hire, and a 3% shortfall already shows in offers turned down. Within half a point of the line, add "at the edge".
- **Deferred** when no comparable point survives. Partial points never stand in for one: two partials sitting either side of the band are the classic case, and averaging them would invent a market. A deferred family gets no gap.

## 5. Confidence tier, with its reason

Counted from comparable points only:
- **High**: a comparable accepted offer anchors and at least one more comparable point (an offer or a range) stands beside it.
- **Medium**: a lone comparable offer, or two or more comparable ranges and no offer; ranges alone stop at Medium, because an intention is not a price.
- **Low**: a single comparable range.
- **Deferred**: nothing comparable.
Partial points never raise a tier.

## 6. One basis: annual base pay

Write every conversion on its own line with its direction, using only components and rates the input supplies: "E-14: total cash $139,600 less the stated $29,700 bonus = $109,900 base (total to base)". On-target earnings with no stated split cannot be brought to base, so the point drops on basis. A figure in another currency is converted only at a supplied rate; without one it is read only against a band in its own currency.

## 7. The reply

A full benchmark takes three moves, one message each. This page gives the method; the layouts of the notes and of the document live in two references, read in that order.

1. Open `references/screening-notes.md`. It shows the notes for an invented company: every point screened, every family worked.
2. Write the screening notes for this input, every point and every family, as plain text. End that same message by opening `references/benchmark-document.md`, where the document's layout is kept; the document itself waits for the next message.
3. Send the document as the last message, with each call, count, anchor and tier copied from the notes.

A scope note is the whole reply when section 1 stops the work: open `references/scope-notes.md`, then send the note. Its first line is `# Compensation benchmark: <company>, scope note`, and it keeps to 200 words: what arrived and why no call can come from it; each ask the message actually makes gets a numbered line naming the kind of work and its owner; what to send (the two inputs, with their columns) and what comes back, by role family and never by person; a first step toward any deadline named; and, when named salaries were pasted, a line keeping them out of shared copies.

The document or note you finally send starts on the `#` of its title. Following this skill shows in the tables and is never announced: nothing in the reply talks about the skill, the notes or your next move ("Now I will…", "Based on…"), and no horizontal rule appears.
