import React from 'react'
import Hero from '../components/Hero'
import Faq from '../components/Faq'
import TermsAndConditions from "@/components/Terms";

const page = () => {
  return (
    <div className='--font-segoe-ui'>
      <Hero />
      <Faq/>
      <TermsAndConditions/>
    </div>
  )

}

export default page
