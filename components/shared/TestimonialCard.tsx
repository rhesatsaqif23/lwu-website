"use client"

import { motion, Variants } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Testimonial } from "@/types"

interface TestimonialCardProps extends Testimonial {
  className?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function TestimonialCard({
  name,
  title,
  quote,
  rating,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-white rounded-[12px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col gap-4",
        className
      )}
    >
      {/* Quote icon */}
      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
        <Quote className="w-5 h-5 text-secondary" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "fill-accent text-accent" : "text-gray-200"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-muted text-sm md:text-base leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-primary text-sm">{name}</p>
          <p className="text-xs text-muted">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}
