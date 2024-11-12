import React from 'react'
import Image from 'next/image'
import Hero1 from './assets/Hero1'
import Hero2 from './assets/Hero2'

const Hero = () => {
  return (
    <div className="relative w-full h-[600px]">
      <Image 
        src="/hero.png"
        alt="Hero background"
        fill
        className="object-cover"
      />
      <Image
        src="/hero-layer.png" 
        alt="Hero overlay"
        fill
        className="absolute top-0 left-0 object-cover"
      />
      <div className='absolute top-[15%] right-1 w-[40vw]'>
        <div className='text-[40px] font-bold text-white leading-[1.2]'><div>Power Up</div> <div>Discover the Future of</div> <div>Cloud with Azure</div></div>
        <div className='text-white my-5 text-xl font-semibold'>#PowerUpWithAzure #AzureBlogathon</div>
        <div className='flex items-center gap-2'>
          <Hero1/>
          <Hero2/>
        </div>
        <button className='text-white font-bold bg-black px-4 py-2 mt-8'>REGISTER NOW</button>
      </div>
    </div>
  )
}

export default Hero
