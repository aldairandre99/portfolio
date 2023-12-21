"use client"

import React from 'react'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { 
  Bars3Icon,
  MoonIcon,
  SunIcon,
  LanguageIcon
} from '@heroicons/react/24/solid';
import { useLanguages } from '../../contexts/LanguageContext';

const Languageincon = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { language, changeLanguage } = useLanguages()

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div className='flex justify-between pt-[21px] pb-[27.3px] ml-[35px] mr-[35.3px]'>

      <LanguageIcon className="w-6 h-6" onClick={() => { language === "en" ? changeLanguage("pt") : changeLanguage("en") }} />

      <div className='flex items-center'>

        {
          currentTheme === 'dark' ?
            <SunIcon className='w-6 h-6 stroke-gray-300 mr-[10px]' onClick={() => { setTheme("light") }} />
            :
            <MoonIcon className='w-6 h-6 stroke-gray-300 mr-[10px]' onClick={() => { setTheme("dark") }} />

        }

        <Bars3Icon className='w-6 h-6 stroke-gray-300' />

      </div>


    </div>
  )
}

export default Languageincon
