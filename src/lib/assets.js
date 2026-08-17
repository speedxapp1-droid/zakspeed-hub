/**
 * Bundled brand images only. Creator media URLs live in src/data/site.js
 * and map to files in public/media (copied to dist/media by Vite).
 */
const modules = import.meta.glob(
  [
    '../assets/zakspeed-profile.png',
    '../assets/zakspeed-logo.png',
    '../assets/speedx-logo.png',
  ],
  {
    eager: true,
    import: 'default',
  },
)

function findAsset(filename) {
  const match = Object.entries(modules).find(([path]) =>
    path.replace(/\\/g, '/').endsWith(`/${filename}`),
  )
  return match ? match[1] : null
}

export const assets = {
  profile: findAsset('zakspeed-profile.png'),
  logo: findAsset('zakspeed-logo.png'),
  speedxLogo: findAsset('speedx-logo.png'),
}
