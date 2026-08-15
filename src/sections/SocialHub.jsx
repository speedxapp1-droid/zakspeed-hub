import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'

export default function SocialHub() {
  return (
    <section id="social" className="section-anchor pb-16 md:pb-24 lg:pb-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Creator hub"
            title="Follow ZakSpeed"
            description="The same journey across platforms — training, lifestyle, entertainment, and the build."
          />
          <SocialLinks variant="cards" />
        </Reveal>
      </Container>
    </section>
  )
}
