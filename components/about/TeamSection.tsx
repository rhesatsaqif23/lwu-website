"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import SectionHeading from "@/components/shared/SectionHeading"
import { team } from "@/data/team"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function TeamSection() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
        <SectionHeading
          label="Our Team"
          title="Our Expert Team"
          align="center"
          className="mb-10 md:mb-16"
          titleClassName="text-3xl md:text-4xl lg:text-[42px] leading-tight"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {team.map((member) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              className="flex h-full flex-col items-center group"
            >
              {/* Image Container */}
              <Card className="w-full overflow-hidden rounded-[10px] border-0 bg-transparent p-0 shadow-none mb-8">
                <CardContent className="p-0">
                  <div className="relative aspect-323/408 w-full overflow-hidden rounded-[10px] bg-slate-100">
                    <Image
                      src={member.image || "/figmaAssets/instructor-collection-image.png"}
                      alt={member.name}
                      fill
                      priority={team.indexOf(member) === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Info Container */}
              <div className="flex flex-col items-center text-center">
                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-sm font-semibold text-primary">
                    {member.rating}
                  </span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-semibold text-primary">
                    (Rating)
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 leading-tight">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm md:text-base italic font-medium text-primary/80">
                  {member.title}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
