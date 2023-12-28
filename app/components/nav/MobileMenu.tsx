'use client'

import React from 'react'
import { useMenu } from '@/app/contexts/NavBar'
import UlLinks from './ul-links'

const MobileMenu = () => {

  const { isOn } = useMenu()

  return (
    <>
      {isOn ?
        (
          <div className='flex flex-col items-center mt-4 px-[35px] bg-[#fff] absolute top-[56px] left-0 right-0 h-screen z-[1] dark:bg-[#222831] text-white lg:hidden'>
            <UlLinks />
          </div>
        ) : null
      }
    </>
  )
}

export default MobileMenu
