import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  /* config options here */
 
  images: {
    formats: ["image/avif", "image/webp", ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '47.245.126.170',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['47.245.126.170', 'images.kiwi.com'],
  },
};
 
export default nextConfig;
 
 
