/** @type {import('next').NextConfig} */

const nextConfig = {
  // ─── Output Settings ─────────────────────────────────────────────
  reactStrictMode: true,
  swcMinify: true,

  // ─── Image Optimization ──────────────────────────────────────────
  images: {
    domains: ['images.unsplash.com', 'cdn.nprmedia.com'],
    formats: ['image/avif', 'image/webp'],
  },

  // ─── Internationalization (optional) ─────────────────────────────
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  // ─── Environment Exposure ────────────────────────────────────────
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },

  // ─── Future Features (can be toggled safely) ─────────────────────
  experimental: {
    serverActions: false, // Enable when needed
  },

  // ─── Headers & Redirects Hooks (advanced control) ────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
