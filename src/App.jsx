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

function App() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col gap-16'>
        <Hero />
        <InfoSection />
        <CallForSpeakers />
        {/* <Map /> */}
        <Sponsors />
        <AllyCommunity />
        <Team />
        <Faq />
        <ContactUs />
      </main>
      <Footrer />
    </>
  )
}

export default App