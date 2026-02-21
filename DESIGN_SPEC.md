# CareerJump — Complete Design Specification

**Date:** 2026-02-21  
**Designer:** @designer  
**Status:** Stage 3 Complete — Ready for Development

---

## Design Philosophy

**Tone:** "Warm realism — like talking to a friend who's been there"

**NOT:** Corporate polish, motivational-speaker energy, hustle culture  
**YES:** NPR podcast aesthetic, thoughtful, conversational, no BS

**The Unforgettable Element:**  
Opening with a vulnerable first-person narrative that immediately validates the reader's fears:
> "At 44, I had 18 years in education. Zero tech experience. And a mortgage that didn't care about my dreams."

This is anti-SaaS. We don't lead with features. We lead with STORY.

---

## Site Map

```
CareerJump/
├── / (Landing Page)
│   ├── #hero (First-person story opening)
│   ├── #stories (3-4 midlife pivot case studies)
│   ├── #how-it-works (Simple 3-step process)
│   ├── #mentors (Not a grid — testimonial-style intro cards)
│   ├── #pricing (Simple 2-tier: Trial + Monthly)
│   ├── #faq (Accordion, addresses fears)
│   └── #footer
│
├── /find-mentor (Mentee Quiz)
│   ├── Question 1: Current role/industry
│   ├── Question 2: Target role/industry
│   ├── Question 3: Biggest fear/concern
│   ├── Question 4: Timeline/urgency
│   ├── Question 5: Budget comfort level
│   └── Submit → Thank you page with next steps
│
├── /become-mentor (Mentor Intake Form)
│   ├── Career history
│   ├── Transition story (200 words)
│   ├── Availability
│   ├── Areas of expertise
│   └── Submit → Manual review message
│
└── /thank-you (Post-submission)
    ├── What happens next
    ├── Expected timeline
    └── Secondary CTA (join waitlist, read blog, etc.)
```

**NOT in MVP:**
- Dashboard/login portal
- Automated matching interface
- In-app messaging
- Profile pages
- Community features

---

## Design System

### Typography

**Display (Headlines, Hero):**  
**Crimson Text** (Google Fonts) — Serif for gravitas and warmth  
- Weight: 400 (regular), 600 (semibold)
- Use: H1, H2, hero copy, section titles
- WHY: Not Playfair (too formal), not Georgia (too dated). Crimson has editorial warmth without being stuffy.

**Body (Paragraphs, UI):**  
**Inter** (Google Fonts) — Clean, readable sans-serif  
- Weight: 400 (regular), 500 (medium), 600 (semibold)
- Use: Body text, buttons, labels, navigation
- WHY: Exceptional readability, warm humanist proportions, pairs beautifully with Crimson

**Monospace (Data, Code, Metrics):**  
**JetBrains Mono** (Google Fonts)  
- Weight: 400 (regular)
- Use: Numbers, timelines, before/after salary data
- WHY: Modern, approachable monospace that doesn't scream "developer tool"

**Type Scale:**
```css
--text-xs: 12px;   /* Labels, captions */
--text-sm: 14px;   /* Body secondary */
--text-base: 16px; /* Body primary */
--text-lg: 18px;   /* Lead paragraphs */
--text-xl: 24px;   /* H3 */
--text-2xl: 32px;  /* H2 */
--text-3xl: 48px;  /* H1 desktop */
--text-4xl: 64px;  /* Hero display desktop */
```

**Mobile adjustments:**
```css
@media (max-width: 768px) {
  --text-3xl: 36px;
  --text-4xl: 44px;
}
```

---

### Color Palette

**Primary:**
```css
--terracotta-50: #FBF4F2;
--terracotta-100: #F5E5E0;
--terracotta-500: #D4735E; /* Main brand color */
--terracotta-600: #C05D47;
--terracotta-700: #A04937;
```

**Secondary:**
```css
--sage-50: #F6F7F5;
--sage-100: #E8EBE6;
--sage-500: #8B9D83; /* Accent color */
--sage-600: #6F8267;
--sage-700: #566650;
```

**Neutrals:**
```css
--warm-gray-50: #F9F8F6;
--warm-gray-100: #F5F3F0; /* Page background */
--warm-gray-200: #E8E5E1;
--warm-gray-300: #D1CBC3;
--warm-gray-800: #4A4540;
--warm-gray-900: #2E2E2E; /* Text primary */
```

