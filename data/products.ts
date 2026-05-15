import type { Product } from "@/types"

export const products: Product[] = [
  {
    id: "british-american-english",
    slug: "british-american-english",
    title: "British vs American English: 400 Words Explained",
    type: "Ebook",
    badge: "BEST SELLER",
    rating: 5.0,
    price: "IDR 49,900",
    image: "/figmaAssets/best-course-image.png",
    ctaLink: "https://learningwithus-lwu.com",
    buyIcon: "/figmaAssets/component-1-2.svg",
    meta: [
      {
        icon: "/figmaAssets/component-1-8.svg",
        text: "400 entries",
      },
      {
        icon: "/figmaAssets/component-1.svg",
        text: "Ebook",
      },
      {
        iconBg: "bg-[url(/figmaAssets/vector-9.svg)]",
        text: "5.0",
      },
    ],
  },
  {
    id: "grammar-comic-indonesian",
    slug: "grammar-comic-indonesian",
    title: "English Grammar Comic (with Indonesian Translation)",
    type: "Ebook",
    badge: "NEW",
    rating: 4.8,
    price: "IDR 99,900",
    image: "/figmaAssets/best-course-image-1.png",
    ctaLink: "https://learningwithus-lwu.com",
    buyIcon: "/figmaAssets/component-1-3.svg",
    meta: [
      {
        icon: "/figmaAssets/component-1-8.svg",
        text: "Comic + Translation",
      },
      {
        icon: "/figmaAssets/component-1.svg",
        text: "Ebook",
      },
      {
        iconBg: "bg-[url(/figmaAssets/vector-9.svg)]",
        text: "4.8",
      },
    ],
  },
  {
    id: "grammar-comic-english",
    slug: "grammar-comic-english",
    title: "English Grammar Comic (English Only)",
    type: "Ebook",
    badge: "POPULAR",
    rating: 4.7,
    price: "IDR 99,900",
    image: "/figmaAssets/best-course-image-2.png",
    ctaLink: "https://learningwithus-lwu.com",
    buyIcon: "/figmaAssets/component-1-2.svg",
    meta: [
      {
        icon: "/figmaAssets/component-1-8.svg",
        text: "English Only",
      },
      {
        icon: "/figmaAssets/component-1.svg",
        text: "Ebook",
      },
      {
        iconBg: "bg-[url(/figmaAssets/vector-9.svg)]",
        text: "4.7",
      },
    ],
  },
  {
    id: "scholarship-database",
    slug: "scholarship-database",
    title: "Scholarship Database Ebook",
    type: "Ebook",
    badge: "NEW",
    rating: 4.6,
    price: "IDR 99,000",
    image: "/figmaAssets/best-course-image.png",
    ctaLink: "https://learningwithus-lwu.com",
    buyIcon: "/figmaAssets/component-1-2.svg",
    meta: [
      {
        icon: "/figmaAssets/component-1-8.svg",
        text: "100+ scholarships",
      },
      {
        icon: "/figmaAssets/component-1.svg",
        text: "Ebook",
      },
      {
        iconBg: "bg-[url(/figmaAssets/vector-9.svg)]",
        text: "4.6",
      },
    ],
  },
];

export const featuredProducts = products;
