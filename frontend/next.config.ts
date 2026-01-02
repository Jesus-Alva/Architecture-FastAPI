import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Forzar webpack
  webpack: (config, { isServer }) => {
    // Tu configuración webpack si la tienes
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;