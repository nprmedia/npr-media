/**
 * next-sitemap.config.js — Enterprise-Grade SEO Sitemap Generator
 * Docs: https://github.com/iamvishnusankar/next-sitemap
 * Output: /public/sitemap.xml + robots.txt + server-sitemap.xml (optional)
 */

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://authorityplatform.com'

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapBaseFileName: 'sitemap',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: [
    '/dashboard/*',
    '/api/*',
    '/login',
    '/register',
    '/admin',
    '/auth',
    '/404',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/api', '/login', '/register', '/admin', '/auth'],
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/server-sitemap.xml`,
      `${SITE_URL}/custom-sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path.includes('/blog/') ? 0.9 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: SITE_URL,
          hreflang: 'en',
        },
      ],
    }
  },
}
