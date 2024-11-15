"use client";

import React from "react";
import { LanguageIcon } from "@heroicons/react/24/solid";

import { useLanguages } from "@/components/contexts/LanguageContext";

const Index = () => {
  const { language, changeLanguage } = useLanguages();

  return (
    <LanguageIcon
      className="cursor-pointer hover:bg-[454e5]"
      height={22}
      width={22}
      onClick={() => {
        language === "en" ? changeLanguage("pt") : changeLanguage("en");
      }}
    />
  );
};

export default Index;
