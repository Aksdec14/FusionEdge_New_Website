// app/robots.ts
export const dynamic = 'force-static'; // <--- THIS IS THE KEY
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://www.fusionedge.io/sitemap.xml',
    }
}