import React from 'react'
import Hero from '../components/Hero'
import Blogathon from '../components/Blogathon'
import WinsAndImpact from '../components/WinsAndImpact'
import PrizesAndRewards from '@/components/PrizesAndRewards'
import WhyParticipate from '@/components/WhyParticipate'
import Faq from '../components/Faq'
import TermsAndConditions from "@/components/Terms";
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className='--font-segoe-ui'>
      <Hero />
      <Blogathon/>
      <WinsAndImpact/>
      <PrizesAndRewards/>
      <WhyParticipate/>
      <Faq/>
      <TermsAndConditions/>
      <Footer/>
    </div>
  )

}

export default page
