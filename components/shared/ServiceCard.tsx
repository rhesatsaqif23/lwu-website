"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Service } from "@/types"

interface ServiceCardProps {
  service: Service
  className?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn("h-full", className)}
    >
      <Card className="rounded-[10px] border-0 bg-white shadow-[0px_4px_15px_#0000001a] h-full overflow-hidden">
        <CardContent className="flex h-full flex-col gap-6 p-0 pt-3 pb-[9px]">
          {/* Image */}
          <div className="px-2.5">
            <div className="overflow-hidden rounded-[10px] aspect-video relative bg-gray-50">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 380px"
              />
            </div>
          </div>
          
          <div className="flex flex-1 flex-col px-5 md:px-6">
            <div className="flex flex-col">
              {/* Info & Category Badge */}
              <div className="flex items-start justify-between gap-4 pb-2">
                <div className="text-[13px] md:text-sm font-semibold text-slate-600 whitespace-nowrap">
                  {service.instructors.length > 0 ? service.instructors[0] : "Expert Instructor"}
                </div>
                <div className="inline-flex items-center justify-center rounded-[5px] bg-primary px-[9px] py-1 text-[10px] md:text-[11px] font-bold text-white whitespace-nowrap leading-none">
                  {service.category}
                </div>
              </div>
              
              {/* Title */}
              <div className="pb-4 min-h-[60px] md:min-h-[70px]">
                <h3 className="text-xl md:text-2xl font-bold leading-tight text-primary line-clamp-2">
                  {service.title}
                </h3>
              </div>
              
              {/* Description */}
              <div className="pb-6 border-b border-[#f4f4f4]">
                <p className="text-sm md:text-base leading-relaxed text-slate-700 line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-5 pb-4">
                 <ul className="space-y-2">
                    {service.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[13px] md:text-sm text-slate-600">
                        <span className="text-secondary mt-1 text-base leading-none">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex items-center justify-between gap-4 pt-4 pb-4 md:pb-6 mt-auto">
              <div className="text-sm md:text-base font-bold text-primary">
                {service.date}
              </div>
              <div className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-secondary hover:opacity-80 transition-opacity">
                <span>{service.ctaLabel}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
