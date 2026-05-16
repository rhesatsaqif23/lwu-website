import Link from "next/link";
import { ChevronRight, Home as HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  light?: boolean;
  centered?: boolean;
  separator?: React.ReactNode;
  uppercase?: boolean;
  hideHomeIcon?: boolean;
}

export default function Breadcrumb({
  items,
  className,
  light = false,
  centered = false,
  separator = <ChevronRight className="w-3.5 h-3.5" />,
  uppercase = false,
  hideHomeIcon = false,
}: BreadcrumbProps) {
  const textBase = light ? "text-blue-200" : "text-muted";
  const textActive = light ? "text-white" : "text-secondary";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center gap-2 text-sm tracking-wider",
        centered ? "justify-center" : "justify-start",
        uppercase && "uppercase",
        className,
      )}
    >
      <Link
        href="/"
        className={cn(
          "flex items-center gap-1.5 hover:text-secondary transition-colors font-medium",
          textBase,
        )}
      >
        {!hideHomeIcon && <HomeIcon className="w-3.5 h-3.5" />}
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <span className={cn("text-sm", textBase)}>{separator}</span>
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className={cn(
                "hover:text-secondary transition-colors font-medium",
                textBase,
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span className={cn("font-medium", textActive)}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
