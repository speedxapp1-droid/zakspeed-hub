export default function LegalPage({ title, children }) {
  return (
    <main id="main" className="min-h-[70svh] px-5 py-16 sm:px-6">
      <article className="mx-auto max-w-2xl">
        <a
          href="#top"
          className="text-sm font-medium text-muted transition hover:text-ink"
        >
          ← Back to ZakSpeed
        </a>
        <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight">
          {title}
        </h1>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
          {children}
        </div>
      </article>
    </main>
  )
}
