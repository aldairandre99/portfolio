import Image from 'next/image'
import Avatar from '../images/aldair-andre.png'
import Link from 'next/link'
import { useLanguages } from '@/contexts/LanguageContext'

const dataEnglish = [
  "Hey, i'm",
  "Aldair André",
  "Self-taught with different areas of activity",
  "Getting started"
]
const dataPortuguese = [
  "Olá, eu sou",
  "Aldair André",
  "Autodidata com diferentes áreas de atividade",
  "Incicar"
]

const Hero = () => {

  const { language } = useLanguages()

  return(
    <>
      <section className="hero max-w-[290px] mx-auto">
        <Image
          src={Avatar}
          alt='Aldair André'
          width={179}
          height={184}
          priority
          className='block mx-auto'
        />
        <div className='mt-[38px] text-clip'>
          <h1 className='text-[40px] font-bold text-center'>
            {
              language === 'en' ? dataEnglish[0] : dataPortuguese[0]
            }
            <span className='block gradient-text'>Aldair André</span> 
          </h1>
          <p className='max-w-[234px] mx-auto mt-[12px] text-base font-semibold text-center'>
            {
              language === 'en' ? dataEnglish[2] : dataPortuguese[2]
            }
          </p>
        </div>
        <div className='w-full mt-[38px] text-center'>
            <button className='w-full py-[15px] px-[0px] bg-gradient-to-l from-[#9E3DFF] to-[#F30EDC] rounded-full font-poppins text-xl font-normal'>
              <Link href='#about'>
                {
                  language === 'en' ? dataEnglish[3] : dataPortuguese[3]
                }
              </Link>
            </button>
        </div>
      </section>
    </>
  )
}


export default Hero