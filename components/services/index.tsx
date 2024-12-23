"use client";
import React, { useContext } from "react";
import { Button } from "@nextui-org/button";

import { LanguageContext } from "../contexts/LanguageContext";
import DefaultLayout from "../defaultLayout";

import { services, servicos } from "./const";
import { motion } from "framer-motion";
import Link from "next/link";

const Index = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className="flex flex-col lg:max-w-4xl lg:mx-auto lg:flex-row lg:justify-between" id="services">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ease: 'easeIn', duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-8 lg:w-2/5">
          <h1 className="text-[40px] font-bold mb-6">
            {language === "en" ? services[0] : servicos[0]}
          </h1>
          <p className="mb-4 ">
            {language === "en" ? services[1] : servicos[1]}
          </p>
          <Button
            className="hidden lg:block bg-gradient-to-l from-[#9E3DFF] to-[#F30EDC] font-poppins text-xl font-normal mt-3 lg:mt-0 lg:mr-3"
            radius="full"
            size="lg"
          >
            {language === "en" ? services[2] : servicos[2]}
          </Button>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, x: 100 }}
          transition={{ ease: 'easeIn', duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col space-y-11 lg:w-2/5 text-xl font-medium">
          <li>WEBSITES</li>
          <li>MOBILE APPS</li>
          <li>DESKTOP APPS</li>
          <li>UI/UX</li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ease: 'easeIn', duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Button
            className="lg:hidden bg-gradient-to-l from-[#9E3DFF] to-[#F30EDC] font-poppins text-xl font-normal mt-3 lg:mt-0 lg:mr-3"
            radius="full"
            size="lg"
          >
            {language === "en" ? services[2] : servicos[2]}
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default Index;