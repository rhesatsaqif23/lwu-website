"use client"

import { motion, Variants } from "framer-motion"
import SectionHeading from "@/components/shared/SectionHeading"
import TestimonialCard from "@/components/shared/TestimonialCard"
import { testimonials } from "@/data/testimonials"

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-lg">
        <SectionHeading
          label="Success Stories"
          title="Real Results From Real Students"
          align="center"
          className="mb-12"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
