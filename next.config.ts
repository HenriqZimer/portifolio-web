import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://static.cloudflareinsights.com;
    style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://github.com https://images.credly.com https://henriqzimer.s3.sa-east-1.amazonaws.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  // 1. Otimização de Imagens
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "images.credly.com" },
      { protocol: "https", hostname: "henriqzimer.s3.sa-east-1.amazonaws.com" },
    ],
  },

  // 2. NOVIDADE NEXT 16: serverExternalPackages agora é top-level (saiu de experimental)
  serverExternalPackages: ["@cloudflare/workers-types"],

  // 3. Headers de Segurança
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\s{2,}/g, " ").trim(),
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Mantemos o experimental apenas se houver algo novo lá, por enquanto está limpo
  experimental: {},
};

export default nextConfig;
