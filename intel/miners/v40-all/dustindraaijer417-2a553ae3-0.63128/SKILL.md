---
name: band-position-benchmark
description: Tells a people team whether each role family's pay band keeps up with the market, from a classified pool of external pay evidence and an internal band snapshot. Every point is screened for date, pay basis and comparability; each family then gets a position call (competitive, lagging, above-market or deferred), a count of the points that survived and fell out, and a confidence tier. Use when a people or rewards team asks how its bands compare with outside pay.
---

# Role-family pay benchmark

A band verdict is only as sound as the points allowed to decide it. Every pasted pool mixes real market prices with figures that only resemble them: a range from another city, a grant paid once to hold someone through a merger, a contractor's hourly rate. This skill sorts the pool in the open, so each verdict traces back to the points that survived and each point that fell out is counted with its reason.

## 1. Scope comes first

Two inputs make a benchmark possible: a classified table of external pay evidence, each row with an ID, type, date, title, location, company stage and figure, and an internal snapshot of bands for each role family and level. Check for both before reading any figure. When one is missing, or the request is different work (what one named person or one offer should pay, a salary lookup with no evidence, designing or reshaping bands, a pay-equity review), no benchmark is drawn and the reply is a scope note (section 7). A roster of named salaries is not a band snapshot: a benchmark speaks for role families, and one person's number is a pay decision. A family that has evidence but no band in the snapshot is named as a gap, never given a made-up midpoint.

## 2. Settle the frame

Note the company's stage, headquarters metro and remote-pay policy; the data window as worded, with the first month inside it ("older than 12 months (before March 2030)" admits March 2030 and later); the retrieval date; each band's currency; and any exchange rate supplied.

## 3. How the survivors decide a verdict

- **Anchor.** Comparable accepted offers come first: one stands alone, several give their median (the median of two is their average). With no comparable offer, the anchor is the mean of the comparable posted ranges' midpoints, never their tops. Offers and range midpoints are never blended, and partial points never anchor.
- **Why offers lead.** An accepted offer is revealed preference: a candidate and an employer both agreed to it. A posted range is aspirational: the employer's stated intention, often widened to meet transparency rules and, when posted voluntarily, published by employers who want to look generous. A range can support or question an offer, never outvote it.
- **The company's own recent offers** stay out of the anchor, the funnel and the tier, since judging the band by them would judge it against itself. They are named as pressure: hires landing near the band maximum, declines that cite pay.
- **Gap** = (anchor − band midpoint) ÷ band midpoint, written as one line of arithmetic to two decimals.
- **Verdict.** A market more than 5% above our midpoint: **lagging**. More than 5% below: **above-market**. From −5.00% to +5.00%, both ends included: **competitive**. Within half a point of the line, add "at the edge".
- **Deferred** when no comparable point survives. Partial points never stand in for one: two partials on either side of the band are the classic case, and averaging them would invent a market. A deferred family gets no gap.

## 4. Confidence tier, with its deciding reason

Counted from comparable points only:
- **High**: a comparable accepted offer anchors and at least one more comparable point (an offer or a range) stands beside it.
- **Medium**: a lone comparable offer, or two or more comparable ranges and no offer; without an offer the tier stops at Medium, because an intention is not a price.
- **Low**: a single comparable range.
- **Deferred**: nothing comparable.

## 5. Screen every point, before any verdict

Take the rows in table order and give each a result.

- **Window.** Undated, or dated before the first month in: dropped (window).
- **Basis.** Some rows are not a going base rate even though the pool lists them; they are dropped with the reason named. A retention or acquisition grant is a one-off payment to keep someone through a deal. A contractor's hourly or day rate carries no benefits, payroll tax or paid leave, so it is never annualised into a salary. Sign-on and relocation money, and packages heavy in equity or quoted as one total with no split, do not price base pay either.
- **Comparability**, on four dimensions, each a match, partial or mismatch:
  - *Geography*: the headquarters metro, or a remote role paid on that metro's tier, matches. An unanchored national or remote figure is partial when the company itself pays remote staff one national rate, and a mismatch otherwise. Any other metro or country is a mismatch however close its costs: city differentials are often wider than the 5% line.
  - *Company stage*: count the rungs between the two companies, where the rounds run Seed, A, B, C, D, E or later, and public last. Same rung: match. One rung away: partial. Two or more: mismatch, because cash and equity trade places as companies grow.
  - *Role scope*: the same family and level, or a title the input maps to that level, matches, and so does a title that sets our role's name beside another name for the same job ("Revenue Accounting Manager / Revenue Recognition Manager"). A neighbouring specialism, or a slash title joining two different jobs, is partial. Another level is a mismatch.
  - *Posting type*: accepted offers match, as do posted ranges quoted on base. A recruiter's spoken figure, or a survey naming no source or method, is a mismatch. A figure on another basis is converted first (section 6).
  Four matches: **comparable**. Exactly one partial: **partial**, named by its dimension. Two partials or any mismatch: **incomparable**, dropped with the failing dimensions named.

## 6. One basis: annual base pay

Write every conversion on its own line with its direction, using only components and rates the input supplies: "E-5: total cash $126,700 less the stated $11,800 bonus = $114,900 base (total to base)". On-target earnings with no stated split cannot be brought to base, so the point drops on basis. A figure in another currency is converted only at a supplied rate; without one it is read only against a band in its own currency.

## 7. The reply

A full benchmark takes three moves, one message each. This page gives the method; the layouts of the notes and of the document live in two references, read in that order.

1. Open `references/screening-notes.md`. It shows the notes for an invented company: every point screened, every family worked.
2. Write the screening notes for this input, every point and every family, as plain text. End that same message by opening `references/benchmark-document.md`, where the document's layout is kept; the document itself waits for the next message.
3. Send the document as the last message, with each verdict, count, anchor and tier copied from the notes.

A scope note is the whole reply when section 1 stops the work: open `references/scope-notes.md`, then send the note. Its first line is `# Compensation benchmark: <company>, scope note`, and it keeps to 200 words: what arrived and why no verdict can come from it; each ask the message actually makes gets a numbered line naming the kind of work and its owner; what to send (the two inputs, with their columns) and what comes back, by role family and never by person; a first step toward any deadline named; and, when named salaries were pasted, a line keeping them out of shared copies.

The document or note you finally send starts on the `#` of its title. Following this skill shows in the tables and is never announced: nothing in the reply talks about the skill, the notes or your next move ("Now I will…", "Based on…"), and no horizontal rule appears.
