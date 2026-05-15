# Product Requirements Document (PRD)
## Learning With Us — Company Profile Website

**Version:** 1.0  
**Date:** May 15, 2026  
**Owner:** Learning With Us (LWU)  
**Case Study Deadline:** May 15, 2026 — 20.00 WIB

---

## 1. Overview

### 1.1 Background

Learning With Us (LWU) is an online English course platform founded in 2017, originally as private in-person English classes in South Tangerang, Banten, Indonesia. In 2019, LWU transitioned to a fully online model. Today, LWU serves 1,000+ students aged 7–62 across Indonesia and internationally, offering General English, IELTS, Business English, and Self-Development programs.

This project is a company profile website built as part of a Web Developer Case Study. The website must present LWU's brand, mission, products, and services in a professional and engaging manner.

### 1.2 Objective

Build a responsive, performant company profile website for Learning With Us that:
- Establishes LWU's credibility as a leading English learning platform
- Clearly communicates LWU's value proposition to prospective students
- Showcases products and services with clear calls to action
- Reflects LWU's brand identity: modern, approachable, and results-driven

### 1.3 Scope

| In Scope | Out of Scope |
|---|---|
| 5 pages: Home, About Us, Products & Services, Product Detail, Contact | User authentication / login |
| Responsive design (mobile, tablet, desktop) | Payment gateway integration |
| Smooth animations with Framer Motion | CMS / admin panel |
| Contact form (static, no backend) | Live chat system |
| SEO meta tags | Blog / content management |
| Deployment-ready build | Student dashboard |

---

## 2. Target Users

| Segment | Description |
|---|---|
| Prospective Students | Indonesians aged 15–35 looking to improve English for career, study abroad, or personal growth |
| International Learners | Non-Indonesian learners discovering LWU through search or social media |
| IELTS Candidates | Students preparing for IELTS exams who need structured guidance |
| Professionals | Working adults seeking Business English courses |
| Parents | Parents looking for English courses for their children (ages 7+) |

---

## 3. Site Map

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Main landing page |
| `/about` | About Us | Company story, stats, team, vision & mission embedded |
| `/products` | Products & Services | Full product grid + services |
| `/products/[slug]` | Product Detail | Individual product page (dynamic route) |
| `/contact` | Contact | Contact form + info |

Vision & Mission content is embedded within the About Us page, not a standalone page.

---

## 4. Pages & Content Requirements

### 4.1 Home (`/`)

**Goal:** First impression — communicate who LWU is, what they offer, and why choose them.

#### Section 1: Hero

| Element | Content |
|---|---|
| Eyebrow label | (none) |
| Headline | The best online learning platform. |
| Subheadline | Raise the Bar on Your e-Learning Experience. |
| Body text | e-learning particularly beneficial for adult learners who may have other commitments such as work or family responsibilities. |
| Primary CTA | GET STARTED → `/products` |
| Secondary CTA | (none) |
| Visual | Hero image with 3 floating popup images (student avatars / course thumbnails) |

#### Section 2: Client Logos / Social Proof Bar

| Element | Content |
|---|---|
| Layout | Horizontal scrolling row of logos |
| Content | 8 client/partner logo placeholders (use grayscale LWU partner dummies) |
| Label | (no label — logos only) |

#### Section 3: About LWU Snippet

| Element | Content |
|---|---|
| Label | About Us |
| Heading | About LWU |
| Body | LWU is an online English learning platform helping 1,000+ students achieve their goals. We've been offering flexible, results-driven education since 2017 — from General English to IELTS, Business English, and Self-Development. |
| Card 1 icon + title | Vision |
| Card 1 body | To be the leading platform for English proficiency and personal development, nurturing confident, capable, and future-ready individuals. |
| Card 2 icon + title | Mission |
| Card 2 body | To empower individuals to reach their full potential by mastering global communication and essential life skills. |
| CTA | GET STARTED → `/products` |
| Visual | Illustration / photo (right side on desktop) |

#### Section 4: Program Categories

