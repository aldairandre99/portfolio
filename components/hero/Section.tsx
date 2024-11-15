import React from "react";
import { Image } from "@nextui-org/image";

import Title from "./Title";
import { CustomButton as Button } from "./Button";

import Avatar from "@/public/aldair-andre.png";

const Section = () => {
  return (
    <>
      <section className="max-w-sm text-center mx-auto lg:text-left lg:flex lg:flex-row lg:justify-center lg:max-w-4xl lg:mt-32">
        <div className="flex justify-center lg:items-center lg:mr-32">
          <Image alt="Aldair André" src={Avatar.src} width={300} />
        </div>
        <div className="lg:w-2/3">
          <Title />
          <Button />
        </div>
      </section>
    </>
  );
};

export default Section;
