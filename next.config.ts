import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — required for Plesk file-based hosting
  output: "export",

  images: {
    unoptimized: true, // next/image optimisation needs a Node server; disable for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // headers() is intentionally removed.
  // On a static Plesk/Apache host there is no Next.js server to
  // apply these rules — all cache headers are set in .htaccess instead.
};

export default nextConfig;