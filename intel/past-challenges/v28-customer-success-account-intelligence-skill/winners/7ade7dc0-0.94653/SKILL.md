---
name: account-signal-triage
description: Reads a pool of news about one customer account against that account's contract and keeps only the events that can change its renewal: through the person who signs, the thing the contract counts, or the conditions around the decision date. Each survivor gets one row with the contract element it reaches and a tier set by when its effect lands; everything else is counted in one line.
---

# Account Signal Triage

## What the job actually is

Someone in Customer Success has pasted a pile of headlines about an account and wants to know which ones to act on. The pile is sorted by how loud each story was. The renewal doesn't care about loudness. It is a decision taken by **a named person**, about **a counted thing**, on **a date**. An event matters only if it reaches one of those three, and it matters urgently only if it reaches it before the decision is taken. So without the contract (what they license, who signs, when) there is nothing to test against. The right answer is then no verdicts at all, just a targeted ask.

Checklists of "risk factors" (funding, layoffs, exec changes, sentiment) fail because every item on them is sometimes decisive and usually irrelevant. So an analyst working from the list ends up escalating whatever was loudest. Test the vector instead of the topic. The same headline, "the CFO resigned", is an emergency at an account whose buyer reports to the CFO a month before renewal, and background noise at an account whose renewal sits with a line-of-business VP next year.

## The three vectors into a contract

**Vector 1: the signer's authority.** The champion or economic buyer, and the reporting line above them. Their departure, a reorganisation of their team, a new boss who controls their budget, or a move of the renewal to procurement all weaken or remove the decision-maker. Their public standing going up counts too: a promotion, a keynote, a post crediting our product in their own name. That is capital they will spend to push the renewal through. It's an expansion signal worth tracking, never an emergency.

**Vector 2: the counted thing (product scope in use).** Every contract counts something: seats, sites, stages, modules, a named team's licences, volumes. Events that change the number or the existence of that unit reach the renewal as arithmetic. A divestiture, closure or layoff in the unit that uses the product removes it. That's a confirmed hit even before anyone counts exactly which seats go, because a smaller team renews fewer seats. An acquisition or new business that will run on the licensed product adds to it. Growth in the counted thing is an **expansion signal**, even when it's confirmed and lands before the gate. Don't relabel it as risk because the quote will need re-sizing. Always check *whose* seats: hiring in a department the contract doesn't serve adds nothing, and a consumer app launched by a B2B account is outside scope. A new tool that replaces a module in use, an acquired company that already runs a rival product, or a new owner that runs a rival across its own business attacks this vector directly. Give the rival its own row, separate from the ownership change.

**Vector 3: the renewal environment.** Budget pressure, a spending freeze, a new owner, a vendor-consolidation mandate, a strategic review or sale of the unit holding the contract, a regulation that creates or removes the work a licensed module does. This vector needs the most specific evidence. "Operational efficiency", "disciplined growth", "cost optimisation" and a new CEO's first-week speech describe the weather. The account's own budget weather still earns a Monitor row, because it shapes how hard the buyer must argue, but it can't carry an Escalate. A statement that names software contracts, vendor rationalisation or this product category names the contract. "Efficiency", "cost discipline", "profitable growth" and "operational excellence" never count as naming the category, even in a new owner's press release.

A regulation earns a row when it creates or changes work that a licensed module does and takes effect before the gate or early in the term being renewed. The customer is choosing its compliance tooling at this renewal, so that's a Monitor expansion signal, even if the rule is still proposed. A proposed rule binds only when its final form takes effect, so judge it by that date. If the final rule is still a year or more away and lands after the gate, it is sector news for now. So is a rule that governs something nothing licensed touches.

An award or ranking is noise unless it names the very capability the account licenses. Recognition for that module reinforces the scope in use (vector 2): an expansion signal at Monitor.

Discard is a verdict too, and the costs are lopsided. A Monitor row costs the reader a glance; a real signal wrongly discarded is invisible until the renewal goes wrong. So discard only what you can rule out. News about the account's own leadership (a new CFO or CEO sits in the budget chain above almost any buyer), the buyer's own team, or a rival product in the account's orbit keeps a Monitor row unless the brief shows it cannot reach this contract.

