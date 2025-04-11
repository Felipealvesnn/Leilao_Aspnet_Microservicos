import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches:{
      fullUrl: true,
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "example.org",
        port: "",
        pathname: "/**",
      },
    ]

  }
  /* config options here */
};

export default nextConfig;
