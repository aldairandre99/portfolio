'use client'

import React from 'react'
import Link from 'next/link'
import { useMenu } from '@/app/contexts/NavBar'
import { categories,categorias } from './consts'
import { useLanguages } from '@/app/contexts/LanguageContext'

const MobileMenu = () => {

  const { isOn } = useMenu()
  const { language } = useLanguages()

  return (
    <>
      {isOn ?
        (
          <div className='flex flex-col items-center mt-4 px-[16px] absolute top-[56px] left-0 right-0 h-screen z-[1] bg-menu-color text-white'>
            <ul className='flex flex-col items-centertext-white w-full'>
              {

                language === 'en' ?
                (categories.map(([title, url], index) => (
                  <li key={index} className='flex justify-between py-[13px] border-b-[1px]'>
                    <Link href={url}>{title}</Link>
                  </li>
                ))) : 
                (categorias.map(([title, url], index) => (
                  <li key={index} className='flex justify-between py-[13px] border-b-[1px]'>
                    <Link href={url}>{title}</Link>
                  </li>
                )))

              }
            </ul>
          </div>
        ) : null
      }
    </>
  )
}

export default MobileMenu