An event that travels none of these vectors is noise, however big: the account's funding round, a generic company award, a profile in trade press, a competitor's raise, a peer company's fine, an industry-wide rule that touches nothing licensed.

## The contract must be on the table first

The vectors only exist once you know the contract. You need three facts: **product scope** (what they license and what the contract counts), **the champion or economic buyer** (name and role), and **contract shape** (term, pricing unit, renewal or co-term date). If any is missing, give no verdicts at all: no table, no discard line, nothing labelled "provisional". Even a charity golf day can't be called noise until you know nothing we sell runs events. Ask once, in prose that comes from this pool. Say what the brief has and what it lacks. Then, for each missing fact, name the event in their list whose verdict it would decide and how it could flip. That makes each ask a different shape, which is right.

"Provisional" depends on the context, not on the request. If the user asks for a best guess but scope, buyer and contract shape are all present, the verdicts are grounded. Give the normal table and say in one sentence that nothing needed to be provisional. Only when the facts are really missing and the user insists after being asked do you proceed. Then mark every verdict provisional, flag every reasoning cell as resting on an assumed contract, and name the fact that would change it.

## Setting priority: Escalate or Monitor

Measure every fuse from when the entry *takes effect* to the decision date, never from when the article was published.

**Escalate** means somebody should set other work aside this week. It is reserved for renewal-risk entries, and a confirmed risk entry escalates when any one of these holds:

1. **It has already happened** to the count or the signer: a completed sale, closure, layoff in the licensed team, or departure. However far away the date is, the seats or the signer are already gone, and waiting only lets the customer's procurement discover it first.
2. **A rival is already inside**: a named replacement for our product, or a deal that brings a competing product into the customer's operations. Merged teams settle on one tool in their first weeks together, so "timing unclear" is a reason to act, not to wait.
3. **The signer has said it**: their own words, quoted anywhere, say the work our product does is being modernised, replaced or re-tendered, or that they are leaving.
4. **A primary source names our category**: the customer or its owner announces a vendor review, software cuts, our category, or a review or sale of the unit holding the contract. Once the category is named, a missing date is no reason to wait.
5. **It takes effect within 90 days of the decision date**, measured by when it takes effect, not by today's distance from the renewal. A departure effective two months before a renewal that is five months away today is inside the window. So is the signer's own boss leaving then, and so is a change of owner whose deal closes inside those 90 days: the new owner will be the one deciding.

**Monitor** covers every other entry that posted: all expansion signals, however large; risks that take effect after the date or carry no date at all; anything reported only by a weak source; the customer's own budget weather; and ownership or leadership changes where no review, date or category has been named. Each Monitor row says what would raise it.

When several entries escalate, say in one sentence why they are separate hits on separate lines and not one story counted three times. When several entries post to the same line, they are one pressure, and each earns only the priority it would earn alone.

## Sources, duplicates and contradictions

Rank by who is committing to the statement: the company's own release, filing or investor call, then the buyer's own words wherever they are quoted, then named trade press, then anonymous blogs, forums and "sources say". Weak sourcing caps a row at Monitor but does not turn it into noise. A rumour that the signer is leaving still gets its row, with the confirmation that would lift it.

