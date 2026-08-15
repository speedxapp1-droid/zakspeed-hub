import { Clapperboard, Compass, PersonStanding, Rocket } from 'lucide-react'
import { site } from '../data/site'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const icons = {
  athletic: PersonStanding,
  lifestyle: Compass,
  entrepreneurship: Rocket,
  entertainment: Clapperboard,
}

export default function ContentAreas() {
  return (
    <section id="content" className="section-anchor pb-16 md:pb-24 lg:pb-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Work"
            title="What I create"
            description="Athletic work, lifestyle documentation, entrepreneurship, and entertainment — one body of work, shown as it unfolds."
          />
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            {site.contentAreas.map((area, index) => {
              const Icon = icons[area.id] ?? PersonStanding
              return (
                <li
                  key={area.id}
                  className="card-surface group rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-white/14 sm:p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white/[0.05] text-ink">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-xs font-medium text-subtle">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {area.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
