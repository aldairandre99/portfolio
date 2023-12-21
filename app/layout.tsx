import type { Metadata } from "next"
import { Poppins } from "next/font/google"

const int = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  style: 'normal',
})

import './globals.css'
import { LanguageProvider } from "./contexts/LanguageContext"

export const metadata: Metadata = {
  title: 'Aldair André',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={int.className}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
