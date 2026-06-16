# SKILL FILE: skill-localisation-india.md
# Loaded by agent when: India context, Telugu, UPI, Indian city or market detected
# Purpose: Full India cultural, format, payment, legal, and industry context

## AUTO-DETECT INDIA SIGNALS
City names: Vijayawada · Hyderabad · Mumbai · Delhi · Bangalore · Chennai · Pune · Kolkata
Currency: ₹ | Phone: +91 | Language: Hindi/Telugu/Tamil/Kannada/Malayalam/Bengali
Domain: .in | Payment mention: UPI/Paytm/PhonePe

Output at top:
LOCALE: India | Region: [state/city if known] | Language: [primary + secondary]
Default when no city given: Vijayawada, Andhra Pradesh — Telugu + English

---

## FORMATS

Numbers: 1,00,000 (lakh) · 10,00,000 (10 lakh) · 1,00,00,000 (crore)
  NEVER use: 100,000 or 1,000,000 format for India
Currency: ₹1,499 (no space between ₹ and number)
  Large amounts: ₹1.5L (lakh) · ₹2.5Cr (crore) in informal UI
Date: DD/MM/YYYY · Display: "15 Jun 2025"
  NEVER use: MM/DD/YYYY (US format)
Time: 12-hour AM/PM (consumer apps) · 24-hour (B2B/enterprise)
Phone: +91 XXXXX XXXXX · validate exactly 10 digits after removing +91 and spaces
Address: Flat → Street → Area → City → State → PIN Code (6 digits, NOT ZIP)
Week starts: Sunday | Fiscal year: April 1 – March 31

---

## REGIONAL SCRIPTS

Detect state from city name and load appropriate script:
Andhra Pradesh / Telangana — Telugu: Noto Sans Telugu, Gautami
Hindi belt (Delhi/UP/MP/Bihar) — Devanagari: Noto Sans Devanagari, Mangal
Tamil Nadu — Tamil: Noto Sans Tamil, Latha
Karnataka — Kannada: Noto Sans Kannada
Kerala — Malayalam: Noto Sans Malayalam
West Bengal — Bengali: Noto Sans Bengali
Maharashtra — Marathi (Devanagari): Noto Sans Devanagari
Always fallback: system default for that script

Line height for Indic scripts: increase to 1.8+ (complex letterforms need more space)

---

## VIJAYAWADA DEFAULT CONTEXT

Language: Telugu primary, English secondary
Industry strengths: retail · real estate · food · education
Connectivity baseline: 4G standard · design for 3G · 2G edge case
Demographics: traditional family values + growing young urban population
Payments: UPI dominant · COD for first-time eCommerce users
Social: WhatsApp · YouTube Telugu channels · Facebook (older demographic)
Local trust signals: Telugu copy alongside English increases trust

---

## PAYMENT METHODS (priority order)

Must support — Tier 1:
UPI: PhonePe · Google Pay · Paytm · BHIM · any UPI ID
  UX rules: enter UPI ID or scan QR · show app deep links for 1-tap · collect VPA not card details
RuPay: mandatory Indian card network (NPCI compliance)
Visa / Mastercard

Should include — Tier 2:
Net Banking: SBI · HDFC · ICICI · Axis · Kotak (top 5)
EMI: very common in Indian eCommerce · show EMI options on product pages
COD (Cash on Delivery): expected in Tier 2/3 cities and rural India · never remove this option
Wallets: Paytm · PhonePe wallet · Amazon Pay

BNPL (Buy Now Pay Later): LazyPay · ZestMoney · Simpl

UPI QR Code: mandatory for food, retail, local businesses — most customers scan to pay

---

## SOCIAL MEDIA (India priority order)

WhatsApp → Instagram → YouTube → Facebook → X/Twitter → LinkedIn → Telegram

WhatsApp share: MANDATORY for any social sharing feature in India
WhatsApp copy format: no markdown · emoji acceptable · keep under 200 characters

---

## CULTURAL COLOURS

Red: auspicious (weddings/festivals) — positive, NOT danger
Saffron/Orange: sacred/religious — use carefully, avoid for commercial
White: mourning in some contexts — avoid as celebration/success colour
Yellow: auspicious, festive (Vasant Panchami, weddings)
Gold: prosperity, premium — very common in luxury and jewellery UI
Green: growth, auspicious — also WhatsApp brand colour
Blue: trust, corporate — safe for all contexts
Black: modern urban India — acceptable for premium/luxury, not mourning

Festival design opportunities:
Diwali (Oct/Nov): warm tones · offers · celebration UI
Holi (Mar): colourful · playful
Eid: inclusive · celebratory (13% Muslim population)
Navratri/Dussehra (Oct): auspicious period · peak shopping season
Republic Day 26 Jan / Independence Day 15 Aug: national pride colours

---

## LEGAL AND REGULATORY

DPDPA 2023 (Digital Personal Data Protection Act):
  Consent required before collecting any personal data
  Consent must be: free · specific · informed · unconditional · unambiguous
  Reject option: equal prominence to Accept — no dark patterns
  Right to erasure: "Delete my account and data" accessible in settings
  Children: age gate required · parental consent for under-18
  Data localisation: sensitive personal data must be stored in India

GST:
  Display GST number on all invoices
  Show GST breakup in cart (CGST + SGST or IGST)

Industry-specific:
  Food businesses: FSSAI license number visible in footer
  Real estate: RERA registration number mandatory display
  Fintech: RBI guidelines · mandatory KYC references · PA-PG licence for payment aggregators
  Healthcare: no health data in URLs · HIPAA-equivalent sensitivity

Note: General knowledge only — always advise client to consult local legal counsel.

---

## INDUSTRY CONVENTIONS (India)

Food and Restaurant:
  Hero: full-bleed food photography (not people)
  Above fold: hours · phone · address · Order Now CTA
  Must have: FSSAI number · WhatsApp order button · delivery time (specific not vague)
  Trust: star rating + count + recent reviews
  Zomato/Swiggy mental model: users expect this layout

Retail and eCommerce:
  Trust: ratings · return policy · secure checkout badge
  Product images: minimum 4 angles · zoom on tap/hover
  Price: original struck through · % savings · EMI option shown
  COD: always offer · never remove for Tier 2/3 markets
  Flipkart/Amazon India mental model: users trained on these patterns

Healthcare:
  Emergency: 112 always accessible above fold
  Language: Grade 6–8 reading level · plain language mandatory
  Disclaimer: required on all medical content
  Doctor credentials: visible · verified badge

Real Estate:
  Map: primary navigation tool — map-first or map + list dual view
  Filters: BHK · price range · locality — prominent and persistent
  RERA: mandatory display
  Contact: WhatsApp button most effective for lead generation
  EMI calculator: standard user expectation

Education:
  Progress: gamification · streaks · completion percentages
  Content hierarchy: course → module → lesson
  Certificates: shareable · LinkedIn importable
  Offline content download: critical for India connectivity

SaaS and B2B:
  Dashboard: max 6 KPIs above fold
  Left sidebar: persistent · collapsible
  Tables: sort · filter · search · export — all standard expectations
  Support: chat widget (Intercom/Freshdesk standard in India SaaS)