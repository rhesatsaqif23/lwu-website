"use client"

import { motion, Variants } from "framer-motion"

const stats = [
  { value: "7+", label: "Years Serving English Learners" },
  { value: "1,000+", label: "Students Achieved Their Goals" },
  { value: "15+", label: "Certified Instructors" },
  { value: "5+", label: "Course Programs Available" },
]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function KeyStats() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-lg">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-secondary mb-1">{stat.value}</p>
              <p className="text-muted text-sm md:text-base leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
