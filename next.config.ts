import type { NextConfig } from "next";

const isWorkerBuild = process.env.CF_BUILD_MODE === "worker";

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
  ...(isWorkerBuild ? {} : { output: "export" }),
};

export default nextConfig;
