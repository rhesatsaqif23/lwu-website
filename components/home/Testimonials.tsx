"use client"

import { motion, Variants } from "framer-motion"
import SectionHeading from "@/components/shared/SectionHeading"
import TestimonialCard from "@/components/shared/TestimonialCard"
import { testimonials } from "@/data/testimonials"
import { cn } from "@/lib/utils"
import Image from "next/image"

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-24 md:px-10 xl:px-24">
      {/* Background Vectors */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[860.63px] w-[1976.57px] bg-[url(/figmaAssets/vector-5.svg)] bg-position-[100%_100%]">
            {[
              "left-[6.07%]",
              "left-[28.67%]",
              "left-[33.05%]",
              "left-[70.44%]",
              "left-[72.27%]",
              "left-[92.63%]",
            ].map((leftClass, index) => (
              <Image
                key={`vector-line-${index}`}
                className={cn("absolute top-0", leftClass)}
                alt=""
                src="/figmaAssets/vector-2.svg"
                width={1}
                height={1000}
                style={{ height: '100%', width: 'auto' }}
              />
            ))}
          </div>
        </div>
        {/* Decorative Circles/Blobs */}
        <div className="absolute bottom-[162px] left-[34.47%] h-[45px] w-[45px] rounded-full bg-secondary" />
        <div className="absolute top-[297px] left-[63.19%] h-[45px] w-[45px] rounded-full border-12 border-solid border-secondary" />
        <div className="absolute right-0 bottom-[38px] h-[45px] w-[45px] rounded-full bg-secondary" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] flex flex-col items-center gap-[70px]">
        <SectionHeading
          label="Testimonial"
          title="Real Results From Real Students"
          align="center"
        />

        <div className="w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex w-full gap-[30px] overflow-x-auto pb-8 snap-x no-scrollbar md:grid md:grid-cols-3 md:overflow-visible"
          >
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-[320px] flex-1 snap-center">
                <TestimonialCard {...t} />
              </div>
            ))}
          </motion.div>
          
          {/* Pagination Dots (Mobile) */}
          <div className="flex w-full items-center justify-center gap-1.5 pt-5 md:hidden">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-3 w-3 rounded-full ${i === 0 ? "bg-primary" : "bg-primary/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