**Functional:**
```css
--success: #6F8267; /* Sage 600 */
--error: #C05D47;   /* Terracotta 600 */
--warning: #D4735E; /* Terracotta 500 */
```

**Usage:**
- Backgrounds: warm-gray-50, warm-gray-100
- Text: warm-gray-900 (primary), warm-gray-800 (secondary)
- CTAs: terracotta-500 (primary button), sage-500 (secondary button)
- Accents: terracotta-500 for highlights, sage-500 for subtle emphasis

---

### Components

#### Button Styles

**Primary (CTA):**
```css
background: var(--terracotta-500);
color: white;
padding: 14px 32px;
border-radius: 8px;
font-weight: 600;
font-size: 16px;
transition: all 200ms ease;

hover:
  background: var(--terracotta-600);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(212, 115, 94, 0.25);
```

**Secondary (Ghost):**
```css
background: transparent;
color: var(--terracotta-500);
border: 2px solid var(--terracotta-500);
padding: 12px 30px;
border-radius: 8px;

hover:
  background: var(--terracotta-50);
```

**Tertiary (Text Link):**
```css
color: var(--sage-600);
text-decoration: underline;
text-underline-offset: 4px;
text-decoration-thickness: 2px;

hover:
  color: var(--sage-700);
```

---

#### Card Styles

**Story Card (Case Studies):**
```css
background: white;
border: 1px solid var(--warm-gray-200);
border-radius: 12px;
padding: 32px;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

Structure:
  ├── Portrait (illustration, NOT photo)
  ├── Name + Age (e.g., "Sarah, 44")
  ├── Transition (e.g., "Teacher → UX Designer")
  ├── Story (200 words, conversational tone)
  ├── Timeline (e.g., "Made the jump in 14 months")
  └── Salary Note (e.g., "Started at $65k, now $92k")
```

**Mentor Intro Card:**
```css
background: var(--warm-gray-50);
border-left: 4px solid var(--terracotta-500);
padding: 24px;
border-radius: 0 8px 8px 0;

Structure:
  ├── Quote (pull quote style, 1-2 sentences)
  ├── Name + Background
  └── Expertise areas (3-4 tags)
```

---

#### Form Elements

**Input Field:**
```css
background: white;
border: 2px solid var(--warm-gray-300);
border-radius: 8px;
padding: 12px 16px;
font-size: 16px;
color: var(--warm-gray-900);

focus:
  border-color: var(--terracotta-500);
  outline: none;
  box-shadow: 0 0 0 4px rgba(212, 115, 94, 0.1);
```

**Textarea:**
```css
/* Same as input, but */
min-height: 120px;
resize: vertical;
```

**Radio/Checkbox:**
```css
/* Custom styling with accent color */
accent-color: var(--terracotta-500);
width: 20px;
height: 20px;
```

**Label:**
```css
font-weight: 500;
color: var(--warm-gray-800);
margin-bottom: 8px;
display: block;
```

---

#### FAQ Accordion

**Closed State:**
```css
background: white;
border: 1px solid var(--warm-gray-200);
border-radius: 8px;
padding: 20px;
margin-bottom: 12px;
cursor: pointer;

Question:
  font-family: 'Crimson Text', serif;
  font-size: 20px;
  color: var(--warm-gray-900);
  
Icon:
  chevron-down, rotates 180deg when open
  color: var(--terracotta-500);
```

**Open State:**
```css
border-color: var(--terracotta-500);
background: var(--terracotta-50);

Answer:
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--warm-gray-200);
  color: var(--warm-gray-800);
```

---

### Spacing & Layout

**Container:**
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 24px;

@media (max-width: 768px) {
  padding: 0 16px;
}
```

**Section Spacing:**
```css
padding: 96px 0; /* Desktop */

@media (max-width: 768px) {
  padding: 64px 0;
}
```

**Grid Patterns:**
- Feature cards: 3-column → 1-column mobile
- Story cards: 2-column → 1-column mobile
- FAQ: Always single column

---

### Motion & Animation

**Page Load Animation:**
```css
/* Hero elements stagger in */
h1: opacity 0→1, translateY(20px→0) 600ms ease, delay 100ms
subtitle: delay 200ms
CTA buttons: delay 300ms
```

**Scroll Animations:**
```css
/* Section reveals as they enter viewport */
sections: opacity 0→1, translateY(30px→0) 500ms ease
triggered at 80% viewport height
```

**Micro-interactions:**
```css
Buttons: transform translateY(-2px) 200ms ease
Cards: hover lift + shadow 300ms ease
Links: color transition 200ms ease
```

**NO:**
- Parallax scrolling
- Rotating elements
- Confetti/celebration effects
- Looping background animations

---

### Background Atmosphere

**Base Layer:**
```css
body {
  background: var(--warm-gray-100);
}
```

**Pattern Overlay (subtle):**
```css
.pattern-overlay::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url('/images/bg-pattern.png');
  opacity: 0.03;
  pointer-events: none;
  z-index: -1;
}
```

**Section Variations:**
```css
Hero section:
  background: linear-gradient(135deg, 
    var(--warm-gray-50) 0%, 
    var(--terracotta-50) 100%);

