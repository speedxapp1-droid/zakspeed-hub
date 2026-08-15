import { site } from '../data/site'
import { assets } from '../lib/assets'
import BrandImage from './BrandImage'
import { BrandMark } from './BrandMark'
import Container from './Container'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-bg-raised">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="inline-flex items-center gap-2.5 rounded-lg">
              <BrandImage
                src={assets.logo}
                alt="ZakSpeed"
                width={36}
                height={36}
                className="size-9 shrink-0 rounded-lg object-contain object-center"
                fallback={<BrandMark className="size-9 shrink-0" />}
              />
              <span className="font-display text-lg font-semibold tracking-tight">
                {site.brand}
              </span>
            </a>
            <p className="mt-4 text-sm text-muted">{site.identity}</p>
            <p className="mt-1 text-sm text-subtle">{site.founderLine}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-subtle">
              {site.positioning}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
              SpeedX
            </p>
            <a
              href={site.speedx.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-ink transition hover:text-accent"
            >
              {site.speedx.name}
            </a>
            <p className="mt-2 text-sm text-muted">speedxapp.io</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
              Business
            </p>
            <a
              href={site.mailto}
              className="mt-3 inline-block break-all text-sm text-ink transition hover:text-accent"
            >
              {site.email}
            </a>
            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.brand}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href="#privacy" className="transition hover:text-ink">
                Privacy
              </a>
            </li>
            <li>
              <a href="#terms" className="transition hover:text-ink">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
