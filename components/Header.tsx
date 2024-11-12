'use client'
import React, { useState } from 'react'
import AzureLogo from './assets/Azure-Logo'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center px-4 md:px-24 py-4'>
        <div>
          <AzureLogo width={246} />
          <div className='hidden md:block text-[#737373] text-sm -mt-1 w-full text-right'>Powered by ID8NXT</div>
        </div>
        <div className='hidden md:flex items-center gap-2'>
          <div className='text-sm text-[#737373]'>
            Sponsored by
          </div>
          <div>
            <Image src='/microsoft-logo.png' alt='Microsoft Logo' width={246} height={40} />
          </div>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden text-black'
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      <div className='h-[1px] bg-[#E2E2E2] w-full'></div>
      <div className='relative bg-white'>
        <div className={`
          flex flex-col md:flex-row justify-between font-bold items-start md:items-center 
          px-4 md:px-24 py-2 bg-white
          ${isMenuOpen ? 'block' : 'hidden md:flex'}
        `}>
          <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto'>
            <Link href='#' className={`text-black px-2 py-1 my-1 ${currentPath === '/' ? 'bg-[#BDE7FF]' : ''}`}>Home</Link>
            <Link href='#' className={`text-black px-2 py-1 my-1 ${currentPath === '/themes-terms' ? 'bg-[#BDE7FF]' : ''}`}>Themes & Terms</Link>
            <Link href='#' className={`text-black px-2 py-1 my-1 ${currentPath === '/plans' ? 'bg-[#BDE7FF]' : ''}`}>Plans</Link>
            <Link href='#' className={`text-black px-2 py-1 my-1 ${currentPath === '/winners' ? 'bg-[#BDE7FF]' : ''}`}>Winners</Link>
            <Link href='#' className={`text-black px-2 py-1 my-1 ${currentPath === '/timeline' ? 'bg-[#BDE7FF]' : ''}`}>Timeline</Link>
            <Link href='#' className={`text-black px-2 py-1 my-1 ${currentPath === '/forum' ? 'bg-[#BDE7FF]' : ''}`}>Forum</Link>
            <Link href='#' className={`text-black px-4 py-1 my-1 border border-black ${currentPath === '/bloggers-guide' ? 'bg-[#BDE7FF]' : ''}`}>Blogger's Guide</Link>
          </div>
          <div className='flex flex-col md:flex-row items-start md:items-center gap-2 w-full md:w-auto mt-4 md:mt-0'>
            <button className='bg-black text-white px-2 py-1 w-full md:w-auto'>REGISTER NOW</button>
            <button className='bg-black text-white px-2 py-1 w-full md:w-auto'>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