| Element | Content |
|---|---|
| Label | Our programs |
| Heading | Program Categories |
| Category 1 | General English — Build everyday English skills for communication, reading, writing, and speaking at any level. |
| Category 2 | IELTS Preparation — Targeted preparation to help you achieve your IELTS target score for study or career abroad. |
| Category 3 | Business English — Professional English for workplace communication, presentations, emails, and negotiations. |
| Category 4 | Self-Development — Courses on leadership, emotional intelligence, negotiation, and personal effectiveness. |

#### Section 5: Products & Services (Our Products)

| Element | Content |
|---|---|
| Label | Our products |
| Heading | Products & Services |
| Layout | 3-column grid on desktop, 1-column on mobile |
| Cards | 6 product cards — see Product Catalog table below |
| Card CTA | "Get Yours" (ebooks) / "Enroll Now" (courses) |

**Product Catalog (used on Home, Products page, and Product Detail):**

| # | id (slug) | Title | Type | Price | Badge | Rating | Meta 1 | Meta 2 | CTA |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `british-american-english` | British vs American English: 400 Words Explained | Ebook | $4.99 | BESTSELLER | 5.0 | Ebook | 400+ entries | Get Yours |
| 2 | `grammar-comic-indonesian` | English Grammar Comic (Indonesian Translation) | Ebook | IDR 99,900 | NEW | 4.8 | Ebook | Comic + Translation | Get Yours |
| 3 | `grammar-comic-english` | English Grammar Comic (English Only) | Ebook | IDR 99,900 | POPULAR | 4.7 | Ebook | English Only | Get Yours |
| 4 | `scholarship-database` | Scholarship Database Ebook | Ebook | IDR 99,000 | NEW | 4.6 | Ebook | 100+ scholarships | Get Yours |
| 5 | `ielts-preparation` | IELTS Preparation Program | Online Course | Contact for Pricing | FEATURED | 4.9 | Online Course | 1,000+ students | Enroll Now |
| 6 | `general-english` | General English Course | Online Course | Contact for Pricing | PROMO | 4.5 | Online Course | All Levels | Enroll Now |

#### Section 6: Featured Products

| Element | Content |
|---|---|
| Label | Top picks |
| Heading | Featured Products |
| Layout | 3 large horizontal cards |
| Card 1 | By: LWU Team / British vs American English / 500+ Readers / Self-paced / Ebook / Get Yours |
| Card 2 | By: LWU Team / English Grammar Comic (Indonesian Translation) / 300+ Readers / Self-paced / Ebook / Get Yours |
| Card 3 | By: LWU Team / IELTS Preparation Program / 1,000+ Students enrolled / Flexible schedule / Online Course / Enroll Now |

#### Section 7: Testimonials

| Element | Content |
|---|---|
| Label | Success Stories |
| Heading | Real Results From Real Students |
| Layout | 3-column cards (carousel on mobile) |
| Testimonial 1 | Billy Anggun / Harvard Student / "I passed my IELTS with a 7.0 after joining LWU. The strategies actually work and the instructors are incredibly supportive." |
| Testimonial 2 | Rina Setiawati / Graphic Design Student / "LWU helped me go from being afraid to speak English at work to confidently handling international clients every day." |
| Testimonial 3 | Ryan Daniel / Management Student / "The self-development courses changed how I lead my team. I never expected an English course to offer this kind of growth." |

#### Section 8: Contact Snippet

| Element | Content |
|---|---|
| Section label (left block) | Contact Us |
| Heading (left block) | Connect with us. We are here to help you start your journey. |
| Address | South Tangerang, Banten, Indonesia |
| Phone Head Office | +62 812-1234-5678 |
| Phone Branch | +62 821-9876-5432 |
| Email 1 | contact@learningwithus.com |
| Email 2 | support@learningwithus.com |
| Form title (right block) | Connect with us. We are waiting for your message. |
| Form fields | First Name*, Last Name, Email*, Message |
| Submit CTA | Send Message |

---

### 4.2 About Us (`/about`)

**Goal:** Build trust, tell LWU's story, and present vision & mission.

