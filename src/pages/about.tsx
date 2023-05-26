import About from "@/components/About"
import ArrowIcons from "@/components/ArrowIcons"
import Header from "@/components/Header"

const about = () => {

  return (
    <>
      <Header/>
      <About/>
      <ArrowIcons link={['/','/projects']}/>
    </>
  )
}

export default about