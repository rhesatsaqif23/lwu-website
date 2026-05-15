"use client"

import { motion } from "framer-motion"
import Breadcrumb from "@/components/shared/Breadcrumb"

export default function ProductsHero() {
  return (
    <section className="gradient-hero py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      <div className="container-lg relative">
        <Breadcrumb items={[{ label: "Products & Services" }]} light className="mb-6" />
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2 block">
          Product
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black text-white"
        >
          All Products &amp; Services
        </motion.h1>
      </div>
    </section>
  )
}
