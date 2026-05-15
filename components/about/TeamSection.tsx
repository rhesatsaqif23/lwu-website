"use client"

import { motion, Variants } from "framer-motion"
import { Star } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"
import { team } from "@/data/team"

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
    <section className="section-padding bg-white">
      <div className="container-lg">
        <SectionHeading
          label="Team"
          title="Our Expert Team"
          align="center"
          className="mb-12"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-surface rounded-[12px] border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mb-4 shadow-md">
                <span className="text-white font-bold text-2xl">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="font-bold text-primary text-[11px] mb-0.5">{member.name}</h3>
              <p className="text-muted text-[11px] mb-3">{member.title}</p>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                <span className="text-xs font-semibold text-primary">{member.rating}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
