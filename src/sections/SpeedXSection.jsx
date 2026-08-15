import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import { assets } from '../lib/assets'
import BrandImage from '../components/BrandImage'
import { SpeedXMark } from '../components/BrandMark'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'

export default function SpeedXSection() {
  return (
    <section id="speedx" className="section-anchor pb-16 md:pb-24 lg:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-bg-raised px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
              <div>
                <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-subtle">
                  Startup
                </p>
                <h2 className="text-balance font-display text-[1.75rem] font-semibold tracking-tight sm:text-3xl md:text-[2rem] md:leading-tight">
                  SpeedX
                </h2>
                <p className="mt-2 text-sm font-medium text-ink/80">
                  Founded by ZakSpeed
                </p>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
                  {site.speedx.description}
                </p>
                <Button
                  href={site.speedx.url}
                  external
                  variant="secondary"
                  className="mt-7"
                >
                  {site.speedx.cta}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Button>
              </div>

              <div className="card-surface flex flex-col items-start gap-4 rounded-3xl p-6 sm:p-8">
                <BrandImage
                  src={assets.speedxLogo}
                  alt="SpeedX"
                  width={80}
                  height={80}
                  className="h-16 w-16 shrink-0 rounded-2xl object-contain object-center sm:h-[4.5rem] sm:w-[4.5rem]"
                  fallback={<SpeedXMark className="size-16 sm:size-[4.5rem]" />}
                />
                <div>
                  <p className="font-display text-xl font-semibold tracking-tight">
                    {site.speedx.name}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Challenge-based social platform.
                  </p>
                </div>
                <a
                  href={site.speedx.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink underline decoration-white/20 underline-offset-4 transition hover:text-accent hover:decoration-accent"
                >
                  speedxapp.io
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
