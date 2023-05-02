import React from 'react'

const dataEnglish = [
  "My History",
  `
  Aldair Dos Santos Andre. Born on December 30, 1999, in Angola, a country in southern Africa.
  I finished high school in science in 2017, where I started to create my first scripts, and it was also at that time that I started to have contacts with my first image editing tools like Photoshop and Gimp.
  Currently concerned with improving my skills as a Front End Web and Mobile Developer, UI/UX Designer and Back End.
  `
]

const dataPortuguese = [
  "Minha Historia",
  `Aldair Dos Santos André. Nasceu a 30 de Dezembro de 1999, natural de Angola, país do sul de África.Concluí o ensino médio em ciências em 2017, onde comecei a criar meus primeiros scripts, e foi também nessa época que comecei a ter contatos com minhas primeiras ferramentas de edição de imagem como Photoshop e Gimp.Atualmente preocupado em aprimorar minhas habilidades como Desenvolvedor Front End Web e Mobile,UI/UX Designer e Back End.
  `
]

interface props {
  language : string
}

const About = ({ language } : props) => {
  return (
    <>
      <section className='flex flex-col items-center mt-[38px]'>
        <h1 className='mb-[18px] text-[40px]'>
          {
            language === "en" ? dataEnglish[0] : dataPortuguese[0]
          }
        </h1>
        <article className='px-[38px] text-justify'>
          <p className='leading-[22px]'>
            {
              language === "en" ? dataEnglish[1] : dataPortuguese[1]
            }
          </p>
        </article>
      </section>
    </>
  )
}

export default About  