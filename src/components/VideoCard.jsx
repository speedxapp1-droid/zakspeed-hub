import { useState } from 'react'
import { Play } from 'lucide-react'
import { nextYoutubeThumbQuality, youtubeThumb } from '../lib/youtube'

export default function VideoCard({ video, featured = false, onPlay }) {
  const [quality, setQuality] = useState('maxresdefault')
  const [thumbFailed, setThumbFailed] = useState(false)

  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      className="card-surface group w-full overflow-hidden rounded-3xl text-left transition duration-300 hover:-translate-y-1 hover:border-white/14"
      aria-label={`Watch ${video.title}`}
    >
      <span className="relative block aspect-video overflow-hidden bg-bg-raised">
        {thumbFailed ? null : (
          <img
            src={youtubeThumb(video.id, quality)}
            alt={video.title}
            className="h-full w-full object-cover"
            onError={() => {
              const next = nextYoutubeThumbQuality(quality)
              if (next) setQuality(next)
              else setThumbFailed(true)
            }}
          />
        )}
        <span
          className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/35"
          aria-hidden="true"
        >
          <span
            className={`inline-flex items-center justify-center rounded-full bg-accent text-white shadow-[var(--shadow-glow)] ${
              featured ? 'size-14' : 'size-12'
            }`}
          >
            <Play className="size-5 fill-current" />
          </span>
        </span>
      </span>
      <span className="block px-4 py-3 sm:px-5 sm:py-4">
        {featured ? (
          <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Introduction
          </span>
        ) : null}
        <span className="block font-display text-[15px] font-semibold tracking-tight sm:text-base">
          {video.title}
        </span>
        <span className="mt-1 block text-sm text-muted">Watch on YouTube</span>
      </span>
    </button>
  )
}
