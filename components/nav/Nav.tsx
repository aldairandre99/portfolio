import React from 'react'
import Ul from './Ul'
import Languageicon from './LanguageIcon'
import MenuIcon from './MenuIcon'
import ThemeIcon from './ThemeIcon'

const Nav = () => {

  return (
    <nav className="
        mb-4
        lg:flex
        lg:space-x-20 
        lg:items-center
        lg:mt-10
        lg:mb-32">
      <Ul />
      <div className='flex justify-between items-center p-4 lg:hidden'>
        <MenuIcon />
        <Languageicon />
        <ThemeIcon />
      </div>
    </nav>
  )
}

export default Nav
