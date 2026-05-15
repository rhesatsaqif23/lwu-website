"use client"

import { motion } from "framer-motion"
import { Star, BookOpen, GraduationCap } from "lucide-react"
import Breadcrumb from "@/components/shared/Breadcrumb"
import type { Product } from "@/types"

interface ProductDetailHeroProps {
  product: Product
}

export default function ProductDetailHero({ product }: ProductDetailHeroProps) {
  const Icon = product.type === "Ebook" ? BookOpen : GraduationCap

  return (
    <section className="gradient-hero py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      <div className="container-lg relative">
        <Breadcrumb
          items={[
            { label: "Products & Services", href: "/products" },
            { label: "Product Details" },
          ]}
          light
          className="mb-6"
        />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Thumbnail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0"
          >
            <Icon className="w-16 h-16 text-secondary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <span className="text-secondary font-semibold text-[11px] tracking-wide">
              {product.type}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {product.title}
            </h1>
            <p className="text-blue-200 text-sm">By LWU Team</p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? "fill-accent text-accent" : "text-white/20"}`}
                  />
                ))}
              </div>
              <span className="text-blue-200 text-sm">{product.rating} rating</span>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap gap-4 text-sm text-blue-200">
              {product.meta.map((m, i) => (
                <span key={i} className="bg-white/10 px-3 py-1 rounded-full">{m.text}</span>
              ))}
              <span className="bg-white/10 px-3 py-1 rounded-full">Self-paced</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
