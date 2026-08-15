import { useEffect, useState } from 'react'

export default function BrandImage({
  src,
  alt,
  className = '',
  width,
  height,
  lazy = true,
  fallback = null,
}) {
  const [failed, setFailed] = useState(!src)

  useEffect(() => {
    setFailed(!src)
  }, [src])

  if (!src || failed) return fallback

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