| Section | Content |
|---|---|
| Hero | Breadcrumb: Home / About Us / Headline: "Empowering Learners Since 2017" / Subheadline: full LWU description |
| Key Stats | 7+ Years Serving English Learners / 1,000+ Students Achieved Their Goals / 15+ Certified Instructors / 5+ Course Programs Available |
| About LWU | Label: About LWU / Full origin story (2017 founding → 2019 online → present) / Vision card / Mission card / CTA: EXPLORE COURSES |
| What We Offer | Label: Programs / Heading: What We Offer / Body: programs overview / CTA: VIEW ALL PROGRAMS |
| Our Expert Team | Label: Team / Heading: Our Expert Team / 4 instructor cards |
| Testimonials | Same 3 testimonials as Home |
| Blog Previews | Label: Updates / Heading: Latest From LWU / 3 article cards |
| Contact | Same contact block as Home footer |

**Vision & Mission (embedded in About Us):**

| Element | Content |
|---|---|
| Vision heading | Our Vision |
| Vision body | To be the leading platform for English proficiency and personal development, nurturing confident, capable, and future-ready individuals. |
| Mission heading | Our Mission |
| Mission body | To empower individuals to reach their full potential by mastering global communication and essential life skills. |

**Team Data:**

| Name | Title | Rating |
|---|---|---|
| Anindhita Fitriah Prasetyo | Founder & Lead Instructor | 4.9 |
| Rendra Wijaya | IELTS Specialist | 4.8 |
| Siti Nurhaliza | Business English Coach | 4.7 |
| Eka Prasetya | Self-Development Trainer | 4.9 |

**Blog Previews:**

| # | Date | Category | Title |
|---|---|---|---|
| 1 | May 10, 2026 | Learning Tips | How to Speak English Confidently in 30 Days |
| 2 | April 28, 2026 | IELTS Prep | IELTS Strategies: Understanding Task 1 & 2 |
| 3 | April 15, 2026 | Self-Development | Building Leadership Skills Through English Communication |

---

### 4.3 Products & Services (`/products`)

**Goal:** Showcase all offerings and drive purchases or inquiries.

| Section | Content |
|---|---|
| Hero / Breadcrumb | Home / Products & Services |
| Page label | Product |
| Page heading | All Products & Services |
| Filter tabs | All / Ebooks / Online Courses |
| Product Grid | 6 product cards — same data as Home Section 5 |
| Featured Section | Label: Top picks / Heading: Featured Products / 3 large cards same as Home Section 6 |
| Services Section | Label: Our Services / Heading: Featured Services / 3 service cards |
| CTA Banner | "Not sure where to start?" with contact link |

**Services Cards:**

| # | By | Title | Type | Meta | CTA |
|---|---|---|---|---|---|
| 1 | LWU Team | General English Course | Course, All levels | 300+ Students enrolled | Enroll Now |
| 2 | LWU Team | IELTS Preparation Program | Course, Flexible schedule | 1,000+ Students enrolled | Enroll Now |
| 3 | LWU Team | Scholarship Database Ebook | Ebook, Self-paced | 100+ Scholarships | Enroll Now |

---

### 4.4 Product Detail (`/products/[slug]`)

**Goal:** Individual product page with full description and purchase CTA.

Dynamic route — one page template renders all 6 products based on slug.

| Section | Content |
|---|---|
| Breadcrumb | Home / Products & Services / Product Details |
| Product title | From `products.ts` by slug |
| Created By | LWU Team |
| Product Type | Ebook or Online Course |
| Rating + Reviews | From product data |
| Meta row | Type / Readers or Students / Self-paced or Flexible |
| Tabs | Overview / Details / Reviews |
| Overview intro | Product-specific intro paragraph (see content below) |
| What's Inside heading | What's Inside |
| Description | Product-specific description |
| Key Benefits | 6 bullet points (product-specific) |
| Price | From product data |
| Promo tag | "Limited Time Offer" |
| Guarantee | 30-Day Money-Back Guarantee |
| Primary CTA | Buy Now (ebook) / Enroll Now (course) |
| Related Products | Label: Related Products / Heading: You Might Also Like / 3 cards excluding current product |

