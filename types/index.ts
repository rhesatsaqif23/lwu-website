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
  reviews: number;
  author: string;
  price: string;
  image: string;
  ctaLink: string;
  buyIcon?: string;
  meta: ProductMeta[];
  intro: string;
  description: string;
  benefits: string[];
  stats: ProductStat[];
}

export interface ProductStat {
  label: string;
  value: string;
  icon: string;
}

// ─── Testimonial Types ────────────────────────────────────────────────────────

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
  rating: number;
}

// ─── Team Types ───────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  rating: number;
  bio?: string;
  avatar?: string;
  image?: string;
}

// ─── Navigation Types ─────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
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
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  ctaLabel: string;
  ctaLink: string;
  instructors: string[];
  highlights: string[];
}

// ─── Contact Types ────────────────────────────────────────────────────────────

export interface ContactInfoItem {
  icon: string;
  title: string;
  content: (string | { label: string; value: string })[];
}

export interface ContactField {
  id: string;
  label: string;
  type: "input" | "textarea";
  gridCols: string;
}

export interface ContactInfo {
  address: string;
  phoneHeadOffice: string;
  phoneBranch: string;
  email1: string;
  email2: string;
  instagramHandle: string;
  tiktokHandle: string;
  linkedinHandle: string;
}

// ─── Site Config Types ────────────────────────────────────────────────────────

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  author: string;
  email: string;
  phone: string;
  address: string;
  instagramUrl: string;
  tiktokUrl: string;
  linkedinUrl: string;
  copyright: string;
  tagline: string;
}
