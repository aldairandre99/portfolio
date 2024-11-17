"use client";
import React, { useContext } from "react";
import { Image } from "@nextui-org/image";

import { LanguageContext } from "../contexts/LanguageContext";

import { project, projeto } from "./const";

import imageSecoth from "@/public/project2.jpg";
import imagetreeth from "@/public/project3.jpg";
import imageForth from "@/public/project4.jpg";

const Projects = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="pt-8 lg:max-w-4xl mx-auto lg:pt-28">
      <h1 className="text-[40px] font-bold mb-8">
        {language === "en" ? project[0] : projeto[0]}
      </h1>
      <div className="lg:flex lg:flex-row lg:space-x-4 lg:mt-28">
        <div className="flex flex-col space-y-6 mb-10 md:items-center">
          <h1 className="text-2xl font-bold">
            {language === "en" ? project[1] : projeto[1]}
          </h1>
          <p>{language === "en" ? project[2] : projeto[2]}</p>
          <Image alt="project image" src={imageForth.src} width={300} />
          <h2 className="text-2xl font-bold">
            {language === "en" ? project[3] : projeto[3]}
          </h2>
        </div>
        <div className="flex flex-col space-y-6 mb-10 md:items-center">
          <h1 className="text-2xl font-bold">
            {language === "en" ? project[4] : projeto[4]}
          </h1>
          <p>{language === "en" ? project[5] : projeto[5]}</p>
          <Image alt="project image" src={imageSecoth.src} width={300} />
          <h2 className="text-2xl font-bold">
            {language === "en" ? project[6] : projeto[6]}
          </h2>
        </div>
        <div className="flex flex-col space-y-6 mb-10 md:items-center">
          <h1 className="text-2xl font-bold">
            {language === "en" ? project[7] : projeto[7]}
          </h1>
          <p>{language === "en" ? project[8] : projeto[8]}</p>
          <Image alt="project image" src={imagetreeth.src} width={300} />
          <h2 className="text-2xl font-bold">
            {language === "en" ? project[9] : projeto[9]}
          </h2>
        </div>
        <div className="flex flex-col space-y-6 mb-10 md:items-center">
          <h1 className="text-2xl font-bold">
            {language === "en" ? project[10] : projeto[10]}
          </h1>
          <p>{language === "en" ? project[11] : projeto[11]}</p>
          <Image alt="project image" src={imageForth.src} width={300} />
          <h2 className="text-2xl font-bold">
            {language === "en" ? project[12] : projeto[12]}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
