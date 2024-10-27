'use client'

import React from 'react'
import Link from 'next/link'
import { useMenu } from '@/components/contexts/NavBar'
import { categories, categorias } from './consts'
import { useLanguages } from '@/components/contexts/LanguageContext'
import Languageicon from './LanguageIcon'
import MenuIcon from './MenuIcon'
import ThemeIcon from './ThemeIcon'

const UlLinks = () => {

  const { isOn, changeMenu } = useMenu()
  const { language } = useLanguages()

  return (
    <div className='lg:w-full lg:flex lg:justify-center'>
      <ul className={`${isOn ? 'flex' : 'hidden'} bg-[#fff] px-4 lg:flex flex-col items-center text-white w-full justify-center absolute top-14 lg:max-w-4xl lg:justify-between lg:flex-row lg:p-0 dark:bg-gray-300`}>
        {language === 'en' ?
          (categories.map(([title, url], index) => (
            <li key={index} className='flex justify-between max-lg:w-full lg:w-auto lg:block py-[13px] border-b-[1px] lg:py-0 lg:border-b-0'
              onClick={() => changeMenu(isOn)}
            >
              <Link href={url}>{title}</Link>
            </li>
          ))) :
          (categorias.map(([title, url], index) => (
            <li key={index} className='flex justify-between py-[13px] border-b-[1px] lg:py-0 lg:border-b-0'
              onClick={() => changeMenu(isOn)}
            >
              <Link href={url}>{title}</Link>
            </li>
          )))}
        <div className='hidden lg:flex lg:items-center'>
          <MenuIcon />
          <Languageicon />
          <ThemeIcon />
        </div>
      </ul>
    </div>
  )
}

export default UlLinks
