"use client"

import { motion, Variants } from "framer-motion"
import SectionHeading from "@/components/shared/SectionHeading"
import CTAButton from "@/components/shared/CTAButton"
import Image from "next/image"
import { aboutItems } from "@/data/about"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function AboutStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <SectionHeading label="About LWU" title="Our Story" className="mb-8" />

          <motion.div variants={fadeUp} className="prose prose-gray max-w-none">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              Learning With Us (LWU) was founded in 2017 as private in-person English classes in
              South Tangerang, Banten, Indonesia. Driven by a passion for accessible education,
              LWU transitioned to a fully online model in 2019.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
              Today, LWU serves 1,000+ students aged 7–62 across Indonesia and internationally,
              offering General English, IELTS, Business English, and Self-Development programs.
              Our flexible, results-driven approach has helped countless learners achieve their
              language goals and open new opportunities.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {aboutItems.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/20 transition-all hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Image 
                    src={item.iconSrc} 
                    alt={item.iconAlt} 
                    width={28} 
                    height={28} 
                    className="brightness-0 invert"
                  />
                </div>
                <h3 className="font-bold text-primary text-2xl mb-4">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp}>
            <CTAButton href="/products" label="Explore Courses" variant="primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
