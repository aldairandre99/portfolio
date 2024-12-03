"use client";
import React from "react";
import { Button } from "@nextui-org/button";

import { dataEnglish, dataPortuguese } from "./const";

import { useLanguages } from "@/components/contexts/LanguageContext";
import Link from "next/link";

export const CustomButton = () => {
  const { language } = useLanguages();

  return (
    <div className="flex flex-col lg:flex-row ">
      <Button
        className="w-full bg-gradient-to-l from-[#9E3DFF] to-[#F30EDC] font-poppins text-xl font-normal mt-3 lg:mt-0 lg:mr-3"
        radius="full"
        size="lg"
      >
        {
          language === 'en' ? (
            <Link
              href='/Aldair-Andre-Cv-English.pdf'
              target="_blank"
            >
              {dataEnglish[4]}
            </Link>
          ) : (
            <Link
                href='/Aldair-Andre-Cv-PT.pdf'
              target="_blank"
            >
              {dataPortuguese[4]}
            </Link>
          )
        }
      </Button>
      <Button
        className="w-full text-xl font-normal mt-5 lg:mt-0 "
        radius="full"
        size="lg"
        variant="bordered"
      >
        <Link 
          href={`https://wa.me/244924569259`}
        >
          {language === "en" ? dataEnglish[3] : dataPortuguese[3]}
        </Link>
      </Button>
    </div>
  );
};
