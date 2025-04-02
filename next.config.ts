import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  /* config options here */
 
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "47.245.126.170",
        pathname: "/**",
      },
 {
        protocol: "https",
        hostname: "47.245.126.170",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.kiwi.com",
        pathname: "/**",
      },
    ],
    // domains: ['47.245.126.170', 'images.kiwi.com'],
  },
};
 
export default nextConfig;
 
 
