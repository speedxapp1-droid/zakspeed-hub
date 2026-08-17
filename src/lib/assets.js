/**
 * Brand images stay in src/assets and are bundled by Vite.
 * Creator media lives in public/media so production URLs stay stable.
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
  athletic: '/media/photos/athletic.png',
  backflip: '/media/photos/backflip.png',
  lifestyle: encodeURI('/media/photos/moddle lifestyle .png'),
  mediaKit: '/media/media-kit/ZakSpeed_Professional_Creator_Media_Kit.pdf',
}
