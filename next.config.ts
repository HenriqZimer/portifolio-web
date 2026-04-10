import type { NextConfig } from "next";

const isStaticMode = process.env.CF_BUILD_MODE === "static";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "images.credly.com",
      },
    ],
  },
  ...(isStaticMode ? { output: "export" } : {}),
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
