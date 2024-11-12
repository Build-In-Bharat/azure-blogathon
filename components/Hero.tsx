import React from 'react'
import Image from 'next/image'

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
      <div>
      <div className=''>Power Up Discover the Future of Cloud with Azure</div>
      </div>
    </div>
  )
}

export default Hero
