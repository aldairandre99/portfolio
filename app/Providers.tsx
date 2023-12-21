"use client"

import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

export function Providers({ children }:{children : ReactNode}) {
  return <ThemeProvider enableSystem={false} attribute="class">{children}</ThemeProvider>
}

export default Providers
