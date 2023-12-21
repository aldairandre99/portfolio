'use client'

import { ReactNode, createContext, useState, useContext } from "react";

  interface MenuContextProps {
    isOn : boolean,
    changeMenu : (isOn : boolean) => void
  }

  interface MenuProviderProps {
    children : ReactNode
  }

export const MenuContext = createContext({} as MenuContextProps)

export const MenuProvider  = ({ children } : MenuProviderProps) => {
  
  const [ isOn, setIsOn ] = useState<boolean>(false)

  const changeMenu = (isOn : boolean) => setIsOn(!isOn)

  return(
    <MenuContext.Provider value={{isOn,changeMenu}}>
      { children }
    </MenuContext.Provider>
  )
}

export const useMenu = ():MenuContextProps => {
  const context = useContext(MenuContext)
  return context
}