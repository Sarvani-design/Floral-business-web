# SKILL FILE: skill-global-localisation.md
# Loaded by agent when: any non-India country or city is mentioned
# Works alongside: skill-localisation-india.md when India is also in scope
# Purpose: Country intelligence card, live web trends, side-by-side vs global standards

## STEP 1 — COUNTRY DETECTION

Detect from: city name · currency · phone format · language · domain · competitor names
High confidence — state and proceed
Medium confidence — state assumption, confirm before web search
Not detectable — ask: "Which country is this project for?"

Output at top:
COUNTRY DETECTED: [Country] | Confidence: High / Medium / Low
LIVE WEB SEARCH: Queued

---

## STEP 2 — LIVE WEB RESEARCH (3 searches every time)

Search A — Top Apps and Local Market
Queries: "top apps [country] [year]" · "most popular apps [country] [year] android ios"
Extract: top 5 apps · their UI patterns · local super-apps · interaction standards

Search B — Latest Design Articles and Trends
Queries: "UI UX design trends [country] [year]" · "[country] app design best practices [year]"
Extract: dominant design aesthetic · what global trends adopted vs rejected · leading local studios

Search C — Viral and Social Design Movements
Queries: "[country] design viral social media [year]" · "trending UI [country] Dribbble Behance [year]"
Extract: what's blowing up · popular local design accounts · viral product launches

