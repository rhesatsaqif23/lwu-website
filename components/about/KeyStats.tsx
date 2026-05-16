"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { stats } from "@/data/about"
import SectionHeading from "@/components/shared/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function KeyStats() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
        {/* Centered Heading */}
        <SectionHeading
          label="Start to Success"
          title="The English Course You're Looking For"
          align="center"
          className="mb-16"
          titleClassName="text-3xl md:text-4xl lg:text-[42px] leading-tight"
        />

        {/* Stats Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <Card className="border-0 bg-transparent shadow-none h-full">
                <CardContent className="flex flex-col items-center justify-center p-0 text-center">
                  {/* Icon */}
                  <div className="relative h-16 w-16 md:h-[76px] md:w-[76px] mb-6 md:mb-8">
                    <Image
                      src={stat.icon || "/figmaAssets/icon-ebook.svg"}
                      alt={stat.label}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 64px, 76px"
                    />
                  </div>
                  
                  {/* Value */}
                  <p className="text-3xl md:text-4xl font-bold text-secondary mb-2 md:mb-3">
                    {stat.value}
                  </p>
                  
                  {/* Label */}
                  <p className="text-primary font-medium text-sm sm:text-base md:text-lg max-w-[200px] leading-relaxed">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
