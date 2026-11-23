---
name: deal-gatecheck
description: Runs every retrieved signal on an acquisition target through the same five gates — name, origin, term, record, fix — and files each into a tier with a count line and three narrative paragraphs. No go/no-go.
---

# Five gates per row

Every retrieved signal runs the same gates in order. A row that fails a gate is never re-tested on it; its tier falls out of where it lands after all five.

## Gate 0 — what the buyer staked

Run once for the whole pool. Read the stage — pre-LOI: owed before the letter; post-LOI: before signing; pre-close: before completion — and the thesis, the asset, contract base, licence, person or margin the price pays for (never a condition; what the conditions protect). Take each walk-away (W1, W2…) and price condition (P1, P2…) in the input's own wording and pair it with the record that would show a breach — enforcement findings for a violation term, lien filings for unencumbered-assets, the challenge docket for an active-challenge term. A price written as a multiple of a figure is a condition on that figure. Work a share of a named count once, into the anchor; a threshold whose base the pool lacks is not measurable — name the record supplying it. Note what the scope says was never searched — only that counts as unsearched; a news-and-company sweep never opens a court's, regulator's or registrar's database. If no walk-away is stated, none exists; with no stated conditions, only a live adverse claim on the thesis asset on an independent primary record reaches the top tier.

## Gate 1 — who is named?

One of three answers, and it binds the row:

- **The deal's own.** The target's exact entity, or a party the pool ties to it — its certifier, lender, named customer, opponent in a filed case, or the person a condition turns on. A credential stands on its issuer: an issuer losing standing puts the credential's condition in doubt even when nothing names the target.
- **A near-match.** A name a letter, suffix or legal form off, or marked "(sic)". The row passes no later gate — deeper-diligence, one action (the identity pull), however grave its matter.
- **Nobody.** No named party connects to the deal — a sector trend, an unnamed operator in the same geography. Noise, action none. Never ask whether the unnamed party might be the target, even when the event is the one a stated condition guards against.

## Gate 2 — who first produced the fact?

Count origins, never outlets. Two articles on one release are one origin; an article quoting another adds nothing. Every channel the target owns — release, site, deck, spokesperson, denial — is one origin, the target; a denial is still the target speaking and never lowers the row it answers. Independent origins each had their own access: a docket, a regulator's register or notice, a registrar, a counterparty's filed accounts, an adverse party's pleading; a lender naming the borrower in its own reporting counts even with no terms given.

Labels follow the count, never the topic: **Primary record** (the decisive document itself) · **Corroborated** (two or more independent origins, one outside the target) · **Reported** (one non-primary origin, or the target's own word) · **Unverified** (anonymous, "sources familiar") · **Gap** (an absence signal — earns a row and a tier).

**Convergence.** Press, the target's release and an independent party telling one fact establish it though no single origin holds the decisive record — the rows share one tier. If the fact is one a stated condition treats as a breach or puts at risk, all climb to must-address, marked "read with row N". If it is a fact the deal rests on, confirmed for the better — a won contract, a granted designation — they confirm at monitor. Convergence shares a tier; it does not always climb.

## Gate 3 — which stated term does it touch?

Bears on a W or P term → go on. Bears on the thesis only → deeper-diligence or monitor. Bears on nothing → noise.

Absence-worded terms — "unencumbered", "no liens", "no active challenge", "no sanctions" — hold only while nothing attributed exists. Financing raised for vehicles, plant, vessels or equipment is ordinarily secured on it; a without-prejudice dismissal leaves a challenge able to return.

A figure from a primary record stands as filed; retest it only when the pool shows it was struck on a different quantity than the condition names — a one-off receipt in a revenue base the condition calls "contracted revenue" — leaving it untested even when the number clears.

## Gate 4 — is the deciding record in hand?

- In hand and clean → the term is answered as of that date: monitor.
- Never searched and it is the record the term turns on → the term is untested: must-address; the search is the action. One search for two terms splits lettered — 4a, 4b.
- Never searched and a different kind of record (an inspection archive where the term turns on current registration status; a warning-letter database where the term turns on an operational permit) → deeper-diligence — adjacent, not decisive.
- Searched-empty → clears that sweep and its date only; never must-address.
- Papers only the parties hold — contracts, client status, renewal data, revenue by customer — no register exists; the row asks for the papers: deeper-diligence.

A scope-named register with no numbered signal has no row — it goes in the evidence-gap paragraph.

## Gate 5 — what closes it before the next step?

**must-address** — passed Gate 1 as the deal's own; corroborated or one primary record; decisive for a stated term, weighed for magnitude, probability, reversibility; settled before the next step. Plus three routes:

- **Unsearched decisive register** from Gate 4.
- **Thin report of the process under way.** Names the target's exact entity or the person a condition is about; the process producing the stated breach is already running — an inspection, a review that includes the target, a notice being drafted, talks toward departure; no record answers it. Label stays honest; a denial does not lower it. A near-match or a nobody never takes this route.
- **Converging voices on an adverse fact.** Press, target admission and independent confirmation establishing one fact a stated condition puts at risk; all rows climb, each marked "read with row N".

**deeper-diligence** — attributed, bears on a condition or the thesis, fails one gate, one verification settles it: the target's own word on the value driver without independent confirmation; a register searched-clean to re-pull before the step; a certificate whose issuer another row puts in doubt — the finding rides the issuer's row; a claim ended with prejudice on staked ground — obtain the order and terms; a claim ended without prejudice on a stated condition — paused, able to return; a register of the wrong record kind; an unsearched register that informs but doesn't decide; a departure in the function a condition or the thesis runs through, even anonymous; papers only the parties hold; every unresolved near-match.

**monitor** — attributed, nothing stated at risk, or the fact confirmed on an independent record: a counterparty's own filing confirming a contract; a clean register entry answering a stated condition as of its date; a bare denial; a counsel retention; an orderly appointment with successor named. Each gets a light action.

**noise** — nobody in the deal named, or nothing staked. Action: none, one-line reason.

**Never must-address:** a near-match; papers only the parties hold; a nobody-row; a searched-empty return; a register entry in hand showing the condition met; a claim ended with prejudice; a departure no condition names; a positive confirmation however strong. A pool can end with no must-address row; say so.

## Sideways

A register result with entries under different names or statuses splits lettered — 3a, 3b, 3c — the next signal keeps its number. Rows establishing one fact share one tier, marked "read with row N"; never merge, never renumber.

Audit: every numbered signal has a row; every must-address names its route; count equals signals plus splits; the tier cell holds only the tier name.

## The written answer

Call `read_reference` on `references/worked-cases.md` before writing. Take the form; take no facts.

Open `## ` immediately:
1. **Heading** — target name, stage, "deal-risk gate review"
2. **Deal anchor** — stage and step; Thesis; each W/P with its deciding record and worked figures; Not searched; Conditions: met / at risk / untested / untouched / none stated
3. **Table** — `# | Signal | Attribution | Origins and label | Condition | Tier | Required action` — one row per numbered signal in input order; absences in place; splits lettered; none added or renumbered. Signal cell: source and date. Attribution: party and tie — "Not named" forces noise, "Near match" forces deeper-diligence. Origins: the origin (not outlets), count and label. Action: role, verb, exact record or party, step it clears — unique per row.
4. **Cross-signal check** — rows that confirm, contradict, pause or revive
5. **Count** — read down the Tier column: each tier's row numbers and counts, then total rows with splits noted
6. **Three paragraphs of two to four sentences**: Must-address picture; Elevation rationale; Most important evidence gap

Reply under 7,000 characters.
