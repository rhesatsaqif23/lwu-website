"use client"

import { useState, useMemo, useTransition } from "react"
import { motion } from "framer-motion"
import Breadcrumb from "@/components/shared/Breadcrumb"
import SectionHeading from "@/components/shared/SectionHeading"
import ProductFilter from "./ProductFilter"
import ProductListing from "./ProductListing"
import { products as allProducts } from "@/data/products"

export default function ProductsPageContent() {
  const [activeLang, setActiveLang] = useState("all")
  const [activeBadge, setActiveBadge] = useState("all")
  const [activeCurrency, setActiveCurrency] = useState("all")

  const [isPending, startTransition] = useTransition()

  // Extract unique badges dynamically and format them (no uppercase)
  const uniqueBadges = useMemo(() => {
    const badges = allProducts.map(p => p.badge.toLowerCase().replace(/\s+/g, ""))
    return ["all", ...Array.from(new Set(badges))]
  }, [])

  const handleFilterChange = (setter: (val: string) => void, val: string) => {
    startTransition(() => {
      setter(val)
    })
  }

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Language filter (from stats) - Support multiple languages (e.g., "English, Indonesian")
      const productLangValue = product.stats.find(s => s.label === "Language")?.value.toLowerCase() || ""
      const productLangs = productLangValue.split(",").map(l => l.trim())
      const matchLang = activeLang === "all" || productLangs.includes(activeLang)
      
      // Badge filter
      const productBadge = product.badge.toLowerCase().replace(/\s+/g, "")
      const matchBadge = activeBadge === "all" || productBadge === activeBadge
      
      // Price/Currency filter
      const isIDR = product.price.includes("IDR")
      const isUSD = product.price.includes("$")
      const matchCurrency = activeCurrency === "all" || 
                           (activeCurrency === "idr" && isIDR) || 
                           (activeCurrency === "usd" && isUSD)
      
      return matchLang && matchBadge && matchCurrency
    })
  }, [activeLang, activeBadge, activeCurrency])

  const clearFilters = () => {
    startTransition(() => {
      setActiveLang("all")
      setActiveBadge("all")
      setActiveCurrency("all")
    })
  }

  const isFiltered = activeLang !== "all" || activeBadge !== "all" || activeCurrency !== "all"

  return (
    <>
      {/* Breadcrumb Section */}
      <motion.section 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#F5F9FF] py-8"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
          <Breadcrumb
            items={[{ label: "Products" }]}
            centered
            separator="//"
            uppercase
            hideHomeIcon
          />
        </div>
      </motion.section>

      {/* Main Listing Section */}
      <section className="py-8 md:py-12 bg-white min-h-[700px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
          
          {/* Header */}
          <SectionHeading
            label="Our Products"
            title="All Products"
            align="center"
            className="mb-8 md:mb-12"
            titleClassName="text-3xl md:text-4xl"
          />

          <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
            {/* Sidebar Filter */}
            <aside className="w-full lg:w-[240px] lg:shrink-0 lg:sticky lg:top-24">
              <ProductFilter 
                activeLang={activeLang}
                setActiveLang={(val) => handleFilterChange(setActiveLang, val)}
                activeBadge={activeBadge}
                setActiveBadge={(val) => handleFilterChange(setActiveBadge, val)}
                activeCurrency={activeCurrency}
                setActiveCurrency={(val) => handleFilterChange(setActiveCurrency, val)}
                uniqueBadges={uniqueBadges}
                clearFilters={clearFilters}
                isFiltered={isFiltered}
                totalResults={filteredProducts.length}
              />
            </aside>

            {/* Product Grid */}
            <main className="flex-1">
              <ProductListing 
                products={filteredProducts}
                clearFilters={clearFilters}
                isLoading={isPending}
              />
            </main>
          </div>
        </div>
      </section>
    </>
  )
}
