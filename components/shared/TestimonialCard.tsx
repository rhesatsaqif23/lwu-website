"use client"

import { motion, Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Testimonial } from "@/types"

interface TestimonialCardProps extends Testimonial {
  className?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function TestimonialCard({
  name,
  title,
  quote,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn("h-full flex flex-col", className)}
    >
      <Card className="w-full flex-1 rounded-[10px] border-0 bg-white shadow-none mt-[60px]">
        <CardContent className="relative flex h-full flex-col items-center px-6 pb-[50px] pt-[95px] sm:px-[60px]">
          {/* Overlapping Avatar */}
          <div className="absolute left-1/2 top-[-60px] -translate-x-1/2">
            <Avatar className="h-[120px] w-[120px] rounded-full border-[6px] border-white shadow-md">
              <AvatarImage
                src={image}
                alt={name}
                className="object-cover"
              />
              <AvatarFallback className="bg-gray-100 text-primary font-bold">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>

          <header className="flex flex-col items-center gap-1 pb-[1.81px] text-center">
            <h3 className="text-2xl font-bold leading-[30px] text-primary">
              {name}
            </h3>
            <p className="text-[13px] font-semibold leading-[19.5px] text-slate-500">
              {title}
            </p>
            {/* Star Rating */}
            <div className="flex items-center justify-center gap-[9px] pt-[21.19px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src="/figmaAssets/vector-4.svg"
                  alt="Star"
                  width={16}
                  height={16}
                  className="h-5 w-[16.54px]"
                />
              ))}
            </div>
          </header>

          <blockquote className="pt-5">
            <p className="mx-auto max-w-[365.85px] text-center text-lg font-normal leading-[27px] text-slate-500 italic">
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
        </CardContent>
      </Card>
    </motion.div>
  )
}
