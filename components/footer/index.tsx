"use client";
import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";

import { LanguageContext } from "../contexts/LanguageContext";

import { linksInternal, linksInternos, p, pp } from "./const";

import GithubIcon from "@/public/icons/github.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import Linkedin from "@/public/icons/linkedin.svg";
import WhatsappIcon from "@/public/icons/whatsapp.svg";
import { motion } from "framer-motion";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container mx-auto max-w-7xl py-24 px-6 flex-grow overflow-x-auto">
      <div className="flex flex-col lg:flex-row justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ease: 'easeIn', duration: 0.5, delay: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col space-y-6 lg:w-2/4">
          <h1 className="text-[30px] font-bold">Aldair André</h1>
          <p>{language === "en" ? p : pp}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ease: 'easeIn', duration: 0.5, delay: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col space-y-8">
          <ul className="hidden lg:flex lg:space-x-8">
            <li>
              <Link href={`/`}>
                {language === "en" ? linksInternal[0] : linksInternos[0]}
              </Link>
            </li>
            <li>
              <Link href={`#${linksInternal[1]}`}>
                {language === "en" ? linksInternal[1] : linksInternos[1]}
              </Link>
            </li>
            <li>
              <Link href={`#${linksInternal[2]}`}>
                {language === "en" ? linksInternal[2] : linksInternos[2]}
              </Link>
            </li>
          </ul>
          <ul className="flex flex-row flex-wrap space-x-8 lg:flex-nowrap">
            <li>
              <Link
                href={`https://www.linkedin.com/in/aldair-andr%C3%A9/`}
                target="_blank"
              >
                <Image
                  alt="Linkedin icon"
                  height={40}
                  src={Linkedin}
                  width={40}
                />
              </Link>
            </li>
            <li>
              <Link href={`https://wa.me/244924569259`} target="_blank">
                <Image
                  alt="Whatsapp icon"
                  height={40}
                  src={WhatsappIcon}
                  width={40}
                />
              </Link>
            </li>
            <li>
              <Link
                href={`https://www.instagram.com/aldairandre9/`}
                target="_blank"
              >
                <Image
                  alt="Instagram icon"
                  height={40}
                  src={InstagramIcon}
                  width={40}
                />
              </Link>
            </li>
            <li>
              <Link href={`https://github.com/aldairandre99`} target="_blank">
                <Image
                  alt="Github icon"
                  height={40}
                  src={GithubIcon}
                  width={40}
                />
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
