---
name: compensation-talent-benchmarking
description: Benchmark role-family compensation using comparable external evidence, explicit normalization, reconciled evidence counts, market verdicts and confidence.
---

# Compensation and talent benchmarking

Benchmark internal role-family compensation against supplied external evidence. Execute G0-G9 in order. Use one canonical ledger as the source of all counts, calculations and conclusions. Never invent missing facts.

## G0 - Scope

Identify requested deliverables first. Redirect individual pay decisions, raw salary lookup, salary-band design and pay-equity audits to appropriate workflows without performing them. For mixed requests, complete only the valid family benchmark and redirect the rest. If wholly out of scope, stop after redirecting.

## G1 - Input contract

Extract target families, internal measures, geography, company stage, role scope, compensation basis and supplied rules for freshness, conversion, comparator and verdict thresholds. Apply explicit rules. Mark missing attributes unknown. Do not infer geography from currency or invent dates, rates, seniority, company attributes or thresholds. Distinguish missing internal data from missing external evidence.

## G2 - Canonical ledger

Inventory all external observations before exclusions. Preserve source IDs, original amounts, range endpoints, currency, period, basis, dates and stated attributes. Store normalized values separately.

Use one record per observation-family membership; count an ID once within each family. Report global unique observations separately from family memberships when sources overlap. Do not guess unresolved family mappings; disclose their effect on coverage.

Each record contains ID, family, original compensation, four dimension assessments, overall class, eligibility, exclusion reason, normalized value and surviving evidence role.

## G3 - Classification and eligibility

Assess geography, company stage, role scope and posting type independently as match, mismatch or unknown, with source-grounded reasons. Unknown is not a match. Apply supplied scoring rules; otherwise explain qualitative classification without inventing numeric scores.

Assign exactly one class: Full (supported alignment), Partial (defensible but limited comparison), or Incomparable (material incompatibility). Missing information must reduce certainty.

Determine eligibility separately. A comparable role may have an unusable compensation basis. Exclude incompatible retention grants, contractor rates, acquisition packages and equity-heavy or cash-heavy mixtures when comparable base compensation cannot be established.

Apply supplied freshness rules. Exclude stale, undated or out-of-window evidence when required freshness cannot be established. Give each dropped record an explicit reason. Keep every excluded observation in the retrieved inventory.

## G4 - Normalization

Normalize eligible compensation to the requested currency, period and basis. Show original values, supplied rates, conversion direction and period factors. Normalize both range endpoints before computing a midpoint when needed.

Do not assume exchange rates, working hours, billable days or missing base components. Check units. If a necessary conversion is unsupported, withhold the normalized value and exclude it from numerical comparison. Unknown is not zero. Retain precision until final display.


**Range arithmetic check.** For every normalized range, including supporting evidence, compute midpoint m = (low + high) / 2. Verify low <= m <= high and 2*m = low + high before reporting. Do not silently substitute a midpoint when the requested method differs.

## G5 - Evidence sets

For each family, construct ID sets from the ledger:

- R: retrieved.
- F, P, I: Full, Partial, Incomparable.
- S, D: survived, dropped.
- M, H: primary, supporting.

Each retrieved record has one classification and one eligibility decision. Each survivor has exactly one evidence role. Incomparable IDs belong to D. Dropped IDs have no surviving evidence role.

Prefer eligible actual offers to posted ranges. Where suitable actual offers exist, use them as primary and relevant posted ranges as supporting evidence. Without suitable offers, defensible posted evidence may be primary, with limited confidence. Explain the role of partial evidence.

Choose evidence roles before calculating. Supporting and dropped IDs must not enter a primary-only comparator. A surviving observation does not guarantee a defensible verdict.

## G6 - Calculation-first

Calculate separately for each family using the supplied comparator method, or explain a defensible method when unspecified.

For a mean:
1. List exact selected primary IDs and normalized values.
2. Count selected IDs to obtain n.
3. Add those values to obtain T.
4. Compute C = T / n only if n is positive.
5. Verify C times n reproduces T within rounding.
6. Verify minimum <= C <= maximum.
7. If a check fails, recompute from the ledger.

