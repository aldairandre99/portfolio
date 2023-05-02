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
    <header className="
      w-full 
      lg:flex 
      lg:justify-center 
      lg:items-center 
      lg:py-8">
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
        <div className=' hidden lg:block'>
          {
            theme === "dark" ? 
            <Image
              src={sun}
              alt='sun'
              onClick={() => setTheme("light")}
            /> : 
            <Image
              src={moon}
              alt='Moon'
              onClick={() => setTheme("dark")}
            /> 
          }
        </div>
      </nav>
      <div className='flex justify-between pt-[21px] pb-[27.3px] ml-[35px] mr-[35.3px]'>
        <h2 className='uppercase'>{language}</h2>
        <Image
          src={languageIcon}
          alt='language'
          className='stroke-purple-950'
          onClick={() => language === 'en' ? setLanguage('pt') : setLanguage('en')}
        />
      </div>
    </header>
  )
}

export default Header