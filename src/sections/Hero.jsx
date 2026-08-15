import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import { assets } from '../lib/assets'
import BrandImage from '../components/BrandImage'
import { ProfileFallback } from '../components/BrandMark'
import Button from '../components/Button'
import Container from '../components/Container'
import SocialLinks from '../components/SocialLinks'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-14 pt-8 sm:pb-16 sm:pt-12 lg:pb-24 lg:pt-16"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(255,78,18,0.1),transparent_55%)]"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center text-center">
        <div className="image-reveal relative mb-7">
          <div
            className="absolute inset-[-10%] rounded-full bg-accent/15 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative size-[8.5rem] rounded-full bg-gradient-to-b from-white/18 to-white/5 p-[2px] shadow-[var(--shadow-glow)] sm:size-40 md:size-[11rem]">
            <div className="h-full w-full overflow-hidden rounded-full bg-black ring-1 ring-white/10">
              <BrandImage
                src={assets.profile}
                alt="ZakSpeed athlete, creator and entrepreneur"
                width={176}
                height={176}
                lazy={false}
                className="h-full w-full object-contain object-center"
                fallback={
                  <>
                    <ProfileFallback />
                    <span className="sr-only">
                      ZakSpeed athlete, creator and entrepreneur
                    </span>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <p
          className="hero-animate mb-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent"
          style={{ animationDelay: '80ms' }}
        >
          {site.handle}
        </p>
        <h1
          className="hero-animate max-w-full font-display text-[clamp(2.15rem,8vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-ink"
          style={{ animationDelay: '140ms' }}
        >
          {site.brand}
        </h1>
        <p
          className="hero-animate mt-3 flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium text-ink/90 sm:text-[15px]"
          style={{ animationDelay: '200ms' }}
        >
          {site.identityParts.map((part, index) => (
            <span key={part} className="inline-flex items-center">
              {index > 0 ? (
                <span className="mr-2 text-accent" aria-hidden="true">
                  •
                </span>
              ) : null}
              {part}
            </span>
          ))}
        </p>
        <p
          className="hero-animate mt-2 text-sm text-muted"
          style={{ animationDelay: '240ms' }}
        >
          {site.founderLine}
        </p>
        <p
          className="hero-animate mt-4 max-w-lg text-[15px] leading-relaxed text-muted sm:text-base"
          style={{ animationDelay: '280ms' }}
        >
          {site.positioning}
        </p>

        <div
          className="hero-animate mt-7 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
          style={{ animationDelay: '340ms' }}
        >
          <Button href="#content" className="w-full sm:w-auto">
            Explore my work
          </Button>
          <Button href="#collaborate" variant="secondary" className="w-full sm:w-auto">
            Work with me
          </Button>
        </div>

        <div
          className="hero-animate mt-6 flex flex-col items-center gap-3"
          style={{ animationDelay: '400ms' }}
        >
          <a
            href={site.speedx.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-accent"
          >
            Explore SpeedX
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-subtle">
            Follow ZakSpeed
          </p>
          <SocialLinks />
        </div>
      </Container>
    </section>
  )
}
