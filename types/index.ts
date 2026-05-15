// ─── Product Types ────────────────────────────────────────────────────────────

export interface ProductMeta {
  icon?: string;
  iconBg?: string;
  text: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  type: string;
  badge: string;
  rating: number;
  price: string;
  meta: ProductMeta[];
  image: string;
  ctaLink: string;
  buyIcon?: string;
}

export interface FeaturedProduct {
  slug: string
  title: string
  type: string
  by: string
  readers: string
  duration: string
  ctaLabel: string
}

export interface ProductDetail {
  slug: string
  intro: string
  description: string
  benefits: string[]
}

// ─── Testimonial Types ────────────────────────────────────────────────────────

export interface Testimonial {
  name: string
  title: string
  quote: string
  image: string
  rating: number
}

// ─── Team Types ───────────────────────────────────────────────────────────────

export interface TeamMember {
  name: string
  title: string
  rating: number
  avatar?: string
}

// ─── Blog Types ───────────────────────────────────────────────────────────────

export interface BlogPreview {
  id: number
  date: string
  category: string
  title: string
  slug: string
}

// ─── Navigation Types ─────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

// ─── Program Category Types ───────────────────────────────────────────────────

export interface ProgramCategory {
  id: string;
  title: string;
  description: string;
  href: string;
}

// ─── Service Types ────────────────────────────────────────────────────────────

export interface Service {
  slug: string
  by: string
  title: string
  type: string
  meta: string
  ctaLabel: string
}
