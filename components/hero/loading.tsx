import React from "react";

const LoadingHero = () => {
  return (
    <section className="flex flex-col items-center max-w-[290px] mx-auto">
      <div className="w-[179px] h-[184px] dark:bg-gray-100 bg-gray-light-100 rounded-full mt-9" />
      <div className="mt-[38px] w-48 h-7 dark:bg-gray-100 bg-gray-light-100" />
      <div className="mt-[10px] w-48 h-7 dark:bg-gray-100 bg-gray-light-100" />
      <div className="mt-[38px] w-40 h-7 dark:bg-gray-100 bg-gray-light-100" />
      <div className="w-full mt-[38px] text-center">
        <button className="w-full h-16 py-[15px] px-[0px] rounded-full dark:bg-gray-100 bg-gray-light-100" />
      </div>
    </section>
  );
};

export default LoadingHero;
