import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SkipLink from './components/SkipLink'
import Hero from './sections/Hero'
import SocialHub from './sections/SocialHub'
import About from './sections/About'
import ContentAreas from './sections/ContentAreas'
import FeaturedVideo from './sections/FeaturedVideo'
import SpeedXSection from './sections/SpeedXSection'
import CollaborationSection from './sections/CollaborationSection'
import MediaKitSection from './sections/MediaKitSection'
import FinalCTA from './sections/FinalCTA'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function getView(hash) {
  const id = hash.replace(/^#/, '')
  if (id === 'privacy') return 'privacy'
  if (id === 'terms') return 'terms'
  return 'home'
}

export default function App() {
  const [view, setView] = useState(() => getView(window.location.hash))

  useEffect(() => {
    const onHash = () => setView(getView(window.location.hash))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (view !== 'home') {
      window.scrollTo(0, 0)
      return
    }

    const id = window.location.hash.replace(/^#/, '')
    if (id && id !== 'top') {
      document.getElementById(id)?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [view])

  return (
    <div id="top" className="min-h-svh min-w-0 overflow-x-clip bg-bg text-ink">
      <SkipLink />
      <Navbar />
      {view === 'privacy' ? (
        <Privacy />
      ) : view === 'terms' ? (
        <Terms />
      ) : (
        <main id="main">
          <Hero />
          <About />
          <ContentAreas />
          <SocialHub />
          <SpeedXSection />
          <CollaborationSection />
          <FeaturedVideo />
          <MediaKitSection />
          <FinalCTA />
        </main>
      )}
      <Footer />
    </div>
  )
}
