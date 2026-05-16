// ─── Product Types ────────────────────────────────────────────────────────────

export interface ProductMeta {
  icon?: string
  iconBg?: string
  text: string
}

export interface Product {
  id: string
  slug: string
  title: string
  type: string
  badge: string
  rating: number
  price: string
  image: string
  ctaLink: string
  buyIcon?: string
  meta: ProductMeta[]
}

export interface ProductDetail {
  slug: string
  title: string
  intro: string
  description: string
  benefits: string[]
  price: string
  type: string
  rating: number
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
  id: string
  name: string
  title: string
  rating: number
  bio?: string
  avatar?: string
}

// ─── Navigation Types ─────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

// ─── Program Category Types ───────────────────────────────────────────────────

export interface ProgramCategory {
  id: string
  title: string
  description: string
  href: string
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

// ─── Contact Types ────────────────────────────────────────────────────────────

export interface ContactInfo {
  address: string
  phoneHeadOffice: string
  phoneBranch: string
  email1: string
  email2: string
  instagramHandle: string
  tiktokHandle: string
  linkedinHandle: string
}

// ─── Site Config Types ────────────────────────────────────────────────────────

export interface SiteConfig {
  siteName: string
  siteDescription: string
  author: string
  email: string
  phone: string
  address: string
  instagramUrl: string
  tiktokUrl: string
  linkedinUrl: string
  copyright: string
  tagline: string
}
