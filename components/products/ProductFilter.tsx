"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProductCard from "@/components/shared/ProductCard"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"

const tabs = ["All", "Ebooks", "Online Courses"] as const
type Tab = (typeof tabs)[number]

export default function ProductFilter() {
  const [active, setActive] = useState<Tab>("All")

  const filtered = products.filter((p) => {
    if (active === "All") return true
    if (active === "Ebooks") return p.type === "Ebook"
    return p.type === "Online Course"
  })

  return (
    <section className="section-padding bg-white">
      <div className="container-lg">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-10 border-b border-gray-100 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              id={`filter-tab-${tab.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActive(tab)}
              className={cn(
                "px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                active === tab
                  ? "bg-primary text-white shadow-md"
                  : "text-muted hover:text-primary hover:bg-gray-100"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
