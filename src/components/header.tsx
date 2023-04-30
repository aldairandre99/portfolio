import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import moon from '../svg/moon-solid.svg'
import sun from '../svg/sun-regular.svg'

const Header = () => {

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted ] = useState(false)
  
  useEffect(()=>{
    setMounted(true)
  },[])
  
  const currentTheme = theme === 'system' ? systemTheme : theme

  return(
    <header className="w-full flex justify-center items-center py-8">
      <nav className="flex space-x-20 items-center">
        <ul className="flex items-center flex-wrap space-x-20">
          <li className=''>Home</li>
          <li>About</li>
          <li>Experiences</li>
          <li>Projects</li>
        </ul>
        <div>
          {
            theme === "dark" ? 
            <Image
              src={sun}
              alt='sun'
              onClick={() => setTheme("light")}
            /> : 
            <Image
              src={moon}
              alt='moon'
              onClick={() => setTheme("dark")}
            /> 
          }
        </div>
      </nav>
    </header>
  )
}

export default Header