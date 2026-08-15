export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  titleAs: TitleTag = 'h2',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left'

  return (
    <div
      className={`flex max-w-2xl flex-col ${alignment} ${
        className || 'mb-8 md:mb-12'
      }`}
    >
      {eyebrow ? (
        <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="text-balance font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-3xl md:text-[2rem] md:leading-tight">
        {title}
      </TitleTag>
      {description ? (
        <p className="mt-3 text-[15px] leading-relaxed text-muted md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
