"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Tag, ArrowRight } from "lucide-react"
import type { Product } from "@/types"

interface ProductPriceBlockProps {
  product: Product
}

export default function ProductPriceBlock({ product }: ProductPriceBlockProps) {
  const isContact = product.price === "Contact for Pricing"

  return (
    <motion.aside
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 flex flex-col gap-5 sticky top-24"
    >
      {/* Price */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Tag className="w-4 h-4 text-secondary" />
          <span className="text-[11px] font-semibold text-secondary tracking-wide">
            Limited Time Offer
          </span>
        </div>
        <p className="text-3xl font-bold text-primary">{product.price}</p>
      </div>

      {/* CTA */}
      <button className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
        {isContact ? "Contact Us" : product.ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Guarantee */}
      <div className="flex items-start gap-3 pt-4 border-t border-gray-100">
        <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
        <p className="text-xs text-muted leading-relaxed">
          <span className="font-semibold text-primary">30-Day Money-Back Guarantee.</span>{" "}
          Not satisfied? We&apos;ll give you a full refund, no questions asked.
        </p>
      </div>
    </motion.aside>
  )
}
