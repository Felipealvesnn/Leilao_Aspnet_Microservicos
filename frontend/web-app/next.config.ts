import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

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

export default withFlowbiteReact(nextConfig);