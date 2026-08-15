import { Mail } from 'lucide-react'
import { site } from '../data/site'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'

export default function CollaborationSection() {
  return (
    <section id="collaborate" className="section-anchor pb-16 md:pb-24 lg:pb-28">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-bg-raised p-5 sm:p-8 md:p-12">
            <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
              {site.collaborate.status}
            </p>
            <h2 className="max-w-2xl text-balance font-display text-[1.75rem] font-semibold tracking-tight sm:text-3xl md:text-[2.15rem] md:leading-tight">
              {site.collaborate.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted md:text-base">
              {site.collaborate.text}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {site.collaborate.categories.map((category) => (
                <li
                  key={category}
                  className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {category}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href={site.mailto}>{site.collaborate.cta}</Button>
              <a
                id="contact"
                href={site.mailto}
                className="section-anchor inline-flex max-w-full items-center gap-2 break-all text-sm font-medium text-ink/90 transition hover:text-accent"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-subtle">
              {site.collaborate.previousNote}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
