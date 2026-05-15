"use client"

import { motion } from "framer-motion"

const logos = [
  "Partner A", "Partner B", "Partner C", "Partner D",
  "Partner E", "Partner F", "Partner G", "Partner H",
]

export default function ClientLogos() {
  return (
    <section className="py-10 bg-surface border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-muted text-[11px] font-medium tracking-wide">
          Trusted by learners from
        </p>
      </div>

      {/* Scroll track */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {/* Duplicated for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-32 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-muted text-xs font-semibold">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
