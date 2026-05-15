"use client"

import { motion, Variants } from "framer-motion"
import SectionHeading from "@/components/shared/SectionHeading"
import ProductCard from "@/components/shared/ProductCard"
import { products } from "@/data/products"

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function FeaturedSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container-lg">
        <SectionHeading
          label="Recommended"
          title="Featured Resources"
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
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