Stories section:
  background: white;

How It Works:
  background: var(--sage-50);

Pricing:
  background: white;

FAQ:
  background: var(--warm-gray-50);
```

---

## Page Designs

### Landing Page (/)

#### Hero Section

**Layout (Desktop):**
```
┌────────────────────────────────────────┐
│  Nav: Logo [left]  Find Mentor  Become│
│                          Mentor [right]│
├────────────────┬───────────────────────┤
│                │                       │
│  HERO TEXT     │   [Hero Illustration] │
│  (60% width)   │   (40% width)         │
│                │                       │
│  First-person  │   Organic shapes,     │
│  story opening │   warm colors,        │
│                │   journey visual      │
│  [Primary CTA] │                       │
│  [Ghost CTA]   │                       │
│                │                       │
└────────────────┴───────────────────────┘
```

**Mobile:**
```
┌──────────────────┐
│  Nav (hamburger) │
├──────────────────┤
│  HERO TEXT       │
│                  │
│  Story opening   │
│  (full width)    │
│                  │
│  [CTA Primary]   │
│  [CTA Ghost]     │
├──────────────────┤
│  [Illustration]  │
│  (below text)    │
└──────────────────┘
```

**Copy Structure:**
```
Badge: "Mentorship for midlife career changers"

H1 (Crimson Text, 64px desktop):
"At 44, I had 18 years in education.
Zero tech experience.
And a mortgage that didn't care about my dreams."

Subtitle (Inter, 18px, warm-gray-800):
Here's how I made the jump — and the mentors who showed me the path.
Whether you're pivoting from teaching to tech, corporate to creative, or 
industry to startup, you don't have to figure it out alone.

Primary CTA: "Find Your Mentor" → /find-mentor
Secondary CTA: "See Pivot Stories" → scroll to #stories
```

**Design Notes:**
- NO stock photos of professionals shaking hands
- Illustration should feel organic, hand-drawn, warm
- Text left-aligned, not centered
- Breathing room — don't cram everything above fold

---

#### Stories Section

**Layout:**
```
Section Title: "Real Pivots. Real People. Real Timelines."
Subtitle: "These aren't success stories. They're roadmaps."

┌─────────────────┬─────────────────┐
│  Story Card 1   │  Story Card 2   │
│                 │                 │
│  [Portrait]     │  [Portrait]     │
│  Name, age      │  Name, age      │
│  Before → After │  Before → After │
│                 │                 │
│  200-word story │  200-word story │
│                 │                 │
│  Timeline: 14mo │  Timeline: 22mo │
│  $58k → $92k    │  $72k → $85k    │
└─────────────────┴─────────────────┘

┌─────────────────┬─────────────────┐
│  Story Card 3   │  Story Card 4   │
│  (same layout)  │  (same layout)  │
└─────────────────┴─────────────────┘
```

**Mobile:** Single column stack

**Example Card Content:**

**Sarah, 44 — Teacher → UX Designer**

*"I'd been teaching high school English for 18 years when I realized I was more excited troubleshooting the school's website than grading essays. But how do you pivot to tech at 44 with zero portfolio?*

*My mentor, Lisa (former teacher turned product designer), didn't just tell me to 'learn Figma.' She showed me how to reframe classroom experience as user research. She introduced me to hiring managers who valued my communication skills over my bootcamp certificate.*

*The scariest part? Taking a $12k pay cut for my first UX role. But Lisa had done the same thing at 46. She knew the timeline: 6 months to break in, 18 months to match my old salary, 3 years to surpass it. She was right."*

**Timeline:** 14 months (6mo bootcamp + 8mo job search)  
**Salary:** Started at $58k, now $92k (2 years in)

---

#### How It Works Section

**Layout:**
```
Section Title: "Three Steps. No Guesswork."

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Step 1     │  │   Step 2     │  │   Step 3     │
│   [Icon]     │  │   [Icon]     │  │   [Icon]     │
│              │  │              │  │              │
│  Tell Your   │  │  We Match    │  │  Meet Your   │
│  Story       │  │  You         │  │  Mentor      │
│              │  │              │  │              │
│  5-minute    │  │  Manually    │  │  $49 trial   │
│  quiz about  │  │  curated     │  │  session or  │
│  where you   │  │  (no algos)  │  │  monthly     │
│  are & where │  │              │  │  guidance    │
│  you want    │  │  Within      │  │              │
│  to go       │  │  5 days      │  │  Calendly    │
│              │  │              │  │  booking     │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Mobile:** Vertical stack with connecting dotted lines

