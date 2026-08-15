import { site } from '../data/site'
import LegalPage from './LegalPage'

export default function Privacy() {
  return (
    <LegalPage title="Privacy">
      <p>
        This privacy page is a placeholder. A full privacy policy will be
        published here before personal data is collected through this website.
      </p>
      <p>
        This site currently does not include analytics, accounts, or contact
        forms. Business inquiries are handled by email at {site.email}.
      </p>
      <p>
        If you reach out by email, the information you send is used only to
        respond to your inquiry.
      </p>
    </LegalPage>
  )
}
