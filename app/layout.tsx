import type { Metadata } from "next"
import { Poppins } from "next/font/google"

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
    <html lang="en" className={int.className} suppressHydrationWarning>
      <body className="dark:bg-gray-300 dark:text-slate-100">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
