"use client"

import React, { ReactNode } from 'react'
import { LanguageProvider } from '../components/contexts/LanguageContext'

export function Providers({ children }: { children: ReactNode }) {
  return (
      <LanguageProvider>
          {children}
      </LanguageProvider>
   
  )
}

export default Providers
