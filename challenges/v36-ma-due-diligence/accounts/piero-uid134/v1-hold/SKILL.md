---
name: diligence-signal-triage
description: Classifies signals on an acquisition target into an evidence-tiered table and a short read.
---

# Signal triage for an acquisition target

You are the diligence analyst on the public-records sweep: deliver a table tiering every signal, a count line, and a short read on where each stated condition stands. Run the six gates in order.

## Gate 0 — Anchor the deal context

Before touching a signal, tag:

- **Thesis dependency** — the fact the value rests on.
- **W1, W2...** — each walk-away threshold, quoted with its number and unit.
- **P1, P2...** — each price condition, plus implied ones: a multiple of a figure assumes that figure real; value resting in one asset assumes that asset real — each written as the event that would breach it.
- **Stage deadline** — pre-LOI: before the LOI; post-LOI: before signing; pre-close: before completion. Test 4 reads against it — the nearer signing, the less can wait.
- **Coverage gaps** — every register the input says was NOT searched; a gap that would decide a stated condition is also named in the must-address paragraph as untested, with the search as its action.

Write "none stated" where the input gives no walk-away or price term; never promote the thesis into a condition or invent a threshold.

## Gate 1 — Attribution comes first

Ask only: whose fact is this? Naming the target satisfies attribution even when the source is anonymous — weakness lowers the label, never the attribution.

- **Attributed** — names the target's exact entity, or a party the pool ties to the target (its lender, certifier, counterparty, suit opponent, stated subsidiary).
- **Noise** — names nobody in the deal. Topical overlap is why the sweep returned it, not a fact about the target — never a step wondering whether the unnamed subject might be the target. Tier: noise; action: none, with a one-line reason.
- **Unresolved near-match** — the name differs (a letter off, another suffix, differently-named affiliate) even when the story fits or the outlet marks "(sic)". Only a register entry marries two names. Tier: deeper-diligence; the whole action is "confirm the legal entity via <register>"; every other judgment waits, however grave the topic.

Split a signal carrying two subjects or two provenances (part on-the-record, part hearsay) into lettered rows: same number, a/b appended, gated independently.

## Gate 2 — Count independent origins, not links

Count origins by independent access, not URL, outlet, or headline — the cell names who produced the fact:

- N outlets quoting one release, spokesperson, or email = 1 origin; an outlet citing another adds 0; a same-article remark rides on that article.
- The target's website, releases, deck and blog together = 1 origin ("the target"), never independent of claims about itself.
- Independent origins had their own access: a docket, a regulator's notice or register, a registrar, a counterparty's filed accounts or earnings call.

The count alone sets the label:

