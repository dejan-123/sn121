# Reply form

The person reading this is a compliance reviewer who will test each row against the instrument and the profile. Reproduce names exactly as the inputs print them: the instrument's short name (for a notice, its reference number) and the organisation's full name.

| Order | Element | Exact form | Notes |
|---|---|---|---|
| 1 | Title | `# [abbreviation] scope verdict: [organisation name]` | opens the reply |
| 2 | Disclaimer | *This brief is triage, not legal advice.* | italic, immediately under the title, never at the end |
| 3 | Ledger | `## Ledger for [organisation name]`, then `\| Clause \| Profile Attribute \| Value \| Verdict \| Confidence \|` | a row for every numbered scoping clause |
| 4 | Label | `## Label`, then the label in bold on its own line | IN-SCOPE, OUT-OF-SCOPE, CONDITIONAL or NEEDS-LEGAL-REVIEW |
| 5 | Rationale | one paragraph without a heading | 120 words or fewer |
| 6 | Routing | one line, for IN-SCOPE or CONDITIONAL only | `Route to obligation extraction for [abbreviation] [provisions that apply]; note [what is removed and why].` |

Leave everything else out: no sentence announcing the task, no step headings, no commentary on method, no obligation lists, no remediation advice. The reply stops at the routing line, or at the rationale's last sentence when no routing line is due.

## Filling a row
| Cell | Contents | Example |
|---|---|---|
| Clause | the identifier as printed, the test in a few words with its figure, the CSV role in brackets | `Art. 4 - Chapter III above 200 heavy vehicles [threshold (Parts)]` |
| Profile Attribute | the profile field the row rests on | Heavy vehicles |
| Value | the profile's words in quotes, any deduction, the clause's comparator, the result | `"236 vehicles" less 41 vans = 195; more than 200: not met` |
| Verdict | verdict_if_yes or verdict_if_no from the CSV | Fails (Part does not apply; rest applies) |
| Confidence | High, Medium, Low, or a dash for Not evaluated | High |

Rows follow the instrument's numbering and none is skipped, triggers and not-yet-published criteria included, with one exception: a clause that deducts from another clause's count sits directly above that count's row, whatever its number. An exemption and its limit are two rows, and an exemption reaching only some sections gets one more row naming the sections still in force. Duties that are never reached may share one Not evaluated row.

## The rationale
Lead with the deciding row, quoting its clause and the fact. Follow with the reading the profile seems to support and the instrument's words that rule it out. Close with what is switched off, voided or never reached, and why any Ambiguous row leaves the label alone. A single clean failure needs roughly three sentences; exemptions, limits and thresholds acting together need four or five. For NEEDS-LEGAL-REVIEW, end on the question counsel must answer; for CONDITIONAL, name the missing fact and what each answer would mean.

## The routing line
Begin with the whole instrument, scope and definition provisions included, and remove only what a valid exemption or an unmet Part threshold takes out. State what is left as ranges, adding "from [date]" for a later start or "once [fact] is confirmed" for CONDITIONAL.

## Worked reply 1 (invented): an absence element fails, an undefined sector stays Ambiguous
Harwick Street Collection Rules (HSCR), Rules 1-15. Rule 2: applies to persons organising street collections in Harwick. Rule 3(1): "street collection" means asking the public for money in a public place without offering goods or services in return. Rule 3(2): examples include bucket collections and pledge sign-ups. Rule 5: Parts II and III apply only to collectors working in the charitable sector; the Rules do not define the sector. Rule 6: criteria for a "high-footfall pitch" are to be set by an order not yet made. Rule 9: Part III applies only above 30 collectors. Rule 11: organisers obtain a permit from Harwick Council. Profile, Penfold Promotions Ltd: "staffed stands on Harwick high streets selling raffle tickets and wristbands for partner charities"; "every donor receives a ticket or a wristband"; promotions agency engaged by three charities; 45 staff; permit not applied for.

# HSCR scope verdict: Penfold Promotions Ltd

*This brief is triage, not legal advice.*

## Ledger for Penfold Promotions Ltd

