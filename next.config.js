/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig
