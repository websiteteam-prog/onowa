import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ServicesSection from '../components/ourService/ServicesSection'
import TestimonialsSection from '../components/testimonials/TestimonialsSection'

const OurService = () => {
  return (
    <div>
      <ContactHero
        lable={"Our Services"}
        title={"Our Services"}
      />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  )
}

export default OurService