| Clause | Profile Attribute | Value | Verdict | Confidence |
|---|---|---|---|---|
| Rule 2 - organising street collections in Harwick [coverage test] | Activity | "staffed stands on Harwick high streets"; met | Passes (provisionally, pending Rule 3(1)) | High |
| Rule 3(1) - asking for money without offering goods or services in return [absence element] | What donors receive | "every donor receives a ticket or a wristband"; nothing offered in return: not met | Fails (element not met; goods are given for every payment) | High |
| Rule 3(2) - examples such as bucket collections or pledge sign-ups [indicator] | Not evaluated | - | Not evaluated (Rule 3(1) decides) | - |
| Rule 5 - Parts II-III only for the charitable sector [trigger] | Sector | "promotions agency engaged by three charities"; sector undefined, agency status unclear | Ambiguous (sector undefined; unclear whether an agency working for charities belongs to it; label already fixed by Rule 3(1)) | Medium |
| Rule 6 - high-footfall criteria left to an order not yet made [cross-reference] | Pitch class | no listing stated | Ambiguous (criteria unpublished; label already fixed by Rule 3(1)) | Medium |
| Rule 9 - Part III above 30 collectors [threshold (Parts)] | Not evaluated | - | Not evaluated (Rule 3(1) decides) | - |
| Rule 11 - permit [duty] | Not evaluated | - | Not evaluated (Rule 3(1) decides) | - |

## Label

**OUT-OF-SCOPE**

Rule 3(1) limits a street collection to asking for money without offering goods or services in return, and every Penfold donor receives a raffle ticket or a wristband. Stands raising money for charities look like collections, but the definition turns on whether anything is given back. Whether an agency working for charities sits in the undefined Rule 5 sector cannot be settled; neither that nor the unpublished Rule 6 criteria can change the result, and Part III and the permit are never reached.

## Worked reply 2 (invented): a foreign operator, the reach route's defined term decides
Velmont Online Marketplace Act (VOMA), Sections 1-20. Sec. 2: applies to marketplace operators (a) established in Velmont, or (b) established elsewhere that direct listings at buyers in Velmont, "buyer" having the meaning in Sec. 3. Sec. 3: "buyer" means a natural person purchasing for personal use. Sec. 4: "marketplace" means an online service matching sellers with buyers, excluding a service on which every buyer is a registered business. Sec. 6: this Act applies only to operators entered in the Velmont Trade Register. Sec. 9: Part 3 applies only above 20,000 active listings. Sec. 12: transitional relief from Part 3 until 1 January 2028 for operators registered after 1 March 2026. Profile, Kestrel Parts Exchange ApS: "incorporated in Daneholm"; "listings published in Velmontese with prices in Velmont crowns"; "online parts exchange matching sellers with buyers"; "buyers must hold a VAT number; no private accounts"; not entered in the Velmont Trade Register; 34,000 active listings.

# VOMA scope verdict: Kestrel Parts Exchange ApS

*This brief is triage, not legal advice.*

## Ledger for Kestrel Parts Exchange ApS

| Clause | Profile Attribute | Value | Verdict | Confidence |
|---|---|---|---|---|
| Sec. 2(a) - established in Velmont [coverage test] | Seat | "incorporated in Daneholm"; established in Velmont: not met | Fails (home route closed; other reach routes tested) | High |
| Sec. 2(b) - established elsewhere, listings directed at buyers in Velmont [reach] | Targeting; buyers | "listings published in Velmontese with prices in Velmont crowns"; directed at Velmont: met; buyers as defined: tested at Sec. 3 | Fails (reach route not met; no buyers as defined in Sec. 3) | High |
| Sec. 3 - buyer: natural person purchasing for personal use [definition limb] | Buyer type | "buyers must hold a VAT number; no private accounts"; natural person for personal use: not met | Fails (definition not met; closes the Sec. 2(b) route and decides) | High |
| Sec. 4 - marketplace: online service matching sellers with buyers [definition limb] | Service type | "online parts exchange matching sellers with buyers"; met | Passes (organisation is the defined subject) | High |
| Sec. 4 - exclusion: every buyer a registered business [exclusion inside a definition] | Buyer registration | "buyers must hold a VAT number"; every buyer a registered business: met | Passes (exclusion applies; confirms Sec. 3) | High |
| Sec. 6 - only operators in the Velmont Trade Register [trigger] | Register entry | "not entered in the Velmont Trade Register"; entered: not met | Fails (trigger not met; independent second ground) | High |
| Sec. 9 - Part 3 above 20,000 active listings [threshold (Parts)] | Not evaluated | - | Not evaluated (Sec. 3 decides) | - |
| Sec. 12 - transitional relief from Part 3 [exemption] | Not evaluated | - | Not evaluated (Sec. 3 decides) | - |

## Label

**OUT-OF-SCOPE**

Kestrel is incorporated in Daneholm, so only the Section 2(b) route is open, and it reaches operators directing listings at buyers, which Section 3 defines as natural persons purchasing for personal use. Kestrel's listings plainly target Velmont, but every buyer must hold a VAT number and there are no private accounts, so no buyer as defined exists. Kestrel is a marketplace under Section 4, but the business-only exclusion inside that definition confirms the result, and Section 6 is an independent second ground because Kestrel is not on the Trade Register. Part 3 and its transitional relief are never reached.

