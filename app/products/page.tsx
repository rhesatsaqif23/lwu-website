import type { Metadata } from "next"
import ProductsPageContent from "@/components/products/ProductsPageContent"

export const metadata: Metadata = {
  title: "Products & Services | Learning With Us",
  description:
    "Explore LWU's range of ebooks, IELTS programs, Business English courses, and self-development resources.",
}

export default function ProductsPage() {
  return <ProductsPageContent />
}
