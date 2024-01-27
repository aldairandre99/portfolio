'use client'

import React from 'react'
import Link from 'next/link'
import { useMenu } from '@/components/contexts/NavBar'
import { categories, categorias } from './consts'
import { useLanguages } from '@/components/contexts/LanguageContext'

const UlLinks = () => {

  const { isOn, changeMenu } = useMenu()
  const { language } = useLanguages()

  return <ul className='flex flex-col items-centertext-white w-full lg:items-center     lg:flex-wrap lg:space-x-20 lg:flex-row justify-center'>
    {language === 'en' ?
      (categories.map(([title, url], index) => (
        <li key={index} className='flex justify-between py-[13px] border-b-[1px] lg:border-b-0'
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
      )))}
  </ul>
}

export default UlLinks
