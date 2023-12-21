"use client"

import React from 'react'
import { useLanguages } from '../../contexts/LanguageContext'
import { dataEnglish,dataPortuguese } from './const'

const Title = () => {

  const { language } = useLanguages()

  return (
    <>
      <h1 className='text-[40px] font-bold text-center'>
        {
          language === 'en' ? dataEnglish[0] : dataPortuguese[0]
        }
        <span className='block gradient-text'>Aldair André</span>
      </h1>
      <p className='max-w-[234px] mx-auto mt-[12px] text-base font-semibold text-center'>
        {
          language === 'en' ? dataEnglish[2] : dataPortuguese[2]
        }
      </p>
    </>
  )
}

export default Title
