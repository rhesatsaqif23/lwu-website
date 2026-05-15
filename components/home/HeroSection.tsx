"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
}

const floatCards = [
  { label: "1,000+ Students", sub: "Across Indonesia & beyond", top: "top-8", right: "right-4 md:right-8" },
  { label: "4.9★ Rating", sub: "Average instructor rating", top: "top-1/2", right: "-right-2 md:right-0" },
  { label: "7+ Years", sub: "Serving English learners", bottom: "bottom-8", left: "left-0 md:-left-6" },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 md:py-28 lg:py-36">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
            >
              The best online
              <span className="text-gradient block">learning platform.</span>
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-xl font-semibold text-blue-200"
            >
              Raise the Bar on Your e-Learning Experience.
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-blue-200/80 text-base md:text-lg leading-relaxed max-w-lg"
            >
              e-learning particularly beneficial for adult learners who may have other
              commitments such as work or family responsibilities.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-7 py-3.5 rounded-lg hover:bg-secondary-dark transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] text-sm md:text-base"
              >
                GET STARTED
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 text-white font-semibold px-5 py-3.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-sm md:text-base">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Right: Hero illustration placeholder + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main illustration box */}
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-2xl bg-secondary/20 border border-secondary/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-secondary text-4xl font-black">L</span>
                  </div>
                  <p className="text-white/60 text-sm">Hero Image Placeholder</p>
                  <p className="text-white/40 text-xs mt-1">Replace with LWU hero visual</p>
                </div>
              </div>

              {/* Floating cards */}
              {floatCards.map((card, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
                  className={`absolute ${card.top ?? ""} ${card.bottom ?? ""} ${card.right ?? ""} ${card.left ?? ""} bg-white rounded-xl shadow-xl p-3 min-w-[140px] z-10`}
                >
                  <p className="font-bold text-primary text-sm">{card.label}</p>
                  <p className="text-muted text-xs">{card.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
