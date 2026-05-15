"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { Star, BookOpen, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Product } from "@/types"

interface ProductCardProps extends Product {
  className?: string
}

const badgeColors: Record<string, string> = {
  BESTSELLER: "bg-accent text-white",
  NEW:        "bg-secondary text-white",
  POPULAR:    "bg-primary text-white",
  FEATURED:   "bg-secondary text-white",
  PROMO:      "bg-red-500 text-white",
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ProductCard({
  slug,
  title,
  type,
  badge,
  rating,
  price,
  meta1,
  meta2,
  ctaLabel,
  className,
}: ProductCardProps) {
  const badgeClass = badgeColors[badge] ?? "bg-muted text-white"

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative bg-white rounded-[12px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden",
        className
      )}
    >
      <Link href={`/products/${slug}`} className="flex flex-col h-full">
        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={cn("text-[11px] font-bold px-3 py-1 rounded-full", badgeClass)}>
            {badge}
          </span>
        </div>

        {/* Thumbnail placeholder */}
        <div className="h-44 gradient-primary flex items-center justify-center">
          {type === "Ebook" ? (
            <BookOpen className="w-16 h-16 text-secondary opacity-80" />
          ) : (
            <GraduationCap className="w-16 h-16 text-secondary opacity-80" />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Type */}
          <span className="text-[11px] font-semibold text-secondary tracking-wide">
            {type}
          </span>

          {/* Title */}
          <h3 className="font-bold text-primary text-base leading-snug line-clamp-2 group-hover:text-secondary transition-colors duration-200">
            {title}
          </h3>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-muted">
            <span>{meta1}</span>
            <span className="w-1 h-1 rounded-full bg-muted inline-block" />
            <span>{meta2}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3.5 h-3.5",
                  i < Math.round(rating) ? "fill-accent text-accent" : "text-gray-200"
                )}
              />
            ))}
            <span className="text-xs text-muted ml-1">{rating.toFixed(1)}</span>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
            <span className="font-bold text-primary text-sm">{price}</span>
            <span className="text-sm font-semibold text-secondary group-hover:text-secondary-dark transition-colors duration-200">
              {ctaLabel} →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
