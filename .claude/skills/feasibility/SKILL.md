# SKILL FILE: skill-feasibility.md
# Loaded by agent when: checking tech performance, animations, or legal compliance
# Purpose: Flag performance issues, API needs, third-party dependencies, privacy laws

## ANIMATION SAFETY

SAFE — use these (GPU composited, no layout reflow):
transform: translate · scale · rotate · skew
opacity
filter: blur · brightness (use sparingly — expensive on mobile)

UNSAFE — flag these (triggers layout reflow):
width · height · max-height · min-height
top · left · right · bottom (use transform: translate instead)
padding · margin · font-size · border-width

Flag format:
[PERFORMANCE WARNING] Animating [property] triggers layout reflow.
Recommended fix: use transform/opacity equivalent.

Performance budget: 60fps = 16ms per frame
Mobile (mid-range Android): prefer 300ms+ durations · simpler easing
Always wrap: @media (prefers-reduced-motion: reduce)
Scroll animations: IntersectionObserver only (not scroll event listeners)
Lottie: flag if file exceeds 50KB

---

## IMAGE REQUIREMENTS

Formats (priority order):
1. AVIF — best compression · modern browsers
2. WebP — Safari 14+ · Chrome · Firefox
3. JPEG (photos) / PNG (transparency) — fallback
4. SVG — icons and logos always · never rasterise icons
5. WebM — animated content (10× smaller than GIF)
Use: <picture> element with srcset for format fallbacks

Size targets:
Hero/banner: max 200KB (WebP/AVIF)
Product image: max 80KB
Thumbnail: max 20KB
Avatar: max 10KB

Always specify:
loading="lazy" for below-fold images
Explicit width and height attributes on every image (prevents CLS)
aspect-ratio CSS property on containers (never fixed height on image containers)

---

## REAL-TIME AND API FLAGS

Any live data section — note:
WebSocket / SSE needed? (flag complexity)
Polling interval if not real-time? (flag battery impact)
Loading state while data fetches?
Error state if data fails?
Empty state if no data exists?
Stale state if data is cached?

Skeleton screens: required for all async data
Match exact layout of loaded content (same height/width)
Shimmer animation: left-to-right gradient sweep
Show if load takes more than 200ms
Never show blank white space while loading

---

## THIRD-PARTY DEPENDENCIES

Fonts:
Self-host when possible (Google Fonts adds DNS lookup latency)
font-display: swap (prevents invisible text during load)
Subset Indic scripts (full Devanagari/Telugu font = 300–500KB)

Maps:
Google Maps: flag API key + billing setup + usage limits
MapMyIndia/Mappls: India government-endorsed · good alternative
Leaflet + OpenStreetMap: free · no billing · good for MVP

Payments India:
Razorpay (recommended) · PhonePe Gateway · PCI-DSS required for cards
Flag: RBI Payment Aggregator guidelines for payment integration
Never store raw card data — always tokenise via SDK

Analytics:
DPDPA/GDPR consent required before any analytics fire
Async loading mandatory for all analytics scripts
Google Analytics 4: cookie consent required in EU/UK

---

## CORE WEB VITALS TARGETS

LCP (Largest Contentful Paint): target under 2.5s
Flag: hero image is typically the LCP element
Fix: preload hero image · AVIF/WebP · correct sizing for viewport

INP (Interaction to Next Paint): target under 200ms
Flag: heavy JavaScript on main thread blocks interaction
Fix: code splitting · lazy loading · web workers for heavy computation

CLS (Cumulative Layout Shift): target under 0.1
Flag: images without dimensions · font swap · dynamic content insertion above existing content
Fix: explicit width/height · font-display:swap · reserve space for dynamic content

TTFB (Time to First Byte): target under 600ms
Flag: no CDN · large HTML payload · slow server response
Fix: CDN · server-side caching · edge rendering

India network baseline:
Standard: 4G (20Mbps) | Minimum acceptable: 3G (1.5Mbps) | Edge case: 2G (250Kbps)
Test with: Chrome DevTools Network throttling presets

---

## SEO FLAGS (flag when SEO critical pages)

Landing/product/blog pages: SSR or SSG required — client-side SPA alone insufficient for Google
Meta: title under 60 chars · description under 160 chars · OG tags required
Structured data: JSON-LD for products · local business · articles
Canonical URLs: required for duplicate content (pagination, filters)
Core Web Vitals: Google ranking factor — see targets above

India SEO note:
Google dominant · also consider Bing for global · Naver for South Korea market

---

## PRIVACY AND LEGAL

India — DPDPA 2023:
Consent UI required before collecting any personal data
Consent: free · specific · informed · unconditional · unambiguous
Reject option: equal prominence to Accept (no dark patterns)
Right to erasure: accessible in account settings
Children: age gate + parental consent for under-18

EU/UK — GDPR:
Cookie consent before non-essential cookies fire
Reject as prominent as Accept
Data breach: 72-hour notification (flag to legal team)
Privacy policy in plain language

USA — CCPA:
"Do Not Sell My Personal Information" link in footer
Privacy policy: disclose data categories collected

All projects:
Terms of Service: linked from signup and checkout
Refund/return policy: visible before purchase
Age verification: alcohol · gambling · adult content
Healthcare/financial/legal content: disclaimer required
Cookie policy: linked from cookie banner

---

## FLAG FORMAT

[FEASIBILITY FLAG]
Type: Performance | API | Legal | Third-party | SEO | Privacy
Component/Screen: [name]
Issue: [description]
Impact: High | Medium | Low
Fix: [specific recommendation]
Stakeholder: Developer | Legal | DevOps | Product

Note: All legal information is general knowledge only.
Always advise client to consult qualified local legal counsel.