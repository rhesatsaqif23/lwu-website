"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
  titleClassName?: string
  light?: boolean
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  light = false,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align]

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(alignClass, className)}
    >
      {label && (
        <motion.span
          variants={fadeUp}
          className="inline-block text-secondary font-semibold text-sm uppercase tracking-widest mb-2"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-primary",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl leading-relaxed",
            light ? "text-blue-100" : "text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
