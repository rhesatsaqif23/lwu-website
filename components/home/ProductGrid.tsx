"use client"

import { motion } from "framer-motion"
import SectionHeading from "@/components/shared/SectionHeading"
import ProductCard from "@/components/shared/ProductCard"
import { products } from "@/data/products"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ProductGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-lg">
        <SectionHeading
          label="Our Products"
          title="Products & Services"
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
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
