"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-9xl font-bold text-primary opacity-5 select-none">404</h1>
          <div className="-mt-20 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Oops! Lost in Translation?</h2>
            <p className="text-slate-500 text-lg mb-8">
              The page you&apos;re looking for seems to have vanished into thin air. Let&apos;s get you back on track.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all w-full sm:w-auto justify-center shadow-lg hover:shadow-primary/20"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => typeof window !== "undefined" && window.history.back()}
            className="flex items-center gap-2 border-2 border-primary/20 text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>
      </div>
    </main>
  )
}
