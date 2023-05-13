import { useTheme } from 'next-themes';
import { Dispatch, useEffect, useState } from 'react';
import Image from 'next/image'
import moon from '../../public/images/svg/moon-solid.svg'
import sun from '../../public/images/svg/sun-regular.svg'
import languageIcon from '../../public/images/svg/language.svg'

interface props {
  language : string
  setLanguage : Dispatch<string>
}

const Header = ({ language, setLanguage }:props) => {

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted ] = useState(false)
  
  useEffect(()=>{
    setMounted(true)
  },[])
  
  const currentTheme = theme === 'system' ? systemTheme : theme

  return(
    <header className="w-full">
      <nav className="
        hidden
        lg:flex 
        lg:space-x-20 
        lg:items-center">
        <ul className="
          lg:flex 
          lg:items-center 
          lg:flex-wrap 
          lg:space-x-20"
        >
          <li>Home</li>
          <li>About</li>
          <li>Experiences</li>
          <li>Projects</li>
        </ul>
      </nav>
      <div className='flex justify-between pt-[21px] pb-[27.3px] ml-[35px] mr-[35.3px]'>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" onClick={() => { language === "en" ? setLanguage("pt") : setLanguage("en")}}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>


        <div className='flex items-center'>

          {
            currentTheme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-[9.74px]" onClick={() => setTheme("light")}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-[9.74px]" onClick={() => setTheme("dark")}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )
          }

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </div>

        
      </div>
    </header>
  )
}

export default Header