# AGENTS.md
## Learning With Us — Company Profile Website

**Project:** LWU Company Profile  
**Tech Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion  
**Last Updated:** May 15, 2026

---

## Overview

This file provides instructions for any AI agent (or developer) working on the LWU company profile website. Follow these instructions precisely before making any changes or additions to the codebase.

---

## 1. Project Context

This is a **static company profile website** for Learning With Us (LWU), an online English learning platform based in South Tangerang, Indonesia. The site has 5 pages:

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/products` | Products & Services |
| `/products/[slug]` | Product Detail (dynamic route) |
| `/contact` | Contact |

Vision & Mission content is **embedded inside the About Us page** — there is no separate `/vision-mission` route.

All content is **hardcoded** — there is no CMS, database, or backend. Product and testimonial data lives in `/data/*.ts` files.

---

## 2. Tech Stack Rules

### Next.js App Router
- Use **App Router only** — never use `pages/` directory
- All pages are in `app/` directory with `page.tsx` files
- Layout wrapping (Navbar + Footer) is done in `app/layout.tsx`
- Use `"use client"` directive only in components that require browser APIs, `useState`, `useEffect`, or Framer Motion animations
- Server Components are the default — keep them server-side unless interactivity is needed
- Use `next/image` for all images (never raw `<img>` tags)
- Use `next/link` for all internal navigation (never raw `<a>` tags for internal routes)
- Use `next/font` for Google Fonts (Plus Jakarta Sans, Inter)

### TypeScript
- All files must be `.tsx` or `.ts` — no `.js` or `.jsx`
- Define interfaces in `/types/index.ts` and import from there
- No use of `any` type — use proper typing or `unknown` with type guards
- Props must always be typed with an explicit interface or type

### Tailwind CSS
- Use Tailwind utility classes exclusively — do not write custom CSS except in `globals.css` for CSS variables and base resets
- Use `cn()` utility (from `lib/utils.ts`) for conditional class merging
- Mobile-first: write base styles for mobile, use `md:` and `lg:` prefixes for larger screens
- Never use inline `style` attributes — use Tailwind classes or CSS variables
- Breakpoints to support: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

### Framer Motion
- Import from `framer-motion` — `import { motion } from 'framer-motion'`
- All animated components must have `"use client"` at the top of their file
- Use `whileInView` with `once: true` for scroll-triggered animations
- Standard entry animation: `initial={{ opacity: 0, y: 24 }}` → `animate={{ opacity: 1, y: 0 }}`
- Stagger children: wrap list items in `motion.div` with `variants` and use `staggerChildren: 0.1`
- Avoid animating layout-affecting properties (width, height) — prefer `opacity`, `y`, `scale`
- Keep animations subtle: duration between `0.3s` and `0.6s`, easing `easeOut`

---

## 3. File Structure

```
lwu-website/
├── app/
│   ├── layout.tsx              # Root layout — ALWAYS includes Navbar + Footer
│   ├── globals.css             # CSS variables + base reset only
│   ├── page.tsx                # Home
│   ├── about/page.tsx          # About Us (includes vision & mission)
│   ├── products/
│   │   ├── page.tsx            # Products & Services
│   │   └── [slug]/page.tsx     # Product Detail (dynamic route)
│   └── contact/page.tsx        # Contact
├── components/
│   ├── layout/                 # Navbar.tsx, Footer.tsx
│   ├── home/                   # Home-specific sections
│   │   ├── HeroSection.tsx
│   │   ├── ClientLogos.tsx
│   │   ├── AboutSnippet.tsx
│   │   ├── ProgramCategories.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Testimonials.tsx
│   │   └── ContactSnippet.tsx
│   ├── about/                  # About-specific sections
│   │   ├── AboutHero.tsx
│   │   ├── KeyStats.tsx
│   │   ├── AboutStory.tsx
│   │   ├── VisionMissionCards.tsx
│   │   ├── WhatWeOffer.tsx
│   │   ├── TeamSection.tsx
│   │   ├── BlogPreviews.tsx
│   │   └── ContactBlock.tsx
│   ├── products/               # Products-specific sections
│   │   ├── ProductsHero.tsx
│   │   ├── ProductFilter.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── FeaturedSection.tsx
│   │   └── ServicesSection.tsx
│   ├── product-detail/         # Product Detail sections
│   │   ├── ProductDetailHero.tsx
│   │   ├── ProductTabs.tsx
│   │   ├── ProductPriceBlock.tsx
│   │   └── RelatedProducts.tsx
│   ├── contact/                # Contact page sections
│   │   ├── ContactHero.tsx
│   │   ├── ContactInfoBlock.tsx
│   │   └── ContactForm.tsx
│   └── shared/                 # Reusable across pages
│       ├── SectionHeading.tsx
│       ├── CTAButton.tsx
│       ├── ProductCard.tsx
│       ├── FeaturedProductCard.tsx
│       ├── TestimonialCard.tsx
│       ├── ContactInfo.tsx
│       └── Breadcrumb.tsx
├── data/
│   ├── products.ts             # Product catalog (id, slug, title, price, badge, etc.)
│   ├── productDetails.ts       # Extended per-product content (intro, description, benefits)
│   ├── testimonials.ts         # Testimonial content
│   ├── team.ts                 # Instructor data
│   ├── blogPreviews.ts         # Blog article preview data
│   └── navigation.ts           # Nav links array
├── lib/
│   └── utils.ts                # cn() utility and helpers
├── types/
│   └── index.ts                # All shared TypeScript interfaces
└── public/images/              # Static image assets
```

**Rules:**
- Never create new top-level directories without updating this file
- Page-specific components go in their named folder under `components/`
- Shared/reusable components go in `components/shared/`
- Data changes go in `data/` files only — never hardcode content in components

---

## 4. Component Rules

### Naming
- Components: `PascalCase` (e.g., `ProductCard.tsx`)
- Files: match component name exactly
- Hooks: `camelCase` prefixed with `use` (e.g., `useScrollPosition.ts`)
- Data files: `camelCase` (e.g., `products.ts`)
- CSS classes: Tailwind only, no custom class names except for animation variants

### Component Template

```tsx
"use client" // only if needed

import { motion } from "framer-motion" // only if animated

interface ComponentNameProps {
  // define all props here
}

export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  return (
    <section className="...">
      {/* content */}
    </section>
  )
}
```

### Shared Components Available

| Component | Location | Usage |
|---|---|---|
| `SectionHeading` | `components/shared/SectionHeading.tsx` | Label + title for every section |
| `CTAButton` | `components/shared/CTAButton.tsx` | All CTA buttons |
| `TestimonialCard` | `components/shared/TestimonialCard.tsx` | Testimonial blocks |
| `ContactInfo` | `components/shared/ContactInfo.tsx` | Address, phone, email block |
| `ProductCard` | `components/shared/ProductCard.tsx` | Product display cards |

Always use shared components before creating new ones. If a shared component needs a new variant, add a prop — do not duplicate the component.

---

## 5. Data Files

### `/data/products.ts`

```typescript
export const products = [
  {
    id: "british-american-english",
    title: "British vs American English: 400 Words Explained",
    type: "Ebook",
    badge: "BESTSELLER",
    rating: 5.0,
    price: "$4.99",
    meta1: "Ebook",
    meta2: "400+ entries",
    ctaLabel: "Get Yours",
    ctaLink: "https://learningwithus-lwu.com",
  },
  // ... other products
]
```

### `/data/testimonials.ts`

```typescript
export const testimonials = [
  {
    name: "Billy Anggun",
    title: "Harvard Student",
    quote: "I passed my IELTS with a 7.0 after joining LWU. The strategies actually work and the instructors are incredibly supportive.",
    rating: 5,
  },
  {
    name: "Rina Setiawati",
    title: "Graphic Design Student",
    quote: "LWU helped me go from being afraid to speak English at work to confidently handling international clients every day.",
    rating: 5,
  },
  {
    name: "Ryan Daniel",
    title: "Management Student",
    quote: "The self-development courses changed how I lead my team. I never expected an English course to offer this kind of growth.",
    rating: 5,
  },
]
```

### `/data/team.ts`

```typescript
export const team = [
  { name: "Anindhita Fitriah Prasetyo", title: "Founder & Lead Instructor", rating: 4.9 },
  { name: "Rendra Wijaya", title: "IELTS Specialist", rating: 4.8 },
  { name: "Siti Nurhaliza", title: "Business English Coach", rating: 4.7 },
  { name: "Eka Prasetya", title: "Self-Development Trainer", rating: 4.9 },
]
```

---

## 6. Content Rules

- **Never change LWU's core content** (vision, mission, testimonials, contact info) without explicit instruction
- All prices must match the PRD exactly:
  - British vs American: `IDR 49,900`
  - Grammar Comic (Indonesian): `IDR 99,900`
  - Grammar Comic (English): `IDR 99,900`
  - Scholarship Database: `IDR 99,000`
  - IELTS Program: `Contact for Pricing`
  - General English: `Contact for Pricing`
- Contact info to use across all pages:
  - Address: South Tangerang, Banten, Indonesia
  - Phone: +62 812-1234-5678 / +62 821-9876-5432
  - Email: contact@learningwithus.com / support@learningwithus.com
  - Instagram: @lwu_id
  - TikTok: @lwu_id
  - LinkedIn: Learning With Us

---

## 7. Animation Conventions

### Standard Fade-Up Entry (use for most sections)

```typescript
const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}
```

### Stagger Container (use for card grids and lists)

```typescript
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}
```

### Usage Pattern

```tsx
<motion.section
  variants={containerVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={fadeUpVariant}>
      {/* card content */}
    </motion.div>
  ))}
