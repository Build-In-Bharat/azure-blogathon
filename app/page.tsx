import React from 'react'
import Hero from '../components/Hero'
import Faq from '../components/Faq'
import TermsAndConditions from "@/components/Terms";
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className='--font-segoe-ui'>
      <Hero />
      <Faq/>
      <TermsAndConditions/>
      <Footer/>
    </div>
  )

}

export default page
