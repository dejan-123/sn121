---
name: compensation-benchmark
description: Turns a classified pay-evidence table and an internal band snapshot into a role-family benchmark, with every point scored for comparability, one annual base, a verdict from the survivors, a confidence tier with its reason, deferrals and pool caveats.
---

# A band is judged by the points that survive comparison, argued before it is filed

Someone will hand the compensation lead the dearest figure in the pool. What answers them is never another number but the reason that one does not price this job here, at this round, this year: a dearer city, a company rounds away, a recruiter's memory, a grant that pays someone to stay. What does price it is an accepted offer, money somebody took (revealed preference), and, more weakly, a posted range, what an employer says it might pay, its top a hope and its width often a law's doing. A list of salaries prices nothing: it shows who stayed, since a band set too low loses people quietly. So every point is scored before the band is looked at, to the last row of the paste; the survivors go on one basis, and only they decide. When none are left, or the one advert left disagrees with the one offer anyone took, the verdict waits, because a verdict on the wrong point costs more than an honest gap. The reply is the document itself, written to the compensation lead about families, never a person; it never mentions this skill or its references.
## What was pasted decides what goes back

A request for one person's pay, for what a role earns in the market, for a band to be drawn or redrawn, or for a pay-equity audit, and any paste that holds a roster but no classified points, gets the redirect note below, titled `# <company>: not a benchmark request`. Everything else, however thin, is a benchmark, titled `# <company>: compensation benchmark`.

## The document

1. The title, then one paragraph opening `**Basis.**`: the window in the input's words, any point on its boundary and each point the working's window line shuts out, by kind and month; each conversion with its operation and direction, or that none was needed; each internal fact whose absence touches a row (a family with no offer line, which roles are remote).
2. A table, one row per role family and level of the snapshot, a deferred family's row included, never per person: Role family (level, open role); Band min / mid / max; Verdict; Evidence funnel (`4 retrieved: 2 survived (an offer, a range); 1 partial (a range, its miss); 1 dropped (why)`, four numbers even where one is 0); What the survivors show (the anchor by kind and figure, the gap as its sum, own hires' figures and their side of the midpoint, each partial's figure and side); Confidence and its reason.
3. `## Deferred verdicts`: one bullet per deferred family, what blocks it and the evidence that would settle it (points, type, place, stage, level, date). Only with no deferred row, one or two sentences opening "None:" naming each row that shows 1 survived and the accepted offer that would firm it.
4. `## Signal caveats`: three bullets on the whole pool, own offers never among them: which families rest on a hire somebody accepted and which on adverts alone, whose middles run high; how many points come from one source; what stale or off-basis points cost which family.
5. `**Why these calls hold.**`: three sentences on the verdicts a quick reading would get wrong, each because of the point that decides it and what was left out, each verdict as its row gives it.

## Every point takes four tests

Each point is tested against one row of the snapshot, the family and level its title names; two levels of one function are two families.

- **Place.** The company's metro, or the metro the input anchors the role to, passes. Another metro is a miss; so is a remote role with no metro declared.
- **Stage.** Count steps on the ladder Seed, A, B, C, D, E, public. None passes; one step is a miss; two or more, a public company, or an unknown stage is out.
- **Role.** The same work at the same level passes, under another title too when its words or a scope note map it; another level is out.
- **Type.** An accepted offer passes; so does a posted range unless the input marks it voluntarily posted, on its row or over the table: written to attract, that is a miss. A recruiter's word, or a survey with no method or date, is hearsay: out, not a miss.

Also out: a date before the window, or none (when points before a month are out, that month itself is in, on the boundary, the one before it is out, even for an accepted offer); and money that is not base salary: a retention or acquisition grant, a contractor or hourly rate, an equity- or cash-heavy package, on-target earnings, total compensation with no split. The one rescue is a split the input states: total less the stated bonus leaves base, written out with its direction. A currency converts only at a rate the input gives; without one, a family paid in it is read in it, and a point in another currency is out.

