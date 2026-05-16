"use client"

import { motion, Variants } from "framer-motion"
import SectionHeading from "@/components/shared/SectionHeading"
import ProductCard from "@/components/shared/ProductCard"
import { products } from "@/data/products"

interface RelatedProductsProps {
  currentSlug: string
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  const currentProduct = products.find((p) => p.slug === currentSlug)
  
  const related = products
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      if (!currentProduct) return { product: p, score: 0 }
      
      const currentWords = currentProduct.title.toLowerCase().split(/\W+/).filter(w => w.length > 2)
      const pWords = p.title.toLowerCase().split(/\W+/).filter(w => w.length > 2)
      
      const score = pWords.filter(w => currentWords.includes(w)).length
      return { product: p, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.product)

  return (
    <section className="py-8 md:py-12 bg-surface">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
        <SectionHeading
          label="Related Products"
          title="You Might Also Like"
          align="center"
          className="mb-8 md:mb-10"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
