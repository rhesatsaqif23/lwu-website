import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { products } from "@/data/products"
import { productDetails } from "@/data/productDetails"
import ProductDetailHero from "@/components/product-detail/ProductDetailHero"
import ProductTabs from "@/components/product-detail/ProductTabs"
import ProductPriceBlock from "@/components/product-detail/ProductPriceBlock"
import RelatedProducts from "@/components/product-detail/RelatedProducts"

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
    description: productDetails.find((d) => d.slug === slug)?.intro ?? product.title,
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  const detail = productDetails.find((d) => d.slug === slug)

  if (!product || !detail) notFound()

  return (
    <>
      <ProductDetailHero product={product} />

      {/* Main content + sticky sidebar */}
      <section className="bg-white">
        <div className="container-lg py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Tabs — 2/3 width */}
            <div className="lg:col-span-2">
              <ProductTabs detail={detail} />
            </div>
            {/* Price block — 1/3 width */}
            <div className="lg:col-span-1">
              <ProductPriceBlock product={product} />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts currentSlug={slug} />
    </>
  )
}
