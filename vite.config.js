import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { site } from './src/data/site.js'

function siteSeoPlugin() {
  const origin = String(site.siteUrl || '').replace(/\/$/, '')
  const ogPath = String(site.ogImage || '')
  const canonical = origin ? `${origin}/` : ''
  const ogImageUrl =
    origin && ogPath
      ? `${origin}${ogPath.startsWith('/') ? ogPath : `/${ogPath}`}`
      : ''

  return {
    name: 'site-seo',
    transformIndexHtml(html) {
      let out = html
        .replaceAll('__SITE_URL__', origin)
        .replaceAll('__OG_IMAGE_PATH__', ogPath)
        .replaceAll(
          '__TWITTER_CARD__',
          ogImageUrl ? 'summary_large_image' : 'summary',
        )

      if (canonical) {
        out = out.replace(
          'id="canonical-url" data-site-url="' + origin + '"',
          'id="canonical-url" data-site-url="' + origin + '" href="' + canonical + '"',
        )
        out = out.replace(
          'property="og:url" content="" data-site-url="' + origin + '"',
          'property="og:url" content="' + canonical + '" data-site-url="' + origin + '"',
        )
      }

      if (ogImageUrl) {
        out = out.replace(
          'property="og:image" content="" data-og-path="' + ogPath + '"',
          'property="og:image" content="' + ogImageUrl + '" data-og-path="' + ogPath + '"',
        )
        out = out.replace(
          'name="twitter:image" content="" data-og-path="' + ogPath + '"',
          'name="twitter:image" content="' + ogImageUrl + '" data-og-path="' + ogPath + '"',
        )
      } else {
        out = out.replace(
          /\s*<meta property="og:image" content="" data-og-path="[^"]*" \/>/,
          '',
        )
        out = out.replace(
          /\s*<meta property="og:image:alt" content="[^"]*" \/>/,
          '',
        )
        out = out.replace(
          /\s*<meta name="twitter:image" content="" data-og-path="[^"]*" \/>/,
          '',
        )
      }

      return out
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteSeoPlugin()],
})
