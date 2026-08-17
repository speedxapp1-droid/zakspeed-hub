import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { youtubeEmbedSrc } from '../lib/youtube'

export default function MediaLightbox({ item, onClose }) {
  const titleId = useId()
  const closeRef = useRef(null)

  useEffect(() => {
    if (!item) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose])

  if (!item) return null

  const title =
    item.type === 'video' ? item.title : item.alt || 'ZakSpeed'

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full border border-line bg-white/[0.06] text-ink transition hover:bg-white/[0.12]"
        aria-label="Close"
      >
        <X className="size-5" aria-hidden="true" />
      </button>

      <div
        className="w-full max-w-4xl"
        onClick={(event) => event.stopPropagation()}
      >
        <p id={titleId} className="sr-only">
          {title}
        </p>
        {item.type === 'video' ? (
          <div className="card-surface overflow-hidden rounded-3xl">
            <div className="aspect-video w-full min-w-0">
              <iframe
                className="h-full w-full"
                src={youtubeEmbedSrc(item.id)}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        ) : (
          <figure className="overflow-hidden rounded-3xl">
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[85svh] w-full object-contain"
            />
          </figure>
        )}
      </div>
    </div>,
    document.body,
  )
}
