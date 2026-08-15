import { site } from '../data/site'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'

export default function FinalCTA() {
  return (
    <section id="follow" className="section-anchor pb-16 md:pb-24 lg:pb-28">
      <Container className="text-center">
        <Reveal>
          <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Stay close
          </p>
          <h2 className="text-balance font-display text-[1.75rem] font-semibold tracking-tight sm:text-3xl md:text-[2rem]">
            {site.finalCta.headline}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-muted">
            Training, lifestyle, and build updates land first on these platforms.
          </p>
          <SocialLinks variant="buttons" className="mt-7" />
        </Reveal>
      </Container>
    </section>
  )
}
