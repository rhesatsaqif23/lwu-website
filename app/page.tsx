import type { Metadata } from "next"
import HeroSection from "@/components/home/HeroSection"
import ClientLogos from "@/components/home/ClientLogos"
import AboutSnippet from "@/components/home/AboutSnippet"
import ProgramCategories from "@/components/home/ProgramCategories"
import ProductGrid from "@/components/home/ProductGrid"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Testimonials from "@/components/home/Testimonials"
import ContactSnippet from "@/components/home/ContactSnippet"

export const metadata: Metadata = {
  title: "Learning With Us | Online English & Self-Development Courses",
  description:
    "Learning With Us (LWU) is an online English course platform helping 1,000+ students achieve their goals in General English, IELTS, Business English, and Self-Development.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <AboutSnippet />
      <ProgramCategories />
      <ProductGrid />
      <FeaturedProducts />
      <Testimonials />
      <ContactSnippet />
    </>
  )
}