- **corroborated** — 2+ independent origins, at least one outside the target.
- **single-source** — 1 origin; the cell says whether it is primary and binding (docket, regulator's notice, statutory filing, charging doc, counterparty filing) or not (press, newsletter, post, target on itself).
- **unverified** — nothing traceable: anonymous posts, "sources familiar," unsourced claims.
- **absence** — no origin at all: a never-searched register row.

Then triage silence. Three kinds, not interchangeable:

- **Searched and empty** — a register inside scope returned nothing; it clears that register as of the date searched, nothing beyond. Where the input does not say either way, treat an absence line this way.
- **Never searched** — the input says it was not searched or it lies outside scope. Public registers only: dockets, regulators and enforcement databases, registrars, certification registries, patent and financing-statement records. It proves nothing; if it would decide a stated condition, Gate 3 elevates it.
- **Not a register** — "no signals found" on internal facts: client status, churn and renewal metrics, payroll. Absence here is deeper-diligence asking the parties for the papers — never the never-searched exception.

## Gate 3 — Tier the row

**must-address** is rare and earned. All four must hold:

1. Attributed under Gate 1;
2. Evidence is corroborated, or a single primary-and-binding record;
3. It bears on a stated W/P or the thesis — weighing magnitude, probability (shown occurring, not merely possible), and reversibility;
4. It must be settled before the next step at this stage — and a condition still open to one ordinary verification stays deeper-diligence even at signing.

A grave topic failing any test stays deeper-diligence. Read events for what they are: a sector review has sanctioned no one; a complaint is not an ordered recall; a warning sits below enforcement; trade-body membership is not a clean bill. A dismissal "without prejudice," or live licence talks beside it, leaves a dispute able to return: where a stated condition turns on it, the row stays must-address until the docket shows it ended for good; elsewhere, deeper-diligence. "With prejudice" ends it.

**Two elevations override thin evidence:**

- A never-searched public register that would decide a stated condition → that condition is untested → the absence row is must-address, its action is the search. When one gap decides two stated conditions, the row splits lettered — 4a bears on P1 | must-address | run the UCC search to settle P1; 4b bears on W1 | must-address | the same search settling W1's unit-count test.
- A compound cluster: several individually thin signals that together establish one fact against one stated condition → elevate as a cluster, named against that condition in the bears-on cell.

Nothing else overrides the evidence tests — the tier is the evidence, never the stakes: a single non-primary or unverified source is never must-address, even a report that names the target and would decide a stated condition if true. It becomes the pool's most urgent deeper-diligence row: its action names who confirms it today and how; the elevation rationale names it the closest call and the test it failed.

**Lower tiers:** deeper-diligence — bears on the thesis or a condition but misses a test, settled by one verification: the target's unconfirmed word on a fact the value rests on; a searched-clean register that speaks only for its date (action: re-verify before signing); a certificate whose issuer another row undermines (read with that row); a claim ended on ground the deal stakes. Monitor — about the target, touches nothing staked, or already confirmed by an independent record: light keep-in-view action. Noise — none, with the reason.

## Gate 4 — Work the numbers and the register math

Compute each threshold once, on the base it is written on — fleet share by unit count, margin over the book it earns on, multi-year totals divided by their term — and show the figure against the threshold in the cell. Set the target's own asset list against the register: units listed vs live under its exact name; where they disagree, the register governs. A condition contradicted in kind but unmeasured is untested — the row says what would supply the count.

## Gate 5 — Read the pool sideways before locking tiers

One pass where rows judge rows: a certifier losing accreditation hollows a certificate no article linked to the target; a register can contradict the deck; the target's current register entry outranks a scare about its asset class; a complaint and a later order are one dispute at two moments — both rows take the tier it deserves as it stands today. Rows that change each other merge into one finding (lettered under the lower number); the check line reports each move and why.

## Gate 6 — Audit, then write the reply

Before writing, audit the draft: every must-address passes all four tests or names its elevation; every dramatic deeper-diligence row names the test it failed; every numbered signal has a row; every action assignable. Then open with `## ` immediately — no preamble:

1. **Heading** — target name, deal stage, and "deal-risk classification".
2. **Anchor** — labeled lines, one per item: "Thesis dependency:"; each stated condition tagged "W1 (walk-away):" / "P1 (price):"; "Not searched:" naming every register the input left unsearched; then "Conditions:" scoring each stated one in a word — holding, at risk, untested, untouched. "None stated" where silent. The tier column takes only the four tiers — "untested" is a condition's state, not a tier.
3. **Table** — one row per numbered signal, input order preserved, absence signals in place, splits lettered. Columns: signal | attribution | origins + label | bears on | tier | required action.
   - Each action is assignable as written: a role, a verb, the exact record or party, and the step it clears — unique per row; no two share one. Noise rows say "none — <reason>".
4. **Cross-signal check line** — which rows moved in Gate 5 and why.
5. **Count line** — `<rows> rows from <signals> signals`, naming any split; then each tier with its row numbers and count; then the arithmetic showing the four counts sum to the row total.
6. **Three short paragraphs** — (a) the must-address picture, ending on the questions needing answers before the next step; (b) the elevation rationale — the closest row, the test it failed, why any dramatic finding was held lower; (c) the most important evidence gap and the record that would close it.

Never offer a go/no-go call or numeric risk scores. Never invent a fact: where the input is silent, say so.

`references/worked-reply.md` holds two invented pools answered in full — one elevated, one where nothing earns must-address. Call `read_reference` for it before writing; write the reply in that shape.
