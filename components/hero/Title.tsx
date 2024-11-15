"use client";

import React from "react";

import { dataEnglish, dataPortuguese } from "./const";

import { useLanguages } from "@/components/contexts/LanguageContext";

const Title = () => {
  const { language } = useLanguages();

  return (
    <div className="mt-9 lg:mt-0">
      <p className="text-base">
        {language === "en" ? dataEnglish[0] : dataPortuguese[0]}
      </p>
      <h1 className="text-4xl md:text-[40px] font-bold my-3">
        {language === "en" ? dataEnglish[1] : dataPortuguese[1]}
        <span className="block gradient-text mt-3">Aldair André</span>
      </h1>
      <p className="w-auto mx-auto text-base mb-3">
        {language === "en" ? dataEnglish[2] : dataPortuguese[2]}
      </p>
    </div>
  );
};

export default Title;
