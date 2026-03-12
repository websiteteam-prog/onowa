import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import AboutCompany from '../components/about/AboutCompany'
import Features from '../components/about/Features'
import VisionMission from '../components/about/VisionMission'
import Directors from '../components/about/Directors'

const AboutUs = () => {
  return (
    <div>
      <ContactHero
        lable={"Our About"}
        title={"Our About"}
      />
      
      <AboutCompany />

      <Features />

      <VisionMission />

      <Directors />
    </div>
  )
}

export default AboutUs