**Design Notes:**
- Icons from generated feature-icons.png (compass, handshake, path, plant)
- NO dashboard screenshots
- NO "AI-powered" buzzwords
- Emphasize MANUAL curation as feature, not bug

---

#### Mentors Section

**NOT a grid of circular avatars. Instead:**

```
Section Title: "Mentors Who've Been There"

┌────────────────────────────────────────┐
│  "I pivoted from law to product at 51. │
│  The hardest part wasn't the skillset  │
│  — it was believing I wasn't too late."│
│                                        │
│  — David, Former Corporate Lawyer     │
│     Now: Senior PM at Series B Startup │
│     Expertise: Legal→Tech, Negotiation,│
│               Late-stage Pivots        │
└────────────────────────────────────────┘

[2-3 more mentor quote cards, same style]

CTA: "Become a Mentor" → /become-mentor
```

**Design:**
- Quote-first, NOT profile-first
- Border-left accent (terracotta)
- Sage background
- Expertise tags as small badges

---

#### Pricing Section

**Layout:**
```
Section Title: "Start with One Session. Stay for the Journey."

┌─────────────────┬─────────────────┐
│  Trial Session  │  Monthly Mentor │
│                 │  [POPULAR]      │
│  $49            │  $39/month      │
│  ────────────── │  ────────────── │
│                 │                 │
│  ✓ 1-hour video │  ✓ 2 sessions/mo│
│    call         │  ✓ Email support│
│  ✓ Career       │  ✓ Accountability│
│    roadmap      │    check-ins    │
│  ✓ Resource     │  ✓ Community    │
│    list         │    access       │
│  ✓ Recording    │  ✓ All trial    │
│                 │    benefits     │
│                 │                 │
│  [Book Trial]   │  [Get Started]  │
└─────────────────┴─────────────────┘
```

**Mobile:** Stack vertically, "Monthly Mentor" on top

**Design Notes:**
- White cards on sage-50 background
- "Popular" badge in terracotta
- Price in Crimson Text (large, serif)
- Features in simple list, not bloated grid
- NO "Enterprise" tier (not the audience)

---

#### FAQ Section

**Sample Questions:**

**"I'm 48. Am I too old to switch careers?"**  
No. Our oldest mentor made their pivot at 56. The advantage of pivoting mid-career? You bring skills younger competitors don't have: leadership, communication, resilience. Employers value that — if you know how to frame it.

**"Will I have to take a pay cut?"**  
Probably, at first. Most of our mentees took 10-25% cuts for their first role in a new field, then matched their old salary within 18-24 months. Your mentor will help you negotiate smartly and plan financially.

**"How is this different from LinkedIn mentorship?"**  
LinkedIn mentors are often aspirational (connect with someone successful). CareerJump mentors are operational (worked with someone who solved your exact problem). We match based on life stage, not just industry.

**"What if I don't click with my mentor?"**  
Tell us. We'll find a better match. Chemistry matters — this isn't transactional consulting.

**"Do you offer refunds?"**  
Trial sessions are non-refundable (you're paying for a mentor's time). Monthly memberships can be canceled anytime — no long-term contracts.

---

#### Footer

**Layout:**
```
┌──────────────────────────────────────────┐
│  CareerJump                              │
│  Mentorship for midlife career changers  │
│                                          │
│  Links        Company      Legal         │
│  ────────     ────────     ────────      │
│  Find Mentor  About        Privacy       │
│  Become       Blog         Terms         │
│   Mentor      Careers                    │
│  Pricing                                 │
│                                          │
│  © 2026 CareerJump                       │
└──────────────────────────────────────────┘
```

