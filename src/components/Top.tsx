import { HEADING, SUBHEADING } from "@/app/constants/Dummy";
import { MAIN_IMAGE } from "@/app/constants/imageLinks";
import React from "react";

const Top = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img className="w-full h-full object-cover" src={MAIN_IMAGE} alt="Main" />

      <div className="absolute inset-0 bg-black/30" />

    
      <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24 lg:pb-16">
        <div className="text-white max-w-7xl mx-auto w-full text-center">
          <h1 className="text-2xl -ml-[720px] sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6 leading-tight ">
            {HEADING}
          </h1>
          <p className="text-base text-left ml-6 sm:text-lg mb-6 sm:mb-8 md:mb-10 lg:mb-12 w-full sm:w-11/12 md:w-3/4 lg:w-2/3"> 
            {SUBHEADING}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Top;
