"use client"
import { motion } from "framer-motion";
import React from "react";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.8, delay: 0.3 }}
      className="hidden lg:block lg:w-full lg:absolute lg:top-auto lg:left-0 lg:mt-36">
      <div className="w-full h-20 bg-white absolute shadow-md -rotate-1 right-0 top-3">
        <div className="w-1/2 h-full flex justify-between items-center justify-items-center text-black mx-auto">
          <p>WEBSITES</p>
          <p>MOBILE APPS</p>
          <p>DESKTOP APPS</p>
          <p>UI/UX</p>
        </div>
      </div>
      <div className="w-full h-24 bg-gradient-to-l from-[#9E3DFF] to-[#F30EDC]" />
    </motion.div>
  );
};

export default Index;
