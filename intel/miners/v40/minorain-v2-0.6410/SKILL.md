---
name: comp-band-verdicts
description: Takes a classified external pay-evidence table and an internal band snapshot, filters the evidence per role family, and writes a benchmark review that rates each band Competitive, Lagging or Above-market with funnel, gap and confidence, plus deferred verdicts and pool-wide caveats.
---

# Comp band verdicts: survivors only

## Principle

1. The evidence pool is not the market. Most rows measure something else: another city, another stage, an old date, total pay against a base band, a wish against a payment.
2. Verdicts come from comparable survivors, never from the raw pool. Work one role family and level at a time, run every row through the filters, count each exclusion with its reason.
3. No sufficient support, no verdict. Deferral is a result, and so is a low-confidence call that says what it rests on.
4. Use only figures present in the input. No outside market number, exchange rate, bonus split or hours-per-year. Never fill a missing internal band.

## Step 1. Audit the inputs

1. Need both: an external evidence table with each row classified (kind, date, geography, stage, pay basis, figures) and an internal snapshot with band minimum, midpoint, maximum per family and level.
2. Either missing, or the ask is something else (market redesign, "what does the market pay", a roster only): go to the redirect section. Do not build a table.
3. Family with evidence but no band, or a band but no evidence: Deferred, gap named.
4. Record the anchors: company stage, location tier, data window, retrieval date, band pay basis.

## Step 2. Filter every row

Record the first filter a row fails. Order:

1. **Role and level.** Match scope and level, not title wording. A retitled row that the notes map to the same level stays. Same family, other level: out. Each level is its own table row. A title naming the same family and level outright needs no mapping note: it stays.
2. **Geography.** Same metro or cost tier as the anchor. Other city: out. Remote or national range with no metro: out for a metro-anchored band. Anchoring unstated: name the gap.
3. **Company stage.** Same stage: full match. One stage away: partial, context only. Two or more away, or public against private: out.
4. **Date window.** Count from the stated cut-off month. Dated in the cut-off month or later: in. Earlier: out. Undated: out. Count exclusions. Copy each date as printed before comparing, and quote it when a row goes out.
5. **Pay basis.** The band's basis rules. Total pay or on-target earnings counts only if the input states the base; use that base and say so. No split: out. Foreign currency: no conversion unless the input supplies the rate; the verdict stays in band currency.
6. **Kind of evidence.** Out regardless of label: hearsay, hourly contractor rates (never annualise), retention or acquisition grants inside a total, equity-heavy packages. State the reason plainly.

## Step 3. Reference, gap, verdict

1. Accepted offers are revealed preference: what someone was paid. Posted ranges are aspiration: wide and high-leaning. Weight offers over ranges. Read a range at its midpoint, never its top. State which kind the verdict rests on.
2. **Market reference** uses fully matched survivors only. Take the fully matched accepted offers (plain average if several). With none, take the average of fully matched posted midpoints.
3. Partial matches: list as context, mark them, never let them set or move the reference.
4. **Gap** = (band midpoint - market reference) / market reference, as a percent to one decimal.
5. **Verdict:** the tolerance depends on what set the reference. Reference set by one or more fully matched accepted offers: within 3% either way = Competitive, more than 3% below = Lagging, more than 3% above = Above-market. Reference set only by fully matched posted midpoints (no fully matched accepted offer): the same three outcomes at a 6% tolerance, because advertised ranges run above what is actually paid. The verdict cell states which tolerance applied in a few words, for example "offer-based, 3% tolerance".
6. **Enough to call?** A fully matched accepted offer is enough alone. A fully matched posted range needs one more support: a second fully matched row, a partial match in the same family, or the company's own accepted offer for that family. One fully matched posted range with none of these: Deferred. A lone advertised range is one employer's wish, and a stale or two-stage-away row beside it adds nothing.
7. **Only partial matches survive.** One partial: Deferred; say which way it points and stop. Two partials on the same side of the company's stage: Deferred. Two partials that bracket the stage (one a stage below, one a stage above): give a verdict by position, with no gap percent. Band midpoint between their two midpoints: Competitive. Below both midpoints: Lagging. Above both: Above-market. Confidence is Low and the cell says the call rests on a bracketing pair of partial matches.
8. Own offers and declined offers are internal. They may corroborate a direction. They are never external evidence and never enter the reference.

## Step 4. Confidence tier, with the reason

1. **High:** two or more fully matched survivors, at least one an accepted offer.
2. **Medium:** exactly one fully matched accepted offer, alone or with partial context; or two or more fully matched posted ranges plus internal offer corroboration.
3. **Low:** posted ranges only with no offer and no internal support; a sole fully matched posted range that has its one supporting signal; a bracketing pair of partial matches.
4. **Deferred:** a sole fully matched posted range with no support; one partial match, or partials on one side only; no comparable row at all; or no internal band.

Write the one reason that set the tier, for example "single posted range".

## Redirect note

Triggered when the inputs do not qualify. Call read_reference on references/pool-walkthrough.md first, as for every reply, then send the note alone. First line: `# Request Redirect — [company]`, and nothing before it. Then 150-230 words in plain paragraphs: no other headings, no table, no verdict, no market figure, no thanks, no "I cannot". Never name a salary website, survey vendor or other outside source; where the evidence comes from is the requester's choice. Say what was asked and what arrived. Say why nothing follows: a roster holds no external evidence, and a belief that pay is low is a hypothesis. Mark band or level design as a separate job. List what to send: classified evidence rows with kind, date, geography, stage, pay basis and figures, plus band minimum, midpoint, maximum per family and level. Do not repeat named employees or their pay.

## Output format

Call read_reference on references/pool-walkthrough.md once before writing. Do all the working in that same turn, as notes beside the tool call, where the requester never sees it: one line per evidence row with the first filter it fails, then each family's survivors, reference, gap, tolerance and tier. When the reference returns, send one message that is the finished document from its first character, the title line. Never open with "Now I will" or any announcement, and never show the working: no audit section, no row-by-row filter tables, no headings beyond the ones listed here. Copy the calls from the working so the table, the deferred list and the close agree with each other. The reply is the deliverable:

1. Title line: `# Band Position Review — [company]`.
2. One line of anchors: stage, location tier, window cut-off, retrieval date, pay basis.
3. A table, one row per family and level with a verdict. Columns: Role family and level | Evidence funnel | Market reference | Band midpoint | Verdict (gap %) | Confidence: reason. Funnel cell: `N raw -> excluded (row and reason) -> survivors (row and kind)`. Mark partial survivors.
4. `## Deferred verdicts`: each family with no verdict, what is missing, the one row type that would settle it. "None" if empty. A deferred priority role is named in the close.
5. `## Signal caveats`: at most three pool-wide skews, each stated once with its direction, never repeated in table rows. Candidates: posted-heavy pool (reads high), one retrieval source, later-stage tilt, internal offers above midpoints across families. Skip any that does not apply. A row failing two filters gets both named in the funnel (wrong metro, and a currency with no rate supplied). An internal fact the input leaves unstated that decides which rows count (which roles a metro anchor applies to, for one) is named once here with the verdict it could move. The gap uses one of the three slots. Where the input states the fact, or no verdict would move, write nothing.
6. Close: two or three sentences. Lead with priority-role verdicts, then the call a quick reader would get wrong.

Length for a full pool: 450-750 words. No preamble, no restating inputs, no method essay. Do not invent trouble in a clean pool.
