import { site } from '../data/site'
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from './icons'

const socialIcons = {
  tiktok: TikTokIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  facebook: FacebookIcon,
}

const cardClass =
  'group card-surface relative flex min-w-0 w-full items-center gap-3 rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:border-white/16 sm:gap-4 sm:p-5'

const iconButtonClass =
  'inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-white/[0.04] text-ink transition duration-300 hover:border-accent/50 hover:bg-accent-soft hover:text-white'

const pillClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line-strong bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent-soft'

export default function SocialLinks({
  variant = 'icons',
  className = '',
  platforms = site.socials,
}) {
  if (variant === 'cards') {
    return (
      <ul className={`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
        {platforms.map((social) => {
          const Icon = socialIcons[social.id]
          return (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-ink sm:size-12">
                  {Icon ? <Icon className="size-5" /> : null}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[15px] font-semibold tracking-tight">
                    {social.name}
                  </span>
                  <span className="block truncate text-sm text-muted">
                    {social.handle}
                  </span>
                </span>
                <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-subtle transition group-hover:text-accent sm:text-xs sm:tracking-[0.16em]">
                  {social.action}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

  if (variant === 'buttons') {
    return (
      <ul className={`flex flex-wrap justify-center gap-3 ${className}`}>
        {platforms.map((social) => {
          const Icon = socialIcons[social.id]
          return (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={pillClass}
              >
                {Icon ? <Icon className="size-4" /> : null}
                {social.name}
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {platforms.map((social) => {
        const Icon = socialIcons[social.id]
        return (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={iconButtonClass}
              aria-label={`${social.action} ZakSpeed on ${social.name}`}
            >
              {Icon ? <Icon /> : social.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