**Design:**
- Simple, text-based
- NO social media icons (not relevant yet)
- Warm gray background
- Links in sage-600 (subtle)

---

### Mentee Quiz Page (/find-mentor)

**Layout:**
```
┌────────────────────────────────────────┐
│  Progress: ● ● ○ ○ ○  (2 of 5)        │
├────────────────────────────────────────┤
│                                        │
│  Question 2:                           │
│  What role/industry are you targeting? │
│                                        │
│  ┌──────────────────────────────────┐ │
│  │ [Text input]                     │ │
│  └──────────────────────────────────┘ │
│                                        │
│  Examples: UX Designer, Product Manager│
│            Data Analyst, DevOps Eng    │
│                                        │
│  [Back]              [Next Question →]│
│                                        │
└────────────────────────────────────────┘
```

**Questions:**
1. What's your current role/industry?
2. What role/industry are you targeting?
3. What's your biggest fear or concern about this pivot?
4. What's your timeline? (Exploring / 6-12 months / ASAP)
5. Budget comfort level? ($49 trial only / $39/mo / $100+/mo)

**Design Notes:**
- One question per screen
- Progress indicator (dots, not bar)
- Warm, encouraging micro-copy
- NO "Skip" options (we need complete data for matching)
- Final screen: "Thank you! We'll email a match within 5 business days."

---

### Mentor Intake Page (/become-mentor)

**Form Fields:**
1. Name
2. Email
3. Current role + company
4. Previous career (before pivot)
5. Your transition story (200-300 words)
   - *Prompt: "Tell us about your pivot. What was hardest? What surprised you? What do you wish someone had told you?"*
6. Areas of expertise (checkboxes):
   - Career transitions (which industries)
   - Resume/portfolio building
   - Salary negotiation
   - Dealing with ageism
   - Work-life balance during transition
   - Upskilling/certifications
7. Availability (hours/week)
8. Why do you want to mentor?

**Design:**
- Long-form, single-page layout
- Generous spacing (feels like a conversation, not a data form)
- Textarea for story has placeholder text: *"Example: I was 44, had two kids in middle school, and a mortgage that made risk feel impossible. I'd spent 20 years in finance..."*
- Submit → "Thank you! We'll review your application and reach out within 7 days."

---

### Thank You Page (/thank-you)

**Layout:**
```
┌────────────────────────────────────────┐
│           ✓                            │
│     We received your submission        │
│                                        │
│  What happens next:                    │
│  1. We'll review within 24 hours       │
│  2. You'll get an email with your match│
│     (or next steps) within 5 days      │
│  3. Book your first session via Calendly│
│                                        │
│  While you wait:                       │
│  → Read our blog: "5 Myths About       │
│     Switching Careers After 40"        │
│  → Join our newsletter (1 story/week)  │
│                                        │
│  [Return to Homepage]                  │
└────────────────────────────────────────┘
```

---

## Mobile Responsiveness Strategy

### Breakpoints
```css
/* Tablet */
@media (max-width: 1024px) {
  /* 2-column grids remain */
}

/* Mobile */
@media (max-width: 768px) {
  /* Everything stacks vertically */
  /* Font sizes reduce 25-30% */
  /* Padding reduces from 96px to 64px */
}

/* Small mobile */
@media (max-width: 480px) {
  /* Further compact spacing */
  /* Buttons full-width */
}
```

### Critical Fixes

**Hero Section:**
```css
@media (max-width: 768px) {
  /* Switch from grid to flex column */
  display: flex;
  flex-direction: column;
  
  /* Illustration below text, not beside */
  .hero-text { order: 1; }
  .hero-image { order: 2; margin-top: 32px; }
}
```

**Story Cards:**
```css
@media (max-width: 768px) {
  /* 2-column → 1-column */
  grid-template-columns: 1fr;
  gap: 24px;
}
```

**Navigation:**
```css
@media (max-width: 768px) {
  /* Hamburger menu */
  /* Overlay panel slides from right */
  /* Terracotta background */
}
```

**Form Inputs:**
```css
@media (max-width: 768px) {
  /* Full width */
  width: 100%;
  font-size: 16px; /* Prevents iOS zoom */
}
```

---

## Anti-Patterns Checklist

### ✅ AVOID:
- [ ] Purple/blue gradients on white
- [ ] "AI-powered matching" language
- [ ] Dashboard screenshots
- [ ] Generic "Find your mentor" hero copy
- [ ] Stock photos (handshakes, diverse professionals in suits)
- [ ] Circular avatar grids with star ratings
- [ ] Even color distribution (5 colors fighting for attention)
- [ ] Symmetrical layouts
- [ ] Centered hero sections
- [ ] Sans-serif everywhere (no personality)
- [ ] Motivational speaker energy ("Unlock your potential!")

