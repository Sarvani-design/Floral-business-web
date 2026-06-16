# SKILL FILE: skill-accessibility-deep.md
# Loaded by agent when: full WCAG audit requested or deep accessibility review needed
# Purpose: Complete WCAG 2.2 AA/AAA audit across all disability categories

## STANDARD APPLIED
WCAG 2.2 Level AA — mandatory floor on every project
WCAG 2.2 Level AAA — target where feasible
India: Rights of Persons with Disabilities Act 2016
Global: ADA (US) · EAA (EU) · EN 301 549

---

## VISUAL ACCESSIBILITY

### Contrast Ratios (WCAG 1.4.3 and 1.4.11)
Normal text under 18px regular or 14px bold: minimum 4.5:1 — AA
Large text 18px+ regular or 14px+ bold: minimum 3:1 — AA
UI components and graphics: minimum 3:1 — AA
AAA target body text: 7:1 | AAA large text: 4.5:1
Never colour alone — always pair with: label · icon · pattern · shape
Test in: normal vision · deuteranopia · protanopia · tritanopia · monochromacy

Colour blind safe palette for charts:
Blue #0173B2 · Orange #DE8F05 · Green #029E73 · Red #D55E00
Purple #CC78BC · Brown #CA9161 · Pink #FBAFE4 · Grey #949494

### Focus Indicators (WCAG 2.4.11 — new in 2.2)
Minimum: 2px solid outline · 2px offset · 3:1 contrast against adjacent colours
Recommended: 3px solid · 3px offset · brand colour or high-contrast
Never: outline:none without custom replacement
Must be visible in both light and dark modes

### Text and Zoom (WCAG 1.4.4 and 1.4.12)
200% zoom: readable without horizontal scrolling
Use rem/em for font sizes — never px for type
Line height minimum 1.5 for body text
Never clip text in fixed-height containers — use min-height

### Motion (WCAG 2.3.1)
Never flash more than 3 times per second — seizure risk
Wrap all animations in: @media (prefers-reduced-motion: reduce)
Animations over 5 seconds: pause/stop control required

---

## MOTOR ACCESSIBILITY

### Touch and Click Targets (WCAG 2.5.5)
Web/iOS minimum: 44×44px
Android minimum: 48×48dp
Preferred everywhere: 48×48px
Minimum spacing between adjacent targets: 8px
Destructive actions: place away from other actions · require confirmation

### Keyboard Navigation (WCAG 2.1.1)
All functionality must work by keyboard alone
Tab: between interactive elements
Enter/Space: activate buttons · checkboxes · links
Arrow keys: within components (menus · tabs · radio groups · sliders)
Escape: close modals · menus · tooltips
Skip to content: first focusable element on every page
Skip to navigation: second focusable element
No keyboard traps (except intentional modal focus trapping)

### Pointer Alternatives
Drag-and-drop: keyboard or button alternative required
Gestures: tap/click alternative required
Hover-only content: also accessible on keyboard focus
Right-click menus: alternative access method provided

---

## COGNITIVE ACCESSIBILITY

### Reading Level
Consumer apps: Flesch-Kincaid Grade 8 or below
Healthcare/legal/financial: Grade 6–8
B2B/technical: Grade 10–12 acceptable
Active voice · short sentences under 20 words · no double negatives

### Error Messages
Must identify: which field failed
Must explain: why it failed in plain language
Must instruct: exactly what to do to fix it
Bad: "Invalid input"
Good: "Phone number must be 10 digits. You entered 9 digits."
Never disappear errors before user has fixed them

### Navigation Consistency (WCAG 3.2.3 and 2.4.2)
Navigation: identical position on every page
Page title: unique and descriptive on every page
Breadcrumbs: required for navigation depth beyond 2 levels
Current page: always visually indicated with aria-current="page"

---

## SCREEN READER AND ARIA

### Semantic HTML
nav · main · aside · header · footer · section · article · h1–h6
One h1 per page — reflects page title
Heading hierarchy: never skip levels (h1 → h2 → h3, not h1 → h3)
Lists: ul/ol/li for all lists — never fake with divs
Tables: for tabular data only — never for layout
Forms: fieldset + legend for groups of related inputs

### Required ARIA Attributes
aria-label: icon-only buttons and links
aria-labelledby: link visible label text to component
aria-describedby: connect helper text and error messages to inputs
aria-live="polite": dynamic content updates (status messages · search results)
aria-live="assertive": urgent alerts only (errors · session expiry)
aria-expanded: all expandable elements (accordion · dropdown · menu)
aria-selected: all selectable items (tabs · listbox options)
aria-current="page": current navigation link
aria-hidden="true": purely decorative images and icons

### Images
Informative: descriptive alt text (do not start with "image of" or "photo of")
Decorative: alt="" (empty, not absent — both quotes must be present)
Functional (button/link image): alt describes the action not the image
Complex (charts/diagrams): alt="" plus long description via aria-describedby

### Forms
Every input must have a programmatically associated label
Method 1: <label for="field-id"> plus <input id="field-id">
Method 2: aria-labelledby pointing to visible label element
Method 3: aria-label for inputs without visible labels
Error messages: linked via aria-describedby · role="alert" on error container
Required fields: aria-required="true" plus visual indicator
Autocomplete: HTML autocomplete attribute on all standard fields

### Modals and Overlays
On open: focus moves to first focusable element inside modal
Focus trap: Tab and Shift+Tab cycle only within modal while open
On close: focus returns to element that opened the modal
Escape key: always closes the modal
aria-modal="true" plus role="dialog" plus aria-labelledby pointing to modal title

### Component ARIA Patterns
Tabs: role="tablist" · role="tab" · aria-selected · role="tabpanel" · aria-controls
Accordion: role="button" · aria-expanded · aria-controls on trigger
Dropdown: role="combobox" · role="listbox" · role="option" · aria-expanded
Menu: role="menu" · role="menuitem" · arrow key navigation
Tooltip: role="tooltip" · aria-describedby on trigger
Progress bar: role="progressbar" · aria-valuenow · aria-valuemin · aria-valuemax
Alert: role="alert" or aria-live="polite"

---

## DISABILITY TEST MATRIX

Test against all of these categories:
Motor: keyboard-only · switch access · eye tracking · one-handed use
Visual blind: NVDA+Chrome · VoiceOver+Safari · TalkBack+Chrome
Visual low vision: 200% zoom · high contrast mode · large OS text setting
Visual colour blind: deuteranopia · protanopia · tritanopia
Deaf/hard of hearing: captions on all video · visual alternatives for audio alerts
Cognitive: reading difficulties · attention disorders · memory impairments
Vestibular: reduced motion · no parallax · no auto-play animation
Ageing users: larger targets · simpler language · higher contrast needed
Situational: one hand · bright sunlight · slow connection · wearing gloves

---

## VIOLATION FLAG FORMAT

[A11Y VIOLATION]
WCAG: [criterion number and name] — Level [A / AA / AAA]
Component: [name]
Issue: [exact problem described clearly]
Severity: Critical | Major | Minor
Current state: [what it is now]
Required fix: [exact remedy with HTML/ARIA code example where applicable]