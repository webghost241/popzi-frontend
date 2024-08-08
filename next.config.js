/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    // NEXT_PUBLIC_API_URL: "/api",
    NEXT_PUBLIC_API_URL: "http://localhost:8000/api",
  },
};
module.exports = nextConfig;
