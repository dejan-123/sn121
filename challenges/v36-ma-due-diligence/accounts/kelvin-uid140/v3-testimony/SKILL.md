---
name: deal-testimony
description: Reads each public signal on an acquisition target as testimony — whose voice it carries, how many independent voices confirm it, and whether that combined testimony can decide a stated deal condition — then writes a tiered classification with a count line and three narrative paragraphs for the deal team. No go/no-go.
---

# Every row is a voice

A signal pool is a collection of voices from different vantages. Some have direct access to records that decide a deal condition; others echo what a first voice said. The job is to decide — row by row — whose testimony this is, how many independent voices confirm the same fact, and whether that testimony can settle a stated condition before the next step.

## A. Anchor the deal in the buyer's words

**Stage and step.** Pre-LOI: before the letter of intent. Post-LOI: before signing. Pre-close: before completion. Every action is timed to this step.

**Thesis.** The asset, contract base, licence, person or margin the price pays for. Never a condition; what the conditions protect.

**Conditions.** Each walk-away (W1, W2…) from the input's own words, tagged, paired with the record that would show it breached — enforcement findings for a violation term, lien filings for unencumbered-assets, challenge docket for an active-challenge term. Each price condition (P1, P2…) similarly; a price as a multiple of a figure is a condition on that figure. A share of a count in the input is worked to its threshold and added to the anchor. A threshold whose base is not in the pool is not yet measurable; the row says what record supplies it.

**Not searched.** Only what the input names as outside the sweep. A news-and-company sweep never opens a court's, regulator's or registrar's database. If the input states no walk-away, none exists; with no stated conditions, only a live adverse claim on the thesis asset on an independent primary record reaches must-address.

## B. Whose testimony is this?

Attribution settles first. It cannot wait.

**Target** when the signal names the target's exact legal entity, or when the pool ties the named party to the target: its certifier, lender, named customer, opponent in a filed case, or the person a condition turns on. An issuer whose standing is impaired puts the certificate's condition in doubt even when no article names the target.

**Near-match** — a name one letter, suffix or legal form away, or carrying "(sic)" — does not answer attribution. Only a register ties two names. Deeper-diligence, one action only (the identity pull), nothing else decided on it however grave the topic.

**Nobody-in-the-deal** when the signal names no party the pool connects to the target — a sector trend, an unnamed company in the target's class, "an unnamed operator" in the same geography. The shared class explains why the sweep returned it, not what it proves. Noise, action none. No step asks whether the unnamed party might be the target, even when the event is the one a stated condition guards against.

## C. How many independent voices confirm this fact?

An origin is whoever first produced the fact. Count origins, never outlets.

Two articles on one press release are one origin. All the target's channels — release, website, deck, spokesperson, denial — are one origin, the target. A denial is still the target speaking; it never lowers the row it answers. Independent voices each had their own access: a court docket, a regulator's register or notice, a registrar, a counterparty's filed accounts, an adverse party's own pleading. A lender naming a borrower in its own investor reporting is an independent voice even with no terms.

Labels follow the count, never the topic:
- **Primary record** — one origin that is the decisive document itself
- **Corroborated** — two or more independent origins, one outside the target
- **Reported** — one non-primary origin, or the target's own word
- **Unverified** — anonymous, "sources familiar", unverifiable post
- **Gap** — an absence signal; earns a row and a tier

**Three voices, one finding.** When press reports a fact, the target admits it, and an independent party confirms it, three origins have produced one finding established even though no single origin holds the decisive record alone. All three rows climb together to must-address, marked "read with row N", each keeping its own action. The weakest voice in a converging group does not hold the group back.

## D. What does the silence mean?

**Never-searched decisive register.** When it is the record the stated condition turns on, the condition is untested: must-address, the search is the action. One search deciding two conditions splits lettered — 4a, 4b. When the register is a different kind of record from the one the condition turns on (an inspection archive when the condition turns on a current registration status; a warning-letter database when the condition turns on an operational permit), it is deeper-diligence — adjacent, not decisive.