**Product-specific content (`data/productDetails.ts`):**

```
british-american-english:
  intro: This comprehensive ebook breaks down 400 essential differences between British and American English. Perfect for learners who want to avoid confusion and speak with confidence in any English-speaking environment.
  description: Covers everyday vocabulary (home, food, travel, work), common expressions and phrases, practical examples, and side-by-side comparisons. All explanations are simple — no complicated grammar terms.
  benefits: [Clear Explanations, Practical Application, Comprehensive Coverage, Quick Reference, Self-Paced Learning, Lifetime Access]

grammar-comic-indonesian:
  intro: Learn English grammar through an engaging comic story — in both English and Indonesian. Follow young adults on their journey to master English for better opportunities.
  description: Teaches basic grammar through visual storytelling, everyday conversations, and easy-to-understand examples. Covers fundamental tenses, sentence patterns, and common structures — all from scratch, step by step.
  benefits: [Visual Learning, Bilingual Support, Story-Based Format, Beginner Friendly, Covers Basic Tenses, Instant Download]

grammar-comic-english:
  intro: The same engaging grammar comic — English only. Ideal for learners who want full English immersion while learning grammar through story.
  description: Uses simple comics and everyday conversations to teach grammar without dense theory. Covers tenses, sentence patterns, and common structures. Designed for learners who want a visual, story-driven approach to grammar.
  benefits: [English Immersion, Visual Learning, Story-Based Format, Beginner Friendly, Covers Basic Tenses, Instant Download]

scholarship-database:
  intro: Stop opening dozens of websites to search for scholarships. This ebook compiles hundreds of scholarship opportunities from around the world in one practical guide.
  description: Includes scholarship listings from multiple countries, study level details (S1/S2/S3), funding type (fully funded / partial), registration requirements, important deadlines, and official application links.
  benefits: [Hundreds of Scholarships, Multi-Country Coverage, All Study Levels, Funding Details, Deadline Info, Official Links]

ielts-preparation:
  intro: A structured, instructor-led program designed to get you to your IELTS target score — whether you're a first-time test taker or trying again after a previous attempt.
  description: Covers all four IELTS skills: Reading, Writing, Listening, and Speaking. Focus on test strategy, common patterns, and timed practice. Beginner-friendly with flexible scheduling.
  benefits: [All 4 IELTS Skills, Proven Strategies, Live Instructor Sessions, Flexible Schedule, Beginner Friendly, Free Consultation]

general-english:
  intro: A flexible online English course for learners of all ages and levels — from complete beginners to those looking to sharpen their everyday communication skills.
  description: Covers speaking, listening, reading, and writing through practical, real-world materials. Suitable for ages 7–62. Sessions are scheduled flexibly to fit work or school commitments.
  benefits: [All Skill Levels, Flexible Schedule, Expert Instructors, Real-World Materials, Ages 7 to 62, Online Access]
```

---

### 4.5 Contact (`/contact`)

**Goal:** Give visitors a direct way to reach LWU.

| Section | Content |
|---|---|
| Breadcrumb | Home / Contact Us |
| Page heading | Contact Us |
| Address | South Tangerang, Banten, Indonesia |
| Phone Head Office | +62 812-1234-5678 |
| Phone Branch | +62 821-9876-5432 |
| Email 1 | contact@learningwithus.com |
| Email 2 | support@learningwithus.com |
| Form title | Send us a Message |
| Form subtext | Have questions about our courses? Want to discuss your learning goals? We typically respond within 24 hours. |
| Form fields | First Name*, Last Name, Email*, Subject, Message |
| Submit CTA | Send Message |
| Social label | Follow Us |
| Instagram | @lwu_id |
| TikTok | @lwu_id |
| LinkedIn | Learning With Us |

---

## 4. Design System

