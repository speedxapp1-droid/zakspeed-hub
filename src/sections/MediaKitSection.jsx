import { FileText } from 'lucide-react'
import { site } from '../data/site'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'

export default function MediaKitSection() {
  const href = site.media.href

  return (
    <section id="media" className="section-anchor pb-16 md:pb-24 lg:pb-28">
      <Container>
        <Reveal>
          <div className="card-surface mx-auto max-w-3xl rounded-[1.75rem] px-5 py-8 text-center sm:px-10 sm:py-12">
            <span className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-white/[0.05] text-ink">
              <FileText className="size-5" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-[1.75rem] font-semibold tracking-tight sm:text-3xl">
              {site.media.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              {site.media.text}
            </p>
            {href ? (
              <Button href={href} external className="mt-7">
                {site.media.cta}
              </Button>
            ) : (
              <p className="mt-7 text-sm text-subtle">
                The media kit is not available yet. For brand inquiries, use the
                business email above.
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
