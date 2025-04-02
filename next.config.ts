import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '47.245.126.170',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.kiwi.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
