/**
 * Optional brand assets. Drop files into src/assets/ with these exact names:
 *   - zakspeed-profile.png
 *   - zakspeed-logo.png
 *   - speedx-logo.png
 *
 * Missing files resolve to null and the UI shows a professional placeholder.
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
