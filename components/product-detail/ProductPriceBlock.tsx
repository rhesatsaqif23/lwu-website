"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Product } from "@/types"

interface ProductPriceBlockProps {
  product: Product
}

export default function ProductPriceBlock({ product }: ProductPriceBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="rounded-2xl border-2 border-gray-100 shadow-sm overflow-hidden bg-white">
      <CardContent className="p-4 md:p-5 flex flex-col gap-5 md:gap-6">
        {/* Thumbnail */}
        <div className="relative w-full aspect-323/213 rounded-lg md:rounded-xl overflow-hidden shadow-sm">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-black/5 hover:bg-black/10 transition-colors" />
        </div>

        {/* Pricing & Badge */}
        <div className="flex items-center justify-between gap-4 mt-1 md:mt-2">
          <p className="text-2xl md:text-[28px] font-bold text-primary">{product.price}</p>
          <Badge className="bg-[#FFE5E5] text-[#FF4B4B] hover:bg-[#FFE5E5] border-none px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-bold rounded-[3px]">
            7 Days Left!
          </Badge>
        </div>

        {/* Action Button */}
        <a 
          href={product.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full h-12 md:h-14 rounded-md bg-primary text-white font-bold text-base md:text-lg hover:bg-primary/90 transition-all shadow-md cursor-pointer"
        >
          BUY NOW
        </a>

        {/* Guarantee Info */}
        <div className="flex items-center justify-center gap-2 py-1 md:py-2">
          <div className="relative w-3 h-3 md:w-3.5 md:h-3.5">
            <Image 
              src="/figmaAssets/icon-check.svg" 
              alt="Check" 
              fill 
              sizes="14px"
            />
          </div>
          <p className="text-xs md:text-[13px] font-medium text-muted/90">30-Day Money-Back Guarantee</p>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  )
}
