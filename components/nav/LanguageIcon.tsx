"use client"

import React, { ReactNode } from 'react'
import {
  LanguageIcon
} from '@heroicons/react/24/solid';
import { useLanguages } from '@/components/contexts/LanguageContext';

const Languageincon = () => {

  const { language, changeLanguage } = useLanguages()

  return (
    <div>
      <LanguageIcon className="w-6 h-6 lg:mr-10" onClick={() => { language === "en" ? changeLanguage("pt") : changeLanguage("en") }} />
    </div>
  )
}

export default Languageincon
