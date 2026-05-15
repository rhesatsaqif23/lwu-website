"use client"

import { motion } from "framer-motion"
import { Eye, Target } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"
import CTAButton from "@/components/shared/CTAButton"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function AboutStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-lg">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <SectionHeading label="About LWU" title="Our Story" className="mb-8" />

          <motion.div variants={fadeUp} className="prose prose-gray max-w-none">
            <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
              Learning With Us (LWU) was founded in 2017 as private in-person English classes in
              South Tangerang, Banten, Indonesia. Driven by a passion for accessible education,
              LWU transitioned to a fully online model in 2019.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
              Today, LWU serves 1,000+ students aged 7–62 across Indonesia and internationally,
              offering General English, IELTS, Business English, and Self-Development programs.
              Our flexible, results-driven approach has helped countless learners achieve their
              language goals and open new opportunities.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                body: "To be the leading platform for English proficiency and personal development, nurturing confident, capable, and future-ready individuals.",
              },
              {
                icon: Target,
                title: "Our Mission",
                body: "To empower individuals to reach their full potential by mastering global communication and essential life skills.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-surface rounded-[12px] p-6 border border-gray-100 hover:border-secondary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp}>
            <CTAButton href="/products" label="EXPLORE COURSES" variant="primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
