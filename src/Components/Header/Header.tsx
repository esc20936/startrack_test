import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo/logo.svg'

export default function Header() {
  return (
    <header id='header' className='flex flex-col items-center w-full mt-[57px]' >
        <Image src={Logo} alt="logo" />
    </header>
  )
}
