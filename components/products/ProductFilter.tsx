"use client"

import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

interface ProductFilterProps {
  activeLang: string
  setActiveLang: (val: string) => void
  activeBadge: string
  setActiveBadge: (val: string) => void
  activeCurrency: string
  setActiveCurrency: (val: string) => void
  uniqueBadges: string[]
  clearFilters: () => void
  isFiltered: boolean
  totalResults: number
}

export default function ProductFilter({
  activeLang,
  setActiveLang,
  activeBadge,
  setActiveBadge,
  activeCurrency,
  setActiveCurrency,
  uniqueBadges,
  clearFilters,
  isFiltered,
  totalResults,
}: ProductFilterProps) {
  return (
    <motion.div 
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-12 bg-white p-6 rounded-[10px] shadow-[0px_4px_15px_#0000001a] flex flex-col gap-8"
    >
      <div className="flex flex-col gap-8 w-full">
        {/* Language */}
        <FilterSelect 
          label="Language" 
          options={["all", "english", "indonesian"]} 
          active={activeLang} 
          onChange={setActiveLang} 
        />

        {/* Badge */}
        <FilterSelect 
          label="Badge" 
          options={uniqueBadges} 
          active={activeBadge} 
          onChange={setActiveBadge} 
        />

        {/* Currency */}
        <FilterSelect 
          label="Price" 
          options={["all", "idr", "usd"]} 
          active={activeCurrency} 
          onChange={setActiveCurrency} 
          displayOptions={{ idr: "Rupiah", usd: "Dollar" }}
        />
      </div>

      {/* Footer Info & Reset */}
      <div className="flex flex-col gap-4">
        <p className="text-slate-600 text-[13px] font-medium px-1">
          Showing <span className="font-bold text-primary">{totalResults}</span> products
        </p>

        {isFiltered && (
          <button 
            onClick={clearFilters}
            className="text-[13px] font-bold text-primary hover:text-secondary transition-colors text-left px-1 w-fit"
          >
            Reset Filters
          </button>
        )}
      </div>
    </motion.div>
  )
}

interface FilterSelectProps {
  label: string
  options: string[]
  active: string
  onChange: (val: string) => void
  displayOptions?: Record<string, string>
  className?: string
}

function FilterSelect({ label, options, active, onChange, displayOptions, className }: FilterSelectProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h3 className="text-sm font-bold text-slate-700 px-1">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((opt: string) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "px-3 py-1 rounded-sm text-[12px] font-semibold transition-all border",
              active === opt 
                ? "bg-primary text-white border-primary" 
                : "bg-white text-slate-600 border-slate-200 hover:border-primary/30"
            )}
          >
            {displayOptions?.[opt] || opt.charAt(0).toUpperCase() + opt.slice(1).toLowerCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