</motion.section>
```

### Card Hover

```tsx
<motion.div
  whileHover={{ scale: 1.02, y: -4 }}
  transition={{ duration: 0.2 }}
>
```

---

## 8. Styling Conventions

### Section Structure

```tsx
<section className="py-20 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>
```

### Alternate Section Background

```tsx
// Use bg-gray-50 for alternating sections
<section className="py-20 bg-gray-50">
```

### Primary Button

```tsx
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
  Get Started
</button>
```

### Outline Button

```tsx
<button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
  Learn More
</button>
```

### Section Label (small uppercase tag above heading)

```tsx
<span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
  About Us
</span>
```

### Section Heading

```tsx
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
  Heading Text
</h2>
```

---

## 9. SEO Metadata per Page

Set metadata in each `page.tsx` using Next.js `generateMetadata` or the `metadata` export:

```typescript
// app/page.tsx
export const metadata = {
  title: "Learning With Us | Online English & Self-Development Courses",
  description: "Learning With Us (LWU) is an online English course platform helping 1,000+ students achieve their goals in General English, IELTS, Business English, and Self-Development.",
}

// app/about/page.tsx
export const metadata = {
  title: "About Us | Learning With Us",
  description: "Founded in 2017, Learning With Us has helped 1,000+ students across Indonesia and internationally with flexible, results-driven English education.",
}

