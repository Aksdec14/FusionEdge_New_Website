// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // Add any admin or private paths you don't want indexed here
        },
        sitemap: 'https://www.fusionedge.io/sitemap.xml',
    }
}