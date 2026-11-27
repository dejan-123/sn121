# Reply layout

## Benchmark reply

Only the reply goes out, never the sheet. It runs 450 to 750 words, about role families only.

- `# <Company>: role-family pay benchmark`, then one paragraph covering:
  - the round, metro and currency the bands are held to;
  - the first month inside the window;
  - which points the window or the basis rules shut out, by ID with the reason;
  - which figures are not prices at all.
- `## <Company> benchmark table`, with these columns:

  | Role family / level | Midpoint | Verdict | Gap, worked | Evidence funnel | Confidence |
  |---|---|---|---|---|---|

  - One row per family, in snapshot order.
  - The gap cell shows its sum with the anchor's IDs.
  - The funnel cell holds the sheet's funnel line: all four counts, each with its IDs and reasons.
  - The confidence cell gives the tier and its deciding reason in a few words.
  - After the table, write one line `Pool:` with the four totals.
- A paragraph or two in prose, from the firmest call to the weakest:
  - what decided each family;
  - the 3-5% decisions and which own signal settled them;
  - each partial point's lean, in a clause;
  - every conversion, with its sum and direction.
- `## Deferred verdicts for <Company>`, always present:
  - For each deferred family: what came close, by ID, and the exact evidence that would settle it.
  - If none were deferred, say so and name the verdict that rests on the least.
- `## Signal caveats on <Company>'s pool`: two to four sentences, stated once.
  - Which families rest on accepted offers (revealed price) and which on posted ranges alone (aspiration).
  - Any voluntary or other-city skew.
  - Last, the loudest figure not counted and why it does not price the band.

Two more rules:

- The first mention of each point describes it from its own row beside the ID (kind, month or round, place, figure), so the ID can be checked without the table.

- Every figure comes from the input or is worked from it in view.
- No advice on individuals and no new band design.

## Example reply: Kilnworth Labs (invented)

# Kilnworth Labs: role-family pay benchmark

Bands are held to a Series C company in Minneapolis, paid in USD on annual base, against evidence dated March 2025 or later. That floor removes X-09, a disclosure-law Account Executive range from 2025-02. Four figures are not prices on this footing: X-05 is a recruiter's word with a retention grant inside it, X-07 is on-target pay with no split, X-13 is an hourly contract rate, and X-16 is in Canadian dollars with no rate given.

## Kilnworth Labs benchmark table

| Role family / level | Midpoint | Verdict | Gap, worked | Evidence funnel | Confidence |
|---|---|---|---|---|---|
| Mobile Engineering / Senior | $165,200 | Lagging | (165,200 - 175,100) / 175,100 = -5.7%; anchor X-01, X-02 | 5 retrieved; 2 full (X-01, X-02); 1 partial (X-03 voluntary); 2 dropped (X-04 place and stage, X-05 hearsay) | High: two accepted offers |
| Account Executive / Senior | $106,100 | Competitive | (106,100 - 108,800) / 108,800 = -2.5%; anchor X-06 | 4 retrieved; 1 full (X-06); 0 partial; 3 dropped (X-07 basis, X-08 slash title and stage, X-09 date) | Medium: one accepted offer |
| Data Annotation Lead / Manager | $96,900 | Deferred | none: nothing fully comparable | 4 retrieved; 0 full; 2 partial (X-10 Series B, X-11 Series D); 2 dropped (X-12 Series E, X-13 contract rate) | Deferred |
| UX Research / Senior | $133,400 | Competitive (close) | (133,400 - 139,000) / 139,000 = -4.0%; anchor X-14, X-15 midpoints | 3 retrieved; 2 full (X-14, X-15); 0 partial; 1 dropped (X-16 currency) | Medium: two agreeing ranges, posted-range cap |

Pool: 16 retrieved, 5 fully comparable, 3 partial, 8 dropped.

**Mobile Engineering.** The firmest call. Two accepted Series C offers in Minneapolis, $172,400 for a Senior Mobile Engineer (X-01, 2025-11) and $177,800 for an iOS Engineer L5 that the input maps to this level (X-02, 2026-02), average $175,100. Kilnworth's own two hires closed at $179,300 and $182,700, at or past the $181,600 max. X-03, a voluntarily posted Minneapolis range with a $175,200 midpoint, is partial and leans the same way.

**Account Executive.** One accepted Series C offer in Minneapolis, $127,400 total less the stated $18,600 bonus = $108,800 base (down) (X-06), puts the band inside 3%. The declined offer at $104,700 is the candidate's own account of their pay; it does not move a gap this small.

**UX Research.** Two Series C ranges agree: a disclosure-law range of $126,200-$151,400 (X-14) and a remote range pinned to the Minneapolis tier, $129,100-$149,300 (X-15). The 4.0% gap falls in the 3-5% zone, and Kilnworth's own accepted offer at $139,600 settled inside the band, so the call stays competitive and close.

## Deferred verdicts for Kilnworth Labs

Data Annotation Lead / Manager: the two nearest points sit one round away on opposite sides, a Series B accepted offer at $91,600 (X-10) below the midpoint and a Series D range with a $114,100 midpoint (X-11) above it. Neither may anchor, and averaging them would hide the split. Settling it needs one accepted Minneapolis offer, or a disclosure-law Minneapolis range, from a Series C company for this level, dated March 2025 or later.

## Signal caveats on Kilnworth Labs's pool

Mobile Engineering and Account Executive rest on accepted offers, revealed price; UX Research rests on posted ranges alone, aspiration, and is capped at Medium. Fourteen of the sixteen points came from one job-data feed, so the pool shares that feed's blind spots. The loudest number in it, X-05's $241,900, is a recruiter's word with a retention grant inside it, and it prices no Mobile band.

## Note for a request that is not a benchmark

Keep it to three short paragraphs under 170 words:

1. The heading `# <Company>: nothing to benchmark yet`.
2. What was asked and what came with it.
3. Which asks belong elsewhere and to whom: band design to whoever owns the pay structure; one person's pay to their manager and HR; a going-rate lookup to a salary survey.
4. What to send so that the market question can be answered: bands by role family and level, with min, midpoint, max, currency and metro; plus a classified external table giving, for each point, its kind (accepted offer or posted range), month, place, company round, level and base pay.

The note contains no table, no bold, no bullets, no market figure, no named person's salary or judgement of it, and no list of what cannot be done. It is the whole final message: nothing is written above its heading.

Example: "# Harlow Ceramics: nothing to benchmark yet". You asked whether studio pay is right for the market and attached a roster of names and salaries; a roster shows what Harlow pays the people who stayed, not what it would take to hire or keep them, so no figure is offered here. Adding a level to the glaze ladder is a structure question for whoever owns your pay design, and decisions on individual salaries stay with managers and HR. Send bands by role family and level, and classified outside evidence for each family, and each family will get a verdict with its evidence and a confidence tier. A deadline sets when that answer is due, not which numbers can count.
