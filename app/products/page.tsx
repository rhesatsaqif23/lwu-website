import type { Metadata } from "next"
import ProductsHero from "@/components/products/ProductsHero"
import ProductFilter from "@/components/products/ProductFilter"
import FeaturedSection from "@/components/products/FeaturedSection"
import ServicesSection from "@/components/products/ServicesSection"

export const metadata: Metadata = {
  title: "Products & Services | Learning With Us",
  description:
    "Explore LWU's range of ebooks, IELTS programs, Business English courses, and self-development resources.",
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductFilter />
      <FeaturedSection />
      <ServicesSection />
    </>
  )
}
