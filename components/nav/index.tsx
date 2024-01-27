import React from 'react'
import Nav from './Nav'
import Languageicon from './Languageicon'
import MobileMenu from './MobileMenu'
import MobileIcons from './MobileIcons'


const Index = () => {


  return (

    <header className='relative' suppressHydrationWarning>
      <Nav />
      <Languageicon hidden={true}>
        <MobileIcons hidden={true}/>
      </Languageicon>
      <MobileMenu />
    </header>

  )
}

export default Index
