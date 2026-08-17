const THUMB_QUALITIES = [
  'maxresdefault',
  'sddefault',
  'hqdefault',
  'mqdefault',
]

export function youtubeThumb(id, quality = 'maxresdefault') {
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`
}

export function nextYoutubeThumbQuality(current) {
  const index = THUMB_QUALITIES.indexOf(current)
  if (index === -1 || index >= THUMB_QUALITIES.length - 1) return null
  return THUMB_QUALITIES[index + 1]
}

export function youtubeEmbedSrc(id) {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    autoplay: '1',
  })
  return `https://www.youtube.com/embed/${id}?${params.toString()}`
}
