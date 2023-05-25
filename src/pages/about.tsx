import About from "@/components/About"
import ArrowIcons from "@/components/ArrowIcons"
import Header from "@/components/Header"

import { useState } from "react"

const about = () => {
  const [language, setLanguage] = useState("en")

  return (
    <>
      <Header/>
      <About language={language}/>
      <ArrowIcons link={['/','/projects']}/>
    </>
  )
}

export default about