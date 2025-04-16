import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Parralax from '../components/Parralax'
import InfoSection from '../components/InfoSection'
import CallForSpeakers from '../components/CallForSpeakers'
import Sponsors from '../components/Sponsors'
import AllyCommunity from '../components/AllyCommunity'
import Team from '../components/Team'
import Gallery from '../components/Gallery'
import Faq from '../components/Faq'
import ContactUs from '../components/ContactUs'
import Footrer from '../components/Footrer'

export default function Home() {
    return <>
        <Navbar />
        <Hero />
        <Parralax>
            <InfoSection />
            <CallForSpeakers />
            {/* <Map /> */}
            <Sponsors />
            <AllyCommunity />
            <Team />
        </Parralax>
        <Gallery />
        <Faq />
        <ContactUs />
        <Footrer />
    </>
}