// app/vision-mission/page.tsx
export const metadata = {
  title: "Vision & Mission | Learning With Us",
  description: "Our vision is to be the leading platform for English proficiency and personal development, nurturing confident, capable, and future-ready individuals.",
}

// app/products/page.tsx
export const metadata = {
  title: "Products & Services | Learning With Us",
  description: "Explore LWU's range of ebooks, IELTS programs, Business English courses, and self-development resources.",
}
```

---

## 10. Agent Task Guidelines

When an agent is assigned a task, follow this checklist:

### Before Starting
- [ ] Read this file (`AGENTS.md`) in full
- [ ] Read `PRD.md` for the relevant section
- [ ] Check existing components in `components/shared/` before creating new ones
- [ ] Check `data/` files for any content you need before hardcoding it

### While Working
- [ ] Use TypeScript — no `any`, all props typed
- [ ] Add `"use client"` only when needed (Framer Motion, useState, useEffect)
- [ ] Use `next/image` for images, `next/link` for internal links
- [ ] Keep animations within the defined conventions above
- [ ] Mobile-first responsive classes

### Before Submitting
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No ESLint errors (`npx eslint .`)
- [ ] Page renders correctly on mobile (375px) and desktop (1280px)
- [ ] All links point to correct routes
- [ ] No hardcoded content that should be in `data/` files
- [ ] Section has proper Framer Motion scroll-triggered animation

### Do Not
- Use `pages/` directory — App Router only
- Use raw `<img>` — use `next/image`
- Use raw `<a>` for internal links — use `next/link`
- Use `any` TypeScript type
- Write custom CSS outside `globals.css`
- Hardcode product prices or contact info in components
- Create duplicate components when a shared one exists
- Add new dependencies without checking if Tailwind or existing libs cover the need

---

## 11. Environment & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type check
npx tsc --noEmit

# Lint
npx eslint .
```

### Required Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.383.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "tailwindcss": "^3.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

---

## 12. Git Conventions

```bash
# Branch naming
feat/home-page
feat/about-page
feat/products-page
fix/navbar-mobile
chore/setup-tailwind

# Commit messages
feat: add hero section to home page
feat: implement product card component
fix: mobile nav drawer not closing on link click
chore: configure Framer Motion variants
refactor: move testimonial data to data/testimonials.ts
```

---

## 13. Deployment (Vercel)

1. Push to GitHub repository
2. Connect repo to Vercel
3. Build settings: auto-detected for Next.js
4. No environment variables required
5. Deploy — Vercel generates a preview URL for the case study submission

**Build command:** `npm run build`  
**Output directory:** `.next` (auto-detected)  
**Node version:** 18.x or 20.x
