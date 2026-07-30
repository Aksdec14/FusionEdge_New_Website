import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Static export — required for Plesk file-based hosting
    output: "export",
    trailingSlash: true, // generates /about/index.html instead of /about.html

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

export default nextConfig;