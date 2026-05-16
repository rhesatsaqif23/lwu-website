# CASE STUDY WEB DEVELOPER — Learning With Us (LWU)

[![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel)](https://lwu-id.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF445D?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## 🏛️ Executive Summary

**Learning With Us (LWU)** is a leading online English education platform that has evolved from a local private tutoring service in 2017 to a global digital learning hub. With a mission to empower individuals through global communication skills, LWU has successfully mentored over **1,000+ students** across various age groups.

This website serves as the definitive digital presence for LWU, designed to showcase its dual-nature offerings: **digital products** (Ebooks & self-paced guides) and **educational services** (IELTS preparation, General English, and specialized coaching).

## 📖 Background & Motivation

Since transitioning to a fully online model in 2019, LWU required a robust, modern, and scalable platform that could:
1. **Bridging the Gap**: Provide a seamless interface for students to discover both free and premium learning resources.
2. **Credibility at Scale**: Establish professional authority through a premium visual design language inspired by world-class educational templates.
3. **Optimized Conversion**: Implement a strategic UX flow that guides users from initial interest to enrollment through clear call-to-actions and social proof.

## 📝 Project Context

This repository represents a **Web Developer Case Study** developed to modernize LWU's digital presence. The core challenge was to architect a high-performance, responsive, and SEO-ready platform within a **24-hour sprint**, ensuring a "production-ready" standard.

### 🌐 Live Demo
**[https://lwu-id.vercel.app/](https://lwu-id.vercel.app/)**

---

## 🚀 Features

- **Modern UI/UX**: Premium design inspired by high-end educational platforms.
- **Dynamic Routing**: Built with Next.js App Router for seamless page transitions.
- **Advanced Animations**: Smooth scroll-triggered entrance animations and interactive micro-interactions powered by Framer Motion.
- **Comprehensive Content**:
  - **Home**: Strategic overview of the brand, programs, and student success stories.
  - **About Us**: Detailed company story and instructor profiles.
  - **Vision & Mission**: Embedded core values integrated into the about page.
  - **Product Catalog**: Dynamic list of ebooks and digital resources with advanced filtering.
  - **Services**: Detailed breakdown of course offerings (IELTS, General English, Webinars).
  - **Contact**: Functional contact portal with integrated location info.
- **Performance Optimized**: 
  - Optimized images using `next/image`.
  - SEO best practices (Metadata API).
  - Fast LCP (Largest Contentful Paint) via priority loading.
- **Fully Responsive**: Mobile-first design supporting all screen sizes (375px to 1440px+).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Radix UI + [Shadcn UI](https://ui.shadcn.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```bash
lwu-website/
├── app/                  # App Router pages and layouts
│   ├── about/            # About Us & Vision-Mission
│   ├── contact/          # Contact page
│   ├── products/         # Product catalog and dynamic detail routes
│   └── services/         # Service offerings catalog
├── components/           # React components
│   ├── layout/           # Navbar, Footer, and Shared Layouts
│   ├── home/             # Home-specific sections
│   ├── shared/           # Reusable UI components (ProductCard, SectionHeading, etc.)
│   └── ui/               # Base UI primitives (Buttons, Inputs, Cards)
├── data/                 # Centralized data stores (Hardcoded CMS)
├── public/               # Static assets (Images, SVGs, Logos)
└── types/                # Shared TypeScript interfaces
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18.x or 20.x
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rhesatsaqif23/lwu-website.git
   cd lwu-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🎨 Inspiration & Credits

- **Design Inspiration**: [HopEdu - Webflow Template](https://hopedu.webflow.io/)
- **Platform**: Learning With Us (LWU)

---

## 📄 License

This project is built as part of a technical evaluation. All brand assets (logo, names) belong to **Learning With Us**. Code implementation is provided for portfolio demonstration purposes.

---

**Developed with ❤️ by [Rhesa Tsaqif](https://github.com/rhesatsaqif23)**
