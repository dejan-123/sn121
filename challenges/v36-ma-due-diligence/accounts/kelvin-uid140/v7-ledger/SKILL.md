---
name: condition-ledger-diligence
description: Scores an acquisition's stated terms as a ledger of holding/at-risk/untested lines, then files retrieved signals against it and derives each signal's tier from the ledger.
---

# Score the terms first, file the signals second

Do not sort signals into piles. Keep a ledger of what the buyer said it would pay for or walk from; every signal arrives as evidence for or against a line in that ledger, and its tier falls out of what it does to that line. The reply reports the ledger first, the signals second. Never advise on the deal and never attach a score.

## Step 1 — Open the ledger

Before reading a signal, write one line per thing the deal stakes, in the input's own words and figures:

- **T0** — the thesis dependency: the fact the value rests on. Not a stated condition, but tracked all the same — never promoted into one.
- **W1, W2...** — each walk-away threshold, quoted with its number and unit.
- **P1, P2...** — each price condition, plus implied ones: a multiple of a figure assumes that figure real; value resting in one asset assumes that asset real.
- The stage deadline — pre-LOI: before the LOI; post-LOI: before signing; pre-close: before completion.

Where the input states no walk-away or price term, the ledger holds T0 alone and the anchor says "none stated". Every line begins untested.

## Step 2 — Evidence-sheet the pool, no verdicts yet

For each signal, mark three things and nothing more:

- **Whose fact** — the target's exact entity, or a party the pool ties to it (named lender, certifier, counterparty, stated subsidiary). A named target is attributed even via an anonymous source; the weakness touches the label, not the attribution. A near-match — a letter off, another suffix, a differently-named affiliate, even an outlet's "(sic)" — stays unresolved until a register entry marries the names. Nobody in the deal marked topical: shared product, class or district explains the retrieval, and nobody's row can bear on any ledger line.
- **Origins and label** — count independent access, not URLs: outlets quoting one source are one origin; the target's own channels are one origin that never corroborates itself; independent origins had their own access (docket, regulator's notice or register, counterparty filing). The count sets the label — corroborated (2+, one outside the target), single-source (marked primary-and-binding or not), unverified ("sources familiar"), absence.
- **Which ledger line it touches** — W1, P1, T0, or none. A signal carrying two subjects or provenances splits into lettered rows, evidence-sheeted independently.

## Step 3 — Score the ledger

Evidence moves lines between four states:

- **holding** — corroborated or primary-and-binding evidence shows the condition met as of a date. Searched-and-empty registers support only their date; a register entry that shows the thing (current certificate, filing with no charges) confirms holding as read.
- **at risk** — attributed evidence shows the breaching thing exists or its process is under way. Conditions written as an absence — "unencumbered," "no liens," "no sanctions," "no active challenge" — are met only while nothing exists; financing raised for assets is ordinarily secured on them, and a dismissal without prejudice leaves a challenge able to return. A denial from the target alone does not lift at-risk.
- **untested** — the record that decides the line was never searched, or the evidence contradicts in kind but does not measure. Party-held papers (contracts, client status, churn, payroll) are never a register gap: the line stays open and the row asks for the papers. A register the scope names but no numbered signal reports gets no row — it appears in the gap paragraph.
- **untouched** — nothing bears on the line.

Compute each stated threshold once on the base it is written on — share by unit count, margin over the book it earns on — and set the figure beside the line. Where the target's asset list and the register disagree, the register governs.

## Step 4 — Tiers fall out of the ledger

- **must-address** — the row(s) whose evidence puts a stated line at risk or leaves it untested when that line decides the deal's next step at this stage, weighed for magnitude, probability (shown occurring, not merely possible) and reversibility. This includes a thin report naming the target exactly — a near-match fails the test — that says the breaching process is already under way and no record in the pool answers it (label stays honest, action names who verifies); the never-searched register that decides a stated line, splitting lettered when one gap serves two lines; and a cluster of thin signals that together establish one fact against one line — linked rows take the same tier and say "read with row N".
- **deeper-diligence** — touches a ledger line but the evidence is thin, date-bound, or party-held, settled by one verification: the target's unconfirmed word on what the value rests on; a searched-clean register speaking only for its date (re-verify before signing); a certificate whose issuer another row undermines; a claim ended with prejudice on ground the deal stakes (obtain the order and terms); a register confirming T0 while listed items lapsed or sit under another name (the lapse is a loss taken, the other name an identity question, ask for the item-by-item schedule); a departure, hire or unverified claim touching the very function a line or T0 depends on — even from an anonymous post; every unresolved near-match, whose only action is confirming the legal entity.
- **monitor** — attributed, touches nothing staked, or the line it touches is already confirmed holding by an independent record: a light action. A hire in a function nothing depends on sits here.
- **noise** — names nobody in the deal: none.

**Never must-address:** a near-match name, whatever it is accused of — identity resolves first; papers only the parties hold — even when a condition names that client; a row about nobody — deeper-diligence never holds it either; a departure or hire no stated line turns on. With no stated conditions, only a live adverse claim on T0 on an independent record reaches the top. A grave topic missing a line stays deeper-diligence — a sector review has sanctioned no one, a complaint is not an ordered recall, a warning sits below enforcement.

## Step 5 — Cross-read

Rows judge rows once: a certifier losing accreditation hollows its certificate; a register can contradict the deck; a live register entry outranks a class scare; a complaint and a later order are one dispute at two moments. Rows that change each other merge into one finding, lettered under the lower number.

## Step 6 — Write the reply

Every numbered signal carries a row and a tier before any paragraph — a mixed pool is when the discipline runs slowest. Open with `## ` immediately, no preamble:

1. **Heading** — target name, deal stage, "condition ledger".
2. **The ledger** — first table, one line per term: line | stated term (quoted) | state | what bears on it | the step that settles it.
3. **The signal table** — one row per numbered signal, input order, absences in place, splits lettered: signal | attribution | origins + label | ledger line | tier | required action. Each action assignable — role, verb, exact record or person, step cleared — unique per row; noise rows say "none — <reason>".
4. **Cross-signal check line** — which rows moved and why.
5. **Count line** — `<rows> rows from <signals> signals`, naming any split; each tier with its rows and count; the arithmetic summing to the row total.
6. **Three short paragraphs** — the ledger summary ending on the questions needing answers before the next step; the closest row to the top tier and the test it failed; the key evidence gap and the record that closes it.

No go/no-go call, no numeric scores, no invented fact — where the input is silent, say so.

`references/worked-reply.md` holds two invented deals answered in this shape — one elevated, one quiet. Call `read_reference` before writing; write in that shape.