## Worked reply 3 (invented): covered through a permit, a later deduction, a voided exemption, a listing
Ardent Freight Emissions Code (AFEC), Articles 1-22. Art. 2(1): applies to road freight operators carrying goods within Ardent. Art. 2(2): an operator established outside Ardent is covered only if it holds an Ardent Cabotage Permit. Art. 4: Chapter III (Articles 16-18, emissions reporting) applies only to operators with more than 200 heavy vehicles. Art. 6: an operator whose fleet is at least 30% electric is exempt from Chapter IV (Articles 19-20, low-emission zone duties). Art. 7: Article 6 does not apply where more than 25% of the operator's Ardent kilometres are driven in designated zones. Art. 10: criteria for "strategic carrier" status are to be set by a regulation not yet made; Chapter V (Articles 21-22) applies to strategic carriers. Art. 12: vans under 3.5 t are not counted for Article 4. Art. 14: operators register their depots with the Ardent Transport Agency. Profile, Morvik Haulage AB: "incorporated in Selland"; "holds Ardent Cabotage Permit ACP-4471, valid to 2029"; "236 vehicles, of which 41 are vans under 3.5 t"; "32% of the fleet is electric"; "5.4 million of 20 million Ardent km in designated zones (2025 telematics report)"; "entered as a strategic carrier on the Ardent Freight Register interim list"; depot registration pending.

# AFEC scope verdict: Morvik Haulage AB

*This brief is triage, not legal advice.*

## Ledger for Morvik Haulage AB

| Clause | Profile Attribute | Value | Verdict | Confidence |
|---|---|---|---|---|
| Art. 2(1) - road freight carried within Ardent [coverage test] | Activity | "holds Ardent Cabotage Permit ACP-4471"; carries goods within Ardent: met | Passes (provisionally, pending Art. 2(2)) | High |
| Art. 2(2) - operator established abroad covered only with a Cabotage Permit [reach] | Seat; permit | "incorporated in Selland"; "holds Ardent Cabotage Permit ACP-4471, valid to 2029"; permit held: met | Passes (covered through the reach route) | High |
| Art. 12 - vans under 3.5 t not counted for Art. 4 [deduction] | Vans | "41 are vans under 3.5 t"; taken out of the Art. 4 count | Passes (deduction applied; Art. 4 count adjusted) | High |
| Art. 4 - Chapter III above 200 heavy vehicles [threshold (Parts)] | Heavy vehicles | "236 vehicles" less 41 vans = 195; more than 200: not met | Fails (Part does not apply; rest applies) | High |
| Art. 6 - exempt from Chapter IV at 30% electric or more [exemption] | Electric share | "32% of the fleet is electric" = 76 of 236 vehicles; Art. 12 deducts vans only from the Art. 4 count, but on the 195 counted vehicles the share is 39%; at least 30% on either base: met | Passes (exemption satisfied on entity figure; limit row follows) | High |
| Art. 7 - Art. 6 void above 25% of Ardent kilometres in designated zones [exemption limit] | Zone share | "5.4 million of 20 million Ardent km in designated zones (2025 telematics report)" = 27%; Art. 7 tests on Ardent kilometres, the basis the profile uses; more than 25%: met | Passes (limit triggered; exemption voided; named sections apply) | High |
| Art. 10 - strategic-carrier criteria left to a regulation not yet made [cross-reference] | Register status | "entered as a strategic carrier on the Ardent Freight Register interim list" | Passes (listing settles current status; pending act concerns future classification) | Medium |
| Art. 14 - depot registration [duty] | Registration | "depot registration pending" | Passes (duty applies; compliance gap not scope) | High |

## Label

**IN-SCOPE**

Article 2(2) covers Morvik, a Selland company, because it holds Ardent Cabotage Permit ACP-4471. Its 236 vehicles suggest Chapter III reporting, but Article 12 removes the 41 vans, leaving 195, not more than 200, so Chapter III does not apply. The Article 6 electric-fleet exemption is met at 32% but voided by Article 7, since 27% of Ardent kilometres fall in designated zones, so Chapter IV applies. The interim-list entry settles current strategic-carrier status despite the pending regulation, so Chapter V applies, and the pending depot registration is a compliance gap only.

Route to obligation extraction for AFEC Articles 1-15 and 19-22 (Chapters IV and V); note Chapter III (Articles 16-18) is switched off at 195 counted vehicles, and the Article 6 exemption is voided by Article 7.

## Write the verdict
Everything above was preparation. Your reply now begins with its title, `# [abbreviation] scope verdict: [organisation name]`, and no sentence comes before it.
