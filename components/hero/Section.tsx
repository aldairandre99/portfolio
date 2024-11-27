"use client"
import React from "react";
import { Image } from "@nextui-org/image";

import Title from "./Title";
import { CustomButton as Button } from "./Button";

import Avatar from "@/public/aldair-andre.png";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <>
      <section className="max-w-sm text-center mx-auto lg:text-left lg:flex lg:flex-row lg:justify-center lg:max-w-4xl lg:mt-32">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center lg:items-center lg:mr-32">
          <Image alt="Aldair André" src={Avatar.src} width={300} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:w-2/3">
          <Title />
          <Button />
        </motion.div>
      </section>
    </>
  );
};

export default Section;
