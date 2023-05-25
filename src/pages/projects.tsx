import ArrowIcons from "@/components/ArrowIcons"
import Header from "@/components/Header"
import { useState } from "react"

const Projects = () => {

  const [ language, setLanguage ] = useState("en")

  return (
    <>
      <Header language={language} setLanguage={setLanguage}/>
      <h1>
        Projects Page
      </h1>
      <ArrowIcons link={['/about',"/"]}/>
    </>
  )
}

export default Projects