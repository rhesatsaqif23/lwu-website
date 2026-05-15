"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ProductDetail } from "@/types"

interface ProductTabsProps {
  detail: ProductDetail
}

const tabs = ["Overview", "Details", "Reviews"] as const
type Tab = (typeof tabs)[number]

export default function ProductTabs({ detail }: ProductTabsProps) {
  const [active, setActive] = useState<Tab>("Overview")

  return (
    <section className="section-padding bg-white">
      <div className="container-lg">
        <div className="max-w-3xl">
          {/* Tab bar */}
          <div className="flex gap-1 border-b border-gray-200 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                id={`product-tab-${tab.toLowerCase()}`}
                onClick={() => setActive(tab)}
                className={cn(
                  "px-5 py-3 text-sm font-semibold border-b-2 -mb-px transition-colors duration-200",
                  active === tab
                    ? "border-secondary text-secondary"
                    : "border-transparent text-muted hover:text-primary"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {active === "Overview" && (
              <div className="flex flex-col gap-6">
                <p className="text-muted text-base leading-relaxed">{detail.intro}</p>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">What&apos;s Inside</h2>
                  <p className="text-muted text-base leading-relaxed">{detail.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-4">Key Benefits</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {detail.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2.5 text-sm text-muted">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {active === "Details" && (
              <div className="text-muted text-sm leading-relaxed">
                <p className="mb-4">{detail.description}</p>
                <p className="text-xs text-gray-400">More detailed specifications coming soon.</p>
              </div>
            )}

            {active === "Reviews" && (
              <div className="text-muted text-sm">
                <p>Student reviews will be displayed here.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
