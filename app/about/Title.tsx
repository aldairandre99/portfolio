"use client"

import React from 'react'
import { useLanguages } from '../../components/contexts/LanguageContext'
import { dataEnglish, dataPortuguese } from './const'


const Title = () => {
  
  const { language } = useLanguages()

  return (
    <h1 className='mb-[18px] text-[40px]'>
      {
        language === "en" ? dataEnglish[0] : dataPortuguese[0]
      }
    </h1>
  )
}

export default Title