### ✅ DO:
- [x] First-person story opening
- [x] Serif headlines for warmth
- [x] Terracotta + sage (earthy, NOT corporate)
- [x] Generated illustrations (organic, NOT geometric tech)
- [x] Quote-first mentor intros
- [x] Manual curation as selling point
- [x] Life stage specificity (mortgage, kids, age)
- [x] Conversational FAQ tone
- [x] Real timelines and salary transparency
- [x] Simple, uncluttered pricing

---

## Component Library (shadcn/ui)

**Pre-installed components to use:**
- Button (with variants: primary, secondary, ghost)
- Badge (for "Popular" tag, expertise tags)
- Card (story cards, pricing cards)
- Accordion (FAQ section)
- Form elements (Input, Textarea, Label, RadioGroup, Checkbox)
- Separator (section dividers)

**Custom components to build:**
- StoryCard (portrait + transition + narrative + metrics)
- MentorQuoteCard (pull quote + bio + tags)
- ProgressDots (quiz navigation)
- PricingCard (price + features + CTA)

---

## Generated Assets Inventory

**Generated with nano-banana-pro:**

1. **hero-journey.png** (2K)  
   *"Abstract illustration of a winding path transitioning from corporate building silhouettes to open creative landscape, warm terracotta and sage green color palette, organic shapes, paper texture, minimalist editorial style, hopeful and grounded aesthetic"*  
   **Usage:** Hero section right side (desktop), below hero text (mobile)

2. **feature-icons.png** (1K)  
   *"Set of 4 minimalist line art icons in warm terracotta color: compass rose (guidance), two hands clasping (mentorship), winding path (journey), sprouting plant (growth), consistent stroke weight, organic rounded style, warm editorial aesthetic"*  
   **Usage:** How It Works section (step icons)

3. **bg-pattern.png** (1K)  
   *"Seamless organic pattern of subtle overlapping leaves and geometric dots, sage green and warm beige tones, very low contrast for web background use, minimalist editorial style, paper grain texture"*  
   **Usage:** Fixed background overlay at 3% opacity across all pages

4. **mentor-portraits.png** (2K)  
   *"Abstract portrait illustration set of 3 diverse professionals in their 40s and 50s, warm terracotta and sage green color palette, geometric minimalist style with paper texture, confident and thoughtful expressions, editorial magazine aesthetic, NOT photorealistic"*  
   **Usage:** Story section case study cards (will need to split into individual portraits)

**Assets location:**  
`~/clawd/projects/careerjump/public/images/`

---

## Handoff Notes for @coder

### Implementation Priority:
1. **Landing page first** — this is what validates the concept
2. **Mentee quiz** — needed for lead generation
3. **Mentor intake** — can be Google Form fallback if time-crunched
4. **Thank you page** — simple, low priority

### Tech Stack (from planner):
- Next.js 14 + Tailwind CSS
- shadcn/ui components
- Vercel deployment

### Critical Details:
- Use `next/font/google` for Crimson Text, Inter, JetBrains Mono
- Implement scroll animations with Framer Motion (simple opacity + translateY)
- Mobile-first: start with 768px design, then expand
- Form validation: all fields required except "Why mentor" (optional)
- Calendly embed: use their standard iframe (no custom styling needed)
- Stripe: payment link only (NO embedded checkout for MVP)

### Content Needs:
- 3-4 real case studies (writer can draft, or use placeholder template from design)
- 5-7 FAQ questions (draft provided in design, can be refined)
- Mentor quote cards: 3-4 examples (draft from planner's research or create realistic personas)

### Accessibility:
- Color contrast: all text meets WCAG AA (4.5:1)
- Semantic HTML: nav, main, section, article
- Form labels: always visible (not placeholder-only)
- Focus states: visible ring on all interactive elements
- Alt text: all images (especially story portraits)

### Performance:
- Generated images are already optimized (2K max)
- Use Next.js Image component with lazy loading
- Background pattern: inline as data URI (it's tiny) or load async
- Font loading: `font-display: swap` to prevent layout shift

---

**Design Status:** ✅ Complete  
**Next Stage:** 4. Create (@coder)

**Questions for coder?** Ping in card comments.

