"use client"

import { motion, Variants } from "framer-motion"
import { BookOpen, Target, Briefcase, Sparkles } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"

const categories = [
  {
    id: "general-english",
    icon: BookOpen,
    title: "General English",
    description:
      "Build everyday English skills for communication, reading, writing, and speaking at any level.",
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    id: "ielts",
    icon: Target,
    title: "IELTS Preparation",
    description:
      "Targeted preparation to help you achieve your IELTS target score for study or career abroad.",
    color: "bg-cyan-50 border-cyan-100",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business English",
    description:
      "Professional English for workplace communication, presentations, emails, and negotiations.",
    color: "bg-amber-50 border-amber-100",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    id: "self-dev",
    icon: Sparkles,
    title: "Self-Development",
    description:
      "Courses on leadership, emotional intelligence, negotiation, and personal effectiveness.",
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
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

export default function ProgramCategories() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-lg">
        <SectionHeading
          label="Our Programs"
          title="Program Categories"
          align="center"
          className="mb-12"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className={`rounded-[12px] border p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 ${cat.color}`}
            >
              <div className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center`}>
                <cat.icon className={`w-6 h-6 ${cat.iconColor}`} />
              </div>
              <div>
                <h3 className="font-bold text-primary text-base mb-1.5">{cat.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
