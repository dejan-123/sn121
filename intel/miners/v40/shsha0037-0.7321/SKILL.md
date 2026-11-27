---
name: which-pay-numbers-may-speak
description: An evidence-hearing method for pay bands. Before any verdict, each outside salary figure must earn the right to speak - in date, on an annual-base footing, and alike in city, company round, job and posting - and the hearing is written out on a working sheet. Only admitted figures price a job family; the reply then states, family by family, competitive, lagging, above-market or deferred, with the sum behind the gap, the tally of admitted and refused figures, and how far the call can be trusted. Requests that are not a market question are sent back with a short note.
---

# Which pay numbers may speak

Picture the meeting where the benchmark is read out. Someone quotes the $241,900 they saw in a recruiter's message, someone else a range from a city two time zones away. The memo's job is to have already answered them: that figure was heard and refused, for this reason. So every outside number is put on trial before it is allowed to price anything - its date, its footing, its city, its company's round, its job and the way it was published - and only the admitted ones set a market. The unit of judgement is a job family at a level; a named employee is never the subject.

## What pay evidence can and cannot say

These are the judgements a reader will not make unaided; put the one that decides a family into its sentence, in plain words, where it applies.

- **A roster measures who stayed.** People still on payroll accepted the band; the ones it lost or never landed are missing from it. A salary list therefore looks fine even when the band is low, and a single offer declined over pay says more about the market than the whole list.
- **A posted range is a sales document.** Voluntary ranges are written to attract and tend to sit high; mandated ranges are often stretched to cover several levels, so their midpoint is blunt. An accepted offer is the only point where a buyer and a seller both said yes.
- **Rounds move pay in a known direction.** An earlier-round company usually pays less base and a later one more, so a partial point landing where its round predicts confirms little, while one landing on the wrong side is worth a sentence.
- **Packages price a person, not a job.** Retention grants, buy-outs and sign-on money reflect one person's leverage at one moment; they never set a family's base.
- **Urgency is not evidence.** A board date or a P1 opening changes when the answer is needed, never which points count; a thin family is still Deferred.
- **The company's own offers test, they do not price.** They come from one employer's negotiations, so they confirm or trouble a verdict, and they settle a 3-5% gap; they never become the anchor.

## The first question: is there a market question here?

Decide this before touching any figure. A benchmark needs internal bands by role family and level, and a classified external evidence table. Anything else gets a short note instead of a table:

- a decision about one person's pay (a raise, a counter-offer, whether a named employee is underpaid);
- a going-rate lookup ("what do engineers earn") with no classified evidence;
- band design or adding levels;
- a pay-equity audit;
- a roster of named people and salaries in place of bands.

For a note, call `read_reference` with path `references/reply-layout.md` and follow its note section: what was asked, which part belongs to someone else and to whom, and exactly what to send so the market question can be answered. Your final message is the note alone, starting at `# `: no analysis before it. No table, no market figures, no judgement on any named person's salary. If only part of a request is a benchmark, benchmark that part and say in one line where the rest goes.

## A benchmark takes three moves

1. Call `read_reference` with path `references/working-sheet.md`. Then write the sheet for this input as plain text in your message: every family, every point, every decision below, with its arithmetic.
2. End the sheet with "Sheet settled." and, in the same message, call `read_reference` with path `references/reply-layout.md`.
3. Write the reply as your final message, copying verdicts, counts, anchors and tiers from the sheet. Nothing from the sheet's scratch work appears in it.

## The rules the sheet applies

**Window.** State the first month that counts, as year and month: "before May 2025 is out" makes 2025-05 the first month in, and that month itself counts. A point dated even one month earlier, or undated, is out ("stale"), however good its figure; it still sits in its family's funnel as a drop.

