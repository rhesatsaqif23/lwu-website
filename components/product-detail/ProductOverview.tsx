"use client"

import { motion, Variants } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import type { Product } from "@/types"

interface ProductOverviewProps {
  product: Product
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ProductOverview({ product }: ProductOverviewProps) {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col w-full gap-8 md:gap-10"
    >
      {/* Overview Section */}
      <motion.div variants={fadeUp} className="flex flex-col w-full">
        <div className="bg-[#F6F7F9] px-6 py-4 md:px-8 md:py-5 rounded-md mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-primary">Overview</h2>
        </div>
        
        <div className="px-1 flex flex-col gap-6 md:gap-8 text-justify">
          {/* Intro */}
          <div className="text-base md:text-[17px] leading-relaxed text-gray-900 font-medium border-l-4 border-secondary pl-4 md:pl-6 py-1.5 md:py-2">
            {product.intro}
          </div>

          {/* Description */}
          <div className="text-base md:text-[17px] leading-relaxed text-gray-800/90 whitespace-pre-line font-medium">
            {product.description}
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div variants={fadeUp} className="flex flex-col w-full">
        <div className="bg-[#F6F7F9] px-6 py-4 md:px-8 md:py-5 rounded-md mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-primary">What You&apos;ll Get</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 px-1">
          {product.benefits.map((benefit, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              className="flex items-start gap-3"
            >
              <div className="flex h-5 w-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 mt-0.5 text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </div>
              <span className="text-sm md:text-[16px] font-medium text-gray-800">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