Two items about one underlying event (a rumour and the later announcement; two outlets retelling one deal; a strategic review and the CEO's comment about that same review) are **one** row at the strongest source. The weaker copy is counted in the discard line as redundant, never given a row of its own. And never split one statement into two rows because it was reported twice. Commentary that only predicts what a confirmed event will lead to belongs inside that event's row. The same goes for a mandate and an appointment announced together.

When two credible items contradict each other in the same period (a team posting jobs while the CEO announces a freeze), keep each in its own row. Don't fold one into another event's row. Resolve them by authority: a company-wide instruction from the top binds budget, a team's plan is an intention. Say which one sets the tier, and the losing row says what outranked it. A company-wide policy always reaches the buyer's team; it is never noise for lack of a named team.

When an event is both risk and opportunity (an acquisition that brings headcount *and* a rival tool), the row takes the class that must be acted on first, usually the risk, because a lost renewal kills the expansion too. Name the other class as secondary in the same cell, as `Renewal-risk (secondary: expansion-signal)`. The only class labels are Renewal-risk and Expansion-signal; never invent others. Don't split one event into two rows.

## Getting the figures right

Use only names, numbers and dates that appear in the brief and the pool, and never supply a timeline or a figure yourself. Check every sum and round honestly ("3 of 22 sites, about 14%"). Convert quarters to months (Q1 is January to March, Q2 April to June, Q3 July to September, Q4 October to December) and say whether an entry takes effect before the date, around it or after it. An effect dated only by a quarter that contains the date lands around the renewal; a confirmed cut landing around the renewal still escalates, because the quote being prepared must reflect it. State how far away the renewal is only when the brief itself says so; otherwise write the date. A reasoning cell is good when it would be false if pasted into another customer's triage: "the finance director who approves Ms Ortega's budget leaves six weeks before the 1 March renewal" passes; "leadership change may affect the budget" fails.

## Writing it up

The reader has half a minute and stops reading after about 2,500 characters, so write 1,800 to 2,200 and never pass 2,400. When many entries post, shorten each cell rather than dropping rows: with five or more rows, keep each reasoning cell to about 15 words and each discard reason to a few words. Start with the heading itself, with no preamble and no restating of the brief.

1. `## Triage Table — <Account>`
2. A bold **Read:** sentence: the decision date, which row leads, and what the loudest item in the pool came to.
3. A table of posted entries only, strongest first: **Event** (eight words at most, your paraphrase) | **Vector → element** (the vector and the contract figure, in the brief's words) | **Relevance class** | **Proximity reasoning** (one sentence of at most 25 words, opening "Vector N:") | **Action tier** (Escalate or Monitor). Bounced entries never appear in the table, not even with a dash.
4. One bold line: `**Discarded: N events. Reasons: [reason — why it misses this contract: count; ...].**`
5. `---`, then one or two sentences under a bold label, spoken to the account team: for an Escalate, who does what before when; otherwise why nothing is urgent and what would change that. Add a **Contradiction note** only when two entries conflict.

No churn probabilities, no ranking against other customers, no drafted emails.

## Worked examples

All companies and people below are invented.

### Three vectors struck inside the last quarter

*Brief: Arden Regional Airlines licenses FleetLog maintenance tracking per aircraft, 48 aircraft, annual, renewing 15 January (ten weeks away). Buyer: Kofi Mensah, VP Engineering. Pool of six.*

> ## Triage Table — Arden Regional Airlines
>
> **Read:** Ten weeks to the 15 January renewal, and three separate vectors are hit at once; the analyst's merger speculation adds nothing to them.
>
> | Event | Vector → element | Relevance class | Proximity reasoning | Action tier |
> |---|---|---|---|---|
> | Sale of 12 turboprops to Skyline Cargo, completing 1 December | Scope → 48 licensed aircraft | Renewal-risk | Vector 2: licensed per aircraft, the contract loses 12 of 48 tails (25%) on 1 December, six weeks before the renewal. | Escalate |
> | Mensah announces on LinkedIn he's leaving for a lessor in December | Authority → Mensah, the signer | Renewal-risk | Vector 1: the VP who signs FleetLog's renewal leaves the month before it's due, with no successor named. | Escalate |
> | Company-wide cost review announced on the Q3 call | Environment → 15 January renewal | Renewal-risk | Vector 3: the CFO names "all third-party IT contracts" in a review running through Q1, which covers this renewal's decision. | Escalate |
>
> **Discarded: 3 events. Reasons: [redundant — a trade-press rewrite of the turboprop sale is carried above from Arden's release: 1; speculation — an analyst's merger guess commits nobody and names no vector: 1; competitor news — a rival airline's new vector network doesn't touch Arden's contract: 1].**
>
> ---
>
> **Escalate note:** These are three vectors, not one story: fewer aircraft, no signer, and a review that names our category. The AE should reach Mensah this week to get a named successor and settle the 36-aircraft quote before the review team sees it.

### "Just give me your best guess" with the contract all there

*Brief: Wexford Legal licenses DraftDesk, 60 associate seats, annual, renewing 1 May 2027 (seven months out). Buyer: Priya Nandakumar, Head of Knowledge Management. The user asks for "a provisional read, best guess is fine". Pool of six.*

> ## Triage Table — Wexford Legal
>
> **Read:** Renewal 1 May 2027. The brief carries scope, buyer and dates, so these verdicts are firm rather than provisional; the associate cuts lead.
>
> | Event | Vector → element | Relevance class | Proximity reasoning | Action tier |
> |---|---|---|---|---|
> | Wexford cuts 15 associates in litigation | Scope → 60 associate seats | Renewal-risk | Vector 2: associates are the counted seat, and the cut is done, so 15 of 60 (25%) sit idle before the 1 May renewal. | Escalate |
> | Forum post: Nandakumar interviewing elsewhere | Authority → Nandakumar, the signer | Renewal-risk | Vector 1: losing the signer would stall the May decision, but an anonymous post commits nobody; her own announcement lifts it. | Monitor |
>
> **Discarded: 4 events. Reasons: [firm award — a pro-bono prize moves no seat or signer: 1; rival news — a competing firm's merger is theirs: 1; office move — the new lobby touches nothing licensed: 1; sector commentary — an AI-in-law survey names no Wexford decision: 1].**
>
> ---
>
> **Escalate note:** The CSM should agree the 45-seat quote with Nandakumar before May and confirm she is staying.

### A freeze that outranks the job ads, a story told twice, and a long fuse

*Brief: Halloway Ceramics licenses GlazeLab formulation software, 75 chemist seats, year one of a three-year deal with a co-term check-in in October 2027 (thirteen months out). Buyer: Ines Ferreira, Head of R&D. Pool of seven.*

> ## Triage Table — Halloway Ceramics
>
> **Read:** The October 2027 check-in is thirteen months off, so nothing escalates; the CEO's freeze outranks the R&D job ads, and the takeover appears once, at its source.
>
> | Event | Vector → element | Relevance class | Proximity reasoning | Action tier |
> |---|---|---|---|---|
> | Brenner Holdings completes takeover; release promises "disciplined growth" | Environment → October 2027 check-in | Renewal-risk | Vector 3: a new owner usually reopens inherited spend, but "disciplined growth" names no review, date or software category, and the check-in is 13 months out; a named vendor review would lift it. | Monitor |
> | CEO on the results call: no new hires until mid-2027 | Environment → Ferreira's R&D budget | Renewal-risk | Vector 3: a company-wide freeze stated to investors binds every budget, Ferreira's included, and holds seat growth flat into the October 2027 check-in. | Monitor |
> | 12 formulation-chemist roles posted in Ferreira's lab | Scope → 75 chemist seats | Expansion-signal | Vector 2: filled, they would take the 75 seats to 87 (+16%), but the CEO's freeze outranks a recruiter's postings, so the growth is unconfirmed. | Monitor |
>
> **Discarded: 4 events. Reasons: [redundant — a trade-press piece retelling the Brenner takeover, carried above from Halloway's release: 1; peer news — a rival tile maker's kiln fire affects that company's plants: 1; company award — a design prize moves no signer, seat or date: 1; sector rule — packaging-waste rules touch nothing GlazeLab does: 1].**
>
> ---
>
> **Note on tiers:** Three live rows, none urgent: the check-in is far off, and no event names a review, a date or our category. Brenner naming a vendor review, or Ferreira leaving, would lift the takeover row to Escalate.
>
> **Contradiction note:** The job ads and the freeze can't both be the plan. The CEO's word to investors binds the budget, so the 12 roles stay on the page but unconfirmed; the CSM should ask Ferreira which of them survived the freeze.

### Ledger 7: a freeze outranks the job ads, a story told twice, a long fuse

Brief: Tamar Glassworks licenses MeltLab for 90 chemist seats, year one of a three-year deal, co-term check-in October 2027 (thirteen months out); the Head of R&D signs. Pool: a takeover whose release promises "disciplined growth"; the chief executive's results-call hiring freeze; 12 chemist roles posted in the R&D lab; an unsigned forum post that predicted the takeover a week earlier; a rival's furnace fire.

> ## Triage Table — Tamar Glassworks
>
> **Read:** The October 2027 check-in is thirteen months away; the freeze outranks the job ads, and the takeover posts once, at Tamar's own release.
>
> | Event | Vector → element | Relevance class | Proximity reasoning | Action tier |
> |---|---|---|---|---|
> | Takeover; release promises "disciplined growth" | Calendar → October 2027 check-in | Renewal-risk | Vector 3: new owners often reopen spend, but no review, date or category is named. | Monitor |
> | Chief executive's hiring freeze | Calendar → R&D budget | Renewal-risk | Vector 3: stated to investors, it binds every budget, the Head of R&D's included. | Monitor |
> | 12 chemist roles posted in R&D | Count → 90 chemist seats | Expansion-signal | Vector 2: 90 would become 102, but the chief executive's freeze outranks these postings. | Monitor |
>
> **Discarded: 2 events. Reasons: [redundant — the forum post predicting the takeover, carried by the release: 1; rival's fire — another company's plant: 1].**
>
> ---
>
> **Note:** Nothing is urgent; a named vendor review or the Head of R&D leaving would raise the takeover row.
>
> **Contradiction note:** The postings and the freeze can't both hold; the chief executive's word to investors governs, so ask the Head of R&D which roles survive.

### Ledger 2: the brief has no contract in it

Brief: Oakridge Freight, 1,600 staff; six items; no product, signer or date.

> Oakridge Freight has opened two cross-dock sites and lost its fleet director this month, and either could matter, but only against a contract this brief doesn't give: it names the company, its size and six news items, not what Oakridge licenses, who signs, or when.
>
> - **What Oakridge licenses and how it is billed.** Per site or per driver decides whether the two cross-dock sites add anything to our count.
> - **Who signs.** If it's the departing fleet director, that exit leads; if procurement signs, it may be background.
> - **Term and renewal date.** The sites open in spring; only the date says whether that is before the decision.
>
> Send those three and the fleet director's exit is the first item I'll post.

### The contract is missing

*Brief: Tamsin Foods, a regional food distributor with 1,100 staff, and six events. No product scope, buyer or contract terms.*

> Tamsin Foods is opening two cold-storage depots and has lost its logistics director, but whether either touches our renewal depends on a contract this brief doesn't describe. It gives the company, its size and six events, and nothing about what Tamsin licenses, who signs, or when.
>
> Before I call any of them, including the charity cycle ride that looks like obvious noise, I need:
>
> - **What Tamsin licenses and how it is counted.** Per depot or per user decides whether the two new depots add anything.
> - **Who owns the renewal.** If it is the departing logistics director, that departure is the lead item; if it's finance, it may be background.
> - **Term and renewal date.** The depots open in spring, and only the date tells us if that lands before the decision or after it.
>
> With those three, the logistics director's exit gets a verdict first.

### A new owner, a new CEO, and nothing that sets a date

*Brief: Marlow Fitness Clubs licenses ClassBook, per club, 40 clubs, annual, renewing 1 August 2027 (ten months out). Buyer: Dev Okafor, VP Member Experience. Pool of six.*

> ## Triage Table — Marlow Fitness Clubs
>
> **Read:** Renewal 1 August 2027, ten months out. The buyout is the loudest item, but with no review, date or category named, every live row is Monitor.
>
> | Event | Vector → element | Relevance class | Proximity reasoning | Action tier |
> |---|---|---|---|---|
> | Ashby Partners buys 70%; pledges "sharper returns" | Environment → August 2027 renewal | Renewal-risk | Vector 3: new owners often reopen vendor spend, but "sharper returns" names no review or category, and August is ten months off. | Monitor |
> | Ashby installs a new CEO | Authority → Okafor's reporting line | Renewal-risk | Vector 1: the CEO above Okafor changed; until the new CEO names software or Okafor's remit, it stays Monitor. | Monitor |
> | Marlow opens 8 clubs by spring | Scope → 40 licensed clubs | Expansion-signal | Vector 2: at per-club pricing, 8 more clubs is 20% growth, a conversation to open before August. | Monitor |
>
> **Discarded: 3 events. Reasons: [consumer app — a home-workout app sits outside club licensing: 1; rival news — a competitor's funding is theirs: 1; ranking — a "best gyms" list moves no vector: 1].**
>
> ---
>
> **Note on tiers:** Nothing escalates: nothing has landed on the clubs or the signer, and no owner plan has a date. A named vendor review or Okafor's exit would lift the buyout row.
