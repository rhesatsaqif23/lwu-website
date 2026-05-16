"use client"

import { motion, AnimatePresence, Variants } from "framer-motion"
import { SearchX } from "lucide-react"
import ProductCard from "@/components/shared/ProductCard"
import type { Product } from "@/types"

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

interface ProductListingProps {
  products: Product[]
  clearFilters: () => void
  isLoading?: boolean
}

export default function ProductListing({ products, clearFilters, isLoading }: ProductListingProps) {
  if (isLoading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i} 
            className="rounded-[10px] bg-slate-50 border border-slate-100 aspect-16/22 animate-pulse" 
          />
        ))}
      </motion.div>
    )
  }

  if (products.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-4"
      >
        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
          <SearchX className="h-8 w-8 text-slate-300" />
        </div>
        <div className="space-y-1">
          <p className="text-slate-900 font-bold text-xl">No products found</p>
          <p className="text-slate-500 mx-auto">No products were found matching the selected filters. Try adjusting your selection.</p>
        </div>
        <button 
          onClick={clearFilters}
          className="mt-2 bg-primary text-white px-6 py-2.5 rounded-sm font-semibold hover:bg-secondary transition-all shadow-md shadow-primary/10"
        >
          Clear All Filters
        </button>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
      >
        <AnimatePresence mode="popLayout">
          {products.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
