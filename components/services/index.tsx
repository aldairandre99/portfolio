"use client";
import React, { useContext } from "react";
import { Button } from "@nextui-org/button";

import { LanguageContext } from "../contexts/LanguageContext";
import DefaultLayout from "../defaultLayout";

import { services, servicos } from "./const";

const Index = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="dark:bg-[#273240] w-full mt-6 lg:mt-[240px] pt-28 pb-20">
      <DefaultLayout>
        <div className="flex flex-col lg:max-w-4xl lg:mx-auto lg:flex-row lg:justify-between ">
          <div className="mb-8 lg:w-2/5 lg:mb-0">
            <h1 className="text-[40px] font-bold mb-6">
              {language === "en" ? services[0] : servicos[0]}
            </h1>
            <p className="mb-4 ">
              {language === "en" ? services[1] : servicos[1]}
            </p>
            <Button
              className="hidden lg:block w-auto bg-gradient-to-l from-[#9E3DFF] to-[#F30EDC] font-poppins text-xl font-normal mt-3 lg:mt-0 lg:mr-3"
              radius="full"
              size="lg"
            >
              {language === "en" ? services[2] : servicos[2]}
            </Button>
          </div>
          <ul className="flex flex-col space-y-11 lg:w-2/5 text-xl font-medium">
            <li>WEBSITES</li>
            <li>MOBILE APPS</li>
            <li>DESKTOP APPS</li>
            <li>UI/UX</li>
          </ul>
          <Button
            className="lg:hidden w-auto bg-gradient-to-l from-[#9E3DFF] to-[#F30EDC] font-poppins text-xl font-normal mt-3 lg:mt-0 lg:mr-3"
            radius="full"
            size="lg"
          >
            {language === "en" ? services[2] : servicos[2]}
          </Button>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Index;
