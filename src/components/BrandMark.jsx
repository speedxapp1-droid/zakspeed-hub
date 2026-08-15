export function BrandMark({ className = 'size-9' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="40" height="40" rx="10" fill="#FF4E12" />
      <path
        d="M11.5 12.5h17.2L14.2 27.5h17.3"
        fill="none"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SpeedXMark({ className = 'size-10' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="40" height="40" rx="10" fill="#1a1a1a" stroke="rgba(255,255,255,0.12)" />
      <path
        d="M13 13 L27 27 M27 13 L13 27"
        fill="none"
        stroke="#FF4E12"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ProfileFallback({ className = '' }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-b from-[#2a150e] to-[#141414] ${className}`}
      aria-hidden="true"
    >
      <span className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
        ZS
      </span>
    </div>
  )
}
