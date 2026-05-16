import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { products } from "@/data/products"
import ProductHeader from "@/components/product-detail/ProductHeader"
import ProductOverview from "@/components/product-detail/ProductOverview"
import ProductPriceBlock from "@/components/product-detail/ProductPriceBlock"
import RelatedProducts from "@/components/product-detail/RelatedProducts"
import Breadcrumb from "@/components/shared/Breadcrumb"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: "Product Not Found | Learning With Us" }
  return {
    title: `${product.title} | Learning With Us`,
    description: product.intro,
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) notFound()

  return (
    <main className="bg-[#fdfdfd] min-h-screen">
      <section className="bg-[#F5F9FF] py-8 mb-12">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24">
          <Breadcrumb
            items={[
              { label: "Products & Services", href: "/products" },
              { label: "Product Details" },
            ]}
            centered
            separator="//"
            uppercase
            hideHomeIcon
          />
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 pb-8 md:pb-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Main Content — 2/3 width */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <ProductHeader product={product} />
            <ProductOverview product={product} />
          </div>

          {/* Sidebar — 1/3 width */}
          <div className="lg:col-span-1 sticky top-24">
            <ProductPriceBlock product={product} />
          </div>
        </div>
      </div>

      <RelatedProducts currentSlug={slug} />
    </main>
  )
}
