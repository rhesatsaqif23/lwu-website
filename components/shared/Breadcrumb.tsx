import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  light?: boolean
}

export default function Breadcrumb({ items, className, light = false }: BreadcrumbProps) {
  const textBase = light ? "text-blue-200" : "text-muted"
  const textActive = light ? "text-white" : "text-primary"

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-sm", className)}>
      <Link
        href="/"
        className={cn("flex items-center gap-1 hover:text-secondary transition-colors", textBase)}
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <ChevronRight className={cn("w-3.5 h-3.5", textBase)} />
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className={cn("hover:text-secondary transition-colors", textBase)}
            >
              {item.label}
            </Link>
          ) : (
            <span className={cn("font-semibold", textActive)}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
