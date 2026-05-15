"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  href: string
  label: string
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  external?: boolean
  icon?: React.ReactNode
}

export default function CTAButton({
  href,
  label,
  variant = "primary",
  size = "md",
  className,
  external = false,
  icon,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-md hover:shadow-lg active:scale-[0.98]",
    secondary:
      "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary shadow-md hover:shadow-lg active:scale-[0.98]",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    ghost:
      "text-primary hover:bg-primary/10 focus:ring-primary",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {label}
        {icon && <span>{icon}</span>}
      </motion.a>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={classes}>
        {label}
        {icon && <span>{icon}</span>}
      </Link>
    </motion.div>
  )
}
