"use client"

import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'
import { MenuProvider } from '../components/contexts/NavBar'
import { LanguageProvider } from '../components/contexts/LanguageContext'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
    >
      <LanguageProvider>
        <MenuProvider>
          {children}
        </MenuProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default Providers