**Basis: annual base, in the band's currency.** Convert only with figures the input gives, writing the sum and its direction: "$119,500 total less the stated $14,000 bonus = $104,700 base (down)". OTE or total comp with no stated split cannot be converted: out ("basis"). Non-taxonomy figures are out and named, even inside the classified pool: contractor or hourly rates (never annualised with an assumed hour count), acquisition or retention packages, sign-on grants, equity-heavy or cash-heavy mixes. A figure in another currency is never converted without a supplied rate: it is out for a band in a different currency. Recruiter hearsay and surveys with no source, method or date are not prices: out ("unverifiable"). Read each row's own Source and Type cells before its figure: a row typed as hearsay, or reported verbally by a recruiter, is out even when it names a base figure, a city and a round that all match.

**Comparability, four tests,** each held against the family's own row (the company's metro and round, unless the input seats that team elsewhere):

- *Place* - holds for the same metro, or remote pay the input pins to that metro; near miss for a remote range with no metro, or another named city.
- *Stage* - count steps on the ladder Seed, A, B, C, D, E, public. Same round holds. One step is a near miss: A-B, B-C, C-D, D-E. Two or more steps are out: A-C, B-D, C-E, A-D, B-E, and any private round against a public company. Write the pair on the sheet ("B vs D: out").
- *Role scope* - same family and level, or a title the input maps to it, holds; one level off, a neighbouring specialty, or a combined title with a slash ("HR Manager / People Ops") is a near miss.
- *Posting type* - an accepted offer holds; a posted range published under a pay-transparency mandate, or silent on why, holds; a range the input marks as voluntarily posted (on its row or in a note over the table) is a near miss, since it is recruiting copy nobody is held to.

No near miss: **fully comparable**. Exactly one: **partial**. Two or more, or any out: **dropped**, with the failing tests named.

**Funnel per family:** retrieved, then fully comparable, partial and dropped, all counted even at zero, each with its IDs and the reason beside every partial and drop. The counts must add up to the points retrieved for that family.

**Anchor.** Accepted offers are revealed price; posted ranges are aspiration. The anchor is the average of fully comparable accepted offers and nothing else; only when no such offer survives is it the average of the midpoints of fully comparable ranges. Offers and range midpoints are never averaged together: a range beside an offer only agrees or disagrees. Partial points never enter it: each gets a clause on its lean (an earlier-stage point usually pays less, a later-stage one more; landing on the unexpected side is worth noting). The company's own offers never enter the anchor either - they test the verdict.

**Gap** = (band midpoint - anchor) / anchor, written out with the anchor's IDs.

**Verdict:**

- within 3% either way: **competitive**;
- beyond 5% below: **lagging**; beyond 5% above: **above-market**;
- between 3% and 5%: the company's own evidence decides. Own accepted offers landing near or above band max, or a decline citing pay, tip it to lagging on the low side; own offers settling inside the band leave it competitive. Say which signal decided, and call the gap close.

**Confidence tier**, with the deciding reason in words:

- **High** - two or more fully comparable accepted offers;
- **Medium** - one fully comparable accepted offer; or, with no offer, two or more fully comparable ranges that agree (the posted-range cap: ranges alone never exceed Medium);
- **Low** - one fully comparable range and no offer;
- **Deferred** - nothing fully comparable survives; or the only survivors are partial points pulling opposite ways; or the internal band, currency or anchor is missing. Name the gap and the exact evidence that would close it (kind, city, round, level, inside the window).

**Before the reply, check the sheet:**

1. A family with zero fully comparable points is **Deferred** - never priced by averaging partials, never "competitive (close)".
2. Every ID you cite exists in the input with the figure you give it.
3. Each family's funnel adds up to its retrieved count, and the pool totals add up across families.
4. Each verdict matches its gap and the 3% / 5% lines.
5. Each tier matches its evidence: High needs two fully comparable accepted offers; a family priced by ranges alone is Medium at most.

**The loudest figure not counted** - the highest or most quotable number that was dropped - gets one line in the reply saying why it does not price this band.

## Writing standard

Use only figures, dates and IDs from the input; show every derived number. The first time the reply cites a point, describe it from its own row beside the ID, so a reader without the table can check it: "a Series C accepted offer in New York, $233,400 base (E-02)"; "a posted range from 2025-09, $163,700-$197,200 (E-12)". Write each family's reasoning from its own points so no two rows read alike. State pool-wide skews once, never per row. A decision-maker should find every verdict in under a minute.
