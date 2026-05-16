import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public-files.gumroad.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.lynkid.my.id",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.studies-overseas.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.iienstitu.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