**Searched-nothing-found.** Clears that sweep, that date, nothing else. Never must-address.

**Papers only the parties hold.** Contracts, client status, renewal data, revenue by customer. No register exists for these; the row asks for the papers: deeper-diligence.

A scope-named register with no numbered signal has no row; it goes in the evidence-gap paragraph.

Absence-worded conditions — "unencumbered", "no liens", "no active challenge", "no sanctions" — are met only while nothing attributed exists. Financing raised for vehicles, plant, vessels or equipment is ordinarily secured on what it bought; a without-prejudice dismissal leaves a challenge able to return.

A figure from a primary record stands as filed. Retested only when the pool shows it was struck on a different quantity than the condition names — a one-off receipt inside a revenue base the condition calls "filed revenue" — making the condition untested even when the number clears.

## E. The four tiers

**must-address** — attributed; corroborated or one primary record; decisive for a stated condition, weighing magnitude, probability and reversibility; settled before the next step. Three additional routes:

- **Unsearched decisive register.** The record the condition turns on was not retrieved. The search is the action. One search for two conditions splits lettered.
- **Thin report of the process under way.** Names the target's exact entity or the person a condition is about; describes the breaching process already running; no record answers it; if literally true it would satisfy a stated condition. Label stays honest. The target's denial does not lower it. Near-match or nobody never takes this route.
- **Three voices, one finding.** Press, target admission and independent confirmation establishing one fact; all rows climb; each marked "read with row N".

**deeper-diligence** — attributed, bears on a condition or the thesis, fails one test, one verification settles it: the target's own word on the value driver without independent confirmation; a register searched-clean to be re-pulled before the step; a certificate whose issuer another row puts in doubt — the finding rides the issuer's row; a claim ended with prejudice on ground the deal stakes — obtain the order and terms; a claim ended without prejudice on a stated condition — paused, able to return; a register of the wrong record kind; an unsearched register that informs but doesn't decide; a departure in the function a stated condition or the thesis runs through, even anonymous; papers only the parties hold; every unresolved near-match.

**monitor** — attributed, nothing stated at risk, or the fact confirmed on an independent record: a counterparty's own filed accounts confirming a contract; a clean register entry answering a stated condition as of its date; a bare denial; a counsel retention; an orderly appointment with successor named. Each gets a light action.

**noise** — nobody in the deal named, or nothing staked. Action: none, one-line reason.

**Never must-address:** a near-match; papers only the parties hold; a nobody-row; a searched-empty return; a register entry in hand showing the condition met; a claim ended with prejudice; a departure no condition names. A pool can end with no must-address row; say so.

## F. Reading the pool sideways

A register result with entries under different names or statuses splits lettered — 3a, 3b, 3c — the next signal keeps its number. Rows establishing one fact share one tier, marked "read with row N." Never merge rows; never renumber.

Audit: every numbered signal has a row; every must-address names its route; count equals signals plus splits; tier cell holds only the tier name.

## G. The reply

Call `read_reference` on `references/worked-cases.md` before writing. Take the form; take no facts.

Open `## ` immediately:
1. **Heading** — target name, stage, "deal-risk testimony review"
2. **Deal anchor** — stage and step; Thesis; each W/P with deciding record and worked figures; Not searched; Conditions: met / at risk / untested / untouched / none stated
3. **Table** — `# | Signal | Attribution | Origins and label | Condition | Tier | Required action` — one row per numbered signal in input order; absences in place; splits lettered; no row added or renumbered. Signal cell: source and date. Attribution: party and tie — "Not named" forces noise, "Near match" forces deeper-diligence. Origins: the origin (not outlets), count and label. Action: role, verb, exact record or party, step it clears — unique per row.
4. **Cross-signal check** — rows that confirm, contradict, pause or revive
5. **Count** — read down the Tier column: each tier's row numbers, count in brackets, then total rows with splits noted
6. **Three paragraphs, two to four sentences each**: Must-address picture; Elevation rationale; Most important evidence gap

Keep the reply under 7,000 characters.
