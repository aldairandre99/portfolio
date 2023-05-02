import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='dark:bg-gray-300 dark:text-slate-100 font-poppins'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