Show the selected values, numerator T, denominator n and comparator C. For other specified methods, show their corresponding inputs and calculation; do not substitute a mean.

With comparable internal value B and defensible comparator C:
- Signed gap G = B - C.
- Percentage gap = 100 times G / C if C is nonzero.
- Verify C + G = B.
- Check denominator, units and sign.

Positive gap means internal compensation is higher; negative means lower. Do not round intermediate values unnecessarily. Withhold gaps when either required value is unavailable. Never average incompatible or unresolved conflicting evidence merely to produce a comparator.

## G7 - Verdict and confidence

Base verdicts on surviving comparable evidence, not the raw pool. Apply supplied competitive thresholds and boundary rules. Beyond the applicable tolerance, positive gap indicates Above-market and negative gap indicates Lagging; within tolerance indicates Competitive.

Without a supplied numerical threshold, explain a defensible qualitative judgment without inventing policy. Check verdict direction against the signed gap.

Use Deferred when evidence cannot support a defensible decision. Withhold unsupported comparators and gaps. Missing internal data may prevent a verdict despite a valid external comparator. Unresolved conflicting primary evidence may prevent a comparator despite eligible observations.

Use High, Medium, Low or Deferred confidence with an evidence-specific reason covering relevant comparability, coverage, freshness, consistency and basis. Posted-only evidence cannot justify High confidence in revealed compensation; apply any stricter supplied cap. Distinguish advertised intent from revealed offers.

For every deferred family, identify the blocking issue and evidence needed to resolve it.


**Verdict decision lock.** Internal minus comparator determines direction. When a symmetric percentage tolerance t is supplied and P is valid, P < -t means Lagging; -t <= P <= t means Competitive; P > t means Above-market. Use unrounded P. For other supplied policies follow their exact boundaries. Without a supplied tolerance do not invent one. Deferral takes precedence over this mapping.

## G8 - Reconciliation

Derive counts from ID sets, not prose. Check disjoint membership and all three equations per family:

Retrieved = Full + Partial + Incomparable.
Retrieved = Survived + Dropped.
Survived = Primary + Supporting.

Verify I is a subset of D. Check exclusion reasons, surviving roles and comparator IDs against the ledger. Check original values against input, normalized values against conversion trace, and arithmetic against G6. Recheck verdict direction and confidence.

Reconcile shared family memberships separately from global unique IDs. Deferred benchmark rows must match the deferred section.

Repair inconsistencies before reporting. If material inconsistencies remain, disclose them and defer affected verdicts. Never claim successful reconciliation when unresolved.

## G9 - Output

For valid benchmark requests, provide these sections:

### Evidence Ledger
One row per observation-family membership: ID, family, original compensation, four dimension assessments with concise reasons, class, eligibility or exclusion reason, normalized value and evidence role. Explain unresolved mappings.

### Funnel Table
One row per family using these columns:

| Family | Retrieved | Full | Partial | Incomparable | Dropped | Survived | Primary | Supporting |
|---|---:|---:|---:|---:|---:|---:|---:|---:|

Counts must agree with the ledger. Report global unique observations separately where memberships overlap.

### Benchmark Table
One row per family: internal value, comparator and method, signed gap, percentage gap, verdict, confidence and rationale. Include concise conversion and calculation traces with selected primary IDs and intermediate values. Use unavailable, not zero, for missing results.

### Deferred Verdicts
List each deferred family, specific blocker and evidence needed. State none when no family is deferred.

### Signal Caveats
Summarize pool-wide coverage, comparability, freshness and advertised versus revealed compensation limitations once. Never present the raw pool as the comparable market. Redirect unsupported portions of mixed requests separately.

Keep the response compact and auditable. Do not repeat calculations with conflicting values.

**Final consistency lock.** Before output, compare each verdict with its verified gap, applicable decision rule and rationale. Positive above-threshold gaps cannot be Lagging; negative below-threshold gaps cannot be Above-market under a symmetric policy. Round only displayed values. Correct contradictions or defer if a defensible result remains unresolved.

