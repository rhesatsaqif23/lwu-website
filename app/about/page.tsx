import type { Metadata } from "next"
import Breadcrumb from "@/components/shared/Breadcrumb"
import KeyStats from "@/components/about/KeyStats"
import ProgramCategories from "@/components/home/ProgramCategories"
import TeamSection from "@/components/about/TeamSection"
import AboutSection from "@/components/home/AboutSection"
import WhatWeOffer from "@/components/about/WhatWeOffer"

export const metadata: Metadata = {
  title: "About Us | Learning With Us",
  description:
    "Founded in 2017, Learning With Us has helped 1,000+ students across Indonesia and internationally with flexible, results-driven English education.",
}

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#F5F9FF] py-8">
        <div className="container-lg">
          <Breadcrumb
            items={[{ label: "About Us" }]}
            centered
            separator="//"
            uppercase
            hideHomeIcon
          />
        </div>
      </section>
      <AboutSection />
      <KeyStats />
      <WhatWeOffer />
      <ProgramCategories />
      <TeamSection />
    </main>
  )
}
