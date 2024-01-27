"use client"
import React from 'react'
import { useLanguages } from '@/components/contexts/LanguageContext'
import { dataEnglish,dataPortuguese } from './const'
import Link from 'next/link'

const ButtonText = () => {
  
  const { language } = useLanguages()

  return (
    <Link href='/about'>
      {
        language === 'en' ? dataEnglish[3] : dataPortuguese[3]
      }
    </Link>
  )
}

export default ButtonText
