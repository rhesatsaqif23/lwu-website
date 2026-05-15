"use client"

import { motion, Variants } from "framer-motion"
import { Calendar, Tag, ArrowRight } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"
import { blogPreviews } from "@/data/blogPreviews"

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function BlogPreviews() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
        <SectionHeading
          label="Updates"
          title="Latest From LWU"
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
          {blogPreviews.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[12px] border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="h-40 gradient-primary flex items-center justify-center">
                <span className="text-white/40 text-xs">Blog Image Placeholder</span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-secondary" />
                    {post.category}
                  </span>
                </div>
                <h3 className="font-bold text-primary text-base leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <div className="mt-auto">
                  <button className="inline-flex items-center gap-1.5 text-secondary text-sm font-semibold hover:text-secondary-dark transition-colors">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
