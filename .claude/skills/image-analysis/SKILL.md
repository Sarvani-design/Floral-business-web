# SKILL FILE: skill-image-analysis.md
# Loaded by agent when: any image or screenshot is attached
# Purpose: Scan image, extract design decisions, diff vs current design, merge best of both

## WHAT THIS SKILL DOES
Scans attached images layer by layer. Extracts all visible design decisions.
Compares against current design if one exists. Produces a diff table.
Merges the best of both into a new improved concept with Figma annotations.

---

## STEP 1 — IMAGE SCAN (run in this exact order)

Layer 1 — Identify
UI type: web page / landing / dashboard / mobile app / tablet / desktop
Screen: home / onboarding / product / checkout / settings / other
Industry: detect from content, icons, visible copy
Platform: detect from status bar, nav bar, browser chrome, or UI patterns

Layer 2 — Layout
Structure: single column / two column / grid / card grid / list / dashboard
Navigation: position + type (top / sidebar / bottom / hamburger)
Hero: image / video / illustration / text-only / split
Whitespace: generous / balanced / tight / cramped
Estimated grid: column count + gutter + max-width

Layer 3 — Visual Design

COLOURS:
CTA: [colour + estimated hex if clear]
Background: [description] | Card background: [vs page bg]
Text primary: [desc] | Text secondary: [desc]
Border/divider: [desc] | Accent: [tags, badges, highlights]

TYPOGRAPHY:
Heading: [size relative to body · weight]
Body: [size · line-height — tight/normal/loose]
CTA text: [size · weight · case]
Font personality: [serif/sans/geometric/humanist/mono]

SPACING:
Horizontal padding: [narrow <24px / medium 24–48px / wide >48px]
Section gap: [tight <40px / medium 40–80px / generous >80px]
Card padding: [tight / medium / generous]

CORNER RADIUS:
Buttons: [none / 4px / 8px / 12px+ / pill]
Cards: [none / subtle / medium / large / very large]

ELEVATION:
Cards: [flat / subtle shadow / prominent / outlined]
Nav: [flat / shadow / with border / transparent]

Layer 4 — Component Inventory
List every visible component:
Navigation · Hero · Cards · Buttons · Inputs · Icons · Images
Tags/badges · Progress indicators · Tables · Lists

Layer 5 — UX Patterns
CTA placement: where + why
Visual hierarchy: what draws eye first, second, third
Information density: minimal / balanced / dense
Trust signals: reviews · logos · badges · security

---

## STEP 2 — QUALITY ASSESSMENT

REFERENCE IMAGE QUALITY
Visual hierarchy: [Strong / Medium / Weak] — [reason]
Spacing consistency: [Consistent / Mixed / Inconsistent]
Typography scale: [Well-defined / Adequate / Flat]
Colour usage: [Purposeful / Decorative / Inconsistent]
Contrast (visible check): [sufficient / low / very low]
Touch targets: [adequate / too small]
Heuristic highlights:
  Best: [which Nielsen heuristic they execute well]
  Worst: [which they violate most clearly]
Overall: [2–3 sentences on design character and quality]

---

## STEP 3 — DIFF ANALYSIS (when current design also exists)

DESIGN DIFF
Reference: [source] | Current: [name/description]

| Element | Reference | Current | Winner | Reason |
|---|---|---|---|---|
| Layout | | | REF/CURRENT/TIE | |
| Colour system | | | REF/CURRENT/TIE | |
| Typography | | | REF/CURRENT/TIE | |
| Spacing | | | REF/CURRENT/TIE | |
| Navigation | | | REF/CURRENT/TIE | |
| CTAs | | | REF/CURRENT/TIE | |
| Cards | | | REF/CURRENT/TIE | |
| Mobile UX | | | REF/CURRENT/TIE | |
| Accessibility | | | REF/CURRENT/TIE | |

TAKE FROM REFERENCE: [list with how to apply each]
KEEP FROM CURRENT: [list with why each is better]
IMPROVE BEYOND BOTH: [gaps neither addresses well]

---

## STEP 4 — MERGED CONCEPT

MERGED DESIGN CONCEPT
Based on: [reference] + [current] + UX improvements

Direction: [2–3 sentences — merged aesthetic and philosophy]
Layout: [description + spacing tokens]
Colours: primary=[hex+token] · bg=[hex+token] · text=[hex+token] · accent=[hex+token]
Typography: font=[recommendation] · scale=[key sizes]

COMPONENTS:
Button: [merged description + radius token + colour tokens]
Card: [merged description + padding token + shadow]
Navigation: [merged description]
Hero: [merged description]

KEY IMPROVEMENTS OVER BOTH:
1. [Specific improvement]
2. [Specific improvement]
3. [Specific improvement]

FIGMA NEXT STEPS:
1. [First thing to build]
2. [Second thing]
3. [Third thing]

---

## STEP 5 — MULTIPLE IMAGES

Label: REF-A, REF-B, REF-C
Run Steps 1–2 for each individually
Run extended diff across all simultaneously
Merged concept cites each source: "Card style from REF-A, colours from REF-B"

---

## STEP 6 — STYLE TRANSFER MODE

Trigger: "make my design look like this" or "apply this style to mine"

Extract STYLE SIGNATURE:
Personality: [minimal / bold / playful / corporate / warm / technical]
Era: [classic / modern / cutting-edge / retro]
Density: [airy / balanced / dense]
Colour temperature: [warm / cool / neutral]
Corner philosophy: [sharp / soft / round / pill-heavy]
Shadow philosophy: [flat / subtle / dramatic]
Typography: [geometric / humanist / editorial / technical]

Apply signature without copying specific elements.
Note every decision: "Corner radius increased to 16px — matches reference's approachable feel"