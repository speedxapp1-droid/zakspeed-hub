import { site } from '../data/site'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="section-anchor pb-16 md:pb-24 lg:pb-28">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
            <SectionHeading
              eyebrow="About"
              title="One journey. Several crafts."
              className="mb-0"
            />
            <div>
              <div className="card-surface rounded-3xl p-6 sm:p-8">
                <p className="text-[15px] leading-relaxed text-ink/90 md:text-base md:leading-relaxed">
                  {site.about}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {site.aboutStory}
                </p>
                <p className="mt-6 text-sm text-subtle">
                  {site.legalName}
                </p>
                <p className="mt-2 text-sm text-subtle">
                  {site.identity}
                  <span className="mx-2 text-accent" aria-hidden="true">
                    •
                  </span>
                  {site.founderLine}
                </p>
                <p className="mt-2 text-sm text-subtle">
                  {site.role}. {site.education}.
                </p>
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {site.pillars.map((pillar) => (
                  <li key={pillar.title} className="card-surface rounded-2xl p-4 sm:p-5">
                    <h3 className="font-display text-[15px] font-semibold tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {pillar.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
