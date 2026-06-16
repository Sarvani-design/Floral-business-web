# SKILL FILE: skill-annotations.md
# Loaded by agent when: annotating or speccing a Figma component
# Purpose: Full token-based annotation blocks for every component, all states

## WHAT THIS SKILL DOES
Produces complete Figma annotation blocks. Every measurement expressed as
token name + pixel value + Figma property. Covers all states, responsive
behaviour, accessibility, and full Figma handoff checklist.

---

## FULL ANNOTATION BLOCK FORMAT

COMPONENT: [Name] / [Variant] / [State: Default|Hover|Focus|Active|Disabled|Loading|Error|Success]
Platform: [iOS / Android / Web / macOS / Windows / All]

SIZE:
Width: [value or Fill or Hug] | Min-width: [px] | Max-width: [px]
Height: [value or auto] | Min-height: [px]
Figma: W=[value] H=[value] (Hug/Fill/Fixed)

SPACING:
Padding: [top]px [right]px [bottom]px [left]px
Tokens: [space-X] [space-X] [space-X] [space-X]
Gap (between children): [px] | Token: [space-X]
Figma: Padding T=[v] R=[v] B=[v] L=[v] | Gap=[v]

TYPOGRAPHY:
[Element]: [family] [size]px/[line-height] [weight] [letter-spacing]
Colour token: [token] = [hex light] / [hex dark]
Figma style: "[Style name]"

COLOURS:
Fill: [token] = [hex light] / [hex dark]
Border: [token] = [hex light] / [hex dark] | Width: [px]
Icon: [token] = [hex light] / [hex dark]
Figma style: "[Colour style name]"

RADIUS: [px] | Token: [radius-X]
Figma: Corner radius = [value]

ELEVATION: [token] = [full shadow value]
Figma: Effect style = "[Effect name]"

STATES:
Default: [describe]
Hover: [colour/underline/scale change] | Transition: [ms] [easing]
Focus: [outline width]px solid [colour token] offset [px]
Active: [colour/scale change] | Transition: [ms] [easing]
Disabled: opacity 0.38 | pointer-events none | cursor not-allowed
Loading: [spinner/skeleton/progress] | interaction disabled
Error: border=[error token] | icon=error | message below field
Success: border=[success token] | icon=checkmark

INTERACTIONS:
Click/Tap: [action]
Keyboard: Enter=[action] | Space=[action] | Escape=[action if applicable]
Minimum tap target: [px]×[px] (must be ≥44×44px)

ACCESSIBILITY:
role="[ARIA role]"
aria-label="[text if icon-only]"
aria-labelledby="[id of label]"
aria-describedby="[id of helper/error]"
aria-expanded="[true/false if applicable]"
aria-disabled="[true if disabled]"
Tab order: [position in focus sequence]

RESPONSIVE:
sm (320–767px): [what changes]
md (768–1023px): [what changes]
lg (1024px+): [what changes]
Text overflow: [clamp at X lines / ellipsis / wrap]

FIGMA STRUCTURE:
Frame: [ComponentName/Variant=X,State=Y]
Auto-layout: [Horizontal/Vertical]
Alignment: [H-align] × [V-align]
Resizing: [Hug/Fill/Fixed] × [Hug/Fixed]
Layer order top to bottom:
  1. [Focus ring]
  2. [Content group]
  3. [Background]

---

## BUTTON — COMPLETE EXAMPLE

COMPONENT: Button / Primary / Default | Platform: Web

SIZE: W=Hug (min 120px max 320px) H=Fixed(48px)
SPACING: Padding 0 24px 0 24px | Tokens: space-0 space-6 space-0 space-6
Gap icon to label: 8px | Token: space-2
TYPOGRAPHY: 16px/1.0 600 +0.01em | Token: text-label-lg
  Colour: color-on-primary = #FFFFFF / #1A1A2E
COLOURS:
  Fill: color-primary = #1A73E8 (light) / #4A90D9 (dark)
  Hover: color-primary-hover = #1557B0
  Pressed: color-primary-pressed = #0F3F7A
  Focus ring: color-focus-ring = #1A73E8 · 3px · offset 2px
RADIUS: 8px | Token: radius-md
STATES:
  Hover: darker fill + shadow-2 | 150ms ease-out
  Focus: 3px solid focus-ring offset 2px | 0ms immediate
  Active: scale(0.98) + darker fill | 100ms ease-out
  Disabled: 38% opacity | pointer-events none
  Loading: label hidden + 20px spinner centred
ACCESSIBILITY: role="button" | aria-busy="true" loading | aria-disabled="true" disabled
RESPONSIVE: sm=full-width | md+=Hug centred or left-aligned

---

## INPUT FIELD — COMPLETE EXAMPLE

COMPONENT: Input / Text / Default | Platform: Web

SIZE: W=Fill (min 200px max 480px) H=Fixed(48px)
SPACING: Padding 0 16px 0 16px | Label-to-input 6px | Input-to-helper 4px
TYPOGRAPHY:
  Label: 14px/1.4 500 | Token: text-label-sm | color-text-secondary
  Input: 16px/1.5 400 | Token: text-body-md | color-text-primary
  Placeholder: 16px/1.5 400 | color-text-placeholder (40% opacity)
  Helper/Error: 12px/1.5 400 | Token: text-caption
COLOURS:
  Background: color-surface-input
  Border default: color-border-default 1px
  Border hover: color-border-hover 1px
  Border focus: color-primary 2px
  Border error: color-error 2px
RADIUS: 8px | Token: radius-md
STATES:
  Default: light bg + 1px border-default
  Hover: border-hover
  Focus: 2px border-primary · label shifts to primary colour
  Error: 2px border-error + error icon + error message below
  Disabled: 35% opacity · cursor not-allowed
ACCESSIBILITY:
  <label for="[id]">[Label]</label>
  <input id="[id]" aria-describedby="[id]-helper [id]-error" aria-required="true" autocomplete="[type]">
  <span id="[id]-helper">[Helper text]</span>
  <span id="[id]-error" role="alert">[Error text]</span>

---

## TOKEN NAMING CONVENTION

Colours:    color/[category]/[variant]     e.g. color/brand/primary
Typography: text/[scale]/[weight]          e.g. text/body/regular
Spacing:    space/[scale]                  e.g. space/4 = 16px
Radius:     radius/[scale]                 e.g. radius/md = 8px
Shadow:     elevation/[level]              e.g. elevation/2
Motion:     motion/duration/[speed]        e.g. motion/duration/normal = 200ms
Easing:     motion/easing/[type]           e.g. motion/easing/standard

---

## FIGMA HANDOFF CHECKLIST

[ ] All components use auto-layout
[ ] All spacing uses token values — no detached numbers
[ ] All colours use styles — no local fills
[ ] All typography uses styles — no local overrides
[ ] All states documented: Default · Hover · Focus · Disabled · Error · Loading
[ ] Responsive frames at all breakpoints
[ ] Component variants set up with properties panel
[ ] Prototype flows for all primary user journeys
[ ] Accessibility annotations layer added
[ ] Dev Mode measurements verified