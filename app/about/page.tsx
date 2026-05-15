import type { Metadata } from "next"
import AboutHero from "@/components/about/AboutHero"
import KeyStats from "@/components/about/KeyStats"
import AboutStory from "@/components/about/AboutStory"
import ProgramCategories from "@/components/home/ProgramCategories"
import TeamSection from "@/components/about/TeamSection"
import BlogPreviews from "@/components/about/BlogPreviews"
import ContactBlock from "@/components/about/ContactBlock"

export const metadata: Metadata = {
  title: "About Us | Learning With Us",
  description:
    "Founded in 2017, Learning With Us has helped 1,000+ students across Indonesia and internationally with flexible, results-driven English education.",
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <KeyStats />
      <AboutStory />
      <ProgramCategories />
      <TeamSection />
      <BlogPreviews />
      <ContactBlock />
    </main>
  )
}
