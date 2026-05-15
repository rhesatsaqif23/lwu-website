"use client"

import { motion } from "framer-motion"
import SectionHeading from "@/components/shared/SectionHeading"
import FeaturedProductCard from "@/components/shared/FeaturedProductCard"
import { featuredProducts } from "@/data/products"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-lg">
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
          className="flex flex-col gap-5"
        >
          {featuredProducts.map((product) => (
            <FeaturedProductCard key={product.slug} {...product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
