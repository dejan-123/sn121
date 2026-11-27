# Comparability screen: the cases the short rules do not settle

A point is comparable only if it would price the same job, for the same kind of employer, in the same labour market, on the same pay basis, recently enough to still be true. Classification upstream tags the obvious fields (title, metro, stage, date, signal type). The failures it tends to miss live in the notes column and in the figure itself, so read both before letting a point in.

## Pay basis: what the number actually measures

Ask of every figure: is this annual base salary for one full-time employee? If not, either convert it with information the input gives you, or set it aside.

| What the figure is | Convert? | How, or why not |
|---|---|---|
| Total cash with the bonus amount stated | Yes | base = total minus the stated bonus |
| Total cash including a stated percentage bonus | Yes | base = total / (1 + bonus %) |
| OTE with a stated base/variable split | Yes | base = OTE x base share, applied to each end of a range |
| OTE with no split | No | splits run anywhere from 50/50 to 80/20, so any guess decides the verdict |
| Total comp "including equity" or "including a grant" with no breakdown | No | the base inside it is unknowable |
| Acquisition retention or stay grant | No | one-time, deal-driven money; it prices keeping a person through a transaction, not hiring for the role |
| Sign-on or relocation cash | Strip it | if separated, drop the one-time part and keep base; if bundled, set the point aside |
| Contractor hourly or day rate | No | carries benefits, employer taxes, overhead and unbilled time; multiplying by 2,080 hours overstates an FTE salary and the gap swings wildly |
| Equity-heavy early-stage offer (low base, large options) | Base only, with care | base is depressed by design; it can still compare to a same-stage band, never to a later-stage one |
| Public-company package with liquid RSUs | No for private bands | base and equity are set on a different logic; liquid stock changes what base has to do |
| Monthly figure | Only if the input says how many payments a year | some countries pay 13 or 14 salaries; "x 12" can understate by up to 17% |
| Package quoted as cost-to-company (common in India) | No unless broken down | includes employer retirement contributions and allowances |
| Net (after-tax) salary quote | No | gross cannot be recovered without the tax facts |
| Part-time salary | Yes if FTE fraction is stated | full-time equivalent = salary / FTE fraction |
| Union or public scale step | Rarely | a scale point is a rule, not a market clearing price |

When you convert, write the step once where the reader can check it, and check direction: removing a bonus makes the number smaller; turning a part-time salary into FTE makes it larger. A conversion that moves the wrong way is a material error.

## Currency

Compare in the band's currency. Convert only with a rate the input supplies, and state the rate as "X of currency A per 1 of currency B" before using it, so the units cancel visibly (A per B times B gives A; A divided by A-per-B gives B). Even with a rate, a figure from another country prices another labour market; currency conversion fixes the unit, not the comparability. Without a rate, keep each currency separate and never print a converted number.

## Geography

- Same metro, or the metro the company anchors remote pay to: comparable.
- Another metro, all else matching: partial at best, set aside and counted, unless the input supplies a geographic differential. Do not apply cost-of-labour indices from memory; that is a figure not in the input.
- National or remote ranges: these blend high- and low-cost markets. They compare only to roles the company itself pays on a national basis. Companies that anchor remote roles to a metro tier have already answered the geography question, so a national range is out.
- Mixed or unstated policy (the input says some roles are remote with no metro anchor but not which): a national range is partial for those seats, set aside and counted; name the missing role-level split as a gap and never assume an anchor.

## Stage and employer type

Funding stage proxies cash runway, equity value and pay philosophy. Seed and Series A companies trade base for options; later stages pay more cash; public companies pay with liquid stock. One stage apart can mean a 10% to 20% base difference in either direction, which is the size of the gaps you are trying to call. So only same-stage points set a verdict. Off-stage points may appear in one clause as context ("a Series D range for comparison sits higher"), never in the market reference.

Also watch employer type inside the same stage: a fintech with a trading desk, a hospital system, and a consulting firm price the same title differently. If the notes flag an industry mismatch the stage label hides, treat it like a stage mismatch.

## Level and scope

Titles drift: "Senior" at a 40-person startup can be a mid-level role elsewhere; "Lead" may or may not manage people. Use the scope or level note when the input gives one; a level-mapped match with a different title is comparable. Without a note, a title one rung away (associate vs senior, senior vs staff, manager vs senior manager, director vs VP) is partial: set aside and counted, never an anchor. A people-manager title against an individual-contributor band is dropped, since the job itself differs.

## Source reliability, strongest to weakest

1. Accepted offers recorded by a data feed or the company itself.
2. Posted ranges from a named employer, dated.
3. Survey medians with a named publisher, a date and a method.
4. Declined offers (useful as a floor signal, see tiers-and-verdicts).
5. Recruiter verbal figures, candidate claims, forum posts, unnamed surveys: hearsay. Keep them out of the numbers; one clause of colour at most.

## Window and age

Apply the stated window literally and count what it removes. The rule counts back from the retrieval date to a named month ("before May 2031 is out"). A month-only date in that named month may fall before the cut-off day, so it cannot be shown inside: out, with that reason. Compare each point's year and month one by one: the named month and earlier are out, later months are in. When every month qualifies, the window removes nothing, however the rule is worded. Undated points are out even if they look plausible. Do not age old data forward with an assumed market movement rate; if the input supplies one, apply it and show the step.

## Duplicates and near-duplicates

The same job posting can appear twice (re-posted, or scraped from two boards). Two identical ranges from the same employer and month count once. Two offers from the same requisition are two data points only if they are different hires.

Write each classification straight into the evidence screen that opens the memo, one line per point; there is no separate listing pass before it.
