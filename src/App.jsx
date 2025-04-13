import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import CallForSpeakers from './components/CallForSpeakers'
import Map from './components/Map'
import Sponsors from './components/Sponsors'
import AllyCommunity from './components/AllyCommunity'
import Team from './components/Team'
import Faq from './components/Faq'
import ContactUs from './components/ContactUs'
import Footrer from './components/Footrer'
import Parralax from './components/Parralax'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Parralax>
        <InfoSection />
        <CallForSpeakers />
        {/* <Map /> */}
        <Sponsors />
        <AllyCommunity />
        <Team />
        <Faq />
        <ContactUs />
      </Parralax>
      <Footrer />
    </>
  )
}

export default App