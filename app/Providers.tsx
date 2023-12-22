"use client"

import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'
import { MenuProvider } from './contexts/NavBar'
import { LanguageProvider } from './contexts/LanguageContext'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <LanguageProvider>
        <MenuProvider>
          {children}
        </MenuProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default Providers
