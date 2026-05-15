"use client"

import { motion, Variants } from "framer-motion"
import { BookOpen, Target, Briefcase, Sparkles, ArrowRight } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"
import Link from "next/link"

const programs = [
  {
    icon: BookOpen,
    title: "General English",
    body: "Build everyday English skills for communication, reading, writing, and speaking at any level. From A1 beginners to advanced C1 learners.",
    href: "/products/general-english",
  },
  {
    icon: Target,
    title: "IELTS Preparation",
    body: "Targeted preparation to help you achieve your IELTS target score for study or career abroad, with proven strategies for all four skills.",
    href: "/products/ielts-preparation",
  },
  {
    icon: Briefcase,
    title: "Business English",
    body: "Professional English for workplace communication, presentations, emails, and negotiations — designed for career-focused learners.",
    href: "/products",
  },
  {
    icon: Sparkles,
    title: "Self-Development",
    body: "Courses on leadership, emotional intelligence, negotiation, and personal effectiveness to help you grow beyond just language skills.",
    href: "/products",
  },
]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function WhatWeOffer() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-lg">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading label="Programs" title="What We Offer" />
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:text-secondary-dark transition-colors self-start md:self-auto"
          >
            View All Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.title}
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[12px] border border-gray-100 p-6 flex gap-4 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                <prog.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-primary text-base mb-1.5 group-hover:text-secondary transition-colors">
                  {prog.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{prog.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
