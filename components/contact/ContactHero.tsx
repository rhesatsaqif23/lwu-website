"use client"

import { motion } from "framer-motion"
import Breadcrumb from "@/components/shared/Breadcrumb"

export default function ContactHero() {
  return (
    <section className="gradient-hero py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      <div className="container-lg relative">
        <Breadcrumb items={[{ label: "Contact Us" }]} light className="mb-6" />
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-3"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-blue-200 text-lg max-w-xl"
        >
          We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you within 24 hours.
        </motion.p>
      </div>
    </section>
  )
}
