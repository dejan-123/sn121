# The point ledger

The ledger is working, written as plain text in its own message before the report. One line per outside point, then one line per role family. Nothing in it is decorative: it is where every count and figure in the report comes from.

**Point line:** ID, family it is tested for, then in order: window (in / out), source (traceable / unverifiable), basis (base / converted, with the sum / excluded, with the reason), the four dimensions (geography, stage, role, posting: match, one step off, or out), and the class (fully comparable, partial, incomparable, excluded).

**Family line:** retrieved, excluded (with reasons), incomparable, partial, fully comparable; the anchor and what it is built from; band midpoint; the gap worked out; verdict; tier with its deciding reason; what the company's own offers say.

Finish with the pool line: totals across families and any skew that touches the whole pool.

## A worked ledger (invented company)

Halcyon Grid Systems and every figure below are invented; take the method, not the numbers.

**Input, condensed.** Series C energy-software company, 240 employees, Denver CO headquarters; its Data Platform team sits in Toronto and is paid in CAD. Evidence retrieved 2026-11-02; points dated before November 2025 are out of window. The input supplies the rate 1 USD = 1.35 CAD.
Bands (min / mid / max): Firmware Engineering, Senior: $143,600 / $157,400 / $172,900. Solutions Consulting, Senior (base): $124,300 / $136,700 / $150,100. Field Service Operations, Manager: $95,700 / $105,300 / $115,900. Data Platform (Toronto), Staff: C$167,300 / C$184,600 / C$202,700.
Own recent offers: Firmware Senior accepted at $161,900 and $164,300, one declined at $155,800; Solutions Consulting Senior accepted at $138,600 base; Data Platform Staff accepted at C$189,700; none for Field Service.
Outside points:
E-01 offer, 2026-09, Senior Firmware Engineer, Denver, Series C, $166,800 base.
E-02 offer, 2026-07, Senior Firmware Engineer, Denver, Series C, $162,600 base.
E-03 posted range, 2026-10, Senior Firmware Engineer, Denver, Series C, $151,500-$184,700 base, Colorado mandate.
E-04 posted range, 2026-08, Senior Firmware Engineer, Denver, Series D, $156,300-$189,900 base, Colorado mandate.
E-05 recruiter's verbal figure, 2026-10, Senior Firmware Engineer, Denver, "around $179,500".
E-06 posted range, 2026-09, Senior Solutions Consultant, Denver, Series C, $142,500-$180,500 OTE, no split given.
E-07 offer, 2026-08, Senior Solutions Consultant, Denver, Series C, $153,900 total cash including a $17,200 annual bonus.
E-08 contract rate, 2026-09, Field Service Manager, Denver, $64.50 an hour, 1099 contractor.
E-09 posted range, 2026-10, Field Service Operations Manager, Denver, Series B, $93,100-$113,900 base, voluntarily posted.
E-10 posted range, 2025-08, Field Service Manager, Denver, Series C, $90,200-$111,700 base.
E-11 offer, 2026-08, Staff Data Platform Engineer, Toronto, Series C, C$194,800 base.
E-12 posted range, 2026-09, Staff Data Platform Engineer, Toronto, Series C, C$180,400-C$218,600 base, Ontario mandate.
E-13 offer, 2026-07, Staff Data Platform Engineer, Seattle WA, Series C, $153,700 base.
E-14 offer, 2026-09, Staff Data Platform Engineer, remote with pay pinned to Toronto, Series C, $143,600 base paid in USD.

**The ledger.**

Window: before November 2025 is out.

E-01 Firmware | in | traceable | base | geo match, stage match, role match, offer match | fully comparable, offer $166,800
E-02 Firmware | in | traceable | base | match, match, match, offer | fully comparable, offer $162,600
E-03 Firmware | in | traceable | base | match, match, match, mandated range match | fully comparable, range midpoint $168,100
E-04 Firmware | in | traceable | base | match, stage one step off (Series D), match, mandated match | partial; midpoint $173,100, leans above as a later-stage company should
E-05 Firmware | in | unverifiable (recruiter's verbal figure) | excluded
E-06 Solutions | in | traceable | OTE with no split, base not recoverable | excluded
E-07 Solutions | in | traceable | converted: $153,900 total cash less the stated $17,200 bonus = $136,700 base (down) | match, match, match, offer | fully comparable, offer $136,700
E-08 Field Service | in | traceable | contractor hourly rate, outside the taxonomy | excluded
E-09 Field Service | in | traceable | base | match, stage one step off (Series B), match, voluntarily posted one step off | incomparable (two steps off)
E-10 Field Service | out (2025-08) | excluded
E-11 Data Platform | in | traceable | base, CAD | match (Toronto), match, match, offer | fully comparable, offer C$194,800
E-12 Data Platform | in | traceable | base, CAD | match, match, match, Ontario-mandated range | fully comparable, range midpoint C$199,500
E-13 Data Platform | in | traceable | base, USD | geo out (Seattle: another country and currency) | incomparable
E-14 Data Platform | in | traceable | converted: $143,600 × the stated 1.35 = C$193,860 base (up) | match (pinned to Toronto), match, match, offer | fully comparable, offer C$193,860

Firmware Engineering, Senior: retrieved 5; excluded 1 (E-05 unverifiable); incomparable 0; partial 1 (E-04); comparable 3 (E-01, E-02 offers; E-03 range). Anchor = offers only: ($166,800 + $162,600) ÷ 2 = $164,700. Midpoint $157,400. Gap = ($157,400 − $164,700) ÷ $164,700 = −4.4%: between 3% and 5%, so corroboration decides. Own accepted offers average ($161,900 + $164,300) ÷ 2 = $163,100, which is 3.6% above the midpoint: they point the same way, so lagging. High: two comparable offers.

Solutions Consulting, Senior: retrieved 2; excluded 1 (E-06 OTE with no split); incomparable 0; partial 0; comparable 1 (E-07). Anchor $136,700. Midpoint $136,700. Gap 0.0%: inside 3%, competitive. Medium: one comparable offer. Own offer at $138,600, 1.4% above the midpoint: agrees.

Field Service Operations, Manager: retrieved 3; excluded 2 (E-10 out of window, E-08 contractor rate); incomparable 1 (E-09); partial 0; comparable 0. Deferred: nothing comparable survives. Needed: an accepted offer, or a mandated range, for a Field Service Operations Manager at a Denver Series C company, dated November 2025 or later.

Data Platform (Toronto), Staff: retrieved 4; excluded 0; incomparable 1 (E-13); partial 0; comparable 3 (E-11, E-14 offers; E-12 range). Anchor = (C$194,800 + C$193,860) ÷ 2 = C$194,330. Midpoint C$184,600. Gap = (C$184,600 − C$194,330) ÷ C$194,330 = −5.0%: 5% or more, so the anchor decides: lagging. High: two comparable offers. Own offer at C$189,700, above the midpoint: agrees.

Pool: retrieved 14; excluded 4; incomparable 2; partial 1; comparable 7. 13 of 14 points come from one feed; the mandated ranges are wide and served only as context because offers survived; one Toronto offer rests on the input's own exchange rate.

Settled. The report comes next.
