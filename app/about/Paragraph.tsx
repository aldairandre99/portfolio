"use client"

import React from 'react'
import { useLanguages } from '../contexts/LanguageContext'
import { dataEnglish, dataPortuguese } from './const'

const Paragraph = () => {

  const { language } = useLanguages()

  return (
    <>
      <p className='leading-[22px]'>
        {
          language === "en" ? dataEnglish[1] : dataPortuguese[1]
        }
      </p>
    </>
  )
}

export default Paragraph
