"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
  className?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn("h-full cursor-pointer", className)}
    >
      <Link href={`/products/${product.slug}`} className="block h-full">
        <Card className="rounded-[10px] border-0 bg-white shadow-[0px_4px_15px_#0000001a] h-full overflow-hidden">
          <CardContent className="flex h-full flex-col gap-6 p-0 pt-3 pb-[9px]">
            <div className="px-2.5">
              <div className="overflow-hidden rounded-[10px] aspect-16/11 relative bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 380px"
                />
              </div>
            </div>
            
            <div className="flex flex-1 flex-col px-5">
              <div className="flex flex-col">
                <div className="flex items-start justify-between gap-4 pb-[5px]">
                  <div className="text-[13px] font-semibold text-slate-500 whitespace-nowrap">
                    Available Now
                  </div>
                  <div className="inline-flex items-center justify-center rounded-[5px] bg-primary px-[9px] py-1 text-[11px] font-bold text-white whitespace-nowrap">
                    {product.badge}
                  </div>
                </div>
                
                <div className="pb-5 min-h-[60px]">
                  <h3 className="block text-2xl font-bold leading-[30px] text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b-2 border-[#f4f4f4] pb-[11px]">
                  {product.meta.map((item, index) => (
                    <div key={index} className="inline-flex items-center gap-2.5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#d9d9d9] bg-white">
                        {item.icon ? (
                          <Image
                            src={item.icon}
                            alt=""
                            width={16}
                            height={16}
                            className="h-4 w-4"
                          />
                        ) : item.iconBg ? (
                          <div className={cn("h-3.5 w-[15px] bg-contain bg-no-repeat bg-center", item.iconBg)} />
                        ) : null}
                      </div>
                      <div className="text-[13px] font-semibold text-slate-500 whitespace-nowrap">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between gap-4 pt-[30px] pb-5 mt-auto">
                <div className="text-2xl font-bold text-primary">
                  {product.price}
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff6b6b] hover:opacity-80 transition-opacity">
                  {product.buyIcon && (
                    <Image src={product.buyIcon} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                  )}
                  <span>Buy Now</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
