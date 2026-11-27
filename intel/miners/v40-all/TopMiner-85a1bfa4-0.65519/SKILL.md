---
name: comp-band-benchmark
description: For an HR or compensation lead who has pasted their pay bands and a classified table of outside pay evidence. Weighs which outside points can price each role family and level (same metro, same funding round, same job, an offer or a range not merely volunteered), argues each call in plain prose, and files it with its anchor, gap, evidence funnel and confidence tier, deferring what the evidence cannot settle. Requests about individuals, band design, pay equity or market rates with no evidence are redirected with a scope note whose form is kept in a reference file.
---

# Pricing a band against what the market really paid

When someone challenges a verdict, the answer is never another number; it is the reason a given point does or does not describe this job, in this metro, at a company this far along, this year. So every outside point earns its place before it can price a band, and the report shows how each one did.

Five settled rules carry the whole method:
1. **Only a point with no miss prices a band.** One near miss makes it a partial, read for its lean but never averaged in; two near misses or any outright fail drop it.
2. **Offers outrank ranges.** An accepted offer is what someone was actually paid; a posted range is what an employer chose to advertise. A range the input marks as voluntarily posted is a near miss on posting type, so it never prices a band on its own merits.
3. **The anchor is one kind of evidence.** The mean of the surviving outside offers; only when none survives, the mean of the surviving range midpoints. The company's own offers never enter it.
4. **The line is ±3.0%.** Gap = (band midpoint − anchor) / anchor. Within ±3.0%, both ends included, the band is competitive; below, it lags; above, it is above market. A gap between 2.0% and 4.0% either way is called close.
5. **Trust follows what counted.** Two or more surviving offers: High (Medium if single offers fall on opposite sides of the line). One offer: Medium. Ranges alone: Medium with two, Low with one. Nothing survives: Deferred, with the evidence that would settle it.

## Requests this does not answer

Check this before anything else. If the request is really one of these, build no table: pay for a named person, or whether someone is underpaid; market rates with no classified evidence attached; levels or ranges to be designed; a pay-equity audit. The scope note's form is kept only in `references/redirect.md` and cannot be written from this page, so your first action is a read_reference call for that file, with no more than one short line in that message; your final message is then the note it describes, starting at its heading. A fear that a whole role family is underpaid is different: that is the benchmark question itself, answered in full.

## Working order

A scope note takes one read, `references/redirect.md`, and then the note. A benchmark takes two messages after load_skill, and the sections below are the rules both of them apply.

1. Call read_reference for `references/worksheet.md`, which holds the worksheet form and two worked cases. Your next message is the worksheet itself, every family and every point. When every block and the checks line are written, finish that same message by calling read_reference for `references/final-pass.md`.
2. That file sets out the report. The report is your final message: it carries the worksheet's figures, IDs, dates and verdicts, reads as finished work for the requester, and leaves the worksheet's working out.

## What to take from the input first

Copy the **cutoff month** from the window line itself: "before April 2025" gives 2025-04, so 2025-04 and later stay and 2025-03 goes; never recount it from the retrieval date or the window length. Note each family's **home geography** (the HQ metro, unless the snapshot seats that family elsewhere), the **company stage**, the band **currency** per family, and the company's **own recent offers and declines**. Read the **posting notes**: which ranges the Notes column, or a note above the table, marks as voluntarily posted and which as posted under a pay-transparency mandate. A note above the table covers every range unless that range's own row says otherwise.

Each evidence row belongs to the one family and level its title maps to. A row whose role has no band is dropped as "no internal match". A family with a band but no outside rows is deferred. A missing band is named as a gap, never estimated.

## Points that never price anything

Some figures fail before any marking, and each is dropped with its reason named: a date before the cutoff month; an undated figure, or a survey naming no source or method; hearsay, such as a number a recruiter mentioned; contractor or hourly contract pay, which is never annualised; a retention or acquisition grant, a sign-on package or an equity-heavy mix; OTE or total comp with no base split (read the Notes, since the Type column may look ordinary); and a figure in another currency with no exchange rate given, because a rate is never invented.

## Marking the rest

Every surviving point gets M (match), P (near miss) or F (fail) on four dimensions.

- **Geography.** M: the home metro, or remote pay the input pins to it. P: remote or national with no metro named. F: any other named metro, which is never softened to P.
- **Stage**, counted on the ladder Seed, Series A, B, C, D, E or later, Public. M: the same rung. P: one rung away. F: two or more rungs (B against D is two), Public against private, or unknown.
- **Role scope.** M: the same family and level, an alias of the same job, a qualifier naming the company's own sector, or a title a scope note maps to it. P: one level off, a blended title ("X / Y", "X or Y") whichever name comes first, or a neighbouring specialism. F: another family, or two or more levels away. A scope note on the row always decides.
- **Posting type.** M: an accepted offer; a range posted under a mandate; a range whose row and table notes say nothing of why it was posted. P: a range marked voluntarily posted, on its row or by a note above the table.

The class is read off the marks, never off a feel for the figure. Any F: DROP. No F and two or more P: DROP, so a voluntarily posted range one rung away is gone. No F and exactly one P: PARTIAL. All M: SURVIVES. Offer strength never overrides a mark: an offer one rung off is a partial like any other. Read each partial for its lean: a lower stage or a national figure understates the market; a higher stage or a voluntary range overstates it. Partials that lean opposite ways, with no survivor beside them, are a reason to defer, never an average.

## Basis and the company's own pay

Put every figure on annual base and write each conversion with its direction: "$90,000 total − $10,000 stated bonus = $80,000 base (total → base, falls)". Monthly ×12; hourly only with the annual hours the input states. An annual base figure needs "no conversion". A GBP or EUR band is compared with same-currency evidence only. A range midpoint is (min + max) / 2, and the anchor is never rounded. Before moving on, look again at any gap between −4.0% and −3.0%: it lags (−3.1% lags), and its note calls it close.

The company's own offers and declines are a separate read on where it pays today: offers above the midpoint, or a decline that cites pay, support a lag; offers near it support competitive. They never enter a count, anchor, verdict or tier. Partials never raise a tier either.
