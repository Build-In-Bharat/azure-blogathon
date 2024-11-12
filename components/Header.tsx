'use client'
import React from 'react'
import AzureLogo from './assets/Azure-Logo'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const currentPath = usePathname();

  return (
    <div>
      <div className='flex justify-between px-24 py-4'>
        <div>
          <AzureLogo width={246} />
          <div className='text-[#737373] text-sm -mt-1 w-full text-right'>Powered by ID8NXT</div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='text-sm text-[#737373] '>
            Sponsored by
          </div>
          <div>
            <Image src='/microsoft-logo.png' alt='Microsoft Logo' width={246} height={40} />
          </div>
        </div>
      </div>
      <div className='h-[1px] bg-[#E2E2E2] w-full'></div>
      <div className='flex justify-between font-bold items-center px-24 py-2 bg-white'>
        <div className='flex gap-4'>
          <Link href='#' className={` text-black px-2 py-1 my-1 ${currentPath === '/' ? 'bg-[#BDE7FF]' : ''}`}>Home</Link>
          <Link href='#' className={` text-black px-2 py-1 my-1 ${currentPath === '/themes-terms' ? 'bg-[#BDE7FF]' : ''}`}>Themes & Terms</Link>
          <Link href='#' className={` text-black px-2 py-1 my-1 ${currentPath === '/plans' ? 'bg-[#BDE7FF]' : ''}`}>Plans</Link>
          <Link href='#' className={` text-black px-2 py-1 my-1 ${currentPath === '/winners' ? 'bg-[#BDE7FF]' : ''}`}>Winners</Link>
          <Link href='#' className={` text-black px-2 py-1 my-1 ${currentPath === '/timeline' ? 'bg-[#BDE7FF]' : ''}`}>Timeline</Link>
          <Link href='#' className={` text-black px-2 py-1 my-1 ${currentPath === '/forum' ? 'bg-[#BDE7FF]' : ''}`}>Forum</Link>
          <Link href='#' className={` text-black px-4 py-1 my-1 border border-black ${currentPath === '/bloggers-guide' ? 'bg-[#BDE7FF]' : ''}`}>Blogger's Guide</Link>
        </div>
        <div className='flex items-center gap-2'>
          <button className='bg-black text-white px-2 py-1 '>REGISTER NOW</button>
          <button className='bg-black text-white px-2 py-1 '>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Header
