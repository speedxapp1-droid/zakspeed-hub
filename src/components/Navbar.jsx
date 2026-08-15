import { useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'
import { assets } from '../lib/assets'
import BrandImage from './BrandImage'
import { BrandMark } from './BrandMark'
import Button from './Button'
import Container from './Container'
import SocialLinks from './SocialLinks'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const firstLinkRef = useRef(null)
  const openButtonRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) firstLinkRef.current?.focus()

    const main = document.getElementById('main')
    const footer = document.querySelector('footer')
    if (open) {
      main?.setAttribute('inert', '')
      footer?.setAttribute('inert', '')
    } else {
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
    }

    return () => {
      document.body.style.overflow = ''
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        openButtonRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        scrolled || open
          ? 'border-line bg-bg/85 backdrop-blur-xl'
          : 'border-transparent bg-bg/40 backdrop-blur-md'
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-[4.25rem]">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 rounded-lg"
          onClick={close}
        >
          <BrandImage
            src={assets.logo}
            alt="ZakSpeed"
            width={36}
            height={36}
            lazy={false}
            className="size-9 shrink-0 rounded-lg object-contain object-center"
            fallback={<BrandMark className="size-9 shrink-0" />}
          />
          <span className="truncate font-display text-lg font-semibold tracking-tight">
            {site.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition duration-300 hover:bg-white/[0.05] hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#collaborate" className="px-4 py-2 text-[13px]">
            Work with me
          </Button>
        </div>

        <button
          ref={openButtonRef}
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-white/[0.04] lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <div
        id={menuId}
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg lg:hidden"
      >
        <Container className="flex min-h-full flex-col py-8">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {site.nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                onClick={close}
                className="rounded-2xl px-3 py-3.5 font-display text-2xl font-semibold tracking-tight text-ink transition duration-300 hover:bg-white/[0.04] hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-4">
            <Button href="#collaborate" onClick={close} className="w-full">
              Work with me
            </Button>
            <Button
              href={site.speedx.url}
              external
              variant="secondary"
              onClick={close}
              className="w-full"
            >
              Explore SpeedX
            </Button>
          </div>
          <div className="mt-auto border-t border-line pt-8">
            <p className="mb-4 text-sm text-muted">Follow the journey</p>
            <SocialLinks />
          </div>
        </Container>
      </div>
    </header>
  )
}
