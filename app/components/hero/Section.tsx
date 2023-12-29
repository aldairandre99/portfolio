import React, { Suspense } from 'react'
import Image from 'next/image'
import Avatar from '../../images/aldair-andre.png'
import ButtonText from './ButtonText'
import Title from './Title'
import LoadingHero from './loading'

const Section = () => {

  return (
    <Suspense fallback={<LoadingHero />}>
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
          <Title />
        </div>
        <div className='w-full mt-[38px] text-center'>
          <button className='w-full py-[15px] px-[0px] bg-gradient-to-l from-[#9E3DFF] to-[#F30EDC] rounded-full font-poppins text-xl font-normal'>
            <ButtonText />
          </button>
        </div>
      </section>
    </Suspense>
  )
}

export default Section
