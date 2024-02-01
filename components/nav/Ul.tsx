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

  return <ul className={`${isOn ? 'flex' : 'hidden'} px-4 first:li: lg:flex flex-col items-center text-white w-full lg:items-center  lg:space-x-20 lg:flex-row justify-center absolute top-14 z-10 dark:bg-gray-300 bg-purple-500 `}>
    {language === 'en' ?
      (categories.map(([title, url], index) => (
        <li key={index} className='flex justify-between max-lg:w-full py-[13px] border-b-[1px] lg:border-b-0'
          onClick={() => changeMenu(isOn)}
        >
          <Link href={url}>{title}</Link>
        </li>
      ))) :
      (categorias.map(([title, url], index) => (
        <li key={index} className='flex justify-between max-lg:w-full py-[13px] border-b-[1px] lg:border-b-0'
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
}

export default UlLinks
