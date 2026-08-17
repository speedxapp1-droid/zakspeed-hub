import { useCallback, useState } from 'react'
import { site } from '../data/site'
import BrandImage from '../components/BrandImage'
import Container from '../components/Container'
import MediaLightbox from '../components/MediaLightbox'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import VideoCard from '../components/VideoCard'

const photos = site.photos ?? []

export default function FeaturedVideo() {
  const [item, setItem] = useState(null)
  const close = useCallback(() => setItem(null), [])
  const featured = site.videos.featured
  const supporting = site.videos.supporting ?? []

  return (
    <section id="watch" className="section-anchor pb-16 md:pb-24 lg:pb-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Watch"
            title="Introduction"
            description={featured?.title}
          />
          {featured ? (
            <VideoCard
              video={featured}
              featured
              onPlay={(video) => setItem({ type: 'video', ...video })}
            />
          ) : null}

          {supporting.length ? (
            <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-4 md:gap-4">
              {supporting.map((video) => (
                <li key={video.id}>
                  <VideoCard
                    video={video}
                    onPlay={(next) => setItem({ type: 'video', ...next })}
                  />
                </li>
              ))}
            </ul>
          ) : null}

          {photos.length ? (
            <ul className="mt-3 grid grid-cols-1 gap-3 md:mt-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
              {photos.map((photo) => (
                <li key={photo.id}>
                  <button
                    type="button"
                    onClick={() => setItem({ type: 'image', ...photo })}
                    className="card-surface group w-full overflow-hidden rounded-3xl text-left transition duration-300 hover:-translate-y-1 hover:border-white/14"
                    aria-label={`View ${photo.title} image`}
                  >
                    <BrandImage
                      src={photo.src}
                      alt={photo.alt}
                      className="aspect-[3/4] h-full w-full object-cover object-center"
                    />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </Container>
      <MediaLightbox item={item} onClose={close} />
    </section>
  )
}
