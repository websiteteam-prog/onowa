import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactSection from '../components/contact/ContactSection'
import MapSection from '../components/contact/MapSection'

const Contact = () => {
    return (
        <div className="bg-[#f0fdf4] text-[#064e3b]">
            <ContactHero
                lable={"Contact"}
                title={"CONTACT"}
            />
            <ContactSection />
            <MapSection />
        </div>
    )
}

export default Contact