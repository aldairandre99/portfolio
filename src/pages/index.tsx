import Hero from "@/components/Hero";
import Header from "@/components/Header";
import { useState } from "react";


export default function Home() {

  const [ language, setLanguase ] = useState<string>('en')
  
  return (
    <main>
      <Header/>
      <Hero/>
    </main>
  )
}
