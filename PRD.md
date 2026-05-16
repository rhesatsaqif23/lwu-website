# Product Requirements Document (PRD)
## Learning With Us — Company Profile Website

**Version:** 1.1  
**Last Updated:** May 16, 2026  
**Owner:** Learning With Us (LWU)  
**Status:** Implementation Complete

---

## 🌟 1. Vision & Overview

### 1.1 Background
**Learning With Us (LWU)** is more than just an English course; it's a bridge to global opportunities. Founded in 2017 in South Tangerang and transitioned to a fully online model in 2019, LWU has empowered over **1,000 students** aged 7 to 62. We specialize in General English, IELTS, Business English, and Self-Development, helping learners navigate their academic and professional journeys with confidence.

### 1.2 The Mission
To create a digital home for LWU that doesn't just list courses, but tells a story of transformation. This website serves as the primary touchpoint for prospective students, establishing credibility through modern design, clear value propositions, and a seamless user experience.

### 1.3 Strategic Objectives
- **Build Trust**: Showcase our 7-year history and 1,000+ student success stories.
- **Educate**: Clearly distinguish between our digital products (ebooks) and our interactive services (courses).
- **Convert**: Simplify the path from "interested visitor" to "enrolled student" through strategic CTAs.
- **Inspire**: Reflect the vibrant, supportive, and results-driven culture of LWU.

---

## 👥 2. Our Audience

| Segment | Motivations & Goals |
|---|---|
| **Future Scholars** | Students (15–25) aiming for overseas universities; focusing on IELTS and Scholarship Databases. |
| **Career Climbers** | Professionals (22–40) needing Business English for meetings, presentations, and global networking. |
| **Curious Beginners** | Learners of all ages looking for a friendly, non-intimidating start to their English journey. |
| **Lifelong Learners** | Individuals seeking personal growth through leadership and emotional intelligence training. |

---

## 🗺️ 3. The Digital Experience (Site Map)

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | The "Welcome Mat" — highlighting our best features, social proof, and core mission. |
| `/about` | **About Us** | The "Heart" — our story, our stats, and the expert team behind the screen. |
| `/services` | **Services** | The "Classroom" — detailed catalog of our interactive programs and live sessions. |
| `/products` | **Products** | The "Library" — a curated collection of ebooks and self-study resources. |
| `/products/[slug]` | **Details** | The "Deep Dive" — comprehensive information, benefits, and pricing for every item. |
| `/contact` | **Contact** | The "Bridge" — making it easy for students to reach out and start their journey. |

---

## ✨ 4. Key Features & Requirements

### 4.1 Aesthetic & Feel
- **Modern Premium**: Clean lines, generous white space, and a curated color palette (#222F5D and #00C5E7).
- **Dynamic Motion**: Use of Framer Motion for staggered entrances, scroll-triggered reveals, and smooth hover states.
- **Mobile-First**: A flawless experience on smartphones, as the majority of our audience discovers us via social media.

### 4.2 Content Strategy
- **Products vs. Services**: Distinct pages to prevent confusion between "buy-once" ebooks and "ongoing" course programs.
- **Social Proof**: Integrated testimonials and student stats throughout the journey.
- **Resource Focused**: A dedicated dynamic product detail system that handles various content types (ebooks vs. courses) elegantly.

### 4.3 Technical Excellence
- **Next.js 14 Speed**: Utilizing the App Router and Server Components for near-instant load times.
- **Image Optimization**: All assets served via `next/image` with proper `sizes` and `priority` props for high LCP scores.
- **TypeScript Safety**: Fully typed data structures for products, services, and navigation.

---

## 🛠️ 5. Technical Specifications

### 5.1 The Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (Utility-first, responsive design)
- **Animation**: Framer Motion (Orchestrated stagger and fade-up effects)
- **Icons**: Lucide React (Clean, consistent stroke-based iconography)
- **Typeface**: Plus Jakarta Sans (Headers), Inter (Body)

### 5.2 Performance Targets
- **Lighthouse Performance**: 95+ (via SSG and Image Optimization)
- **Accessibility (A11y)**: WCAG compliant contrast ratios and semantic HTML.
- **SEO**: Dynamic metadata for every product page, OpenGraph support, and clean URL structures.

---

## 📈 6. Future Roadmap (Post-Launch)

- **Student Portal**: A logged-in area for students to access purchased ebooks and join live class links.
- **Blog Engine**: A full-featured CMS for publishing weekly English learning tips and student spotlights.
- **Multi-Language Support**: Indonesian and English toggles for the entire site.
- **Automated Bookings**: Integration with Calendly or a custom scheduler for free consultations.

---

## ✅ 7. Acceptance Criteria

- [x] **Navigation**: Sticky navbar with active state tracking and mobile drawer.
- [x] **Responsiveness**: Pixel-perfect layout from 375px (iPhone) to 1440px (Desktop).
- [x] **Data Integrity**: Product prices and service descriptions match the core data files exactly.
- [x] **Performance**: No "layout shift" during loading; images are properly scaled and lazy-loaded.
- [x] **Visual Polish**: No gaps between sections (Navbar flush with content); high-quality shadows and transitions.

---

**Learning With Us — Raising the Bar on Your e-Learning Experience.**
