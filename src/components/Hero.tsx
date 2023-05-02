import Image from 'next/image'
import Avatar from '../../public/images/aldair-andre.png'

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

interface props {
  language : string
}

const Hero = ({ language } : props) => {
  return(
    <>
      <section className="hero">
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
          <p className='mt-[12px] px-[60px] font-semibold text-center'>
            {
              language === 'en' ? dataEnglish[2] : dataPortuguese[2]
            }
          </p>
        </div>
        <div className='mx-auto mt-[38px] text-center'>
          <button className='w-fit py-[15px] px-[80px] bg-gradient-to-l from-[#9E3DFF] to-[#F30EDC] rounded-full font-poppins'>
            {
              language === 'en' ? dataEnglish[3] : dataPortuguese[3]
            }
          </button>
        </div>
      </section>
    </>
  )
}


export default Hero