No miss: the point **survives**. Exactly one miss: **partial**, read for direction, never averaged in and never put above a survivor for being an offer. Two misses, or anything out: **dropped**.

## Two gaps, then the verdict

The outside gap is (midpoint - anchor) / anchor. With one surviving accepted offer the anchor is that offer by itself; with two or more, their mean. A surviving range beside an offer is never averaged with it. Only where no offer survives is the anchor the mean of the surviving ranges' midpoints.

The own gap is the same sum on the mean of the company's own accepted offers (two at one figure are two). Those offers have no ID and enter no anchor, funnel or count. A decline signals that the band is not landing and is no point either; a candidate's percentage is hearsay.

- **Deferred first, before any gap:** no survivor, however its partials agree; or no surviving offer, one surviving range, and an accepted offer among the partials more than 5% from that range's midpoint, even inside its span, own hires or not; within 5% the family goes on to its gaps.
- **Own accepted offers exist:** the outside gap past 3.5% and the own gap past 1.5%, same sign, make the verdict, **Lagging** under a minus, **Above-market** under a plus; otherwise **Competitive**, since a band its own hires accept at the midpoint is not out of the market on one outside figure.
- **None accepted, or the family not listed:** the outside gap alone, past 4.8%, **Lagging** under a minus and **Above-market** under a plus; from 3.5%, also where an accepted offer among the partials sits on the anchor's side of the midpoint; otherwise **Competitive**, because an advertised middle runs high and one offer is one person.

Confidence is read in steps off the surviving points; partials never count.

- Two or more surviving offers: **High**.
- One surviving offer starts at Medium: up to **High** only where a range survives beside it (a partial is no range) and an own accepted offer exists too, down to **Low** where there is neither, else **Medium**.
- No surviving offer: **Low** on one range, **Medium** on two or more, under the posted-range cap; own offers never lift it.
- A deferral above: **Deferred**.

## The working, done before the document

A benchmark is first worked in a message of its own that ends with a read_reference call, where the lead never sees it: a message with no tool call reaches the lead as it stands. First the paste: how many points and their first and last ID; the company's place and round; any note over the table, in its words; the window in the input's own words and its first month in; a window line naming each point dated before it, with its month, or none; the own offers the input lists, family by family, and the families it does not list. Then family by family, in the snapshot's order: one line for each of that family's points, wherever its row stands (ID, its month set against the first month in, place, = or which, round, = or how many steps away, role, type, its posting note (a mandate, voluntary, or, for a range with no note, the note over the table, so "all ranges are voluntarily posted" makes each one voluntary), basis, misses, call), and straight under them the family's line: its funnel counted off the lines above it, the surviving offers and ranges, the deferral check with each partial offer by ID, the outside gap, the own gap or none, each gap set against its threshold as a number, the verdict, and the tier by its steps. The document copies its calls from that working and shows none of it: each point by its kind, place, round, month or figure, never its ID, each gap by its sum, and no figure the input does not hold.

## When the request is something else

Under 220 words, no table, no figure the paste lacks. The title is the first line, with nothing before it; the next opens "This redirects your request:" and says none of it is a role-family benchmark. Then the asks in plain sentences, no list, each with the work it belongs to and where it goes: a market salary lookup, an individual pay decision, a band design, a full analysis that waits for evidence. Then why this paste cannot carry a benchmark, and what to send: outside points with ID, source, type (accepted offers apart from posted ranges), date, role, place, stage, figure and basis; a snapshot by family and level with headcount and band min, midpoint and max, in place of names; recent offers; the data window.

## Before you write

The first message is one read_reference call and nothing else: on `references/cases.md` for a benchmark (two invented cases; take their form and reasoning, never a fact), on `references/note.md` for anything else. Nothing is written before it returns; its last lines say what the next turn is. The document is sent once, from its first character: a line such as "Now I'll produce the benchmark" would land in the lead's document, so never announce it.