### 4.1 Brand Colors

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1A56DB` (blue) | Primary CTA, highlights |
| `--color-primary-dark` | `#1E429F` | Hover states |
| `--color-accent` | `#F59E0B` (amber) | Badges, ratings, accents |
| `--color-dark` | `#111928` | Headings, body text |
| `--color-muted` | `#6B7280` | Secondary text |
| `--color-surface` | `#F9FAFB` | Section backgrounds |
| `--color-white` | `#FFFFFF` | Cards, nav backgrounds |

### 4.2 Typography

| Role | Font | Weight |
|---|---|---|
| Display / Hero | `Plus Jakarta Sans` | 700, 800 |
| Headings | `Plus Jakarta Sans` | 600, 700 |
| Body | `Inter` | 400, 500 |
| Labels / Badges | `Inter` | 500, 600 |

### 4.3 Spacing & Layout

- Max content width: `1280px`
- Section vertical padding: `80px` (desktop), `48px` (mobile)
- Card border radius: `12px`
- Grid: 12-column, gap `24px`

### 4.4 Animation Principles (Framer Motion)

- Page entry: fade-in + slide-up, `duration: 0.5s`, `delay: staggered 0.1s`
- Scroll reveal: `whileInView` with `once: true`
- Card hover: subtle scale `1.02` + shadow lift
- CTA button: scale pulse on hover
- Section headings: word-by-word or line reveal

---

## 5. Technical Requirements

### 5.1 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3+ |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts (Plus Jakarta Sans, Inter) |
| Deployment | Vercel (recommended) |

### 5.2 Project Structure

```
lwu-website/
├── app/
│   ├── layout.tsx              # Root layout with nav + footer
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── vision-mission/
│   │   └── page.tsx            # Vision & Mission page
│   └── products/
│       └── page.tsx            # Products & Services page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSnippet.tsx
│   │   ├── ProgramCategories.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Testimonials.tsx
│   │   └── ContactSnippet.tsx
│   ├── about/
│   │   ├── AboutHero.tsx
│   │   ├── KeyStats.tsx
│   │   ├── TeamSection.tsx
│   │   └── BlogPreviews.tsx
│   ├── vision-mission/
│   │   ├── VMHero.tsx
│   │   ├── VisionCard.tsx
│   │   ├── MissionCard.tsx
│   │   └── CoreValues.tsx
│   ├── products/
│   │   ├── ProductHero.tsx
│   │   ├── ProductFilter.tsx
│   │   ├── ProductCard.tsx
│   │   └── ServicesSection.tsx
│   └── shared/
│       ├── SectionHeading.tsx
│       ├── CTAButton.tsx
│       ├── TestimonialCard.tsx
│       └── ContactInfo.tsx
├── data/
│   ├── products.ts             # Product catalog data
│   ├── testimonials.ts         # Testimonial data
│   ├── team.ts                 # Instructor data
│   └── navigation.ts           # Nav links
├── lib/
│   └── utils.ts                # Utility functions
├── public/
│   └── images/                 # Static assets
├── types/
│   └── index.ts                # TypeScript interfaces
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

### 5.3 Performance Requirements

| Metric | Target |
|---|---|
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 90 |
| Lighthouse SEO | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Mobile responsive | All breakpoints (320px–1920px) |

### 5.4 SEO Requirements

- `<title>` and `<meta description>` per page
- Open Graph tags for social sharing
- Semantic HTML (proper `h1–h6` hierarchy)
- `alt` text on all images
- `robots.txt` and `sitemap.xml`

---

## 6. Component Specifications

### 6.1 Navbar

- Logo (left) + nav links (center) + CTA button (right)
- Sticky on scroll with background blur
- Mobile: hamburger menu with slide-in drawer
- Active link indicator

**Links:**
- Home → `/`
- About Us → `/about`
- Products & Services → `/products`
- Contact → `/contact`

### 6.2 Footer

- Logo + tagline: "The English course you're looking for."
- 3-column links: Pages, Programs, Follow Us
- Pages: Home, About Us, Products & Services, Contact
- Programs: General English, IELTS, Business English, Self-Development
- Social: Instagram (`@lwu_id`), TikTok (`@lwu_id`), LinkedIn (`Learning With Us`)
- Contact info: address, phone, email
- Newsletter subscribe input
- Copyright: `© 2024 Learning With Us. All rights reserved.`

### 6.3 ProductCard (Grid card — used on Home and /products)

```typescript
interface ProductCardProps {
  id: string
  slug: string
  title: string
  type: 'Ebook' | 'Online Course'
  badge: string
  rating: number
  price: string
  meta1: string
  meta2: string
  ctaLabel: 'Buy Now' | 'Enroll Now' | 'Get Yours'
  ctaLink: string   // links to /products/[slug]
}
```

### 6.4 FeaturedProductCard (Large card — used on Home and /products)

```typescript
interface FeaturedProductCardProps {
  slug: string
  title: string
  type: string
  by: string        // always "LWU Team"
  readers: string   // e.g. "500+ Readers" or "1,000+ Students enrolled"
  duration: string  // "Self-paced" or "Flexible schedule"
  ctaLabel: string
}
```

### 6.5 TestimonialCard

```typescript
interface TestimonialProps {
  name: string
  title: string
  quote: string
  avatar?: string
  rating: number
}
```

### 6.6 ProductDetailPage (dynamic `/products/[slug]`)

- Reads slug from URL params
- Finds product from `data/products.ts` and extended detail from `data/productDetails.ts`
- Renders: breadcrumb, title, meta row, tabs (Overview / Details / Reviews), price block, related products
- "Related Products" shows 3 other products from catalog (excluding current)

---

## 7. Content Data

### 7.1 Testimonials

```
1. Billy Anggun | Harvard Student
   "I passed my IELTS with a 7.0 after joining LWU. The strategies actually work and the instructors are incredibly supportive."

