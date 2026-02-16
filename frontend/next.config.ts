import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración de Turbopack (por defecto en Next.js 16)
  turbopack: {},
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;