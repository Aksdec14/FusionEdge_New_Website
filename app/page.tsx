import React from 'react'
import Hero from './components/Hero'
import WhoWeAre from './components/Whoweare'
import WorkflowMotionSection from './components/WorkflowMotionSection'
import CoreTechnology from './components/CoreTechnology'
import Testimonialssection from './components/Testimonialssection'
import WhoWeServeSection from './components/Whoweservesection'
import ContactForm from './components/ContactForm'


const page = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <WorkflowMotionSection />
      <CoreTechnology />

      <Testimonialssection />
      <WhoWeServeSection />
      <ContactForm />
    </div>
  )
}

export default page