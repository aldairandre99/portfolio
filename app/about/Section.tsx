import React from 'react'
import Title from './Title'
import Paragraph from './Paragraph'


const Section = () => {
  return (
    <section className='flex flex-col items-center mt-[38px]' id='about'>
      <Title/>
      <article className='px-[38px] text-justify'>
        <Paragraph/>
      </article>
    </section>
  )
}

export default Section
