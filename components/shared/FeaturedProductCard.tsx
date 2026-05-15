"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Users, Clock, BookOpen, GraduationCap, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FeaturedProduct } from "@/types"

interface FeaturedProductCardProps extends FeaturedProduct {
  className?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function FeaturedProductCard({
  slug,
  title,
  type,
  by,
  readers,
  duration,
  ctaLabel,
  className,
}: FeaturedProductCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.015, y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group bg-white rounded-[12px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="w-full md:w-48 lg:w-56 h-44 md:h-auto flex-shrink-0 gradient-primary flex items-center justify-center">
        {type === "Ebook" ? (
          <BookOpen className="w-14 h-14 text-secondary opacity-80" />
        ) : (
          <GraduationCap className="w-14 h-14 text-secondary opacity-80" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
          {type}
        </span>
        <h3 className="font-bold text-primary text-lg leading-snug group-hover:text-secondary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-muted">By {by}</p>

        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-secondary" />
            {readers}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-secondary" />
            {duration}
          </span>
        </div>

        <div className="mt-auto pt-4">
          <Link
            href={`/products/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary-dark transition-colors duration-200"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