LIVE INTELLIGENCE REPORT — [Country] — [Date]
TOP LOCAL APPS: [list with brief UI notes]
TRENDING DESIGN STYLE: [description]
VIRAL RIGHT NOW: [what's blowing up]
NOTABLE LOCAL STUDIOS: [names if found]

---

## STEP 3 — SCORED COUNTRY CARD

┌─────────────────────────────────────────────────────┐
│  COUNTRY INTELLIGENCE CARD                           │
│  Country: [Name] | Project: [type] | Date: [today]  │
├─────────────────────────────────────────────────────┤
│  CATEGORY              SCORE    CONFIDENCE           │
│  Cultural readiness     [1-10]   High/Med/Low        │
│  Legal compliance need  [1-10]   High/Med/Low        │
│  Design trend alignment [1-10]   High/Med/Low        │
│  Payment complexity     [1-10]   High/Med/Low        │
│  Accessibility maturity [1-10]   High/Med/Low        │
│  Mobile-first need      [1-10]   High/Med/Low        │
│  Localisation effort    [1-10]   High/Med/Low        │
├─────────────────────────────────────────────────────┤
│  OVERALL COMPLEXITY: Low / Medium / High             │
└─────────────────────────────────────────────────────┘

Scores: 1–3 = low effort/risk | 4–6 = requires attention | 7–10 = critical

ONE-PARAGRAPH SUMMARY:
[Plain English — what this country means for the project · biggest opportunity · biggest risk]

---

## STEP 4 — SIDE-BY-SIDE COMPARISON TABLE

GLOBAL STANDARD vs LOCAL ([Country])

| DESIGN ELEMENT      | GLOBAL STANDARD      | LOCAL ([Country])    | MATCH?   |
|---------------------|----------------------|----------------------|----------|
| Layout direction    | LTR                  | [LTR/RTL]            | ✅/❌    |
| Date format         | ISO YYYY-MM-DD       | [local format]       | ✅/❌    |
| Number format       | 1,000,000            | [local format]       | ✅/❌    |
| Currency display    | Symbol before number | [local convention]   | ✅/❌    |
| Primary nav         | Top or left sidebar  | [local preference]   | ✅/❌    |
| CTA placement       | Top-right/bottom     | [local preference]   | ✅/❌    |
| Primary colour      | Blue = trust         | [culturally safe]    | 🟡/❌    |
| Tap target min      | 44×44px              | [same/adjusted]      | ✅       |
| Primary payment     | Card/digital wallet  | [local dominant]     | 🟡/❌    |
| Primary social      | Instagram/Facebook   | [local dominant]     | 🟡/❌    |
| Font for script     | System UI stack      | [local script font]  | 🟡/❌    |
| Privacy law         | GDPR-equivalent      | [local law name]     | ✅/❌    |
| Accessibility law   | WCAG 2.2 AA          | [local requirement]  | ✅/❌    |
| Live trend style    | [from global search] | [from local search]  | ✅/🟡/❌ |

✅ MATCH — global standard works as-is
🟡 ADAPT — global standard needs a local layer on top
❌ CONFLICT — local takes full priority · global standard does not apply here

---

## STEP 5 — FULL DETAIL REPORT

### 5A — Cultural Design Layer
Colours: [what works · what to avoid · what is lucky/unlucky]
Typography: [script · font recommendations · line-height adjustments]
Imagery: [people representation · what to avoid · cultural sensitivity]
Icons: [symbols that mean something different locally]
Copy tone: [formal/informal · direct/indirect · warm/corporate]
Whitespace philosophy: [sparse = quality vs sparse = empty]
Information density: [minimal vs feature-rich expectation]

### 5B — Live Trends (from web search)
Top local apps right now: [list with UI notes]
Dominant visual style: [description]
What's viral: [specific trends found]
Global trends NOT adopted locally: [list]
Local design community pulse: [studios · influencers · movements]

### 5C — Payment Design Layer
Primary method: [name + UX flow notes]
Secondary: [name]
BNPL: [yes/no + name]
Cash on delivery: [expected/not expected]
Key UX rule: [one line on payment UX for this country]

### 5D — Legal Layer (general knowledge — not legal advice)
Primary privacy law: [name + key requirement]
Cookie consent: [required/not required/type]
Language law: [any requirement to use local language]
Accessibility law: [local requirement if any]
E-commerce law: [return rights · disclosure requirements]
Critical flag: [the one thing that if ignored could cause legal exposure]

### 5E — Design Recommendations
TOP 3 THINGS TO DO DIFFERENTLY FOR [Country]:
1. [Specific change + reason]
2. [Specific change + reason]
3. [Specific change + reason]

TOP 3 GLOBAL STANDARDS THAT APPLY WITHOUT CHANGE:
1. [Standard + confirmation it works locally]
2. [Standard]
3. [Standard]

ONE THING MOST DESIGNERS GET WRONG FOR [Country]:
[Specific common mistake + correct approach]

---

## BUILT-IN COUNTRY KNOWLEDGE

Japan: dense UI = professional · LINE super-app · PayPay dominant · APPI privacy law
China: red CTAs outperform · WeChat mini-programs · Alipay/WeChat Pay · PIPL + ICP license · Google/FB blocked
USA: whitespace = quality · direct copy · CCPA · ADA accessibility lawsuits active
UK: understatement preferred · UK GDPR · contactless card dominant
Germany: function over decoration · Impressum mandatory · GDPR strictly enforced · Giropay
UAE: gold luxury aesthetic · Arabic RTL + English LTR bilingual · Tabby/Tamara BNPL · UAE PDPL
Brazil: vibrant colours · Pix instant payment dominant · WhatsApp first · LGPD privacy law
Nigeria: mobile-only baseline · 3G design · Flutterwave/Paystack · WhatsApp + Twitter dominant
South Korea: KakaoTalk super-app · Naver not Google · PIPA privacy law · dense accepted
Australia: Afterpay invented here · BNPL dominant · PayID · Privacy Act APPs · WCAG expected
France: French language legally required for consumer products · CNIL GDPR enforcement · CB card dominant

For any country not listed above: use live web searches (Step 2) to build intelligence on the fly.

---

## RTL CHECKLIST (Arabic, Hebrew, Persian, Urdu)

[ ] dir="rtl" on html element
[ ] Flip all directional icons (arrows and chevrons point opposite direction)
[ ] Navigation drawer: right side
[ ] Back button: top-right, points right →
[ ] Progress bar: fills right to left
[ ] Breadcrumbs: right to left order
[ ] Keep LTR: numbers · email · phone · URLs · code

---

## MULTI-COUNTRY MODE

When 2+ countries are mentioned:

MULTI-COUNTRY DESIGN MATRIX — Countries: [list]

UNIVERSAL (safe for all countries):
✅ [Decision safe for all]

ADAPT PER COUNTRY:
⚡ [Element] — [Country A needs X] vs [Country B needs Y]

SEPARATE BUILDS REQUIRED:
⛔ [RTL vs LTR — needs separate builds]
⛔ [Payment flows — completely different per country]

RECOMMENDED: [universal base + country layer] or [separate builds — reason]

---

## INDIA + GLOBAL TOGETHER

When India is also in scope:
skill-localisation-india.md handles India deep detail (UPI · Telugu · DPDPA)
This skill handles global comparison layer on top
Both run simultaneously — no duplication
Output merges both clearly labelled