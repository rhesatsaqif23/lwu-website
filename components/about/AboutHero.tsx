"use client"

import { motion, Variants } from "framer-motion"
import Breadcrumb from "@/components/shared/Breadcrumb"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function AboutHero() {
  return (
    <section className="bg-primary py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 relative">
        <Breadcrumb items={[{ label: "About Us" }]} light className="mb-6" />
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl leading-tight"
        >
          Empowering Learners Since 2017
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-blue-200 text-base md:text-lg max-w-2xl leading-relaxed"
        >
          Learning With Us (LWU) is an online English course platform founded in 2017, helping
          1,000+ students aged 7–62 across Indonesia and internationally achieve their English
          learning and personal development goals.
        </motion.p>
      </div>
    </section>
  )
}
