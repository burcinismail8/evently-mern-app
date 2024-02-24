/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    domains: ["utfs.io"],
    remotePatterns: [{ protocol: "https", hostname: "utfs.io" }],
  },
};

module.exports = nextConfig;
