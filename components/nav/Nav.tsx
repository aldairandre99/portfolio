import React from 'react'
import UlLinks from './ul-links'

const Nav = () => {

  return (
    <nav className="
        hidden
        lg:flex 
        lg:space-x-20 
        lg:items-center
        lg:mt-10
        lg:mb-32">
      <UlLinks/>
    </nav>
  )
}

export default Nav
