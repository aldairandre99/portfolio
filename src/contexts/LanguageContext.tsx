import { ReactNode, createContext, useState, useContext } from "react";

  interface LanguageContextProps {
    language : string,
    changeLanguage : (language : string) => void
  }

  interface LanguageProviderProps {
    children : ReactNode
  }

export const LanguageContext = createContext({} as LanguageContextProps)

export const LanguageProvider  = ({ children } : LanguageProviderProps) => {
  
  const [ language, setLanguage ] = useState<string>('en')

  const changeLanguage = (language : string) => setLanguage(language)

  return(
    <LanguageContext.Provider value={{language,changeLanguage}}>
      { children }
    </LanguageContext.Provider>
  )
}

export const useLanguages = () => {
  const context = useContext(LanguageContext)
  return context
}