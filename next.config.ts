/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {}, // ✅ empty object if unused
    appDir: true,
  },
  // ❌ remove `swcMinify`, it's deprecated in Next 14+
  reactStrictMode: true,
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

};

export default nextConfig;
