"use client"

import { motion, Variants } from "framer-motion"
import SectionHeading from "@/components/shared/SectionHeading"
import ProductCard from "@/components/shared/ProductCard"
import { products } from "@/data/products"

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ProductGrid() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
        <SectionHeading
          label="Our Products"
          title="Featured Products"
          align="center"
          className="mb-12 md:mb-[70px]"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid w-full grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
