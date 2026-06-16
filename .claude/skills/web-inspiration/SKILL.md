# SKILL FILE: skill-web-inspiration.md
# Loaded by agent when: any URL is pasted in a message
# Purpose: Fetch live pages, extract design decisions, store as inspiration entries

## WHAT THIS SKILL DOES
Fetches a URL, extracts colours, typography, spacing, layout, component
patterns, and interaction models. Stores as numbered inspiration entries.
Compares against current design. Applies best elements without copying.

---

## STEP 1 — FETCH AND READ
1. Fetch full page via web fetch
2. Read HTML structure: nav · hero · sections · footer · key components
3. Extract all visible text: headings · CTAs · labels · microcopy
4. Note information architecture: what comes first, what is prominent
5. If blocked by auth/CSP: note it, ask user for screenshot, switch to skill-image-analysis.md

---

## STEP 2 — EXTRACT DESIGN DECISIONS

COLOURS:
COLOUR: [name] = [hex or description] | Role: [primary CTA / background / text / accent / border]

TYPOGRAPHY:
TYPOGRAPHY: [element] = [family] [size]/[line-height] [weight]
Detect font from: Google Fonts link tag · "tw-font" = Tailwind · system-ui = system font

SPACING:
SPACING: [context] = [estimated value]
Page max-width: [px] | Horizontal padding: [px] | Section gap: [px] | Card padding: [px]

COMPONENT PATTERNS:
PATTERN: [component] = [description of how it works and looks]
Document: nav · hero · cards · buttons · forms · modals · empty states · loading states

INTERACTIONS:
INTERACTION: [pattern] = [description]
Look for: sticky nav · parallax · scroll animations · skeleton screens · toasts · transitions

---

## STEP 3 — QUALITY ASSESSMENT

INSPIRATION SOURCE QUALITY
Source: [URL] | Industry: [detected] | Platform: [web/mobile/both]

Strengths (worth adapting):
+ [Element + why it works]

Weaknesses (avoid):
- [Weakness + which heuristic it violates]

Accessibility quick check:
Contrast: [appears sufficient / low / very low]
Focus indicators: [visible / missing]
Touch targets: [adequate / too small]

Innovation spotted:
[Any pattern that is unusual, clever, or worth studying]

---

## STEP 4 — INSPIRATION BANK ENTRY

INSPIRATION BANK — ENTRY [number]
Source: [URL] | Industry: [industry] | Platform: [platform]

COLOURS: primary=[hex] · background=[hex] · text=[hex] · accent=[hex]
TYPOGRAPHY: font=[family] | heading=[size/weight] | body=[size/line-height]
SPACING: section-gap=[px] | card-padding=[px] | page-max-width=[px]
PATTERNS: nav=[desc] | hero=[desc] | card=[desc] | cta=[desc]

BEST TO ADAPT:
1. [Element + why it works]
2. [Element + why it works]
3. [Element + why it works]

AVOID:
1. [Element + why not]

---

## STEP 5 — APPLY TO CURRENT DESIGN

Colour: extract intent not hex (e.g. "warm coral = urgency") · find equivalent in current palette
Typography: extract scale ratios · apply to current type system
Layout: extract grid proportions · apply golden ratio where found
Components: describe pattern in design terms · map to Figma components

---

## STEP 6 — COMPETITIVE ANALYSIS (2+ URLs)

COMPETITIVE ANALYSIS — Products: [list]

| Feature | [Site A] | [Site B] | [Site C] | Best approach |
|---|---|---|---|---|
| Navigation | | | | |
| Hero layout | | | | |
| CTA placement | | | | |
| Colour scheme | | | | |
| Typography | | | | |
| Mobile pattern | | | | |
| Unique innovation | | | | |

INDUSTRY CONVENTIONS (what all competitors do — user expectation): [list]
OPPORTUNITY GAPS (what none do well — differentiation space): [list]

---

## SESSION MEMORY

All entries remembered by number within session (Entry 1, Entry 2...)
"Use colours from Entry 1" → apply Entry 1 colours
"Combine Entry 1 layout with Entry 2 typography" → merge both
"What have we collected?" → list all entries with source + key elements
To persist across sessions: output full INSPIRATION BANK at end of session