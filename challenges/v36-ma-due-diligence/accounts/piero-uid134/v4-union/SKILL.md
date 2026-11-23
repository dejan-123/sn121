---
name: signal-tier-protocol
description: Tiers retrieved signals on an acquisition target into an evidence-graded table and a short read.
---

# Tiering signals on an acquisition target

You run the public-records sweep and return a table tiering every signal, a count line, and a short read on each condition's standing. Work six passes in order.

## Pass 0 — Anchor the deal context

Before any signal is read, tag:

- **Thesis dependency** — the fact the value rests on.
- **W1, W2...** — each walk-away threshold, quoted with its number and unit.
- **P1, P2...** — each price condition, plus implied ones: a multiple of a figure assumes that figure real; value resting in one asset assumes that asset real — each as the event that breaches it.
- **Stage deadline** — pre-LOI: before the LOI; post-LOI: before signing; pre-close: before completion. Test 4 reads against it.
- **Coverage gaps** — every register the input says was NOT searched; a gap that would decide a stated condition is also named in the must-address paragraph as untested, with the search as its action.

Write "none stated" where the input gives no walk-away or price term; never promote the thesis into a condition or invent a threshold.

## Pass 1 — Attribution comes first

Ask only: whose fact is this? Naming the target satisfies attribution even via an anonymous source — weakness lowers the label, not the attribution.

- **Attributed** — names the target's exact entity, or a party the pool ties to the target (its lender, certifier, counterparty, suit opponent, stated subsidiary).
- **Noise** — names nobody in the deal. Topical overlap is why the sweep returned it, not a fact about the target — never wonder whether the unnamed subject might be the target. Tier: noise; action: none, with a one-line reason.
- **Unresolved near-match** — the name differs (a letter off, another suffix, differently-named affiliate) even when the story fits or the outlet marks "(sic)". Only a register entry marries two names. Tier: deeper-diligence; action: confirm the legal entity via <register>; every other judgment waits.

Split a signal carrying two subjects or provenances (part filing, part hearsay) into lettered rows: same number, a/b, tiered independently.

## Pass 2 — Count independent origins, not links

Count origins by independent access, not URL, outlet or headline:

- N outlets quoting one release, spokesperson, or email = 1 origin; an outlet citing another adds 0; a same-article remark rides on that article.
- The target's website, releases, deck and blog together = 1 origin ("the target"), never independent of claims about itself.
- Independent origins had their own access: a docket, a regulator's notice or register, a registrar, a counterparty's filed accounts or earnings call.

The count alone sets the label:

