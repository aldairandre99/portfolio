"use client"
import Link from "next/link";
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { linksInternal, linksInternos, p, pp } from './const'
import GithubIcon from '@/public/icons/github.svg'
import InstagramIcon from '@/public/icons/instagram.svg'
import Linkedin from '@/public/icons/linkedin.svg'
import WhatsappIcon from '@/public/icons/whatsapp.svg'
import Image from "next/image";

const Footer = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div className="py-24">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col space-y-6 lg:w-2/4">
          <h1 className="text-[30px] font-bold">Aldair André</h1>
          <p>
            {
              language === 'en' ? p : pp
            }
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <ul className="hidden lg:flex lg:space-x-8">
            <li>
              <Link href={`/`}>
                {
                  language === 'en' ? linksInternal[0] : linksInternos[0]
                }
              </Link>
            </li>
            <li>
              <Link href={`#${linksInternal[1]}`}>
                {
                  language === 'en' ? linksInternal[1] : linksInternos[1]
                }
              </Link>
            </li>
            <li>
              <Link href={`#${linksInternal[2]}`}>
                {
                  language === 'en' ? linksInternal[2] : linksInternos[2]
                }
              </Link>
            </li>
          </ul>
          <ul className="flex flex-row flex-wrap space-x-8 lg:flex-nowrap">
            <li>
              <Link href={`https://www.linkedin.com/in/aldair-andr%C3%A9/`} target="_blank">
                <Image src={Linkedin} alt="Linkedin icon" width={40} height={40} />
              </Link>
            </li>
            <li>
              <Link href={`https://wa.me/244924569259`} target="_blank">
                <Image src={WhatsappIcon} alt="Whatsapp icon" width={40} height={40} />
              </Link>
            </li>
            <li>
              <Link href={`https://www.instagram.com/aldairandre9/`} target="_blank">
                <Image src={InstagramIcon} alt="Instagram icon" width={40} height={40} />
              </Link>
            </li>
            <li>
              <Link href={`https://github.com/aldairandre99`} target="_blank">
                <Image src={GithubIcon} alt="Github icon" width={40} height={40} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
