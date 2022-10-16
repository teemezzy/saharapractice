import { AboutUs, ContactUs, Footer, HeroSection, Navbar, OurServices, SectorsWeFocusOn, WhatWeDo } from "../components"

const Sahara = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs/>
       <WhatWeDo/>
      <SectorsWeFocusOn/>
      <OurServices/>
      <ContactUs/>
      <Footer/> 
    </div>
  )
}

export default Sahara