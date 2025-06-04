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
        hostname: "cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.kiwi.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res-console.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wtp-assets.oldhat.xyz", // oleg madara cloudflare r2 object storage
        pathname: "/**",
      },
    ],
    // domains: ['47.245.126.170', 'images.kiwi.com'],
  },
};
 
export default nextConfig;
 
 
