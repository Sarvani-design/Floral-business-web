# SKILL FILE: skill-persona-testing.md
# Loaded by agent when: user says "test this" · "user test" · "review" · "who uses this"
# Purpose: Auto-generate user personas and test design as each one

## WHAT THIS SKILL DOES
Generates 8 realistic user personas for the product, steps fully inside
each persona, tests every screen and flow from their reality, and reports
findings in that persona's voice with severity ratings.

---

## STEP 1 — AUTO-GENERATE PERSONAS

Always generate minimum 8 base personas plus industry-specific extras.

### PERSONA A — Novice / First-Timer
Name: generate realistic Indian first name | Age: 22–35
Tech: low-medium · WhatsApp, YouTube, basic apps
Device: budget Android (Redmi/Realme) | Network: 3G/4G
Pain: jargon confusion · fear of mistakes · skips instructions
Goal: complete main task without help
Test focus: onboarding · empty states · error messages · first-use friction

### PERSONA B — Power User / Expert
Name: generate realistic name | Age: 28–45
Tech: high · multiple apps · keyboard shortcuts · efficiency driven
Device: iPhone 14+ or Samsung flagship | Network: fast WiFi
Pain: too many confirmation dialogs · no bulk actions · slow flows
Goal: complete 10 tasks in minimum time
Test focus: shortcuts · bulk actions · advanced filters · keyboard navigation

### PERSONA C — Elderly User
Name: generate name appropriate for 60+ | Age: 60–75
Tech: very low · learned smartphone recently · children help
Device: basic Android · LARGE system text (150–200%)
Pain: small text · small targets · too many steps · confusing icons
Goal: complete one simple task independently
Test focus: text overflow at 200% · tap target size · icon clarity · error recovery

### PERSONA D — Colour Blind User
Name: generate realistic name | Age: 25–40
Condition: deuteranopia (red-green · most common · affects 8% of males)
Pain: red/green status indicators · colour-only charts · colour-only errors
Goal: understand all status, error, and data without colour
Test focus: colour-only encoding · contrast · charts · form validation states

### PERSONA E — Motor Impaired User
Name: generate realistic name | Age: 30–50
Condition: reduced fine motor control (tremor / one-handed / limited grip)
Pain: tiny targets · precision swipes · drag interactions
Goal: complete all tasks with large taps only, no precise gestures
Test focus: tap target sizes · swipe alternatives · gesture dependencies

### PERSONA F — Screen Reader User
Name: generate realistic name | Age: 20–50
Condition: blind or severely visually impaired
Tech: TalkBack (Android) / VoiceOver (iOS) / NVDA+Chrome (Web)
Pain: images without alt · unlabelled buttons · bad focus order
Goal: complete main task using screen reader only
Test focus: ARIA labels · alt text · focus order · live regions · modal focus trap

### PERSONA G — Low Connectivity User
Name: generate realistic name | Age: any
Location: Tier 2/3 city or rural Andhra Pradesh
Network: 2G–3G drops frequently | Device: budget Android 2GB RAM
Pain: blank screens · data loss on error · heavy pages
Goal: complete task on slow/unstable connection
Test focus: loading states · offline handling · error recovery · page weight

### PERSONA H — Child User (include when product is relevant to children)
Name: generate child's name | Age: 8–14
Tech: high for entertainment · low for productivity
Device: shared family tablet or hand-me-down phone
Pain: complex nav · long text · no visual feedback
Goal: engage with core feature independently
Test focus: visual hierarchy · gamification · error prevention · content safety

### INDUSTRY-SPECIFIC EXTRAS (auto-add based on detected industry)
Food/Restaurant: hungry user ordering in 5-minute lunch break
eCommerce: suspicious first-time buyer who doesn't trust the site
Healthcare: anxious patient with no medical background
Fintech: risk-averse user afraid of financial mistakes
Education: distracted student switching between apps
Real Estate: couple making major decision together
SaaS: new employee left alone with the tool, no onboarding

---

## STEP 2 — ENTER THE PERSONA

Before testing write immersion statement:
ENTERING PERSONA: [Name]
"I am [name]. I am [age] years old. Today I am trying to [goal] and I feel [emotional state].
My biggest concern is [specific fear or friction point]."

Stay in persona throughout the entire test. Never break character.

---

## STEP 3 — TEST PROTOCOL (run for each persona)

Test 1 — First Impression (3 seconds)
What do I see? What do I think this is for? What do I do first?
Am I confused? Intimidated? Reassured?
Flag: anything causing hesitation or discomfort for this specific persona

Test 2 — Primary Task Attempt
Try to complete the main task. Note every friction point.
Every assumption the design makes that this persona would not share.
Every point where this persona would give up or call for help.

Test 3 — Error Encounter
Deliberately trigger an error. Read it as this persona.
Can I fix it from the instructions? Is the language clear to me?
Flag: jargon · unclear instructions · panic-inducing language

Test 4 — Persona-Specific Check
Persona C: does large text break layout? Text clipped?
Persona D: is all information available without colour?
Persona E: are all targets reachable without precision gestures?
Persona F: does everything have a meaningful accessible name?
Persona G: does page handle slow loading gracefully?

---

## STEP 4 — PERSONA REPORT FORMAT

---
PERSONA TEST REPORT
Persona: [Name] — [Type]
Device: [device + OS] | Network: [type]
Goal: [what they were trying to do]
Emotional state entering: [anxious / curious / impatient / confused]

JOURNEY RESULT: COMPLETED | STRUGGLED | FAILED | GAVE UP

FRICTION POINTS:
1. [Screen/component]: [what happened from this persona's perspective]
   Severity: Critical | Major | Minor
   In persona's words: "[quote as if persona is speaking]"
   Fix: [specific recommendation]

MOMENTS OF DELIGHT:
- [What worked well specifically for this persona]

UNIQUE ISSUES FOR THIS PERSONA:
- [Issues generic testing would miss]

PERSONA VERDICT:
"[2–3 sentences in persona's voice — what they'd tell a friend]"

Severity summary: Critical [n] | Major [n] | Minor [n]
Experience rating: [1–5] — [brief reason in persona's voice]
---

---

## STEP 5 — CROSS-PERSONA SUMMARY

CROSS-PERSONA SUMMARY
Most common critical issue: [issue + which personas affected]
Issue unique to one persona: [issue + which persona]
Quick wins (fix once helps multiple personas): [list]
Deep work needed (fundamental redesign): [list]
Fix priority order: [ordered list, Critical first]

---

## TRIGGER PHRASES

"test this" → run all 8 base personas
"full persona test" → all 8 + industry-specific extras
"test for elderly" → Persona C only at full depth
"test for accessibility" → Personas D + E + F simultaneously
"test for India" → Personas A + C + G (novice + elderly + low connectivity)
"who uses this?" → generate persona list, ask if full test wanted
"test as [type]" → run that single persona type only