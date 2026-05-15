"use client"

import { motion, Variants } from "framer-motion"
import SectionHeading from "@/components/shared/SectionHeading"
import ProductCard from "@/components/shared/ProductCard"
import { products } from "@/data/products"

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-surface">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
        <SectionHeading
          label="Top Picks"
          title="Featured Products"
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
