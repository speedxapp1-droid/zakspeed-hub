import { FileText } from 'lucide-react'
import { site } from '../data/site'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'

export default function MediaKitSection() {
  return (
    <section id="media" className="section-anchor pb-16 md:pb-24 lg:pb-28">
      <Container>
        <Reveal>
          <div className="card-surface mx-auto max-w-3xl rounded-[1.75rem] px-5 py-8 text-center sm:px-10 sm:py-12">
            <span className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-white/[0.05] text-ink">
              <FileText className="size-5" aria-hidden="true" />
            </span>
            <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-subtle">
              Coming soon
            </p>
            <h2 className="mt-2 font-display text-[1.75rem] font-semibold tracking-tight sm:text-3xl">
              {site.media.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              {site.media.text}
            </p>
            <Button href={site.mailto} variant="secondary" className="mt-7">
              Business inquiries
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
