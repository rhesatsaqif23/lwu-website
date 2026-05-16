"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { Product } from "@/types"
import { Book, FileText, Globe, FileCheck, LucideIcon } from "lucide-react"

interface ProductHeaderProps {
  product: Product
}

const iconMap: Record<string, LucideIcon> = {
  book: Book,
  "file-text": FileText,
  globe: Globe,
  "file-check": FileCheck,
}

export default function ProductHeader({ product }: ProductHeaderProps) {
  const ratingStars = Array.from({ length: 5 }, (_, index) => ({
    id: `star-${index}`,
    src: "/figmaAssets/component-5-1.svg",
  }))

  return (
    <motion.header 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col items-start gap-6 md:gap-10"
    >
      <h1 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-tight text-primary max-w-3xl">
        {product.title}
      </h1>

      <div className="flex flex-wrap items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 border-b border-gray-100 pb-8 md:pb-10 w-full">
        {/* Author */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative h-12 w-12 md:h-[58px] md:w-[58px] overflow-hidden rounded-full border-2 border-white shadow-sm bg-slate-50">
            <Image
              src="/figmaAssets/cropped-circle-image-1-1.png"
              alt="Author"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs md:text-sm font-semibold text-muted tracking-wide">Author</span>
            <span className="text-base md:text-[19px] font-bold text-primary">{product.author}</span>
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10">
             <Image src="/figmaAssets/component-1-16.svg" alt="Category" width={28} height={36} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs md:text-sm font-semibold text-muted tracking-wide">Category</span>
            <span className="text-base md:text-[19px] font-bold text-primary">{product.type}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex flex-col gap-1 md:gap-1.5">
          <span className="text-xs md:text-sm font-semibold text-muted tracking-wide">Rating</span>
          <div className="flex items-center gap-2 md:gap-2.5">
            <div className="flex gap-0.5 md:gap-1">
              {ratingStars.map((star) => (
                <Image key={star.id} src={star.src} alt="Star" width={17} height={17} className="w-3.5 h-3.5 md:w-[17px] md:h-[17px]" />
              ))}
            </div>
            <span className="text-xs md:text-sm text-muted font-medium">({product.reviews} Review)</span>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex flex-wrap items-center gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 w-full">
        {product.stats.map((stat, i) => {
          const IconComponent = iconMap[stat.icon] || Book
          return (
            <div key={i} className="flex items-center gap-2.5 md:gap-3.5">
              <div className="flex h-6 w-6 md:h-[30px] md:w-[30px] items-center justify-center rounded-full border border-gray-200 text-primary/70">
                <IconComponent className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm md:text-base font-bold text-primary">{stat.value}</span>
                <span className="text-xs md:text-base font-semibold text-primary/70">{stat.label}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Main Course Image */}
      <div className="relative aspect-video md:aspect-740/398 w-full rounded-lg md:rounded-xl overflow-hidden shadow-sm mt-2 md:mt-4 bg-slate-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.header>
  )
}
