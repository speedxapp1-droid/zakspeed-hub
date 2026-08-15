import { site } from '../data/site'
import LegalPage from './LegalPage'

export default function Terms() {
  return (
    <LegalPage title="Terms">
      <p>
        This terms page is a placeholder. Formal terms of use will be published
        here as the site and related services grow.
      </p>
      <p>
        Content on this website is for general information about {site.brand},
        including links to public social platforms and {site.speedx.name}.
      </p>
      <p>
        External links (including social profiles and speedxapp.io) are governed
        by their own terms and policies.
      </p>
    </LegalPage>
  )
}
