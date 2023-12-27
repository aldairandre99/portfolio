'use client'

import React from 'react'
import Link from 'next/link'
import { useMenu } from '@/app/contexts/NavBar'
import { categories, categorias } from './consts'
import { useLanguages } from '@/app/contexts/LanguageContext'
import { usePathname } from 'next/navigation'

const MobileMenu = () => {

  const pathname = usePathname()

  const { isOn, changeMenu } = useMenu()
  const { language } = useLanguages()

  return (
    <>
      {isOn ?
        (
          <div className='flex flex-col items-center mt-4 px-[35px] bg-[#fff] absolute top-[56px] left-0 right-0 h-screen z-[1] dark:bg-[#222831] text-white'>
            <ul className='flex flex-col items-centertext-white w-full'>
              {

                language === 'en' ?
                  (categories.map(([title, url], index) => (
                    <li key={index} className='flex justify-between py-[13px] border-b-[1px]'
                      onClick={() => changeMenu(isOn)}
                    >
                      <Link href={url}>{title}</Link>
                    </li>
                  ))) :
                  (categorias.map(([title, url], index) => (
                    <li key={index} className='flex justify-between py-[13px] border-b-[1px]'
                    onClick={() => changeMenu(isOn)}
                    >
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
