"use client"

import { motion, Variants } from "framer-motion"
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const stagger: Variants = {
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
        <motion.div
          variants={fadeUp}
          className="mb-4"
        >
          <span className={cn(
            "inline-block rounded-[5px] px-[15px] py-1 text-[13px] font-semibold leading-6 tracking-normal",
            light ? "bg-white/10 text-white" : "bg-blue-50 text-primary"
          )}>
            {label}
          </span>
        </motion.div>
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
