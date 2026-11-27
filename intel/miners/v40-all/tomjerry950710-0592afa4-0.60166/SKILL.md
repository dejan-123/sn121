---
name: pay-band-market-position
description: Reads an internal pay-band snapshot against a classified table of outside salary evidence and returns, per role family, whether the band is competitive, lagging or above-market, which evidence was kept or set aside, and how firm each call is.
---
# Only evidence that is like-for-like and truly salary gets a vote

A market table always looks fuller than it is. Some rows were paid in another labour market, some at a company in a different funding round, some for a bigger or smaller job, some describe money that is not salary, and some are simply too old. The useful answer comes from the few rows left once each one has been questioned, compared on a single annual-base footing with the band. An answer drawn from the whole table can name the right verdict and still be indefensible.

## What this produces, and what it turns away

The product is one note per company. For every role family and level in the snapshot it gives a market position (competitive, lagging, above-market, or deferred), the evidence kept and set aside, and a confidence tier with its reason. It needs two things in the input: a classified outside-evidence table and an internal band snapshot. Some requests look similar but are different work, and they get a redirect, not a table:
- whether one named person should be paid more (an individual pay decision);
- what a job pays in general, with no classified evidence attached (a market lookup);
- designing, adding or removing band levels (band design);
- comparing pay across genders or other groups (a pay-equity audit).
Named people and their salaries never appear in what goes back. The unit is always the role family.

## The order of the reply

The last message is the one that gets read, so it carries only the finished note.
1. Open `references/casebook.md`. It has three invented companies: two with a scratch ledger worked out, and one redirect.
2. For a benchmark, the next message is the scratch ledger for the real input, in the casebook's form: short lines, no prose. That same message ends by opening `references/finished-notes.md`, which shows the notes that were sent for the casebook companies.
3. The note follows, built from the ledger.
For a redirect there is no ledger. The message after the casebook is the redirect itself.

## Question 1: where does the company stand?

Before judging any row, I pin down the company:
- its home metro and cost tier;
- how it hires remote staff: tied to a metro, or national with no metro;
- its funding round;
- the level of each family;
- the evidence window, and the first calendar month inside it.
The window is read by month. If points before June 2026 are out, then 2026-06 is in and 2026-05 is out, even for an offer.

## Question 2: is this row like-for-like?

Each row faces four comparisons with the company. Each gives same, near or far:
- **Labour market.** The same metro or cost tier is same. A national remote figure is same for a company that itself hires remote staff nationally, and near for one that ties roles to a metro. A different tier or country is far, unless the input supplies a differential.
- **Funding round.** The same round is same. One round apart is near. Two or more rounds apart, or a public company against a private one, is far.
- **Job.** The same family at the same level is same. One level apart, or a wider or narrower remit, is near; more is far. A stated level mapping can make a different title the same job; a title on its own proves nothing.
- **Kind of evidence.** An accepted offer shows what a candidate actually took. A posted range shows what an employer says it might pay, and it is often wide, whether or not a law required it. A recruiter's word, or a survey with no method, cannot be checked. A declined offer shows a price someone refused, not a market rate.
A remark in the input that settles one of these overrides the default reading, in either direction. A stated level mapping makes the job the same; a note that the stage is one step off makes the round near. A quantified remark confirms a difference but never bridges it: a stated equity share, award or contractor loading shows that the figure is not base pay. It does not make the figure comparable.
All same: the row is kept. Exactly one near and nothing far: the row is near-match. It may lean, but it never decides. Anything far, or two nears: the row is set aside. Rows that are out of window, undated or uncheckable are also set aside, each with its reason.

## Question 3: is this figure salary at all?

Some figures are a different kind of money and are set aside by name:
- retention or acquisition awards;
- contractor and hourly rates, which are never annualised into an employee pool;
- packages that bundle sign-on or equity;
- equity-heavy or cash-heavy mixes with no base figure;
- on-target earnings with no base share.
Figures that can be brought to annual base are converted in writing: total cash less a stated bonus gives base; a monthly figure times twelve gives annual. Another currency is converted only at a rate the input gives; without one, it stays out. I never supply a rate, a bonus share or an equity value myself.

