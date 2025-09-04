// app/robots.ts

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://moderndev.vercel.app';

  return {
    rules: {
      userAgent: '*', // Apply these rules to all crawlers
      allow: '/', // Allow crawling of all pages
      disallow: '/admin/', // Example: Block crawlers from an admin section
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Point crawlers to your sitemap
  };
}