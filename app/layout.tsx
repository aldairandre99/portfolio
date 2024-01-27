import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Header from '@/components/nav'

const int = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  style: 'normal',
})

import './globals.css'
import Providers from "./Providers"

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${int.className} dark:bg-gray-300 dark:text-slate-100`}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