## Question 4: what does the kept evidence say?

- **The anchor.** If any kept accepted offer exists, the anchor is those offers alone: their median, or the single figure. A kept posting next to an offer is only a cross-check. It is never blended in, and it never adds confidence. With no kept offer, the anchor is the mean of the kept postings' midpoints, and the posting cap applies. Near-match rows never enter the anchor.
- **The gap.** Gap = (anchor − band midpoint) / band midpoint.
  - More than 5% above: lagging.
  - More than 5% below: above-market.
  - Within 2.5% either way: competitive.
  - Between 2.5% and 5%, the pool leans but does not decide. The company's own accepted offers do, if their mean sits more than 2.5% from the midpoint on the same side: then the call follows the lean. Otherwise the band is competitive.
- **Own accepted offers** are the company's past hires. They never count as pool rows and never make a call alone. Apart from settling the middle band, they either support a call or contradict it. A contradiction is stated and costs one confidence tier. A decline that cites pay points toward lagging.

## Question 5: how firm is the call?

- High: two or more kept accepted offers that agree. A posting never stands in as the second.
- Medium: a single kept offer, or two or more kept postings that agree and no offer.
- Low: one kept posting and nothing else.
These steps are applied exactly as written; the tier does not drift up for a persuasive row or down for a vague worry. The reason is always given in a few words.

## Question 6: when is no verdict the right verdict?

Deferral is for gaps that decide the call, not a hedge against a minor doubt: if the kept rows settle the family, it gets its verdict. A family is deferred when nothing comparable is kept, when kept rows point both ways with no offer to break the tie, when only near-matches remain, or when its band is missing. The deferral names what is missing, by row ID. It also names what would settle it: how many points, of which kind, at what round, level and place, and within what dates.

## Question 7: does the evidence back the story the requester tells?

Inputs often carry a framing, such as a manager's belief that a team is underpaid, a priority flag, or a candidate's stated reason for declining. When the kept evidence cuts against that framing, the note says so in one flat sentence, naming the row that decides it. It quotes the input's own words where a remark settled a call (for example, "base only; OTE separate"), and it names the mechanism behind each exclusion: a posted range is an employer's hope while an accepted offer is a price paid; a retention award pays for staying, not for the job; a contract rate carries costs an employee salary does not. Rows that do not exist are never added to fill a family; zero kept rows is a result.

## Shape of the note

- Title: `# <Company>: pay band position by role family`.
- **Scope of evidence**, at most three sentences: the window's first month and any row on its edge or outside it; each conversion with its direction; any internal gap that matters, such as a family with no own-offer line.
- One table, one row per family and level. Columns:
  - verdict;
  - confidence and its reason;
  - band midpoint;
  - anchor, saying whether it is an offer or a posting;
  - gap;
  - evidence, giving the rows kept, near and set aside, each with its ID and reason.
  Under the table, one line totals the rows.
- `## Deferred verdicts`: one or two sentences per deferred family. If none, say so and name any family that rests on a single kept row.
- `## Signal caveats`: two or three points about the whole pool, written once.
- Aim for about 5,000-7,000 characters for a full table, less for a short one. The ledger's working never appears in the note.
- A redirect, titled `# <Company>: what this request needs first`, stays under 200 words. It lists each ask with a number, says what kind of work each is and who owns it, and explains why the material sent cannot answer a claim it carries. It ends with the inputs that would allow a benchmark, and, if a deadline is given, which evidence to gather first. It uses no figures and no names, and it never includes a partial or tentative table.

## Hard limits

- A call never rests on a row that was set aside, or on the raw table.
- Every family shows its kept, near and set-aside rows, and every needed conversion is written out.
- Nothing is reported per person.
- No rate, figure or row is invented.
