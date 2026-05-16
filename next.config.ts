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
    ],
  },
};

export default nextConfig;
