"use client"

import { motion, Variants } from "framer-motion"
import { Eye, Target } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"
import CTAButton from "@/components/shared/CTAButton"

const cards = [
  {
    icon: Eye,
    title: "Vision",
    body: "To be the leading platform for English proficiency and personal development, nurturing confident, capable, and future-ready individuals.",
  },
  {
    icon: Target,
    title: "Mission",
    body: "To empower individuals to reach their full potential by mastering global communication and essential life skills.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function AboutSnippet() {
  return (
    <section className="section-padding bg-white">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square max-w-sm mx-auto rounded-2xl gradient-primary flex items-center justify-center shadow-xl">
              <div className="text-center text-white/60 p-8">
                <div className="w-16 h-16 rounded-xl bg-secondary/20 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-secondary text-2xl font-bold">LWU</span>
                </div>
                <p className="text-sm">About Image Placeholder</p>
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex flex-col gap-6"
          >
            <SectionHeading
              label="About Us"
              title="About LWU"
              subtitle="LWU is an online English learning platform helping 1,000+ students achieve their goals. We've been offering flexible, results-driven education since 2017 — from General English to IELTS, Business English, and Self-Development."
            />

            {/* Vision & Mission cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="bg-surface rounded-[12px] p-5 border border-gray-100 hover:border-secondary/30 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                    <card.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-bold text-primary text-base mb-1">{card.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{card.body}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp}>
              <CTAButton href="/products" label="Get Started" variant="primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
