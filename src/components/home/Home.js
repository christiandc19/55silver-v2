import React from 'react'
import ServicesSection from '../services/ServicesSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Gallery from '../gallery/Gallery';
import MissionHome from '../mission/MissionHome';




const home = () => {
  return (
    <>
    {/* <WhatWeDo /> */}
    <Whoweare />
    <Gallery />
    <ServicesSection />
    <MissionHome />
    <ContactForm />
    </>
  )
}

export default home
