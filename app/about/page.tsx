import type { Metadata } from "next"
import AboutHero from "@/components/about/AboutHero"
import KeyStats from "@/components/about/KeyStats"
import AboutStory from "@/components/about/AboutStory"
import WhatWeOffer from "@/components/about/WhatWeOffer"
import TeamSection from "@/components/about/TeamSection"
import Testimonials from "@/components/home/Testimonials"
import BlogPreviews from "@/components/about/BlogPreviews"
import ContactBlock from "@/components/about/ContactBlock"

export const metadata: Metadata = {
  title: "About Us | Learning With Us",
  description:
    "Founded in 2017, Learning With Us has helped 1,000+ students across Indonesia and internationally with flexible, results-driven English education.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <KeyStats />
      <AboutStory />
      <WhatWeOffer />
      <TeamSection />
      <Testimonials />
      <BlogPreviews />
      <ContactBlock />
    </>
  )
}
