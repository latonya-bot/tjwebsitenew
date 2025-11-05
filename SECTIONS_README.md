# Professional Website - Sections Documentation

This document provides an overview of the implemented sections for the professional website.

## Project Structure

```
app/
├── components/
│   ├── HeroSection.tsx       # Section 1: Full-height hero with navigation
│   └── ValueSection.tsx      # Section 2: Value proposition with CTA
├── globals.css               # Global styles with CSS variables
├── layout.tsx                # Root layout with Poppins & Playfair fonts
└── page.tsx                  # Main page combining sections
```

## Implemented Sections

### Section 1: Hero Section (`HeroSection.tsx`)

**Purpose**: Main entry point combining personal branding with compelling headline

**Key Features**:
- ✅ Full viewport height with lavender background (`--lavender-200`)
- ✅ Fixed navigation bar with 8 links (Home, About, Book, Blog, Courses, Podcast, Speaking, Freebies)
- ✅ Giant background name "Jenna Kutcher" in Playfair Display font
- ✅ Centered professional portrait with drop shadow
- ✅ Left and right tagline copy positioned around portrait
- ✅ **Rotating "JK" seal with continuous animation** (8-second rotation)
- ✅ Fully responsive (desktop, tablet, mobile)

**Typography**:
- Navigation: Poppins, 15px, uppercase, semibold
- Giant name: Playfair Display, clamp(4rem, 12vw, 15rem)
- Taglines: Poppins, responsive sizing

**Colors**:
- Background: `#9da3ce` (lavender-200)
- Text: White with subtle shadows
- Giant name: `#dfc7e2` (lavender-100)

**Animation**:
- The "JK" seal rotates continuously using CSS animation (`rotate 8s linear infinite`)

---

### Section 2: Value Proposition Section (`ValueSection.tsx`)

**Purpose**: Core statement of purpose with clear call to action

**Key Features**:
- ✅ Deep blue-lavender background (`--ink-2`)
- ✅ Multi-color inline keyword highlighting
- ✅ Hand-drawn SVG underlines (Freedom, Peace, Joy)
- ✅ Supporting paragraph with proper typography
- ✅ Pill-shaped CTA button with hover effects
- ✅ Centered layout with max-width container
- ✅ Fully responsive

**Typography**:
- Headline: Playfair Display, clamp(1.6rem, 2.2vw, 2.6rem)
- Body text: Poppins, responsive sizing
- Button: Poppins, uppercase, bold

**Color Accents**:
- "Creative": `#6e75aa` (lavender-600)
- "Multi-Passionate": `#9e94a8` (lavender-300)
- "Women": `#9da3ce` (lavender-200)
- "Ideas": `#dfc7e2` (lavender-100)
- "Income": `#7582ba` (lavender-500)
- "Joy" underline: `#eedc68` (highlight-yellow)

**Interactive Elements**:
- CTA button lifts on hover with enhanced shadow
- Button changes shadow: `0 10px 18px → 0 14px 24px`

---

## Color System

All colors defined in `globals.css`:

```css
--ink: #173256           /* Deep navy */
--ink-2: #2b4a73         /* Section 2 background */
--lavender-600: #6e75aa  /* Text accent */
--lavender-500: #7582ba  /* Alt accent */
--lavender-400: #837a9b  /* Subtle text */
--lavender-300: #9e94a8  /* Big serif text */
--lavender-200: #9da3ce  /* Hero background */
--lavender-100: #dfc7e2  /* Giant name */
--cta-pink: #f7c2d0      /* CTA button */
--highlight-yellow: #eedc68 /* Joy underline */
--white: #ffffff
```

---

## Fonts

**Primary Font**: Poppins (300, 400, 500, 600, 700)
- Used for: Navigation, body text, buttons, supporting copy

**Display Font**: Playfair Display (400, 500, 600, 700)
- Used for: Giant background name, headlines, "JK" seal

Both fonts loaded via `next/font/google` in `layout.tsx`

---

## Animations

### Rotating Seal Animation
```css
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.rotate-slow {
  animation: rotate 8s linear infinite;
}
```

Applied to the "WORK WITH ME" circular seal in the hero section.

---

## Responsive Design

### Desktop (≥1200px)
- Three-column grid layout in hero
- Side taglines positioned around portrait
- Full-size typography

### Tablet (768px - 1199px)
- Reduced portrait size
- Adjusted spacing
- Maintained three-column layout

### Mobile (≤767px)
- Single-column stack
- Centered content
- Mobile-optimized typography (clamp functions)
- Portrait max-width: 70vw

---

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:3000`

---

## Component Usage

```tsx
import HeroSection from "./components/HeroSection";
import ValueSection from "./components/ValueSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValueSection />
    </main>
  );
}
```

---

## Technical Specifications

- **Framework**: Next.js 15.5.6
- **React**: 19.1.0
- **CSS Framework**: Tailwind CSS 4
- **TypeScript**: Version 5
- **Font Loading**: next/font/google
- **Image Optimization**: next/image

---

## Checklist ✅

### Section 1 - Hero
- ✅ Full-bleed lavender background
- ✅ Centered nav with 8 links (white)
- ✅ Giant serif words ("Jenna" / "Kutcher") absolutely positioned
- ✅ Portrait PNG centered, overlapping giant text
- ✅ Left and right two-line blurbs (white)
- ✅ Circular "JK" seal overlapping center
- ✅ **Rotating animation (8s continuous loop)**
- ✅ Responsive collapse to single column on mobile

### Section 2 - Value Proposition
- ✅ Deep ink-periwinkle band
- ✅ Multi-line headline with colored inline words
- ✅ Hand-drawn underline strokes (Freedom, Peace, Joy)
- ✅ Supporting paragraph
- ✅ Tools line
- ✅ Pill CTA "See What's New!" (pink on navy), centered
- ✅ Responsive font scaling and centered layout

---

## Assets

- **Portrait Image**: `/public/portrait.png` (560x700px)
- Sample professional portrait from Unsplash

---

## Next Steps

To add more sections:
1. Create new component in `app/components/`
2. Import and add to `page.tsx`
3. Follow the established color system and typography
4. Maintain responsive design patterns

---

**Built with ❤️ using Next.js, Tailwind CSS, and TypeScript**

