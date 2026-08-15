const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5',
  secondary:
    'border border-line-strong bg-white/[0.03] text-ink hover:border-white/25 hover:bg-white/[0.07] hover:-translate-y-0.5',
  ghost:
    'text-muted hover:text-ink hover:bg-white/[0.05]',
}

export default function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
  ...props
}) {
  const classes = [
    'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition duration-300',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    'active:translate-y-0',
    variants[variant],
    className,
  ].join(' ')

  if (href) {
    const isExternal = external || /^https?:\/\//i.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
