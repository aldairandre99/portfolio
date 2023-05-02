import Hero from "@/components/Hero";
import Header from "@/components/Header";
import { useState } from "react";
import About from "@/components/About";


export default function Home() {

  const [ language, setLanguase ] = useState<string>('en')
  
  return (
    <main>
      <Header language={language} setLanguage={setLanguase}/>
      <Hero language={language}/>
      <About language={language}/>
    </main>
  )
}
