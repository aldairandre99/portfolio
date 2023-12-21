import React from 'react'

const Nav = () => {
  return (
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
  )
}

export default Nav
