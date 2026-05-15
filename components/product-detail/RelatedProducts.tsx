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
  const related = products.filter((p) => p.slug !== currentSlug).slice(0, 3)

  return (
    <section className="section-padding bg-surface">
      <div className="container-lg">
        <SectionHeading
          label="Related Products"
          title="You Might Also Like"
          align="center"
          className="mb-12"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {related.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