- **corroborated** — 2+ independent origins, at least one outside the target.
- **single-source** — 1 origin; the cell says whether it is primary and binding (docket, regulator's notice, statutory filing, charging doc, counterparty filing) or not (press, newsletter, post, target on itself).
- **unverified** — nothing traceable: anonymous posts, "sources familiar," unsourced claims.
- **absence** — no origin at all: a never-searched register row.

Then triage silence. Kinds are not interchangeable:

- **Searched and empty** — a register inside scope returned nothing; it clears that register as of the date searched, nothing beyond. Where the input does not say either way, treat an absence line this way.
- **Never searched** — the input says it was not searched or it lies outside scope; public registers only (dockets, regulators and enforcement databases, registrars, certification registries, patent and financing-statement records). It proves nothing; if it would decide a stated condition, pass 3 elevates it. A register the scope names but no numbered signal reports gets no row — it goes in the evidence-gap paragraph.
- **Not a register** — "no signals found" on internal facts (client status, churn, renewal data, payroll): deeper-diligence asking the parties for the papers, never the never-searched exception.

## Pass 3 — Tier the row

**must-address** is rare and earned. All four must hold:

1. Attributed under pass 1;
2. Evidence is corroborated, or a single primary-and-binding record;
3. It bears on a stated W/P or the thesis — weighing magnitude, probability (shown occurring, not merely possible), and reversibility;
4. It must be settled before the next step at this stage — and a condition still open to one ordinary verification stays deeper-diligence even at signing.

A grave topic failing any test stays deeper-diligence. Read events for what they are: a sector review has sanctioned no one; a complaint is not an ordered recall; a warning sits below enforcement. A dismissal "without prejudice" or live licence talks leaves a dispute able to return: where a stated condition turns on it → must-address until the docket shows it ended for good; elsewhere deeper-diligence. "With prejudice" ends it.

**Conditions written as an absence** — "unencumbered," "no liens," "no sanctions," "no active challenge" — are met only while nothing exists: once attributed evidence shows the thing, the condition is at risk. Financing raised for vehicles, plant or equipment is ordinarily secured on what it bought.

**Three elevations override thin evidence:**

- A thin report naming the target itself, spelled exactly, that would by itself meet a stated W or breach a stated P if true → must-address however thin: label keeps its honest origin count, action names who verifies and how.
- A never-searched public register that would decide a stated condition → that condition is untested → the absence row is must-address, its action is the search. When one gap decides two stated conditions, the row splits lettered, one must-address per condition, each with the search as its action.
- A compound cluster: several individually thin signals that together establish one fact against one stated condition → elevate as a cluster, named against that condition in the bears-on cell.

Nothing else overrides the evidence tests — a named report that would not itself decide a stated condition stays deeper-diligence, its urgency carried in the action.

**Lower tiers:** deeper-diligence — bears on the thesis or a condition but misses a test, settled by one verification: the target's unconfirmed word on a fact the value rests on; a searched-clean register that speaks only for its date (action: re-verify before signing); a certificate whose issuer another row undermines (read with that row); a claim ended on ground the deal stakes. Monitor — about the target, touches nothing staked, or already confirmed by an independent record: light action. Noise — none, with reason.

## Pass 4 — Work the numbers and the register math

Compute each threshold once, on the base it is written on — fleet share by unit count, margin over the book it earns on, multi-year totals divided by their term — and show the figure against the threshold. Set the target's own asset list against the register: units listed vs live under its exact name; where they disagree, the register governs. A condition contradicted in kind but unmeasured is untested — the row says what would supply the count.

## Pass 5 — Read the pool sideways before locking tiers

One pass where rows judge rows: a certifier losing accreditation hollows its certificate; a register can contradict the deck; the target's live register entry outranks a class scare; a complaint and a later order are one dispute at two moments. Rows that change each other merge into one finding (lettered under the lower number); the check line reports each move and why.

## Pass 6 — Audit, then write the reply

Before writing, audit the draft: every must-address passes all four tests or names its elevation; every dramatic deeper-diligence row names the test it failed; every numbered signal has a row and a tier before any paragraph is written; every action assignable. A mixed pool is when the passes run slowest — never tier by the loudest topic. Then open with `## `, no preamble:

1. **Heading** — target name, deal stage, and "deal-risk classification".
2. **Anchor** — labeled lines, one per item: "Thesis dependency:"; each stated condition tagged "W1 (walk-away):" / "P1 (price):"; "Not searched:" naming every register the input left unsearched; then "Conditions:" scoring each stated one in a word — holding, at risk, untested, untouched. "None stated" where silent. The tier column takes only the four tiers — "untested" is a condition's state, not a tier.
3. **Table** — one row per numbered signal, input order preserved, absence signals in place, splits lettered. Columns: signal | attribution | origins + label | bears on | tier | required action.
   - Each action is assignable as written: a role, a verb, the exact record or party, and the step it clears — unique per row; no two share one. Noise rows say "none — <reason>".
4. **Cross-signal check line** — which rows moved in pass 5 and why.
5. **Count line** — `<rows> rows from <signals> signals`, naming any split; then each tier with its row numbers and count; then the arithmetic showing the four counts sum to the row total.
6. **Three short paragraphs** — (a) the must-address picture, ending on the questions needing answers before the next step; (b) the elevation rationale — the closest row, the test it failed, why any dramatic finding was held lower; (c) the most important evidence gap and the record that would close it.

Never offer a go/no-go call or numeric risk scores. Never invent a fact: where the input is silent, say so.

`references/worked-reply.md` holds three invented pools answered in full — one elevated, one quiet, one deliberately mixed. Call `read_reference` for it before writing; write the reply in that shape.