2. Rina Setiawati | Graphic Design Student
   "LWU helped me go from being afraid to speak English at work to confidently handling international clients every day."

3. Ryan Daniel | Management Student
   "The self-development courses changed how I lead my team. I never expected an English course to offer this kind of growth."
```

### 7.2 Contact Information

```
Address   : South Tangerang, Banten, Indonesia
Phone 1   : +62 812-1234-5678 (Head Office)
Phone 2   : +62 821-9876-5432 (Branch Office)
Email     : contact@learningwithus.com
Email 2   : support@learningwithus.com
Website   : https://learningwithus-lwu.com
Instagram : @lwu_id
TikTok    : @lwu_id
LinkedIn  : Learning With Us
```

---

## 8. Acceptance Criteria

| Page | Criteria |
|---|---|
| Home | Hero renders with CTA, all 8 sections visible, responsive on mobile |
| About Us | Stats visible, team cards render, vision & mission embedded, testimonials display |
| Products & Services | All 6 products display, filter tabs functional, services section visible, prices correct |
| Product Detail | Dynamic route resolves for all 6 slugs, tabs work, related products render |
| Contact | Form fields present, contact info correct, social links present |
| All Pages | Nav + footer present, animations work, no console errors |
| Global | Mobile responsive (320px–1920px), Lighthouse scores > 90, no broken links |

---

## 9. Deployment

- **Platform:** Vercel (recommended)
- **Domain:** `learningwithus-lwu.com` or Vercel subdomain for case study
- **Environment Variables:** None required for static version
- **Build command:** `npm run build`
- **Output:** Static + SSG via Next.js App Router

---

## 10. Timeline

| Task | Duration | Notes |
|---|---|---|
| Project setup + config | 1 hour | Next.js, Tailwind, Framer Motion |
| Shared components (Nav, Footer) | 1 hour | |
| Home page (8 sections) | 3.5 hours | Most complex page |
| About Us page | 2 hours | Includes vision & mission |
| Products & Services page | 2 hours | Filter tabs + grid + services |
| Product Detail page (dynamic) | 1.5 hours | Dynamic route + tabs |
| Contact page | 1 hour | Form + contact info |
| Polish + animations | 1.5 hours | Framer Motion |
| Testing + deployment | 1 hour | Vercel |
| **Total** | **~14.5 hours** | Within 24-hour deadline |
